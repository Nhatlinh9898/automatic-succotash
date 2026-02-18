// Movement Animations Library - Part 35
// Contains basic movement animations from chuyển động 88-100

// Chuyển động 88: Chạy Về Tư Thế Nghiêng
function runLeaningForward(character) {
    const runLeanAnimation = new THREE.AnimationClip("RunLean", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(runLeanAnimation);
}

// Chuyển động 89: Nhảy Về Phía Trước
function longJumpForward(character) {
    const longJumpAnimation = new THREE.AnimationClip("LongJump", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(longJumpAnimation);
}

// Chuyển động 90: Đứng Thẳng Và Thở Sâu
function deepBreath(character) {
    const breathAnimation = new THREE.AnimationClip("DeepBreath", 3, [
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(breathAnimation);
}

// Chuyển động 91: Cúi Người Và Xoay Vai
function bowAndRotateShoulders(character) {
    const bowRotateAnimation = new THREE.AnimationClip("BowRotate", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bowRotateAnimation);
}

// Chuyển động 92: Nhảy Và Tạo Tư Thế Vững Vàng
function jumpAndLandStrongly(character) {
    const jumpLandAnimation = new THREE.AnimationClip("JumpLandStrong", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(jumpLandAnimation);
}

// Chuyển động 93: Đứng Nghiêm Và Đặt Tay Lên Hông
function standConfidently(character) {
    const standConfidentAnimation = new THREE.AnimationClip("StandConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(standConfidentAnimation);
}

// Chuyển động 94: Cúi Người Và Cầm Vật
function bendAndPick(character) {
    const bendPickAnimation = new THREE.AnimationClip("BendPick", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bendPickAnimation);
}

// Chuyển động 95: Tung Cú Đấm Vòng
function roundKick(character) {
    const roundKickAnimation = new THREE.AnimationClip("RoundKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(roundKickAnimation);
}

// Chuyển động 96: Đứng Thẳng Về Tư Thế Chiến Đấu
function combatStance(character) {
    const combatStanceAnimation = new THREE.AnimationClip("CombatStance", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 1, 2],
            [0, 0, 0, 0, -0.1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(combatStanceAnimation);
}

// Chuyển động 97: Nhảy Và Xoay Lưng
function jumpAndSpinBack(character) {
    const jumpSpinBackAnimation = new THREE.AnimationClip("JumpSpinBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpSpinBackAnimation);
}

// Chuyển động 98: Cúi Người Về Tư Thế Cẩn Trọng
function crouchWithFocus(character) {
    const crouchFocusAnimation = new THREE.AnimationClip("CrouchFocus", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crouchFocusAnimation);
}

// Chuyển động 99: Đứng Yên Về Tay Đến Sau Lưng
function standCalmly(character) {
    const standCalmAnimation = new THREE.AnimationClip("StandCalm", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(standCalmAnimation);
}

// Chuyển động 100: Ném Vòng Cung
function arcThrow(character) {
    const arcThrowAnimation = new THREE.AnimationClip("ArcThrow", 1.6, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, -Math.PI / 3, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(arcThrowAnimation);
}

// Export all movement animations
export {
    runLeaningForward,
    longJumpForward,
    deepBreath,
    bowAndRotateShoulders,
    jumpAndLandStrongly,
    standConfidently,
    bendAndPick,
    roundKick,
    combatStance,
    jumpAndSpinBack,
    crouchWithFocus,
    standCalmly,
    arcThrow
};
