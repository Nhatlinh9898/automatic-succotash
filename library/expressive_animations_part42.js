// Library: Expressive/Emotional Animations (Part 42)
// Contains gestures, emotional expressions and social interaction animations

/**
 * Nhún vai và giơ tay - Ngạc nhiên
 */
function shrugAndRaiseArm(character) {
    const shrugRaiseAnimation = new THREE.AnimationClip("ShrugRaiseArm", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(shrugRaiseAnimation);
}

/**
 * Chỉ tay và cúi đầu - Tỏ ý kính trọng
 */
function pointAndBow(character) {
    const pointBowAnimation = new THREE.AnimationClip("PointAndBow", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pointBowAnimation);
}

/**
 * Nhún vai và quay đầu sang ngang - Thắc mắc
 */
function shrugAndLookSide(character) {
    const lookSideAnimation = new THREE.AnimationClip("ShrugLookSide", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(lookSideAnimation);
}

/**
 * Quỳ xuống và tay chắp trước - Cầu nguyện
 */
function kneelAndFoldHands(character) {
    const foldHandsAnimation = new THREE.AnimationClip("KneelFoldHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(foldHandsAnimation);
}

/**
 * Đưa tay ra phía trước - Đề nghị/giao tiếp
 */
function offerHandGesture(character) {
    const offerHandAnimation = new THREE.AnimationClip("OfferHandGesture", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(offerHandAnimation);
}

/**
 * Quỳ một gối và giơ tay lên trời - Cầu nguyện/hy vọng
 */
function kneelAndRaiseToSky(character) {
    const raiseSkyAnimation = new THREE.AnimationClip("KneelRaiseToSky", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseSkyAnimation);
}

/**
 * Cúi người và giơ tay lên phía trước - Nâng vật
 */
function bendAndLiftForward(character) {
    const liftForwardAnimation = new THREE.AnimationClip("BendLiftForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(liftForwardAnimation);
}

/**
 * Quỳ một gối và đưa tay ra phía trước - Hòa giải/giao tiếp
 */
function kneelWithExtendedHand(character) {
    const extendedHandAnimation = new THREE.AnimationClip("KneelExtendedHand", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(extendedHandAnimation);
}

export {
    shrugAndRaiseArm,
    pointAndBow,
    shrugAndLookSide,
    kneelAndFoldHands,
    offerHandGesture,
    kneelAndRaiseToSky,
    bendAndLiftForward,
    kneelWithExtendedHand
};
