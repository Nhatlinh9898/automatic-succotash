/**
 * Framework Service - Integrates Web3D Framework with Server APIs
 * Provides unified interface for 3D operations and AI integration
 */

import { Web3DFramework, Web3DUtils } from '../../framework/Web3DFramework.js';
import ollamaService from './ollamaService.js';

class FrameworkService {
  constructor() {
    this.framework = null;
    this.isInitialized = false;
    this.ollamaService = ollamaService;
    this.serverConfig = {
      mainServer: 'http://localhost:3001',
      aiServer: 'http://localhost:8080'
    };
  }

  /**
   * Initialize Web3D Framework with server integration
   */
  async initialize(options = {}) {
    try {
      // Initialize framework
      this.framework = new Web3DFramework({
        renderer: {
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        },
        ...options
      });

      // Setup basic scene
      this.framework.createBasicScene();

      // Register AI integration
      await this.registerAIIntegration();

      this.isInitialized = true;
      console.log('✅ Web3D Framework initialized with server integration');
      
      return this.framework;
    } catch (error) {
      console.error('❌ Framework initialization failed:', error);
      throw error;
    }
  }

  /**
   * Register AI integration with servers
   */
  async registerAIIntegration() {
    // Create AI character generator if API key is available
    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;
    if (apiKey) {
      this.aiCharacterGenerator = this.framework.createAICharacterGenerator(apiKey);
    }
  }

  /**
   * Start framework with server connection
   */
  start() {
    if (!this.isInitialized) {
      throw new Error('Framework not initialized. Call initialize() first.');
    }
    
    this.framework.start();
    
    // Start server health monitoring
    this.startServerMonitoring();
  }

  /**
   * Monitor server health
   */
  async startServerMonitoring() {
    const checkServerHealth = async () => {
      try {
        // Check main server
        const mainResponse = await fetch(`${this.serverConfig.mainServer}/api/health`);
        const mainHealth = await mainResponse.json();
        
        // Check AI server
        const aiResponse = await fetch(`${this.serverConfig.aiServer}/health`);
        const aiHealth = await aiResponse.json();
        
        console.log('🔍 Server Health:', {
          main: mainHealth.status,
          ai: aiHealth.status
        });
        
      } catch (error) {
        console.warn('⚠️ Server health check failed:', error.message);
      }
    };

    // Check every 30 seconds
    setInterval(checkServerHealth, 30000);
    checkServerHealth(); // Initial check
  }

  /**
   * Generate AI-enhanced 3D content
   */
  async generateAIContent(prompt, options = {}) {
    try {
      // Call main server AI endpoint
      const response = await fetch(`${this.serverConfig.mainServer}/api/ai`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: prompt,
          character: options.character || 'female1',
          personality: options.personality || 'professional'
        })
      });

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      return {
        text: result.reply,
        ttsUrl: result.ttsUrl,
        character: result.character,
        provider: result.provider
      };
      
    } catch (error) {
      console.error('AI content generation failed:', error);
      throw error;
    }
  }

  /**
   * Create 3D object with AI assistance
   */
  async createAIObject(description, position = { x: 0, y: 0, z: 0 }) {
    try {
      // Generate 3D object description using AI
      const aiResponse = await this.generateAIContent(
        `Describe a 3D object for: ${description}. Provide geometry type, color, size, and any special properties.`
      );

      // Parse AI response to create object
      const objectConfig = this.parseAIObjectResponse(aiResponse.text);
      
      // Create 3D object
      const geometry = Web3DUtils.createPrimitive(
        objectConfig.type || 'box',
        objectConfig.geometry
      );
      
      const material = Web3DUtils.createMaterial(objectConfig.material);
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position.x, position.y, position.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      
      // Add to framework scene
      this.framework.engine.scene.add(mesh);
      
      // Create entity in framework
      const entity = this.framework.createEntity([
        { type: 'Transform', data: { position } },
        { type: 'Mesh', data: { geometry, material } }
      ]);
      
      return {
        entity,
        mesh,
        aiDescription: aiResponse.text,
        config: objectConfig
      };
      
    } catch (error) {
      console.error('AI object creation failed:', error);
      throw error;
    }
  }

  /**
   * Parse AI response for object configuration
   */
  parseAIObjectResponse(aiText) {
    // Default configuration
    const config = {
      type: 'box',
      geometry: { width: 1, height: 1, depth: 1 },
      material: { color: 0x4488ff }
    };

    // Simple parsing - in production, use more sophisticated NLP
    const text = aiText.toLowerCase();
    
    if (text.includes('sphere') || text.includes('ball')) {
      config.type = 'sphere';
      config.geometry = { radius: 1 };
    } else if (text.includes('cylinder')) {
      config.type = 'cylinder';
    } else if (text.includes('cone')) {
      config.type = 'cone';
    } else if (text.includes('plane') || text.includes('flat')) {
      config.type = 'plane';
    }

    // Parse colors
    if (text.includes('red')) config.material.color = 0xff0000;
    else if (text.includes('green')) config.material.color = 0x00ff00;
    else if (text.includes('blue')) config.material.color = 0x0000ff;
    else if (text.includes('yellow')) config.material.color = 0xffff00;
    else if (text.includes('purple')) config.material.color = 0xff00ff;
    else if (text.includes('orange')) config.material.color = 0xffa500;

    return config;
  }

  /**
   * Batch process AI requests
   */
  async batchAIProcess(requests) {
    try {
      const response = await fetch(`${this.serverConfig.aiServer}/api/ai/batch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requests })
      });

      const result = await response.json();
      return result;
      
    } catch (error) {
      console.error('Batch AI processing failed:', error);
      throw error;
    }
  }

  /**
   * Get server configuration
   */
  async getServerConfig() {
    try {
      const response = await fetch(`${this.serverConfig.mainServer}/api/config`);
      const config = await response.json();
      return config;
    } catch (error) {
      console.error('Failed to get server config:', error);
      return null;
    }
  }

  /**
   * Get character configurations
   */
  async getCharacters() {
    try {
      const response = await fetch(`${this.serverConfig.mainServer}/api/characters`);
      const characters = await response.json();
      return characters;
    } catch (error) {
      console.error('Failed to get characters:', error);
      return null;
    }
  }

  /**
   * Create shader with AI assistance
   */
  async createAIShader(description) {
    try {
      const prompt = `Create GLSL shader code for: ${description}. Provide vertex and fragment shader code with uniforms.`;
      
      const aiResponse = await this.generateAIContent(prompt);
      
      // Parse shader code from AI response
      const shaderCode = this.parseShaderCode(aiResponse.text);
      
      return shaderCode;
      
    } catch (error) {
      console.error('AI shader creation failed:', error);
      throw error;
    }
  }

  /**
   * Parse shader code from AI response
   */
  parseShaderCode(aiText) {
    // Simple extraction of shader code blocks
    const vertexMatch = aiText.match(/```glsl\n([\s\S]*?)\n```/g);
    const fragmentMatch = aiText.match(/vertex[\s\S]*?fragment[\s\S]*?```/g);
    
    return {
      vertex: vertexMatch?.[0] || this.getDefaultVertexShader(),
      fragment: fragmentMatch?.[0] || this.getDefaultFragmentShader(),
      uniforms: ['time', 'resolution', 'color']
    };
  }

  /**
   * Get default vertex shader
   */
  getDefaultVertexShader() {
    return `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
    `.trim();
  }

  /**
   * Get default fragment shader
   */
  getDefaultFragmentShader() {
    return `
uniform float time;
uniform vec2 resolution;
uniform vec3 color;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec2 uv = vUv;
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(vNormal, lightDir), 0.0);
    vec3 diffuse = diff * color;
    gl_FragColor = vec4(diffuse, 1.0);
}
    `.trim();
  }

  /**
   * Export framework state
   */
  exportState() {
    if (!this.isInitialized) {
      throw new Error('Framework not initialized');
    }
    
    return {
      framework: this.framework.exportConfig(),
      serverConfig: this.serverConfig,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Dispose framework
   */
  dispose() {
    if (this.framework) {
      this.framework.dispose();
    }
    this.isInitialized = false;
    this.framework = null;
  }
}

// Create singleton instance
const frameworkService = new FrameworkService();

export default frameworkService;
