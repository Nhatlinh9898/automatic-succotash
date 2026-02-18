// Female Lips Components - Part 26
// Various lip designs for female 3D characters

/**
 * Adds petal-shaped lips for a delicate and feminine appearance
 * @param {THREE.Group} character - The character group to add the lips to
 */
function addPetalShapedLips(character) {
    const petalLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
    );
    petalLips.position.set(0, 4.3, 0.8);
    petalLips.rotation.z = Math.PI / 16;
    character.add(petalLips);
}

/**
 * Adds laser light lips with a subtle red glow for a modern look
 * @param {THREE.Group} character - The character group to add the lips to
 */
function addLaserLightLips(character) {
    const laserLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 1.5,
        })
    );
    laserLips.position.set(0, 4.3, 0.8);
    character.add(laserLips);
}

/**
 * Adds starry lips with a sparkling pink glow for a magical appearance
 * @param {THREE.Group} character - The character group to add the lips to
 */
function addStarryLips(character) {
    const starryLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.5,
        })
    );
    starryLips.position.set(0, 4.3, 0.8);
    character.add(starryLips);
}

/**
 * Adds bold red lips for a confident and striking appearance
 * @param {THREE.Group} character - The character group to add the lips to
 */
function addBoldRedLips(character) {
    const boldLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xFF0000 })
    );
    boldLips.position.set(0, 4.3, 0.8);
    character.add(boldLips);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addPetalShapedLips,
        addLaserLightLips,
        addStarryLips,
        addBoldRedLips
    };
}
