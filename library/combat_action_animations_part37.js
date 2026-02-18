/**
 * Combat and Action Animations Library - Part 37
 * Contains character animations for combat moves, punches, kicks, and action sequences
 */

// Animation 196: Sprint with Pull Back (Combat Movement)
function sprintWithPullBack(character) {
    const sprintPullAnimation = new THREE.AnimationClip("SprintPullBack", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(sprintPullAnimation);
}

// Animation 221: Bend and Pull (Strength Action)
function bendAndPull(character) {
    const bendPullAnimation = new THREE.AnimationClip("BendPull", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(bendPullAnimation);
}

// Animation 222: Step Forward and Point (Action Movement)
function stepForwardAndPoint(character) {
    const forwardPointAnimation = new THREE.AnimationClip("StepForwardPoint", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(forwardPointAnimation);
}

// Additional combat-specific animations from the file

// Animation 185: Spin Arm and Punch (Combat Punch)
function spinArmAndPunch(character) {
    const spinPunchAnimation = new THREE.AnimationClip("SpinArmPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinPunchAnimation);
}

// Animation 187: Side Kick and Spin (Combat Kick)
function sideKickAndSpin(character) {
    const sideKickSpinAnimation = new THREE.AnimationClip("SideKickSpin", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sideKickSpinAnimation);
}

// Animation 203: Crouch and Kick (Combat Stance)
function crouchAndKick(character) {
    const crouchKickAnimation = new THREE.AnimationClip("CrouchKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(crouchKickAnimation);
}

// Animation 208: Kick and Clap (Combat Celebration)
function kickAndClap(character) {
    const kickClapAnimation = new THREE.AnimationClip("KickClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
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
    character.animations.push(kickClapAnimation);
}

// Animation 213: Punch and Leap (Combat Jump)
function punchAndLeap(character) {
    const punchLeapAnimation = new THREE.AnimationClip("PunchLeap", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [1, 1.5, 2],
            [0, 0, 0, 0, 2, 0, 0, 3, 0]
        )
    ]);
    character.animations.push(punchLeapAnimation);
}

// Animation 215: Jump Back and Create Defensive Stance
function jumpBackDefensivePose(character) {
    const jumpBackDefensiveAnimation = new THREE.AnimationClip("JumpBackDefense", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpBackDefensiveAnimation);
}

// Animation 217: Leap and Roundhouse Kick
function leapAndRoundhouseKick(character) {
    const leapKickAnimation = new THREE.AnimationClip("LeapRoundKick", 2.2, [
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
    character.animations.push(leapKickAnimation);
}

// Animation 219: Back Kick with Power
function backKickWithPower(character) {
    const backKickAnimation = new THREE.AnimationClip("BackKickPower", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(backKickAnimation);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sprintWithPullBack,
        bendAndPull,
        stepForwardAndPoint,
        spinArmAndPunch,
        sideKickAndSpin,
        crouchAndKick,
        kickAndClap,
        punchAndLeap,
        jumpBackDefensivePose,
        leapAndRoundhouseKick,
        backKickWithPower
    };
}
