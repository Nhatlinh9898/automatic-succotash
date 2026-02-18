// Gesture Animations - Part 49
// Expressive hand and arm gestures for communication

/**
 * Chuyển động 713: Đưa Tay Lên Và Mở Rộng Sang Hai Bên
 * Thêm hành động giơ tay lên cao và mở rộng sang hai bên.
 */
function raiseAndSpreadArms(character) {
    const spreadArmsAnimation = new THREE.AnimationClip("RaiseSpreadArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsAnimation);
}

/**
 * Chuyển động 714: Gật Nhẹ Khi Nhấn Mạnh Ý Kiến
 * Thêm hành động gật nhẹ đầu sau khi tay nhấn mạnh xuống.
 */
function emphasizeWithNod(character) {
    const emphasizeNodAnimation = new THREE.AnimationClip("EmphasizeWithNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(emphasizeNodAnimation);
}

/**
 * Chuyển động 715: Lùi Lại Và Đang Tay Nhẹ
 * Thêm hành động lùi mặt về phía trước và dang tay nhẹ.
 */
function stepBackAndOpenHands(character) {
    const openHandsAnimation = new THREE.AnimationClip("StepBackOpenHands", 2, [
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
    character.animations.push(openHandsAnimation);
}

/**
 * Chuyển động 716: Dùng Cả Hai Tay Nhấn Mạnh Ý Chính
 * Thêm hành động hạ cả hai tay xuống để đưng thây vể sự mạnh mẽ.
 */
function doubleHandEmphasis(character) {
    const doubleHandEmphasisAnimation = new THREE.AnimationClip("DoubleHandEmphasis", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(doubleHandEmphasisAnimation);
}

/**
 * Chuyển động 717: Nhìn Trái Và Đưa Tay Chỉ Nhẹ
 * Thêm hành động quay đầu nhìn sang trái và tay chỉ nhẹ.
 */
function glanceLeftAndPoint(character) {
    const glanceLeftAnimation = new THREE.AnimationClip("GlanceLeftAndPoint", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(glanceLeftAnimation);
}

/**
 * Chuyển động 718: Gấp Nhẹ Người Và Giang Tay Nhiều Huyết
 * Thêm hành động cúi nhẹ người và tay giang rộng.
 */
function bowSlightlyAndSpreadArms(character) {
    const spreadArmsBowAnimation = new THREE.AnimationClip("BowSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsBowAnimation);
}

/**
 * Chuyển động 719: Đưa Tay Lên Và Kéo Tay Lại
 * Thêm hành động đưa tay lên và kéo lại gần ngực.
 */
function raiseHandAndPullBack(character) {
    const pullBackAnimation = new THREE.AnimationClip("RaiseHandPullBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 3, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(pullBackAnimation);
}

/**
 * Chuyển động 720: Chỉ Cả Hai Tay Về Hai Hướng
 * Thêm hành động hai tay chỉ sang hai hướng để lặp nhau.
 */
function pointBothWays(character) {
    const pointBothWaysAnimation = new THREE.AnimationClip("PointBothWays", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(pointBothWaysAnimation);
}

/**
 * Chuyển động 721: Đứng Thẳng Và Chỉ Về Mặt Hướng
 * Thêm hành động chỉ tay về mặt hướng cụ thể.
 */
function standAndPointFirmly(character) {
    const pointFirmlyAnimation = new THREE.AnimationClip("StandPointFirmly", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointFirmlyAnimation);
}

/**
 * Chuyển động 722: Vỗ Nhẹ Tay Và Cười Động Viên
 * Thêm hành động vỗ tay nhẹ kết hợp với nụ cười khích lệ.
 */
function clapAndSmileEncouragingly(character) {
    const clapSmileAnimation = new THREE.AnimationClip("ClapSmileEncouragingly", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(clapSmileAnimation);
}

/**
 * Chuyển động 723: Đứng Về Tay Đưa Sang Hai Bên Và Gật Nhẹ
 * Thêm hành động đứng thẳng, tay mở rộng sang hai bên và một cái gật nhẹ.
 */
function standAndOpenArmsWithNod(character) {
    const openArmsNodAnimation = new THREE.AnimationClip("StandOpenArmsNod", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openArmsNodAnimation);
}

/**
 * Chuyển động 724: Đứng Về Tay Đưa Cao Sau Đó Hạ Xuống
 * Thêm hành động giơ tay lên cao mạnh mẽ và sau đó hạ tay xuống.
 */
function liftAndLowerArmsConfidently(character) {
    const liftLowerArmsAnimation = new THREE.AnimationClip("LiftLowerArmsConfidently", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 3, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(liftLowerArmsAnimation);
}

/**
 * Chuyển động 725: Đứng Và Đưa Tay Ra Trước Về Lòng Tay Mở
 * Thêm hành động đứng yên và đưa tay ra phía trước về lòng bàn tay mở.
 */
function openHandGestureForward(character) {
    const openHandGestureAnimation = new THREE.AnimationClip("OpenHandGestureForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(openHandGestureAnimation);
}

/**
 * Chuyển động 726: Đưa Tay Sang Hai Bên Về Chỉ Mời Gọi
 * Thêm hành động tay đưa sang hai bên nhẹ nhàng như mời gọi.
 */
function invitingHandGesture(character) {
    const invitingGestureAnimation = new THREE.AnimationClip("InvitingHandGesture", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(invitingGestureAnimation);
}

/**
 * Chuyển động 727: Cúi Đầu Nhẹ Và Đưa Tay Chỉ Xuống
 * Thêm hành động cúi nhẹ đầu và tay chỉ xuống như minh họa.
 */
function bowAndPointDown(character) {
    const pointDownAnimation = new THREE.AnimationClip("BowPointDown", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointDownAnimation);
}

/**
 * Chuyển động 728: Nhìn Xuống Về Tay Đưa Sang Mặt Bên
 * Thêm hành động cúi nhẹ đầu và tay dang nhẹ sang mặt bên.
 */
function lookDownAndExtendArm(character) {
    const lookDownAnimation = new THREE.AnimationClip("LookDownExtendArm", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(lookDownAnimation);
}

/**
 * Chuyển động 729: Đưa Hai Tay Lên Trước Ngực Về Sự Chân Thành
 * Thêm hành động hai tay đưa lên trước ngực và giữ nhẹ.
 */
function holdHandsToChest(character) {
    const holdChestAnimation = new THREE.AnimationClip("HoldHandsToChest", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(holdChestAnimation);
}

/**
 * Chuyển động 730: Đưa Mắt Tay Ra Trước Và Nhấn Mạnh
 * Thêm hành động tay vươn ra phía trước và hạ mạnh xuống.
 */
function extendHandAndPressDown(character) {
    const pressDownAnimation = new THREE.AnimationClip("ExtendHandPressDown", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(pressDownAnimation);
}

// Export all gesture animations
export {
    raiseAndSpreadArms,
    emphasizeWithNod,
    stepBackAndOpenHands,
    doubleHandEmphasis,
    glanceLeftAndPoint,
    bowSlightlyAndSpreadArms,
    raiseHandAndPullBack,
    pointBothWays,
    standAndPointFirmly,
    clapAndSmileEncouragingly,
    standAndOpenArmsWithNod,
    liftAndLowerArmsConfidently,
    openHandGestureForward,
    invitingHandGesture,
    bowAndPointDown,
    lookDownAndExtendArm,
    holdHandsToChest,
    extendHandAndPressDown
};
