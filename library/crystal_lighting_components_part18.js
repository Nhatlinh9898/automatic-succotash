// Crystal and Lighting Components - Part 18
// Functions for adding crystal details, glowing elements, and lighting effects

// Function 425 continuation (from previous part)
// Silk and gemstone combination
function addSilkGemstoneNecklace(outfit) {
    const silkBand = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.9,
            transparent: true,
        })
    );
    silkBand.position.set(0, 1.6, 0.3);
    silkBand.rotation.x = Math.PI / 2;

    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.8,
        })
    );
    gemstone.position.set(0, 1.4, 0.3);
    silkBand.add(gemstone);
    outfit.add(silkBand);
}

// Function 427: Engraved Crystal Necklace
function addEngravedCrystalNecklace(outfit) {
    const crystalNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalNecklace.position.set(0, 1.6, 0.3);
    crystalNecklace.rotation.x = Math.PI / 2;

    const engraving = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0x87CEEB,
            opacity: 0.8,
            transparent: true,
        })
    );
    engraving.position.set(0, 1.5, 0.3);
    crystalNecklace.add(engraving);
    outfit.add(crystalNecklace);
}

// Function 428: Dangling Crystal Earrings
function addDanglingCrystalEarrings(outfit) {
    const crystalEarring = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalEarring.position.set(0.4, 2, 0.8);
    outfit.add(crystalEarring);

    const mirroredEarring = crystalEarring.clone();
    mirroredEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredEarring);
}

// Function 435: Metal Crystal Earrings
function addMetalCrystalEarrings(outfit) {
    const crystalBase = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalBase.position.set(0.4, 2, 0.8);
    outfit.add(crystalBase);

    const metalHighlight = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalHighlight.position.set(0.4, 2, 0.8);
    outfit.add(metalHighlight);
}

// Function 437: Sparkling Crystal Necklace
function addSparklingCrystalNecklace(outfit) {
    const sparklingNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    sparklingNecklace.position.set(0, 1.6, 0.3);
    sparklingNecklace.rotation.x = Math.PI / 2;
    outfit.add(sparklingNecklace);
}

// Function 440: Statement Crystal Ring
function addStatementCrystalRing(outfit) {
    const crystalRing = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    crystalRing.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalRing);
}

// Function 442: Crystal Flower Anklets
function addCrystalFlowerAnklets(outfit) {
    const flowerAnklet = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    flowerAnklet.position.set(0.5, -5.3, 0);
    outfit.add(flowerAnklet);

    const mirroredFlowerAnklet = flowerAnklet.clone();
    mirroredFlowerAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredFlowerAnklet);
}

// Function 444: Long Crystal Earrings
function addLongCrystalEarrings(outfit) {
    const earring = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    earring.position.set(0.4, 2, 0.8);
    outfit.add(earring);

    const mirroredEarring = earring.clone();
    mirroredEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredEarring);
}

// Function 447: Clustered Crystal Bracelets
function addClusteredCrystalBracelets(outfit) {
    const crystalCluster = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalCluster.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalCluster);

    const mirroredCluster = crystalCluster.clone();
    mirroredCluster.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredCluster);
}

// Function 450: Statement Crystal Necklace
function addStatementCrystalNecklace(outfit) {
    const crystalNecklace = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    crystalNecklace.position.set(0, 1.5, 0.3);
    outfit.add(crystalNecklace);
}

// Function 452: Layered Crystal Ring
function addLayeredCrystalRing(outfit) {
    const crystalLayer1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalLayer1.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalLayer1);

    const crystalLayer2 = crystalLayer1.clone();
    crystalLayer2.position.set(0.5, 0.5, 0.4);
    outfit.add(crystalLayer2);
}

// Function 462: Floral Crystal Necklace
function addFloralCrystalNecklace(outfit) {
    const flowerCrystal = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    flowerCrystal.position.set(0, 1.5, 0.4);
    outfit.add(flowerCrystal);
}

// Function 464: Crystal Drop Earrings
function addCrystalDropEarrings(outfit) {
    const crystalDrop = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDrop.position.set(0.4, 2, 0.8);
    outfit.add(crystalDrop);

    const mirroredDrop = crystalDrop.clone();
    mirroredDrop.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredDrop);
}

// Function 466: Crystal Ring
function addCrystalRing(outfit) {
    const crystalRing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalRing.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalRing);
}

export {
    addSilkGemstoneNecklace,
    addEngravedCrystalNecklace,
    addDanglingCrystalEarrings,
    addMetalCrystalEarrings,
    addSparklingCrystalNecklace,
    addStatementCrystalRing,
    addCrystalFlowerAnklets,
    addLongCrystalEarrings,
    addClusteredCrystalBracelets,
    addStatementCrystalNecklace,
    addLayeredCrystalRing,
    addFloralCrystalNecklace,
    addCrystalDropEarrings,
    addCrystalRing
};
