// Three.js User Interaction Library
// Mouse and keyboard controls

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setupOrbitControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth animation
    controls.dampingFactor = 0.05;
    return controls;
}

export function addMouseInteraction(object) {
    window.addEventListener('click', () => {
        object.rotation.x += 0.5; // Add rotation when clicking
    });
}

export function addKeyboardControls(object) {
    window.addEventListener('keydown', (event) => {
        switch(event.key) {
            case 'ArrowUp':    // Move up
                object.position.y += 0.1;
                break;
            case 'ArrowDown':  // Move down
                object.position.y -= 0.1;
                break;
            case 'ArrowLeft':  // Move left
                object.position.x -= 0.1;
                break;
            case 'ArrowRight': // Move right
                object.position.x += 0.1;
                break;
        }
    });
}

export function addMouseMoveInteraction(object) {
    window.addEventListener('mousemove', (event) => {
        object.position.x = event.clientX / window.innerWidth * 10 - 5;
        object.position.y = event.clientY / window.innerHeight * 10 - 5;
    });
}
