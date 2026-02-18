// Accessories and Jewelry Components - Part 18
// Functions for adding accessories, jewelry, and decorative elements

// Function 426: Silver Anklet
function addSilverAnklet(outfit) {
    const silverAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    silverAnklet.position.set(0.5, -5.3, 0);
    outfit.add(silverAnklet);

    const mirroredAnklet = silverAnklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Function 431: Layered Metal Bracelets
function addLayeredMetalBracelets(outfit) {
    const metalLayer = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalLayer.position.set(0.5, 0.5, 0.3);
    outfit.add(metalLayer);

    const secondLayer = metalLayer.clone();
    secondLayer.position.set(0.5, 0.4, 0.3);
    outfit.add(secondLayer);
}

// Function 439: Twisted Metal Anklets
function addTwistedMetalAnklets(outfit) {
    const metalAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalAnklet.position.set(0.5, -5.3, 0);
    outfit.add(metalAnklet);

    const mirroredAnklet = metalAnklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Function 441: Small Flower Bracelet
function addSmallFlowerBracelet(outfit) {
    const flowerBracelet = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 32),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng nhạt
    );
    flowerBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(flowerBracelet);

    const mirroredFlowerBracelet = flowerBracelet.clone();
    mirroredFlowerBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredFlowerBracelet);
}

// Function 443: Wavy Metal Hair Clip
function addWavyMetalHairClip(outfit) {
    const metalClip = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.2, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalClip.position.set(0, 3, -0.5);
    outfit.add(metalClip);
}

// Function 446: Metal Mesh Ring
function addMetalMeshRing(outfit) {
    const meshRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshRing.position.set(0.5, 0.5, 0.3);
    outfit.add(meshRing);
}

// Function 453: Vintage Metal Necklace
function addVintageMetalNecklace(outfit) {
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
    outfit.add(metalBase);
}

// Function 456: Pearl Hair Accessory
function addPearlHairAccessory(outfit) {
    const pearlClip = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFE0, // Màu ngọc trai
        })
    );
    pearlClip.position.set(0, 3, -0.4);
    outfit.add(pearlClip);
}

// Function 457: Simple Metal Ring
function addSimpleMetalRing(outfit) {
    const metalRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalRing.position.set(0.5, 0.5, 0.3);
    outfit.add(metalRing);
}

// Function 459: Raised Crystal Bracelets
function addRaisedCrystalBracelets(outfit) {
    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalDetail.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalDetail);

    const mirroredDetail = crystalDetail.clone();
    mirroredDetail.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredDetail);
}

// Function 460: Simple Metal Necklace
function addSimpleMetalNecklace(outfit) {
    const metalNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalNecklace.position.set(0, 1.6, 0.3);
    metalNecklace.rotation.x = Math.PI / 2;
    outfit.add(metalNecklace);
}

// Function 461: Engraved Metal Bracelet
function addEngravedMetalBracelet(outfit) {
    const metalBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(metalBracelet);
}

// Function 467: Metal Mesh Bracelet
function addMetalMeshBracelet(outfit) {
    const meshBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(meshBracelet);
}

// Function 468: Metal Flower Hair Clip
function addMetalFlowerHairClip(outfit) {
    const flowerClip = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    flowerClip.position.set(0, 3, -0.4);
    outfit.add(flowerClip);
}

export {
    addSilverAnklet,
    addLayeredMetalBracelets,
    addTwistedMetalAnklets,
    addSmallFlowerBracelet,
    addWavyMetalHairClip,
    addMetalMeshRing,
    addVintageMetalNecklace,
    addPearlHairAccessory,
    addSimpleMetalRing,
    addRaisedCrystalBracelets,
    addSimpleMetalNecklace,
    addEngravedMetalBracelet,
    addMetalMeshBracelet,
    addMetalFlowerHairClip
};
