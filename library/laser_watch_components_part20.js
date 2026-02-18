// Laser Watch Components Library - Part 20
// Laser and neon watch designs

/**
 * Adds a minimal laser watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addMinimalLaserWatch(outfit) {
    const laserFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.2,
        })
    );
    laserFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    laserFace.add(strap);

    outfit.add(laserFace);
}

/**
 * Adds a sparkling laser strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addSparklingLaserStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const laserStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(laserStrap);

    outfit.add(watchFace);
}

/**
 * Adds a modern minimal laser watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addModernMinimalLaserWatch(outfit) {
    const laserFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    laserFace.add(strap);

    outfit.add(laserFace);
}

/**
 * Adds a multidimensional laser strap watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addMultidimensionalLaserStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const laserStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    laserStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(laserStrap);

    outfit.add(watchFace);
}

/**
 * Adds a geometric laser watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addGeometricLaserWatch(outfit) {
    const laserFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserFace.position.set(0.5, 0, 0.3);

    const geometricDetail = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.8,
        })
    );
    geometricDetail.position.set(0.6, 0, 0.35);
    laserFace.add(geometricDetail);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    laserFace.add(strap);

    outfit.add(laserFace);
}
