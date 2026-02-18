// Facial Features Components - Part 27
// This file contains various facial feature components (eyes, lips, nose) for 3D character models

/**
 * Adds swirling laser eyes with futuristic style
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addSwirlingLaserEyes(character) {
    const swirlingLaserEye = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 3.0,
        })
    );
    swirlingLaserEye.position.set(0.6, 4.8, 0.7);

    const mirroredSwirlingLaserEye = swirlingLaserEye.clone();
    mirroredSwirlingLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(swirlingLaserEye);
    character.add(mirroredSwirlingLaserEye);
}

/**
 * Adds laser outlined lips creating mysterious and impressive appearance
 * @param {THREE.Object3D} character - The character object to add lips to
 */
function addLaserOutlinedLips(character) {
    const laserLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    laserLips.position.set(0, 4.3, 0.8);
    character.add(laserLips);
}

/**
 * Adds bold laser eyes with impressive appearance
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addBoldLaserEyes(character) {
    const boldLaserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 3.0,
        })
    );
    boldLaserEye.position.set(0.6, 4.8, 0.7);

    const mirroredBoldLaserEye = boldLaserEye.clone();
    mirroredBoldLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(boldLaserEye);
    character.add(mirroredBoldLaserEye);
}

/**
 * Adds metal framed laser eyes with strong and impressive style
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addMetalFramedLaserEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const metallicFrame = new THREE.Mesh(
        new THREE.RingGeometry(0.35, 0.4, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
        })
    );
    metallicFrame.position.set(0.6, 4.8, 0.7);
    laserEye.add(metallicFrame);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

/**
 * Adds square light eyes with creative style
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addSquareLightEyes(character) {
    const squareEye = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.1),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    squareEye.position.set(0.6, 4.8, 0.7);

    const mirroredSquareEye = squareEye.clone();
    mirroredSquareEye.position.set(-0.6, 4.8, 0.7);

    character.add(squareEye);
    character.add(mirroredSquareEye);
}

/**
 * Adds metal shiny mouth with impressive and strong style
 * @param {THREE.Object3D} character - The character object to add mouth to
 */
function addMetalShinyMouth(character) {
    const shinyMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    shinyMouth.position.set(0, 4.3, 0.8);
    character.add(shinyMouth);
}

/**
 * Adds laser point nose with aggressive style
 * @param {THREE.Object3D} character - The character object to add nose to
 */
function addLaserPointNose(character) {
    const laserPoint = new THREE.Mesh(
        new THREE.ConeGeometry(0.1, 0.3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserPoint.position.set(0, 4.5, 0.8);
    laserPoint.rotation.x = Math.PI / 8;
    character.add(laserPoint);
}

/**
 * Adds laser ray eyes with strong and impressive style
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addLaserRayEyes(character) {
    const laserRay = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.2),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserRay.position.set(0.6, 4.8, 0.7);

    const mirroredLaserRay = laserRay.clone();
    mirroredLaserRay.position.set(-0.6, 4.8, 0.7);

    character.add(laserRay);
    character.add(mirroredLaserRay);
}

/**
 * Adds bold laser mouth with strong glow
 * @param {THREE.Object3D} character - The character object to add mouth to
 */
function addBoldLaserMouth(character) {
    const laserMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 3.0,
        })
    );
    laserMouth.position.set(0, 4.3, 0.8);
    character.add(laserMouth);
}

/**
 * Adds glow framed mouth with impressive light frame
 * @param {THREE.Object3D} character - The character object to add mouth to
 */
function addGlowFramedMouth(character) {
    const glowFrame = new THREE.Mesh(
        new THREE.RingGeometry(0.6, 0.7, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    glowFrame.position.set(0, 4.3, 0.9);
    character.add(glowFrame);
}

/**
 * Adds metallic sparkling eyes with delicate style
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addMetallicSparklingEyes(character) {
    const metallicSparkle = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.1,
        })
    );
    metallicSparkle.position.set(0.6, 4.8, 0.7);

    const mirroredMetallicSparkle = metallicSparkle.clone();
    mirroredMetallicSparkle.position.set(-0.6, 4.8, 0.7);

    character.add(metallicSparkle);
    character.add(mirroredMetallicSparkle);
}

/**
 * Adds edgy nose with angular design for stylish appearance
 * @param {THREE.Object3D} character - The character object to add nose to
 */
function addEdgyNose(character) {
    const edgyNose = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    edgyNose.position.set(0, 4.5, 0.8);
    edgyNose.rotation.x = Math.PI / 8;
    character.add(edgyNose);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSwirlingLaserEyes,
        addLaserOutlinedLips,
        addBoldLaserEyes,
        addMetalFramedLaserEyes,
        addSquareLightEyes,
        addMetalShinyMouth,
        addLaserPointNose,
        addLaserRayEyes,
        addBoldLaserMouth,
        addGlowFramedMouth,
        addMetallicSparklingEyes,
        addEdgyNose
    };
}
