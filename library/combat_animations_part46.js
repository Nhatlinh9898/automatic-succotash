/**
 * Combat & Martial Arts Animations - Part 46
 * Contains boxing, karate and fighting animations
 */

function boxingCircularPunch(character) {
    const circularPunchAnimation = new THREE.AnimationClip("BoxingCircularPunch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(circularPunchAnimation);
}

function descendingPowerPunch(character) {
    const powerPunchAnimation = new THREE.AnimationClip("DescendingPowerPunch", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(powerPunchAnimation);
}

function boxingUppercut(character) {
    const uppercutAnimation = new THREE.AnimationClip("BoxingUppercut", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(uppercutAnimation);
}

function boxingCombo(character) {
    const comboAnimation = new THREE.AnimationClip("BoxingCombo", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(comboAnimation);
}

function karateRoundhouseKick(character) {
    const roundhouseKickAnimation = new THREE.AnimationClip("KarateRoundhouseKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(roundhouseKickAnimation);
}

// Export all combat animations
export {
    boxingCircularPunch,
    descendingPowerPunch,
    boxingUppercut,
    boxingCombo,
    karateRoundhouseKick
};
