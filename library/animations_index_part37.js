/**
 * Animations Library Index - Part 37
 * Central index file for all animation libraries from part 37
 * Provides easy access to all character animation functions
 */

// Import all animation libraries
const armUpperBodyAnimations = require('./arm_upper_body_animations_part37.js');
const movementLocomotionAnimations = require('./movement_locomotion_animations_part37.js');
const combatActionAnimations = require('./combat_action_animations_part37.js');

// Combine all animations into a single object
const allAnimations = {
    // Arm and Upper Body Animations
    ...armUpperBodyAnimations,
    
    // Movement and Locomotion Animations  
    ...movementLocomotionAnimations,
    
    // Combat and Action Animations
    ...combatActionAnimations
};

// Animation categories for easy access
const animationCategories = {
    armUpperBody: [
        'liftBothArmsHigh',
        'turnAndTouchBack', 
        'crouchAndGrabObject',
        'leapAndPointUp',
        'spinArmAndPunch',
        'standAndNodInApproval',
        'standAndPatShoulder',
        'tossAndCatch',
        'standWithLeadershipPose',
        'bendAndRelaxArms',
        'standAndRotateHands',
        'leapAndStretchUp',
        'stepBackAndHoldChest',
        'standAndStretchForward',
        'shakeHeadAndStandSolid',
        'standWithHandsBehindBack',
        'shrugAndBend',
        'raiseArmAndTurnHead',
        'standAndExtendHandsForward',
        'pointToSky',
        'openArmsInArc',
        'standAndSalute',
        'spinAndNod',
        'bendAndPull',
        'stepForwardAndPoint'
    ],
    
    movementLocomotion: [
        'sprintAndBrake',
        'runAndClap',
        'slowWalkAndNod',
        'sideKickAndSpin',
        'sprintWithWavingHands',
        'sprintWithCasualShrug',
        'jumpWithSwingLeg',
        'leapWithSpinningArms',
        'standAndLookAround',
        'crouchAndKick',
        'sprintWithRaisedArms',
        'kickAndClap',
        'sprintWithSwingingArms',
        'stepBackAndLookBack',
        'punchAndLeap',
        'jumpBackDefensivePose',
        'kneelOneLegAndLook',
        'leapAndRoundhouseKick',
        'backKickWithPower'
    ],
    
    combatAction: [
        'sprintWithPullBack',
        'bendAndPull',
        'stepForwardAndPoint',
        'spinArmAndPunch',
        'sideKickAndSpin',
        'crouchAndKick',
        'kickAndClap',
        'punchAndLeap',
        'jumpBackDefensivePose',
        'leapAndRoundhouseKick',
        'backKickWithPower'
    ]
};

// Helper function to apply all animations to a character
function applyAllAnimations(character) {
    Object.values(allAnimations).forEach(animationFunction => {
        if (typeof animationFunction === 'function') {
            animationFunction(character);
        }
    });
}

// Helper function to apply animations by category
function applyAnimationsByCategory(character, category) {
    const animations = animationCategories[category];
    if (animations) {
        animations.forEach(animationName => {
            const animationFunction = allAnimations[animationName];
            if (typeof animationFunction === 'function') {
                animationFunction(character);
            }
        });
    }
}

// Helper function to apply specific animation
function applyAnimation(character, animationName) {
    const animationFunction = allAnimations[animationName];
    if (typeof animationFunction === 'function') {
        animationFunction(character);
    } else {
        console.warn(`Animation '${animationName}' not found`);
    }
}

// Helper function to list all available animations
function listAllAnimations() {
    return Object.keys(allAnimations);
}

// Helper function to list animations by category
function listAnimationsByCategory(category) {
    return animationCategories[category] || [];
}

// Export everything
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // All animation functions
        ...allAnimations,
        
        // Categories and helpers
        animationCategories,
        applyAllAnimations,
        applyAnimationsByCategory,
        applyAnimation,
        listAllAnimations,
        listAnimationsByCategory,
        
        // Individual libraries (for direct access if needed)
        armUpperBodyAnimations,
        movementLocomotionAnimations,
        combatActionAnimations
    };
}

// For browser usage
if (typeof window !== 'undefined') {
    window.Part37Animations = {
        ...allAnimations,
        animationCategories,
        applyAllAnimations,
        applyAnimationsByCategory,
        applyAnimation,
        listAllAnimations,
        listAnimationsByCategory
    };
}
