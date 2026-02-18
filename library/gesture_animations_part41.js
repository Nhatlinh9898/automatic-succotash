// Gesture Animations Library - Part 41
// Hand and arm gesture animations

/**
 * Chuyển động 359: Lắc Đầu Và Đưa Tay Lên Nghe
 * Thêm hình động lắc đầu nhẹ kèm theo tay giơ lên bên tai như đang lắng nghe.
 */
function shakeHeadAndRaiseHand(character) {
    const shakeHandAnimation = new THREE.AnimationClip("ShakeHeadRaiseHand", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(shakeHandAnimation);
}

/**
 * Chuyển động 364: Quay Đầu Và Đưa Tay Chào
 * Thêm hình động quay đầu nhanh và giơ tay chào một cách thân thiện.
 */
function turnHeadAndWave(character) {
    const waveAnimation = new THREE.AnimationClip("TurnHeadWave", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}

/**
 * Chuyển động 375: Quỳ Một Gối Và Đưa Tay Ra Chỉ Hướng
 * Thêm hình động quỳ một gối xuông và đưa tay ra chỉ về phía trước, như đang chỉ dẫn.
 */
function kneelAndPoint(character) {
    const kneelPointAnimation = new THREE.AnimationClip("KneelPoint", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(kneelPointAnimation);
}

/**
 * Chuyển động 382: Quỳ Xuống Và Đưa Tay Lên Cao
 * Thêm hình động quỳ xuông với một gối và giơ tay lên cao như biểu hiện quyết tâm hoặc chiến thắng.
 */
function kneelAndRaiseArm(character) {
    const kneelRaiseAnimation = new THREE.AnimationClip("KneelRaiseArm", 2, [
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
    character.animations.push(kneelRaiseAnimation);
}

/**
 * Chuyển động 385: Lùi Bước Với Tay Đưa Ra Sau
 * Thêm hình động bước lùi và đưa tay ra sau tạo cảm giác né tránh hoặc phòng thủ.
 */
function stepBackWithHandPull(character) {
    const stepBackPullAnimation = new THREE.AnimationClip("StepBackHandPull", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stepBackPullAnimation);
}

/**
 * Chuyển động 387: Quay Người Và Đưa Tay Chỉ Xa
 * Thêm hình động xoay người nhanh và đưa tay chỉ về phía xa như biểu hiện quyết định.
 */
function spinAndPointFar(character) {
    const pointFarAnimation = new THREE.AnimationClip("SpinPointFar", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pointFarAnimation);
}

/**
 * Chuyển động 393: Quay Người Và Vung Tay Cao
 * Thêm động tác xoay người nhanh và vung tay mạnh lên cao như biểu hiện mạnh mẽ.
 */
function spinAndRaiseArm(character) {
    const raiseArmAnimation = new THREE.AnimationClip("SpinRaiseArm", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}

export {
    shakeHeadAndRaiseHand,
    turnHeadAndWave,
    kneelAndPoint,
    kneelAndRaiseArm,
    stepBackWithHandPull,
    spinAndPointFar,
    spinAndRaiseArm
};
