/**
 * Clothing Environment Interactions Library
 * Contains environment-based clothing interactions and adaptations
 */

class ClothingEnvironmentInteractions {
    constructor() {
        this.environments = {
            beach: { color: 0xFFD700, roughness: 0.5, metalness: 0.1 },
            mountain: { color: 0x228B22, roughness: 0.7, metalness: 0.0 },
            space: { color: 0x0000FF, roughness: 0.2, metalness: 0.8 },
            forest: { color: 0x228B22, roughness: 0.8, metalness: 0.1 },
            desert: { color: 0xFFD700, roughness: 0.6, metalness: 0.2 },
            ocean: { color: 0x1E90FF, roughness: 0.3, metalness: 0.4 }
        };
        
        this.weatherEffects = {
            rain: { color: 0x4682B4, roughness: 0.9, metalness: 0.1 },
            snow: { color: 0xFFFFFF, roughness: 0.4, metalness: 0.3 },
            storm: { color: 0x4682B4, roughness: 0.8, metalness: 0.2 },
            sunny: { color: 0xFFD700, roughness: 0.3, metalness: 0.5 }
        };
    }

    // Update clothing based on scenario
    updateClothingByScenario(model, scenario) {
        const environment = this.environments[scenario];
        if (environment) {
            model.material.color.set(environment.color);
            model.material.roughness = environment.roughness;
            model.material.metalness = environment.metalness;
        }
    }

    // Update clothing based on position
    updateClothingBasedOnPosition(model) {
        const height = model.position.y;

        if (height > 5) {
            model.material.color.set(0xFFD700);
        } else {
            model.material.color.set(0x1E90FF);
        }
    }

    // Update clothing based on time of day
    updateClothingByTime(model) {
        const hour = new Date().getHours();

        if (hour >= 6 && hour < 12) {
            model.material.color.set(0xFFD700);
        } else if (hour >= 12 && hour < 18) {
            model.material.color.set(0x87CEEB);
        } else {
            model.material.emissive.set(0x00008B);
        }
    }

    // Change clothing with temperature
    changeClothingWithTemperature(model, temp) {
        if (temp > 30) {
            model.material.color.set(0xFF4500);
        } else if (temp < 10) {
            model.material.color.set(0x1E90FF);
        } else {
            model.material.color.set(0x32CD32);
        }
    }

    // Adapt clothing to environment
    adaptClothingToEnvironment(model, environment) {
        const envConfig = this.environments[environment];
        if (envConfig) {
            model.material.color.set(envConfig.color);
            model.material.roughness = envConfig.roughness;
            model.material.metalness = envConfig.metalness;
        }
    }

    // Simulate rain effect
    simulateRainOnClothing(model) {
        const rain = this.weatherEffects.rain;
        model.material.color.set(rain.color);
        model.material.roughness = rain.roughness;
        model.material.metalness = rain.metalness;
    }

    // Simulate snow effect
    simulateSnowOnClothing(model) {
        const snow = this.weatherEffects.snow;
        model.material.color.set(snow.color);
        model.material.roughness = snow.roughness;
        model.material.metalness = snow.metalness;
    }

    // Simulate storm effect
    simulateStormEffect(model) {
        const storm = this.weatherEffects.storm;
        model.material.color.set(storm.color);
        model.material.roughness = storm.roughness;
        model.material.metalness = storm.metalness;
    }

    // Animate clothing by light
    animateClothingByLight(model, lightSource) {
        const distance = model.position.distanceTo(lightSource.position);
        const intensity = Math.max(1 - distance / 20, 0);
        model.material.color.setRGB(intensity, intensity * 0.7, intensity * 0.5);
    }

    // Reflect light effect
    reflectLightEffect(model, lightSource) {
        const distance = model.position.distanceTo(lightSource.position);
        const intensity = Math.max(1 - distance / 20, 0);
        model.material.emissiveIntensity = intensity;
        model.material.emissive.set(lightSource.color);
    }

    // Interact with environment
    interactWithEnvironment(model, environmentFactor) {
        const vertices = model.geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            vertices[i] += environmentFactor * Math.sin(Date.now() * 0.001 + vertices[i]);
        }
        model.geometry.attributes.position.needsUpdate = true;
    }

    // Create fabric material with textures
    createFabricMaterial(texturePath, normalPath = null) {
        const loader = new THREE.TextureLoader();
        const fabricMaterial = new THREE.MeshStandardMaterial({
            map: loader.load(texturePath),
            roughness: 0.5,
            metalness: 0.1
        });

        if (normalPath) {
            fabricMaterial.normalMap = loader.load(normalPath);
        }

        return fabricMaterial;
    }

    // Create embossed effect material
    createEmbossedEffect(embossPath, normalPath) {
        const loader = new THREE.TextureLoader();
        return new THREE.MeshStandardMaterial({
            map: loader.load(embossPath),
            normalMap: loader.load(normalPath),
        });
    }

    // Create reflective cloth material
    createReflectiveClothMaterial(environmentMap) {
        return new THREE.MeshStandardMaterial({
            envMap: environmentMap,
            metalness: 0.8,
            roughness: 0.2
        });
    }

    // Create frosted glass material
    createFrostedGlassMaterial() {
        return new THREE.MeshStandardMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.7,
            roughness: 0.9,
            metalness: 0.1
        });
    }

    // Switch texture
    switchTexture(model, texturePath) {
        const loader = new THREE.TextureLoader();
        const newTexture = loader.load(texturePath);
        model.material.map = newTexture;
        model.material.needsUpdate = true;
    }

    // Update clothing based on weather conditions
    updateClothingByWeather(model, weatherCondition) {
        const weather = this.weatherEffects[weatherCondition];
        if (weather) {
            model.material.color.set(weather.color);
            model.material.roughness = weather.roughness;
            model.material.metalness = weather.metalness;
        }
    }

    // Create custom environment configuration
    addEnvironment(name, config) {
        this.environments[name] = config;
    }

    // Create custom weather effect
    addWeatherEffect(name, config) {
        this.weatherEffects[name] = config;
    }

    // Get available environments
    getAvailableEnvironments() {
        return Object.keys(this.environments);
    }

    // Get available weather effects
    getAvailableWeatherEffects() {
        return Object.keys(this.weatherEffects);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingEnvironmentInteractions;
}
