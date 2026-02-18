// Male Beard Components - Part 26
// Various beard designs for male 3D characters

/**
 * Adds a minimal beard with outlined design for a clean and sophisticated look
 * @param {THREE.Group} character - The character group to add the beard to
 */
function addMinimalBeard(character) {
    const minimalBeard = new THREE.Mesh(
        new THREE.PlaneGeometry(1.0, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    minimalBeard.position.set(0, 4.2, 0.8);
    character.add(minimalBeard);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addMinimalBeard
    };
}
