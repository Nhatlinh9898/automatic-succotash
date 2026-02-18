/**
 * Idle Animations Library - Part 38
 * Contains character idle, rest, and waiting pose animations
 */

// Rest hands on head
function restHandsOnHead(character) {
    const restHandsAnimation = new THREE.AnimationClip("RestHandsOnHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(restHandsAnimation);
}

// Shrug and look side
function shrugAndLookSide(character) {
    const shrugLookAnimation = new THREE.AnimationClip("ShrugLookSide", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shrugLookAnimation);
}

// Step back and cover face
function stepBackAndCoverFace(character) {
    const coverFaceAnimation = new THREE.AnimationClip("StepBackCoverFace", 1.8, [
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
    character.animations.push(coverFaceAnimation);
}

// Stand and shield eyes
function standAndShieldEyes(character) {
    const shieldEyesAnimation = new THREE.AnimationClip("StandShieldEyes", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldEyesAnimation);
}

// Kneel and brace ground
function kneelAndBraceGround(character) {
    const kneelBraceAnimation = new THREE.AnimationClip("KneelBraceGround", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kneelBraceAnimation);
}

// Turn and hands in pockets
function turnAndHandsInPockets(character) {
    const handsPocketsAnimation = new THREE.AnimationClip("TurnHandsPockets", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(handsPocketsAnimation);
}

// Stand and shake shoulders
function standAndShakeShoulders(character) {
    const shakeShouldersAnimation = new THREE.AnimationClip("ShakeShoulders", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeShouldersAnimation);
}

// Stand and think
function standAndThink(character) {
    const thinkAnimation = new THREE.AnimationClip("StandThink", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0.2, 0, 0.5, 0.2, 0]
        )
    ]);
    character.animations.push(thinkAnimation);
}

// Shake shoulders and raise hand
function shakeShouldersAndRaiseHand(character) {
    const shakeRaiseAnimation = new THREE.AnimationClip("ShakeShouldersRaiseHand", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shakeRaiseAnimation);
}

// Kneel and bow
function kneelAndBow(character) {
    const kneelBowAnimation = new THREE.AnimationClip("KneelBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelBowAnimation);
}

// Step back and look over shoulder
function stepBackAndLookOverShoulder(character) {
    const lookOverShoulderAnimation = new THREE.AnimationClip("StepBackLookOverShoulder", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(lookOverShoulderAnimation);
}

// Stand and soft clap
function standAndSoftClap(character) {
    const softClapAnimation = new THREE.AnimationClip("SoftClap", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(softClapAnimation);
}

module.exports = {
    restHandsOnHead,
    shrugAndLookSide,
    stepBackAndCoverFace,
    standAndShieldEyes,
    kneelAndBraceGround,
    turnAndHandsInPockets,
    standAndShakeShoulders,
    standAndThink,
    shakeShouldersAndRaiseHand,
    kneelAndBow,
    stepBackAndLookOverShoulder,
    standAndSoftClap
};
