/**
 * Animation Components Index - Part 34
 * Main index file for all animation library components from part_34_corrected.js
 * Provides centralized access to all 87 character animations organized by category
 */

// Import all animation categories
import {
    rapidPunch,
    spinAndDash,
    highKick,
    liftHeavyObject,
    slamGround,
    kickUpward,
    dualPunch,
    rapidKick,
    fastPushForward,
    stretchAndStand,
    punchWithSpin,
    retreatAndStrike,
    leapAndPunch,
    duckAndKick,
    reachAndPull,
    standAndRaiseBothArms,
    hammerPunch,
    crouchAndGrab,
    spinningPunch,
    backKick,
    guardFace,
    retreatAndGuard
} from './combat_animations_part34.js';

import {
    jumpAndSwing,
    jumpTwistLand,
    slowWalk,
    quickStepForward,
    hopOnOneLeg,
    sitAndLean,
    reclineBack,
    pushUpToStand,
    jumpWithArmsSwing,
    quickBow,
    hopBack,
    liftLegAndBalance,
    sideStep
} from './movement_animations_part34.js';

import {
    leapAnimation,
    swayTorso,
    searchAround,
    confidentStand,
    leanBack,
    rotateArmRelaxedly,
    waveHandHigh,
    twistAndLean,
    standAndTwist,
    extendHandToReceive,
    shakeHeadAndStandFirmly,
    clapHands
} from './idle_animations_part34.js';

import {
    spinAndDash as acrobaticSpinAndDash,
    highKick as acrobaticHighKick,
    jumpAndSwing as acrobaticJumpAndSwing,
    slamGround as acrobaticSlamGround,
    kickUpward as acrobaticKickUpward,
    jumpTwistLand,
    hopOnOneLeg as acrobaticHopOnOneLeg,
    rapidKick as acrobaticRapidKick,
    pushUpToStand as acrobaticPushUpToStand,
    jumpWithArmsSwing as acrobaticJumpWithArmsSwing,
    punchWithSpin as acrobaticPunchWithSpin,
    leapAndPunch as acrobaticLeapAndPunch,
    duckAndKick as acrobaticDuckAndKick,
    hopBack as acrobaticHopBack,
    liftLegAndBalance,
    hammerPunch as acrobaticHammerPunch,
    spinningPunch as acrobaticSpinningPunch,
    backKick as acrobaticBackKick
} from './acrobatic_animations_part34.js';

/**
 * Animation Library Part 34
 * Complete collection of character animations organized by category
 */
const AnimationLibraryPart34 = {
    // Combat Animations (22 functions)
    combat: {
        rapidPunch,
        spinAndDash,
        highKick,
        liftHeavyObject,
        slamGround,
        kickUpward,
        dualPunch,
        rapidKick,
        fastPushForward,
        stretchAndStand,
        punchWithSpin,
        retreatAndStrike,
        leapAndPunch,
        duckAndKick,
        reachAndPull,
        standAndRaiseBothArms,
        hammerPunch,
        crouchAndGrab,
        spinningPunch,
        backKick,
        guardFace,
        retreatAndGuard
    },

    // Movement Animations (13 functions)
    movement: {
        jumpAndSwing,
        jumpTwistLand,
        slowWalk,
        quickStepForward,
        hopOnOneLeg,
        sitAndLean,
        reclineBack,
        pushUpToStand,
        jumpWithArmsSwing,
        quickBow,
        hopBack,
        liftLegAndBalance,
        sideStep
    },

    // Idle and Gesture Animations (12 functions)
    idle: {
        leapAnimation,
        swayTorso,
        searchAround,
        confidentStand,
        leanBack,
        rotateArmRelaxedly,
        waveHandHigh,
        twistAndLean,
        standAndTwist,
        extendHandToReceive,
        shakeHeadAndStandFirmly,
        clapHands
    },

    // Acrobatic Animations (18 functions)
    acrobatic: {
        spinAndDash: acrobaticSpinAndDash,
        highKick: acrobaticHighKick,
        jumpAndSwing: acrobaticJumpAndSwing,
        slamGround: acrobaticSlamGround,
        kickUpward: acrobaticKickUpward,
        jumpTwistLand,
        hopOnOneLeg: acrobaticHopOnOneLeg,
        rapidKick: acrobaticRapidKick,
        pushUpToStand: acrobaticPushUpToStand,
        jumpWithArmsSwing: acrobaticJumpWithArmsSwing,
        punchWithSpin: acrobaticPunchWithSpin,
        leapAndPunch: acrobaticLeapAndPunch,
        duckAndKick: acrobaticDuckAndKick,
        hopBack: acrobaticHopBack,
        liftLegAndBalance,
        hammerPunch: acrobaticHammerPunch,
        spinningPunch: acrobaticSpinningPunch,
        backKick: acrobaticBackKick
    }
};

/**
 * Apply all animations from part 34 to a character
 * @param {THREE.Object3D} character - The character to apply animations to
 * @param {Object} options - Configuration options
 * @param {Array<string>} options.categories - Which categories to include (default: all)
 * @param {Array<string>} options.exclude - Specific animations to exclude
 */
function applyAllAnimationsPart34(character, options = {}) {
    const {
        categories = ['combat', 'movement', 'idle', 'acrobatic'],
        exclude = []
    } = options;

    const allAnimations = {};

    // Collect animations from specified categories
    categories.forEach(category => {
        if (AnimationLibraryPart34[category]) {
            Object.assign(allAnimations, AnimationLibraryPart34[category]);
        }
    });

    // Apply animations, excluding specified ones
    Object.entries(allAnimations).forEach(([name, animationFunc]) => {
        if (!exclude.includes(name)) {
            try {
                animationFunc(character);
                console.log(`Applied animation: ${name}`);
            } catch (error) {
                console.error(`Error applying animation ${name}:`, error);
            }
        }
    });

    console.log(`Total animations applied: ${Object.keys(allAnimations).length - exclude.length}`);
}

/**
 * Get animation by name from any category
 * @param {string} animationName - Name of the animation
 * @returns {Function|null} Animation function or null if not found
 */
function getAnimationByName(animationName) {
    for (const category of Object.values(AnimationLibraryPart34)) {
        if (category[animationName]) {
            return category[animationName];
        }
    }
    return null;
}

/**
 * List all available animations by category
 * @returns {Object} Object with category names as keys and animation arrays as values
 */
function listAllAnimations() {
    const result = {};
    Object.entries(AnimationLibraryPart34).forEach(([category, animations]) => {
        result[category] = Object.keys(animations);
    });
    return result;
}

// Export the main library object and utility functions
export {
    AnimationLibraryPart34,
    applyAllAnimationsPart34,
    getAnimationByName,
    listAllAnimations
};

// Export individual categories for selective imports
export {
    AnimationLibraryPart34 as default
};
