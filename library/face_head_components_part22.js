/**
 * Face and Head Components - Part 22
 * Functions 575-600: Advanced face and head decorative components
 * Including engraved symbols, transparent glass hair, laser effects, crystal patterns, and more
 */

// Import THREE.js if needed
// import * as THREE from 'three';

/**
 * 575. Khuôn Mặt Vẽ Biểu Tượng Khắc
 * Tạo khuôn mặt được trang trí bằng các biểu tượng khắc tinh tế.
 */
function addEngravedSymbolFace(character) {
    const faceBase = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.2,
        })
    );

    const engravedSymbol = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0xFF6347,
            opacity: 0.8,
            transparent: true,
        })
    );
    engravedSymbol.position.set(0.5, 4, 0.7);
    faceBase.add(engravedSymbol);

    character.add(faceBase);
}

/**
 * 576. Tóc Kính Trong Suốt
 * Thêm tóc được làm từ các dải kính trong suốt để tạo vẻ thanh thoát.
 */
function addTransparentGlassHair(character) {
    const glassStrand = new THREE.Mesh(
        new THREE.PlaneGeometry(0.2, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.5,
            transparent: true,
        })
    );
    glassStrand.position.set(0.3, 4.5, 0.5);

    const mirroredStrand = glassStrand.clone();
    mirroredStrand.position.set(-0.3, 4.5, -0.5);

    character.add(glassStrand);
    character.add(mirroredStrand);
}

/**
 * 577. Đầu Vẽ Hiệu Ứng Laser Xoay
 * Thêm các đường laser xoay chạy quanh đầu để tạo hiệu ứng ánh sáng động.
 */
function addRotatingLaserHead(character) {
    const laserRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserRing.rotation.x = Math.PI / 2;
    laserRing.position.set(0, 4.5, 0);
    character.add(laserRing);
}

/**
 * 578. Đầu Vẽ Hoa Văn Pha Lê
 * Trang trí phần đầu bằng các chi tiết hoa văn pha lê nhấp nháy lấp lánh.
 */
function addCrystalPatternHead(character) {
    const crystalPattern = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalPattern.position.set(0, 4.5, 0);
    character.add(crystalPattern);
}

/**
 * 579. Đầu Vẽ Kính Màu Đa Sắc
 * Tạo phần đầu được phủ bằng các lớp kính màu để tạo hiệu ứng ánh sáng đa sắc.
 */
function addMulticolorGlassHead(character) {
    const baseLayer = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            opacity: 0.8,
            transparent: true,
        })
    );
    baseLayer.position.set(0, 4.5, 0);

    const secondLayer = baseLayer.clone();
    secondLayer.material.color.set(0x87CEEB);
    baseLayer.add(secondLayer);

    const thirdLayer = secondLayer.clone();
    thirdLayer.material.color.set(0xFF69B4);
    secondLayer.add(thirdLayer);

    character.add(baseLayer);
}

/**
 * 580. Tóc Pha Lê Dạng Làn Sóng
 * Thêm tóc pha lê với thiết kế dạng làn sóng để tạo sự thanh lịch.
 */
function addWaveCrystalHair(character) {
    const crystalWave = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalWave.position.set(0, 4.5, 0.5);
    crystalWave.rotation.z = Math.PI / 6;

    const mirroredWave = crystalWave.clone();
    mirroredWave.position.set(0, 4.5, -0.5);
    mirroredWave.rotation.z = -Math.PI / 6;

    character.add(crystalWave);
    character.add(mirroredWave);
}

/**
 * 581. Khuôn Mặt Ánh Sáng Biểu Tượng
 * Trang trí khuôn mặt với các biểu tượng ánh sáng, mang lại sự huyền bí và hiệp đại.
 */
function addSymbolLightFace(character) {
    const baseFace = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );

    const glowingSymbol = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 0.4),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    glowingSymbol.position.set(0.5, 4, 0.8);
    baseFace.add(glowingSymbol);

    character.add(baseFace);
}

/**
 * 582. Tóc Kim Loại Dạng Tua
 * Thêm tóc kim loại với thiết kế dạng tua rua tạo cảm giác nổi bật.
 */
function addFringedMetalHair(character) {
    const fringeStrand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    fringeStrand.position.set(0.3, 4.5, 0.5);
    character.add(fringeStrand);

    const mirroredStrand = fringeStrand.clone();
    mirroredStrand.position.set(-0.3, 4.5, 0.5);
    character.add(mirroredStrand);
}

/**
 * 583. Đầu Dạng Lồng Pha Lê
 * Thêm phần đầu được bao phủ bởi lớp lồng pha lê, tạo vẻ thanh thoát.
 */
function addCrystalCagedHead(character) {
    const crystalCage = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
            opacity: 0.8,
            transparent: true,
        })
    );
    crystalCage.position.set(0, 4.5, 0);
    character.add(crystalCage);
}

/**
 * 584. Mặt Nạ Kết Hợp Ren Và Ánh Sáng
 * Thêm mặt nạ với các lớp ren mỏng mai kết hợp ánh sáng lung linh.
 */
function addLaceGlowMask(character) {
    const laceLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceLayer.position.set(0, 3.5, 0);

    const glowingDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    glowingDetail.position.set(0.5, 3.6, 0.3);
    laceLayer.add(glowingDetail);

    character.add(laceLayer);
}

/**
 * 585. Đầu Vẽ Hiệu Ứng Ánh Sáng Xoáy
 * Thêm ánh sáng xoáy chạy quanh đầu để tạo phong cách nổi bật.
 */
function addSwirlLightHead(character) {
    const swirlEffect = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
        })
    );
    swirlEffect.rotation.x = Math.PI / 2;
    swirlEffect.position.set(0, 4.5, 0);
    character.add(swirlEffect);
}

/**
 * 586. Tóc Đính Ngọc Trai
 * Thêm tóc với các chi tiết ngọc trai tinh tế tạo vẻ sang trọng.
 */
function addPearlDecoratedHair(character) {
    const pearlLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFE0, // Màu ngọc trai
        })
    );
    pearlLayer.position.set(0, 4.5, 0);

    const pearlDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFE0,
        })
    );
    pearlDetail.position.set(0.5, 4.6, 0.3);
    pearlLayer.add(pearlDetail);

    character.add(pearlLayer);
}

/**
 * 587. Đầu Vẽ Kính Màu Dạng Khối
 * Thêm kính màu được thiết kế dạng khối để tạo sự khác biệt.
 */
function addBlockGlassHead(character) {
    const blockGlassLayer = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.6,
            transparent: true,
        })
    );
    blockGlassLayer.position.set(0, 4.5, 0);
    character.add(blockGlassLayer);
}

/**
 * 588. Tóc Laser Dạng Đuôi Dài
 * Thêm tóc laser với thiết kế đuôi dài tạo sự uy quyền.
 */
function addLongTailLaserHair(character) {
    const laserTail = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserTail.position.set(0, 4.5, 0.5);

    const mirroredTail = laserTail.clone();
    mirroredTail.position.set(0, 4.5, -0.5);

    character.add(laserTail);
    character.add(mirroredTail);
}

/**
 * 589. Đầu Vẽ Biểu Tượng Laser
 * Thêm biểu tượng laser chạy quanh đầu để tạo cảm giác hiệp đại.
 */
function addLaserSymbolHead(character) {
    const laserSymbol = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserSymbol.position.set(0, 4.5, 0.3);
    character.add(laserSymbol);
}

/**
 * 590. Tóc Dạng Lưới Kim Loại
 * Thêm tóc kim loại được thiết kế dạng lưới để tạo phong cách mạnh mẽ.
 */
function addMetalMeshHair(character) {
    const metalMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            wireframe: true,
        })
    );
    metalMesh.position.set(0, 4.5, 0.5);

    const mirroredMesh = metalMesh.clone();
    mirroredMesh.position.set(0, 4.5, -0.5);

    character.add(metalMesh);
    character.add(mirroredMesh);
}

/**
 * 591. Đầu Kết Hợp Ánh Sáng Và Tua Rua
 * Thêm ánh sáng nhạt và chi tiết tua rua trên đầu để tạo cảm giác chuyên nghiệp.
 */
function addFringedGlowHead(character) {
    const lightRing = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    lightRing.rotation.x = Math.PI / 2;
    lightRing.position.set(0, 4.5, 0);

    const fringeStrands = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    fringeStrands.position.set(0.3, 4.5, 0.5);

    character.add(lightRing);
    character.add(fringeStrands);
}

/**
 * 592. Tóc Dạng Lưới Kết Hợp Pha Lê
 * Thêm tóc dạng lưới với chi tiết pha lê để tạo phong cách sang trọng.
 */
function addCrystalMeshHair(character) {
    const meshLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshLayer.position.set(0, 4.5, 0.5);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.5, 4.6, 0.3);
    meshLayer.add(crystalDetail);

    character.add(meshLayer);
}

/**
 * 593. Đầu Vẽ Các Đường Laser Xếp Tầng
 * Thêm đường laser xếp tầng chạy quanh đầu để tạo hiệu ứng ánh sáng chi tiết.
 */
function addLayeredLaserHead(character) {
    const laserRing1 = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserRing1.rotation.x = Math.PI / 2;
    laserRing1.position.set(0, 4.5, 0);

    const laserRing2 = laserRing1.clone();
    laserRing2.position.set(0, 4.6, 0);

    const laserRing3 = laserRing1.clone();
    laserRing3.position.set(0, 4.7, 0);

    character.add(laserRing1);
    character.add(laserRing2);
    character.add(laserRing3);
}

/**
 * 594. Khuôn Mặt Vẽ Hiệu Ứng Ánh Kim
 * Thêm hiệu ứng ánh kim loại bao phủ khuôn mặt để tạo cảm giác mạnh mẽ.
 */
function addMetallicGlowFace(character) {
    const metalFace = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalFace.position.set(0, 4.5, 0);
    character.add(metalFace);
}

/**
 * 595. Tóc Pha Lê Dạng Chuỗi
 * Thêm tóc pha lê thiết kế dạng chuỗi để tạo phong cách uy quyền.
 */
function addChainCrystalHair(character) {
    const crystalChain = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalChain.position.set(0.3, 4.5, 0.5);

    const mirroredChain = crystalChain.clone();
    mirroredChain.position.set(-0.3, 4.5, 0.5);

    character.add(crystalChain);
    character.add(mirroredChain);
}

/**
 * 596. Đầu Kính Trong Dạng Gợn Sóng
 * Thêm kính trong thiết kế dạng gợn sóng bao phủ đầu để tạo sự mỏng manh.
 */
function addWaveGlassHead(character) {
    const glassWave = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.7,
            transparent: true,
        })
    );
    glassWave.position.set(0, 4.5, 0);
    character.add(glassWave);
}

/**
 * 597. Đầu Ánh Sáng Laser Hiện Đại
 * Thêm các dải ánh sáng laser chạy dọc đầu để tạo phong cách tương lai.
 */
function addModernLaserHead(character) {
    const laserStrip = new THREE.Mesh(
        new THREE.PlaneGeometry(0.2, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserStrip.position.set(0, 4.5, 0.5);

    const mirroredStrip = laserStrip.clone();
    mirroredStrip.position.set(0, 4.5, -0.5);

    character.add(laserStrip);
    character.add(mirroredStrip);
}

/**
 * 598. Khuôn Mặt Vẽ Biểu Tượng Pha Lê
 * Trang trí khuôn mặt bằng các biểu tượng pha lê tinh tế tạo phong cách huyền bí.
 */
function addCrystalSymbolFace(character) {
    const baseFace = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );

    const crystalSymbol = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalSymbol.position.set(0.5, 4, 0.8);
    baseFace.add(crystalSymbol);

    character.add(baseFace);
}

/**
 * 599. Đầu Ren Vẽ Hiệu Ứng Ánh Sáng
 * Thêm lớp ren mỏng mai trên đầu kết hợp ánh sáng để tạo sự lung linh.
 */
function addGlowingLaceHead(character) {
    const laceLayer = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceLayer.position.set(0, 4.5, 0);

    const glowingDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    glowingDetail.position.set(0.6, 4.6, 0.3);
    laceLayer.add(glowingDetail);

    character.add(laceLayer);
}

/**
 * 600. Đầu Vẽ Tóc Dạng Bóng
 * Thêm tóc được thiết kế dạng bóng sáng để tạo hiệu ứng ánh sáng phản chiếu.
 */
function addGlossyHair(character) {
    const glossyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.1,
        })
    );
    glossyLayer.position.set(0, 4.5, 0.5);

    const mirroredLayer = glossyLayer.clone();
    mirroredLayer.position.set(0, 4.5, -0.5);

    character.add(glossyLayer);
    character.add(mirroredLayer);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addEngravedSymbolFace,
        addTransparentGlassHair,
        addRotatingLaserHead,
        addCrystalPatternHead,
        addMulticolorGlassHead,
        addWaveCrystalHair,
        addSymbolLightFace,
        addFringedMetalHair,
        addCrystalCagedHead,
        addLaceGlowMask,
        addSwirlLightHead,
        addPearlDecoratedHair,
        addBlockGlassHead,
        addLongTailLaserHair,
        addLaserSymbolHead,
        addMetalMeshHair,
        addFringedGlowHead,
        addCrystalMeshHair,
        addLayeredLaserHead,
        addMetallicGlowFace,
        addChainCrystalHair,
        addWaveGlassHead,
        addModernLaserHead,
        addCrystalSymbolFace,
        addGlowingLaceHead,
        addGlossyHair
    };
}
