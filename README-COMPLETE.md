# 🎭 3D MC Presenter PRO - Complete Documentation

## 📖 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage Guide](#usage-guide)
6. [Character System](#character-system)
7. [API Documentation](#api-documentation)
8. [Development](#development)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)
11. [Contributing](#contributing)
12. [License](#license)

---

## 🎯 Overview

3D MC Presenter PRO là một hệ thống MC ảo 3D chuyên nghiệp được xây dựng với React và Three.js, hỗ trợ:

- 🎭 **6 nhân vật nữ** với tính cách riêng biệt
- 👗 **Wardrobe system** với trang phục thay đổi
- 🤖 **AI Integration** (Gemini/OpenAI/Claude)
- 🗣️ **Lip-sync TTS** tự động
- 📹 **OBS Integration** cho livestream
- 🎮 **React-based UI** hiện đại
- 🔄 **Real-time customization**

### 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React UI    │    │  Backend API   │    │   AI Services  │
│               │    │               │    │               │
│ • Characters  │◄──►│ • Express.js  │◄──►│ • Gemini       │
│ • Wardrobe    │    │ • AI Router   │    │ • OpenAI       │
│ • Controls    │    │ • TTS Handler │    │ • Claude       │
│ • 3D Scene    │    │ • File Upload │    │ • Google TTS   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Three.js     │
                    │               │
                    │ • 3D Models   │
                    │ • Animations  │
                    │ • Lighting    │
                    │ • Camera      │
                    └─────────────────┘
```

---

## ✨ Features

### 🎭 Character System
- **6 Female Characters** với personalities riêng biệt
- **Real-time switching** giữa các nhân vật
- **Individual voice mapping** cho TTS
- **Personality-based AI responses**

### 👗 Wardrobe System
- **8 Outfit Types**: Casual, Formal, Elegant, Creative, Tech, Stage, Áo dài, Sport
- **6 Hair Styles**: Long, Short, Ponytail, Bun, Wavy, Straight
- **8 Accessories**: Glasses, Necklace, Earrings, Bracelet, Bag, Hat, Scarf
- **8 Color Options**: Red, Teal, Blue, Green, Yellow, Gray, Purple, Pink

### 🤖 AI Integration
- **Multiple AI Providers**: Gemini, OpenAI GPT, Claude
- **Personality-based responses** theo từng nhân vật
- **Vietnamese language support**
- **Context-aware conversations**

### 🗣️ TTS & Lip-sync
- **Google Text-to-Speech API** integration
- **Real-time lip-sync** với audio analysis
- **Voice mapping** cho từng nhân vật
- **Audio caching** cho performance

### 📹 Streaming Features
- **OBS Browser Source** compatible
- **Multiple camera angles**: Default, Close-up, Wide, Side
- **Smooth camera transitions**
- **Performance optimized** cho streaming

### 🎮 User Interface
- **React-based SPA** với routing
- **Responsive design** cho mobile/tablet
- **Real-time status updates**
- **Intuitive controls** với keyboard shortcuts

---

## 🚀 Installation

### Prerequisites
- Node.js 16.0+ 
- npm hoặc yarn
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/Nhatlinh9898/automatic-succotash.git
cd "linh20220211/javascript/java/tao mo hinh 3D"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Setup

#### Option A - Interactive Setup (Recommended)
```bash
npm run setup-env
```
Follow prompts để nhập API keys.

#### Option B - Manual Setup
```bash
npm run copy-env
# Edit .env file với API keys của bạn
```

#### Option C - Advanced Setup
```bash
cp .env.full .env
# Edit với full configuration options
```

### Step 4: Prepare 3D Models
```bash
# Tạo thư mục characters
mkdir -p characters

# Đặt các file model:
# - characters/female1.glb (Linh)
# - characters/female2.glb (Mai)
# - characters/female3.glb (An)
# - characters/female4.glb (Huong)
# - characters/female5.glb (Giang)
# - characters/female6.glb (Trang)
```

### Step 5: Run Application
```bash
# Full system (recommended)
npm run dev:full

# Hoặc chạy riêng lẻ:
npm run ai-server    # Backend API
npm run dev:mc3d     # React frontend
```

### Step 6: Access Application
- **React App**: http://localhost:3000
- **Character System**: http://localhost:3000/characters
- **MC Presenter**: http://localhost:3000/presenter
- **API Health**: http://localhost:3001/api/health

---

## ⚙️ Configuration

### Required API Keys

#### Google Gemini API (Free)
1. Truy cập: https://aistudio.google.com/
2. Đăng nhập bằng Google account
3. Click "Get API Key"
4. Copy key vào `GEMINI_API_KEY`

#### Google Text-to-Speech API
1. Truy cập: https://console.cloud.google.com/
2. Tạo project mới
3. Enable "Cloud Text-to-Speech API"
4. Tạo Service Account Key
5. Copy key vào `TTS_API_KEY`

#### OpenAI API (Optional)
1. Truy cập: https://platform.openai.com/
2. Đăng nhập và tạo API key
3. Nạp tiền vào account
4. Copy key vào `OPENAI_API_KEY`

### Environment Variables

#### Core Settings
```env
AI_PROVIDER=gemini                    # AI provider: gemini/openai/claude
PORT=3001                           # Backend port
NODE_ENV=development                  # Environment
DEFAULT_CHARACTER=female1             # Default character
```

#### AI Configuration
```env
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-pro
GEMINI_TEMPERATURE=0.7
GEMINI_MAX_TOKENS=1000

OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_TEMPERATURE=0.7
OPENAI_MAX_TOKENS=1000
```

#### TTS Configuration
```env
TTS_API_KEY=your_key_here
TTS_LANGUAGE_CODE=vi-VN
TTS_VOICE_NAME=vi-VN-Wavenet-A

# Voice mapping cho characters
TTS_VOICE_FEMALE1=vi-VN-Wavenet-A  # Linh
TTS_VOICE_FEMALE2=vi-VN-Wavenet-B  # Mai
TTS_VOICE_FEMALE3=vi-VN-Wavenet-C  # An
TTS_VOICE_FEMALE4=vi-VN-Wavenet-D  # Huong
TTS_VOICE_FEMALE5=vi-VN-Wavenet-E  # Giang
TTS_VOICE_FEMALE6=vi-VN-Wavenet-F  # Trang
```

#### Feature Flags
```env
ENABLE_AI_RESPONSES=true
ENABLE_TTS=true
ENABLE_LIP_SYNC=true
ENABLE_CHARACTER_SWITCHING=true
ENABLE_OUTFIT_CUSTOMIZATION=true
ENABLE_CAMERA_CONTROLS=true
```

---

## 📖 Usage Guide

### Character System (/characters)

#### Selecting Characters
1. Mở http://localhost:3000/characters
2. Click vào avatar của nhân vật muốn chọn
3. Character sẽ được load với outfit mặc định

#### Customizing Outfits
1. **Outfits**: Chọn từ 8 loại trang phục
2. **Hair**: Chọn từ 6 kiểu tóc
3. **Accessories**: Thêm kính, necklace, v.v.
4. **Colors**: Chọn màu sắc cho outfit
5. **Random**: Click "🎲 Random Outfit" để random

#### Character Profiles
| Character | Avatar | Personality | Voice | Best For |
|-----------|---------|-------------|--------|-----------|
| Linh | 👩‍💼 | Professional | vi-VN-Wavenet-A | Business, Education |
| Mai | 👩‍🎨 | Creative | vi-VN-Wavenet-B | Arts, Entertainment |
| An | 👩‍🔬 | Academic | vi-VN-Wavenet-C | Science, Research |
| Huong | 👩‍🏫 | Elegant | vi-VN-Wavenet-D | Fashion, Culture |
| Giang | 👩‍💻 | Tech | vi-VN-Wavenet-E | Technology, Gaming |
| Trang | 👩‍🎤 | Energetic | vi-VN-Wavenet-F | Events, Music |

### MC Presenter (/presenter)

#### Animation Controls
- **🧍 Idle**: Tư thế đứng yên
- **💬 Talk**: Animation nói chuyện
- **👋 Present**: Giới thiệu sản phẩm
- **🤚 Gesture**: Cử chỉ tay
- **🚶 Walk**: Animation đi bộ
- **💃 Dance**: Animation nhảy múa

#### Camera Controls
- **📷 Camera**: Chuyển giữa 4 góc quay
  - Default: Góc nhìn toàn cảnh
  - Close-up: Góc cận mặt
  - Wide: Góc rộng
  - Side: Góc từ bên

#### Chat Commands
```bash
# Character switching
"Linh" → Chuyển sang nhân vật Linh
"Mai" → Chuyển sang nhân vật Mai
"An" → Chuyển sang nhân vật An
"Huong" → Chuyển sang nhân vật Huong
"Giang" → Chuyển sang nhân vật Giang
"Trang" → Chuyển sang nhân vật Trang

# Animation commands
"nói" hoặc "talk" → Play talk animation
"đứng" hoặc "idle" → Play idle animation
"giới thiệu" hoặc "present" → Play present animation
"tay" hoặc "gesture" → Play gesture animation
"đi" hoặc "walk" → Play walk animation
"nhảy" hoặc "dance" → Play dance animation

# System commands
"camera" hoặc "máy quay" → Chuyển góc máy quay
"quần áo" hoặc "outfit" → Random outfit
```

#### AI Chat
Gõ bất kỳ câu hỏi nào, AI sẽ trả lời theo personality của nhân vật hiện tại:
- **Professional**: Trả lời trang trọng, rõ ràng
- **Creative**: Trả lời năng động, sáng tạo
- **Academic**: Trả lời chính xác, sâu sắc
- **Elegant**: Trả lời duyên dáng, nhẹ nhàng
- **Tech**: Trả lời hiện đại, technical
- **Energetic**: Trả lời tự tin, hoạt náo

---

## 👥 Character System Details

### Character Configuration Files

#### character-config.json Structure
```json
{
  "characters": {
    "female1": {
      "id": "female1",
      "name": "Linh",
      "avatar": "👩‍💼",
      "modelPath": "characters/female1.glb",
      "defaultOutfit": "casual",
      "personality": "professional",
      "voice": "female1",
      "description": "MC chuyên nghiệp, trang nhã"
    }
  },
  "wardrobe": {
    "outfits": { /* outfit definitions */ },
    "hair": { /* hair style definitions */ },
    "accessories": { /* accessory definitions */ },
    "colors": { /* color definitions */ }
  },
  "personalities": {
    "professional": {
      "name": "Chuyên nghiệp",
      "speakingStyle": "trang trọng, rõ ràng",
      "greeting": "Xin chào quý vị, tôi là [tên]"
    }
  }
}
```

### Model Requirements

#### 3D Model Specifications
- **Format**: GLB/GLTF 2.0
- **Size**: < 50MB
- **Polygons**: < 100K (recommended)
- **Textures**: 1024x1024 or 2048x2048
- **Animations**: Include idle, talk, present, gesture, walk, dance

#### Required Bone Structure
```
Root
├── Hips
│   ├── Spine
│   │   ├── Chest
│   │   │   ├── Neck
│   │   │   │   ├── Head
│   │   │   │   │   └── Jaw (required for lip-sync)
│   │   │   ├── LeftArm
│   │   │   │   └── LeftHand
│   │   │   └── RightArm
│   │   │       └── RightHand
│   ├── LeftLeg
│   │   └── LeftFoot
│   └── RightLeg
│       └── RightFoot
```

---

## 🔌 API Documentation

### Endpoints

#### POST /api/ai
Process AI requests with character context.

**Request:**
```json
{
  "text": "Xin chào",
  "character": "female1",
  "personality": "professional"
}
```

**Response:**
```json
{
  "reply": "Xin chào quý vị, tôi là Linh...",
  "ttsUrl": "/audio/tts_1234567890.mp3",
  "provider": "gemini",
  "character": "female1",
  "personality": "professional"
}
```

#### GET /api/characters
Get character configuration.

**Response:**
```json
{
  "characters": { /* character definitions */ },
  "wardrobe": { /* wardrobe definitions */ },
  "personalities": { /* personality definitions */ }
}
```

#### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "provider": "gemini",
  "timestamp": "2024-02-19T10:00:00.000Z"
}
```

#### GET /api/config
Get API configuration status.

**Response:**
```json
{
  "provider": "gemini",
  "hasGeminiKey": true,
  "hasOpenAIKey": false,
  "hasTTSKey": true
}
```

### Error Handling

#### Standard Error Response
```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2024-02-19T10:00:00.000Z"
}
```

#### Error Codes
- `INVALID_API_KEY`: API key không hợp lệ
- `RATE_LIMIT_EXCEEDED`: Vượt rate limit
- `MODEL_NOT_FOUND`: Model không tìm thấy
- `TTS_ERROR`: Lỗi TTS generation
- `AI_SERVICE_ERROR`: Lỗi AI service

---

## 🛠️ Development

### Project Structure
```
├── src/
│   ├── components/
│   │   ├── CharacterSystem.jsx    # Character selection UI
│   │   ├── MCPresenter.jsx       # MC presenter UI
│   │   └── ThreeJSScene.jsx     # Three.js React component
│   ├── MC3DApp.jsx            # Main React app
│   ├── main-mc3d.jsx          # Entry point
│   └── services/
│       └── aiService.js        # AI service layer
├── characters/                 # 3D model files
├── public/
│   └── audio/                # TTS audio files
├── server.js                 # Backend API server
├── character-config.json     # Character configuration
├── vite.mc3d.config.js     # Vite config for React
└── package.json             # Dependencies and scripts
```

### Development Commands

```bash
# Development
npm run dev:mc3d      # React frontend only
npm run ai-server      # Backend API only
npm run dev:full       # Both frontend and backend

# Environment setup
npm run setup-env      # Interactive environment setup
npm run copy-env       # Copy environment template

# Building
npm run build         # Production build
npm run preview       # Preview production build

# Utilities
npm run lint          # ESLint checking
npm run test          # Run tests
```

### Code Style Guidelines

#### React Components
- Use functional components với hooks
- Implement proper error boundaries
- Use PropTypes hoặc TypeScript
- Follow React best practices

#### Three.js Integration
- Use useEffect cho lifecycle management
- Proper cleanup trong useEffect
- Implement dispose methods
- Optimize performance với caching

#### API Integration
- Implement proper error handling
- Use async/await cho API calls
- Implement retry logic cho network errors
- Cache responses khi appropriate

### Testing

#### Unit Tests
```bash
npm run test
```

#### Integration Tests
```bash
npm run test:integration
```

#### E2E Tests
```bash
npm run test:e2e
```

---

## 🚀 Deployment

### Production Build

```bash
# Build React app
npm run build

# Build output: dist-mc3d/
```

### Docker Deployment

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "ai-server"]
```

#### docker-compose.yml
```yaml
version: '3.8'
services:
  mc-presenter:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - AI_PROVIDER=gemini
    volumes:
      - ./public/audio:/app/public/audio
```

### Cloud Deployment

#### Vercel (Frontend)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Railway/Render (Backend)
```bash
# Deploy backend
railway up
# hoặc
render deploy
```

#### Environment Variables in Production
- Set all required environment variables
- Use secure secret management
- Enable HTTPS
- Configure proper CORS

---

## 🔧 Troubleshooting

### Common Issues

#### Model Loading Problems
**Symptom:** Character không hiển thị
**Solutions:**
- Kiểm tra đường dẫn file GLB
- Đảm bảo file không quá lớn
- Kiểm tra browser console logs
- Verify model format compatibility

#### AI Integration Issues
**Symptom:** AI không trả lời
**Solutions:**
- Verify API keys trong .env
- Check network connectivity
- Monitor API quota usage
- Test API endpoints manually

#### TTS Problems
**Symptom:** Không có giọng nói
**Solutions:**
- Check Google Cloud billing
- Enable Text-to-Speech API
- Verify TTS_API_KEY
- Check audio permissions

#### Performance Issues
**Symptom:** Lag hoặc chậm
**Solutions:**
- Reduce model complexity
- Optimize texture sizes
- Enable model caching
- Check browser performance

#### OBS Integration Issues
**Symptom:** Không hiển thị trong OBS
**Solutions:**
- Check Browser Source URL
- Verify CORS settings
- Ensure server is running
- Check OBS version compatibility

### Debug Mode

Enable debug logging:
```env
DEBUG=true
DEBUG_THREEJS=true
DEBUG_AI=true
DEBUG_TTS=true
```

### Log Analysis

#### Server Logs
```bash
# View real-time logs
npm run ai-server

# Check specific errors
grep ERROR logs/app.log
```

#### Client Logs
- Open browser DevTools
- Check Console tab
- Monitor Network tab
- Review Three.js warnings

### Performance Monitoring

#### Key Metrics
- FPS (target: 60fps)
- Memory usage
- API response times
- Model loading times

#### Optimization Tips
- Use LOD cho complex models
- Implement texture compression
- Enable geometry compression
- Cache frequently used assets

---

## 🤝 Contributing

### Development Workflow

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### Code Standards

#### JavaScript/React
- Use ESLint configuration
- Follow Prettier formatting
- Write meaningful comments
- Include JSDoc documentation

#### 3D Assets
- Optimize models before commit
- Include proper texture naming
- Document animation names
- Test in multiple browsers

### Testing Requirements

- Unit tests cho new functions
- Integration tests cho API endpoints
- Browser compatibility testing
- Performance impact assessment

### Documentation Updates

- Update README cho new features
- Document API changes
- Include troubleshooting steps
- Add examples cho usage

---

## 📄 License

MIT License

Copyright (c) 2024 3D MC Presenter PRO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **React** - UI framework
- **Google** - Gemini API & TTS
- **OpenAI** - GPT API
- **Anthropic** - Claude API
- **Vite** - Build tool
- **OBS** - Streaming software

---

## 📞 Support

### Documentation
- [Complete Guide](./README-COMPLETE.md)
- [API Reference](./API-REFERENCE.md)
- [Troubleshooting](./TROUBLESHOOTING.md)

### Community
- [GitHub Issues](https://github.com/Nhatlinh9898/automatic-succotash/issues)
- [Discord Server](https://discord.gg/mc-presenter)
- [YouTube Channel](https://youtube.com/@mc-presenter)

### Contact
- Email: support@mc-presenter.com
- Website: https://mc-presenter.com

---

**Made with ❤️ for Vietnamese streaming community**

*Last updated: February 2024*
