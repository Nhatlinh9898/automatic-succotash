// Female Hair Components - Part 27
// This file contains various female hair styling components for 3D character models

/**
 * Adds square laser hair design with futuristic style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSquareLaserHair(character) {
    const laserSquare = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 2, 0.1),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    laserSquare.position.set(0, 4.7, -0.3);

    const mirroredLaserSquare = laserSquare.clone();
    mirroredLaserSquare.position.set(0, 4.7, 0.3);

    character.add(laserSquare);
    character.add(mirroredLaserSquare);
}

/**
 * Adds angular short female hair with stylish and personality-filled design
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addAngularShortFemaleHair(character) {
    const angularHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    angularHair.position.set(0, 4.7, -0.3);

    const mirroredAngularHair = angularHair.clone();
    mirroredAngularHair.position.set(0, 4.7, 0.3);

    character.add(angularHair);
    character.add(mirroredAngularHair);
}

/**
 * Adds shimmering braided hair with elegant and graceful glow
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addShimmeringBraidedHair(character) {
    const braidedLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
        })
    );
    braidedLayer.position.set(0.5, 3.8, -0.3);

    const mirroredBraidedLayer = braidedLayer.clone();
    mirroredBraidedLayer.position.set(-0.5, 3.8, -0.3);

    character.add(braidedLayer);
    character.add(mirroredBraidedLayer);
}

/**
 * Adds metallic long hair with shiny and impressive appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addMetallicLongHair(character) {
    const metallicHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicHair.position.set(0, 4.5, -0.3);

    const mirroredMetallicHair = metallicHair.clone();
    mirroredMetallicHair.position.set(0, 4.5, 0.3);

    character.add(metallicHair);
    character.add(mirroredMetallicHair);
}

/**
 * Adds fluffy short hair creating innocent and cute appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addFluffyShortHair(character) {
    const fluffyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    fluffyHair.position.set(0, 4.7, -0.3);

    const mirroredFluffyHair = fluffyHair.clone();
    mirroredFluffyHair.position.set(0, 4.7, 0.3);

    character.add(fluffyHair);
    character.add(mirroredFluffyHair);
}

/**
 * Adds high ponytail creating focused and elegant appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addHighPonytail(character) {
    const ponytail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    ponytail.position.set(0, 5, -0.4);
    character.add(ponytail);
}

/**
 * Adds lace long hair with delicate lace trim for graceful and noble appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addLaceLongHair(character) {
    const laceHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceHair.position.set(0, 4.5, -0.3);

    const mirroredLaceHair = laceHair.clone();
    mirroredLaceHair.position.set(0, 4.5, 0.3);

    character.add(laceHair);
    character.add(mirroredLaceHair);
}

/**
 * Adds shimmering metallic lips with impressive and attractive appearance
 * @param {THREE.Object3D} character - The character object to add lips to
 */
function addShimmeringMetallicLips(character) {
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

/**
 * Adds glowing layered female hair with modern and creative style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addGlowingLayeredFemaleHair(character) {
    const glowingLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    glowingLayer.position.set(0, 4.5, -0.3);

    const mirroredGlowingLayer = glowingLayer.clone();
    mirroredGlowingLayer.position.set(0, 4.5, 0.3);

    character.add(glowingLayer);
    character.add(mirroredGlowingLayer);
}

/**
 * Adds radiant curly hair with modern and attractive glow
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addRadiantCurlyHair(character) {
    const radiantCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    radiantCurls.position.set(0, 4.7, -0.3);

    const mirroredRadiantCurls = radiantCurls.clone();
    mirroredRadiantCurls.position.set(0, 4.7, 0.3);

    character.add(radiantCurls);
    character.add(mirroredRadiantCurls);
}

/**
 * Adds metallic female long hair with smooth and impressive appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addMetallicFemaleLongHair(character) {
    const metallicHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicHairLayer.position.set(0, 4.5, -0.3);

    const mirroredMetallicHairLayer = metallicHairLayer.clone();
    mirroredMetallicHairLayer.position.set(0, 4.5, 0.3);

    character.add(metallicHairLayer);
    character.add(mirroredMetallicHairLayer);
}

/**
 * Adds radiant ponytail with mysterious and feminine glow
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addRadiantPonytail(character) {
    const ponytail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    ponytail.position.set(0, 5, -0.3);
    character.add(ponytail);
}

/**
 * Adds sparkling long hair with feminine style details
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSparklingLongHair(character) {
    const sparklingLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    sparklingLayer.position.set(0, 4.5, -0.3);

    const mirroredSparklingLayer = sparklingLayer.clone();
    mirroredSparklingLayer.position.set(0, 4.5, 0.3);

    character.add(sparklingLayer);
    character.add(mirroredSparklingLayer);
}

/**
 * Adds angular short hair with stylish appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addAngularShortHair(character) {
    const angularLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    angularLayer.position.set(0, 4.7, -0.3);

    const mirroredAngularLayer = angularLayer.clone();
    mirroredAngularLayer.position.set(0, 4.7, 0.3);

    character.add(angularLayer);
    character.add(mirroredAngularLayer);
}

/**
 * Adds crystal ear decorated with sparkling crystal for elegant appearance
 * @param {THREE.Object3D} character - The character object to add ears to
 */
function addCrystalEar(character) {
    const crystalEar = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    crystalEar.position.set(1.2, 4.5, 0.3);

    const mirroredCrystalEar = crystalEar.clone();
    mirroredCrystalEar.position.set(-1.2, 4.5, 0.3);

    character.add(crystalEar);
    character.add(mirroredCrystalEar);
}

/**
 * Adds radiant layered hair with divine glow
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addRadiantLayeredHair(character) {
    const radiantLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.9,
        })
    );
    radiantLayer.position.set(0, 4.5, -0.3);

    const mirroredRadiantLayer = radiantLayer.clone();
    mirroredRadiantLayer.position.set(0, 4.5, 0.3);

    character.add(radiantLayer);
    character.add(mirroredRadiantLayer);
}

/**
 * Adds radiant long curly hair with elegant and graceful glow
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addRadiantLongCurlyHair(character) {
    const radiantCurlyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    radiantCurlyLayer.position.set(0, 4.5, -0.3);

    const mirroredRadiantCurlyLayer = radiantCurlyLayer.clone();
    mirroredRadiantCurlyLayer.position.set(0, 4.5, 0.3);

    character.add(radiantCurlyLayer);
    character.add(mirroredRadiantCurlyLayer);
}

/**
 * Adds voluminous layered hair creating feminine and graceful appearance
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addVoluminousLayeredHair(character) {
    const voluminousHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.8,
            transparent: true,
        })
    );
    voluminousHair.position.set(0, 4.5, -0.3);

    const mirroredVoluminousHair = voluminousHair.clone();
    mirroredVoluminousHair.position.set(0, 4.5, 0.3);

    character.add(voluminousHair);
    character.add(mirroredVoluminousHair);
}

/**
 * Adds petal glow lips with soft glow creating attractive appearance
 * @param {THREE.Object3D} character - The character object to add lips to
 */
function addPetalGlowLips(character) {
    const petalLips = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.5,
        })
    );
    petalLips.position.set(0, 4.3, 0.8);
    character.add(petalLips);
}

/**
 * Adds silky curly hair with fine silk-like texture for delicate style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSilkyCurlyHair(character) {
    const silkyCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    silkyCurls.position.set(0, 4.7, -0.3);

    const mirroredSilkyCurls = silkyCurls.clone();
    mirroredSilkyCurls.position.set(0, 4.7, 0.3);

    character.add(silkyCurls);
    character.add(mirroredSilkyCurls);
}

/**
 * Adds laser layered female hair with mysterious glow
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addLaserLayeredFemaleHair(character) {
    const laserLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    laserLayer.position.set(0, 4.5, -0.3);

    const mirroredLaserLayer = laserLayer.clone();
    mirroredLaserLayer.position.set(0, 4.5, 0.3);

    character.add(laserLayer);
    character.add(mirroredLaserLayer);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSquareLaserHair,
        addAngularShortFemaleHair,
        addShimmeringBraidedHair,
        addMetallicLongHair,
        addFluffyShortHair,
        addHighPonytail,
        addLaceLongHair,
        addShimmeringMetallicLips,
        addGlowingLayeredFemaleHair,
        addRadiantCurlyHair,
        addMetallicFemaleLongHair,
        addRadiantPonytail,
        addSparklingLongHair,
        addAngularShortHair,
        addCrystalEar,
        addRadiantLayeredHair,
        addRadiantLongCurlyHair,
        addVoluminousLayeredHair,
        addPetalGlowLips,
        addSilkyCurlyHair,
        addLaserLayeredFemaleHair
    };
}
