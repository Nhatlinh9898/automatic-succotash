// Three.js Interaction Effects Library
// Advanced user interactions and force effects

import * as THREE from 'three';

export function createForceInteraction(scene, model) {
    // Create force effects when clicking
    window.addEventListener('click', (event) => {
        const force = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
        );
        model.applyForce(force); // Apply random force to model
    });
}

export function createShadowProjection(scene, model) {
    // Create shadow projection for model
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const shadowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(500, 500), 
        shadowMaterial
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -2;
    scene.add(shadowPlane);

    // Update shadow based on model position
    function updateShadow() {
        shadowPlane.position.x = model.position.x;
        shadowPlane.position.z = model.position.z;
    }

    return updateShadow;
}

export function createFlameEffect(scene) {
    // Create flame effect using shaders
    const flameMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            varying vec2 vUv;
            void main() {
                float flame = sin(vUv.y * 10.0 - time * 5.0) * 0.5 + 0.5;
                gl_FragColor = vec4(1.0, flame * 0.5, 0.0, flame);
            }
        `,
        transparent: true
    });

    const flameGeometry = new THREE.ConeGeometry(1, 3, 32);
    const flame = new THREE.Mesh(flameGeometry, flameMaterial);
    scene.add(flame);

    // Animate flame
    function animateFlame() {
        flameMaterial.uniforms.time.value += 0.016;
    }

    return { flame, animateFlame };
}

export function createAIInteraction(scene, model) {
    // AI-powered interaction based on emotion detection
    const interactionLogs = [];
    
    window.addEventListener('mousemove', (event) => {
        interactionLogs.push({ 
            x: event.clientX, 
            y: event.clientY, 
            timestamp: Date.now() 
        });
        
        // Keep only last 100 interactions
        if (interactionLogs.length > 100) {
            interactionLogs.shift();
        }
    });

    async function fetchEmotionAPI(imageData) {
        const response = await fetch('https://api.example.com/emotion-detection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageData })
        });
        const emotion = await response.json();
        
        // React based on detected emotion
        reactToEmotion(emotion);
    }

    function reactToEmotion(emotion) {
        switch(emotion.type) {
            case 'happy':
                model.rotation.y += 0.1;
                break;
            case 'sad':
                model.position.y -= 0.1;
                break;
            case 'excited':
                createFireworkEffect(scene, model.position);
                break;
        }
    }

    return { fetchEmotionAPI, getInteractionLogs: () => interactionLogs };
}

export function createFireworkEffect(scene, position) {
    // Create firework particle effect
    const fireworkParticles = new THREE.BufferGeometry();
    const fireworkCount = 500;
    const fireworkPositions = new Float32Array(fireworkCount * 3);
    const colors = new Float32Array(fireworkCount * 3);

    for (let i = 0; i < fireworkCount; i++) {
        const angle = (i / fireworkCount) * Math.PI * 2;
        const velocity = Math.random() * 5 + 2;
        
        fireworkPositions[i * 3] = position.x;
        fireworkPositions[i * 3 + 1] = position.y;
        fireworkPositions[i * 3 + 2] = position.z;
        
        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
    }

    fireworkParticles.setAttribute('position', new THREE.BufferAttribute(fireworkPositions, 3));
    fireworkParticles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const fireworkMaterial = new THREE.PointsMaterial({ 
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 1
    });
    
    const fireworks = new THREE.Points(fireworkParticles, fireworkMaterial);
    scene.add(fireworks);

    // Animate firework explosion
    function animateFirework() {
        const positions = fireworks.geometry.attributes.position.array;
        const velocities = [];
        
        for (let i = 0; i < fireworkCount; i++) {
            if (!velocities[i]) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 0.1 + 0.05;
                velocities[i] = {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed,
                    z: (Math.random() - 0.5) * speed
                };
            }
            
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;
            
            velocities[i].y -= 0.002; // Gravity
        }
        
        fireworks.geometry.attributes.position.needsUpdate = true;
        
        // Fade out
        fireworkMaterial.opacity -= 0.01;
        if (fireworkMaterial.opacity <= 0) {
            scene.remove(fireworks);
            return false; // Stop animation
        }
        return true; // Continue animation
    }

    return { fireworks, animateFirework };
}
