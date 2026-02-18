// Laser and Neon Components - Part 18
// Functions for adding laser effects, neon lighting, and futuristic elements

// Function 430: Laser Sparkle Necklace
function addLaserSparkleNecklace(outfit) {
    const laserNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserNecklace.position.set(0, 1.6, 0.3);
    laserNecklace.rotation.x = Math.PI / 2;
    outfit.add(laserNecklace);
}

// Function 432: Laser Pattern Necklace
function addLaserPatternNecklace(outfit) {
    const laserPattern = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.2,
        })
    );
    laserPattern.position.set(0, 1.6, 0.3);
    outfit.add(laserPattern);
}

// Function 434: Neon Twist Ring
function addNeonTwistRing(outfit) {
    const neonRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonRing.position.set(0.5, 0.5, 0.3);
    outfit.add(neonRing);
}

// Function 436: Neon Hair Accessory
function addNeonHairAccessory(outfit) {
    const neonAccessory = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    neonAccessory.position.set(0, 3, -0.5);
    outfit.add(neonAccessory);
}

// Function 438: Laser Pattern Bracelets
function addLaserPatternBracelets(outfit) {
    const laserBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    laserBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(laserBracelet);

    const mirroredBracelet = laserBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function 445: Soft Glow Necklace
function addSoftGlowNecklace(outfit) {
    const glowNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
        })
    );
    glowNecklace.position.set(0, 1.6, 0.3);
    glowNecklace.rotation.x = Math.PI / 2;
    outfit.add(glowNecklace);
}

// Function 448: Sparkling Laser Anklets
function addSparklingLaserAnklets(outfit) {
    const laserAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserAnklet.position.set(0.5, -5.3, 0);
    outfit.add(laserAnklet);

    const mirroredLaserAnklet = laserAnklet.clone();
    mirroredLaserAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredLaserAnklet);
}

// Function 451: Metal Laser Necklace
function addMetalLaserNecklace(outfit) {
    const metalBase = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalBase.position.set(0, 1.6, 0.3);
    metalBase.rotation.x = Math.PI / 2;

    const laserDetail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserDetail.position.set(0, 1.5, 0.3);
    metalBase.add(laserDetail);

    outfit.add(metalBase);
}

// Function 455: Laser Earrings
function addLaserEarrings(outfit) {
    const laserEarring = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserEarring.position.set(0.4, 2, 0.8);
    outfit.add(laserEarring);

    const mirroredLaserEarring = laserEarring.clone();
    mirroredLaserEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredLaserEarring);
}

// Function 458: Wavy Neon Bracelet
function addWavyNeonBracelet(outfit) {
    const neonBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(neonBracelet);
}

// Function 463: Double Laser Anklet
function addDoubleLaserAnklet(outfit) {
    const laserAnklet1 = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserAnklet1.position.set(0.5, -5.2, 0);
    outfit.add(laserAnklet1);

    const laserAnklet2 = laserAnklet1.clone();
    laserAnklet2.position.set(0.5, -5.4, 0);
    outfit.add(laserAnklet2);
}

// Function 465: Minimal Laser Necklace
function addMinimalLaserNecklace(outfit) {
    const laserNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserNecklace.position.set(0, 1.6, 0.3);
    laserNecklace.rotation.x = Math.PI / 2;
    outfit.add(laserNecklace);
}

export {
    addLaserSparkleNecklace,
    addLaserPatternNecklace,
    addNeonTwistRing,
    addNeonHairAccessory,
    addLaserPatternBracelets,
    addSoftGlowNecklace,
    addSparklingLaserAnklets,
    addMetalLaserNecklace,
    addLaserEarrings,
    addWavyNeonBracelet,
    addDoubleLaserAnklet,
    addMinimalLaserNecklace
};
