/**
 * Gesture Animations Library - Part 39
 * Contains hand gestures, waving, pointing, clapping, and other gesture animations
 */

// Raise Hands and Smile
function raiseHandsAndSmile(character) {
    const raiseSmileAnimation = new THREE.AnimationClip("RaiseHandsSmile", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseSmileAnimation);
}

// Stand and Touch Chin
function standAndTouchChin(character) {
    const touchChinAnimation = new THREE.AnimationClip("TouchChin", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0.3, 0, 0.5, 0.3, 0]
        )
    ]);
    character.animations.push(touchChinAnimation);
}

// Turn Back and Pat Shoulder
function turnBackAndPatShoulder(character) {
    const patShoulderAnimation = new THREE.AnimationClip("TurnBackPatShoulder", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0]
        )
    ]);
    character.animations.push(patShoulderAnimation);
}

// Stand and Point Side
function standAndPointSide(character) {
    const pointSideAnimation = new THREE.AnimationClip("StandPointSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}

// Turn Head and Bow
function turnHeadAndBow(character) {
    const turnBowAnimation = new THREE.AnimationClip("TurnHeadBow", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnBowAnimation);
}

// Stand and Nod Softly
function standAndNodSoftly(character) {
    const nodSoftlyAnimation = new THREE.AnimationClip("StandNodSoftly", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodSoftlyAnimation);
}

// Turn and Smile
function turnAndSmile(character) {
    const turnSmileAnimation = new THREE.AnimationClip("TurnSmile", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnSmileAnimation);
}

// Kneel and Soft Clap
function kneelAndSoftClap(character) {
    const kneelClapAnimation = new THREE.AnimationClip("KneelSoftClap", 1.8, [
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
    character.animations.push(kneelClapAnimation);
}

// Stand and Clap Vigorously
function standAndClapVigorously(character) {
    const clapVigorousAnimation = new THREE.AnimationClip("ClapVigorously", 1.8, [
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
    character.animations.push(clapVigorousAnimation);
}

// Lift One Arm and Wave
function liftOneArmAndWave(character) {
    const liftWaveAnimation = new THREE.AnimationClip("LiftOneArmWave", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(liftWaveAnimation);
}

export {
    raiseHandsAndSmile,
    standAndTouchChin,
    turnBackAndPatShoulder,
    standAndPointSide,
    turnHeadAndBow,
    standAndNodSoftly,
    turnAndSmile,
    kneelAndSoftClap,
    standAndClapVigorously,
    liftOneArmAndWave
};
