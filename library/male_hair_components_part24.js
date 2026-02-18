// Male Hair Components - Part 24
// Various hairstyles for male characters

// Flat bangs style for male characters
function addFlatBangs(character) {
    const bangs = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    bangs.position.set(0, 5, 0.5);
    character.add(bangs);
}

// Firm short hair for strong male appearance
function addFirmShortHair(character) {
    const shortHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    shortHair.position.set(0, 4.7, -0.2);
    character.add(shortHair);
}

// Standing hair for edgy look
function addStandingHair(character) {
    const standingHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    standingHairLayer.position.set(0, 5, 0);
    standingHairLayer.rotation.z = Math.PI / 2;
    character.add(standingHairLayer);
}

// Wavy male hair for natural look
function addWavyMaleHair(character) {
    const wavyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 3),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    wavyLayer.position.set(0, 4.6, -0.3);

    const mirroredWavyLayer = wavyLayer.clone();
    mirroredWavyLayer.position.set(0, 4.6, 0.3);

    character.add(wavyLayer);
    character.add(mirroredWavyLayer);
}

// Segmented short hair for structured look
function addSegmentedShortHair(character) {
    const segmentedHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    segmentedHair.position.set(0, 4.7, -0.2);
    character.add(segmentedHair);
}

// Fluffy short hair for casual style
function addFluffyShortHair(character) {
    const fluffyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    fluffyHair.position.set(0, 4.8, -0.2);
    character.add(fluffyHair);
}

// Metallic hair for futuristic style
function addMetallicHair(character) {
    const metallicLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicLayer.position.set(0, 4.7, -0.2);
    character.add(metallicLayer);
}

// Layered male hair for stylish look
function addLayeredMaleHair(character) {
    const layeredHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    layeredHair.position.set(0, 4.7, -0.3);

    const mirroredLayer = layeredHair.clone();
    mirroredLayer.position.set(0, 4.7, 0.3);

    character.add(layeredHair);
    character.add(mirroredLayer);
}

export {
    addFlatBangs,
    addFirmShortHair,
    addStandingHair,
    addWavyMaleHair,
    addSegmentedShortHair,
    addFluffyShortHair,
    addMetallicHair,
    addLayeredMaleHair
};
