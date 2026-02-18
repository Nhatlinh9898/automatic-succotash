// Library: Combat/Action Animations (Part 42)
// Contains kicks, defensive poses, attacks and combat movements

/**
 * Quỳ hai gối và vung tay về phía trước - Sức mạnh
 */
function kneelAndSwingForward(character) {
    const swingForwardAnimation = new THREE.AnimationClip("KneelSwingForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(swingForwardAnimation);
}

/**
 * Cúi người và giơ tay lên như bảo vệ - Phòng thủ
 */
function crouchAndGuard(character) {
    const crouchGuardAnimation = new THREE.AnimationClip("CrouchGuard", 1.8, [
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
    character.animations.push(crouchGuardAnimation);
}

/**
 * Đá chân và tay chống - Cân bằng chiến đấu
 */
function kickWithSupportArm(character) {
    const kickSupportAnimation = new THREE.AnimationClip("KickSupportArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kickSupportAnimation);
}

/**
 * Quỳ xuống và vươn tay về phía trước - Cầu nguyện/hy vọng
 */
function kneelAndReachForward(character) {
    const reachForwardAnimation = new THREE.AnimationClip("KneelReachForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}

/**
 * Đá vòng với tay giơ cao - Phong cách chiến đấu
 */
function roundKickWithHighArm(character) {
    const roundKickAnimation = new THREE.AnimationClip("RoundKickHighArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(roundKickAnimation);
}

/**
 * Cúi người và vung tay xuống - Tấn công mạnh
 */
function crouchAndSwingDown(character) {
    const swingDownAnimation = new THREE.AnimationClip("CrouchSwingDown", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(swingDownAnimation);
}

/**
 * Cúi người và vung tay về phía trước - Tấn công
 */
function bendAndSwingForward(character) {
    const bendSwingAnimation = new THREE.AnimationClip("BendSwingForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bendSwingAnimation);
}

export {
    kneelAndSwingForward,
    crouchAndGuard,
    kickWithSupportArm,
    kneelAndReachForward,
    roundKickWithHighArm,
    crouchAndSwingDown,
    bendAndSwingForward
};
