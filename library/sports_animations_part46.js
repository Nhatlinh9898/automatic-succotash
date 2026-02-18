/**
 * Sports Animations - Part 46
 * Contains volleyball, soccer, basketball, rugby, hockey animations
 */

function volleyballDiveSave(character) {
    const diveSaveAnimation = new THREE.AnimationClip("VolleyballDiveSave", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(diveSaveAnimation);
}

function soccerHighCross(character) {
    const highCrossAnimation = new THREE.AnimationClip("SoccerHighCross", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(highCrossAnimation);
}

function basketballDunk(character) {
    const dunkAnimation = new THREE.AnimationClip("BasketballDunk", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(dunkAnimation);
}

function soccerLowSave(character) {
    const lowSaveAnimation = new THREE.AnimationClip("SoccerLowSave", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(lowSaveAnimation);
}

function soccerTackle(character) {
    const tackleAnimation = new THREE.AnimationClip("SoccerTackle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(tackleAnimation);
}

function goalkeeperDive(character) {
    const diveAnimation = new THREE.AnimationClip("GoalkeeperDive", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(diveAnimation);
}

function volleyballPowerSpike(character) {
    const powerSpikeAnimation = new THREE.AnimationClip("VolleyballPowerSpike", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(powerSpikeAnimation);
}

function soccerSlideTackle(character) {
    const slideTackleAnimation = new THREE.AnimationClip("SoccerSlideTackle", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -2, 0, 0, -3, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(slideTackleAnimation);
}

function rugbyPass(character) {
    const rugbyPassAnimation = new THREE.AnimationClip("RugbyPass", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(rugbyPassAnimation);
}

function hockeyRunWithStick(character) {
    const hockeyRunAnimation = new THREE.AnimationClip("HockeyRunWithStick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(hockeyRunAnimation);
}

function basketballPivot(character) {
    const pivotAnimation = new THREE.AnimationClip("BasketballPivot", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pivotAnimation);
}

function rugbyCharge(character) {
    const rugbyChargeAnimation = new THREE.AnimationClip("RugbyCharge", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(rugbyChargeAnimation);
}

// Export all sports animations
export {
    volleyballDiveSave,
    soccerHighCross,
    basketballDunk,
    soccerLowSave,
    soccerTackle,
    goalkeeperDive,
    volleyballPowerSpike,
    soccerSlideTackle,
    rugbyPass,
    hockeyRunWithStick,
    basketballPivot,
    rugbyCharge
};
