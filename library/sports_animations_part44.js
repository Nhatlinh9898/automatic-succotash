// Sports Animations Library - Part 44
// Various sports-related animations for characters

/**
 * Chuyển động 502: Cú Swing Gậy Golf
 * Thêm động tác swing gậy golf với sức mạnh từ vai và tay, tạo cảm giác chính xác và mạnh mẽ.
 */
function golfSwing(character) {
    const golfSwingAnimation = new THREE.AnimationClip("GolfSwing", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(golfSwingAnimation);
}

/**
 * Chuyển động 503: Cú Đập Bóng Chuyền
 * Thêm hình động bật nhảy và đập bóng chuyền với tay mạnh.
 */
function volleyballSpike(character) {
    const spikeAnimation = new THREE.AnimationClip("VolleyballSpike", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(spikeAnimation);
}

/**
 * Chuyển động 504: Động Tác Sút Bóng
 * Thêm một cú sút bóng mạnh với chân tạo sức bật từ cơ thể.
 */
function soccerKick(character) {
    const soccerKickAnimation = new THREE.AnimationClip("SoccerKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(soccerKickAnimation);
}

/**
 * Chuyển động 505: Động Tác Tung Bóng Rổ
 * Thêm động tác nhảy lên và tung bóng rổ với tư thế đầy sức mạnh.
 */
function basketballThrow(character) {
    const basketballThrowAnimation = new THREE.AnimationClip("BasketballThrow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(basketballThrowAnimation);
}

/**
 * Chuyển động 506: Động Tác Ném Bóng Chày
 * Thêm động tác đứng và ném bóng chày về phía trước với cách mạnh mẽ.
 */
function baseballPitch(character) {
    const baseballPitchAnimation = new THREE.AnimationClip("BaseballPitch", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(baseballPitchAnimation);
}

/**
 * Chuyển động 508: Cú Phát Bóng Tennis
 * Thêm động tác phát bóng tennis với tay vung mạnh lên trên.
 */
function tennisServe(character) {
    const tennisServeAnimation = new THREE.AnimationClip("TennisServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(tennisServeAnimation);
}

/**
 * Chuyển động 510: Nhún Gối Chuẩn Bị Nâng Tạ
 * Thêm động tác nhún gối và tay sẵn sàng nâng tạ, thể hiện sức mạnh.
 */
function weightliftingSquat(character) {
    const weightliftingAnimation = new THREE.AnimationClip("WeightliftingSquat", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -0.5, 0, 0, -0.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(weightliftingAnimation);
}

/**
 * Chuyển động 511: Động Tác Đánh Bóng Đền Tennis
 * Thêm động tác đánh bóng đền với sức mạnh từ tay và cơ thể tạo cảm giác quyết đoán.
 */
function tennisForehand(character) {
    const forehandAnimation = new THREE.AnimationClip("TennisForehand", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(forehandAnimation);
}

/**
 * Chuyển động 512: Động Tác Đánh Bóng Đầu Tennis
 * Thêm động tác xoay người đánh bóng đầu với sức mạnh và chính xác.
 */
function tennisBackhand(character) {
    const backhandAnimation = new THREE.AnimationClip("TennisBackhand", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(backhandAnimation);
}

/**
 * Chuyển động 515: Động Tác Chèo Thuyền
 * Thêm động tác chèo thuyền với tay vung mạnh sang hai bên biểu thị sự đồng đều.
 */
function rowing(character) {
    const rowingAnimation = new THREE.AnimationClip("Rowing", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(rowingAnimation);
}

/**
 * Chuyển động 516: Động Tác Ném Đĩa Bay
 * Thêm động tác xoay người ném đĩa bay với lực từ cơ thể và tay.
 */
function frisbeeThrow(character) {
    const frisbeeThrowAnimation = new THREE.AnimationClip("FrisbeeThrow", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(frisbeeThrowAnimation);
}

/**
 * Chuyển động 519: Động Tác Ném Tạ Trong Điền Kinh
 * Thêm động tác ném tạ với lực từ cơ thể và tay.
 */
function shotPut(character) {
    const shotPutAnimation = new THREE.AnimationClip("ShotPut", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(shotPutAnimation);
}

/**
 * Chuyển động 522: Cú Đánh Chặn Cầu Lông
 * Thêm động tác bật nhảy nhẹnh và đập cầu phía trước tạo sự chính xác.
 */
function badmintonOverhead(character) {
    const overheadAnimation = new THREE.AnimationClip("BadmintonOverhead", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(overheadAnimation);
}

/**
 * Chuyển động 523: Nhún Người Và Đẩy Tạ Lên Cao
 * Thêm động tác nhún gối và đẩy tạ lên cao qua đầu, biểu thị sức mạnh cơ bắp.
 */
function cleanAndPress(character) {
    const cleanPressAnimation = new THREE.AnimationClip("CleanAndPress", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(cleanPressAnimation);
}

/**
 * Chuyển động 524: Động Tác Đánh Vật Bóng Bàn
 * Thêm động tác đánh bóng nhanh và chính xác từ bên hông, biểu thị sự linh hoạt.
 */
function pingPongSwing(character) {
    const pingPongAnimation = new THREE.AnimationClip("PingPongSwing", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pingPongAnimation);
}

/**
 * Chuyển động 525: Bắt Nhảy Với Cú Cắt Cầu Cầu Lông
 * Thêm động tác bắt nhảy nhanh và cắt cầu chéo từ bên hông.
 */
function badmintonCrossCut(character) {
    const crossCutAnimation = new THREE.AnimationClip("BadmintonCrossCut", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(crossCutAnimation);
}

/**
 * Chuyển động 526: Động Tác Chân Kéo Co
 * Thêm động tác chống chân mạnh và kéo lùi biểu thị sức mạnh cơ thể.
 */
function tugOfWarPull(character) {
    const pullAnimation = new THREE.AnimationClip("TugOfWarPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 0, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullAnimation);
}

/**
 * Chuyển động 527: Quay Người Ném Bóng Rổ
 * Thêm động tác quay người nhanh và tung bóng rổ về phía trước với lực mạnh.
 */
function basketballTurnAndThrow(character) {
    const turnThrowAnimation = new THREE.AnimationClip("BasketballTurnThrow", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(turnThrowAnimation);
}

/**
 * Chuyển động 530: Động Tác Quay Lưng Ném Lao Điền Kinh
 * Thêm động tác quay lưng và tung lao với lực mạnh, biểu thị sự tập trung.
 */
function javelinThrow(character) {
    const javelinAnimation = new THREE.AnimationClip("JavelinThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(javelinAnimation);
}

/**
 * Chuyển động 531: Cú Lăn Bóng Bowling
 * Thêm động tác cúi thấp người và tung bóng bowling về phía trước với độ chính xác cao.
 */
function bowlingRoll(character) {
    const rollAnimation = new THREE.AnimationClip("BowlingRoll", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(rollAnimation);
}

export {
    golfSwing,
    volleyballSpike,
    soccerKick,
    basketballThrow,
    baseballPitch,
    tennisServe,
    weightliftingSquat,
    tennisForehand,
    tennisBackhand,
    rowing,
    frisbeeThrow,
    shotPut,
    badmintonOverhead,
    cleanAndPress,
    pingPongSwing,
    badmintonCrossCut,
    tugOfWarPull,
    basketballTurnAndThrow,
    javelinThrow,
    bowlingRoll
};
