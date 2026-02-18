// Combat Animations Library - Part 41
// Fighting and defensive combat animations

/**
 * Chuyển động 365: Đá Vòng Và Đứng Thế
 * Thêm động tác tung một cú đá vòng cung mạnh sau đó đứng lại trong tư thế cân bằng.
 */
function roundhouseKickAndPose(character) {
    const roundhouseAnimation = new THREE.AnimationClip("RoundhouseKickPose", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(roundhouseAnimation);
}

/**
 * Chuyển động 370: Lắc Đầu Và Đưa Tay Lên Chắn
 * Thêm hình động lắc đầu nhẹ và đưa tay lên trên như biểu hiện không đồng tình.
 */
function shakeHeadAndBlock(character) {
    const blockAnimation = new THREE.AnimationClip("ShakeHeadBlock", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(blockAnimation);
}

/**
 * Chuyển động 377: Đá Cao Với Tay Chắn Phía Trước
 * Thêm động tác đá cao kết hợp với tay chắn phía trước tạo động lực phòng thủ.
 */
function highKickWithArmShield(character) {
    const kickShieldAnimation = new THREE.AnimationClip("HighKickArmShield", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kickShieldAnimation);
}

/**
 * Chuyển động 380: Cúi Người Và Tung Cú Đấm
 * Thêm động tác cúi thấp người và tung móc đấm mạnh về phía trước.
 */
function crouchAndJab(character) {
    const crouchJabAnimation = new THREE.AnimationClip("CrouchAndJab", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(crouchJabAnimation);
}

/**
 * Chuyển động 389: Cúi Người Và Nâng Vật
 * Thêm động tác cúi thấp người và nâng vật lên tạo sức mạnh.
 */
function bendAndLift(character) {
    const bendLiftAnimation = new THREE.AnimationClip("BendLift", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(bendLiftAnimation);
}

export {
    roundhouseKickAndPose,
    shakeHeadAndBlock,
    highKickWithArmShield,
    crouchAndJab,
    bendAndLift
};
