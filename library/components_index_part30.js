/**
 * Components Index - Part 30
 * Central index for all Part 30 body components
 * Organized by category for easy access
 */

// Import male body parts
import {
    addGlowingRoundedShoulders,
    addLaserMuscularArms,
    addMetallicChest,
    addAngularArms,
    addMetallicBack,
    addMassiveShoulders,
    addLaserArms,
    addWaveLaserChest,
    addExtendedLaserArms,
    addMetallicShoulders,
    addBlockyMetallicChest,
    addAngularLaserBack,
    addTopLaserArms,
    addLongBackWithHighShoulders,
    addLongLaserChest,
    addMassiveShoulderMuscles,
    addMetallicGlowArms,
    addLaserGlowLongArms,
    addMuscularLongBack,
    addBlockLaserChest,
    addAngularMetalShoulders,
    addWavyLaserChest,
    addLongMetalArms
} from './male_body_parts_part30.js';

// Import female body parts
import {
    addLongSlimWaist,
    addSophisticatedBack,
    addGracefulWideHips,
    addLongElegantBack,
    addSparklingChest,
    addSmoothRoundedHips,
    addWavyWaist,
    addLaceGlowBack,
    addMetallicWaist,
    addRadiantHips,
    addMetallicBack,
    addLaserWaist,
    addSmoothLaserHips,
    addMetallicRoundedHips,
    addWavyLaserBack,
    addTwistedWaist,
    addLaceHips,
    addStarryLaceBack,
    addMetallicSoftHips,
    addLaserLongBack,
    addMetallicLaceWaist,
    addSparklingLaceHips,
    addMetallicLongBack,
    addStarryLaserWaist
} from './female_body_parts_part30.js';

// Male Body Parts Collection
export const maleBodyParts = {
    // Shoulders
    glowingRoundedShoulders: addGlowingRoundedShoulders,
    massiveShoulders: addMassiveShoulders,
    metallicShoulders: addMetallicShoulders,
    topLaserArms: addTopLaserArms,
    massiveShoulderMuscles: addMassiveShoulderMuscles,
    angularMetalShoulders: addAngularMetalShoulders,
    
    // Arms
    laserMuscularArms: addLaserMuscularArms,
    angularArms: addAngularArms,
    laserArms: addLaserArms,
    extendedLaserArms: addExtendedLaserArms,
    metallicGlowArms: addMetallicGlowArms,
    laserGlowLongArms: addLaserGlowLongArms,
    longMetalArms: addLongMetalArms,
    
    // Chest
    metallicChest: addMetallicChest,
    waveLaserChest: addWaveLaserChest,
    blockyMetallicChest: addBlockyMetallicChest,
    longLaserChest: addLongLaserChest,
    blockLaserChest: addBlockLaserChest,
    wavyLaserChest: addWavyLaserChest,
    
    // Back
    metallicBack: addMetallicBack,
    angularLaserBack: addAngularLaserBack,
    longBackWithHighShoulders: addLongBackWithHighShoulders,
    muscularLongBack: addMuscularLongBack
};

// Female Body Parts Collection
export const femaleBodyParts = {
    // Waist
    longSlimWaist: addLongSlimWaist,
    wavyWaist: addWavyWaist,
    metallicWaist: addMetallicWaist,
    laserWaist: addLaserWaist,
    twistedWaist: addTwistedWaist,
    metallicLaceWaist: addMetallicLaceWaist,
    starryLaserWaist: addStarryLaserWaist,
    
    // Back
    sophisticatedBack: addSophisticatedBack,
    longElegantBack: addLongElegantBack,
    laceGlowBack: addLaceGlowBack,
    metallicBack: addMetallicBack,
    wavyLaserBack: addWavyLaserBack,
    starryLaceBack: addStarryLaceBack,
    laserLongBack: addLaserLongBack,
    metallicLongBack: addMetallicLongBack,
    
    // Hips
    gracefulWideHips: addGracefulWideHips,
    smoothRoundedHips: addSmoothRoundedHips,
    radiantHips: addRadiantHips,
    smoothLaserHips: addSmoothLaserHips,
    metallicRoundedHips: addMetallicRoundedHips,
    laceHips: addLaceHips,
    metallicSoftHips: addMetallicSoftHips,
    sparklingLaceHips: addSparklingLaceHips,
    
    // Chest
    sparklingChest: addSparklingChest
};

// All Components Combined
export const allComponents = {
    ...maleBodyParts,
    ...femaleBodyParts
};

// Component Categories
export const componentCategories = {
    male: {
        shoulders: [
            'glowingRoundedShoulders',
            'massiveShoulders',
            'metallicShoulders',
            'topLaserArms',
            'massiveShoulderMuscles',
            'angularMetalShoulders'
        ],
        arms: [
            'laserMuscularArms',
            'angularArms',
            'laserArms',
            'extendedLaserArms',
            'metallicGlowArms',
            'laserGlowLongArms',
            'longMetalArms'
        ],
        chest: [
            'metallicChest',
            'waveLaserChest',
            'blockyMetallicChest',
            'longLaserChest',
            'blockLaserChest',
            'wavyLaserChest'
        ],
        back: [
            'metallicBack',
            'angularLaserBack',
            'longBackWithHighShoulders',
            'muscularLongBack'
        ]
    },
    female: {
        waist: [
            'longSlimWaist',
            'wavyWaist',
            'metallicWaist',
            'laserWaist',
            'twistedWaist',
            'metallicLaceWaist',
            'starryLaserWaist'
        ],
        back: [
            'sophisticatedBack',
            'longElegantBack',
            'laceGlowBack',
            'metallicBack',
            'wavyLaserBack',
            'starryLaceBack',
            'laserLongBack',
            'metallicLongBack'
        ],
        hips: [
            'gracefulWideHips',
            'smoothRoundedHips',
            'radiantHips',
            'smoothLaserHips',
            'metallicRoundedHips',
            'laceHips',
            'metallicSoftHips',
            'sparklingLaceHips'
        ],
        chest: [
            'sparklingChest'
        ]
    }
};

// Helper function to get component by name
export function getComponent(name) {
    return allComponents[name];
}

// Helper function to get components by category
export function getComponentsByCategory(gender, category) {
    const categoryNames = componentCategories[gender]?.[category] || [];
    return categoryNames.map(name => allComponents[name]).filter(Boolean);
}

// Helper function to get all male components
export function getAllMaleComponents() {
    return Object.values(maleBodyParts);
}

// Helper function to get all female components
export function getAllFemaleComponents() {
    return Object.values(femaleBodyParts);
}

// Export all individual functions for direct access
export {
    // Male functions
    addGlowingRoundedShoulders,
    addLaserMuscularArms,
    addMetallicChest,
    addAngularArms,
    addMetallicBack,
    addMassiveShoulders,
    addLaserArms,
    addWaveLaserChest,
    addExtendedLaserArms,
    addMetallicShoulders,
    addBlockyMetallicChest,
    addAngularLaserBack,
    addTopLaserArms,
    addLongBackWithHighShoulders,
    addLongLaserChest,
    addMassiveShoulderMuscles,
    addMetallicGlowArms,
    addLaserGlowLongArms,
    addMuscularLongBack,
    addBlockLaserChest,
    addAngularMetalShoulders,
    addWavyLaserChest,
    addLongMetalArms,
    
    // Female functions
    addLongSlimWaist,
    addSophisticatedBack,
    addGracefulWideHips,
    addLongElegantBack,
    addSparklingChest,
    addSmoothRoundedHips,
    addWavyWaist,
    addLaceGlowBack,
    addMetallicWaist,
    addRadiantHips,
    addLaserWaist,
    addSmoothLaserHips,
    addMetallicRoundedHips,
    addWavyLaserBack,
    addTwistedWaist,
    addLaceHips,
    addStarryLaceBack,
    addMetallicSoftHips,
    addLaserLongBack,
    addMetallicLaceWaist,
    addSparklingLaceHips,
    addMetallicLongBack,
    addStarryLaserWaist
};
