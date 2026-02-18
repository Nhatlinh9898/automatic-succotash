// Male Eye Components - Part 26
// Various eye designs for male 3D characters

/**
 * Adds square-shaped eyes for a unique and bold appearance
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addSquareShapedEyes(character) {
    const squareEye = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x00FFFF })
    );
    squareEye.position.set(0.6, 4.8, 0.7);

    const mirroredSquareEye = squareEye.clone();
    mirroredSquareEye.position.set(-0.6, 4.8, 0.7);

    character.add(squareEye);
    character.add(mirroredSquareEye);
}

/**
 * Adds metal bright eyes with a futuristic metallic shine
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addMetalBrightEyes(character) {
    const metalBrightEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.1,
        })
    );
    metalBrightEye.position.set(0.6, 4.8, 0.7);

    const mirroredMetalBrightEye = metalBrightEye.clone();
    mirroredMetalBrightEye.position.set(-0.6, 4.8, 0.7);

    character.add(metalBrightEye);
    character.add(mirroredMetalBrightEye);
}

/**
 * Adds laser square eyes with a strong red glow
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addLaserSquareEyes(character) {
    const squareEye = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    squareEye.position.set(0.6, 4.8, 0.7);

    const mirroredSquareEye = squareEye.clone();
    mirroredSquareEye.position.set(-0.6, 4.8, 0.7);

    character.add(squareEye);
    character.add(mirroredSquareEye);
}

/**
 * Adds flaming eyes with an intense fire-like glow
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addFlamingEyes(character) {
    const flamingEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    flamingEye.position.set(0.6, 4.8, 0.7);

    const mirroredFlamingEye = flamingEye.clone();
    mirroredFlamingEye.position.set(-0.6, 4.8, 0.7);

    character.add(flamingEye);
    character.add(mirroredFlamingEye);
}

/**
 * Adds oval-shaped eyes for a unique and stylish appearance
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addOvalShapeEyes(character) {
    const ovalEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x00FFFF })
    );
    ovalEye.position.set(0.6, 4.8, 0.7);

    const mirroredOvalEye = ovalEye.clone();
    mirroredOvalEye.position.set(-0.6, 4.8, 0.7);

    character.add(ovalEye);
    character.add(mirroredOvalEye);
}

/**
 * Adds hexagon-shaped eyes for a geometric and distinctive look
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addHexagonShapedEyes(character) {
    const hexagonEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 6),
        new THREE.MeshStandardMaterial({ color: 0x87CEEB })
    );
    hexagonEye.position.set(0.6, 4.8, 0.7);

    const mirroredHexagonEye = hexagonEye.clone();
    mirroredHexagonEye.position.set(-0.6, 4.8, 0.7);

    character.add(hexagonEye);
    character.add(mirroredHexagonEye);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSquareShapedEyes,
        addMetalBrightEyes,
        addLaserSquareEyes,
        addFlamingEyes,
        addOvalShapeEyes,
        addHexagonShapedEyes
    };
}
