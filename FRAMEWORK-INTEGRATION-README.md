# 🚀 Web3D Framework + Server Integration

## Tổng quan

Integration này kết hợp Web3D Framework với các server backend để cung cấp một hệ thống 3D hoàn chỉnh với AI integration, real-time processing, và advanced features.

## 🏗️ Kiến trúc

### Servers

1. **Main Server** (`server.js`) - Port 3001
   - AI integration (Gemini & OpenAI)
   - Text-to-Speech (Google TTS)
   - Character system với personalities
   - Static file serving

2. **AI Server** (`src/server/ai-server.js`) - Port 8080
   - Rate limiting nâng cao
   - Batch processing
   - Security validation
   - Request monitoring

### Framework Components

1. **Web3D Framework** (`framework/Web3DFramework.js`)
   - Entity-Component-System architecture
   - Physics, Audio, Rendering systems
   - WebXR support (VR/AR)
   - Performance optimization

2. **Framework Service** (`src/services/frameworkService.js`)
   - Bridge giữa framework và servers
   - AI-powered 3D object generation
   - Shader creation với AI
   - State management

3. **Integration UI** (`src/components/FrameworkIntegration.jsx`)
   - Control panel cho AI interactions
   - 3D viewport với real-time preview
   - Server status monitoring
   - Batch processing interface

## 🚀 Quick Start

### Method 1: Sử dụng Batch Script (Recommended)

```bash
# Chạy batch script để start tất cả services
npm run integration
```

Hoặc trực tiếp:
```bash
start-integration.bat
```

### Method 2: Manual Start

```bash
# Terminal 1: Main Server
npm run ai-server

# Terminal 2: AI Server  
node src/server/ai-server.js

# Terminal 3: Development Server
npm run dev
```

### Method 3: Using NPM Script

```bash
npm run framework
```

## 🌐 Access Points

- **Main Application**: http://localhost:5173
- **Framework Integration**: Navigate đến "Framework" tab
- **Main Server API**: http://localhost:3001/api/health
- **AI Server API**: http://localhost:8080/health

## 🎮 Features

### AI-Powered 3D Generation
- Natural language đến 3D object conversion
- Character-based responses với personalities
- Real-time TTS (Text-to-Speech)
- Batch processing cho multiple requests

### Advanced 3D Capabilities
- Entity-Component-System architecture
- Physics simulation
- Audio processing
- WebXR (VR/AR) support
- Performance optimization (LOD, frustum culling)

### Server Integration
- Rate limiting và security
- Request monitoring và logging
- Character configuration system
- Health monitoring

## 🔧 Configuration

### Environment Variables

```bash
# AI Providers
GEMINI_API_KEY=your_gemini_key
OPENAI_API_KEY=your_openai_key
TTS_API_KEY=your_google_tts_key

# Server Configuration
AI_PROVIDER=gemini  # hoặc 'openai'
PORT=3001
```

### Character Configuration

Edit `character-config.json` để customize characters:

```json
{
  "characters": {
    "female1": {
      "name": "Linh",
      "voice": "vi-VN-Wavenet-A",
      "greeting": "Xin chào! Tôi là Linh."
    }
  },
  "personalities": {
    "professional": {
      "name": "chuyên nghiệp",
      "speakingStyle": "trang trọng, rõ ràng"
    }
  }
}
```

## 📝 Usage Examples

### 1. Generate 3D Object với AI

```javascript
// Trong Framework Integration UI
const description = "Create a red sphere with metallic material";
const object = await frameworkService.createAIObject(description);
```

### 2. Create Shader với AI

```javascript
const shaderDescription = "Create a water shader with waves";
const shader = await frameworkService.createAIShader(shaderDescription);
```

### 3. Batch AI Processing

```javascript
const requests = [
  { prompt: "Create a blue cube" },
  { prompt: "Create a green cylinder" },
  { prompt: "Create a yellow cone" }
];
const results = await frameworkService.batchAIProcess(requests);
```

## 🔍 API Endpoints

### Main Server (Port 3001)

- `POST /api/ai` - AI generation với character support
- `GET /api/health` - Server health check
- `GET /api/config` - Server configuration
- `GET /api/characters` - Character configurations

### AI Server (Port 8080)

- `POST /api/ai` - AI processing với rate limiting
- `POST /api/ai/batch` - Batch processing (max 5 requests)
- `GET /health` - Enhanced health check với system stats
- `GET /api/status` - Server status và features

## 🛠️ Development

### Project Structure

```
src/
├── components/
│   └── FrameworkIntegration.jsx    # Main integration UI
├── services/
│   └── frameworkService.js         # Framework-server bridge
framework/
├── Web3DFramework.js              # Core framework
├── core/                          # Core systems
├── optimization/                  # Performance systems
├── webxr/                        # VR/AR support
└── ai/                           # AI integration
server.js                         # Main server
src/server/ai-server.js           # AI server
```

### Adding New Features

1. **New AI Functionality**: Thêm vào `frameworkService.js`
2. **New UI Components**: Thêm vào `FrameworkIntegration.jsx`
3. **New Server Endpoints**: Thêm vào `server.js` hoặc `ai-server.js`

## 🔧 Troubleshooting

### Common Issues

1. **Port Conflicts**: Đảm bảo ports 3001, 8080, và 5173 available
2. **API Keys**: Set environment variables cho AI services
3. **CORS Issues**: Servers đã được cấu hình với CORS
4. **Memory Issues**: Framework có automatic memory management

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run integration
```

### Health Checks

```bash
# Check all services
curl http://localhost:3001/api/health
curl http://localhost:8080/health
```

## 📊 Performance

### Optimization Features

- **LOD System**: Level of Detail cho distant objects
- **Frustum Culling**: Render chỉ visible objects
- **Object Pooling**: Reuse objects để giảm garbage collection
- **Memory Management**: Automatic cleanup và tracking

### Monitoring

- Real-time server status
- Request logging và rate limiting
- Memory usage tracking
- Performance metrics

## 🚀 Deployment

### Production Setup

1. **Environment Variables**: Configure tất cả API keys
2. **HTTPS**: Setup SSL certificates
3. **Load Balancing**: Use nginx hoặc similar
4. **Monitoring**: Setup logging và alerting

### Docker Support

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001 8080 5173
CMD ["npm", "run", "integration"]
```

## 📚 Documentation

- [Web3D Framework Documentation](FRAMEWORK_README.md)
- [AI Workflow Guide](AI-WORKFLOW.md)
- [Setup Guide](SETUP-GUIDE.md)
- [Quick Start](QUICK-START.md)

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes với tests
4. Submit pull request

## 📄 License

MIT License - see LICENSE file cho details.

---

**🎉 Integration Complete!** 

Framework đã được tích hợp thành công với servers. Sử dụng "Framework" tab trong application để access tất cả features.
