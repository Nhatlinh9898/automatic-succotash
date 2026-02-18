// Laser and Neon Components - Part 19
// Library for laser, neon, and futuristic lighting accessories

/**
 * 470. Nhẫn Laser Phát Sáng Mềm
 * Thêm nhẫn laser với ánh sáng mềm để tạo hiệu ứng nhấn mạnh.
 */
function addSoftGlowLaserRing(outfit) {
    const laserRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    laserRing.position.set(0.5, 0.5, 0.3);
    outfit.add(laserRing);
}

/**
 * 475. Vòng Cổ Neon Phát Sáng Bảy Sắc
 * Thêm vòng cổ phát sáng với hiệu ứng màu sắc để làm nổi bật thiết kế.
 */
function addRainbowNeonNecklace(outfit) {
    const neonNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
        })
    );
    neonNecklace.position.set(0, 1.6, 0.3);
    neonNecklace.rotation.x = Math.PI / 2;
    outfit.add(neonNecklace);
}

/**
 * 476. Nhẫn Kép Phát Sáng
 * Thêm bộ nhẫn kép với ánh sáng laser để tạo hiệu ứng ánh sáng mạnh.
 */
function addTwinGlowRings(outfit) {
    const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    ring1.position.set(0.5, 0.5, 0.3);

    const ring2 = ring1.clone();
    ring2.position.set(0.5, 0.5, 0.35);
    outfit.add(ring1);
    outfit.add(ring2);
}

/**
 * 478. Dây Chuyền Laser Dạng Sóng
 * Thêm dây chuyền laser với thiết kế đường nét lượn sóng để tạo phong cách hiện đại.
 */
function addWaveLaserNecklace(outfit) {
    const waveLaser = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.2,
        })
    );
    waveLaser.position.set(0, 1.6, 0.3);
    waveLaser.rotation.z = Math.PI / 6;
    outfit.add(waveLaser);
}

/**
 * 480. Nhẫn Chân Kim Phong Cách Tương Lai
 * Thêm nhẫn kim loại với chi tiết phát sáng laser để tạo vẻ hiện đại.
 */
function addFuturisticLaserRing(outfit) {
    const laserRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserRing.position.set(0.5, 0.5, 0.3);
    outfit.add(laserRing);
}

/**
 * 485. Hoa Tai Laser Nét
 * Thêm hoa tai với thiết kế laser chi tiết nét để làm sang trang phục.
 */
function addLaserDetailedEarrings(outfit) {
    const laserEarring = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.2,
        })
    );
    laserEarring.position.set(0.4, 2, 0.8);
    outfit.add(laserEarring);

    const mirroredLaserEarring = laserEarring.clone();
    mirroredLaserEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredLaserEarring);
}

/**
 * 487. Vòng Cổ Laser Dạng Sóng
 * Thêm vòng cổ với các dải laser lượn sóng để tạo phong cách năng động.
 */
function addWavyLaserCollar(outfit) {
    const wavyLaser = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    wavyLaser.position.set(0, 1.6, 0.3);
    wavyLaser.rotation.z = Math.PI / 4;
    outfit.add(wavyLaser);
}

/**
 * 488. Cài Tóc Ánh Sáng Dạng Dài
 * Thêm cài tóc dạng dài với ánh sáng neon để tạo sự lấp lánh.
 */
function addNeonLongHairClip(outfit) {
    const neonClip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonClip.position.set(0, 3, -0.4);
    outfit.add(neonClip);
}

/**
 * 490. Vòng Tay Laser Dạng Lồng
 * Thêm vòng tay laser với thiết kế dạng lồng để tạo sự phá cách.
 */
function addCagedLaserBracelet(outfit) {
    const laserCage = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserCage.position.set(0.5, 0.5, 0.3);
    outfit.add(laserCage);
}

/**
 * 494. Dây Chuyền Laser Ba Tầng
 * Thêm dây chuyền laser với ba lớp ánh sáng để làm nổi bật cổ.
 */
function addTripleLayerLaserNecklace(outfit) {
    const laserLayer1 = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserLayer1.position.set(0, 1.6, 0.3);
    laserLayer1.rotation.x = Math.PI / 2;
    outfit.add(laserLayer1);

    const laserLayer2 = laserLayer1.clone();
    laserLayer2.position.set(0, 1.4, 0.4);
    outfit.add(laserLayer2);

    const laserLayer3 = laserLayer1.clone();
    laserLayer3.position.set(0, 1.2, 0.5);
    outfit.add(laserLayer3);
}

/**
 * 496. Lắc Tay Chân Kim Dạng Đôi
 * Thêm lắc tay với ánh sáng kim loại và thiết kế dạng đôi để tạo vẻ thanh lịch.
 */
function addTwinMetalBracelets(outfit) {
    const metalLayer1 = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalLayer1.position.set(0.5, 0.5, 0.3);

    const metalLayer2 = metalLayer1.clone();
    metalLayer2.position.set(0.5, 0.4, 0.3);
    outfit.add(metalLayer1);
    outfit.add(metalLayer2);
}

/**
 * 498. Lắc Chân Laser Phát Sáng
 * Thêm lắc chân với ánh sáng laser rực rỡ để tạo phong cách hiện đại.
 */
function addRadiantLaserAnklet(outfit) {
    const laserAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserAnklet.position.set(0.5, -5.3, 0);
    outfit.add(laserAnklet);

    const mirroredLaserAnklet = laserAnklet.clone();
    mirroredLaserAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredLaserAnklet);
}

/**
 * 500. Cài Tóc Laser Đơn
 * Thêm cài tóc với thiết kế laser đơn giản nhưng nổi bật.
 */
function addMinimalLaserHairClip(outfit) {
    const laserHairClip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.2,
        })
    );
    laserHairClip.position.set(0, 3, -0.4);
    outfit.add(laserHairClip);
}

/**
 * 835. Đồng Hồ Laser Hiện Đại
 * Thêm đồng hồ với thiết kế mặt đồng hồ laser phát sáng để tạo phong cách tương lai.
 */
function addModernLaserWatch(outfit) {
    const laserFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    laserFace.add(strap);

    outfit.add(laserFace);
}

/**
 * 862. Đồng Hồ Dây Chân Neon
 * Thêm đồng hồ với dây đeo ánh sáng neon để tạo sự lấp lánh.
 */
function addNeonStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const neonStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
        })
    );
    neonStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(neonStrap);

    outfit.add(watchFace);
}
