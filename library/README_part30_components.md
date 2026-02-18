# 3D Character Body Parts Library - Part 30

This library contains Three.js functions for creating detailed 3D character body components, organized by gender and body part type.

## 📁 File Structure

```
library/
├── male_body_parts_part30.js      # Male character body components
├── female_body_parts_part30.js    # Female character body components
├── components_index_part30.js     # Central index and utilities
└── README_part30_components.md    # This documentation
```

## 🚀 Quick Start

```javascript
// Import the components index
import { maleBodyParts, femaleBodyParts } from './components_index_part30.js';

// Add male shoulders to character
maleBodyParts.glowingRoundedShoulders(character);

// Add female waist to character
femaleBodyParts.longSlimWaist(character);
```

## 👨 Male Body Parts

### Shoulders (6 components)
- **glowingRoundedShoulders** - Rounded shoulders with cyan glow
- **massiveShoulders** - Large blocky shoulders for muscular look
- **metallicShoulders** - Silver metallic spherical shoulders
- **topLaserArms** - Laser arms extending from shoulder height
- **massiveShoulderMuscles** - Extra large shoulder muscles
- **angularMetalShoulders** - Angular metallic shoulders

### Arms (7 components)
- **laserMuscularArms** - Green glowing muscular arms
- **angularArms** - Angular brown arms
- **laserArms** - Green glowing laser arms
- **extendedLaserArms** - Long orange laser arms
- **metallicGlowArms** - Metallic arms with cyan glow
- **laserGlowLongArms** - Long green glowing arms
- **longMetalArms** - Long metallic arms

### Chest (6 components)
- **metallicChest** - Silver metallic chest plate
- **waveLaserChest** - Green laser wave chest
- **blockyMetallicChest** - Large blocky metallic chest
- **longLaserChest** - Tall green laser chest
- **blockLaserChest** - Orange laser block chest
- **wavyLaserChest** - Green wavy laser chest

### Back (4 components)
- **metallicBack** - Silver metallic back
- **angularLaserBack** - Cyan angular laser back
- **longBackWithHighShoulders** - Extended back with high shoulders
- **muscularLongBack** - Long muscular back

## 👩 Female Body Parts

### Waist (7 components)
- **longSlimWaist** - Long slim pink waist
- **wavyWaist** - Wavy peach waist
- **metallicWaist** - Silver metallic waist
- **laserWaist** - Pink laser waist
- **twistedWaist** - Twisted peach waist
- **metallicLaceWaist** - Metallic waist with lace details
- **starryLaserWaist** - Pink starry laser waist

### Back (8 components)
- **sophisticatedBack** - Elegant peach back
- **longElegantBack** - Long elegant peach back
- **laceGlowBack** - Pink glowing lace back
- **metallicBack** - Silver metallic back
- **wavyLaserBack** - Pink wavy laser back
- **starryLaceBack** - Pink starry lace back
- **laserLongBack** - Long pink laser back
- **metallicLongBack** - Long metallic back

### Hips (8 components)
- **gracefulWideHips** - Wide pink hips
- **smoothRoundedHips** - Smooth rounded pink hips
- **radiantHips** - Pink glowing hips
- **smoothLaserHips** - Pink laser hips
- **metallicRoundedHips** - Metallic rounded hips
- **laceHips** - Pink lace hips
- **metallicSoftHips** - Soft metallic hips
- **sparklingLaceHips** - Sparkling lace hips

### Chest (1 component)
- **sparklingChest** - Sparkling pink chest

## 🛠️ Utility Functions

### Component Access
```javascript
import { 
    getComponent, 
    getComponentsByCategory, 
    getAllMaleComponents, 
    getAllFemaleComponents 
} from './components_index_part30.js';

// Get specific component
const component = getComponent('glowingRoundedShoulders');

// Get all male shoulder components
const maleShoulders = getComponentsByCategory('male', 'shoulders');

// Get all male components
const allMale = getAllMaleComponents();

// Get all female components
const allFemale = getAllFemaleComponents();
```

### Category Structure
```javascript
import { componentCategories } from './components_index_part30.js';

// View available categories
console.log(componentCategories.male.shoulders);
console.log(componentCategories.female.waist);
```

## 🎨 Material Types

### Metallic Materials
- **Silver**: `color: 0xC0C0C0, metalness: 1.0`
- **Roughness variations**: 0.2-0.3 for different finishes

### Laser/Glow Materials
- **Green**: `emissive: 0x00FF00`
- **Cyan**: `emissive: 0x00FFFF`
- **Orange**: `emissive: 0xFF4500`
- **Pink**: `emissive: 0xFFC0CB, 0xFF69B4`

### Standard Materials
- **Brown**: `color: 0x8B4513` (for muscular parts)
- **Peach**: `color: 0xFFDAB9` (for elegant parts)
- **Pink**: `color: 0xFFC0CB` (for female parts)

## 📐 Geometry Types

### Basic Shapes
- **BoxGeometry**: For chest, back, and shoulder components
- **CylinderGeometry**: For waist, hips, and arms
- **SphereGeometry**: For rounded shoulders and hips
- **PlaneGeometry**: For laser wave effects

### Common Dimensions
- **Shoulders**: Width 1.5-2.8, Height 4-5
- **Arms**: Radius 0.8-1.2, Height 3.5-5
- **Chest**: Width 3-3.5, Height 2-5
- **Waist**: Top radius 1.1-1.2, Bottom radius 0.7-0.9
- **Hips**: Top radius 1.6-1.9, Bottom radius 2.2-2.3

## 🔧 Usage Examples

### Creating a Male Character
```javascript
import { maleBodyParts } from './components_index_part30.js';

// Add muscular body parts
maleBodyParts.massiveShoulders(character);
maleBodyParts.laserMuscularArms(character);
maleBodyParts.blockyMetallicChest(character);
maleBodyParts.muscularLongBack(character);
```

### Creating a Female Character
```javascript
import { femaleBodyParts } from './components_index_part30.js';

// Add elegant body parts
femaleBodyParts.longSlimWaist(character);
femaleBodyParts.sophisticatedBack(character);
femaleBodyParts.gracefulWideHips(character);
femaleBodyParts.sparklingChest(character);
```

### Mixed Style Character
```javascript
import { maleBodyParts, femaleBodyParts } from './components_index_part30.js';

// Combine different styles
maleBodyParts.metallicShoulders(character);
femaleBodyParts.metallicWaist(character);
maleBodyParts.laserArms(character);
femaleBodyParts.sparklingLaceHips(character);
```

## 🎯 Design Themes

### Futuristic/Sci-Fi
- Components with laser effects
- Metallic materials
- Glowing emissive properties
- Angular geometric designs

### Elegant/Feminine
- Soft colors (pink, peach)
- Lace and decorative elements
- Smooth, flowing shapes
- Transparent and glowing materials

### Powerful/Masculine
- Large, muscular proportions
- Brown and earth tones
- Blocky, strong geometries
- Metallic and industrial finishes

## 📝 Notes

- All functions require a Three.js `character` object as parameter
- Components are positioned relative to character origin (0, 0, 0)
- Mirrored components are automatically created for symmetrical body parts
- Materials use `MeshStandardMaterial` for realistic lighting
- Emissive materials create glow effects without light sources

## 🔗 Dependencies

- **Three.js**: Core 3D rendering library
- **ES6 Modules**: For import/export functionality

## 📄 License

This library is part of a larger 3D character creation project. Use according to project guidelines.
