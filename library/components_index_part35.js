// Components Index - Part 35
// Main index file for all animation libraries from part 35

// Import all animation libraries
import {
    runLeaningForward,
    longJumpForward,
    deepBreath,
    bowAndRotateShoulders,
    jumpAndLandStrongly,
    standConfidently,
    bendAndPick,
    roundKick,
    combatStance,
    jumpAndSpinBack,
    crouchWithFocus,
    standCalmly,
    arcThrow
} from './movement_animations_part35.js';

import {
    twistBodyAndShakeHand,
    stepSideAndStop,
    spinMultipleJump,
    slowTurnBack,
    pointForward,
    bendFocus,
    slapSurface,
    jumpLandPush,
    turnCasually,
    liftAndRaiseObject,
    runAndHalt,
    balanceOneLegConfidently,
    turnAndBow,
    stepBackAndShrug,
    doubleFistPunch,
    tossObjectUp,
    sideKickCombo,
    raiseArmsAboveHead,
    tiltHeadCuriously,
    jumpAndSpiralPunch
} from './combat_animations_part35.js';

import {
    spinAndGroundStrike,
    retreatAndBlock,
    jumpWithGuard,
    standAndRaiseHand,
    bendAndTouchGround,
    spinAndToss,
    dashWithSwingArms,
    standAndShakeHead,
    jumpAndKick,
    sprintAndTurnHead,
    standAndNod,
    hopWithSwingingArms,
    spinAndExtendArm
} from './advanced_animations_part35.js';

// Movement animations collection
const movementAnimations = {
    runLeaningForward,
    longJumpForward,
    deepBreath,
    bowAndRotateShoulders,
    jumpAndLandStrongly,
    standConfidently,
    bendAndPick,
    roundKick,
    combatStance,
    jumpAndSpinBack,
    crouchWithFocus,
    standCalmly,
    arcThrow
};

// Combat animations collection
const combatAnimations = {
    twistBodyAndShakeHand,
    stepSideAndStop,
    spinMultipleJump,
    slowTurnBack,
    pointForward,
    bendFocus,
    slapSurface,
    jumpLandPush,
    turnCasually,
    liftAndRaiseObject,
    runAndHalt,
    balanceOneLegConfidently,
    turnAndBow,
    stepBackAndShrug,
    doubleFistPunch,
    tossObjectUp,
    sideKickCombo,
    raiseArmsAboveHead,
    tiltHeadCuriously,
    jumpAndSpiralPunch
};

// Advanced animations collection
const advancedAnimations = {
    spinAndGroundStrike,
    retreatAndBlock,
    jumpWithGuard,
    standAndRaiseHand,
    bendAndTouchGround,
    spinAndToss,
    dashWithSwingArms,
    standAndShakeHead,
    jumpAndKick,
    sprintAndTurnHead,
    standAndNod,
    hopWithSwingingArms,
    spinAndExtendArm
};

// All animations combined
const allAnimations = {
    ...movementAnimations,
    ...combatAnimations,
    ...advancedAnimations
};

// Animation categories
const animationCategories = {
    movement: movementAnimations,
    combat: combatAnimations,
    advanced: advancedAnimations
};

// Function to apply specific animation
function applyAnimation(character, animationName, category = null) {
    if (category && animationCategories[category]) {
        const animation = animationCategories[category][animationName];
        if (animation) {
            animation(character);
            return true;
        }
    } else {
        const animation = allAnimations[animationName];
        if (animation) {
            animation(character);
            return true;
        }
    }
    console.warn(`Animation "${animationName}" not found`);
    return false;
}

// Function to apply all animations from a category
function applyCategoryAnimations(character, category) {
    if (animationCategories[category]) {
        Object.values(animationCategories[category]).forEach(animation => {
            animation(character);
        });
        return true;
    }
    console.warn(`Category "${category}" not found`);
    return false;
}

// Function to apply all animations
function applyAllAnimations(character) {
    Object.values(allAnimations).forEach(animation => {
        animation(character);
    });
}

// Get animation list by category
function getAnimationsByCategory(category) {
    return animationCategories[category] ? Object.keys(animationCategories[category]) : [];
}

// Get all animation names
function getAllAnimationNames() {
    return Object.keys(allAnimations);
}

// Export everything
export {
    // Individual animation collections
    movementAnimations,
    combatAnimations,
    advancedAnimations,
    
    // Combined collections
    allAnimations,
    animationCategories,
    
    // Utility functions
    applyAnimation,
    applyCategoryAnimations,
    applyAllAnimations,
    getAnimationsByCategory,
    getAllAnimationNames
};

// Default export
export default {
    movementAnimations,
    combatAnimations,
    advancedAnimations,
    allAnimations,
    animationCategories,
    applyAnimation,
    applyCategoryAnimations,
    applyAllAnimations,
    getAnimationsByCategory,
    getAllAnimationNames
};
