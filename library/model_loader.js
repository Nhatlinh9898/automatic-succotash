// Three.js Model Loader Library
// Load complex 3D models (.obj or .glTF)

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadModel(scene, modelPath, callback) {
    const loader = new GLTFLoader();
    loader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        
        // Adjust size and position
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(0, 0, 0);

        // Add animation to model
        function animateModel() {
            requestAnimationFrame(animateModel);
            model.rotation.y += 0.01; // Rotate on Y axis
            // renderer.render(scene, camera); // Pass renderer from main
        }
        animateModel();
        
        if (callback) callback(model);
    }, undefined, function (error) {
        console.error('Error loading the model:', error);
    });
}

export function loadAnimatedModel(scene, modelPath, renderer, camera) {
    const loader = new GLTFLoader();
    loader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        
        // Add animation mixer for skeleton system
        const mixer = new THREE.AnimationMixer(model); // Add animation handling
        
        // Play all animations
        gltf.animations.forEach(clip => {
            mixer.clipAction(clip).play();
        });
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            mixer.update(0.016); // 60 FPS
            renderer.render(scene, camera);
        }
        animate();
    });
}
