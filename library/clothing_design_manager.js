/**
 * Clothing Design Manager Library
 * Main system that integrates all clothing design libraries
 */

class ClothingDesignManager {
    constructor() {
        this.historicalClothing = new HistoricalClothing();
        this.modernClothing = new ModernClothing();
        this.traditionalClothing = new TraditionalClothing();
        this.unisexClothing = new UnisexClothing();
        
        this.allOutfits = new Map();
        this.categorizedOutfits = new Map();
        this.initializeCategories();
    }

    initializeCategories() {
        this.categorizedOutfits.set('historical', this.historicalClothing.getAvailableOutfits());
        this.categorizedOutfits.set('modern', this.modernClothing.getAvailableOutfits());
        this.categorizedOutfits.set('traditional', this.traditionalClothing.getAvailableOutfits());
        this.categorizedOutfits.set('unisex', this.unisexClothing.getAvailableOutfits());
        
        // Build master outfit list
        this.buildMasterOutfitList();
    }

    buildMasterOutfitList() {
        this.allOutfits.clear();
        
        // Add historical outfits
        this.historicalClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'historical',
                creator: this.historicalClothing.createOutfit.bind(this.historicalClothing)
            });
        });

        // Add modern outfits
        this.modernClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'modern',
                creator: this.modernClothing.createOutfit.bind(this.modernClothing)
            });
        });

        // Add traditional outfits
        this.traditionalClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'traditional',
                creator: this.traditionalClothing.createOutfit.bind(this.traditionalClothing)
            });
        });

        // Add unisex outfits
        this.unisexClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'unisex',
                creator: this.unisexClothing.createOutfit.bind(this.unisexClothing)
            });
        });
    }

    // Create outfit by name
    createOutfit(outfitName, position = { x: 0, y: 0, z: 0 }) {
        const outfitInfo = this.allOutfits.get(outfitName);
        if (outfitInfo) {
            return outfitInfo.creator(outfitName, position);
        }
        console.warn(`Outfit "${outfitName}" not found`);
        return null;
    }

    // Create outfit by category
    createOutfitByCategory(category, outfitName, position = { x: 0, y: 0, z: 0 }) {
        switch(category.toLowerCase()) {
            case 'historical':
                return this.historicalClothing.createOutfit(outfitName, position);
            case 'modern':
                return this.modernClothing.createOutfit(outfitName, position);
            case 'traditional':
                return this.traditionalClothing.createOutfit(outfitName, position);
            case 'unisex':
                return this.unisexClothing.createOutfit(outfitName, position);
            default:
                console.warn(`Category "${category}" not found`);
                return null;
        }
    }

    // Get all available outfits
    getAllAvailableOutfits() {
        return Array.from(this.allOutfits.keys());
    }

    // Get outfits by category
    getOutfitsByCategory(category) {
        return this.categorizedOutfits.get(category.toLowerCase()) || [];
    }

    // Get outfit information
    getOutfitInfo(outfitName) {
        const outfitInfo = this.allOutfits.get(outfitName);
        if (outfitInfo) {
            return {
                name: outfitName,
                category: outfitInfo.category
            };
        }
        return null;
    }

    // Get cultural information for traditional outfits
    getCulturalInfo(outfitName) {
        return this.traditionalClothing.getCulturalInfo(outfitName);
    }

    // Get style recommendations for unisex outfits
    getStyleRecommendations() {
        return this.unisexClothing.getStyleRecommendations();
    }

    // Create random outfit
    createRandomOutfit(position = { x: 0, y: 0, z: 0 }) {
        const allOutfitNames = this.getAllAvailableOutfits();
        const randomIndex = Math.floor(Math.random() * allOutfitNames.length);
        const randomOutfitName = allOutfitNames[randomIndex];
        return this.createOutfit(randomOutfitName, position);
    }

    // Create random outfit from specific category
    createRandomOutfitFromCategory(category, position = { x: 0, y: 0, z: 0 }) {
        const categoryOutfits = this.getOutfitsByCategory(category);
        if (categoryOutfits.length === 0) {
            console.warn(`No outfits found in category "${category}"`);
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * categoryOutfits.length);
        const randomOutfitName = categoryOutfits[randomIndex];
        return this.createOutfitByCategory(category, randomOutfitName, position);
    }

    // Search outfits by name
    searchOutfits(searchTerm) {
        const allOutfits = this.getAllAvailableOutfits();
        return allOutfits.filter(outfit => 
            outfit.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Add custom outfit to specific category
    addCustomOutfit(category, name, creatorFunction) {
        switch(category.toLowerCase()) {
            case 'historical':
                this.historicalClothing.addCustomOutfit(name, creatorFunction);
                break;
            case 'modern':
                this.modernClothing.addCustomOutfit(name, creatorFunction);
                break;
            case 'traditional':
                this.traditionalClothing.addCustomOutfit(name, creatorFunction);
                break;
            case 'unisex':
                this.unisexClothing.addCustomOutfit(name, creatorFunction);
                break;
            default:
                console.warn(`Category "${category}" not found`);
                return false;
        }
        
        // Rebuild master list
        this.buildMasterOutfitList();
        return true;
    }

    // Get outfit statistics
    getOutfitStatistics() {
        const stats = {};
        this.categorizedOutfits.forEach((outfits, category) => {
            stats[category] = outfits.length;
        });
        stats.total = this.getAllAvailableOutfits().length;
        return stats;
    }

    // Create outfit collection for scene
    createOutfitCollection(outfitNames, positions) {
        const collection = new THREE.Group();
        
        outfitNames.forEach((outfitName, index) => {
            const position = positions[index] || { x: index * 3, y: 0, z: 0 };
            const outfit = this.createOutfit(outfitName, position);
            if (outfit) {
                collection.add(outfit);
            }
        });
        
        return collection;
    }

    // Export outfit configuration
    exportOutfitConfiguration() {
        return {
            categories: Object.fromEntries(this.categorizedOutfits),
            allOutfits: Array.from(this.allOutfits.keys()),
            statistics: this.getOutfitStatistics()
        };
    }

    // Create preset outfit combinations
    createPresetCombination(presetName, position = { x: 0, y: 0, z: 0 }) {
        const presets = {
            'elegantEvening': ['eveningGown', 'silkDress'],
            'formalBusiness': ['modernSuit', 'officeSuit'],
            'casualWeekend': ['casualOutfit', 'minimalOutfit'],
            'culturalHeritage': ['aoDai', 'traditionalClothing'],
            'streetwear': ['oversizedOutfit', 'bomberJacketOutfit'],
            'vintageStyle': ['vintageDress', 'flapperDress']
        };

        const outfitNames = presets[presetName];
        if (!outfitNames) {
            console.warn(`Preset "${presetName}" not found`);
            return null;
        }

        return this.createOutfitCollection(outfitNames, [position]);
    }

    // Cleanup
    cleanup() {
        this.allOutfits.clear();
        this.categorizedOutfits.clear();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingDesignManager;
}
