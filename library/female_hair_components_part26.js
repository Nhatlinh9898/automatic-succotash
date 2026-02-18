// Female Hair Components - Part 26
// Various hair designs for female 3D characters

/**
 * Adds bold short curls for a natural and charismatic appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addBoldShortCurls(character) {
    const boldCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    boldCurls.position.set(0, 4.7, -0.3);

    const mirroredBoldCurls = boldCurls.clone();
    mirroredBoldCurls.position.set(0, 4.7, 0.3);

    character.add(boldCurls);
    character.add(mirroredBoldCurls);
}

/**
 * Adds wavy glowing hair with a coral glow for a mystical style
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addWavyGlowingHair(character) {
    const glowingWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFA07A,
            emissiveIntensity: 1.4,
            transparent: true,
            opacity: 0.9,
        })
    );
    glowingWaves.position.set(0, 4.5, -0.3);

    const mirroredWaves = glowingWaves.clone();
    mirroredWaves.position.set(0, 4.5, 0.3);

    character.add(glowingWaves);
    character.add(mirroredWaves);
}

/**
 * Adds half-up hair for a graceful and charming style
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addHalfUpHair(character) {
    const halfUpLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.9,
            transparent: true,
        })
    );
    halfUpLayer.position.set(0, 4.7, -0.3);

    const mirroredHalfUpLayer = halfUpLayer.clone();
    mirroredHalfUpLayer.position.set(0, 4.7, 0.3);

    character.add(halfUpLayer);
    character.add(mirroredHalfUpLayer);
}

/**
 * Adds short glowing hair with a soft pink glow for a delicate look
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addShortGlowingHair(character) {
    const glowingShortLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    glowingShortLayer.position.set(0, 4.7, -0.3);

    const mirroredGlowingShortLayer = glowingShortLayer.clone();
    mirroredGlowingShortLayer.position.set(0, 4.7, 0.3);

    character.add(glowingShortLayer);
    character.add(mirroredGlowingShortLayer);
}

/**
 * Adds bright long tail hair for a mystical and elegant appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addBrightLongTailHair(character) {
    const longTailHair = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 1.8,
            transparent: true,
        })
    );
    longTailHair.position.set(0, 4.5, -0.5);

    character.add(longTailHair);
}

/**
 * Adds circular layered hair with a modern and elegant style
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addCircularLayeredHair(character) {
    const circularHair = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.2, 16, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            metalness: 0.3,
            roughness: 0.6,
        })
    );
    circularHair.position.set(0, 4.8, -0.3);
    character.add(circularHair);
}

/**
 * Adds crystal decorated hair with sparkling details for a magical look
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addCrystalDecoratedHair(character) {
    const crystalHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    crystalHair.position.set(0, 4.5, -0.3);

    const crystalDetail = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xE0FFFF,
            emissive: 0x87CEEB,
            emissiveIntensity: 1.5,
        })
    );
    crystalDetail.position.set(0.5, 4.8, 0.3);
    crystalHair.add(crystalDetail);

    character.add(crystalHair);
}

/**
 * Adds shimmering short curls with a soft glow for a luxurious appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addShimmeringShortCurls(character) {
    const shimmeringCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    shimmeringCurls.position.set(0, 4.7, -0.3);

    const mirroredShimmeringCurls = shimmeringCurls.clone();
    mirroredShimmeringCurls.position.set(0, 4.7, 0.3);

    character.add(shimmeringCurls);
    character.add(mirroredShimmeringCurls);
}

/**
 * Adds radiant braided hair with a pink glow for a graceful style
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addRadiantBraidedHair(character) {
    const braidedHair = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.8,
        })
    );
    braidedHair.position.set(0.5, 3.5, -0.2);

    const mirroredBraidedHair = braidedHair.clone();
    mirroredBraidedHair.position.set(-0.5, 3.5, -0.2);

    character.add(braidedHair);
    character.add(mirroredBraidedHair);
}

/**
 * Adds gentle wavy layered hair for a soft and feminine appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addGentleWavyLayerHair(character) {
    const gentleWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.8,
            transparent: true,
        })
    );
    gentleWaves.position.set(0, 4.5, -0.3);

    const mirroredWaves = gentleWaves.clone();
    mirroredWaves.position.set(0, 4.5, 0.3);

    character.add(gentleWaves);
    character.add(mirroredWaves);
}

/**
 * Adds elegant braids for a classic and sophisticated style
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addElegantBraids(character) {
    const braidedHair = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    braidedHair.position.set(0.5, 3.5, -0.2);

    const mirroredBraidedHair = braidedHair.clone();
    mirroredBraidedHair.position.set(-0.5, 3.5, -0.2);

    character.add(braidedHair);
    character.add(mirroredBraidedHair);
}

/**
 * Adds radiant wavy hair with a soft pink glow for a magical appearance
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addRadiantWavyHair(character) {
    const radiantWaves = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFB6C1,
            emissiveIntensity: 1.2,
            transparent: true,
            opacity: 0.8,
        })
    );
    radiantWaves.position.set(0, 4.5, -0.3);

    const mirroredRadiantWaves = radiantWaves.clone();
    mirroredRadiantWaves.position.set(0, 4.5, 0.3);

    character.add(radiantWaves);
    character.add(mirroredRadiantWaves);
}

/**
 * Adds intricate braided hair for an elegant and detailed style
 * @param {THREE.Group} character - The character group to add the hair to
 */
function addIntricateBraidedHair(character) {
    const braidedLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    braidedLayer.position.set(0.5, 3.5, -0.2);

    const mirroredBraidedLayer = braidedLayer.clone();
    mirroredBraidedLayer.position.set(-0.5, 3.5, -0.2);

    character.add(braidedLayer);
    character.add(mirroredBraidedLayer);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addBoldShortCurls,
        addWavyGlowingHair,
        addHalfUpHair,
        addShortGlowingHair,
        addBrightLongTailHair,
        addCircularLayeredHair,
        addCrystalDecoratedHair,
        addShimmeringShortCurls,
        addRadiantBraidedHair,
        addGentleWavyLayerHair,
        addElegantBraids,
        addRadiantWavyHair,
        addIntricateBraidedHair
    };
}
