// Special Watch Components Library - Part 20
// Glass, neon, and special effect watch designs

/**
 * Adds a glowing lace strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addGlowingLaceStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
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
 * Adds a tinted glass retro watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addTintedGlassRetroWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.3,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const tintedGlass = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.5,
            transparent: true,
        })
    );
    tintedGlass.position.set(0.5, 0.1, 0.3);
    watchFace.add(tintedGlass);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    watchFace.add(strap);

    outfit.add(watchFace);
}

/**
 * Adds a twisted neon strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addTwistedNeonStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const twistedStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    twistedStrap.rotation.z = Math.PI / 6;
    twistedStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(twistedStrap);

    outfit.add(watchFace);
}

/**
 * Adds a layered glass face watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addLayeredGlassFaceWatch(outfit) {
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

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    baseLayer.add(strap);

    outfit.add(baseLayer);
}

/**
 * Adds a glowing glass watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addGlowingGlassWatch(outfit) {
    const glowingFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    glowingFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    glowingFace.add(strap);

    outfit.add(glowingFace);
}

/**
 * Adds a caged face watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addCagedFaceWatch(outfit) {
    const cagedFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
            wireframe: true,
        })
    );
    cagedFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xC0C0C0 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    cagedFace.add(strap);

    outfit.add(cagedFace);
}

/**
 * Adds a dotted glass watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addDottedGlassWatch(outfit) {
    const glassFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    glassFace.position.set(0.5, 0, 0.3);

    const dotDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.8,
        })
    );
    dotDetail.position.set(0.6, 0, 0.35);
    glassFace.add(dotDetail);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    glassFace.add(strap);

    outfit.add(glassFace);
}
