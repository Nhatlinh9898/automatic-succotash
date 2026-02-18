// Female Hair Components - Part 29
// Luminous, Lace, and Metallic Style Hair Components

/**
 * Adds soft luminous lace hair with gentle light effect
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSoftLuminousLaceHair(character) {
    const laceLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceLayer.position.set(0, 4.7, -0.3);

    const mirroredLaceLayer = laceLayer.clone();
    mirroredLaceLayer.position.set(0, 4.7, 0.3);

    character.add(laceLayer);
    character.add(mirroredLaceLayer);
}

/**
 * Adds luminous wavy lace hair with flowing waves
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addLuminousWavyLaceHair(character) {
    const laceWave = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceWave.position.set(0, 4.5, -0.3);

    const mirroredLaceWave = laceWave.clone();
    mirroredLaceWave.position.set(0, 4.5, 0.3);

    character.add(laceWave);
    character.add(mirroredLaceWave);
}

/**
 * Adds metallic curly long hair with shiny effect
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addMetallicCurlyLongHair(character) {
    const metallicCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicCurls.position.set(0, 4.5, -0.3);

    const mirroredMetallicCurls = metallicCurls.clone();
    mirroredMetallicCurls.position.set(0, 4.5, 0.3);

    character.add(metallicCurls);
    character.add(mirroredMetallicCurls);
}

/**
 * Adds shiny short glow hair with radiant effect
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addShinyShortGlowHair(character) {
    const glowingShortLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
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
 * Adds metallic short hair with sleek modern style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addMetallicShortHair(character) {
    const metallicHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metallicHairLayer.position.set(0, 4.7, -0.3);

    const mirroredMetallicHairLayer = metallicHairLayer.clone();
    mirroredMetallicHairLayer.position.set(0, 4.7, 0.3);

    character.add(metallicHairLayer);
    character.add(mirroredMetallicHairLayer);
}

/**
 * Adds soft radiant long hair with gentle light
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSoftRadiantLongHair(character) {
    const radiantHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    radiantHair.position.set(0, 4.5, -0.3);

    const mirroredRadiantHair = radiantHair.clone();
    mirroredRadiantHair.position.set(0, 4.5, 0.3);

    character.add(radiantHair);
    character.add(mirroredRadiantHair);
}

/**
 * Adds sparkling laser fringe with high-tech style
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addSparklingLaserFringe(character) {
    const laserFringe = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    laserFringe.position.set(0, 4.5, -0.3);

    const mirroredLaserFringe = laserFringe.clone();
    mirroredLaserFringe.position.set(0, 4.5, 0.3);

    character.add(laserFringe);
    character.add(mirroredLaserFringe);
}

/**
 * Adds luminous silky hair with smooth flowing effect
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addLuminousSilkyHair(character) {
    const silkyLaserHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    silkyLaserHair.position.set(0, 4.5, -0.3);

    const mirroredSilkyLaserHair = silkyLaserHair.clone();
    mirroredSilkyLaserHair.position.set(0, 4.5, 0.3);

    character.add(silkyLaserHair);
    character.add(mirroredSilkyLaserHair);
}

/**
 * Adds wave lace short hair with elegant waves
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addWaveLaceShortHair(character) {
    const laceWaveHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            transparent: true,
            opacity: 0.9,
        })
    );
    laceWaveHair.position.set(0, 4.7, -0.3);

    const mirroredLaceWaveHair = laceWaveHair.clone();
    mirroredLaceWaveHair.position.set(0, 4.7, 0.3);

    character.add(laceWaveHair);
    character.add(mirroredLaceWaveHair);
}

/**
 * Adds metallic long fringe hair with shiny bangs
 * @param {THREE.Object3D} character - The character object to add hair to
 */
function addMetallicLongFringeHair(character) {
    const metallicHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metallicHair.position.set(0, 4.5, -0.3);

    const mirroredMetallicHair = metallicHair.clone();
    mirroredMetallicHair.position.set(0, 4.5, 0.3);

    character.add(metallicHair);
    character.add(mirroredMetallicHair);
}

// Export all functions
export {
    addSoftLuminousLaceHair,
    addLuminousWavyLaceHair,
    addMetallicCurlyLongHair,
    addShinyShortGlowHair,
    addMetallicShortHair,
    addSoftRadiantLongHair,
    addSparklingLaserFringe,
    addLuminousSilkyHair,
    addWaveLaceShortHair,
    addMetallicLongFringeHair
};
