/**
 * Gesture Animations Library - Part 38
 * Contains character gestures and expressive animations
 */

// Kneel and clap
function kneelAndClap(character) {
    const kneelClapAnimation = new THREE.AnimationClip("KneelClap", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelClapAnimation);
}

// Stand and stretch shoulders
function standAndStretchShoulders(character) {
    const stretchShouldersAnimation = new THREE.AnimationClip("StretchShoulders", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(stretchShouldersAnimation);
}

// Slow step and hands back
function slowStepAndHandsBack(character) {
    const slowStepBackAnimation = new THREE.AnimationClip("SlowStepHandsBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slowStepBackAnimation);
}

// Push forward and turn head
function pushForwardAndTurnHead(character) {
    const pushTurnAnimation = new THREE.AnimationClip("PushForwardTurnHead", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushTurnAnimation);
}

// Stand and swing fast
function standAndSwingFast(character) {
    const swingFastAnimation = new THREE.AnimationClip("SwingFast", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(swingFastAnimation);
}

// Step back and rest arms
function stepBackAndRestArms(character) {
    const stepBackRestAnimation = new THREE.AnimationClip("StepBackRestArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stepBackRestAnimation);
}

// Stand and shoulder twist
function standAndShoulderTwist(character) {
    const shoulderTwistAnimation = new THREE.AnimationClip("ShoulderTwist", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shoulderTwistAnimation);
}

// Stand with extended arms
function standWithExtendedArms(character) {
    const extendedArmsAnimation = new THREE.AnimationClip("ExtendedArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(extendedArmsAnimation);
}

// Extend arm and turn back
function extendArmAndTurnBack(character) {
    const extendTurnBackAnimation = new THREE.AnimationClip("ExtendArmTurnBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(extendTurnBackAnimation);
}

// Lift leg and turn head
function liftLegAndTurnHead(character) {
    const liftTurnAnimation = new THREE.AnimationClip("LiftLegTurnHead", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(liftTurnAnimation);
}

// Shake head and rest hands on hips
function shakeHeadAndRestHandsOnHips(character) {
    const shakeRestAnimation = new THREE.AnimationClip("ShakeHeadRestHips", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(shakeRestAnimation);
}

// Stand and bow gently
function standAndBowGently(character) {
    const gentleBowAnimation = new THREE.AnimationClip("StandBowGentle", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(gentleBowAnimation);
}

// Jump and hold heart
function jumpAndHoldHeart(character) {
    const jumpHoldHeartAnimation = new THREE.AnimationClip("JumpHoldHeart", 2, [
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
    character.animations.push(jumpHoldHeartAnimation);
}

// Extend arm and pat shoulder
function extendArmAndPatShoulder(character) {
    const patShoulderAnimation = new THREE.AnimationClip("ExtendPatShoulder", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(patShoulderAnimation);
}

// Kneel and extend hand
function kneelAndExtendHand(character) {
    const kneelExtendAnimation = new THREE.AnimationClip("KneelExtendHand", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(kneelExtendAnimation);
}

module.exports = {
    kneelAndClap,
    standAndStretchShoulders,
    slowStepAndHandsBack,
    pushForwardAndTurnHead,
    standAndSwingFast,
    stepBackAndRestArms,
    standAndShoulderTwist,
    standWithExtendedArms,
    extendArmAndTurnBack,
    liftLegAndTurnHead,
    shakeHeadAndRestHandsOnHips,
    standAndBowGently,
    jumpAndHoldHeart,
    extendArmAndPatShoulder,
    kneelAndExtendHand
};
