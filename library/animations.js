// Three.js Animations Library
// Custom animations and keyframe tracks

import { AnimationClip, KeyframeTrack, VectorKeyframeTrack } from 'three';

export function createCustomAnimation(object) {
    // Create keyframe for Y-axis rotation animation
    const rotationTrack = new KeyframeTrack(
        object.name + '.rotation[y]', // Track name
        [0, 1, 2],                    // Keyframe times
        [0, Math.PI, Math.PI * 2]    // Keyframe values
    );

    const animationClip = new AnimationClip('customRotation', 3, [rotationTrack]);
    return animationClip;
}

export function createLoopAnimation(object) {
    const positionTrack = new VectorKeyframeTrack('.position', [0, 1, 2], [
        0, 0, 0,    // Start position
        2, 0, 0,    // End position
        0, 0, 0     // Return to start
    ]);

    const animationClip = new AnimationClip('loopAnimation', 3, [positionTrack]);
    return animationClip;
}

export function createComplexAnimation(object) {
    const positionTrack = new VectorKeyframeTrack('.position', [0, 0.5, 1, 1.5, 2], [
        0, 0, 0,    // Start
        1, 1, 0,    // Move up-right
        2, 0, 0,    // Move right
        1, -1, 0,   // Move down-right
        0, 0, 0     // Return to start
    ]);

    const rotationTrack = new KeyframeTrack('.rotation[y]', [0, 2], [0, Math.PI * 2]);

    const animationClip = new AnimationClip('complexAnimation', 2, [positionTrack, rotationTrack]);
    return animationClip;
}
