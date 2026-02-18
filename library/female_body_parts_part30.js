/**
 * Female Body Parts Library - Part 30
 * Three.js functions for creating female character body components
 * Various styles including elegant, sparkling, and delicate designs
 */

// 926. Thân Nữ Với Eo Thon Dài
function addLongSlimWaist(character) {
    const slimWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.7, 2.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    slimWaist.position.set(0, 3.5, 0);
    character.add(slimWaist);
}

// 928. Thân Nữ Với Dáng Lưng Tinh Tế
function addSophisticatedBack(character) {
    const elegantBack = new THREE.Mesh(
        new THREE.BoxGeometry(2, 3.5, 1),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    elegantBack.position.set(0, 4.2, -0.5);
    character.add(elegantBack);
}

// 930. Thân Nữ Với Hông Mở Rộng
function addGracefulWideHips(character) {
    const wideHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 2.2, 1.8, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    wideHips.position.set(0, 2.5, 0);
    character.add(wideHips);
}

// 932. Thân Nữ Với Lưng Dài Thanh Thoát
function addLongElegantBack(character) {
    const elegantBack = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 1),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    elegantBack.position.set(0, 4.5, -0.5);
    character.add(elegantBack);
}

// 934. Thân Nữ Với Vòng Ngực Lấp Lánh
function addSparklingChest(character) {
    const chest = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.5,
        })
    );
    chest.position.set(0.9, 4, 0.7);

    const mirroredChest = chest.clone();
    mirroredChest.position.set(-0.9, 4, 0.7);

    character.add(chest);
    character.add(mirroredChest);
}

// 936. Thân Nữ Với Hông Tròn Bóng Mượt
function addSmoothRoundedHips(character) {
    const roundedHips = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    roundedHips.position.set(0, 2.5, 0);
    character.add(roundedHips);
}

// 938. Thân Nữ Với Dáng Eo Uốn Lượn
function addWavyWaist(character) {
    const wavyWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.8, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    wavyWaist.position.set(0, 3, 0);
    character.add(wavyWaist);
}

// 940. Thân Nữ Với Lưng Ren Ánh Sáng
function addLaceGlowBack(character) {
    const laceBack = new THREE.Mesh(
        new THREE.BoxGeometry(2, 3.5, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceBack.position.set(0, 4.5, -0.5);
    character.add(laceBack);
}

// 942. Thân Nữ Với Vòng Eo Ánh Kim
function addMetallicWaist(character) {
    const metallicWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.9, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicWaist.position.set(0, 3, 0);
    character.add(metallicWaist);
}

// 944. Thân Nữ Với Hông Phát Sáng Nhẹ
function addRadiantHips(character) {
    const radiantHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.2, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    radiantHips.position.set(0, 2.5, 0);
    character.add(radiantHips);
}

// 946. Thân Nữ Với Lưng Ánh Kim
function addMetallicBack(character) {
    const metallicBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 3.5, 1),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicBack.position.set(0, 4, -0.5);
    character.add(metallicBack);
}

// 948. Thân Nữ Với Eo Laser
function addLaserWaist(character) {
    const laserWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 0.9, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 2.0,
        })
    );
    laserWaist.position.set(0, 3, 0);
    character.add(laserWaist);
}

// 950. Thân Nữ Với Hông Bóng Mượt Laser
function addSmoothLaserHips(character) {
    const smoothLaserHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.2, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    smoothLaserHips.position.set(0, 2.5, 0);
    character.add(smoothLaserHips);
}

// 952. Thân Nữ Với Hông Kim Loại Dáng Tròn
function addMetallicRoundedHips(character) {
    const roundedMetalHips = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    roundedMetalHips.position.set(0, 2.5, 0);
    character.add(roundedMetalHips);
}

// 954. Thân Nữ Với Lưng Laser Gợn Sóng
function addWavyLaserBack(character) {
    const wavyLaserBack = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 3.5, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
        })
    );
    wavyLaserBack.position.set(0, 4.5, -0.5);
    character.add(wavyLaserBack);
}

// 956. Thân Nữ Với Vòng Eo Xoắn
function addTwistedWaist(character) {
    const twistedWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 0.8, 2, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    twistedWaist.rotation.z = Math.PI / 12;
    twistedWaist.position.set(0, 3, 0);
    character.add(twistedWaist);
}

// 958. Thân Nữ Với Hông Kèm Ren Dáng Dài
function addLaceHips(character) {
    const laceLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.2, 1.8, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.2,
            transparent: true,
            opacity: 0.8,
        })
    );
    laceLayer.position.set(0, 2.5, 0);
    character.add(laceLayer);
}

// 960. Thân Nữ Với Lưng Ren Ánh Sao
function addStarryLaceBack(character) {
    const laceBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 3.5, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceBack.position.set(0, 4.5, -0.5);
    character.add(laceBack);
}

// 962. Thân Nữ Với Hông Ánh Kim Mềm Mại
function addMetallicSoftHips(character) {
    const metallicHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.9, 2.3, 1.8, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicHips.position.set(0, 2.5, 0);
    character.add(metallicHips);
}

// 964. Thân Nữ Với Lưng Laser Dài Thanh Thoát
function addLaserLongBack(character) {
    const laserBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 4, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
        })
    );
    laserBack.position.set(0, 4.5, -0.5);
    character.add(laserBack);
}

// 966. Thân Nữ Với Eo Ánh Kim Và Ren
function addMetallicLaceWaist(character) {
    const metallicWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.9, 2.2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicWaist.position.set(0, 3, 0);

    const laceDetail = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.3,
            transparent: true,
        })
    );
    laceDetail.rotation.x = Math.PI / 6;
    metallicWaist.add(laceDetail);

    character.add(metallicWaist);
}

// 968. Thân Nữ Với Hông Lấp Lánh Ren
function addSparklingLaceHips(character) {
    const laceHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.2, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.8,
        })
    );
    laceHips.position.set(0, 2.5, 0);
    character.add(laceHips);
}

// 970. Thân Nữ Với Lưng Kim Loại Dài
function addMetallicLongBack(character) {
    const metallicBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 4.2, 1.2),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
        })
    );
    metallicBack.position.set(0, 4.8, -0.5);
    character.add(metallicBack);
}

// 972. Thân Nữ Với Eo Laser Ánh Sao
function addStarryLaserWaist(character) {
    const starryWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 0.8, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
        })
    );
    starryWaist.position.set(0, 3, 0);
    character.add(starryWaist);
}

// Export all functions for easy importing
export {
    addLongSlimWaist,
    addSophisticatedBack,
    addGracefulWideHips,
    addLongElegantBack,
    addSparklingChest,
    addSmoothRoundedHips,
    addWavyWaist,
    addLaceGlowBack,
    addMetallicWaist,
    addRadiantHips,
    addMetallicBack,
    addLaserWaist,
    addSmoothLaserHips,
    addMetallicRoundedHips,
    addWavyLaserBack,
    addTwistedWaist,
    addLaceHips,
    addStarryLaceBack,
    addMetallicSoftHips,
    addLaserLongBack,
    addMetallicLaceWaist,
    addSparklingLaceHips,
    addMetallicLongBack,
    addStarryLaserWaist
};
