/**
 * AI Content Suggester - Intelligent Content Recommendation System
 * Integrates with Library Manager for smart asset suggestions
 */

import * as THREE from 'three';
import ollamaService from '../../src/services/ollamaService.js';

/**
 * Content Analysis Engine
 */
class ContentAnalyzer {
    constructor() {
        this.analysisCache = new Map();
        this.stylePatterns = new Map();
        this.compatibilityRules = new Map();
        this.ollamaService = ollamaService;
        
        this.setupStylePatterns();
        this.setupCompatibilityRules();
    }

    /**
     * Setup predefined style patterns
     */
    setupStylePatterns() {
        this.stylePatterns.set('fantasy', {
            colors: ['#8B4513', '#228B22', '#4B0082', '#FFD700', '#FF6347'],
            materials: ['wood', 'stone', 'metal', 'fabric', 'leather'],
            patterns: ['ornate', 'weathered', 'magical', 'ancient'],
            keywords: ['medieval', 'magic', 'mythical', 'enchanted', 'legendary']
        });

        this.stylePatterns.set('sci-fi', {
            colors: ['#C0C0C0', '#00FFFF', '#FF00FF', '#000080', '#FFFFFF'],
            materials: ['metal', 'plastic', 'glass', 'carbon_fiber', 'holographic'],
            patterns: ['sleek', 'futuristic', 'high-tech', 'minimalist'],
            keywords: ['futuristic', 'cyber', 'tech', 'digital', 'space']
        });

        this.stylePatterns.set('modern', {
            colors: ['#FFFFFF', '#000000', '#808080', '#4169E1', '#FF6347'],
            materials: ['concrete', 'steel', 'glass', 'plastic', 'wood'],
            patterns: ['clean', 'minimalist', 'geometric', 'contemporary'],
            keywords: ['modern', 'contemporary', 'urban', 'minimal', 'clean']
        });

        this.stylePatterns.set('nature', {
            colors: ['#228B22', '#8B4513', '#87CEEB', '#F4A460', '#FFD700'],
            materials: ['wood', 'stone', 'leaves', 'water', 'soil'],
            patterns: ['organic', 'natural', 'weathered', 'rustic'],
            keywords: ['natural', 'organic', 'outdoor', 'wild', 'rustic']
        });
    }

    /**
     * Setup compatibility rules
     */
    setupCompatibilityRules() {
        this.compatibilityRules.set('fantasy', {
            compatible: ['medieval', 'mythical', 'enchanted'],
            incompatible: ['sci-fi', 'modern', 'industrial'],
            materials: ['wood', 'stone', 'metal', 'fabric'],
            avoid: ['plastic', 'carbon_fiber', 'holographic']
        });

        this.compatibilityRules.set('sci-fi', {
            compatible: ['futuristic', 'cyber', 'space'],
            incompatible: ['fantasy', 'medieval', 'historical'],
            materials: ['metal', 'plastic', 'glass', 'carbon_fiber'],
            avoid: ['wood', 'stone', 'fabric']
        });

        this.compatibilityRules.set('modern', {
            compatible: ['contemporary', 'urban', 'minimalist'],
            incompatible: ['fantasy', 'medieval', 'historical'],
            materials: ['steel', 'glass', 'concrete', 'plastic'],
            avoid: ['ornate', 'weathered', 'ancient']
        });
    }

    /**
     * Analyze scene content and style
     */
    analyzeScene(scene) {
        const sceneId = this.generateSceneId(scene);
        
        if (this.analysisCache.has(sceneId)) {
            return this.analysisCache.get(sceneId);
        }

        const analysis = {
            style: 'unknown',
            dominantColors: [],
            materials: new Set(),
            objectTypes: new Set(),
            complexity: 'medium',
            mood: 'neutral',
            themes: [],
            suggestions: []
        };

        // Analyze scene objects
        scene.traverse((object) => {
            if (object.isMesh) {
                // Analyze materials
                if (object.material) {
                    this.analyzeMaterial(object.material, analysis);
                }
                
                // Analyze geometry
                this.analyzeGeometry(object.geometry, analysis);
                
                // Analyze object type
                this.analyzeObjectType(object, analysis);
            }
        });

        // Determine dominant style
        analysis.style = this.determineStyle(analysis);
        
        // Determine mood
        analysis.mood = this.determineMood(analysis);
        
        // Generate initial suggestions
        analysis.suggestions = this.generateInitialSuggestions(analysis);

        // Cache results
        this.analysisCache.set(sceneId, analysis);

        return analysis;
    }

    /**
     * Analyze material properties
     */
    analyzeMaterial(material, analysis) {
        if (material.color) {
            const colorHex = '#' + material.color.getHexString();
            if (!analysis.dominantColors.includes(colorHex)) {
                analysis.dominantColors.push(colorHex);
            }
        }

        // Determine material type based on properties
        if (material.roughness > 0.7) {
            analysis.materials.add('matte');
        } else if (material.roughness < 0.3) {
            analysis.materials.add('glossy');
        }

        if (material.metalness > 0.5) {
            analysis.materials.add('metallic');
        }

        if (material.transparent) {
            analysis.materials.add('transparent');
        }
    }

    /**
     * Analyze geometry properties
     */
    analyzeGeometry(geometry, analysis) {
        if (geometry.isBoxGeometry) {
            analysis.objectTypes.add('architectural');
        } else if (geometry.isSphereGeometry) {
            analysis.objectTypes.add('organic');
        } else if (geometry.isCylinderGeometry) {
            analysis.objectTypes.add('structural');
        } else if (geometry.isConeGeometry) {
            analysis.objectTypes.add('architectural');
        } else {
            analysis.objectTypes.add('complex');
        }
    }

    /**
     * Analyze object type based on name and properties
     */
    analyzeObjectType(object, analysis) {
        const name = object.name.toLowerCase();
        
        if (name.includes('tree') || name.includes('plant') || name.includes('grass')) {
            analysis.objectTypes.add('vegetation');
        } else if (name.includes('building') || name.includes('house') || name.includes('wall')) {
            analysis.objectTypes.add('architecture');
        } else if (name.includes('character') || name.includes('person') || name.includes('npc')) {
            analysis.objectTypes.add('character');
        } else if (name.includes('vehicle') || name.includes('car') || name.includes('ship')) {
            analysis.objectTypes.add('vehicle');
        } else if (name.includes('light') || name.includes('lamp')) {
            analysis.objectTypes.add('lighting');
        }
    }

    /**
     * Determine scene style
     */
    determineStyle(analysis) {
        const styleScores = new Map();
        
        // Score each style based on analysis
        for (const [styleName, stylePattern] of this.stylePatterns) {
            let score = 0;
            
            // Color matching
            stylePattern.colors.forEach(color => {
                if (analysis.dominantColors.includes(color)) {
                    score += 2;
                }
            });
            
            // Material matching
            stylePattern.materials.forEach(material => {
                if (analysis.materials.has(material)) {
                    score += 1;
                }
            });
            
            // Pattern matching
            stylePattern.patterns.forEach(pattern => {
                if (analysis.objectTypes.has(pattern)) {
                    score += 1;
                }
            });
            
            styleScores.set(styleName, score);
        }
        
        // Return style with highest score
        let maxScore = 0;
        let bestStyle = 'unknown';
        
        for (const [style, score] of styleScores) {
            if (score > maxScore) {
                maxScore = score;
                bestStyle = style;
            }
        }
        
        return bestStyle;
    }

    /**
     * Determine scene mood
     */
    determineMood(analysis) {
        const colors = analysis.dominantColors;
        
        // Analyze color psychology
        let moodScore = {
            happy: 0,
            calm: 0,
            mysterious: 0,
            energetic: 0,
            serious: 0
        };
        
        colors.forEach(color => {
            switch (color) {
                case '#FFD700': // Gold
                case '#FF6347': // Tomato
                    moodScore.happy += 2;
                    moodScore.energetic += 1;
                    break;
                case '#87CEEB': // Sky blue
                case '#228B22': // Forest green
                    moodScore.calm += 2;
                    break;
                case '#4B0082': // Indigo
                case '#000080': // Navy
                    moodScore.mysterious += 2;
                    moodScore.serious += 1;
                    break;
                case '#FFFFFF': // White
                case '#C0C0C0': // Silver
                    moodScore.serious += 1;
                    break;
            }
        });
        
        // Return mood with highest score
        let maxScore = 0;
        let bestMood = 'neutral';
        
        for (const [mood, score] of Object.entries(moodScore)) {
            if (score > maxScore) {
                maxScore = score;
                bestMood = mood;
            }
        }
        
        return bestMood;
    }

    generateInitialSuggestions(analysis) {
        const suggestions = [];
        
        // Suggest based on style
        if (analysis.style !== 'unknown') {
            const stylePattern = this.stylePatterns.get(analysis.style);
            suggestions.push({
                type: 'style',
                category: 'materials',
                items: stylePattern.materials,
                reason: `Matches ${analysis.style} style`
            });
        }
        
        // Suggest based on missing elements
        if (!analysis.objectTypes.has('lighting')) {
            suggestions.push({
                type: 'missing',
                category: 'lighting',
                items: ['lamps', 'torches', 'ambient_lights'],
                reason: 'Scene lacks lighting elements'
            });
        }
        
        if (!analysis.objectTypes.has('vegetation') && analysis.style === 'fantasy') {
            suggestions.push({
                type: 'thematic',
                category: 'vegetation',
                items: ['trees', 'bushes', 'flowers'],
                reason: 'Fantasy scenes benefit from vegetation'
            });
        }
        
        return suggestions;
    }

    generateSceneId(scene) {
        return `scene_${scene.uuid || Date.now()}`;
    }
}

/**
 * AI Content Suggester
 */
class AIContentSuggester {
    constructor(framework, aiService, libraryManager) {
        this.framework = framework;
        this.aiService = aiService;
        this.libraryManager = libraryManager;
        this.analyzer = new ContentAnalyzer();
        
        this.suggestionHistory = [];
        this.userPreferences = new Map();
        this.popularityCache = new Map();
        
        this.setupEventListeners();
    }

    /**
     * Setup event listeners for library changes
     */
    setupEventListeners() {
        if (this.libraryManager && this.libraryManager.on) {
            this.libraryManager.on('assetAdded', (asset) => {
                this.updatePopularityCache(asset.id, 'add');
            });
            
            this.libraryManager.on('assetUsed', (asset) => {
                this.updatePopularityCache(asset.id, 'use');
            });
        }
    }

    /**
     * Get AI-powered content suggestions
     */
    async getSuggestions(scene, context = {}) {
        try {
            // Analyze current scene
            const analysis = this.analyzer.analyzeScene(scene);
            
            // Get AI recommendations
            const aiRecommendations = await this.getAIRecommendations(analysis, context);
            
            // Get library-based suggestions
            const librarySuggestions = await this.getLibrarySuggestions(analysis, aiRecommendations);
            
            // Combine and rank suggestions
            const combinedSuggestions = this.combineSuggestions(aiRecommendations, librarySuggestions);
            
            // Apply user preferences
            const personalizedSuggestions = this.applyUserPreferences(combinedSuggestions);
            
            // Store in history
            this.suggestionHistory.push({
                timestamp: Date.now(),
                analysis,
                suggestions: personalizedSuggestions,
                context
            });
            
            return personalizedSuggestions;
            
        } catch (error) {
            console.error('Failed to get suggestions:', error);
            return this.getFallbackSuggestions(scene);
        }
    }

    /**
     * Get AI recommendations based on scene analysis
     */
    async getAIRecommendations(analysis, context) {
        const prompt = `
        As a 3D content curator, analyze this scene and provide intelligent content recommendations:
        
        Scene Analysis:
        - Style: ${analysis.style}
        - Mood: ${analysis.mood}
        - Dominant Colors: ${analysis.dominantColors.join(', ')}
        - Materials: ${Array.from(analysis.materials).join(', ')}
        - Object Types: ${Array.from(analysis.objectTypes).join(', ')}
        - Complexity: ${analysis.complexity}
        
        Context: ${JSON.stringify(context)}
        
        Provide JSON response with detailed recommendations:
        {
            "recommendations": [
                {
                    "category": "furniture|vegetation|architecture|lighting|decorations|vehicles|characters",
                    "priority": "high|medium|low",
                    "reason": "Why this category is needed",
                    "specificItems": [
                        {
                            "type": "item_type",
                            "style": "matching_style",
                            "color": "suggested_color",
                            "material": "suggested_material",
                            "quantity": "suggested_quantity",
                            "placement": "suggested_placement"
                        }
                    ]
                }
            ],
            "styleEnhancements": {
                "colorPalette": ["hex_color1", "hex_color2", "hex_color3"],
                "materialMix": ["material1", "material2", "material3"],
                "thematicElements": ["element1", "element2", "element3"]
            },
            "compositionAdvice": {
                "balance": "advice on visual balance",
                "focalPoints": "suggested focal points",
                "depth": "how to improve depth perception"
            }
        }
        
        Focus on suggestions that will enhance the scene's visual appeal and maintain stylistic consistency.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.warn('AI recommendations failed, using fallback:', error);
            return this.getFallbackAIRecommendations(analysis);
        }
    }

    /**
     * Get fallback AI recommendations
     */
    getFallbackAIRecommendations(analysis) {
        const recommendations = {
            recommendations: [],
            styleEnhancements: {
                colorPalette: [],
                materialMix: [],
                thematicElements: []
            },
            compositionAdvice: {
                balance: 'Add elements to create visual balance',
                focalPoints: 'Create a central point of interest',
                depth: 'Use foreground, middle ground, and background elements'
            }
        };

        // Basic recommendations based on style
        if (analysis.style === 'fantasy') {
            recommendations.recommendations.push({
                category: 'vegetation',
                priority: 'medium',
                reason: 'Fantasy scenes benefit from magical vegetation',
                specificItems: [
                    {
                        type: 'magical_tree',
                        style: 'fantasy',
                        color: '#228B22',
                        material: 'wood',
                        quantity: 3,
                        placement: 'scattered'
                    }
                ]
            });
        }

        if (analysis.style === 'sci-fi') {
            recommendations.recommendations.push({
                category: 'lighting',
                priority: 'high',
                reason: 'Sci-fi scenes need dramatic lighting',
                specificItems: [
                    {
                        type: 'neon_light',
                        style: 'sci-fi',
                        color: '#00FFFF',
                        material: 'glass',
                        quantity: 5,
                        placement: 'along_paths'
                    }
                ]
            });
        }

        return recommendations;
    }

    /**
     * Get library-based suggestions
     */
    async getLibrarySuggestions(analysis, aiRecommendations) {
        if (!this.libraryManager) {
            return { assets: [], categories: [] };
        }

        const suggestions = {
            assets: [],
            categories: []
        };

        try {
            // Get all library assets
            const allAssets = await this.libraryManager.getAllAssets();
            
            // Filter assets based on AI recommendations
            aiRecommendations.recommendations.forEach(rec => {
                const matchingAssets = this.filterAssetsByCategory(allAssets, rec.category);
                
                matchingAssets.forEach(asset => {
                    const score = this.calculateAssetScore(asset, analysis, rec);
                    if (score > 0.5) {
                        suggestions.assets.push({
                            asset,
                            score,
                            reason: rec.reason,
                            category: rec.category,
                            priority: rec.priority
                        });
                    }
                });
            });

            // Sort by score
            suggestions.assets.sort((a, b) => b.score - a.score);

            // Get category suggestions
            suggestions.categories = this.getCategorySuggestions(allAssets, analysis);

        } catch (error) {
            console.error('Library suggestions failed:', error);
        }

        return suggestions;
    }

    /**
     * Filter assets by category
     */
    filterAssetsByCategory(assets, category) {
        return assets.filter(asset => {
            const assetCategory = asset.category || asset.type || 'unknown';
            return assetCategory.toLowerCase().includes(category.toLowerCase());
        });
    }

    /**
     * Calculate asset compatibility score
     */
    calculateAssetScore(asset, analysis, recommendation) {
        let score = 0;

        // Style compatibility
        if (asset.style && asset.style === analysis.style) {
            score += 0.3;
        }

        // Color compatibility
        if (asset.color && analysis.dominantColors.includes(asset.color)) {
            score += 0.2;
        }

        // Material compatibility
        if (asset.material && analysis.materials.has(asset.material)) {
            score += 0.2;
        }

        // Popularity boost
        const popularity = this.popularityCache.get(asset.id) || 0;
        score += Math.min(popularity * 0.1, 0.2);

        // Priority boost
        if (recommendation.priority === 'high') {
            score += 0.1;
        }

        return Math.min(score, 1.0);
    }

    /**
     * Get category suggestions
     */
    getCategorySuggestions(assets, analysis) {
        const categoryCount = new Map();
        
        assets.forEach(asset => {
            const category = asset.category || 'unknown';
            categoryCount.set(category, (categoryCount.get(category) || 0) + 1);
        });

        const suggestions = [];
        
        for (const [category, count] of categoryCount) {
            if (count > 0) {
                suggestions.push({
                    category,
                    assetCount: count,
                    relevance: this.calculateCategoryRelevance(category, analysis)
                });
            }
        }

        return suggestions.sort((a, b) => b.relevance - a.relevance);
    }

    /**
     * Calculate category relevance
     */
    calculateCategoryRelevance(category, analysis) {
        let relevance = 0.5; // Base relevance

        // Boost relevance based on scene style
        if (analysis.style === 'fantasy' && category === 'vegetation') {
            relevance += 0.3;
        }
        
        if (analysis.style === 'sci-fi' && category === 'lighting') {
            relevance += 0.3;
        }
        
        if (analysis.style === 'modern' && category === 'furniture') {
            relevance += 0.2;
        }

        return Math.min(relevance, 1.0);
    }

    /**
     * Combine AI and library suggestions
     */
    combineSuggestions(aiRecommendations, librarySuggestions) {
        const combined = {
            categories: [],
            assets: [],
            styleEnhancements: aiRecommendations.styleEnhancements || {},
            compositionAdvice: aiRecommendations.compositionAdvice || {}
        };

        // Combine categories
        aiRecommendations.recommendations.forEach(rec => {
            combined.categories.push({
                name: rec.category,
                priority: rec.priority,
                reason: rec.reason,
                specificItems: rec.specificItems || []
            });
        });

        // Add library categories
        librarySuggestions.categories.forEach(cat => {
            if (!combined.categories.find(c => c.name === cat.category)) {
                combined.categories.push({
                    name: cat.category,
                    priority: cat.relevance > 0.7 ? 'medium' : 'low',
                    reason: `${cat.assetCount} assets available`,
                    specificItems: []
                });
            }
        });

        // Add library assets
        combined.assets = librarySuggestions.assets;

        return combined;
    }

    /**
     * Apply user preferences to suggestions
     */
    applyUserPreferences(suggestions) {
        const userId = this.getCurrentUserId();
        const preferences = this.userPreferences.get(userId) || {};
        
        // Boost preferred categories
        if (preferences.preferredCategories) {
            suggestions.categories.forEach(cat => {
                if (preferences.preferredCategories.includes(cat.name)) {
                    cat.priority = cat.priority === 'low' ? 'medium' : 'high';
                }
            });
        }

        // Boost preferred styles
        if (preferences.preferredStyles) {
            suggestions.assets.forEach(asset => {
                if (asset.asset.style && preferences.preferredStyles.includes(asset.asset.style)) {
                    asset.score = Math.min(asset.score + 0.2, 1.0);
                }
            });
        }

        // Filter out disliked items
        if (preferences.dislikedItems) {
            suggestions.assets = suggestions.assets.filter(asset => 
                !preferences.dislikedItems.includes(asset.asset.id)
            );
        }

        return suggestions;
    }

    /**
     * Get fallback suggestions
     */
    getFallbackSuggestions(scene) {
        return {
            categories: [
                {
                    name: 'lighting',
                    priority: 'medium',
                    reason: 'Add lighting to improve scene visibility',
                    specificItems: []
                }
            ],
            assets: [],
            styleEnhancements: {
                colorPalette: ['#FFFFFF', '#808080'],
                materialMix: ['wood', 'metal'],
                thematicElements: []
            },
            compositionAdvice: {
                balance: 'Balance elements throughout the scene',
                focalPoints: 'Create areas of interest',
                depth: 'Use layers to create depth'
            }
        };
    }

    /**
     * Record user feedback
     */
    recordFeedback(suggestionId, feedback) {
        const userId = this.getCurrentUserId();
        const userHistory = this.suggestionHistory.filter(s => s.userId === userId);
        
        // Update user preferences based on feedback
        if (feedback.type === 'positive') {
            this.updatePositiveFeedback(suggestionId, feedback);
        } else if (feedback.type === 'negative') {
            this.updateNegativeFeedback(suggestionId, feedback);
        }
    }

    /**
     * Update positive feedback
     */
    updatePositiveFeedback(suggestionId, feedback) {
        const userId = this.getCurrentUserId();
        let preferences = this.userPreferences.get(userId) || {
            preferredCategories: [],
            preferredStyles: [],
            dislikedItems: []
        };

        if (feedback.category) {
            if (!preferences.preferredCategories.includes(feedback.category)) {
                preferences.preferredCategories.push(feedback.category);
            }
        }

        if (feedback.style) {
            if (!preferences.preferredStyles.includes(feedback.style)) {
                preferences.preferredStyles.push(feedback.style);
            }
        }

        this.userPreferences.set(userId, preferences);
    }

    /**
     * Update negative feedback
     */
    updateNegativeFeedback(suggestionId, feedback) {
        const userId = this.getCurrentUserId();
        let preferences = this.userPreferences.get(userId) || {
            preferredCategories: [],
            preferredStyles: [],
            dislikedItems: []
        };

        if (feedback.assetId) {
            if (!preferences.dislikedItems.includes(feedback.assetId)) {
                preferences.dislikedItems.push(feedback.assetId);
            }
        }

        this.userPreferences.set(userId, preferences);
    }

    /**
     * Update popularity cache
     */
    updatePopularityCache(assetId, action) {
        const current = this.popularityCache.get(assetId) || 0;
        
        if (action === 'use') {
            this.popularityCache.set(assetId, current + 1);
        } else if (action === 'add') {
            this.popularityCache.set(assetId, 0);
        }
    }

    /**
     * Get current user ID (simplified)
     */
    getCurrentUserId() {
        return 'default_user'; // In real implementation, get from auth system
    }

    /**
     * Get suggestion history
     */
    getSuggestionHistory(limit = 10) {
        return this.suggestionHistory.slice(-limit);
    }

    /**
     * Clear suggestion history
     */
    clearHistory() {
        this.suggestionHistory = [];
    }

    /**
     * Get user preferences
     */
    getUserPreferences() {
        const userId = this.getCurrentUserId();
        return this.userPreferences.get(userId) || {
            preferredCategories: [],
            preferredStyles: [],
            dislikedItems: []
        };
    }

    /**
     * Set user preferences
     */
    setUserPreferences(preferences) {
        const userId = this.getCurrentUserId();
        this.userPreferences.set(userId, preferences);
    }

    /**
     * Dispose of content suggester
     */
    dispose() {
        this.suggestionHistory = [];
        this.userPreferences.clear();
        this.popularityCache.clear();
        this.analyzer = null;
        this.framework = null;
        this.aiService = null;
        this.libraryManager = null;
    }
}

export {
    ContentAnalyzer,
    AIContentSuggester
};
