// Male Ear Components - Part 26
// Various ear designs for male 3D characters

/**
 * Adds triangular pattern ears for a strong and sharp appearance
 * @param {THREE.Group} character - The character group to add the ears to
 */
function addTriangularPatternEars(character) {
    const triangularEar = new THREE.Mesh(
        new THREE.ConeGeometry(0.3, 0.7, 16),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    triangularEar.position.set(1.3, 4.5, 0.3);
    triangularEar.rotation.z = Math.PI / 8;

    const mirroredTriangularEar = triangularEar.clone();
    mirroredTriangularEar.position.set(-1.3, 4.5, 0.3);
    mirroredTriangularEar.rotation.z = -Math.PI / 8;

    character.add(triangularEar);
    character.add(mirroredTriangularEar);
}

/**
 * Adds defined square-shaped ears for a strong and bold look
 * @param {THREE.Group} character - The character group to add the ears to
 */
function addDefinedEars(character) {
    const definedEar = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.6, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    definedEar.position.set(1.3, 4.5, 0.3);

    const mirroredDefinedEar = definedEar.clone();
    mirroredDefinedEar.position.set(-1.3, 4.5, 0.3);

    character.add(definedEar);
    character.add(mirroredDefinedEar);
}

/**
 * Adds bold laser ears with a futuristic and sci-fi appearance
 * @param {THREE.Group} character - The character group to add the ears to
 */
function addBoldLaserEars(character) {
    const laserEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.6, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    laserEar.position.set(1.3, 4.5, 0.3);

    const mirroredLaserEar = laserEar.clone();
    mirroredLaserEar.position.set(-1.3, 4.5, 0.3);

    character.add(laserEar);
    character.add(mirroredLaserEar);
}

/**
 * Adds glowing tough ears with a vibrant cyan glow
 * @param {THREE.Group} character - The character group to add the ears to
 */
function addGlowingToughEars(character) {
    const glowingEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    glowingEar.position.set(1.2, 4.5, 0.3);

    const mirroredGlowingEar = glowingEar.clone();
    mirroredGlowingEar.position.set(-1.2, 4.5, 0.3);

    character.add(glowingEar);
    character.add(mirroredGlowingEar);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addTriangularPatternEars,
        addDefinedEars,
        addBoldLaserEars,
        addGlowingToughEars
    };
}
