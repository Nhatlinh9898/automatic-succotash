// Combat Animations Library - Part 44
// Fighting and combat-related animations for characters

/**
 * Chuyển động 509: Cú Móc Bóng Boxing
 * Thêm một cú móc bóng mạnh trong boxing tạo sự uy lực.
 */
function boxingHook(character) {
    const boxingHookAnimation = new THREE.AnimationClip("BoxingHook", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(boxingHookAnimation);
}

/**
 * Chuyển động 518: Động Tác Cú Đấm Thẳng Boxing
 * Thêm một cú đấm thẳng mạnh trong boxing biểu thị sự uy lực.
 */
function boxingStraightPunch(character) {
    const straightPunchAnimation = new THREE.AnimationClip("BoxingStraightPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(straightPunchAnimation);
}

/**
 * Chuyển động 521: Cú Đấm Nhanh Liên Hoàn Boxing
 * Thêm động tác liên hoàn hai cú đấm thẳng mạnh, tạo cảm giác tốc độ và uy lực.
 */
function rapidBoxingJab(character) {
    const rapidJabAnimation = new THREE.AnimationClip("RapidBoxingJab", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1, 1.5, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(rapidJabAnimation);
}

/**
 * Chuyển động 520: Động Tác Cú Đá Quyền Anh
 * Thêm một cú đá mạnh trong quyền anh với chân tạo sự uy lực.
 */
function kickboxingKick(character) {
    const kickboxingKickAnimation = new THREE.AnimationClip("KickboxingKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(kickboxingKickAnimation);
}

/**
 * Chuyển động 533: Động Tác Cú Vung Tay Đấm Vòng
 * Thêm động tác đấm vòng cung mạnh với lực xoay từ cơ thể.
 */
function circularPunch(character) {
    const circularPunchAnimation = new THREE.AnimationClip("CircularPunch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(circularPunchAnimation);
}

export {
    boxingHook,
    boxingStraightPunch,
    rapidBoxingJab,
    kickboxingKick,
    circularPunch
};
