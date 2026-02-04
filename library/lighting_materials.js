// Three.js Lighting and Materials Library
// Add lighting and complex materials

import * as THREE from 'three';

export function addBasicLighting(scene) {
    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
}

export function createPBRMaterial() {
    // Use PBR style materials
    const pbrMaterial = new THREE.MeshStandardMaterial({
        color: 0x5555ff,
        roughness: 0.5,
        metalness: 0.8
    });
    return pbrMaterial;
}

export function addDynamicLighting(scene) {
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    scene.add(pointLight);

    // Animate light intensity
    function animateLight() {
        const time = Date.now() * 0.001;
        pointLight.intensity = Math.sin(time) * 0.5 + 0.5;
        requestAnimationFrame(animateLight);
    }
    animateLight();
}

export function addRealisticShadows(renderer, scene) {
    renderer.shadowMap.enabled = true;
    
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.castShadow = true;
    light.position.set(10, 10, 10);
    scene.add(light);
}
