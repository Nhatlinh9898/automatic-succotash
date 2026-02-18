// Athletic Animations Library - Part 47
// Contains athletic movements, jumps, and sports actions

// Movement 629: Jump And Stretch Up
function jumpAndStretchUp(character) {
    const stretchUpAnimation = new THREE.AnimationClip("JumpStretchUp", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchUpAnimation);
}

// Movement 634: Leap And Circle Hands
function leapAndCircleHands(character) {
    const circleHandsAnimation = new THREE.AnimationClip("LeapCircleHands", 2, [
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
    character.animations.push(circleHandsAnimation);
}

// Movement 639: Leap And Spread Hands
function leapAndSpreadHands(character) {
    const spreadHandsAnimation = new THREE.AnimationClip("LeapSpreadHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadHandsAnimation);
}

// Movement 645: Leap And Pull Leg Back
function leapAndPullLegBack(character) {
    const pullLegBackAnimation = new THREE.AnimationClip("LeapPullLegBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullLegBackAnimation);
}

// Movement 649: Leap And Cross Arms
function leapAndCrossArms(character) {
    const crossArmsAnimation = new THREE.AnimationClip("LeapCrossArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 4, 0, 0, -Math.PI / 4, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}

// Movement 651: Leap And Cross Hands Front
function leapAndCrossHandsFront(character) {
    const crossHandsFrontAnimation = new THREE.AnimationClip("LeapCrossHandsFront", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 4, 0, 0, -Math.PI / 4, 0]
        )
    ]);
    character.animations.push(crossHandsFrontAnimation);
}

// Movement 654: Leap And Touch Head
function leapAndTouchHead(character) {
    const touchHeadAnimation = new THREE.AnimationClip("LeapTouchHead", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(touchHeadAnimation);
}

// Movement 657: Leap And Reach Forward Body
function leapAndReachForwardBody(character) {
    const reachForwardBodyAnimation = new THREE.AnimationClip("LeapReachForwardBody", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardBodyAnimation);
}

// Movement 661: Leap With Flowing Arms
function leapWithFlowingArms(character) {
    const flowingArmsAnimation = new THREE.AnimationClip("LeapFlowingArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(flowingArmsAnimation);
}

// Movement 664: Leap And Stretch Hands Up
function leapAndStretchHandsUp(character) {
    const stretchHandsUpAnimation = new THREE.AnimationClip("LeapStretchHandsUp", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchHandsUpAnimation);
}

// Movement 667: Leap And Wide Spread Arms
function leapAndWideSpreadArms(character) {
    const wideSpreadArmsAnimation = new THREE.AnimationClip("LeapWideSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(wideSpreadArmsAnimation);
}

export {
    jumpAndStretchUp,
    leapAndCircleHands,
    leapAndSpreadHands,
    leapAndPullLegBack,
    leapAndCrossArms,
    leapAndCrossHandsFront,
    leapAndTouchHead,
    leapAndReachForwardBody,
    leapWithFlowingArms,
    leapAndStretchHandsUp,
    leapAndWideSpreadArms
};
