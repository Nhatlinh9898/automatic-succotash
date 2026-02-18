/**
 * Combat Animations Library - Part 38
 * Contains fighting and combat-related character animations
 */

// High kick with arms arc movement
function highKickWithArmsArc(character) {
    const highKickArmsAnimation = new THREE.AnimationClip("HighKickArmsArc", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(highKickArmsAnimation);
}

// Spin and swing attack
function spinAndSwing(character) {
    const spinSwingAnimation = new THREE.AnimationClip("SpinSwing", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(spinSwingAnimation);
}

// Side kick with turn
function sideKickAndTurn(character) {
    const sideKickTurnAnimation = new THREE.AnimationClip("SideKickTurn", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sideKickTurnAnimation);
}

// Stand and punch backward
function standAndPunchBack(character) {
    const punchBackAnimation = new THREE.AnimationClip("PunchBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(punchBackAnimation);
}

// Round kick with spin
function roundKickWithSpin(character) {
    const roundKickSpinAnimation = new THREE.AnimationClip("RoundKickSpin", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(roundKickSpinAnimation);
}

// Step back and punch
function stepBackAndPunch(character) {
    const stepPunchAnimation = new THREE.AnimationClip("StepBackPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stepPunchAnimation);
}

// Gentle kick with nod
function gentleKickAndNod(character) {
    const kickNodAnimation = new THREE.AnimationClip("GentleKickNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickNodAnimation);
}

// Kick with stability
function kickWithStability(character) {
    const stableKickAnimation = new THREE.AnimationClip("KickStability", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stableKickAnimation);
}

module.exports = {
    highKickWithArmsArc,
    spinAndSwing,
    sideKickAndTurn,
    standAndPunchBack,
    roundKickWithSpin,
    stepBackAndPunch,
    gentleKickAndNod,
    kickWithStability
};
