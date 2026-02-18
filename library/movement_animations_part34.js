/**
 * Movement Animations Library - Part 34
 * Character movement and locomotion animations for 3D models
 * Contains animations focused on walking, running, jumping, and positional changes
 */

// Movement Animation Functions

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
 * Chuyển động 53: Bước Chậm Rãi
 * Thêm hành động bước đi chậm rãi, mang lại cảm giác tự nhiên.
 */
function slowWalk(character) {
    const slowWalkAnimation = new THREE.AnimationClip("SlowWalk", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0, -Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(slowWalkAnimation);
}

/**
 * Chuyển động 55: Bước Tiến Nhanh
 * Thêm hành động bước đi nhanh về phía trước với chuyển động cánh tay mạnh mẽ.
 */
function quickStepForward(character) {
    const quickStepAnimation = new THREE.AnimationClip("QuickStepForward", 1.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 0.7, 0, 0, 1.4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 12, 0, 0, -Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(quickStepAnimation);
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
 * Chuyển động 58: Ngồi Và Chống Tay
 * Thêm hành động ngồi xuống và chống tay lên.
 */
function sitAndLean(character) {
    const sitLeanAnimation = new THREE.AnimationClip("SitLean", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(sitLeanAnimation);
}

/**
 * Chuyển động 60: Ngã Người Ra Sau
 * Thêm hành động ngã người ra sau một cách thoải mái.
 */
function reclineBack(character) {
    const reclineAnimation = new THREE.AnimationClip("ReclineBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, -Math.PI / 12, 0, -Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(reclineAnimation);
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
 * Chuyển động 77: Cúi Người Gấp
 * Thêm hành động cúi người gấp nhanh để chào hoặc chuẩn bị cho một hành động kế tiếp.
 */
function quickBow(character) {
    const bowAnimation = new THREE.AnimationClip("QuickBow", 1, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.5, 1],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bowAnimation);
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
 * Chuyển động 82: Bước Sang Một Bên
 * Thêm hành động bước đi ngang để tránh hoặc tiến sang bên.
 */
function sideStep(character) {
    const sideStepAnimation = new THREE.AnimationClip("SideStep", 1, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        )
    ]);
    character.animations.push(sideStepAnimation);
}

// Export all movement animations
export {
    jumpAndSwing,
    jumpTwistLand,
    slowWalk,
    quickStepForward,
    hopOnOneLeg,
    sitAndLean,
    reclineBack,
    pushUpToStand,
    jumpWithArmsSwing,
    quickBow,
    hopBack,
    liftLegAndBalance,
    sideStep
};
