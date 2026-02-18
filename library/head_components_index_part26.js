// Head Components Index - Part 26
// Main index file for all head components from part_26_corrected.js
// This file provides easy access to all male and female head components

// Import male components
// Note: In a real implementation, you would use require() or import statements
// For now, these are references to the component files

/**
 * Male Nose Components
 * - addFlameShapedNose: Flame-shaped nose for sharp appearance
 * - addMetallicNose: Metallic nose with futuristic shine
 * - addTriangularNose: Triangular nose for angular look
 */
const MaleNoseComponents = {
    addFlameShapedNose,
    addMetallicNose,
    addTriangularNose
};

/**
 * Male Ear Components
 * - addTriangularPatternEars: Triangular ears for strong appearance
 * - addDefinedEars: Square-shaped ears for bold look
 * - addBoldLaserEars: Laser ears with green glow
 * - addGlowingToughEars: Cyan glowing ears
 */
const MaleEarComponents = {
    addTriangularPatternEars,
    addDefinedEars,
    addBoldLaserEars,
    addGlowingToughEars
};

/**
 * Male Eye Components
 * - addSquareShapedEyes: Square eyes for unique appearance
 * - addMetalBrightEyes: Metallic eyes with futuristic shine
 * - addLaserSquareEyes: Red glowing square eyes
 * - addFlamingEyes: Fire-like glowing eyes
 * - addOvalShapeEyes: Oval-shaped eyes for stylish look
 * - addHexagonShapedEyes: Hexagon eyes for geometric appearance
 */
const MaleEyeComponents = {
    addSquareShapedEyes,
    addMetalBrightEyes,
    addLaserSquareEyes,
    addFlamingEyes,
    addOvalShapeEyes,
    addHexagonShapedEyes
};

/**
 * Male Mouth Components
 * - addSharpMouth: Sharp mouth for confident appearance
 * - addLaserMouth: Red glowing laser mouth
 */
const MaleMouthComponents = {
    addSharpMouth,
    addLaserMouth
};

/**
 * Male Hair Components
 * - addMeshSpikeHair: Wireframe spike hair
 * - addMetalSpikeHair: Metallic spike hair
 * - addBlockyHair: Blocky angular hair
 * - addAngularShortHair: Short hair with sharp edges
 * - addLongStraightMaleHair: Long flowing hair
 * - addLaserWaveHair: Cyan glowing wave hair
 */
const MaleHairComponents = {
    addMeshSpikeHair,
    addMetalSpikeHair,
    addBlockyHair,
    addAngularShortHair,
    addLongStraightMaleHair,
    addLaserWaveHair
};

/**
 * Male Beard Components
 * - addMinimalBeard: Minimal outlined beard
 */
const MaleBeardComponents = {
    addMinimalBeard
};

/**
 * Female Eye Components
 * - addLaserGlowingEyes: Red glowing laser eyes
 * - addLaserOutlinedEyes: Red outlined laser eyes
 */
const FemaleEyeComponents = {
    addLaserGlowingEyes,
    addLaserOutlinedEyes
};

/**
 * Female Lips Components
 * - addPetalShapedLips: Delicate petal-shaped lips
 * - addLaserLightLips: Subtle red glowing lips
 * - addStarryLips: Sparkling pink lips
 * - addBoldRedLips: Bold red lips
 */
const FemaleLipsComponents = {
    addPetalShapedLips,
    addLaserLightLips,
    addStarryLips,
    addBoldRedLips
};

/**
 * Female Ear Components
 * - addLaceShimmeringEars: Delicate lace-pattern ears
 */
const FemaleEarComponents = {
    addLaceShimmeringEars
};

/**
 * Female Hair Components
 * - addBoldShortCurls: Natural short curls
 * - addWavyGlowingHair: Coral glowing waves
 * - addHalfUpHair: Graceful half-up style
 * - addShortGlowingHair: Soft pink glowing short hair
 * - addBrightLongTailHair: Mystical long tail hair
 * - addCircularLayeredHair: Modern circular layers
 * - addCrystalDecoratedHair: Magical crystal details
 * - addShimmeringShortCurls: Luxurious shimmering curls
 * - addRadiantBraidedHair: Graceful pink braids
 * - addGentleWavyLayerHair: Soft feminine waves
 * - addElegantBraids: Classic sophisticated braids
 * - addRadiantWavyHair: Magical pink waves
 * - addIntricateBraidedHair: Elegant detailed braids
 */
const FemaleHairComponents = {
    addBoldShortCurls,
    addWavyGlowingHair,
    addHalfUpHair,
    addShortGlowingHair,
    addBrightLongTailHair,
    addCircularLayeredHair,
    addCrystalDecoratedHair,
    addShimmeringShortCurls,
    addRadiantBraidedHair,
    addGentleWavyLayerHair,
    addElegantBraids,
    addRadiantWavyHair,
    addIntricateBraidedHair
};

/**
 * Complete collection of all head components from part 26
 */
const HeadComponentsPart26 = {
    male: {
        nose: MaleNoseComponents,
        ears: MaleEarComponents,
        eyes: MaleEyeComponents,
        mouth: MaleMouthComponents,
        hair: MaleHairComponents,
        beard: MaleBeardComponents
    },
    female: {
        eyes: FemaleEyeComponents,
        lips: FemaleLipsComponents,
        ears: FemaleEarComponents,
        hair: FemaleHairComponents
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HeadComponentsPart26,
        MaleNoseComponents,
        MaleEarComponents,
        MaleEyeComponents,
        MaleMouthComponents,
        MaleHairComponents,
        MaleBeardComponents,
        FemaleEyeComponents,
        FemaleLipsComponents,
        FemaleEarComponents,
        FemaleHairComponents
    };
}

// Global access for browser usage
if (typeof window !== 'undefined') {
    window.HeadComponentsPart26 = HeadComponentsPart26;
}
