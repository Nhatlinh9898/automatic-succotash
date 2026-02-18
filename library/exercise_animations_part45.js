// Exercise Animations Library - Part 45
// Contains various exercise and fitness animation functions

/**
 * Chuyển động 537: Chống Đẩy Thể Lực
 * Thêm động tác đứng, cúi người và thực hiện hành động chống đẩy lên xuống để đốt.
 */
function pushUpExercise(character) {
    const pushUpAnimation = new THREE.AnimationClip("PushUpExercise", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pushUpAnimation);
}

/**
 * Chuyển động 538: Nâng Mắt Tay Tập Tạ Đến
 * Thêm động tác đứng và nâng mắt tay về phía tạ đến, tạo cơ bắp mạnh mẽ.
 */
function dumbbellCurl(character) {
    const dumbbellCurlAnimation = new THREE.AnimationClip("DumbbellCurl", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(dumbbellCurlAnimation);
}

/**
 * Chuyển động 558: Động Tác Tập Gập Ngưỡ Đơn
 * Thêm động tác tập gập ngưỡ đơn để rèn luyện thể lực và sức mạnh chân.
 */
function squatExercise(character) {
    const squatAnimation = new THREE.AnimationClip("SquatExercise", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(squatAnimation);
}
