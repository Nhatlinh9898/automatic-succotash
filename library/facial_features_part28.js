// Facial Features Components - Part 28
// Eyes, mouth, and nose components for characters

// 843. Mắt Laser Phát Sáng Đậm
function addBoldLaserGlowEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

// 847. Miệng Laser Nổi Bật
function addGlowingLaserMouth(character) {
    const glowingMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 3.0,
        })
    );
    glowingMouth.position.set(0, 4.3, 0.8);
    character.add(glowingMouth);
}

// 853. Mắt Đạng Lưới Laser
function addLaserMeshEyes(character) {
    const laserMesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserMesh.position.set(0.6, 4.8, 0.7);

    const mirroredLaserMesh = laserMesh.clone();
    mirroredLaserMesh.position.set(-0.6, 4.8, 0.7);

    character.add(laserMesh);
    character.add(mirroredLaserMesh);
}

// 854. Miệng Ánh Kim
function addMetalGlowLips(character) {
    const glowLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    glowLips.position.set(0, 4.3, 0.8);
    character.add(glowLips);
}

// 857. Mũi Laser
function addLaserTipNose(character) {
    const laserTip = new THREE.Mesh(
        new THREE.ConeGeometry(0.1, 0.3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserTip.position.set(0, 4.5, 0.8);
    laserTip.rotation.x = Math.PI / 8;
    character.add(laserTip);
}

// 859. Miệng Laser Dạng Vuông
function addSquareLaserMouth(character) {
    const squareMouth = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.6, 0.1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    squareMouth.position.set(0, 4.3, 0.8);
    character.add(squareMouth);
}

// 863. Mắt Laser Dạng Tia Sét
function addThunderLaserEyes(character) {
    const thunderLaser = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.2),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    thunderLaser.position.set(0.6, 4.8, 0.7);

    const mirroredThunderLaser = thunderLaser.clone();
    mirroredThunderLaser.position.set(-0.6, 4.8, 0.7);

    character.add(thunderLaser);
    character.add(mirroredThunderLaser);
}

// 865. Miệng Phát Sáng Dạng Lưới
function addMeshGlowMouth(character) {
    const meshMouth = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    meshMouth.position.set(0, 4.3, 0.9);
    character.add(meshMouth);
}

// 873. Mắt Laser Kép
function addDoubleLaserEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const secondLaser = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    secondLaser.position.set(0.6, 4.6, 0.7);
    laserEye.add(secondLaser);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

// 877. Miệng Laser Vòng
function addCircularLaserMouth(character) {
    const laserMouth = new THREE.Mesh(
        new THREE.RingGeometry(0.6, 0.7, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 3.0,
        })
    );
    laserMouth.position.set(0, 4.3, 0.9);
    character.add(laserMouth);
}

export {
    addBoldLaserGlowEyes,
    addGlowingLaserMouth,
    addLaserMeshEyes,
    addMetalGlowLips,
    addLaserTipNose,
    addSquareLaserMouth,
    addThunderLaserEyes,
    addMeshGlowMouth,
    addDoubleLaserEyes,
    addCircularLaserMouth
};
