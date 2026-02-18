// Crystal and Lighting Components Library
// Various crystal elements, edges, and lighting effects

// Function: Tiered Crystal Edges
function addTieredCrystalEdges(outfit) {
    const crystalEdge = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalEdge.position.set(0, -3.5, 0.5);
    outfit.add(crystalEdge);

    const secondLayer = crystalEdge.clone();
    secondLayer.position.set(0, -4.0, 0.5);
    outfit.add(secondLayer);

    const thirdLayer = crystalEdge.clone();
    thirdLayer.position.set(0, -4.5, 0.5);
    outfit.add(thirdLayer);
}

// Function: Crystal Hat
function addCrystalHat(outfit) {
    const hat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB, // Purple color
        })
    );
    hat.position.set(0, 2.8, 0);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.2,
        })
    );
    crystalDetail.position.set(0.8, 3, -0.3);
    hat.add(crystalDetail);
    outfit.add(hat);
}

// Function: Lace Crystal Skirt
function addLaceCrystalSkirt(outfit) {
    const laceLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 6),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
            transparent: true,
        })
    );
    laceLayer.position.set(0, -2, 0.6);
    outfit.add(laceLayer);
}

// Function: Glittering Crystal Hemline
function addGlitteringCrystalHemline(outfit) {
    const crystalHemline = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalHemline.position.set(0, -4.5, 0.5);
    outfit.add(crystalHemline);
}

// Function: Crystal Shoulder Flowers
function addCrystalShoulderFlowers(outfit) {
    const flower = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    flower.position.set(0.8, 2.5, 0);
    outfit.add(flower);

    const mirroredFlower = flower.clone();
    mirroredFlower.position.set(-0.8, 2.5, 0);
    outfit.add(mirroredFlower);
}

// Function: Crystal Back Straps
function addCrystalBackStraps(outfit) {
    const crystalStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalStrap.position.set(0.6, 1.5, -0.4);
    outfit.add(crystalStrap);

    const mirroredCrystalStrap = crystalStrap.clone();
    mirroredCrystalStrap.position.set(-0.6, 1.5, -0.4);
    outfit.add(mirroredCrystalStrap);
}

// Function: Dangling Crystal Strips
function addDanglingCrystalStrips(outfit) {
    const crystalStrip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalStrip.position.set(0.5, -2, 0.5);
    outfit.add(crystalStrip);

    const mirroredCrystalStrip = crystalStrip.clone();
    mirroredCrystalStrip.position.set(-0.5, -2, 0.5);
    outfit.add(mirroredCrystalStrip);
}

// Function: Crystal Floral Bracelets
function addCrystalFloralBracelets(outfit) {
    const floralBracelet = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    floralBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(floralBracelet);

    const mirroredBracelet = floralBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function: Tiered Crystal Skirt
function addTieredCrystalSkirt(outfit) {
    const crystalLayer1 = new THREE.Mesh(
        new THREE.CylinderGeometry(2.5, 3, 3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalLayer1.position.set(0, -4.5, 0);
    outfit.add(crystalLayer1);

    const crystalLayer2 = crystalLayer1.clone();
    crystalLayer2.position.set(0, -5, 0);
    outfit.add(crystalLayer2);
}

// Function: Diagonal Crystal Shoulder Bands
function addDiagonalCrystalShoulderBands(outfit) {
    const crystalBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalBand.position.set(0.5, 1.5, 0.5);
    crystalBand.rotation.z = Math.PI / 4;
    outfit.add(crystalBand);

    const mirroredCrystalBand = crystalBand.clone();
    mirroredCrystalBand.position.set(-0.5, 1.5, 0.5);
    mirroredCrystalBand.rotation.z = -Math.PI / 4;
    outfit.add(mirroredCrystalBand);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addTieredCrystalEdges,
        addCrystalHat,
        addLaceCrystalSkirt,
        addGlitteringCrystalHemline,
        addCrystalShoulderFlowers,
        addCrystalBackStraps,
        addDanglingCrystalStrips,
        addCrystalFloralBracelets,
        addTieredCrystalSkirt,
        addDiagonalCrystalShoulderBands
    };
}
