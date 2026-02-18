// Gesture Animations Library - Part 36
// Hand and body gesture animations for 3D characters

function turnAndSmile(character) {
    const turnSmileAnimation = new THREE.AnimationClip("TurnSmile", 1.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnSmileAnimation);
}

function liftAndPat(character) {
    const liftPatAnimation = new THREE.AnimationClip("LiftPat", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftPatAnimation);
}

function nodAndClap(character) {
    const nodClapAnimation = new THREE.AnimationClip("NodClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodClapAnimation);
}

function standWithOpenArms(character) {
    const openArmsAnimation = new THREE.AnimationClip("OpenArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}

function standAndClapHands(character) {
    const clapAnimation = new THREE.AnimationClip("StandClapHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(clapAnimation);
}

function extendArmAndNod(character) {
    const extendNodAnimation = new THREE.AnimationClip("ExtendArmNod", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(extendNodAnimation);
}

function standWithCrossedArms(character) {
    const crossedArmsAnimation = new THREE.AnimationClip("CrossedArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossedArmsAnimation);
}

function bowWithHandOnChest(character) {
    const bowChestAnimation = new THREE.AnimationClip("BowHandChest", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bowChestAnimation);
}

function standWithHandsOnHips(character) {
    const handsOnHipsAnimation = new THREE.AnimationClip("HandsOnHips", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsOnHipsAnimation);
}

function pointForwardWithConfidence(character) {
    const pointAnimation = new THREE.AnimationClip("PointForwardConfident", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointAnimation);
}

function shakeHeadWarning(character) {
    const shakeHeadAnimation = new THREE.AnimationClip("ShakeHeadWarning", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeHeadAnimation);
}
