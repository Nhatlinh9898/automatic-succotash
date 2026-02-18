// Gesture Animations Library - Part 47
// Contains standing poses, hand gestures, and elegant movements

// Movement 625: Stand And Cross Hands
function standAndCrossHands(character) {
    const crossHandsAnimation = new THREE.AnimationClip("StandCrossHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossHandsAnimation);
}

// Movement 626: Stand And Swing One Hand
function standAndSwingOneHand(character) {
    const swingOneHandAnimation = new THREE.AnimationClip("StandSwingOneHand", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingOneHandAnimation);
}

// Movement 628: Stand And Lift Leg
function standAndLiftLeg(character) {
    const liftLegAnimation = new THREE.AnimationClip("StandLiftLeg", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}

// Movement 630: Finishing Pose
function finishingPose(character) {
    const finishingPoseAnimation = new THREE.AnimationClip("FinishingPose", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(finishingPoseAnimation);
}

// Movement 632: Elegant Arm Reach
function elegantArmReach(character) {
    const armReachAnimation = new THREE.AnimationClip("ElegantArmReach", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(armReachAnimation);
}

// Movement 635: Stand And Lift Leg Elegantly
function standAndLiftLegElegantly(character) {
    const liftLegAnimation = new THREE.AnimationClip("StandLiftLegElegantly", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}

// Movement 638: Step And Gracefully Reach
function stepAndGracefullyReach(character) {
    const gracefullyReachAnimation = new THREE.AnimationClip("StepGracefullyReach", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gracefullyReachAnimation);
}

// Movement 640: Stand And Elegantly Open Hands
function standAndElegantlyOpenHands(character) {
    const openHandsAnimation = new THREE.AnimationClip("StandElegantlyOpenHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openHandsAnimation);
}

// Movement 642: Stand And Point Side Elegantly
function standAndPointSideElegantly(character) {
    const pointSideAnimation = new THREE.AnimationClip("PointSideElegantly", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}

// Movement 644: Double Step And Lift Arm
function doubleStepAndLiftArm(character) {
    const liftArmAnimation = new THREE.AnimationClip("DoubleStepLiftArm", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 1, 0, 0, 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftArmAnimation);
}

// Movement 647: Slow Step And Open Arms
function slowStepAndOpenArms(character) {
    const openArmsAnimation = new THREE.AnimationClip("SlowStepOpenArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}

// Movement 648: Stand And Softly Swing Arms
function standAndSoftlySwingArms(character) {
    const softlySwingArmsAnimation = new THREE.AnimationClip("StandSoftlySwingArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(softlySwingArmsAnimation);
}

// Movement 650: Stand And Gracefully Stretch
function standAndGracefullyStretch(character) {
    const gracefullyStretchAnimation = new THREE.AnimationClip("StandGracefullyStretch", 1.8, [
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
    character.animations.push(gracefullyStretchAnimation);
}

// Movement 652: Stand And Open Hands Gently
function standAndOpenHandsGently(character) {
    const openHandsGentlyAnimation = new THREE.AnimationClip("StandOpenHandsGently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openHandsGentlyAnimation);
}

// Movement 655: Step And Pull Back Arm
function stepAndPullBackArm(character) {
    const pullBackArmAnimation = new THREE.AnimationClip("StepPullBackArm", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullBackArmAnimation);
}

// Movement 658: Stand And Interlace Hands
function standAndInterlaceHands(character) {
    const interlaceHandsAnimation = new THREE.AnimationClip("StandInterlaceHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 12, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(interlaceHandsAnimation);
}

// Movement 662: Stand And Reach Forward Elegantly
function standAndReachForwardElegantly(character) {
    const reachForwardAnimation = new THREE.AnimationClip("StandReachForwardElegantly", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}

// Movement 665: Stand Gracefully With Crossed Hands
function standGracefullyWithCrossedHands(character) {
    const crossedHandsAnimation = new THREE.AnimationClip("StandCrossedHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossedHandsAnimation);
}

// Movement 668: Step And Lift Leg Naturally
function stepAndLiftLegNaturally(character) {
    const liftLegAnimation = new THREE.AnimationClip("StepLiftLegNaturally", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.5, 1, 1.5, 2],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}

export {
    standAndCrossHands,
    standAndSwingOneHand,
    standAndLiftLeg,
    finishingPose,
    elegantArmReach,
    standAndLiftLegElegantly,
    stepAndGracefullyReach,
    standAndElegantlyOpenHands,
    standAndPointSideElegantly,
    doubleStepAndLiftArm,
    slowStepAndOpenArms,
    standAndSoftlySwingArms,
    standAndGracefullyStretch,
    standAndOpenHandsGently,
    stepAndPullBackArm,
    standAndInterlaceHands,
    standAndReachForwardElegantly,
    standGracefullyWithCrossedHands,
    stepAndLiftLegNaturally
};
