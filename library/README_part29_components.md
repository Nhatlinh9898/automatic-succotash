# Part 29 Components Library

This directory contains the Part 29 components extracted from `part_29_corrected.js`, organized into specialized categories for 3D character creation.

## 📁 File Structure

### Core Component Files
- **`male_hair_components_part29.js`** - Laser and neon style hair components for male characters
- **`female_hair_components_part29.js`** - Luminous, lace, and metallic hair components for female characters  
- **`facial_features_part29.js`** - Laser eyes and mouth components
- **`body_components_part29.js`** - Male and female body components with laser effects
- **`components_index_part29.js`** - Main index file with all components organized by category

## 🎨 Component Categories

### 👨 Male Hair Components
**Laser & Neon Styles:**
- High Multi-Layered Laser Hair
- Long Laser Hair  
- Sparkling Laser Hair
- Wave Laser Spike Hair
- Extended Laser Spike Hair
- Curved Laser Hair

### 👩 Female Hair Components
**Luminous Styles:**
- Soft Luminous Lace Hair
- Luminous Wavy Lace Hair
- Shiny Short Glow Hair
- Soft Radiant Long Hair
- Sparkling Laser Fringe
- Luminous Silky Hair
- Wave Lace Short Hair

**Metallic Styles:**
- Metallic Curly Long Hair
- Metallic Short Hair
- Metallic Long Fringe Hair

### 👁️ Facial Features
**Laser Eyes:**
- Layered Laser Eyes (dual color effect)
- Strong Double Laser Eyes (powerful effect)

**Laser Mouths:**
- Wave Laser Mouth (wave pattern)
- Mesh Laser Mouth (torus geometry)

### 💪 Body Components

#### Male Body
**Upper Body:**
- Broad Shoulders
- Chest & Powerful Chest
- Arm Muscles & Giant Arms
- Glowing Shoulders & Glowing Arm Muscles

**Torso:**
- Long Back
- Angular Back
- Tall Body
- Laser Back & Laser Chest

**Lower Body:**
- Balanced Hips

#### Female Body
**Upper Body:**
- Feminine Chest
- Elegant Back
- Graceful Back
- Glow Back

**Midsection:**
- Slim Waist
- Highlighted Waist
- Glowing Waist
- Starry Waist

**Lower Body:**
- Curvy Hips
- Wide Hips
- Radiant Rounded Hips
- Sparkling Hips

## 🚀 Usage Examples

### Importing Components
```javascript
// Import specific components
import { addHighMultiLayeredLaserHair, addSoftLuminousLaceHair } from './male_hair_components_part29.js';
import { addSoftLuminousLaceHair } from './female_hair_components_part29.js';

// Import from main index
import { Part29Components, getMaleHairComponents } from './components_index_part29.js';
```

### Using Components
```javascript
// Add laser hair to male character
addHighMultiLayeredLaserHair(maleCharacter);

// Add luminous hair to female character
addSoftLuminousLaceHair(femaleCharacter);

// Add laser eyes
addLayeredLaserEyes(character);

// Add body components
addBroadShoulders(maleCharacter);
addSlimWaist(femaleCharacter);
```

### Using the Index System
```javascript
// Get all male hair components
const maleHair = getMaleHairComponents();
maleHair.laserStyles.forEach(style => {
    console.log(style.name);
});

// Find specific component
const component = findComponentByName('laser eyes');
if (component) {
    component.function(character);
}

// Get all components
const allComponents = getAllPart29Components();
```

## ✨ Special Features

### Laser Effects
- **Emissive Materials**: All laser components use emissive materials for glowing effects
- **Multiple Colors**: Red, green, cyan, pink, and orange laser effects
- **Intensity Control**: Adjustable emissive intensity for different glow levels

### Metallic Effects
- **Metalness Property**: Full metalness (1.0) for realistic metallic appearance
- **Roughness Control**: Low roughness (0.2-0.3) for shiny metallic surfaces

### Transparency & Layering
- **Layered Designs**: Multi-layered hair components for depth
- **Transparent Materials**: Semi-transparent effects for ethereal appearance
- **Mirrored Components**: Left-right symmetry for natural appearance

## 🎯 Component Characteristics

### Positioning
- **Head Components**: Y-axis 4.5-5.8 for proper head placement
- **Body Components**: Y-axis 2.5-6 for torso positioning
- **Facial Features**: Precise positioning for eyes (0.6, -0.6) and mouth areas

### Geometry Types
- **Plane Geometry**: Hair components and flat features
- **Circle Geometry**: Eye components
- **Cylinder Geometry**: Body parts and rounded features
- **Box Geometry**: Torso and structural components
- **Sphere Geometry**: Curved body parts
- **Torus Geometry**: Special mouth components

### Material Properties
- **Standard Materials**: Consistent use of MeshStandardMaterial
- **Color Palette**: Browns (0x8B4513), pinks (0xFFC0CB), metallics (0xC0C0C0)
- **Emissive Colors**: Various laser colors for special effects

## 🔄 Integration

These components are designed to work seamlessly with existing Part 1-28 components and can be combined to create unique character designs with laser/neon effects and enhanced body features.

## 📝 Notes

- All components use THREE.js standard geometries and materials
- Components are modular and can be mixed and matched
- Each function includes JSDoc documentation for parameters
- Export structure supports both individual imports and bulk imports
- Components maintain consistent positioning and scaling conventions
