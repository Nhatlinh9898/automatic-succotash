// Facial Features Components - Part 25
// Library of various facial features including eyes, lips, nose, and face shapes

// Face Shapes
// 717. Angular Face (Male)
function addAngularFace(character) {
    const angularFace = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            metalness: 0.3,
            roughness: 0.5,
        })
    );
    angularFace.position.set(0, 4.5, 0);
    character.add(angularFace);
}

// Eyes Components
// 719. Metal Bright Eyes (Male)
function addMetalBrightEyes(character) {
    const brightEye = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.1,
        })
    );
    brightEye.position.set(0.6, 4.8, 0.7);

    const mirroredBrightEye = brightEye.clone();
    mirroredBrightEye.position.set(-0.6, 4.8, 0.7);

    character.add(brightEye);
    character.add(mirroredBrightEye);
}

// 727. Laser Outlined Eyes (Male)
function addLaserOutlinedEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.4, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.5,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

// 734. Laser Pattern Eyes (Female)
function addLaserPatternEyes(character) {
    const laserPatternEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.4, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    laserPatternEye.position.set(0.6, 4.8, 0.7);

    const mirroredLaserPatternEye = laserPatternEye.clone();
    mirroredLaserPatternEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserPatternEye);
    character.add(mirroredLaserPatternEye);
}

// 746. Shimmering Outlined Eyes (Female)
function addShimmeringOutlinedEyes(character) {
    const shimmeringEyes = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x87CEEB,
            emissiveIntensity: 2.0,
        })
    );
    shimmeringEyes.position.set(0.6, 4.8, 0.7);

    const mirroredShimmeringEyes = shimmeringEyes.clone();
    mirroredShimmeringEyes.position.set(-0.6, 4.8, 0.7);

    character.add(shimmeringEyes);
    character.add(mirroredShimmeringEyes);
}

// 749. Edgy Eyes (Male)
function addEdgyEyes(character) {
    const edgyEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x0000FF })
    );
    edgyEye.position.set(0.6, 4.8, 0.7);
    edgyEye.rotation.z = Math.PI / 8;

    const mirroredEdgyEye = edgyEye.clone();
    mirroredEdgyEye.position.set(-0.6, 4.8, 0.7);
    mirroredEdgyEye.rotation.z = -Math.PI / 8;

    character.add(edgyEye);
    character.add(mirroredEdgyEye);
}

// 753. Mesh Pattern Eyes (Male)
function addMeshPatternEyes(character) {
    const meshEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshEye.position.set(0.6, 4.8, 0.7);

    const mirroredMeshEye = meshEye.clone();
    mirroredMeshEye.position.set(-0.6, 4.8, 0.7);

    character.add(meshEye);
    character.add(mirroredMeshEye);
}

// Lips Components
// 718. Bold Lips (Female)
function addBoldLips(character) {
    const boldLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xFF1493 })
    );
    boldLips.position.set(0, 4.3, 0.8);
    character.add(boldLips);
}

// 724. Classic Metallic Lips (Female)
function addClassicMetallicLips(character) {
    const metallicLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 0.8,
            roughness: 0.2,
        })
    );
    metallicLips.position.set(0, 4.3, 0.8);
    character.add(metallicLips);
}

// 729. Metal Framed Mouth (Male)
function addMetalFramedMouth(character) {
    const framedMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xD2691E,
            metalness: 0.7,
            roughness: 0.3,
        })
    );
    framedMouth.position.set(0, 4.3, 0.8);
    character.add(framedMouth);
}

// 737. Wavy Mouth (Male)
function addWavyMouth(character) {
    const wavyMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    wavyMouth.position.set(0, 4.3, 0.8);
    wavyMouth.rotation.z = Math.PI / 12;
    character.add(wavyMouth);
}

// 743. Smiling Wide Mouth (Male)
function addSmilingWideMouth(character) {
    const smilingMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.9, 0.4),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    smilingMouth.position.set(0, 4.3, 0.8);
    character.add(smilingMouth);
}

// Nose Components
// 723. Tiny Nose (Male)
function addTinyNose(character) {
    const tinyNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.1, 0.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    tinyNose.position.set(0, 4.5, 0.8);
    character.add(tinyNose);
}

// 735. Blocky Nose (Male)
function addBlockyNose(character) {
    const blockNose = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.4, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    blockNose.position.set(0, 4.5, 0.8);
    character.add(blockNose);
}

// 752. Mesh Pattern Eyes (duplicate function name - keeping for consistency)
function addMeshPatternEyes(character) {
    const meshEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshEye.position.set(0.6, 4.8, 0.7);

    const mirroredMeshEye = meshEye.clone();
    mirroredMeshEye.position.set(-0.6, 4.8, 0.7);

    character.add(meshEye);
    character.add(mirroredMeshEye);
}

export {
    // Face Shapes
    addAngularFace,
    
    // Eyes
    addMetalBrightEyes,
    addLaserOutlinedEyes,
    addLaserPatternEyes,
    addShimmeringOutlinedEyes,
    addEdgyEyes,
    addMeshPatternEyes,
    
    // Lips
    addBoldLips,
    addClassicMetallicLips,
    addMetalFramedMouth,
    addWavyMouth,
    addSmilingWideMouth,
    
    // Nose
    addTinyNose,
    addBlockyNose
};
