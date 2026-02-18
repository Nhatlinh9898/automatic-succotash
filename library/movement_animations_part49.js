// Movement Animations - Part 49
// Dynamic body movements and locomotion animations

/**
 * Chuyển động 731: Bước Tiến Về Tay Nhấn Mạnh Xuống
 * Thêm hành động bước tiến về mặt bước và hạ tay mạnh xuống.
 */
function stepForwardAndPressArmDown(character) {
    const pressArmDownAnimation = new THREE.AnimationClip("StepForwardPressArmDown", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(pressArmDownAnimation);
}

/**
 * Chuyển động 732: Xoay Nhẹ Người Và Giơ Tay Cao
 * Thêm hành động xoay nhẹ người và giơ tay cao lên.
 */
function gentleSpinAndRaiseHand(character) {
    const raiseHandAnimation = new THREE.AnimationClip("GentleSpinRaiseHand", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseHandAnimation);
}

/**
 * Chuyển động 733: Xoay Người Và Giơ Tay Chào Nhẹ
 * Thêm hành động xoay nhẹ người và một cái giơ tay chào nhẹ.
 */
function spinAndGreet(character) {
    const greetAnimation = new THREE.AnimationClip("SpinGreet", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(greetAnimation);
}

/**
 * Chuyển động 734: Lùi Lại Mặt Bước Về Tay Dang Rộng
 * Thêm hành động bước lùi và dang tay rộng.
 */
function stepBackWithOpenArms(character) {
    const openArmsAnimation = new THREE.AnimationClip("StepBackOpenArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}

/**
 * Chuyển động 735: Bước Lên Và Hướng Mặt Tay Về Phía Trước
 * Thêm hành động bước lên phía trước mặt bước và đưa tay hướng dẫn.
 */
function stepForwardAndGuideGesture(character) {
    const guideGestureAnimation = new THREE.AnimationClip("StepForwardGuideGesture", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(guideGestureAnimation);
}

/**
 * Chuyển động 736: Xoay Người Và Dang Tay Về Hai Hướng
 * Thêm hành động xoay nhẹ người và tay dang rộng ra hai bên.
 */
function spinAndOpenBothArms(character) {
    const openBothArmsAnimation = new THREE.AnimationClip("SpinOpenBothArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openBothArmsAnimation);
}

// Export all movement animations
export {
    stepForwardAndPressArmDown,
    gentleSpinAndRaiseHand,
    spinAndGreet,
    stepBackWithOpenArms,
    stepForwardAndGuideGesture,
    spinAndOpenBothArms
};
