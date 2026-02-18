/**
 * Combat Animations Library - Part 34
 * Character combat and fighting animations for 3D models
 * Contains animations 42-87 focused on combat movements
 */

// Combat Animation Functions

/**
 * Chuyển động 42: Đấm Liên Tiếp
 * Thêm chuỗi các động tác đấm liên tiếp để tạo cảm giác hành động mạnh mẽ.
 */
function rapidPunch(character) {
    const punchCombo = new THREE.AnimationClip("RapidPunch", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 4, 0, 0, -Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, -Math.PI / 4, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(punchCombo);
}

/**
 * Chuyển động 43: Quay Người Và Tấn Công
 * Thêm hành động quay người nhanh chóng kết hợp với bước chạy mạnh mẽ.
 */
function spinAndDash(character) {
    const spinDashAnimation = new THREE.AnimationClip("SpinDash", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 5, 0]
        )
    ]);
    character.animations.push(spinDashAnimation);
}

/**
 * Chuyển động 44: Tung Cú Đấm Cao
 * Thêm hành động đấm mạnh và cao tạo phong cách ấn tượng.
 */
function highKick(character) {
    const highKickAnimation = new THREE.AnimationClip("HighKick", 1, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(highKickAnimation);
}

/**
 * Chuyển động 46: Nâng Vật Nặng
 * Thêm hành động nâng vật nặng lên cao với sức phối hợp toàn thân.
 */
function liftHeavyObject(character) {
    const liftAnimation = new THREE.AnimationClip("LiftHeavy", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftAnimation);
}

/**
 * Chuyển động 48: Đấm Đất
 * Thêm hành động đấm xuống đất mạnh mẽ tạo cảm giác quyến lực.
 */
function slamGround(character) {
    const slamGroundAnimation = new THREE.AnimationClip("SlamGround", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        )
    ]);
    character.animations.push(slamGroundAnimation);
}

/**
 * Chuyển động 50: Đạp Chân Lên Trên
 * Thêm hành động đạp chân lên phía trên để tạo sức mạnh.
 */
function kickUpward(character) {
    const kickAnimation = new THREE.AnimationClip("KickUpward", 1.2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickAnimation);
}

/**
 * Chuyển động 56: Đấm Nhanh Hai Tay
 * Thêm chuỗi các hành động đấm liên tiếp với cả hai tay.
 */
function dualPunch(character) {
    const dualPunchAnimation = new THREE.AnimationClip("DualPunch", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(dualPunchAnimation);
}

/**
 * Chuyển động 59: Đá Liên Hoàn
 * Thêm chuỗi các cú đá liên tiếp bằng cả hai chân tạo cảm giác hành động mạnh mẽ.
 */
function rapidKick(character) {
    const rapidKickAnimation = new THREE.AnimationClip("RapidKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightLeg.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftLeg.rotation',
            [0, 1.2, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(rapidKickAnimation);
}

/**
 * Chuyển động 62: Đẩy Tay Ra Trước
 * Thêm hành động đẩy tay một cách nhanh chóng và mạnh mẽ.
 */
function fastPushForward(character) {
    const pushAnimation = new THREE.AnimationClip("FastPush", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushAnimation);
}

/**
 * Chuyển động 64: Vươn Vai Đứng Thẳng
 * Thêm hành động vươn vai mạnh mẽ kết hợp với dáng đứng.
 */
function stretchAndStand(character) {
    const stretchAnimation = new THREE.AnimationClip("StretchStand", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stretchAnimation);
}

/**
 * Chuyển động 67: Đấm Mạnh Kết Hợp Xoay Người
 * Thêm hành động đấm mạnh với lực mạnh kèm theo động tác xoay người.
 */
function punchWithSpin(character) {
    const punchSpinAnimation = new THREE.AnimationClip("PunchSpin", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(punchSpinAnimation);
}

/**
 * Chuyển động 71: Lùi Và Đấm Trả
 * Thêm hành động lùi lại kết hợp động tác đấm tay.
 */
function retreatAndStrike(character) {
    const retreatStrikeAnimation = new THREE.AnimationClip("RetreatStrike", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(retreatStrikeAnimation);
}

/**
 * Chuyển động 72: Bắt Nhảy Và Tung Cú Đấm
 * Thêm động tác nhảy lên kết hợp với cú đấm mạnh về phía trước.
 */
function leapAndPunch(character) {
    const leapPunchAnimation = new THREE.AnimationClip("LeapPunch", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(leapPunchAnimation);
}

/**
 * Chuyển động 73: Cúi Người Và Tung Cú Đá
 * Thêm hành động cúi người sau đó thực hiện một cú đá xoáy mạnh.
 */
function duckAndKick(character) {
    const duckKickAnimation = new THREE.AnimationClip("DuckKick", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.5],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.6, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(duckKickAnimation);
}

/**
 * Chuyển động 74: Đưa Tay Và Kéo Lại
 * Thêm động tác đưa tay ra phía trước rồi kéo về như đang cầm nắm.
 */
function reachAndPull(character) {
    const reachPullAnimation = new THREE.AnimationClip("ReachPull", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(reachPullAnimation);
}

/**
 * Chuyển động 75: Đứng Và Giương Tay Cao
 * Thêm hành động đứng vững với dáng mạnh mẽ và giương cả hai tay lên cao.
 */
function standAndRaiseBothArms(character) {
    const raiseArmsAnimation = new THREE.AnimationClip("RaiseBothArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmsAnimation);
}

/**
 * Chuyển động 81: Đấm Búa Mạnh Mẽ
 * Thêm động tác đấm kiểu búa xuống mặt đất hoặc vật tạo cảm giác lực mạnh.
 */
function hammerPunch(character) {
    const hammerPunchAnimation = new THREE.AnimationClip("HammerPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        )
    ]);
    character.animations.push(hammerPunchAnimation);
}

/**
 * Chuyển động 83: Cúi Và Chắp Nhanh
 * Thêm hành động cúi người nhanh và dùng tay để chắp vật thể
 */
function crouchAndGrab(character) {
    const crouchGrabAnimation = new THREE.AnimationClip("CrouchGrab", 1.4, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.7, 1.4],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.7, 1.4],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(crouchGrabAnimation);
}

/**
 * Chuyển động 84: Đấm Tay Xoáy
 * Thêm chuyển động tay đấm vòng xoáy mạnh mẽ để phòng thủ hoặc tấn công.
 */
function spinningPunch(character) {
    const spinningPunchAnimation = new THREE.AnimationClip("SpinningPunch", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinningPunchAnimation);
}

/**
 * Chuyển động 85: Tung Cú Đạp Lùi
 * Thêm hành động chân đá lùi về phía sau với lực mạnh.
 */
function backKick(character) {
    const backKickAnimation = new THREE.AnimationClip("BackKick", 1.2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(backKickAnimation);
}

/**
 * Chuyển động 86: Đưa Tay Che Mặt
 * Thêm hành động đưa tay lên che mặt hoặc bảo vệ đầu.
 */
function guardFace(character) {
    const guardFaceAnimation = new THREE.AnimationClip("GuardFace", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(guardFaceAnimation);
}

/**
 * Chuyển động 87: Lùi Bước Và Giương Tay
 * Thêm hành động lùi một bước và giương tay lên để phòng thủ.
 */
function retreatAndGuard(character) {
    const retreatGuardAnimation = new THREE.AnimationClip("RetreatGuard", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(retreatGuardAnimation);
}

// Export all combat animations
export {
    rapidPunch,
    spinAndDash,
    highKick,
    liftHeavyObject,
    slamGround,
    kickUpward,
    dualPunch,
    rapidKick,
    fastPushForward,
    stretchAndStand,
    punchWithSpin,
    retreatAndStrike,
    leapAndPunch,
    duckAndKick,
    reachAndPull,
    standAndRaiseBothArms,
    hammerPunch,
    crouchAndGrab,
    spinningPunch,
    backKick,
    guardFace,
    retreatAndGuard
};
