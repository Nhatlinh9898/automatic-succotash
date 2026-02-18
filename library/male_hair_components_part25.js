// Male Hair Components - Part 25
// Library of various male hair styles and designs

// 721. Top Spike Hair
function addTopSpikeHair(character) {
    const topSpike = new THREE.Mesh(
        new THREE.ConeGeometry(0.3, 1, 16),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    topSpike.position.set(0, 5, 0);
    character.add(topSpike);
}

// 731. Elevated Layer Hair
function addElevatedLayerHair(character) {
    const layerHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    layerHair.position.set(0, 4.7, -0.2);

    const mirroredLayer = layerHair.clone();
    mirroredLayer.position.set(0, 4.7, 0.2);

    character.add(layerHair);
    character.add(mirroredLayer);
}

// 739. Laser Short Hair
function addLaserShortHair(character) {
    const laserHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserHairLayer.position.set(0, 4.7, -0.2);
    character.add(laserHairLayer);
}

// 741. High Parted Hair
function addHighPartedHair(character) {
    const partedHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    partedHair.position.set(0, 4.8, -0.2);

    const mirroredPartedHair = partedHair.clone();
    mirroredPartedHair.position.set(0, 4.8, 0.2);

    character.add(partedHair);
    character.add(mirroredPartedHair);
}

// 751. Laser Spike Hair
function addLaserSpikeHair(character) {
    const laserSpike = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.2, 1, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserSpike.position.set(0, 5, 0);
    character.add(laserSpike);
}

export {
    addTopSpikeHair,
    addElevatedLayerHair,
    addLaserShortHair,
    addHighPartedHair,
    addLaserSpikeHair
};
