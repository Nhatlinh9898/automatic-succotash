// Face and Head Components Library - Part 21
// Various character face and head accessories with futuristic designs

/**
 * Adds a neon face outline for futuristic style
 * @param {THREE.Group} character - The character group to add the face to
 */
function addNeonFace(character) {
    const neonOutline = new THREE.Mesh(
        new THREE.CircleGeometry(1, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    neonOutline.position.set(0, 3, 0);
    character.add(neonOutline);
}

/**
 * Adds a head with metal pattern engravings
 * @param {THREE.Group} character - The character group to add the head to
 */
function addMetalPatternHead(character) {
    const headBase = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );

    const engraving = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            opacity: 0.8,
            transparent: true,
        })
    );
    engraving.position.set(0.5, 0.8, 1.5);
    headBase.add(engraving);

    character.add(headBase);
}

/**
 * Adds laser hair strips for striking appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addLaserHair(character) {
    const laserStrips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.2, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserStrips.position.set(0, 4, 0.5);
    character.add(laserStrips);

    const mirroredLaserStrips = laserStrips.clone();
    mirroredLaserStrips.position.set(0, 4, -0.5);
    character.add(mirroredLaserStrips);
}

/**
 * Adds a metallic mask with reflective surface
 * @param {THREE.Group} character - The character group to add the mask to
 */
function addMetallicMask(character) {
    const mask = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 1.5, 32, 32, true),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    mask.position.set(0, 3, 0.1);
    mask.rotation.x = Math.PI / 2;
    character.add(mask);
}

/**
 * Adds a head with lace and crystal decorations
 * @param {THREE.Group} character - The character group to add the head to
 */
function addCrystalLaceHead(character) {
    const laceLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 1),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceLayer.position.set(0, 3.5, 0);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalDetail.position.set(0.5, 3.6, 0.3);
    laceLayer.add(crystalDetail);

    character.add(laceLayer);
}

/**
 * Adds a digital face with LED screen display
 * @param {THREE.Group} character - The character group to add the face to
 */
function addDigitalFace(character) {
    const digitalScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
        })
    );
    digitalScreen.position.set(0, 3.5, 0);
    character.add(digitalScreen);
}

/**
 * Adds a head with moving laser lines
 * @param {THREE.Group} character - The character group to add the head to
 */
function addLaserHead(character) {
    const laserLine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    laserLine.position.set(0, 4.5, 0);
    character.add(laserLine);
}

/**
 * Adds a transparent glass mask for mysterious look
 * @param {THREE.Group} character - The character group to add the mask to
 */
function addTransparentMask(character) {
    const transparentMask = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 1.5, 32, 32, true),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.5,
            transparent: true,
        })
    );
    transparentMask.position.set(0, 3, 0.1);
    transparentMask.rotation.x = Math.PI / 2;
    character.add(transparentMask);
}

/**
 * Adds a head with patterned laser designs
 * @param {THREE.Group} character - The character group to add the head to
 */
function addPatternedLaserHead(character) {
    const laserPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
            opacity: 0.8,
            transparent: true,
        })
    );
    laserPattern.position.set(0, 3.5, 0.3);
    character.add(laserPattern);
}

/**
 * Adds crystal hair for sparkling effect
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addCrystalHair(character) {
    const crystalLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalLayer.position.set(0, 4.5, 0.2);
    character.add(crystalLayer);
}

/**
 * Adds a face with dynamic moving lighting
 * @param {THREE.Group} character - The character group to add the face to
 */
function addDynamicLightingFace(character) {
    const lightRing = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    lightRing.rotation.x = Math.PI / 2;
    lightRing.position.set(0, 3.5, 0);
    character.add(lightRing);
}

/**
 * Adds a crystal head for striking appearance
 * @param {THREE.Group} character - The character group to add the head to
 */
function addCrystalHead(character) {
    const crystalLayer = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalLayer.position.set(0, 4.5, 0);
    character.add(crystalLayer);
}

/**
 * Adds metallic hair with reflective strands
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addMetallicHair(character) {
    const metalStrand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalStrand.position.set(0.3, 4.5, 0.5);
    character.add(metalStrand);

    const mirroredStrand = metalStrand.clone();
    mirroredStrand.position.set(-0.3, 4.5, 0.5);
    character.add(mirroredStrand);
}

/**
 * Adds a crystal mask with soft glow
 * @param {THREE.Group} character - The character group to add the mask to
 */
function addCrystalMask(character) {
    const crystalMask = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32, Math.PI, Math.PI),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            opacity: 0.6,
            transparent: true,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalMask.position.set(0, 3, 0);
    character.add(crystalMask);
}

/**
 * Adds a head with engraved metal details
 * @param {THREE.Group} character - The character group to add the head to
 */
function addEngravedMetalHead(character) {
    const headBase = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            metalness: 1.0,
            roughness: 0.2,
        })
    );

    const engravedPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.6),
        new THREE.MeshStandardMaterial({
            color: 0xFF6347,
            opacity: 0.8,
            transparent: true,
        })
    );
    engravedPattern.position.set(0.6, 4, 0.7);
    headBase.add(engravedPattern);

    character.add(headBase);
}

/**
 * Adds layered laser hair for depth effect
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addLayeredLaserHair(character) {
    const laserLayer1 = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserLayer1.position.set(0, 4.5, 0.5);

    const laserLayer2 = laserLayer1.clone();
    laserLayer2.position.set(0, 4.5, 0.3);

    const laserLayer3 = laserLayer1.clone();
    laserLayer3.position.set(0, 4.5, 0.1);

    character.add(laserLayer1);
    character.add(laserLayer2);
    character.add(laserLayer3);
}

/**
 * Adds a face with glowing symbol
 * @param {THREE.Group} character - The character group to add the face to
 */
function addGlowingSymbolFace(character) {
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
            emissiveIntensity: 2.0,
        })
    );
    glowingSymbol.position.set(0.5, 4, 0.8);
    baseFace.add(glowingSymbol);

    character.add(baseFace);
}

/**
 * Adds a head covered with soft lace
 * @param {THREE.Group} character - The character group to add the head to
 */
function addLaceCoveredHead(character) {
    const laceLayer = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceLayer.position.set(0, 4, 0);
    character.add(laceLayer);
}

/**
 * Adds flowing hair with light streams
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addFlowingHair(character) {
    const flowingLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.8,
            transparent: true,
        })
    );
    flowingLayer.position.set(0, 4.5, 0);
    flowingLayer.rotation.z = Math.PI / 6;

    const mirroredLayer = flowingLayer.clone();
    mirroredLayer.position.set(0, 4.5, -0.5);
    mirroredLayer.rotation.z = -Math.PI / 6;

    character.add(flowingLayer);
    character.add(mirroredLayer);
}

/**
 * Adds a tinted glass mask for elegant look
 * @param {THREE.Group} character - The character group to add the mask to
 */
function addTintedGlassMask(character) {
    const tintedMask = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 1.5, 32, 32, true),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            opacity: 0.6,
            transparent: true,
        })
    );
    tintedMask.position.set(0, 3, 0.1);
    tintedMask.rotation.x = Math.PI / 2;
    character.add(tintedMask);
}

/**
 * Adds wavy hair with smooth flowing lines
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addWavyHair(character) {
    const waveLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            color: 0xF08080,
            opacity: 0.8,
            transparent: true,
        })
    );
    waveLayer.position.set(0, 4.5, 0.5);
    waveLayer.rotation.z = Math.PI / 6;

    const mirroredLayer = waveLayer.clone();
    mirroredLayer.position.set(0, 4.5, -0.5);
    mirroredLayer.rotation.z = -Math.PI / 6;

    character.add(waveLayer);
    character.add(mirroredLayer);
}

/**
 * Adds a head with diagonal light lines
 * @param {THREE.Group} character - The character group to add the head to
 */
function addDiagonalLightHead(character) {
    const diagonalLight = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    diagonalLight.position.set(0.5, 4.5, 0.5);
    diagonalLight.rotation.z = Math.PI / 4;

    const mirroredLight = diagonalLight.clone();
    mirroredLight.position.set(-0.5, 4.5, -0.5);
    mirroredLight.rotation.z = -Math.PI / 4;

    character.add(diagonalLight);
    character.add(mirroredLight);
}

/**
 * Adds a laser mask with mesh design
 * @param {THREE.Group} character - The character group to add the mask to
 */
function addMeshLaserMask(character) {
    const laserMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
            opacity: 0.9,
            transparent: true,
        })
    );
    laserMesh.position.set(0, 3.5, 0.3);
    character.add(laserMesh);
}

/**
 * Adds hair with multicolor glowing effect
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addMulticolorGlowHair(character) {
    const hairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 2.0,
            opacity: 0.9,
            transparent: true,
        })
    );
    hairLayer.position.set(0, 4.5, 0.5);

    const mirroredLayer = hairLayer.clone();
    mirroredLayer.position.set(0, 4.5, -0.5);

    character.add(hairLayer);
    character.add(mirroredLayer);
}
