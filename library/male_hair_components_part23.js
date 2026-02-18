/**
 * Male Hair Components Library - Part 23
 * Various hair styles and accessories for male characters
 * Compatible with Three.js
 */

// Import THREE if needed (uncomment if using as module)
// import * as THREE from 'three';

/**
 * Adds sideburns for male characters with mature appearance
 * @param {THREE.Group} character - The character group to add sideburns to
 */
function addSideburns(character) {
    const sideburn = new THREE.Mesh(
        new THREE.PlaneGeometry(0.2, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    sideburn.position.set(0.9, 4.3, 0);

    const mirroredSideburn = sideburn.clone();
    mirroredSideburn.position.set(-0.9, 4.3, 0);

    character.add(sideburn);
    character.add(mirroredSideburn);
}

/**
 * Adds Mohawk hairstyle for male characters with punk style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addMohawkHair(character) {
    const mohawk = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    mohawk.position.set(0, 5.2, 0);
    mohawk.rotation.z = Math.PI / 2;
    character.add(mohawk);
}

/**
 * Adds spiky hair for male characters with rebellious style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addSpikyHair(character) {
    const spike = new THREE.Mesh(
        new THREE.CylinderGeometry(0, 0.3, 1, 16),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    spike.position.set(0, 5.2, 0);

    const mirroredSpike = spike.clone();
    mirroredSpike.position.set(0.3, 5.2, 0);
    character.add(spike);
    character.add(mirroredSpike);
}

/**
 * Adds short cut hair for male characters with classic style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addShortCutHair(character) {
    const shortHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    shortHair.position.set(0, 4.7, -0.2);
    character.add(shortHair);
}

/**
 * Adds middle parted hair for male characters with elegant style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addMiddlePartedHair(character) {
    const partedHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    partedHair.position.set(0, 4.8, -0.2);
    character.add(partedHair);
}

/**
 * Adds afro hair for male characters with bold style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addAfroHair(character) {
    const afro = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    afro.position.set(0, 5, 0);
    character.add(afro);
}

/**
 * Adds messy hair for male characters with natural style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addMessyHair(character) {
    const messyHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    messyHair.position.set(0, 4.8, -0.2);
    character.add(messyHair);
}

/**
 * Adds long straight hair for male characters with scholarly style
 * @param {THREE.Group} character - The character group to add hair to
 */
function addLongStraightHair(character) {
    const straightHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 3.5),
        new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
    );
    straightHair.position.set(0, 4.6, -0.3);
    character.add(straightHair);
}

/**
 * Adds slender eyes with sharp appearance for male characters
 * @param {THREE.Group} character - The character group to add eyes to
 */
function addSlenderEyes(character) {
    const slenderEye = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x0000FF })
    );
    slenderEye.position.set(0.6, 4.8, 0.7);

    const mirroredSlenderEye = slenderEye.clone();
    mirroredSlenderEye.position.set(-0.6, 4.8, 0.7);

    character.add(slenderEye);
    character.add(mirroredSlenderEye);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSideburns,
        addMohawkHair,
        addSpikyHair,
        addShortCutHair,
        addMiddlePartedHair,
        addAfroHair,
        addMessyHair,
        addLongStraightHair,
        addSlenderEyes
    };
}
