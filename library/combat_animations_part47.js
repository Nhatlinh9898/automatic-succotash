// Combat Animations Library - Part 47
// Contains combat-style movements and martial arts techniques

// Movement 659: Leap And Straight Kick
function leapAndStraightKick(character) {
    const straightKickAnimation = new THREE.AnimationClip("LeapStraightKick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(straightKickAnimation);
}

// Movement 667: Leap And Wide Spread Arms
function leapAndWideSpreadArms(character) {
    const wideSpreadArmsAnimation = new THREE.AnimationClip("LeapWideSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(wideSpreadArmsAnimation);
}

export {
    leapAndStraightKick,
    leapAndWideSpreadArms
};
