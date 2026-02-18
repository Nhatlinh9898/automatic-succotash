# 3D Clothing Library

A comprehensive library for creating and managing 3D clothing effects and animations in Three.js applications.

## Overview

This library provides a modular system for creating advanced clothing effects including:
- Shader-based visual effects
- Dynamic animations and morphing
- Environment-based interactions
- User interaction handling
- Material management

## Library Structure

### Core Modules

1. **clothing_shader_effects.js** - Shader materials and visual effects
2. **clothing_animations.js** - Animation and morphing systems
3. **clothing_environment_interactions.js** - Environment-based adaptations
4. **clothing_user_interactions.js** - User input and event handling
5. **clothing_manager.js** - Main system integration

## Quick Start

```javascript
// Initialize the clothing system
const clothingSystem = new ClothingSystem();
clothingSystem.initialize();

// Add your 3D model
const model = yourThreeJSModel;
clothingSystem.addModel('player', model);

// Apply effects
clothingSystem.applyShaderEffect('player', 'liquid');
clothingSystem.startAnimation('player', 'morphClothing');
clothingSystem.enableUserInteraction('mouseInteraction', 'player');
```

## Features

### Shader Effects

- **Liquid Effect** - Fluid-like material animation
- **Wave Effect** - Wave distortion animations
- **Ripple Effect** - Ripple propagation
- **Magical Effects** - Fantasy-style glowing effects
- **Dynamic Light** - Color-changing light effects
- **Light Scatter** - Light scattering effects
- **Radiant Effects** - Glowing aura effects

### Animations

- **Fade In/Out** - Opacity transitions
- **Healing Effects** - Damage repair animations
- **Morphing** - Shape transformations
- **Flexible Animation** - Cloth-like movement
- **Geometry Animation** - Vertex manipulation
- **Wind Effects** - Wind simulation
- **Tear Effects** - Damage visualization

### Environment Interactions

- **Scenario-based** - Beach, mountain, space themes
- **Weather Effects** - Rain, snow, storm adaptations
- **Time-based** - Day/night color changes
- **Temperature Response** - Heat/cold adaptations
- **Light Reaction** - Dynamic light response
- **Position-based** - Height-dependent changes

### User Interactions

- **Mouse Control** - Mouse-following effects
- **Keyboard Control** - Keyboard-triggered changes
- **Touch Support** - Mobile touch interactions
- **Audio Reactive** - Music/sound response
- **Mood Settings** - Emotional state changes
- **UI Controls** - Color pickers and sliders

## API Reference

### ClothingSystem Class

#### Methods

- `initialize()` - Initialize the system
- `addModel(id, model)` - Add a 3D model
- `applyShaderEffect(modelId, effectName)` - Apply shader effect
- `startAnimation(modelId, animationName)` - Start animation
- `stopAnimation(modelId, animationName)` - Stop animation
- `applyEnvironmentInteraction(modelId, interactionName, ...args)` - Apply environment effect
- `enableUserInteraction(interactionName, modelId, ...args)` - Enable user interaction
- `disableUserInteraction(interactionName)` - Disable user interaction
- `setClothingMood(modelId, mood)` - Set emotional mood
- `applyPreset(modelId, presetName)` - Apply preset configuration

#### Presets

- `beach` - Beach theme with golden colors
- `space` - Space theme with magical effects
- `ocean` - Ocean theme with wave effects
- `forest` - Forest theme with natural colors
- `magical` - Fantasy theme with glowing effects
- `cyberpunk` - Futuristic theme with LED effects

## Usage Examples

### Basic Shader Effect

```javascript
// Apply liquid effect
clothingSystem.applyShaderEffect('player', 'liquid');
```

### Environment Interaction

```javascript
// Change clothing based on environment
clothingSystem.applyEnvironmentInteraction('player', 'updateClothingByScenario', 'beach');
```

### User Interaction

```javascript
// Enable mouse interaction
clothingSystem.enableUserInteraction('mouseInteraction', 'player');

// Enable keyboard controls
clothingSystem.enableUserInteraction('keyboardControls', 'player');
```

### Animation Control

```javascript
// Start morphing animation
clothingSystem.startAnimation('player', 'morphClothing');

// Stop animation
clothingSystem.stopAnimation('player', 'morphClothing');
```

### UI Controls

```javascript
// Create interactive controls
clothingSystem.createUIControls('player', 'control-container');
```

## Integration with Three.js

This library is designed to work seamlessly with Three.js. Ensure you have Three.js loaded before using this library.

```html
<script src="three.js"></script>
<script src="library/clothing_shader_effects.js"></script>
<script src="library/clothing_animations.js"></script>
<script src="library/clothing_environment_interactions.js"></script>
<script src="library/clothing_user_interactions.js"></script>
<script src="library/clothing_manager.js"></script>
```

## Performance Considerations

- Use `clearAllEffects()` to stop all animations when not needed
- Disable unused user interactions to improve performance
- Consider the impact of complex shaders on frame rate
- Use appropriate material properties for your target devices

## Browser Compatibility

- Modern browsers with WebGL support
- Three.js r125 or higher
- ES6+ JavaScript support

## License

This library is provided as-is for educational and development purposes.

## Contributing

Feel free to extend the library with additional effects and features. The modular structure makes it easy to add new functionality.
