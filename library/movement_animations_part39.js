/**
 * Movement Animations Library - Part 39
 * Contains character movement animations like running, jumping, turning, and walking
 */

// Sprint Turn Animation
function sprintTurnQuickly(character) {
    const sprintTurnAnimation = new THREE.AnimationClip("SprintTurnQuickly", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sprintTurnAnimation);
}

// Leap High and Swing Back
function leapHighAndSwingBack(character) {
    const leapSwingAnimation = new THREE.AnimationClip("LeapHighSwingBack", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(leapSwingAnimation);
}

// Sprint and Change Direction
function sprintAndChangeDirection(character) {
    const changeDirectionAnimation = new THREE.AnimationClip("SprintChangeDirection", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 4, 2]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(changeDirectionAnimation);
}

// Leap and Turn Half Circle
function leapAndTurnHalfCircle(character) {
    const turnHalfCircleAnimation = new THREE.AnimationClip("LeapTurnHalfCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(turnHalfCircleAnimation);
}

// Sprint and Raise One Hand
function sprintAndRaiseOneHand(character) {
    const raiseHandRunAnimation = new THREE.AnimationClip("SprintRaiseOneHand", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseHandRunAnimation);
}

// Leap High with Arms Swing Back
function leapHighWithArmsSwingBack(character) {
    const leapSwingBackAnimation = new THREE.AnimationClip("LeapHighSwingBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapSwingBackAnimation);
}

// Leap and Multi Spin
function leapAndMultiSpin(character) {
    const multiSpinAnimation = new THREE.AnimationClip("LeapMultiSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(multiSpinAnimation);
}

// Step Back and Stop
function stepBackAndStop(character) {
    const backStopAnimation = new THREE.AnimationClip("StepBackStop", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        )
    ]);
    character.animations.push(backStopAnimation);
}

// Spin and Stop
function spinAndStop(character) {
    const spinStopAnimation = new THREE.AnimationClip("SpinStop", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(spinStopAnimation);
}

// Sprint and Stop Suddenly
function sprintAndStopSuddenly(character) {
    const stopSuddenAnimation = new THREE.AnimationClip("SprintStopSuddenly", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 4.2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(stopSuddenAnimation);
}

// Spin and Point Far
function spinAndPointFar(character) {
    const spinPointFarAnimation = new THREE.AnimationClip("SpinPointFar", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(spinPointFarAnimation);
}

// Step Back and Clap Softly
function stepBackAndClapSoftly(character) {
    const backClapAnimation = new THREE.AnimationClip("StepBackSoftClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
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
    character.animations.push(backClapAnimation);
}

// Retreat with Raised Arms
function retreatWithRaisedArms(character) {
    const retreatArmsAnimation = new THREE.AnimationClip("RetreatRaisedArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(retreatArmsAnimation);
}

// Step Back and Stretch Arms
function stepBackAndStretchArms(character) {
    const stepStretchAnimation = new THREE.AnimationClip("StepBackStretchArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stepStretchAnimation);
}

// Sprint with Raised Hand
function sprintWithRaisedHand(character) {
    const sprintRaisedHandAnimation = new THREE.AnimationClip("SprintRaisedHand", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(sprintRaisedHandAnimation);
}

// Leap and Kick Forward
function leapAndKickForward(character) {
    const leapKickAnimation = new THREE.AnimationClip("LeapKickForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapKickAnimation);
}

export {
    sprintTurnQuickly,
    leapHighAndSwingBack,
    sprintAndChangeDirection,
    leapAndTurnHalfCircle,
    sprintAndRaiseOneHand,
    leapHighWithArmsSwingBack,
    leapAndMultiSpin,
    stepBackAndStop,
    spinAndStop,
    sprintAndStopSuddenly,
    spinAndPointFar,
    stepBackAndClapSoftly,
    retreatWithRaisedArms,
    stepBackAndStretchArms,
    sprintWithRaisedHand,
    leapAndKickForward
};
