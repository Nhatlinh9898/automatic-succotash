/**
 * Animation Components Library - Part 33
 * Expressive Movement Animations (Functions 17-25)
 */

// Function 17: Chuyển Động 17: Xoay Vai Thoải Mái
function rotateShoulders(character) {
    const rotateAnimation = new THREE.AnimationClip("RotateShoulders", 1, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(rotateAnimation);
}

// Function 18: Chuyển Động 18: Vẫy Tay Thân Thiện
function waveHand(character) {
    const waveAnimation = new THREE.AnimationClip("WaveHand", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.4, 0.8, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}

// Function 19: Chuyển Động 19: Nhún Vai
function shrugShoulders(character) {
    const shrugAnimation = new THREE.AnimationClip("Shrug", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.5, 1],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shrugAnimation);
}

// Function 20: Chuyển Động 20: Lắc Đầu Từ Chối
function shakeHead(character) {
    const shakeAnimation = new THREE.AnimationClip("ShakeHead", 1, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.5, 1],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeAnimation);
}

// Function 21: Chuyển Động 21: Nghiêng Người Quan Sát
function leanAndObserve(character) {
    const leanAnimation = new THREE.AnimationClip("LeanObserve", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(leanAnimation);
}

// Function 22: Chuyển Động 22: Quay Nhẹ Đầu
function turnHead(character) {
    const turnHeadAnimation = new THREE.AnimationClip("TurnHead", 0.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.4, 0.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(turnHeadAnimation);
}

// Function 23: Chuyển Động 23: Giơ Tay Cao
function raiseHand(character) {
    const raiseAnimation = new THREE.AnimationClip("RaiseHand", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseAnimation);
}

// Function 24: Chuyển Động 24: Đẩy Lực Mạnh
function forcePush(character) {
    const forcePushAnimation = new THREE.AnimationClip("ForcePush", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 2, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(forcePushAnimation);
}

// Function 25: Chuyển Động 25: Lùi Bước Nhẹ Nhàng
function stepBack(character) {
    const stepBackAnimation = new THREE.AnimationClip("StepBack", 1, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        )
    ]);
    character.animations.push(stepBackAnimation);
}

// Export all functions
export {
    rotateShoulders,
    waveHand,
    shrugShoulders,
    shakeHead,
    leanAndObserve,
    turnHead,
    raiseHand,
    forcePush,
    stepBack
};
