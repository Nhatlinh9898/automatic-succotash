// Body Components - Part 29
// Male and Female Body Components with Laser Effects

// ===== MALE BODY COMPONENTS =====

/**
 * Adds broad shoulders for strong appearance
 * @param {THREE.Object3D} character - The character object to add shoulders to
 */
function addBroadShoulders(character) {
    const shoulders = new THREE.Mesh(
        new THREE.BoxGeometry(4, 1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    shoulders.position.set(0, 3.5, 0);
    character.add(shoulders);
}

/**
 * Adds chest for masculine appearance
 * @param {THREE.Object3D} character - The character object to add chest to
 */
function addChest(character) {
    const chest = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 2, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    chest.position.set(0, 4.5, 0);
    character.add(chest);
}

/**
 * Adds arm muscles for strong appearance
 * @param {THREE.Object3D} character - The character object to add arm muscles to
 */
function addArmMuscles(character) {
    const bicep = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.7, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    bicep.position.set(1.8, 2.5, 0);

    const mirroredBicep = bicep.clone();
    mirroredBicep.position.set(-1.8, 2.5, 0);

    character.add(bicep);
    character.add(mirroredBicep);
}

/**
 * Adds long back for strong appearance
 * @param {THREE.Object3D} character - The character object to add back to
 */
function addLongBack(character) {
    const back = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 3.5, 1),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    back.position.set(0, 5.5, -0.5);
    character.add(back);
}

/**
 * Adds balanced hips for natural appearance
 * @param {THREE.Object3D} character - The character object to add hips to
 */
function addBalancedHips(character) {
    const hips = new THREE.Mesh(
        new THREE.BoxGeometry(2, 1.2, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    hips.position.set(0, 2.5, 0);
    character.add(hips);
}

/**
 * Adds powerful chest for very strong appearance
 * @param {THREE.Object3D} character - The character object to add chest to
 */
function addPowerfulChest(character) {
    const chest = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2.5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    chest.position.set(0, 4.8, 0);
    character.add(chest);
}

/**
 * Adds giant arms for powerful appearance
 * @param {THREE.Object3D} character - The character object to add arms to
 */
function addGiantArms(character) {
    const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1, 3.5, 16),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    arm.position.set(2.5, 2.5, 0);

    const mirroredArm = arm.clone();
    mirroredArm.position.set(-2.5, 2.5, 0);

    character.add(arm);
    character.add(mirroredArm);
}

/**
 * Adds glowing shoulders with laser effect
 * @param {THREE.Object3D} character - The character object to add shoulders to
 */
function addGlowingShoulders(character) {
    const shoulder = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.0,
        })
    );
    shoulder.position.set(2.2, 4.5, 0);

    const mirroredShoulder = shoulder.clone();
    mirroredShoulder.position.set(-2.2, 4.5, 0);

    character.add(shoulder);
    character.add(mirroredShoulder);
}

/**
 * Adds angular back with strong geometric design
 * @param {THREE.Object3D} character - The character object to add back to
 */
function addAngularBack(character) {
    const angularBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 4, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    angularBack.position.set(0, 5, -0.6);
    character.add(angularBack);
}

/**
 * Adds tall body for imposing appearance
 * @param {THREE.Object3D} character - The character object to add torso to
 */
function addTallBody(character) {
    const torso = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    torso.position.set(0, 6, 0);
    character.add(torso);
}

/**
 * Adds glowing arm muscles with laser effect
 * @param {THREE.Object3D} character - The character object to add arms to
 */
function addGlowingArmMuscles(character) {
    const glowingArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 0.8, 3.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
        })
    );
    glowingArm.position.set(2, 2.5, 0);

    const mirroredGlowingArm = glowingArm.clone();
    mirroredGlowingArm.position.set(-2, 2.5, 0);

    character.add(glowingArm);
    character.add(mirroredGlowingArm);
}

/**
 * Adds laser back with running laser effect
 * @param {THREE.Object3D} character - The character object to add back to
 */
function addLaserBack(character) {
    const laserBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 4.5, 1.2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    laserBack.position.set(0, 5.5, -0.6);
    character.add(laserBack);
}

/**
 * Adds laser chest with laser light effect
 * @param {THREE.Object3D} character - The character object to add chest to
 */
function addLaserChest(character) {
    const laserChest = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2, 1.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    laserChest.position.set(0, 4.5, 0);
    character.add(laserChest);
}

// ===== FEMALE BODY COMPONENTS =====

/**
 * Adds slim waist for feminine appearance
 * @param {THREE.Object3D} character - The character object to add waist to
 */
function addSlimWaist(character) {
    const waist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.8, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    waist.position.set(0, 3, 0);
    character.add(waist);
}

/**
 * Adds feminine chest with natural curves
 * @param {THREE.Object3D} character - The character object to add chest to
 */
function addFeminineChest(character) {
    const chest = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    chest.position.set(0.8, 3.8, 0.7);

    const mirroredChest = chest.clone();
    mirroredChest.position.set(-0.8, 3.8, 0.7);

    character.add(chest);
    character.add(mirroredChest);
}

/**
 * Adds curvy hips for feminine appearance
 * @param {THREE.Object3D} character - The character object to add hips to
 */
function addCurvyHips(character) {
    const hips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.8, 1.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    hips.position.set(0, 2.5, 0);
    character.add(hips);
}

/**
 * Adds elegant back for graceful appearance
 * @param {THREE.Object3D} character - The character object to add back to
 */
function addElegantBack(character) {
    const back = new THREE.Mesh(
        new THREE.BoxGeometry(2, 3, 1),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    back.position.set(0, 4, -0.5);
    character.add(back);
}

/**
 * Adds highlighted waist for attractive appearance
 * @param {THREE.Object3D} character - The character object to add waist to
 */
function addHighlightedWaist(character) {
    const waist = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.7, 1.8, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    waist.position.set(0, 3, 0);
    character.add(waist);
}

/**
 * Adds wide hips for feminine appearance
 * @param {THREE.Object3D} character - The character object to add hips to
 */
function addWideHips(character) {
    const hips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 2.2, 1.8, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
    );
    hips.position.set(0, 2.5, 0);
    character.add(hips);
}

/**
 * Adds graceful back with curved design
 * @param {THREE.Object3D} character - The character object to add back to
 */
function addGracefulBack(character) {
    const back = new THREE.Mesh(
        new THREE.BoxGeometry(2, 3.5, 1.2),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    back.position.set(0, 4, -0.5);
    character.add(back);
}

/**
 * Adds glowing waist with gentle light effect
 * @param {THREE.Object3D} character - The character object to add waist to
 */
function addGlowingWaist(character) {
    const waist = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 1.8, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.5,
        })
    );
    waist.position.set(0, 3, 0);
    character.add(waist);
}

/**
 * Adds radiant rounded hips with gentle glow
 * @param {THREE.Object3D} character - The character object to add hips to
 */
function addRadiantRoundedHips(character) {
    const roundedHips = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.2,
        })
    );
    roundedHips.position.set(0, 2.5, 0);
    character.add(roundedHips);
}

/**
 * Adds glow back with soft light effect
 * @param {THREE.Object3D} character - The character object to add back to
 */
function addGlowBack(character) {
    const glowingBack = new THREE.Mesh(
        new THREE.BoxGeometry(2, 3.5, 1),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.3,
        })
    );
    glowingBack.position.set(0, 4.5, -0.5);
    character.add(glowingBack);
}

/**
 * Adds starry waist with sparkling effect
 * @param {THREE.Object3D} character - The character object to add waist to
 */
function addStarryWaist(character) {
    const starryWaist = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 0.9, 2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    starryWaist.position.set(0, 3, 0);
    character.add(starryWaist);
}

/**
 * Adds sparkling hips with gentle shimmer
 * @param {THREE.Object3D} character - The character object to add hips to
 */
function addSparklingHips(character) {
    const sparklingHips = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 2.4, 1.8, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    sparklingHips.position.set(0, 2.5, 0);
    character.add(sparklingHips);
}

// Export all functions
export {
    // Male components
    addBroadShoulders,
    addChest,
    addArmMuscles,
    addLongBack,
    addBalancedHips,
    addPowerfulChest,
    addGiantArms,
    addGlowingShoulders,
    addAngularBack,
    addTallBody,
    addGlowingArmMuscles,
    addLaserBack,
    addLaserChest,
    
    // Female components
    addSlimWaist,
    addFeminineChest,
    addCurvyHips,
    addElegantBack,
    addHighlightedWaist,
    addWideHips,
    addGracefulBack,
    addGlowingWaist,
    addRadiantRoundedHips,
    addGlowBack,
    addStarryWaist,
    addSparklingHips
};
