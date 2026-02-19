import React, { useState, useEffect, useRef } from 'react';
import aiService from '../../../services/aiService';
import characterAIService from '../../../services/characterAIService.js';
import AgentSystem from '../../../services/agentSystem.js';
import { promptTemplates } from './CharacterPrompts.jsx';
import { 
  getMalePrompt, 
  getFemalePrompt, 
  getAllMalePrompts, 
  getAllFemalePrompts, 
  getRandomMalePrompt, 
  getRandomFemalePrompt,
  maleCharacterPrompts,
  femaleCharacterPrompts
} from '../../../../framework/ai/CharacterPrompts.js';

const AICharacterGenerator = () => {
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
  const [selectedPromptTemplate, setSelectedPromptTemplate] = useState(null);
  const [selectedFrameworkPrompt, setSelectedFrameworkPrompt] = useState('');
  const [characterGender, setCharacterGender] = useState('male');
  const [aiStatus, setAiStatus] = useState(null);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [character3DModel, setCharacter3DModel] = useState(null);
  const [isAIResponding, setIsAIResponding] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
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

    // Check AI service status
    const checkAIStatus = () => {
      const status = characterAIService.getStatus();
      setAiStatus(status);
    };

    checkAIStatus();
    const interval = setInterval(checkAIStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCharacterHistory = () => {
    return characterAIService.getHistory(10);
  };

  const clearCharacterData = () => {
    characterAIService.clearData();
    setGenerationHistory([]);
    localStorage.removeItem('ai-character-history');
  };

  const regenerateCharacter = async (historyItem) => {
    setIsGenerating(true);
    try {
      const character = await characterAIService.generateCharacter({
        characterType: historyItem.type,
        gender: historyItem.character.gender || characterGender,
        frameworkPrompt: historyItem.frameworkPrompt,
        customPrompt: historyItem.prompt,
        traits: characterTraits
      });
      
      setGeneratedCharacter(character);
      generateCharacter3D(character);
    } catch (error) {
      console.error('Character regeneration failed:', error);
      alert(`Character regeneration failed: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateCharacter = async () => {
    setIsGenerating(true);
    setGeneratedCharacter(null);

    try {
      // Use CharacterAIService for advanced AI processing
      const character = await characterAIService.generateCharacter({
        characterType,
        gender: characterGender,
        frameworkPrompt: selectedFrameworkPrompt,
        customPrompt,
        template: selectedPromptTemplate,
        traits: characterTraits
      });
      
      setGeneratedCharacter(character);
      
      // Add to local history
      const historyItem = {
        id: character.id,
        character,
        type: characterType,
        timestamp: character.generationTime,
        prompt: customPrompt,
        frameworkPrompt: selectedFrameworkPrompt
      };
      
      const newHistory = [historyItem, ...generationHistory].slice(0, 20);
      setGenerationHistory(newHistory);
      localStorage.setItem('ai-character-history', JSON.stringify(newHistory));
      
      // Generate 3D model visualization
      generateCharacter3D(character);
      
    } catch (error) {
      console.error('Character generation failed:', error);
      // Show error message to user
      alert(`Character generation failed: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAIResponse = async () => {
    setIsAIResponding(true);
    setAiResponse(null);

    try {
      // Xây dựng prompt từ character design và input người dùng
      let prompt = `Character Design Request:\n`;
      prompt += `Type: ${characterType}\n`;
      prompt += `Gender: ${characterGender}\n`;
      
      if (selectedFrameworkPrompt) {
        prompt += `Framework Prompt: ${selectedFrameworkPrompt}\n`;
      }
      
      if (selectedPromptTemplate) {
        prompt += `Template: ${selectedPromptTemplate.title}\n`;
      }
      
      if (customPrompt) {
        prompt += `Custom Requirements: ${customPrompt}\n`;
      }
      
      if (characterTraits) {
        prompt += `Traits:\n`;
        Object.entries(characterTraits).forEach(([key, value]) => {
          if (value) {
            prompt += `- ${key}: ${value}\n`;
          }
        });
      }

      console.log('Sending to AgentSystem:', prompt);

      // Gửi đến AgentSystem → SubAgentSystem → MicroAgentSystem
      const result = await AgentSystem.processRequest(prompt, {
        useSubAgents: true,
        useMicroAgents: true,
        useLibrary: true,
        temperature: 0.8,
        maxTokens: 2000
      });

      console.log('AgentSystem result:', result);

      setAiResponse({
        content: result.result,
        processingChain: result.processingChain,
        fromLibrary: result.fromLibrary,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('AI Response generation failed:', error);
      setAiResponse({
        error: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsAIResponding(false);
    }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* AI Status Bar */}
        {aiStatus && (
          <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${aiStatus.isProcessing ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span className="text-white text-sm font-medium">
                  AI Service: {aiStatus.isProcessing ? 'Processing' : 'Ready'}
                </span>
              </div>
              <div className="flex items-center gap-4 text-white text-xs">
                <span>Cache: {aiStatus.cacheSize}</span>
                <span>History: {aiStatus.historySize}</span>
                <span>Model: {aiStatus.defaultModel}</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Character Configuration */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🎭</span>
                Character Design Studio
              </h2>

              {/* Advanced Options Toggle */}
              <div className="mb-6">
                <button
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                >
                  <span>⚙️</span>
                  <span className="text-sm">Advanced Options</span>
                  <span className={`transform transition-transform ${showAdvancedOptions ? 'rotate-90' : ''}`}>▶</span>
                </button>
              </div>

              {/* Character Type Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Character Type</h3>
                <div className="grid grid-cols-2 gap-3">
                  {characterTypes.map(type => (
                    <button
                      key={type.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        characterType === type.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400 text-white shadow-lg transform -translate-y-1'
                          : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20 hover:border-white/40'
                      }`}
                      onClick={() => setCharacterType(type.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-semibold">{type.name}</span>
                      </div>
                      <div className="text-sm opacity-75">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Character Traits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Character Traits</h3>
                {traitCategories.map(category => (
                  <div key={category.key} className="mb-4">
                    <label className="block mb-1.5 text-sm font-medium opacity-90">{category.label}</label>
                    <input
                      type="text"
                      placeholder={category.placeholder}
                      value={characterTraits[category.key]}
                      onChange={(e) => setCharacterTraits(prev => ({
                        ...prev,
                        [category.key]: e.target.value
                      }))}
                      className="w-full p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                ))}
              </div>

              {/* Framework AI Character Prompts */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Framework AI Character Prompts</h3>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm mb-2">Character Gender:</label>
                  <div className="flex gap-3">
                    <button
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        characterGender === 'male' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                      onClick={() => setCharacterGender('male')}
                    >
                      👨 Male Characters
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        characterGender === 'female' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                      onClick={() => setCharacterGender('female')}
                    >
                      👩 Female Characters
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                  {(characterGender === 'male' ? getAllMalePrompts() : getAllFemalePrompts()).map(promptType => (
                    <button
                      key={promptType}
                      className={`p-2 bg-white/10 border border-white/20 rounded-lg text-white cursor-pointer transition-all duration-300 text-xs text-left hover:bg-white/20 ${
                        selectedFrameworkPrompt === promptType ? 'bg-white/30 border-white/50' : ''
                      }`}
                      onClick={() => {
                        setSelectedFrameworkPrompt(promptType);
                        setSelectedPromptTemplate(null);
                        setSelectedTemplate('');
                      }}
                    >
                      <div className="font-semibold mb-1 capitalize">
                        {promptType.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-xs hover:bg-green-500/30 transition-colors"
                    onClick={() => {
                      const randomPrompt = characterGender === 'male' 
                        ? getRandomMalePrompt() 
                        : getRandomFemalePrompt();
                      const promptTypes = characterGender === 'male' 
                        ? getAllMalePrompts() 
                        : getAllFemalePrompts();
                      const randomType = promptTypes[Math.floor(Math.random() * promptTypes.length)];
                      setSelectedFrameworkPrompt(randomType);
                    }}
                  >
                    🎲 Random Character
                  </button>
                  
                  {selectedFrameworkPrompt && (
                    <button
                      className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-xs hover:bg-red-500/30 transition-colors"
                      onClick={() => {
                        setSelectedFrameworkPrompt('');
                      }}
                    >
                      Clear Framework Selection
                    </button>
                  )}
                </div>
              </div>

              {/* Character Prompt Templates */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Character Prompt Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {promptTemplates.map(template => (
                    <button
                      key={template.id}
                      className={`p-3 bg-white/10 border border-white/20 rounded-lg text-white cursor-pointer transition-all duration-300 text-sm text-left hover:bg-white/20 ${
                        selectedPromptTemplate?.id === template.id ? 'bg-white/30 border-white/50' : ''
                      }`}
                      onClick={() => {
                        setSelectedPromptTemplate(template);
                        setSelectedTemplate(template.id);
                        setSelectedFrameworkPrompt('');
                      }}
                    >
                      <div className="font-semibold mb-1">{template.title}</div>
                      <div className="text-xs opacity-75">{template.category}</div>
                    </button>
                  ))}
                </div>
                {selectedPromptTemplate && (
                  <button
                    className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-xs hover:bg-red-500/30 transition-colors"
                    onClick={() => {
                      setSelectedPromptTemplate(null);
                      setSelectedTemplate('');
                    }}
                  >
                    Clear Template Selection
                  </button>
                )}
              </div>

              {/* Custom Prompt */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Custom Prompt</h3>
                <textarea
                  placeholder="Add specific requirements or modify the character concept..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  rows={4}
                  className="w-full p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/50 resize-y min-h-[100px] focus:outline-none focus:border-white/40"
                />
              </div>

              {/* Generation Controls */}
              <div className="flex gap-2.5 mb-6">
                <button
                  className="flex-1 p-4 border-none rounded-lg text-white cursor-pointer text-base font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={generateCharacter}
                  disabled={isGenerating}
                >
                  {isGenerating ? '🔄 Generating...' : '✨ Generate Character'}
                </button>
                
                <button
                  className="flex-1 p-4 border-none rounded-lg text-white cursor-pointer text-base font-bold transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={generateAIResponse}
                  disabled={isAIResponding}
                >
                  {isAIResponding ? '🔄 AI Processing...' : '🤖 Generate AI Response'}
                </button>
                
                {generatedCharacter && (
                  <button 
                    className="flex-1 p-4 border-none rounded-lg text-white cursor-pointer text-base font-bold transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40" 
                    onClick={exportCharacter}
                  >
                    📤 Export Character
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Results & History */}
          <div className="space-y-6">
            {/* AI Response Display */}
            {aiResponse && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🤖</span>
                  AI Response (Multi-Agent Processing)
                </h3>
                
                {aiResponse.error ? (
                  <div className="text-red-400 p-4 bg-red-900/20 rounded-lg">
                    <strong>Error:</strong> {aiResponse.error}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Processing Chain Info */}
                    {aiResponse.processingChain && (
                      <div className="bg-white/5 rounded-lg p-3">
                        <h4 className="text-sm font-semibold text-white mb-2">Processing Chain:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                            Main: {aiResponse.processingChain.mainAgent}
                          </span>
                          {aiResponse.processingChain.subAgent && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                              Sub: {aiResponse.processingChain.subAgent}
                            </span>
                          )}
                          {aiResponse.processingChain.microAgent && (
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                              Micro: {aiResponse.processingChain.microAgent}
                            </span>
                          )}
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                            Level: {aiResponse.processingChain.level}
                          </span>
                        </div>
                        {aiResponse.fromLibrary && (
                          <div className="mt-2 text-xs text-yellow-300">
                            ⚡ Result from Library Cache
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* AI Response Content */}
                    <div className="text-white">
                      <div className="prose prose-invert max-w-none">
                        <pre className="whitespace-pre-wrap text-sm leading-relaxed opacity-90">
                          {aiResponse.content}
                        </pre>
                      </div>
                    </div>
                    
                    {/* Timestamp */}
                    <div className="text-xs text-gray-400">
                      Generated: {new Date(aiResponse.timestamp).toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Generated Character Display */}
            {generatedCharacter && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎭</span>
                  Generated Character
                </h3>
                
                <div className="space-y-4 text-white">
                  <div>
                    <strong>Name:</strong> {generatedCharacter.name}
                  </div>
                  <div>
                    <strong>Description:</strong>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {generatedCharacter.description}
                    </p>
                  </div>
                  <div>
                    <strong>Personality:</strong>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {generatedCharacter.personality}
                    </p>
                  </div>
                  <div>
                    <strong>Backstory:</strong>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {generatedCharacter.backstory}
                    </p>
                  </div>
                  <div>
                    <strong>Skills:</strong>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {generatedCharacter.skills}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3D Visualization */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">3D Visualization</h3>
              <canvas
                ref={canvasRef}
                width={300}
                height={400}
                className="w-full bg-gray-900 rounded-lg"
              />
            </div>

            {/* Generation History */}
            {generationHistory.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Generation History</h3>
                  <button
                    className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-xs hover:bg-red-500/30 transition-colors"
                    onClick={clearCharacterData}
                  >
                    Clear History
                  </button>
                </div>
                
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {generationHistory.map(item => (
                    <div
                      key={item.id}
                      className="p-3 bg-white/10 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/20"
                      onClick={() => loadCharacterFromHistory(item)}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-sm text-white">{item.character.name || 'Unnamed'}</span>
                        <span className="text-sm opacity-80 text-white capitalize">{item.type}</span>
                        <span className="text-xs opacity-60 text-white">
                          {new Date(item.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loading Overlay */}
        {isGenerating && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <div className="w-12 h-12 border-3 border-white/30 border-t-white rounded-full animate-spin mb-5"></div>
            <p className="text-white text-lg">Creating your character with AI...</p>
          </div>
        )}

        {/* AI Response Loading Overlay */}
        {isAIResponding && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <div className="w-12 h-12 border-3 border-purple-300 border-t-purple-500 rounded-full animate-spin mb-5"></div>
            <p className="text-white text-lg mb-2">Processing with Multi-Agent System...</p>
            <p className="text-purple-300 text-sm">AgentSystem → SubAgentSystem → MicroAgentSystem</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AICharacterGenerator;
