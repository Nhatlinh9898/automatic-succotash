// Facial Features Components - Part 29
// Laser Eyes and Mouth Components

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

// Export all functions
export {
    addLayeredLaserEyes,
    addWaveLaserMouth,
    addStrongDoubleLaserEyes,
    addMeshLaserMouth
};
