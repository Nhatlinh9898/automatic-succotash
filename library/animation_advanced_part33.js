/**
 * Animation Components Library - Part 33
 * Advanced Movement Animations (Functions 9-16)
 */

// Function 9: Chuyển Động 9: Ném Mạnh
function throwPowerfully(character) {
    const throwAnimation = new THREE.AnimationClip("Throw", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, Math.PI / 4, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(throwAnimation);
}

// Function 10: Chuyển Động 10: Đẩy Người
function pushForward(character) {
    const pushAnimation = new THREE.AnimationClip("Push", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 3, Math.PI / 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushAnimation);
}

// Function 11: Chuyển Động 11: Ngồi Thư Giãn
function sitRelaxedly(character) {
    const sitAnimation = new THREE.AnimationClip("Sit", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 16, 0, 0, Math.PI / 32, 0, 0]
        )
    ]);
    character.animations.push(sitAnimation);
}

// Function 12: Chuyển Động 12: Chạy Và Nhảy Cao
function runAndJump(character) {
    const runJumpAnimation = new THREE.AnimationClip("RunJump", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1, 2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0, 0, 2, 2]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(runJumpAnimation);
}

// Function 13: Chuyển Động 13: Cúi Người Và Đón Bóng
function bendCatch(character) {
    const bendCatchAnimation = new THREE.AnimationClip("BendCatch", 1.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.8, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 8, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.8, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bendCatchAnimation);
}

// Function 14: Chuyển Động 14: Nhảy Và Xoay Người
function jumpAndSpin(character) {
    const jumpSpinAnimation = new THREE.AnimationClip("JumpSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(jumpSpinAnimation);
}

// Function 15: Chuyển Động 15: Gật Đầu Nhẹ
function nodHead(character) {
    const nodAnimation = new THREE.AnimationClip("Nod", 0.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.4, 0.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodAnimation);
}

// Function 16: Chuyển Động 16: Đá Mạnh
function kickStrong(character) {
    const kickAnimation = new THREE.AnimationClip("Kick", 1, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickAnimation);
}

// Export all functions
export {
    throwPowerfully,
    pushForward,
    sitRelaxedly,
    runAndJump,
    bendCatch,
    jumpAndSpin,
    nodHead,
    kickStrong
};
