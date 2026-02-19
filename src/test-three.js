// Test file to check Three.js import
import * as THREE from 'three';

console.log('Three.js version:', THREE.REVISION);
console.log('Three.js available:', !!THREE);

// Test basic Three.js functionality
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

console.log('Basic Three.js objects created:', {
  scene: !!scene,
  camera: !!camera,
  renderer: !!renderer
});

export { THREE, scene, camera, renderer };
