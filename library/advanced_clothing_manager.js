/**
 * Advanced Clothing Design Manager Library
 * Main system that integrates all advanced clothing design libraries from part_6
 */

class AdvancedClothingManager {
    constructor() {
        this.fantasyClothing = new FantasyClothing();
        this.formalClothing = new FormalClothing();
        this.casualSportClothing = new CasualSportClothing();
        this.professionalClothing = new ProfessionalClothing();
        
        this.allOutfits = new Map();
        this.categorizedOutfits = new Map();
        this.initializeCategories();
    }

    initializeCategories() {
        this.categorizedOutfits.set('fantasy', this.fantasyClothing.getAvailableOutfits());
        this.categorizedOutfits.set('formal', this.formalClothing.getAvailableOutfits());
        this.categorizedOutfits.set('casual', this.casualSportClothing.getAvailableOutfits());
        this.categorizedOutfits.set('professional', this.professionalClothing.getAvailableOutfits());
        
        // Build master outfit list
        this.buildMasterOutfitList();
    }

    buildMasterOutfitList() {
        this.allOutfits.clear();
        
        // Add fantasy outfits
        this.fantasyClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'fantasy',
                creator: this.fantasyClothing.createOutfit.bind(this.fantasyClothing),
                themeInfo: this.fantasyClothing.getThemeInfo(outfit)
            });
        });

        // Add formal outfits
        this.formalClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'formal',
                creator: this.formalClothing.createOutfit.bind(this.formalClothing),
                occasionInfo: this.formalClothing.getOccasionSuggestions(outfit)
            });
        });

        // Add casual/sport outfits
        this.casualSportClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'casual',
                creator: this.casualSportClothing.createOutfit.bind(this.casualSportClothing),
                activityInfo: this.casualSportClothing.getMaterialProperties(outfit)
            });
        });

        // Add professional outfits
        this.professionalClothing.getAvailableOutfits().forEach(outfit => {
            this.allOutfits.set(outfit, {
                category: 'professional',
                creator: this.professionalClothing.createOutfit.bind(this.professionalClothing),
                professionInfo: this.professionalClothing.getProfessionInfo(outfit)
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
            case 'fantasy':
                return this.fantasyClothing.createOutfit(outfitName, position);
            case 'formal':
                return this.formalClothing.createOutfit(outfitName, position);
            case 'casual':
                return this.casualSportClothing.createOutfit(outfitName, position);
            case 'professional':
                return this.professionalClothing.createOutfit(outfitName, position);
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
                category: outfitInfo.category,
                themeInfo: outfitInfo.themeInfo,
                occasionInfo: outfitInfo.occasionInfo,
                activityInfo: outfitInfo.activityInfo,
                professionInfo: outfitInfo.professionInfo
            };
        }
        return null;
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
            case 'fantasy':
                this.fantasyClothing.addCustomOutfit(name, creatorFunction);
                break;
            case 'formal':
                this.formalClothing.addCustomOutfit(name, creatorFunction);
                break;
            case 'casual':
                this.casualSportClothing.addCustomOutfit(name, creatorFunction);
                break;
            case 'professional':
                this.professionalClothing.addCustomOutfit(name, creatorFunction);
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

    // Create themed collection
    createThemedCollection(theme, position = { x: 0, y: 0, z: 0 }) {
        const themes = {
            'fantasyAdventure': ['superheroCape', 'knightArmor', 'magicPrincessDress'],
            'elegantEvening': ['sparklingEveningGown', 'silkGownWithCape', 'cinderellaDress'],
            'casualWeekend': ['workoutOutfit', 'streetwearOutfit', 'beachOutfit'],
            'professionalBusiness': ['classicThreePieceSuit', 'formalSuit', 'gatsbyStyle'],
            'scifiFuture': ['cyberpunkOutfit', 'astronautSuit', 'techwearOutfit'],
            'sportsActive': ['racingSuit', 'workoutOutfit', 'hikingGear'],
            'medicalService': ['nurseUniform', 'mechanicUniform'],
            'culturalElegant': ['asianOutfit', 'formalSuit']
        };

        const outfitNames = themes[theme];
        if (!outfitNames) {
            console.warn(`Theme "${theme}" not found`);
            return null;
        }

        return this.createOutfitCollection(outfitNames, [position]);
    }

    // Get recommendations based on context
    getRecommendations(context) {
        const recommendations = {
            'party': {
                primary: ['sparklingEveningGown', 'cinderellaDress', 'gatsbyStyle'],
                secondary: ['backlessDress', 'silkGownWithCape'],
                category: 'formal'
            },
            'work': {
                primary: ['classicThreePieceSuit', 'formalSuit', 'asianOutfit'],
                secondary: ['highFashionCoat'],
                category: 'professional'
            },
            'sports': {
                primary: ['workoutOutfit', 'racingSuit', 'hikingGear'],
                secondary: ['retroSportGear', 'techwearOutfit'],
                category: 'casual'
            },
            'casual': {
                primary: ['streetwearOutfit', 'casualDenimOutfit', 'beachOutfit'],
                secondary: ['floralDress'],
                category: 'casual'
            },
            'gaming': {
                primary: ['cyberpunkOutfit', 'techwearOutfit'],
                secondary: ['mechanicUniform'],
                category: 'fantasy'
            },
            'fantasy': {
                primary: ['superheroCape', 'magicPrincessDress', 'knightArmor'],
                secondary: ['steampunkOutfit', 'ninjaOutfit'],
                category: 'fantasy'
            }
        };

        return recommendations[context] || { primary: [], secondary: [], category: 'all' };
    }

    // Export outfit configuration
    exportOutfitConfiguration() {
        return {
            categories: Object.fromEntries(this.categorizedOutfits),
            allOutfits: Array.from(this.allOutfits.keys()),
            statistics: this.getOutfitStatistics(),
            themes: ['fantasyAdventure', 'elegantEvening', 'casualWeekend', 'professionalBusiness', 
                    'scifiFuture', 'sportsActive', 'medicalService', 'culturalElegant']
        };
    }

    // Create outfit with variations
    createOutfitWithVariations(baseOutfitName, variations = {}) {
        const baseOutfit = this.createOutfit(baseOutfitName, variations.position || { x: 0, y: 0, z: 0 });
        if (!baseOutfit) return null;

        // Apply color variation
        if (variations.color) {
            baseOutfit.traverse((child) => {
                if (child.material) {
                    child.material.color.set(variations.color);
                }
            });
        }

        // Apply scale variation
        if (variations.scale) {
            baseOutfit.scale.set(variations.scale, variations.scale, variations.scale);
        }

        // Apply material properties
        if (variations.roughness !== undefined) {
            baseOutfit.traverse((child) => {
                if (child.material) {
                    child.material.roughness = variations.roughness;
                }
            });
        }

        return baseOutfit;
    }

    // Cleanup
    cleanup() {
        this.allOutfits.clear();
        this.categorizedOutfits.clear();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedClothingManager;
}
