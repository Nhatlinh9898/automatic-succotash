/**
 * AI Prompt Assistant - Smart Character Creation Guide
 * Helps users combine existing prompts with custom requirements
 */

import { maleCharacterPrompts, femaleCharacterPrompts } from './CharacterPrompts.js';

/**
 * AI Prompt Assistant Class
 */
class AIPromptAssistant {
    constructor() {
        this.referencePrompts = {
            male: maleCharacterPrompts,
            female: femaleCharacterPrompts
        };
        this.creationRules = new Map();
        this.userHistory = [];
        this.isInitialized = false;
    }
    
    /**
     * Initialize the assistant
     */
    async init() {
        this.setupCreationRules();
        this.isInitialized = true;
        console.log('AI Prompt Assistant initialized');
        return true;
    }
    
    /**
     * Setup character creation rules
     */
    setupCreationRules() {
        this.creationRules.set('basic_structure', {
            order: ['race', 'age', 'gender', 'build', 'appearance', 'clothing', 'personality', 'background'],
            required: ['race', 'age', 'gender'],
            recommended: ['build', 'appearance', 'clothing']
        });
        
        this.creationRules.set('detail_levels', {
            basic: {
                elements: ['race', 'age', 'gender', 'basic_appearance'],
                description: 'Simple character with essential details'
            },
            detailed: {
                elements: ['race', 'age', 'gender', 'build', 'detailed_appearance', 'clothing_style'],
                description: 'Character with moderate detail'
            },
            ultimate: {
                elements: ['race', 'age', 'gender', 'build', 'detailed_appearance', 'detailed_clothing', 'personality', 'background'],
                description: 'Maximum detail character with full backstory'
            }
        });
        
        this.creationRules.set('character_archetypes', {
            hero: {
                traits: ['brave', 'honorable', 'protective', 'selfless'],
                build: 'athletic',
                clothing: 'functional',
                background: 'noble or mysterious'
            },
            villain: {
                traits: ['manipulative', 'intelligent', 'charismatic', 'ambitious'],
                build: 'imposing',
                clothing: 'elegant_dark',
                background: 'tragic or corrupted'
            },
            mentor: {
                traits: ['wise', 'patient', 'guiding', 'experienced'],
                build: 'slender',
                clothing: 'robes',
                background: 'ancient knowledge'
            },
            companion: {
                traits: ['loyal', 'optimistic', 'supportive', 'brave'],
                build: 'versatile',
                clothing: 'practical',
                background: 'humble or skilled'
            }
        });
        
        this.creationRules.set('genre_guidelines', {
            fantasy: {
                races: ['human', 'elf', 'dwarf', 'orc', 'dragonborn', 'fairy'],
                clothing: ['armor', 'robes', 'leather', 'enchanted'],
                settings: ['medieval', 'magical', 'mythical'],
                elements: ['magic', 'ancient', 'mystical']
            },
            modern: {
                races: ['human_various_ethnicities'],
                clothing: ['business', 'casual', 'professional', 'sportswear'],
                settings: ['urban', 'corporate', 'contemporary'],
                elements: ['technology', 'realistic', 'practical']
            },
            scifi: {
                races: ['human', 'alien', 'android', 'cyborg'],
                clothing: ['futuristic', 'tactical', 'tech_wear'],
                settings: ['space', 'future', 'advanced'],
                elements: ['technology', 'cybernetics', 'space']
            }
        });
    }
    
    /**
     * Analyze user request and suggest approach
     */
    analyzeUserRequest(userInput) {
        const analysis = {
            detectedElements: this.detectElements(userInput),
            suggestedGenre: this.detectGenre(userInput),
            suggestedArchetype: this.detectArchetype(userInput),
            detailLevel: this.suggestDetailLevel(userInput),
            missingElements: [],
            recommendations: []
        };
        
        // Check for missing required elements
        const required = this.creationRules.get('basic_structure').required;
        analysis.missingElements = required.filter(element => 
            !analysis.detectedElements.includes(element)
        );
        
        // Generate recommendations
        analysis.recommendations = this.generateRecommendations(analysis);
        
        return analysis;
    }
    
    /**
     * Detect character elements from user input
     */
    detectElements(input) {
        const elements = [];
        const lowerInput = input.toLowerCase();
        
        // Detect gender
        if (lowerInput.includes('male') || lowerInput.includes('man') || lowerInput.includes('guy')) {
            elements.push('gender_male');
        } else if (lowerInput.includes('female') || lowerInput.includes('woman') || lowerInput.includes('girl')) {
            elements.push('gender_female');
        }
        
        // Detect race
        const races = ['human', 'elf', 'dwarf', 'orc', 'dragonborn', 'alien', 'android', 'cyborg'];
        races.forEach(race => {
            if (lowerInput.includes(race)) {
                elements.push(`race_${race}`);
            }
        });
        
        // Detect age
        if (lowerInput.includes('young') || lowerInput.includes('teen') || lowerInput.includes('youth')) {
            elements.push('age_young');
        } else if (lowerInput.includes('old') || lowerInput.includes('elderly') || lowerInput.includes('ancient')) {
            elements.push('age_old');
        } else if (lowerInput.includes('middle') || lowerInput.includes('adult')) {
            elements.push('age_adult');
        }
        
        // Detect build
        if (lowerInput.includes('muscular') || lowerInput.includes('strong') || lowerInput.includes('athletic')) {
            elements.push('build_muscular');
        } else if (lowerInput.includes('slim') || lowerInput.includes('thin') || lowerInput.includes('slender')) {
            elements.push('build_slender');
        } else if (lowerInput.includes('stocky') || lowerInput.includes('heavy') || lowerInput.includes('large')) {
            elements.push('build_stocky');
        }
        
        // Detect clothing style
        if (lowerInput.includes('armor') || lowerInput.includes('plate') || lowerInput.includes('chainmail')) {
            elements.push('clothing_armor');
        } else if (lowerInput.includes('robe') || lowerInput.includes('cloak') || lowerInput.includes('garment')) {
            elements.push('clothing_robes');
        } else if (lowerInput.includes('suit') || lowerInput.includes('business') || lowerInput.includes('formal')) {
            elements.push('clothing_business');
        } else if (lowerInput.includes('casual') || lowerInput.includes('street') || lowerInput.includes('modern')) {
            elements.push('clothing_casual');
        }
        
        return elements;
    }
    
    /**
     * Detect genre from user input
     */
    detectGenre(input) {
        const lowerInput = input.toLowerCase();
        
        if (lowerInput.includes('magic') || lowerInput.includes('sword') || lowerInput.includes('fantasy') || 
            lowerInput.includes('wizard') || lowerInput.includes('dragon') || lowerInput.includes('elf')) {
            return 'fantasy';
        } else if (lowerInput.includes('space') || lowerInput.includes('future') || lowerInput.includes('sci-fi') || 
                   lowerInput.includes('robot') || lowerInput.includes('alien') || lowerInput.includes('cyber')) {
            return 'scifi';
        } else if (lowerInput.includes('modern') || lowerInput.includes('contemporary') || lowerInput.includes('today') || 
                   lowerInput.includes('business') || lowerInput.includes('professional')) {
            return 'modern';
        }
        
        return 'mixed'; // Default if unclear
    }
    
    /**
     * Detect character archetype
     */
    detectArchetype(input) {
        const lowerInput = input.toLowerCase();
        const archetypes = this.creationRules.get('character_archetypes');
        
        for (const [archetype, traits] of archetypes.entries()) {
            const matchCount = traits.traits.filter(trait => 
                lowerInput.includes(trait)
            ).length;
            
            if (matchCount >= 2) {
                return archetype;
            }
        }
        
        return 'custom'; // Default if no clear match
    }
    
    /**
     * Suggest detail level based on input
     */
    suggestDetailLevel(input) {
        const wordCount = input.split(' ').length;
        
        if (wordCount < 5) {
            return 'basic';
        } else if (wordCount < 15) {
            return 'detailed';
        } else {
            return 'ultimate';
        }
    }
    
    /**
     * Generate recommendations based on analysis
     */
    generateRecommendations(analysis) {
        const recommendations = [];
        
        // Recommend reference prompts
        if (analysis.detectedElements.includes('gender_male')) {
            recommendations.push({
                type: 'reference_prompts',
                title: 'Similar Male Characters',
                prompts: this.getSimilarPrompts('male', analysis),
                reason: 'Based on your male character preference'
            });
        } else if (analysis.detectedElements.includes('gender_female')) {
            recommendations.push({
                type: 'reference_prompts',
                title: 'Similar Female Characters',
                prompts: this.getSimilarPrompts('female', analysis),
                reason: 'Based on your female character preference'
            });
        }
        
        // Recommend missing elements
        if (analysis.missingElements.length > 0) {
            recommendations.push({
                type: 'missing_elements',
                title: 'Suggested Additions',
                elements: analysis.missingElements,
                reason: 'Essential elements for complete character'
            });
        }
        
        // Recommend detail enhancement
        if (analysis.detailLevel !== 'ultimate') {
            recommendations.push({
                type: 'detail_enhancement',
                title: 'Enhance Your Character',
                current_level: analysis.detailLevel,
                suggested_level: 'ultimate',
                reason: 'Add more detail for better AI generation'
            });
        }
        
        // Recommend genre-specific elements
        if (analysis.suggestedGenre !== 'mixed') {
            recommendations.push({
                type: 'genre_enhancement',
                title: `${analysis.suggestedGenre.toUpperCase()} Elements`,
                genre: analysis.suggestedGenre,
                elements: this.creationRules.get('genre_guidelines')[analysis.suggestedGenre],
                reason: `Add ${analysis.suggestedGenre} specific details`
            });
        }
        
        return recommendations;
    }
    
    /**
     * Get similar reference prompts
     */
    getSimilarPrompts(gender, analysis) {
        const prompts = this.referencePrompts[gender];
        const similar = [];
        
        for (const [key, prompt] of Object.entries(prompts)) {
            let similarityScore = 0;
            
            // Check for matching elements
            analysis.detectedElements.forEach(element => {
                if (prompt.toLowerCase().includes(element.replace('_', ' '))) {
                    similarityScore++;
                }
            });
            
            if (similarityScore > 0) {
                similar.push({
                    key: key,
                    prompt: prompt,
                    similarity: similarityScore
                });
            }
        }
        
        // Sort by similarity and return top 3
        return similar.sort((a, b) => b.similarity - a.similarity).slice(0, 3);
    }
    
    /**
     * Create character creation guide
     */
    createCreationGuide(userInput, analysis) {
        const guide = {
            title: 'Character Creation Guide',
            user_input: userInput,
            analysis: analysis,
            steps: [],
            example_prompt: '',
            tips: []
        };
        
        // Generate step-by-step guide
        guide.steps = this.generateCreationSteps(analysis);
        
        // Generate example prompt
        guide.example_prompt = this.generateExamplePrompt(userInput, analysis);
        
        // Add tips
        guide.tips = this.generateTips(analysis);
        
        return guide;
    }
    
    /**
     * Generate step-by-step creation steps
     */
    generateCreationSteps(analysis) {
        const steps = [];
        const structure = this.creationRules.get('basic_structure');
        
        steps.push({
            step: 1,
            title: 'Define Basic Identity',
            description: 'Start with the essential character elements',
            elements: ['race', 'age', 'gender'],
            current_status: this.checkStepCompletion(analysis, ['race', 'age', 'gender']),
            guidance: this.getStepGuidance('basic_identity', analysis)
        });
        
        steps.push({
            step: 2,
            title: 'Describe Physical Appearance',
            description: 'Add detailed physical characteristics',
            elements: ['build', 'height', 'hair', 'eyes', 'features'],
            current_status: this.checkStepCompletion(analysis, ['build']),
            guidance: this.getStepGuidance('physical_appearance', analysis)
        });
        
        steps.push({
            step: 3,
            title: 'Design Clothing & Accessories',
            description: 'Choose appropriate attire and items',
            elements: ['clothing_style', 'materials', 'accessories', 'weapons'],
            current_status: this.checkStepCompletion(analysis, ['clothing']),
            guidance: this.getStepGuidance('clothing_accessories', analysis)
        });
        
        steps.push({
            step: 4,
            title: 'Define Personality & Background',
            description: 'Add character depth and history',
            elements: ['personality', 'traits', 'background', 'motivation'],
            current_status: this.checkStepCompletion(analysis, ['personality']),
            guidance: this.getStepGuidance('personality_background', analysis)
        });
        
        steps.push({
            step: 5,
            title: 'Finalize & Refine',
            description: 'Review and enhance your prompt',
            elements: ['review', 'enhancement', 'final_touches'],
            current_status: 'pending',
            guidance: this.getStepGuidance('finalization', analysis)
        });
        
        return steps;
    }
    
    /**
     * Check step completion status
     */
    checkStepCompletion(analysis, requiredElements) {
        const detected = analysis.detectedElements;
        const completed = requiredElements.filter(element => 
            detected.some(detected => detected.includes(element))
        ).length;
        
        const percentage = (completed / requiredElements.length) * 100;
        
        if (percentage === 100) return 'completed';
        if (percentage >= 50) return 'in_progress';
        return 'not_started';
    }
    
    /**
     * Get step guidance
     */
    getStepGuidance(stepType, analysis) {
        const guidance = {
            basic_identity: {
                title: 'Essential Information',
                tips: [
                    'Specify the character\'s race (human, elf, dwarf, etc.)',
                    'Include age range (young, adult, elderly)',
                    'Clearly state gender'
                ],
                examples: analysis.detectedElements.includes('gender_male') ? 
                    ['human male age 30', 'elf male age 120', 'orc male age 40'] :
                    ['human female age 25', 'elf female age 150', 'dwarf female age 80']
            },
            physical_appearance: {
                title: 'Physical Details',
                tips: [
                    'Describe body build (athletic, slender, stocky)',
                    'Include height for scale reference',
                    'Add hair color and style',
                    'Describe eye color and expression',
                    'Mention distinctive features'
                ],
                examples: [
                    'muscular athletic build 6\'2"',
                    'slender graceful build 5\'8"',
                    'stocky powerful build 4\'8"'
                ]
            },
            clothing_accessories: {
                title: 'Attire & Equipment',
                tips: [
                    'Choose clothing style appropriate to genre',
                    'Specify materials and colors',
                    'Include weapons or tools',
                    'Add jewelry or meaningful accessories'
                ],
                examples: this.getClothingExamples(analysis.suggestedGenre)
            },
            personality_background: {
                title: 'Character Depth',
                tips: [
                    'Describe key personality traits',
                    'Include background story',
                    'Add motivation or goals',
                    'Mention special abilities or skills'
                ],
                examples: this.getPersonalityExamples(analysis.suggestedArchetype)
            },
            finalization: {
                title: 'Review & Enhance',
                tips: [
                    'Read the complete prompt aloud',
                    'Check for consistency',
                    'Ensure all elements flow naturally',
                    'Add sensory details for vividness'
                ],
                examples: [
                    'Review prompt structure and flow',
                    'Enhance with descriptive language',
                    'Verify character consistency'
                ]
            }
        };
        
        return guidance[stepType] || guidance.basic_identity;
    }
    
    /**
     * Get clothing examples based on genre
     */
    getClothingExamples(genre) {
        const examples = {
            fantasy: [
                'wearing ornate steel armor with royal crest',
                'dressed in elegant dark robes with arcane symbols',
                'clad in practical leather armor with elven craftsmanship'
            ],
            modern: [
                'wearing tailored business suit with silk tie',
                'dressed in casual street clothes with tech gadgets',
                'wearing professional medical scrubs with stethoscope'
            ],
            scifi: [
                'wearing advanced powered armor with tactical attachments',
                'dressed in futuristic tech wear with glowing circuits',
                'wearing sleek flight suit with integrated technology'
            ]
        };
        
        return examples[genre] || examples.fantasy;
    }
    
    /**
     * Get personality examples based on archetype
     */
    getPersonalityExamples(archetype) {
        const examples = {
            hero: [
                'brave and honorable with protective nature',
                'confident and selfless with strong moral compass',
                'determined and courageous with leadership qualities'
            ],
            villain: [
                'manipulative and intelligent with ambitious goals',
                'charismatic and ruthless with strategic mind',
                'cunning and patient with long-term plans'
            ],
            mentor: [
                'wise and patient with vast knowledge',
                'calm and guiding with ancient wisdom',
                'experienced and thoughtful with mystical insight'
            ],
            companion: [
                'loyal and optimistic with supportive nature',
                'brave and cheerful with team spirit',
                'reliable and friendly with helpful attitude'
            ]
        };
        
        return examples[archetype] || examples.hero;
    }
    
    /**
     * Generate example prompt based on user input and analysis
     */
    generateExamplePrompt(userInput, analysis) {
        let examplePrompt = userInput;
        
        // Enhance with missing elements
        if (analysis.missingElements.includes('race')) {
            const suggestedRace = this.suggestRace(analysis);
            examplePrompt = `${suggestedRace} ${examplePrompt}`;
        }
        
        if (analysis.missingElements.includes('age')) {
            const suggestedAge = this.suggestAge(analysis);
            examplePrompt = `${suggestedAge} ${examplePrompt}`;
        }
        
        // Add detail based on analysis
        if (analysis.detailLevel === 'basic') {
            examplePrompt = this.enhanceToDetailed(examplePrompt, analysis);
        } else if (analysis.detailLevel === 'detailed') {
            examplePrompt = this.enhanceToUltimate(examplePrompt, analysis);
        }
        
        return examplePrompt;
    }
    
    /**
     * Suggest race based on analysis
     */
    suggestRace(analysis) {
        const genre = analysis.suggestedGenre;
        const guidelines = this.creationRules.get('genre_guidelines')[genre];
        
        if (guidelines && guidelines.races) {
            return guidelines.races[0]; // Return first suggested race
        }
        
        return 'human'; // Default
    }
    
    /**
     * Suggest age based on analysis
     */
    suggestAge(analysis) {
        if (analysis.detectedElements.includes('age_young')) return 'age 25';
        if (analysis.detectedElements.includes('age_old')) return 'age 70';
        return 'age 30'; // Default adult
    }
    
    /**
     * Enhance prompt to detailed level
     */
    enhanceToDetailed(prompt, analysis) {
        // Add build description
        if (!analysis.detectedElements.some(e => e.includes('build'))) {
            prompt += ', athletic build 6\'0"';
        }
        
        // Add basic appearance
        if (!analysis.detectedElements.some(e => e.includes('hair') || e.includes('eyes'))) {
            prompt += ' with short brown hair and brown eyes';
        }
        
        // Add clothing
        if (!analysis.detectedElements.some(e => e.includes('clothing'))) {
            prompt += ', wearing practical attire appropriate to their role';
        }
        
        return prompt;
    }
    
    /**
     * Enhance prompt to ultimate level
     */
    enhanceToUltimate(prompt, analysis) {
        // Add detailed appearance
        prompt += ', with distinctive facial features and expressive eyes';
        
        // Add detailed clothing
        prompt += ', wearing detailed outfit with specific materials and accessories';
        
        // Add personality
        if (!analysis.detectedElements.some(e => e.includes('personality'))) {
            const archetype = analysis.suggestedArchetype;
            const traits = this.creationRules.get('character_archetypes')[archetype]?.traits || ['brave', 'honorable'];
            prompt += `, ${traits.join(' and ')} personality`;
        }
        
        // Add background
        prompt += ', with detailed background story and motivation';
        
        return prompt;
    }
    
    /**
     * Generate tips for character creation
     */
    generateTips(analysis) {
        const tips = [
            {
                category: 'Structure',
                tip: 'Follow the order: Race → Age → Gender → Build → Appearance → Clothing → Personality → Background'
            },
            {
                category: 'Detail',
                tip: 'Include specific measurements (height, build) for better AI visualization'
            },
            {
                category: 'Consistency',
                tip: 'Ensure all elements work together (e.g., armor for warrior, robes for wizard)'
            },
            {
                category: 'Language',
                tip: 'Use descriptive adjectives and complete sentences for best results'
            }
        ];
        
        // Add genre-specific tips
        if (analysis.suggestedGenre === 'fantasy') {
            tips.push({
                category: 'Fantasy',
                tip: 'Include magical elements, ancient artifacts, or mythical creatures'
            });
        } else if (analysis.suggestedGenre === 'scifi') {
            tips.push({
                category: 'Sci-Fi',
                tip: 'Add technology, cybernetics, or futuristic elements'
            });
        }
        
        return tips;
    }
    
    /**
     * Save user history
     */
    saveToHistory(userInput, guide) {
        this.userHistory.push({
            timestamp: new Date().toISOString(),
            input: userInput,
            guide: guide,
            success: true
        });
        
        // Keep only last 10 entries
        if (this.userHistory.length > 10) {
            this.userHistory.shift();
        }
    }
    
    /**
     * Get user history
     */
    getHistory() {
        return this.userHistory;
    }
    
    /**
     * Clear history
     */
    clearHistory() {
        this.userHistory = [];
    }
}

export { AIPromptAssistant };
