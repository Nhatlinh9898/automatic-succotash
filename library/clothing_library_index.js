/**
 * Clothing Library Index - Three.js 3D Models
 * Main entry point for all clothing components
 * 
 * This file provides a unified interface to access all clothing categories:
 * - FormalWear: Wedding dresses, evening gowns, ballet dresses
 * - UniformsProfessional: Military, security, professional uniforms
 * - CasualSportWear: Swimwear, yoga outfits, casual clothing
 * - FantasyCostumes: Fairy costumes, carnival outfits, space suits
 * - UtilityWear: Rain gear, construction wear, work clothing
 * - AdvancedCostumes: High-fashion, special occasion, themed costumes
 * - ClothingAccessories: Wearable accessories and functional items
 * - DecorativeDetails: Decorative elements and embellishments
 */

// Import all clothing classes (for Node.js environments)
let FormalWear, UniformsProfessional, CasualSportWear, FantasyCostumes, UtilityWear;
let AdvancedCostumes, ClothingAccessories, DecorativeDetails;
let SpecialEffects, AdvancedAccessories, FuturisticElements;

if (typeof require !== 'undefined') {
    try {
        FormalWear = require('./formal_wear.js');
        UniformsProfessional = require('./uniforms_professional.js');
        CasualSportWear = require('./casual_sport_wear.js');
        FantasyCostumes = require('./fantasy_costumes.js');
        UtilityWear = require('./utility_wear.js');
        AdvancedCostumes = require('./advanced_costumes.js');
        ClothingAccessories = require('./clothing_accessories.js');
        DecorativeDetails = require('./decorative_details.js');
        SpecialEffects = require('./special_effects.js');
        AdvancedAccessories = require('./advanced_accessories.js');
        FuturisticElements = require('./futuristic_elements.js');
    } catch (e) {
        console.log('Modules not found, using global classes');
    }
}

/**
 * Main Clothing Library Manager
 */
class ClothingLibrary {
    constructor(scene) {
        this.scene = scene;
        
        // Initialize all clothing categories
        this.formalWear = new FormalWear(scene);
        this.uniformsProfessional = new UniformsProfessional(scene);
        this.casualSportWear = new CasualSportWear(scene);
        this.fantasyCostumes = new FantasyCostumes(scene);
        this.utilityWear = new UtilityWear(scene);
        this.advancedCostumes = new AdvancedCostumes(scene);
        this.clothingAccessories = new ClothingAccessories(scene);
        this.decorativeDetails = new DecorativeDetails(scene);
        this.specialEffects = new SpecialEffects(scene);
        this.advancedAccessories = new AdvancedAccessories(scene);
        this.futuristicElements = new FuturisticElements(scene);
    }

    // Formal Wear Methods
    createModernWeddingDress() {
        return this.formalWear.createModernWeddingDress();
    }

    createBlackWhiteFormalDress() {
        return this.formalWear.createBlackWhiteFormalDress();
    }

    createStarryNightGown() {
        return this.formalWear.createStarryNightGown();
    }

    createVintageEveningGown() {
        return this.formalWear.createVintageEveningGown();
    }

    createCrystalBallGown() {
        return this.formalWear.createCrystalBallGown();
    }

    createLayeredEveningDress() {
        return this.formalWear.createLayeredEveningDress();
    }

    createBalletDress() {
        return this.formalWear.createBalletDress();
    }

    // Uniform & Professional Wear Methods
    createGuardUniform() {
        return this.uniformsProfessional.createGuardUniform();
    }

    createNavyCaptainUniform() {
        return this.uniformsProfessional.createNavyCaptainUniform();
    }

    createRoyalKnightUniform() {
        return this.uniformsProfessional.createRoyalKnightUniform();
    }

    createSpecialForcesUniform() {
        return this.uniformsProfessional.createSpecialForcesUniform();
    }

    createLabCoatOutfit() {
        return this.uniformsProfessional.createLabCoatOutfit();
    }

    createMusicianOutfit() {
        return this.uniformsProfessional.createMusicianOutfit();
    }

    // Casual & Sport Wear Methods
    createTropicalSwimwear() {
        return this.casualSportWear.createTropicalSwimwear();
    }

    createYogaOutfit() {
        return this.casualSportWear.createYogaOutfit();
    }

    createPilotJacketOutfit() {
        return this.casualSportWear.createPilotJacketOutfit();
    }

    createExplorerOutfit() {
        return this.casualSportWear.createExplorerOutfit();
    }

    createRomanticGothicOutfit() {
        return this.casualSportWear.createRomanticGothicOutfit();
    }

    createPunkRockOutfit() {
        return this.casualSportWear.createPunkRockOutfit();
    }

    createKimonoOutfit() {
        return this.casualSportWear.createKimonoOutfit();
    }

    // Fantasy & Costume Methods
    createVRSuit() {
        return this.fantasyCostumes.createVRSuit();
    }

    createFairyCostume() {
        return this.fantasyCostumes.createFairyCostume();
    }

    createCarnivalCostume() {
        return this.fantasyCostumes.createCarnivalCostume();
    }

    createSpaceExplorerSuit() {
        return this.fantasyCostumes.createSpaceExplorerSuit();
    }

    // Utility Wear Methods
    createRainGear() {
        return this.utilityWear.createRainGear();
    }

    createConstructionWorkerGear() {
        return this.utilityWear.createConstructionWorkerGear();
    }

    createFishingOutfit() {
        return this.utilityWear.createFishingOutfit();
    }

    createGardenerOutfit() {
        return this.utilityWear.createGardenerOutfit();
    }

    // Advanced Costumes Methods
    createIcePrincessGown() {
        return this.advancedCostumes.createIcePrincessGown();
    }

    createRetroSpacesuit() {
        return this.advancedCostumes.createRetroSpacesuit();
    }

    createBoxingGear() {
        return this.advancedCostumes.createBoxingGear();
    }

    createWildflowerDress() {
        return this.advancedCostumes.createWildflowerDress();
    }

    createUrbanSportswear() {
        return this.advancedCostumes.createUrbanSportswear();
    }

    createPoliceUniform() {
        return this.advancedCostumes.createPoliceUniform();
    }

    createSamuraiArmor() {
        return this.advancedCostumes.createSamuraiArmor();
    }

    createMagicianOutfit() {
        return this.advancedCostumes.createMagicianOutfit();
    }

    createSummerBeachwear() {
        return this.advancedCostumes.createSummerBeachwear();
    }

    createHauteCoutureDress() {
        return this.advancedCostumes.createHauteCoutureDress();
    }

    // Accessories Methods
    addButtonsToOutfit(outfit) {
        return this.clothingAccessories.addButtonsToOutfit(outfit);
    }

    addNecklaceToOutfit(outfit) {
        return this.clothingAccessories.addNecklaceToOutfit(outfit);
    }

    addBeltToOutfit(outfit) {
        return this.clothingAccessories.addBeltToOutfit(outfit);
    }

    addHatToOutfit(outfit) {
        return this.clothingAccessories.addHatToOutfit(outfit);
    }

    addScarfToOutfit(outfit) {
        return this.clothingAccessories.addScarfToOutfit(outfit);
    }

    addBagToOutfit(outfit) {
        return this.clothingAccessories.addBagToOutfit(outfit);
    }

    addGlovesToOutfit(outfit) {
        return this.clothingAccessories.addGlovesToOutfit(outfit);
    }

    addWingsToOutfit(outfit) {
        return this.clothingAccessories.addWingsToOutfit(outfit);
    }

    addHighHeels(outfit) {
        return this.clothingAccessories.addHighHeels(outfit);
    }

    addSunglasses(outfit) {
        return this.clothingAccessories.addSunglasses(outfit);
    }

    addEarrings(outfit) {
        return this.clothingAccessories.addEarrings(outfit);
    }

    addBraceletsToOutfit(outfit) {
        return this.clothingAccessories.addBraceletsToOutfit(outfit);
    }

    addBowTieToOutfit(outfit) {
        return this.clothingAccessories.addBowTieToOutfit(outfit);
    }

    addBoutonniere(outfit) {
        return this.clothingAccessories.addBoutonniere(outfit);
    }

    addTrainToOutfit(outfit) {
        return this.clothingAccessories.addTrainToOutfit(outfit);
    }

    addSuspendersToOutfit(outfit) {
        return this.clothingAccessories.addSuspendersToOutfit(outfit);
    }

    addHairComb(outfit) {
        return this.clothingAccessories.addHairComb(outfit);
    }

    addFishnetStockings(outfit) {
        return this.clothingAccessories.addFishnetStockings(outfit);
    }

    addChainsToOutfit(outfit) {
        return this.clothingAccessories.addChainsToOutfit(outfit);
    }

    addRibbonsToOutfit(outfit) {
        return this.clothingAccessories.addRibbonsToOutfit(outfit);
    }

    // Decorative Details Methods
    addCrystalDecoration(outfit) {
        return this.decorativeDetails.addCrystalDecoration(outfit);
    }

    addEmbroideryToOutfit(outfit) {
        return this.decorativeDetails.addEmbroideryToOutfit(outfit);
    }

    addSparklingButtons(outfit) {
        return this.decorativeDetails.addSparklingButtons(outfit);
    }

    addDecorativeBelt(outfit) {
        return this.decorativeDetails.addDecorativeBelt(outfit);
    }

    addPatternsToOutfit(outfit) {
        return this.decorativeDetails.addPatternsToOutfit(outfit);
    }

    addFeathersToOutfit(outfit) {
        return this.decorativeDetails.addFeathersToOutfit(outfit);
    }

    addLEDStrips(outfit) {
        return this.decorativeDetails.addLEDStrips(outfit);
    }

    addZippersToOutfit(outfit) {
        return this.decorativeDetails.addZippersToOutfit(outfit);
    }

    addMirrorDetails(outfit) {
        return this.decorativeDetails.addMirrorDetails(outfit);
    }

    addBlinkingLights(outfit) {
        return this.decorativeDetails.addBlinkingLights(outfit);
    }

    addFramedWingsToOutfit(outfit) {
        return this.decorativeDetails.addFramedWingsToOutfit(outfit);
    }

    createStandalonePattern(position, color) {
        return this.decorativeDetails.createStandalonePattern(position, color);
    }

    createStandaloneCrystal(position, size) {
        return this.decorativeDetails.createStandaloneCrystal(position, size);
    }

    createStandaloneFeather(position, rotation) {
        return this.decorativeDetails.createStandaloneFeather(position, rotation);
    }

    createStandaloneLED(position, color) {
        return this.decorativeDetails.createStandaloneLED(position, color);
    }

    createStandaloneMirror(position) {
        return this.decorativeDetails.createStandaloneMirror(position);
    }

    addPatternedDecoration(outfit, count, radius, height) {
        return this.decorativeDetails.addPatternedDecoration(outfit, count, radius, height);
    }

    createAnimatedDecoration(type) {
        return this.decorativeDetails.createAnimatedDecoration(type);
    }

    // Additional methods from part_9_corrected.js - Jewelry Functions
    addHandJewels(outfit) {
        return this.decorativeDetails.addHandJewels ? this.decorativeDetails.addHandJewels(outfit) : null;
    }

    addCrownToOutfit(outfit) {
        return this.decorativeDetails.addCrownToOutfit ? this.decorativeDetails.addCrownToOutfit(outfit) : null;
    }

    addCrystalBracelets(outfit) {
        return this.decorativeDetails.addCrystalBracelets ? this.decorativeDetails.addCrystalBracelets(outfit) : null;
    }

    addGemstoneDetails(outfit) {
        return this.decorativeDetails.addGemstoneDetails ? this.decorativeDetails.addGemstoneDetails(outfit) : null;
    }

    addPendant(outfit) {
        return this.decorativeDetails.addPendant ? this.decorativeDetails.addPendant(outfit) : null;
    }

    addBeadedLines(outfit) {
        return this.decorativeDetails.addBeadedLines ? this.decorativeDetails.addBeadedLines(outfit) : null;
    }

    addWatchToOutfit(outfit) {
        return this.decorativeDetails.addWatchToOutfit ? this.decorativeDetails.addWatchToOutfit(outfit) : null;
    }

    // Additional decorative methods from part_9_corrected.js
    addCrystalEdges(outfit) {
        return this.decorativeDetails.addCrystalEdges ? this.decorativeDetails.addCrystalEdges(outfit) : null;
    }

    addLaserPatterns(outfit) {
        return this.decorativeDetails.addLaserPatterns ? this.decorativeDetails.addLaserPatterns(outfit) : null;
    }

    addBeadsToOutfit(outfit) {
        return this.decorativeDetails.addBeadsToOutfit ? this.decorativeDetails.addBeadsToOutfit(outfit) : null;
    }

    addHairPin(outfit) {
        return this.decorativeDetails.addHairPin ? this.decorativeDetails.addHairPin(outfit) : null;
    }

    addCrystalHairClip(outfit) {
        return this.decorativeDetails.addCrystalHairClip ? this.decorativeDetails.addCrystalHairClip(outfit) : null;
    }

    addVerticalChains(outfit) {
        return this.decorativeDetails.addVerticalChains ? this.decorativeDetails.addVerticalChains(outfit) : null;
    }

    addFeatherTrim(outfit) {
        return this.decorativeDetails.addFeatherTrim ? this.decorativeDetails.addFeatherTrim(outfit) : null;
    }

    addShoulderFlower(outfit) {
        return this.decorativeDetails.addShoulderFlower ? this.decorativeDetails.addShoulderFlower(outfit) : null;
    }

    addTexturedFabric(outfit) {
        return this.decorativeDetails.addTexturedFabric ? this.decorativeDetails.addTexturedFabric(outfit) : null;
    }

    addFlowerBrooch(outfit) {
        return this.decorativeDetails.addFlowerBrooch ? this.decorativeDetails.addFlowerBrooch(outfit) : null;
    }

    addReflectiveCoating(outfit) {
        return this.decorativeDetails.addReflectiveCoating ? this.decorativeDetails.addReflectiveCoating(outfit) : null;
    }

    addDecorativeStraps(outfit) {
        return this.decorativeDetails.addDecorativeStraps ? this.decorativeDetails.addDecorativeStraps(outfit) : null;
    }

    addLightHalo(outfit) {
        return this.decorativeDetails.addLightHalo ? this.decorativeDetails.addLightHalo(outfit) : null;
    }

    addMetalDetails(outfit) {
        return this.decorativeDetails.addMetalDetails ? this.decorativeDetails.addMetalDetails(outfit) : null;
    }

    addMiniChandeliers(outfit) {
        return this.decorativeDetails.addMiniChandeliers ? this.decorativeDetails.addMiniChandeliers(outfit) : null;
    }

    addWavePatterns(outfit) {
        return this.decorativeDetails.addWavePatterns ? this.decorativeDetails.addWavePatterns(outfit) : null;
    }

    addShadowBorders(outfit) {
        return this.decorativeDetails.addShadowBorders ? this.decorativeDetails.addShadowBorders(outfit) : null;
    }

    addMirrorPieces(outfit) {
        return this.decorativeDetails.addMirrorPieces ? this.decorativeDetails.addMirrorPieces(outfit) : null;
    }

    addLightHangingStraps(outfit) {
        return this.decorativeDetails.addLightHangingStraps ? this.decorativeDetails.addLightHangingStraps(outfit) : null;
    }

    addCrystalPatterns(outfit) {
        return this.decorativeDetails.addCrystalPatterns ? this.decorativeDetails.addCrystalPatterns(outfit) : null;
    }

    addGlitterEdges(outfit) {
        return this.decorativeDetails.addGlitterEdges ? this.decorativeDetails.addGlitterEdges(outfit) : null;
    }

    addMeshDetails(outfit) {
        return this.decorativeDetails.addMeshDetails ? this.decorativeDetails.addMeshDetails(outfit) : null;
    }

    addClassicPatterns(outfit) {
        return this.decorativeDetails.addClassicPatterns ? this.decorativeDetails.addClassicPatterns(outfit) : null;
    }

    addLaceTrim(outfit) {
        return this.decorativeDetails.addLaceTrim ? this.decorativeDetails.addLaceTrim(outfit) : null;
    }

    addWideBelts(outfit) {
        return this.decorativeDetails.addWideBelts ? this.decorativeDetails.addWideBelts(outfit) : null;
    }

    addGeometricPatterns(outfit) {
        return this.decorativeDetails.addGeometricPatterns ? this.decorativeDetails.addGeometricPatterns(outfit) : null;
    }

    addLightBorders(outfit) {
        return this.decorativeDetails.addLightBorders ? this.decorativeDetails.addLightBorders(outfit) : null;
    }

    addDecorativeGlasses(outfit) {
        return this.decorativeDetails.addDecorativeGlasses ? this.decorativeDetails.addDecorativeGlasses(outfit) : null;
    }

    addGlitteringWings(outfit) {
        return this.decorativeDetails.addGlitteringWings ? this.decorativeDetails.addGlitteringWings(outfit) : null;
    }

    addHeadband(outfit) {
        return this.decorativeDetails.addHeadband ? this.decorativeDetails.addHeadband(outfit) : null;
    }

    // Additional advanced costume methods from part_9_corrected.js
    addSashToOutfit(outfit) {
        return this.advancedCostumes.addSashToOutfit ? this.advancedCostumes.addSashToOutfit(outfit) : null;
    }

    addSilkBelt(outfit) {
        return this.advancedCostumes.addSilkBelt ? this.advancedCostumes.addSilkBelt(outfit) : null;
    }

    addShawlToOutfit(outfit) {
        return this.advancedCostumes.addShawlToOutfit ? this.advancedCostumes.addShawlToOutfit(outfit) : null;
    }

    addEngravingToArmor(outfit) {
        return this.advancedCostumes.addEngravingToArmor ? this.advancedCostumes.addEngravingToArmor(outfit) : null;
    }

    addFurCollar(outfit) {
        return this.advancedCostumes.addFurCollar ? this.advancedCostumes.addFurCollar(outfit) : null;
    }

    addHighBoots(outfit) {
        return this.advancedCostumes.addHighBoots ? this.advancedCostumes.addHighBoots(outfit) : null;
    }

    addMiniToolBag(outfit) {
        return this.advancedCostumes.addMiniToolBag ? this.advancedCostumes.addMiniToolBag(outfit) : null;
    }

    addLayeredTrain(outfit) {
        return this.advancedCostumes.addLayeredTrain ? this.advancedCostumes.addLayeredTrain(outfit) : null;
    }

    addDecorativeBow(outfit) {
        return this.advancedCostumes.addDecorativeBow ? this.advancedCostumes.addDecorativeBow(outfit) : null;
    }

    addRetroBag(outfit) {
        return this.advancedCostumes.addRetroBag ? this.advancedCostumes.addRetroBag(outfit) : null;
    }

    // Special Effects Methods
    addTransparentOverlay(outfit) {
        return this.specialEffects.addTransparentOverlay ? this.specialEffects.addTransparentOverlay(outfit) : null;
    }

    addNeonStrips(outfit) {
        return this.specialEffects.addNeonStrips ? this.specialEffects.addNeonStrips(outfit) : null;
    }

    addLEDClothEdges(outfit) {
        return this.specialEffects.addLEDClothEdges ? this.specialEffects.addLEDClothEdges(outfit) : null;
    }

    addCrystalHangingStrips(outfit) {
        return this.specialEffects.addCrystalHangingStrips ? this.specialEffects.addCrystalHangingStrips(outfit) : null;
    }

    addSpiralLEDs(outfit) {
        return this.specialEffects.addSpiralLEDs ? this.specialEffects.addSpiralLEDs(outfit) : null;
    }

    addNeonHemlines(outfit) {
        return this.specialEffects.addNeonHemlines ? this.specialEffects.addNeonHemlines(outfit) : null;
    }

    addVerticalLEDs(outfit) {
        return this.specialEffects.addVerticalLEDs ? this.specialEffects.addVerticalLEDs(outfit) : null;
    }

    addGlowButtons(outfit) {
        return this.specialEffects.addGlowButtons ? this.specialEffects.addGlowButtons(outfit) : null;
    }

    addCrystalWings(outfit) {
        return this.specialEffects.addCrystalWings ? this.specialEffects.addCrystalWings(outfit) : null;
    }

    addSatinEdges(outfit) {
        return this.specialEffects.addSatinEdges ? this.specialEffects.addSatinEdges(outfit) : null;
    }

    addCrystalTrims(outfit) {
        return this.specialEffects.addCrystalTrims ? this.specialEffects.addCrystalTrims(outfit) : null;
    }

    addCrystalMeshTrims(outfit) {
        return this.specialEffects.addCrystalMeshTrims ? this.specialEffects.addCrystalMeshTrims(outfit) : null;
    }

    // Advanced Accessories Methods
    addStatementNecklace(outfit) {
        return this.advancedAccessories.addStatementNecklace ? this.advancedAccessories.addStatementNecklace(outfit) : null;
    }

    addUniqueHeels(outfit) {
        return this.advancedAccessories.addUniqueHeels ? this.advancedAccessories.addUniqueHeels(outfit) : null;
    }

    addDecorativeCollar(outfit) {
        return this.advancedAccessories.addDecorativeCollar ? this.advancedAccessories.addDecorativeCollar(outfit) : null;
    }

    addDiamondDetails(outfit) {
        return this.advancedAccessories.addDiamondDetails ? this.advancedAccessories.addDiamondDetails(outfit) : null;
    }

    addLaceBorders(outfit) {
        return this.advancedAccessories.addLaceBorders ? this.advancedAccessories.addLaceBorders(outfit) : null;
    }

    addShoulderFeathers(outfit) {
        return this.advancedAccessories.addShoulderFeathers ? this.advancedAccessories.addShoulderFeathers(outfit) : null;
    }

    addWoodenButtons(outfit) {
        return this.advancedAccessories.addWoodenButtons ? this.advancedAccessories.addWoodenButtons(outfit) : null;
    }

    addLongTailToOutfit(outfit) {
        return this.advancedAccessories.addLongTailToOutfit ? this.advancedAccessories.addLongTailToOutfit(outfit) : null;
    }

    addElegantZippers(outfit) {
        return this.advancedAccessories.addElegantZippers ? this.advancedAccessories.addElegantZippers(outfit) : null;
    }

    addSymmetricalPatterns(outfit) {
        return this.advancedAccessories.addSymmetricalPatterns ? this.advancedAccessories.addSymmetricalPatterns(outfit) : null;
    }

    addMetallicCapeTrim(outfit) {
        return this.advancedAccessories.addMetallicCapeTrim ? this.advancedAccessories.addMetallicCapeTrim(outfit) : null;
    }

    addFurToSkirtHem(outfit) {
        return this.advancedAccessories.addFurToSkirtHem ? this.advancedAccessories.addFurToSkirtHem(outfit) : null;
    }

    addBeadsToSleeves(outfit) {
        return this.advancedAccessories.addBeadsToSleeves ? this.advancedAccessories.addBeadsToSleeves(outfit) : null;
    }

    addEmbroideredButtons(outfit) {
        return this.advancedAccessories.addEmbroideredButtons ? this.advancedAccessories.addEmbroideredButtons(outfit) : null;
    }

    addLayeredNecklace(outfit) {
        return this.advancedAccessories.addLayeredNecklace ? this.advancedAccessories.addLayeredNecklace(outfit) : null;
    }

    addGlassBracelets(outfit) {
        return this.advancedAccessories.addGlassBracelets ? this.advancedAccessories.addGlassBracelets(outfit) : null;
    }

    addMirrorAccents(outfit) {
        return this.advancedAccessories.addMirrorAccents ? this.advancedAccessories.addMirrorAccents(outfit) : null;
    }

    addShimmeringGemstones(outfit) {
        return this.advancedAccessories.addShimmeringGemstones ? this.advancedAccessories.addShimmeringGemstones(outfit) : null;
    }

    addSideBag(outfit) {
        return this.advancedAccessories.addSideBag ? this.advancedAccessories.addSideBag(outfit) : null;
    }

    addSmallBows(outfit) {
        return this.advancedAccessories.addSmallBows ? this.advancedAccessories.addSmallBows(outfit) : null;
    }

    addFurKneeDetail(outfit) {
        return this.advancedAccessories.addFurKneeDetail ? this.advancedAccessories.addFurKneeDetail(outfit) : null;
    }

    addLongFurCoat(outfit) {
        return this.advancedAccessories.addLongFurCoat ? this.advancedAccessories.addLongFurCoat(outfit) : null;
    }

    addCrystalGloves(outfit) {
        return this.advancedAccessories.addCrystalGloves ? this.advancedAccessories.addCrystalGloves(outfit) : null;
    }

    addPearlDetails(outfit) {
        return this.advancedAccessories.addPearlDetails ? this.advancedAccessories.addPearlDetails(outfit) : null;
    }

    addSheerShawl(outfit) {
        return this.advancedAccessories.addSheerShawl ? this.advancedAccessories.addSheerShawl(outfit) : null;
    }

    addLaceToSleeveEnds(outfit) {
        return this.advancedAccessories.addLaceToSleeveEnds ? this.advancedAccessories.addLaceToSleeveEnds(outfit) : null;
    }

    addCrystalButtons(outfit) {
        return this.advancedAccessories.addCrystalButtons ? this.advancedAccessories.addCrystalButtons(outfit) : null;
    }

    // Futuristic Elements Methods
    addTwistedMetal(outfit) {
        return this.futuristicElements.addTwistedMetal ? this.futuristicElements.addTwistedMetal(outfit) : null;
    }

    addDecorativeWraps(outfit) {
        return this.futuristicElements.addDecorativeWraps ? this.futuristicElements.addDecorativeWraps(outfit) : null;
    }

    addMetallicShirtEdges(outfit) {
        return this.futuristicElements.addMetallicShirtEdges ? this.futuristicElements.addMetallicShirtEdges(outfit) : null;
    }

    addShoulderStraps(outfit) {
        return this.futuristicElements.addShoulderStraps ? this.futuristicElements.addShoulderStraps(outfit) : null;
    }

    addMetallicSkirtLines(outfit) {
        return this.futuristicElements.addMetallicSkirtLines ? this.futuristicElements.addMetallicSkirtLines(outfit) : null;
    }

    addCrystalShoulderStraps(outfit) {
        return this.futuristicElements.addCrystalShoulderStraps ? this.futuristicElements.addCrystalShoulderStraps(outfit) : null;
    }

    addMetalBelt(outfit) {
        return this.futuristicElements.addMetalBelt ? this.futuristicElements.addMetalBelt(outfit) : null;
    }

    addRibbonTwistToSkirt(outfit) {
        return this.futuristicElements.addRibbonTwistToSkirt ? this.futuristicElements.addRibbonTwistToSkirt(outfit) : null;
    }

    // New functions from part_10_corrected.js - Decorative Details
    addTransparentOverlay(outfit) {
        return this.decorativeDetails.addTransparentOverlay ? this.decorativeDetails.addTransparentOverlay(outfit) : null;
    }

    addTwistedMetal(outfit) {
        return this.decorativeDetails.addTwistedMetal ? this.decorativeDetails.addTwistedMetal(outfit) : null;
    }

    addWoodenButtons(outfit) {
        return this.decorativeDetails.addWoodenButtons ? this.decorativeDetails.addWoodenButtons(outfit) : null;
    }

    addDecorativeCollar(outfit) {
        return this.decorativeDetails.addDecorativeCollar ? this.decorativeDetails.addDecorativeCollar(outfit) : null;
    }

    addDiamondDetails(outfit) {
        return this.decorativeDetails.addDiamondDetails ? this.decorativeDetails.addDiamondDetails(outfit) : null;
    }

    addLaceBorders(outfit) {
        return this.decorativeDetails.addLaceBorders ? this.decorativeDetails.addLaceBorders(outfit) : null;
    }

    addShoulderFeathers(outfit) {
        return this.decorativeDetails.addShoulderFeathers ? this.decorativeDetails.addShoulderFeathers(outfit) : null;
    }

    addElegantZippers(outfit) {
        return this.decorativeDetails.addElegantZippers ? this.decorativeDetails.addElegantZippers(outfit) : null;
    }

    addSymmetricalPatterns(outfit) {
        return this.decorativeDetails.addSymmetricalPatterns ? this.decorativeDetails.addSymmetricalPatterns(outfit) : null;
    }

    addBeadsToSleeves(outfit) {
        return this.decorativeDetails.addBeadsToSleeves ? this.decorativeDetails.addBeadsToSleeves(outfit) : null;
    }

    addEmbroideredButtons(outfit) {
        return this.decorativeDetails.addEmbroideredButtons ? this.decorativeDetails.addEmbroideredButtons(outfit) : null;
    }

    addSatinEdges(outfit) {
        return this.decorativeDetails.addSatinEdges ? this.decorativeDetails.addSatinEdges(outfit) : null;
    }

    addDecorativeWraps(outfit) {
        return this.decorativeDetails.addDecorativeWraps ? this.decorativeDetails.addDecorativeWraps(outfit) : null;
    }

    addMetallicShirtEdges(outfit) {
        return this.decorativeDetails.addMetallicShirtEdges ? this.decorativeDetails.addMetallicShirtEdges(outfit) : null;
    }

    addShoulderStraps(outfit) {
        return this.decorativeDetails.addShoulderStraps ? this.decorativeDetails.addShoulderStraps(outfit) : null;
    }

    addShimmeringGemstones(outfit) {
        return this.decorativeDetails.addShimmeringGemstones ? this.decorativeDetails.addShimmeringGemstones(outfit) : null;
    }

    addFurKneeDetail(outfit) {
        return this.decorativeDetails.addFurKneeDetail ? this.decorativeDetails.addFurKneeDetail(outfit) : null;
    }

    addLaceToSleeveEnds(outfit) {
        return this.decorativeDetails.addLaceToSleeveEnds ? this.decorativeDetails.addLaceToSleeveEnds(outfit) : null;
    }

    addSheerShawl(outfit) {
        return this.decorativeDetails.addSheerShawl ? this.decorativeDetails.addSheerShawl(outfit) : null;
    }

    addPearlDetails(outfit) {
        return this.decorativeDetails.addPearlDetails ? this.decorativeDetails.addPearlDetails(outfit) : null;
    }

    addSmallBows(outfit) {
        return this.decorativeDetails.addSmallBows ? this.decorativeDetails.addSmallBows(outfit) : null;
    }

    addCrystalMeshTrims(outfit) {
        return this.decorativeDetails.addCrystalMeshTrims ? this.decorativeDetails.addCrystalMeshTrims(outfit) : null;
    }

    // New functions from part_10_corrected.js - Clothing Accessories
    addStatementNecklace(outfit) {
        return this.clothingAccessories.addStatementNecklace ? this.clothingAccessories.addStatementNecklace(outfit) : null;
    }

    addLayeredNecklace(outfit) {
        return this.clothingAccessories.addLayeredNecklace ? this.clothingAccessories.addLayeredNecklace(outfit) : null;
    }

    addGlassBracelets(outfit) {
        return this.clothingAccessories.addGlassBracelets ? this.clothingAccessories.addGlassBracelets(outfit) : null;
    }

    addSideBag(outfit) {
        return this.clothingAccessories.addSideBag ? this.clothingAccessories.addSideBag(outfit) : null;
    }

    addCrystalGloves(outfit) {
        return this.clothingAccessories.addCrystalGloves ? this.clothingAccessories.addCrystalGloves(outfit) : null;
    }

    addCrystalButtons(outfit) {
        return this.clothingAccessories.addCrystalButtons ? this.clothingAccessories.addCrystalButtons(outfit) : null;
    }

    addCrystalShoulderStraps(outfit) {
        return this.clothingAccessories.addCrystalShoulderStraps ? this.clothingAccessories.addCrystalShoulderStraps(outfit) : null;
    }

    addUniqueHeels(outfit) {
        return this.clothingAccessories.addUniqueHeels ? this.clothingAccessories.addUniqueHeels(outfit) : null;
    }

    addMetallicSkirtLines(outfit) {
        return this.clothingAccessories.addMetallicSkirtLines ? this.clothingAccessories.addMetallicSkirtLines(outfit) : null;
    }

    // New functions from part_10_corrected.js - Special Effects
    addCrystalHangingStrips(outfit) {
        return this.specialEffects.addCrystalHangingStrips ? this.specialEffects.addCrystalHangingStrips(outfit) : null;
    }

    addNeonHemlines(outfit) {
        return this.specialEffects.addNeonHemlines ? this.specialEffects.addNeonHemlines(outfit) : null;
    }

    addSpiralLEDs(outfit) {
        return this.specialEffects.addSpiralLEDs ? this.specialEffects.addSpiralLEDs(outfit) : null;
    }

    addMirrorAccents(outfit) {
        return this.specialEffects.addMirrorAccents ? this.specialEffects.addMirrorAccents(outfit) : null;
    }

    addGlowButtons(outfit) {
        return this.specialEffects.addGlowButtons ? this.specialEffects.addGlowButtons(outfit) : null;
    }

    addVerticalLEDs(outfit) {
        return this.specialEffects.addVerticalLEDs ? this.specialEffects.addVerticalLEDs(outfit) : null;
    }

    // New functions from part_10_corrected.js - Advanced Costumes
    addLongTailToOutfit(outfit) {
        return this.advancedCostumes.addLongTailToOutfit ? this.advancedCostumes.addLongTailToOutfit(outfit) : null;
    }

    addMetallicCapeTrim(outfit) {
        return this.advancedCostumes.addMetallicCapeTrim ? this.advancedCostumes.addMetallicCapeTrim(outfit) : null;
    }

    addFurToSkirtHem(outfit) {
        return this.advancedCostumes.addFurToSkirtHem ? this.advancedCostumes.addFurToSkirtHem(outfit) : null;
    }

    addCrystalWings(outfit) {
        return this.advancedCostumes.addCrystalWings ? this.advancedCostumes.addCrystalWings(outfit) : null;
    }

    addLongFurCoat(outfit) {
        return this.advancedCostumes.addLongFurCoat ? this.advancedCostumes.addLongFurCoat(outfit) : null;
    }

    // New functions from part_11_corrected.js - Decorative Details
    addLayeredStraps(outfit) {
        return this.decorativeDetails.addLayeredStraps ? this.decorativeDetails.addLayeredStraps(outfit) : null;
    }

    addGlitterPatterns(outfit) {
        return this.decorativeDetails.addGlitterPatterns ? this.decorativeDetails.addGlitterPatterns(outfit) : null;
    }

    addBackStraps(outfit) {
        return this.decorativeDetails.addBackStraps ? this.decorativeDetails.addBackStraps(outfit) : null;
    }

    addLaceCollar(outfit) {
        return this.decorativeDetails.addLaceCollar ? this.decorativeDetails.addLaceCollar(outfit) : null;
    }

    addFlowerDecorations(outfit) {
        return this.decorativeDetails.addFlowerDecorations ? this.decorativeDetails.addFlowerDecorations(outfit) : null;
    }

    addLayeredMetalStrips(outfit) {
        return this.decorativeDetails.addLayeredMetalStrips ? this.decorativeDetails.addLayeredMetalStrips(outfit) : null;
    }

    addArmBands(outfit) {
        return this.decorativeDetails.addArmBands ? this.decorativeDetails.addArmBands(outfit) : null;
    }

    addPearlHemline(outfit) {
        return this.decorativeDetails.addPearlHemline ? this.decorativeDetails.addPearlHemline(outfit) : null;
    }

    addMetallicStraps(outfit) {
        return this.decorativeDetails.addMetallicStraps ? this.decorativeDetails.addMetallicStraps(outfit) : null;
    }

    addVerticalRibbons(outfit) {
        return this.decorativeDetails.addVerticalRibbons ? this.decorativeDetails.addVerticalRibbons(outfit) : null;
    }

    addShoulderFurTrim(outfit) {
        return this.decorativeDetails.addShoulderFurTrim ? this.decorativeDetails.addShoulderFurTrim(outfit) : null;
    }

    addFeatherCuffs(outfit) {
        return this.decorativeDetails.addFeatherCuffs ? this.decorativeDetails.addFeatherCuffs(outfit) : null;
    }

    addCrystalLinesOnSkirt(outfit) {
        return this.decorativeDetails.addCrystalLinesOnSkirt ? this.decorativeDetails.addCrystalLinesOnSkirt(outfit) : null;
    }

    addMetallicSleeves(outfit) {
        return this.decorativeDetails.addMetallicSleeves ? this.decorativeDetails.addMetallicSleeves(outfit) : null;
    }

    addEmbossedPatterns(outfit) {
        return this.decorativeDetails.addEmbossedPatterns ? this.decorativeDetails.addEmbossedPatterns(outfit) : null;
    }

    addFeatherHemline(outfit) {
        return this.decorativeDetails.addFeatherHemline ? this.decorativeDetails.addFeatherHemline(outfit) : null;
    }

    addFrostedBorders(outfit) {
        return this.decorativeDetails.addFrostedBorders ? this.decorativeDetails.addFrostedBorders(outfit) : null;
    }

    // New functions from part_11_corrected.js - Clothing Accessories
    addWideBracelets(outfit) {
        return this.clothingAccessories.addWideBracelets ? this.clothingAccessories.addWideBracelets(outfit) : null;
    }

    addSunNecklace(outfit) {
        return this.clothingAccessories.addSunNecklace ? this.clothingAccessories.addSunNecklace(outfit) : null;
    }

    addSparklingEarrings(outfit) {
        return this.clothingAccessories.addSparklingEarrings ? this.clothingAccessories.addSparklingEarrings(outfit) : null;
    }

    addCrystalChoker(outfit) {
        return this.clothingAccessories.addCrystalChoker ? this.clothingAccessories.addCrystalChoker(outfit) : null;
    }

    addLayeredPearls(outfit) {
        return this.clothingAccessories.addLayeredPearls ? this.clothingAccessories.addLayeredPearls(outfit) : null;
    }

    addShoulderChains(outfit) {
        return this.clothingAccessories.addShoulderChains ? this.clothingAccessories.addShoulderChains(outfit) : null;
    }

    // New functions from part_11_corrected.js - Special Effects
    addSpiralLEDsToOutfit(outfit) {
        return this.specialEffects.addSpiralLEDsToOutfit ? this.specialEffects.addSpiralLEDsToOutfit(outfit) : null;
    }

    addLEDStripsToSleeves(outfit) {
        return this.specialEffects.addLEDStripsToSleeves ? this.specialEffects.addLEDStripsToSleeves(outfit) : null;
    }

    addLaserDetails(outfit) {
        return this.specialEffects.addLaserDetails ? this.specialEffects.addLaserDetails(outfit) : null;
    }

    addShoulderLights(outfit) {
        return this.specialEffects.addShoulderLights ? this.specialEffects.addShoulderLights(outfit) : null;
    }

    addDiagonalLEDStrips(outfit) {
        return this.specialEffects.addDiagonalLEDStrips ? this.specialEffects.addDiagonalLEDStrips(outfit) : null;
    }

    addSkirtLEDs(outfit) {
        return this.specialEffects.addSkirtLEDs ? this.specialEffects.addSkirtLEDs(outfit) : null;
    }

    addSleeveLEDs(outfit) {
        return this.specialEffects.addSleeveLEDs ? this.specialEffects.addSleeveLEDs(outfit) : null;
    }

    addLightMeshToOutfit(outfit) {
        return this.specialEffects.addLightMeshToOutfit ? this.specialEffects.addLightMeshToOutfit(outfit) : null;
    }

    addLaserPatterns(outfit) {
        return this.specialEffects.addLaserPatterns ? this.specialEffects.addLaserPatterns(outfit) : null;
    }

    addNeonLaserDetails(outfit) {
        return this.specialEffects.addNeonLaserDetails ? this.specialEffects.addNeonLaserDetails(outfit) : null;
    }

    addSparklingLEDHemline(outfit) {
        return this.specialEffects.addSparklingLEDHemline ? this.specialEffects.addSparklingLEDHemline(outfit) : null;
    }

    addLightEdgesToSkirt(outfit) {
        return this.specialEffects.addLightEdgesToSkirt ? this.specialEffects.addLightEdgesToSkirt(outfit) : null;
    }

    addContinuousLEDStrip(outfit) {
        return this.specialEffects.addContinuousLEDStrip ? this.specialEffects.addContinuousLEDStrip(outfit) : null;
    }

    // New functions from part_11_corrected.js - Advanced Costumes
    addCrystalHeels(outfit) {
        return this.advancedCostumes.addCrystalHeels ? this.advancedCostumes.addCrystalHeels(outfit) : null;
    }

    addMetallicHeels(outfit) {
        return this.advancedCostumes.addMetallicHeels ? this.advancedCostumes.addMetallicHeels(outfit) : null;
    }

    addCrystalSkirtTail(outfit) {
        return this.advancedCostumes.addCrystalSkirtTail ? this.advancedCostumes.addCrystalSkirtTail(outfit) : null;
    }

    addLayeredCrystalEdges(outfit) {
        return this.advancedCostumes.addLayeredCrystalEdges ? this.advancedCostumes.addLayeredCrystalEdges(outfit) : null;
    }

    addLayeredCrystalLines(outfit) {
        return this.advancedCostumes.addLayeredCrystalLines ? this.advancedCostumes.addLayeredCrystalLines(outfit) : null;
    }

    addCrystalBackStraps(outfit) {
        return this.advancedCostumes.addCrystalBackStraps ? this.advancedCostumes.addCrystalBackStraps(outfit) : null;
    }

    addGlitterHairClip(outfit) {
        return this.advancedCostumes.addGlitterHairClip ? this.advancedCostumes.addGlitterHairClip(outfit) : null;
    }

    /**
     * Get all available clothing methods by category
     */
    getAllCategories() {
        return {
            formal: [
                'createModernWeddingDress',
                'createBlackWhiteFormalDress',
                'createStarryNightGown',
                'createVintageEveningGown',
                'createCrystalBallGown',
                'createLayeredEveningDress',
                'createBalletDress'
            ],
            uniforms: [
                'createGuardUniform',
                'createNavyCaptainUniform',
                'createRoyalKnightUniform',
                'createSpecialForcesUniform',
                'createLabCoatOutfit',
                'createMusicianOutfit'
            ],
            casual: [
                'createTropicalSwimwear',
                'createYogaOutfit',
                'createPilotJacketOutfit',
                'createExplorerOutfit',
                'createRomanticGothicOutfit',
                'createPunkRockOutfit',
                'createKimonoOutfit'
            ],
            fantasy: [
                'createVRSuit',
                'createFairyCostume',
                'createCarnivalCostume',
                'createSpaceExplorerSuit'
            ],
            utility: [
                'createRainGear',
                'createConstructionWorkerGear',
                'createFishingOutfit',
                'createGardenerOutfit'
            ],
            advanced: [
                'createIcePrincessGown',
                'createRetroSpacesuit',
                'createBoxingGear',
                'createWildflowerDress'
            ]
        }
    }
    createClothing(methodName, position = { x: 0, y: 0, z: 0 }) {
        if (typeof this[methodName] === 'function') {
            const clothing = this[methodName]();
            clothing.position.set(position.x, position.y, position.z);
            this.scene.add(clothing);
            return clothing;
        } else {
            console.error(`Method ${methodName} not found in ClothingLibrary`);
            return null;
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingLibrary;
}

// Also export individual classes for direct access
if (typeof module !== 'undefined' && module.exports) {
    module.exports.FormalWear = FormalWear;
    module.exports.UniformsProfessional = UniformsProfessional;
    module.exports.CasualSportWear = CasualSportWear;
    module.exports.FantasyCostumes = FantasyCostumes;
    module.exports.UtilityWear = UtilityWear;
    module.exports.AdvancedCostumes = AdvancedCostumes;
    module.exports.ClothingAccessories = ClothingAccessories;
    module.exports.DecorativeDetails = DecorativeDetails;
}
