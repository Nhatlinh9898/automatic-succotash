// Accessories Components Library - Part 16
// Various hats, jewelry, hair accessories, and wearable items

// Function: Crystal Hair Accessory
function addCrystalHairAccessory(outfit) {
    const hairAccessory = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    hairAccessory.position.set(0.5, 3, 0.6);
    outfit.add(hairAccessory);
}

// Function: Radiant Shoulder Bands
function addRadiantShoulderBands(outfit) {
    const shoulderBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 2.0,
        })
    );
    shoulderBand.position.set(0.5, 2, 0);
    outfit.add(shoulderBand);

    const mirroredShoulderBand = shoulderBand.clone();
    mirroredShoulderBand.position.set(-0.5, 2, 0);
    outfit.add(mirroredShoulderBand);
}

// Function: Light Crystal Straps
function addLightCrystalStraps(outfit) {
    const crystalStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalStrap.position.set(0.6, 1.5, -0.4);
    outfit.add(crystalStrap);

    const mirroredCrystalStrap = crystalStrap.clone();
    mirroredCrystalStrap.position.set(-0.6, 1.5, -0.4);
    outfit.add(mirroredCrystalStrap);
}

// Function: Diagonal Crystal Back Bands
function addDiagonalCrystalBackBands(outfit) {
    const crystalBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalBand.position.set(0.5, 1.5, -0.4);
    crystalBand.rotation.z = Math.PI / 4;
    outfit.add(crystalBand);

    const mirroredCrystalBand = crystalBand.clone();
    mirroredCrystalBand.position.set(-0.5, 1.5, -0.4);
    mirroredCrystalBand.rotation.z = -Math.PI / 4;
    outfit.add(mirroredCrystalBand);
}

// Function: Crystal Overlay Cape
function addCrystalOverlayCape(outfit) {
    const cape = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 6),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            opacity: 0.7,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
            transparent: true,
        })
    );
    cape.position.set(0, -2, -1);
    cape.rotation.x = -Math.PI / 2;
    outfit.add(cape);
}

// Function: Sparkling Crystal Skirt
function addSparklingCrystalSkirt(outfit) {
    const crystalSkirtLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(2.5, 3, 3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalSkirtLayer.position.set(0, -4.5, 0);
    outfit.add(crystalSkirtLayer);
}

// Function: Raised Crystal Edges
function addRaisedCrystalEdges(outfit) {
    const crystalEdge = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalEdge.position.set(0, -4.5, 0.5);
    outfit.add(crystalEdge);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addCrystalHairAccessory,
        addRadiantShoulderBands,
        addLightCrystalStraps,
        addDiagonalCrystalBackBands,
        addCrystalOverlayCape,
        addSparklingCrystalSkirt,
        addRaisedCrystalEdges
    };
}
