// Standing Poses Animations Library - Part 44
// Various standing poses and gestures for character animations

/**
 * Chuyển động 488: Đứng Vẫy Tay Chạm Má
 * Thêm hình động đứng yên và đưa tay lên má như đang suy nghĩ hoặc ngạc nhiên.
 */
function standAndTouchCheek(character) {
    const touchCheekAnimation = new THREE.AnimationClip("TouchCheek", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchCheekAnimation);
}

/**
 * Chuyển động 489: Đứng Vẫy Tay Đan Trước Ngực
 * Thêm hình động đứng thẳng và đan hai tay trước ngực tạo phong thái tập trung hoặc nghiêm túc.
 */
function standAndInterlockArms(character) {
    const interlockArmsAnimation = new THREE.AnimationClip("InterlockArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(interlockArmsAnimation);
}

/**
 * Chuyển động 491: Đứng Yên Vẫy Tay Vươn Cao
 * Thêm hình động đứng yên với cả hai tay vươn lên trên biểu thị sự phấn khích hoặc niềm vui.
 */
function standAndStretchUpwards(character) {
    const stretchUpwardsAnimation = new THREE.AnimationClip("StretchUpwards", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchUpwardsAnimation);
}

/**
 * Chuyển động 493: Đứng Vẫy Tay Đan Sau Đầu
 * Thêm hình động đứng yên với hai tay đan sau đầu, biểu thị sự thư giãn hoặc suy ngẫm.
 */
function standWithHandsBehindHead(character) {
    const handsBehindHeadAnimation = new THREE.AnimationClip("HandsBehindHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsBehindHeadAnimation);
}

/**
 * Chuyển động 495: Đứng Yên Vẫy Tay Giơ Về Phía Trước
 * Thêm hình động đứng yên và giơ tay về phía trước như đang chào hoặc dẫn hướng.
 */
function standAndGestureForward(character) {
    const gestureForwardAnimation = new THREE.AnimationClip("GestureForward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gestureForwardAnimation);
}

/**
 * Chuyển động 498: Đứng Vẫy Tay Chống Lên Eo
 * Thêm hình động đứng thẳng với cả hai tay chống lên eo tạo dáng mạnh mẽ và tự tin.
 */
function standWithStrongPose(character) {
    const strongPoseAnimation = new THREE.AnimationClip("StrongPoseStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(strongPoseAnimation);
}

/**
 * Chuyển động 500: Đứng Vẫy Tay Chỉ Về Phía Trước
 * Thêm hình động đứng yên và tay chỉ về phía trước như đang dẫn đường hoặc nhận mạnh.
 */
function standWithForwardPointing(character) {
    const forwardPointAnimation = new THREE.AnimationClip("ForwardPoint", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(forwardPointAnimation);
}

/**
 * Chuyển động 501: Tư Thế Chuẩn Bị Chạy Nước Rút
 * Thêm hình động đứng với chân co, chân duỗi và tay đặt ra phía trước, chuẩn bị cho vị trí chạy nhanh.
 */
function sprintStartPose(character) {
    const startPoseAnimation = new THREE.AnimationClip("SprintStartPose", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(startPoseAnimation);
}

/**
 * Chuyển động 532: Động Tác Quay Lưng Tập Xoay Hông
 * Thêm động tác đứng thẳng và xoay hông chậm sang hai bên, phù hợp với các bài tập thể dục.
 */
function torsoTwist(character) {
    const twistAnimation = new THREE.AnimationClip("TorsoTwist", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 8, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(twistAnimation);
}

export {
    standAndTouchCheek,
    standAndInterlockArms,
    standAndStretchUpwards,
    standWithHandsBehindHead,
    standAndGestureForward,
    standWithStrongPose,
    standWithForwardPointing,
    sprintStartPose,
    torsoTwist
};
