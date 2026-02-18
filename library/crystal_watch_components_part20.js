// Crystal Watch Components Library - Part 20
// Crystal and glowing watch designs

/**
 * Adds a glowing crystal watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addGlowingCrystalWatch(outfit) {
    const crystalFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    crystalFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
    );
    strap.position.set(0.5, 0.75, 0.3);
    crystalFace.add(strap);

    outfit.add(crystalFace);
}

/**
 * Adds a jewel-inspired crystal watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addJewelInspiredCrystalWatch(outfit) {
    const jewelFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    jewelFace.position.set(0.5, 0, 0.3);

    const gemStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFE0, // Màu ngọc trai
        })
    );
    gemStrap.position.set(0.5, 0.75, 0.3);
    jewelFace.add(gemStrap);

    outfit.add(jewelFace);
}

/**
 * Adds a floral crystal face watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addFloralCrystalFaceWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const floralDetail = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFF69B4,
            opacity: 0.9,
            transparent: true,
        })
    );
    floralDetail.position.set(0.5, 0.1, 0.4);
    watchFace.add(floralDetail);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
    );
    strap.position.set(0.5, 0.75, 0.3);
    watchFace.add(strap);

    outfit.add(watchFace);
}

/**
 * Adds a layered crystal face watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addLayeredCrystalFaceWatch(outfit) {
    const baseLayer = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    baseLayer.position.set(0.5, 0, 0.3);

    const secondLayer = baseLayer.clone();
    secondLayer.position.set(0.5, 0, 0.35);
    baseLayer.add(secondLayer);

    const thirdLayer = baseLayer.clone();
    thirdLayer.position.set(0.5, 0, 0.4);
    secondLayer.add(thirdLayer);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
    );
    strap.position.set(0.5, 0.75, 0.3);
    baseLayer.add(strap);

    outfit.add(baseLayer);
}

/**
 * Adds a double layer crystal watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addDoubleLayerCrystalWatch(outfit) {
    const crystalFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalFace.position.set(0.5, 0, 0.3);

    const secondLayer = crystalFace.clone();
    secondLayer.position.set(0.5, 0, 0.35);
    crystalFace.add(secondLayer);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
    );
    strap.position.set(0.5, 0.75, 0.3);
    crystalFace.add(strap);

    outfit.add(crystalFace);
}

/**
 * Adds a digital crystal watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addDigitalCrystalWatch(outfit) {
    const digitalFace = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.4),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    digitalFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    digitalFace.add(strap);

    outfit.add(digitalFace);
}

/**
 * Adds a colorful crystal strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addColorfulCrystalStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const crystalStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    crystalStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(crystalStrap);

    outfit.add(watchFace);
}

/**
 * Adds a multicolor layered crystal watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addMulticolorLayeredCrystalWatch(outfit) {
    const baseLayer = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            opacity: 0.8,
            transparent: true,
        })
    );
    baseLayer.position.set(0.5, 0, 0.3);

    const secondLayer = baseLayer.clone();
    secondLayer.position.set(0.5, 0, 0.35);
    secondLayer.material.color.set(0x87CEEB);
    baseLayer.add(secondLayer);

    const thirdLayer = baseLayer.clone();
    thirdLayer.position.set(0.5, 0, 0.4);
    thirdLayer.material.color.set(0xFF69B4);
    secondLayer.add(thirdLayer);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
    );
    strap.position.set(0.5, 0.75, 0.3);
    baseLayer.add(strap);

    outfit.add(baseLayer);
}

/**
 * Adds a flowing crystal strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addFlowingCrystalStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const crystalStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    crystalStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(crystalStrap);

    outfit.add(watchFace);
}
