# Head Components Library - Part 23

This library contains various head components for 3D characters, extracted and organized from `part_23_corrected.js`. All components are compatible with Three.js and designed for easy integration into your 3D character projects.

## 📁 File Structure

```
library/
├── female_hair_components_part23.js      # Female hair styles and accessories
├── female_facial_features_part23.js       # Female facial features (eyes, lips, nose, ears)
├── male_hair_components_part23.js         # Male hair styles and accessories
├── male_facial_features_part23.js         # Male facial features (eyes, lips, nose, ears, beard)
├── head_components_index_part23.js        # Main index file with all components
└── README_head_components_part23.md       # This documentation file
```

## 🎨 Component Categories

### Female Components

#### Hair Styles (`female_hair_components_part23.js`)
- **addBraidedCrownHair** - Braided crown around the head
- **addLongCurlyHair** - Long curly hair with elegant style
- **addFlowingStreakHair** - Soft, flowing streak hair
- **addShoulderLengthHair** - Shoulder-length hair
- **addWavyHair** - Soft wavy hair layers
- **addStraightBangs** - Straight bangs across forehead
- **addHighPonytail** - High ponytail style
- **addPigtailBraids** - Braids on both sides
- **addBobCutHair** - Modern bob cut
- **addCascadingCurls** - Elegant cascading curls
- **addHighBunHair** - High bun style
- **addSmallBraidsHair** - Small decorative braids
- **addGentleMessyHair** - Natural messy style
- **addGentleWavyHair** - Gentle wavy layers

#### Facial Features (`female_facial_features_part23.js`)
- **addSoftLips** - Soft, feminine lips
- **addDecorativeEars** - Golden decorative ears
- **addSmallCuteNose** - Small, cute nose
- **addShinyMetallicEars** - Shiny metallic ears
- **addRoundEyes** - Cute round eyes
- **addSmilingLips** - Gentle smiling lips
- **addSubtlePointyEars** - Elf-like pointy ears
- **addSparklingCrystalEyes** - Magical crystal eyes
- **addGentleLips** - Soft, gentle lips
- **addShimmeringEyes** - Glowing shimmering eyes

### Male Components

#### Hair Styles (`male_hair_components_part23.js`)
- **addSideburns** - Mature sideburns
- **addMohawkHair** - Punk Mohawk style
- **addSpikyHair** - Rebellious spiky hair
- **addShortCutHair** - Classic short cut
- **addMiddlePartedHair** - Elegant middle-parted hair
- **addAfroHair** - Bold afro style
- **addMessyHair** - Natural messy hair
- **addLongStraightHair** - Scholarly long straight hair

#### Facial Features (`male_facial_features_part23.js`)
- **addDefinedLips** - Masculine defined lips
- **addLightBandEyes** - Futuristic light band eyes
- **addMetalNose** - Industrial metal nose
- **addStrongLips** - Strong, masculine lips
- **addGlowOutlineEars** - Futuristic glowing ears
- **addCurlyBeard** - Sophisticated curly beard
- **addTintedGlasses** - Stylish tinted glasses
- **addNeonGlasses** - Futuristic neon glasses
- **addSmallMouth** - Subtle small mouth
- **addSquareEars** - Geometric square ears
- **addFlamingEyes** - Intense flaming eyes
- **addWideNose** - Strong wide nose
- **addMetallicEyes** - Futuristic metallic eyes
- **addCompactNose** - Subtle compact nose
- **addLargeEars** - Prominent large ears
- **addSlenderEyes** - Sharp slender eyes

## 🚀 Usage Examples

### Basic Usage

```javascript
// Import the main library
import HeadComponentsPart23 from './library/head_components_index_part23.js';

// Create a character group
const character = new THREE.Group();

// Add female hair
HeadComponentsPart23.Female.Hair.addLongCurlyHair(character);

// Add female facial features
HeadComponentsPart23.Female.FacialFeatures.addRoundEyes(character);
HeadComponentsPart23.Female.FacialFeatures.addSoftLips(character);
```

### Individual Module Usage

```javascript
// Import specific modules
import { addBraidedCrownHair, addLongCurlyHair } from './library/female_hair_components_part23.js';
import { addRoundEyes, addSoftLips } from './library/female_facial_features_part23.js';

// Use individual functions
addBraidedCrownHair(character);
addLongCurlyHair(character);
addRoundEyes(character);
addSoftLips(character);
```

### Browser Usage

```html
<!-- Include the index file -->
<script src="library/head_components_index_part23.js"></script>

<script>
// Use the global object
const character = new THREE.Group();

// Add components
HeadComponentsPart23.Male.Hair.addMohawkHair(character);
HeadComponentsPart23.Male.FacialFeatures.addFlamingEyes(character);
</script>
```

## 🎯 Component Positioning

All components use a standardized coordinate system:
- **Y-axis**: Height (4.3-5.5 for head components)
- **X-axis**: Left/Right positioning
- **Z-axis**: Forward/Backward depth

### Typical Position Ranges:
- **Eyes**: Y ≈ 4.8, Z ≈ 0.7
- **Nose**: Y ≈ 4.5, Z ≈ 0.8
- **Lips/Mouth**: Y ≈ 4.3, Z ≈ 0.8
- **Ears**: Y ≈ 4.5, Z ≈ 0.3
- **Hair**: Y ≈ 4.6-5.5, Z ≈ -0.3 to 0.5

## 🎨 Material Properties

Components use various Three.js materials:
- **MeshStandardMaterial** - Most common, with color and optional properties
- **Metalness** - For metallic effects (0.0 to 1.0)
- **Roughness** - Surface texture (0.0 to 1.0)
- **Emissive** - For glowing effects
- **Opacity/Transparent** - For semi-transparent effects

## 🔧 Customization

### Modifying Colors
```javascript
// Example: Change hair color
const hairMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xFF6B6B, // Custom red color
    opacity: 0.9,
    transparent: true
});
```

### Adjusting Positions
```javascript
// Example: Move eyes higher
eye.position.set(0.6, 5.0, 0.7); // Changed Y from 4.8 to 5.0
```

### Scaling Components
```javascript
// Example: Make hair larger
hair.scale.set(1.2, 1.2, 1.2); // 20% larger
```

## 📝 Notes

- All components are designed to work with THREE.js
- Components assume a character group with appropriate scale
- Mirror components are automatically created for symmetrical features
- Materials can be customized for different visual effects
- Positions are optimized for standard character proportions

## 🤝 Contributing

To add new components:
1. Follow the existing naming convention
2. Add proper JSDoc documentation
3. Include the component in the appropriate category file
4. Update the index file
5. Update this README

## 📄 License

This library is part of a 3D character creation toolkit. Please ensure compliance with Three.js license and any applicable licenses for your project.
