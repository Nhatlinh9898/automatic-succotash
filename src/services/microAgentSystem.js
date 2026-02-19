// Micro-Agent System - Đội agent tinh thông cho từng sub-agent
class MicroAgentSystem {
  constructor() {
    this.microAgents = new Map();
    this.initializeMicroAgents();
  }

  initializeMicroAgents() {
    // CHARACTER APPEARANCE MICRO-AGENTS
    this.microAgents.set('face_structure', {
      parent: 'character_appearance',
      name: 'Face Structure Specialist',
      description: 'Chuyên phân tích cấu trúc xương mặt, tỷ lệ vàng',
      capabilities: ['facial_bones', 'proportions', 'golden_ratio', 'symmetry'],
      expertise: 'anatomy',
      process: this.processFaceStructure.bind(this)
    });

    this.microAgents.set('eye_design', {
      parent: 'character_appearance',
      name: 'Eye Design Specialist',
      description: 'Chuyên thiết kế mắt, biểu cảm, màu mắt',
      capabilities: ['eye_shape', 'iris_color', 'eyelashes', 'eyebrows', 'expression'],
      expertise: 'detail',
      process: this.processEyeDesign.bind(this)
    });

    this.microAgents.set('skin_details', {
      parent: 'character_appearance',
      name: 'Skin Details Specialist',
      description: 'Chuyên thiết kế bề mặt da, texture, chi tiết nhỏ',
      capabilities: ['skin_texture', 'pores', 'freckles', 'scars', 'imperfections'],
      expertise: 'texture',
      process: this.processSkinDetails.bind(this)
    });

    // CHARACTER HAIR MICRO-AGENTS
    this.microAgents.set('hair_strands', {
      parent: 'character_hair',
      name: 'Hair Strands Specialist',
      description: 'Chuyên modeling từng sợi tóc, physics simulation',
      capabilities: ['individual_strands', 'hair_physics', 'wind_effects', 'movement'],
      expertise: 'physics',
      process: this.processHairStrands.bind(this)
    });

    this.microAgents.set('hair_color_gradient', {
      parent: 'character_hair',
      name: 'Hair Color Gradient Specialist',
      description: 'Chuyên thiết kế gradient màu tóc, highlights, shadows',
      capabilities: ['color_gradients', 'highlights', 'lowlights', 'root_growth'],
      expertise: 'color_theory',
      process: this.processHairColorGradient.bind(this)
    });

    // CHARACTER CLOTHING MICRO-AGENTS
    this.microAgents.set('fabric_physics', {
      parent: 'character_clothing',
      name: 'Fabric Physics Specialist',
      description: 'Chuyên mô phỏng vật liệu vải, gravity, collision',
      capabilities: ['cloth_simulation', 'gravity', 'wind', 'collision', 'folding'],
      expertise: 'physics',
      process: this.processFabricPhysics.bind(this)
    });

    this.microAgents.set('sewing_details', {
      parent: 'character_clothing',
      name: 'Sewing Details Specialist',
      description: 'Chuyên thiết kế chi tiết may vá, đường may, stitches',
      capabilities: ['stitches', 'seams', 'embroidery', 'patches', 'reinforcements'],
      expertise: 'craftsmanship',
      process: this.processSewingDetails.bind(this)
    });

    // ENVIRONMENT TERRAIN MICRO-AGENTS
    this.microAgents.set('rock_formation', {
      parent: 'environment_terrain',
      name: 'Rock Formation Specialist',
      description: 'Chuyên phân tích cấu trúc đá, địa chất, erosion',
      capabilities: ['sedimentary', 'igneous', 'metamorphic', 'erosion_patterns'],
      expertise: 'geology',
      process: this.processRockFormation.bind(this)
    });

    this.microAgents.set('water_flow', {
      parent: 'environment_terrain',
      name: 'Water Flow Specialist',
      description: 'Chuyên mô phỏng dòng nước, fluid dynamics',
      capabilities: ['fluid_dynamics', 'river_flow', 'waves', 'splashes', 'reflections'],
      expertise: 'physics',
      process: this.processWaterFlow.bind(this)
    });

    // ENVIRONMENT ARCHITECTURE MICRO-AGENTS
    this.microAgents.set('structural_integrity', {
      parent: 'environment_architecture',
      name: 'Structural Integrity Specialist',
      description: 'Chuyên phân tích kết cấu, load bearing, materials',
      capabilities: ['load_bearing', 'stress_analysis', 'material_strength', 'foundations'],
      expertise: 'engineering',
      process: this.processStructuralIntegrity.bind(this)
    });

    this.microAgents.set('architectural_styles', {
      parent: 'environment_architecture',
      name: 'Architectural Styles Specialist',
      description: 'Chuyên các phong cách kiến trúc, lịch sử, decorative elements',
      capabilities: ['gothic', 'roman', 'greek', 'modern', 'decorative_elements'],
      expertise: 'history',
      process: this.processArchitecturalStyles.bind(this)
    });

    // ANIMATION LOCOMOTION MICRO-AGENTS
    this.microAgents.set('gait_analysis', {
      parent: 'animation_locomotion',
      name: 'Gait Analysis Specialist',
      description: 'Chuyên phân tích dáng đi, biomechanics, weight distribution',
      capabilities: ['biomechanics', 'weight_distribution', 'gait_cycles', 'balance'],
      expertise: 'biomechanics',
      process: this.processGaitAnalysis.bind(this)
    });

    this.microAgents.set('foot_contact', {
      parent: 'animation_locomotion',
      name: 'Foot Contact Specialist',
      description: 'Chuyên thiết kế contact points, ground reaction forces',
      capabilities: ['ground_contact', 'impact_forces', 'friction', 'traction'],
      expertise: 'physics',
      process: this.processFootContact.bind(this)
    });

    // ANIMATION COMBAT MICRO-AGENTS
    this.microAgents.set('martial_techniques', {
      parent: 'animation_combat',
      name: 'Martial Techniques Specialist',
      description: 'Chuyên các kỹ thuật chiến đấu, stances, forms',
      capabilities: ['martial_arts', 'fighting_styles', 'weapon_techniques', 'combatives'],
      expertise: 'combat',
      process: this.processMartialTechniques.bind(this)
    });

    this.microAgents.set('impact_physics', {
      parent: 'animation_combat',
      name: 'Impact Physics Specialist',
      description: 'Chuyên mô phỏng va chạm, force transfer, reaction',
      capabilities: ['impact_forces', 'recoil', 'ragdoll', 'collision_response'],
      expertise: 'physics',
      process: this.processImpactPhysics.bind(this)
    });

    // TECHNICAL MODELING MICRO-AGENTS
    this.microAgents.set('topology_flow', {
      parent: 'technical_modeling',
      name: 'Topology Flow Specialist',
      description: 'Chuyên thiết kế edge flow, quad layout, deformation',
      capabilities: ['edge_flow', 'quad_layout', 'deformation_zones', 'animation_ready'],
      expertise: 'topology',
      process: this.processTopologyFlow.bind(this)
    });

    this.microAgents.set('subdivision_optimization', {
      parent: 'technical_modeling',
      name: 'Subdivision Optimization Specialist',
      description: 'Chuyên tối ưu subdivision levels, detail distribution',
      capabilities: ['subdivision_levels', 'detail_areas', 'performance_optimization'],
      expertise: 'optimization',
      process: this.processSubdivisionOptimization.bind(this)
    });

    // TECHNICAL TEXTURING MICRO-AGENTS
    this.microAgents.set('pbr_materials', {
      parent: 'technical_texturing',
      name: 'PBR Materials Specialist',
      description: 'Chuyên vật lý based rendering, material properties',
      capabilities: ['albedo', 'normal_maps', 'roughness', 'metallic', 'ambient_occlusion'],
      expertise: 'pbr',
      process: this.processPBRMaterials.bind(this)
    });

    this.microAgents.set('uv_efficiency', {
      parent: 'technical_texturing',
      name: 'UV Efficiency Specialist',
      description: 'Chuyên tối ưu UV space, texel density, seams',
      capabilities: ['uv_layout', 'texel_density', 'seam_placement', 'island_packing'],
      expertise: 'uv_technical',
      process: this.processUVEfficiency.bind(this)
    });

    // STORY PLOT MICRO-AGENTS
    this.microAgents.set('foreshadowing', {
      parent: 'story_plot',
      name: 'Foreshadowing Specialist',
      description: 'Chuyên thiết kế foreshadowing, subtle hints, callbacks',
      capabilities: ['subtle_hints', 'callbacks', 'symbolism', 'narrative_threads'],
      expertise: 'narrative_technique',
      process: this.processForeshadowing.bind(this)
    });

    this.microAgents.set('pacing_rhythm', {
      parent: 'story_plot',
      name: 'Pacing & Rhythm Specialist',
      description: 'Chuyên nhịp điệu câu chuyện, tension, release',
      capabilities: ['story_pacing', 'tension_building', 'emotional_peaks', 'breathing_room'],
      expertise: 'storytelling',
      process: this.processPacingRhythm.bind(this)
    });

    // UI LAYOUT MICRO-AGENTS
    this.microAgents.set('visual_hierarchy', {
      parent: 'ui_layout',
      name: 'Visual Hierarchy Specialist',
      description: 'Chuyên thiết kế hierarchy, focal points, eye tracking',
      capabilities: ['focal_points', 'eye_tracking', 'attention_guidance', 'importance_levels'],
      expertise: 'visual_design',
      process: this.processVisualHierarchy.bind(this)
    });

    this.microAgents.set('responsive_adaptation', {
      parent: 'ui_layout',
      name: 'Responsive Adaptation Specialist',
      description: 'Chuyên thiết kế responsive, breakpoints, adaptation',
      capabilities: ['breakpoints', 'screen_sizes', 'device_adaptation', 'orientation_changes'],
      expertise: 'responsive_design',
      process: this.processResponsiveAdaptation.bind(this)
    });
  }

  // Detect appropriate micro-agent
  detectMicroAgent(prompt, subAgentType) {
    const promptLower = prompt.toLowerCase();
    const subAgentMicroAgents = Array.from(this.microAgents.entries())
      .filter(([key, agent]) => agent.parent === subAgentType);
    
    if (subAgentMicroAgents.length === 0) return null;

    const scores = new Map();
    
    subAgentMicroAgents.forEach(([key, agent]) => {
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

    let bestMicroAgent = null;
    let highestScore = 0;
    
    scores.forEach((score, key) => {
      if (score > highestScore) {
        highestScore = score;
        bestMicroAgent = key;
      }
    });

    return highestScore > 0 ? bestMicroAgent : subAgentMicroAgents[0][0];
  }

  getKeywordsForCapability(capability) {
    const keywordMap = {
      // Face Structure
      'facial_bones': ['xương mặt', 'facial_bones', 'cấu trúc', 'structure', 'hộp sọ', 'skull'],
      'proportions': ['tỷ lệ', 'proportions', 'golden_ratio', 'tỷ lệ vàng', 'cân đối', 'symmetry'],
      'symmetry': ['đối xứng', 'symmetry', 'asymmetry', 'cân bằng', 'balance'],
      
      // Eye Design
      'eye_shape': ['hình mắt', 'eye_shape', 'mắt to', 'big_eyes', 'mắt hạnh', 'almond_eyes'],
      'iris_color': ['màu iris', 'iris_color', 'mống mắt', 'pupil', 'đồng tử'],
      'eyelashes': ['mi', 'eyelashes', 'lông mi', 'dài mi', 'long_eyelashes'],
      'expression': ['biểu cảm', 'expression', 'ánh mắt', 'gaze', 'nhìn'],
      
      // Skin Details
      'skin_texture': ['texture_da', 'skin_texture', 'lỗ chân lông', 'pores', 'bề mặt', 'surface'],
      'pores': ['lỗ chân lông', 'pores', 'pore_size', 'skin_pores'],
      'freckles': ['tàn nhang', 'freckles', 'đốm', 'spots', 'nốt ruồi', 'moles'],
      'scars': ['sẹo', 'scars', 'vết thương', 'wounds', 'đứt', 'cuts'],
      'imperfections': ['khuyết điểm', 'imperfections', 'lỗi', 'flaws', 'không hoàn hảo', 'imperfect'],
      
      // Hair Strands
      'individual_strands': ['sợi tóc', 'hair_strands', 'từng sợi', 'individual', 'chi tiết', 'detailed'],
      'hair_physics': ['physics_tóc', 'hair_physics', 'rung động', 'movement', 'động', 'dynamic'],
      'wind_effects': ['gió', 'wind_effects', 'bay', 'flying', 'động gió', 'wind_movement'],
      'movement': ['chuyển động', 'movement', 'di chuyển', 'motion', 'rung', 'vibration'],
      
      // Hair Color Gradient
      'color_gradients': ['gradient_màu', 'color_gradients', 'chuyển màu', 'color_transition', 'ombre'],
      'highlights': ['highlights', 'tóc_highlight', 'sáng', 'lighter', 'tông sáng', 'light_tones'],
      'lowlights': ['lowlights', 'tóc_lowlight', 'tối', 'darker', 'tông tối', 'dark_tones'],
      'root_growth': ['gốc tóc', 'root_growth', 'mọc lại', 'regrowth', 'roots'],
      
      // Fabric Physics
      'cloth_simulation': ['mô phỏng vải', 'cloth_simulation', 'vải bay', 'fabric_movement'],
      'gravity': ['trọng lực', 'gravity', 'rơi', 'falling', 'tự do', 'free_fall'],
      'wind': ['gió', 'wind', 'thổi', 'blowing', 'bay', 'flying'],
      'collision': ['va chạm', 'collision', 'tiếp xúc', 'contact', 'giao nhau', 'intersection'],
      'folding': ['gấp', 'folding', 'nếp', 'creases', 'nhăn', 'wrinkles'],
      
      // Sewing Details
      'stitches': ['mũi chỉ', 'stitches', 'đường may', 'sewing_lines', 'chỉ', 'thread'],
      'seams': ['đường nối', 'seams', 'may nối', 'joining', 'kết nối', 'connection'],
      'embroidery': ['thêu', 'embroidery', 'hoa văn', 'patterns', 'đính', 'decorative'],
      'patches': ['miếng vá', 'patches', 'vá', 'mending', 'sửa', 'repair'],
      'reinforcements': ['củng cố', 'reinforcements', 'lớp thêm', 'layers', 'bảo vệ', 'protection'],
      
      // Rock Formation
      'sedimentary': ['trầm tích', 'sedimentary', 'lắng đọng', 'deposition', 'lớp', 'layers'],
      'igneous': ['núi lửa', 'igneous', 'đá nóng', 'volcanic', 'magma', 'lava'],
      'metamorphic': ['biến chất', 'metamorphic', 'áp lực', 'pressure', 'nhiệt', 'heat'],
      'erosion_patterns': ['xói mòn', 'erosion', 'bào mòn', 'weathering', 'tự nhiên', 'natural'],
      
      // Water Flow
      'fluid_dynamics': ['dynamics_chất lỏng', 'fluid_dynamics', 'dòng chảy', 'flow_dynamics'],
      'river_flow': ['dòng sông', 'river_flow', 'dòng nước', 'water_flow', 'suối', 'stream'],
      'waves': ['sóng', 'waves', 'gợn sóng', 'ripples', 'biển', 'ocean'],
      'splashes': ['bắn nước', 'splashes', 'tưới', 'spray', 'hắt', 'splash_effect'],
      'reflections': ['phản chiếu', 'reflections', 'gương', 'mirror', 'ánh nước', 'water_reflection'],
      
      // Structural Integrity
      'load_bearing': ['chịu tải', 'load_bearing', 'nền', 'foundation', 'trụ', 'pillars'],
      'stress_analysis': ['phân tích ứng suất', 'stress_analysis', 'căng', 'tension', 'ép', 'compression'],
      'material_strength': ['độ bền vật liệu', 'material_strength', 'cứng', 'rigid', 'mềm', 'flexible'],
      'foundations': ['nền móng', 'foundations', 'móng', 'base', 'chân', 'footing'],
      
      // Architectural Styles
      'gothic': ['gothic', 'đ pointed_arch', 'ribbed_vault', 'flying_buttress'],
      'roman': ['roman', 'vòm', 'arches', 'cột', 'columns', 'concrete'],
      'greek': ['greek', 'cộtIonic', 'doric', 'corinthian', 'pediment'],
      'modern': ['hiện đại', 'modern', 'minimalist', 'glass', 'steel', 'clean_lines'],
      'decorative_elements': ['trang trí', 'decorative', 'ornaments', 'carvings', 'moldings'],
      
      // Gait Analysis
      'biomechanics': ['sinh học cơ học', 'biomechanics', 'cơ thể', 'body_mechanics'],
      'weight_distribution': ['phân bổ trọng lượng', 'weight_distribution', 'cân bằng', 'balance'],
      'gait_cycles': ['chu kỳ đi', 'gait_cycles', 'bước', 'steps', 'nhịp đi', 'rhythm'],
      'balance': ['cân bằng', 'balance', 'thăng bằng', 'equilibrium', 'ổn định', 'stability'],
      
      // Foot Contact
      'ground_contact': ['tiếp xúc đất', 'ground_contact', 'chân', 'feet', 'bàn chân', 'soles'],
      'impact_forces': ['lực tác động', 'impact_forces', 'va chạm', 'impact', 'đập', 'strike'],
      'friction': ['ma sát', 'friction', 'bám', 'grip', 'trượt', 'slip'],
      'traction': ['độ bám', 'traction', 'bám mặt', 'surface_grip', 'không trượt', 'non_slip'],
      
      // Martial Techniques
      'martial_arts': ['võ thuật', 'martial_arts', 'karate', 'taekwondo', 'kung_fu'],
      'fighting_styles': ['phong cách chiến đấu', 'fighting_styles', 'boxing', 'wrestling', 'mma'],
      'weapon_techniques': ['kỹ thuật vũ khí', 'weapon_techniques', 'kiếm', 'sword', 'dao', 'blade'],
      'combatives': ['chiến đấu', 'combatives', 'tự vệ', 'self_defense', 'cận chiến', 'close_combat'],
      
      // Impact Physics
      'impact_forces': ['lực va chạm', 'impact_forces', 'đập', 'hit', 'tác động', 'force'],
      'recoil': ['giật', 'recoil', 'phản lực', 'reaction_force', 'lùi', 'kickback'],
      'ragdoll': ['ragdoll', 'rơi tự do', 'free_fall', 'mềm oặt', 'limp'],
      'collision_response': ['phản ứng va chạm', 'collision_response', 'nảy', 'bounce', 'vật lý', 'physics'],
      
      // Topology Flow
      'edge_flow': ['edge_flow', 'đường biên', 'edge_loops', 'line_flow'],
      'quad_layout': ['quad_layout', 'tứ giác', 'quads', 'mesh_layout'],
      'deformation_zones': ['vùng biến dạng', 'deformation_zones', 'uốn', 'bending', 'co giãn'],
      'animation_ready': ['sẵn sàng animation', 'animation_ready', 'deformable', 'rig_friendly'],
      
      // Subdivision Optimization
      'subdivision_levels': ['subdivision_levels', 'chi tiết', 'detail_levels', 'smoothness'],
      'detail_areas': ['vùng chi tiết', 'detail_areas', 'high_poly', 'low_poly'],
      'performance_optimization': ['tối ưu performance', 'performance_optimization', 'fps', 'speed'],
      
      // PBR Materials
      'albedo': ['albedo', 'base_color', 'diffuse', 'màu cơ bản', 'fundamental_color'],
      'normal_maps': ['normal_maps', 'bề mặt', 'surface_detail', 'bumps', 'chi tiết bề mặt'],
      'roughness': ['roughness', 'nhám', 'rough_surface', 'mịn', 'smooth_surface'],
      'metallic': ['metallic', 'kim loại', 'metal', 'bóng', 'reflective'],
      'ambient_occlusion': ['ambient_occlusion', 'bóng đổ', 'shadows', 'contact_shadows'],
      
      // UV Efficiency
      'uv_layout': ['uv_layout', 'bung UV', 'unwrap', 'uv_islands'],
      'texel_density': ['texel_density', 'độ phân giải', 'resolution', 'pixel_density'],
      'seam_placement': ['đường nối', 'seam_placement', 'hidden_seams', 'invisible_seams'],
      'island_packing': ['sắp xếp islands', 'island_packing', 'uv_space', 'efficient_layout'],
      
      // Foreshadowing
      'subtle_hints': ['gợi ý tinh tế', 'subtle_hints', 'ẩn ý', 'hidden_meanings'],
      'callbacks': ['callbacks', 'liên kết', 'connections', 'references'],
      'symbolism': ['tượng trưng', 'symbolism', 'biểu tượng', 'metaphors'],
      'narrative_threads': ['sợi dây truyện', 'narrative_threads', 'story_lines', 'plot_threads'],
      
      // Pacing Rhythm
      'story_pacing': ['nhịp truyện', 'story_pacing', 'speed', 'tempo', 'rhythm'],
      'tension_building': ['xây dựng căng thẳng', 'tension_building', 'suspense', 'anticipation'],
      'emotional_peaks': ['đỉnh cảm xúc', 'emotional_peaks', 'climax', 'high_points'],
      'breathing_room': ['khoảng lặng', 'breathing_room', 'pause', 'rest', 'reflection'],
      
      // Visual Hierarchy
      'focal_points': ['điểm tập trung', 'focal_points', 'attention', 'focus_points'],
      'eye_tracking': ['theo dõi mắt', 'eye_tracking', 'eye_movement', 'visual_path'],
      'attention_guidance': ['hướng dẫn sự chú ý', 'attention_guidance', 'visual_flow'],
      'importance_levels': ['cấp độ quan trọng', 'importance_levels', 'priority', 'hierarchy'],
      
      // Responsive Adaptation
      'breakpoints': ['breakpoints', 'điểm ngắt', 'screen_sizes', 'device_sizes'],
      'screen_sizes': ['kích thước màn hình', 'screen_sizes', 'mobile', 'tablet', 'desktop'],
      'device_adaptation': ['thích nghi thiết bị', 'device_adaptation', 'responsive', 'adaptive'],
      'orientation_changes': ['thay đổi hướng', 'orientation_changes', 'portrait', 'landscape']
    };
    
    return keywordMap[capability] || [];
  }

  // Process with micro-agent
  async processWithMicroAgent(prompt, subAgentType, options = {}) {
    const microAgentType = this.detectMicroAgent(prompt, subAgentType);
    const microAgent = this.microAgents.get(microAgentType);
    
    if (!microAgent) {
      throw new Error(`Micro-agent ${microAgentType} not found`);
    }

    console.log(`Using ${microAgent.name} (micro-agent of ${subAgentType})`);

    try {
      const result = await microAgent.process(prompt, options);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Micro-agent processing methods
  async processFaceStructure(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Face Structure Specialist. Chuyên phân tích cấu trúc xương mặt và tỷ lệ vàng.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. CẤU TRÚC XƯƠNG MẶT (cranium, maxilla, mandible, zygomatic bones)
2. TỶ LỆ VÀNG (golden ratio proportions, facial thirds, fifths)
3. ĐỐI XỨNG (symmetry analysis, asymmetry corrections)
4. GÓC MẶT (facial angles, profile analysis, front view)
5. KHOẢNG CÁCH (interocular distance, nose-mouth-chin ratios)
6. ĐẶC ĐIỂM CHUNG (overall face shape, bone structure prominence)

Phân tích chi tiết để sculpting và modeling chính xác.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processEyeDesign(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Eye Design Specialist. Chuyên thiết kế mắt và biểu cảm.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. HÌNH DẠNG MẮT (almond, round, narrow, upturned, downturned)
2. IRIS & PUPIL (color patterns, size, light reaction)
3. EYELASHES (length, curl, density, direction)
4. EYEBROWS (shape, thickness, arch, hair pattern)
5. MẮT XUNG QUANH (eye sockets, tear ducts, corner details)
6. BIỂU CẢM (expression lines, eye movement range)

Thiết kế chi tiết để modeling và texturing mắt thực tế.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processSkinDetails(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Skin Details Specialist. Chuyên thiết kế bề mặt da và chi tiết nhỏ.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. TEXTURE DA (pore size, skin grain, surface irregularities)
2. LỖ CHÂN LÔNG (distribution, size variation, visibility)
3. ĐẶC ĐIỂM ĐỘC NHẤT (freckles, moles, beauty marks)
4. TÀN NHANG & SẸO (placement, size, color, healing stages)
5. DA DẺ (oily, dry, combination, skin conditions)
6. CHI TIẾT NHỎ (veins, subtle discolorations, age signs)

Thiết kế chi tiết để texturing da siêu thực.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processHairStrands(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Hair Strands Specialist. Chuyên modeling từng sợi tóc và physics.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. SỢI TÓC CÁ NHÂN (thickness variation, length distribution)
2. HƯỚNG TÓC (growth direction, flow patterns, parting)
3. PHYSICS PROPERTIES (stiffness, weight, bounce, clumping)
4. WIND EFFECTS (wind response, movement patterns)
5. TƯƠNG TÁC (collision with body, clothing, other hair)
6. DYNAMIC BEHAVIOR (animation considerations, simulation setup)

Phân tích chi tiết để hair simulation thực tế.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processHairColorGradient(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Hair Color Gradient Specialist. Chuyên thiết kế gradient màu tóc.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. MÀU NỀN (base color, undertones, natural pigmentation)
2. HIGHLIGHTS (placement, intensity, color selection)
3. LOWLIGHTS (shadow areas, depth creation, contrast)
4. GRADIENT TRANSITIONS (smooth blends, color bleeding)
5. ROOT GROWTH (natural root color, regrowth patterns)
6. LIGHT INTERACTION (how colors change in different lighting)

Thiết kế chi tiết cho hair coloring và texturing.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  // Add more micro-agent methods...
  async processFabricPhysics(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Fabric Physics Specialist. Chuyên mô phỏng vật liệu vải.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. CHẤT LIỆU PROPERTIES (weight, stiffness, stretch, shear)
2. GRAVITY RESPONSE (how fabric hangs and falls)
3. WIND INTERACTION (wind resistance, flutter effects)
4. COLLISION BEHAVIOR (body collision, self-collision)
5. FOLDING PATTERNS (natural creases, folding behavior)
6. DYNAMIC MOVEMENT (animation setup, simulation parameters)

Phân tích chi tiết cho cloth simulation.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  async processSewingDetails(prompt, options = {}) {
    const specializedPrompt = `
Bạn là Sewing Details Specialist. Chuyên thiết kế chi tiết may vá.

Phân tích yêu cầu: "${prompt}"

Cung cấp thông tin chi tiết về:
1. STITCH TYPES (running stitch, backstitch, overlock)
2. SEAM PLACEMENT (structural seams, decorative seams)
3. EMBROIDERY PATTERNS (designs, thread colors, techniques)
4. PATCHES & REPAIRS (wear patterns, repair methods)
5. REINFORCEMENT POINTS (stress areas, durability)
6. CRAFTSMANSHIP DETAILS (quality indicators, hand vs machine)

Thiết kế chi tiết cho realistic clothing modeling.
    `.trim();
    return await this.callAI(specializedPrompt, options);
  }

  // Helper method to call AI
  async callAI(prompt, options = {}) {
    const { default: AIService } = await import('./aiService.js');
    const aiService = new AIService();
    return await aiService.generatePrompt(prompt, {
      ...options,
      maxTokens: 1000,
      temperature: 0.6
    });
  }

  // Get micro-agents for sub-agent
  getMicroAgentsForSubAgent(subAgentType) {
    return Array.from(this.microAgents.entries())
      .filter(([key, agent]) => agent.parent === subAgentType)
      .map(([key, agent]) => ({
        id: key,
        name: agent.name,
        description: agent.description,
        capabilities: agent.capabilities,
        expertise: agent.expertise
      }));
  }

  // Get all micro-agents
  getAllMicroAgents() {
    return Array.from(this.microAgents.entries()).map(([key, agent]) => ({
      id: key,
      name: agent.name,
      parent: agent.parent,
      description: agent.description,
      capabilities: agent.capabilities,
      expertise: agent.expertise
    }));
  }

  // Get micro-agents by expertise
  getMicroAgentsByExpertise(expertise) {
    return Array.from(this.microAgents.entries())
      .filter(([key, agent]) => agent.expertise === expertise)
      .map(([key, agent]) => ({
        id: key,
        name: agent.name,
        parent: agent.parent,
        description: agent.description,
        capabilities: agent.capabilities
      }));
  }
}

export default new MicroAgentSystem();
