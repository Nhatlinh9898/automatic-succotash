// Female Facial Features - Part 24
// Various facial features for female characters

// Almond eyes for elegant look
function addAlmondEyes(character) {
    const almondEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x87CEFA })
    );
    almondEye.position.set(0.6, 4.8, 0.7);

    const mirroredAlmondEye = almondEye.clone();
    mirroredAlmondEye.position.set(-0.6, 4.8, 0.7);

    character.add(almondEye);
    character.add(mirroredAlmondEye);
}

// Neon eyes for futuristic style
function addNeonEyes(character) {
    const neonEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonEye.position.set(0.6, 4.8, 0.7);

    const mirroredNeonEye = neonEye.clone();
    mirroredNeonEye.position.set(-0.6, 4.8, 0.7);

    character.add(neonEye);
    character.add(mirroredNeonEye);
}

// Subtle smile for gentle expression
function addSubtleSmile(character) {
    const subtleSmile = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    subtleSmile.position.set(0, 4.3, 0.8);
    subtleSmile.rotation.z = Math.PI / 16;
    character.add(subtleSmile);
}

// Heart shaped eyes for cute appearance
function addHeartShapedEyes(character) {
    const heartEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
    );
    heartEye.position.set(0.6, 4.8, 0.7);

    const mirroredHeartEye = heartEye.clone();
    mirroredHeartEye.position.set(-0.6, 4.8, 0.7);

    character.add(heartEye);
    character.add(mirroredHeartEye);
}

// Metallic lips for glamorous look
function addMetallicLips(character) {
    const metallicLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicLips.position.set(0, 4.3, 0.8);
    character.add(metallicLips);
}

// Long sparkling eyes for magical appearance
function addLongSparklingEyes(character) {
    const longSparklingEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0x87CEEB,
            emissiveIntensity: 2.5,
        })
    );
    longSparklingEye.position.set(0.6, 4.8, 0.7);

    const mirroredLongSparklingEye = longSparklingEye.clone();
    mirroredLongSparklingEye.position.set(-0.6, 4.8, 0.7);

    character.add(longSparklingEye);
    character.add(mirroredLongSparklingEye);
}

// Sweet lips for charming look
function addSweetLips(character) {
    const sweetLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xFFB6C1 })
    );
    sweetLips.position.set(0, 4.3, 0.8);
    character.add(sweetLips);
}

// Elegant eyes for sophisticated appearance
function addElegantEyes(character) {
    const elegantEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x87CEEB })
    );
    elegantEye.position.set(0.6, 4.8, 0.7);

    const mirroredElegantEye = elegantEye.clone();
    mirroredElegantEye.position.set(-0.6, 4.8, 0.7);

    character.add(elegantEye);
    character.add(mirroredElegantEye);
}

// Crystal outlined eyes for mystical look
function addCrystalOutlinedEyes(character) {
    const outlinedEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.4, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    outlinedEye.position.set(0.6, 4.8, 0.7);

    const mirroredOutlinedEye = outlinedEye.clone();
    mirroredOutlinedEye.position.set(-0.6, 4.8, 0.7);

    character.add(outlinedEye);
    character.add(mirroredOutlinedEye);
}

// Delicate ears for feminine appearance
function addDelicateEars(character) {
    const delicateEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.4, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    delicateEar.position.set(1.2, 4.5, 0.3);

    const mirroredDelicateEar = delicateEar.clone();
    mirroredDelicateEar.position.set(-1.2, 4.5, 0.3);

    character.add(delicateEar);
    character.add(mirroredDelicateEar);
}

export {
    addAlmondEyes,
    addNeonEyes,
    addSubtleSmile,
    addHeartShapedEyes,
    addMetallicLips,
    addLongSparklingEyes,
    addSweetLips,
    addElegantEyes,
    addCrystalOutlinedEyes,
    addDelicateEars
};
