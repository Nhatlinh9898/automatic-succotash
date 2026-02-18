// Digital Watch Components Library - Part 20
// Digital and LED watch designs

/**
 * Adds a digital face watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addDigitalFaceWatch(outfit) {
    const digitalFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
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
 * Adds an LED digital watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addLEDDigitalWatch(outfit) {
    const ledFace = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.4),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
        })
    );
    ledFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    ledFace.add(strap);

    outfit.add(ledFace);
}

/**
 * Adds a crystal digital watch to the outfit
 * @param {THREE.Group} outfit - The outfit group to add the watch to
 */
function addCrystalDigitalWatch(outfit) {
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
