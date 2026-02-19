/**
 * AI Character Generator - Gemini AI Integration for 3D Character Creation
 */

import ollamaService from '../../src/services/ollamaService.js';

/**
 * Gemini AI Manager
 */
class GeminiAIManager {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.ollamaService = ollamaService;
        this.isInitialized = false;
    }
    
    /**
     * Initialize Gemini AI
     */
    async init() {
        try {
            // Test API connection
            const response = await this.generateText("Hello, can you respond with 'AI Ready'?");
            if (response.includes('AI Ready')) {
                this.isInitialized = true;
                console.log('Gemini AI initialized successfully');
                return true;
            }
        } catch (error) {
            console.error('Failed to initialize Gemini AI:', error);
            return false;
        }
        return false;
    }
    
    /**
     * Generate text using Gemini AI
     */
    async generateText(prompt, options = {}) {
        if (!this.apiKey) {
            throw new Error('Gemini API key is required');
        }
        
        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: options.temperature || 0.7,
                topK: options.topK || 40,
                topP: options.topP || 0.95,
                maxOutputTokens: options.maxTokens || 2048,
            }
        };
        
        try {
            const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.candidates[0]?.content?.parts[0]?.text || '';
        } catch (error) {
            console.error('Gemini API error:', error);
            throw error;
        }
    }
    
    /**
     * Generate character description
     */
    async generateCharacterDescription(userPrompt) {
        const prompt = `
As a 3D character designer, create a detailed character description based on this request: "${userPrompt}"

Please provide a JSON response with the following structure:
{
    "name": "Character name",
    "race": "Human/Elf/Orc/Alien/etc",
    "gender": "Male/Female/Other",
    "age": "Age range",
    "height": "Height in cm",
    "build": "Body type (slim/athletic/heavy/etc)",
    "appearance": {
        "skinColor": "Hex color code",
        "hairColor": "Hex color code", 
        "hairStyle": "Hairstyle description",
        "eyeColor": "Hex color code",
        "facialFeatures": "Key facial features"
    },
    "clothing": {
        "style": "Clothing style (fantasy/sci-fi/casual/etc)",
        "primaryColor": "Hex color code",
        "secondaryColor": "Hex color code",
        "accessories": "List of accessories"
    },
    "personality": "Brief personality description",
    "specialFeatures": "Any special or unique features"
}

Focus on creating visually interesting and unique characters suitable for 3D modeling.
        `;
        
        try {
            const response = await this.generateText(prompt);
            // Try to parse JSON response
            try {
                return JSON.parse(response);
            } catch (parseError) {
                // If parsing fails, extract key information manually
                return this.extractCharacterInfo(response);
            }
        } catch (error) {
            console.error('Failed to generate character description:', error);
            return this.getDefaultCharacter();
        }
    }
    
    /**
     * Extract character info from text response
     */
    extractCharacterInfo(text) {
        const character = {
            name: "AI Character",
            race: "Human",
            gender: "Unspecified",
            age: "Adult",
            height: "170",
            build: "Athletic",
            appearance: {
                skinColor: "#FDBCB4",
                hairColor: "#4A4A4A",
                hairStyle: "Short",
                eyeColor: "#8B4513",
                facialFeatures: "Standard"
            },
            clothing: {
                style: "Casual",
                primaryColor: "#4169E1",
                secondaryColor: "#FFFFFF",
                accessories: []
            },
            personality: "Friendly",
            specialFeatures: "None"
        };
        
        // Simple extraction logic
        const lines = text.split('\n');
        lines.forEach(line => {
            if (line.toLowerCase().includes('name')) {
                character.name = line.split(':')[1]?.trim() || character.name;
            }
            if (line.toLowerCase().includes('race')) {
                character.race = line.split(':')[1]?.trim() || character.race;
            }
            // Add more extraction logic as needed
        });
        
        return character;
    }
    
    /**
     * Get default character
     */
    getDefaultCharacter() {
        return {
            name: "Default Character",
            race: "Human",
            gender: "Unspecified",
            age: "Adult",
            height: "170",
            build: "Athletic",
            appearance: {
                skinColor: "#FDBCB4",
                hairColor: "#4A4A4A",
                hairStyle: "Short",
                eyeColor: "#8B4513",
                facialFeatures: "Standard"
            },
            clothing: {
                style: "Casual",
                primaryColor: "#4169E1",
                secondaryColor: "#FFFFFF",
                accessories: []
            },
            personality: "Friendly",
            specialFeatures: "None"
        };
    }
    
    /**
     * Generate character backstory
     */
    async generateCharacterBackstory(character) {
        const prompt = `
Create a compelling backstory for this 3D character:
Name: ${character.name}
Race: ${character.race}
Gender: ${character.gender}
Personality: ${character.personality}
Special Features: ${character.specialFeatures}

Write a 2-3 paragraph backstory that would be suitable for a game or animated story. Make it engaging and give the character motivation and depth.
        `;
        
        try {
            return await this.generateText(prompt);
        } catch (error) {
            console.error('Failed to generate backstory:', error);
            return "A mysterious character with an unknown past, ready to embark on new adventures.";
        }
    }
    
    /**
     * Generate animation suggestions
     */
    async generateAnimationSuggestions(character) {
        const prompt = `
Based on this character description, suggest 5 suitable animations for a 3D character:

Character: ${character.name}
Race: ${character.race}
Build: ${character.build}
Personality: ${character.personality}

Provide a JSON array of animation names that would fit this character's personality and physical characteristics.
Example: ["idle", "walk", "run", "jump", "attack"]
        `;
        
        try {
            const response = await this.generateText(prompt);
            try {
                return JSON.parse(response);
            } catch (parseError) {
                return ["idle", "walk", "run", "jump", "wave"];
            }
        } catch (error) {
            console.error('Failed to generate animation suggestions:', error);
            return ["idle", "walk", "run", "jump", "wave"];
        }
    }
}

/**
 * AI Character Generator System
 */
class AICharacterGenerator {
    constructor(framework, geminiApiKey) {
        this.framework = framework;
        this.gemini = new GeminiAIManager(geminiApiKey);
        this.characterTemplates = new Map();
        this.generatedCharacters = new Map();
        this.isInitialized = false;
    }
    
    /**
     * Initialize the character generator
     */
    async init() {
        try {
            const success = await this.gemini.init();
            if (success) {
                this.setupCharacterTemplates();
                this.isInitialized = true;
                console.log('AI Character Generator initialized');
                return true;
            }
        } catch (error) {
            console.error('Failed to initialize AI Character Generator:', error);
        }
        return false;
    }
    
    /**
     * Setup character templates
     */
    setupCharacterTemplates() {
        // Basic human templates
        this.characterTemplates.set('human_male', {
            bodyType: 'male_basic',
            defaultHeight: 180,
            defaultScale: new THREE.Vector3(1, 1, 1)
        });
        
        this.characterTemplates.set('human_female', {
            bodyType: 'female_basic',
            defaultHeight: 165,
            defaultScale: new THREE.Vector3(0.95, 0.95, 0.95)
        });
        
        // Fantasy templates
        this.characterTemplates.set('elf', {
            bodyType: 'elf_basic',
            defaultHeight: 175,
            defaultScale: new THREE.Vector3(0.9, 1.1, 0.9)
        });
        
        this.characterTemplates.set('orc', {
            bodyType: 'orc_basic',
            defaultHeight: 190,
            defaultScale: new THREE.Vector3(1.2, 1.1, 1.2)
        });
    }
    
    /**
     * Generate character from AI prompt
     */
    async generateCharacter(userPrompt, position = null) {
        if (!this.isInitialized) {
            throw new Error('AI Character Generator not initialized');
        }
        
        try {
            // Generate character description using AI
            const characterDesc = await this.gemini.generateCharacterDescription(userPrompt);
            
            // Generate backstory
            const backstory = await this.gemini.generateCharacterBackstory(characterDesc);
            characterDesc.backstory = backstory;
            
            // Generate animation suggestions
            const animations = await this.gemini.generateAnimationSuggestions(characterDesc);
            characterDesc.animations = animations;
            
            // Create 3D character
            const characterEntity = await this.create3DCharacter(characterDesc, position);
            
            // Store character
            this.generatedCharacters.set(characterEntity.id, {
                entity: characterEntity,
                description: characterDesc
            });
            
            console.log(`Generated AI character: ${characterDesc.name}`);
            return characterEntity;
            
        } catch (error) {
            console.error('Failed to generate character:', error);
            throw error;
        }
    }
    
    /**
     * Create 3D character from description
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
                this.createCharacterGeometry(characterDesc, template),
                this.createCharacterMaterial(characterDesc)
            ),
            new this.framework.getComponent('Animation')(),
            new this.framework.getComponent('Physics')({ mass: 70 })
        ]);
        
        // Add character metadata
        entity.userData.characterData = characterDesc;
        
        return entity;
    }
    
    /**
     * Get character template
     */
    getCharacterTemplate(race) {
        const raceKey = race.toLowerCase();
        return this.characterTemplates.get(raceKey) || this.characterTemplates.get('human_male');
    }
    
    /**
     * Create character geometry
     */
    createCharacterGeometry(characterDesc, template) {
        // Create basic humanoid geometry
        const geometry = new THREE.Group();
        
        // Body parts
        const bodyGeometry = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
        const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
        const armGeometry = new THREE.CapsuleGeometry(0.1, 0.8, 4, 8);
        const legGeometry = new THREE.CapsuleGeometry(0.15, 0.9, 4, 8);
        
        // Create meshes for body parts
        const bodyMesh = new THREE.Mesh(bodyGeometry);
        const headMesh = new THREE.Mesh(headGeometry);
        const leftArmMesh = new THREE.Mesh(armGeometry);
        const rightArmMesh = new THREE.Mesh(armGeometry);
        const leftLegMesh = new THREE.Mesh(legGeometry);
        const rightLegMesh = new THREE.Mesh(legGeometry);
        
        // Position body parts
        bodyMesh.position.y = 0.6;
        headMesh.position.y = 1.5;
        leftArmMesh.position.set(-0.4, 0.8, 0);
        rightArmMesh.position.set(0.4, 0.8, 0);
        leftLegMesh.position.set(-0.2, -0.3, 0);
        rightLegMesh.position.set(0.2, -0.3, 0);
        
        // Add to geometry group
        geometry.add(bodyMesh, headMesh, leftArmMesh, rightArmMesh, leftLegMesh, rightLegMesh);
        
        return geometry;
    }
    
    /**
     * Create character material
     */
    createCharacterMaterial(characterDesc) {
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(characterDesc.appearance.skinColor),
            roughness: 0.8,
            metalness: 0.1
        });
        
        return material;
    }
    
    /**
     * Add clothing to character
     */
    addClothing(entity, clothingDesc) {
        // Create clothing geometry
        const clothingGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.3);
        const clothingMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(clothingDesc.primaryColor),
            roughness: 0.9,
            metalness: 0.0
        });
        
        const clothing = new THREE.Mesh(clothingGeometry, clothingMaterial);
        clothing.position.y = 0.6;
        
        // Add to character
        const transform = entity.components.get('Transform');
        if (transform && transform.object3D) {
            transform.object3D.add(clothing);
        }
        
        return clothing;
    }
    
    /**
     * Add hair to character
     */
    addHair(entity, hairDesc) {
        // Create hair geometry based on style
        let hairGeometry;
        
        switch (hairDesc.toLowerCase()) {
            case 'short':
                hairGeometry = new THREE.SphereGeometry(0.3, 16, 16);
                break;
            case 'long':
                hairGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.8, 16);
                break;
            default:
                hairGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        }
        
        const hairMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(hairDesc),
            roughness: 0.9,
            metalness: 0.0
        });
        
        const hair = new THREE.Mesh(hairGeometry, hairMaterial);
        hair.position.y = 1.7;
        
        // Add to character
        const transform = entity.components.get('Transform');
        if (transform && transform.object3D) {
            transform.object3D.add(hair);
        }
        
        return hair;
    }
    
    /**
     * Get generated character
     */
    getCharacter(entityId) {
        return this.generatedCharacters.get(entityId);
    }
    
    /**
     * Get all generated characters
     */
    getAllCharacters() {
        return Array.from(this.generatedCharacters.entries());
    }
    
    /**
     * Remove character
     */
    removeCharacter(entityId) {
        const character = this.generatedCharacters.get(entityId);
        if (character) {
            this.framework.removeEntity(entityId);
            this.generatedCharacters.delete(entityId);
        }
    }
    
    /**
     * Export character data
     */
    exportCharacter(entityId) {
        const character = this.generatedCharacters.get(entityId);
        if (character) {
            return {
                description: character.description,
                position: character.entity.components.get('Transform').position,
                rotation: character.entity.components.get('Transform').rotation,
                scale: character.entity.components.get('Transform').scale
            };
        }
        return null;
    }
    
    /**
     * Import character data
     */
    async importCharacter(characterData) {
        const entity = await this.create3DCharacter(
            characterData.description,
            characterData.position
        );
        
        const transform = entity.components.get('Transform');
        transform.setRotation(characterData.rotation);
        transform.setScale(characterData.scale);
        
        return entity;
    }
    
    /**
     * Dispose of character generator
     */
    dispose() {
        this.generatedCharacters.clear();
        this.characterTemplates.clear();
        this.gemini = null;
        this.framework = null;
    }
}

export {
    GeminiAIManager,
    AICharacterGenerator
};
