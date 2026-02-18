// Components Index - Part 40
// Organizes all animation libraries from part 40

import {
    stepBackAndStretchBack,
    leapAndSpinFullCircle,
    sprintAndWaveHands,
    sprintAndQuarterTurn,
    leapAndExtendHands,
    jumpAndSpinHalfCircle,
    sprintAndStopWide,
    sprintWithWideSwing,
    sprintAndSideLeap,
    stepBackAndShield,
    spinAndCounterPunch
} from './movement_animations_part40.js';

import {
    backKickWithDefensePose,
    leapAndSwingHorizontal,
    spinAndGroundPunch,
    highKickWithArmArc,
    turnWithCombatStance,
    highKickWithTension,
    balancedSideKick,
    highKickAndShrug
} from './combat_animations_part40.js';

import {
    shieldEyesAndLook,
    standCrossArmsAndObserve,
    standAndPointFinger,
    shakeHeadAndSmile,
    raiseHandsAboveHead,
    standAndRaiseHandsWithSmile,
    waveFromHead,
    standAndWaveHand,
    inviteForward,
    standAndCrossLegs
} from './gesture_animations_part40.js';

import {
    kneelAndBraceDown,
    stepBackAndDefend,
    standWithHandsBehind,
    kneelWithHandOnHeart,
    stepBackAndGlance,
    swipeArmSide,
    standAndLeanSide,
    kneelOneLegAndBow
} from './defensive_animations_part40.js';

// Movement animations
const movementAnimations = {
    stepBackAndStretchBack,
    leapAndSpinFullCircle,
    sprintAndWaveHands,
    sprintAndQuarterTurn,
    leapAndExtendHands,
    jumpAndSpinHalfCircle,
    sprintAndStopWide,
    sprintWithWideSwing,
    sprintAndSideLeap,
    stepBackAndShield,
    spinAndCounterPunch
};

// Combat animations
const combatAnimations = {
    backKickWithDefensePose,
    leapAndSwingHorizontal,
    spinAndGroundPunch,
    highKickWithArmArc,
    turnWithCombatStance,
    highKickWithTension,
    balancedSideKick,
    highKickAndShrug
};

// Gesture animations
const gestureAnimations = {
    shieldEyesAndLook,
    standCrossArmsAndObserve,
    standAndPointFinger,
    shakeHeadAndSmile,
    raiseHandsAboveHead,
    standAndRaiseHandsWithSmile,
    waveFromHead,
    standAndWaveHand,
    inviteForward,
    standAndCrossLegs
};

// Defensive animations
const defensiveAnimations = {
    kneelAndBraceDown,
    stepBackAndDefend,
    standWithHandsBehind,
    kneelWithHandOnHeart,
    stepBackAndGlance,
    swipeArmSide,
    standAndLeanSide,
    kneelOneLegAndBow
};

// All animations combined
const allAnimations = {
    ...movementAnimations,
    ...combatAnimations,
    ...gestureAnimations,
    ...defensiveAnimations
};

// Function to apply all animations to a character
function applyAllPart40Animations(character) {
    Object.values(allAnimations).forEach(animation => {
        animation(character);
    });
}

// Category-specific application functions
function applyMovementAnimations(character) {
    Object.values(movementAnimations).forEach(animation => {
        animation(character);
    });
}

function applyCombatAnimations(character) {
    Object.values(combatAnimations).forEach(animation => {
        animation(character);
    });
}

function applyGestureAnimations(character) {
    Object.values(gestureAnimations).forEach(animation => {
        animation(character);
    });
}

function applyDefensiveAnimations(character) {
    Object.values(defensiveAnimations).forEach(animation => {
        animation(character);
    });
}

export {
    // Individual animation categories
    movementAnimations,
    combatAnimations,
    gestureAnimations,
    defensiveAnimations,
    
    // Combined animations
    allAnimations,
    
    // Application functions
    applyAllPart40Animations,
    applyMovementAnimations,
    applyCombatAnimations,
    applyGestureAnimations,
    applyDefensiveAnimations,
    
    // Individual exports for direct access
    stepBackAndStretchBack,
    leapAndSpinFullCircle,
    sprintAndWaveHands,
    sprintAndQuarterTurn,
    leapAndExtendHands,
    jumpAndSpinHalfCircle,
    sprintAndStopWide,
    sprintWithWideSwing,
    sprintAndSideLeap,
    stepBackAndShield,
    spinAndCounterPunch,
    backKickWithDefensePose,
    leapAndSwingHorizontal,
    spinAndGroundPunch,
    highKickWithArmArc,
    turnWithCombatStance,
    highKickWithTension,
    balancedSideKick,
    highKickAndShrug,
    shieldEyesAndLook,
    standCrossArmsAndObserve,
    standAndPointFinger,
    shakeHeadAndSmile,
    raiseHandsAboveHead,
    standAndRaiseHandsWithSmile,
    waveFromHead,
    standAndWaveHand,
    inviteForward,
    standAndCrossLegs,
    kneelAndBraceDown,
    stepBackAndDefend,
    standWithHandsBehind,
    kneelWithHandOnHeart,
    stepBackAndGlance,
    swipeArmSide,
    standAndLeanSide,
    kneelOneLegAndBow
};
