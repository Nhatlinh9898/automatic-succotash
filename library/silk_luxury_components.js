// Silk and Luxury Components Library
// Various silk bands, trims, and luxury decorative elements

// Function: Sparkling Silk Bands
function addSparklingSilkBands(outfit) {
    const silkBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    silkBand.position.set(0.4, 1.5, 0.5);
    outfit.add(silkBand);

    const mirroredSilkBand = silkBand.clone();
    mirroredSilkBand.position.set(-0.4, 1.5, 0.5);
    outfit.add(mirroredSilkBand);
}

// Function: Metallic Silk Bands
function addMetallicSilkBands(outfit) {
    const silkBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.3,
        })
    );
    silkBand.position.set(0.4, 1.2, 0.5);
    outfit.add(silkBand);

    const secondBand = silkBand.clone();
    secondBand.position.set(-0.4, 1.2, 0.5);
    outfit.add(secondBand);
}

// Function: Metallic Silk Cape
function addMetallicSilkCape(outfit) {
    const silkCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 6),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.3,
        })
    );
    silkCape.position.set(0, -2, -1);
    silkCape.rotation.x = -Math.PI / 2;
    outfit.add(silkCape);
}

// Function: Silk Trims
function addSilkTrims(outfit) {
    const silkTrim = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkTrim.position.set(0, -3.5, 0.6);
    outfit.add(silkTrim);
}

// Function: Glowing Silk Strips
function addGlowingSilkStrips(outfit) {
    const silkStrip = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 4),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.8,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkStrip.position.set(0.6, 1.5, -0.5);
    silkStrip.rotation.z = Math.PI / 6;
    outfit.add(silkStrip);

    const mirroredSilkStrip = silkStrip.clone();
    mirroredSilkStrip.position.set(-0.6, 1.5, -0.5);
    mirroredSilkStrip.rotation.z = -Math.PI / 6;
    outfit.add(mirroredSilkStrip);
}

// Function: Lace Silk Cape
function addLaceSilkCape(outfit) {
    const silkCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 6.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkCape.position.set(0, -2, -1);
    silkCape.rotation.x = -Math.PI / 2;
    outfit.add(silkCape);
}

// Function: Copper Hemline
function addCopperHemline(outfit) {
    const copperEdge = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xCD7F32,
            metalness: 0.8,
            roughness: 0.3,
        })
    );
    copperEdge.position.set(0, -4.5, 0.5);
    outfit.add(copperEdge);
}

// Function: Silk Crystal Gloves
function addSilkCrystalGloves(outfit) {
    const glove = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    glove.position.set(0.5, -1, 0.3);
    outfit.add(glove);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.4, -0.5, 0.3);
    glove.add(crystalDetail);
    outfit.add(glove);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSparklingSilkBands,
        addMetallicSilkBands,
        addMetallicSilkCape,
        addSilkTrims,
        addGlowingSilkStrips,
        addLaceSilkCape,
        addCopperHemline,
        addSilkCrystalGloves
    };
}
