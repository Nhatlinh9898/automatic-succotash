/**
 * Male Body Parts Library - Part 30
 * Three.js functions for creating male character body components
 * Various styles including metallic, laser, and muscular designs
 */

// 927. Thân Nam Với Vai Tròn Phát Sáng
function addGlowingRoundedShoulders(character) {
    const roundedShoulder = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 32, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
        })
    );
    roundedShoulder.position.set(2.5, 5, 0);

    const mirroredRoundedShoulder = roundedShoulder.clone();
    mirroredRoundedShoulder.position.set(-2.5, 5, 0);

    character.add(roundedShoulder);
    character.add(mirroredRoundedShoulder);
}

// 929. Thân Nam Với Tay Cơ Bắp Laser
function addLaserMuscularArms(character) {
    const laserArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.9, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    laserArm.position.set(2.3, 2.5, 0);

    const mirroredLaserArm = laserArm.clone();
    mirroredLaserArm.position.set(-2.3, 2.5, 0);

    character.add(laserArm);
    character.add(mirroredLaserArm);
}

// 931. Thân Nam Với Ngực Kim Loại
function addMetallicChest(character) {
    const metallicChest = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2, 1.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicChest.position.set(0, 4.5, 0);
    character.add(metallicChest);
}

// 933. Thân Nam Với Tay Góc Cạnh
function addAngularArms(character) {
    const angularArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 3.5, 16),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    angularArm.position.set(2.3, 2.5, 0);

    const mirroredAngularArm = angularArm.clone();
    mirroredAngularArm.position.set(-2.3, 2.5, 0);

    character.add(angularArm);
    character.add(mirroredAngularArm);
}

// 935. Thân Nam Với Lưng Kim Loại
function addMetallicBack(character) {
    const metallicBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 4, 1.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicBack.position.set(0, 5.2, -0.5);
    character.add(metallicBack);
}

// 937. Thân Nam Với Cơ Vai Lớn
function addMassiveShoulders(character) {
    const massiveShoulder = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 4, 1),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    massiveShoulder.position.set(2.5, 4.5, 0);

    const mirroredMassiveShoulder = massiveShoulder.clone();
    mirroredMassiveShoulder.position.set(-2.5, 4.5, 0);

    character.add(massiveShoulder);
    character.add(mirroredMassiveShoulder);
}

// 939. Thân Nam Với Tay Phát Sáng
function addLaserArms(character) {
    const laserArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.9, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    laserArm.position.set(2.3, 2.5, 0);

    const mirroredLaserArm = laserArm.clone();
    mirroredLaserArm.position.set(-2.3, 2.5, 0);

    character.add(laserArm);
    character.add(mirroredLaserArm);
}

// 941. Thân Nam Với Ngực Gợn Sóng Laser
function addWaveLaserChest(character) {
    const laserWaveChest = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 2, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.8,
        })
    );
    laserWaveChest.position.set(0, 4.5, 0);
    laserWaveChest.rotation.z = Math.PI / 8;
    character.add(laserWaveChest);
}

// 943. Thân Nam Với Tay Dài Laser
function addExtendedLaserArms(character) {
    const extendedLaserArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    extendedLaserArm.position.set(2.5, 2, 0);

    const mirroredLaserArm = extendedLaserArm.clone();
    mirroredLaserArm.position.set(-2.5, 2, 0);

    character.add(extendedLaserArm);
    character.add(mirroredLaserArm);
}

// 945. Thân Nam Với Vai Kim Loại
function addMetallicShoulders(character) {
    const metallicShoulder = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
        })
    );
    metallicShoulder.position.set(2.8, 4.8, 0);

    const mirroredMetallicShoulder = metallicShoulder.clone();
    mirroredMetallicShoulder.position.set(-2.8, 4.8, 0);

    character.add(metallicShoulder);
    character.add(mirroredMetallicShoulder);
}

// 947. Thân Nam Với Ngực Khối Kim Loại
function addBlockyMetallicChest(character) {
    const blockyChest = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 2, 1.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    blockyChest.position.set(0, 4.8, 0);
    character.add(blockyChest);
}

// 949. Thân Nam Với Lưng Laser Góc Cạnh
function addAngularLaserBack(character) {
    const angularLaserBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 4.5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
        })
    );
    angularLaserBack.position.set(0, 5.5, -0.6);
    character.add(angularLaserBack);
}

// 951. Thân Nam Với Tay Laser Từ Trên
function addTopLaserArms(character) {
    const topLaser = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.9, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    topLaser.position.set(2.5, 5, 0);

    const mirroredTopLaser = topLaser.clone();
    mirroredTopLaser.position.set(-2.5, 5, 0);

    character.add(topLaser);
    character.add(mirroredTopLaser);
}

// 953. Thân Nam Với Lưng Dài Và Vai Gồ Cao
function addLongBackWithHighShoulders(character) {
    const backAndShoulders = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    backAndShoulders.position.set(0, 5.5, -0.6);
    character.add(backAndShoulders);
}

// 955. Thân Nam Với Ngực Dài Laser Phát Sáng
function addLongLaserChest(character) {
    const laserChest = new THREE.Mesh(
        new THREE.BoxGeometry(3, 5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
        })
    );
    laserChest.position.set(0, 4.8, 0);
    character.add(laserChest);
}

// 957. Thân Nam Với Cơ Vai Khối Lớn
function addMassiveShoulderMuscles(character) {
    const shoulderMuscle = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    shoulderMuscle.position.set(2.7, 4.8, 0);

    const mirroredShoulderMuscle = shoulderMuscle.clone();
    mirroredShoulderMuscle.position.set(-2.7, 4.8, 0);

    character.add(shoulderMuscle);
    character.add(mirroredShoulderMuscle);
}

// 959. Thân Nam Với Tay Kim Loại Phát Sáng
function addMetallicGlowArms(character) {
    const glowMetalArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    glowMetalArm.position.set(2.5, 3, 0);

    const mirroredGlowMetalArm = glowMetalArm.clone();
    mirroredGlowMetalArm.position.set(-2.5, 3, 0);

    character.add(glowMetalArm);
    character.add(mirroredGlowMetalArm);
}

// 961. Thân Nam Với Tay Laser Dài Phát Sáng
function addLaserGlowLongArms(character) {
    const glowingArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
        })
    );
    glowingArm.position.set(2.5, 2.8, 0);

    const mirroredGlowingArm = glowingArm.clone();
    mirroredGlowingArm.position.set(-2.5, 2.8, 0);

    character.add(glowingArm);
    character.add(mirroredGlowingArm);
}

// 963. Thân Nam Với Lưng Dài Cơ Bắp
function addMuscularLongBack(character) {
    const muscularBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 5.5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    muscularBack.position.set(0, 6, -0.6);
    character.add(muscularBack);
}

// 965. Thân Nam Với Ngực Laser Khối
function addBlockLaserChest(character) {
    const blockLaserChest = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    blockLaserChest.position.set(0, 4.8, 0);
    character.add(blockLaserChest);
}

// 967. Thân Nam Với Vai Kim Loại Góc Cạnh
function addAngularMetalShoulders(character) {
    const angularShoulders = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 4, 1),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    angularShoulders.position.set(2.8, 4.8, 0);

    const mirroredAngularShoulders = angularShoulders.clone();
    mirroredAngularShoulders.position.set(-2.8, 4.8, 0);

    character.add(angularShoulders);
    character.add(mirroredAngularShoulders);
}

// 969. Thân Nam Với Ngực Gợn Laser Sóng
function addWavyLaserChest(character) {
    const laserWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 2.5, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    laserWaves.position.set(0, 4.8, 0);
    character.add(laserWaves);
}

// 971. Thân Nam Với Tay Dài Ánh Kim
function addLongMetalArms(character) {
    const metalArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalArm.position.set(2.7, 2.5, 0);

    const mirroredMetalArm = metalArm.clone();
    mirroredMetalArm.position.set(-2.7, 2.5, 0);

    character.add(metalArm);
    character.add(mirroredMetalArm);
}

// Export all functions for easy importing
export {
    addGlowingRoundedShoulders,
    addLaserMuscularArms,
    addMetallicChest,
    addAngularArms,
    addMetallicBack,
    addMassiveShoulders,
    addLaserArms,
    addWaveLaserChest,
    addExtendedLaserArms,
    addMetallicShoulders,
    addBlockyMetallicChest,
    addAngularLaserBack,
    addTopLaserArms,
    addLongBackWithHighShoulders,
    addLongLaserChest,
    addMassiveShoulderMuscles,
    addMetallicGlowArms,
    addLaserGlowLongArms,
    addMuscularLongBack,
    addBlockLaserChest,
    addAngularMetalShoulders,
    addWavyLaserChest,
    addLongMetalArms
};
