/**
 * Enhanced AI Character Generator - Integration with Library Components
 * Uses existing library components for detailed character creation
 */

import { GeminiAIManager, AICharacterGenerator } from './AICharacterGenerator.js';
import ollamaService from '../../src/services/ollamaService.js';

/**
 * Library Integration Manager
 */
class LibraryIntegrationManager {
    constructor() {
        this.bodyComponents = new Map();
        this.hairComponents = new Map();
        this.clothingComponents = new Map();
        this.ollamaService = ollamaService;
        this.animationComponents = new Map();
        this.isLoaded = false;
    }
    
    /**
     * Load library components
     */
    async loadLibraryComponents() {
        try {
            // Load body components
            await this.loadBodyComponents();
            
            // Load hair components  
            await this.loadHairComponents();
            
            // Load clothing components
            await this.loadClothingComponents();
            
            // Load animation components
            await this.loadAnimationComponents();
            
            this.isLoaded = true;
            console.log('Library components loaded successfully');
            return true;
        } catch (error) {
            console.error('Failed to load library components:', error);
            return false;
        }
    }
    
    /**
     * Load body components from library
     */
    async loadBodyComponents() {
        // Male body components
        this.bodyComponents.set('male_basic', {
            file: '../library/body_components_male_part32.js',
            functions: [
                'addSparklingLaserBody',
                'addMetallicLaserBody', 
                'addAngularLaserBody',
                'addGeometricLaserBody'
            ]
        });
        
        this.bodyComponents.set('male_athletic', {
            file: '../library/body_components_part31.js',
            functions: [
                'addAthleticMaleBody',
                'addMuscularMaleBody',
                'addSlimMaleBody'
            ]
        });
        
        // Female body components
        this.bodyComponents.set('female_basic', {
            file: '../library/body_components_female_part32.js',
            functions: [
                'addElegantFemaleBody',
                'addAthleticFemaleBody',
                'addSlimFemaleBody'
            ]
        });
        
        // Special body types
        this.bodyComponents.set('elf', {
            file: '../library/body_components_part33.js',
            functions: [
                'addElvenBody',
                'addElvenFemaleBody',
                'addElvenMaleBody'
            ]
        });
        
        this.bodyComponents.set('orc', {
            file: '../library/body_components_part29.js',
            functions: [
                'addOrcishBody',
                'addMuscularOrcBody'
            ]
        });
    }
    
    /**
     * Load hair components from library
     */
    async loadHairComponents() {
        // Male hair
        this.hairComponents.set('male_short', {
            file: '../library/male_hair_components_part23.js',
            functions: [
                'addShortMaleHair',
                'addCrewCut',
                'addBuzzCut'
            ]
        });
        
        this.hairComponents.set('male_long', {
            file: '../library/male_hair_components_part27.js',
            functions: [
                'addLongMaleHair',
                'addWavyMaleHair',
                'addStraightMaleHair'
            ]
        });
        
        // Female hair
        this.hairComponents.set('female_short', {
            file: '../library/female_hair_components_part23.js',
            functions: [
                'addShortFemaleHair',
                'addPixieCut',
                'addBobCut'
            ]
        });
        
        this.hairComponents.set('female_long', {
            file: '../library/female_hair_components_part28.js',
            functions: [
                'addLongFemaleHair',
                'addWavyFemaleHair',
                'addCurlyFemaleHair'
            ]
        });
        
        // Special hair
        this.hairComponents.set('elf', {
            file: '../library/female_hair_components_part29.js',
            functions: [
                'addElvenLongHair',
                'addElvenBraidedHair',
                'addElvenFlowingHair'
            ]
        });
    }
    
    /**
     * Load clothing components from library
     */
    async loadClothingComponents() {
        // Fantasy clothing
        this.clothingComponents.set('fantasy', {
            file: '../library/fantasy_clothing.js',
            functions: [
                'addFantasyArmor',
                'addWizardRobes',
                'addElvenGarments',
                'addWarriorOutfit'
            ]
        });
        
        // Modern clothing
        this.clothingComponents.set('modern', {
            file: '../library/modern_clothing.js',
            functions: [
                'addCasualOutfit',
                'addBusinessAttire',
                'addSportswear',
                'addStreetwear'
            ]
        });
        
        // Formal clothing
        this.clothingComponents.set('formal', {
            file: '../library/formal_clothing.js',
            functions: [
                'addFormalSuit',
                'addEveningGown',
                'addTuxedo',
                'addCocktailDress'
            ]
        });
        
        // Traditional clothing
        this.clothingComponents.set('traditional', {
            file: '../library/traditional_clothing.js',
            functions: [
                'addTraditionalAsian',
                'addTraditionalEuropean',
                'addTribalGarments'
            ]
        });
        
        // Professional clothing
        this.clothingComponents.set('professional', {
            file: '../library/professional_clothing.js',
            functions: [
                'addMedicalScrubs',
                'addPoliceUniform',
                'addFirefighterGear',
                'addMilitaryUniform'
            ]
        });
    }
    
    /**
     * Load animation components from library
     */
    async loadAnimationComponents() {
        // Combat animations
        this.animationComponents.set('combat', {
            file: '../library/combat_animations_part46.js',
            functions: [
                'addCombatAnimations',
                'addSwordCombat',
                'addMagicCombat',
                'addUnarmedCombat'
            ]
        });
        
        // Dance animations
        this.animationComponents.set('dance', {
            file: '../library/dance_animations_part46.js',
            functions: [
                'addDanceAnimations',
                'addHipHopDance',
                'addBalletDance',
                'addSalsaDance'
            ]
        });
        
        // Athletics animations
        this.animationComponents.set('athletics', {
            file: '../library/athletics_animations_part46.js',
            functions: [
                'addAthleticAnimations',
                'addRunningAnimations',
                'addJumpingAnimations',
                'addSwimmingAnimations'
            ]
        });
        
        // Gesture animations
        this.animationComponents.set('gesture', {
            file: '../library/gesture_animations_part49.js',
            functions: [
                'addGestureAnimations',
                'addHandGestures',
                'addFacialExpressions',
                'addBodyLanguage'
            ]
        });
    }
    
    /**
     * Get body component for character type
     */
    getBodyComponent(gender, race, bodyType) {
        const key = this.getBodyKey(gender, race, bodyType);
        return this.bodyComponents.get(key) || this.bodyComponents.get('male_basic');
    }
    
    /**
     * Get hair component for character type
     */
    getHairComponent(gender, hairStyle, race) {
        const key = this.getHairKey(gender, hairStyle, race);
        return this.hairComponents.get(key) || this.hairComponents.get('male_short');
    }
    
    /**
     * Get clothing component for character type
     */
    getClothingComponent(style) {
        return this.clothingComponents.get(style) || this.clothingComponents.get('modern');
    }
    
    /**
     * Get animation component for character type
     */
    getAnimationComponent(type) {
        return this.animationComponents.get(type) || this.animationComponents.get('gesture');
    }
    
    /**
     * Get body key
     */
    getBodyKey(gender, race, bodyType) {
        if (race.toLowerCase().includes('elf')) return 'elf';
        if (race.toLowerCase().includes('orc')) return 'orc';
        return `${gender}_${bodyType}`;
    }
    
    /**
     * Get hair key
     */
    getHairKey(gender, hairStyle, race) {
        if (race.toLowerCase().includes('elf')) return 'elf';
        
        const style = hairStyle.toLowerCase();
        if (style.includes('short') || style.includes('crew') || style.includes('buzz')) {
            return `${gender}_short`;
        }
        if (style.includes('long') || style.includes('wavy') || style.includes('curly')) {
            return `${gender}_long`;
        }
        return `${gender}_short`;
    }
    
    /**
     * Load and execute library function
     */
    async loadLibraryFunction(componentType, functionName) {
        try {
            // In a real implementation, you would dynamically import the module
            // For now, we'll return a placeholder function
            return (character) => {
                console.log(`Applying ${componentType} function: ${functionName}`);
                // Placeholder implementation
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
                const mesh = new THREE.Mesh(geometry, material);
                character.add(mesh);
            };
        } catch (error) {
            console.error(`Failed to load library function ${functionName}:`, error);
            return null;
        }
    }
}

/**
 * Enhanced AI Character Generator with Library Integration
 */
class EnhancedAICharacterGenerator extends AICharacterGenerator {
    constructor(framework, geminiApiKey) {
        super(framework, geminiApiKey);
        this.libraryManager = new LibraryIntegrationManager();
        this.useLibraryComponents = true;
    }
    
    /**
     * Initialize enhanced character generator
     */
    async init() {
        const success = await super.init();
        if (success) {
            await this.libraryManager.loadLibraryComponents();
            console.log('Enhanced AI Character Generator initialized with library components');
        }
        return success;
    }
    
    /**
     * Create enhanced 3D character using library components
     */
    async create3DCharacter(characterDesc, position = null) {
        // Get template
        const template = this.getCharacterTemplate(characterDesc.race.toLowerCase());
        
        // Create entity
        const entity = this.framework.createEntity([
            new this.framework.getComponent('Transform')(
                position || new THREE.Vector3(0, 0, 0),
                new THREE.Euler(0, 0, 0),
                template.defaultScale
            ),
            new this.framework.getComponent('Mesh')(
                new THREE.BoxGeometry(1, 2, 1), // Placeholder
                new THREE.MeshStandardMaterial({ color: 0x888888 })
            ),
            new this.framework.getComponent('Animation')(),
            new this.framework.getComponent('Physics')({ mass: 70 })
        ]);
        
        // Add character metadata
        entity.userData.characterData = characterDesc;
        
        // Apply library components if enabled
        if (this.useLibraryComponents && this.libraryManager.isLoaded) {
            await this.applyLibraryComponents(entity, characterDesc);
        } else {
            // Use basic generation
            this.applyBasicComponents(entity, characterDesc);
        }
        
        return entity;
    }
    
    /**
     * Apply library components to character
     */
    async applyLibraryComponents(entity, characterDesc) {
        const characterGroup = new THREE.Group();
        
        // Apply body component
        const bodyComponent = this.libraryManager.getBodyComponent(
            characterDesc.gender.toLowerCase(),
            characterDesc.race.toLowerCase(),
            characterDesc.build.toLowerCase()
        );
        
        if (bodyComponent) {
            const bodyFunction = await this.libraryManager.loadLibraryFunction(
                'body', 
                bodyComponent.functions[0]
            );
            if (bodyFunction) {
                bodyFunction(characterGroup);
            }
        }
        
        // Apply hair component
        const hairComponent = this.libraryManager.getHairComponent(
            characterDesc.gender.toLowerCase(),
            characterDesc.appearance.hairStyle.toLowerCase(),
            characterDesc.race.toLowerCase()
        );
        
        if (hairComponent) {
            const hairFunction = await this.libraryManager.loadLibraryFunction(
                'hair',
                hairComponent.functions[0]
            );
            if (hairFunction) {
                hairFunction(characterGroup);
            }
        }
        
        // Apply clothing component
        const clothingComponent = this.libraryManager.getClothingComponent(
            characterDesc.clothing.style.toLowerCase()
        );
        
        if (clothingComponent) {
            const clothingFunction = await this.libraryManager.loadLibraryFunction(
                'clothing',
                clothingComponent.functions[0]
            );
            if (clothingFunction) {
                clothingFunction(characterGroup);
            }
        }
        
        // Add character group to entity
        const transform = entity.components.get('Transform');
        if (transform && transform.object3D) {
            transform.object3D.add(characterGroup);
        }
        
        // Apply animations
        await this.applyLibraryAnimations(entity, characterDesc);
    }
    
    /**
     * Apply library animations
     */
    async applyLibraryAnimations(entity, characterDesc) {
        const animComponent = entity.components.get('Animation');
        if (!animComponent) return;
        
        // Determine animation type based on character
        let animationType = 'gesture'; // default
        
        if (characterDesc.personality.toLowerCase().includes('warrior') || 
            characterDesc.personality.toLowerCase().includes('fighter')) {
            animationType = 'combat';
        } else if (characterDesc.personality.toLowerCase().includes('dancer') ||
                   characterDesc.personality.toLowerCase().includes('graceful')) {
            animationType = 'dance';
        } else if (characterDesc.personality.toLowerCase().includes('athletic') ||
                   characterDesc.personality.toLowerCase().includes('sporty')) {
            animationType = 'athletics';
        }
        
        const animLibComponent = this.libraryManager.getAnimationComponent(animationType);
        if (animLibComponent) {
            const animationFunction = await this.libraryManager.loadLibraryFunction(
                'animation',
                animLibComponent.functions[0]
            );
            if (animationFunction) {
                animationFunction(entity);
            }
        }
    }
    
    /**
     * Generate enhanced character description with library mapping
     */
    async generateCharacterDescription(userPrompt) {
        const baseDescription = await super.generateCharacterDescription(userPrompt);
        
        // Add library component suggestions
        const enhancedPrompt = `
Based on this character description, suggest the best library components to use:

Character: ${JSON.stringify(baseDescription)}

Available library categories:
- Body: male_basic, male_athletic, female_basic, elf, orc
- Hair: male_short, male_long, female_short, female_long, elf
- Clothing: fantasy, modern, formal, traditional, professional
- Animations: combat, dance, athletics, gesture

Provide a JSON response with suggested components:
{
    "suggestedBody": "component_name",
    "suggestedHair": "component_name", 
    "suggestedClothing": "component_name",
    "suggestedAnimations": "component_name",
    "reasoning": "Why these components were chosen"
}
        `;
        
        try {
            const componentSuggestions = await this.gemini.generateText(enhancedPrompt);
            try {
                const suggestions = JSON.parse(componentSuggestions);
                baseDescription.libraryComponents = suggestions;
            } catch (parseError) {
                // Fallback suggestions
                baseDescription.libraryComponents = {
                    suggestedBody: this.getDefaultBodyComponent(baseDescription),
                    suggestedHair: this.getDefaultHairComponent(baseDescription),
                    suggestedClothing: this.getDefaultClothingComponent(baseDescription),
                    suggestedAnimations: 'gesture',
                    reasoning: 'Fallback suggestions based on character description'
                };
            }
        } catch (error) {
            console.error('Failed to generate component suggestions:', error);
        }
        
        return baseDescription;
    }
    
    /**
     * Get default body component
     */
    getDefaultBodyComponent(characterDesc) {
        const gender = characterDesc.gender.toLowerCase();
        const race = characterDesc.race.toLowerCase();
        const build = characterDesc.build.toLowerCase();
        
        if (race.includes('elf')) return 'elf';
        if (race.includes('orc')) return 'orc';
        return `${gender}_${build}`;
    }
    
    /**
     * Get default hair component
     */
    getDefaultHairComponent(characterDesc) {
        const gender = characterDesc.gender.toLowerCase();
        const hairStyle = characterDesc.appearance.hairStyle.toLowerCase();
        const race = characterDesc.race.toLowerCase();
        
        if (race.includes('elf')) return 'elf';
        if (hairStyle.includes('long')) return `${gender}_long`;
        return `${gender}_short`;
    }
    
    /**
     * Get default clothing component
     */
    getDefaultClothingComponent(characterDesc) {
        const style = characterDesc.clothing.style.toLowerCase();
        
        if (style.includes('fantasy')) return 'fantasy';
        if (style.includes('formal')) return 'formal';
        if (style.includes('traditional')) return 'traditional';
        if (style.includes('professional')) return 'professional';
        return 'modern';
    }
    
    /**
     * Toggle library components usage
     */
    setUseLibraryComponents(use) {
        this.useLibraryComponents = use;
    }
    
    /**
     * Get available library components
     */
    getAvailableComponents() {
        return {
            body: Array.from(this.libraryManager.bodyComponents.keys()),
            hair: Array.from(this.libraryManager.hairComponents.keys()),
            clothing: Array.from(this.libraryManager.clothingComponents.keys()),
            animations: Array.from(this.libraryManager.animationComponents.keys())
        };
    }
}

export {
    LibraryIntegrationManager,
    EnhancedAICharacterGenerator
};
