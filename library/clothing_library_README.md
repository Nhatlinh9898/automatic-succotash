# 3D Clothing Library for Three.js

This library contains a comprehensive collection of 3D clothing models created with Three.js, extracted and organized from the original codebase.

## Library Structure

The clothing library is organized into 5 main categories:

### 1. Formal Wear (`formal_wear.js`)
- Wedding dresses and formal gowns
- Evening wear and ballet costumes
- **Models included:**
  - Modern Wedding Dress
  - Black & White Formal Dress
  - Starry Night Gown
  - Vintage Evening Gown
  - Crystal Ball Gown
  - Layered Evening Dress
  - Ballet Dress

### 2. Uniforms & Professional Wear (`uniforms_professional.js`)
- Military, security, and professional uniforms
- Work and performance attire
- **Models included:**
  - Guard Uniform
  - Navy Captain Uniform
  - Royal Knight Uniform
  - Special Forces Uniform
  - Lab Coat Outfit
  - Musician Outfit

### 3. Casual & Sport Wear (`casual_sport_wear.js`)
- Everyday clothing and sportswear
- Casual and alternative fashion
- **Models included:**
  - Tropical Swimwear
  - Yoga Outfit
  - Pilot Jacket Outfit
  - Explorer Outfit
  - Romantic Gothic Outfit
  - Punk Rock Outfit
  - Kimono Outfit

### 4. Fantasy & Special Costumes (`fantasy_costumes.js`)
- Fantasy and sci-fi costumes
- Special event and cosplay outfits
- **Models included:**
  - VR Suit
  - Fairy Costume
  - Carnival Costume
  - Space Explorer Suit

### 5. Utility & Special Purpose Wear (`utility_wear.js`)
- Work and protective clothing
- Weather and activity-specific gear
- **Models included:**
  - Rain Gear
  - Construction Worker Gear
  - Fishing Outfit
  - Gardener Outfit

## Usage

### Basic Usage

```javascript
// Import the main library
const ClothingLibrary = require('./clothing_library_index.js');

// Initialize with your Three.js scene
const clothingLibrary = new ClothingLibrary(scene);

// Create a wedding dress
const weddingDress = clothingLibrary.createModernWeddingDress();
scene.add(weddingDress);

// Create a guard uniform at specific position
const guardUniform = clothingLibrary.createClothing('createGuardUniform', {
    x: 5, y: 0, z: 0
});
```

### Individual Category Usage

```javascript
// Use only formal wear
const FormalWear = require('./formal_wear.js');
const formalWear = new FormalWear(scene);

const eveningGown = formalWear.createStarryNightGown();
scene.add(eveningGown);
```

### Browser Usage

```html
<!-- Include the library files -->
<script src="library/formal_wear.js"></script>
<script src="library/uniforms_professional.js"></script>
<script src="library/casual_sport_wear.js"></script>
<script src="library/fantasy_costumes.js"></script>
<script src="library/utility_wear.js"></script>
<script src="library/clothing_library_index.js"></script>

<script>
// Initialize and use
const clothingLibrary = new ClothingLibrary(scene);
const fairyCostume = clothingLibrary.createFairyCostume();
scene.add(fairyCostume);
</script>
```

## Available Methods

### Getting All Categories
```javascript
const categories = clothingLibrary.getAllCategories();
console.log(categories);
```

### Dynamic Creation
```javascript
// Create any clothing by method name
const methodName = 'createYogaOutfit';
const outfit = clothingLibrary.createClothing(methodName, { x: 0, y: 0, z: 0 });
```

## Features

- **Modular Design**: Each category is separate and can be used independently
- **Consistent API**: All clothing creation methods follow the same pattern
- **Position Control**: Easy positioning of clothing items
- **Scene Integration**: Automatic scene management
- **Extensible**: Easy to add new clothing models
- **Cross-platform**: Works in both Node.js and browser environments

## Material Properties

Each clothing model uses appropriate Three.js materials with properties like:
- Color (hex values)
- Roughness (for realistic appearance)
- Metalness (for armor and metallic elements)
- Emissive properties (for glowing effects)
- Transparency (for special effects)

## Geometry Types

The library uses various Three.js geometries:
- `BoxGeometry` for shirts, jackets, and rectangular pieces
- `CylinderGeometry` for skirts, pants, and tubular clothing
- `SphereGeometry` for helmets and hats
- `PlaneGeometry` for capes and wings
- `CircleGeometry` for badges and decorative elements

## Customization

Each clothing model can be easily customized:
- Modify colors and materials
- Adjust geometry dimensions
- Add additional accessories
- Combine different clothing pieces

## Dependencies

- Three.js library
- Modern JavaScript environment (ES6+)

## File Structure

```
library/
├── formal_wear.js              # Formal dresses and gowns
├── uniforms_professional.js    # Military and professional uniforms
├── casual_sport_wear.js        # Casual and sport clothing
├── fantasy_costumes.js         # Fantasy and special costumes
├── utility_wear.js             # Work and utility clothing
├── clothing_library_index.js    # Main library interface
└── clothing_library_README.md  # This documentation
```

## Total Models: 28+

The library contains over 28 different clothing models, covering a wide range of styles and purposes for your 3D scenes and applications.
