// Combat and Martial Arts Animations Library - Part 43
// Various combat, kicking, punching, and blocking animations

/**
 * Crouch and punch animation
 * @param {THREE.Object3D} character - The character object
 */
function crouchAndPunch(character) {
    const punchAnimation = new THREE.AnimationClip("CrouchPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(punchAnimation);
}

/**
 * Step back and cover face animation
 * @param {THREE.Object3D} character - The character object
 */
function stepBackAndCoverFace(character) {
    const coverFaceAnimation = new THREE.AnimationClip("CoverFace", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(coverFaceAnimation);
}

/**
 * Step back with defensive pose animation
 * @param {THREE.Object3D} character - The character object
 */
function stepBackWithDefensivePose(character) {
    const defensivePoseAnimation = new THREE.AnimationClip("DefensivePose", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(defensivePoseAnimation);
}

/**
 * Side kick with block animation
 * @param {THREE.Object3D} character - The character object
 */
function sideKickWithBlock(character) {
    const kickBlockAnimation = new THREE.AnimationClip("SideKickBlock", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kickBlockAnimation);
}

/**
 * Step back with high block animation
 * @param {THREE.Object3D} character - The character object
 */
function stepBackWithHighBlock(character) {
    const highBlockAnimation = new THREE.AnimationClip("StepBackHighBlock", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(highBlockAnimation);
}

/**
 * High kick with defense animation
 * @param {THREE.Object3D} character - The character object
 */
function highKickWithDefense(character) {
    const defenseKickAnimation = new THREE.AnimationClip("HighKickDefense", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(defenseKickAnimation);
}

/**
 * High kick with low guard animation
 * @param {THREE.Object3D} character - The character object
 */
function highKickWithLowGuard(character) {
    const kickGuardAnimation = new THREE.AnimationClip("HighKickLowGuard", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(kickGuardAnimation);
}

/**
 * Stable side kick animation
 * @param {THREE.Object3D} character - The character object
 */
function stableSideKick(character) {
    const sideKickStableAnimation = new THREE.AnimationClip("StableSideKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(sideKickStableAnimation);
}

export {
    crouchAndPunch,
    stepBackAndCoverFace,
    stepBackWithDefensivePose,
    sideKickWithBlock,
    stepBackWithHighBlock,
    highKickWithDefense,
    highKickWithLowGuard,
    stableSideKick
};
