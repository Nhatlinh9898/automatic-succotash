// Watch Accessories Components Library - Part 20
// Basic and classic watch designs

/**
 * Adds a classic woven strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addWovenStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 0.7,
            roughness: 0.3,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const wovenStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    wovenStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(wovenStrap);

    outfit.add(watchFace);
}

/**
 * Adds a retro metal watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addRetroMetalWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 0.8,
            roughness: 0.3,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    watchFace.add(strap);

    outfit.add(watchFace);
}

/**
 * Adds a lace strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addLaceStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.9,
            transparent: true,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const laceStrap = new THREE.Mesh(
        new THREE.PlaneGeometry(0.2, 1.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(laceStrap);

    outfit.add(watchFace);
}

/**
 * Adds a colorful woven strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addColorfulWovenStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            metalness: 0.6,
            roughness: 0.3,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const wovenStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xF08080, // Màu đỏ hồng
        })
    );
    wovenStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(wovenStrap);

    outfit.add(watchFace);
}

/**
 * Adds a transparent strap retro watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addTransparentStrapRetroWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.3,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const transparentStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.5,
            transparent: true,
        })
    );
    transparentStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(transparentStrap);

    outfit.add(watchFace);
}

/**
 * Adds a vintage leather watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addVintageLeatherWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 0.8,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const leatherStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x8B4513, // Màu da nâu
        })
    );
    leatherStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(leatherStrap);

    outfit.add(watchFace);
}

/**
 * Adds a mesh metal strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addMeshMetalStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const meshStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(meshStrap);

    outfit.add(watchFace);
}

/**
 * Adds an oval face watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addOvalFaceWatch(outfit) {
    const ovalFace = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.2, 64),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.2,
        })
    );
    ovalFace.rotation.x = Math.PI / 2;
    ovalFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    ovalFace.add(strap);

    outfit.add(ovalFace);
}
