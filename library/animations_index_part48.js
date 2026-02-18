// Animation Library Index - Part 48
// Master index for all animation functions from part_48_corrected.js

// Import dance and performance animations (Movements 669-700)
import {
    spinAndTouchGround,
    finishingGestureWithCurvedHands,
    leapAndFullTurn,
    standWithInterlacedHands,
    spinAndSwingArmsBack,
    leapAndCrossHandsUp,
    stepAndCurveHands,
    spinSwingHandsAndLiftLeg,
    standAndGracefullyStretchArms,
    leapAndKickLegHigh,
    spinAndGentleBow,
    stopWithHandOnHeart,
    leapAndFormVShape,
    spinAndTouchShoulder,
    standAndLiftHandsUp,
    leapAndWaveHandsElegantly,
    spinAndStretchArmsUp,
    stepWithSoftArmPull,
    leapAndSpreadHandsWide,
    gracefulSpinAndReach,
    standAndTouchGround,
    artisticFinalBow,
    spinAndExtendArmSide,
    leapAndCircleArmMotion,
    standAndGracefullyPullArmsBack,
    spinAndTouchHead,
    leapAndExtendLeg,
    standAndGentleSalute,
    spinAndSpreadArms,
    leapAndStretchForward,
    standAndTouchHeart,
    finalSpinWithCrossedHands
} from './dance_animations_part48.js';

// Import presentation and gesture animations (Movements 701-713)
import {
    standAndGestureForwardConfidently,
    scanRoomWithExtendedArms,
    raiseHandAndEmphasize,
    nodWithFoldedArms,
    stepForwardAndPointToAudience,
    stepBackAndCalmGesture,
    pointToScreenConfidently,
    spreadArmsAndSmile,
    raiseArmConfidently,
    standAndTouchHeartGently,
    stepBackWithPullingGesture,
    standWithRaisedHands
} from './presentation_animations_part48.js';

// Dance and Performance Animation Collection
export const danceAnimationsPart48 = {
    // Performance Movements (669-680)
    spinAndTouchGround,                    // 669
    finishingGestureWithCurvedHands,       // 670
    leapAndFullTurn,                       // 671
    standWithInterlacedHands,             // 672
    spinAndSwingArmsBack,                 // 673
    leapAndCrossHandsUp,                  // 674
    stepAndCurveHands,                    // 675
    spinSwingHandsAndLiftLeg,             // 676
    standAndGracefullyStretchArms,        // 677
    leapAndKickLegHigh,                   // 678
    spinAndGentleBow,                     // 679
    stopWithHandOnHeart,                  // 680
    
    // Artistic Movements (681-690)
    leapAndFormVShape,                    // 681
    spinAndTouchShoulder,                 // 682
    standAndLiftHandsUp,                  // 683
    leapAndWaveHandsElegantly,            // 684
    spinAndStretchArmsUp,                 // 685
    stepWithSoftArmPull,                  // 686
    leapAndSpreadHandsWide,               // 687
    gracefulSpinAndReach,                 // 688
    standAndTouchGround,                  // 689
    artisticFinalBow,                     // 690
    
    // Advanced Movements (691-700)
    spinAndExtendArmSide,                 // 691
    leapAndCircleArmMotion,               // 692
    standAndGracefullyPullArmsBack,       // 693
    spinAndTouchHead,                     // 694
    leapAndExtendLeg,                     // 695
    standAndGentleSalute,                 // 696
    spinAndSpreadArms,                    // 697
    leapAndStretchForward,                // 698
    standAndTouchHeart,                   // 699
    finalSpinWithCrossedHands             // 700
};

// Presentation and Gesture Animation Collection
export const presentationAnimationsPart48 = {
    // Confident Presentations (701-705)
    standAndGestureForwardConfidently,    // 701
    scanRoomWithExtendedArms,             // 702
    raiseHandAndEmphasize,                // 703
    nodWithFoldedArms,                    // 704
    stepForwardAndPointToAudience,        // 705
    
    // Calm Gestures (706-710)
    stepBackAndCalmGesture,               // 706
    pointToScreenConfidently,             // 707
    spreadArmsAndSmile,                   // 708
    raiseArmConfidently,                  // 709
    standAndTouchHeartGently,             // 710
    
    // Final Gestures (711-713)
    stepBackWithPullingGesture,           // 711
    standWithRaisedHands                  // 712
};

// Complete Animation Collection
export const allAnimationsPart48 = {
    ...danceAnimationsPart48,
    ...presentationAnimationsPart48
};

// Animation Categories
export const animationCategoriesPart48 = {
    dance: danceAnimationsPart48,
    presentation: presentationAnimationsPart48,
    all: allAnimationsPart48
};

// Helper function to apply all animations from part 48 to a character
export function applyAllAnimationsPart48(character) {
    Object.values(allAnimationsPart48).forEach(animationFunction => {
        if (typeof animationFunction === 'function') {
            animationFunction(character);
        }
    });
    
    console.log(`Applied ${Object.keys(allAnimationsPart48).length} animations from Part 48 to character`);
}

// Helper function to apply animations by category
export function applyDanceAnimationsPart48(character) {
    Object.values(danceAnimationsPart48).forEach(animationFunction => {
        if (typeof animationFunction === 'function') {
            animationFunction(character);
        }
    });
    
    console.log(`Applied ${Object.keys(danceAnimationsPart48).length} dance animations from Part 48 to character`);
}

export function applyPresentationAnimationsPart48(character) {
    Object.values(presentationAnimationsPart48).forEach(animationFunction => {
        if (typeof animationFunction === 'function') {
            animationFunction(character);
        }
    });
    
    console.log(`Applied ${Object.keys(presentationAnimationsPart48).length} presentation animations from Part 48 to character`);
}

// Animation search functions
export function findAnimationByName(name) {
    return allAnimationsPart48[name] || null;
}

export function findAnimationsByCategory(category) {
    return animationCategoriesPart48[category] || null;
}

export function getAnimationCount() {
    return {
        total: Object.keys(allAnimationsPart48).length,
        dance: Object.keys(danceAnimationsPart48).length,
        presentation: Object.keys(presentationAnimationsPart48).length
    };
}
