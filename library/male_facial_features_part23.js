/**
 * Male Facial Features Components Library - Part 23
 * Various facial features for male characters including eyes, lips, nose, ears, and beard
 * Compatible with Three.js
 */

// Import THREE if needed (uncomment if using as module)
// import * as THREE from 'three';

/**
 * Adds defined lips with masculine appearance for male characters
 * @param {THREE.Group} character - The character group to add lips to
 */
function addDefinedLips(character) {
    const lips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    lips.position.set(0, 4.3, 0.8);
    character.add(lips);
}

/**
 * Adds light band eyes with futuristic appearance for male characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addLightBandEyes(character) {
    const lightBand = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    lightBand.position.set(0, 4.8, 0.8);
    character.add(lightBand);
}

/**
 * Adds metal nose with industrial appearance for male characters
 * @param {THREE.Group} character - The character group to add nose to
 */
function addMetalNose(character) {
    const metalNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.2, 0.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalNose.position.set(0, 4.5, 0.8);
    character.add(metalNose);
}

/**
 * Adds strong lips with masculine appearance for male characters
 * @param {THREE.Group} character - The character group to add lips to
 */
function addStrongLips(character) {
    const lips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            metalness: 0.5,
            roughness: 0.3,
        })
    );
    lips.position.set(0, 4.3, 0.8);
    character.add(lips);
}

/**
 * Adds glow outline ears with futuristic appearance for male characters
 * @param {THREE.Group} character - The character group to add ears to
 */
function addGlowOutlineEars(character) {
    const ear = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF7F,
            emissiveIntensity: 2.5,
        })
    );
    ear.position.set(1.3, 4.5, 0.3);

    const mirroredEar = ear.clone();
    mirroredEar.position.set(-1.3, 4.5, 0.3);

    character.add(ear);
    character.add(mirroredEar);
}

/**
 * Adds curly beard with sophisticated appearance for male characters
 * @param {THREE.Group} character - The character group to add beard to
 */
function addCurlyBeard(character) {
    const curlyBeard = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    curlyBeard.position.set(0, 4.2, 0.8);
    curlyBeard.rotation.x = Math.PI / 2;
    character.add(curlyBeard);
}

/**
 * Adds tinted glasses with stylish appearance for male characters
 * @param {THREE.Group} character - The character group to add glasses to
 */
function addTintedGlasses(character) {
    const glasses = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.6,
            transparent: true,
        })
    );
    glasses.position.set(0, 4.8, 0.7);
    character.add(glasses);
}

/**
 * Adds neon glasses with futuristic appearance for male characters
 * @param {THREE.Group} character - The character group to add glasses to
 */
function addNeonGlasses(character) {
    const glasses = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.4),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    glasses.position.set(0, 4.8, 0.7);
    character.add(glasses);
}

/**
 * Adds small mouth with subtle appearance for male characters
 * @param {THREE.Group} character - The character group to add mouth to
 */
function addSmallMouth(character) {
    const smallMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    smallMouth.position.set(0, 4.3, 0.8);
    character.add(smallMouth);
}

/**
 * Adds square ears with geometric appearance for male characters
 * @param {THREE.Group} character - The character group to add ears to
 */
function addSquareEars(character) {
    const squareEar = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    squareEar.position.set(1.2, 4.5, 0.3);

    const mirroredSquareEar = squareEar.clone();
    mirroredSquareEar.position.set(-1.2, 4.5, 0.3);

    character.add(squareEar);
    character.add(mirroredSquareEar);
}

/**
 * Adds flaming eyes with intense appearance for male characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addFlamingEyes(character) {
    const flamingEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    flamingEye.position.set(0.6, 4.8, 0.7);

    const mirroredFlamingEye = flamingEye.clone();
    mirroredFlamingEye.position.set(-0.6, 4.8, 0.7);

    character.add(flamingEye);
    character.add(mirroredFlamingEye);
}

/**
 * Adds wide nose with strong appearance for male characters
 * @param {THREE.Group} character - The character group to add nose to
 */
function addWideNose(character) {
    const wideNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.3, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    wideNose.position.set(0, 4.5, 0.8);
    character.add(wideNose);
}

/**
 * Adds metallic eyes with futuristic appearance for male characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addMetallicEyes(character) {
    const metallicEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicEye.position.set(0.6, 4.8, 0.7);

    const mirroredMetallicEye = metallicEye.clone();
    mirroredMetallicEye.position.set(-0.6, 4.8, 0.7);

    character.add(metallicEye);
    character.add(mirroredMetallicEye);
}

/**
 * Adds compact nose with subtle appearance for male characters
 * @param {THREE.Group} character - The character group to add nose to
 */
function addCompactNose(character) {
    const compactNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.1, 0.3, 16),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    compactNose.position.set(0, 4.5, 0.8);
    character.add(compactNose);
}

/**
 * Adds large ears with prominent appearance for male characters
 * @param {THREE.Group} character - The character group to add ears to
 */
function addLargeEars(character) {
    const largeEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.8, 32),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    largeEar.position.set(1.5, 4.5, 0.3);

    const mirroredLargeEar = largeEar.clone();
    mirroredLargeEar.position.set(-1.5, 4.5, 0.3);

    character.add(largeEar);
    character.add(mirroredLargeEar);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addDefinedLips,
        addLightBandEyes,
        addMetalNose,
        addStrongLips,
        addGlowOutlineEars,
        addCurlyBeard,
        addTintedGlasses,
        addNeonGlasses,
        addSmallMouth,
        addSquareEars,
        addFlamingEyes,
        addWideNose,
        addMetallicEyes,
        addCompactNose,
        addLargeEars
    };
}
