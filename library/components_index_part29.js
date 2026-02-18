// Components Index - Part 29
// Index file for all Part 29 components

// Import all component modules
import {
    addHighMultiLayeredLaserHair,
    addLayeredLaserEyes,
    addLongLaserHair,
    addWaveLaserMouth,
    addSparklingLaserHair,
    addWaveLaserSpikeHair,
    addStrongDoubleLaserEyes,
    addMeshLaserMouth,
    addExtendedLaserSpikeHair,
    addCurvedLaserHair
} from './male_hair_components_part29.js';

import {
    addSoftLuminousLaceHair,
    addLuminousWavyLaceHair,
    addMetallicCurlyLongHair,
    addShinyShortGlowHair,
    addMetallicShortHair,
    addSoftRadiantLongHair,
    addSparklingLaserFringe,
    addLuminousSilkyHair,
    addWaveLaceShortHair,
    addMetallicLongFringeHair
} from './female_hair_components_part29.js';

import {
    addLayeredLaserEyes,
    addWaveLaserMouth,
    addStrongDoubleLaserEyes,
    addMeshLaserMouth
} from './facial_features_part29.js';

import {
    // Male components
    addBroadShoulders,
    addChest,
    addArmMuscles,
    addLongBack,
    addBalancedHips,
    addPowerfulChest,
    addGiantArms,
    addGlowingShoulders,
    addAngularBack,
    addTallBody,
    addGlowingArmMuscles,
    addLaserBack,
    addLaserChest,
    
    // Female components
    addSlimWaist,
    addFeminineChest,
    addCurvyHips,
    addElegantBack,
    addHighlightedWaist,
    addWideHips,
    addGracefulBack,
    addGlowingWaist,
    addRadiantRoundedHips,
    addGlowBack,
    addStarryWaist,
    addSparklingHips
} from './body_components_part29.js';

// Component categories
const Part29Components = {
    // Male Hair Components
    maleHair: {
        laserStyles: [
            { name: 'High Multi-Layered Laser Hair', function: addHighMultiLayeredLaserHair },
            { name: 'Long Laser Hair', function: addLongLaserHair },
            { name: 'Sparkling Laser Hair', function: addSparklingLaserHair },
            { name: 'Wave Laser Spike Hair', function: addWaveLaserSpikeHair },
            { name: 'Extended Laser Spike Hair', function: addExtendedLaserSpikeHair },
            { name: 'Curved Laser Hair', function: addCurvedLaserHair }
        ]
    },
    
    // Female Hair Components
    femaleHair: {
        luminousStyles: [
            { name: 'Soft Luminous Lace Hair', function: addSoftLuminousLaceHair },
            { name: 'Luminous Wavy Lace Hair', function: addLuminousWavyLaceHair },
            { name: 'Shiny Short Glow Hair', function: addShinyShortGlowHair },
            { name: 'Soft Radiant Long Hair', function: addSoftRadiantLongHair },
            { name: 'Sparkling Laser Fringe', function: addSparklingLaserFringe },
            { name: 'Luminous Silky Hair', function: addLuminousSilkyHair },
            { name: 'Wave Lace Short Hair', function: addWaveLaceShortHair }
        ],
        metallicStyles: [
            { name: 'Metallic Curly Long Hair', function: addMetallicCurlyLongHair },
            { name: 'Metallic Short Hair', function: addMetallicShortHair },
            { name: 'Metallic Long Fringe Hair', function: addMetallicLongFringeHair }
        ]
    },
    
    // Facial Features
    facialFeatures: {
        laserEyes: [
            { name: 'Layered Laser Eyes', function: addLayeredLaserEyes },
            { name: 'Strong Double Laser Eyes', function: addStrongDoubleLaserEyes }
        ],
        laserMouths: [
            { name: 'Wave Laser Mouth', function: addWaveLaserMouth },
            { name: 'Mesh Laser Mouth', function: addMeshLaserMouth }
        ]
    },
    
    // Male Body Components
    maleBody: {
        upperBody: [
            { name: 'Broad Shoulders', function: addBroadShoulders },
            { name: 'Chest', function: addChest },
            { name: 'Powerful Chest', function: addPowerfulChest },
            { name: 'Arm Muscles', function: addArmMuscles },
            { name: 'Giant Arms', function: addGiantArms },
            { name: 'Glowing Shoulders', function: addGlowingShoulders },
            { name: 'Glowing Arm Muscles', function: addGlowingArmMuscles }
        ],
        torso: [
            { name: 'Long Back', function: addLongBack },
            { name: 'Angular Back', function: addAngularBack },
            { name: 'Tall Body', function: addTallBody },
            { name: 'Laser Back', function: addLaserBack },
            { name: 'Laser Chest', function: addLaserChest }
        ],
        lowerBody: [
            { name: 'Balanced Hips', function: addBalancedHips }
        ]
    },
    
    // Female Body Components
    femaleBody: {
        upperBody: [
            { name: 'Feminine Chest', function: addFeminineChest },
            { name: 'Elegant Back', function: addElegantBack },
            { name: 'Graceful Back', function: addGracefulBack },
            { name: 'Glow Back', function: addGlowBack }
        ],
        midsection: [
            { name: 'Slim Waist', function: addSlimWaist },
            { name: 'Highlighted Waist', function: addHighlightedWaist },
            { name: 'Glowing Waist', function: addGlowingWaist },
            { name: 'Starry Waist', function: addStarryWaist }
        ],
        lowerBody: [
            { name: 'Curvy Hips', function: addCurvyHips },
            { name: 'Wide Hips', function: addWideHips },
            { name: 'Radiant Rounded Hips', function: addRadiantRoundedHips },
            { name: 'Sparkling Hips', function: addSparklingHips }
        ]
    }
};

// Helper functions to get components by category
function getMaleHairComponents() {
    return Part29Components.maleHair;
}

function getFemaleHairComponents() {
    return Part29Components.femaleHair;
}

function getFacialFeatureComponents() {
    return Part29Components.facialFeatures;
}

function getMaleBodyComponents() {
    return Part29Components.maleBody;
}

function getFemaleBodyComponents() {
    return Part29Components.femaleBody;
}

// Get all components
function getAllPart29Components() {
    return Part29Components;
}

// Search function to find components by name
function findComponentByName(name) {
    const allComponents = [];
    
    // Collect all components from all categories
    Object.values(Part29Components).forEach(category => {
        if (typeof category === 'object') {
            Object.values(category).forEach(subCategory => {
                if (Array.isArray(subCategory)) {
                    allComponents.push(...subCategory);
                }
            });
        }
    });
    
    return allComponents.find(component => 
        component.name.toLowerCase().includes(name.toLowerCase())
    );
}

// Export everything
export {
    Part29Components,
    getMaleHairComponents,
    getFemaleHairComponents,
    getFacialFeatureComponents,
    getMaleBodyComponents,
    getFemaleBodyComponents,
    getAllPart29Components,
    findComponentByName,
    
    // Re-export all individual functions for direct access
    addHighMultiLayeredLaserHair,
    addLayeredLaserEyes,
    addLongLaserHair,
    addWaveLaserMouth,
    addSparklingLaserHair,
    addWaveLaserSpikeHair,
    addStrongDoubleLaserEyes,
    addMeshLaserMouth,
    addExtendedLaserSpikeHair,
    addCurvedLaserHair,
    addSoftLuminousLaceHair,
    addLuminousWavyLaceHair,
    addMetallicCurlyLongHair,
    addShinyShortGlowHair,
    addMetallicShortHair,
    addSoftRadiantLongHair,
    addSparklingLaserFringe,
    addLuminousSilkyHair,
    addWaveLaceShortHair,
    addMetallicLongFringeHair,
    addBroadShoulders,
    addChest,
    addArmMuscles,
    addLongBack,
    addBalancedHips,
    addPowerfulChest,
    addGiantArms,
    addGlowingShoulders,
    addAngularBack,
    addTallBody,
    addGlowingArmMuscles,
    addLaserBack,
    addLaserChest,
    addSlimWaist,
    addFeminineChest,
    addCurvyHips,
    addElegantBack,
    addHighlightedWaist,
    addWideHips,
    addGracefulBack,
    addGlowingWaist,
    addRadiantRoundedHips,
    addGlowBack,
    addStarryWaist,
    addSparklingHips
};
