// Emotional Expressions - Part 49
// Facial expressions and emotional gestures combined with body movements

/**
 * Chuyển động 737: Đứng Về Tay Đưa Đến Trước Ngực Biểu Tả Suy Tư
 * Thêm hành động đứng yên và tay đưa đến trước ngực.
 */
function standAndCrossArmsThoughtfully(character) {
    const crossArmsAnimation = new THREE.AnimationClip("StandCrossArmsThoughtfully", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, -Math.PI / 8, 0, 0, Math.PI / 8, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}

/**
 * Chuyển động 738: Gật Nhẹ Đầu Về Tay Chạm Ngực
 * Thêm hành động gật nhẹ và tay chạm ngực để thể hiện sự chân thành.
 */
function nodWithHeartTouch(character) {
    const heartTouchAnimation = new THREE.AnimationClip("NodHeartTouch", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(heartTouchAnimation);
}

// Export all emotional expression animations
export {
    standAndCrossArmsThoughtfully,
    nodWithHeartTouch
};
