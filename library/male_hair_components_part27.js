// Male Hair Components - Part 27
// This file contains various male hair styling components for 3D character models

function addBoldLaserSpikeHair(character) {
    const laserSpike = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.3, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserSpike.position.set(0, 5.5, 0);
    character.add(laserSpike);
}

function addWavyMaleLongHair(character) {
    const wavyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    wavyHair.position.set(0, 4.7, -0.3);

    const mirroredWavyHair = wavyHair.clone();
    mirroredWavyHair.position.set(0, 4.7, 0.3);

    character.add(wavyHair);
    character.add(mirroredWavyHair);
}

function addEdgyNose(character) {
    const edgyNose = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xD2691E })
    );
    edgyNose.position.set(0, 4.5, 0.8);
    edgyNose.rotation.x = Math.PI / 8;
    character.add(edgyNose);
}

function addLayeredLaserHair(character) {
    const laserLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
            transparent: true,
        })
    );
    laserLayer.position.set(0, 5, -0.2);

    const secondLayer = laserLayer.clone();
    secondLayer.position.set(0, 5.5, -0.2);

    character.add(laserLayer);
    character.add(secondLayer);
}

function addMetalFramedLaserEyes(character) {
    const laserEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserEye.position.set(0.6, 4.8, 0.7);

    const metallicFrame = new THREE.Mesh(
        new THREE.RingGeometry(0.35, 0.4, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
        })
    );
    metallicFrame.position.set(0.6, 4.8, 0.7);
    laserEye.add(metallicFrame);

    const mirroredLaserEye = laserEye.clone();
    mirroredLaserEye.position.set(-0.6, 4.8, 0.7);

    character.add(laserEye);
    character.add(mirroredLaserEye);
}

function addAngularMetalHair(character) {
    const metalLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalLayer.position.set(0, 4.7, -0.2);

    const mirroredLayer = metalLayer.clone();
    mirroredLayer.position.set(0, 4.7, 0.2);

    character.add(metalLayer);
    character.add(mirroredLayer);
}

function addSquareLightEyes(character) {
    const squareEye = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.1),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    squareEye.position.set(0.6, 4.8, 0.7);

    const mirroredSquareEye = squareEye.clone();
    mirroredSquareEye.position.set(-0.6, 4.8, 0.7);

    character.add(squareEye);
    character.add(mirroredSquareEye);
}

function addMetalShinyMouth(character) {
    const shinyMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    shinyMouth.position.set(0, 4.3, 0.8);
    character.add(shinyMouth);
}

function addHighLayeredLaserHair(character) {
    const laserLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
            transparent: true,
        })
    );
    laserLayer.position.set(0, 5, -0.2);

    const secondLayer = laserLayer.clone();
    secondLayer.position.set(0, 5.5, -0.2);

    character.add(laserLayer);
    character.add(secondLayer);
}

function addLaserPointNose(character) {
    const laserPoint = new THREE.Mesh(
        new THREE.ConeGeometry(0.1, 0.3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserPoint.position.set(0, 4.5, 0.8);
    laserPoint.rotation.x = Math.PI / 8;
    character.add(laserPoint);
}

function addLaserRayEyes(character) {
    const laserRay = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.2),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    laserRay.position.set(0.6, 4.8, 0.7);

    const mirroredLaserRay = laserRay.clone();
    mirroredLaserRay.position.set(-0.6, 4.8, 0.7);

    character.add(laserRay);
    character.add(mirroredLaserRay);
}

function addBoldLaserMouth(character) {
    const laserMouth = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 3.0,
        })
    );
    laserMouth.position.set(0, 4.3, 0.8);
    character.add(laserMouth);
}

function addFluffyMaleHair(character) {
    const fluffyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    fluffyLayer.position.set(0, 4.7, -0.2);

    const mirroredFluffyLayer = fluffyLayer.clone();
    mirroredFluffyLayer.position.set(0, 4.7, 0.2);

    character.add(fluffyLayer);
    character.add(mirroredFluffyLayer);
}

function addGlowFramedMouth(character) {
    const glowFrame = new THREE.Mesh(
        new THREE.RingGeometry(0.6, 0.7, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    glowFrame.position.set(0, 4.3, 0.9);
    character.add(glowFrame);
}

function addMetallicGlowHair(character) {
    const metallicGlowLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xC0C0C0,
            emissiveIntensity: 1.8,
            metalness: 1.0,
        })
    );
    metallicGlowLayer.position.set(0, 4.7, -0.2);

    const mirroredMetallicGlowLayer = metallicGlowLayer.clone();
    mirroredMetallicGlowLayer.position.set(0, 4.7, 0.2);

    character.add(metallicGlowLayer);
    character.add(mirroredMetallicGlowLayer);
}

function addLaserEars(character) {
    const laserEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    laserEar.position.set(1.2, 4.5, 0.3);

    const mirroredLaserEar = laserEar.clone();
    mirroredLaserEar.position.set(-1.2, 4.5, 0.3);

    character.add(laserEar);
    character.add(mirroredLaserEar);
}

function addMetallicSparklingEyes(character) {
    const metallicSparkle = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.1,
        })
    );
    metallicSparkle.position.set(0.6, 4.8, 0.7);

    const mirroredMetallicSparkle = metallicSparkle.clone();
    mirroredMetallicSparkle.position.set(-0.6, 4.8, 0.7);

    character.add(metallicSparkle);
    character.add(mirroredMetallicSparkle);
}

function addLaserConeHair(character) {
    const laserCone = new THREE.Mesh(
        new THREE.ConeGeometry(0.3, 1, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
            transparent: true,
        })
    );
    laserCone.position.set(0, 5, 0);
    character.add(laserCone);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addBoldLaserSpikeHair,
        addWavyMaleLongHair,
        addEdgyNose,
        addLayeredLaserHair,
        addMetalFramedLaserEyes,
        addAngularMetalHair,
        addSquareLightEyes,
        addMetalShinyMouth,
        addHighLayeredLaserHair,
        addLaserPointNose,
        addLaserRayEyes,
        addBoldLaserMouth,
        addFluffyMaleHair,
        addGlowFramedMouth,
        addMetallicGlowHair,
        addLaserEars,
        addMetallicSparklingEyes,
        addLaserConeHair
    };
}
