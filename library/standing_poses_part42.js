// Library: Standing Poses Animations (Part 42)
// Contains various static standing poses with different arm and leg positions

/**
 * Đứng với hai tay chống hông - Tư thế tự tin
 */
function standHandsOnHips(character) {
    const hipsAnimation = new THREE.AnimationClip("HandsOnHipsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(hipsAnimation);
}

/**
 * Đứng với tay duỗi thẳng ra sau - Tư thế thư thái
 */
function stretchArmsBackward(character) {
    const stretchBackAnimation = new THREE.AnimationClip("StretchArmsBackward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(stretchBackAnimation);
}

/**
 * Đứng với tay khoanh trước ngực - Tư thế suy tư
 */
function crossArmsAndStand(character) {
    const crossArmsAnimation = new THREE.AnimationClip("CrossArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}

/**
 * Đứng với tư thế tay mở rộng - Tư thế chào đón
 */
function standWithOpenHands(character) {
    const openHandsAnimation = new THREE.AnimationClip("StandOpenHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(openHandsAnimation);
}

/**
 * Đứng với chân bắt chéo - Tư thế thư giãn
 */
function standWithCrossedLegs(character) {
    const crossedLegsAnimation = new THREE.AnimationClip("CrossedLegsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.legs.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.2, 0, 0]
        )
    ]);
    character.animations.push(crossedLegsAnimation);
}

/**
 * Đứng tự nhiên - Tư thế tự nhiên
 */
function standNaturally(character) {
    const naturalStandAnimation = new THREE.AnimationClip("NaturalStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(naturalStandAnimation);
}

/**
 * Đứng với tay mở rộng sang hai bên - Tư thế mạnh mẽ
 */
function standWithWideOpenArms(character) {
    const wideOpenArmsAnimation = new THREE.AnimationClip("WideOpenArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(wideOpenArmsAnimation);
}

/**
 * Đứng với tay giơ lên trước - Tư thế tập trung
 */
function standAndLiftArms(character) {
    const liftArmsAnimation = new THREE.AnimationClip("StandLiftArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftArmsAnimation);
}

/**
 * Đứng với một tay chống hông - Tư thế tự tin
 */
function standWithOneHandOnHip(character) {
    const oneHandHipAnimation = new THREE.AnimationClip("OneHandHipStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(oneHandHipAnimation);
}

/**
 * Đứng với tay chỉ sang ngang - Tư thế chỉ dẫn
 */
function pointToSide(character) {
    const pointSideAnimation = new THREE.AnimationClip("PointSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}

/**
 * Đứng với tay khoanh tự nhiên - Tư thế thư giãn
 */
function standAndFoldArmsNaturally(character) {
    const foldArmsAnimation = new THREE.AnimationClip("FoldArmsNaturally", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(foldArmsAnimation);
}

/**
 * Đứng với tay chống bên hông - Tư thế tự tin
 */
function standWithSideArmSupport(character) {
    const sideArmSupportAnimation = new THREE.AnimationClip("StandSideArmSupport", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sideArmSupportAnimation);
}

/**
 * Đứng với tay chỉ lên trời - Tư thế quyết tâm
 */
function standAndPointToSky(character) {
    const pointToSkyAnimation = new THREE.AnimationClip("PointToSky", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(pointToSkyAnimation);
}

/**
 * Đứng với tay giơ cao chắn - Tư thế phòng thủ
 */
function standAndBlockHigh(character) {
    const blockHighAnimation = new THREE.AnimationClip("BlockHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(blockHighAnimation);
}

/**
 * Đứng với tay khoanh trước ngực - Tư thế bình thản
 */
function standWithCrossedArms(character) {
    const crossedArmsAnimation = new THREE.AnimationClip("CrossedArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossedArmsAnimation);
}

/**
 * Đứng tự tin với hai tay chống eo - Tư thế mạnh mẽ
 */
function standConfidently(character) {
    const confidentlyAnimation = new THREE.AnimationClip("StandConfidently", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(confidentlyAnimation);
}

/**
 * Đứng với tay chống lên đầu - Tư thế mệt mỏi/thư giãn
 */
function restHandsOnHead(character) {
    const handsOnHeadAnimation = new THREE.AnimationClip("RestHandsOnHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsOnHeadAnimation);
}

export {
    standHandsOnHips,
    stretchArmsBackward,
    crossArmsAndStand,
    standWithOpenHands,
    standWithCrossedLegs,
    standNaturally,
    standWithWideOpenArms,
    standAndLiftArms,
    standWithOneHandOnHip,
    pointToSide,
    standAndFoldArmsNaturally,
    standWithSideArmSupport,
    standAndPointToSky,
    standAndBlockHigh,
    standWithCrossedArms,
    standConfidently,
    restHandsOnHead
};
