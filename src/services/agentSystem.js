// Multi-Agent System for specialized task processing
import LibraryManager from './libraryManager.js';
import ollamaService from './ollamaService.js';

class AgentSystem {
  constructor() {
    this.agents = new Map();
    this.taskQueue = [];
    this.isProcessing = false;
    this.libraryManager = LibraryManager;
    this.ollamaService = ollamaService;
    this.initializeAgents();
    
    // Setup library event listeners
    this.setupLibraryEventListeners();
  }

  initializeAgents() {
    // Character Design Agent
    this.agents.set('character', {
      name: 'Character Design Agent',
      description: 'Chuyên thiết kế nhân vật 3D với chi tiết ngoại hình, tính cách, trang phục',
      capabilities: ['character_design', 'appearance', 'personality', 'clothing'],
      process: this.processCharacterDesign.bind(this)
    });

    // Environment Agent
    this.agents.set('environment', {
      name: 'Environment Agent',
      description: 'Chuyên tạo môi trường, bối cảnh, cảnh quan 3D',
      capabilities: ['environment_design', 'landscape', 'lighting', 'atmosphere'],
      process: this.processEnvironment.bind(this)
    });

    // Animation Agent
    this.agents.set('animation', {
      name: 'Animation Agent',
      description: 'Chuyên tạo chuyển động, hành vi, animation cho nhân vật',
      capabilities: ['animation', 'movement', 'behavior', 'rigging'],
      process: this.processAnimation.bind(this)
    });

    // Technical Agent
    this.agents.set('technical', {
      name: 'Technical Agent',
      description: 'Chuyên xử lý kỹ thuật: model, texture, optimization',
      capabilities: ['modeling', 'texturing', 'optimization', 'export'],
      process: this.processTechnical.bind(this)
    });

    // Story Agent
    this.agents.set('story', {
      name: 'Story Agent',
      description: 'Chuyên phát triển cốt truyện, dialogue, quest',
      capabilities: ['story', 'dialogue', 'quest', 'narrative'],
      process: this.processStory.bind(this)
    });

    // UI/UX Agent
    this.agents.set('ui', {
      name: 'UI/UX Agent',
      description: 'Chuyên thiết kế giao diện, trải nghiệm người dùng',
      capabilities: ['ui_design', 'ux', 'interface', 'interaction'],
      process: this.processUI.bind(this)
    });
  }

  // Detect which agent should handle the request
  detectAgent(prompt) {
    const promptLower = prompt.toLowerCase();
    const scores = new Map();

    this.agents.forEach((agent, key) => {
      let score = 0;
      agent.capabilities.forEach(capability => {
        const keywords = this.getKeywordsForCapability(capability);
        keywords.forEach(keyword => {
          if (promptLower.includes(keyword.toLowerCase())) {
            score += 1;
          }
        });
      });
      scores.set(key, score);
    });

    // Find agent with highest score
    let bestAgent = null;
    let highestScore = 0;
    
    scores.forEach((score, key) => {
      if (score > highestScore) {
        highestScore = score;
        bestAgent = key;
      }
    });

    // If no agent matches well, use character agent as default
    return highestScore > 0 ? bestAgent : 'character';
  }

  getKeywordsForCapability(capability) {
    const keywordMap = {
      'character_design': ['nhân vật', 'character', 'ngoại hình', 'appearance', 'khuôn mặt', 'face', 'tóc', 'hair', 'mắt', 'eyes', 'da', 'skin'],
      'personality': ['tính cách', 'personality', 'hành vi', 'behavior', 'tâm lý', 'psychology', 'nết', 'traits'],
      'clothing': ['trang phục', 'clothing', 'quần áo', 'outfit', 'váy', 'dress', 'áo', 'shirt', 'giày', 'shoes'],
      'environment_design': ['môi trường', 'environment', 'bối cảnh', 'background', 'cảnh', 'scene', 'không gian', 'space'],
      'landscape': ['cảnh quan', 'landscape', 'núi', 'mountain', 'biển', 'sea', 'rừng', 'forest', 'thành phố', 'city'],
      'lighting': ['ánh sáng', 'lighting', 'bóng', 'shadow', 'màu sắc', 'color', 'tông màu', 'tone'],
      'animation': ['animation', 'chuyển động', 'movement', 'hành động', 'action', 'đứng', 'sit', 'đi', 'walk', 'chạy', 'run'],
      'rigging': ['rigging', 'xương', 'bones', 'khung xương', 'skeleton', 'joints', 'khớp'],
      'modeling': ['modeling', 'mô hình', 'model', '3d', 'hình khối', 'geometry', 'mesh'],
      'texturing': ['texture', 'bề mặt', 'surface', 'vật liệu', 'material', 'màu', 'color', 'pattern'],
      'optimization': ['tối ưu', 'optimization', 'performance', 'fps', 'lag', 'mượt', 'smooth'],
      'story': ['cốt truyện', 'story', 'narrative', 'plot', 'kịch bản', 'script'],
      'dialogue': ['dialogue', 'hội thoại', 'conversation', 'lời thoại', 'speech'],
      'quest': ['quest', 'nhiệm vụ', 'mission', 'task', 'mục tiêu', 'objective'],
      'ui_design': ['giao diện', 'interface', 'ui', 'menu', 'button', 'nút', 'icon', 'biểu tượng'],
      'ux': ['ux', 'trải nghiệm', 'experience', 'dùng', 'user', 'tương tác', 'interaction']
    };
    
    return keywordMap[capability] || [];
  }

  // Setup library event listeners
  setupLibraryEventListeners() {
    this.libraryManager.on('onItemAdded', (item) => {
      console.log(`Library: Added item ${item.id} from agent ${item.agentType}`);
    });
    
    this.libraryManager.on('onItemRetrieved', (item) => {
      console.log(`Library: Retrieved cached item ${item.id}`);
    });
  }

  // Process request with appropriate agent
  async processRequest(prompt, options = {}) {
    const agentType = this.detectAgent(prompt);
    const agent = this.agents.get(agentType);
    
    if (!agent) {
      throw new Error(`Agent ${agentType} not found`);
    }

    console.log(`Using ${agent.name} to process request`);

    // Check library first for similar results
    if (options.useLibrary !== false) {
      const libraryResult = await this.searchLibrary(prompt, agentType, options);
      if (libraryResult) {
        console.log('Using cached result from library');
        return {
          result: libraryResult.result,
          processingChain: {
            mainAgent: agentType,
            subAgent: null,
            microAgent: null,
            level: 'library',
            libraryItemId: libraryResult.id
          },
          fromLibrary: true,
          libraryItem: libraryResult
        };
      }
    }

    // Add to task queue
    const task = {
      id: Date.now(),
      type: agentType,
      prompt,
      options,
      status: 'pending',
      agent: agent.name,
      startTime: Date.now()
    };

    this.taskQueue.push(task);
    
    try {
      // Check if we should use sub-agents for more specialized processing
      if (options.useSubAgents !== false) {
        const { default: SubAgentSystem } = await import('./subAgentSystem.js');
        const subAgentSystem = SubAgentSystem;
        
        try {
          const subResult = await subAgentSystem.processWithSubAgent(prompt, agentType, options);
          task.status = 'completed';
          task.result = subResult;
          task.processingChain = subResult.processingChain;
          
          // Auto-save to library
          await this.saveToLibrary(prompt, subResult, agentType, task);
          
          return subResult;
        } catch (subError) {
          console.log('Sub-agent processing failed, falling back to main agent:', subError.message);
        }
      }
      
      const result = await agent.process(prompt, options);
      task.status = 'completed';
      task.result = {
        result: result,
        processingChain: {
          mainAgent: agentType,
          subAgent: null,
          microAgent: null,
          level: 'main'
        }
      };
      
      // Auto-save to library
      await this.saveToLibrary(prompt, task.result, agentType, task);
      
      return task.result;
    } catch (error) {
      task.status = 'failed';
      task.error = error.message;
      throw error;
    }
  }

  // Search library for similar results
  async searchLibrary(prompt, agentType, options = {}) {
    try {
      const searchResults = this.libraryManager.searchLibrary(prompt, {
        agentType: agentType,
        minQuality: options.minLibraryQuality || 0.5,
        limit: 5
      });
      
      if (searchResults.length > 0) {
        // Return the best match
        return searchResults[0].item;
      }
      
      return null;
    } catch (error) {
      console.warn('Library search failed:', error);
      return null;
    }
  }

  // Save result to library
  async saveToLibrary(prompt, result, agentType, task) {
    try {
      const libraryItem = {
        agentType: agentType,
        subAgentType: result.processingChain?.subAgent || null,
        microAgentType: result.processingChain?.microAgent || null,
        prompt: prompt,
        result: result.result,
        processingChain: result.processingChain,
        tokens: this.estimateTokens(prompt + result.result),
        processingTime: Date.now() - task.startTime,
        model: 'gpt-3.5-turbo', // Could be dynamic
        temperature: options.temperature || 0.7
      };
      
      const itemId = this.libraryManager.addToLibrary(libraryItem, {
        tags: this.generateTags(prompt, agentType),
        category: this.categorizeResult(agentType),
        quality: this.assessResultQuality(result.result)
      });
      
      console.log(`Saved result to library with ID: ${itemId}`);
      return itemId;
    } catch (error) {
      console.warn('Failed to save to library:', error);
      return null;
    }
  }

  // Generate tags for library item
  generateTags(prompt, agentType) {
    const tags = [agentType];
    const promptLower = prompt.toLowerCase();
    
    // Content-based tags
    if (promptLower.includes('nhân vật') || promptLower.includes('character')) tags.push('character');
    if (promptLower.includes('môi trường') || promptLower.includes('environment')) tags.push('environment');
    if (promptLower.includes('chuyển động') || promptLower.includes('animation')) tags.push('animation');
    if (promptLower.includes('kỹ thuật') || promptLower.includes('technical')) tags.push('technical');
    if (promptLower.includes('cốt truyện') || promptLower.includes('story')) tags.push('story');
    if (promptLower.includes('giao diện') || promptLower.includes('ui')) tags.push('ui');
    
    // Style-based tags
    if (promptLower.includes('chi tiết') || promptLower.includes('detailed')) tags.push('detailed');
    if (promptLower.includes('đơn giản') || promptLower.includes('simple')) tags.push('simple');
    if (promptLower.includes('phức tạp') || promptLower.includes('complex')) tags.push('complex');
    
    return [...new Set(tags)]; // Remove duplicates
  }

  // Categorize result for library
  categorizeResult(agentType) {
    const categoryMap = {
      'character': 'character_design',
      'environment': 'environment_design',
      'animation': 'animation',
      'technical': 'technical',
      'story': 'story',
      'ui': 'ui_design'
    };
    
    return categoryMap[agentType] || 'general';
  }

  // Assess result quality
  assessResultQuality(result) {
    if (!result || typeof result !== 'string') return 0.5;
    
    let score = 0.5;
    
    // Length factors
    if (result.length > 200) score += 0.1;
    if (result.length > 500) score += 0.1;
    if (result.length > 1000) score += 0.1;
    
    // Structure factors
    if (result.includes('\n')) score += 0.1;
    if (result.match(/\d+\./)) score += 0.1; // Numbered lists
    
    return Math.min(score, 1.0);
  }

  // Estimate token count
  estimateTokens(text) {
    return Math.ceil(text.length / 4); // Rough approximation
  }

  // Agent-specific processing methods
  async processCharacterDesign(prompt, options = {}) {
    const characterPrompt = `
Bạn là Character Design Agent chuyên về thiết kế nhân vật 3D.

Hãy phân tích yêu cầu sau và tạo nhân vật chi tiết:
"${prompt}"

Cung cấp thông tin theo cấu trúc:
1. THÔNG TIN CƠ BẢN (tên, tuổi, chủng tộc, nghề nghiệp)
2. NGOẠI HÌNH (khuôn mặt, tóc, mắt, thân hình, da)
3. TRANG PHỤC (chi tiết quần áo, màu sắc, chất liệu)
4. TÍNH CÁCH (đặc điểm, hành vi, sở thích)
5. PHỤ KIỆN (vật dụng, trang sức, vũ khí)
6. POSE/STANCE (tư thế mặc định)

Hãy mô tả chi tiết để có thể tạo mô hình 3D.
    `.trim();

    return await this.callAI(characterPrompt, {
      ...options,
      maxTokens: 1500,
      temperature: 0.8
    });
  }

  async processEnvironment(prompt, options = {}) {
    const environmentPrompt = `
Bạn là Environment Agent chuyên về thiết kế môi trường 3D.

Hãy phân tích yêu cầu sau và tạo môi trường chi tiết:
"${prompt}"

Cung cấp thông tin theo cấu trúc:
1. LOẠI MÔI TRƯỜNG (rừng, thành phố, biển, núi, dungeon, etc)
2. THỜI TIẾT/THỜI GIAN (nắng, mưa, đêm, hoàng hôn)
3. CÁC THÀNH PHẦN CHÍNH (cây, nhà, đá, nước, buildings)
4. ÁNH SÁNG (direction, intensity, color, shadows)
5. MÀU SẮC/TÔNG MÀU (color palette, mood)
6. CHI TIẾT PHỤ (decorations, props, small objects)
7. ATMOSPHERE (cảm giác, mood, ambiance)

Mô tả để có thể dựng cảnh 3D hoàn chỉnh.
    `.trim();

    return await this.callAI(environmentPrompt, {
      ...options,
      maxTokens: 1500,
      temperature: 0.7
    });
  }

  async processAnimation(prompt, options = {}) {
    const animationPrompt = `
Bạn là Animation Agent chuyên về tạo chuyển động 3D.

Hãy phân tích yêu cầu sau và tạo animation chi tiết:
"${prompt}"

Cung cấp thông tin theo cấu trúc:
1. LOẠI ANIMATION (idle, walk, run, attack, dance, etc)
2. DURATION/TIMING (thời gian, speed, fps)
3. KEYFRAMES (các tư thế chính trong animation)
4. MOVEMENT PATH (quỹ đạo chuyển động)
5. FACIAL EXPRESSIONS (biểu cảm khuôn mặt)
6. BODY LANGUAGE (ngôn ngữ cơ thể)
7. TECHNICAL REQUIREMENTS (rigging needs, constraints)

Mô tả chi tiết để animator có thể thực hiện.
    `.trim();

    return await this.callAI(animationPrompt, {
      ...options,
      maxTokens: 1200,
      temperature: 0.6
    });
  }

  async processTechnical(prompt, options = {}) {
    const technicalPrompt = `
Bạn là Technical Agent chuyên về kỹ thuật 3D.

Hãy phân tích yêu cầu kỹ thuật sau:
"${prompt}"

Cung cấp thông tin theo cấu trúc:
1. MODELING REQUIREMENTS (poly count, topology, edge flow)
2. TEXTURING SPECIFICATIONS (resolution, format, UV mapping)
3. OPTIMIZATION (LOD levels, draw calls, batch size)
4. EXPORT FORMATS (FBX, OBJ, glTF, etc)
5. ENGINE REQUIREMENTS (Unity, Unreal, Three.js)
6. PERFORMANCE TARGETS (FPS, memory usage, platform)
7. TECHNICAL CONSTRAINTS (limitations, requirements)

Đưa ra giải pháp kỹ thuật chi tiết.
    `.trim();

    return await this.callAI(technicalPrompt, {
      ...options,
      maxTokens: 1200,
      temperature: 0.3
    });
  }

  async processStory(prompt, options = {}) {
    const storyPrompt = `
Bạn là Story Agent chuyên về phát triển cốt truyện.

Hãy phân tích yêu cầu sau và phát triển story:
"${prompt}"

Cung cấp thông tin theo cấu trúc:
1. STORY PREMISE (giới thiệu, bối cảnh)
2. MAIN CHARACTERS (nhân vật chính, motivations)
3. PLOT POINTS (các điểm nhấn cốt truyện)
4. DIALOGUE SAMPLES (mẫu hội thoại)
5. QUEST STRUCTURE (cấu trúc nhiệm vụ)
6. WORLD-BUILDING (xây dựng thế giới)
7. NARRATIVE ARCS (hành trình nhân vật)

Tạo nội dung hấp dẫn và logic.
    `.trim();

    return await this.callAI(storyPrompt, {
      ...options,
      maxTokens: 1500,
      temperature: 0.9
    });
  }

  async processUI(prompt, options = {}) {
    const uiPrompt = `
Bạn là UI/UX Agent chuyên về thiết kế giao diện.

Hãy phân tích yêu cầu sau và thiết kế UI:
"${prompt}"

Cung cấp thông tin theo cấu trúc:
1. INTERFACE TYPE (menu, HUD, inventory, etc)
2. LAYOUT STRUCTURE (grid, flow, hierarchy)
3. COLOR SCHEME (primary, secondary, accent colors)
4. TYPOGRAPHY (fonts, sizes, weights)
5. INTERACTION ELEMENTS (buttons, sliders, icons)
6. USER FLOW (navigation, transitions)
7. ACCESSIBILITY (readability, contrast, sizing)

Thiết kế UI trực quan và dễ sử dụng.
    `.trim();

    return await this.callAI(uiPrompt, {
      ...options,
      maxTokens: 1200,
      temperature: 0.5
    });
  }

  // Call AI service (integrate with OllamaService)
  async callAI(prompt, options = {}) {
    try {
      console.log('[AgentSystem] Calling OllamaService with prompt:', prompt.substring(0, 100) + '...');
      
      const result = await this.ollamaService.generateResponse(prompt, {
        model: options.model || 'llama3.2:3b',
        max_tokens: options.maxTokens || 1500,
        temperature: options.temperature || 0.7,
        stream: false
      });
      
      console.log('[AgentSystem] OllamaService response received');
      return result;
    } catch (error) {
      console.error('[AgentSystem] Error calling OllamaService:', error);
      throw error;
    }
  }

  // Get all available agents
  getAvailableAgents() {
    return Array.from(this.agents.entries()).map(([key, agent]) => ({
      id: key,
      name: agent.name,
      description: agent.description,
      capabilities: agent.capabilities
    }));
  }

  // Get task queue status
  getTaskQueue() {
    return [...this.taskQueue];
  }

  // Get library statistics
  getLibraryStats() {
    return this.libraryManager.getLibraryStats();
  }

  // Search library directly
  async searchLibraryDirect(query, options = {}) {
    return this.libraryManager.searchLibrary(query, options);
  }

  // Get library items by category
  getLibraryByCategory(category, limit = 50) {
    return this.libraryManager.getByCategory(category, limit);
  }

  // Get popular library items
  getPopularLibraryItems(limit = 20) {
    return this.libraryManager.getPopularItems(limit);
  }

  // Get recent library items
  getRecentLibraryItems(limit = 20) {
    return this.libraryManager.getRecentItems(limit);
  }

  // Get library categories
  getLibraryCategories() {
    return this.libraryManager.getCategories();
  }

  // Get library tags
  getLibraryTags() {
    return this.libraryManager.getTags();
  }

  // Clear completed tasks
  clearCompletedTasks() {
    this.taskQueue = this.taskQueue.filter(task => task.status !== 'completed');
  }
}

export default new AgentSystem();
