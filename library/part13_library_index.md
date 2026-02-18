# Part 13 Library Index

This document indexes all the new functions added to the library from `part_13_corrected.js`.

## Categories Added

### 1. Jewelry & Accessories (`jewelry_accessories.js`)
- **addGlassPendant** (213) - Glass pendant with transparent material
- **addFloralCollar** (218) - Floral details on collar
- **addFloralBracelets** (220) - Flower-themed bracelets
- **addPearlDecorations** (230) - Pearl decorations for outfits
- **addPearlDecoratedBag** (248) - Bag with pearl decorations
- **addLightEarrings** (255) - Glowing earrings
- **addCrystalAnklets** (257) - Crystal anklets with lighting

### 2. LED & Lighting Effects (`led_lighting_effects.js`)
- **addMiniGlowingBag** (215) - Small bag with glowing effect
- **addSpiralLightSleeves** (216) - Spiral light patterns on sleeves
- **addGlowingNecklace** (221) - Necklace with glowing effect
- **addNeonHat** (225) - Hat with neon lighting
- **addLEDBacklight** (234) - LED backlight around waist
- **addLightStripsToSleevesNew** (240) - Light strips on sleeves
- **addGlowingTransparentLayer** (243) - Transparent glowing layer
- **addLaserWaistDetails** (245) - Laser details around waist
- **addLightStripsAtHem** (249) - Light strips at skirt hem
- **addLaserChoker** (251) - Laser-style choker
- **addSpiralLEDsToSkirtNew** (252) - Spiral LEDs on skirt

### 3. Decorative Details (`decorative_details.js`)
- **addSilkLayersToSkirt** (214) - Silk layer additions to skirts
- **addMetallicLayeredHeels** (217) - Metallic layered heel designs
- **addLongFurHemline** (219) - Fur trim at hemline
- **addLayeredSilkBands** (222) - Multiple silk band layers
- **addMetallicGloves** (223) - Metallic glove designs
- **addCrystalVerticalStrips** (224) - Vertical crystal strips
- **addTransparentSkirtLayer** (226) - Transparent skirt overlay
- **addMetalMeshEdges** (227) - Metal mesh edge details
- **addBackFloralDetails** (228) - Floral details on back
- **addCrystalShoes** (229) - Crystal-enhanced shoes
- **addBoldMetalBelt** (231) - Bold metal belt design
- **addFeatheredHat** (232) - Hat with feather decorations
- **addMetallicDetailsToHeels** (233) - Metallic details on heels
- **addLargeShoulderFlower** (235) - Large flower on shoulders
- **addCrystalCape** (236) - Cape with crystal effects
- **addSilkShoulderBand** (237) - Silk band across shoulders
- **addMultidimensionalSkirtLayer** (238) - Multi-layered skirt design
- **addLayeredCrystalHemline** (239) - Crystal layers at hemline
- **addWavyMetalStrips** (241) - Wavy metal strip decorations
- **addCopperButtons** (242) - Copper-colored buttons
- **addFeatherBorders** (244) - Feather border decorations
- **addLaceWristbands** (246) - Lace wristband details
- **addMultiLayeredCrystalNecklace** (247) - Multi-layer crystal necklace
- **addBoldMetalCollar** (250) - Bold metal collar design
- **addCrystalGloves** (253) - Crystal-enhanced gloves
- **addLayeredMetalEdges** (254) - Layered metal edge details
- **addCrystalWings** (256) - Crystal wing decorations

## Usage Examples

### Jewelry Usage
```javascript
import { addGlassPendant, addFloralBracelets } from './jewelry_accessories.js';

// Add glass pendant to outfit
addGlassPendant(outfit);

// Add floral bracelets
addFloralBracelets(outfit);
```

### Lighting Effects Usage
```javascript
import LEDLightingEffects from './led_lighting_effects.js';

const lighting = new LEDLightingEffects(scene);

// Add neon hat
lighting.addNeonHat(outfit);

// Add spiral light sleeves
lighting.addSpiralLightSleeves(outfit);
```

### Decorative Details Usage
```javascript
import DecorativeDetails from './decorative_details.js';

const details = new DecorativeDetails(scene);

// Add silk layers to skirt
details.addSilkLayersToSkirt(outfit);

// Add crystal cape
details.addCrystalCape(outfit);
```

## Function Numbering
Functions are numbered according to their original numbering in part_13_corrected.js (213-257).

## Materials and Effects
- **Lighting**: Functions use emissive materials with various intensities
- **Transparency**: Many functions include transparent/opacity properties
- **Metallic**: Metallic materials with adjustable roughness and metalness
- **Crystals**: Crystal effects with lighting and transparency
- **Silk**: Silk materials with transparency for flowing effects

## Integration Notes
All functions are designed to work with existing Three.js outfit objects and follow consistent positioning patterns for left/right symmetry where applicable.
