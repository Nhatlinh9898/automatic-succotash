// Three.js Basic Setup Library
// Basic scene, camera, renderer setup

import * as THREE from 'three';

export function createBasicScene() {
    // Create 3D scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create basic 3D model (simple cube)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    return { scene, camera, renderer, cube };
}

// Description:
// - Cube: Basic 3D model. You can replace with more complex models (like .obj or .glTF files).
// - Animation: Use animate function to rotate object on X and Y axes.
