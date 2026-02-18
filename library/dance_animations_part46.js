/**
 * Dance & Artistic Animations - Part 46
 * Contains graceful, expressive, and artistic movement animations
 */

function leapAndWaveArms(character) {
    const waveArmsAnimation = new THREE.AnimationClip("LeapWaveArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(waveArmsAnimation);
}

function gracefulBowTwist(character) {
    const bowTwistAnimation = new THREE.AnimationClip("GracefulBowTwist", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bowTwistAnimation);
}

function spinWithSideSpread(character) {
    const sideSpreadAnimation = new THREE.AnimationClip("SpinWithSideSpread", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(sideSpreadAnimation);
}

function stepWithGentleReach(character) {
    const gentleReachAnimation = new THREE.AnimationClip("StepWithGentleReach", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gentleReachAnimation);
}

function doubleSpinJump(character) {
    const doubleSpinAnimation = new THREE.AnimationClip("DoubleSpinJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(doubleSpinAnimation);
}

function jumpWithCircularArms(character) {
    const circularArmsAnimation = new THREE.AnimationClip("JumpCircularArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(circularArmsAnimation);
}

function liftLegGracefully(character) {
    const legLiftAnimation = new THREE.AnimationClip("LiftLegGracefully", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(legLiftAnimation);
}

function spinAndRaiseHand(character) {
    const raiseHandSpinAnimation = new THREE.AnimationClip("SpinRaiseHand", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseHandSpinAnimation);
}

function standAndSwingLeg(character) {
    const swingLegAnimation = new THREE.AnimationClip("StandSwingLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingLegAnimation);
}

function pullArmAndLeap(character) {
    const pullLeapAnimation = new THREE.AnimationClip("PullArmLeap", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pullLeapAnimation);
}

function leapAndReachForward(character) {
    const reachForwardAnimation = new THREE.AnimationClip("LeapReachForward", 2, [
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
    character.animations.push(reachForwardAnimation);
}

function spinAndPullForward(character) {
    const pullForwardAnimation = new THREE.AnimationClip("SpinPullForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullForwardAnimation);
}

function sShapePose(character) {
    const sShapeAnimation = new THREE.AnimationClip("SShapePose", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(sShapeAnimation);
}

function leapAndSwingArmsBack(character) {
    const swingArmsBackAnimation = new THREE.AnimationClip("LeapSwingArmsBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingArmsBackAnimation);
}

function spinAndLiftLeg(character) {
    const liftLegAnimation = new THREE.AnimationClip("SpinLiftLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}

function stepAndCircleArms(character) {
    const circleArmsAnimation = new THREE.AnimationClip("StepCircleArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(circleArmsAnimation);
}

function bendAndPullArmsBack(character) {
    const pullArmsBackAnimation = new THREE.AnimationClip("BendPullArmsBack", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullArmsBackAnimation);
}

function standAndSpreadArms(character) {
    const spreadArmsAnimation = new THREE.AnimationClip("StandSpreadArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsAnimation);
}

function spinAndReachForward(character) {
    const reachForwardAnimation = new THREE.AnimationClip("SpinReachForward", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}

function standAndStretchUp(character) {
    const stretchUpAnimation = new THREE.AnimationClip("StandStretchUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(stretchUpAnimation);
}

function leapAndLiftArmsHigh(character) {
    const liftArmsHighAnimation = new THREE.AnimationClip("LeapLiftArmsHigh", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(liftArmsHighAnimation);
}

function standWithGracefulPull(character) {
    const gracefulPullAnimation = new THREE.AnimationClip("StandGracefulPull", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gracefulPullAnimation);
}

// Export all dance animations
export {
    leapAndWaveArms,
    gracefulBowTwist,
    spinWithSideSpread,
    stepWithGentleReach,
    doubleSpinJump,
    jumpWithCircularArms,
    liftLegGracefully,
    spinAndRaiseHand,
    standAndSwingLeg,
    pullArmAndLeap,
    leapAndReachForward,
    spinAndPullForward,
    sShapePose,
    leapAndSwingArmsBack,
    spinAndLiftLeg,
    stepAndCircleArms,
    bendAndPullArmsBack,
    standAndSpreadArms,
    spinAndReachForward,
    standAndStretchUp,
    leapAndLiftArmsHigh,
    standWithGracefulPull
};
