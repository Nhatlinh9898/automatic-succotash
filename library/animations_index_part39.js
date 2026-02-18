/**
 * Animation Library Index - Part 39
 * Central index for all animation libraries from part 39
 * 
 * This file provides easy access to all animation functions organized by category:
 * - Movement Animations: Running, jumping, turning, sprinting
 * - Combat Animations: Fighting, kicking, blocking
 * - Gesture Animations: Hand movements, waving, pointing
 * - Pose Animations: Standing, kneeling, stretching
 */

// Import all movement animations
import {
    sprintTurnQuickly,
    leapHighAndSwingBack,
    sprintAndChangeDirection,
    leapAndTurnHalfCircle,
    sprintAndRaiseOneHand,
    leapHighWithArmsSwingBack,
    leapAndMultiSpin,
    stepBackAndStop,
    spinAndStop,
    sprintAndStopSuddenly,
    spinAndPointFar,
    stepBackAndClapSoftly,
    retreatWithRaisedArms,
    stepBackAndStretchArms,
    sprintWithRaisedHand,
    leapAndKickForward
} from './movement_animations_part39.js';

// Import all combat animations
import {
    highKickWithBlockingArm,
    leapAndJab,
    frontKickWithHighArm,
    leapAndSpinningKick,
    spinAndSmashDown,
    leapAndDefend,
    balancedSideKick
} from './combat_animations_part39.js';

// Import all gesture animations
import {
    raiseHandsAndSmile,
    standAndTouchChin,
    turnBackAndPatShoulder,
    standAndPointSide,
    turnHeadAndBow,
    standAndNodSoftly,
    turnAndSmile,
    kneelAndSoftClap,
    standAndClapVigorously,
    liftOneArmAndWave
} from './gesture_animations_part39.js';

// Import all pose animations
import {
    kneelAndReachUp,
    standAndStretchArmsBack,
    standAndCrossArms,
    kneelAndPray,
    standAndSaluteHigh,
    leapWithOpenArms,
    standAndReachUpwards,
    leapAndPowerPose,
    standAndGentleStretch,
    stretchOneArmSide,
    leapAndStrikePose,
    standAndTwistSides,
    stretchArmForward
} from './pose_animations_part39.js';

// Export all animations by category
export const MovementAnimations = {
    sprintTurnQuickly,
    leapHighAndSwingBack,
    sprintAndChangeDirection,
    leapAndTurnHalfCircle,
    sprintAndRaiseOneHand,
    leapHighWithArmsSwingBack,
    leapAndMultiSpin,
    stepBackAndStop,
    spinAndStop,
    sprintAndStopSuddenly,
    spinAndPointFar,
    stepBackAndClapSoftly,
    retreatWithRaisedArms,
    stepBackAndStretchArms,
    sprintWithRaisedHand,
    leapAndKickForward
};

export const CombatAnimations = {
    highKickWithBlockingArm,
    leapAndJab,
    frontKickWithHighArm,
    leapAndSpinningKick,
    spinAndSmashDown,
    leapAndDefend,
    balancedSideKick
};

export const GestureAnimations = {
    raiseHandsAndSmile,
    standAndTouchChin,
    turnBackAndPatShoulder,
    standAndPointSide,
    turnHeadAndBow,
    standAndNodSoftly,
    turnAndSmile,
    kneelAndSoftClap,
    standAndClapVigorously,
    liftOneArmAndWave
};

export const PoseAnimations = {
    kneelAndReachUp,
    standAndStretchArmsBack,
    standAndCrossArms,
    kneelAndPray,
    standAndSaluteHigh,
    leapWithOpenArms,
    standAndReachUpwards,
    leapAndPowerPose,
    standAndGentleStretch,
    stretchOneArmSide,
    leapAndStrikePose,
    standAndTwistSides,
    stretchArmForward
};

// Export all animations as a single object for easy access
export const AllAnimations = {
    ...MovementAnimations,
    ...CombatAnimations,
    ...GestureAnimations,
    ...PoseAnimations
};

// Export animation categories for easy browsing
export const AnimationCategories = {
    Movement: Object.keys(MovementAnimations),
    Combat: Object.keys(CombatAnimations),
    Gesture: Object.keys(GestureAnimations),
    Pose: Object.keys(PoseAnimations)
};

// Utility function to apply all animations to a character
export function applyAllPart39Animations(character) {
    // Apply movement animations
    Object.values(MovementAnimations).forEach(animation => {
        animation(character);
    });
    
    // Apply combat animations
    Object.values(CombatAnimations).forEach(animation => {
        animation(character);
    });
    
    // Apply gesture animations
    Object.values(GestureAnimations).forEach(animation => {
        animation(character);
    });
    
    // Apply pose animations
    Object.values(PoseAnimations).forEach(animation => {
        animation(character);
    });
    
    console.log(`Applied ${Object.keys(AllAnimations).length} animations to character`);
}

// Utility function to apply animations by category
export function applyAnimationCategory(character, category) {
    const animations = {
        Movement: MovementAnimations,
        Combat: CombatAnimations,
        Gesture: GestureAnimations,
        Pose: PoseAnimations
    };
    
    if (animations[category]) {
        Object.values(animations[category]).forEach(animation => {
            animation(character);
        });
        console.log(`Applied ${Object.keys(animations[category]).length} ${category} animations to character`);
    } else {
        console.warn(`Animation category '${category}' not found. Available categories: ${Object.keys(animations).join(', ')}`);
    }
}
