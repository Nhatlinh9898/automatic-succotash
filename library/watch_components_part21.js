// Watch Components Library - Part 21
// Various watch designs with different styles and materials

/**
 * Adds a silk strap watch with elegant design
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addSilkStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.9,
            transparent: true,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const silkStrap = new THREE.Mesh(
        new THREE.PlaneGeometry(0.2, 1.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFE4B5, // Màu lụa sáng
        })
    );
    silkStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(silkStrap);

    outfit.add(watchFace);
}

/**
 * Adds a square face watch with modern design
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addSquareFaceWatch(outfit) {
    const squareFace = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.6, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 0.9,
            roughness: 0.3,
        })
    );
    squareFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    squareFace.add(strap);

    outfit.add(squareFace);
}

/**
 * Adds a watch with swirl laser face for dynamic effect
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addSwirlLaserFaceWatch(outfit) {
    const swirlFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    swirlFace.position.set(0.5, 0, 0.3);

    const spiralDetail = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    spiralDetail.position.set(0.5, 0, 0.35);
    swirlFace.add(spiralDetail);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    swirlFace.add(strap);

    outfit.add(swirlFace);
}

/**
 * Adds a lace and crystal combination watch
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addLaceCrystalWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
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

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalDetail.position.set(0.5, 0.8, 0.3);
    laceStrap.add(crystalDetail);

    watchFace.add(laceStrap);
    outfit.add(watchFace);
}

/**
 * Adds a watch with transparent strap for delicate look
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addTransparentStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const transparentStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.6,
            transparent: true,
        })
    );
    transparentStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(transparentStrap);

    outfit.add(watchFace);
}

/**
 * Adds a sleek metal strap watch for elegant style
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addSleekMetalStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const sleekStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 0.9,
            roughness: 0.2,
        })
    );
    sleekStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(sleekStrap);

    outfit.add(watchFace);
}

/**
 * Adds a digital watch with color block design
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addColorBlockDigitalWatch(outfit) {
    const digitalFace = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.4),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF7F,
            emissiveIntensity: 2.0,
        })
    );
    digitalFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFF6347,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    digitalFace.add(strap);

    outfit.add(digitalFace);
}

/**
 * Adds a watch with patterned glass face
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addPatternedGlassWatch(outfit) {
    const glassFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    glassFace.position.set(0.5, 0, 0.3);

    const engravedPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            opacity: 0.7,
            transparent: true,
        })
    );
    engravedPattern.position.set(0.5, 0.1, 0.35);
    glassFace.add(engravedPattern);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    glassFace.add(strap);

    outfit.add(glassFace);
}

/**
 * Adds a stylized laser watch with unique patterns
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addStylizedLaserWatch(outfit) {
    const laserFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserFace.position.set(0.5, 0, 0.3);

    const patternDetail = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 2.0,
        })
    );
    patternDetail.position.set(0.5, 0.1, 0.35);
    laserFace.add(patternDetail);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    laserFace.add(strap);

    outfit.add(laserFace);
}

/**
 * Adds a wave crystal face watch for unique appearance
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addWaveCrystalFaceWatch(outfit) {
    const crystalFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalFace.position.set(0.5, 0, 0.3);

    const waveEffect = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 0.4),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.8,
        })
    );
    waveEffect.position.set(0.5, 0.1, 0.35);
    crystalFace.add(waveEffect);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    crystalFace.add(strap);

    outfit.add(crystalFace);
}

/**
 * Adds a metal crystal combination watch
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addMetalCrystalWatch(outfit) {
    const crystalFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalFace.position.set(0.5, 0, 0.3);

    const metalFrame = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalFrame.position.set(0.5, 0, 0.32);
    crystalFace.add(metalFrame);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
        })
    );
    strap.position.set(0.5, 0.75, 0.3);
    crystalFace.add(strap);

    outfit.add(crystalFace);
}
