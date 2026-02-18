// Accessories Components Library
// Various hats, gloves, bracelets, and wearable accessories

// Function: Gemstone Sleeve Details
function addGemstoneSleeveDetails(outfit) {
    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.2,
        })
    );
    gemstone.position.set(0.5, 1.5, 0.5);
    outfit.add(gemstone);

    const mirroredGemstone = gemstone.clone();
    mirroredGemstone.position.set(-0.5, 1.5, 0.5);
    outfit.add(mirroredGemstone);
}

// Function: Prominent Gemstone Details
function addProminentGemstoneDetails(outfit) {
    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.8,
        })
    );
    gemstone.position.set(0.5, 1.5, 0.5);
    outfit.add(gemstone);

    const mirroredGemstone = gemstone.clone();
    mirroredGemstone.position.set(-0.5, 1.5, 0.5);
    outfit.add(mirroredGemstone);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addGemstoneSleeveDetails,
        addProminentGemstoneDetails
    };
}
