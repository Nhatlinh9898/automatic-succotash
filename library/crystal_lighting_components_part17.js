// Crystal and Lighting Components - Part 17
// Functions for adding crystal details, glowing elements, and lighting effects

// Function 383 continuation (from previous part)
// Crystal details on lace hat
function addCrystalDetailsToLaceHat(outfit) {
    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.5, 3, -0.3);
    const laceHat = new THREE.Group();
    laceHat.add(crystalDetail);
    outfit.add(laceHat);
}

// Function 387: Wavy Crystal Hemline
function addWavyCrystalHemline(outfit) {
    const wavyEdge = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    wavyEdge.position.set(0, -4.5, 0.5);
    outfit.add(wavyEdge);
}

// Function 390: Crystal Highlights On Hat
function addCrystalHighlightsOnHat(outfit) {
    const crystalHighlight = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalHighlight.position.set(0.6, 3, 0);
    outfit.add(crystalHighlight);

    const mirroredCrystalHighlight = crystalHighlight.clone();
    mirroredCrystalHighlight.position.set(-0.6, 3, 0);
    outfit.add(mirroredCrystalHighlight);
}

// Function 394: Twisted Crystal Necklace
function addTwistedCrystalNecklace(outfit) {
    const crystalNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalNecklace.position.set(0, 1.5, 0.3);
    crystalNecklace.rotation.x = Math.PI / 2;
    outfit.add(crystalNecklace);

    const secondLayer = crystalNecklace.clone();
    secondLayer.position.set(0, 1.4, 0.4);
    outfit.add(secondLayer);
}

// Function 399: Diamond Details To Collar
function addDiamondDetailsToCollar(outfit) {
    const diamond = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    diamond.position.set(0.5, 1.6, 0.3);
    outfit.add(diamond);

    const mirroredDiamond = diamond.clone();
    mirroredDiamond.position.set(-0.5, 1.6, 0.3);
    outfit.add(mirroredDiamond);
}

// Function 401: Crystal Necklace
function addCrystalNecklace(outfit) {
    const crystalStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalStrap.position.set(0, 1.6, 0.3);
    outfit.add(crystalStrap);
}

// Function 403: Multi Crystal Bracelets
function addMultiCrystalBracelets(outfit) {
    const crystalLayer = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalLayer.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalLayer);

    const mirroredLayer = crystalLayer.clone();
    mirroredLayer.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredLayer);
}

// Function 405: Crystal Anklets
function addCrystalAnklets(outfit) {
    const anklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    anklet.position.set(0.5, -5.3, 0);
    outfit.add(anklet);

    const mirroredAnklet = anklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Function 408: Sparkling Crystal Ring
function addSparklingCrystalRing(outfit) {
    const crystalRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalRing.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalRing);
}

// Function 412: Metal And Crystal Necklace
function addMetalAndCrystalNecklace(outfit) {
    const metalBase = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalBase.position.set(0, 1.6, 0.3);
    metalBase.rotation.x = Math.PI / 2;

    const crystal = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystal.position.set(0, 1.5, 0.3);
    metalBase.add(crystal);

    outfit.add(metalBase);
}

// Function 413: Double Crystal Hair Clip
function addDoubleCrystalHairClip(outfit) {
    const clipBase = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.2, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            metalness: 0.5,
            roughness: 0.3,
        })
    );
    clipBase.position.set(0, 3, -0.4);

    const crystal = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystal.position.set(0.4, 3, -0.3);
    clipBase.add(crystal);

    outfit.add(clipBase);
}

// Function 414: Diamond Earrings
function addDiamondEarrings(outfit) {
    const diamondEarring = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    diamondEarring.position.set(0.4, 2, 0.8);
    outfit.add(diamondEarring);

    const mirroredDiamondEarring = diamondEarring.clone();
    mirroredDiamondEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredDiamondEarring);
}

export {
    addCrystalDetailsToLaceHat,
    addWavyCrystalHemline,
    addCrystalHighlightsOnHat,
    addTwistedCrystalNecklace,
    addDiamondDetailsToCollar,
    addCrystalNecklace,
    addMultiCrystalBracelets,
    addCrystalAnklets,
    addSparklingCrystalRing,
    addMetalAndCrystalNecklace,
    addDoubleCrystalHairClip,
    addDiamondEarrings
};
