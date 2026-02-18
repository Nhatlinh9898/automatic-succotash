// Combat Animations Library - Part 35
// Contains combat and action animations from chuyển động 101-120

// Chuyển động 101: Vặn Mình Và Lắc Tay
function twistBodyAndShakeHand(character) {
    const twistShakeAnimation = new THREE.AnimationClip("TwistShake", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(twistShakeAnimation);
}

// Chuyển động 102: Bước Ngang Và Dừng
function stepSideAndStop(character) {
    const stepSideAnimation = new THREE.AnimationClip("StepSideStop", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        )
    ]);
    character.animations.push(stepSideAnimation);
}

// Chuyển động 103: Nhảy Xoay Tròn
function spinMultipleJump(character) {
    const spinJumpAnimation = new THREE.AnimationClip("SpinJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 2 * Math.PI, 0, 0, 4 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinJumpAnimation);
}

// Chuyển động 104: Xoay Lưng Chậm Rãi
function slowTurnBack(character) {
    const turnBackAnimation = new THREE.AnimationClip("SlowTurnBack", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnBackAnimation);
}

// Chuyển động 105: Đứng Và Chỉ Tay
function pointForward(character) {
    const pointAnimation = new THREE.AnimationClip("PointForward", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointAnimation);
}

// Chuyển động 106: Gập Người Về Tư Thế Tập Trung
function bendFocus(character) {
    const bendFocusAnimation = new THREE.AnimationClip("BendFocus", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bendFocusAnimation);
}

// Chuyển động 107: Đập Tay Lên Bề Mặt
function slapSurface(character) {
    const slapSurfaceAnimation = new THREE.AnimationClip("SlapSurface", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slapSurfaceAnimation);
}

// Chuyển động 108: Nhảy Và Chống Tay Xuống
function jumpLandPush(character) {
    const jumpPushAnimation = new THREE.AnimationClip("JumpLandPush", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpPushAnimation);
}

// Chuyển động 109: Quay Người Về Tư Thế Thoải Mái
function turnCasually(character) {
    const casualTurnAnimation = new THREE.AnimationClip("TurnCasual", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(casualTurnAnimation);
}

// Chuyển động 110: Nhấc Vật Và Chỉa Lên Cao
function liftAndRaiseObject(character) {
    const liftRaiseAnimation = new THREE.AnimationClip("LiftRaise", 2.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, Math.PI / 4, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.1, 2.2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftRaiseAnimation);
}

// Chuyển động 111: Chạy Và Đột Ngột Dừng
function runAndHalt(character) {
    const runHaltAnimation = new THREE.AnimationClip("RunHalt", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 2, 0, 0, 2.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(runHaltAnimation);
}

// Chuyển động 112: Đứng Môi Chân Về Tư Thế Tự Tin
function balanceOneLegConfidently(character) {
    const balanceAnimation = new THREE.AnimationClip("BalanceOneLegConfident", 2, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 1, 2],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(balanceAnimation);
}

// Chuyển động 113: Quay Người Rồi Cúi Chào
function turnAndBow(character) {
    const turnBowAnimation = new THREE.AnimationClip("TurnBow", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.5, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(turnBowAnimation);
}

// Chuyển động 114: Lùi Lại Và Nhún Vai
function stepBackAndShrug(character) {
    const stepBackShrugAnimation = new THREE.AnimationClip("StepBackShrug", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stepBackShrugAnimation);
}

// Chuyển động 115: Tung Nắm Đấm Kép
function doubleFistPunch(character) {
    const doublePunchAnimation = new THREE.AnimationClip("DoublePunch", 1.2, [
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftArm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(doublePunchAnimation);
}

// Chuyển động 116: Tung Vật Thể Lên Cao
function tossObjectUp(character) {
    const tossAnimation = new THREE.AnimationClip("TossObject", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tossAnimation);
}

// Chuyển động 117: Đá Liên Hoàn Ngang
function sideKickCombo(character) {
    const sideKickAnimation = new THREE.AnimationClip("SideKickCombo", 2, [
        new THREE.KeyframeTrack(
            'character.rightLeg.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftLeg.rotation',
            [0, 1.2, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sideKickAnimation);
}

// Chuyển động 118: Giơ Hai Tay Lên Đầu
function raiseArmsAboveHead(character) {
    const raiseArmsAnimation = new THREE.AnimationClip("RaiseArmsAboveHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmsAnimation);
}

// Chuyển động 119: Nghiêng Đầu Tò Mò
function tiltHeadCuriously(character) {
    const tiltHeadAnimation = new THREE.AnimationClip("TiltHeadCurious", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tiltHeadAnimation);
}

// Chuyển động 120: Nhảy Và Tung Cú Đấm Xoáy
function jumpAndSpiralPunch(character) {
    const spiralPunchAnimation = new THREE.AnimationClip("SpiralPunch", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(spiralPunchAnimation);
}

// Export all combat animations
export {
    twistBodyAndShakeHand,
    stepSideAndStop,
    spinMultipleJump,
    slowTurnBack,
    pointForward,
    bendFocus,
    slapSurface,
    jumpLandPush,
    turnCasually,
    liftAndRaiseObject,
    runAndHalt,
    balanceOneLegConfidently,
    turnAndBow,
    stepBackAndShrug,
    doubleFistPunch,
    tossObjectUp,
    sideKickCombo,
    raiseArmsAboveHead,
    tiltHeadCuriously,
    jumpAndSpiralPunch
};
