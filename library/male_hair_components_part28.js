// Male Hair Components - Part 28
// Laser and futuristic hair styles for male characters

// 841. Tóc Laser Đứng Nhiều Lớp
function addMultiLayeredLaserHair(character) {
    const laserLayer1 = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
            transparent: true,
        })
    );
    laserLayer1.position.set(0, 5, -0.2);

    const laserLayer2 = laserLayer1.clone();
    laserLayer2.position.set(0, 5.3, -0.2);

    const laserLayer3 = laserLayer1.clone();
    laserLayer3.position.set(0, 5.6, -0.2);

    character.add(laserLayer1);
    character.add(laserLayer2);
    character.add(laserLayer3);
}

// 845. Tóc Laser Đỉnh Cao
function addHighLaserSpikeHair(character) {
    const laserSpike = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.3, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 3.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserSpike.position.set(0, 5.5, 0);
    character.add(laserSpike);
}

// 849. Tóc Laser Đường Viền
function addLaserOutlineHair(character) {
    const laserOutline = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    laserOutline.rotation.x = Math.PI / 2;
    laserOutline.position.set(0, 4.8, 0);
    character.add(laserOutline);
}

// 851. Tóc Laser Đỉnh Nhiều Tầng
function addMultiSpikeLaserHair(character) {
    const baseLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF7F,
            emissiveIntensity: 3.0,
            transparent: true,
            opacity: 0.8,
        })
    );
    baseLayer.position.set(0, 5, -0.2);

    const upperLayer = baseLayer.clone();
    upperLayer.position.set(0, 5.4, -0.2);

    const topLayer = baseLayer.clone();
    topLayer.position.set(0, 5.8, -0.2);

    character.add(baseLayer);
    character.add(upperLayer);
    character.add(topLayer);
}

// 861. Tóc Laser Phát Sáng Hình Tam Giác
function addTriangularLaserHair(character) {
    const triangularHair = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 1.2, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
        })
    );
    triangularHair.position.set(0, 5, 0);
    character.add(triangularHair);
}

// 867. Tóc Gợn Sóng Laser Phát Sáng
function addWavyLaserHair(character) {
    const wavyLaser = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    wavyLaser.position.set(0, 4.5, -0.3);

    const mirroredWavyLaser = wavyLaser.clone();
    mirroredWavyLaser.position.set(0, 4.5, 0.3);

    character.add(wavyLaser);
    character.add(mirroredWavyLaser);
}

// 869. Tóc Laser Đường Đỉnh Vuông
function addSquareTopLaserHair(character) {
    const squareTop = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 2, 0.1),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    squareTop.position.set(0, 4.8, -0.3);

    const mirroredSquareTop = squareTop.clone();
    mirroredSquareTop.position.set(0, 4.8, 0.3);

    character.add(squareTop);
    character.add(mirroredSquareTop);
}

// 871. Tóc Laser Tầng Góc Cạnh
function addAngularLayeredLaserHair(character) {
    const laserLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
            transparent: true,
        })
    );
    laserLayer.position.set(0, 5, -0.2);

    const secondLayer = laserLayer.clone();
    secondLayer.position.set(0, 5.3, -0.2);

    character.add(laserLayer);
    character.add(secondLayer);
}

// 875. Tóc Laser Lượn Sóng
function addWaveLaserHair(character) {
    const waveLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.3,
            transparent: true,
        })
    );
    waveLayer.position.set(0, 4.7, -0.2);
    waveLayer.rotation.z = Math.PI / 8;

    const mirroredWaveLayer = waveLayer.clone();
    mirroredWaveLayer.position.set(0, 4.7, 0.2);
    mirroredWaveLayer.rotation.z = -Math.PI / 8;

    character.add(waveLayer);
    character.add(mirroredWaveLayer);
}

// 879. Tóc Laser Đường Vòng
function addCircularLaserHeadband(character) {
    const laserHeadband = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    laserHeadband.rotation.x = Math.PI / 2;
    laserHeadband.position.set(0, 4.8, 0);
    character.add(laserHeadband);
}

export {
    addMultiLayeredLaserHair,
    addHighLaserSpikeHair,
    addLaserOutlineHair,
    addMultiSpikeLaserHair,
    addTriangularLaserHair,
    addWavyLaserHair,
    addSquareTopLaserHair,
    addAngularLayeredLaserHair,
    addWaveLaserHair,
    addCircularLaserHeadband
};
