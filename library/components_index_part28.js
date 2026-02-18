// Components Index - Part 28
// Main index file for all character components from part 28

// Import male hair components
import {
    addMultiLayeredLaserHair,
    addHighLaserSpikeHair,
    addLaserOutlineHair,
    addMultiSpikeLaserHair,
    addTriangularLaserHair,
    addWavyLaserHair,
    addSquareTopLaserHair,
    addAngularLayeredLaserHair,
    addWaveLaserHair,
    addCircularLaserHeadband
} from './male_hair_components_part28.js';

// Import female hair components
import {
    addWavyRadiantHair,
    addSparklingLayeredLongHair,
    addCrystalDecoratedShortHair,
    addLuminousLaceHair,
    addElegantLongBraids,
    addShortLaceHair,
    addElegantFlowingHair,
    addLaserShortFemaleHair,
    addRadiantBraidedHair,
    addRadiantLaceLongHair,
    addSparklingWavyShortHair,
    addLuminousLaceCurls,
    addSoftGlowLongHair,
    addSparklingLongWavyHair,
    addShinyMetallicShortHair,
    addRadiantLongFringeHair,
    addSilkyLongHair
} from './female_hair_components_part28.js';

// Import facial features
import {
    addBoldLaserGlowEyes,
    addGlowingLaserMouth,
    addLaserMeshEyes,
    addMetalGlowLips,
    addLaserTipNose,
    addSquareLaserMouth,
    addThunderLaserEyes,
    addMeshGlowMouth,
    addDoubleLaserEyes,
    addCircularLaserMouth
} from './facial_features_part28.js';

// Import ear accessories
import {
    addLaserBeamEars,
    addShinyMetallicEars,
    addSoftGlowEars
} from './ear_accessories_part28.js';

// Export all components
export {
    // Male Hair Components (841-879)
    addMultiLayeredLaserHair,          // 841
    addHighLaserSpikeHair,             // 845
    addLaserOutlineHair,               // 849
    addMultiSpikeLaserHair,            // 851
    addTriangularLaserHair,             // 861
    addWavyLaserHair,                  // 867
    addSquareTopLaserHair,             // 869
    addAngularLayeredLaserHair,        // 871
    addWaveLaserHair,                  // 875
    addCircularLaserHeadband,           // 879
    
    // Female Hair Components (842-880)
    addWavyRadiantHair,                // 842
    addSparklingLayeredLongHair,       // 844
    addCrystalDecoratedShortHair,      // 846
    addLuminousLaceHair,               // 848
    addElegantLongBraids,              // 850
    addShortLaceHair,                  // 852
    addElegantFlowingHair,             // 856
    addLaserShortFemaleHair,           // 858
    addRadiantBraidedHair,             // 860
    addRadiantLaceLongHair,            // 862
    addSparklingWavyShortHair,         // 864
    addLuminousLaceCurls,              // 868
    addSoftGlowLongHair,               // 870
    addSparklingLongWavyHair,          // 872
    addShinyMetallicShortHair,         // 874
    addRadiantLongFringeHair,          // 876
    addSilkyLongHair,                  // 880
    
    // Facial Features (843-877)
    addBoldLaserGlowEyes,              // 843
    addGlowingLaserMouth,              // 847
    addLaserMeshEyes,                  // 853
    addMetalGlowLips,                  // 854
    addLaserTipNose,                   // 857
    addSquareLaserMouth,               // 859
    addThunderLaserEyes,               // 863
    addMeshGlowMouth,                  // 865
    addDoubleLaserEyes,                // 873
    addCircularLaserMouth,             // 877
    
    // Ear Accessories (855, 866, 878)
    addLaserBeamEars,                  // 855
    addShinyMetallicEars,              // 866
    addSoftGlowEars                    // 878
};

// Component categories for easy access
export const MaleHairComponents = {
    addMultiLayeredLaserHair,
    addHighLaserSpikeHair,
    addLaserOutlineHair,
    addMultiSpikeLaserHair,
    addTriangularLaserHair,
    addWavyLaserHair,
    addSquareTopLaserHair,
    addAngularLayeredLaserHair,
    addWaveLaserHair,
    addCircularLaserHeadband
};

export const FemaleHairComponents = {
    addWavyRadiantHair,
    addSparklingLayeredLongHair,
    addCrystalDecoratedShortHair,
    addLuminousLaceHair,
    addElegantLongBraids,
    addShortLaceHair,
    addElegantFlowingHair,
    addLaserShortFemaleHair,
    addRadiantBraidedHair,
    addRadiantLaceLongHair,
    addSparklingWavyShortHair,
    addLuminousLaceCurls,
    addSoftGlowLongHair,
    addSparklingLongWavyHair,
    addShinyMetallicShortHair,
    addRadiantLongFringeHair,
    addSilkyLongHair
};

export const FacialFeatures = {
    addBoldLaserGlowEyes,
    addGlowingLaserMouth,
    addLaserMeshEyes,
    addMetalGlowLips,
    addLaserTipNose,
    addSquareLaserMouth,
    addThunderLaserEyes,
    addMeshGlowMouth,
    addDoubleLaserEyes,
    addCircularLaserMouth
};

export const EarAccessories = {
    addLaserBeamEars,
    addShinyMetallicEars,
    addSoftGlowEars
};

// All components in one object
export const AllComponentsPart28 = {
    ...MaleHairComponents,
    ...FemaleHairComponents,
    ...FacialFeatures,
    ...EarAccessories
};
