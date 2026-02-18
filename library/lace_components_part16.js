// Lace Components Library - Part 16
// Various lace details, decorative edges, and lace fabric elements

// Function: Sparkling Lace Cape
function addSparklingLaceCape(outfit) {
    const laceCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 6.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceCape.position.set(0, -2, -1);
    laceCape.rotation.x = -Math.PI / 2;
    outfit.add(laceCape);
}

// Function: Decorative Lace Edges
function addDecorativeLaceEdges(outfit) {
    const laceEdge = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.9,
            transparent: true,
        })
    );
    laceEdge.position.set(0, -4.5, 0.6);
    outfit.add(laceEdge);
}

// Function: Laser Lace Trims
function addLaserLaceTrims(outfit) {
    const laceTrim = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceTrim.position.set(0, -4.5, 0.6);
    outfit.add(laceTrim);
}

// Function: Raised Crystal Bands
function addRaisedCrystalBands(outfit) {
    const crystalBand = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalBand.position.set(0, -2.5, 0.6);
    outfit.add(crystalBand);

    const mirroredBand = crystalBand.clone();
    mirroredBand.position.set(0, -3.5, 0.6);
    outfit.add(mirroredBand);
}

// Function: Crystal Lace Edges
function addCrystalLaceEdges(outfit) {
    const laceEdge = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
            opacity: 0.9,
            transparent: true,
        })
    );
    laceEdge.position.set(0, -3.5, 0.6);
    outfit.add(laceEdge);
}

// Function: Illuminated Lace Trim
function addIlluminatedLaceTrim(outfit) {
    const laceTrim = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 1.8,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceTrim.position.set(0, -3.5, 0.6);
    outfit.add(laceTrim);
}

// Function: Crystal Lace Hat
function addCrystalLaceHat(outfit) {
    const laceHat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceHat.position.set(0, 2.8, 0);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.5, 3, -0.3);
    laceHat.add(crystalDetail);
    outfit.add(laceHat);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSparklingLaceCape,
        addDecorativeLaceEdges,
        addLaserLaceTrims,
        addRaisedCrystalBands,
        addCrystalLaceEdges,
        addIlluminatedLaceTrim,
        addCrystalLaceHat
    };
}
