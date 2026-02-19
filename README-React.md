# 🎭 3D MC Presenter - React Version

Hệ thống MC ảo 3D chuyên nghiệp được tích hợp hoàn chỉnh với React, hỗ trợ nhiều nhân vật và trang phục thay đổi.

## ✨ Tính năng chính

- 🎭 **6 nhân vật nữ** với tính cách riêng biệt
- 👗 **8 loại trang phục** và 6 kiểu tóc
- 🎨 **8 màu sắc** và 8 loại phụ kiện
- 🤖 **AI Integration** với Gemini/GPT
- 🗣️ **Lip-sync TTS** tự động
- 📷 **Camera đa góc** với chuyển động mượt
- 🎮 **React Components** hiện đại
- 🔄 **React Router** cho navigation

## 🚀 Quick Start

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Cấu hình API keys

Copy `.env.example` → `.env` và thêm API keys:
```env
AI_PROVIDER=gemini
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
TTS_API_KEY=your_tts_api_key_here
```

### 3. Khởi động hệ thống

```bash
# Chạy backend API
npm run ai-server

# Chạy React frontend (trong terminal khác)
npm run dev:mc3d

# Hoặc chạy cả hai cùng lúc
npm run dev:full
```

### 4. Mở trình duyệt

- **React Version**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Character System**: http://localhost:3000/characters
- **MC Presenter**: http://localhost:3000/presenter

## 📁 Cấu trúc React Project

```
src/
├── MC3DApp.jsx              # Main App component
├── main-mc3d.jsx           # Entry point
├── MC3DApp.css             # Main styles
└── components/
    ├── CharacterSystem.jsx   # Character selection & wardrobe
    ├── MCPresenter.jsx      # MC presenter interface
    ├── ThreeJSScene.jsx     # Three.js scene component
    ├── CharacterSystem.css  # Character system styles
    └── MCPresenter.css     # MC presenter styles
```

## 🎮 Sử dụng

### Character System (/characters)

1. **Chọn nhân vật**: Click vào avatar của nhân vật
2. **Tùy chỉnh trang phục**: 
   - 👚 Outfits: Casual, Formal, Elegant, Creative, Tech, Stage, Áo dài, Sport
   - 💄 Hair: Long, Short, Ponytail, Bun, Wavy, Straight
   - 👠 Accessories: Glasses, Necklace, Earrings, Bracelet, Bag, Hat, Scarf
   - 🎨 Colors: 8 màu sắc khác nhau
3. **Random outfit**: Click nút 🎲 để random trang phục

### MC Presenter (/presenter)

1. **Animation controls**: 
   - 🧍 Idle, 💬 Talk, 👋 Present, 🤚 Gesture, 🚶 Walk, 💃 Dance
2. **Chat commands**:
   - "Linh", "Mai", "An", "Huong", "Giang", "Trang" → Chuyển nhân vật
   - "nói", "giới thiệu", "tay", "đi", "nhảy" → Animation
   - "camera", "máy quay" → Chuyển góc quay
3. **AI Chat**: Gõ bất kỳ câu hỏi nào để AI trả lời

## 👥 Characters

| Nhân vật | Avatar | Tính cách | Mô tả |
|---------|---------|-----------|---------|
| Linh | 👩‍💼 | Professional | MC chuyên nghiệp, trang nhã |
| Mai | 👩‍🎨 | Creative | MC sáng tạo, năng động |
| An | 👩‍🔬 | Academic | MC học thuật, thông thái |
| Huong | 👩‍🏫 | Elegant | MC thanh lịch, duyên dáng |
| Giang | 👩‍💻 | Tech | MC công nghệ, hiện đại |
| Trang | 👩‍🎤 | Energetic | MC sôi nổi, hoạt náo |

## 🎨 Wardrobe System

### Outfits
- **Casual** (👕) - Trang phục thường ngày
- **Formal** (👔) - Trang phục công sở  
- **Elegant** (👗) - Váy dạ hội thanh lịch
- **Creative** (🎨) - Trang phục sáng tạo
- **Tech** (💻) - Trang phục công nghệ
- **Stage** (🎤) - Trang phục sân khấu
- **Áo dài** (👘) - Trang phục truyền thống
- **Sport** (🏃‍♀️) - Trang phục thể thao

### Hair Styles
- **Long Hair** (💇‍♀️) - Tóc dài
- **Short Hair** (👩‍🦱) - Tóc ngắn
- **Ponytail** (🦸‍♀️) - Tóc đuôi ngựa
- **Bun** (👩‍🦳) - Tóc búi
- **Wavy** (🌊) - Tóc sóng
- **Straight** (➖) - Tóc thẳng

### Accessories
- **Glasses** (👓) - Kính
- **Necklace** (📿) - Dây chuyền
- **Earrings** (💎) - Bông tai
- **Bracelet** (⌚) - Vòng tay
- **Bag** (👜) - Túi xách
- **Hat** (👒) - Mũ
- **Scarf** (🧣) - Khăn choàng

## 🤖 AI Integration

### Personality-based Responses
Mỗi nhân vật có personality riêng, AI sẽ trả lời theo phong cách tương ứng:

- **Professional**: Trang trọng, rõ ràng
- **Creative**: Năng động, thân thiện  
- **Academic**: Chính xác, sâu sắc
- **Elegant**: Duyên dáng, nhẹ nhàng
- **Tech**: Hiện đại, trực quan
- **Energetic**: Tự tin, hoạt náo

### Voice Mapping
Mỗi nhân vật có voice riêng trong TTS:
- Linh → vi-VN-Wavenet-A
- Mai → vi-VN-Wavenet-B
- An → vi-VN-Wavenet-C
- Huong → vi-VN-Wavenet-D
- Giang → vi-VN-Wavenet-E
- Trang → vi-VN-Wavenet-F

## 📹 OBS Integration

1. Mở OBS
2. Add Source → Browser
3. URL: `http://localhost:3000/presenter`
4. Width: 1920, Height: 1080
5. Custom CSS:
```css
body { margin: 0; overflow: hidden; }
```

## 🔧 Development

### Commands
```bash
npm run dev:mc3d      # Chạy React frontend
npm run ai-server      # Chạy backend API
npm run dev:full       # Chạy cả hai
npm run build          # Build production
npm run preview        # Preview production build
```

### File Structure
```
├── src/
│   ├── components/          # React components
│   ├── MC3DApp.jsx        # Main app
│   └── main-mc3d.jsx      # Entry point
├── character-config.json    # Character configuration
├── server.js              # Backend API
└── vite.mc3d.config.js    # Vite config for React
```

## 🎯 Customization

### Thêm nhân vật mới
1. Thêm vào `character-config.json`
2. Thêm model vào `characters/`
3. Update `CharacterSystem.jsx`

### Thêm trang phục mới
1. Thêm vào wardrobe config
2. Update `ThreeJSScene.jsx`
3. Add textures/materials

### Thêm animation mới
1. Add vào model GLB
2. Update animation list
3. Add control buttons

## 🐛 Troubleshooting

### React không load
- Kiểm tra `npm run dev:mc3d`
- Kiểm tra port 3000 có trống không

### Model không load
- Kiểm tra đường dẫn `characters/[name].glb`
- Kiểm tra console log

### AI không trả lời
- Kiểm tra API keys trong `.env`
- Kiểm tra backend port 3001

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa

---

**Made with ❤️ cho React & Vietnamese streaming community**
