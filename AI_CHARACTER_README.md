# AI Character Generator - Gemini Integration

**Tự động tạo nhân vật 3D với AI Gemini** - Module AI cho Web3D Framework

## 🤖 **Tổng quan**

AI Character Generator là module mở rộng của Web3D Framework, cho phép tự động tạo nhân vật 3D sử dụng Google Gemini AI. Module này biến các mô tả văn bản thành nhân vật 3D hoàn chỉnh với backstory, animations và personality.

### ✨ **Tính năng**

- **🎨 AI-powered character generation** - Từ mô tả văn bản
- **🧠 Smart character design** - Gemini AI tạo chi tiết nhân vật
- **📖 Auto backstory generation** - Tạo câu chuyện nhân vật
- **🎭 Animation suggestions** - Gợi ý animations phù hợp
- **👥 Multiple character templates** - Human, Elf, Orc, Dragonborn
- **🔄 Real-time generation** - Tạo nhân vật tức thì
- **📱 Easy integration** - Dễ dàng tích hợp với framework

## 🔑 **Cài đặt Gemini API**

1. **Lấy API Key:**
   - Truy cập [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Tạo API key mới
   - Copy API key

2. **Bảo mật API Key:**
   ```javascript
   // Không bao giờ hardcode API key trong production
   const apiKey = process.env.GEMINI_API_KEY || 'your-api-key-here';
   ```

## 🚀 **Quick Start**

### Basic Usage
```javascript
import Web3DFramework, { AICharacterGenerator } from './framework/Web3DFramework.js';

// Initialize framework
const framework = new Web3DFramework();
framework.start();

// Create AI character generator
const aiGenerator = new AICharacterGenerator(framework, 'your-gemini-api-key');

// Initialize AI
await aiGenerator.init();

// Generate character
const character = await aiGenerator.generateCharacter(
    'A brave elven warrior with silver hair and glowing blue eyes'
);
```

### Advanced Usage
```javascript
// Generate with custom position
const position = new THREE.Vector3(10, 0, 5);
const character = await aiGenerator.generateCharacter(prompt, position);

// Get character data
const characterData = aiGenerator.getCharacter(character.id);
console.log(characterData.description.backstory);

// Export character
const exportData = aiGenerator.exportCharacter(character.id);
```

## 🎮 **Demo Features**

### Interactive Demo (`ai-character-demo.html`)
- **API Key Input** - Nhập Gemini API key
- **Character Prompts** - Mô tả nhân vật tự do
- **Quick Templates** - Templates có sẵn
- **Real-time Generation** - Tạo nhân vật tức thì
- **Character Gallery** - Xem tất cả nhân vật đã tạo
- **3D Visualization** - Xem nhân vật trong 3D scene

### Templates có sẵn
- **Wizard** - Phù thủy thông thái
- **Dragonborn** - Chiến binh rồng
- **Elf Archer** - Cung thủ elf
- **Rogue** - Kẻ lén lút
- **Knight** - Kị sĩ cao quý
- **Cyborg** - Người máy tương lai

## 🏗️ **Architecture**

### GeminiAIManager
```javascript
const gemini = new GeminiAIManager(apiKey);
await gemini.init();

// Generate character description
const character = await gemini.generateCharacterDescription(
    'A brave elven warrior with silver hair'
);

// Generate backstory
const backstory = await gemini.generateCharacterBackstory(character);

// Generate animation suggestions
const animations = await gemini.generateAnimationSuggestions(character);
```

### AICharacterGenerator
```javascript
const generator = new AICharacterGenerator(framework, apiKey);
await generator.init();

// Generate complete 3D character
const entity = await generator.generateCharacter(prompt, position);

// Access character data
const characterData = entity.userData.characterData;
```

## 📋 **Character Data Structure**

### Generated Character Format
```javascript
{
    "name": "Aldrin Silverleaf",
    "race": "Elf",
    "gender": "Male", 
    "age": "Adult",
    "height": "175",
    "build": "Athletic",
    "appearance": {
        "skinColor": "#FDBCB4",
        "hairColor": "#C0C0C0",
        "hairStyle": "Long flowing",
        "eyeColor": "#00BFFF",
        "facialFeatures": "Sharp angular features"
    },
    "clothing": {
        "style": "Fantasy warrior",
        "primaryColor": "#4169E1",
        "secondaryColor": "#C0C0C0",
        "accessories": ["Silver circlet", "Leather bracers"]
    },
    "personality": "Brave, honorable, protective",
    "specialFeatures": "Glowing blue eyes",
    "backstory": "Born in the ancient forests of Silverwood...",
    "animations": ["idle", "walk", "run", "attack", "defend"]
}
```

## 🎨 **Character Customization**

### Appearance Generation
- **Skin tone** - Tự động chọn màu da phù hợp
- **Hair color/style** - Dựa trên mô tả
- **Eye color** - Mắt đặc biệt (glowing, etc.)
- **Body type** - Slim, athletic, heavy

### Clothing System
- **Style categories** - Fantasy, sci-fi, casual, formal
- **Color schemes** - Tự động phối màu
- **Accessories** - Vũ khí, trang sức, armor

### Physical Features
- **Race-specific traits** - Elf ears, Orc tusks, Dragon scales
- **Special abilities** - Magic, cybernetics, elemental powers

## 🔧 **API Reference**

### GeminiAIManager Methods

#### `init()`
Initialize Gemini AI connection
```javascript
await gemini.init();
```

#### `generateCharacterDescription(prompt)`
Generate character description from text
```javascript
const character = await gemini.generateCharacterDescription(
    'A brave elven warrior with silver hair'
);
```

#### `generateCharacterBackstory(character)`
Generate character backstory
```javascript
const backstory = await gemini.generateCharacterBackstory(character);
```

#### `generateAnimationSuggestions(character)`
Suggest suitable animations
```javascript
const animations = await gemini.generateAnimationSuggestions(character);
```

### AICharacterGenerator Methods

#### `init()`
Initialize character generator
```javascript
await generator.init();
```

#### `generateCharacter(prompt, position)`
Generate complete 3D character
```javascript
const entity = await generator.generateCharacter(prompt, position);
```

#### `getCharacter(entityId)`
Get generated character data
```javascript
const character = generator.getCharacter(entityId);
```

#### `exportCharacter(entityId)`
Export character for saving
```javascript
const data = generator.exportCharacter(entityId);
```

#### `importCharacter(data)`
Import previously saved character
```javascript
const entity = await generator.importCharacter(data);
```

## 🎯 **Use Cases**

### Game Development
- **NPC Generation** - Tự động tạo NPC cho game
- **Character Customization** - Player character creation
- **Story Integration** - Characters với backstory tự động

### Animation & Film
- **Character Design** - Concept art generation
- **Storyboard Characters** - Quick character prototyping
- **Background Characters** - Crowd generation

### Education & Training
- **Historical Characters** - Educational simulations
- **Role-playing Scenarios** - Training characters
- **Language Learning** - Interactive characters

## 🚀 **Advanced Features**

### Custom Templates
```javascript
// Add custom character template
generator.characterTemplates.set('custom_race', {
    bodyType: 'custom_basic',
    defaultHeight: 180,
    defaultScale: new THREE.Vector3(1, 1, 1)
});
```

### Animation Integration
```javascript
// Auto-suggest animations based on character
const animations = await gemini.generateAnimationSuggestions(character);

// Apply animations to character
const animationComponent = entity.components.get('Animation');
animations.forEach(anim => {
    animationComponent.loadAnimation(anim);
});
```

### Batch Generation
```javascript
// Generate multiple characters
const prompts = [
    'A wise old wizard',
    'A fierce warrior',
    'A stealthy rogue'
];

const characters = await Promise.all(
    prompts.map(prompt => generator.generateCharacter(prompt))
);
```

## 📊 **Performance**

### Generation Times
- **Simple Character**: ~2-3 seconds
- **Complex Character**: ~5-8 seconds
- **With Backstory**: ~8-12 seconds

### API Usage
- **Character Description**: ~1 API call
- **With Backstory**: ~2 API calls
- **With Animations**: ~3 API calls

### Optimization Tips
- **Cache results** - Lưu character data
- **Batch requests** - Generate multiple characters
- **Template reuse** - Use templates for similar characters

## 🔒 **Security & Best Practices**

### API Key Security
```javascript
// Environment variables
const apiKey = process.env.GEMINI_API_KEY;

// Server-side proxy
const response = await fetch('/api/generate-character', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
});
```

### Rate Limiting
- **Gemini limits** - 60 requests per minute
- **Implement caching** - Reduce API calls
- **Batch operations** - Optimize requests

### Content Filtering
- **Safe prompts** - Filter inappropriate content
- **Character validation** - Validate generated data
- **Fallback options** - Default character templates

## 🌟 **Future Enhancements**

### Version 1.1
- [ ] **Voice Integration** - Text-to-speech for characters
- [ ] **Emotion System** - Character emotions and moods
- [ ] **Relationship System** - Character relationships
- [ ] **Skill System** - Character abilities and skills

### Version 1.2
- [ ] **Image Generation** - Character portraits with AI
- [ ] **Voice Synthesis** - Character voice generation
- [ ] **Behavioral AI** - Advanced character behaviors
- [ ] **Multi-language Support** - International character names

### Version 2.0
- [ ] **Full AI Director** - Story and character generation
- [ ] **Procedural Worlds** - AI-generated environments
- [ ] **Dynamic Dialogues** - AI conversation system
- [ ] **Learning Characters** - Characters that evolve

## 🛠️ **Troubleshooting**

### Common Issues

#### API Key Not Working
```javascript
// Check API key validity
const test = await gemini.generateText('Hello');
console.log(test); // Should return response
```

#### Character Generation Fails
```javascript
// Use fallback character
const fallback = gemini.getDefaultCharacter();
const entity = await generator.create3DCharacter(fallback);
```

#### Slow Generation
```javascript
// Optimize with templates
const template = generator.getCharacterTemplate('human_male');
const entity = await generator.create3DCharacter(template);
```

### Debug Mode
```javascript
// Enable debug logging
generator.debug = true;
gemini.debug = true;
```

## 📄 **License**

MIT License - Free cho commercial và non-commercial use

## 🙏 **Credits**

- **Google Gemini AI** - Character generation
- **Three.js** - 3D rendering
- **Web3D Framework** - Core framework

---

**AI Character Generator v1.0.0** - The future of AI-powered character creation 🤖✨
