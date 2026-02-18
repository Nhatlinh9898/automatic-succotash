// Animations Library Index - Part 43
// Master index file for all animation libraries from part 43

// Import all animation libraries
import {
    standAndRollShoulders,
    standWithHorizontalArms,
    standAndRaiseOneSide,
    pointToGround,
    standWithHipSupport,
    standAndSmileRaiseHands,
    standAndHoldHeart,
    relaxedStandPose,
    standAndReachOut,
    standAndPointUpward,
    standRelaxedOneHandOnHip,
    standAndStretchSideways,
    standWithInterlockedHands,
    standWithHandsBehind,
    standWithShieldingHand,
    standAndGestureSide,
    standWithConfidence,
    pointAtFrontFoot,
    standAndPointToSide
} from './standing_poses_part43.js';

import {
    leapWithArmsWide,
    leapAndThrowArmsUp,
    leapWithSideArms,
    leapForwardGreeting,
    leapAndPunchForward,
    leapWithForwardReach,
    leapWithSymmetricArms,
    leapWithStraightArms,
    leapAndPointForward,
    leapAndSwingArmsWide
} from './jumping_animations_part43.js';

import {
    crouchAndPunch,
    stepBackAndCoverFace,
    stepBackWithDefensivePose,
    sideKickWithBlock,
    stepBackWithHighBlock,
    highKickWithDefense,
    highKickWithLowGuard,
    stableSideKick
} from './combat_animations_part43.js';

import {
    sprintWithArcSwing,
    sprintWithUpwardArms,
    sprintWithOpposingArmSwings,
    sprintWithOneRaisedArm
} from './movement_animations_part43.js';

import {
    bendAndSwingForward,
    bendAndGlance,
    bowWithGracefulArm,
    gracefulReachUp,
    bowWithGratitude,
    kneelAndSoftClap
} from './gesture_animations_part43.js';

// Standing Poses Functions
export const standingPoses = {
    standAndRollShoulders,
    standWithHorizontalArms,
    standAndRaiseOneSide,
    pointToGround,
    standWithHipSupport,
    standAndSmileRaiseHands,
    standAndHoldHeart,
    relaxedStandPose,
    standAndReachOut,
    standAndPointUpward,
    standRelaxedOneHandOnHip,
    standAndStretchSideways,
    standWithInterlockedHands,
    standWithHandsBehind,
    standWithShieldingHand,
    standAndGestureSide,
    standWithConfidence,
    pointAtFrontFoot,
    standAndPointToSide
};

// Jumping Animations Functions
export const jumpingAnimations = {
    leapWithArmsWide,
    leapAndThrowArmsUp,
    leapWithSideArms,
    leapForwardGreeting,
    leapAndPunchForward,
    leapWithForwardReach,
    leapWithSymmetricArms,
    leapWithStraightArms,
    leapAndPointForward,
    leapAndSwingArmsWide
};

// Combat Animations Functions
export const combatAnimations = {
    crouchAndPunch,
    stepBackAndCoverFace,
    stepBackWithDefensivePose,
    sideKickWithBlock,
    stepBackWithHighBlock,
    highKickWithDefense,
    highKickWithLowGuard,
    stableSideKick
};

// Movement Animations Functions
export const movementAnimations = {
    sprintWithArcSwing,
    sprintWithUpwardArms,
    sprintWithOpposingArmSwings,
    sprintWithOneRaisedArm
};

// Gesture Animations Functions
export const gestureAnimations = {
    bendAndSwingForward,
    bendAndGlance,
    bowWithGracefulArm,
    gracefulReachUp,
    bowWithGratitude,
    kneelAndSoftClap
};

// Master export object containing all animations
export const allAnimationsPart43 = {
    standing: standingPoses,
    jumping: jumpingAnimations,
    combat: combatAnimations,
    movement: movementAnimations,
    gestures: gestureAnimations
};

// Utility function to apply all animations to a character
export function applyAllAnimationsPart43(character) {
    // Apply standing poses
    Object.values(standingPoses).forEach(animation => {
        animation(character);
    });
    
    // Apply jumping animations
    Object.values(jumpingAnimations).forEach(animation => {
        animation(character);
    });
    
    // Apply combat animations
    Object.values(combatAnimations).forEach(animation => {
        animation(character);
    });
    
    // Apply movement animations
    Object.values(movementAnimations).forEach(animation => {
        animation(character);
    });
    
    // Apply gesture animations
    Object.values(gestureAnimations).forEach(animation => {
        animation(character);
    });
    
    console.log(`Applied ${Object.keys(allAnimationsPart43).reduce((acc, category) => 
        acc + Object.keys(allAnimationsPart43[category]).length, 0)} animations from Part 43`);
}

// Category-specific application functions
export function applyStandingPoses(character) {
    Object.values(standingPoses).forEach(animation => animation(character));
}

export function applyJumpingAnimations(character) {
    Object.values(jumpingAnimations).forEach(animation => animation(character));
}

export function applyCombatAnimations(character) {
    Object.values(combatAnimations).forEach(animation => animation(character));
}

export function applyMovementAnimations(character) {
    Object.values(movementAnimations).forEach(animation => animation(character));
}

export function applyGestureAnimations(character) {
    Object.values(gestureAnimations).forEach(animation => animation(character));
}
