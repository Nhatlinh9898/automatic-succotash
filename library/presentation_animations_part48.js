// Presentation and Gesture Animations Library - Part 48
// Movements 701-713: Presentation and communication animations

// Movement 701: Stand and Gesture Forward Confidently
function standAndGestureForwardConfidently(character) {
    const gestureForwardAnimation = new THREE.AnimationClip("GestureForwardConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gestureForwardAnimation);
}

// Movement 702: Scan Room with Extended Arms
function scanRoomWithExtendedArms(character) {
    const scanRoomAnimation = new THREE.AnimationClip("ScanRoomWithArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(scanRoomAnimation);
}

// Movement 703: Raise Hand and Emphasize
function raiseHandAndEmphasize(character) {
    const emphasizeAnimation = new THREE.AnimationClip("RaiseHandEmphasize", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 3, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(emphasizeAnimation);
}

// Movement 704: Nod with Folded Arms
function nodWithFoldedArms(character) {
    const foldedArmsAnimation = new THREE.AnimationClip("NodWithFoldedArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, -Math.PI / 8, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(foldedArmsAnimation);
}

// Movement 705: Step Forward and Point to Audience
function stepForwardAndPointToAudience(character) {
    const pointToAudienceAnimation = new THREE.AnimationClip("StepForwardPointToAudience", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointToAudienceAnimation);
}

// Movement 706: Step Back with Calm Gesture
function stepBackAndCalmGesture(character) {
    const calmGestureAnimation = new THREE.AnimationClip("StepBackCalmGesture", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, -Math.PI / 6, 0, 0, Math.PI / 6, 0]
        )
    ]);
    character.animations.push(calmGestureAnimation);
}

// Movement 707: Point to Screen Confidently
function pointToScreenConfidently(character) {
    const pointToScreenAnimation = new THREE.AnimationClip("PointToScreenConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointToScreenAnimation);
}

// Movement 708: Spread Arms and Smile
function spreadArmsAndSmile(character) {
    const smileAnimation = new THREE.AnimationClip("SpreadArmsSmile", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(smileAnimation);
}

// Movement 709: Raise Arm Confidently
function raiseArmConfidently(character) {
    const raiseArmAnimation = new THREE.AnimationClip("RaiseArmConfidently", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}

// Movement 710: Stand and Touch Heart Gently
function standAndTouchHeartGently(character) {
    const touchHeartGentlyAnimation = new THREE.AnimationClip("TouchHeartGently", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchHeartGentlyAnimation);
}

// Movement 711: Step Back with Pulling Gesture
function stepBackWithPullingGesture(character) {
    const pullingGestureAnimation = new THREE.AnimationClip("StepBackPullingGesture", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, -Math.PI / 8, 0, 0, Math.PI / 8, 0]
        )
    ]);
    character.animations.push(pullingGestureAnimation);
}

// Movement 712: Stand with Raised Hands
function standWithRaisedHands(character) {
    const raisedHandsAnimation = new THREE.AnimationClip("StandRaisedHands", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 3, 0, 0, -Math.PI / 3, 0]
        )
    ]);
    character.animations.push(raisedHandsAnimation);
}

export {
    standAndGestureForwardConfidently,
    scanRoomWithExtendedArms,
    raiseHandAndEmphasize,
    nodWithFoldedArms,
    stepForwardAndPointToAudience,
    stepBackAndCalmGesture,
    pointToScreenConfidently,
    spreadArmsAndSmile,
    raiseArmConfidently,
    standAndTouchHeartGently,
    stepBackWithPullingGesture,
    standWithRaisedHands
};
