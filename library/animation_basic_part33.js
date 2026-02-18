/**
 * Animation Components Library - Part 33
 * Basic Movement Animations (Functions 1-8)
 */

// Function 1: Chuyển Động 1: Đi Bộ Dạng Thường
function walkStraight(character) {
    const walk = new THREE.AnimationClip("Walk", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, 0, 0, 0.5, 0, 0, 1]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 16, 0, 0, 0, 0, 0]
        ),
    ]);
    character.animations.push(walk);
}

// Function 2: Chuyển Động 2: Cúi Người Lễ Phép
function bowRespectfully(character) {
    const bow = new THREE.AnimationClip("Bow", 1, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bow);
}

// Function 3: Chuyển Động 3: Đấm Tay Cơ Bản
function punchStrong(character) {
    const punch = new THREE.AnimationClip("Punch", 0.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.4, 0.8],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
    ]);
    character.animations.push(punch);
}

// Function 4: Chuyển Động 4: Nhảy Nhẹ Nhàng
function jumpGracefully(character) {
    const jump = new THREE.AnimationClip("Jump", 1.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jump);
}

// Function 5: Chuyển Động 5: Vươn Vai Thoải Mái
function stretchRelax(character) {
    const stretch = new THREE.AnimationClip("Stretch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
    ]);
    character.animations.push(stretch);
}

// Function 6: Chuyển Động 6: Quay Người 180 Độ
function turnAround(character) {
    const turn = new THREE.AnimationClip("Turn", 0.6, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.3, 0.6],
            [0, 0, 0, 0, Math.PI, 0, 0, Math.PI, 0]
        )
    ]);
    character.animations.push(turn);
}

// Function 7: Chuyển Động 7: Chạy Tăng Tốc
function runFast(character) {
    const run = new THREE.AnimationClip("Run", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.3, 0.6, 1.2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0, 0, 2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.3, 0.6, 1.2],
            [0, 0, 0, Math.PI / 4, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(run);
}

// Function 8: Chuyển Động 8: Bay Nhẹ Nhàng
function flySmoothly(character) {
    const fly = new THREE.AnimationClip("Fly", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 5, 0, 0, 10, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.5, 3],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(fly);
}

// Export all functions
export {
    walkStraight,
    bowRespectfully,
    punchStrong,
    jumpGracefully,
    stretchRelax,
    turnAround,
    runFast,
    flySmoothly
};
