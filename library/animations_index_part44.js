// Animations Index - Part 44
// Master index file for all animation libraries from part 44

// Import all animation libraries
import {
    standAndTouchCheek,
    standAndInterlockArms,
    standAndStretchUpwards,
    standWithHandsBehindHead,
    standAndGestureForward,
    standWithStrongPose,
    standWithForwardPointing,
    sprintStartPose,
    torsoTwist
} from './standing_poses_part44.js';

import {
    sprintWithArmsHigh,
    sprintWithWideOpenArms,
    sprintWithForwardSwing,
    bendWithSideReach,
    runAndPowerKick
} from './movement_animations_part44.js';

import {
    leapWithStraightForwardArms,
    leapWithCircularMotion,
    leapWithCelebration,
    longJump,
    hurdleJump,
    basketballJumpShot,
    soccerHeader,
    volleyballDive
} from './jumping_animations_part44.js';

import {
    standAndTouchCheek as gestureTouchCheek,
    standAndInterlockArms as gestureInterlockArms,
    standAndStretchUpwards as gestureStretchUpwards,
    standWithHandsBehindHead as gestureHandsBehindHead,
    standAndGestureForward as gestureGestureForward,
    bendWithSideReach as gestureSideReach,
    standWithStrongPose as gestureStrongPose,
    standWithForwardPointing as gestureForwardPointing,
    torsoTwist as gestureTorsoTwist
} from './gesture_animations_part44.js';

import {
    boxingHook,
    boxingStraightPunch,
    rapidBoxingJab,
    kickboxingKick,
    circularPunch
} from './combat_animations_part44.js';

import {
    golfSwing,
    volleyballSpike,
    soccerKick,
    basketballThrow,
    baseballPitch,
    tennisServe,
    weightliftingSquat,
    tennisForehand,
    tennisBackhand,
    rowing,
    frisbeeThrow,
    shotPut,
    badmintonOverhead,
    cleanAndPress,
    pingPongSwing,
    badmintonCrossCut,
    tugOfWarPull,
    basketballTurnAndThrow,
    javelinThrow,
    bowlingRoll
} from './sports_animations_part44.js';

// Master animation registry
const AnimationRegistry = {
    // Standing Poses (488-501, 532)
    standing: {
        standAndTouchCheek,
        standAndInterlockArms,
        standAndStretchUpwards,
        standWithHandsBehindHead,
        standAndGestureForward,
        standWithStrongPose,
        standWithForwardPointing,
        sprintStartPose,
        torsoTwist
    },
    
    // Movement Animations (487, 492, 497, 496, 529)
    movement: {
        sprintWithArmsHigh,
        sprintWithWideOpenArms,
        sprintWithForwardSwing,
        bendWithSideReach,
        runAndPowerKick
    },
    
    // Jumping Animations (489, 494, 499, 507, 517, 513, 514, 528)
    jumping: {
        leapWithStraightForwardArms,
        leapWithCircularMotion,
        leapWithCelebration,
        longJump,
        hurdleJump,
        basketballJumpShot,
        soccerHeader,
        volleyballDive
    },
    
    // Gesture Animations (overlaps with standing)
    gesture: {
        standAndTouchCheek: gestureTouchCheek,
        standAndInterlockArms: gestureInterlockArms,
        standAndStretchUpwards: gestureStretchUpwards,
        standWithHandsBehindHead: gestureHandsBehindHead,
        standAndGestureForward: gestureGestureForward,
        bendWithSideReach: gestureSideReach,
        standWithStrongPose: gestureStrongPose,
        standWithForwardPointing: gestureForwardPointing,
        torsoTwist: gestureTorsoTwist
    },
    
    // Combat Animations (509, 518, 521, 520, 533)
    combat: {
        boxingHook,
        boxingStraightPunch,
        rapidBoxingJab,
        kickboxingKick,
        circularPunch
    },
    
    // Sports Animations (502-508, 510-531)
    sports: {
        golfSwing,
        volleyballSpike,
        soccerKick,
        basketballThrow,
        baseballPitch,
        tennisServe,
        weightliftingSquat,
        tennisForehand,
        tennisBackhand,
        rowing,
        frisbeeThrow,
        shotPut,
        badmintonOverhead,
        cleanAndPress,
        pingPongSwing,
        badmintonCrossCut,
        tugOfWarPull,
        basketballTurnAndThrow,
        javelinThrow,
        bowlingRoll
    }
};

// Utility function to apply all animations from a category
function applyAnimationCategory(character, category) {
    const animations = AnimationRegistry[category];
    if (!animations) {
        console.warn(`Animation category '${category}' not found`);
        return;
    }
    
    Object.values(animations).forEach(animationFunc => {
        if (typeof animationFunc === 'function') {
            animationFunc(character);
        }
    });
}

// Utility function to apply specific animation
function applyAnimation(character, category, animationName) {
    const animations = AnimationRegistry[category];
    if (!animations || !animations[animationName]) {
        console.warn(`Animation '${animationName}' not found in category '${category}'`);
        return;
    }
    
    animations[animationName](character);
}

// Utility function to get all available animations
function getAllAnimations() {
    const result = {};
    Object.keys(AnimationRegistry).forEach(category => {
        result[category] = Object.keys(AnimationRegistry[category]);
    });
    return result;
}

// Export everything
export {
    AnimationRegistry,
    applyAnimationCategory,
    applyAnimation,
    getAllAnimations
};
