import React, { useState, useEffect, useRef } from 'react';
import aiService from '../services/aiService';
import './AICharacterGenerator.css';

const AICharacterGenerator = () => {
  const aiServiceRef = useRef(aiService);
  const [characterType, setCharacterType] = useState('fantasy');
  const [characterTraits, setCharacterTraits] = useState({
    personality: '',
    appearance: '',
    background: '',
    skills: '',
    quirks: ''
  });
  const [generatedCharacter, setGeneratedCharacter] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationHistory, setGenerationHistory] = useState([]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [character3DModel, setCharacter3DModel] = useState(null);
  const canvasRef = useRef(null);

  const characterTypes = [
    { id: 'fantasy', name: 'Fantasy Hero', icon: '⚔️', description: 'Knights, mages, and mythical beings' },
    { id: 'scifi', name: 'Sci-Fi Character', icon: '🚀', description: 'Future warriors, AI, and space explorers' },
    { id: 'modern', name: 'Modern Person', icon: '👔', description: 'Contemporary professionals and everyday people' },
    { id: 'historical', name: 'Historical Figure', icon: '📜', description: 'Characters from different time periods' },
    { id: 'animal', name: 'Anthropomorphic', icon: '🦊', description: 'Animal characters with human traits' },
    { id: 'mythical', name: 'Mythical Creature', icon: '🐉', description: 'Gods, monsters, and legendary beings' }
  ];

  const characterTemplates = [
    { 
      id: 'hero', 
      name: 'Classic Hero', 
      template: 'Create a brave and noble hero with a strong moral compass and special abilities'
    },
    { 
      id: 'villain', 
      name: 'Complex Villain', 
      template: 'Design an antagonist with understandable motivations and depth'
    },
    { 
      id: 'mentor', 
      name: 'Wise Mentor', 
      template: 'Generate a knowledgeable guide character with wisdom and experience'
    },
    { 
      id: 'comic', 
      name: 'Comic Relief', 
      template: 'Create a humorous character that provides levity and entertainment'
    }
  ];

  const traitCategories = [
    { key: 'personality', label: 'Personality', placeholder: 'brave, intelligent, mysterious...' },
    { key: 'appearance', label: 'Appearance', placeholder: 'tall, dark hair, scar on face...' },
    { key: 'background', label: 'Background', placeholder: 'orphan, noble birth, mysterious past...' },
    { key: 'skills', label: 'Skills', placeholder: 'sword fighting, magic, diplomacy...' },
    { key: 'quirks', label: 'Quirks', placeholder: 'always tells jokes, fears spiders...' }
  ];

  useEffect(() => {
    // Load generation history from localStorage
    const saved = localStorage.getItem('ai-character-history');
    if (saved) {
      setGenerationHistory(JSON.parse(saved));
    }
  }, []);

  const generateCharacter = async () => {
    setIsGenerating(true);
    setGeneratedCharacter(null);

    try {
      let prompt = buildCharacterPrompt();
      
      if (customPrompt.trim()) {
        prompt += `\n\nAdditional requirements: ${customPrompt}`;
      }

      const result = await aiServiceRef.current.generatePrompt(prompt);
      
      const character = parseCharacterResponse(result);
      setGeneratedCharacter(character);
      
      // Add to history
      const historyItem = {
        id: Date.now(),
        character,
        type: characterType,
        timestamp: new Date().toISOString(),
        prompt: customPrompt
      };
      
      const newHistory = [historyItem, ...generationHistory].slice(0, 20);
      setGenerationHistory(newHistory);
      localStorage.setItem('ai-character-history', JSON.stringify(newHistory));
      
      // Generate 3D model visualization
      generateCharacter3D(character);
      
    } catch (error) {
      console.error('Character generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const buildCharacterPrompt = () => {
    const type = characterTypes.find(t => t.id === characterType);
    let prompt = `Generate a detailed ${type.name} character with the following specifications:\n\n`;
    
    prompt += `Character Type: ${type.name}\n`;
    prompt += `Description: ${type.description}\n\n`;
    
    Object.entries(characterTraits).forEach(([key, value]) => {
      if (value.trim()) {
        const category = traitCategories.find(cat => cat.key === key);
        prompt += `${category.label}: ${value}\n`;
      }
    });
    
    prompt += `\nPlease provide:\n`;
    prompt += `1. Character name and title\n`;
    prompt += `2. Detailed physical description\n`;
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
  };

  const parseCharacterResponse = (response) => {
    // Simple parsing - in production, you'd want more sophisticated parsing
    const sections = {
      name: extractSection(response, ['name', 'character name']),
      description: extractSection(response, ['description', 'physical', 'appearance']),
      personality: extractSection(response, ['personality', 'traits', 'psychology']),
      backstory: extractSection(response, ['backstory', 'background', 'history']),
      skills: extractSection(response, ['skills', 'abilities', 'capabilities']),
      relationships: extractSection(response, ['relationships', 'connections', 'social']),
      goals: extractSection(response, ['goals', 'motivation', 'objectives']),
      dialogue: extractSection(response, ['dialogue', 'speech', 'communication']),
      visual: extractSection(response, ['visual', '3d', 'modeling'])
    };
    
    return {
      ...sections,
      fullResponse: response,
      type: characterType,
      generatedAt: new Date().toISOString()
    };
  };

  const extractSection = (text, keywords) => {
    const lines = text.split('\n');
    let foundSection = '';
    let inSection = false;
    
    for (let line of lines) {
      const lowerLine = line.toLowerCase();
      
      if (keywords.some(keyword => lowerLine.includes(keyword))) {
        inSection = true;
        foundSection = line + '\n';
        continue;
      }
      
      if (inSection) {
        if (line.trim() === '' || lowerLine.match(/^\d+\./)) {
          if (foundSection.trim()) break;
        } else {
          foundSection += line + '\n';
        }
      }
    }
    
    return foundSection.trim();
  };

  const generateCharacter3D = (character) => {
    // Simple 3D visualization using canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);
    
    // Draw simple character representation based on type
    ctx.strokeStyle = '#16213e';
    ctx.lineWidth = 2;
    
    // Body
    ctx.beginPath();
    ctx.ellipse(width/2, height/2 + 30, 40, 60, 0, 0, Math.PI * 2);
    ctx.fillStyle = getTypeColor(characterType);
    ctx.fill();
    ctx.stroke();
    
    // Head
    ctx.beginPath();
    ctx.arc(width/2, height/2 - 40, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#fdbcb4';
    ctx.fill();
    ctx.stroke();
    
    // Add type-specific features
    drawCharacterFeatures(ctx, characterType, width/2, height/2);
    
    setCharacter3DModel(canvas.toDataURL());
  };

  const drawCharacterFeatures = (ctx, type, x, y) => {
    ctx.fillStyle = '#333';
    
    switch(type) {
      case 'fantasy':
        // Draw helmet/horns
        ctx.beginPath();
        ctx.moveTo(x - 25, y - 60);
        ctx.lineTo(x - 15, y - 80);
        ctx.lineTo(x, y - 70);
        ctx.lineTo(x + 15, y - 80);
        ctx.lineTo(x + 25, y - 60);
        ctx.strokeStyle = '#silver';
        ctx.stroke();
        break;
        
      case 'scifi':
        // Draw visor/goggles
        ctx.beginPath();
        ctx.ellipse(x, y - 40, 25, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffff';
        ctx.fill();
        break;
        
      case 'modern':
        // Draw glasses
        ctx.beginPath();
        ctx.rect(x - 20, y - 45, 15, 10);
        ctx.rect(x + 5, y - 45, 15, 10);
        ctx.stroke();
        break;
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      fantasy: '#8b4513',
      scifi: '#4169e1',
      modern: '#708090',
      historical: '#8b7355',
      animal: '#ff8c00',
      mythical: '#9370db'
    };
    return colors[type] || '#666';
  };

  const loadCharacterFromHistory = (historyItem) => {
    setGeneratedCharacter(historyItem.character);
    setCharacterType(historyItem.type);
    generateCharacter3D(historyItem.character);
  };

  const exportCharacter = () => {
    if (!generatedCharacter) return;
    
    const exportData = {
      ...generatedCharacter,
      exportedAt: new Date().toISOString(),
      traits: characterTraits
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `character-${generatedCharacter.name || 'unnamed'}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ai-character-generator">
      <div className="generator-header">
        <h2>🎭 AI Character Generator</h2>
        <p>Create unique, detailed characters powered by AI</p>
      </div>

      <div className="generator-content">
        <div className="generator-controls">
          <div className="character-type-section">
            <h3>Character Type</h3>
            <div className="type-grid">
              {characterTypes.map(type => (
                <button
                  key={type.id}
                  className={`type-btn ${characterType === type.id ? 'active' : ''}`}
                  onClick={() => setCharacterType(type.id)}
                >
                  <span className="type-icon">{type.icon}</span>
                  <span className="type-name">{type.name}</span>
                  <span className="type-desc">{type.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="traits-section">
            <h3>Character Traits</h3>
            {traitCategories.map(category => (
              <div key={category.key} className="trait-input">
                <label>{category.label}</label>
                <input
                  type="text"
                  placeholder={category.placeholder}
                  value={characterTraits[category.key]}
                  onChange={(e) => setCharacterTraits(prev => ({
                    ...prev,
                    [category.key]: e.target.value
                  }))}
                />
              </div>
            ))}
          </div>

          <div className="template-section">
            <h3>Quick Templates</h3>
            <div className="template-grid">
              {characterTemplates.map(template => (
                <button
                  key={template.id}
                  className={`template-btn ${selectedTemplate === template.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTemplate(template.id);
                    setCustomPrompt(template.template);
                  }}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <div className="custom-prompt-section">
            <h3>Custom Prompt</h3>
            <textarea
              placeholder="Add specific requirements or modify the character concept..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              rows={4}
            />
          </div>

          <div className="generation-controls">
            <button
              className="generate-btn"
              onClick={generateCharacter}
              disabled={isGenerating}
            >
              {isGenerating ? '🔄 Generating...' : '✨ Generate Character'}
            </button>
            
            {generatedCharacter && (
              <button className="export-btn" onClick={exportCharacter}>
                📤 Export Character
              </button>
            )}
          </div>

          <div className="history-section">
            <h3>Generation History</h3>
            <div className="history-list">
              {generationHistory.map(item => (
                <div
                  key={item.id}
                  className="history-item"
                  onClick={() => loadCharacterFromHistory(item)}
                >
                  <div className="history-info">
                    <span className="history-name">{item.character.name || 'Unnamed'}</span>
                    <span className="history-type">{item.type}</span>
                    <span className="history-time">
                      {new Date(item.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="character-display">
          {isGenerating && (
            <div className="generating-overlay">
              <div className="generating-spinner"></div>
              <p>Creating your character...</p>
            </div>
          )}

          {generatedCharacter && (
            <div className="character-sheet">
              <div className="character-header">
                <h3>{generatedCharacter.name || 'Unnamed Character'}</h3>
                <span className="character-type-badge">
                  {characterTypes.find(t => t.id === characterType)?.icon} {characterTypes.find(t => t.id === characterType)?.name}
                </span>
              </div>

              <div className="character-visual">
                <canvas
                  ref={canvasRef}
                  width={200}
                  height={300}
                  className="character-canvas"
                />
                {character3DModel && (
                  <img src={character3DModel} alt="Character visualization" className="character-image" />
                )}
              </div>

              <div className="character-details">
                {Object.entries(generatedCharacter).map(([key, value]) => {
                  if (key === 'fullResponse' || key === 'type' || key === 'generatedAt' || !value) return null;
                  
                  return (
                    <div key={key} className="detail-section">
                      <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                      <p>{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {!generatedCharacter && !isGenerating && (
            <div className="empty-state">
              <div className="empty-icon">🎭</div>
              <h3>No Character Generated Yet</h3>
              <p>Select a character type, add some traits, and click generate to create your AI character!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICharacterGenerator;
