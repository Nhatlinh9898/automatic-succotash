// AI Service for handling AI API calls
class AIService {
  constructor() {
    // Configure your AI API endpoint here
    this.apiEndpoint = process.env.REACT_APP_AI_API_ENDPOINT || 'http://localhost:8080/api/ai';
    this.apiKey = process.env.REACT_APP_AI_API_KEY || '';
    
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
      
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.apiKey ? `Bearer ${this.apiKey}` : '',
        },
        body: JSON.stringify({
          prompt: processedPrompt,
          model: mergedOptions.model || 'gpt-3.5-turbo',
          max_tokens: mergedOptions.maxTokens || 1000,
          temperature: mergedOptions.temperature || 0.7,
          ...mergedOptions
        })
      });

      if (!response.ok) {
        if (response.status === 429) {
          // Rate limit exceeded, try with smaller chunks
          return await this.handleRateLimit(prompt, mergedOptions);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response || data.choices?.[0]?.message?.content || 'No response received';
    } catch (error) {
      console.error('AI Service Error:', error);
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

  // Estimate token count (rough approximation)
  estimateTokenCount(text) {
    // Rough estimation: 1 token ≈ 4 characters for English, less for Vietnamese
    const vietnameseRatio = (text.match(/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/gi) || []).length / text.length;
    const avgCharsPerToken = vietnameseRatio > 0.3 ? 2.5 : 4;
    return Math.ceil(text.length / avgCharsPerToken);
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
