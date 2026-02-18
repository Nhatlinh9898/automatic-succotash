// Silk and Luxury Fabric Components Library
// Various silk elements, luxury fabrics, and elegant textile decorations

// Function: Soft Light Cape
function addSoftLightCape(outfit) {
    const lightCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 6.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
            opacity: 0.5,
            transparent: true,
        })
    );
    lightCape.position.set(0, -2, -1);
    lightCape.rotation.x = -Math.PI / 2;
    outfit.add(lightCape);
}

// Function: Silk Embroidery Patterns
function addSilkEmbroideryPatterns(outfit) {
    const silkPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkPattern.position.set(0, 1.5, 0.6);
    outfit.add(silkPattern);
}

// Function: Glowing Satin Trims
function addGlowingSatinTrims(outfit) {
    const satinTrim = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xE6E6FA,
            emissive: 0x9370DB,
            emissiveIntensity: 1.0,
        })
    );
    satinTrim.position.set(0, -4.5, 0.5);
    outfit.add(satinTrim);
}

// Function: Vertical Light Bands
function addVerticalLightBands(outfit) {
    const lightBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    lightBand.position.set(0.5, -2, 0.5);
    outfit.add(lightBand);

    const mirroredLightBand = lightBand.clone();
    mirroredLightBand.position.set(-0.5, -2, 0.5);
    outfit.add(mirroredLightBand);
}

// Function: Decorative Silk Bands
function addDecorativeSilkBands(outfit) {
    const silkBand = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkBand.position.set(0.5, 1.2, 0.6);
    outfit.add(silkBand);

    const mirroredSilkBand = silkBand.clone();
    mirroredSilkBand.position.set(-0.5, 1.2, 0.6);
    outfit.add(mirroredSilkBand);
}

// Function: Layered Glowing Silk
function addLayeredGlowingSilk(outfit) {
    const silkLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 6),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.7,
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
            transparent: true,
        })
    );
    silkLayer.position.set(0, -2, 0.6);
    outfit.add(silkLayer);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSoftLightCape,
        addSilkEmbroideryPatterns,
        addGlowingSatinTrims,
        addVerticalLightBands,
        addDecorativeSilkBands,
        addLayeredGlowingSilk
    };
}
