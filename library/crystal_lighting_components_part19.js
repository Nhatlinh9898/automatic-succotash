// Crystal and Lighting Components - Part 19
// Library for crystal, glowing, and lighting-based accessories

/**
 * 469. Dây Chuyền Pha Lê Nhiều Lớp
 * Thêm dây chuyền với nhiều lớp pha lê xếp tầng để tạo ánh sáng lấp lánh.
 */
function addLayeredCrystalNecklace(outfit) {
    const crystalLayer1 = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalLayer1.position.set(0, 1.6, 0.3);
    crystalLayer1.rotation.x = Math.PI / 2;
    outfit.add(crystalLayer1);

    const crystalLayer2 = crystalLayer1.clone();
    crystalLayer2.position.set(0, 1.4, 0.4);
    outfit.add(crystalLayer2);
}

/**
 * 472. Dây Chuyền Kết Hợp Pha Lê và Ren
 * Thêm dây chuyền với chi tiết pha lê được bọc trong ren mềm để tạo sự nữ tính.
 */
function addCrystalLaceNecklace(outfit) {
    const laceWrap = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceWrap.position.set(0, 1.6, 0.4);

    const crystal = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystal.position.set(0, 1.5, 0.3);
    laceWrap.add(crystal);
    outfit.add(laceWrap);
}

/**
 * 477. Lắc Tay Pha Lê Treo
 * Thêm lắc tay với các chi tiết pha lê treo nhảy nhảy để tạo sự uyển chuyển.
 */
function addDanglingCrystalBracelet(outfit) {
    const crystalDrop = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDrop.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalDrop);

    const mirroredDrop = crystalDrop.clone();
    mirroredDrop.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredDrop);
}

/**
 * 479. Cài Tóc Dây Pha Lê
 * Thêm cài tóc với các dây pha lê nhảy mềm để tạo sự lấp lánh.
 */
function addCrystalChainHairClip(outfit) {
    const chainClip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    chainClip.position.set(0, 3, -0.4);
    outfit.add(chainClip);
}

/**
 * 483. Nhẫn Hoa Văn Pha Lê
 * Thêm nhẫn với hoa văn chạm khắc tinh xảo và pha lê nhảy
 */
function addCrystalEngravedRing(outfit) {
    const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    ring.position.set(0.5, 0.5, 0.3);
    outfit.add(ring);

    const engraving = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0x87CEEB,
            opacity: 0.8,
            transparent: true,
        })
    );
    engraving.position.set(0.5, 0.6, 0.3);
    ring.add(engraving);
}

/**
 * 484. Dây Chuyền Pha Lê Dạng Chuỗi
 * Thêm dây chuyền pha lê với thiết kế chuỗi dài để tạo vẻ mềm mại.
 */
function addCrystalChainNecklace(outfit) {
    const crystalChain = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalChain.position.set(0, 1.6, 0.3);
    outfit.add(crystalChain);
}

/**
 * 489. Nhẫn Pha Lê Kết Hợp Kim Loại
 * Thêm nhẫn với pha lê kết hợp kim loại để tạo sự tương phản.
 */
function addMetalCrystalRing(outfit) {
    const metalBase = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalBase.position.set(0.5, 0.5, 0.3);

    const crystalHighlight = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalHighlight.position.set(0.5, 0.5, 0.4);
    metalBase.add(crystalHighlight);
    outfit.add(metalBase);
}

/**
 * 492. Lắc Tay Pha Lê Đa Màu
 * Thêm lắc tay với pha lê đa màu để tạo sự lấp lánh lung linh.
 */
function addMulticolorCrystalBracelet(outfit) {
    const crystalBracelet = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.8,
        })
    );
    crystalBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(crystalBracelet);

    const mirroredBracelet = crystalBracelet.clone();
    mirroredBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredBracelet);
}

/**
 * 493. Cài Tóc Lụa Phát Sáng Nhẹ
 * Thêm cài tóc với chi tiết lụa mềm và ánh sáng nhẹ để tạo vẻ thanh lịch.
 */
function addSoftGlowSilkHairClip(outfit) {
    const silkClip = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            emissive: 0xFFD700,
            emissiveIntensity: 1.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    silkClip.position.set(0, 3, -0.4);
    outfit.add(silkClip);
}

/**
 * 495. Nhẫn Kim Loại Chạm Khắc Pha Lê
 * Thêm nhẫn kim loại với chi tiết chạm khắc pha lê để tạo cảm giác tinh tế.
 */
function addEngravedCrystalMetalRing(outfit) {
    const metalBase = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalBase.position.set(0.5, 0.5, 0.3);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.5, 0.5, 0.4);
    metalBase.add(crystalDetail);
    outfit.add(metalBase);
}

/**
 * 497. Hoa Tai Đính Pha Lê Dạng Tròn
 * Thêm hoa tai với các viên pha lê lấp lánh dạng tròn để làm sáng khuôn mặt.
 */
function addRoundCrystalEarrings(outfit) {
    const crystalEarring = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    crystalEarring.position.set(0.4, 2, 0.8);
    outfit.add(crystalEarring);

    const mirroredEarring = crystalEarring.clone();
    mirroredEarring.position.set(-0.4, 2, 0.8);
    outfit.add(mirroredEarring);
}

/**
 * 499. Dây Chuyền Kết Hợp Pha Lê và Laser
 * Thêm dây chuyền với pha lê được bao quanh bởi ánh sáng laser để tạo sự nổi bật.
 */
function addCrystalLaserCombinationNecklace(outfit) {
    const crystalBase = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalBase.position.set(0, 1.5, 0.3);

    const laserRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserRing.position.set(0, 1.5, 0.4);
    crystalBase.add(laserRing);
    outfit.add(crystalBase);
}

/**
 * 806. Dây Chuyền Pha Lê Lấp Lánh
 * Thêm dây chuyền với dây đeo được trang trí pha lê để tạo sự lung linh.
 */
function addCrystalStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const crystalStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(crystalStrap);

    outfit.add(watchFace);
}

/**
 * 967. Đồng Hồ Mặt Pha Lê
 * Thêm đồng hồ với mặt được trang trí pha lê để làm sáng cổ tay.
 */
function addCrystalFaceWatch(outfit) {
    const crystalFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
    );
    strap.position.set(0.5, 0.75, 0.3);
    crystalFace.add(strap);

    outfit.add(crystalFace);
}
