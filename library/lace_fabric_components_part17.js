// Lace and Fabric Components - Part 17
// Functions for adding lace details, fabric elements, and textured materials

// Function 880: Glowing Lace Hair Clip
function addGlowingLaceHairClip(outfit) {
    const laceClip = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0xFF4500,
            emissiveIntensity: 1.5,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceClip.position.set(0, 3, -0.4);
    outfit.add(laceClip);
}

export {
    addGlowingLaceHairClip
};
