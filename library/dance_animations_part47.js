// Dance Animations Library - Part 47
// Contains elegant and graceful dance movements

// Movement 623: Spin And High Kick
function spinAndHighKick(character) {
    const highKickAnimation = new THREE.AnimationClip("SpinHighKick", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(highKickAnimation);
}

// Movement 624: Jump And Arc Arms
function jumpAndArcArms(character) {
    const arcArmsAnimation = new THREE.AnimationClip("JumpArcArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(arcArmsAnimation);
}

// Movement 627: Spin And Pull High
function spinAndPullHigh(character) {
    const pullHighAnimation = new THREE.AnimationClip("SpinPullHigh", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(pullHighAnimation);
}

// Movement 631: Aerial Full Spin
function aerialFullSpin(character) {
    const fullSpinAnimation = new THREE.AnimationClip("AerialFullSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(fullSpinAnimation);
}

// Movement 633: Twist And Bend
function twistAndBend(character) {
    const twistBendAnimation = new THREE.AnimationClip("TwistAndBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(twistBendAnimation);
}

// Movement 636: Spin And Swing Leg
function spinAndSwingLeg(character) {
    const swingLegAnimation = new THREE.AnimationClip("SpinSwingLeg", 1.8, [
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
    character.animations.push(swingLegAnimation);
}

// Movement 637: Graceful Hand Swirl
function gracefulHandSwirl(character) {
    const handSwirlAnimation = new THREE.AnimationClip("GracefulHandSwirl", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(handSwirlAnimation);
}

// Movement 641: Double Aerial Spin
function doubleAerialSpin(character) {
    const doubleSpinAnimation = new THREE.AnimationClip("DoubleAerialSpin", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.5, 3],
            [0, 0, 0, 4 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(doubleSpinAnimation);
}

// Movement 643: Spin And Arc Arms
function spinAndArcArms(character) {
    const arcArmsAnimation = new THREE.AnimationClip("SpinArcArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(arcArmsAnimation);
}

// Movement 646: Spin And Flick Arms
function spinAndFlickArms(character) {
    const flickArmsAnimation = new THREE.AnimationClip("SpinFlickArms", 2, [
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
    character.animations.push(flickArmsAnimation);
}

// Movement 653: Spin And Lift Back Leg
function spinAndLiftBackLeg(character) {
    const liftBackLegAnimation = new THREE.AnimationClip("SpinLiftBackLeg", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(liftBackLegAnimation);
}

// Movement 656: Spin And Raise Arm High
function spinAndRaiseArmHigh(character) {
    const raiseArmHighAnimation = new THREE.AnimationClip("SpinRaiseArmHigh", 2, [
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
    character.animations.push(raiseArmHighAnimation);
}

// Movement 660: Finishing Spin Pose
function finishingSpinPose(character) {
    const spinPoseAnimation = new THREE.AnimationClip("FinishingSpinPose", 2, [
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
    character.animations.push(spinPoseAnimation);
}

// Movement 663: Spin And Sweep Arms
function spinAndSweepArms(character) {
    const sweepArmsAnimation = new THREE.AnimationClip("SpinSweepArms", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(sweepArmsAnimation);
}

// Movement 666: Spin And Pull Arms Back
function spinAndPullArmsBack(character) {
    const pullArmsBackAnimation = new THREE.AnimationClip("SpinPullArmsBack", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullArmsBackAnimation);
}

export {
    spinAndHighKick,
    jumpAndArcArms,
    spinAndPullHigh,
    aerialFullSpin,
    twistAndBend,
    spinAndSwingLeg,
    gracefulHandSwirl,
    doubleAerialSpin,
    spinAndArcArms,
    spinAndFlickArms,
    spinAndLiftBackLeg,
    spinAndRaiseArmHigh,
    finishingSpinPose,
    spinAndSweepArms,
    spinAndPullArmsBack
};
