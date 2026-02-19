/**
 * Character AI Service - Specialized AI service for character generation
 * Integrates with framework/ai components and ollamaService
 */

import ollamaService from './ollamaService.js';
import { 
  getMalePrompt, 
  getFemalePrompt, 
  getRandomMalePrompt, 
  getRandomFemalePrompt,
  maleCharacterPrompts,
  femaleCharacterPrompts
} from '../../framework/ai/CharacterPrompts.js';

class CharacterAIService {
  constructor() {
    this.ollamaService = ollamaService;
    this.isProcessing = false;
    this.generationCache = new Map();
    this.characterHistory = [];
    this.defaultModel = 'llama3.2:3b';
  }

  /**
   * Generate character with AI processing
   */
  async generateCharacter(options = {}) {
    const {
      characterType = 'fantasy',
      gender = 'male',
      frameworkPrompt = null,
      customPrompt = '',
      template = null,
      traits = {},
      model = this.defaultModel
    } = options;

    if (this.isProcessing) {
      throw new Error('Character generation already in progress');
    }

    this.isProcessing = true;

    try {
      // Build comprehensive prompt
      const prompt = this.buildCharacterPrompt({
        characterType,
        gender,
        frameworkPrompt,
        customPrompt,
        template,
        traits
      });

      // Generate using ollama service
      const response = await this.ollamaService.generateResponse(prompt, {
        model,
        temperature: 0.8,
        maxTokens: 2000
      });

      // Process and structure the response
      const character = this.processCharacterResponse(response, {
        characterType,
        gender,
        frameworkPrompt,
        generationTime: new Date().toISOString()
      });

      // Cache the result
      this.cacheCharacter(character);

      // Add to history
      this.addToHistory(character);

      return character;

    } catch (error) {
      console.error('Character AI generation failed:', error);
      throw error;
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Build comprehensive character prompt
   */
  buildCharacterPrompt(options) {
    const {
      characterType,
      gender,
      frameworkPrompt,
      customPrompt,
      template,
      traits
    } = options;

    let prompt = '';

    // Priority 1: Framework prompt
    if (frameworkPrompt) {
      if (gender === 'male') {
        prompt = getMalePrompt(frameworkPrompt);
      } else {
        prompt = getFemalePrompt(frameworkPrompt);
      }
      prompt += '\n\nBased on this character concept, please create a detailed character profile.';
    }
    // Priority 2: Template
    else if (template) {
      prompt = template.template;
      prompt = this.fillTemplateVariables(prompt, traits, gender);
    }
    // Priority 3: Custom build
    else {
      prompt = `Create a detailed ${characterType} character with the following specifications:\n\n`;
      prompt += `Gender: ${gender}\n`;
      prompt += `Type: ${characterType}\n\n`;

      Object.entries(traits).forEach(([key, value]) => {
        if (value && value.trim()) {
          prompt += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
        }
      });
    }

    // Add custom prompt if provided
    if (customPrompt.trim()) {
      prompt += `\n\nAdditional requirements: ${customPrompt}`;
    }

    // Standard character requirements
    prompt += `\n\nPlease provide a comprehensive character profile including:\n`;
    prompt += `1. Character name and title\n`;
    prompt += `2. Detailed physical description (height, build, features, clothing)\n`;
    prompt += `3. Personality traits and psychology\n`;
    prompt += `4. Backstory and motivation\n`;
    prompt += `5. Skills and abilities\n`;
    prompt += `6. Relationships and social connections\n`;
    prompt += `7. Goals and conflicts\n`;
    prompt += `8. Character arc and development potential\n`;
    prompt += `9. Dialogue style and speech patterns\n`;
    prompt += `10. Visual appearance details for 3D modeling\n\n`;

    prompt += `Format the response as a structured character sheet with clear sections.`;

    return prompt;
  }

  /**
   * Fill template variables with character data
   */
  fillTemplateVariables(template, traits, gender) {
    let filledTemplate = template;

    const variableMap = {
      '{age}': traits.age || 'adult',
      '{gender}': gender,
      '{personality_type}': traits.personality || 'balanced',
      '{profession}': traits.profession || 'adventurer',
      '{role}': traits.background || 'protagonist',
      '{environment}': traits.environment || 'fantasy world',
      '{motivation}': traits.goals || 'survival',
      '{skill_type}': traits.skills || 'combat',
      '{race}': traits.race || 'human',
      '{class}': traits.class || 'warrior',
      '{realm}': traits.realm || 'mystical lands',
      '{hair_color}': traits.hairColor || 'brown',
      '{eye_color}': traits.eyeColor || 'blue'
    };

    Object.entries(variableMap).forEach(([variable, value]) => {
      filledTemplate = filledTemplate.replace(new RegExp(variable, 'g'), value);
    });

    return filledTemplate;
  }

  /**
   * Process AI response into structured character data
   */
  processCharacterResponse(response, metadata) {
    const sections = this.extractCharacterSections(response);

    return {
      id: Date.now(),
      name: sections.name || 'Unknown Character',
      description: sections.description || '',
      personality: sections.personality || '',
      backstory: sections.backstory || '',
      skills: sections.skills || '',
      relationships: sections.relationships || '',
      goals: sections.goals || '',
      dialogue: sections.dialogue || '',
      visual: sections.visual || '',
      fullResponse: response,
      ...metadata,
      processedAt: new Date().toISOString()
    };
  }

  /**
   * Extract character sections from AI response
   */
  extractCharacterSections(response) {
    const sections = {};
    
    // Define section patterns
    const sectionPatterns = {
      name: ['name', 'character name', 'title'],
      description: ['description', 'physical', 'appearance', 'looks'],
      personality: ['personality', 'traits', 'psychology', 'character'],
      backstory: ['backstory', 'background', 'history', 'origin'],
      skills: ['skills', 'abilities', 'capabilities', 'powers'],
      relationships: ['relationships', 'connections', 'social', 'family'],
      goals: ['goals', 'motivation', 'objectives', 'purpose'],
      dialogue: ['dialogue', 'speech', 'communication', 'voice'],
      visual: ['visual', '3d', 'modeling', 'appearance details']
    };

    // Split response into lines
    const lines = response.split('\n');
    let currentSection = '';
    let sectionContent = '';

    for (let line of lines) {
      const trimmedLine = line.trim();
      
      // Check if this line starts a new section
      let foundSection = null;
      for (const [sectionName, keywords] of Object.entries(sectionPatterns)) {
        for (const keyword of keywords) {
          if (trimmedLine.toLowerCase().includes(keyword)) {
            foundSection = sectionName;
            break;
          }
        }
        if (foundSection) break;
      }

      if (foundSection) {
        // Save previous section if exists
        if (currentSection && sectionContent.trim()) {
          sections[currentSection] = sectionContent.trim();
        }
        
        // Start new section
        currentSection = foundSection;
        sectionContent = trimmedLine;
      } else if (currentSection) {
        // Add to current section
        sectionContent += '\n' + trimmedLine;
      }
    }

    // Save last section
    if (currentSection && sectionContent.trim()) {
      sections[currentSection] = sectionContent.trim();
    }

    return sections;
  }

  /**
   * Cache character for future reference
   */
  cacheCharacter(character) {
    const cacheKey = `${character.characterType}_${character.gender}_${character.frameworkPrompt || 'custom'}`;
    this.generationCache.set(cacheKey, {
      character,
      timestamp: Date.now()
    });

    // Limit cache size
    if (this.generationCache.size > 50) {
      const oldestKey = this.generationCache.keys().next().value;
      this.generationCache.delete(oldestKey);
    }
  }

  /**
   * Add character to generation history
   */
  addToHistory(character) {
    this.characterHistory.unshift(character);
    
    // Limit history size
    if (this.characterHistory.length > 100) {
      this.characterHistory = this.characterHistory.slice(0, 100);
    }
  }

  /**
   * Get character generation history
   */
  getHistory(limit = 20) {
    return this.characterHistory.slice(0, limit);
  }

  /**
   * Get available character types
   */
  getAvailableCharacterTypes(gender = 'male') {
    return gender === 'male' ? Object.keys(maleCharacterPrompts) : Object.keys(femaleCharacterPrompts);
  }

  /**
   * Get random character prompt
   */
  getRandomCharacterPrompt(gender = 'male') {
    return gender === 'male' ? getRandomMalePrompt() : getRandomFemalePrompt();
  }

  /**
   * Clear cache and history
   */
  clearData() {
    this.generationCache.clear();
    this.characterHistory = [];
  }

  /**
   * Get service status
   */
  getStatus() {
    return {
      isProcessing: this.isProcessing,
      cacheSize: this.generationCache.size,
      historySize: this.characterHistory.length,
      availableModels: this.ollamaService.getAvailableModels?.() || [],
      defaultModel: this.defaultModel
    };
  }
}

// Export singleton instance
const characterAIService = new CharacterAIService();
export default characterAIService;
