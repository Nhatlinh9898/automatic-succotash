// Lace and Fabric Components - Part 18
// Functions for adding lace details, fabric elements, and textured materials

// Function 429: Glowing Lace Bracelets
function addGlowingLaceBracelets(outfit) {
    const laceBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0xFF4500,
            emissiveIntensity: 1.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(laceBracelet);

    const mirroredBracelet = laceBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function 433: Lace Anklets
function addLaceAnklets(outfit) {
    const laceAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceAnklet.position.set(0.5, -5.3, 0);
    outfit.add(laceAnklet);

    const mirroredAnklet = laceAnklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Function 449: Decorative Lace Hair Clip
function addDecorativeLaceHairClip(outfit) {
    const laceClip = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.9,
            transparent: true,
        })
    );
    laceClip.position.set(0, 3, -0.4);
    outfit.add(laceClip);
}

// Function 454: Soft Lace Anklets
function addSoftLaceAnklets(outfit) {
    const laceAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceAnklet.position.set(0.5, -5.3, 0);
    outfit.add(laceAnklet);

    const mirroredAnklet = laceAnklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

export {
    addGlowingLaceBracelets,
    addLaceAnklets,
    addDecorativeLaceHairClip,
    addSoftLaceAnklets
};
