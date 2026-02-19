# 🎭 3D MC Presenter PRO

Hệ thống MC ảo 3D chuyên nghiệp với lip-sync, điều khiển AI, và tối ưu cho livestream.

## ✨ Tính năng chính

- 🎭 **Lip-sync theo TTS** - Đồng bộ chuyển động miệng với giọng nói
- 💬 **Điều khiển bằng text chat** - Gõ lệnh trực tiếp
- 🤖 **Điều khiển bằng AI** - Tích hợp Gemini/GPT
- 🎬 **Nhiều animation** - Idle, Talk, Present, Gesture
- 📺 **Tối ưu cho livestream** - Hoàn hảo với OBS Browser Source
- 🎮 **UI điều khiển** - Nút bấm tiện lợi
- 📷 **Camera đa góc** - Default, Close-up, Wide, Side
- 📦 **Hiển thị sản phẩm 3D** - Quay xoay sản phẩm tự động

## 🚀 Quick Start

### 1. Chuẩn bị file 3D

Đặt file model của MC vào thư mục gốc:
```
mc_host.glb  // Model MC 3D của bạn
product.glb  // Model sản phẩm (tùy chọn)
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình API keys

Tạo file `.env`:
```env
# Chọn AI provider: gemini hoặc openai
AI_PROVIDER=gemini

# Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# OpenAI API Key (nếu dùng OpenAI)
OPENAI_API_KEY=your_openai_api_key_here

# Google TTS API Key
TTS_API_KEY=your_tts_api_key_here
```

### 4. Khởi động server

```bash
# Chạy server và frontend cùng lúc
npm run dev:full

# Hoặc chạy riêng lẻ
npm run dev          # Frontend only
npm run ai-server    # Backend only
```

### 5. Mở trình duyệt

Truy cập: `http://localhost:3001`

## 🎮 Cách sử dụng

### Điều khiển bằng UI

Sử dụng các nút ở góc phải màn hình:
- 🧍 **Idle** - Đứng yên
- 💬 **Talk** - Nói chuyện
- 👋 **Present** - Giới thiệu
- 🤚 **Gesture** - Cử chỉ tay
- 📷 **Camera** - Chuyển góc quay
- 📦 **Show Product** - Hiển thị sản phẩm

### Điều khiển bằng chat

Gõ lệnh vào ô chat bên dưới:

**Lệnh animation:**
- `idle` hoặc `đứng` - Chuyển về trạng thái đứng
- `talk` hoặc `nói` - Chuyển animation nói
- `present` hoặc `giới thiệu` - Animation giới thiệu
- `gesture` hoặc `tay` - Cử chỉ tay

**Lệnh hệ thống:**
- `camera` hoặc `máy quay` - Chuyển góc máy quay
- `sản phẩm` hoặc `product` - Hiển thị/ẩn sản phẩm

**Hỏi AI:**
Gõ bất kỳ câu hỏi nào, MC sẽ trả lời bằng AI và phát giọng nói.

## 📹 Tích hợp OBS

1. Mở OBS
2. Add Source → Browser
3. URL: `http://localhost:3001`
4. Width: 1920, Height: 1080
5. Custom CSS: 
```css
body { margin: 0; overflow: hidden; }
```

## 🏗️ Cấu trúc project

```
├── mc-presenter.html    # Frontend HTML
├── mc-presenter.js      # Frontend JavaScript
├── server.js            # Backend API server
├── mc_host.glb          # 3D MC model
├── product.glb          # 3D Product model
├── public/
│   └── audio/           # TTS audio files
└── .env                 # Environment variables
```

## 🤖 AI Integration

### Gemini API
1. Truy cập [Google AI Studio](https://aistudio.google.com/)
2. Tạo API key
3. Thêm vào `.env`: `GEMINI_API_KEY=your_key`

### OpenAI GPT
1. Truy cập [OpenAI Platform](https://platform.openai.com/)
2. Tạo API key
3. Thêm vào `.env`: `OPENAI_API_KEY=your_key`

### Google TTS
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Bật Text-to-Speech API
3. Tạo service account key
4. Thêm vào `.env`: `TTS_API_KEY=your_key`

## 🎨 Tùy chỉnh

### Thêm animation mới

Trong file `mc-presenter.js`, thêm vào hàm `playAnimation()`:

```javascript
// Thêm nút trong HTML
<button class="control-btn" onclick="playAnimation('Wave')">👋 Wave</button>

// Animation sẽ tự động được load từ model
```

### Tùy chỉnh camera

Sửa đối tượng `cameraPositions` trong `mc-presenter.js`:

```javascript
let cameraPositions = {
  custom: { 
    pos: new THREE.Vector3(2, 2, 3), 
    look: new THREE.Vector3(0, 1, 0) 
  }
};
```

### Tùy chỉnh lighting

Sửa phần lighting trong hàm `init()`:

```javascript
// Thêm đèn mới
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(0, 5, 0);
scene.add(spotLight);
```

## 🐛 Troubleshooting

### Model không load được
- Kiểm tra đường dẫn file `mc_host.glb`
- Đảm bảo file không quá lớn (<50MB)
- Kiểm tra console log để xem lỗi

### AI không trả lời
- Kiểm tra API key trong `.env`
- Kiểm tra kết nối internet
- Xem log server để debug

### TTS không hoạt động
- Kiểm tra Google TTS API key
- Đảm bảo có đủ quota
- Kiểm tra thư mục `public/audio` có tồn tại

### Camera không mượt
- Kiểm tra performance của máy
- Giảm quality renderer nếu cần
- Tắt shadows nếu performance kém

## 📝 API Endpoints

### POST /api/ai
```json
{
  "text": "Xin chào"
}
```

Response:
```json
{
  "reply": "Xin chào! Tôi là MC ảo...",
  "ttsUrl": "/audio/tts_1234567890.mp3",
  "provider": "gemini"
}
```

### GET /api/health
Kiểm tra trạng thái server

### GET /api/config
Kiểm tra cấu hình API keys

## 🚀 Performance Tips

1. **Optimize model**: Nén model 3D trước khi sử dụng
2. **Reduce polygons**: Dùng model low-poly cho real-time
3. **Texture compression**: Dùng texture format tối ưu
4. **LOD**: Implement Level of Detail cho model lớn
5. **Caching**: Cache TTS files để tránh gọi API liên tục

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa

## 🤝 Contributing

1. Fork project
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

**Made with ❤️ for Vietnamese streaming community**
