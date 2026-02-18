// Male Mouth Components - Part 26
// Various mouth designs for male 3D characters

/**
 * Adds a sharp mouth for a confident and bold appearance
 * @param {THREE.Group} character - The character group to add the mouth to
 */
function addSharpMouth(character) {
    const sharpMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    sharpMouth.position.set(0, 4.3, 0.8);
    sharpMouth.rotation.z = Math.PI / 16;
    character.add(sharpMouth);
}

/**
 * Adds a laser mouth with a strong red glow for a futuristic look
 * @param {THREE.Group} character - The character group to add the mouth to
 */
function addLaserMouth(character) {
    const laserMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserMouth.position.set(0, 4.3, 0.8);
    character.add(laserMouth);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSharpMouth,
        addLaserMouth
    };
}
