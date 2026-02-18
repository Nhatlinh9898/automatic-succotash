// Movement and Running Animations Library - Part 43
// Various sprint, run, and movement animations

/**
 * Sprint with arc swing animation
 * @param {THREE.Object3D} character - The character object
 */
function sprintWithArcSwing(character) {
    const arcSwingAnimation = new THREE.AnimationClip("SprintArcSwing", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(arcSwingAnimation);
}

/**
 * Sprint with upward arms animation
 * @param {THREE.Object3D} character - The character object
 */
function sprintWithUpwardArms(character) {
    const upwardArmsAnimation = new THREE.AnimationClip("SprintUpwardArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(upwardArmsAnimation);
}

/**
 * Sprint with opposing arm swings animation
 * @param {THREE.Object3D} character - The character object
 */
function sprintWithOpposingArmSwings(character) {
    const opposingSwingsAnimation = new THREE.AnimationClip("SprintOpposingSwings", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(opposingSwingsAnimation);
}

/**
 * Sprint with one raised arm animation
 * @param {THREE.Object3D} character - The character object
 */
function sprintWithOneRaisedArm(character) {
    const raisedArmRunAnimation = new THREE.AnimationClip("SprintOneRaisedArm", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raisedArmRunAnimation);
}

export {
    sprintWithArcSwing,
    sprintWithUpwardArms,
    sprintWithOpposingArmSwings,
    sprintWithOneRaisedArm
};
