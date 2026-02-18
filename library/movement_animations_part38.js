/**
 * Movement Animations Library - Part 38
 * Contains character movement and locomotion animations
 */

// Jump back and pull arms
function jumpBackAndPull(character) {
    const jumpPullAnimation = new THREE.AnimationClip("JumpBackPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpPullAnimation);
}

// Leap and swing backward
function leapAndSwingBack(character) {
    const leapSwingAnimation = new THREE.AnimationClip("LeapSwingBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapSwingAnimation);
}

// Leap and reach forward
function leapAndReachForward(character) {
    const leapReachAnimation = new THREE.AnimationClip("LeapReachForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapReachAnimation);
}

// Sprint and throw arms up
function sprintAndThrowArmsUp(character) {
    const sprintThrowArmsAnimation = new THREE.AnimationClip("SprintThrowArmsUp", 2.2, [
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
    character.animations.push(sprintThrowArmsAnimation);
}

// Leap and swing hands
function leapAndSwingHands(character) {
    const leapSwingHandsAnimation = new THREE.AnimationClip("LeapSwingHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(leapSwingHandsAnimation);
}

// Jump and wave
function jumpAndWave(character) {
    const jumpWaveAnimation = new THREE.AnimationClip("JumpWave", 2, [
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
    character.animations.push(jumpWaveAnimation);
}

// Run and throw
function runAndThrow(character) {
    const runThrowAnimation = new THREE.AnimationClip("RunThrow", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(runThrowAnimation);
}

// Run with wide arm swing
function runWithWideArmSwing(character) {
    const wideArmRunAnimation = new THREE.AnimationClip("RunWideArmSwing", 2, [
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
    character.animations.push(wideArmRunAnimation);
}

// Leap and touch feet
function leapAndTouchFeet(character) {
    const touchFeetAnimation = new THREE.AnimationClip("LeapTouchFeet", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchFeetAnimation);
}

// Jump and half spin
function jumpAndHalfSpin(character) {
    const jumpSpinAnimation = new THREE.AnimationClip("JumpHalfSpin", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(jumpSpinAnimation);
}

// Sprint and turn quickly
function sprintAndTurnQuickly(character) {
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

module.exports = {
    jumpBackAndPull,
    leapAndSwingBack,
    leapAndReachForward,
    sprintAndThrowArmsUp,
    leapAndSwingHands,
    jumpAndWave,
    runAndThrow,
    runWithWideArmSwing,
    leapAndTouchFeet,
    jumpAndHalfSpin,
    sprintAndTurnQuickly
};
