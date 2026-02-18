// Ear Components - Part 25
// Library of various ear designs for male and female characters

// 715. Engraved Thin Ears (Male)
function addEngravedThinEars(character) {
    const thinEar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16),
        new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            metalness: 0.5,
        })
    );
    thinEar.position.set(1.2, 4.5, 0.3);

    const mirroredEar = thinEar.clone();
    mirroredEar.position.set(-1.2, 4.5, 0.3);

    character.add(thinEar);
    character.add(mirroredEar);
}

// 725. Wavy Ears (Male)
function addWavyEars(character) {
    const wavyEar = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    wavyEar.position.set(1.2, 4.5, 0.3);
    wavyEar.rotation.z = Math.PI / 12;

    const mirroredWavyEar = wavyEar.clone();
    mirroredWavyEar.position.set(-1.2, 4.5, 0.3);
    mirroredWavyEar.rotation.z = -Math.PI / 12;

    character.add(wavyEar);
    character.add(mirroredWavyEar);
}

// 738. Metallic Soft Ears (Female)
function addMetallicSoftEars(character) {
    const metallicEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.7,
            roughness: 0.2,
        })
    );
    metallicEar.position.set(1.2, 4.5, 0.3);

    const mirroredMetallicEar = metallicEar.clone();
    mirroredMetallicEar.position.set(-1.2, 4.5, 0.3);

    character.add(metallicEar);
    character.add(mirroredMetallicEar);
}

// 745. Metal Decorated Ears (Male)
function addMetalDecoratedEars(character) {
    const earWithMetal = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            metalness: 0.7,
            roughness: 0.3,
        })
    );
    earWithMetal.position.set(1.3, 4.5, 0.3);

    const mirroredEarWithMetal = earWithMetal.clone();
    mirroredEarWithMetal.position.set(-1.3, 4.5, 0.3);

    character.add(earWithMetal);
    character.add(mirroredEarWithMetal);
}

export {
    addEngravedThinEars,
    addWavyEars,
    addMetallicSoftEars,
    addMetalDecoratedEars
};
