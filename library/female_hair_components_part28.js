// Female Hair Components - Part 28
// Luminous and elegant hair styles for female characters

// 842. Tóc Dài Phát Sáng Gợn Sóng
function addWavyRadiantHair(character) {
    const radiantWavyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    radiantWavyLayer.position.set(0, 4.5, -0.3);

    const mirroredRadiantWavyLayer = radiantWavyLayer.clone();
    mirroredRadiantWavyLayer.position.set(0, 4.5, 0.3);

    character.add(radiantWavyLayer);
    character.add(mirroredRadiantWavyLayer);
}

// 844. Tóc Tầng Dài Lấp Lánh
function addSparklingLayeredLongHair(character) {
    const sparklingLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    sparklingLayer.position.set(0, 4.5, -0.3);

    const mirroredSparklingLayer = sparklingLayer.clone();
    mirroredSparklingLayer.position.set(0, 4.5, 0.3);

    character.add(sparklingLayer);
    character.add(mirroredSparklingLayer);
}

// 846. Tóc Ngắn Đính Pha Lê
function addCrystalDecoratedShortHair(character) {
    const decoratedHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    decoratedHair.position.set(0, 4.7, -0.3);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.5, 4.8, 0.3);
    decoratedHair.add(crystalDetail);

    const mirroredDecoratedHair = decoratedHair.clone();
    mirroredDecoratedHair.position.set(0, 4.7, 0.3);

    character.add(decoratedHair);
    character.add(mirroredDecoratedHair);
}

// 848. Tóc Ren Phát Sáng
function addLuminousLaceHair(character) {
    const laceHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    laceHair.position.set(0, 4.5, -0.3);

    const mirroredLaceHair = laceHair.clone();
    mirroredLaceHair.position.set(0, 4.5, 0.3);

    character.add(laceHair);
    character.add(mirroredLaceHair);
}

// 850. Tóc Dài Dạng Bím
function addElegantLongBraids(character) {
    const braid = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
        })
    );
    braid.position.set(0.5, 3.5, -0.2);

    const mirroredBraid = braid.clone();
    mirroredBraid.position.set(-0.5, 3.5, -0.2);

    character.add(braid);
    character.add(mirroredBraid);
}

// 852. Tóc Ngắn Ren
function addShortLaceHair(character) {
    const laceHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.9,
            transparent: true,
        })
    );
    laceHair.position.set(0, 4.7, -0.3);

    const mirroredLaceHair = laceHair.clone();
    mirroredLaceHair.position.set(0, 4.7, 0.3);

    character.add(laceHair);
    character.add(mirroredLaceHair);
}

// 856. Tóc Dài Bồng Bềnh
function addElegantFlowingHair(character) {
    const flowingHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    flowingHair.position.set(0, 4.5, -0.3);

    const mirroredFlowingHair = flowingHair.clone();
    mirroredFlowingHair.position.set(0, 4.5, 0.3);

    character.add(flowingHair);
    character.add(mirroredFlowingHair);
}

// 858. Tóc Ngắn Laser
function addLaserShortFemaleHair(character) {
    const laserHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    laserHair.position.set(0, 4.7, -0.3);

    const mirroredLaserHair = laserHair.clone();
    mirroredLaserHair.position.set(0, 4.7, 0.3);

    character.add(laserHair);
    character.add(mirroredLaserHair);
}

// 860. Tóc Bím Phát Sáng
function addRadiantBraidedHair(character) {
    const braidedHair = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.8,
        })
    );
    braidedHair.position.set(0.5, 3.5, -0.2);

    const mirroredBraidedHair = braidedHair.clone();
    mirroredBraidedHair.position.set(-0.5, 3.5, -0.2);

    character.add(braidedHair);
    character.add(mirroredBraidedHair);
}

// 862. Tóc Ren Lấp Lánh Dài
function addRadiantLaceLongHair(character) {
    const radiantLaceHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.7,
            transparent: true,
            opacity: 0.8,
        })
    );
    radiantLaceHair.position.set(0, 4.5, -0.3);

    const mirroredRadiantLaceHair = radiantLaceHair.clone();
    mirroredRadiantLaceHair.position.set(0, 4.5, 0.3);

    character.add(radiantLaceHair);
    character.add(mirroredRadiantLaceHair);
}

// 864. Tóc Ngắn Dạng Sóng Lấp Lánh
function addSparklingWavyShortHair(character) {
    const sparklingWave = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    sparklingWave.position.set(0, 4.7, -0.3);

    const mirroredSparklingWave = sparklingWave.clone();
    mirroredSparklingWave.position.set(0, 4.7, 0.3);

    character.add(sparklingWave);
    character.add(mirroredSparklingWave);
}

// 868. Tóc Xoắn Ren Ánh Sáng
function addLuminousLaceCurls(character) {
    const laceCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceCurls.position.set(0, 4.7, -0.3);

    const mirroredLaceCurls = laceCurls.clone();
    mirroredLaceCurls.position.set(0, 4.7, 0.3);

    character.add(laceCurls);
    character.add(mirroredLaceCurls);
}

// 870. Mái Tóc Dài Phát Sáng Nhẹ
function addSoftGlowLongHair(character) {
    const glowLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.3,
            transparent: true,
            opacity: 0.8,
        })
    );
    glowLayer.position.set(0, 4.5, -0.3);

    const mirroredGlowLayer = glowLayer.clone();
    mirroredGlowLayer.position.set(0, 4.5, 0.3);

    character.add(glowLayer);
    character.add(mirroredGlowLayer);
}

// 872. Tóc Dài Gợn Sóng Lấp Lánh
function addSparklingLongWavyHair(character) {
    const sparklingWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.8,
        })
    );
    sparklingWaves.position.set(0, 4.5, -0.3);

    const mirroredSparklingWaves = sparklingWaves.clone();
    mirroredSparklingWaves.position.set(0, 4.5, 0.3);

    character.add(sparklingWaves);
    character.add(mirroredSparklingWaves);
}

// 874. Tóc Ngắn Kim Loại Bóng
function addShinyMetallicShortHair(character) {
    const metallicHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicHair.position.set(0, 4.7, -0.3);

    const mirroredMetallicHair = metallicHair.clone();
    mirroredMetallicHair.position.set(0, 4.7, 0.3);

    character.add(metallicHair);
    character.add(mirroredMetallicHair);
}

// 876. Mái Tóc Lấp Lánh Dài
function addRadiantLongFringeHair(character) {
    const fringeHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.8,
        })
    );
    fringeHair.position.set(0, 4.5, -0.3);

    const mirroredFringeHair = fringeHair.clone();
    mirroredFringeHair.position.set(0, 4.5, 0.3);

    character.add(fringeHair);
    character.add(mirroredFringeHair);
}

// 880. Tóc Dài Bóng Mượt
function addSilkyLongHair(character) {
    const silkyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    silkyHair.position.set(0, 4.5, -0.3);

    const mirroredSilkyHair = silkyHair.clone();
    mirroredSilkyHair.position.set(0, 4.5, 0.3);

    character.add(silkyHair);
    character.add(mirroredSilkyHair);
}

export {
    addWavyRadiantHair,
    addSparklingLayeredLongHair,
    addCrystalDecoratedShortHair,
    addLuminousLaceHair,
    addElegantLongBraids,
    addShortLaceHair,
    addElegantFlowingHair,
    addLaserShortFemaleHair,
    addRadiantBraidedHair,
    addRadiantLaceLongHair,
    addSparklingWavyShortHair,
    addLuminousLaceCurls,
    addSoftGlowLongHair,
    addSparklingLongWavyHair,
    addShinyMetallicShortHair,
    addRadiantLongFringeHair,
    addSilkyLongHair
};
