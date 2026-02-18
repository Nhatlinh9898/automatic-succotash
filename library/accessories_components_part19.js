// Metal and Accessories Components - Part 19
// Library for metal accessories, jewelry, and traditional adornments

/**
 * 471. Vòng Tay Chân Kim Dạng Chuỗi
 * Thêm vòng tay với thiết kế chuỗi kim loại ánh sáng nhảy nhảy để tạo cảm giác tinh tế.
 */
function addChainMetalBracelet(outfit) {
    const chainBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    chainBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(chainBracelet);
}

/**
 * 473. Lắc Chân Dáng Hoa Dạng Chuỗi
 * Thêm lắc chân chuỗi với hoa nhảy trang trí để tạo sự mềm mại.
 */
function addFloralChainAnklet(outfit) {
    const flowerChain = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFFA500,
            emissiveIntensity: 1.5,
        })
    );
    flowerChain.position.set(0.5, -5.3, 0);
    outfit.add(flowerChain);

    const mirroredChain = flowerChain.clone();
    mirroredChain.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredChain);
}

/**
 * 474. Hoa Tai Đính Ngọc Trai Đôi
 * Thêm hoa tai với hai viên ngọc trai lấp lánh để tạo sự thanh lịch.
 */
function addDoublePearlEarrings(outfit) {
    const pearl1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 })
    );
    pearl1.position.set(0.4, 2.2, 0.8);

    const pearl2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFFFE0 })
    );
    pearl2.position.set(0.4, 2, 0.8);
    outfit.add(pearl1);
    outfit.add(pearl2);
}

/**
 * 481. Dây Chuyền Kim Loại Dạng Lồng
 * Thêm dây chuyền với thiết kế dạng lồng kim loại để tạo vẻ độc đáo.
 */
function addCagedMetalNecklace(outfit) {
    const metalCage = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalCage.position.set(0, 1.6, 0.3);
    outfit.add(metalCage);
}

/**
 * 486. Lắc Chân Chân Kim Đơn Sắc
 * Thêm lắc chân ánh kim đơn sắc với phong cách tối giản và tinh tế.
 */
function addMinimalMetalAnklet(outfit) {
    const metalAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalAnklet.position.set(0.5, -5.3, 0);
    outfit.add(metalAnklet);

    const mirroredAnklet = metalAnklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

/**
 * 491. Dây Chuyền Kim Loại Dạng Nhịp Sóng
 * Thêm dây chuyền kim loại với thiết kế dạng nhịp sóng để tạo vẻ thanh thoát.
 */
function addRhythmicMetalNecklace(outfit) {
    const rhythmicNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    rhythmicNecklace.position.set(0, 1.6, 0.3);
    rhythmicNecklace.rotation.x = Math.PI / 2;
    outfit.add(rhythmicNecklace);
}

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
 * 896. Đồng Hồ Mặt Kính Lớp Đôi
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
 * 925. Đồng Hồ Hoa Văn Khắc
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
 * 991. Đồng Hồ Dây Dệt
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
