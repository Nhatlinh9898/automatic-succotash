// Library: Movement Animations (Part 42)
// Contains running, jumping, leaping animations with various arm movements

/**
 * Nhảy lên và giơ tay lên trên - Vui mừng
 */
function leapAndRaiseHands(character) {
    const raiseHandsAnimation = new THREE.AnimationClip("LeapRaiseHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseHandsAnimation);
}

/**
 * Chạy và xoay người nhẹ - Thay đổi hướng
 */
function sprintWithLightSpin(character) {
    const lightSpinAnimation = new THREE.AnimationClip("SprintLightSpin", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(lightSpinAnimation);
}

/**
 * Nhảy về phía trước với tay giơ cao - Quyết tâm
 */
function leapForwardWithRaisedArms(character) {
    const forwardLeapAnimation = new THREE.AnimationClip("LeapForwardRaisedArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(forwardLeapAnimation);
}

/**
 * Nhảy với tay vung đối lập - Cân bằng
 */
function leapWithOppositeSwings(character) {
    const oppositeSwingsAnimation = new THREE.AnimationClip("LeapOppositeSwings", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(oppositeSwingsAnimation);
}

/**
 * Lùi lại và ôm ngực - Cảm xúc mạnh
 */
function stepBackAndHoldChest(character) {
    const holdChestAnimation = new THREE.AnimationClip("StepBackHoldChest", 1.8, [
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
    character.animations.push(holdChestAnimation);
}

/**
 * Nhảy cao và khoanh tay - Phong cách mạnh mẽ
 */
function leapAndCrossArms(character) {
    const crossArmsLeapAnimation = new THREE.AnimationClip("LeapCrossArms", 2, [
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
    character.animations.push(crossArmsLeapAnimation);
}

/**
 * Xoay người và giơ tay che mặt - Phòng thủ/tránh né
 */
function spinAndShieldFace(character) {
    const shieldFaceAnimation = new THREE.AnimationClip("SpinShieldFace", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldFaceAnimation);
}

/**
 * Nhảy và ăn mừng - Chiến thắng
 */
function leapAndCelebrate(character) {
    const celebrateAnimation = new THREE.AnimationClip("LeapCelebrate", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(celebrateAnimation);
}

/**
 * Chạy với tay vung linh hoạt - Năng động
 */
function sprintWithDynamicArms(character) {
    const dynamicArmsAnimation = new THREE.AnimationClip("SprintDynamicArms", 2, [
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
    character.animations.push(dynamicArmsAnimation);
}

/**
 * Nhảy và tung tay lên - Chiến thắng
 */
function leapWithVictoryPose(character) {
    const victoryPoseAnimation = new THREE.AnimationClip("LeapVictoryPose", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(victoryPoseAnimation);
}

/**
 * Chạy với tay vung nhanh - Tốc độ
 */
function sprintWithFastArms(character) {
    const fastArmsAnimation = new THREE.AnimationClip("SprintFastArms", 2, [
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
    character.animations.push(fastArmsAnimation);
}

/**
 * Nhảy cao với tay mở rộng - Chào mừng/phấn khích
 */
function leapWithArmsSpread(character) {
    const armsSpreadAnimation = new THREE.AnimationClip("LeapArmsSpread", 2, [
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
    character.animations.push(armsSpreadAnimation);
}

/**
 * Nhảy lên và xoay tay sang hai bên - Linh hoạt
 */
function leapAndSwingSideways(character) {
    const swingSidewaysAnimation = new THREE.AnimationClip("LeapSwingSideways", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(swingSidewaysAnimation);
}

/**
 * Chạy với tay giơ cao linh hoạt - Năng động, vui vẻ
 */
function sprintWithRaisedArms(character) {
    const raisedArmsRunAnimation = new THREE.AnimationClip("SprintRaisedArms", 2, [
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
    character.animations.push(raisedArmsRunAnimation);
}

/**
 * Nhảy lên với tay giơ ngang - Cân bằng, mạnh mẽ
 */
function leapWithHorizontalArms(character) {
    const horizontalArmsAnimation = new THREE.AnimationClip("LeapHorizontalArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(horizontalArmsAnimation);
}

export {
    leapAndRaiseHands,
    sprintWithLightSpin,
    leapForwardWithRaisedArms,
    leapWithOppositeSwings,
    stepBackAndHoldChest,
    leapAndCrossArms,
    spinAndShieldFace,
    leapAndCelebrate,
    sprintWithDynamicArms,
    leapWithVictoryPose,
    sprintWithFastArms,
    leapWithArmsSpread,
    leapAndSwingSideways,
    sprintWithRaisedArms,
    leapWithHorizontalArms
};
