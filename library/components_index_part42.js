// Library Index for Part 42 Animations
// This file imports and organizes all animation libraries from part 42

import {
    standHandsOnHips,
    stretchArmsBackward,
    crossArmsAndStand,
    standWithOpenHands,
    standWithCrossedLegs,
    standNaturally,
    standWithWideOpenArms,
    standAndLiftArms,
    standWithOneHandOnHip,
    pointToSide,
    standAndFoldArmsNaturally,
    standWithSideArmSupport,
    standAndPointToSky,
    standAndBlockHigh,
    standWithCrossedArms,
    standConfidently,
    restHandsOnHead
} from './standing_poses_part42.js';

import {
    leapAndRaiseHands,
    sprintWithLightSpin,
    leapForwardWithRaisedArms,
    leapWithOppositeSwings,
    stepBackAndHoldChest,
    leapAndCrossArms,
    spinAndShieldFace,
    leapAndCelebrate,
    sprintWithDynamicArms,
    leapWithVictoryPose,
    sprintWithFastArms,
    leapWithArmsSpread,
    leapAndSwingSideways,
    sprintWithRaisedArms,
    leapWithHorizontalArms
} from './movement_animations_part42.js';

import {
    kneelAndSwingForward,
    crouchAndGuard,
    kickWithSupportArm,
    kneelAndReachForward,
    roundKickWithHighArm,
    crouchAndSwingDown,
    bendAndSwingForward
} from './combat_animations_part42.js';

import {
    shrugAndRaiseArm,
    pointAndBow,
    shrugAndLookSide,
    kneelAndFoldHands,
    offerHandGesture,
    kneelAndRaiseToSky,
    bendAndLiftForward,
    kneelWithExtendedHand
} from './expressive_animations_part42.js';

// Standing Poses Category
export const standingPosesPart42 = {
    standHandsOnHips,
    stretchArmsBackward,
    crossArmsAndStand,
    standWithOpenHands,
    standWithCrossedLegs,
    standNaturally,
    standWithWideOpenArms,
    standAndLiftArms,
    standWithOneHandOnHip,
    pointToSide,
    standAndFoldArmsNaturally,
    standWithSideArmSupport,
    standAndPointToSky,
    standAndBlockHigh,
    standWithCrossedArms,
    standConfidently,
    restHandsOnHead
};

// Movement Animations Category
export const movementAnimationsPart42 = {
    leapAndRaiseHands,
    sprintWithLightSpin,
    leapForwardWithRaisedArms,
    leapWithOppositeSwings,
    stepBackAndHoldChest,
    leapAndCrossArms,
    spinAndShieldFace,
    leapAndCelebrate,
    sprintWithDynamicArms,
    leapWithVictoryPose,
    sprintWithFastArms,
    leapWithArmsSpread,
    leapAndSwingSideways,
    sprintWithRaisedArms,
    leapWithHorizontalArms
};

// Combat/Action Animations Category
export const combatAnimationsPart42 = {
    kneelAndSwingForward,
    crouchAndGuard,
    kickWithSupportArm,
    kneelAndReachForward,
    roundKickWithHighArm,
    crouchAndSwingDown,
    bendAndSwingForward
};

// Expressive/Emotional Animations Category
export const expressiveAnimationsPart42 = {
    shrugAndRaiseArm,
    pointAndBow,
    shrugAndLookSide,
    kneelAndFoldHands,
    offerHandGesture,
    kneelAndRaiseToSky,
    bendAndLiftForward,
    kneelWithExtendedHand
};

// Complete Library Collection
export const animationLibraryPart42 = {
    standingPoses: standingPosesPart42,
    movements: movementAnimationsPart42,
    combat: combatAnimationsPart42,
    expressive: expressiveAnimationsPart42
};

// Utility function to apply all animations from part 42 to a character
export function applyAllPart42Animations(character) {
    // Apply all standing poses
    Object.values(standingPosesPart42).forEach(animation => {
        animation(character);
    });
    
    // Apply all movement animations
    Object.values(movementAnimationsPart42).forEach(animation => {
        animation(character);
    });
    
    // Apply all combat animations
    Object.values(combatAnimationsPart42).forEach(animation => {
        animation(character);
    });
    
    // Apply all expressive animations
    Object.values(expressiveAnimationsPart42).forEach(animation => {
        animation(character);
    });
}

// Utility function to apply animations by category
export function applyAnimationCategory(character, category) {
    switch(category) {
        case 'standing':
            Object.values(standingPosesPart42).forEach(animation => {
                animation(character);
            });
            break;
        case 'movement':
            Object.values(movementAnimationsPart42).forEach(animation => {
                animation(character);
            });
            break;
        case 'combat':
            Object.values(combatAnimationsPart42).forEach(animation => {
                animation(character);
            });
            break;
        case 'expressive':
            Object.values(expressiveAnimationsPart42).forEach(animation => {
                animation(character);
            });
            break;
        default:
            console.warn(`Unknown category: ${category}`);
    }
}

console.log('Part 42 Animation Library loaded successfully!');
console.log(`Available categories: standing (${Object.keys(standingPosesPart42).length} animations), movement (${Object.keys(movementAnimationsPart42).length} animations), combat (${Object.keys(combatAnimationsPart42).length} animations), expressive (${Object.keys(expressiveAnimationsPart42).length} animations)`);
