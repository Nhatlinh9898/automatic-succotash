/**
 * Jewelry Accessories Library
 * Various jewelry and decorative accessories for 3D outfits
 */

// Hand jewelry function
function addHandJewels(outfit) {
    const jewel = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 32),
        new THREE.MeshStandardMaterial({ color: 0xB0E0E6, emissive: 0x87CEEB, emissiveIntensity: 0.9 })
    );
    jewel.position.set(0.6, 1, 0.3);
    outfit.add(jewel);

    const secondJewel = jewel.clone();
    secondJewel.position.set(-0.6, 1, 0.3);
    outfit.add(secondJewel);
}

// Crown function
function addCrownToOutfit(outfit) {
    const crown = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.5, 0.2, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
    );
    crown.position.set(0, 2.8, 0);
    outfit.add(crown);

    const jewelOnCrown = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFF69B4,
            emissive: 0xFFC0CB,
            emissiveIntensity: 0.8,
        })
    );
    jewelOnCrown.position.set(0, 2.9, 0.3);
    outfit.add(jewelOnCrown);
}

// Crystal bracelets function
function addCrystalBracelets(outfit) {
    const bracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.2, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 0.8,
        })
    );
    bracelet.position.set(0.6, 0.5, 0.3);
    outfit.add(bracelet);

    const secondBracelet = bracelet.clone();
    secondBracelet.position.set(-0.6, 0.5, 0.3);
    outfit.add(secondBracelet);
}

// Gemstone details function
function addGemstoneDetails(outfit) {
    const gem = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 0.8,
        })
    );
    gem.position.set(0.5, 1.2, 0.6);
    outfit.add(gem);

    const secondGem = gem.clone();
    secondGem.position.set(-0.5, 1.2, 0.6);
    outfit.add(secondGem);
}

// Pendant function
function addPendant(outfit) {
    const pendant = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
    );
    pendant.position.set(0, 1.5, 0.7);
    outfit.add(pendant);
}

// Beaded lines function
function addBeadedLines(outfit) {
    const beadLine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 0.8,
        })
    );
    beadLine.position.set(0.4, -2, 0.5);
    outfit.add(beadLine);

    const secondBeadLine = beadLine.clone();
    secondBeadLine.position.set(-0.4, -2, 0.5);
    outfit.add(secondBeadLine);
}

// Watch function
function addWatchToOutfit(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
    );
    watchFace.position.set(0.5, 0.5, 0.4);
    outfit.add(watchFace);

    const watchStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 1, 16),
        new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black color
    );
    watchStrap.position.set(0.5, 0.5, 0.2);
    outfit.add(watchStrap);
}

// Glass Pendant (213)
function addGlassPendant(outfit) {
    const glassPendant = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    glassPendant.position.set(0, 1.5, 0.3);
    outfit.add(glassPendant);
}

// Floral Collar (218)
function addFloralCollar(outfit) {
    const floralDetail = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng
    );
    floralDetail.position.set(0.6, 1.8, 0.4);
    outfit.add(floralDetail);

    const mirroredFloralDetail = floralDetail.clone();
    mirroredFloralDetail.position.set(-0.6, 1.8, 0.4);
    outfit.add(mirroredFloralDetail);
}

// Floral Bracelets (220)
function addFloralBracelets(outfit) {
    const flowerBracelet = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng
    );
    flowerBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(flowerBracelet);

    const mirroredFlowerBracelet = flowerBracelet.clone();
    mirroredFlowerBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredFlowerBracelet);
}

// Pearl Decorations (230)
function addPearlDecorations(outfit) {
    const pearlDecoration = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
    );
    pearlDecoration.position.set(0.5, 1, 0.6);
    outfit.add(pearlDecoration);

    const mirroredPearl = pearlDecoration.clone();
    mirroredPearl.position.set(-0.5, 1, 0.6);
    outfit.add(mirroredPearl);
}

// Pearl Decorated Bag (248)
function addPearlDecoratedBag(outfit) {
    const bag = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.6, 0.4),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
    );
    bag.position.set(0.6, -1, -0.5);
    outfit.add(bag);
}

// Light Earrings (255)
function addLightEarrings(outfit) {
    const earring = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 1.5,
        })
    );
    earring.position.set(0.4, 2, 0.7);
    outfit.add(earring);

    const mirroredEarring = earring.clone();
    mirroredEarring.position.set(-0.4, 2, 0.7);
    outfit.add(mirroredEarring);
}

// Crystal Anklets (257)
function addCrystalAnklets(outfit) {
    const anklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    anklet.position.set(0.5, -5.3, 0);
    outfit.add(anklet);

    const mirroredAnklet = anklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Shoulder Gemstones (260)
function addShoulderGemstones(outfit) {
    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.0,
        })
    );
    gemstone.position.set(0.6, 2, 0);
    outfit.add(gemstone);

    const mirroredGemstone = gemstone.clone();
    mirroredGemstone.position.set(-0.6, 2, 0);
    outfit.add(mirroredGemstone);
}

// Glittering Anklets (270)
function addGlitteringAnklets(outfit) {
    const anklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
        })
    );
    anklet.position.set(0.5, -5.3, 0);
    outfit.add(anklet);

    const mirroredAnklet = anklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Wavy Metal Necklace (275)
function addWavyMetalNecklace(outfit) {
    const metalNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalNecklace.position.set(0, 1.6, 0.4);
    metalNecklace.rotation.x = Math.PI / 2;
    outfit.add(metalNecklace);
}

// Laser Gemstone Necklace (282)
function addLaserGemstoneNecklace(outfit) {
    const laserNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserNecklace.position.set(0, 1.5, 0.3);
    laserNecklace.rotation.x = Math.PI / 2;
    outfit.add(laserNecklace);

    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.2,
        })
    );
    gemstone.position.set(0, 1.3, 0.3);
    outfit.add(gemstone);
}

// Multi Layered Metal Necklace (292)
function addMultiLayeredMetalNecklace(outfit) {
    const metalLayer = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalLayer.position.set(0, 1.5, 0.3);
    metalLayer.rotation.x = Math.PI / 2;
    outfit.add(metalLayer);

    const secondMetalLayer = metalLayer.clone();
    secondMetalLayer.position.set(0, 1.4, 0.4);
    outfit.add(secondMetalLayer);
}

// Pearl Decor Patterns (299)
function addPearlDecorPatterns(outfit) {
    const pearlPattern = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
    );
    pearlPattern.position.set(0.6, -3, 0.5);
    outfit.add(pearlPattern);

    const mirroredPearlPattern = pearlPattern.clone();
    mirroredPearlPattern.position.set(-0.6, -3, 0.5);
    outfit.add(mirroredPearlPattern);
}

export {
    addHandJewels,
    addCrownToOutfit,
    addCrystalBracelets,
    addGemstoneDetails,
    addPendant,
    addBeadedLines,
    addWatchToOutfit,
    addGlassPendant,
    addFloralCollar,
    addFloralBracelets,
    addPearlDecorations,
    addPearlDecoratedBag,
    addLightEarrings,
    addCrystalAnklets,
    addShoulderGemstones,
    addGlitteringAnklets,
    addWavyMetalNecklace,
    addLaserGemstoneNecklace,
    addMultiLayeredMetalNecklace,
    addPearlDecorPatterns
};
