# 🔧 Environment Setup Guide

## 📋 Files Available

### 1. `.env.setup` - Quick Setup (Recommended for beginners)
```bash
# Copy và điền API keys
npm run copy-env
# Edit .env với API keys của bạn
```

### 2. `.env.full` - Complete Configuration (Advanced users)
```bash
# Copy cho full options
cp .env.full .env
# Edit tất cả settings
```

### 3. `setup-env.js` - Interactive Setup (Easiest)
```bash
# Chạy interactive setup
npm run setup-env
```

## 🚀 Quick Start (3 steps)

### Step 1: Get API Keys

**Gemini API (Free):**
1. Truy cập: https://aistudio.google.com/
2. Đăng nhập bằng Google
3. Click "Get API Key"
4. Copy key

**Google TTS API (Free tier):**
1. Truy cập: https://console.cloud.google.com/
2. Tạo project mới
3. Enable "Cloud Text-to-Speech API"
4. Tạo Service Account Key

### Step 2: Setup Environment

**Option A - Interactive (Easiest):**
```bash
npm run setup-env
```

**Option B - Manual:**
```bash
npm run copy-env
# Edit .env file với API keys
```

**Option C - Advanced:**
```bash
cp .env.full .env
# Edit với full configuration
```

### Step 3: Run Application
```bash
npm install
npm run dev:full
```

## 🔑 Required API Keys

### Minimum Required:
- **Gemini API Key** (hoặc OpenAI/Claude)
- **Google TTS API Key**

### Optional:
- MongoDB URI (cho chat history)
- Redis URL (cho caching)
- AWS keys (cho cloud backup)

## 📁 File Structure

```
.env.setup          # Quick setup template
.env.full           # Full configuration template
.env                # Your actual environment file (gitignored)
setup-env.js        # Interactive setup script
```

## 🛠️ Configuration Options

### AI Provider Selection
```env
AI_PROVIDER=gemini    # Options: gemini, openai, claude
```

### Voice Configuration
```env
TTS_VOICE_FEMALE1=vi-VN-Wavenet-A  # Linh
TTS_VOICE_FEMALE2=vi-VN-Wavenet-B  # Mai
TTS_VOICE_FEMALE3=vi-VN-Wavenet-C  # An
TTS_VOICE_FEMALE4=vi-VN-Wavenet-D  # Huong
TTS_VOICE_FEMALE5=vi-VN-Wavenet-E  # Giang
TTS_VOICE_FEMALE6=vi-VN-Wavenet-F  # Trang
```

### Feature Flags
```env
ENABLE_AI_RESPONSES=true
ENABLE_TTS=true
ENABLE_LIP_SYNC=true
ENABLE_CHARACTER_SWITCHING=true
```

## 🔍 Troubleshooting

### Common Issues:

**"API key invalid"**
- Kiểm tra API key có đúng không
- Đảm bảo API được enabled trong console

**"TTS not working"**
- Kiểm tra Google Cloud billing setup
- Enable Text-to-Speech API

**"Cannot connect to backend"**
- Kiểm tra port 3001 có trống không
- Chạy `npm run ai-server` trước

**"Permission denied"**
- Chạy với quyền administrator
- Kiểm tra file permissions

### Debug Mode:
```env
DEBUG=true
DEBUG_AI=true
DEBUG_TTS=true
```

## 🎯 Best Practices

1. **Never commit .env to git**
2. **Use different keys for dev/prod**
3. **Regularly rotate API keys**
4. **Monitor API usage**
5. **Set up billing alerts**

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra console logs
2. Verify API keys
3. Check network connection
4. Review troubleshooting section

---

**Ready to stream! 🎭**
