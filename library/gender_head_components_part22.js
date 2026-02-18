/**
 * Gender-Specific Head Components - Part 22
 * Functions 601-615: Male and female specific head design components
 * Including angular eyes, layered hair, metal ears, glowing lips, and more
 */

// Import THREE.js if needed
// import * as THREE from 'three';

/**
 * 601. Đầu Nam Vẽ Mắt Góc Cạnh
 * Thiết kế đầu nam với mắt có đường nét góc cạnh, tạo vẻ sắc sảo và mạnh mẽ.
 */
function addAngularEyes(character) {
    const eyesBase = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x87CEEB })
    );
    eyesBase.position.set(0.6, 4.8, 0.7);

    const mirroredEyes = eyesBase.clone();
    mirroredEyes.position.set(-0.6, 4.8, 0.7);

    character.add(eyesBase);
    character.add(mirroredEyes);
}

/**
 * 602. Đầu Nữ Vẽ Tóc Dài Xếp Tầng
 * Tạo đầu nữ với tóc dài xếp tầng để tạo sự mỏng manh và thanh lịch.
 */
function addLayeredLongHair(character) {
    const hairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.9,
            transparent: true,
        })
    );
    hairLayer.position.set(0, 4.5, 0);

    const mirroredLayer = hairLayer.clone();
    mirroredLayer.position.set(0, 4.5, -0.5);
    character.add(hairLayer);
    character.add(mirroredLayer);
}

/**
 * 603. Đầu Nam Vẽ Tai Kim Loại
 * Thêm tai làm từ kim loại cho nhân vật nam, tạo phong cách hiện đại và mạnh mẽ.
 */
function addMetalEars(character) {
    const metalEar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalEar.position.set(1.2, 4.5, 0.3);

    const mirroredEar = metalEar.clone();
    mirroredEar.position.set(-1.2, 4.5, 0.3);

    character.add(metalEar);
    character.add(mirroredEar);
}

/**
 * 604. Đầu Nữ Vẽ Mí Mắt Phát Sáng
 * Thêm mí mắt phát sáng nhạt cho nhân vật nữ để tạo vẻ huyền bí.
 */
function addGlowingLips(character) {
    const lips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.5,
        })
    );
    lips.position.set(0, 4.3, 0.8);
    character.add(lips);
}

/**
 * 605. Đầu Nam Vẽ Mũi Góc Cạnh
 * Tạo phần mũi cho nhân vật nam với thiết kế góc cạnh để tạo sự mạnh mẽ.
 */
function addAngularNose(character) {
    const nose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFD700 })
    );
    nose.position.set(0, 4.5, 0.9);
    character.add(nose);
}

/**
 * 606. Đầu Nữ Vẽ Tóc Ngắn Bập Bềnh
 * Tạo đầu nữ với kiểu tóc ngắn bập bềnh để tạo phong cách trẻ trung.
 */
function addShortWavyHair(character) {
    const shortHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 2),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    shortHair.position.set(0, 4.7, 0);

    const mirroredHair = shortHair.clone();
    mirroredHair.position.set(0, 4.7, -0.5);
    character.add(shortHair);
    character.add(mirroredHair);
}

/**
 * 607. Đầu Nam Vẽ Râu Đậm
 * Thêm chi tiết râu đậm cho nhân vật nam để tạo vẻ trưởng thành.
 */
function addBeard(character) {
    const beard = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.6),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    beard.position.set(0, 4.2, 0.8);
    character.add(beard);
}

/**
 * 608. Đầu Nữ Vẽ Mắt Lớn Đầy Cảm Xúc
 * Thiết kế mắt lớn cho nhân vật nữ để tạo sự đáng yêu và cảm xúc.
 */
function addBigEyes(character) {
    const bigEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x87CEEB })
    );
    bigEye.position.set(0.6, 4.8, 0.7);

    const mirroredEye = bigEye.clone();
    mirroredEye.position.set(-0.6, 4.8, 0.7);
    character.add(bigEye);
    character.add(mirroredEye);
}

/**
 * 609. Đầu Nam Vẽ Tóc Ngắn Góc Cạnh
 * Thêm tóc ngắn với đường nét góc cạnh cho nhân vật nam để tạo sự mạnh mẽ.
 */
function addShortAngularHair(character) {
    const angularHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    angularHair.position.set(0, 4.7, 0);

    const mirroredHair = angularHair.clone();
    mirroredHair.position.set(0, 4.7, -0.5);
    character.add(angularHair);
    character.add(mirroredHair);
}

/**
 * 610. Đầu Nữ Vẽ Tai Mềm Mại
 * Tạo phần tai mềm mại cho nhân vật nữ để tạo sự nữ tính.
 */
function addSoftEars(character) {
    const ear = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    ear.position.set(1.2, 4.5, 0.3);

    const mirroredEar = ear.clone();
    mirroredEar.position.set(-1.2, 4.5, 0.3);
    character.add(ear);
    character.add(mirroredEar);
}

/**
 * 611. Đầu Nam Vẽ Mắt Sáng Lung Linh
 * Thiết kế mắt cho nhân vật nam với ánh sáng lung linh, tạo vẻ bí ẩn và mạnh mẽ.
 */
function addGlowingEyes(character) {
    const glowingEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    glowingEye.position.set(0.6, 4.8, 0.7);

    const mirroredEye = glowingEye.clone();
    mirroredEye.position.set(-0.6, 4.8, 0.7);

    character.add(glowingEye);
    character.add(mirroredEye);
}

/**
 * 612. Đầu Nữ Vẽ Mũi Thanh Mảnh
 * Tạo mũi thanh mảnh và nhạt nhàng cho nhân vật nữ để tạo sự duyên dáng.
 */
function addDelicateNose(character) {
    const nose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    nose.position.set(0, 4.5, 0.8);
    character.add(nose);
}

/**
 * 613. Đầu Nam Vẽ Mái Tóc Dài Lịch Lãm
 * Thêm tóc dài thẳng và bập bềnh để mang lại vẻ quý ông lịch lãm.
 */
function addElegantLongHair(character) {
    const longHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 3.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    longHair.position.set(0, 4.6, -0.3);
    longHair.rotation.z = Math.PI / 12;

    character.add(longHair);
}

/**
 * 614. Đầu Nữ Vẽ Mắt Ánh Pha Lê
 * Thêm đôi mắt pha lê lấp lánh tạo vẻ cuốn hút cho nhân vật nữ.
 */
function addCrystalEyes(character) {
    const crystalEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    crystalEye.position.set(0.6, 4.8, 0.7);

    const mirroredCrystalEye = crystalEye.clone();
    mirroredCrystalEye.position.set(-0.6, 4.8, 0.7);

    character.add(crystalEye);
    character.add(mirroredCrystalEye);
}

/**
 * 615. Đầu Nam Vẽ Tai Góc Cạnh
 * Thêm tai có đường nét góc cạnh cho nhân vật nam để tạo sự mạnh mẽ.
 */
function addSharpEars(character) {
    const ear = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.1, 16),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    ear.position.set(1.3, 4.5, 0.2);

    const mirroredEar = ear.clone();
    mirroredEar.position.set(-1.3, 4.5, 0.2);

    character.add(ear);
    character.add(mirroredEar);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addAngularEyes,
        addLayeredLongHair,
        addMetalEars,
        addGlowingLips,
        addAngularNose,
        addShortWavyHair,
        addBeard,
        addBigEyes,
        addShortAngularHair,
        addSoftEars,
        addGlowingEyes,
        addDelicateNose,
        addElegantLongHair,
        addCrystalEyes,
        addSharpEars
    };
}
