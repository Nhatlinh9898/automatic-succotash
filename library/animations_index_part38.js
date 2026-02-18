/**
 * Animations Library Index - Part 38
 * Central export point for all animation libraries from part 38
 */

// Import combat animations
const {
    highKickWithArmsArc,
    spinAndSwing,
    sideKickAndTurn,
    standAndPunchBack,
    roundKickWithSpin,
    stepBackAndPunch,
    gentleKickAndNod,
    kickWithStability
} = require('./combat_animations_part38');

// Import movement animations
const {
    jumpBackAndPull,
    leapAndSwingBack,
    leapAndReachForward,
    sprintAndThrowArmsUp,
    leapAndSwingHands,
    jumpAndWave,
    runAndThrow,
    runWithWideArmSwing,
    leapAndTouchFeet,
    jumpAndHalfSpin,
    sprintAndTurnQuickly
} = require('./movement_animations_part38');

// Import gesture animations
const {
    kneelAndClap,
    standAndStretchShoulders,
    slowStepAndHandsBack,
    pushForwardAndTurnHead,
    standAndSwingFast,
    stepBackAndRestArms,
    standAndShoulderTwist,
    standWithExtendedArms,
    extendArmAndTurnBack,
    liftLegAndTurnHead,
    shakeHeadAndRestHandsOnHips,
    standAndBowGently,
    jumpAndHoldHeart,
    extendArmAndPatShoulder,
    kneelAndExtendHand
} = require('./gesture_animations_part38');

// Import idle animations
const {
    restHandsOnHead,
    shrugAndLookSide,
    stepBackAndCoverFace,
    standAndShieldEyes,
    kneelAndBraceGround,
    turnAndHandsInPockets,
    standAndShakeShoulders,
    standAndThink,
    shakeShouldersAndRaiseHand,
    kneelAndBow,
    stepBackAndLookOverShoulder,
    standAndSoftClap
} = require('./idle_animations_part38');

// Export all animations by category
module.exports = {
    // Combat animations
    combat: {
        highKickWithArmsArc,
        spinAndSwing,
        sideKickAndTurn,
        standAndPunchBack,
        roundKickWithSpin,
        stepBackAndPunch,
        gentleKickAndNod,
        kickWithStability
    },
    
    // Movement animations
    movement: {
        jumpBackAndPull,
        leapAndSwingBack,
        leapAndReachForward,
        sprintAndThrowArmsUp,
        leapAndSwingHands,
        jumpAndWave,
        runAndThrow,
        runWithWideArmSwing,
        leapAndTouchFeet,
        jumpAndHalfSpin,
        sprintAndTurnQuickly
    },
    
    // Gesture animations
    gesture: {
        kneelAndClap,
        standAndStretchShoulders,
        slowStepAndHandsBack,
        pushForwardAndTurnHead,
        standAndSwingFast,
        stepBackAndRestArms,
        standAndShoulderTwist,
        standWithExtendedArms,
        extendArmAndTurnBack,
        liftLegAndTurnHead,
        shakeHeadAndRestHandsOnHips,
        standAndBowGently,
        jumpAndHoldHeart,
        extendArmAndPatShoulder,
        kneelAndExtendHand
    },
    
    // Idle animations
    idle: {
        restHandsOnHead,
        shrugAndLookSide,
        stepBackAndCoverFace,
        standAndShieldEyes,
        kneelAndBraceGround,
        turnAndHandsInPockets,
        standAndShakeShoulders,
        standAndThink,
        shakeShouldersAndRaiseHand,
        kneelAndBow,
        stepBackAndLookOverShoulder,
        standAndSoftClap
    },
    
    // Export all functions directly for convenience
    ...require('./combat_animations_part38'),
    ...require('./movement_animations_part38'),
    ...require('./gesture_animations_part38'),
    ...require('./idle_animations_part38')
};
