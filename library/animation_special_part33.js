/**
 * Animation Components Library - Part 33
 * Special Movement Animations (Functions 26-35)
 */

// Function 26: Chuyển Động 26: Vẫy Cả Hai Tay
function waveBothHands(character) {
    const waveAnimation = new THREE.AnimationClip("WaveBothHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, -Math.PI / 4, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}

// Function 27: Chuyển Động 27: Bước Lùi Chậm Rãi
function slowStepBack(character) {
    const stepBackAnimation = new THREE.AnimationClip("SlowStepBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        )
    ]);
    character.animations.push(stepBackAnimation);
}

// Function 28: Chuyển Động 28: Quay Vòng 360 Độ
function spinFullCircle(character) {
    const spinAnimation = new THREE.AnimationClip("Spin360", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinAnimation);
}

// Function 29: Chuyển Động 29: Búng Tay Nhẹ Nhàng
function snapFingers(character) {
    const snapAnimation = new THREE.AnimationClip("SnapFingers", 0.6, [
        new THREE.KeyframeTrack(
            'character.rightHand.rotation',
            [0, 0.3, 0.6],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(snapAnimation);
}

// Function 30: Chuyển Động 30: Quỳ Gối
function kneelDown(character) {
    const kneelAnimation = new THREE.AnimationClip("Kneel", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -0.5, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 16, 0, 0, Math.PI / 32, 0, 0]
        )
    ]);
    character.animations.push(kneelAnimation);
}

// Function 31: Chuyển Động 31: Giơ Tay Đến Gió
function raiseArmsFeel(character) {
    const raiseArmAnimation = new THREE.AnimationClip("RaiseArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.7, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}

// Function 32: Chuyển Động 32: Gõ Chân Theo Nhịp
function tapFoot(character) {
    const tapAnimation = new THREE.AnimationClip("TapFoot", 1, [
        new THREE.KeyframeTrack(
            'character.rightLeg.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 12, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tapAnimation);
}

// Function 33: Chuyển Động 33: Tăng Tốc Về Phía Trước
function sprintForward(character) {
    const sprintAnimation = new THREE.AnimationClip("Sprint", 1.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        )
    ]);
    character.animations.push(sprintAnimation);
}

// Function 34: Chuyển Động 34: Nhảy Lùi
function jumpBack(character) {
    const jumpBackAnimation = new THREE.AnimationClip("JumpBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.7, 1.5],
            [0, 0, 0, -1, 1, 0, -2, 0, 0]
        )
    ]);
    character.animations.push(jumpBackAnimation);
}

// Function 35: Chuyển Động 35: Đập Mạnh Bằng Tay
function slamHands(character) {
    const slamAnimation = new THREE.AnimationClip("SlamHands", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slamAnimation);
}

// Export all functions
export {
    waveBothHands,
    slowStepBack,
    spinFullCircle,
    snapFingers,
    kneelDown,
    raiseArmsFeel,
    tapFoot,
    sprintForward,
    jumpBack,
    slamHands
};
