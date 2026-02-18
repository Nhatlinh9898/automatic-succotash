// Jumping/Leaping Animations Library - Part 41
// Dynamic jumping and leaping animations for characters

/**
 * Chuyển động 362: Nhảy Lên Với Tư Thế Mở Rộng
 * Thêm động tác nhảy lên cao với cả tay và chân mở rộng tạo sự năng động.
 */
function leapWithWidePose(character) {
    const widePoseAnimation = new THREE.AnimationClip("LeapWidePose", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(widePoseAnimation);
}

/**
 * Chuyển động 367: Nhảy Lên Và Tung Cú Đấm Xuống
 * Thêm động tác nhảy lên cao và tung móc đấm mạnh xuống phía dưới.
 */
function leapAndPunchDownward(character) {
    const punchDownwardAnimation = new THREE.AnimationClip("PunchDownward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(punchDownwardAnimation);
}

/**
 * Chuyển động 372: Nhảy Lùi Với Tay Kéo Phía Sau
 * Thêm động tác nhảy lùi kết hợp với tay kéo mạnh về phía sau tạo động lực.
 */
function leapBackAndPull(character) {
    const leapPullAnimation = new THREE.AnimationClip("LeapBackPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapPullAnimation);
}

/**
 * Chuyển động 374: Bật Nhảy Với Tư Thế Tay Bảo Vệ
 * Thêm hình động nhảy lên cao với tay đưa lên trước ngực để bảo vệ.
 */
function leapAndGuard(character) {
    const guardAnimation = new THREE.AnimationClip("LeapGuard", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(guardAnimation);
}

/**
 * Chuyển động 378: Nhảy Và Xoay Người 360 Độ Với Tay Giơ Cao
 * Thêm động tác nhảy lên cao, xoay người một vòng hoàn chỉnh và kết thúc với tay giơ cao như biểu hiện chiến thắng.
 */
function leapSpinWithVictoryPose(character) {
    const victoryPoseAnimation = new THREE.AnimationClip("LeapSpinVictoryPose", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(victoryPoseAnimation);
}

/**
 * Chuyển động 383: Bật Nhảy Với Tay Vung Về Phía Trước
 * Thêm động tác nhảy lên mạnh với tay đưa ra phía trước như đang tung đòn.
 */
function leapWithPunchForward(character) {
    const punchForwardAnimation = new THREE.AnimationClip("LeapPunchForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(punchForwardAnimation);
}

/**
 * Chuyển động 386: Nhảy Với Tư Thế Vòng Tay
 * Thêm động tác nhảy lên với cả hai tay giơ vòng cung tròn tạo phong cách uyển chuyển.
 */
function leapWithCircularArms(character) {
    const circularArmsAnimation = new THREE.AnimationClip("LeapCircularArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(circularArmsAnimation);
}

/**
 * Chuyển động 391: Nhảy Lên Với Tay Chỉ Thẳng Trước
 * Thêm hình động nhảy lên cao và đưa tay chỉ thẳng phía trước như biểu hiện quyết tâm.
 */
function leapWithForwardPoint(character) {
    const forwardPointAnimation = new THREE.AnimationClip("LeapForwardPoint", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(forwardPointAnimation);
}

export {
    leapWithWidePose,
    leapAndPunchDownward,
    leapBackAndPull,
    leapAndGuard,
    leapSpinWithVictoryPose,
    leapWithPunchForward,
    leapWithCircularArms,
    leapWithForwardPoint
};
