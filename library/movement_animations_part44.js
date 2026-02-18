// Movement Animations Library - Part 44
// Running, sprinting and movement animations for characters

/**
 * Chuyển động 487: Chạy Vẫy Tay Duỗi Lên Trước
 * Thêm hình động chạy nhanh vẫy cả hai tay duỗi lên trước biểu thị niềm vui hoặc sự tự do.
 */
function sprintWithArmsHigh(character) {
    const armsHighAnimation = new THREE.AnimationClip("SprintArmsHigh", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(armsHighAnimation);
}

/**
 * Chuyển động 492: Chạy Vẫy Tay Mở Rộng
 * Thêm hình động chạy nhanh vẫy tay mở rộng sang hai bên để tạo cảm giác năng động.
 */
function sprintWithWideOpenArms(character) {
    const wideOpenArmsAnimation = new THREE.AnimationClip("SprintWideOpenArms", 2, [
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
    character.animations.push(wideOpenArmsAnimation);
}

/**
 * Chuyển động 497: Chạy Vẫy Tay Tung Ra Phía Trước
 * Thêm hình động chạy nhanh vẫy tay tung về phía trước tạo cảm giác quyết tâm.
 */
function sprintWithForwardSwing(character) {
    const forwardSwingAnimation = new THREE.AnimationClip("SprintForwardSwing", 2, [
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
    character.animations.push(forwardSwingAnimation);
}

/**
 * Chuyển động 496: Cúi Người Vẫy Tay Đưa Sang Bên
 * Thêm động tác cúi người nhẹ và đưa tay sang một bên tạo cảm giác linh hoạt và tập trung.
 */
function bendWithSideReach(character) {
    const sideReachAnimation = new THREE.AnimationClip("BendSideReach", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(sideReachAnimation);
}

/**
 * Chuyển động 529: Động Tác Chạy Lấy Đà Cú Sút Xa
 * Thêm động tác chạy nhanh lấy đà và sút bóng xa tạo sức mạnh từ chân.
 */
function runAndPowerKick(character) {
    const runKickAnimation = new THREE.AnimationClip("RunPowerKick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(runKickAnimation);
}

export {
    sprintWithArmsHigh,
    sprintWithWideOpenArms,
    sprintWithForwardSwing,
    bendWithSideReach,
    runAndPowerKick
};
