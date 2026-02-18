// Combat Animations Library - Part 40
// Contains character combat and fighting animations

/**
 * Đá Sau Với Tư Thế Phòng Thủ
 * Thêm hành động đá mạnh phía sau kèm theo tư thế tay phòng thủ.
 */
function backKickWithDefensePose(character) {
    const backKickDefenseAnimation = new THREE.AnimationClip("BackKickDefensePose", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(backKickDefenseAnimation);
}

/**
 * Nhảy Cao Với Tay Vung Ngang
 * Thêm hành động nhảy cao kết hợp với cả hai tay vung mạnh ngang qua đầu tạo sức mạnh.
 */
function leapAndSwingHorizontal(character) {
    const swingHorizontalAnimation = new THREE.AnimationClip("LeapSwingHorizontal", 2, [
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
    character.animations.push(swingHorizontalAnimation);
}

/**
 * Quay Người Và Đấm Xuống Đất
 * Thêm hành động xoay người 180 độ và đấm mạnh tay xuống đất tạo sức mạnh.
 */
function spinAndGroundPunch(character) {
    const groundPunchAnimation = new THREE.AnimationClip("SpinGroundPunch", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(groundPunchAnimation);
}

/**
 * Đá Cao Kết Hợp Vòng Tay
 * Thêm hành động tung một cú đá cao kết hợp với tay tạo vòng cung biểu hiện sự uyển chuyển.
 */
function highKickWithArmArc(character) {
    const kickArcAnimation = new THREE.AnimationClip("HighKickArmArc", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(kickArcAnimation);
}

/**
 * Quay Người Với Tư Thế Chiến Đấu
 * Thêm hành động xoay người và giơ tay lên tư thế phòng thủ hoặc chuẩn bị chiến đấu.
 */
function turnWithCombatStance(character) {
    const combatTurnAnimation = new THREE.AnimationClip("TurnCombatStance", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(combatTurnAnimation);
}

/**
 * Đá Cao Với Tư Thế Căng Thẳng
 * Thêm hành động đá lên cao kết hợp cơ thể nghiêng về phía trước tạo sức mạnh.
 */
function highKickWithTension(character) {
    const kickTensionAnimation = new THREE.AnimationClip("KickWithTension", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickTensionAnimation);
}

/**
 * Đá Ngang Và Giữ Thăng Bằng
 * Thêm một cú đá ngang kết hợp tư thế giữ cân bằng, tạo sự thăng bằng.
 */
function balancedSideKick(character) {
    const sideKickBalanceAnimation = new THREE.AnimationClip("BalancedSideKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sideKickBalanceAnimation);
}

/**
 * Đá Cao Và Nhún Vai
 * Thêm hành động đá một chân cao và nhún vai nhẹ biểu hiện sự tự tin hoặc phong cách.
 */
function highKickAndShrug(character) {
    const highKickShrugAnimation = new THREE.AnimationClip("HighKickShrug", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 1, 2],
            [0, 0, 0, 0.3, 0, 0]
        )
    ]);
    character.animations.push(highKickShrugAnimation);
}

export {
    backKickWithDefensePose,
    leapAndSwingHorizontal,
    spinAndGroundPunch,
    highKickWithArmArc,
    turnWithCombatStance,
    highKickWithTension,
    balancedSideKick,
    highKickAndShrug
};
