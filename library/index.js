// Three.js Library Index
// Main entry point for all Three.js utilities

// Import all library modules
import { createBasicScene } from './basic_setup.js';
import { loadModel, loadAnimatedModel } from './model_loader.js';
import { addBasicLighting, createPBRMaterial, addDynamicLighting, addRealisticShadows } from './lighting_materials.js';
import { setupOrbitControls, addMouseInteraction, addKeyboardControls, addMouseMoveInteraction } from './user_interaction.js';
import { createCustomAnimation, createLoopAnimation, createComplexAnimation } from './animations.js';
import { createSky, createSkybox, createGround, createWater } from './environment.js';
import { createParticleSystem, createRainEffect, createSnowEffect } from './particles_effects.js';
import { createPathAnimation, createCustomPath, createCircularPath } from './path_animation.js';
import { createNightSky, createDayNightCycle, createDynamicSkybox, createSun, createClouds } from './sky_effects.js';
import { createWeatherSystem, integrateRealWeather } from './weather_system.js';
import { createForceInteraction, createShadowProjection, createFlameEffect, createAIInteraction, createFireworkEffect } from './interaction_effects.js';
import { createMirrorEffect, createLiquidSurface, createDynamicBackground, createAudioReactiveEffect, createDynamicLighting, createHologramEffect } from './advanced_effects.js';
import { createAIChatIntegration, createSmartMovement, createProceduralGeneration, createLearningBehavior } from './ai_integration.js';
import { createResponsiveSystem, createTouchControls, createAdaptiveUI, createPerformanceOptimizer } from './responsive_system.js';
import { createExplosionSystem, createClothSimulation, createOceanSimulation, createRigidBodySystem } from './physics_system.js';
import { createTextureManager, createDynamicTextureSystem, createPBRTextureSystem, createProceduralTextureSystem, createVideoTextureSystem } from './texture_system.js';
import { createOutfitSystem, createClothRiggingSystem, createLayeredClothingSystem, createClothingAnimationSystem, createClothingPhysicsIntegration } from './clothing_system.js';

// Export all functions
export {
    // Basic Setup
    createBasicScene,
    
    // Model Loading
    loadModel,
    loadAnimatedModel,
    
    // Lighting & Materials
    addBasicLighting,
    createPBRMaterial,
    addDynamicLighting,
    addRealisticShadows,
    
    // User Interaction
    setupOrbitControls,
    addMouseInteraction,
    addKeyboardControls,
    addMouseMoveInteraction,
    
    // Animations
    createCustomAnimation,
    createLoopAnimation,
    createComplexAnimation,
    
    // Environment
    createSky,
    createSkybox,
    createGround,
    createWater,
    
    // Particles & Effects
    createParticleSystem,
    createRainEffect,
    createSnowEffect,
    
    // Path Animation
    createPathAnimation,
    createCustomPath,
    createCircularPath,
    
    // Sky Effects
    createNightSky,
    createDayNightCycle,
    createDynamicSkybox,
    createSun,
    createClouds,
    
    // Weather System
    createWeatherSystem,
    integrateRealWeather,
    
    // Interaction Effects
    createForceInteraction,
    createShadowProjection,
    createFlameEffect,
    createAIInteraction,
    createFireworkEffect,
    
    // Advanced Effects
    createMirrorEffect,
    createLiquidSurface,
    createDynamicBackground,
    createAudioReactiveEffect,
    createDynamicLighting,
    createHologramEffect,
    
    // AI Integration
    createAIChatIntegration,
    createSmartMovement,
    createProceduralGeneration,
    createLearningBehavior,
    
    // Responsive System
    createResponsiveSystem,
    createTouchControls,
    createAdaptiveUI,
    createPerformanceOptimizer,
    
    // Physics System
    createExplosionSystem,
    createClothSimulation,
    createOceanSimulation,
    createRigidBodySystem,
    
    // Texture System
    createTextureManager,
    createDynamicTextureSystem,
    createPBRTextureSystem,
    createProceduralTextureSystem,
    createVideoTextureSystem,
    
    // Clothing System
    createOutfitSystem,
    createClothRiggingSystem,
    createLayeredClothingSystem,
    createClothingAnimationSystem,
    createClothingPhysicsIntegration
};

// Example usage:
/*
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
*/
