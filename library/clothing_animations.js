/**
 * Clothing Animations Library
 * Contains various animation and morphing effects for 3D clothing
 */

class ClothingAnimations {
    constructor() {
        this.animations = {};
        this.initializeAnimations();
    }

    initializeAnimations() {
        // Animation states
        this.animationStates = {
            fading: false,
            healing: false,
            morphing: false,
            flexible: false,
            geometry: false,
            wind: false,
            wear: false
        };
    }

    // Fade out clothing animation
    fadeOutClothing(model, onComplete = null) {
        if (this.animationStates.fading) return;
        
        this.animationStates.fading = true;
        let opacity = model.material.opacity || 1;

        const fadeInterval = setInterval(() => {
            opacity -= 0.05;
            model.material.transparent = true;
            model.material.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fadeInterval);
                this.animationStates.fading = false;
                console.log("Clothing has faded out completely.");
                if (onComplete) onComplete();
            }
        }, 100);
    }

    // Heal clothing animation
    healClothing(model, onComplete = null) {
        if (this.animationStates.healing) return;
        
        this.animationStates.healing = true;
        let opacity = 0.5;

        const healInterval = setInterval(() => {
            opacity += 0.05;
            model.material.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(healInterval);
                this.animationStates.healing = false;
                console.log("Clothing healed completely!");
                if (onComplete) onComplete();
            }
        }, 100);
    }

    // Morph clothing animation
    morphClothing(model) {
        if (this.animationStates.morphing) return;
        
        this.animationStates.morphing = true;
        const animate = () => {
            if (!this.animationStates.morphing) return;
            
            const morphFactor = Math.sin(Date.now() * 0.001) * 0.5 + 0.5;
            model.scale.set(morphFactor, morphFactor, morphFactor);
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Stop morph animation
    stopMorphClothing(model) {
        this.animationStates.morphing = false;
        model.scale.set(1, 1, 1);
    }

    // Animate flexible clothing
    animateFlexibleClothing(model) {
        if (this.animationStates.flexible) return;
        
        this.animationStates.flexible = true;
        const animate = () => {
            if (!this.animationStates.flexible) return;
            
            const vertices = model.geometry.attributes.position.array;
            for (let i = 0; i < vertices.length; i += 3) {
                vertices[i + 1] += Math.sin(Date.now() * 0.001 + vertices[i]) * 0.1;
            }
            model.geometry.attributes.position.needsUpdate = true;
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Stop flexible animation
    stopFlexibleClothing(model) {
        this.animationStates.flexible = false;
    }

    // Animate clothing geometry
    animateClothingGeometry(model) {
        if (this.animationStates.geometry) return;
        
        this.animationStates.geometry = true;
        const animate = () => {
            if (!this.animationStates.geometry) return;
            
            const vertices = model.geometry.attributes.position.array;
            for (let i = 0; i < vertices.length; i += 3) {
                vertices[i + 1] += Math.sin(Date.now() * 0.001 + vertices[i]) * 0.05;
            }
            model.geometry.attributes.position.needsUpdate = true;
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Stop geometry animation
    stopGeometryAnimation(model) {
        this.animationStates.geometry = false;
    }

    // Simulate wind on clothing
    simulateWindOnClothing(model) {
        if (this.animationStates.wind) return;
        
        this.animationStates.wind = true;
        const animate = () => {
            if (!this.animationStates.wind) return;
            
            const windStrength = Math.sin(Date.now() * 0.001) * 0.1;
            const vertices = model.geometry.attributes.position.array;

            for (let i = 0; i < vertices.length; i += 3) {
                if (i % 3 === 0) {
                    model.geometry.attributes.position.array[i] += windStrength;
                }
            }
            model.geometry.attributes.position.needsUpdate = true;
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Stop wind simulation
    stopWindSimulation(model) {
        this.animationStates.wind = false;
    }

    // Simulate clothing wind effect
    simulateClothingWindEffect(model) {
        if (this.animationStates.wind) return;
        
        this.animationStates.wind = true;
        const animate = () => {
            if (!this.animationStates.wind) return;
            
            const windStrength = Math.sin(Date.now() * 0.001) * 0.1;
            const vertices = model.geometry.attributes.position.array;

            for (let i = 0; i < vertices.length; i += 3) {
                vertices[i] += windStrength;
            }
            model.geometry.attributes.position.needsUpdate = true;
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Apply tear effect
    applyTearEffect(model) {
        const vertices = model.geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            vertices[i] += Math.random() * 0.1 - 0.05;
        }
        model.geometry.attributes.position.needsUpdate = true;
    }

    // Simulate wear and tear
    simulateWearAndTear(model, distanceTraveled) {
        const wearLevel = Math.min(distanceTraveled / 100, 1);
        model.material.color.setRGB(1 - wearLevel, 1 - wearLevel, 1 - wearLevel);
    }

    // Adapt clothing to size
    adaptClothingToSize(model, sizeFactor) {
        model.scale.set(sizeFactor, sizeFactor, sizeFactor);
    }

    // Create layered outfit
    createLayeredOutfit(scene, position = { x: 0, y: 0, z: 0 }) {
        const outfit = new THREE.Group();

        const shirt = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 2, 1),
            new THREE.MeshStandardMaterial({ color: 0x87CEEB })
        );
        
        const jacket = new THREE.Mesh(
            new THREE.BoxGeometry(1.6, 2.1, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        
        const hat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 0.8, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        
        hat.position.y += 1.2;

        outfit.add(shirt);
        outfit.add(jacket);
        outfit.add(hat);
        
        outfit.position.set(position.x, position.y, position.z);
        scene.add(outfit);
        
        return outfit;
    }

    // Create 3D clothing shape
    create3DClothingShape(scene, position = { x: 0, y: 1, z: 0 }) {
        const clothingShape = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.4, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        clothingShape.position.set(position.x, position.y, position.z);
        scene.add(clothingShape);
        
        return clothingShape;
    }

    // Animate gradient glow
    animateGradientGlow(model) {
        const animate = () => {
            const hue = (Date.now() * 0.0001) % 1;
            model.material.emissive.setHSL(hue, 1, 0.5);
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Pulsating glow effect
    pulsatingGlowEffect(model) {
        const animate = () => {
            const glowIntensity = Math.abs(Math.sin(Date.now() * 0.005));
            model.material.emissiveIntensity = glowIntensity;
            model.material.emissive.set(0xFFD700);
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Animate LED clothing
    animateLEDClothing(model) {
        const animate = () => {
            const pulse = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
            model.material.emissiveIntensity = pulse;
            model.material.emissive.set(0xFF6347);
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Stop all animations
    stopAllAnimations() {
        Object.keys(this.animationStates).forEach(key => {
            this.animationStates[key] = false;
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingAnimations;
}
