// Female Eye Components - Part 26
// Various eye designs for female 3D characters

/**
 * Adds laser glowing eyes with a vibrant red glow for a futuristic look
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addLaserGlowingEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.8,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

/**
 * Adds laser outlined eyes with a bright red outline for a striking appearance
 * @param {THREE.Group} character - The character group to add the eyes to
 */
function addLaserOutlinedEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addLaserGlowingEyes,
        addLaserOutlinedEyes
    };
}
