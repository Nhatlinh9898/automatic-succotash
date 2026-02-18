// Combat Animations Library - Part 36
// Combat and fighting animations for 3D characters

function pushWithEffort(character) {
    const pushEffortAnimation = new THREE.AnimationClip("PushEffort", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushEffortAnimation);
}

function highKickAndBend(character) {
    const kickBendAnimation = new THREE.AnimationClip("HighKickBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickBendAnimation);
}

function bendAndPunch(character) {
    const bendPunchAnimation = new THREE.AnimationClip("BendPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bendPunchAnimation);
}

function duckAndPunchFast(character) {
    const duckPunchAnimation = new THREE.AnimationClip("DuckPunchFast", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(duckPunchAnimation);
}

function kickAndTurnHead(character) {
    const kickTurnAnimation = new THREE.AnimationClip("KickTurnHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickTurnAnimation);
}

function spinAndSmash(character) {
    const spinSmashAnimation = new THREE.AnimationClip("SpinSmash", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinSmashAnimation);
}

function pushAndBend(character) {
    const pushBendAnimation = new THREE.AnimationClip("PushBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushBendAnimation);
}

function standAndPushForward(character) {
    const pushForwardAnimation = new THREE.AnimationClip("PushForwardStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushForwardAnimation);
}
