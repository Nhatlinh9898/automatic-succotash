/**
 * Combat Animations Library - Part 39
 * Contains fighting, kicking, blocking, and combat-related animations
 */

// High Kick with Blocking Arm
function highKickWithBlockingArm(character) {
    const kickBlockAnimation = new THREE.AnimationClip("HighKickBlockingArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(kickBlockAnimation);
}

// Leap and Jab
function leapAndJab(character) {
    const leapJabAnimation = new THREE.AnimationClip("LeapJab", 2, [
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
    character.animations.push(leapJabAnimation);
}

// Front Kick with High Arm
function frontKickWithHighArm(character) {
    const frontKickArmAnimation = new THREE.AnimationClip("FrontKickHighArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(frontKickArmAnimation);
}

// Leap and Spinning Kick
function leapAndSpinningKick(character) {
    const leapSpinKickAnimation = new THREE.AnimationClip("LeapSpinningKick", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapSpinKickAnimation);
}

// Spin and Smash Down
function spinAndSmashDown(character) {
    const spinSmashDownAnimation = new THREE.AnimationClip("SpinSmashDown", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(spinSmashDownAnimation);
}

// Leap and Defend
function leapAndDefend(character) {
    const leapDefendAnimation = new THREE.AnimationClip("LeapDefend", 2, [
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
    character.animations.push(leapDefendAnimation);
}

// Balanced Side Kick
function balancedSideKick(character) {
    const balancedKickAnimation = new THREE.AnimationClip("BalancedSideKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(balancedKickAnimation);
}

export {
    highKickWithBlockingArm,
    leapAndJab,
    frontKickWithHighArm,
    leapAndSpinningKick,
    spinAndSmashDown,
    leapAndDefend,
    balancedSideKick
};
