// Standing Poses Animations Library - Part 41
// Static standing animations for character poses

/**
 * Chuyển động 360: Đứng Vươn Tay Chống Eo
 * Thêm hình động đứng yên với mộ tay chống eo tạo phong thái tự tin.
 */
function standHandOnHip(character) {
    const handHipAnimation = new THREE.AnimationClip("StandHandOnHip", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handHipAnimation);
}

/**
 * Chuyển động 361: Đứng Thẳng Với Hai Tay Đặt Lên Ngực
 * Thêm hình động đứng yên với hai tay đặt lên ngực biểu hiện cảm kích hoặc cảm xúc mạnh.
 */
function standWithHandsOnChest(character) {
    const handsOnChestAnimation = new THREE.AnimationClip("HandsOnChest", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(handsOnChestAnimation);
}

/**
 * Chuyển động 366: Đứng Thẳng Và Khoanh Tay Nhẹ
 * Thêm hình động đứng yên và khoanh tay nhẹ như biểu hiện tự tin hoặc thư thái.
 */
function standAndFoldArms(character) {
    const foldArmsAnimation = new THREE.AnimationClip("FoldArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(foldArmsAnimation);
}

/**
 * Chuyển động 369: Đứng Với Tay Duỗi Hai Bên
 * Thêm hình động đứng thẳng và duỗi rộng tay sang hai bên như biểu hiện chào hỏi.
 */
function openArmsWide(character) {
    const openArmsAnimation = new THREE.AnimationClip("OpenArmsWide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}

/**
 * Chuyển động 371: Đứng Thẳng Với Một Tay Đưa Lên Trời
 * Thêm hình động đứng yên với một tay đưa lên cao như biểu hiện quyết tâm hoặc chiến thắng.
 */
function standAndRaiseOneHand(character) {
    const raiseOneHandAnimation = new THREE.AnimationClip("RaiseOneHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(raiseOneHandAnimation);
}

/**
 * Chuyển động 373: Đứng Thẳng Với Tư Thế Tập Trung
 * Thêm hình động đứng yên với ánh mắt tập trung và tay đặt bên hông như biểu hiện nghiêm túc.
 */
function standWithFocus(character) {
    const focusAnimation = new THREE.AnimationClip("StandFocus", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(focusAnimation);
}

/**
 * Chuyển động 376: Đứng Thẳng Với Tay Đưa Lên Trán
 * Thêm hình động đứng thẳng và đặt tay lên trán để che mắt và quan sát phía trước.
 */
function shieldEyesToLookFar(character) {
    const lookFarAnimation = new THREE.AnimationClip("ShieldEyesLookFar", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(lookFarAnimation);
}

/**
 * Chuyển động 379: Đứng Với Tay Đặt Sau Lưng
 * Thêm hình động đứng yên với tay đặt phía sau lưng tạo cảm giác nghiêm túc hoặc suy nghĩ.
 */
function standWithHandsBehind(character) {
    const behindHandsAnimation = new THREE.AnimationClip("HandsBehindBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(behindHandsAnimation);
}

/**
 * Chuyển động 381: Đứng Thẳng Với Tay Đưa Ra Trước
 * Thêm hình động đứng yên với tay đưa ra phía trước như đang chào hoặc biểu hiện mời gọi.
 */
function standAndOfferHand(character) {
    const offerHandAnimation = new THREE.AnimationClip("OfferHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(offerHandAnimation);
}

/**
 * Chuyển động 384: Đứng Thẳng Với Tay Giơ Cao
 * Thêm hình động đứng yên và giơ cả hai tay lên cao như biểu hiện vui vẻ hoặc sự cổ vũ.
 */
function standAndLiftArmsHigh(character) {
    const liftArmsHighAnimation = new THREE.AnimationClip("LiftArmsHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(liftArmsHighAnimation);
}

/**
 * Chuyển động 388: Đứng Thẳng Với Tay Đặt Sau Lưng
 * Thêm hình động đứng yên với tay đặt phía sau lưng như biểu hiện nghiêm túc hoặc thư thái.
 */
function standCalmly(character) {
    const calmStandAnimation = new THREE.AnimationClip("StandCalmly", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(calmStandAnimation);
}

/**
 * Chuyển động 390: Đứng Thẳng Với Tư Thế Chân Rộng
 * Thêm hình động đứng vững với hai chân dang rộng tạo phong thái mạnh mẽ.
 */
function standFirm(character) {
    const firmStandAnimation = new THREE.AnimationClip("StandFirm", 1.5, [
        new THREE.KeyframeTrack(
            'character.legs.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0]
        )
    ]);
    character.animations.push(firmStandAnimation);
}

/**
 * Chuyển động 392: Đứng Với Tay Đ Sau Lưng Và Quan Sát
 * Thêm hình động đứng yên với tay để sau lưng và ánh mắt quan sát xung quanh.
 */
function standWithObservation(character) {
    const observationAnimation = new THREE.AnimationClip("StandWithObservation", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(observationAnimation);
}

export {
    standHandOnHip,
    standWithHandsOnChest,
    standAndFoldArms,
    openArmsWide,
    standAndRaiseOneHand,
    standWithFocus,
    shieldEyesToLookFar,
    standWithHandsBehind,
    standAndOfferHand,
    standAndLiftArmsHigh,
    standCalmly,
    standFirm,
    standWithObservation
};
