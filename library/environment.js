// Three.js Environment Library
// Sky, ground, and environmental effects

import * as THREE from 'three';

export function createSky(scene) {
    // Create sky
    const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
    const skyMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x87ceeb, 
        side: THREE.BackSide 
    });
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);
}

export function createSkybox(scene, texturePaths) {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        texturePaths.posx, texturePaths.negx,
        texturePaths.posy, texturePaths.negy,
        texturePaths.posz, texturePaths.negz
    ]);
    scene.background = texture;
}

export function createGround(scene) {
    // Create ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x3a5f3a,
        roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
}

export function createWater(scene) {
    const waterGeometry = new THREE.PlaneGeometry(100, 100);
    const waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x006994,
        transparent: true,
        opacity: 0.8,
        roughness: 0.1
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.5;
    scene.add(water);
}
