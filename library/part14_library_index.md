# Part 14 Library Index

This document indexes all new functions added to library from `part_14_corrected.js`.

## Categories Added

### 1. Lace & Fabric Details (`decorative_details.js`)
- **addLaceTrims** (258) - White lace trims for hemlines
- **addLongFabricOverlay** (259) - Long fabric overlay with transparency
- **addFlowingSilkBands** (263) - Flowing silk bands on shoulders
- **addLayeredLace** (267) - Multiple layered lace details
- **addCrystalLaceBands** (272) - Crystal-enhanced lace bands
- **addBackLaceTrim** (281) - Lace trim for back details
- **addFlowingLaceLayers** (283) - Flowing lace layers
- **addDecorativeLace** (290) - Decorative lace elements
- **addCrystalLaceTrims** (294) - Crystal lace trims with glow

### 2. LED & Laser Effects (`led_lighting_effects.js`)
- **addLaserTopLayer** (265) - Laser top layer with transparency
- **addLaserSleeves** (269) - Laser details on sleeves
- **addLightLaserTrim** (271) - Light laser trim around edges
- **addLaserHat** (274) - Laser-emitting hat
- **addLayeredLaserEffects** (276) - Multiple layered laser effects
- **addCrystalLaserStrips** (284) - Crystal laser strips
- **addLaserHandbag** (285) - Laser-emitting handbag
- **addProminentLEDStrips** (286) - Prominent LED strips
- **addLaserBracelets** (287) - Laser bracelets
- **addSpiralLaserHemline** (280) - Spiral laser hemline
- **addLaserFlowerPattern** (296) - Laser flower patterns
- **addDiagonalNeonEdges** (298) - Diagonal neon edge effects

### 3. Jewelry & Accessories (`jewelry_accessories.js`)
- **addShoulderGemstones** (260) - Gemstone decorations on shoulders
- **addGlitteringAnklets** (270) - Glittering anklet decorations
- **addWavyMetalNecklace** (275) - Wavy metal necklace design
- **addLaserGemstoneNecklace** (282) - Laser necklace with gemstone
- **addMultiLayeredMetalNecklace** (292) - Multi-layered metal necklace
- **addPearlDecorPatterns** (299) - Pearl decoration patterns

### 4. Special Effects (`special_effects.js`)
- **addSubtleGlowWings** (266) - Subtle glowing wing effects
- **addRotatingLightCape** (262) - Rotating light cape effect

### 5. Metallic & Crystal Details (`decorative_details.js`)
- **addShoulderMetalDecorations** (264) - Metal decorations on shoulders
- **addGemstoneGloves** (268) - Gemstone-enhanced gloves
- **addDiagonalCrystalEdges** (261) - Diagonal crystal edge details
- **addFeatherBackDetails** (273) - Feather details on back
- **addLargeBackFlowers** (278) - Large flower decorations on back
- **addBoldCrystalHeels** (279) - Bold crystal heel decorations
- **addFloralHeelDecor** (288) - Floral decorations on heels
- **addMetalSkirtLayer** (289) - Metal skirt layer
- **addCrossedMetalEdges** (291) - Crossed metal edge patterns
- **addGlitteringHemline** (293) - Glittering hemline effects
- **addGlitteringSkirtLayer** (297) - Glittering skirt layer
- **addCrystalFeatherHat** (295) - Hat with crystal and feather details
- **addMetalPearlBands** (277) - Metal bands with pearl decorations

## Usage Examples

### Lace & Fabric Usage
```javascript
import DecorativeDetails from './decorative_details.js';

const details = new DecorativeDetails(scene);

// Add lace trims
details.addLaceTrims(outfit);

// Add flowing silk bands
details.addFlowingSilkBands(outfit);
```

### LED & Laser Effects Usage
```javascript
import LEDLightingEffects from './led_lighting_effects.js';

const lighting = new LEDLightingEffects(scene);

// Add laser top layer
lighting.addLaserTopLayer(outfit);

// Add laser sleeves
lighting.addLaserSleeves(outfit);
```

### Jewelry & Accessories Usage
```javascript
import { addShoulderGemstones, addGlitteringAnklets } from './jewelry_accessories.js';

// Add shoulder gemstones
addShoulderGemstones(outfit);

// Add glittering anklets
addGlitteringAnklets(outfit);
```

### Special Effects Usage
```javascript
import SpecialEffects from './special_effects.js';

const effects = new SpecialEffects(scene);

// Add subtle glow wings
effects.addSubtleGlowWings(outfit);

// Add rotating light cape
effects.addRotatingLightCape(outfit);
```

## Function Numbering
Functions are numbered according to their original numbering in part_14_corrected.js (258-300).

## Materials and Effects
- **Lace**: White and crystal-enhanced lace with transparency
- **Laser**: Various laser colors (red, green, cyan) with high emissive intensity
- **LED**: Bright LED strips and neon effects
- **Metallic**: Metal materials with adjustable roughness and metalness
- **Crystals**: Crystal effects with lighting and transparency
- **Fabric**: Silk and fabric overlays with flowing effects
- **Feathers**: Feather decorations for hats and back details

## Integration Notes
All functions are designed to work with existing Three.js outfit objects and follow consistent positioning patterns for left/right symmetry where applicable. The library now includes 43 new decorative options expanding the total collection significantly.

## New Features in Part 14
- Enhanced laser effects with multiple colors and patterns
- Advanced lace and fabric combinations
- Crystal and metal hybrid decorations
- Special effects including wings and rotating capes
- Comprehensive jewelry and accessory options
