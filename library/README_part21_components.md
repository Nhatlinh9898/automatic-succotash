# Library Components - Part 21

This directory contains organized 3D components extracted from `part_21_corrected.js`.

## Component Categories

### 1. Watch Components (`watch_components_part21.js`)
Contains 11 different watch designs with various styles:

- **addSilkStrapWatch()** - Elegant silk strap watch
- **addSquareFaceWatch()** - Modern square face design
- **addSwirlLaserFaceWatch()** - Dynamic swirl laser face
- **addLaceCrystalWatch()** - Lace and crystal combination
- **addTransparentStrapWatch()** - Delicate transparent strap
- **addSleekMetalStrapWatch()** - Elegant metal strap
- **addColorBlockDigitalWatch()** - Digital color block design
- **addPatternedGlassWatch()** - Patterned glass face
- **addStylizedLaserWatch()** - Unique laser patterns
- **addWaveCrystalFaceWatch()** - Wave crystal effect
- **addMetalCrystalWatch()** - Metal crystal combination

### 2. Face and Head Components (`face_head_components_part21.js`)
Contains 24 different face and head accessories:

#### Face Components:
- **addNeonFace()** - Futuristic neon outline
- **addDigitalFace()** - LED screen display
- **addDynamicLightingFace()** - Moving light effects
- **addGlowingSymbolFace()** - Glowing symbol decoration

#### Head Components:
- **addMetalPatternHead()** - Metal engraved patterns
- **addCrystalLaceHead()** - Lace and crystal decorations
- **addLaserHead()** - Moving laser lines
- **addPatternedLaserHead()** - Patterned laser designs
- **addCrystalHead()** - Striking crystal appearance
- **addEngravedMetalHead()** - Engraved metal details
- **addLaceCoveredHead()** - Soft lace covering
- **addDiagonalLightHead()** - Diagonal light lines

#### Hair Components:
- **addLaserHair()** - Striking laser strips
- **addCrystalHair()** - Sparkling crystal hair
- **addMetallicHair()** - Reflective metal strands
- **addLayeredLaserHair()** - Layered depth effect
- **addFlowingHair()** - Light stream flowing hair
- **addWavyHair()** - Smooth wavy lines
- **addMulticolorGlowHair()** - Multicolor glowing effect

#### Mask Components:
- **addMetallicMask()** - Reflective metal mask
- **addTransparentMask()** - Mysterious transparent mask
- **addCrystalMask()** - Soft glow crystal mask
- **addTintedGlassMask()** - Elegant tinted glass
- **addMeshLaserMask()** - Mesh laser design

## Usage

All components follow a consistent pattern:
- Accept a THREE.Group parameter (outfit for watches, character for face/head components)
- Return void (components are added directly to the provided group)
- Use THREE.js geometries and materials
- Include proper positioning and styling

## Integration

To use these components in your main project:

```javascript
// Import the component files
// <script src="library/watch_components_part21.js"></script>
// <script src="library/face_head_components_part21.js"></script>

// Use components
addSilkStrapWatch(outfit);
addNeonFace(character);
```

## Design Themes

The components feature:
- **Futuristic/Sci-fi**: Neon effects, laser elements, digital displays
- **Elegant**: Crystal decorations, silk materials, metallic finishes
- **Modern**: Geometric patterns, transparent elements, color blocking
- **Artistic**: Flowing lines, layered effects, glowing symbols

All components are designed to be modular and can be combined to create unique character appearances.
