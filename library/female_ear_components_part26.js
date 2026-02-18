// Female Ear Components - Part 26
// Various ear designs for female 3D characters

/**
 * Adds lace shimmering ears with a delicate and elegant appearance
 * @param {THREE.Group} character - The character group to add the ears to
 */
function addLaceShimmeringEars(character) {
    const laceEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceEar.position.set(1.3, 4.5, 0.3);

    const mirroredLaceEar = laceEar.clone();
    mirroredLaceEar.position.set(-1.3, 4.5, 0.3);

    character.add(laceEar);
    character.add(mirroredLaceEar);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addLaceShimmeringEars
    };
}
