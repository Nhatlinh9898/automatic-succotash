// Jumping and Leaping Animations Library - Part 43
// Various jump and leap animations

/**
 * Leap with arms wide animation
 * @param {THREE.Object3D} character - The character object
 */
function leapWithArmsWide(character) {
    const armsWideAnimation = new THREE.AnimationClip("LeapArmsWide", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(armsWideAnimation);
}

/**
 * Leap and throw arms up animation
 * @param {THREE.Object3D} character - The character object
 */
function leapAndThrowArmsUp(character) {
    const throwArmsUpAnimation = new THREE.AnimationClip("LeapThrowArmsUp", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(throwArmsUpAnimation);
}

/**
 * Leap with side arms animation
 * @param {THREE.Object3D} character - The character object
 */
function leapWithSideArms(character) {
    const sideArmsAnimation = new THREE.AnimationClip("LeapSideArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(sideArmsAnimation);
}

/**
 * Leap forward greeting animation
 * @param {THREE.Object3D} character - The character object
 */
function leapForwardGreeting(character) {
    const leapGreetingAnimation = new THREE.AnimationClip("LeapForwardGreeting", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(leapGreetingAnimation);
}

/**
 * Leap and punch forward animation
 * @param {THREE.Object3D} character - The character object
 */
function leapAndPunchForward(character) {
    const punchForwardAnimation = new THREE.AnimationClip("LeapPunchForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(punchForwardAnimation);
}

/**
 * Leap with forward reach animation
 * @param {THREE.Object3D} character - The character object
 */
function leapWithForwardReach(character) {
    const forwardReachAnimation = new THREE.AnimationClip("LeapForwardReach", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(forwardReachAnimation);
}

/**
 * Leap with symmetric arms animation
 * @param {THREE.Object3D} character - The character object
 */
function leapWithSymmetricArms(character) {
    const symmetricArmsAnimation = new THREE.AnimationClip("LeapSymmetricArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(symmetricArmsAnimation);
}

/**
 * Leap with straight arms animation
 * @param {THREE.Object3D} character - The character object
 */
function leapWithStraightArms(character) {
    const straightArmsAnimation = new THREE.AnimationClip("LeapStraightArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(straightArmsAnimation);
}

/**
 * Leap and point forward animation
 * @param {THREE.Object3D} character - The character object
 */
function leapAndPointForward(character) {
    const pointForwardLeapAnimation = new THREE.AnimationClip("PointForwardLeap", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pointForwardLeapAnimation);
}

/**
 * Leap and swing arms wide animation
 * @param {THREE.Object3D} character - The character object
 */
function leapAndSwingArmsWide(character) {
    const swingArmsWideAnimation = new THREE.AnimationClip("SwingArmsWide", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(swingArmsWideAnimation);
}

export {
    leapWithArmsWide,
    leapAndThrowArmsUp,
    leapWithSideArms,
    leapForwardGreeting,
    leapAndPunchForward,
    leapWithForwardReach,
    leapWithSymmetricArms,
    leapWithStraightArms,
    leapAndPointForward,
    leapAndSwingArmsWide
};
