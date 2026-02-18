// Sports Animations Library - Part 45
// Contains various sports-related animation functions

/**
 * Chuyển động 536: Cú Phát Bóng Bằng Chân
 * Thêm động tác đứng và phát bóng bằng chân trong bóng đá về lực mạnh.
 */
function soccerFreeKick(character) {
    const freeKickAnimation = new THREE.AnimationClip("SoccerFreeKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(freeKickAnimation);
}

/**
 * Chuyển động 541: Cú Đánh Bóng Gậy Cricket
 * Thêm động tác xoay người và vung gậy mạnh mẽ để đánh bóng cricket về lực lượn.
 */
function cricketBatSwing(character) {
    const batSwingAnimation = new THREE.AnimationClip("CricketBatSwing", 2, [
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
    character.animations.push(batSwingAnimation);
}

/**
 * Chuyển động 542: Chạy Lấy Lực Và Nhảy Cao Đánh Đầu
 * Thêm động tác chạy nhanh và bật nhảy đánh đầu mạnh trong bóng đá.
 */
function runningHeader(character) {
    const headerJumpAnimation = new THREE.AnimationClip("RunningHeader", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(headerJumpAnimation);
}

/**
 * Chuyển động 543: Cú Phát Bóng Cầu Lông Cao Tay
 * Thêm động tác đứng và phát cầu từ cao xuống về lực mạnh.
 */
function badmintonHighServe(character) {
    const highServeAnimation = new THREE.AnimationClip("BadmintonHighServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(highServeAnimation);
}

/**
 * Chuyển động 544: Động Tác Quăng Bóng Bowling
 * Thêm động tác cúi người và quăng bóng bowling về phong cách mạnh mẽ.
 */
function bowlingThrow(character) {
    const bowlingThrowAnimation = new THREE.AnimationClip("BowlingThrow", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bowlingThrowAnimation);
}

/**
 * Chuyển động 545: Chạy Với Động Tác Phát Bóng Rổ
 * Thêm động tác chạy nhanh và phát bóng rổ về sự chính xác.
 */
function runningBasketballPass(character) {
    const basketballPassAnimation = new THREE.AnimationClip("RunningBasketballPass", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(basketballPassAnimation);
}

/**
 * Chuyển động 546: Cú Đập Mạnh Trong Quần Vợt
 * Thêm động tác nhảy và đập mạnh bóng quần vợt từ trên xuống.
 */
function tennisOverheadSmash(character) {
    const overheadSmashAnimation = new THREE.AnimationClip("TennisOverheadSmash", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(overheadSmashAnimation);
}

/**
 * Chuyển động 547: Động Tác Bắt Cao Đập Cầu
 * Thêm động tác bắt cao và đập cầu mạnh mẽ từ trên xuống.
 */
function badmintonJumpSmash(character) {
    const jumpSmashAnimation = new THREE.AnimationClip("BadmintonJumpSmash", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpSmashAnimation);
}

/**
 * Chuyển động 548: Cú Ném Lên Cao Trong Bóng Chày
 * Thêm động tác tung bóng chày lên cao tạo sự chính xác.
 */
function baseballPopFly(character) {
    const popFlyAnimation = new THREE.AnimationClip("BaseballPopFly", 2, [
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
    character.animations.push(popFlyAnimation);
}

/**
 * Chuyển động 549: Động Tác Chạy Và Ném Lao
 * Thêm động tác chạy nhanh và tung lao về kinh điển về lực từ cơ thể.
 */
function sprintAndJavelinThrow(character) {
    const sprintJavelinAnimation = new THREE.AnimationClip("SprintJavelinThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sprintJavelinAnimation);
}

/**
 * Chuyển động 551: Động Tác Đá Cầu Chuyền Trong Bóng Chuyền
 * Thêm hình ảnh đứng và đá bóng chuyền bằng hai tay ở vị trí thấp, biểu thị sự sẵn sàng và nhanh nhẹn.
 */
function volleyballBump(character) {
    const bumpAnimation = new THREE.AnimationClip("VolleyballBump", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bumpAnimation);
}

/**
 * Chuyển động 552: Cú Tạt Bóng Trong Bóng Đá
 * Thêm động tác xoay người và tạt bóng chính xác sang cánh hoặc về phía trước.
 */
function soccerCrossPass(character) {
    const crossPassAnimation = new THREE.AnimationClip("SoccerCrossPass", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossPassAnimation);
}

/**
 * Chuyển động 553: Bắt Cao Ném Bóng Chuyền Sang Sân Đối Thủ
 * Thêm động tác bật nhảy và vung tay để ném bóng chuyền qua lưới.
 */
function volleyballJumpThrow(character) {
    const jumpThrowAnimation = new THREE.AnimationClip("VolleyballJumpThrow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpThrowAnimation);
}

/**
 * Chuyển động 554: Động Tác Ném Lên Rổ Bằng Mắt Tay
 * Thêm động tác nhảy nhẹ nhàng và ném bóng lên rổ bằng mắt tay biểu thị sự chính xác.
 */
function basketballLayup(character) {
    const layupAnimation = new THREE.AnimationClip("BasketballLayup", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(layupAnimation);
}

/**
 * Chuyển động 555: Chạy Và Sút Bóng Thẳng Vào Gôn
 * Thêm động tác chạy và sút bóng thẳng về phía gôn về lực mạnh.
 */
function soccerStraightShot(character) {
    const straightShotAnimation = new THREE.AnimationClip("SoccerStraightShot", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(straightShotAnimation);
}

/**
 * Chuyển động 561: Nhảy Lên Và Tung Cú Sút Bóng Rổ
 * Thêm động tác bật nhảy cao và tung cú sút bóng rổ về phong cách mạnh mẽ.
 */
function basketballJumpShot(character) {
    const jumpShotAnimation = new THREE.AnimationClip("BasketballJumpShot", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(jumpShotAnimation);
}

/**
 * Chuyển động 562: Tư Thế Chuẩn Bị Đánh Gậy Bóng Chày
 * Thêm tư thế đứng chắc chắn với tay cầm gậy bóng chày, tạo sự tập trung.
 */
function baseballReadyStance(character) {
    const readyStanceAnimation = new THREE.AnimationClip("BaseballReadyStance", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(readyStanceAnimation);
}

/**
 * Chuyển động 564: Động Tác Đánh Bóng Lên Cao Trong Cầu Lông
 * Thêm động tác đánh cầu lên cao về sự chính xác.
 */
function badmintonLift(character) {
    const liftAnimation = new THREE.AnimationClip("BadmintonLift", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftAnimation);
}

/**
 * Chuyển động 565: Chạy Và Chuyền Bóng
 * Thêm động tác chạy và tung bóng về phía đối phương trong bóng đá.
 */
function soccerPass(character) {
    const passAnimation = new THREE.AnimationClip("SoccerPass", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(passAnimation);
}

/**
 * Chuyển động 567: Động Tác Phát Bóng Chính Xác Trong Tennis
 * Thêm động tác phát bóng về tay vung mạnh và chuẩn xác.
 */
function tennisServe(character) {
    const serveAnimation = new THREE.AnimationClip("TennisServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(serveAnimation);
}

/**
 * Chuyển động 568: Chạy Và Tung Cú Sút Phát Góc
 * Thêm động tác chạy nhanh và tung cú sút phát góc trong bóng đá.
 */
function soccerCornerKick(character) {
    const cornerKickAnimation = new THREE.AnimationClip("SoccerCornerKick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(cornerKickAnimation);
}

/**
 * Chuyển động 570: Chạy Và Bắt Nhảy Ném Lao
 * Thêm hình ảnh chạy lấy lực và tung lao mạnh trong kinh điển.
 */
function javelinSprintAndThrow(character) {
    const javelinThrowAnimation = new THREE.AnimationClip("JavelinSprintAndThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(javelinThrowAnimation);
}

/**
 * Chuyển động 571: Bắt Nhảy Và Ném Bóng Qua NgƯời Trong Bóng Rổ
 * Thêm động tác bật nhảy cao và ném bóng qua người với tay giơ lên mạnh mẽ.
 */
function basketballAlleyOop(character) {
    const alleyOopAnimation = new THREE.AnimationClip("BasketballAlleyOop", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(alleyOopAnimation);
}

/**
 * Chuyển động 572: Động Tác Quay NgƯời Đánh Bóng Trong Tennis
 * Thêm động tác xoay người mạnh mẽ và đánh bóng tennis chính xác.
 */
function tennisTopSpin(character) {
    const topSpinAnimation = new THREE.AnimationClip("TennisTopSpin", 2, [
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
    character.animations.push(topSpinAnimation);
}

/**
 * Chuyển động 573: Chạy Với Động Tác Đá Bóng Cao
 * Thêm hình ảnh chạy và đưa tay lên cao để đá bóng trong bóng chuyền.
 */
function volleyballHighSet(character) {
    const highSetAnimation = new THREE.AnimationClip("VolleyballHighSet", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(highSetAnimation);
}

/**
 * Chuyển động 574: Động Tác Ném Rổ Từ Xa
 * Thêm động tác đứng yên và tung cú ném rổ từ xa, biểu thị sự chính xác.
 */
function basketballFreeThrow(character) {
    const freeThrowAnimation = new THREE.AnimationClip("BasketballFreeThrow", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(freeThrowAnimation);
}

/**
 * Chuyển động 575: Động Tác Phát Cầu Lông Chính Xác
 * Thêm hình ảnh phát cầu lông chính xác về lực mạnh.
 */
function badmintonServe(character) {
    const serveAnimation = new THREE.AnimationClip("BadmintonServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(serveAnimation);
}

/**
 * Chuyển động 576: Chạy Và Ném Bóng Lên Cao
 * Thêm động tác chạy nhanh và tung bóng lên cao biểu thị sự linh hoạt.
 */
function runningThrow(character) {
    const runningThrowAnimation = new THREE.AnimationClip("RunningThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(runningThrowAnimation);
}

/**
 * Chuyển động 577: Chạy Nhanh Và Cú Phát Gậy Golf
 * Thêm động tác chạy và cúi người phát bóng mạnh trong golf.
 */
function golfDrive(character) {
    const driveAnimation = new THREE.AnimationClip("GolfDrive", 2.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(driveAnimation);
}
