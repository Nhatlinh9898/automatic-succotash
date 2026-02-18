// Gesture Animations Library - Part 40
// Contains character gesture and expression animations

/**
 * Đứng Và Đưa Tay Lên Trán
 * Thêm hành động đứng yên và đưa tay lên trán như đang che mắt nhìn xa.
 */
function shieldEyesAndLook(character) {
    const shieldEyesAnimation = new THREE.AnimationClip("ShieldEyesAndLook", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldEyesAnimation);
}

/**
 * Đứng Với Tay Khoanh Và Quan Sát
 * Thêm tư thế đứng khoanh tay và quay đầu nhìn xung quanh như đang định giá.
 */
function standCrossArmsAndObserve(character) {
    const crossArmsObserveAnimation = new THREE.AnimationClip("CrossArmsObserve", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(crossArmsObserveAnimation);
}

/**
 * Đứng Với Tay Chỉ Ngón Trỏ
 * Thêm hành động đứng yên và giơ một tay chỉ ngón trỏ về phía trước để thể hiện sự nhấn mạnh.
 */
function standAndPointFinger(character) {
    const pointFingerAnimation = new THREE.AnimationClip("PointFinger", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(pointFingerAnimation);
}

/**
 * Lắc Đầu Và Cười
 * Thêm hành động đứng yên, lắc đầu nhẹ nhàng kèm nụ cười thân thiện.
 */
function shakeHeadAndSmile(character) {
    const shakeSmileAnimation = new THREE.AnimationClip("ShakeHeadSmile", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shakeSmileAnimation);
}

/**
 * Đứng Và Đưa Tay Lên Đầu
 * Thêm hành động đứng yên và đưa cả hai tay lên đầu biểu hiện sự vui vẻ hoặc thoải mái.
 */
function raiseHandsAboveHead(character) {
    const raiseHandsAnimation = new THREE.AnimationClip("RaiseHandsAboveHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseHandsAnimation);
}

/**
 * Đứng Với Tay Đưa Lên Và Cười
 * Thêm hành động đứng yên, tay giơ lên cao và biểu hiện nụ cười vui.
 */
function standAndRaiseHandsWithSmile(character) {
    const raiseSmileAnimation = new THREE.AnimationClip("RaiseHandsSmile", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseSmileAnimation);
}

/**
 * Đứng Với Tay Đưa Lên Đầu Vẫy Nhẹ
 * Thêm hành động đứng yên và đưa tay lên đầu vẫy nhẹ biểu hiện sự chào đón hoặc vui vẻ.
 */
function waveFromHead(character) {
    const waveAnimation = new THREE.AnimationClip("WaveFromHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 4, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}

/**
 * Đứng Và Đưa Tay Lên Vẫy Nhẹ
 * Thêm hành động đứng yên và giơ tay lên cao, vẫy nhẹ biểu hiện sự chào đón hoặc cảm xúc tích cực.
 */
function standAndWaveHand(character) {
    const waveHandAnimation = new THREE.AnimationClip("StandWaveHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(waveHandAnimation);
}

/**
 * Đứng Với Tay Đưa Ra Mời
 * Thêm hành động đứng vững và đưa tay về phía trước như đang mời gọi.
 */
function inviteForward(character) {
    const inviteAnimation = new THREE.AnimationClip("InviteForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(inviteAnimation);
}

/**
 * Đứng Thẳng Và Bắt Chéo Chân
 * Thêm tư thế đứng thẳng với chân bắt chéo tạo dòng chảy nhẹ nhàng hoặc thư giãn.
 */
function standAndCrossLegs(character) {
    const crossLegsAnimation = new THREE.AnimationClip("StandCrossLegs", 1.5, [
        new THREE.KeyframeTrack(
            'character.legs.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.1, 0, 0]
        )
    ]);
    character.animations.push(crossLegsAnimation);
}

export {
    shieldEyesAndLook,
    standCrossArmsAndObserve,
    standAndPointFinger,
    shakeHeadAndSmile,
    raiseHandsAboveHead,
    standAndRaiseHandsWithSmile,
    waveFromHead,
    standAndWaveHand,
    inviteForward,
    standAndCrossLegs
};
