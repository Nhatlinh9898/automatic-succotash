// Defensive Animations Library - Part 40
// Contains character defensive and protective animations

/**
 * Quỳ Xuống Với Tay Chống Đất
 * Thêm hành động quỳ gối xuống và chống hai tay xuống đất tạo dòng chảy mạnh mẽ.
 */
function kneelAndBraceDown(character) {
    const kneelBraceDownAnimation = new THREE.AnimationClip("KneelBraceDown", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(kneelBraceDownAnimation);
}

/**
 * Lùi Bước Với Tay Giơ Phòng Thủ
 * Thêm hành động bước lùi nhẹ nhàng và giơ tay lên tư thế phòng thủ.
 */
function stepBackAndDefend(character) {
    const stepDefendAnimation = new THREE.AnimationClip("StepBackDefend", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(stepDefendAnimation);
}

/**
 * Đứng Thẳng Với Tay Đưa Sau Lưng
 * Thêm tư thế đứng yên với tay đưa sau lưng, biểu hiện sự thư thái.
 */
function standWithHandsBehind(character) {
    const handsBehindAnimation = new THREE.AnimationClip("HandsBehind", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsBehindAnimation);
}

/**
 * Quỳ Gối Với Tay Đặt Lên Ngực
 * Thêm hành động quỳ cả hai gối và đặt tay lên ngực biểu hiện lòng biết ơn hoặc cảm kích.
 */
function kneelWithHandOnHeart(character) {
    const kneelHeartAnimation = new THREE.AnimationClip("KneelHandOnHeart", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kneelHeartAnimation);
}

/**
 * Lùi Một Bước Và Quay Đầu Nhẹ
 * Thêm cả hành động bước lùi một bước nhẹ và quay đầu sang bên biểu hiện sự quan sát.
 */
function stepBackAndGlance(character) {
    const backGlanceAnimation = new THREE.AnimationClip("StepBackGlance", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(backGlanceAnimation);
}

/**
 * Đứng Thẳng Và Gạt Tay Sang Bên
 * Thêm hành động đứng yên và dùng tay gạt sang một bên biểu hiện sự từ chối hoặc loại bỏ.
 */
function swipeArmSide(character) {
    const swipeAnimation = new THREE.AnimationClip("SwipeArmSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(swipeAnimation);
}

/**
 * Đứng Thẳng Và Nghiêng Người Sang Một Bên
 * Thêm hành động đứng yên và nghiêng người nhẹ sang một bên, biểu hiện sự thư giãn hoặc tự tin.
 */
function standAndLeanSide(character) {
    const leanSideAnimation = new THREE.AnimationClip("LeanSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(leanSideAnimation);
}

/**
 * Quỳ Một Gối Và Cúi Đầu Kính Trọng
 * Thêm hành động quỳ một gối và cúi đầu sâu biểu hiện sự kính trọng hoặc sẵn sàng.
 */
function kneelOneLegAndBow(character) {
    const kneelBowAnimation = new THREE.AnimationClip("KneelOneLegBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelBowAnimation);
}

export {
    kneelAndBraceDown,
    stepBackAndDefend,
    standWithHandsBehind,
    kneelWithHandOnHeart,
    stepBackAndGlance,
    swipeArmSide,
    standAndLeanSide,
    kneelOneLegAndBow
};
