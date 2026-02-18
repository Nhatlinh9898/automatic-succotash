/**
 * Pose Animations Library - Part 39
 * Contains standing, kneeling, stretching, and various body position animations
 */

// Kneel and Reach Up
function kneelAndReachUp(character) {
    const kneelReachAnimation = new THREE.AnimationClip("KneelReachUp", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(kneelReachAnimation);
}

// Stand and Stretch Arms Back
function standAndStretchArmsBack(character) {
    const stretchArmsBackAnimation = new THREE.AnimationClip("StretchArmsBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchArmsBackAnimation);
}

// Stand and Cross Arms
function standAndCrossArms(character) {
    const crossArmsAnimation = new THREE.AnimationClip("CrossArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}

// Kneel and Pray
function kneelAndPray(character) {
    const kneelPrayAnimation = new THREE.AnimationClip("KneelPray", 2, [
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
    character.animations.push(kneelPrayAnimation);
}

// Stand and Salute High
function standAndSaluteHigh(character) {
    const saluteHighAnimation = new THREE.AnimationClip("SaluteHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(saluteHighAnimation);
}

// Leap with Open Arms
function leapWithOpenArms(character) {
    const leapOpenAnimation = new THREE.AnimationClip("LeapOpenArms", 2, [
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
    character.animations.push(leapOpenAnimation);
}

// Stand and Reach Upwards
function standAndReachUpwards(character) {
    const reachUpwardsAnimation = new THREE.AnimationClip("StandReachUpwards", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(reachUpwardsAnimation);
}

// Leap and Power Pose
function leapAndPowerPose(character) {
    const powerPoseAnimation = new THREE.AnimationClip("LeapPowerPose", 2, [
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
    character.animations.push(powerPoseAnimation);
}

// Stand and Gentle Stretch
function standAndGentleStretch(character) {
    const gentleStretchAnimation = new THREE.AnimationClip("StandGentleStretch", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(gentleStretchAnimation);
}

// Stretch One Arm Side
function stretchOneArmSide(character) {
    const stretchArmSideAnimation = new THREE.AnimationClip("StretchArmSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stretchArmSideAnimation);
}

// Leap and Strike Pose
function leapAndStrikePose(character) {
    const strikePoseAnimation = new THREE.AnimationClip("LeapStrikePose", 2, [
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
    character.animations.push(strikePoseAnimation);
}

// Stand and Twist Sides
function standAndTwistSides(character) {
    const twistSidesAnimation = new THREE.AnimationClip("TwistSides", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(twistSidesAnimation);
}

// Stretch Arm Forward
function stretchArmForward(character) {
    const stretchForwardAnimation = new THREE.AnimationClip("StretchArmForward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchForwardAnimation);
}

export {
    kneelAndReachUp,
    standAndStretchArmsBack,
    standAndCrossArms,
    kneelAndPray,
    standAndSaluteHigh,
    leapWithOpenArms,
    standAndReachUpwards,
    leapAndPowerPose,
    standAndGentleStretch,
    stretchOneArmSide,
    leapAndStrikePose,
    standAndTwistSides,
    stretchArmForward
};
