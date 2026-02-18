// Advanced Animations Library - Part 35
// Contains advanced and special animations from chuyển động 121-133

// Chuyển động 121: Quay Nhanh Và Đánh Đất
function spinAndGroundStrike(character) {
    const groundStrikeAnimation = new THREE.AnimationClip("SpinGroundStrike", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(groundStrikeAnimation);
}

// Chuyển động 122: Lùi Bước Và Đánh Chắn
function retreatAndBlock(character) {
    const retreatBlockAnimation = new THREE.AnimationClip("RetreatBlock", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(retreatBlockAnimation);
}

// Chuyển động 123: Nhảy Về Động Tác Phòng Thủ
function jumpWithGuard(character) {
    const jumpGuardAnimation = new THREE.AnimationClip("JumpGuard", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpGuardAnimation);
}

// Chuyển động 124: Đứng Thẳng Về Tay Giơ Cao
function standAndRaiseHand(character) {
    const raiseHandAnimation = new THREE.AnimationClip("RaiseHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseHandAnimation);
}

// Chuyển động 125: Gập Người Chạm Đất
function bendAndTouchGround(character) {
    const bendTouchAnimation = new THREE.AnimationClip("BendTouchGround", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bendTouchAnimation);
}

// Chuyển động 126: Quay Người Kết Hợp Tung Vật
function spinAndToss(character) {
    const spinTossAnimation = new THREE.AnimationClip("SpinToss", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinTossAnimation);
}

// Chuyển động 127: Chạy Về Cánh Tay Tung
function dashWithSwingArms(character) {
    const dashSwingAnimation = new THREE.AnimationClip("DashSwingArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(dashSwingAnimation);
}

// Chuyển động 128: Đứng Thẳng Và Lắc Đầu
function standAndShakeHead(character) {
    const shakeHeadAnimation = new THREE.AnimationClip("StandShakeHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeHeadAnimation);
}

// Chuyển động 129: Bật Nhảy Và Tung Cú Đấm
function jumpAndKick(character) {
    const jumpKickAnimation = new THREE.AnimationClip("JumpKick", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpKickAnimation);
}

// Chuyển động 130: Chạy Và Đột Ngột Quay Đầu
function sprintAndTurnHead(character) {
    const sprintTurnAnimation = new THREE.AnimationClip("SprintTurnHead", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(sprintTurnAnimation);
}

// Chuyển động 131: Đứng Thẳng Và Gật Đầu
function standAndNod(character) {
    const nodAnimation = new THREE.AnimationClip("StandNod", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodAnimation);
}

// Chuyển động 132: Nhảy Nhỏ Về Động Tác Lắc Tay
function hopWithSwingingArms(character) {
    const hopSwingAnimation = new THREE.AnimationClip("HopSwingArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(hopSwingAnimation);
}

// Chuyển động 133: Quay Người Và Chỉa Tay
function spinAndExtendArm(character) {
    const spinExtendAnimation = new THREE.AnimationClip("SpinExtendArm", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(spinExtendAnimation);
}

// Export all advanced animations
export {
    spinAndGroundStrike,
    retreatAndBlock,
    jumpWithGuard,
    standAndRaiseHand,
    bendAndTouchGround,
    spinAndToss,
    dashWithSwingArms,
    standAndShakeHead,
    jumpAndKick,
    sprintAndTurnHead,
    standAndNod,
    hopWithSwingingArms,
    spinAndExtendArm
};
