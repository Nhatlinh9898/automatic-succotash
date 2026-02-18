// Character Components Index - Part 25
// Main index file for all character component libraries
// This file provides easy access to all character creation components

// Import all component libraries
import {
    addVoluminousHair,
    addSilkyStraightHair,
    addCrystalEmbellishedHair,
    addGlowingLayeredHair,
    addGlitterLayeredHair,
    addCurvedShortHair,
    addStarGlowingEyes,
    addGlowingBraidedHair,
    addLayeredPonytail,
    addGentleGlowingHair,
    addBrightBraidedHair,
    addSoftGlowingWaves,
    addSubtleLayeredWaves,
    addSpecialCurlyHair,
    addIlluminatedStraightHair,
    addGlowingTwistedHair,
    addSparklingLayeredHair
} from './female_hair_components_part25.js';

import {
    addTopSpikeHair,
    addElevatedLayerHair,
    addLaserShortHair,
    addHighPartedHair,
    addLaserSpikeHair
} from './male_hair_components_part25.js';

import {
    addAngularFace,
    addMetalBrightEyes,
    addLaserOutlinedEyes,
    addLaserPatternEyes,
    addShimmeringOutlinedEyes,
    addEdgyEyes,
    addMeshPatternEyes,
    addBoldLips,
    addClassicMetallicLips,
    addMetalFramedMouth,
    addWavyMouth,
    addSmilingWideMouth,
    addTinyNose,
    addBlockyNose
} from './facial_features_part25.js';

import {
    addEngravedThinEars,
    addWavyEars,
    addMetallicSoftEars,
    addMetalDecoratedEars
} from './ear_components_part25.js';

import {
    addFlameBeard,
    addEngravedBeard,
    addSharpBeard
} from './beard_components_part25.js';

// Female Hair Components
export const femaleHair = {
    addVoluminousHair,
    addSilkyStraightHair,
    addCrystalEmbellishedHair,
    addGlowingLayeredHair,
    addGlitterLayeredHair,
    addCurvedShortHair,
    addStarGlowingEyes,
    addGlowingBraidedHair,
    addLayeredPonytail,
    addGentleGlowingHair,
    addBrightBraidedHair,
    addSoftGlowingWaves,
    addSubtleLayeredWaves,
    addSpecialCurlyHair,
    addIlluminatedStraightHair,
    addGlowingTwistedHair,
    addSparklingLayeredHair
};

// Male Hair Components
export const maleHair = {
    addTopSpikeHair,
    addElevatedLayerHair,
    addLaserShortHair,
    addHighPartedHair,
    addLaserSpikeHair
};

// Facial Features Components
export const facialFeatures = {
    // Face Shapes
    addAngularFace,
    
    // Eyes
    addMetalBrightEyes,
    addLaserOutlinedEyes,
    addLaserPatternEyes,
    addShimmeringOutlinedEyes,
    addEdgyEyes,
    addMeshPatternEyes,
    
    // Lips
    addBoldLips,
    addClassicMetallicLips,
    addMetalFramedMouth,
    addWavyMouth,
    addSmilingWideMouth,
    
    // Nose
    addTinyNose,
    addBlockyNose
};

// Ear Components
export const ears = {
    addEngravedThinEars,
    addWavyEars,
    addMetallicSoftEars,
    addMetalDecoratedEars
};

// Beard Components
export const beards = {
    addFlameBeard,
    addEngravedBeard,
    addSharpBeard
};

// Complete Component Library
export const characterComponents = {
    femaleHair,
    maleHair,
    facialFeatures,
    ears,
    beards
};

// Usage Examples:
/*
// Import specific components
import { femaleHair, maleHair, facialFeatures } from './character_components_index_part25.js';

// Use components
femaleHair.addVoluminousHair(character);
maleHair.addTopSpikeHair(character);
facialFeatures.addMetalBrightEyes(character);

// Or import all components
import { characterComponents } from './character_components_index_part25.js';

// Use all components
characterComponents.femaleHair.addGlowingLayeredHair(character);
characterComponents.facialFeatures.addBoldLips(character);
characterComponents.ears.addMetallicSoftEars(character);
characterComponents.beards.addFlameBeard(character);
*/
