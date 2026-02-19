// AI Service for handling AI API calls with enhanced rate limiting and queue management
import RequestQueueManager from './requestQueueManager.js';
import ollamaService from './ollamaService.js';

class AIService {
  constructor() {
    // Configure your AI API endpoint here - using relative URLs for proxy
    this.apiEndpoint = (typeof process !== 'undefined' && process.env.REACT_APP_AI_API_ENDPOINT) || '/api/ai';
    this.batchEndpoint = (typeof process !== 'undefined' && process.env.REACT_APP_AI_BATCH_ENDPOINT) || '/api/ai/batch';
    this.agentsEndpoint = (typeof process !== 'undefined' && process.env.REACT_APP_AI_AGENTS_ENDPOINT) || '/api/agents';
    this.servicesEndpoint = (typeof process !== 'undefined' && process.env.REACT_APP_AI_SERVICES_ENDPOINT) || '/api/services/status';
    this.libraryEndpoint = (typeof process !== 'undefined' && process.env.REACT_APP_AI_LIBRARY_ENDPOINT) || '/api/library';
    this.apiKey = (typeof process !== 'undefined' && process.env.REACT_APP_AI_API_KEY) || '';
    
    // Initialize request queue manager
    this.queueManager = new RequestQueueManager({
      maxConcurrent: 2,              // Giới hạn concurrent requests
      requestsPerSecond: 1,          // 1 request mỗi giây
      maxQueueSize: 20,              // Queue size tối đa
      requestTimeout: 30000,         // 30 seconds timeout
      retryAttempts: 3,              // 3 lần retry
      backoffMultiplier: 2           // Exponential backoff
    });
    
    // Token management settings
    this.tokenSettings = {
      maxPromptLength: 3000,
      maxTokens: 1000,
      enableChunking: true,
      enableCompression: true,
      fallbackToMock: true
    };
    
    // Processing status callbacks
    this.statusCallbacks = [];
    
    // Initialize ollama service
    this.ollamaService = ollamaService;
    
    // Setup queue event listeners
    this.setupQueueEventListeners();
  }

  // Setup queue event listeners
  setupQueueEventListeners() {
    this.queueManager.on('onRequestQueued', (request) => {
      this.notifyStatus({ 
        stage: 'queued', 
        isProcessing: true,
        requestId: request.id,
        agent: request.agent,
        queuePosition: this.queueManager.getStats().queueLength
      });
    });

    this.queueManager.on('onRequestStart', (request) => {
      this.notifyStatus({ 
        stage: 'processing', 
        isProcessing: true,
        requestId: request.id,
        agent: request.agent
      });
    });

    this.queueManager.on('onRequestComplete', ({ request, result, fromCache }) => {
      this.notifyStatus({ 
        stage: 'completed', 
        isProcessing: false,
        requestId: request.id,
        agent: request.agent,
        fromCache,
        result
      });
    });

    this.queueManager.on('onRequestFailed', ({ request, error }) => {
      this.notifyStatus({ 
        stage: 'failed', 
        isProcessing: false,
        requestId: request.id,
        agent: request.agent,
        error: error.message
      });
    });

    this.queueManager.on('onQueueEmpty', () => {
      this.notifyStatus({ 
        stage: 'idle', 
        isProcessing: false
      });
    });
  }

  // Register callback for status updates
  onStatusUpdate(callback) {
    this.statusCallbacks.push(callback);
  }

  // Notify all status callbacks
  notifyStatus(status) {
    this.statusCallbacks.forEach(callback => callback(status));
  }

  // Update token settings
  updateTokenSettings(settings) {
    this.tokenSettings = { ...this.tokenSettings, ...settings };
  }

  async generatePrompt(prompt, options = {}) {
    try {
      // Merge with token settings
      const mergedOptions = { ...this.tokenSettings, ...options };
      
      // Handle token limit by chunking if needed
      const processedPrompt = await this.handleTokenLimit(prompt, mergedOptions);
      
      // Prepare request data for queue
      const requestData = {
        endpoint: this.apiEndpoint,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.apiKey ? `Bearer ${this.apiKey}` : '',
        },
        body: {
          prompt: processedPrompt,
          model: mergedOptions.model || 'gpt-3.5-turbo',
          max_tokens: mergedOptions.maxTokens || 1000,
          temperature: mergedOptions.temperature || 0.7,
          agent: mergedOptions.agent || 'unknown',
          ...mergedOptions
        },
        agent: mergedOptions.agent || 'unknown',
        type: 'ai_request',
        priority: mergedOptions.priority || 'normal'
      };

      // Enqueue request and wait for result
      const result = await this.queueManager.enqueueRequest(requestData);
      
      return result.response || result.choices?.[0]?.message?.content || 'No response received';
      
    } catch (error) {
      console.error('AI Service Error:', error);
      
      // Handle rate limit errors gracefully
      if (error.message.includes('Rate limit') || error.message.includes('429')) {
        throw new Error('AI service is experiencing high demand. Please try again in a few moments.');
      }
      
      throw error;
    }
  }

  // Batch processing for multiple prompts
  async generateBatchPrompts(prompts, options = {}) {
    try {
      const batchRequests = prompts.map((prompt, index) => ({
        prompt,
        model: options.model || 'gpt-3.5-turbo',
        max_tokens: options.maxTokens || 1000,
        temperature: options.temperature || 0.7,
        agent: options.agent || 'batch_agent'
      }));

      const requestData = {
        endpoint: this.batchEndpoint,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.apiKey ? `Bearer ${this.apiKey}` : '',
        },
        body: {
          requests: batchRequests
        },
        agent: options.agent || 'batch_agent',
        type: 'batch_request',
        priority: options.priority || 'low'
      };

      const result = await this.queueManager.enqueueRequest(requestData);
      return result.results || [];
      
    } catch (error) {
      console.error('AI Batch Service Error:', error);
      throw error;
    }
  }

  async handleTokenLimit(prompt, options) {
    const maxPromptLength = options.maxPromptLength || 3000;
    
    if (prompt.length <= maxPromptLength) {
      return prompt;
    }

    // Check if compression is enabled
    if (options.enableCompression !== false) {
      this.notifyStatus({ stage: 'compressing', isProcessing: true });
      const compressedPrompt = this.compressPrompt(prompt);
      
      if (compressedPrompt.length <= maxPromptLength) {
        this.notifyStatus({ stage: 'completed', isProcessing: false });
        return compressedPrompt;
      }
    }

    // Check if chunking is enabled
    if (options.enableChunking !== false) {
      this.notifyStatus({ stage: 'chunking', isProcessing: true });
      return await this.chunkAndProcess(prompt, options);
    }

    // If both disabled, return original prompt (may cause API error)
    return prompt;
  }

  compressPrompt(prompt) {
    return prompt
      .replace(/\s+/g, ' ')  // Remove extra whitespace
      .replace(/\n{3,}/g, '\n\n')  // Limit consecutive newlines
      .replace(/([.!?])\1+/g, '$1')  // Remove duplicate punctuation
      .trim();
  }

  async chunkAndProcess(prompt, options) {
    const chunks = this.splitIntoChunks(prompt, 2000);
    const results = [];
    
    this.notifyStatus({ 
      stage: 'processing', 
      isProcessing: true, 
      totalChunks: chunks.length,
      currentChunk: 0
    });
    
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      
      this.notifyStatus({ 
        stage: 'processing', 
        isProcessing: true, 
        totalChunks: chunks.length,
        currentChunk: i + 1
      });
      
      try {
        const result = await this.generatePrompt(chunk, {
          ...options,
          maxTokens: Math.min(options.maxTokens || 1000, 500),
          enableChunking: false, // Prevent infinite recursion
          enableCompression: false
        });
        results.push(result);
      } catch (error) {
        console.warn('Chunk processing failed:', error);
        results.push(`[Error processing chunk: ${error.message}]`);
      }
    }
    
    this.notifyStatus({ stage: 'completed', isProcessing: false });
    return results.join('\n\n');
  }

  splitIntoChunks(text, maxLength) {
    const chunks = [];
    let currentChunk = '';
    
    const sentences = text.split(/[.!?]+/);
    
    for (const sentence of sentences) {
      const trimmedSentence = sentence.trim();
      if (!trimmedSentence) continue;
      
      if (currentChunk.length + trimmedSentence.length + 1 <= maxLength) {
        currentChunk += (currentChunk ? '. ' : '') + trimmedSentence;
      } else {
        if (currentChunk) {
          chunks.push(currentChunk);
        }
        currentChunk = trimmedSentence;
      }
    }
    
    if (currentChunk) {
      chunks.push(currentChunk);
    }
    
    return chunks;
  }

  async handleRateLimit(prompt, options) {
    console.warn('Rate limit exceeded, implementing fallback strategy...');
    
    // Try with reduced max_tokens
    const reducedOptions = {
      ...options,
      maxTokens: Math.floor((options.maxTokens || 1000) * 0.7)
    };
    
    try {
      return await this.generatePrompt(prompt, reducedOptions);
    } catch (error) {
      // If still fails and fallback is enabled, use mock implementation
      if (options.fallbackToMock !== false) {
        console.warn('API still failing, using mock implementation');
        return await this.generateMockPrompt(prompt);
      } else {
        throw error;
      }
    }
  }

  // Get queue statistics and status
  getQueueStatus() {
    return this.queueManager.getStats();
  }

  // Get detailed queue information
  getQueueDetails() {
    return this.queueManager.getQueueStatus();
  }

  // Clear all queued requests
  clearQueue() {
    this.queueManager.clearQueue();
  }

  // Retry failed requests
  retryFailedRequests() {
    this.queueManager.retryFailedRequests();
  }

  // Update queue configuration
  updateQueueConfig(config) {
    // Note: This would require updating the queue manager implementation
    // to support dynamic configuration updates
    console.warn('Dynamic queue configuration update not implemented yet');
  }

  // Estimate token count (rough approximation)
  estimateTokenCount(text) {
    // Rough estimation: 1 token ≈ 4 characters for English, less for Vietnamese
    const vietnameseRatio = (text.match(/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/gi) || []).length / text.length;
    const avgCharsPerToken = vietnameseRatio > 0.3 ? 2.5 : 4;
    return Math.ceil(text.length / avgCharsPerToken);
  }

  // Get available agents
  async getAgents() {
    try {
      const response = await fetch(this.agentsEndpoint);
      if (!response.ok) throw new Error('Failed to fetch agents');
      return await response.json();
    } catch (error) {
      console.error('Error fetching agents:', error);
      throw error;
    }
  }

  // Process with specific agent
  async processWithAgent(prompt, agentType, options = {}) {
    try {
      const response = await fetch(`${this.agentsEndpoint}/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.apiKey ? `Bearer ${this.apiKey}` : '',
        },
        body: JSON.stringify({
          prompt,
          agentType,
          options
        })
      });

      if (!response.ok) throw new Error('Agent processing failed');
      return await response.json();
    } catch (error) {
      console.error('Error processing with agent:', error);
      throw error;
    }
  }

  // Get service status
  async getServiceStatus() {
    try {
      const response = await fetch(this.servicesEndpoint);
      if (!response.ok) throw new Error('Failed to fetch service status');
      return await response.json();
    } catch (error) {
      console.error('Error fetching service status:', error);
      throw error;
    }
  }

  // Search library
  async searchLibrary(query, type, limit = 10) {
    try {
      const response = await fetch(`${this.libraryEndpoint}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.apiKey ? `Bearer ${this.apiKey}` : '',
        },
        body: JSON.stringify({
          query,
          type,
          limit
        })
      });

      if (!response.ok) throw new Error('Library search failed');
      return await response.json();
    } catch (error) {
      console.error('Error searching library:', error);
      throw error;
    }
  }

  // Mock implementation for development without API
  async generateMockPrompt(prompt) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const mockResponses = [
      `Based on your prompt "${prompt}", here's a creative response that demonstrates AI capabilities.`,
      `I've analyzed your request: "${prompt}". Here's my comprehensive response with detailed insights.`,
      `Your prompt "${prompt}" inspires this thoughtful response. Let me elaborate on the key aspects you mentioned.`,
      `Regarding "${prompt}", I can provide several perspectives and solutions to address your needs.`
    ];
    
    return mockResponses[Math.floor(Math.random() * mockResponses.length)];
  }
}

export default new AIService();
