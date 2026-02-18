// Combat Animations Library - Part 45
// Contains various combat and fighting animation functions

/**
 * Chuyển động 533: Đấm Tròn
 * Thêm hành động đấm tròn mạnh mẽ kết hợp xoay người.
 */
function circularPunch(character) {
    const circularPunchAnimation = new THREE.AnimationClip("CircularPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(circularPunchAnimation);
}

/**
 * Chuyển động 539: Lùi Bước Với Động Tác Phòng Thủ Quyền Anh
 * Thêm động tác bước lùi và đưa tay thủ phía trước tạo thế phòng thủ.
 */
function boxingDefensiveMove(character) {
    const defensiveMoveAnimation = new THREE.AnimationClip("BoxingDefensiveMove", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(defensiveMoveAnimation);
}

/**
 * Chuyển động 540: Bật Nhảy Với Động Tác Kéo Tập
 * Thêm động tác bật nhảy với cánh tay kéo mạnh từ dưới lên tạo sức mạnh.
 */
function explosivePull(character) {
    const explosivePullAnimation = new THREE.AnimationClip("ExplosivePull", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -1, 0, 0, 2.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(explosivePullAnimation);
}

/**
 * Chuyển động 557: Nhảy Cao Và Tung Cú Đấm Mạnh Xuống
 * Thêm động tác bật nhảy và tung móc đấm xuống đặc biệt thể hiện sức mạnh.
 */
function powerJumpPunch(character) {
    const jumpPunchAnimation = new THREE.AnimationClip("PowerJumpPunch", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(jumpPunchAnimation);
}

/**
 * Chuyển động 566: Động Tác Tung Cú Đấm Mục Quyền Anh
 * Thêm móc đấm mục mạnh mẽ thể hiện sức mạnh.
 */
function uppercutPunch(character) {
    const uppercutAnimation = new THREE.AnimationClip("UppercutPunch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(uppercutAnimation);
}

/**
 * Chuyển động 569: Nhảy Cao Với Động Tác Đấm Xuống
 * Thêm động tác nhảy cao và đấm xuống mạnh mẽ thể hiện uy lực.
 */
function descendingPunch(character) {
    const descendingPunchAnimation = new THREE.AnimationClip("DescendingPunch", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(descendingPunchAnimation);
}

/**
 * Chuyển động 578: Nhảy Và Tung Cú Đấm Kết Hợp
 * Thêm động tác bật cao và tung hai cú đấm nhanh trong không trung.
 */
function aerialDoublePunch(character) {
    const doublePunchAnimation = new THREE.AnimationClip("AerialDoublePunch", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(doublePunchAnimation);
}
