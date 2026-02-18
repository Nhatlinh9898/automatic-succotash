// Components Index - Part 27
// This file indexes all library components created from part_27_corrected.js

// Import female hair components
const femaleHairComponents = require('./female_hair_components_part27.js');

// Import male hair components  
const maleHairComponents = require('./male_hair_components_part27.js');

// Import facial features components
const facialFeaturesComponents = require('./facial_features_part27.js');

// Import ear accessories components
const earAccessoriesComponents = require('./ear_accessories_part27.js');

// Export all components as a unified object
const allComponents = {
    // Female Hair Components
    femaleHair: {
        addSquareLaserHair: femaleHairComponents.addSquareLaserHair,
        addAngularShortFemaleHair: femaleHairComponents.addAngularShortFemaleHair,
        addShimmeringBraidedHair: femaleHairComponents.addShimmeringBraidedHair,
        addMetallicLongHair: femaleHairComponents.addMetallicLongHair,
        addFluffyShortHair: femaleHairComponents.addFluffyShortHair,
        addHighPonytail: femaleHairComponents.addHighPonytail,
        addLaceLongHair: femaleHairComponents.addLaceLongHair,
        addShimmeringMetallicLips: femaleHairComponents.addShimmeringMetallicLips,
        addGlowingLayeredFemaleHair: femaleHairComponents.addGlowingLayeredFemaleHair,
        addRadiantCurlyHair: femaleHairComponents.addRadiantCurlyHair,
        addMetallicFemaleLongHair: femaleHairComponents.addMetallicFemaleLongHair,
        addRadiantPonytail: femaleHairComponents.addRadiantPonytail,
        addSparklingLongHair: femaleHairComponents.addSparklingLongHair,
        addAngularShortHair: femaleHairComponents.addAngularShortHair,
        addCrystalEar: femaleHairComponents.addCrystalEar,
        addRadiantLayeredHair: femaleHairComponents.addRadiantLayeredHair,
        addRadiantLongCurlyHair: femaleHairComponents.addRadiantLongCurlyHair,
        addVoluminousLayeredHair: femaleHairComponents.addVoluminousLayeredHair,
        addPetalGlowLips: femaleHairComponents.addPetalGlowLips,
        addSilkyCurlyHair: femaleHairComponents.addSilkyCurlyHair,
        addLaserLayeredFemaleHair: femaleHairComponents.addLaserLayeredFemaleHair
    },
    
    // Male Hair Components
    maleHair: {
        addBoldLaserSpikeHair: maleHairComponents.addBoldLaserSpikeHair,
        addWavyMaleLongHair: maleHairComponents.addWavyMaleLongHair,
        addEdgyNose: maleHairComponents.addEdgyNose,
        addLayeredLaserHair: maleHairComponents.addLayeredLaserHair,
        addMetalFramedLaserEyes: maleHairComponents.addMetalFramedLaserEyes,
        addAngularMetalHair: maleHairComponents.addAngularMetalHair,
        addSquareLightEyes: maleHairComponents.addSquareLightEyes,
        addMetalShinyMouth: maleHairComponents.addMetalShinyMouth,
        addHighLayeredLaserHair: maleHairComponents.addHighLayeredLaserHair,
        addLaserPointNose: maleHairComponents.addLaserPointNose,
        addLaserRayEyes: maleHairComponents.addLaserRayEyes,
        addBoldLaserMouth: maleHairComponents.addBoldLaserMouth,
        addFluffyMaleHair: maleHairComponents.addFluffyMaleHair,
        addGlowFramedMouth: maleHairComponents.addGlowFramedMouth,
        addMetallicGlowHair: maleHairComponents.addMetallicGlowHair,
        addLaserEars: maleHairComponents.addLaserEars,
        addMetallicSparklingEyes: maleHairComponents.addMetallicSparklingEyes,
        addLaserConeHair: maleHairComponents.addLaserConeHair
    },
    
    // Facial Features Components
    facialFeatures: {
        addSwirlingLaserEyes: facialFeaturesComponents.addSwirlingLaserEyes,
        addLaserOutlinedLips: facialFeaturesComponents.addLaserOutlinedLips,
        addBoldLaserEyes: facialFeaturesComponents.addBoldLaserEyes,
        addMetalFramedLaserEyes: facialFeaturesComponents.addMetalFramedLaserEyes,
        addSquareLightEyes: facialFeaturesComponents.addSquareLightEyes,
        addMetalShinyMouth: facialFeaturesComponents.addMetalShinyMouth,
        addLaserPointNose: facialFeaturesComponents.addLaserPointNose,
        addLaserRayEyes: facialFeaturesComponents.addLaserRayEyes,
        addBoldLaserMouth: facialFeaturesComponents.addBoldLaserMouth,
        addGlowFramedMouth: facialFeaturesComponents.addGlowFramedMouth,
        addMetallicSparklingEyes: facialFeaturesComponents.addMetallicSparklingEyes,
        addEdgyNose: facialFeaturesComponents.addEdgyNose
    },
    
    // Ear Accessories Components
    earAccessories: {
        addCrystalEar: earAccessoriesComponents.addCrystalEar,
        addLaserEars: earAccessoriesComponents.addLaserEars
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allComponents;
}

// Also provide global access for browser usage
if (typeof window !== 'undefined') {
    window.CharacterComponentsPart27 = allComponents;
}

// Component categories summary
console.log('Part 27 Components Loaded:');
console.log('- Female Hair Components: 21 functions');
console.log('- Male Hair Components: 17 functions');
console.log('- Facial Features Components: 12 functions');
console.log('- Ear Accessories Components: 2 functions');
console.log('Total: 52 component functions');
