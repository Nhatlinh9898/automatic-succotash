// Silk and Luxury Components - Part 17
// Functions for adding silk elements, luxury fabrics, and elegant details

// Function 389: Radiant Silk Sleeves
function addRadiantSilkSleeves(outfit) {
    const silkSleeve = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 4),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkSleeve.position.set(0.5, 1.5, 0.5);
    outfit.add(silkSleeve);

    const mirroredSilkSleeve = silkSleeve.clone();
    mirroredSilkSleeve.position.set(-0.5, 1.5, 0.5);
    outfit.add(mirroredSilkSleeve);
}

// Function 397: Flowing Long Silk
function addFlowingLongSilk(outfit) {
    const silkLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.7,
            transparent: true,
        })
    );
    silkLayer.position.set(0.6, 1.5, -0.5);
    silkLayer.rotation.z = Math.PI / 6;
    outfit.add(silkLayer);

    const mirroredSilkLayer = silkLayer.clone();
    mirroredSilkLayer.position.set(-0.6, 1.5, -0.5);
    mirroredSilkLayer.rotation.z = -Math.PI / 6;
    outfit.add(mirroredSilkLayer);
}

// Function 400: Radiant Silk Bracelets
function addRadiantSilkBracelets(outfit) {
    const silkBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
        })
    );
    silkBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(silkBracelet);

    const mirroredBracelet = silkBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

// Function 406: Silk Hair Accessory
function addSilkHairAccessory(outfit) {
    const silkBand = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.9,
            transparent: true,
        })
    );
    silkBand.position.set(0, 2.7, -0.4);
    outfit.add(silkBand);

    const pearl = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 })
    );
    pearl.position.set(0.5, 2.8, -0.4);
    silkBand.add(pearl);
}

// Function 410: Radiant Silk Necklace
function addRadiantSilkNecklace(outfit) {
    const silkNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
        })
    );
    silkNecklace.position.set(0, 1.6, 0.3);
    silkNecklace.rotation.x = Math.PI / 2;
    outfit.add(silkNecklace);
}

// Function 416: Light Silk Bracelet
function addLightSilkBracelet(outfit) {
    const silkBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(silkBracelet);

    const mirroredSilkBracelet = silkBracelet.clone();
    mirroredSilkBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredSilkBracelet);
}

export {
    addRadiantSilkSleeves,
    addFlowingLongSilk,
    addRadiantSilkBracelets,
    addSilkHairAccessory,
    addRadiantSilkNecklace,
    addLightSilkBracelet
};
