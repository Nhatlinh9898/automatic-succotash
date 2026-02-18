// Jumping Animations Library - Part 44
// Various jumping and leaping animations for characters

/**
 * Chuyển động 489: Nhảy Lên Vẫy Tay Duỗi Thẳng Ra Phía Trước
 * Thêm động tác nhảy lên cao vẫy cả hai tay duỗi thẳng về phía trước tạo sự quyết tâm.
 */
function leapWithStraightForwardArms(character) {
    const straightForwardArmsAnimation = new THREE.AnimationClip("LeapStraightForwardArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(straightForwardArmsAnimation);
}

/**
 * Chuyển động 494: Nhảy Lên Vẫy Tư Thế Quay Tròn
 * Thêm động tác nhảy lên cao và xoay người một vòng tròn trong không trung tạo sự uyển chuyển.
 */
function leapWithCircularMotion(character) {
    const circularMotionAnimation = new THREE.AnimationClip("LeapCircularMotion", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(circularMotionAnimation);
}

/**
 * Chuyển động 499: Nhảy Cao Vẫy Tay Vung Lên
 * Thêm động tác nhảy lên cao vẫy tay tung mạnh lên trên biểu thị niềm vui hoặc sự chiến thắng.
 */
function leapWithCelebration(character) {
    const celebrationAnimation = new THREE.AnimationClip("LeapCelebration", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(celebrationAnimation);
}

/**
 * Chuyển động 507: Cú Nhảy Xa Điền Kinh
 * Thêm động tác chạy lấy đà và bật nhảy xa tạo cảm giác mạnh mẽ.
 */
function longJump(character) {
    const longJumpAnimation = new THREE.AnimationClip("LongJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        )
    ]);
    character.animations.push(longJumpAnimation);
}

/**
 * Chuyển động 517: Động Tác Bắt Nhảy Lên Rào Cản
 * Thêm động tác bắt nhảy qua rào cản trong điền kinh.
 */
function hurdleJump(character) {
    const hurdleJumpAnimation = new THREE.AnimationClip("HurdleJump", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        )
    ]);
    character.animations.push(hurdleJumpAnimation);
}

/**
 * Chuyển động 513: Động Tác Bắt Nhảy Ném Rổ
 * Thêm động tác bắt nhảy cao và ném rổ với tay vung mạnh về phía trước.
 */
function basketballJumpShot(character) {
    const jumpShotAnimation = new THREE.AnimationClip("BasketballJumpShot", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(jumpShotAnimation);
}

/**
 * Chuyển động 514: Động Tác Nhảy Cao Đánh Đầu
 * Thêm động tác nhảy cao và đánh đầu mạnh trong bóng đá.
 */
function soccerHeader(character) {
    const headerAnimation = new THREE.AnimationClip("SoccerHeader", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(headerAnimation);
}

/**
 * Chuyển động 528: Cú Cầu Bóng Trong Bóng Chuyền
 * Thêm động tác ngã người xuống thấp và đón bóng chuyền, biểu thị sự linh hoạt và nhanh nhẹn.
 */
function volleyballDive(character) {
    const diveAnimation = new THREE.AnimationClip("VolleyballDive", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1.5, 0]
        )
    ]);
    character.animations.push(diveAnimation);
}

export {
    leapWithStraightForwardArms,
    leapWithCircularMotion,
    leapWithCelebration,
    longJump,
    hurdleJump,
    basketballJumpShot,
    soccerHeader,
    volleyballDive
};
