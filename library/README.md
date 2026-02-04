# Three.js Library Collection

A comprehensive collection of Three.js utilities organized into modular libraries for easy use in 3D web applications.

## Library Structure

### 📁 basic_setup.js
- `createBasicScene()` - Creates basic scene, camera, renderer with animated cube
- Foundation for any Three.js project

### 📁 model_loader.js
- `loadModel(scene, modelPath, callback)` - Load .glTF/.obj models
- `loadAnimatedModel(scene, modelPath, renderer, camera)` - Load models with animations
- Support for complex 3D models with skeleton systems

### 📁 lighting_materials.js
- `addBasicLighting(scene)` - Add point light
- `createPBRMaterial()` - Create physically-based rendering material
- `addDynamicLighting(scene)` - Animated lighting effects
- `addRealisticShadows(renderer, scene)` - Shadow mapping setup

### 📁 user_interaction.js
- `setupOrbitControls(camera, renderer)` - Mouse orbit controls
- `addMouseInteraction(object)` - Click interactions
- `addKeyboardControls(object)` - Arrow key controls
- `addMouseMoveInteraction(object)` - Mouse follow interaction

### 📁 animations.js
- `createCustomAnimation(object)` - Custom keyframe animations
- `createLoopAnimation(object)` - Looping path animations
- `createComplexAnimation(object)` - Multi-track complex animations

### 📁 environment.js
- `createSky(scene)` - Simple sky dome
- `createSkybox(scene, texturePaths)` - 360° skybox
- `createGround(scene)` - Ground plane with shadows
- `createWater(scene)` - Water surface

### 📁 particles_effects.js
- `createParticleSystem(scene, count, color)` - Generic particle system
- `createRainEffect(scene)` - Animated rain particles
- `createSnowEffect(scene)` - Animated snow particles with sway

### 📁 index.js
- Main entry point exporting all functions
- Example usage included

## Quick Start

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

// Add effects
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

## Features

✅ **Modular Design** - Each library focuses on specific functionality
✅ **ES6 Modules** - Modern JavaScript import/export
✅ **TypeScript Ready** - Clear function signatures
✅ **Documentation** - Inline comments and examples
✅ **Performance Optimized** - Efficient rendering patterns
✅ **Cross-browser Compatible** - Works in all modern browsers

## Requirements

- Three.js r128+
- Modern browser with WebGL support
- ES6 module support

## License

MIT License - Feel free to use in your projects!
