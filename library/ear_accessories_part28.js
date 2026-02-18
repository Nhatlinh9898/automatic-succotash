// Ear Accessories Components - Part 28
// Laser and metallic ear accessories for characters

// 855. Tai Laser
function addLaserBeamEars(character) {
    const laserBeam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 1, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    laserBeam.position.set(1.2, 4.5, 0.3);

    const mirroredLaserBeam = laserBeam.clone();
    mirroredLaserBeam.position.set(-1.2, 4.5, 0.3);

    character.add(laserBeam);
    character.add(mirroredLaserBeam);
}

// 866. Tai Ánh Kim Lấp Lánh
function addShinyMetallicEars(character) {
    const metallicEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicEar.position.set(1.2, 4.5, 0.3);

    const mirroredMetallicEar = metallicEar.clone();
    mirroredMetallicEar.position.set(-1.2, 4.5, 0.3);

    character.add(metallicEar);
    character.add(mirroredMetallicEar);
}

// 878. Tai Phát Sáng Nhẹ
function addSoftGlowEars(character) {
    const glowEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    glowEar.position.set(1.2, 4.5, 0.3);

    const mirroredGlowEar = glowEar.clone();
    mirroredGlowEar.position.set(-1.2, 4.5, 0.3);

    character.add(glowEar);
    character.add(mirroredGlowEar);
}

export {
    addLaserBeamEars,
    addShinyMetallicEars,
    addSoftGlowEars
};
