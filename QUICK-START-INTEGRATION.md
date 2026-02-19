# 🚀 Quick Start: Web3D Framework + Server Integration

## ⚡ 5 Minutes Setup

### 1. 📋 Prerequisites

- Node.js 16+ installed
- Git (optional)
- Modern web browser

### 2. 🛠️ Installation

```bash
# Clone hoặc navigate đến project
cd "c:\Users\user03\Desktop\linh20220211\javascript\java\tao mo hinh 3D"

# Install dependencies
npm install
```

### 3. 🔑 Environment Setup

```bash
# Copy environment template
copy .env.example .env

# Edit .env file với API keys của bạn:
# GEMINI_API_KEY=your_gemini_key
# OPENAI_API_KEY=your_openai_key
# TTS_API_KEY=your_google_tts_key
```

### 4. 🚀 Start Integration

#### Method A: PowerShell Script (Recommended)
```bash
npm run integration
```

#### Method B: Manual Start
```bash
# Terminal 1: Main Server
npm run ai-server

# Terminal 2: AI Server
node src/server/ai-server.js

# Terminal 3: Development Server
npm run dev
```

#### Method C: Batch File
```bash
start-integration.bat
```

### 5. 🌐 Access Application

- **Main App**: http://localhost:5173
- **Framework Tab**: Navigate đến "Framework" tab
- **Demo Page**: Mở `demo-framework.html` trong browser

## 🎮 Usage Guide

### AI-Powered 3D Generation

1. **Mở Framework Tab** trong main application
2. **Nhập prompt** ví dụ: "Tạo một quả cầu màu đỏ"
3. **Click buttons**:
   - 💬 Generate Text: AI text response
   - 🎨 Create 3D Object: Tạo object 3D
   - ✨ Create Shader: Tạo shader code
   - 📦 Batch Process: Process nhiều requests

### Server Monitoring

- **Main Server**: http://localhost:3001/api/health
- **AI Server**: http://localhost:8080/health
- **Status indicators** trong UI show real-time status

### Features Available

#### 🤖 AI Features
- Natural language đến 3D object conversion
- Character-based responses với personalities
- Text-to-Speech (TTS) với Google TTS
- Batch processing cho multiple requests
- Real-time AI responses

#### 🎮 3D Framework Features
- Entity-Component-System architecture
- Physics simulation
- Audio processing
- WebXR (VR/AR) support
- Performance optimization
- Real-time rendering

#### 🔧 Server Features
- Rate limiting và security
- Request monitoring và logging
- Character configuration system
- Health monitoring
- CORS support

## 🛠️ Troubleshooting

### Common Issues

#### Port Conflicts
```bash
# Check ports đang sử dụng
netstat -ano | findstr :3001
netstat -ano | findstr :8080
netstat -ano | findstr :5173

# Kill processes nếu cần
taskkill /PID <PID> /F
```

#### API Keys Not Working
```bash
# Check environment variables
echo %GEMINI_API_KEY%
echo %OPENAI_API_KEY%

# Restart servers sau khi thay đổi env
npm run integration
```

#### Framework Not Loading
- Check browser console cho errors
- Ensure WebGL is supported
- Clear browser cache
- Try different browser

#### Server Connection Issues
```bash
# Test server endpoints
curl http://localhost:3001/api/health
curl http://localhost:8080/health

# Check server logs trong terminal windows
```

### Debug Mode

```bash
# Enable verbose logging
DEBUG=* npm run integration

# Check detailed errors
npm run dev 2>&1 | tee dev.log
```

## 📝 Example Prompts

### 3D Objects
- "Tạo một quả cầu màu đỏ với metallic material"
- "Create a blue box with glass texture"
- "Tạo một cây xanh với leaves"

### Shaders
- "Create water shader với realistic waves"
- "Make fire effect shader"
- "Tạo hologram shader sci-fi style"

### AI Characters
- "Tell me about 3D graphics"
- "Explain physics simulation"
- "Help me understand WebGL"

## 🎯 Next Steps

### Advanced Features
1. **Custom Characters**: Edit `character-config.json`
2. **Custom Shaders**: Use Shader Editor component
3. **VR/AR**: Enable WebXR trong compatible browsers
4. **Performance**: Monitor stats trong Framework tab

### Development
1. **Add New Components**: Extend framework modules
2. **Custom Servers**: Modify server endpoints
3. **Integration**: Connect external APIs
4. **Deployment**: Setup production environment

## 📚 Resources

### Documentation
- [Framework Integration README](FRAMEWORK-INTEGRATION-README.md)
- [AI Workflow Guide](AI-WORKFLOW.md)
- [Setup Guide](SETUP-GUIDE.md)
- [Framework README](FRAMEWORK_README.md)

### API References
- Main Server: http://localhost:3001/api/health
- AI Server: http://localhost:8080/health
- Framework: Available trong browser console

### Examples
- `demo-framework.html` - Standalone demo
- `src/components/FrameworkIntegration.jsx` - React component
- `src/services/frameworkService.js` - Service layer

## 🆘 Help & Support

### Getting Help
1. Check console logs cho errors
2. Verify server status indicators
3. Test individual components
4. Review documentation

### Common Questions
- **Q: Framework không load?** → Check WebGL support và server status
- **Q: AI responses không work?** → Verify API keys và server connection
- **Q: 3D objects không appear?** → Check scene initialization và lighting
- **Q: TTS không play?** → Check audio permissions và TTS API key

---

## 🎉 Success Criteria

✅ Bạn đã thành công khi có thể:
1. Mở application tại http://localhost:5173
2. Navigate đến Framework tab
3. Generate AI responses
4. Create 3D objects với AI
5. Monitor server status
6. Export framework state

**🚀 Integration Complete!** Enjoy exploring AI-powered 3D generation!
