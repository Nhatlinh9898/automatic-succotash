/**
 * Female Body Components Library - Part 32
 * Various lace, metallic, and laser body designs for female characters
 * Compatible with Three.js
 */

// Import Three.js if needed
// import * as THREE from 'three';

/**
 * Adds a lace laser body combining lace details with laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaceLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1.3, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a sparkling lace body with sparkling pink effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addSparklingLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1.3, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds an elegant body with soft pink glow and lace details
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addElegantBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.3, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.7,
        })
    );
    legs.position.set(0, 1.5, 0);

    const lace = new THREE.Mesh(
        new THREE.TorusGeometry(1.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    lace.rotation.x = Math.PI / 2;
    lace.position.set(0, 4, 0);

    character.add(torso);
    character.add(legs);
    character.add(lace);
}

/**
 * Adds a starry body with sparkling pink star effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addStarryBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1, 4.8, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.3,
            transparent: true,
            opacity: 0.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.5, 4.2, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.9,
            transparent: true,
            opacity: 0.7,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a lace metal body combining metallic silver with pink lace effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaceMetalBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1.3, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a lace radiant body with intense pink glow
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaceRadiantBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1.3, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a laser metallic body combining silver metal with pink laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLaserMetallicBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.2, 5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a sparkling laser lace body with enhanced pink laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addSparklingLaserLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.2, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.5, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.7,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a starry laser soft body combining star and laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addStarryLaserSoftBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.1, 5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a glittering metallic body with peach-colored metallic glow
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addGlitteringMetallicBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1, 5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFDAB9,
            emissiveIntensity: 2.0,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.5, 4, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFDAB9,
            emissiveIntensity: 1.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a long metal body with extended proportions
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addLongMetalBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a starry elegant body with enhanced star effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addStarryElegantBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.2, 5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.5,
            transparent: true,
            opacity: 0.8,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.6, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.9,
            transparent: true,
            opacity: 0.7,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a metal laser blend body combining metal and laser effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addMetalLaserBlendBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.2, 5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
        })
    );
    torso.position.set(0, 3.5, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.7, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a graceful lace body with extended proportions
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addGracefulLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.5, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a mixed metal lace body combining metal and lace effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addMixedMetalLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.5,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a radiant lace body with glowing pink effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addRadiantLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.1, 5.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.2,
            transparent: true,
            opacity: 0.8,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.5, 4.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.9,
            transparent: true,
            opacity: 0.7,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}

/**
 * Adds a metal laser blended body with enhanced effects
 * @param {THREE.Group} character - The character group to add the body to
 */
export function addMetalLaserBlendedBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.1, 5.2, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.6, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}
