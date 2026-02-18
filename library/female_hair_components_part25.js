// Female Hair Components - Part 25
// Library of various female hair styles and designs

// 712. Voluminous Hair
function addVoluminousHair(character) {
    const voluminousHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 3),
        new THREE.MeshStandardMaterial({
            color: 0xF08080,
            opacity: 0.9,
            transparent: true,
        })
    );
    voluminousHair.position.set(0, 4.5, -0.4);

    const mirroredHair = voluminousHair.clone();
    mirroredHair.position.set(0, 4.5, 0.4);

    character.add(voluminousHair);
    character.add(mirroredHair);
}

// 714. Silky Straight Hair
function addSilkyStraightHair(character) {
    const silkyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.95,
            transparent: true,
        })
    );
    silkyHair.position.set(0, 4.5, -0.3);

    const mirroredHair = silkyHair.clone();
    mirroredHair.position.set(0, 4.5, 0.3);

    character.add(silkyHair);
    character.add(mirroredHair);
}

// 716. Crystal Embellished Hair
function addCrystalEmbellishedHair(character) {
    const hairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    hairLayer.position.set(0, 4.5, -0.3);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.8,
        })
    );
    crystalDetail.position.set(0.5, 5, 0.2);
    hairLayer.add(crystalDetail);

    character.add(hairLayer);
}

// 720. Glowing Layered Hair
function addGlowingLayeredHair(character) {
    const glowingHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    glowingHair.position.set(0, 4.5, -0.3);

    const mirroredGlowingHair = glowingHair.clone();
    mirroredGlowingHair.position.set(0, 4.5, 0.3);

    character.add(glowingHair);
    character.add(mirroredGlowingHair);
}

// 722. Glitter Layered Hair
function addGlitterLayeredHair(character) {
    const glitterHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.2,
            transparent: true,
            opacity: 0.8,
        })
    );
    glitterHair.position.set(0, 4.5, -0.3);

    const mirroredGlitterHair = glitterHair.clone();
    mirroredGlitterHair.position.set(0, 4.5, 0.3);

    character.add(glitterHair);
    character.add(mirroredGlitterHair);
}

// 726. Curved Short Hair
function addCurvedShortHair(character) {
    const curvedLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2),
        new THREE.MeshStandardMaterial({
            color: 0xFFB6C1,
            opacity: 0.9,
            transparent: true,
        })
    );
    curvedLayer.position.set(0, 4.7, -0.3);

    const mirroredCurvedLayer = curvedLayer.clone();
    mirroredCurvedLayer.position.set(0, 4.7, 0.3);

    character.add(curvedLayer);
    character.add(mirroredCurvedLayer);
}

// 728. Star Glowing Eyes (can be used as hair accessory)
function addStarGlowingEyes(character) {
    const starEye = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x87CEEB,
            emissiveIntensity: 2.8,
        })
    );
    starEye.position.set(0.6, 4.8, 0.7);

    const mirroredStarEye = starEye.clone();
    mirroredStarEye.position.set(-0.6, 4.8, 0.7);

    character.add(starEye);
    character.add(mirroredStarEye);
}

// 730. Glowing Braided Hair
function addGlowingBraidedHair(character) {
    const braidedHair = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    braidedHair.position.set(0.5, 3.5, -0.2);

    const mirroredBraidedHair = braidedHair.clone();
    mirroredBraidedHair.position.set(-0.5, 3.5, -0.2);

    character.add(braidedHair);
    character.add(mirroredBraidedHair);
}

// 732. Layered Ponytail
function addLayeredPonytail(character) {
    const ponytailLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    ponytailLayer.position.set(0, 3.5, -0.5);

    character.add(ponytailLayer);
}

// 736. Gentle Glowing Hair
function addGentleGlowingHair(character) {
    const glowingLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.3,
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

// 740. Bright Braided Hair
function addBrightBraidedHair(character) {
    const braidedLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 1.8,
        })
    );
    braidedLayer.position.set(0.5, 3.5, -0.2);

    const mirroredBraidedLayer = braidedLayer.clone();
    mirroredBraidedLayer.position.set(-0.5, 3.5, -0.2);

    character.add(braidedLayer);
    character.add(mirroredBraidedLayer);
}

// 742. Soft Glowing Waves
function addSoftGlowingWaves(character) {
    const glowingWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFA07A,
            emissiveIntensity: 1.3,
            transparent: true,
            opacity: 0.8,
        })
    );
    glowingWaves.position.set(0, 4.5, -0.3);

    const mirroredWaves = glowingWaves.clone();
    mirroredWaves.position.set(0, 4.5, 0.3);

    character.add(glowingWaves);
    character.add(mirroredWaves);
}

// 744. Subtle Layered Waves
function addSubtleLayeredWaves(character) {
    const layeredWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    layeredWaves.position.set(0, 4.5, -0.3);

    const mirroredWaves = layeredWaves.clone();
    mirroredWaves.position.set(0, 4.5, 0.3);

    character.add(layeredWaves);
    character.add(mirroredWaves);
}

// 748. Special Curly Hair
function addSpecialCurlyHair(character) {
    const curlyHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
            opacity: 0.9,
            transparent: true,
        })
    );
    curlyHairLayer.position.set(0, 4.5, -0.3);

    const mirroredCurlyHair = curlyHairLayer.clone();
    mirroredCurlyHair.position.set(0, 4.5, 0.3);

    character.add(curlyHairLayer);
    character.add(mirroredCurlyHair);
}

// 750. Illuminated Straight Hair
function addIlluminatedStraightHair(character) {
    const illuminatedHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xF08080,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    illuminatedHair.position.set(0, 4.5, -0.3);

    const mirroredIlluminatedHair = illuminatedHair.clone();
    mirroredIlluminatedHair.position.set(0, 4.5, 0.3);

    character.add(illuminatedHair);
    character.add(mirroredIlluminatedHair);
}

// 752. Glowing Twisted Hair
function addGlowingTwistedHair(character) {
    const twistedHair = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.5,
        })
    );
    twistedHair.position.set(0.5, 3.5, -0.2);

    const mirroredTwistedHair = twistedHair.clone();
    mirroredTwistedHair.position.set(-0.5, 3.5, -0.2);

    character.add(twistedHair);
    character.add(mirroredTwistedHair);
}

// 754. Sparkling Layered Hair
function addSparklingLayeredHair(character) {
    const sparklingHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.2,
            transparent: true,
            opacity: 0.8,
        })
    );
    sparklingHair.position.set(0, 4.5, -0.3);

    const mirroredSparklingHair = sparklingHair.clone();
    mirroredSparklingHair.position.set(0, 4.5, 0.3);

    character.add(sparklingHair);
    character.add(mirroredSparklingHair);
}

export {
    addVoluminousHair,
    addSilkyStraightHair,
    addCrystalEmbellishedHair,
    addGlowingLayeredHair,
    addGlitterLayeredHair,
    addCurvedShortHair,
    addStarGlowingEyes,
    addGlowingBraidedHair,
    addLayeredPonytail,
    addGentleGlowingHair,
    addBrightBraidedHair,
    addSoftGlowingWaves,
    addSubtleLayeredWaves,
    addSpecialCurlyHair,
    addIlluminatedStraightHair,
    addGlowingTwistedHair,
    addSparklingLayeredHair
};
