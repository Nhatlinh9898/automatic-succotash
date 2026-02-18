// Watch Components - Part 19
// Library for various watch designs and timepiece accessories

/**
 * 501. Đồng Hồ Chân Kim Loại Cổ Điển
 * Thêm đồng hồ với mặt đồng hồ ánh kim loại và dây đeo cổ điển để tạo phong cách trang nhã.
 */
function addClassicMetalWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xC0C0C0 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    watchFace.add(strap);

    outfit.add(watchFace);
}

/**
 * 502. Đồng Hồ Dây Pha Lê Lấp Lánh
 * Thêm đồng hồ với dây đeo được trang trí pha lê để tạo sự lung linh.
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
 * 503. Đồng Hồ Laser Hiện Đại
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
 * 504. Đồng Hồ Dây Chân Neon
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

/**
 * 505. Đồng Hồ Mặt Kính Lớp Đôi
 * Thêm đồng hồ với thiết kế mặt kính lớp đôi để tạo chiều sâu và sang trọng.
 */
function addDoubleLayerGlassWatch(outfit) {
    const glassLayer1 = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    glassLayer1.position.set(0.5, 0, 0.3);

    const glassLayer2 = glassLayer1.clone();
    glassLayer2.position.set(0.5, 0, 0.35);
    glassLayer1.add(glassLayer2);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    glassLayer1.add(strap);

    outfit.add(glassLayer1);
}

/**
 * 506. Đồng Hồ Hoa Văn Khắc
 * Thêm đồng hồ với mặt khắc hoa văn để tạo vẻ cổ điển và tinh tế.
 */
function addEngravedPatternWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const engraving = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0x87CEEB,
            opacity: 0.7,
            transparent: true,
        })
    );
    engraving.position.set(0.5, 0.1, 0.3);
    watchFace.add(engraving);

    const strap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ color: 0xC0C0C0 })
    );
    strap.position.set(0.5, 0.75, 0.3);
    watchFace.add(strap);

    outfit.add(watchFace);
}

/**
 * 507. Đồng Hồ Mặt Pha Lê
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

/**
 * 508. Đồng Hồ Dây Dệt
 * Thêm đồng hồ với dây đeo dệt mềm mại để tạo cảm giác thoải mái.
 */
function addWovenStrapWatch(outfit) {
    const watchFace = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            metalness: 0.7,
            roughness: 0.3,
        })
    );
    watchFace.position.set(0.5, 0, 0.3);

    const wovenStrap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.5, 0.1),
        new THREE.MeshStandardMaterial({ 
            color: 0x8B4513,
            roughness: 0.8
        })
    );
    wovenStrap.position.set(0.5, 0.75, 0.3);
    watchFace.add(wovenStrap);

    outfit.add(watchFace);
}
