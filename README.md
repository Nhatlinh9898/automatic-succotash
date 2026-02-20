# Three.js 3D Model Library

🎨 **mô hình 3d thư viện code** - Comprehensive Three.js 3D modeling library with animations, effects, and interactive controls.

## 📖 Overview

This project contains a complete Three.js library collection extracted from a 48,885-line tutorial file, organized into modular, reusable components for 3D web development.

## 🚀 Features

- ✅ **Modular Architecture** - 8 specialized library modules
- ✅ **750+ Character Animations** - Extensive motion library
- ✅ **Particle Systems** - Rain, snow, and custom effects
- ✅ **Environment Setup** - Sky, ground, water systems
- ✅ **User Interactions** - Mouse, keyboard, and touch controls
- ✅ **Advanced Lighting** - PBR materials and dynamic shadows
- ✅ **Model Loading** - Support for .glTF, .obj formats
- ✅ **Custom Animations** - Keyframe and procedural animations

## 📁 Project Structure

```
├── library/                 # Main library modules
│   ├── basic_setup.js      # Scene, camera, renderer setup
│   ├── model_loader.js     # 3D model loading utilities
│   ├── lighting_materials.js # Lighting and PBR materials
│   ├── user_interaction.js  # Mouse/keyboard controls
│   ├── animations.js       # Custom animation system
│   ├── environment.js      # Sky, ground, water effects
│   ├── particles_effects.js # Particle systems
│   └── index.js           # Main entry point
├── examples/              # Usage examples
├── docs/                 # Documentation
├── parts/                # Original split files (49 parts)
└── README.md            # This file
```

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Nhatlinh9898/automatic-succotash.git
cd automatic-succotash

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📚 Quick Start

```javascript
import * as ThreeJSUtils from './library/index.js';

// Create basic scene
const { scene, camera, renderer, cube } = ThreeJSUtils.createBasicScene();

// Add lighting
ThreeJSUtils.addBasicLighting(scene);

// Add user controls
const controls = ThreeJSUtils.setupOrbitControls(camera, renderer);
ThreeJSUtils.addKeyboardControls(cube);

// Create environment
ThreeJSUtils.createSky(scene);
ThreeJSUtils.createGround(scene);

// Add weather effects
const { rain, animateRain } = ThreeJSUtils.createRainEffect(scene);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    animateRain();
    renderer.render(scene, camera);
}
animate();
```

## 📖 Documentation

### Library Modules

#### 🎯 Basic Setup
- `createBasicScene()` - Initialize scene, camera, renderer
- Basic animated cube example

#### 📦 Model Loading
- `loadModel(scene, path, callback)` - Load .glTF/.obj models
- `loadAnimatedModel(scene, path, renderer, camera)` - Load with animations

#### 💡 Lighting & Materials
- `addBasicLighting(scene)` - Point light setup
- `createPBRMaterial()` - Physically-based rendering materials
- `addDynamicLighting(scene)` - Animated lighting effects
- `addRealisticShadows(renderer, scene)` - Shadow mapping

#### 🖱️ User Interaction
- `setupOrbitControls(camera, renderer)` - Mouse orbit controls
- `addMouseInteraction(object)` - Click interactions
- `addKeyboardControls(object)` - Arrow key controls
- `addMouseMoveInteraction(object)` - Mouse follow

#### 🎬 Animations
- `createCustomAnimation(object)` - Custom keyframe animations
- `createLoopAnimation(object)` - Looping path animations
- `createComplexAnimation(object)` - Multi-track animations

#### 🌍 Environment
- `createSky(scene)` - Sky dome
- `createSkybox(scene, textures)` - 360° skybox
- `createGround(scene)` - Ground plane
- `createWater(scene)` - Water surface

#### ✨ Particle Effects
- `createParticleSystem(scene, count, color)` - Generic particles
- `createRainEffect(scene)` - Animated rain
- `createSnowEffect(scene)` - Animated snow with sway

## 🎮 Examples

### Basic 3D Scene
```javascript
import { createBasicScene, addBasicLighting } from './library/index.js';
const { scene, camera, renderer } = createBasicScene();
addBasicLighting(scene);
```

### Interactive Model
```javascript
import { loadModel, setupOrbitControls } from './library/index.js';
loadModel(scene, 'model.glb');
setupOrbitControls(camera, renderer);
```

### Weather Effects
```javascript
import { createRainEffect, createSnowEffect } from './library/index.js';
const { rain, animateRain } = createRainEffect(scene);
const { snow, animateSnow } = createSnowEffect(scene);
```

## 🛠️ Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📋 Requirements

- **Three.js** r158+
- **Node.js** 16.0.0+
- **Modern browser** with WebGL support
- **ES6 module** support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Components and Licensing

#### Voice Generation Components
The voice generation features in this project utilize the PersonaPlex model with the following licensing terms:

**Governing Terms:** Use of this model is governed by the NVIDIA Open Model License Agreement.

**Additional Information:** CC-BY-4.0

**Citation:**
```bibtex
@misc{roy2026personaplexvoicerolecontrol,
      title={PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models}, 
      author={Rajarshi Roy and Jonathan Raiman and Sang-gil Lee and Teodor-Dumitru Ene and Robert Kirby and Sungwon Kim and Jaehyeon Kim and Bryan Catanzaro},
      year={2026},
      eprint={2602.06053},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2602.06053}, 
}
```

**Important Notes:**
- The voice generation components are subject to the NVIDIA Open Model License Agreement
- Additional CC-BY-4.0 terms apply to the PersonaPlex model
- Users must comply with both the MIT License for this project and the NVIDIA Open Model License Agreement for voice components
- Proper attribution must be included when using the PersonaPlex model

#### Other Dependencies
- **Three.js** - MIT License
- **React** - MIT License
- **Other dependencies** - Various open source licenses (see package.json)

## 🙏 Acknowledgments

- Three.js team for the amazing 3D library
- Original tutorial content (48,885 lines) that was organized into this library
- All contributors and users of this library

## 📞 Contact

- **GitHub:** [Nhatlinh9898](https://github.com/Nhatlinh9898)
- **Repository:** https://github.com/Nhatlinh9898/automatic-succotash
- **Issues:** https://github.com/Nhatlinh9898/automatic-succotash/issues

---

⭐ **Star this repository if it helped you!** ⭐
