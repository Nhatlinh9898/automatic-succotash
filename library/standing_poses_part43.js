// Standing Poses Animations Library - Part 43
// Various standing and idle animations

/**
 * Stand and roll shoulders animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndRollShoulders(character) {
    const rollShouldersAnimation = new THREE.AnimationClip("RollShoulders", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(rollShouldersAnimation);
}

/**
 * Stand with horizontal arms animation
 * @param {THREE.Object3D} character - The character object
 */
function standWithHorizontalArms(character) {
    const horizontalArmsAnimation = new THREE.AnimationClip("HorizontalArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(horizontalArmsAnimation);
}

/**
 * Stand and raise one side animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndRaiseOneSide(character) {
    const raiseOneSideAnimation = new THREE.AnimationClip("RaiseOneSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseOneSideAnimation);
}

/**
 * Point to ground animation
 * @param {THREE.Object3D} character - The character object
 */
function pointToGround(character) {
    const pointGroundAnimation = new THREE.AnimationClip("PointToGround", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointGroundAnimation);
}

/**
 * Stand with hip support animation
 * @param {THREE.Object3D} character - The character object
 */
function standWithHipSupport(character) {
    const hipSupportAnimation = new THREE.AnimationClip("HipSupportStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(hipSupportAnimation);
}

/**
 * Stand and smile raise hands animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndSmileRaiseHands(character) {
    const smileRaiseHandsAnimation = new THREE.AnimationClip("SmileRaiseHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(smileRaiseHandsAnimation);
}

/**
 * Stand and hold heart animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndHoldHeart(character) {
    const holdHeartAnimation = new THREE.AnimationClip("HoldHeart", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(holdHeartAnimation);
}

/**
 * Relaxed stand pose animation
 * @param {THREE.Object3D} character - The character object
 */
function relaxedStandPose(character) {
    const relaxedPoseAnimation = new THREE.AnimationClip("RelaxedPose", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(relaxedPoseAnimation);
}

/**
 * Stand and reach out animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndReachOut(character) {
    const reachOutAnimation = new THREE.AnimationClip("ReachOut", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachOutAnimation);
}

/**
 * Stand and point upward animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndPointUpward(character) {
    const pointUpwardAnimation = new THREE.AnimationClip("PointUpward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(pointUpwardAnimation);
}

/**
 * Stand relaxed one hand on hip animation
 * @param {THREE.Object3D} character - The character object
 */
function standRelaxedOneHandOnHip(character) {
    const relaxedHipAnimation = new THREE.AnimationClip("RelaxedHipStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(relaxedHipAnimation);
}

/**
 * Stand and stretch sideways animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndStretchSideways(character) {
    const stretchSidewaysAnimation = new THREE.AnimationClip("StretchSideways", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stretchSidewaysAnimation);
}

/**
 * Stand with interlocked hands animation
 * @param {THREE.Object3D} character - The character object
 */
function standWithInterlockedHands(character) {
    const interlockedHandsAnimation = new THREE.AnimationClip("InterlockedHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(interlockedHandsAnimation);
}

/**
 * Stand with hands behind animation
 * @param {THREE.Object3D} character - The character object
 */
function standWithHandsBehind(character) {
    const handsBehindAnimation = new THREE.AnimationClip("StandHandsBehind", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsBehindAnimation);
}

/**
 * Stand with shielding hand animation
 * @param {THREE.Object3D} character - The character object
 */
function standWithShieldingHand(character) {
    const shieldingHandAnimation = new THREE.AnimationClip("ShieldingHandStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldingHandAnimation);
}

/**
 * Stand and gesture side animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndGestureSide(character) {
    const gestureSideAnimation = new THREE.AnimationClip("GestureSideStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gestureSideAnimation);
}

/**
 * Stand with confidence animation
 * @param {THREE.Object3D} character - The character object
 */
function standWithConfidence(character) {
    const confidenceStandAnimation = new THREE.AnimationClip("ConfidenceStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(confidenceStandAnimation);
}

/**
 * Point at front foot animation
 * @param {THREE.Object3D} character - The character object
 */
function pointAtFrontFoot(character) {
    const pointFrontFootAnimation = new THREE.AnimationClip("PointFrontFoot", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointFrontFootAnimation);
}

/**
 * Stand and point to side animation
 * @param {THREE.Object3D} character - The character object
 */
function standAndPointToSide(character) {
    const pointSideAnimation = new THREE.AnimationClip("PointToSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}

export {
    standAndRollShoulders,
    standWithHorizontalArms,
    standAndRaiseOneSide,
    pointToGround,
    standWithHipSupport,
    standAndSmileRaiseHands,
    standAndHoldHeart,
    relaxedStandPose,
    standAndReachOut,
    standAndPointUpward,
    standRelaxedOneHandOnHip,
    standAndStretchSideways,
    standWithInterlockedHands,
    standWithHandsBehind,
    standWithShieldingHand,
    standAndGestureSide,
    standWithConfidence,
    pointAtFrontFoot,
    standAndPointToSide
};
