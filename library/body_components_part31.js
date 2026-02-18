// Body Components - Part 31
// Advanced body components with laser, metallic, and decorative features

// Male Body Components (973-1013)

/**
 * 973. Thân Nam Vời Ngực Phát Sáng Nổi Bật
 * Thêm phần ngực được chiếu sáng mạnh mẽ tạo sự nổi bật và mạnh mẽ.
 */
function addRadiantChest(character) {
    const radiantChest = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 2.5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    radiantChest.position.set(0, 4.8, 0);
    character.add(radiantChest);
}

/**
 * 975. Thân Nam Vời Vai Dạng Laser
 * Thêm vai được thiết kế với tia laser phát sáng mạnh mẽ, tạo phong cách viễn tưởng.
 */
function addLaserShoulders(character) {
    const laserShoulder = new THREE.Mesh(
        new THREE.TorusGeometry(0.9, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    laserShoulder.position.set(2.5, 5, 0);

    const mirroredLaserShoulder = laserShoulder.clone();
    mirroredLaserShoulder.position.set(-2.5, 5, 0);

    character.add(laserShoulder);
    character.add(mirroredLaserShoulder);
}

/**
 * 977. Thân Nam Vời Tay Góc Cánh Laser
 * Thêm tay góc cánh với các chi tiết laser phát sáng tạo phong cách mạnh mẽ.
 */
function addAngularLaserArms(character) {
    const laserAngularArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 0.9, 4.2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserAngularArm.position.set(2.5, 3, 0);

    const mirroredLaserAngularArm = laserAngularArm.clone();
    mirroredLaserAngularArm.position.set(-2.5, 3, 0);

    character.add(laserAngularArm);
    character.add(mirroredLaserAngularArm);
}

/**
 * 979. Thân Nam Vời Ngực Khối Góc Cánh
 * Thêm ngực thiết kế theo phong cách góc cạnh tạo vẻ mạnh mẽ.
 */
function addAngularChest(character) {
    const angularChest = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 2.5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    angularChest.position.set(0, 4.8, 0);
    character.add(angularChest);
}

/**
 * 981. Thân Nam Vời Vai Dạng Tia Laser
 * Thêm vai được thiết kế dạng tia laser rực rỡ, tạo phong cách táo bạo.
 */
function addLaserBeamShoulders(character) {
    const laserBeam = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 2.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserBeam.position.set(2.5, 5.5, 0);

    const mirroredLaserBeam = laserBeam.clone();
    mirroredLaserBeam.position.set(-2.5, 5.5, 0);

    character.add(laserBeam);
    character.add(mirroredLaserBeam);
}

/**
 * 983. Thân Nam Vời Ngực Dạng Tấm Laser
 * Thêm phần ngực được thiết kế dạng tấm laser chiếu sáng nổi bật.
 */
function addLaserPanelChest(character) {
    const laserPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 2.8),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.5,
        })
    );
    laserPanel.position.set(0, 5, 0);
    character.add(laserPanel);
}

/**
 * 985. Thân Nam Vời Tay Cơ Bắp Góc Cánh
 * Thêm tay cơ bắp với các góc cạnh, mang lại phong cách mạnh mẽ.
 */
function addAngularMuscularArms(character) {
    const angularArm = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 4, 1),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    angularArm.position.set(2.7, 3, 0);

    const mirroredAngularArm = angularArm.clone();
    mirroredAngularArm.position.set(-2.7, 3, 0);

    character.add(angularArm);
    character.add(mirroredAngularArm);
}

/**
 * 987. Thân Nam Vời Vai Khối Kim Loại
 * Thêm vai được thiết kế theo dạng khối kim loại, tạo sức mạnh đặc biệt.
 */
function addBlockyMetallicShoulders(character) {
    const blockyShoulder = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 1.2),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    blockyShoulder.position.set(2.8, 5, 0);

    const mirroredBlockyShoulder = blockyShoulder.clone();
    mirroredBlockyShoulder.position.set(-2.8, 5, 0);

    character.add(blockyShoulder);
    character.add(mirroredBlockyShoulder);
}

/**
 * 989. Thân Nam Vời Lưng Laser Góc Cánh
 * Thêm lưng với các chi tiết góc cạnh kèm ánh sáng laser tạo phong cách nổi bật.
 */
function addAngularLaserGlowBack(character) {
    const angularLaserBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
        })
    );
    angularLaserBack.position.set(0, 5.5, -0.6);
    character.add(angularLaserBack);
}

/**
 * 991. Thân Nam Vời Tay Dài Lấp Lánh Laser
 * Thêm tay dài với ánh sáng laser lấp lánh, tạo vẻ hùng vĩ và nổi bật.
 */
function addSparklingLaserArms(character) {
    const sparklingLaserArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1, 5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    sparklingLaserArm.position.set(2.7, 3, 0);

    const mirroredSparklingLaserArm = sparklingLaserArm.clone();
    mirroredSparklingLaserArm.position.set(-2.7, 3, 0);

    character.add(sparklingLaserArm);
    character.add(mirroredSparklingLaserArm);
}

/**
 * 993. Thân Nam Vời Ngực Dài Laser Độc Đáo
 * Thêm phần ngực với tia laser chạy dọc chi tiết dài tạo phong cách mạnh mẽ.
 */
function addUniqueLaserChest(character) {
    const laserChest = new THREE.Mesh(
        new THREE.BoxGeometry(3, 5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.5,
            transparent: true,
        })
    );
    laserChest.position.set(0, 4.8, 0);
    character.add(laserChest);
}

/**
 * 995. Thân Nam Vời Vai Laser Sáng Mạnh
 * Thêm vai được thiết kế với tia laser sáng mạnh, làm nổi bật sức mạnh khác biệt.
 */
function addStrongLaserShoulders(character) {
    const strongLaserShoulder = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    strongLaserShoulder.position.set(2.8, 5.2, 0);

    const mirroredStrongLaserShoulder = strongLaserShoulder.clone();
    mirroredStrongLaserShoulder.position.set(-2.8, 5.2, 0);

    character.add(strongLaserShoulder);
    character.add(mirroredStrongLaserShoulder);
}

/**
 * 997. Thân Nam Vời Tay Góc Cánh Ánh Sáng
 * Thêm tay góc cánh với các ánh sáng phát sáng, tạo sức mạnh nổi bật.
 */
function addAngularLightArms(character) {
    const angularLightArm = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 0.9, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    angularLightArm.position.set(2.5, 3, 0);

    const mirroredAngularLightArm = angularLightArm.clone();
    mirroredAngularLightArm.position.set(-2.5, 3, 0);

    character.add(angularLightArm);
    character.add(mirroredAngularLightArm);
}

/**
 * 999. Thân Nam Vời Ngực Laser Lấp Lánh
 * Thêm phần ngực lấp lánh tia laser, tạo phong cách táo bạo và nổi bật.
 */
function addSparklingLaserChest(character) {
    const sparklingChest = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 2.5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    sparklingChest.position.set(0, 5, 0);
    character.add(sparklingChest);
}

// Female Body Components (974-1013)

/**
 * 974. Thân Nữ Vời Lưng Kim Loại Lấp Lánh
 * Thêm lưng kim loại với ánh sáng lấp lánh, tạo vẻ hùng vĩ và sang trọng.
 */
function addSparklingMetallicBack(character) {
    const sparklingBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 3.8, 1.2),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.5,
        })
    );
    sparklingBack.position.set(0, 4.5, -0.5);
    character.add(sparklingBack);
}

/**
 * 976. Thân Nữ Vời Hông Ánh Kim Sang Trọng
 * Thêm phần hông kim loại sáng bóng với thiết kế mịn mát tạo nét duyên dáng.
 */
function addElegantMetallicHips(character) {
    const metallicHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.4, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicHips.position.set(0, 2.5, 0);
    character.add(metallicHips);
}

/**
 * 978. Thân Nữ Vời Lưng Lấp Lánh Ánh Kim
 * Thêm lưng ánh kim lấp lánh tạo sự mịn màng và thu hút.
 */
function addShinyMetalBack(character) {
    const shinyBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 4, 1),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
        })
    );
    shinyBack.position.set(0, 4.5, -0.5);
    character.add(shinyBack);
}

/**
 * 980. Thân Nữ Vời Lưng Laser Dài Lấp Lánh
 * Thêm lưng dài với ánh laser phát sáng lấp lánh tạo nét hùng vĩ.
 */
function addSparklingLaserBack(character) {
    const laserBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 4.5, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.9,
        })
    );
    laserBack.position.set(0, 4.7, -0.5);
    character.add(laserBack);
}

/**
 * 982. Thân Nữ Vời Hông Dài Ánh Kim
 * Thêm phần hông dài với ánh kim mịn màng tạo sự sang trọng và hùng vĩ.
 */
function addLongMetallicHips(character) {
    const metallicHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.5, 2.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicHips.position.set(0, 2.5, 0);
    character.add(metallicHips);
}

/**
 * 984. Thân Nữ Vời Vòng Eo Ánh Sáng Lấp Lánh
 * Thêm vòng eo lấp lánh ánh sáng nhấp nháy, tạo sự thu hút.
 */
function addGlitteringWaist(character) {
    const glitteringWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.8, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.9,
        })
    );
    glitteringWaist.position.set(0, 3, 0);
    character.add(glitteringWaist);
}

/**
 * 986. Thân Nữ Vời Lưng Tia Laser
 * Thêm lưng được thiết kế với các tia laser phát sáng, tạo phong cách hùng vĩ.
 */
function addLaserBeamBack(character) {
    const laserBack = new THREE.Mesh(
        new THREE.TorusGeometry(2.2, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
        })
    );
    laserBack.rotation.x = Math.PI / 2;
    laserBack.position.set(0, 4.5, -0.5);
    character.add(laserBack);
}

/**
 * 988. Thân Nữ Vời Hông Xoắn Ren
 * Thêm hông xoắn nhẹ kèm các chi tiết ren mịn màng, tạo sự nữ tính.
 */
function addTwistedLaceHips(character) {
    const twistedHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.2, 1.8, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.9,
        })
    );
    twistedHips.rotation.z = Math.PI / 12;
    twistedHips.position.set(0, 2.5, 0);
    character.add(twistedHips);
}

/**
 * 990. Thân Nữ Vời Ngực Kim Loại Ánh Sáng
 * Thêm ngực kim loại bóng kèm ánh sáng nhẹ, tạo sự nổi bật.
 */
function addMetallicRadiantChest(character) {
    const radiantChest = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.5,
        })
    );
    radiantChest.position.set(0.8, 4.2, 0.7);

    const mirroredRadiantChest = radiantChest.clone();
    mirroredRadiantChest.position.set(-0.8, 4.2, 0.7);

    character.add(radiantChest);
    character.add(mirroredRadiantChest);
}

/**
 * 992. Thân Nữ Vời Hông Kim Loại Lấp Lánh
 * Thêm phần hông kim loại kèm ánh sáng lấp lánh ánh sáng dịu nhẹ.
 */
function addGlitteringMetalHips(character) {
    const glitteringHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.9, 2.4, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
        })
    );
    glitteringHips.position.set(0, 2.5, 0);
    character.add(glitteringHips);
}

/**
 * 994. Thân Nữ Vời Eo Tia Laser Lấp Lánh
 * Thêm vòng eo với tia laser lấp lánh, tạo vẻ hùng vĩ và mịn màng.
 */
function addGlitteringLaserWaist(character) {
    const glitteringLaserWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.8, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.2,
        })
    );
    glitteringLaserWaist.position.set(0, 3, 0);
    character.add(glitteringLaserWaist);
}

/**
 * 996. Thân Nữ Vời Lưng Dài Kim Loại
 * Thêm phần lưng kim loại dài với ánh sáng bóng, tạo vẻ hùng vĩ.
 */
function addLongMetallicBack(character) {
    const metallicBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 4.5, 1.2),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicBack.position.set(0, 4.8, -0.5);
    character.add(metallicBack);
}

/**
 * 998. Thân Nữ Vời Lưng Ren Dài
 * Thêm lưng với các chi tiết ren dài và mịn màng, tạo vẻ quyến rũ.
 */
function addElegantLaceBack(character) {
    const laceBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 4.2, 1),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceBack.position.set(0, 4.8, -0.5);
    character.add(laceBack);
}

/**
 * 1000. Thân Nữ Vời Lưng Laser Ánh Sao
 * Thêm lưng laser với các chi tiết ánh sáng ngôi sao lấp lánh.
 */
function addStarryGlowLaserBack(character) {
    const starryLaserBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 4.5, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.2,
            transparent: true,
            opacity: 0.9,
        })
    );
    starryLaserBack.position.set(0, 4.7, -0.5);
    character.add(starryLaserBack);
}

// Complete Body Components (1001-1013)

/**
 * 1001. Toàn Thân Nam Vời Cơ Thể Laser Góc Cánh
 * Thiết kế toàn bộ cơ thể với các chi tiết góc cạnh và ánh sáng laser mạnh mẽ.
 */
function addAngularLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.BoxGeometry(3, 5, 2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 3.0,
        })
    );
    torso.position.set(0, 4.5, 0);

    const legs = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 3, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    legs.position.set(0, 1.5, 0);

    const arms = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.9, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    arms.position.set(2.5, 3, 0);

    const mirroredArms = arms.clone();
    mirroredArms.position.set(-2.5, 3, 0);

    character.add(torso);
    character.add(legs);
    character.add(arms);
    character.add(mirroredArms);
}

/**
 * 1002. Toàn Thân Nữ Vời Cơ Thể Ánh Kim và Ren
 * Thiết kế cơ thể với chi tiết ren và ánh sáng kim, tạo sự nữ tính và mịn màng.
 */
function addMetallicLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.2, 3.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.9,
        })
    );
    legs.position.set(0, 1.5, 0);

    const laceDetail = new THREE.Mesh(
        new THREE.TorusGeometry(1.5, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    laceDetail.rotation.x = Math.PI / 2;
    laceDetail.position.set(0, 4, 0);

    character.add(torso);
    character.add(legs);
    character.add(laceDetail);
}

/**
 * 1003. Toàn Thân Nam Vời Cơ Thể Phát Sáng Laser
 * Thiết kế toàn bộ cơ thể được phủ ánh sáng laser, tạo vẻ hùng vĩ.
 */
function addRadiantLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3, 8, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    body.position.set(0, 4, 0);
    character.add(body);
}

/**
 * 1004. Toàn Thân Nữ Vời Cơ Thể Lấp Lánh Dịu Dàng
 * Thiết kế toàn bộ cơ thể với ánh sáng lấp lánh nhấp nháy, tạo sự mịn màng.
 */
function addGlitteringBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1.4, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * 1005. Toàn Thân Nam Vời Cơ Thể Kim Loại Mạnh Mẽ
 * Thiết kế toàn bộ cơ thể bằng kim loại sáng bóng, tạo sức mạnh mẽ.
 */
function addMetallicPowerfulBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 8.5, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    body.position.set(0, 4.2, 0);
    character.add(body);
}

/**
 * 1006. Toàn Thân Nữ Vời Cơ Thể Mịn Màng và Ren
 * Thiết kế toàn bộ cơ thể với nét mịn màng và các chi tiết ren nhấp nháy.
 */
function addElegantLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1.2, 3.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    const laceDetail = new THREE.Mesh(
        new THREE.TorusGeometry(1.5, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.3,
        })
    );
    laceDetail.rotation.x = Math.PI / 2;
    laceDetail.position.set(0, 4, 0);

    character.add(torso);
    character.add(legs);
    character.add(laceDetail);
}

/**
 * 1007. Toàn Thân Nam Vời Cơ Thể Dài Góc Cánh
 * Thiết kế toàn bộ cơ thể với các nét góc cạnh tạo sức mạnh mẽ.
 */
function addAngularBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * 1008. Toàn Thân Nữ Vời Cơ Thể Laser Mịn Màng
 * Thiết kế toàn bộ cơ thể với ánh sáng laser dịu dàng.
 */
function addSoftLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.5, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * 1009. Toàn Thân Nam Vời Cơ Thể Kim Loại Laser
 * Thiết kế toàn bộ cơ thể bằng kim loại kèm các chi tiết laser nổi bật.
 */
function addMetallicLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9, 2.8),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * 1010. Toàn Thân Nam Vời Cơ Thể Kim Loại Góc Cánh
 * Thiết kế toàn bộ cơ thể nam bằng kim loại với các góc cạnh, tạo vẻ mạnh mẽ và táo bạo.
 */
function addAngularMetalBody(character) {
    const torso = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    torso.position.set(0, 4.5, 0);

    const legs = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 2),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * 1011. Toàn Thân Nữ Vời Cơ Thể Laser Ánh Sao
 * Thiết kế toàn bộ cơ thể nữ với ánh laser ánh sao, tạo sự nổi bật và nữ tính.
 */
function addStarryLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.2,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.4, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * 1012. Toàn Thân Nam Vời Cơ Thể Dài Phát Sáng
 * Thiết kế toàn bộ cơ thể dài với ánh sáng mạnh mẽ từ trên xuống dưới, tạo phong cách hùng vĩ.
 */
function addRadiantLongBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9.5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
        })
    );
    body.position.set(0, 4.7, 0);
    character.add(body);
}

/**
 * 1013. Toàn Thân Nữ Vời Cơ Thể Kim Loại Bóng Mượt
 * Thiết kế toàn bộ cơ thể nữ bằng kim loại bóng mượt, tạo vẻ sang trọng và thu hút.
 */
function addMetallicSmoothBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    torso.position.set(0, 3.5, 0);
    character.add(torso);
}
