// Gesture and Expression Animations Library - Part 43
// Various hand gestures, bows, and emotional expressions

/**
 * Bend and swing forward animation
 * @param {THREE.Object3D} character - The character object
 */
function bendAndSwingForward(character) {
    const swingForwardAnimation = new THREE.AnimationClip("BendSwingForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(swingForwardAnimation);
}

/**
 * Bend and glance animation
 * @param {THREE.Object3D} character - The character object
 */
function bendAndGlance(character) {
    const glanceAnimation = new THREE.AnimationClip("BendAndGlance", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(glanceAnimation);
}

/**
 * Bow with graceful arm animation
 * @param {THREE.Object3D} character - The character object
 */
function bowWithGracefulArm(character) {
    const gracefulBowAnimation = new THREE.AnimationClip("GracefulBow", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gracefulBowAnimation);
}

/**
 * Graceful reach up animation
 * @param {THREE.Object3D} character - The character object
 */
function gracefulReachUp(character) {
    const reachUpAnimation = new THREE.AnimationClip("GracefulReachUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachUpAnimation);
}

/**
 * Bow with gratitude animation
 * @param {THREE.Object3D} character - The character object
 */
function bowWithGratitude(character) {
    const gratitudeBowAnimation = new THREE.AnimationClip("GratitudeBow", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gratitudeBowAnimation);
}

/**
 * Kneel and soft clap animation
 * @param {THREE.Object3D} character - The character object
 */
function kneelAndSoftClap(character) {
    const kneelSoftClapAnimation = new THREE.AnimationClip("KneelSoftClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelSoftClapAnimation);
}

export {
    bendAndSwingForward,
    bendAndGlance,
    bowWithGracefulArm,
    gracefulReachUp,
    bowWithGratitude,
    kneelAndSoftClap
};
