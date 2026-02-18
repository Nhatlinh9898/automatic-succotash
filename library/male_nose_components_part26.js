// Male Nose Components - Part 26
// Various nose designs for male 3D characters

/**
 * Adds a flame-shaped nose to create a sharp and bold appearance
 * @param {THREE.Group} character - The character group to add the nose to
 */
function addFlameShapedNose(character) {
    const flameNose = new THREE.Mesh(
        new THREE.ConeGeometry(0.1, 0.4, 16),
        new THREE.MeshStandardMaterial({ color: 0xFF4500 })
    );
    flameNose.position.set(0, 4.5, 0.8);
    flameNose.rotation.x = Math.PI / 8;
    character.add(flameNose);
}

/**
 * Adds a metallic nose with a shiny, futuristic appearance
 * @param {THREE.Group} character - The character group to add the nose to
 */
function addMetallicNose(character) {
    const metallicNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.2, 0.4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicNose.position.set(0, 4.5, 0.8);
    character.add(metallicNose);
}

/**
 * Adds a triangular nose for a sharp and angular look
 * @param {THREE.Group} character - The character group to add the nose to
 */
function addTriangularNose(character) {
    const triangularNose = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    triangularNose.position.set(0, 4.5, 0.8);
    triangularNose.rotation.x = Math.PI / 8;
    character.add(triangularNose);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addFlameShapedNose,
        addMetallicNose,
        addTriangularNose
    };
}
