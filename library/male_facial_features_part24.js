// Male Facial Features - Part 24
// Various facial features for male characters

// Thin beard for mature look
function addThinBeard(character) {
    const thinBeard = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    thinBeard.position.set(0, 4.2, 0.8);
    character.add(thinBeard);
}

// Arrow shaped eyes for fierce look
function addArrowShapedEyes(character) {
    const arrowEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    arrowEye.position.set(0.6, 4.8, 0.7);
    arrowEye.rotation.z = Math.PI / 6;

    const mirroredArrowEye = arrowEye.clone();
    mirroredArrowEye.position.set(-0.6, 4.8, 0.7);
    mirroredArrowEye.rotation.z = -Math.PI / 6;

    character.add(arrowEye);
    character.add(mirroredArrowEye);
}

// Sharp nose for strong appearance
function addSharpNose(character) {
    const sharpNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.2, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    sharpNose.position.set(0, 4.5, 0.8);
    sharpNose.rotation.x = Math.PI / 8;
    character.add(sharpNose);
}

// Triangular ears for unique style
function addTriangularEars(character) {
    const triangularEar = new THREE.Mesh(
        new THREE.ConeGeometry(0.5, 1, 16),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    triangularEar.position.set(1.3, 4.5, 0.3);
    triangularEar.rotation.z = Math.PI / 8;

    const mirroredTriangularEar = triangularEar.clone();
    mirroredTriangularEar.position.set(-1.3, 4.5, 0.3);
    mirroredTriangularEar.rotation.z = -Math.PI / 8;

    character.add(triangularEar);
    character.add(mirroredTriangularEar);
}

// Wide mouth for expressive face
function addWideMouth(character) {
    const wideMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    wideMouth.position.set(0, 4.3, 0.8);
    character.add(wideMouth);
}

// Robot eyes for futuristic look
function addRobotEyes(character) {
    const robotEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 3.0,
        })
    );
    robotEye.position.set(0.6, 4.8, 0.7);

    const mirroredRobotEye = robotEye.clone();
    mirroredRobotEye.position.set(-0.6, 4.8, 0.7);

    character.add(robotEye);
    character.add(mirroredRobotEye);
}

// Robot nose for sci-fi style
function addRobotNose(character) {
    const robotNose = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.2, 0.4, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    robotNose.position.set(0, 4.5, 0.8);
    character.add(robotNose);
}

// Glowing ears for mystical appearance
function addGlowingEars(character) {
    const glowingEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    glowingEar.position.set(1.2, 4.5, 0.3);

    const mirroredGlowingEar = glowingEar.clone();
    mirroredGlowingEar.position.set(-1.2, 4.5, 0.3);

    character.add(glowingEar);
    character.add(mirroredGlowingEar);
}

// Oval eyes for mysterious look
function addOvalEyes(character) {
    const ovalEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x00FFFF })
    );
    ovalEye.position.set(0.6, 4.8, 0.7);

    const mirroredOvalEye = ovalEye.clone();
    mirroredOvalEye.position.set(-0.6, 4.8, 0.7);

    character.add(ovalEye);
    character.add(mirroredOvalEye);
}

// Polygonal glasses for stylish look
function addPolygonalGlasses(character) {
    const glasses = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.6),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.8,
            transparent: true,
        })
    );
    glasses.position.set(0, 4.8, 0.7);
    glasses.rotation.z = Math.PI / 12;
    character.add(glasses);
}

// Cone shaped nose for distinctive appearance
function addConeShapedNose(character) {
    const coneNose = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    coneNose.position.set(0, 4.5, 0.8);
    coneNose.rotation.x = Math.PI / 8;
    character.add(coneNose);
}

// Diamond shaped ears for fantasy style
function addDiamondShapedEars(character) {
    const diamondEar = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    diamondEar.position.set(1.3, 4.5, 0.3);
    diamondEar.rotation.z = Math.PI / 6;

    const mirroredDiamondEar = diamondEar.clone();
    mirroredDiamondEar.position.set(-1.3, 4.5, 0.3);
    mirroredDiamondEar.rotation.z = -Math.PI / 6;

    character.add(diamondEar);
    character.add(mirroredDiamondEar);
}

// Compact mouth for subtle expression
function addCompactMouth(character) {
    const compactMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    compactMouth.position.set(0, 4.3, 0.8);
    character.add(compactMouth);
}

// Semi-circle glasses for retro style
function addSemiCircleGlasses(character) {
    const glasses = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.4),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.8,
            transparent: true,
        })
    );
    glasses.position.set(0, 4.8, 0.7);
    glasses.rotation.z = Math.PI / 8;
    character.add(glasses);
}

// Large oval nose for prominent feature
function addLargeOvalNose(character) {
    const ovalNose = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    ovalNose.position.set(0, 4.5, 0.8);
    character.add(ovalNose);
}

// Confident smile for positive expression
function addConfidentSmile(character) {
    const confidentSmile = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    confidentSmile.position.set(0, 4.3, 0.8);
    character.add(confidentSmile);
}

export {
    addThinBeard,
    addArrowShapedEyes,
    addSharpNose,
    addTriangularEars,
    addWideMouth,
    addRobotEyes,
    addRobotNose,
    addGlowingEars,
    addOvalEyes,
    addPolygonalGlasses,
    addConeShapedNose,
    addDiamondShapedEars,
    addCompactMouth,
    addSemiCircleGlasses,
    addLargeOvalNose,
    addConfidentSmile
};
