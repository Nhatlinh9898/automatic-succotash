# ⚡ 3D MC Presenter PRO - Quick Start (5 Minutes)

## 🎯 Goal: Get system running in 5 minutes

---

## ⏱️ 5-Minute Quick Setup

### Minute 1: Clone & Install
```bash
git clone https://github.com/Nhatlinh9898/automatic-succotash.git
cd "linh20220211/javascript/java/tao mo hinh 3D"
npm install
```

### Minute 2: Get API Keys
**Gemini API (Free):**
1. Go to: https://aistudio.google.com/
2. Login with Google
3. Click "Get API Key"
4. Copy key

**Google TTS API (Free tier):**
1. Go to: https://console.cloud.google.com/
2. Create project
3. Enable "Text-to-Speech API"
4. Create Service Account Key
5. Copy key

### Minute 3: Configure Environment
```bash
npm run setup-env
```
Paste your API keys when prompted.

### Minute 4: Start System
```bash
# Terminal 1 - Backend
npm run ai-server

# Terminal 2 - Frontend  
npm run dev:mc3d
```

### Minute 5: Test & Use
Open: http://localhost:3000

- **Character System**: http://localhost:3000/characters
- **MC Presenter**: http://localhost:3000/presenter

---

## 🎮 Basic Usage

### Try Character System
1. Go to http://localhost:3000/characters
2. Click different character avatars
3. Change outfits, hair, accessories
4. Click "🎲 Random Outfit"

### Try MC Presenter
1. Go to http://localhost:3000/presenter
2. Type in chat: "Xin chào"
3. Try commands: "Linh", "Mai", "camera"
4. Test animations with buttons

### OBS Setup (Optional)
1. Open OBS
2. Add Browser Source
3. URL: http://localhost:3000/presenter
4. Size: 1920x1080

---

## 🚨 Quick Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| "API key invalid" | Re-run `npm run setup-env` |
| "Cannot connect" | Check ports 3000 & 3001 are free |
| "No models" | System creates placeholders automatically |
| "No sound" | Check TTS API key and Google Cloud billing |

---

## 📋 Essential Commands

```bash
# Setup
npm run setup-env      # Interactive setup
npm install           # Install dependencies

# Run
npm run dev:full      # Both frontend & backend
npm run ai-server     # Backend only
npm run dev:mc3d      # Frontend only

# Test
curl http://localhost:3001/api/health
```

---

## 🎯 Success in 5 Minutes ✅

- [ ] System installed
- [ ] API keys configured  
- [ ] Backend running
- [ ] Frontend working
- [ ] Character selection works
- [ ] AI responses working
- [ ] Ready for streaming!

---

**Need help?** See [Complete Setup Guide](./SETUP-GUIDE.md)
