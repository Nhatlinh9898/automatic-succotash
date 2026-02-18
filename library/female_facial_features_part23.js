/**
 * Female Facial Features Components Library - Part 23
 * Various facial features for female characters including eyes, lips, nose, and ears
 * Compatible with Three.js
 */

// Import THREE if needed (uncomment if using as module)
// import * as THREE from 'three';

/**
 * Adds soft lips with feminine appearance for female characters
 * @param {THREE.Group} character - The character group to add lips to
 */
function addSoftLips(character) {
    const lips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
    );
    lips.position.set(0, 4.3, 0.8);
    character.add(lips);
}

/**
 * Adds decorative ears with golden color for female characters
 * @param {THREE.Group} character - The character group to add ears to
 */
function addDecorativeEars(character) {
    const ear = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFD700 })
    );
    ear.position.set(1.2, 4.5, 0.3);

    const mirroredEar = ear.clone();
    mirroredEar.position.set(-1.2, 4.5, 0.3);

    character.add(ear);
    character.add(mirroredEar);
}

/**
 * Adds small cute nose for female characters with delicate appearance
 * @param {THREE.Group} character - The character group to add nose to
 */
function addSmallCuteNose(character) {
    const cuteNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    cuteNose.position.set(0, 4.5, 0.8);
    character.add(cuteNose);
}

/**
 * Adds shiny metallic ears with reflective surface for female characters
 * @param {THREE.Group} character - The character group to add ears to
 */
function addShinyMetallicEars(character) {
    const shinyEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.1,
        })
    );
    shinyEar.position.set(1.2, 4.5, 0.3);

    const mirroredShinyEar = shinyEar.clone();
    mirroredShinyEar.position.set(-1.2, 4.5, 0.3);

    character.add(shinyEar);
    character.add(mirroredShinyEar);
}

/**
 * Adds round eyes with cute appearance for female characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addRoundEyes(character) {
    const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x87CEEB })
    );
    eye.position.set(0.6, 4.8, 0.7);

    const mirroredEye = eye.clone();
    mirroredEye.position.set(-0.6, 4.8, 0.7);

    character.add(eye);
    character.add(mirroredEye);
}

/**
 * Adds smiling lips with gentle appearance for female characters
 * @param {THREE.Group} character - The character group to add lips to
 */
function addSmilingLips(character) {
    const smile = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
    );
    smile.position.set(0, 4.3, 0.8);
    character.add(smile);
}

/**
 * Adds subtle pointy ears with elf-like appearance for female characters
 * @param {THREE.Group} character - The character group to add ears to
 */
function addSubtlePointyEars(character) {
    const pointyEar = new THREE.Mesh(
        new THREE.ConeGeometry(0.4, 0.7, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    pointyEar.position.set(1.2, 4.5, 0.3);
    pointyEar.rotation.z = -Math.PI / 8;

    const mirroredPointyEar = pointyEar.clone();
    mirroredPointyEar.position.set(-1.2, 4.5, 0.3);
    mirroredPointyEar.rotation.z = Math.PI / 8;

    character.add(pointyEar);
    character.add(mirroredPointyEar);
}

/**
 * Adds sparkling crystal eyes with magical appearance for female characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addSparklingCrystalEyes(character) {
    const sparklingEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    sparklingEye.position.set(0.6, 4.8, 0.7);

    const mirroredSparklingEye = sparklingEye.clone();
    mirroredSparklingEye.position.set(-0.6, 4.8, 0.7);

    character.add(sparklingEye);
    character.add(mirroredSparklingEye);
}

/**
 * Adds gentle lips with soft appearance for female characters
 * @param {THREE.Group} character - The character group to add lips to
 */
function addGentleLips(character) {
    const lips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xFFB6C1 })
    );
    lips.position.set(0, 4.3, 0.8);
    character.add(lips);
}

/**
 * Adds shimmering eyes with glowing effect for female characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addShimmeringEyes(character) {
    const shimmeringEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    shimmeringEye.position.set(0.6, 4.8, 0.7);

    const mirroredShimmeringEye = shimmeringEye.clone();
    mirroredShimmeringEye.position.set(-0.6, 4.8, 0.7);

    character.add(shimmeringEye);
    character.add(mirroredShimmeringEye);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSoftLips,
        addDecorativeEars,
        addSmallCuteNose,
        addShinyMetallicEars,
        addRoundEyes,
        addSmilingLips,
        addSubtlePointyEars,
        addSparklingCrystalEyes,
        addGentleLips,
        addShimmeringEyes
    };
}
