// Movement Animations Library - Part 45
// Contains various movement and locomotion animation functions

/**
 * Chuyển động 534: Nhảy Lên Và Quay NgƯời 90 Độ
 * Thêm hành tác nhảy lên cao và xoay người 90 độ trong không trung tạo sự linh hoạt.
 */
function jumpAndQuarterTurn(character) {
    const quarterTurnAnimation = new THREE.AnimationClip("JumpQuarterTurn", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(quarterTurnAnimation);
}

/**
 * Chuyển động 535: Chạy Nhanh Với Tay Đến Trước
 * Thêm hình ảnh chạy với tay di chuyển mạnh về phía trước tạo sự cân bằng và sức mạnh.
 */
function sprintWithFocusedArms(character) {
    const focusedArmsAnimation = new THREE.AnimationClip("SprintFocusedArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(focusedArmsAnimation);
}

/**
 * Chuyển động 563: Động Tác Chạy Nhanh Và Bắt Nhảy Qua Chướng Ngại Vật
 * Thêm hình ảnh chạy nhanh và nhảy qua chướng ngại vật, biểu thị sự nhanh nhẹn.
 */
function obstacleLeap(character) {
    const leapAnimation = new THREE.AnimationClip("ObstacleLeap", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        )
    ]);
    character.animations.push(leapAnimation);
}

/**
 * Chuyển động 559: Chạy Lấy Lực Và Bắt Nhảy Qua Vật Cản Cao
 * Thêm động tác chạy nhanh và nhảy qua vật cản cao tạo cảm giác linh hoạt.
 */
function highJump(character) {
    const highJumpAnimation = new THREE.AnimationClip("HighJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        )
    ]);
    character.animations.push(highJumpAnimation);
}

/**
 * Chuyển động 560: Động Tác Đạp Xe Đạp Thể Thao
 * Thêm động tác chân đạp xe đạp liên tục, phù hợp cho các hoạt động đạp xe.
 */
function cyclingMotion(character) {
    const cyclingAnimation = new THREE.AnimationClip("CyclingMotion", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(cyclingAnimation);
}
