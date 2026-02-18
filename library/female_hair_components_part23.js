/**
 * Female Hair Components Library - Part 23
 * Various hair styles and accessories for female characters
 * Compatible with Three.js
 */

// Import THREE if needed (uncomment if using as module)
// import * as THREE from 'three';

/**
 * Adds braided crown hair around the head for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addBraidedCrownHair(character) {
    const braid = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.15, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    braid.position.set(0, 4.8, 0);
    character.add(braid);
}

/**
 * Adds long curly hair for female characters with elegant style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addLongCurlyHair(character) {
    const curlyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xDA70D6,
            opacity: 0.8,
            transparent: true,
        })
    );
    curlyHair.position.set(0, 4.6, -0.3);
    curlyHair.rotation.z = Math.PI / 8;

    const mirroredHair = curlyHair.clone();
    mirroredHair.position.set(0, 4.6, 0.3);
    mirroredHair.rotation.z = -Math.PI / 8;

    character.add(curlyHair);
    character.add(mirroredHair);
}

/**
 * Adds flowing streak hair with soft, flowing design for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addFlowingStreakHair(character) {
    const streakHair = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 3),
        new THREE.MeshStandardMaterial({
            color: 0xF08080,
            opacity: 0.8,
            transparent: true,
        })
    );
    streakHair.position.set(0.5, 4.5, -0.3);

    const mirroredStreakHair = streakHair.clone();
    mirroredStreakHair.position.set(-0.5, 4.5, -0.3);

    character.add(streakHair);
    character.add(mirroredStreakHair);
}

/**
 * Adds shoulder length hair with elegant style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addShoulderLengthHair(character) {
    const hair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xF4A460,
            opacity: 0.9,
            transparent: true,
        })
    );
    hair.position.set(0, 4.6, -0.3);
    character.add(hair);
}

/**
 * Adds wavy hair with soft, feminine style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addWavyHair(character) {
    const waveLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFA07A,
            opacity: 0.9,
            transparent: true,
        })
    );
    waveLayer.position.set(0, 4.5, -0.5);

    const mirroredWaveLayer = waveLayer.clone();
    mirroredWaveLayer.position.set(0, 4.5, 0.5);
    character.add(waveLayer);
    character.add(mirroredWaveLayer);
}

/**
 * Adds straight bangs across the forehead for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addStraightBangs(character) {
    const bangs = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    bangs.position.set(0, 5, 0.5);
    character.add(bangs);
}

/**
 * Adds high ponytail for female characters with stylish look
 * @param {THREE.Group} character - The character group to add hair to
 */
function addHighPonytail(character) {
    const ponytail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    ponytail.position.set(0, 5.5, -0.3);
    ponytail.rotation.x = Math.PI / 4;

    character.add(ponytail);
}

/**
 * Adds pigtail braids on both sides for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addPigtailBraids(character) {
    const braid = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    braid.position.set(0.8, 3.5, -0.3);

    const mirroredBraid = braid.clone();
    mirroredBraid.position.set(-0.8, 3.5, -0.3);

    character.add(braid);
    character.add(mirroredBraid);
}

/**
 * Adds bob cut hair with modern style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addBobCutHair(character) {
    const bobHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({
            color: 0xFFA07A,
            opacity: 0.9,
            transparent: true,
        })
    );
    bobHair.position.set(0, 4.7, -0.3);
    character.add(bobHair);
}

/**
 * Adds cascading curls with elegant flowing style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addCascadingCurls(character) {
    const curls = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 3),
        new THREE.MeshStandardMaterial({
            color: 0xDA70D6,
            opacity: 0.9,
            transparent: true,
        })
    );
    curls.position.set(0.5, 4.5, -0.3);

    const mirroredCurls = curls.clone();
    mirroredCurls.position.set(-0.5, 4.5, -0.3);

    character.add(curls);
    character.add(mirroredCurls);
}

/**
 * Adds high bun hair with elegant style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addHighBunHair(character) {
    const bun = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xF5F5DC,
        })
    );
    bun.position.set(0, 5.5, -0.3);
    character.add(bun);
}

/**
 * Adds small braids hair with feminine style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addSmallBraidsHair(character) {
    const braid = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    braid.position.set(0.5, 4.5, -0.3);

    const mirroredBraid = braid.clone();
    mirroredBraid.position.set(-0.5, 4.5, -0.3);

    character.add(braid);
    character.add(mirroredBraid);
}

/**
 * Adds gentle messy hair with natural style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addGentleMessyHair(character) {
    const messyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFA07A,
            opacity: 0.9,
            transparent: true,
        })
    );
    messyLayer.position.set(0, 4.5, -0.3);

    const mirroredMessyLayer = messyLayer.clone();
    mirroredMessyLayer.position.set(0, 4.5, 0.3);

    character.add(messyLayer);
    character.add(mirroredMessyLayer);
}

/**
 * Adds gentle wavy hair with elegant style for female characters
 * @param {THREE.Group} character - The character group to add hair to
 */
function addGentleWavyHair(character) {
    const wavyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            color: 0xE9967A,
            opacity: 0.9,
            transparent: true,
        })
    );
    wavyHair.position.set(0, 4.5, -0.5);

    const mirroredWavyHair = wavyHair.clone();
    mirroredWavyHair.position.set(0, 4.5, 0.5);

    character.add(wavyHair);
    character.add(mirroredWavyHair);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addBraidedCrownHair,
        addLongCurlyHair,
        addFlowingStreakHair,
        addShoulderLengthHair,
        addWavyHair,
        addStraightBangs,
        addHighPonytail,
        addPigtailBraids,
        addBobCutHair,
        addCascadingCurls,
        addHighBunHair,
        addSmallBraidsHair,
        addGentleMessyHair,
        addGentleWavyHair
    };
}
