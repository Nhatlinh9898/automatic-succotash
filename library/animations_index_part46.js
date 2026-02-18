/**
 * Animation Library Index - Part 46
 * Organizes all animation categories from part_46_corrected.js
 */

// Import all animation libraries
import {
    boxingCircularPunch,
    descendingPowerPunch,
    boxingUppercut,
    boxingCombo,
    karateRoundhouseKick
} from './combat_animations_part46.js';

import {
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
} from './sports_animations_part46.js';

import {
    sprintAndThrow,
    golfAccurateDrive,
    explosiveWeightPull,
    discusThrow,
    chestPress
} from './athletics_animations_part46.js';

import {
    leapAndWaveArms,
    gracefulBowTwist,
    spinWithSideSpread,
    stepWithGentleReach,
    doubleSpinJump,
    jumpWithCircularArms,
    liftLegGracefully,
    spinAndRaiseHand,
    standAndSwingLeg,
    pullArmAndLeap,
    leapAndReachForward,
    spinAndPullForward,
    sShapePose,
    leapAndSwingArmsBack,
    spinAndLiftLeg,
    stepAndCircleArms,
    bendAndPullArmsBack,
    standAndSpreadArms,
    spinAndReachForward,
    standAndStretchUp,
    leapAndLiftArmsHigh,
    standWithGracefulPull
} from './dance_animations_part46.js';

/**
 * Animation Library Registry
 * Provides organized access to all animations by category
 */
const AnimationLibrary = {
    // Combat & Martial Arts Animations
    combat: {
        boxingCircularPunch,
        descendingPowerPunch,
        boxingUppercut,
        boxingCombo,
        karateRoundhouseKick
    },
    
    // Sports Animations
    sports: {
        volleyball: {
            volleyballDiveSave,
            volleyballPowerSpike
        },
        soccer: {
            soccerHighCross,
            soccerLowSave,
            soccerTackle,
            goalkeeperDive,
            soccerSlideTackle
        },
        basketball: {
            basketballDunk,
            basketballPivot
        },
        rugby: {
            rugbyPass,
            rugbyCharge
        },
        hockey: {
            hockeyRunWithStick
        }
    },
    
    // Athletics & Fitness Animations
    athletics: {
        sprintAndThrow,
        golfAccurateDrive,
        explosiveWeightPull,
        discusThrow,
        chestPress
    },
    
    // Dance & Artistic Animations
    dance: {
        leapAndWaveArms,
        gracefulBowTwist,
        spinWithSideSpread,
        stepWithGentleReach,
        doubleSpinJump,
        jumpWithCircularArms,
        liftLegGracefully,
        spinAndRaiseHand,
        standAndSwingLeg,
        pullArmAndLeap,
        leapAndReachForward,
        spinAndPullForward,
        sShapePose,
        leapAndSwingArmsBack,
        spinAndLiftLeg,
        stepAndCircleArms,
        bendAndPullArmsBack,
        standAndSpreadArms,
        spinAndReachForward,
        standAndStretchUp,
        leapAndLiftArmsHigh,
        standWithGracefulPull
    }
};

/**
 * Utility function to apply all animations from a category to a character
 * @param {Object} character - The character object to apply animations to
 * @param {string} category - The category of animations to apply
 * @param {string} subcategory - Optional subcategory for nested animations
 */
function applyAnimationCategory(character, category, subcategory = null) {
    if (!AnimationLibrary[category]) {
        console.error(`Animation category '${category}' not found`);
        return;
    }
    
    const animations = subcategory 
        ? AnimationLibrary[category][subcategory] 
        : AnimationLibrary[category];
    
    if (!animations) {
        console.error(`Animation subcategory '${subcategory}' not found in '${category}'`);
        return;
    }
    
    Object.values(animations).forEach(animationFunction => {
        if (typeof animationFunction === 'function') {
            animationFunction(character);
        }
    });
}

/**
 * Utility function to apply a specific animation
 * @param {Object} character - The character object to apply animation to
 * @param {string} category - The animation category
 * @param {string} animationName - The name of the animation
 * @param {string} subcategory - Optional subcategory
 */
function applySpecificAnimation(character, category, animationName, subcategory = null) {
    const animations = subcategory 
        ? AnimationLibrary[category]?.[subcategory] 
        : AnimationLibrary[category];
    
    if (!animations || !animations[animationName]) {
        console.error(`Animation '${animationName}' not found in ${subcategory ? `${category}.${subcategory}` : category}`);
        return;
    }
    
    animations[animationName](character);
}

/**
 * Get all available animation categories
 * @returns {Array} Array of category names
 */
function getAnimationCategories() {
    return Object.keys(AnimationLibrary);
}

/**
 * Get all animations in a category
 * @param {string} category - The category name
 * @param {string} subcategory - Optional subcategory
 * @returns {Array} Array of animation names
 */
function getAnimationsInCategory(category, subcategory = null) {
    const animations = subcategory 
        ? AnimationLibrary[category]?.[subcategory] 
        : AnimationLibrary[category];
    
    return animations ? Object.keys(animations) : [];
}

// Export the library and utilities
export {
    AnimationLibrary,
    applyAnimationCategory,
    applySpecificAnimation,
    getAnimationCategories,
    getAnimationsInCategory
};

// Also export all individual animations for direct access
export * from './combat_animations_part46.js';
export * from './sports_animations_part46.js';
export * from './athletics_animations_part46.js';
export * from './dance_animations_part46.js';
