# Micro-Agent System Documentation

## Overview

Hệ thống Micro-Agent là một kiến trúc 3 cấp độ xử lý chuyên sâu cho các tác vụ 3D:

```
Main Agents (6) → Sub-Agents (24) → Micro-Agents (30+)
```

## Architecture

### Level 1: Main Agents
- **Character Agent**: Thiết kế nhân vật tổng thể
- **Environment Agent**: Thiết kế môi trường và cảnh quan
- **Animation Agent**: Tạo chuyển động và animation
- **Technical Agent**: Xử lý kỹ thuật 3D
- **Story Agent**: Phát triển cốt truyện và nội dung
- **UI/UX Agent**: Thiết kế giao diện và trải nghiệm

### Level 2: Sub-Agents (24 agents)
Mỗi main agent có 4 sub-agents chuyên biệt:

#### Character Sub-Agents:
- `character_appearance`: Chuyên ngoại hình, khuôn mặt, thân hình
- `character_hair`: Chuyên tóc, màu tóc, facial hair
- `character_clothing`: Chuyên trang phục, giáp, phụ kiện
- `character_personality`: Chuyên tính cách, tâm lý, hành vi

#### Environment Sub-Agents:
- `environment_terrain`: Chuyên địa hình, cảnh quan tự nhiên
- `environment_architecture`: Chuyên công trình, buildings
- `environment_vegetation`: Chuyên cây cối, thực vật
- `environment_lighting`: Chuyên ánh sáng, thời tiết

#### Animation Sub-Agents:
- `animation_locomotion`: Chuyên chuyển động di chuyển
- `animation_combat`: Chuyên chuyển động chiến đấu
- `animation_facial`: Chuyên biểu cảm khuôn mặt
- `animation_idle`: Chuyên tư thế đứng, cử chỉ

#### Technical Sub-Agents:
- `technical_modeling`: Chuyên 3D modeling, topology
- `technical_texturing`: Chuyên UV mapping, texturing
- `technical_rigging`: Chuyên skeleton, rigging
- `technical_optimization`: Chuyên performance, LOD

#### Story Sub-Agents:
- `story_plot`: Chuyên phát triển cốt truyện
- `story_dialogue`: Chuyên viết dialogue, hội thoại
- `story_quest`: Chuyên thiết kế quest, nhiệm vụ
- `story_lore`: Chuyên xây dựng lore, world-building

#### UI/UX Sub-Agents:
- `ui_layout`: Chuyên thiết kế layout, composition
- `ui_interactive`: Chuyên buttons, controls, interactions
- `ui_visual`: Chuyên colors, typography, icons
- `ux_flow`: Chuyên user flow, navigation

### Level 3: Micro-Agents (30+ agents)
Mỗi sub-agent có 2-3 micro-agents siêu chuyên biệt:

#### Character Appearance Micro-Agents:
- `face_structure`: Cấu trúc xương mặt, tỷ lệ vàng
- `eye_design`: Thiết kế mắt, biểu cảm, màu mắt
- `skin_details`: Bề mặt da, texture, chi tiết nhỏ

#### Character Hair Micro-Agents:
- `hair_strands`: Modeling từng sợi tóc, physics
- `hair_color_gradient`: Gradient màu, highlights

#### Character Clothing Micro-Agents:
- `fabric_physics`: Mô phỏng vật liệu vải, gravity
- `sewing_details`: Chi tiết may vá, đường may

#### Environment Terrain Micro-Agents:
- `rock_formation`: Cấu trúc đá, địa chất
- `water_flow`: Mô phỏng dòng nước, fluid dynamics

#### Environment Architecture Micro-Agents:
- `structural_integrity`: Kết cấu, load bearing
- `architectural_styles`: Phong cách kiến trúc, lịch sử

#### Animation Locomotion Micro-Agents:
- `gait_analysis`: Dáng đi, biomechanics
- `foot_contact`: Contact points, ground forces

#### Animation Combat Micro-Agents:
- `martial_techniques`: Kỹ thuật chiến đấu, stances
- `impact_physics`: Va chạm, force transfer

#### Technical Modeling Micro-Agents:
- `topology_flow`: Edge flow, quad layout
- `subdivision_optimization`: Tối ưu subdivision

#### Technical Texturing Micro-Agents:
- `pbr_materials`: Physically based rendering
- `uv_efficiency`: Tối ưu UV space

#### Story Plot Micro-Agents:
- `foreshadowing`: Gợi ý tinh tế, callbacks
- `pacing_rhythm`: Nhịp điệu câu chuyện

#### UI Layout Micro-Agents:
- `visual_hierarchy`: Hierarchy, focal points
- `responsive_adaptation`: Responsive design

## Usage

### Basic Processing
```javascript
import AgentSystem from './services/agentSystem.js';

const agentSystem = AgentSystem;
const result = await agentSystem.processRequest("Tạo nhân vật chiến binh với tóc dài và giáp thép", {
  useSubAgents: true,
  useMicroAgents: true
});
```

### Processing Chain
Kết quả trả về bao gồm thông tin về chuỗi xử lý:
```javascript
{
  result: "Detailed response...",
  processingChain: {
    mainAgent: "character",
    subAgent: "character_clothing", 
    microAgent: "fabric_physics",
    level: "micro"
  }
}
```

### Direct Micro-Agent Access
```javascript
import MicroAgentSystem from './services/microAgentSystem.js';

const microAgentSystem = MicroAgentSystem;
const result = await microAgentSystem.processWithMicroAgent(
  "Phân tích vật liệu vải cho giáp thép",
  "character_clothing"
);
```

## Expertise Areas

Micro-Agents được phân loại theo chuyên môn:

- **anatomy**: Giải phẫu, cấu trúc cơ thể
- **physics**: Mô phỏng vật lý, dynamics
- **texture**: Bề mặt, vật liệu, texturing
- **color_theory**: Lý thuyết màu sắc
- **engineering**: Kỹ thuật, kết cấu
- **biomechanics**: Sinh học cơ học
- **combat**: Chiến đấu, võ thuật
- **optimization**: Tối ưu performance
- **pbr**: Physically based rendering
- **narrative_technique**: Kỹ thuật kể chuyện
- **visual_design**: Thiết kế thị giác
- **responsive_design**: Thiết kế responsive

## Features

### Smart Detection
- Tự động detect agent phù hợp dựa trên keywords
- Multi-level detection với fallback mechanism
- Context-aware processing

### Specialized Prompts
Mỗi micro-agent có prompt template chuyên biệt:
- Phân tích chi tiết theo chuyên môn
- Cấu trúc output chuẩn hóa
- Technical specifications

### Performance Optimization
- Lazy loading của agent systems
- Parallel processing khi có thể
- Graceful fallback khi micro-agent thất bại

## Interface Components

### MicroAgentManager Component
- Browse agent hierarchy
- Test processing chains
- View system statistics
- Interactive agent selection

### Key Features:
- 3-level agent visualization
- Real-time processing chain display
- Expertise color coding
- Responsive design

## Integration

### File Structure
```
src/
├── services/
│   ├── agentSystem.js          # Main agents
│   ├── subAgentSystem.js       # Sub-agents  
│   └── microAgentSystem.js     # Micro-agents
├── components/
│   ├── MicroAgentManager.jsx   # Management UI
│   └── MicroAgentManager.css   # Styling
```

### Dependencies
- React (for UI components)
- AIService (for AI processing)
- Dynamic imports for performance

## Benefits

1. **Ultra-Specialized Processing**: Mỗi micro-agent tập trung vào một khía cạnh cực nhỏ
2. **Better Accuracy**: Chuyên môn sâu → kết quả chính xác hơn
3. **Scalable Architecture**: Dễ dàng thêm agents mới
4. **Flexible Processing**: Có thể chọn level xử lý phù hợp
5. **Clear Responsibility**: Mỗi agent có vai trò rõ ràng

## Future Enhancements

- Add more micro-agents for specialized domains
- Machine learning for agent selection
- Performance metrics and analytics
- Agent collaboration protocols
- Custom agent creation tools

## Examples

### Example 1: Character Creation
```
Input: "Tạo nữ法师 với tóc bạc dài và trang phục ma thuật"
Chain: character → character_appearance → hair_strands
Focus: Hair physics, color gradients, styling
```

### Example 2: Environment Design  
```
Input: "Thiết kế thành phố cổ với sông chảy qua"
Chain: environment → environment_architecture → water_flow
Focus: Fluid dynamics, architectural styles, structural integrity
```

### Example 3: Combat Animation
```
Input: "Tạo animation kiếm thuật với nhịp điệu nhanh"
Chain: animation → animation_combat → martial_techniques
Focus: Sword techniques, impact physics, timing
```

## Conclusion

Hệ thống Micro-Agent cung cấp kiến trúc phân cấp 3 cấp độ cho xử lý chuyên sâu trong 3D content creation. Với 60+ agents chuyên biệt, hệ thống có thể xử lý các tác vụ phức tạp với độ chính xác và chi tiết cao.
