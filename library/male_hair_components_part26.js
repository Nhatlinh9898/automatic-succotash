// Male Hair Components - Part 26
// Various hair designs for male 3D characters

/**
 * Adds mesh spike hair for a strong and bold appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addMeshSpikeHair(character) {
    const meshSpike = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.3, 1.5, 16, 16, true),
        new THREE.MeshStandardMaterial({
            color: 0x2F4F4F,
            wireframe: true,
        })
    );
    meshSpike.position.set(0, 5, 0);
    character.add(meshSpike);
}

/**
 * Adds metal spike hair with a metallic futuristic look
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addMetalSpikeHair(character) {
    const metalSpike = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.2, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalSpike.position.set(0, 5, 0);
    character.add(metalSpike);
}

/**
 * Adds blocky hair for a strong and angular appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addBlockyHair(character) {
    const blockyLayer = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 2.5, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    blockyLayer.position.set(0, 4.7, -0.2);

    const mirroredBlockyLayer = blockyLayer.clone();
    mirroredBlockyLayer.position.set(0, 4.7, 0.2);

    character.add(blockyLayer);
    character.add(mirroredBlockyLayer);
}

/**
 * Adds angular short hair with sharp edges for a stylish look
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addAngularShortHair(character) {
    const angularHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0x2F4F4F,
            opacity: 0.8,
        })
    );
    angularHairLayer.position.set(0, 4.8, -0.2);

    const mirroredAngularHairLayer = angularHairLayer.clone();
    mirroredAngularHairLayer.position.set(0, 4.8, 0.2);

    character.add(angularHairLayer);
    character.add(mirroredAngularHairLayer);
}

/**
 * Adds long straight male hair for a powerful and flowing appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addLongStraightMaleHair(character) {
    const longHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    longHairLayer.position.set(0, 4.7, -0.2);

    const mirroredLongHairLayer = longHairLayer.clone();
    mirroredLongHairLayer.position.set(0, 4.7, 0.2);

    character.add(longHairLayer);
    character.add(mirroredLongHairLayer);
}

/**
 * Adds laser wave hair with a futuristic glowing appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addLaserWaveHair(character) {
    const laserWave = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.3,
            transparent: true,
        })
    );
    laserWave.position.set(0, 4.7, -0.2);
    laserWave.rotation.z = Math.PI / 8;

    const mirroredLaserWave = laserWave.clone();
    mirroredLaserWave.position.set(0, 4.7, 0.2);
    mirroredLaserWave.rotation.z = -Math.PI / 8;

    character.add(laserWave);
    character.add(mirroredLaserWave);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addMeshSpikeHair,
        addMetalSpikeHair,
        addBlockyHair,
        addAngularShortHair,
        addLongStraightMaleHair,
        addLaserWaveHair
    };
}
