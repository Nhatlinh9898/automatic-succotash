/**
 * Animation Components Library - Part 33
 * Combat Movement Animations (Functions 36-41)
 */

// Function 36: Chuyển Động 36: Quỳ Gối Và Ngẩng Đầu
function kneelAndLookUp(character) {
    const kneelLookUpAnimation = new THREE.AnimationClip("KneelLookUp", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2.2],
            [0, 0, 0, 0, -0.5, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2.2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kneelLookUpAnimation);
}

// Function 37: Chuyển Động 37: Nhảy Và Đấm
function jumpAndPunch(character) {
    const jumpPunchAnimation = new THREE.AnimationClip("JumpPunch", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpPunchAnimation);
}

// Function 38: Chuyển Động 38: Cúi Người Nhanh
function quickDuck(character) {
    const duckAnimation = new THREE.AnimationClip("Duck", 0.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.4, 0.8],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(duckAnimation);
}

// Function 39: Chuyển Động 39: Đánh Mạnh Đẩy Lui Đối Thủ
function strikeOpponent(character) {
    const strikeAnimation = new THREE.AnimationClip("Strike", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0.3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(strikeAnimation);
}

// Function 40: Chuyển Động 40: Bay Lượn Tự Do
function glideFreely(character) {
    const glideAnimation = new THREE.AnimationClip("Glide", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.5, 3],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(glideAnimation);
}

// Function 41: Chuyển Động 41: Cú Nhảy Xa
function longLeap(character) {
    const leapAnimation = new THREE.AnimationClip("Leap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        )
    ]);
    character.animations.push(leapAnimation);
}

// Export all functions
export {
    kneelAndLookUp,
    jumpAndPunch,
    quickDuck,
    strikeOpponent,
    glideFreely,
    longLeap
};
