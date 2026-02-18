// Advanced Animations Library - Part 36
// Complex and advanced animations for 3D characters

function spinAndExtend(character) {
    const spinExtendAnimation = new THREE.AnimationClip("SpinExtend", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinExtendAnimation);
}

function jumpAndWaveHands(character) {
    const jumpWaveAnimation = new THREE.AnimationClip("JumpWaveHands", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpWaveAnimation);
}

function jumpSpinMultiple(character) {
    const spinJumpAnimation = new THREE.AnimationClip("JumpSpinMultiple", 2.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.4, 2.8],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.4, 2.8],
            [0, 0, 0, 0, 2 * Math.PI, 0, 0, 4 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinJumpAnimation);
}

function highJumpAndSpin(character) {
    const highJumpSpinAnimation = new THREE.AnimationClip("HighJumpSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, Math.PI, 0, 0, Math.PI, 0]
        )
    ]);
    character.animations.push(highJumpSpinAnimation);
}

function jumpAndSpinFullCircle(character) {
    const spinCircleAnimation = new THREE.AnimationClip("JumpSpinFullCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinCircleAnimation);
}

function turnHeadAndLean(character) {
    const turnLeanAnimation = new THREE.AnimationClip("TurnHeadLean", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(turnLeanAnimation);
}

function standAndTwistBack(character) {
    const twistBackAnimation = new THREE.AnimationClip("StandTwistBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(twistBackAnimation);
}

function rotateShouldersAndStretch(character) {
    const rotateStretchAnimation = new THREE.AnimationClip("RotateStretch", 2, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(rotateStretchAnimation);
}

function liftObjectAndTurn(character) {
    const liftTurnAnimation = new THREE.AnimationClip("LiftTurn", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(liftTurnAnimation);
}

function shrugAndTurn(character) {
    const shrugTurnAnimation = new THREE.AnimationClip("ShrugTurn", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shrugTurnAnimation);
}

function pushArmAndSpinBack(character) {
    const pushSpinAnimation = new THREE.AnimationClip("PushSpinBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(pushSpinAnimation);
}

function standRaiseBothArms(character) {
    const raiseArmsAnimation = new THREE.AnimationClip("RaiseBothArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmsAnimation);
}

function standWithWideArms(character) {
    const wideArmsAnimation = new THREE.AnimationClip("WideArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(wideArmsAnimation);
}

function raiseOneArmHigh(character) {
    const raiseArmAnimation = new THREE.AnimationClip("RaiseOneArmHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}

function bendHeadAndRestHands(character) {
    const bendRestAnimation = new THREE.AnimationClip("BendHeadRestHands", 1.8, [
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
    character.animations.push(bendRestAnimation);
}

function standAndRelax(character) {
    const relaxAnimation = new THREE.AnimationClip("StandRelax", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(relaxAnimation);
}
