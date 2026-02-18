// Presentation Animations - Part 49
// Professional and engaging presentation gestures for public speaking

/**
 * Chuyển động 701: Chạm Tim Gật Đầu
 * Thêm hành động chạm nhẹ vào ngực và gật đầu, thể hiện sự chân thành.
 */
function touchHeartWithNod(character) {
    const touchHeartNodAnimation = new THREE.AnimationClip("TouchHeartNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchHeartNodAnimation);
}

/**
 * Chuyển động 702: Chỉ Tay Sang Mặt Bên Và Quay Nhìn
 * Thêm hành động chỉ tay sang mặt bên và quay đầu nhìn theo hướng phải.
 */
function pointSideAndLook(character) {
    const pointSideLookAnimation = new THREE.AnimationClip("PointSideLook", 2.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.1, 2.2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointSideLookAnimation);
}

/**
 * Chuyển động 703: Đứng Yên Và Chỉ Tay Chỉ Dẫn
 * Thêm hành động đứng yên và chỉ tay về phía trước như đang dẫn dắt.
 */
function standAndGuidePoint(character) {
    const guidePointAnimation = new THREE.AnimationClip("StandGuidePoint", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(guidePointAnimation);
}

/**
 * Chuyển động 704: Vỗ Tay Nhẹ Và Gật Đầu
 * Thêm hành động vỗ tay nhẹ và gật đầu để thể hiện sự đồng tình.
 */
function clapLightlyWithNod(character) {
    const clapLightlyAnimation = new THREE.AnimationClip("ClapLightlyWithNod", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(clapLightlyAnimation);
}

/**
 * Chuyển động 705: Đưa Tay Lên Cao Và Quẹt Nhẹ Trước Mặt
 * Thêm hành động đưa tay lên cao và quẹt nhẹ xuống phía trước mặt.
 */
function raiseAndSweepHand(character) {
    const sweepHandAnimation = new THREE.AnimationClip("RaiseSweepHand", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 3, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(sweepHandAnimation);
}

/**
 * Chuyển động 706: Nhấc Tay Lên Và Khớp Dừng
 * Thêm hành động nhấc tay lên và giữ trong vài giây để nhấn mạnh ý chính.
 */
function liftHandAndPause(character) {
    const liftPauseAnimation = new THREE.AnimationClip("LiftHandPause", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftPauseAnimation);
}

/**
 * Chuyển động 707: Lùi Lại Và Chào Nhẹ
 * Thêm hành động lùi nhẹ lại và cúi đầu chào để tạo thiệp cảm với khán giả.
 */
function stepBackAndBow(character) {
    const bowAnimation = new THREE.AnimationClip("StepBackBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bowAnimation);
}

/**
 * Chuyển động 708: Đứng Về Tay Đưa Lên Và Nắm Chặt
 * Thêm hành động giơ tay nắm chặt để thể hiện sự quyết tâm mạnh mẽ.
 */
function raiseFistConfidently(character) {
    const raiseFistAnimation = new THREE.AnimationClip("RaiseFistConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseFistAnimation);
}

/**
 * Chuyển động 709: Nhìn Qua Khán Giả Và Mỉm Cười
 * Thêm hành động nhìn bao quát khán giả từ trái sang phải và kết thúc bằng một nụ cười.
 */
function glanceAtAudienceAndSmile(character) {
    const audienceSmileAnimation = new THREE.AnimationClip("GlanceAtAudienceSmile", 2.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, -Math.PI / 12, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(audienceSmileAnimation);
}

/**
 * Chuyển động 710: Nhìn Qua Khán Giả Và Giơ Tay Lên Cao
 * Thêm hành động nhìn bao quát khán giả và kết hợp tay giơ cao.
 */
function scanAudienceWithRaisedHand(character) {
    const raisedHandAnimation = new THREE.AnimationClip("ScanAudienceRaisedHand", 2.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, -Math.PI / 12, 0, Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raisedHandAnimation);
}

/**
 * Chuyển động 711: Đứng Yên Và Chỉ Tay Lên Trên
 * Thêm hành động đứng yên và chỉ tay lên trên như đang làm rõ một ý tưởng cao hơn.
 */
function standAndPointUp(character) {
    const pointUpAnimation = new THREE.AnimationClip("StandPointUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointUpAnimation);
}

/**
 * Chuyển động 712: Vỗ Tay Với Nụ Cười Khích Lệ
 * Thêm hành động vỗ tay và nụ cười khích lệ để thể hiện sự động viên.
 */
function clapWithEncouragingSmile(character) {
    const encouragingSmileAnimation = new THREE.AnimationClip("ClapEncouragingSmile", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(encouragingSmileAnimation);
}

// Export all presentation animations
export {
    touchHeartWithNod,
    pointSideAndLook,
    standAndGuidePoint,
    clapLightlyWithNod,
    raiseAndSweepHand,
    liftHandAndPause,
    stepBackAndBow,
    raiseFistConfidently,
    glanceAtAudienceAndSmile,
    scanAudienceWithRaisedHand,
    standAndPointUp,
    clapWithEncouragingSmile
};
