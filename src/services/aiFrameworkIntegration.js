import aiService from './aiService.js';

/**
 * AI Framework Integration Service
 * Bridges AI Service with Web3D Framework
 */
class AIFrameworkIntegration {
  constructor(framework) {
    this.framework = framework;
    this.isInitialized = false;
    this.activeRequests = new Map();
    this.performanceMonitor = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0,
      responseTimes: []
    };
  }

  /**
   * Initialize AI integration
   */
  async initialize() {
    if (this.isInitialized) return;

    try {
      console.log('🤖 Initializing AI Framework Integration...');

      // Setup AI service callbacks
      this.setupAIServiceCallbacks();

      // Initialize AI systems in framework
      await this.initializeAISystems();

      // Setup performance monitoring
      this.setupPerformanceMonitoring();

      this.isInitialized = true;
      console.log('✅ AI Framework Integration initialized');

    } catch (error) {
      console.error('❌ Failed to initialize AI Framework Integration:', error);
      throw error;
    }
  }

  /**
   * Setup AI service callbacks
   */
  setupAIServiceCallbacks() {
    // Listen to AI service status updates
    aiService.onStatusUpdate((status) => {
      this.handleAIStatusUpdate(status);
    });
  }

  /**
   * Handle AI service status updates
   */
  handleAIStatusUpdate(status) {
    console.log('📊 AI Service Status:', status);

    // Update framework based on AI status
    if (this.framework && this.framework.aiSystems) {
      // Notify AI performance optimizer
      const performanceOptimizer = this.framework.aiSystems.get('PerformanceOptimizer');
      if (performanceOptimizer) {
        performanceOptimizer.handleServiceStatus(status);
      }
    }
  }

  /**
   * Initialize AI systems in framework
   */
  async initializeAISystems() {
    if (!this.framework) return;

    try {
      // Test AI scene generation
      console.log('🎬 Testing AI Scene Generation...');
      const testScene = await this.generateAIScene('A simple test scene with a cube', {
        testMode: true,
        maxObjects: 1
      });
      console.log('✅ AI Scene Generation test passed');

      // Test AI asset generation
      console.log('🎨 Testing AI Asset Generation...');
      const testAsset = await this.generateAIAsset('A simple red cube material', {
        testMode: true
      });
      console.log('✅ AI Asset Generation test passed');

    } catch (error) {
      console.warn('⚠️ AI systems test failed:', error);
      // Don't throw error, continue without AI features
    }
  }

  /**
   * Setup performance monitoring
   */
  setupPerformanceMonitoring() {
    // Monitor AI service queue
    setInterval(() => {
      const queueStats = aiService.getQueueStatus();
      this.updatePerformanceMetrics(queueStats);
    }, 5000);
  }

  /**
   * Update performance metrics
   */
  updatePerformanceMetrics(queueStats) {
    this.performanceMonitor.queueStats = queueStats;
    
    // Calculate average response time
    if (this.performanceMonitor.responseTimes.length > 0) {
      const sum = this.performanceMonitor.responseTimes.reduce((a, b) => a + b, 0);
      this.performanceMonitor.averageResponseTime = sum / this.performanceMonitor.responseTimes.length;
    }
  }

  /**
   * Generate AI Scene
   */
  async generateAIScene(prompt, options = {}) {
    const startTime = Date.now();
    const requestId = `scene_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
      this.performanceMonitor.totalRequests++;
      this.activeRequests.set(requestId, { type: 'scene', startTime });

      console.log(`🎬 [${requestId}] Generating AI Scene:`, prompt);

      // Use framework's AI scene generator if available
      if (this.framework && this.framework.aiSystems.has('SceneGenerator')) {
        const sceneGenerator = this.framework.aiSystems.get('SceneGenerator');
        const result = await sceneGenerator.generateScene(prompt, options);
        
        this.performanceMonitor.successfulRequests++;
        return this.formatSceneResult(result, requestId, startTime);
      }

      // Fallback to AI service
      const aiPrompt = this.buildScenePrompt(prompt, options);
      const aiResponse = await aiService.generatePrompt(aiPrompt, {
        agent: 'scene_generator',
        model: options.model || 'llama3.2:3b',
        maxTokens: options.maxTokens || 1500,
        temperature: options.temperature || 0.8
      });

      this.performanceMonitor.successfulRequests++;
      return this.formatSceneResult(aiResponse, requestId, startTime);

    } catch (error) {
      this.performanceMonitor.failedRequests++;
      console.error(`❌ [${requestId}] Scene generation failed:`, error);
      throw error;
    } finally {
      this.activeRequests.delete(requestId);
      const responseTime = Date.now() - startTime;
      this.performanceMonitor.responseTimes.push(responseTime);
      
      // Keep only last 50 response times
      if (this.performanceMonitor.responseTimes.length > 50) {
        this.performanceMonitor.responseTimes.shift();
      }
    }
  }

  /**
   * Generate AI Asset
   */
  async generateAIAsset(description, options = {}) {
    const startTime = Date.now();
    const requestId = `asset_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
      this.performanceMonitor.totalRequests++;
      this.activeRequests.set(requestId, { type: 'asset', startTime });

      console.log(`🎨 [${requestId}] Generating AI Asset:`, description);

      // Use framework's AI asset generator if available
      if (this.framework && this.framework.aiSystems.has('AssetGenerator')) {
        const assetGenerator = this.framework.aiSystems.get('AssetGenerator');
        const result = await assetGenerator.generateAsset(description, options);
        
        this.performanceMonitor.successfulRequests++;
        return this.formatAssetResult(result, requestId, startTime);
      }

      // Fallback to AI service
      const aiPrompt = this.buildAssetPrompt(description, options);
      const aiResponse = await aiService.generatePrompt(aiPrompt, {
        agent: 'asset_generator',
        model: options.model || 'llama3.2:3b',
        maxTokens: options.maxTokens || 1000,
        temperature: options.temperature || 0.7
      });

      this.performanceMonitor.successfulRequests++;
      return this.formatAssetResult(aiResponse, requestId, startTime);

    } catch (error) {
      this.performanceMonitor.failedRequests++;
      console.error(`❌ [${requestId}] Asset generation failed:`, error);
      throw error;
    } finally {
      this.activeRequests.delete(requestId);
      const responseTime = Date.now() - startTime;
      this.performanceMonitor.responseTimes.push(responseTime);
    }
  }

  /**
   * Get AI Content Suggestions
   */
  async getAIContentSuggestions(scene, context = {}) {
    const startTime = Date.now();
    const requestId = `suggestions_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
      console.log(`💡 [${requestId}] Getting AI Content Suggestions`);

      // Use framework's AI content suggester if available
      if (this.framework && this.framework.aiSystems.has('ContentSuggester')) {
        const contentSuggester = this.framework.aiSystems.get('ContentSuggester');
        const result = await contentSuggester.getSuggestions(scene, context);
        
        return this.formatSuggestionsResult(result, requestId, startTime);
      }

      // Fallback to AI service
      const aiPrompt = this.buildSuggestionsPrompt(scene, context);
      const aiResponse = await aiService.generatePrompt(aiPrompt, {
        agent: 'content_suggester',
        model: 'llama3.2:3b',
        maxTokens: 1000,
        temperature: 0.9
      });

      return this.formatSuggestionsResult(aiResponse, requestId, startTime);

    } catch (error) {
      console.error(`❌ [${requestId}] Content suggestions failed:`, error);
      throw error;
    }
  }

  /**
   * Build scene generation prompt
   */
  buildScenePrompt(userPrompt, options) {
    return `
You are a 3D scene generator. Create a detailed description for a 3D scene based on the user's request.

User Request: ${userPrompt}

Please provide:
1. Scene description with lighting, atmosphere, and environment
2. Object placement and positioning
3. Material and color suggestions
4. Camera positioning recommendations
5. Any special effects or animations

Format your response as a structured JSON object:
{
  "scene": {
    "description": "Detailed scene description",
    "lighting": "Lighting setup",
    "atmosphere": "Atmospheric effects"
  },
  "objects": [
    {
      "type": "object_type",
      "position": [x, y, z],
      "scale": [x, y, z],
      "material": "material_description"
    }
  ],
  "camera": {
    "position": [x, y, z],
    "target": [x, y, z],
    "type": "perspective|orthographic"
  },
  "effects": ["list_of_effects"]
}

${options.testMode ? 'Generate a simple test scene with minimal objects.' : ''}
    `.trim();
  }

  /**
   * Build asset generation prompt
   */
  buildAssetPrompt(userDescription, options) {
    return `
You are a 3D asset generator. Create detailed specifications for a 3D asset based on the user's description.

User Request: ${userDescription}

Please provide:
1. Asset type and geometry details
2. Material specifications
3. Texture recommendations
4. Animation suggestions (if applicable)
5. Optimization tips

Format your response as a structured JSON object:
{
  "asset": {
    "type": "geometry_type",
    "description": "Detailed description"
  },
  "geometry": {
    "vertices": "description",
    "faces": "description",
    "complexity": "low|medium|high"
  },
  "material": {
    "type": "material_type",
    "color": "#hex_color",
    "properties": {
      "roughness": 0.5,
      "metalness": 0.0,
      "transparent": false
    }
  },
  "textures": [
    {
      "type": "diffuse|normal|roughness",
      "description": "texture_description"
    }
  ],
  "animation": {
    "type": "none|rotation|scale|complex",
    "description": "animation_description"
  }
}

${options.testMode ? 'Generate a simple cube asset with basic material.' : ''}
    `.trim();
  }

  /**
   * Build suggestions prompt
   */
  buildSuggestionsPrompt(scene, context) {
    return `
You are a creative AI assistant for 3D scenes. Analyze the current scene and provide suggestions for improvements.

Current Scene: ${JSON.stringify(scene, null, 2)}
Context: ${JSON.stringify(context, null, 2)}

Please provide suggestions for:
1. Scene enhancements
2. Additional objects that would fit
3. Lighting improvements
4. Material adjustments
5. Animation ideas
6. Performance optimizations

Format your response as a structured JSON object:
{
  "suggestions": [
    {
      "type": "enhancement|object|lighting|material|animation|optimization",
      "title": "Suggestion title",
      "description": "Detailed description",
      "priority": "high|medium|low",
      "difficulty": "easy|medium|hard"
    }
  ],
  "overall_score": 85,
  "improvement_areas": ["list_of_areas"]
}
    `.trim();
  }

  /**
   * Format scene result
   */
  formatSceneResult(result, requestId, startTime) {
    return {
      type: 'scene',
      requestId,
      processingTime: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      data: result,
      success: true
    };
  }

  /**
   * Format asset result
   */
  formatAssetResult(result, requestId, startTime) {
    return {
      type: 'asset',
      requestId,
      processingTime: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      data: result,
      success: true
    };
  }

  /**
   * Format suggestions result
   */
  formatSuggestionsResult(result, requestId, startTime) {
    return {
      type: 'suggestions',
      requestId,
      processingTime: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      data: result,
      success: true
    };
  }

  /**
   * Get performance metrics
   */
  getPerformanceMetrics() {
    return {
      ...this.performanceMonitor,
      activeRequests: this.activeRequests.size,
      successRate: this.performanceMonitor.totalRequests > 0 
        ? (this.performanceMonitor.successfulRequests / this.performanceMonitor.totalRequests) * 100 
        : 0
    };
  }

  /**
   * Get AI service status
   */
  getAIServiceStatus() {
    return {
      queue: aiService.getQueueStatus(),
      performance: this.getPerformanceMetrics(),
      isInitialized: this.isInitialized
    };
  }

  /**
   * Cleanup
   */
  dispose() {
    this.activeRequests.clear();
    this.framework = null;
    this.isInitialized = false;
  }
}

export default AIFrameworkIntegration;
