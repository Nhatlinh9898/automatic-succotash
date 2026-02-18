// Movement Animations Library - Part 41
// Position changes and locomotion animations

/**
 * Chuyển động 363: Lùi Mặt Bước Vươn Và Giơ Tay Phản Động
 * Thêm hình động bước lùi kết hợp giơ tay lên như đang cần né tránh hoặc phòng thủ.
 */
function stepBackAndReact(character) {
    const reactAnimation = new THREE.AnimationClip("StepBackReact", 1.8, [
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
    character.animations.push(reactAnimation);
}

/**
 * Chuyển động 368: Quỳ Hai Gối Và Cúi Đầu
 * Thêm hình động quỳ xuống hai gối và cúi đầu sâu như biểu hiện kính trọng.
 */
function kneelBothLegsAndBow(character) {
    const bowAnimation = new THREE.AnimationClip("KneelBothLegsBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bowAnimation);
}

export {
    stepBackAndReact,
    kneelBothLegsAndBow
};
