/**
 * Body Components Library - Part 33
 * Laser and Special Body Types (Functions 1048-1053)
 */

// Function 1048: Tạo Thân Nam Vị Cơ Thể Laser Phát Sáng
function addFullLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4, 10, 3.2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.5,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

// Function 1049: Tạo Thân Nữ Vị Cơ Thể Laser Gần Sóng
function addWaveLaserSoftBody(character) {
    const torso = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 5.2, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.1,
        })
    );
    torso.position.set(0, 4, 0);
    torso.rotation.z = Math.PI / 12;

    const legs = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 4.5, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.7,
        })
    );
    legs.position.set(0, 1.5, 0);
    legs.rotation.z = Math.PI / 12;

    character.add(torso);
    character.add(legs);
}

// Function 1050: Tạo Thân Nam Vị Cơ Thể Kim Loại Phát Sáng Laser
function addMetalLaserRadiantBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 10, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

// Function 1051: Tạo Thân Nữ Vị Cơ Thể Ren Dài
function addElegantLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.5, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

// Function 1052: Tạo Thân Nam Vị Cơ Thể Laser Đậm Sáng Nổi Bật
function addBrightLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 10, 3.3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 4.0,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

// Function 1053: Tạo Thân Nữ Vị Cơ Thể Kết Hợp Laser Và Kim Loại
function addMixedMetalLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

// Export all functions
export {
    addFullLaserBody,
    addWaveLaserSoftBody,
    addMetalLaserRadiantBody,
    addElegantLaceBody,
    addBrightLaserBody,
    addMixedMetalLaserBody
};
