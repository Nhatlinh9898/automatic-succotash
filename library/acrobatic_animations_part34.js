/**
 * Acrobatic Animations Library - Part 34
 * Character acrobatic and athletic animations for 3D models
 * Contains animations focused on flips, spins, jumps, and athletic movements
 */

// Acrobatic Animation Functions

/**
 * Chuyển động 43: Quay Người Và Tấn Công
 * Thêm hành động quay người nhanh chóng kết hợp với bước chạy mạnh mẽ.
 * (Also categorized as combat due to its aggressive nature)
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
 * (Also categorized as combat)
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
 * Chuyển động 47: Nhảy Và Vung Tay
 * Thêm hành động nhảy lên cao kết hợp với vung tay tạo phong cách hào hứng.
 */
function jumpAndSwing(character) {
    const jumpSwingAnimation = new THREE.AnimationClip("JumpSwing", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpSwingAnimation);
}

/**
 * Chuyển động 48: Đấm Đất
 * Thêm hành động đấm xuống đất mạnh mẽ tạo cảm giác quyến lực.
 * (Also categorized as combat)
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
 * Chuyển động 52: Nhảy Quay Vòng Và Đất Chân
 * Thêm hành động nhảy lên, xoay tròn trên không và đất chân vững vàng.
 */
function jumpTwistLand(character) {
    const jumpTwistAnimation = new THREE.AnimationClip("JumpTwistLand", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(jumpTwistAnimation);
}

/**
 * Chuyển động 56: Nhảy Trên Một Chân
 * Thêm hành động nhảy liên tục bằng một chân tạo phong cách vui nhộn.
 */
function hopOnOneLeg(character) {
    const hopAnimation = new THREE.AnimationClip("HopOneLeg", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 0.7, 1.5],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(hopAnimation);
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
 * Chuyển động 61: Chống Tay Và Đứng Lên
 * Thêm hành động chống tay xuống đất để đứng dậy.
 */
function pushUpToStand(character) {
    const pushUpAnimation = new THREE.AnimationClip("PushUp", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, -1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushUpAnimation);
}

/**
 * Chuyển động 65: Nhảy Kết Hợp Vòng Tay
 * Thêm hành động nhảy lên cao, kết hợp với vươn tay vòng quanh.
 */
function jumpWithArmsSwing(character) {
    const jumpSwingAnimation = new THREE.AnimationClip("JumpArmsSwing", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpSwingAnimation);
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
 * Chuyển động 78: Bắt Nhảy Ra Phía Sau
 * Thêm hành động nhảy lùi lại phía sau để tránh hoặc phòng thủ.
 */
function hopBack(character) {
    const hopBackAnimation = new THREE.AnimationClip("HopBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.7, 1.5],
            [0, 0, 0, -1, 0.5, 0, -2, 0, 0]
        )
    ]);
    character.animations.push(hopBackAnimation);
}

/**
 * Chuyển động 79: Nâng Chân Cao Và Đứng Một Chân
 * Thêm hành động nâng cao một chân, giữ cân bằng trong thời gian ngắn.
 */
function liftLegAndBalance(character) {
    const balanceAnimation = new THREE.AnimationClip("BalanceOneLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(balanceAnimation);
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

// Export all acrobatic animations
export {
    spinAndDash,
    highKick,
    jumpAndSwing,
    slamGround,
    kickUpward,
    jumpTwistLand,
    hopOnOneLeg,
    rapidKick,
    pushUpToStand,
    jumpWithArmsSwing,
    punchWithSpin,
    leapAndPunch,
    duckAndKick,
    hopBack,
    liftLegAndBalance,
    hammerPunch,
    spinningPunch,
    backKick
};
