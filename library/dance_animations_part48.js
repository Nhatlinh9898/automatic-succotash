// Dance and Performance Animations Library - Part 48
// Movements 669-700: Performance and dance animations

// Movement 669: Spin and Touch Ground
function spinAndTouchGround(character) {
    const touchGroundAnimation = new THREE.AnimationClip("SpinTouchGround", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchGroundAnimation);
}

// Movement 670: Finishing Gesture with Curved Hands
function finishingGestureWithCurvedHands(character) {
    const curvedHandsAnimation = new THREE.AnimationClip("FinishingGestureCurvedHands", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(curvedHandsAnimation);
}

// Movement 671: Leap and Full Turn
function leapAndFullTurn(character) {
    const fullTurnAnimation = new THREE.AnimationClip("LeapFullTurn", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(fullTurnAnimation);
}

// Movement 672: Stand with Interlaced Hands
function standWithInterlacedHands(character) {
    const interlacedHandsAnimation = new THREE.AnimationClip("StandInterlacedHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 12, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(interlacedHandsAnimation);
}

// Movement 673: Spin and Swing Arms Back
function spinAndSwingArmsBack(character) {
    const swingArmsBackAnimation = new THREE.AnimationClip("SpinSwingArmsBack", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingArmsBackAnimation);
}

// Movement 674: Leap and Cross Hands Up
function leapAndCrossHandsUp(character) {
    const crossHandsUpAnimation = new THREE.AnimationClip("LeapCrossHandsUp", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(crossHandsUpAnimation);
}

// Movement 675: Step and Curve Hands
function stepAndCurveHands(character) {
    const curveHandsAnimation = new THREE.AnimationClip("StepCurveHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(curveHandsAnimation);
}

// Movement 676: Spin Swing Hands and Lift Leg
function spinSwingHandsAndLiftLeg(character) {
    const swingLiftLegAnimation = new THREE.AnimationClip("SpinSwingHandsLiftLeg", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(swingLiftLegAnimation);
}

// Movement 677: Stand and Gracefully Stretch Arms
function standAndGracefullyStretchArms(character) {
    const gracefullyStretchAnimation = new THREE.AnimationClip("StandGracefullyStretchArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(gracefullyStretchAnimation);
}

// Movement 678: Leap and Kick Leg High
function leapAndKickLegHigh(character) {
    const kickLegHighAnimation = new THREE.AnimationClip("LeapKickLegHigh", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(kickLegHighAnimation);
}

// Movement 679: Spin and Gentle Bow
function spinAndGentleBow(character) {
    const gentleBowAnimation = new THREE.AnimationClip("SpinGentleBow", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gentleBowAnimation);
}

// Movement 680: Stop with Hand on Heart
function stopWithHandOnHeart(character) {
    const handOnHeartAnimation = new THREE.AnimationClip("StopHandOnHeart", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handOnHeartAnimation);
}

// Movement 681: Leap and Form V Shape
function leapAndFormVShape(character) {
    const vShapeAnimation = new THREE.AnimationClip("LeapFormVShape", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(vShapeAnimation);
}

// Movement 682: Spin and Touch Shoulder
function spinAndTouchShoulder(character) {
    const touchShoulderAnimation = new THREE.AnimationClip("SpinTouchShoulder", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, Math.PI / 6, 0]
        )
    ]);
    character.animations.push(touchShoulderAnimation);
}

// Movement 683: Stand and Lift Hands Up
function standAndLiftHandsUp(character) {
    const liftHandsUpAnimation = new THREE.AnimationClip("StandLiftHandsUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftHandsUpAnimation);
}

// Movement 684: Leap and Wave Hands Elegantly
function leapAndWaveHandsElegantly(character) {
    const waveHandsAnimation = new THREE.AnimationClip("LeapWaveHandsElegantly", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(waveHandsAnimation);
}

// Movement 685: Spin and Stretch Arms Up
function spinAndStretchArmsUp(character) {
    const stretchArmsUpAnimation = new THREE.AnimationClip("SpinStretchArmsUp", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchArmsUpAnimation);
}

// Movement 686: Step with Soft Arm Pull
function stepWithSoftArmPull(character) {
    const softArmPullAnimation = new THREE.AnimationClip("StepSoftArmPull", 2, [
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
    character.animations.push(softArmPullAnimation);
}

// Movement 687: Leap and Spread Hands Wide
function leapAndSpreadHandsWide(character) {
    const spreadHandsWideAnimation = new THREE.AnimationClip("LeapSpreadHandsWide", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadHandsWideAnimation);
}

// Movement 688: Graceful Spin and Reach
function gracefulSpinAndReach(character) {
    const gracefulReachAnimation = new THREE.AnimationClip("GracefulSpinReach", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gracefulReachAnimation);
}

// Movement 689: Stand and Touch Ground
function standAndTouchGround(character) {
    const touchGroundAnimation = new THREE.AnimationClip("StandTouchGround", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchGroundAnimation);
}

// Movement 690: Artistic Final Bow
function artisticFinalBow(character) {
    const finalBowAnimation = new THREE.AnimationClip("ArtisticFinalBow", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(finalBowAnimation);
}

// Movement 691: Spin and Extend Arm Side
function spinAndExtendArmSide(character) {
    const extendArmSideAnimation = new THREE.AnimationClip("SpinExtendArmSide", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(extendArmSideAnimation);
}

// Movement 692: Leap and Circle Arm Motion
function leapAndCircleArmMotion(character) {
    const circleArmMotionAnimation = new THREE.AnimationClip("LeapCircleArmMotion", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(circleArmMotionAnimation);
}

// Movement 693: Stand and Gracefully Pull Arms Back
function standAndGracefullyPullArmsBack(character) {
    const gracefullyPullArmsBackAnimation = new THREE.AnimationClip("StandGracefullyPullArmsBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(gracefullyPullArmsBackAnimation);
}

// Movement 694: Spin and Touch Head
function spinAndTouchHead(character) {
    const touchHeadAnimation = new THREE.AnimationClip("SpinTouchHead", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(touchHeadAnimation);
}

// Movement 695: Leap and Extend Leg
function leapAndExtendLeg(character) {
    const extendLegAnimation = new THREE.AnimationClip("LeapExtendLeg", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(extendLegAnimation);
}

// Movement 696: Stand and Gentle Salute
function standAndGentleSalute(character) {
    const gentleSaluteAnimation = new THREE.AnimationClip("StandGentleSalute", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gentleSaluteAnimation);
}

// Movement 697: Spin and Spread Arms
function spinAndSpreadArms(character) {
    const spreadArmsAnimation = new THREE.AnimationClip("SpinSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsAnimation);
}

// Movement 698: Leap and Stretch Forward
function leapAndStretchForward(character) {
    const stretchForwardAnimation = new THREE.AnimationClip("LeapStretchForward", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stretchForwardAnimation);
}

// Movement 699: Stand and Touch Heart
function standAndTouchHeart(character) {
    const touchHeartAnimation = new THREE.AnimationClip("StandTouchHeart", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchHeartAnimation);
}

// Movement 700: Final Spin with Crossed Hands
function finalSpinWithCrossedHands(character) {
    const crossedHandsAnimation = new THREE.AnimationClip("FinalSpinCrossedHands", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(crossedHandsAnimation);
}

export {
    spinAndTouchGround,
    finishingGestureWithCurvedHands,
    leapAndFullTurn,
    standWithInterlacedHands,
    spinAndSwingArmsBack,
    leapAndCrossHandsUp,
    stepAndCurveHands,
    spinSwingHandsAndLiftLeg,
    standAndGracefullyStretchArms,
    leapAndKickLegHigh,
    spinAndGentleBow,
    stopWithHandOnHeart,
    leapAndFormVShape,
    spinAndTouchShoulder,
    standAndLiftHandsUp,
    leapAndWaveHandsElegantly,
    spinAndStretchArmsUp,
    stepWithSoftArmPull,
    leapAndSpreadHandsWide,
    gracefulSpinAndReach,
    standAndTouchGround,
    artisticFinalBow,
    spinAndExtendArmSide,
    leapAndCircleArmMotion,
    standAndGracefullyPullArmsBack,
    spinAndTouchHead,
    leapAndExtendLeg,
    standAndGentleSalute,
    spinAndSpreadArms,
    leapAndStretchForward,
    standAndTouchHeart,
    finalSpinWithCrossedHands
};
