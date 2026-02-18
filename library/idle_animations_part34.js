/**
 * Idle and Gesture Animations Library - Part 34
 * Character idle poses and gesture animations for 3D models
 * Contains animations focused on standing poses, gestures, and subtle movements
 */

// Idle and Gesture Animation Functions

/**
 * Chuyển động 41: Nhảy Bật
 * Thêm hành động nhảy nhẹ tạo cảm giác năng động.
 */
function leapAnimation(character) {
    const leapAnimation = new THREE.AnimationClip("Leap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(leapAnimation);
}

/**
 * Chuyển động 45: Lắc Lư Nhẹ Nhàng
 * Thêm cử động lắc lực tự nhiên để tạo dáng thỏa mái.
 */
function swayTorso(character) {
    const swayAnimation = new THREE.AnimationClip("Sway", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(swayAnimation);
}

/**
 * Chuyển động 49: Quay Đầu Tìm Kiếm
 * Thêm hành động quay đầu liên tục để tìm kiếm hoặc nhìn xung quanh.
 */
function searchAround(character) {
    const searchAnimation = new THREE.AnimationClip("SearchAround", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.4, 0.8, 1.2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(searchAnimation);
}

/**
 * Chuyển động 51: Đứng Tự Tin
 * Thêm tư thế đứng tự tin với cử động tay và dáng thẳng.
 */
function confidentStand(character) {
    const standAnimation = new THREE.AnimationClip("StandConfident", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0, -Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(standAnimation);
}

/**
 * Chuyển động 54: Tựa Lưng Thư Giãn
 * Thêm cử động tựa lưng vào tường hoặc ghế, thể hiện sự thoải mái.
 */
function leanBack(character) {
    const leanBackAnimation = new THREE.AnimationClip("LeanBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.5, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(leanBackAnimation);
}

/**
 * Chuyển động 63: Quay Tay Nhẹ
 * Thêm hành động quay tay một cách nhẹ nhàng để tạo cảm giác thư giãn hoặc tự nhiên.
 */
function rotateArmRelaxedly(character) {
    const rotateAnimation = new THREE.AnimationClip("RotateArm", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(rotateAnimation);
}

/**
 * Chuyển động 66: Đứng Và Vẫy Tay Cao
 * Thêm hành động đứng thẳng và vẫy tay lên cao để biểu thị sự chào mừng.
 */
function waveHandHigh(character) {
    const waveAnimation = new THREE.AnimationClip("WaveHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}

/**
 * Chuyển động 68: Xoay Người Và Chống Lưng
 * Thêm hành động xoay người nhẹ, sau đó chống lưng để tạo cảm giác thư giãn.
 */
function twistAndLean(character) {
    const twistAnimation = new THREE.AnimationClip("TwistLean", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(twistAnimation);
}

/**
 * Chuyển động 69: Đứng Thẳng Và Vặn Người
 * Thêm hành động đứng thẳng, sau đó vặn người nhẹ nhàng để thư giãn.
 */
function standAndTwist(character) {
    const standTwistAnimation = new THREE.AnimationClip("StandTwist", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(standTwistAnimation);
}

/**
 * Chuyển động 70: Đưa Tay Ra Đón
 * Thêm hành động đưa tay ra đón một vật thể phía trước.
 */
function extendHandToReceive(character) {
    const extendHandAnimation = new THREE.AnimationClip("ExtendHand", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(extendHandAnimation);
}

/**
 * Chuyển động 76: Lắc Đầu Và Đứng Vững
 * Thêm hành động lắc đầu để từ chối hoặc thể hiện sự mạnh mẽ.
 */
function shakeHeadAndStandFirmly(character) {
    const shakeHeadAnimation = new THREE.AnimationClip("ShakeHeadFirm", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeHeadAnimation);
}

/**
 * Chuyển động 80: Vỗ Tay
 * Thêm hành động vỗ tay nhẹ nhàng hoặc thể hiện sự vui mừng.
 */
function clapHands(character) {
    const clapAnimation = new THREE.AnimationClip("ClapHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(clapAnimation);
}

// Export all idle and gesture animations
export {
    leapAnimation,
    swayTorso,
    searchAround,
    confidentStand,
    leanBack,
    rotateArmRelaxedly,
    waveHandHigh,
    twistAndLean,
    standAndTwist,
    extendHandToReceive,
    shakeHeadAndStandFirmly,
    clapHands
};
