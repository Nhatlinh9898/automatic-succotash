// Accessories and Jewelry Components - Part 17
// Functions for adding accessories, jewelry, and decorative elements

// Function 385: Pearl Details To Skirt
function addPearlDetailsToSkirt(outfit) {
    const pearl = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
    );
    pearl.position.set(0.5, -3, 0.6);
    outfit.add(pearl);

    const mirroredPearl = pearl.clone();
    mirroredPearl.position.set(-0.5, -3, 0.6);
    outfit.add(mirroredPearl);
}

// Function 386: Vintage Metal Gloves
function addVintageMetalGloves(outfit) {
    const metalGlove = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalGlove.position.set(0.5, -1, 0.3);
    outfit.add(metalGlove);

    const mirroredGlove = metalGlove.clone();
    mirroredGlove.position.set(-0.5, -1, 0.3);
    outfit.add(mirroredGlove);
}

// Function 391: Reflective Metal Bracelets
function addReflectiveMetalBracelets(outfit) {
    const bracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    bracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(bracelet);

    const mirroredBracelet = bracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function 392: Dual Layer Metallic Cape
function addDualLayerMetallicCape(outfit) {
    const capeLayer1 = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 6),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 0.9,
            roughness: 0.3,
        })
    );
    capeLayer1.position.set(0, -2, -1);
    outfit.add(capeLayer1);

    const capeLayer2 = capeLayer1.clone();
    capeLayer2.position.set(0, -2.5, -1.2);
    outfit.add(capeLayer2);
}

// Function 395: Metal Arm Trim
function addMetalArmTrim(outfit) {
    const armTrim = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    armTrim.position.set(0.5, 1.5, 0.6);
    outfit.add(armTrim);

    const mirroredArmTrim = armTrim.clone();
    mirroredArmTrim.position.set(-0.5, 1.5, 0.6);
    outfit.add(mirroredArmTrim);
}

// Function 404: Metal Ring With Gemstone
function addMetalRingWithGemstone(outfit) {
    const ringBase = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    ringBase.position.set(0.5, 0.5, 0.3);
    outfit.add(ringBase);

    const gemstone = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
        })
    );
    gemstone.position.set(0.5, 0.5, 0.5);
    ringBase.add(gemstone);
}

// Function 407: Metallic Necklace
function addMetallicNecklace(outfit) {
    const metallicNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicNecklace.position.set(0, 1.6, 0.3);
    metallicNecklace.rotation.x = Math.PI / 2;
    outfit.add(metallicNecklace);
}

// Function 411: Paired Glowing Rings
function addPairedGlowingRings(outfit) {
    const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    ring.position.set(0.5, 0.5, 0.3);
    outfit.add(ring);

    const mirroredRing = ring.clone();
    mirroredRing.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredRing);
}

// Function 418: Engraved Metal Ring
function addEngravedMetalRing(outfit) {
    const metalRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalRing.position.set(0.5, 0.5, 0.3);
    outfit.add(metalRing);
}

// Function 421: Gemstone Bracelet
function addGemstoneBracelet(outfit) {
    const gemstoneBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
        })
    );
    gemstoneBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(gemstoneBracelet);

    const mirroredBracelet = gemstoneBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function 424: Metallic Earrings
function addMetallicEarrings(outfit) {
    const metallicEarring = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicEarring.position.set(0.4, 2, 0.8);
    outfit.add(metallicEarring);

    const mirroredEarring = metallicEarring.clone();
    mirroredEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredEarring);
}

export {
    addPearlDetailsToSkirt,
    addVintageMetalGloves,
    addReflectiveMetalBracelets,
    addDualLayerMetallicCape,
    addMetalArmTrim,
    addMetalRingWithGemstone,
    addMetallicNecklace,
    addPairedGlowingRings,
    addEngravedMetalRing,
    addGemstoneBracelet,
    addMetallicEarrings
};
