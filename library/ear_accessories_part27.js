// Ear Accessories Components - Part 27
// This file contains various ear accessory components for 3D character models

/**
 * Adds crystal ear decorated with sparkling crystal for elegant appearance
 * @param {THREE.Object3D} character - The character object to add ears to
 */
function addCrystalEar(character) {
    const crystalEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    crystalEar.position.set(1.2, 4.5, 0.3);

    const mirroredCrystalEar = crystalEar.clone();
    mirroredCrystalEar.position.set(-1.2, 4.5, 0.3);

    character.add(crystalEar);
    character.add(mirroredCrystalEar);
}

/**
 * Adds laser ears with strong and impressive laser glow
 * @param {THREE.Object3D} character - The character object to add ears to
 */
function addLaserEars(character) {
    const laserEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    laserEar.position.set(1.2, 4.5, 0.3);

    const mirroredLaserEar = laserEar.clone();
    mirroredLaserEar.position.set(-1.2, 4.5, 0.3);

    character.add(laserEar);
    character.add(mirroredLaserEar);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addCrystalEar,
        addLaserEars
    };
}
