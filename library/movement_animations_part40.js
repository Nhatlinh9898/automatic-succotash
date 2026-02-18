// Movement Animations Library - Part 40
// Contains character movement and locomotion animations

/**
 * Lùi Bước Và Đưa Tay Phía Sau
 * Thêm hành động lùi nhẹ nhàng và đưa tay ra sau tạo cảm giác thoải mái.
 */
function stepBackAndStretchBack(character) {
    const stretchBackAnimation = new THREE.AnimationClip("StretchBack", 1.8, [
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
    character.animations.push(stretchBackAnimation);
}

/**
 * Bắt Nhảy Và Quay Người 360 Độ
 * Thêm hành động nhảy lên cao và xoay người một vòng tròn hoàn chỉnh trước khi tiếp đất.
 */
function leapAndSpinFullCircle(character) {
    const leapSpinCircleAnimation = new THREE.AnimationClip("LeapSpinFullCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(leapSpinCircleAnimation);
}

/**
 * Chạy Nhanh Và Vẫy Tay
 * Thêm hành động chạy nhanh kết hợp với tay vẫy nhẹ nhàng tạo cảm giác vui vẻ.
 */
function sprintAndWaveHands(character) {
    const sprintWaveAnimation = new THREE.AnimationClip("SprintWaveHands", 2, [
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
    character.animations.push(sprintWaveAnimation);
}

/**
 * Chạy Và Quay Người 90 Độ
 * Thêm hành động chạy nhanh và đột ngột quay người sang một bên với góc 90 độ.
 */
function sprintAndQuarterTurn(character) {
    const sprintQuarterTurnAnimation = new THREE.AnimationClip("SprintQuarterTurn", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sprintQuarterTurnAnimation);
}

/**
 * Nhảy Và Tung Tay Phía Trước
 * Thêm hành động nhảy lên cao và giơ tay ra phía trước tạo cảm giác đột phá.
 */
function leapAndExtendHands(character) {
    const leapExtendAnimation = new THREE.AnimationClip("LeapExtendHands", 2, [
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
    character.animations.push(leapExtendAnimation);
}

/**
 * Bắt Nhảy Và Xoay Người 180 Độ
 * Thêm hành động nhảy mạnh mẽ lên cao và xoay người 180 độ trong không trung.
 */
function jumpAndSpinHalfCircle(character) {
    const jumpSpinAnimation = new THREE.AnimationClip("JumpSpinHalfCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(jumpSpinAnimation);
}

/**
 * Chạy Và Đứng Lại Với Tư Thế Chân Rộng
 * Thêm hành động chạy nhanh và đứng lại với hai chân dang rộng để giữ thăng bằng.
 */
function sprintAndStopWide(character) {
    const stopWideAnimation = new THREE.AnimationClip("SprintStopWide", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 4.2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(stopWideAnimation);
}

/**
 * Chạy Với Tay Quất Mạnh
 * Thêm hành động chạy nhanh với tay quất mạnh ra hai bên để tạo cảm giác chuyển động nhanh.
 */
function sprintWithWideSwing(character) {
    const wideSwingRunAnimation = new THREE.AnimationClip("WideSwingRun", 2, [
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
    character.animations.push(wideSwingRunAnimation);
}

/**
 * Chạy Và Đột Ngột Nhảy Sang Bên
 * Thêm hành động chạy nhanh và đột ngột chuyển hướng bằng cách nhảy sang bên.
 */
function sprintAndSideLeap(character) {
    const sideLeapAnimation = new THREE.AnimationClip("SprintSideLeap", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 2, 1.5]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sideLeapAnimation);
}

/**
 * Lùi Một Bước Và Vung Tay Phòng Thủ
 * Thêm hành động bước nhẹ lùi một bước kèm với tay giơ lên bảo vệ cơ thể
 */
function stepBackAndShield(character) {
    const backShieldAnimation = new THREE.AnimationClip("StepBackShield", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(backShieldAnimation);
}

/**
 * Xoay Người Và Giơ Tay Phản Đòn
 * Thêm hành động xoay người và tung một tay phản đòn mạnh mẽ.
 */
function spinAndCounterPunch(character) {
    const counterPunchAnimation = new THREE.AnimationClip("SpinCounterPunch", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(counterPunchAnimation);
}

export {
    stepBackAndStretchBack,
    leapAndSpinFullCircle,
    sprintAndWaveHands,
    sprintAndQuarterTurn,
    leapAndExtendHands,
    jumpAndSpinHalfCircle,
    sprintAndStopWide,
    sprintWithWideSwing,
    sprintAndSideLeap,
    stepBackAndShield,
    spinAndCounterPunch
};
