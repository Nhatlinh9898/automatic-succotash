# Advanced 3D Clothing Designs Library

A comprehensive library for creating and managing advanced 3D clothing designs including fantasy, formal, casual, and professional attire.

## Overview

This library provides an extensive collection of 3D clothing models organized into four main categories:
- Fantasy and Sci-Fi clothing
- Formal and elegant wear
- Casual and sport outfits
- Professional and uniform attire

## Library Structure

### Core Modules

1. **fantasy_clothing.js** - Fantasy, sci-fi, and themed clothing
2. **formal_clothing.js** - Formal wear and elegant dresses
3. **casual_sport_clothing.js** - Casual wear and sports outfits
4. **professional_clothing.js** - Professional attire and uniforms
5. **advanced_clothing_manager.js** - Main system integration

## Quick Start

```javascript
// Initialize advanced clothing manager
const clothingManager = new AdvancedClothingManager();

// Create a fantasy outfit
const superheroOutfit = clothingManager.createOutfit('superheroCape', { x: 0, y: 0, z: 0 });
scene.add(superheroOutfit);

// Create a formal dress
const eveningGown = clothingManager.createOutfit('sparklingEveningGown', { x: 5, y: 0, z: 0 });
scene.add(eveningGown);

// Create a casual outfit
const workoutGear = clothingManager.createOutfit('workoutOutfit', { x: -5, y: 0, z: 0 });
scene.add(workoutGear);

// Create a professional uniform
const nurseUniform = clothingManager.createOutfit('nurseUniform', { x: 0, y: 0, z: 5 });
scene.add(nurseUniform);
```

## Available Categories

### Fantasy Clothing

- **superheroCape** - Heroic outfit with flowing cape
- **steampunkOutfit** - Victorian-era sci-fi fashion
- **halloweenOutfit** - Spooky themed costume
- **cyberpunkOutfit** - Futuristic neon-enhanced outfit
- **royalOutfit** - Fantasy royalty attire
- **astronautSuit** - Space explorer suit
- **magicPrincessDress** - Magical glowing princess dress
- **knightArmor** - Medieval warrior armor
- **ninjaOutfit** - Stealth warrior outfit
- **leafDress** - Nature themed dress

### Formal Clothing

- **formalSuit** - Professional business suit
- **gatsbyStyle** - 1920s elegant formal wear
- **backlessDress** - Elegant backless evening gown
- **highFashionCoat** - Designer style coat
- **asianOutfit** - Elegant Eastern style
- **cinderellaDress** - Fairy tale princess dress
- **sparklingEveningGown** - Glamorous formal gown
- **silkGownWithCape** - Elegant royal style
- **nightgown** - Elegant sleepwear
- **classicThreePieceSuit** - Traditional formal suit

### Casual and Sport Clothing

- **workoutOutfit** - Active sportswear
- **streetwearOutfit** - Urban casual style
- **retroSportGear** - 1980s athletic style
- **casualDenimOutfit** - Denim casual wear
- **beachOutfit** - Summer casual outfit
- **racingSuit** - Professional racing attire
- **mechanicUniform** - Work wear uniform
- **hikingGear** - Outdoor adventure gear
- **techwearOutfit** - Modern technical wear
- **floralDress** - Casual nature themed dress

### Professional Clothing

- **nurseUniform** - Medical professional attire
- **highFashionCoat** - Fashion industry coat
- **asianOutfit** - Eastern business style
- **classicThreePieceSuit** - Traditional business suit
- **formalSuit** - Professional business suit
- **gatsbyStyle** - 1920s elegant formal
- **backlessDress** - Elegant formal dress

## API Reference

### AdvancedClothingManager Class

#### Methods

- `createOutfit(outfitName, position)` - Create specific outfit by name
- `createOutfitByCategory(category, outfitName, position)` - Create outfit from specific category
- `getAllAvailableOutfits()` - Get list of all available outfits
- `getOutfitsByCategory(category)` - Get outfits from specific category
- `createRandomOutfit(position)` - Create random outfit
- `createRandomOutfitFromCategory(category, position)` - Create random outfit from category
- `searchOutfits(searchTerm)` - Search outfits by name
- `createOutfitCollection(outfitNames, positions)` - Create multiple outfits collection
- `createThemedCollection(theme, position)` - Create themed outfit collection
- `getRecommendations(context)` - Get outfit recommendations for specific contexts
- `createOutfitWithVariations(baseOutfitName, variations)` - Create outfit with custom variations

#### Categories

- `fantasy` - Fantasy, sci-fi, and themed clothing
- `formal` - Formal wear and elegant dresses
- `casual` - Casual wear and sports outfits
- `professional` - Professional attire and uniforms

#### Context Recommendations

- `party` - Party and event outfits
- `work` - Business and professional outfits
- `sports` - Sports and active wear
- `casual` - Everyday casual wear
- `gaming` - Gaming and fantasy outfits
- `fantasy` - Fantasy and themed outfits

#### Themed Collections

- `fantasyAdventure` - Fantasy adventure outfits
- `elegantEvening` - Evening and formal wear
- `casualWeekend` - Weekend casual outfits
- `professionalBusiness` - Business professional attire
- `scifiFuture` - Sci-fi and futuristic outfits
- `sportsActive` - Sports and active wear
- `medicalService` - Medical and service uniforms
- `culturalElegant` - Cultural and elegant formal wear

## Usage Examples

### Creating Themed Collections

```javascript
// Create a fantasy adventure collection
const fantasyCollection = clothingManager.createThemedCollection('fantasyAdventure', { x: 0, y: 0, z: 0 });
scene.add(fantasyCollection);

// Create an elegant evening collection
const eveningCollection = clothingManager.createThemedCollection('elegantEvening', { x: 10, y: 0, z: 0 });
scene.add(eveningCollection);
```

### Getting Recommendations

```javascript
// Get party outfit recommendations
const partyRecs = clothingManager.getRecommendations('party');
console.log(partyRecs.primary); // ['sparklingEveningGown', 'cinderellaDress', 'gatsbyStyle']

// Get sports outfit recommendations
const sportsRecs = clothingManager.getRecommendations('sports');
console.log(sportsRecs.primary); // ['workoutOutfit', 'racingSuit', 'hikingGear']
```

### Creating Outfits with Variations

```javascript
// Create outfit with custom color
const redSuperhero = clothingManager.createOutfitWithVariations('superheroCape', {
    position: { x: 0, y: 0, z: 0 },
    color: 0xFF0000, // Red
    scale: 1.2 // 20% larger
});

// Create outfit with material variations
const metallicArmor = clothingManager.createOutfitWithVariations('knightArmor', {
    position: { x: 5, y: 0, z: 0 },
    roughness: 0.2, // More polished
    color: 0xC0C0C0 // Silver
});
```

### Search Functionality

```javascript
// Search for dress-related outfits
const dressResults = clothingManager.searchOutfits('dress');
console.log(dressResults); // ['backlessDress', 'cinderellaDress', 'sparklingEveningGown', ...]

// Search for fantasy outfits
const fantasyResults = clothingManager.searchOutfits('superhero');
console.log(fantasyResults); // ['superheroCape']
```

## Special Features

### Theme Information

Each fantasy outfit includes theme information:
```javascript
const outfitInfo = clothingManager.getOutfitInfo('cyberpunkOutfit');
console.log(outfitInfo.themeInfo);
// { theme: 'Cyberpunk', description: 'Futuristic neon-enhanced outfit', ... }
```

### Activity Properties

Sport and casual outfits include activity-specific properties:
```javascript
const activityInfo = clothingManager.getOutfitInfo('workoutOutfit');
console.log(activityInfo.activityInfo);
// { breathability: 'high', flexibility: 'high', recommendedFor: ['gym', 'running'] }
```

### Profession Information

Professional outfits include career-specific information:
```javascript
const professionInfo = clothingManager.getOutfitInfo('nurseUniform');
console.log(professionInfo.professionInfo);
// { profession: 'Healthcare', industry: 'Medical', requirements: [...], ... }
```

## Integration with Three.js

This library is designed to work seamlessly with Three.js. Ensure you have Three.js loaded before using this library.

```html
<script src="three.js"></script>
<script src="library/fantasy_clothing.js"></script>
<script src="library/formal_clothing.js"></script>
<script src="library/casual_sport_clothing.js"></script>
<script src="library/professional_clothing.js"></script>
<script src="library/advanced_clothing_manager.js"></script>
```

## Performance Considerations

- Use appropriate level of detail for your target devices
- Consider using instanced rendering for multiple similar outfits
- Optimize geometry complexity for better performance
- Use appropriate material properties for realistic rendering
- For complex scenes, consider LOD (Level of Detail) systems

## Browser Compatibility

- Modern browsers with WebGL support
- Three.js r125 or higher
- ES6+ JavaScript support

## License

This library is provided as-is for educational and development purposes.

## Contributing

Feel free to extend the library with additional clothing designs, cultural outfits, and fashion styles. The modular structure makes it easy to add new categories and outfit types.
