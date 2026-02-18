// Male Hair Components - Part 29
// Laser and Neon Style Hair Components

/**
 * Adds high multi-layered laser hair with strong light waves
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addHighMultiLayeredLaserHair(character) {
    const baseLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.8,
            transparent: true,
            opacity: 0.8,
        })
    );
    baseLayer.position.set(0, 5, -0.2);

    const upperLayer = baseLayer.clone();
    upperLayer.position.set(0, 5.4, -0.2);

    const topLayer = baseLayer.clone();
    topLayer.position.set(0, 5.8, -0.2);

    character.add(baseLayer);
    character.add(upperLayer);
    character.add(topLayer);
}

/**
 * Adds layered laser eyes with dual color effect
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addLayeredLaserEyes(character) {
    const baseLaser = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    baseLaser.position.set(0.6, 4.8, 0.7);

    const innerLayer = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
        })
    );
    innerLayer.position.set(0.6, 4.8, 0.7);
    baseLaser.add(innerLayer);

    const mirroredLaser = baseLaser.clone();
    mirroredLaser.position.set(-0.6, 4.8, 0.7);

    character.add(baseLaser);
    character.add(mirroredLaser);
}

/**
 * Adds long laser hair for a wild and creative style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addLongLaserHair(character) {
    const longLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    longLayer.position.set(0, 4.7, -0.2);

    const mirroredLongLayer = longLayer.clone();
    mirroredLongLayer.position.set(0, 4.7, 0.2);

    character.add(longLayer);
    character.add(mirroredLongLayer);
}

/**
 * Adds wave laser mouth with wave pattern design
 * @param {THREE.Object3D} character - The character object to add mouth to
 */
function addWaveLaserMouth(character) {
    const laserWave = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 3.0,
        })
    );
    laserWave.position.set(0, 4.3, 0.8);
    laserWave.rotation.z = Math.PI / 12;
    character.add(laserWave);
}

/**
 * Adds sparkling laser hair with high-tech style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSparklingLaserHair(character) {
    const sparklingLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    sparklingLayer.position.set(0, 4.7, -0.3);

    const mirroredSparklingLayer = sparklingLayer.clone();
    mirroredSparklingLayer.position.set(0, 4.7, 0.3);

    character.add(sparklingLayer);
    character.add(mirroredSparklingLayer);
}

/**
 * Adds wave laser spike hair with flowing wave design
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addWaveLaserSpikeHair(character) {
    const laserSpike = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
            transparent: true,
            opacity: 0.8,
        })
    );
    laserSpike.position.set(0, 5, -0.2);
    laserSpike.rotation.z = Math.PI / 12;

    const mirroredLaserSpike = laserSpike.clone();
    mirroredLaserSpike.position.set(0, 5, 0.2);
    mirroredLaserSpike.rotation.z = -Math.PI / 12;

    character.add(laserSpike);
    character.add(mirroredLaserSpike);
}

/**
 * Adds strong double laser eyes with powerful effect
 * @param {THREE.Object3D} character - The character object to add eyes to
 */
function addStrongDoubleLaserEyes(character) {
    const primaryLaser = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.5,
        })
    );
    primaryLaser.position.set(0.6, 4.8, 0.7);

    const secondaryLaser = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
        })
    );
    secondaryLaser.position.set(0.6, 4.6, 0.7);
    primaryLaser.add(secondaryLaser);

    const mirroredPrimaryLaser = primaryLaser.clone();
    mirroredPrimaryLaser.position.set(-0.6, 4.8, 0.7);

    character.add(primaryLaser);
    character.add(mirroredPrimaryLaser);
}

/**
 * Adds mesh laser mouth with torus geometry
 * @param {THREE.Object3D} character - The character object to add mouth to
 */
function addMeshLaserMouth(character) {
    const meshLaser = new THREE.Mesh(
        new THREE.TorusGeometry(0.4, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
        })
    );
    meshLaser.position.set(0, 4.3, 0.9);
    character.add(meshLaser);
}

/**
 * Adds extended laser spike hair with cylinder geometry
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addExtendedLaserSpikeHair(character) {
    const extendedSpike = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.3, 2.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
            opacity: 0.9,
            transparent: true,
        })
    );
    extendedSpike.position.set(0, 5.8, 0);
    character.add(extendedSpike);
}

/**
 * Adds curved laser hair with curved line design
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addCurvedLaserHair(character) {
    const curvedLaser = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    curvedLaser.position.set(0, 4.7, -0.2);
    curvedLaser.rotation.z = Math.PI / 6;

    const mirroredCurvedLaser = curvedLaser.clone();
    mirroredCurvedLaser.position.set(0, 4.7, 0.2);
    mirroredCurvedLaser.rotation.z = -Math.PI / 6;

    character.add(curvedLaser);
    character.add(mirroredCurvedLaser);
}

// Export all functions
export {
    addHighMultiLayeredLaserHair,
    addLayeredLaserEyes,
    addLongLaserHair,
    addWaveLaserMouth,
    addSparklingLaserHair,
    addWaveLaserSpikeHair,
    addStrongDoubleLaserEyes,
    addMeshLaserMouth,
    addExtendedLaserSpikeHair,
    addCurvedLaserHair
};
