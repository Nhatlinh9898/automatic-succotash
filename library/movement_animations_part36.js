// Movement Animations Library - Part 36
// Basic and advanced movement animations for 3D characters

function stepForwardAndHop(character) {
    const stepHopAnimation = new THREE.AnimationClip("StepHop", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 1, 0, 0, 2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(stepHopAnimation);
}

function leapWithOpenPose(character) {
    const leapOpenAnimation = new THREE.AnimationClip("LeapOpenPose", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(leapOpenAnimation);
}

function sprintAndRaiseArms(character) {
    const sprintArmsAnimation = new THREE.AnimationClip("SprintRaiseArms", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sprintArmsAnimation);
}

function softSprint(character) {
    const softSprintAnimation = new THREE.AnimationClip("SoftSprint", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(softSprintAnimation);
}

function sprintAndHighJump(character) {
    const sprintJumpAnimation = new THREE.AnimationClip("SprintHighJump", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 2]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sprintJumpAnimation);
}

function quickStepAndRaiseArm(character) {
    const quickStepAnimation = new THREE.AnimationClip("QuickStepRaiseArm", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 1.5, 0, 0, 2.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(quickStepAnimation);
}

function stepBackAndStandFirm(character) {
    const stepStandAnimation = new THREE.AnimationClip("StepBackStandFirm", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stepStandAnimation);
}

function stepBackAndBow(character) {
    const stepBackBowAnimation = new THREE.AnimationClip("StepBackBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stepBackBowAnimation);
}

function retreatAndPull(character) {
    const retreatPullAnimation = new THREE.AnimationClip("RetreatPull", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(retreatPullAnimation);
}

function retreatAndStrikeBack(character) {
    const strikeBackAnimation = new THREE.AnimationClip("RetreatStrikeBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(strikeBackAnimation);
}
