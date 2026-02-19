// Sub-Agent System - Detailed specialized agents for each main agent
import LibraryManager from './libraryManager.js';
import ollamaService from './ollamaService.js';

class SubAgentSystem {
  constructor() {
    this.subAgents = new Map();
    this.libraryManager = LibraryManager;
    this.ollamaService = ollamaService;
    this.initializeSubAgents();
    
    // Setup library event listeners
    this.setupLibraryEventListeners();
  }

  initializeSubAgents() {
    // CHARACTER DESIGN SUB-AGENTS
    this.subAgents.set('character_appearance', {
      parent: 'character',
      name: 'Character Appearance Specialist',
      description: 'Chuyên thiết kế ngoại hình, khuôn mặt, thân hình nhân vật',
      capabilities: ['face_design', 'body_type', 'skin_tone', 'facial_features'],
      process: this.processCharacterAppearance.bind(this)
    });

    this.subAgents.set('character_hair', {
      parent: 'character',
      name: 'Hair Design Specialist',
      description: 'Chuyên thiết kế kiểu tóc, màu tóc, beard cho nhân vật',
      capabilities: ['hairstyle', 'hair_color', 'beard', 'eyebrows', 'facial_hair'],
      process: this.processCharacterHair.bind(this)
    });

    this.subAgents.set('character_clothing', {
      parent: 'character',
      name: 'Clothing & Armor Specialist',
      description: 'Chuyên thiết kế trang phục, giáp, phụ kiện thời trang',
      capabilities: ['clothing', 'armor', 'accessories', 'footwear', 'jewelry'],
      process: this.processCharacterClothing.bind(this)
    });

    this.subAgents.set('character_personality', {
      parent: 'character',
      name: 'Personality & Psychology Specialist',
      description: 'Chuyên phát triển tính cách, tâm lý, hành vi nhân vật',
      capabilities: ['personality', 'psychology', 'behavior', 'motivation', 'background'],
      process: this.processCharacterPersonality.bind(this)
    });

    // ENVIRONMENT SUB-AGENTS
    this.subAgents.set('environment_terrain', {
      parent: 'environment',
      name: 'Terrain & Landscape Specialist',
      description: 'Chuyên thiết kế địa hình, cảnh quan tự nhiên',
      capabilities: ['terrain', 'mountains', 'valleys', 'rivers', 'forests', 'deserts'],
      process: this.processEnvironmentTerrain.bind(this)
    });

    this.subAgents.set('environment_architecture', {
      parent: 'environment',
      name: 'Architecture Specialist',
      description: 'Chuyên thiết kế công trình, buildings, structures',
      capabilities: ['buildings', 'houses', 'castles', 'temples', 'bridges', 'ruins'],
      process: this.processEnvironmentArchitecture.bind(this)
    });

    this.subAgents.set('environment_vegetation', {
      parent: 'environment',
      name: 'Vegetation & Nature Specialist',
      description: 'Chuyên thiết kế cây cối, thực vật, hệ sinh thái',
      capabilities: ['trees', 'plants', 'flowers', 'grass', 'moss', 'vines'],
      process: this.processEnvironmentVegetation.bind(this)
    });

    this.subAgents.set('environment_lighting', {
      parent: 'environment',
      name: 'Lighting & Atmosphere Specialist',
      description: 'Chuyên thiết kế ánh sáng, thời tiết, atmosphere',
      capabilities: ['lighting', 'shadows', 'weather', 'atmosphere', 'time_of_day'],
      process: this.processEnvironmentLighting.bind(this)
    });

    // ANIMATION SUB-AGENTS
    this.subAgents.set('animation_locomotion', {
      parent: 'animation',
      name: 'Locomotion Specialist',
      description: 'Chuyên tạo chuyển động di chuyển: đi, chạy, nhảy, bơi',
      capabilities: ['walking', 'running', 'jumping', 'swimming', 'climbing', 'crawling'],
      process: this.processAnimationLocomotion.bind(this)
    });

    this.subAgents.set('animation_combat', {
      parent: 'animation',
      name: 'Combat Specialist',
      description: 'Chuyên tạo chuyển động chiến đấu, tấn công, phòng thủ',
      capabilities: ['attacks', 'defenses', 'magic_casting', 'weapon_handling', 'dodging'],
      process: this.processAnimationCombat.bind(this)
    });

    this.subAgents.set('animation_facial', {
      parent: 'animation',
      name: 'Facial Animation Specialist',
      description: 'Chuyên tạo biểu cảm khuôn mặt, lip sync, eye movement',
      capabilities: ['facial_expressions', 'lip_sync', 'eye_movement', 'emotions', 'blinking'],
      process: this.processAnimationFacial.bind(this)
    });

    this.subAgents.set('animation_idle', {
      parent: 'animation',
      name: 'Idle & Gesture Specialist',
      description: 'Chuyên tạo tư thế đứng, cử chỉ, chuyển động nhỏ',
      capabilities: ['idle_poses', 'gestures', 'breathing', 'weight_shift', 'subtle_movements'],
      process: this.processAnimationIdle.bind(this)
    });

    // TECHNICAL SUB-AGENTS
    this.subAgents.set('technical_modeling', {
      parent: 'technical',
      name: '3D Modeling Specialist',
      description: 'Chuyên modeling, topology, mesh optimization',
      capabilities: ['polygon_modeling', 'topology', 'mesh_optimization', 'subdivision', 'sculpting'],
      process: this.processTechnicalModeling.bind(this)
    });

    this.subAgents.set('technical_texturing', {
      parent: 'technical',
      name: 'Texturing & Materials Specialist',
      description: 'Chuyên UV mapping, texturing, material creation',
      capabilities: ['uv_mapping', 'texture_creation', 'materials', 'shaders', 'surface_properties'],
      process: this.processTechnicalTexturing.bind(this)
    });

    this.subAgents.set('technical_rigging', {
      parent: 'technical',
      name: 'Rigging & Skeleton Specialist',
      description: 'Chuyên tạo skeleton, bones, constraints, skinning',
      capabilities: ['skeleton_creation', 'bone_placement', 'constraints', 'skinning', 'weight_painting'],
      process: this.processTechnicalRigging.bind(this)
    });

    this.subAgents.set('technical_optimization', {
      parent: 'technical',
      name: 'Performance Optimization Specialist',
      description: 'Chuyên tối ưu performance, LOD, batching',
      capabilities: ['performance', 'lod_creation', 'batching', 'draw_calls', 'memory_optimization'],
      process: this.processTechnicalOptimization.bind(this)
    });

    // STORY SUB-AGENTS
    this.subAgents.set('story_plot', {
      parent: 'story',
      name: 'Plot Development Specialist',
      description: 'Chuyên phát triển cốt truyện, plot twists, story arcs',
      capabilities: ['plot_development', 'story_arcs', 'plot_twists', 'narrative_structure', 'pacing'],
      process: this.processStoryPlot.bind(this)
    });

    this.subAgents.set('story_dialogue', {
      parent: 'story',
      name: 'Dialogue & Voice Specialist',
      description: 'Chuyên viết dialogue, character voice, conversation',
      capabilities: ['dialogue_writing', 'character_voice', 'conversation_flow', 'tone', 'dialect'],
      process: this.processStoryDialogue.bind(this)
    });

    this.subAgents.set('story_quest', {
      parent: 'story',
      name: 'Quest Design Specialist',
      description: 'Chuyên thiết kế quest, mission, objectives',
      capabilities: ['quest_design', 'mission_structure', 'objectives', 'rewards', 'quest_chains'],
      process: this.processStoryQuest.bind(this)
    });

    this.subAgents.set('story_lore', {
      parent: 'story',
      name: 'Lore & World-building Specialist',
      description: 'Chuyên xây dựng lore, history, world background',
      capabilities: ['lore_creation', 'world_history', 'cultures', 'religions', 'geography'],
      process: this.processStoryLore.bind(this)
    });

    // UI/UX SUB-AGENTS
    this.subAgents.set('ui_layout', {
      parent: 'ui',
      name: 'UI Layout Specialist',
      description: 'Chuyên thiết kế layout, composition, visual hierarchy',
      capabilities: ['layout_design', 'composition', 'visual_hierarchy', 'grid_systems', 'spacing'],
      process: this.processUILayout.bind(this)
    });

    this.subAgents.set('ui_interactive', {
      parent: 'ui',
      name: 'Interactive Elements Specialist',
      description: 'Chuyên thiết kế buttons, controls, interactions',
      capabilities: ['button_design', 'controls', 'interactions', 'feedback', 'transitions'],
      process: this.processUIInteractive.bind(this)
    });

    this.subAgents.set('ui_visual', {
      parent: 'ui',
      name: 'Visual Design Specialist',
      description: 'Chuyên thiết kế colors, typography, icons, graphics',
      capabilities: ['color_theory', 'typography', 'icon_design', 'graphics', 'branding'],
      process: this.processUIVisual.bind(this)
    });

    this.subAgents.set('ux_flow', {
      parent: 'ui',
      name: 'UX Flow Specialist',
      description: 'Chuyên thiết kế user flow, navigation, experience',
      capabilities: ['user_flow', 'navigation', 'usability', 'accessibility', 'user_journey'],
      process: this.processUXFlow.bind(this)
    });
  }

  // Detect appropriate sub-agent
  detectSubAgent(prompt, parentAgent) {
    const promptLower = prompt.toLowerCase();
    const parentSubAgents = Array.from(this.subAgents.entries())
      .filter(([key, agent]) => agent.parent === parentAgent);
    
    if (parentSubAgents.length === 0) return null;

    const scores = new Map();
    
    parentSubAgents.forEach(([key, agent]) => {
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

    let bestSubAgent = null;
    let highestScore = 0;
    
    scores.forEach((score, key) => {
      if (score > highestScore) {
        highestScore = score;
        bestSubAgent = key;
      }
    });

    return highestScore > 0 ? bestSubAgent : parentSubAgents[0][0]; // Default to first sub-agent
  }

  getKeywordsForCapability(capability) {
    const keywordMap = {
      // Character Appearance
      'face_design': ['khuôn mặt', 'face', 'mắt', 'eyes', 'mũi', 'nose', 'miệng', 'mouth', 'cằm', 'chin'],
      'body_type': ['thân hình', 'body', 'cao', 'tall', 'thấp', 'short', 'mập', 'fat', 'gầy', 'thin', 'cơ bắp', 'muscular'],
      'skin_tone': ['da', 'skin', 'màu da', 'skin_color', 'trắng', 'white', 'đen', 'black', 'nâu', 'brown'],
      'facial_features': ['đặc điểm', 'features', 'nếp nhăn', 'wrinkles', 'sẹo', 'scars', 'tàn nhang', 'freckles'],
      
      // Character Hair
      'hairstyle': ['kiểu tóc', 'hairstyle', 'tóc dài', 'long_hair', 'tóc ngắn', 'short_hair', 'tóc bob', 'bob_cut'],
      'hair_color': ['màu tóc', 'hair_color', 'tóc đen', 'black_hair', 'tóc vàng', 'blonde', 'tóc nâu', 'brown_hair'],
      'beard': ['râu', 'beard', 'moustache', 'ria', 'goatee'],
      'eyebrows': ['lông mày', 'eyebrows'],
      'facial_hair': ['tóc mặt', 'facial_hair'],
      
      // Character Clothing
      'clothing': ['quần áo', 'clothing', 'áo', 'shirt', 'quần', 'pants', 'váy', 'dress'],
      'armor': ['giáp', 'armor', 'thép', 'metal', 'bảo vệ', 'protection'],
      'accessories': ['phụ kiện', 'accessories', 'vòng cổ', 'necklace', 'nhẫn', 'ring', 'bông tai', 'earrings'],
      'footwear': ['giày', 'shoes', 'dép', 'sandals', 'bốt', 'boots'],
      'jewelry': ['trang sức', 'jewelry', 'kim cương', 'diamond', 'vàng', 'gold', 'bạc', 'silver'],
      
      // Character Personality
      'personality': ['tính cách', 'personality', 'hiền lành', 'kind', 'hung dữ', 'aggressive', 'hài hước', 'humorous'],
      'psychology': ['tâm lý', 'psychology', 'sợ', 'fear', 'mơ', 'dreams', 'trauma'],
      'behavior': ['hành vi', 'behavior', 'thói quen', 'habits', 'cử chỉ', 'gestures'],
      'motivation': ['động lực', 'motivation', 'mục tiêu', 'goals', 'mong muốn', 'desires'],
      'background': ['nền', 'background', 'quá khứ', 'past', 'gia đình', 'family', 'xuất thân', 'origin'],
      
      // Environment Terrain
      'terrain': ['địa hình', 'terrain', 'đồi', 'hills', 'núi', 'mountains', 'thung lũng', 'valleys'],
      'mountains': ['núi', 'mountains', 'đỉnh núi', 'peaks', 'dốc', 'slopes'],
      'valleys': ['thung lũng', 'valleys', 'đồng bằng', 'plains'],
      'rivers': ['sông', 'rivers', 'dòng nước', 'water_flow', 'suối', 'streams'],
      'forests': ['rừng', 'forests', 'cây', 'trees', 'khu rừng', 'woodland'],
      'deserts': ['sa mạc', 'deserts', 'cát', 'sand', 'nóng', 'hot'],
      
      // Environment Architecture
      'buildings': ['tòa nhà', 'buildings', 'nhà', 'house', 'công trình', 'structures'],
      'houses': ['nhà ở', 'houses', 'nhà cửa', 'homes', 'căn nhà', 'residence'],
      'castles': ['lâu đài', 'castles', 'pháo đài', 'fortress', 'tháp', 'towers'],
      'temples': ['đền', 'temples', 'chùa', 'pagodas', 'nhà thờ', 'churches'],
      'bridges': ['cầu', 'bridges', 'cầu vượt', 'overpasses'],
      'ruins': ['phế tích', 'ruins', 'đ đổ nát', 'destroyed', 'cổ', 'ancient'],
      
      // Environment Vegetation
      'trees': ['cây', 'trees', 'cây cối', 'woodland', 'thân cây', 'trunks'],
      'plants': ['thực vật', 'plants', 'cây bụi', 'bushes', 'hoa', 'flowers'],
      'flowers': ['hoa', 'flowers', 'bông hoa', 'blossoms', 'cành hoa', 'branches'],
      'grass': ['cỏ', 'grass', 'bãi cỏ', 'lawn', 'cây dại', 'weeds'],
      'moss': ['rêu', 'moss', 'thảm rêu', 'moss_cover'],
      'vines': [' dây leo', 'vines', 'leo núi', 'climbing_plants'],
      
      // Environment Lighting
      'lighting': ['ánh sáng', 'lighting', 'sáng', 'bright', 'tối', 'dark', 'bóng', 'shadows'],
      'shadows': ['bóng', 'shadows', 'bóng đổ', 'drop_shadows', 'bóng mờ', 'soft_shadows'],
      'weather': ['thời tiết', 'weather', 'mưa', 'rain', 'nắng', 'sun', 'mây', 'clouds', 'sương mù', 'fog'],
      'atmosphere': ['không khí', 'atmosphere', 'mood', 'ambience', 'cảm giác', 'feeling'],
      'time_of_day': ['thời gian', 'time', 'sáng', 'morning', 'trưa', 'noon', 'chiều', 'afternoon', 'tối', 'evening', 'đêm', 'night'],
      
      // Animation Locomotion
      'walking': ['đi', 'walking', 'bước đi', 'steps', 'đều', 'steady_walk'],
      'running': ['chạy', 'running', 'sprint', 'nhanh', 'fast', 'tốc độ', 'speed'],
      'jumping': ['nhảy', 'jumping', 'nhảy cao', 'high_jump', 'nhảy xa', 'long_jump'],
      'swimming': ['bơi', 'swimming', 'dưới nước', 'underwater', 'đạp nước', 'paddling'],
      'climbing': ['leo', 'climbing', 'leo núi', 'mountain_climbing', 'leo tường', 'wall_climbing'],
      'crawling': ['bò', 'crawling', 'quỳ', 'kneeling', 'sàn', 'floor'],
      
      // Animation Combat
      'attacks': ['tấn công', 'attacks', 'đánh', 'hit', 'đấm', 'punch', 'đá', 'kick'],
      'defenses': ['phòng thủ', 'defenses', 'tránh', 'dodge', 'che', 'parry', 'block'],
      'magic_casting': ['phép thuật', 'magic', 'casting', 'thổi', 'blow', 'energy', 'mana'],
      'weapon_handling': ['vũ khí', 'weapons', 'kiếm', 'sword', 'cung', 'bow', 'dao', 'knife'],
      'dodging': ['né', 'dodging', 'tránh', 'avoid', 'lăn', 'roll'],
      
      // Animation Facial
      'facial_expressions': ['biểu cảm', 'expressions', 'cười', 'smile', 'khóc', 'cry', 'giận', 'angry'],
      'lip_sync': ['môi', 'lips', 'nói', 'speaking', 'động môi', 'mouth_movement'],
      'eye_movement': ['mắt', 'eyes', 'nhìn', 'looking', 'chớp', 'blinking', 'chớp mắt', 'eye_blink'],
      'emotions': ['cảm xúc', 'emotions', 'vui', 'happy', 'buồn', 'sad', 'sợ', 'scared'],
      'blinking': ['chớp', 'blinking', 'chớp mắt', 'eye_blink'],
      
      // Animation Idle
      'idle_poses': ['đứng', 'idle', 'standing', 'tư thế', 'pose', 'ngồi', 'sitting'],
      'gestures': ['cử chỉ', 'gestures', 'tay', 'hands', 'vẫy', 'waving', 'chỉ', 'pointing'],
      'breathing': ['thở', 'breathing', 'ngực', 'chest', 'hít thở', 'inhale_exhale'],
      'weight_shift': ['cân nặng', 'weight', 'chuyển trọng tâm', 'weight_shift', 'đứng thăng bằng', 'balance'],
      'subtle_movements': ['nhỏ', 'subtle', 'chuyển động nhỏ', 'small_movements', 'tinh tế', 'delicate'],
      
      // Technical Modeling
      'polygon_modeling': ['polygon', 'mesh', 'đa giác', 'vertices', 'edges', 'faces'],
      'topology': ['topology', 'edge_flow', 'loop', 'quads', 'tris'],
      'mesh_optimization': ['tối ưu', 'optimization', 'poly_count', 'decimation', 'reduction'],
      'subdivision': ['subdivision', 'smooth', 'catmull_clark', 'level'],
      'sculpting': ['điêu khắc', 'sculpting', 'digital_sculpting', 'brush', 'detail'],
      
      // Technical Texturing
      'uv_mapping': ['uv', 'mapping', 'unwrap', 'seams', 'islands'],
      'texture_creation': ['texture', 'diffuse', 'normal', 'specular', 'roughness'],
      'materials': ['vật liệu', 'materials', 'pbr', 'physically_based', 'shader'],
      'shaders': ['shader', 'glsl', 'hlsl', 'vertex', 'fragment'],
      'surface_properties': ['bề mặt', 'surface', 'reflective', 'transparent', 'emissive'],
      
      // Technical Rigging
      'skeleton_creation': ['xương', 'skeleton', 'bones', 'joint', 'hierarchy'],
      'bone_placement': ['đặt xương', 'bone_placement', 'joint_position', 'orientation'],
      'constraints': ['constraints', 'ik', 'fk', 'limit', 'driver'],
      'skinning': ['skinning', 'weight_painting', 'bind', 'influence'],
      'weight_painting': ['weight', 'painting', 'influence', 'vertex_weights'],
      
      // Technical Optimization
      'performance': ['performance', 'fps', 'optimization', 'speed', 'efficient'],
      'lod_creation': ['lod', 'level_of_detail', 'distance', 'culling'],
      'batching': ['batching', 'draw_calls', 'instancing', 'combine'],
      'draw_calls': ['draw_calls', 'rendering', 'gpu', 'optimization'],
      'memory_optimization': ['memory', 'ram', 'vram', 'compression', 'streaming'],
      
      // Story Plot
      'plot_development': ['cốt truyện', 'plot', 'story', 'narrative', 'beginning', 'middle', 'end'],
      'story_arcs': ['arc', 'character_development', 'journey', 'transformation'],
      'plot_twists': ['twist', 'surprise', 'unexpected', 'revelation'],
      'narrative_structure': ['structure', 'three_act', 'setup', 'confrontation', 'resolution'],
      'pacing': ['pacing', 'rhythm', 'tempo', 'tension', 'release'],
      
      // Story Dialogue
      'dialogue_writing': ['hội thoại', 'dialogue', 'conversation', 'talking', 'speaking'],
      'character_voice': ['giọng nói', 'voice', 'tone', 'accent', 'dialect'],
      'conversation_flow': ['flow', 'natural', 'realistic', 'back_and_forth'],
      'tone': ['tông', 'tone', 'mood', 'attitude', 'emotion'],
      'dialect': ['phương ngữ', 'dialect', 'slang', 'colloquial'],
      
      // Story Quest
      'quest_design': ['nhiệm vụ', 'quest', 'mission', 'task', 'objective'],
      'mission_structure': ['structure', 'goals', 'objectives', 'steps', 'phases'],
      'objectives': ['mục tiêu', 'objectives', 'goals', 'targets', 'aims'],
      'rewards': ['phần thưởng', 'rewards', 'loot', 'experience', 'items'],
      'quest_chains': ['chuỗi', 'chain', 'series', 'progression', 'unlock'],
      
      // Story Lore
      'lore_creation': ['lore', 'history', 'background', 'mythology', 'legends'],
      'world_history': ['lịch sử', 'history', 'timeline', 'events', 'eras'],
      'cultures': ['văn hóa', 'cultures', 'society', 'customs', 'traditions'],
      'religions': ['tôn giáo', 'religions', 'gods', 'deities', 'beliefs'],
      'geography': ['địa lý', 'geography', 'locations', 'places', 'regions'],
      
      // UI Layout
      'layout_design': ['layout', 'arrangement', 'positioning', 'organization', 'structure'],
      'composition': ['composition', 'balance', 'harmony', 'unity', 'visual_flow'],
      'visual_hierarchy': ['hierarchy', 'importance', 'emphasis', 'focus', 'attention'],
      'grid_systems': ['grid', 'columns', 'rows', 'spacing', 'alignment'],
      'spacing': ['spacing', 'padding', 'margins', 'gaps', 'white_space'],
      
      // UI Interactive
      'button_design': ['button', 'click', 'press', 'interaction', 'control'],
      'controls': ['controls', 'input', 'slider', 'dropdown', 'checkbox'],
      'interactions': ['interaction', 'hover', 'active', 'focus', 'states'],
      'feedback': ['feedback', 'response', 'animation', 'transition', 'visual'],
      'transitions': ['transition', 'animation', 'fade', 'slide', 'transform'],
      
      // UI Visual
      'color_theory': ['màu', 'color', 'palette', 'harmony', 'contrast', 'scheme'],
      'typography': ['font', 'text', 'typeface', 'readability', 'hierarchy'],
      'icon_design': ['icon', 'symbol', 'glyph', 'pictogram', 'metaphor'],
      'graphics': ['graphics', 'illustration', 'images', 'visuals', 'artwork'],
      'branding': ['brand', 'identity', 'logo', 'style_guide', 'consistency'],
      
      // UX Flow
      'user_flow': ['flow', 'journey', 'path', 'navigation', 'process'],
      'navigation': ['navigation', 'menu', 'breadcrumbs', 'tabs', 'wayfinding'],
      'usability': ['usability', 'ease_of_use', 'intuitive', 'learnable', 'efficient'],
      'accessibility': ['accessibility', 'a11y', 'screen_reader', 'keyboard', 'contrast'],
      'user_journey': ['journey', 'experience', 'touchpoints', 'emotions', 'satisfaction']
    };
    
    return keywordMap[capability] || [];
  }

  // Setup library event listeners
  setupLibraryEventListeners() {
    this.libraryManager.on('onItemAdded', (item) => {
      console.log(`Library: Added sub-agent item ${item.id} from ${item.subAgentType}`);
    });
    
    this.libraryManager.on('onItemRetrieved', (item) => {
      console.log(`Library: Retrieved cached sub-agent item ${item.id}`);
    });
  }

  // Process with sub-agent
  async processWithSubAgent(prompt, parentAgent, options = {}) {
    const subAgentType = this.detectSubAgent(prompt, parentAgent);
    const subAgent = this.subAgents.get(subAgentType);
    
    if (!subAgent) {
      throw new Error(`Sub-agent ${subAgentType} not found`);
    }

    console.log(`Using ${subAgent.name} (sub-agent of ${parentAgent})`);

    // Check library first for similar results
    if (options.useLibrary !== false) {
      const libraryResult = await this.searchSubAgentLibrary(prompt, subAgentType, options);
      if (libraryResult) {
        console.log('Using cached sub-agent result from library');
        return {
          result: libraryResult.result,
          processingChain: {
            mainAgent: parentAgent,
            subAgent: subAgentType,
            microAgent: null,
            level: 'library',
            libraryItemId: libraryResult.id
          },
          fromLibrary: true,
          libraryItem: libraryResult
        };
      }
    }

    try {
      // Check if we should use micro-agents for more specialized processing
      if (options.useMicroAgents !== false) {
        const { default: MicroAgentSystem } = await import('./microAgentSystem.js');
        const microAgentSystem = MicroAgentSystem;
        
        // Try to process with micro-agent first
        try {
          const microResult = await microAgentSystem.processWithMicroAgent(prompt, subAgentType, options);
          
          // Auto-save to library
          await this.saveSubAgentToLibrary(prompt, microResult, parentAgent, subAgentType);
          
          return {
            result: microResult,
            processingChain: {
              mainAgent: parentAgent,
              subAgent: subAgentType,
              microAgent: microAgentSystem.detectMicroAgent(prompt, subAgentType),
              level: 'micro'
            }
          };
        } catch (microError) {
          // Fall back to sub-agent if micro-agent fails
          console.log('Micro-agent failed, falling back to sub-agent:', microError.message);
        }
      }
      
      const result = await subAgent.process(prompt, options);
      
      // Auto-save to library
      await this.saveSubAgentToLibrary(prompt, result, parentAgent, subAgentType);
      
      return {
        result: result,
        processingChain: {
          mainAgent: parentAgent,
          subAgent: subAgentType,
          microAgent: null,
          level: 'sub'
        }
      };
    } catch (error) {
      throw error;
    }
  }

  // Search library for sub-agent results
  async searchSubAgentLibrary(prompt, subAgentType, options = {}) {
    try {
      const searchResults = this.libraryManager.searchLibrary(prompt, {
        agentType: subAgentType,
        minQuality: options.minLibraryQuality || 0.5,
        limit: 3
      });
      
      if (searchResults.length > 0) {
        return searchResults[0].item;
      }
      
      return null;
    } catch (error) {
      console.warn('Sub-agent library search failed:', error);
      return null;
    }
  }

  // Save sub-agent result to library
  async saveSubAgentToLibrary(prompt, result, parentAgent, subAgentType) {
    try {
      const libraryItem = {
        agentType: subAgentType,
        subAgentType: subAgentType,
        microAgentType: null,
        prompt: prompt,
        result: result,
        processingChain: {
          mainAgent: parentAgent,
          subAgent: subAgentType,
          microAgent: null,
          level: 'sub'
        },
        tokens: this.estimateTokens(prompt + result),
        processingTime: 0, // Would need to be tracked
        model: 'gpt-3.5-turbo',
        temperature: 0.7
      };
      
      const itemId = this.libraryManager.addToLibrary(libraryItem, {
        tags: this.generateSubAgentTags(prompt, subAgentType),
        category: this.categorizeSubAgentResult(subAgentType),
        quality: this.assessSubAgentResultQuality(result)
      });
      
      console.log(`Saved sub-agent result to library with ID: ${itemId}`);
      return itemId;
    } catch (error) {
      console.warn('Failed to save sub-agent result to library:', error);
      return null;
    }
  }

  // Generate tags for sub-agent library item
  generateSubAgentTags(prompt, subAgentType) {
    const tags = [subAgentType];
    const promptLower = prompt.toLowerCase();
    
    // Add parent agent tag
    const parentAgent = this.subAgents.get(subAgentType)?.parent;
    if (parentAgent) {
      tags.push(parentAgent);
    }
    
    // Content-based tags
    if (promptLower.includes('khuôn mặt') || promptLower.includes('face')) tags.push('face');
    if (promptLower.includes('tóc') || promptLower.includes('hair')) tags.push('hair');
    if (promptLower.includes('trang phục') || promptLower.includes('clothing')) tags.push('clothing');
    if (promptLower.includes('tính cách') || promptLower.includes('personality')) tags.push('personality');
    if (promptLower.includes('địa hình') || promptLower.includes('terrain')) tags.push('terrain');
    if (promptLower.includes('công trình') || promptLower.includes('building')) tags.push('building');
    if (promptLower.includes('cây') || promptLower.includes('tree')) tags.push('vegetation');
    if (promptLower.includes('ánh sáng') || promptLower.includes('lighting')) tags.push('lighting');
    
    return [...new Set(tags)];
  }

  // Categorize sub-agent result
  categorizeSubAgentResult(subAgentType) {
    const categoryMap = {
      'character_appearance': 'character_design',
      'character_hair': 'character_design',
      'character_clothing': 'character_design',
      'character_personality': 'character_design',
      'environment_terrain': 'environment_design',
      'environment_architecture': 'environment_design',
      'environment_vegetation': 'environment_design',
      'environment_lighting': 'environment_design',
      'animation_locomotion': 'animation',
      'animation_combat': 'animation',
      'animation_facial': 'animation',
      'animation_idle': 'animation',
      'technical_modeling': 'technical',
      'technical_texturing': 'technical',
      'technical_rigging': 'technical',
      'technical_optimization': 'technical',
      'story_plot': 'story',
      'story_dialogue': 'story',
      'story_quest': 'story',
      'story_lore': 'story',
      'ui_layout': 'ui_design',
      'ui_interactive': 'ui_design',
      'ui_visual': 'ui_design',
      'ux_flow': 'ui_design'
    };
    
    return categoryMap[subAgentType] || 'general';
  }

  // Assess sub-agent result quality
  assessSubAgentResultQuality(result) {
    if (!result || typeof result !== 'string') return 0.5;
    
    let score = 0.5;
    
    // Length factors
    if (result.length > 100) score += 0.1;
    if (result.length > 300) score += 0.1;
    if (result.length > 500) score += 0.1;
    
    // Structure factors
    if (result.includes('\n')) score += 0.1;
    if (result.match(/\d+\./)) score += 0.1;
    
    return Math.min(score, 1.0);
  }

  // Estimate token count
  estimateTokens(text) {
    return Math.ceil(text.length / 4);
  }

  // Sub-agent processing methods (simplified for brevity - each would have detailed prompts)
  async processCharacterAppearance(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Character Appearance Specialist. Chuyên thiết kế ngoại hình nhân vật 3D chi tiết.
Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. KHUÔN MẶT (shape, proportions, features)
2. THÂN HÌNH (height, weight, body type, proportions)  
3. DA DẺ (skin tone, texture, blemishes, details)
4. ĐẶC ĐIỂM NỔI BẬT (scars, tattoos, freckles, etc)

Mô tả chi tiết để modeling 3D.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processCharacterHair(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Hair Design Specialist. Chuyên thiết kế tóc và facial hair.
Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. KIỂU TÓC (cut, style, length, volume)
2. MÀU TÓC (base color, highlights, gradients)
3. CHẤT LIỆU (texture, thickness, shine)
4. FACIAL HAIR (beard, mustache, eyebrows if applicable)
5. STYLING (how it moves, falls, reacts to wind)

Mô tả chi tiết để hair modeling và texturing.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processCharacterClothing(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Clothing & Armor Specialist. Chuyên thiết kế trang phục.
Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LOẠI TRANG PHỤC (casual, formal, armor, fantasy)
2. CHẤT LIỆU (fabric, metal, leather, etc)
3. THIẾT KẾ (style, cut, fit, layers)
4. MÀU SẮC & PATTERNS (colors, designs, symbols)
5. PHỤ KIỆN (jewelry, belts, bags, weapons)
6. WEAR & TEAR (condition, damage, weathering)

Mô tả chi tiết để clothing modeling và texturing.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processCharacterPersonality(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Personality & Psychology Specialist. Chuyên phát triển tính cách nhân vật.
Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. TÍNH CÁCH CHÍNH (traits, characteristics, temperament)
2. TÂM LÝ (fears, desires, motivations, conflicts)
3. HÀNH VI (habits, mannerisms, reactions)
4. NỀN TẢNG (background history, life events)
5. MỐI QUAN HỆ (how they interact with others)
6. PHÁT TRIỂN (character arc, growth potential)

Mô tả chi tiết để character development và voice acting.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  // Add similar specialized methods for all other sub-agents...
  // (For brevity, showing just a few examples - full implementation would have all 24 methods)

  async processEnvironmentTerrain(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Terrain & Landscape Specialist. Chuyên thiết kế địa hình.
Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LOẠI ĐỊA HÌNH (mountains, valleys, plains, hills)
2. ĐẶC ĐIỂM (rock formations, erosion, vegetation patterns)
3. KÍCH THƯỚC (scale, height, area coverage)
4. CHẤT LIỆU (rock types, soil, sand, etc)
5. THIÊN NHIÊN (weathering, natural formations)
6. COMPATIBILITY (how it connects with other terrain types)

Mô tả chi tiết để terrain modeling và texturing.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processEnvironmentArchitecture(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Architecture Specialist. Chuyên thiết kế công trình.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LOẠI CÔNG TRÌNH (building type, purpose, era)
2. KIẾN TRÚC (style, materials, structure)
3. KÍCH THƯỚC (dimensions, scale, proportions)
4. CHI TIẾT (doors, windows, decorations, features)
5. TÌNH TRẠNG (new, old, ruined, maintained)
6. NGỮ CẢNH (how it fits in environment)

Mô tả chi tiết để architectural modeling.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processEnvironmentVegetation(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Vegetation & Nature Specialist. Chuyên thiết kế cây cối và thực vật.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LOẠI CÂY (trees, bushes, flowers, grass types)
2. ĐẶC ĐIỂM SINH HỌC (leaf shape, bark texture, root systems)
3. MÙA VÀ TÁC ĐỘNG (seasonal changes, growth patterns)
4. PHÂN BỐ (clustering, spacing, natural arrangements)
5. TƯƠNG TÁC VỚI MÔI TRƯỜNG (soil, water, sunlight needs)
6. CHI TIẾT NHỎ (branches, twigs, leaves, flowers, fruits)

Mô tả chi tiết để vegetation modeling.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processEnvironmentLighting(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Lighting & Atmosphere Specialist. Chuyên thiết kế ánh sáng và atmosphere.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. NGUỒN ÁNH SÁNG (sun, moon, artificial lights, fire)
2. CHẤT LƯỢNG ÁNH SÁNG (intensity, color temperature, softness)
3. BÓNG (shadow types, soft shadows, ambient occlusion)
4. THỜI TIẾT (rain, fog, snow, wind effects on light)
5. THỜI GIAN TRONG NGÀY (dawn, noon, dusk, night characteristics)
6. KHÔNG KHÍ (mood, atmosphere, emotional impact)

Mô tả chi tiết để lighting và atmosphere design.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processAnimationLocomotion(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Locomotion Specialist. Chuyên tạo chuyển động di chuyển.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LOẠI CHUYỂN ĐỘNG (walking, running, jumping, swimming, climbing)
2. BIỂU CẢM CƠ THỂ (body language, posture, movement quality)
3. TỐC ĐỘ VÀ NHỊP ĐỘ (speed variations, rhythm, cadence)
4. TƯƠNG TÁC VỚI MÔI TRƯỜNG (ground contact, obstacles, terrain)
5. ĐẶC ĐIỂM CÁ NHÂN (age, fitness, personality affecting movement)
6. CÁC CHUYỂN ĐỘNG CHUYÊN BIỆT (athletic movements, combat stances)

Mô tả chi tiết để locomotion animation.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processAnimationCombat(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Combat Specialist. Chuyên tạo chuyển động chiến đấu.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LOẠI TẤN CÔNG (strikes, kicks, throws, weapon attacks)
2. PHÒNG THỦ (blocks, parries, evasions, counters)
3. PHÉP THUẬT (spell casting, magical effects, energy attacks)
4. VŨ KHÍ (handling different weapons, weapon-specific movements)
5. REACTIONS (impact responses, pain reactions, fatigue)
6. COMBAT FLOW (combinations, transitions between moves)

Mô tả chi tiết để combat animation.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processAnimationFacial(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Facial Animation Specialist. Chuyên tạo biểu cảm khuôn mặt.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. BIỂU CẢM CƠ BẢN (happy, sad, angry, surprised, fearful)
2. CHI TIẾT MẶT (eye movement, eyebrow raises, mouth shapes)
3. LIP SYNC (mouth shapes for different phonemes, speech patterns)
4. CÁC CHUYỂN ĐỘNG NHỎ (blinking, breathing, micro-expressions)
5. CÁC BIỂU CẢM PHỨC TẠP (mixed emotions, subtle feelings)
6. TÍNH CÁCH CÁ NHÂN (how personality affects facial expressions)

Mô tả chi tiết để facial animation.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processAnimationIdle(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Idle & Gesture Specialist. Chuyên tạo tư thế đứng và cử chỉ.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. TƯ THẾ ĐỨNG (posture, stance, weight distribution)
2. CỬ CHỈ (hand gestures, arm movements, body language)
3. THỞ (breathing patterns, chest movement, subtle body shifts)
4. WEIGHT SHIFT (natural balance adjustments, subtle movements)
5. CÁC CHUYỂN ĐỘNG NHỎ (fidgeting, adjusting clothing, looking around)
6. TÍNH CÁCH TRONG TƯ THẾ (how personality affects idle stance)

Mô tả chi tiết để idle và gesture animation.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processTechnicalModeling(prompt, options = {}) {
    const specializedPrompt = `
Bạn là 3D Modeling Specialist. Chuyên modeling và topology.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. POLYGON MODELING (vertex placement, edge flow, face creation)
2. TOPOLOGY (clean edge loops, animation-friendly structure)
3. MESH OPTIMIZATION (polygon count reduction, efficiency)
4. SUBDIVISION (smooth mesh creation, detail levels)
5. SCULPTING (digital sculpting techniques, detail work)
6. TECHNICAL REQUIREMENTS (game engine compatibility, render optimization)

Mô tả chi tiết để 3D modeling workflow.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processTechnicalTexturing(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Texturing & Materials Specialist. Chuyên UV mapping và materials.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. UV MAPPING (efficient unwrapping, minimal distortion)
2. TEXTURE CREATION (diffuse, normal, specular, roughness maps)
3. MATERIALS (PBR materials, physically accurate properties)
4. SHADERS (custom shader creation, visual effects)
5. SURFACE PROPERTIES (reflection, transparency, emission)
6. OPTIMIZATION (texture resolution, memory usage)

Mô tả chi tiết để texturing và material creation.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processTechnicalRigging(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Rigging & Skeleton Specialist. Chuyên tạo skeleton và bones.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. SKELETON CREATION (bone hierarchy, joint placement)
2. BONE PLACEMENT (strategic positioning for deformation)
3. CONSTRAINTS (IK, FK, limits, drivers for realistic movement)
4. SKINNING (weight painting, vertex influence, smooth binding)
5. WEIGHT PAINTING (efficient weight distribution, cleanup)
6. CONTROLS (user-friendly rig interface, animation controls)

Mô tả chi tiết để rigging và skeleton setup.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processTechnicalOptimization(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Performance Optimization Specialist. Chuyên tối ưu performance.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. PERFORMANCE (FPS targets, bottleneck identification)
2. LOD CREATION (level of detail models, distance-based switching)
3. BATCHING (draw call reduction, instancing, combining meshes)
4. DRAW CALLS (rendering optimization, GPU efficiency)
5. MEMORY OPTIMIZATION (RAM/VRAM usage, texture compression)
6. PROFILING (performance analysis, optimization strategies)

Mô tả chi tiết để performance optimization.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processStoryPlot(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Plot Development Specialist. Chuyên phát triển cốt truyện.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. PLOT DEVELOPMENT (story structure, narrative arc)
2. STORY ARCS (character development, transformation journeys)
3. PLOT TWISTS (surprise elements, unexpected revelations)
4. NARRATIVE STRUCTURE (three-act structure, setup/confrontation/resolution)
5. PACING (story rhythm, tension and release timing)
6. THEMES (underlying messages, symbolic elements)

Mô tả chi tiết để compelling storytelling.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processStoryDialogue(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Dialogue & Voice Specialist. Chuyên viết dialogue và character voice.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. DIALOGUE WRITING (natural conversation, realistic speech patterns)
2. CHARACTER VOICE (unique speech patterns, vocabulary, tone)
3. CONVERSATION FLOW (natural back-and-forth, pacing)
4. TONE (emotional context, mood, attitude)
5. DIALECT (regional speech patterns, cultural influences)
6. SUBTEXT (hidden meanings, underlying emotions)

Mô tả chi tiết để authentic dialogue writing.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processStoryQuest(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Quest Design Specialist. Chuyên thiết kế quest và mission.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. QUEST DESIGN (compelling objectives, engaging tasks)
2. MISSION STRUCTURE (clear goals, logical progression)
3. OBJECTIVES (specific, measurable, achievable targets)
4. REWARDS (meaningful incentives, progression systems)
5. QUEST CHAINS (connected missions, narrative progression)
6. PLAYER MOTIVATION (intrinsic/extrinsic rewards, engagement)

Mô tả chi tiết để engaging quest design.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processStoryLore(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Lore & World-building Specialist. Chuyên xây dựng lore và history.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LORE CREATION (backstory, mythology, world history)
2. WORLD HISTORY (timeline, major events, historical periods)
3. CULTURES (societies, customs, traditions, values)
4. RELIGIONS (belief systems, deities, practices, rituals)
5. GEOGRAPHY (locations, regions, physical world features)
6. CONSISTENCY (maintaining logical coherence across lore)

Mô tả chi tiết để rich world-building.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processUILayout(prompt, options = {}) {
    const specializedPrompt = `
Bạn là UI Layout Specialist. Chuyên thiết kế layout và composition.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. LAYOUT DESIGN (element arrangement, spatial organization)
2. COMPOSITION (visual balance, harmony, unity)
3. VISUAL HIERARCHY (importance ordering, emphasis)
4. GRID SYSTEMS (structured layouts, alignment, consistency)
5. SPACING (padding, margins, white space usage)
6. RESPONSIVENESS (adaptation to different screen sizes)

Mô tả chi tiết để effective UI layout design.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processUIInteractive(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Interactive Elements Specialist. Chuyên thiết kế buttons và interactions.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. BUTTON DESIGN (click targets, visual feedback, states)
2. CONTROLS (input methods, sliders, dropdowns, checkboxes)
3. INTERACTIONS (hover effects, active states, focus indicators)
4. FEEDBACK (visual responses, animations, transitions)
5. TRANSITIONS (smooth state changes, micro-interactions)
6. ACCESSIBILITY (keyboard navigation, screen reader support)

Mô tả chi tiết để intuitive interactive design.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processUIVisual(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Visual Design Specialist. Chuyên thiết kế colors và typography.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. COLOR THEORY (palette selection, harmony, contrast)
2. TYPOGRAPHY (font selection, readability, hierarchy)
3. ICON DESIGN (symbolic representation, clarity, consistency)
4. GRAPHICS (illustrations, images, visual elements)
5. BRANDING (identity, logo, style guide consistency)
6. VISUAL CONSISTENCY (maintaining design language)

Mô tả chi tiết để cohesive visual design.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processUXFlow(prompt, options = {}) {
    const specializedPrompt = `
Bạn là UX Flow Specialist. Chuyên thiết kế user flow và navigation.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. USER FLOW (journey mapping, task completion paths)
2. NAVIGATION (menu systems, wayfinding, information architecture)
3. USABILITY (ease of use, intuitive design, learning curve)
4. ACCESSIBILITY (inclusive design, assistive technology support)
5. USER JOURNEY (emotional mapping, touchpoint analysis)
6. EXPERIENCE OPTIMIZATION (friction reduction, delight factors)

Mô tả chi tiết để seamless user experience design.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  // Helper method to call AI
  async callAI(prompt, options = {}) {
    try {
      console.log('[SubAgentSystem] Calling OllamaService with prompt:', prompt.substring(0, 100) + '...');
      
      const result = await this.ollamaService.generateResponse(prompt, {
        model: options.model || 'llama3.2:3b',
        max_tokens: options.maxTokens || 1200,
        temperature: options.temperature || 0.7,
        stream: false
      });
      
      console.log('[SubAgentSystem] OllamaService response received');
      return result;
    } catch (error) {
      console.error('[SubAgentSystem] Error calling OllamaService:', error);
      throw error;
    }
  }

  // ... (rest of the code remains the same)
  // Get all sub-agents for a parent agent
  getSubAgentsForParent(parentAgent) {
    return Array.from(this.subAgents.entries())
      .filter(([key, agent]) => agent.parent === parentAgent)
      .map(([key, agent]) => ({
        id: key,
        name: agent.name,
        description: agent.description,
        capabilities: agent.capabilities
      }));
  }

  // Get all available sub-agents
  getAllSubAgents() {
    return Array.from(this.subAgents.entries()).map(([key, agent]) => ({
      id: key,
      name: agent.name,
      parent: agent.parent,
      description: agent.description,
      capabilities: agent.capabilities
    }));
  }

  // Get micro-agents for a specific sub-agent
  async getMicroAgentsForSubAgent(subAgentType) {
    const { default: MicroAgentSystem } = await import('./microAgentSystem.js');
    const microAgentSystem = MicroAgentSystem;
    return microAgentSystem.getMicroAgentsForSubAgent(subAgentType);
  }

  // Get processing chain information
  getProcessingChainInfo() {
    return {
      levels: ['main_agent', 'sub_agent', 'micro_agent'],
      description: '3-level agent hierarchy for specialized processing',
      capabilities: {
        main_agent: 'General domain expertise',
        sub_agent: 'Specialized domain knowledge',
        micro_agent: 'Ultra-specialized expertise'
      }
    };
  }
}

export default new SubAgentSystem();
