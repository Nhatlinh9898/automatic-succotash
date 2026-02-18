/**
 * Arm and Upper Body Animations Library - Part 37
 * Contains character animations for arm movements and upper body gestures
 */

// Animation 178: Lift Both Arms High
function liftBothArmsHigh(character) {
    const liftArmsAnimation = new THREE.AnimationClip("LiftBothArmsHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(liftArmsAnimation);
}

// Animation 179: Turn and Touch Back
function turnAndTouchBack(character) {
    const touchBackAnimation = new THREE.AnimationClip("TurnTouchBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchBackAnimation);
}

// Animation 181: Crouch and Grab Object
function crouchAndGrabObject(character) {
    const crouchGrabAnimation = new THREE.AnimationClip("CrouchGrabObject", 1.6, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.8, 1.6],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(crouchGrabAnimation);
}

// Animation 183: Leap and Point Up
function leapAndPointUp(character) {
    const leapPointAnimation = new THREE.AnimationClip("LeapPointUp", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapPointAnimation);
}

// Animation 185: Spin Arm and Punch
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

// Animation 186: Stand and Nod in Approval
function standAndNodInApproval(character) {
    const nodApprovalAnimation = new THREE.AnimationClip("StandNodApproval", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodApprovalAnimation);
}

// Animation 188: Stand and Pat Shoulder
function standAndPatShoulder(character) {
    const patShoulderAnimation = new THREE.AnimationClip("PatShoulder", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(patShoulderAnimation);
}

// Animation 189: Toss Object and Catch with Hands
function tossAndCatch(character) {
    const tossCatchAnimation = new THREE.AnimationClip("TossCatch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tossCatchAnimation);
}

// Animation 190: Stand with Leadership Pose
function standWithLeadershipPose(character) {
    const leadershipPoseAnimation = new THREE.AnimationClip("LeadershipPose", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(leadershipPoseAnimation);
}

// Animation 191: Bend and Relax Arms
function bendAndRelaxArms(character) {
    const bendRelaxAnimation = new THREE.AnimationClip("BendRelaxArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bendRelaxAnimation);
}

// Animation 193: Stand with Rotating Hands
function standAndRotateHands(character) {
    const rotateHandsAnimation = new THREE.AnimationClip("StandRotateHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(rotateHandsAnimation);
}

// Animation 194: Leap High with Arms Stretching
function leapAndStretchUp(character) {
    const leapStretchAnimation = new THREE.AnimationClip("LeapStretchUp", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(leapStretchAnimation);
}

// Animation 195: Step Back with Hand on Chest
function stepBackAndHoldChest(character) {
    const stepBackChestAnimation = new THREE.AnimationClip("StepBackHoldChest", 1.8, [
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
    character.animations.push(stepBackChestAnimation);
}

// Animation 197: Stand with Arms Raised High and Stretching Forward
function standAndStretchForward(character) {
    const stretchForwardAnimation = new THREE.AnimationClip("StretchForwardStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchForwardAnimation);
}

// Animation 199: Shake Head and Stand Solid
function shakeHeadAndStandSolid(character) {
    const shakeHeadSolidAnimation = new THREE.AnimationClip("ShakeHeadStandSolid", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(shakeHeadSolidAnimation);
}

// Animation 204: Stand with Hands Behind Back
function standWithHandsBehindBack(character) {
    const handsBehindAnimation = new THREE.AnimationClip("HandsBehindBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsBehindAnimation);
}

// Animation 206: Shrug and Bend Slightly
function shrugAndBend(character) {
    const shrugBendAnimation = new THREE.AnimationClip("ShrugBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shrugBendAnimation);
}

// Animation 207: Raise Arm and Turn Head Slightly
function raiseArmAndTurnHead(character) {
    const raiseTurnAnimation = new THREE.AnimationClip("RaiseArmTurnHead", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseTurnAnimation);
}

// Animation 209: Stand and Extend Hands Forward
function standAndExtendHandsForward(character) {
    const extendHandsAnimation = new THREE.AnimationClip("ExtendHandsForward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(extendHandsAnimation);
}

// Animation 211: Stand and Point to Sky
function pointToSky(character) {
    const pointSkyAnimation = new THREE.AnimationClip("PointSky", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointSkyAnimation);
}

// Animation 214: Stand with Arms Raised in Arc
function openArmsInArc(character) {
    const openArmsArcAnimation = new THREE.AnimationClip("OpenArmsArc", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(openArmsArcAnimation);
}

// Animation 218: Stand and Raise Hand to Forehead
function standAndSalute(character) {
    const saluteAnimation = new THREE.AnimationClip("StandSalute", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(saluteAnimation);
}

// Animation 220: Spin and Nod
function spinAndNod(character) {
    const spinNodAnimation = new THREE.AnimationClip("SpinNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinNodAnimation);
}

// Animation 221: Bend and Pull
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

// Animation 222: Step Forward and Point
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

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        liftBothArmsHigh,
        turnAndTouchBack,
        crouchAndGrabObject,
        leapAndPointUp,
        spinArmAndPunch,
        standAndNodInApproval,
        standAndPatShoulder,
        tossAndCatch,
        standWithLeadershipPose,
        bendAndRelaxArms,
        standAndRotateHands,
        leapAndStretchUp,
        stepBackAndHoldChest,
        standAndStretchForward,
        shakeHeadAndStandSolid,
        standWithHandsBehindBack,
        shrugAndBend,
        raiseArmAndTurnHead,
        standAndExtendHandsForward,
        pointToSky,
        openArmsInArc,
        standAndSalute,
        spinAndNod,
        bendAndPull,
        stepForwardAndPoint
    };
}
