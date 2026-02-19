// Simple Node.js server for AI functionality
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 8080;

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

// AI endpoint with enhanced security and monitoring
app.post('/api/ai', async (req, res) => {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const startTime = Date.now();
  
  try {
    const { prompt, model = 'gpt-3.5-turbo', max_tokens = 1000, temperature = 0.7, agent = 'unknown' } = req.body;
    
    // Log request for monitoring
    console.log(`[${requestId}] AI Request - Agent: ${agent}, IP: ${req.ip}, Prompt length: ${prompt?.length || 0}`);
    
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
    
    // Simulate processing time with variability based on load
    const baseDelay = 500;
    const variableDelay = Math.random() * 1500;
    const loadDelay = Math.min(500, Date.now() % 1000); // Simulate server load
    await new Promise(resolve => setTimeout(resolve, baseDelay + variableDelay + loadDelay));
    
    // Determine response type based on prompt content
    let responseType = 'default';
    const promptLower = prompt.toLowerCase();
    
    if (promptLower.includes('character') || promptLower.includes('person')) {
      responseType = 'character';
    } else if (promptLower.includes('story') || promptLower.includes('plot')) {
      responseType = 'story';
    } else if (promptLower.includes('world') || promptLower.includes('setting')) {
      responseType = 'worldbuilding';
    }
    
    const response = {
      response: mockAIResponses[responseType],
      model,
      usage: {
        prompt_tokens: Math.floor(prompt.length / 4),
        completion_tokens: Math.floor(mockAIResponses[responseType].length / 4),
        total_tokens: Math.floor((prompt.length + mockAIResponses[responseType].length) / 4)
      },
      timestamp: new Date().toISOString(),
      requestId,
      processingTime: Date.now() - startTime,
      agent
    };
    
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
        average: require('os').loadavg(),
        cpus: require('os').cpus().length
      }
    },
    endpoints: {
      ai: '/api/ai',
      batch: '/api/ai/batch',
      health: '/health'
    },
    rateLimits: {
      global: '100 requests per 15 minutes',
      ai: '10 requests per minute', 
      batch: '3 requests per minute'
    }
  });
});

// Request status monitoring endpoint
app.get('/api/status', (req, res) => {
  res.json({
    message: 'Server is running and accepting requests',
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    features: [
      'Enhanced rate limiting',
      'Request validation and security',
      'Batch processing support',
      'Request monitoring and logging',
      'Suspicious content detection'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`AI Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`AI endpoint: http://localhost:${PORT}/api/ai`);
});

export default app;
