/**
 * Male Body Components Library - Part 32
 * Various laser, metallic, and angular body designs for male characters
 * Compatible with Three.js
 */

// Import Three.js if needed
// import * as THREE from 'three';

/**
 * Adds a sparkling laser body with strong orange laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addSparklingLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9, 2.8),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
            transparent: true,
            opacity: 0.8,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a metallic laser body with silver metal and orange laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addMetalLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 9, 3),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a laser angular body with cyan laser effects and angular design
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaserAngularBody(character) {
    const torso = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.8,
        })
    );
    torso.position.set(0, 4.5, 0);

    const legs = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 1.8),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    legs.position.set(0, 1.5, 0);

    const arms = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.6,
        })
    );
    arms.position.set(2.5, 3, 0);

    const mirroredArms = arms.clone();
    mirroredArms.position.set(-2.5, 3, 0);

    character.add(torso);
    character.add(legs);
    character.add(arms);
    character.add(mirroredArms);
}

/**
 * Adds a metallic laser power body with green laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addMetalLaserPowerBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 9.5, 2.8),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a dynamic laser body with orange laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addDynamicLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a sparkling laser body with special effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addSparklingBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 9, 3.2),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
            transparent: true,
            opacity: 0.9,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a giant laser body with larger dimensions
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addGiantLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.BoxGeometry(4, 10, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.2,
        })
    );
    torso.position.set(0, 5, 0);

    const legs = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 5, 2.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    legs.position.set(0, 2, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a fully glowing body with intense green emission
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addFullyGlowingBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 9.5, 3.2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.5,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a laser metal sparkle body combining metal and laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaserMetalSparkleBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 9, 3.2),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFF4500,
            emissiveIntensity: 2.8,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a geometric laser body with green laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addGeometricLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.2,
        })
    );
    body.position.set(0, 4.5, 0);
    character.add(body);
}

/**
 * Adds a bold laser body with strong green laser emission
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addBoldLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4, 10, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.5,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

/**
 * Adds a laser cube body with transparent green effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaserCubeBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 10, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.2,
            transparent: true,
            opacity: 0.9,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

/**
 * Adds a wave laser body with slanted design
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addWaveLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.PlaneGeometry(4, 10, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.0,
        })
    );
    body.position.set(0, 5, 0);
    body.rotation.z = Math.PI / 12;
    character.add(body);
}

/**
 * Adds a massive laser body with extra large dimensions
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addMassiveLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4.5, 11, 3.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 3.5,
        })
    );
    body.position.set(0, 5.5, 0);
    character.add(body);
}

/**
 * Adds an intense laser body with maximum green emission
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addIntenseLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4, 10, 3.2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.8,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

/**
 * Adds a contoured laser body with green effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addContouredLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 9.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.2,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}

/**
 * Adds an integrated laser angular body with green effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addIntegratedLaserAngularBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 9.5, 3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.2,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}
