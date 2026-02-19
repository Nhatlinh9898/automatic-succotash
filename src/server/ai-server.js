// Enhanced AI Server with integrated services
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import os from 'os';
import ollamaService from '../services/ollamaService.js';
import agentSystem from '../services/agentSystem.js';
import libraryManager from '../services/libraryManager.js';
import MicroAgentSystem from '../services/microAgentSystem.js';
import SubAgentSystem from '../services/subAgentSystem.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize services
const microAgentSystem = MicroAgentSystem;
const subAgentSystem = SubAgentSystem;

// Service status tracking
const serviceStatus = {
  ollamaService: 'initialized',
  agentSystem: 'initialized', 
  libraryManager: 'initialized',
  microAgentSystem: 'initialized',
  subAgentSystem: 'initialized'
};

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced rate limiting
const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message: { error: message },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      console.warn(`Rate limit exceeded for IP: ${req.ip}, Path: ${req.path}`);
      res.status(429).json({ 
        error: message,
        retryAfter: Math.ceil(windowMs / 1000),
        endpoint: req.path
      });
    }
  });
};

// Multiple rate limiting tiers
const globalLimiter = createRateLimiter(
  15 * 60 * 1000, // 15 minutes
  100, // 100 requests per 15 minutes
  'Too many requests from this IP, please try again later.'
);

const aiEndpointLimiter = createRateLimiter(
  60 * 1000, // 1 minute
  10, // 10 requests per minute
  'AI endpoint rate limit exceeded. Please wait before making another request.'
);

const strictLimiter = createRateLimiter(
  60 * 1000, // 1 minute  
  3, // 3 requests per minute for sensitive operations
  'Strict rate limit exceeded. This endpoint has tighter restrictions.'
);

// Apply rate limiters
app.use(globalLimiter);
app.post('/api/ai', aiEndpointLimiter);

// Mock AI responses for demonstration
const mockAIResponses = {
  'character': 'Based on your character description, I suggest developing their backstory with childhood experiences that shaped their current personality. Consider their fears, desires, and internal conflicts.',
  'story': 'Your story prompt has great potential. I recommend establishing a clear inciting incident, developing rising tension, and creating a satisfying resolution that ties back to your theme.',
  'worldbuilding': 'For worldbuilding, focus on creating consistent rules for your universe. Consider the political systems, cultural norms, and how magic/technology affects daily life.',
  'default': 'This is an interesting prompt! Let me help you explore this idea further with creative suggestions and detailed analysis.'
};

// Enhanced AI endpoint with Ollama integration
app.post('/api/ai', async (req, res) => {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const startTime = Date.now();
  
  try {
    const { prompt, model = 'llama3.2:3b', max_tokens = 1000, temperature = 0.7, agent = 'unknown', useAgentSystem = true } = req.body;
    
    // Log request for monitoring
    console.log(`[${requestId}] AI Request - Model: ${model}, Agent: ${agent}, IP: ${req.ip}, Prompt length: ${prompt?.length || 0}`);
    
    // Validate input
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid prompt provided' });
    }
    
    if (prompt.length > 5000) {
      return res.status(400).json({ error: 'Prompt too long. Maximum 5000 characters allowed.' });
    }
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /data:text\/html/gi,
      /eval\s*\(/gi,
      /function\s*\(/gi
    ];
    
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(prompt));
    if (hasSuspiciousContent) {
      console.warn(`[${requestId}] Suspicious content detected from IP: ${req.ip}`);
      return res.status(400).json({ error: 'Invalid content detected' });
    }
    
    let response;
    let detectedAgent = agent;
    
    // Use Agent System if enabled
    if (useAgentSystem) {
      try {
        detectedAgent = agentSystem.detectAgent(prompt);
        console.log(`[${requestId}] Detected agent: ${detectedAgent}`);
        
        // Process with specialized agent
        const agentInstance = agentSystem.agents.get(detectedAgent);
        if (agentInstance && typeof agentInstance.process === 'function') {
          const agentResult = await agentInstance.process(prompt, { model, max_tokens, temperature });
          response = {
            response: agentResult.response || agentResult.content || agentResult,
            model,
            agent: detectedAgent,
            usage: {
              prompt_tokens: Math.floor(prompt.length / 4),
              completion_tokens: Math.floor((agentResult.response || agentResult || '').length / 4),
              total_tokens: Math.floor((prompt.length + (agentResult.response || agentResult || '').length) / 4)
            },
            timestamp: new Date().toISOString(),
            requestId,
            processingTime: Date.now() - startTime,
            agentDetected: detectedAgent,
            processingMethod: 'agent_system'
          };
        } else {
          // Fallback to Ollama Service
          response = await processWithOllamaService(prompt, { model, max_tokens, temperature, agent: detectedAgent }, requestId, startTime);
        }
      } catch (error) {
        console.warn(`[${requestId}] Agent system failed, falling back to Ollama service: `, error.message);
        response = await processWithOllamaService(prompt, { model, max_tokens, temperature, agent: detectedAgent }, requestId, startTime);
      }
    } else {
      // Use Ollama Service directly
      response = await processWithOllamaService(prompt, { model, max_tokens, temperature, agent }, requestId, startTime);
    }
    
    console.log(`[${requestId}] AI Response completed in ${Date.now() - startTime}ms`);
    res.json(response);
    
  } catch (error) {
    console.error(`[${requestId}] AI API Error:`, error);
    res.status(500).json({ 
      error: 'Internal server error',
      requestId,
      timestamp: new Date().toISOString()
    });
  }
});

// Helper function to process with Ollama Service
async function processWithOllamaService(prompt, options, requestId, startTime) {
  try {
    const result = await ollamaService.generateResponse(prompt, options);
    
    return {
      response: result,
      model: options.model || 'llama3.2:3b',
      agent: options.agent || 'unknown',
      usage: {
        prompt_tokens: Math.floor(prompt.length / 4),
        completion_tokens: Math.floor(result.length / 4),
        total_tokens: Math.floor((prompt.length + result.length) / 4)
      },
      timestamp: new Date().toISOString(),
      requestId,
      processingTime: Date.now() - startTime,
      processingMethod: 'ollama_service'
    };
  } catch (error) {
    console.error(`[${requestId}] Ollama Service Error:`, error);
    throw error;
  }
}

// Batch processing endpoint for multiple requests
app.post('/api/ai/batch', strictLimiter, async (req, res) => {
  const requestId = `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const startTime = Date.now();
  
  try {
    const { requests } = req.body;
    
    if (!Array.isArray(requests) || requests.length === 0) {
      return res.status(400).json({ error: 'Invalid batch request' });
    }
    
    if (requests.length > 5) {
      return res.status(400).json({ error: 'Maximum 5 requests allowed per batch' });
    }
    
    console.log(`[${requestId}] Batch AI Request - Count: ${requests.length}, IP: ${req.ip}`);
    
    const results = [];
    
    // Process requests sequentially to prevent overwhelming
    for (let i = 0; i < requests.length; i++) {
      const request = requests[i];
      
      try {
        // Simulate individual request processing
        await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 700));
        
        const promptLower = request.prompt?.toLowerCase() || '';
        let responseType = 'default';
        
        if (promptLower.includes('character') || promptLower.includes('person')) {
          responseType = 'character';
        } else if (promptLower.includes('story') || promptLower.includes('plot')) {
          responseType = 'story';
        } else if (promptLower.includes('world') || promptLower.includes('setting')) {
          responseType = 'worldbuilding';
        }
        
        results.push({
          index: i,
          success: true,
          response: mockAIResponses[responseType],
          usage: {
            prompt_tokens: Math.floor((request.prompt?.length || 0) / 4),
            completion_tokens: Math.floor(mockAIResponses[responseType].length / 4),
            total_tokens: Math.floor(((request.prompt?.length || 0) + mockAIResponses[responseType].length) / 4)
          }
        });
        
      } catch (error) {
        results.push({
          index: i,
          success: false,
          error: error.message
        });
      }
    }
    
    const response = {
      requestId,
      results,
      totalProcessed: requests.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      processingTime: Date.now() - startTime,
      timestamp: new Date().toISOString()
    };
    
    console.log(`[${requestId}] Batch completed in ${Date.now() - startTime}ms - Success: ${response.successful}/${response.totalProcessed}`);
    res.json(response);
    
  } catch (error) {
    console.error(`[${requestId}] Batch API Error:`, error);
    res.status(500).json({ 
      error: 'Internal server error',
      requestId,
      timestamp: new Date().toISOString()
    });
  }
});

// Multi-agent processing endpoint
app.post('/api/agents/process', strictLimiter, async (req, res) => {
  const requestId = `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const startTime = Date.now();
  
  try {
    const { prompt, agentType, options = {} } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    console.log(`[${requestId}] Agent Process Request - Type: ${agentType || 'auto-detect'}`);
    
    let selectedAgent = agentType;
    let result;
    
    if (!selectedAgent) {
      selectedAgent = agentSystem.detectAgent(prompt);
    }
    
    const agentInstance = agentSystem.agents.get(selectedAgent);
    if (!agentInstance) {
      return res.status(400).json({ error: `Agent '${selectedAgent}' not found` });
    }
    
    // Process with specialized agent
    if (typeof agentInstance.process === 'function') {
      result = await agentInstance.process(prompt, options);
    } else {
      return res.status(500).json({ error: `Agent '${selectedAgent}' process method not available` });
    }
    
    const response = {
      requestId,
      agent: selectedAgent,
      agentName: agentInstance.name,
      prompt,
      result,
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - startTime,
      capabilities: agentInstance.capabilities
    };
    
    console.log(`[${requestId}] Agent processing completed in ${Date.now() - startTime}ms`);
    res.json(response);
    
  } catch (error) {
    console.error(`[${requestId}] Agent Process Error:`, error);
    res.status(500).json({ 
      error: 'Agent processing failed',
      requestId,
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Get available models from Ollama
app.get('/api/models', async (req, res) => {
  try {
    const models = await ollamaService.getAvailableModels();
    const modelDetails = models.map(model => ({
      ...model,
      ...ollamaService.getModelInfo(model.name)
    }));
    
    res.json({
      models: modelDetails,
      total: models.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[Models] Error fetching models:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get available agents
app.get('/api/agents', (req, res) => {
  const agents = [];
  
  agentSystem.agents.forEach((agent, key) => {
    agents.push({
      id: key,
      name: agent.name,
      description: agent.description,
      capabilities: agent.capabilities
    });
  });
  
  res.json({
    agents,
    total: agents.length,
    timestamp: new Date().toISOString()
  });
});

// Library management endpoints
app.get('/api/library/status', (req, res) => {
  try {
    const status = libraryManager.getStatus();
    res.json({
      status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/library/search', async (req, res) => {
  try {
    const { query, type, limit = 10 } = req.body;
    const results = await libraryManager.search(query, { type, limit });
    
    res.json({
      query,
      results,
      total: results.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Micro-agent system endpoint
app.post('/api/micro-agents/process', strictLimiter, async (req, res) => {
  const requestId = `micro_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  try {
    const { task, context, options = {} } = req.body;
    
    if (!task) {
      return res.status(400).json({ error: 'Task is required' });
    }
    
    console.log(`[${requestId}] Micro-agent processing: ${task}`);
    
    const result = await microAgentSystem.processTask(task, context, options);
    
    res.json({
      requestId,
      task,
      result,
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - Date.now()
    });
    
  } catch (error) {
    console.error(`[${requestId}] Micro-agent Error:`, error);
    res.status(500).json({ error: error.message });
  }
});

// Sub-agent system endpoint
app.post('/api/sub-agents/orchestrate', strictLimiter, async (req, res) => {
  const requestId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  try {
    const { mainTask, subTasks, options = {} } = req.body;
    
    if (!mainTask) {
      return res.status(400).json({ error: 'Main task is required' });
    }
    
    console.log(`[${requestId}] Sub-agent orchestration: ${mainTask}`);
    
    const result = await subAgentSystem.orchestrate(mainTask, subTasks, options);
    
    res.json({
      requestId,
      mainTask,
      subTasks,
      result,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error(`[${requestId}] Sub-agent Error:`, error);
    res.status(500).json({ error: error.message });
  }
});

// Service status endpoint
app.get('/api/services/status', async (req, res) => {
  try {
    const models = await ollamaService.getAvailableModels();
    
    res.json({
      services: serviceStatus,
      ollama: {
        status: 'connected',
        availableModels: models,
        defaultModel: ollamaService.defaultModel
      },
      agents: {
        total: agentSystem.agents.size,
        available: Array.from(agentSystem.agents.keys())
      },
      library: {
        status: 'connected',
        manager: 'LibraryManager'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.json({
      services: serviceStatus,
      ollama: {
        status: 'error',
        error: error.message
      },
      agents: {
        total: agentSystem.agents.size,
        available: Array.from(agentSystem.agents.keys())
      },
      library: {
        status: 'connected',
        manager: 'LibraryManager'
      },
      timestamp: new Date().toISOString()
    });
  }
});

// Enhanced health check endpoint with system status
app.get('/health', (req, res) => {
  const memoryUsage = process.memoryUsage();
  const uptime = process.uptime();
  
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    system: {
      uptime: Math.floor(uptime),
      memory: {
        used: Math.round(memoryUsage.heapUsed / 1024 / 1024) + 'MB',
        total: Math.round(memoryUsage.heapTotal / 1024 / 1024) + 'MB',
        external: Math.round(memoryUsage.external / 1024 / 1024) + 'MB'
      },
      load: {
        average: os.loadavg(),
        cpus: os.cpus().length
      }
    },
    endpoints: {
      ai: '/api/ai',
      batch: '/api/ai/batch',
      agents: '/api/agents',
      agentProcess: '/api/agents/process',
      library: '/api/library',
      microAgents: '/api/micro-agents',
      subAgents: '/api/sub-agents',
      services: '/api/services/status',
      health: '/health'
    },
    rateLimits: {
      global: '100 requests per 15 minutes',
      ai: '10 requests per minute', 
      batch: '3 requests per minute',
      agents: '3 requests per minute',
      microAgents: '3 requests per minute',
      subAgents: '3 requests per minute'
    },
    services: {
      aiService: serviceStatus.aiService,
      agentSystem: serviceStatus.agentSystem,
      libraryManager: serviceStatus.libraryManager,
      microAgentSystem: serviceStatus.microAgentSystem,
      subAgentSystem: serviceStatus.subAgentSystem
    }
  });
});

// Request status monitoring endpoint
app.get('/api/status', (req, res) => {
  const queueStats = aiService.queueManager.getStats();
  
  res.json({
    message: 'Enhanced AI Server with integrated services is running',
    timestamp: new Date().toISOString(),
    version: '3.0.0',
    features: [
      'Enhanced rate limiting',
      'Request validation and security',
      'Batch processing support',
      'Request monitoring and logging',
      'Suspicious content detection',
      'Multi-agent system integration',
      'AI Service with queue management',
      'Library management system',
      'Micro-agent processing',
      'Sub-agent orchestration'
    ],
    services: {
      aiService: {
        status: serviceStatus.aiService,
        queue: queueStats
      },
      agentSystem: {
        status: serviceStatus.agentSystem,
        agents: agentSystem.agents.size
      },
      libraryManager: {
        status: serviceStatus.libraryManager
      },
      microAgentSystem: {
        status: serviceStatus.microAgentSystem
      },
      subAgentSystem: {
        status: serviceStatus.subAgentSystem
      }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`AI Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`AI endpoint: http://localhost:${PORT}/api/ai`);
});

export default app;
