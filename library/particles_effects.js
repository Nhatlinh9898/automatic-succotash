// Three.js Particles and Effects Library
// Particle systems and visual effects

import * as THREE from 'three';

export function createParticleSystem(scene, particleCount = 1000, color = 0xffffff) {
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = Math.random() * 100 - 50;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ 
        color: color,
        size: 0.1
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    return particles;
}

export function createRainEffect(scene) {
    const rainGeometry = new THREE.BufferGeometry();
    const rainCount = 1000;
    const positions = new Float32Array(rainCount * 3);

    for (let i = 0; i < rainCount * 3; i += 3) {
        positions[i] = Math.random() * 100 - 50;     // x
        positions[i + 1] = Math.random() * 50;       // y
        positions[i + 2] = Math.random() * 100 - 50;  // z
    }

    rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const rainMaterial = new THREE.PointsMaterial({ 
        color: 0x87ceeb,
        size: 0.1,
        transparent: true,
        opacity: 0.6
    });
    const rain = new THREE.Points(rainGeometry, rainMaterial);
    scene.add(rain);

    // Animate rain
    function animateRain() {
        const positions = rain.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
            positions[i] -= 0.5; // Fall down
            if (positions[i] < 0) {
                positions[i] = 50; // Reset to top
            }
        }
        rain.geometry.attributes.position.needsUpdate = true;
    }
    
    return { rain, animateRain };
}

export function createSnowEffect(scene) {
    const snowGeometry = new THREE.BufferGeometry();
    const snowCount = 500;
    const positions = new Float32Array(snowCount * 3);

    for (let i = 0; i < snowCount * 3; i += 3) {
        positions[i] = Math.random() * 100 - 50;     // x
        positions[i + 1] = Math.random() * 50;       // y
        positions[i + 2] = Math.random() * 100 - 50;  // z
    }

    snowGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const snowMaterial = new THREE.PointsMaterial({ 
        color: 0xffffff,
        size: 0.2,
        transparent: true,
        opacity: 0.8
    });
    const snow = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snow);

    // Animate snow
    function animateSnow() {
        const positions = snow.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
            positions[i] -= 0.1; // Fall slowly
            positions[i - 1] += Math.sin(Date.now() * 0.001 + i) * 0.01; // Sway
            if (positions[i] < 0) {
                positions[i] = 50; // Reset to top
            }
        }
        snow.geometry.attributes.position.needsUpdate = true;
    }
    
    return { snow, animateSnow };
}
