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
    createSnowEffect
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
