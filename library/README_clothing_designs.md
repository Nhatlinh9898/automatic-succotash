# 3D Clothing Designs Library

A comprehensive library for creating and managing 3D clothing designs across different styles, eras, and cultures.

## Overview

This library provides a modular system for creating various types of 3D clothing including:
- Historical and vintage fashion
- Modern and contemporary styles
- Traditional and cultural attire
- Unisex and casual wear

## Library Structure

### Core Modules

1. **historical_clothing.js** - Historical period clothing and vintage fashion
2. **modern_clothing.js** - Modern and contemporary clothing designs
3. **traditional_clothing.js** - Traditional and cultural clothing
4. **unisex_clothing.js** - Unisex and casual clothing styles
5. **clothing_design_manager.js** - Main system integration

## Quick Start

```javascript
// Initialize clothing design manager
const clothingManager = new ClothingDesignManager();

// Create a historical outfit
const ballGown = clothingManager.createOutfit('ballGown', { x: 0, y: 0, z: 0 });
scene.add(ballGown);

// Create a modern outfit
const modernSuit = clothingManager.createOutfit('modernSuit', { x: 5, y: 0, z: 0 });
scene.add(modernSuit);

// Create traditional attire
const aoDai = clothingManager.createOutfit('aoDai', { x: -5, y: 0, z: 0 });
scene.add(aoDai);
```

## Available Categories

### Historical Clothing

- **ballGown** - 19th century ball gown with lace layers
- **tailcoat** - Formal historical tailcoat attire
- **victorianDress** - Victorian corset dress with layered skirt
- **flapperDress** - 1920s flapper dress with fringe details
- **vintageDress** - 1950s vintage style dress
- **weddingDress** - Vintage wedding dress design
- **nobleOutfit** - Renaissance noble attire
- **luxuryOutfit** - Luxury outfit with fur cape
- **retroSportOutfit** - 1980s retro sport style

### Modern Clothing

- **jumpsuit** - Elegant modern jumpsuit with belt
- **leatherJacket** - Leather jacket with jeans combo
- **modernSuit** - Professional modern business suit
- **athleisureOutfit** - Crop top and leggings athleisure style
- **casualOutfit** - Hoodie and jeans casual wear
- **sportOutfit** - Polo shirt and shorts sport style
- **tracksuit** - Modern tracksuit design
- **boldJumpsuit** - Bold jumpsuit with cutout details
- **officeSuit** - Office suit with tie
- **modernMilitary** - Modern military style outfit

### Traditional Clothing

- **aoDai** - Traditional Vietnamese female dress
- **aoDaiNam** - Traditional Vietnamese male attire
- **militaryUniform** - Traditional military dress uniform
- **silkDress** - Elegant silk evening dress
- **eveningGown** - Formal evening gown with slit
- **maxiDress** - Long flowing maxi dress
- **floralDress** - Vintage style floral dress

### Unisex Clothing

- **oversizedOutfit** - Oversized streetwear style
- **minimalismStyle** - Minimalist simple design
- **minimalOutfit** - Basic unisex outfit
- **bomberJacketOutfit** - Bomber jacket streetwear
- **gothicOutfit** - Dark gothic style
- **retroMiniDress** - 1960s retro mini dress

## API Reference

### ClothingDesignManager Class

#### Methods

- `createOutfit(outfitName, position)` - Create specific outfit by name
- `createOutfitByCategory(category, outfitName, position)` - Create outfit from specific category
- `getAllAvailableOutfits()` - Get list of all available outfits
- `getOutfitsByCategory(category)` - Get outfits from specific category
- `createRandomOutfit(position)` - Create random outfit
- `createRandomOutfitFromCategory(category, position)` - Create random outfit from category
- `searchOutfits(searchTerm)` - Search outfits by name
- `createOutfitCollection(outfitNames, positions)` - Create multiple outfits collection
- `createPresetCombination(presetName, position)` - Create preset outfit combination

#### Categories

- `historical` - Historical and vintage clothing
- `modern` - Modern and contemporary styles
- `traditional` - Traditional and cultural attire
- `unisex` - Unisex and casual wear

#### Preset Combinations

- `elegantEvening` - Evening gown combinations
- `formalBusiness` - Business suit combinations
- `casualWeekend` - Casual weekend outfits
- `culturalHeritage` - Traditional cultural attire
- `streetwear` - Modern streetwear styles
- `vintageStyle` - Vintage fashion combinations

## Usage Examples

### Creating Multiple Outfits

```javascript
// Create outfit collection
const outfits = ['ballGown', 'modernSuit', 'aoDai'];
const positions = [
    { x: -5, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 5, y: 0, z: 0 }
];

const collection = clothingManager.createOutfitCollection(outfits, positions);
scene.add(collection);
```

### Random Outfit Generation

```javascript
// Create random outfit
const randomOutfit = clothingManager.createRandomOutfit({ x: 0, y: 0, z: 0 });
scene.add(randomOutfit);

// Create random historical outfit
const randomHistorical = clothingManager.createRandomOutfitFromCategory('historical', { x: 3, y: 0, z: 0 });
scene.add(randomHistorical);
```

### Cultural Information

```javascript
// Get cultural information about traditional outfits
const aoDaiInfo = clothingManager.getCulturalInfo('aoDai');
console.log(aoDaiInfo);
// Output: { origin: 'Vietnam', description: '...', occasions: [...] }
```

### Search Functionality

```javascript
// Search for outfits
const searchResults = clothingManager.searchOutfits('dress');
console.log(searchResults); // ['ballGown', 'victorianDress', 'flapperDress', ...]
```

## Integration with Three.js

This library is designed to work seamlessly with Three.js. Ensure you have Three.js loaded before using this library.

```html
<script src="three.js"></script>
<script src="library/historical_clothing.js"></script>
<script src="library/modern_clothing.js"></script>
<script src="library/traditional_clothing.js"></script>
<script src="library/unisex_clothing.js"></script>
<script src="library/clothing_design_manager.js"></script>
```

## Custom Outfits

### Adding Custom Outfits

```javascript
// Add custom outfit to historical category
clothingManager.addCustomOutfit('historical', 'myCustomDress', function(position) {
    const dress = new THREE.Group();
    // Your custom dress creation code here
    return dress;
});
```

## Performance Considerations

- Use appropriate level of detail for your target devices
- Consider using instanced rendering for multiple similar outfits
- Optimize geometry complexity for better performance
- Use appropriate material properties for realistic rendering

## Browser Compatibility

- Modern browsers with WebGL support
- Three.js r125 or higher
- ES6+ JavaScript support

## License

This library is provided as-is for educational and development purposes.

## Contributing

Feel free to extend the library with additional clothing designs, cultural outfits, and fashion styles. The modular structure makes it easy to add new categories and outfit types.
