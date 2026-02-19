// Ollama AI Service for local models
import axios from 'axios';

const OLLAMA_BASE_URL = 'http://localhost:11434/api';

class OllamaService {
  constructor() {
    this.defaultModel = 'llama3.2:3b';
    this.availableModels = ['llama3.2:3b', 'llama3:8b', 'mistral:7b'];
  }

  async generateResponse(prompt, options = {}) {
    try {
      const {
        model = this.defaultModel,
        max_tokens = 1000,
        temperature = 0.7,
        stream = false
      } = options;

      console.log(`[Ollama] Generating response with model: ${model}`);

      const response = await axios.post(`${OLLAMA_BASE_URL}/generate`, {
        model,
        prompt,
        options: {
          temperature,
          num_predict: max_tokens,
          top_p: 0.9,
          top_k: 40
        },
        stream
      }, {
        timeout: 60000, // 60 seconds timeout
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response.data.response || response.data;
    } catch (error) {
      console.error('[Ollama] Error generating response:', error.message);
      
      // Fallback response
      return `I'm sorry, I encountered an error while processing your request. The Ollama service might not be available. Please ensure Ollama is running on port 11434.

Error details: ${error.message}`;
    }
  }

  async getAvailableModels() {
    try {
      const response = await axios.get(`${OLLAMA_BASE_URL}/tags`);
      return response.data.models || [];
    } catch (error) {
      console.error('[Ollama] Error fetching models:', error.message);
      return this.availableModels;
    }
  }

  async pullModel(modelName) {
    try {
      console.log(`[Ollama] Pulling model: ${modelName}`);
      const response = await axios.post(`${OLLAMA_BASE_URL}/pull`, {
        name: modelName
      }, {
        timeout: 300000 // 5 minutes timeout for model pulling
      });

      return response.data;
    } catch (error) {
      console.error('[Ollama] Error pulling model:', error.message);
      throw error;
    }
  }

  async chatCompletion(messages, options = {}) {
    try {
      const {
        model = this.defaultModel,
        temperature = 0.7,
        max_tokens = 1000
      } = options;

      const response = await axios.post(`${OLLAMA_BASE_URL}/chat`, {
        model,
        messages,
        options: {
          temperature,
          num_predict: max_tokens
        }
      }, {
        timeout: 60000
      });

      return response.data;
    } catch (error) {
      console.error('[Ollama] Error in chat completion:', error.message);
      throw error;
    }
  }

  async isModelAvailable(modelName) {
    try {
      const models = await this.getAvailableModels();
      return models.some(model => model.name === modelName);
    } catch (error) {
      console.error('[Ollama] Error checking model availability:', error.message);
      return false;
    }
  }

  getModelInfo(modelName) {
    const modelInfo = {
      'llama3.2:3b': {
        name: 'Llama 3.2 3B',
        size: '2.0 GB',
        description: 'Fast and efficient, good for daily tasks',
        recommended: true
      },
      'llama3:8b': {
        name: 'Llama 3 8B',
        size: '4.7 GB',
        description: 'High quality, requires more resources',
        recommended: false
      },
      'mistral:7b': {
        name: 'Mistral 7B',
        size: '4.4 GB',
        description: 'Excellent performance, well-balanced',
        recommended: false
      }
    };

    return modelInfo[modelName] || {
      name: modelName,
      size: 'Unknown',
      description: 'Local AI model',
      recommended: false
    };
  }
}

export default new OllamaService();
