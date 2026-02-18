// Laser and Neon Components - Part 17
// Functions for adding laser effects, neon lighting, and futuristic elements

// Function 384: Laser Waist Belt
function addLaserWaistBelt(outfit) {
    const laserBelt = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.5, 0.1, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    laserBelt.position.set(0, -0.5, 0);
    outfit.add(laserBelt);
}

// Function 388: Neon Glow Cape
function addNeonGlowCape(outfit) {
    const neonCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 6),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
            opacity: 0.7,
            transparent: true,
        })
    );
    neonCape.position.set(0, -2, -1);
    neonCape.rotation.x = -Math.PI / 2;
    outfit.add(neonCape);
}

// Function 393: Laser Lace Collar
function addLaserLaceCollar(outfit) {
    const laceCollar = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 1.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceCollar.position.set(0, 1.5, 0.6);
    outfit.add(laceCollar);
}

// Function 396: Glowing Lace Heels
function addGlowingLaceHeels(outfit) {
    const laceHeel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.4, 2, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0xFF4500,
            emissiveIntensity: 1.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceHeel.position.set(0.5, -5.5, 0.6);
    outfit.add(laceHeel);

    const mirroredLaceHeel = laceHeel.clone();
    mirroredLaceHeel.position.set(-0.5, -5.5, 0.6);
    outfit.add(mirroredLaceHeel);
}

// Function 398: Neon Body Highlights
function addNeonBodyHighlights(outfit) {
    const neonDetail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonDetail.position.set(0, 1.2, 0.6);
    outfit.add(neonDetail);
}

// Function 402: Glowing Earrings
function addGlowingEarrings(outfit) {
    const earring = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    earring.position.set(0.4, 2, 0.8);
    outfit.add(earring);

    const mirroredEarring = earring.clone();
    mirroredEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredEarring);
}

// Function 409: Glowing Bracelets
function addGlowingBracelets(outfit) {
    const glowingBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    glowingBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(glowingBracelet);

    const mirroredGlowingBracelet = glowingBracelet.clone();
    mirroredGlowingBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredGlowingBracelet);
}

// Function 415: Neon Anklet
function addNeonAnklet(outfit) {
    const neonAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonAnklet.position.set(0.5, -5.3, 0);
    outfit.add(neonAnklet);

    const mirroredNeonAnklet = neonAnklet.clone();
    mirroredNeonAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredNeonAnklet);
}

// Function 417: Laser Neck Chain
function addLaserNeckChain(outfit) {
    const laserChain = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserChain.position.set(0, 1.6, 0.3);
    outfit.add(laserChain);
}

// Function 419: Neon Glow Bracelet
function addNeonGlowBracelet(outfit) {
    const neonBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
        })
    );
    neonBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(neonBracelet);

    const mirroredBracelet = neonBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function 422: Glowing Laser Ring
function addGlowingLaserRing(outfit) {
    const laserRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserRing.position.set(0.5, 0.5, 0.3);
    outfit.add(laserRing);
}

// Function 423: Neon Glow Necklace
function addNeonGlowNecklace(outfit) {
    const neonNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonNecklace.position.set(0, 1.6, 0.3);
    neonNecklace.rotation.x = Math.PI / 2;
    outfit.add(neonNecklace);
}

export {
    addLaserWaistBelt,
    addNeonGlowCape,
    addLaserLaceCollar,
    addGlowingLaceHeels,
    addNeonBodyHighlights,
    addGlowingEarrings,
    addGlowingBracelets,
    addNeonAnklet,
    addLaserNeckChain,
    addNeonGlowBracelet,
    addGlowingLaserRing,
    addNeonGlowNecklace
};
