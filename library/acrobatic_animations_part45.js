// Acrobatic Animations Library - Part 45
// Contains various acrobatic and gymnastic animation functions

/**
 * Chuyển động 550: Nhảy Với Động Tác Lộn Ngược
 * Thêm động tác nhảy cao và lộn ngược trong không trung biểu thị sự linh hoạt.
 */
function aerialFlip(character) {
    const flipAnimation = new THREE.AnimationClip("AerialFlip", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(flipAnimation);
}

/**
 * Chuyển động 556: Động Tác Chống Tay Và Tung NgƯời Lộn Ngược
 * Thêm động tác bật tay và tung người lộn ngược trong thể dục dụng cụ.
 */
function backFlip(character) {
    const backFlipAnimation = new THREE.AnimationClip("BackFlip", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(backFlipAnimation);
}
