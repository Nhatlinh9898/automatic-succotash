// Animations Library Index - Part 41
// Master index file for all animation libraries from part 41

// Import all animation categories
import {
    standHandOnHip,
    standWithHandsOnChest,
    standAndFoldArms,
    openArmsWide,
    standAndRaiseOneHand,
    standWithFocus,
    shieldEyesToLookFar,
    standWithHandsBehind,
    standAndOfferHand,
    standAndLiftArmsHigh,
    standCalmly,
    standFirm,
    standWithObservation
} from './standing_poses_part41.js';

import {
    leapWithWidePose,
    leapAndPunchDownward,
    leapBackAndPull,
    leapAndGuard,
    leapSpinWithVictoryPose,
    leapWithPunchForward,
    leapWithCircularArms,
    leapWithForwardPoint
} from './jumping_animations_part41.js';

import {
    roundhouseKickAndPose,
    shakeHeadAndBlock,
    highKickWithArmShield,
    crouchAndJab,
    bendAndLift
} from './combat_animations_part41.js';

import {
    shakeHeadAndRaiseHand,
    turnHeadAndWave,
    kneelAndPoint,
    kneelAndRaiseArm,
    stepBackWithHandPull,
    spinAndPointFar,
    spinAndRaiseArm
} from './gesture_animations_part41.js';

import {
    stepBackAndReact,
    kneelBothLegsAndBow
} from './movement_animations_part41.js';

// Standing Poses Animations (359-393)
export const standingPosesAnimations = {
    standHandOnHip,              // 360
    standWithHandsOnChest,       // 361
    standAndFoldArms,            // 366
    openArmsWide,                // 369
    standAndRaiseOneHand,        // 371
    standWithFocus,              // 373
    shieldEyesToLookFar,         // 376
    standWithHandsBehind,        // 379
    standAndOfferHand,           // 381
    standAndLiftArmsHigh,        // 384
    standCalmly,                 // 388
    standFirm,                   // 390
    standWithObservation         // 392
};

// Jumping/Leaping Animations (362-391)
export const jumpingAnimations = {
    leapWithWidePose,            // 362
    leapAndPunchDownward,        // 367
    leapBackAndPull,             // 372
    leapAndGuard,                // 374
    leapSpinWithVictoryPose,     // 378
    leapWithPunchForward,        // 383
    leapWithCircularArms,        // 386
    leapWithForwardPoint         // 391
};

// Combat Animations (365-389)
export const combatAnimations = {
    roundhouseKickAndPose,       // 365
    shakeHeadAndBlock,           // 370
    highKickWithArmShield,       // 377
    crouchAndJab,                // 380
    bendAndLift                  // 389
};

// Gesture Animations (359-393)
export const gestureAnimations = {
    shakeHeadAndRaiseHand,       // 359
    turnHeadAndWave,             // 364
    kneelAndPoint,               // 375
    kneelAndRaiseArm,            // 382
    stepBackWithHandPull,        // 385
    spinAndPointFar,             // 387
    spinAndRaiseArm              // 393
};

// Movement Animations (363-368)
export const movementAnimations = {
    stepBackAndReact,            // 363
    kneelBothLegsAndBow         // 368
};

// Complete animation collection
export const allAnimationsPart41 = {
    ...standingPosesAnimations,
    ...jumpingAnimations,
    ...combatAnimations,
    ...gestureAnimations,
    ...movementAnimations
};

// Animation categories metadata
export const animationCategories = {
    standing: {
        name: "Standing Poses",
        count: 13,
        animations: Object.keys(standingPosesAnimations)
    },
    jumping: {
        name: "Jumping/Leaping",
        count: 8,
        animations: Object.keys(jumpingAnimations)
    },
    combat: {
        name: "Combat Actions",
        count: 5,
        animations: Object.keys(combatAnimations)
    },
    gestures: {
        name: "Gestures",
        count: 7,
        animations: Object.keys(gestureAnimations)
    },
    movement: {
        name: "Movement",
        count: 2,
        animations: Object.keys(movementAnimations)
    }
};

// Helper function to apply all animations to a character
export function applyAllAnimationsPart41(character) {
    Object.values(allAnimationsPart41).forEach(animationFunc => {
        animationFunc(character);
    });
    
    console.log(`Applied ${Object.keys(allAnimationsPart41).length} animations to character from Part 41`);
}

// Helper function to apply animations by category
export function applyAnimationsByCategory(character, category) {
    const categoryMap = {
        standing: standingPosesAnimations,
        jumping: jumpingAnimations,
        combat: combatAnimations,
        gestures: gestureAnimations,
        movement: movementAnimations
    };
    
    if (categoryMap[category]) {
        Object.values(categoryMap[category]).forEach(animationFunc => {
            animationFunc(character);
        });
        
        console.log(`Applied ${Object.keys(categoryMap[category]).length} ${category} animations to character`);
    } else {
        console.error(`Category "${category}" not found. Available categories: ${Object.keys(categoryMap).join(', ')}`);
    }
}

// Export all individual functions for direct use
export {
    // Standing poses
    standHandOnHip,
    standWithHandsOnChest,
    standAndFoldArms,
    openArmsWide,
    standAndRaiseOneHand,
    standWithFocus,
    shieldEyesToLookFar,
    standWithHandsBehind,
    standAndOfferHand,
    standAndLiftArmsHigh,
    standCalmly,
    standFirm,
    standWithObservation,
    
    // Jumping animations
    leapWithWidePose,
    leapAndPunchDownward,
    leapBackAndPull,
    leapAndGuard,
    leapSpinWithVictoryPose,
    leapWithPunchForward,
    leapWithCircularArms,
    leapWithForwardPoint,
    
    // Combat animations
    roundhouseKickAndPose,
    shakeHeadAndBlock,
    highKickWithArmShield,
    crouchAndJab,
    bendAndLift,
    
    // Gesture animations
    shakeHeadAndRaiseHand,
    turnHeadAndWave,
    kneelAndPoint,
    kneelAndRaiseArm,
    stepBackWithHandPull,
    spinAndPointFar,
    spinAndRaiseArm,
    
    // Movement animations
    stepBackAndReact,
    kneelBothLegsAndBow
};
