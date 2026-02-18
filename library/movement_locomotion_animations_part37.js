/**
 * Movement and Locomotion Animations Library - Part 37
 * Contains character animations for running, jumping, walking, and other movement-based actions
 */

// Animation 180: Sprint and Brake
function sprintAndBrake(character) {
    const brakeAnimation = new THREE.AnimationClip("SprintBrake", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 3.2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(brakeAnimation);
}

// Animation 182: Run and Clap
function runAndClap(character) {
    const runClapAnimation = new THREE.AnimationClip("RunClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
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
    character.animations.push(runClapAnimation);
}

// Animation 184: Slow Walk and Nod
function slowWalkAndNod(character) {
    const slowWalkNodAnimation = new THREE.AnimationClip("SlowWalkNod", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 0.7, 0, 0, 1.4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slowWalkNodAnimation);
}

// Animation 187: Side Kick and Spin
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

// Animation 192: Sprint with Waving Hands
function sprintWithWavingHands(character) {
    const sprintWaveAnimation = new THREE.AnimationClip("SprintWaveHands", 2, [
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
    character.animations.push(sprintWaveAnimation);
}

// Animation 196: Sprint with Casual Shrug
function sprintWithCasualShrug(character) {
    const sprintShrugAnimation = new THREE.AnimationClip("SprintCasualShrug", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sprintShrugAnimation);
}

// Animation 198: Jump with Swing Leg
function jumpWithSwingLeg(character) {
    const jumpSwingLegAnimation = new THREE.AnimationClip("JumpSwingLeg", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpSwingLegAnimation);
}

// Animation 200: Sprint and Shrug Shoulders
function sprintWithCasualShrug(character) {
    const sprintShrugAnimation = new THREE.AnimationClip("SprintCasualShrug", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sprintShrugAnimation);
}

// Animation 201: Leap with Spinning Arms
function leapWithSpinningArms(character) {
    const leapSpinAnimation = new THREE.AnimationClip("LeapSpinningArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapSpinAnimation);
}

// Animation 202: Stand and Look Around
function standAndLookAround(character) {
    const lookAroundAnimation = new THREE.AnimationClip("StandLookAround", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(lookAroundAnimation);
}

// Animation 203: Crouch and Kick
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

// Animation 205: Sprint with Raised Arms
function sprintWithRaisedArms(character) {
    const sprintRaiseAnimation = new THREE.AnimationClip("SprintRaisedArms", 2.2, [
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
    character.animations.push(sprintRaiseAnimation);
}

// Animation 208: Kick and Clap
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

// Animation 210: Sprint with Swinging Arms
function sprintWithSwingingArms(character) {
    const sprintSwingAnimation = new THREE.AnimationClip("SprintSwingArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(sprintSwingAnimation);
}

// Animation 212: Step Back and Look Back
function stepBackAndLookBack(character) {
    const lookBackAnimation = new THREE.AnimationClip("StepBackLookBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(lookBackAnimation);
}

// Animation 213: Punch and Leap
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

// Animation 216: Kneel on One Leg and Look Forward
function kneelOneLegAndLook(character) {
    const kneelLookAnimation = new THREE.AnimationClip("KneelLookForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelLookAnimation);
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
        sprintAndBrake,
        runAndClap,
        slowWalkAndNod,
        sideKickAndSpin,
        sprintWithWavingHands,
        sprintWithCasualShrug,
        jumpWithSwingLeg,
        sprintWithCasualShrug,
        leapWithSpinningArms,
        standAndLookAround,
        crouchAndKick,
        sprintWithRaisedArms,
        kickAndClap,
        sprintWithSwingingArms,
        stepBackAndLookBack,
        punchAndLeap,
        jumpBackDefensivePose,
        kneelOneLegAndLook,
        leapAndRoundhouseKick,
        backKickWithPower
    };
}
