/**
 * Athletics & Fitness Animations - Part 46
 * Contains track & field, golf, weightlifting, and general athletic animations
 */

function sprintAndThrow(character) {
    const sprintThrowAnimation = new THREE.AnimationClip("SprintAndThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(sprintThrowAnimation);
}

function golfAccurateDrive(character) {
    const accurateDriveAnimation = new THREE.AnimationClip("GolfAccurateDrive", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(accurateDriveAnimation);
}

function explosiveWeightPull(character) {
    const weightPullAnimation = new THREE.AnimationClip("ExplosiveWeightPull", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(weightPullAnimation);
}

function discusThrow(character) {
    const discusThrowAnimation = new THREE.AnimationClip("DiscusThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(discusThrowAnimation);
}

function chestPress(character) {
    const chestPressAnimation = new THREE.AnimationClip("ChestPress", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(chestPressAnimation);
}

// Export all athletics animations
export {
    sprintAndThrow,
    golfAccurateDrive,
    explosiveWeightPull,
    discusThrow,
    chestPress
};
