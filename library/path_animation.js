// Three.js Path Animation Library
// Advanced path-based movement and animation systems

import * as THREE from 'three';

export function createPathAnimation(scene, model) {
    // Create curve path for model movement
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1, 1, 0),
        new THREE.Vector3(2, -1, 0),
        new THREE.Vector3(3, 0, 0)
    ]);
    
    const pathGeometry = new THREE.TubeGeometry(curve, 20, 0.1, 8, false);
    const pathMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const path = new THREE.Mesh(pathGeometry, pathMaterial);
    scene.add(path);

    function moveModelAlongPath() {
        const time = Date.now() * 0.001;
        const position = curve.getPointAt(time % 1); // Get position on curve
        model.position.copy(position);
    }
    
    return { moveModelAlongPath, curve };
}

export function createCustomPath(points, model) {
    const curve = new THREE.CatmullRomCurve3(points);
    
    function animateAlongCustomPath() {
        const time = Date.now() * 0.0005;
        const position = curve.getPointAt(time % 1);
        model.position.copy(position);
        
        // Optional: make model face direction of movement
        const tangent = curve.getTangentAt(time % 1);
        model.lookAt(position.clone().add(tangent));
    }
    
    return animateAlongCustomPath;
}

export function createCircularPath(radius, height, model) {
    const points = [];
    for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        points.push(new THREE.Vector3(
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius
        ));
    }
    
    const curve = new THREE.CatmullRomCurve3(points);
    
    function animateCircular() {
        const time = Date.now() * 0.001;
        const position = curve.getPointAt(time % 1);
        model.position.copy(position);
    }
    
    return animateCircular;
}
