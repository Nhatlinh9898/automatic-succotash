// Diamond and Gemstone Components Library
// Various diamond trims, gemstone details, and precious stone decorations

// Function: Diamond Trim
function addDiamondTrim(outfit) {
    const diamondTrim = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    diamondTrim.position.set(0.5, -4.5, 0.6);
    outfit.add(diamondTrim);

    const mirroredTrim = diamondTrim.clone();
    mirroredTrim.position.set(-0.5, -4.5, 0.6);
    outfit.add(mirroredTrim);
}

// Function: Silk Gemstone Necklace
function addSilkGemstoneNecklace(outfit) {
    const silkNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkNecklace.position.set(0, 1.5, 0.3);
    silkNecklace.rotation.x = Math.PI / 2;
    outfit.add(silkNecklace);

    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.0,
        })
    );
    gemstone.position.set(0, 1.4, 0.3);
    silkNecklace.add(gemstone);
}

// Function: Gemstone Skirt Details
function addGemstoneSkirtDetails(outfit) {
    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.2,
        })
    );
    gemstone.position.set(0.5, -3, 0.5);
    outfit.add(gemstone);

    const mirroredGemstone = gemstone.clone();
    mirroredGemstone.position.set(-0.5, -3, 0.5);
    outfit.add(mirroredGemstone);
}

// Function: Dangling Crystal Earrings
function addDanglingCrystalEarrings(outfit) {
    const earring = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
        })
    );
    earring.position.set(0.5, 2.2, 0.9);
    outfit.add(earring);

    const crystalPendant = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalPendant.position.set(0.5, 1.5, 0.9);
    outfit.add(crystalPendant);
}

// Function: Silk Gem Hat
function addSilkGemHat(outfit) {
    const hat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    hat.position.set(0, 2.8, 0);

    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
        })
    );
    gemstone.position.set(0.5, 3, -0.3);
    hat.add(gemstone);
    outfit.add(hat);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addDiamondTrim,
        addSilkGemstoneNecklace,
        addGemstoneSkirtDetails,
        addDanglingCrystalEarrings,
        addSilkGemHat
    };
}
