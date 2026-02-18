/**
 * Main Clothing System Library
 * Integrates all clothing-related functionality into a unified system
 */

class ClothingSystem {
    constructor() {
        this.shaderEffects = new ClothingShaderEffects();
        this.animations = new ClothingAnimations();
        this.environmentInteractions = new ClothingEnvironmentInteractions();
        this.userInteractions = new ClothingUserInteractions();
        
        this.models = new Map();
        this.activeEffects = new Set();
        this.isInitialized = false;
    }

    // Initialize the clothing system
    initialize() {
        if (this.isInitialized) return;
        
        console.log('Clothing System initialized');
        this.isInitialized = true;
    }

    // Add a model to the system
    addModel(id, model) {
        this.models.set(id, model);
        this.userInteractions.setModel(model);
    }

    // Remove a model from the system
    removeModel(id) {
        this.models.delete(id);
    }

    // Get a model by ID
    getModel(id) {
        return this.models.get(id);
    }

    // Get all models
    getAllModels() {
        return Array.from(this.models.values());
    }

    // Apply shader effect to model
    applyShaderEffect(modelId, effectName) {
        const model = this.getModel(modelId);
        if (!model) return false;

        const effectMethod = `apply${effectName.charAt(0).toUpperCase() + effectName.slice(1)}Effect`;
        if (typeof this.shaderEffects[effectMethod] === 'function') {
            this.shaderEffects[effectMethod](model);
            this.activeEffects.add(`${modelId}_${effectName}`);
            return true;
        }
        return false;
    }

    // Start animation on model
    startAnimation(modelId, animationName) {
        const model = this.getModel(modelId);
        if (!model) return false;

        const animationMethod = animationName;
        if (typeof this.animations[animationMethod] === 'function') {
            this.animations[animationName](model);
            this.activeEffects.add(`${modelId}_${animationName}`);
            return true;
        }
        return false;
    }

    // Stop animation on model
    stopAnimation(modelId, animationName) {
        const model = this.getModel(modelId);
        if (!model) return false;

        const stopMethod = `stop${animationName.charAt(0).toUpperCase() + animationName.slice(1)}`;
        if (typeof this.animations[stopMethod] === 'function') {
            this.animations[stopMethod](model);
            this.activeEffects.delete(`${modelId}_${animationName}`);
            return true;
        }
        return false;
    }

    // Apply environment interaction
    applyEnvironmentInteraction(modelId, interactionName, ...args) {
        const model = this.getModel(modelId);
        if (!model) return false;

        if (typeof this.environmentInteractions[interactionName] === 'function') {
            this.environmentInteractions[interactionName](model, ...args);
            this.activeEffects.add(`${modelId}_${interactionName}`);
            return true;
        }
        return false;
    }

    // Enable user interaction
    enableUserInteraction(interactionName, modelId = null, ...args) {
        const model = modelId ? this.getModel(modelId) : this.getAllModels()[0];
        if (!model) return false;

        const interactionMethod = `enable${interactionName.charAt(0).toUpperCase() + interactionName.slice(1)}`;
        if (typeof this.userInteractions[interactionMethod] === 'function') {
            this.userInteractions[interactionMethod](model, ...args);
            this.activeEffects.add(`user_${interactionName}`);
            return true;
        }
        return false;
    }

    // Disable user interaction
    disableUserInteraction(interactionName) {
        const disableMethod = `disable${interactionName.charAt(0).toUpperCase() + interactionName.slice(1)}`;
        if (typeof this.userInteractions[disableMethod] === 'function') {
            this.userInteractions[disableMethod]();
            this.activeEffects.delete(`user_${interactionName}`);
            return true;
        }
        return false;
    }

    // Create layered outfit
    createLayeredOutfit(scene, position) {
        return this.animations.createLayeredOutfit(scene, position);
    }

    // Create 3D clothing shape
    create3DClothingShape(scene, position) {
        return this.animations.create3DClothingShape(scene, position);
    }

    // Update all shader animations
    update(time) {
        this.shaderEffects.updateShaders(time);
    }

    // Set clothing mood
    setClothingMood(modelId, mood) {
        const model = this.getModel(modelId);
        if (!model) return false;

        this.userInteractions.setClothingByMood(model, mood);
        return true;
    }

    // Trigger outfit change event
    triggerOutfitChange(modelId, event) {
        const model = this.getModel(modelId);
        if (!model) return false;

        this.userInteractions.triggerOutfitChange(model, event);
        return true;
    }

    // Create UI controls
    createUIControls(modelId, containerId) {
        const model = this.getModel(modelId);
        if (!model) return false;

        this.userInteractions.createColorPicker(model, containerId);
        this.userInteractions.createIntensitySlider(model, containerId);
        this.userInteractions.createPresetButtons(model, containerId);
        return true;
    }

    // Get available shader effects
    getAvailableShaderEffects() {
        return Object.keys(this.shaderEffects.shaders);
    }

    // Get available environments
    getAvailableEnvironments() {
        return this.environmentInteractions.getAvailableEnvironments();
    }

    // Get available weather effects
    getAvailableWeatherEffects() {
        return this.environmentInteractions.getAvailableWeatherEffects();
    }

    // Get active effects
    getActiveEffects() {
        return Array.from(this.activeEffects);
    }

    // Clear all effects
    clearAllEffects() {
        this.animations.stopAllAnimations();
        this.userInteractions.cleanup();
        this.activeEffects.clear();
    }

    // Apply preset configuration
    applyPreset(modelId, presetName) {
        const model = this.getModel(modelId);
        if (!model) return false;

        switch(presetName.toLowerCase()) {
            case 'beach':
                this.environmentInteractions.updateClothingByScenario(model, 'beach');
                break;
            case 'space':
                this.environmentInteractions.updateClothingByScenario(model, 'space');
                this.shaderEffects.applyMagicalEffect(model);
                break;
            case 'ocean':
                this.environmentInteractions.updateClothingByScenario(model, 'ocean');
                this.shaderEffects.applyWaveEffect(model);
                break;
            case 'forest':
                this.environmentInteractions.updateClothingByScenario(model, 'forest');
                break;
            case 'magical':
                this.shaderEffects.applyMagicalAuraEffect(model);
                this.animations.pulsatingGlowEffect(model);
                break;
            case 'cyberpunk':
                this.shaderEffects.applyDynamicLightEffect(model);
                this.animations.animateLEDClothing(model);
                break;
            default:
                return false;
        }
        return true;
    }

    // Export configuration
    exportConfiguration() {
        return {
            models: Array.from(this.models.keys()),
            activeEffects: this.getActiveEffects(),
            availableEnvironments: this.getAvailableEnvironments(),
            availableWeatherEffects: this.getAvailableWeatherEffects(),
            availableShaderEffects: this.getAvailableShaderEffects()
        };
    }

    // Cleanup system
    cleanup() {
        this.clearAllEffects();
        this.models.clear();
        this.isInitialized = false;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingSystem;
}
