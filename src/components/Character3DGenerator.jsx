import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Web3DFramework, Web3DUtils } from '../../framework/Web3DFramework.js';
import characterAIService from '../services/characterAIService.js';
import ModelLoader from '../services/ModelLoader.js';
import './Character3DGenerator.css';

const Character3DGenerator = () => {
  const [framework, setFramework] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('llama3.2:3b');
  const [characterLibrary, setCharacterLibrary] = useState([]);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [generationOptions, setGenerationOptions] = useState({
    includeRigging: true,
    includeTextures: true,
    includeAnimations: false,
    quality: 'medium',
    style: 'realistic'
  });

  const containerRef = useRef(null);
  const characterMeshRef = useRef(null);
  const modelLoaderRef = useRef(null);

  // Initialize Web3D Framework
  useEffect(() => {
    const initFramework = async () => {
      try {
        console.log('🚀 Initializing 3D Character Generator...');
        
        // Initialize model loader
        modelLoaderRef.current = new ModelLoader();
        
        const web3dFramework = new Web3DFramework({
          container: containerRef.current,
          enableAI: true,
          enableWebXR: false,
          enableOptimization: true
        });

        // Wait for framework to be ready
        await new Promise((resolve) => {
          const checkReady = () => {
            if (web3dFramework.engine && web3dFramework.engine.isInitialized) {
              resolve();
            } else {
              setTimeout(checkReady, 100);
            }
          };
          checkReady();
        });

        // Create basic scene for character display
        web3dFramework.createBasicScene();
        
        // Setup lighting for character showcase
        setupCharacterLighting(web3dFramework);

        // Load sample model
        await loadSampleModel(modelLoaderRef.current, web3dFramework);

        setFramework(web3dFramework);
        setIsInitialized(true);

        // Load available AI models
        const models = web3dFramework.getAISystem?.('AssetGenerator')?.getAvailableModels?.() || [];
        setAvailableModels(models);

        console.log('✅ 3D Character Generator initialized');
      } catch (error) {
        console.error('❌ Failed to initialize 3D Character Generator:', error);
      }
    };

    if (containerRef.current) {
      initFramework();
    }

    return () => {
      if (framework) {
        framework.dispose();
      }
    };
  }, []);

  // Setup character showcase lighting
  const setupCharacterLighting = (framework) => {
    const scene = framework.engine.scene;
    
    // Clear existing lights
    const lightsToRemove = [];
    scene.traverse((child) => {
      if (child.isLight) {
        lightsToRemove.push(child);
      }
    });
    lightsToRemove.forEach(light => scene.remove(light));

    // Character showcase lighting setup
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 10, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x4488ff, 0.3);
    rimLight.position.set(0, 5, -10);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
  };

  // Generate 3D character using AI and model loader
  const generate3DCharacter = async () => {
    if (!framework || !selectedCharacter) return;

    setIsGenerating(true);
    setGenerationProgress(0);

    try {
      console.log('🎭 Generating 3D character...');

      // Step 1: Generate character description using existing AI service
      setGenerationProgress(20);
      const characterData = await characterAIService.generateCharacter({
        characterType: selectedCharacter.type,
        gender: selectedCharacter.gender,
        frameworkPrompt: selectedCharacter.frameworkPrompt,
        customPrompt: selectedCharacter.customPrompt,
        traits: selectedCharacter.traits
      });

      setGenerationProgress(40);

      // Step 2: Try to load or generate 3D model
      let character3D;
      
      // First, try to load sample model if available
      if (modelLoaderRef.current) {
        const sampleModel = modelLoaderRef.current.getModel('Basic Character');
        if (sampleModel) {
          console.log('📦 Using sample character model');
          character3D = sampleModel.clone();
          character3D.userData = {
            ...characterData,
            generationMethod: 'sample_model',
            modelSource: 'Basic Character Sample'
          };
          setGenerationProgress(80);
        }
      }

      // Step 3: If no sample model, use AI asset generator or fallback
      if (!character3D) {
        setGenerationProgress(60);
        const aiAssetGenerator = framework.aiSystems.get('AssetGenerator');
        
        if (aiAssetGenerator) {
          console.log('🤖 Using AI Asset Generator');
          character3D = await aiAssetGenerator.generateAsset(
            `3D character model: ${characterData.description}`,
            {
              type: 'character',
              style: generationOptions.style,
              quality: generationOptions.quality,
              includeRigging: generationOptions.includeRigging,
              includeTextures: generationOptions.includeTextures,
              includeAnimations: generationOptions.includeAnimations
            }
          );
          character3D.userData = {
            ...characterData,
            generationMethod: 'ai_generated',
            modelSource: 'AI Asset Generator'
          };
        } else {
          console.log('🔧 Using procedural generation');
          character3D = createProceduralCharacter(characterData);
          character3D.userData = {
            ...characterData,
            generationMethod: 'procedural',
            modelSource: 'Procedural Generation'
          };
        }
      }

      setGenerationProgress(90);

      // Step 4: Add character to 3D scene
      await addCharacterToScene(character3D, characterData);

      setGenerationProgress(100);

      // Add to library
      const libraryEntry = {
        id: Date.now(),
        character: characterData,
        model3D: character3D,
        timestamp: new Date().toISOString(),
        generationOptions: { ...generationOptions }
      };
      setCharacterLibrary(prev => [libraryEntry, ...prev].slice(0, 50));

      console.log('✅ 3D character generated successfully');
      console.log('📊 Generation method:', character3D.userData.generationMethod);
      console.log('📊 Model source:', character3D.userData.modelSource);

    } catch (error) {
      console.error('❌ 3D character generation failed:', error);
      alert(`Character generation failed: ${error.message}`);
    } finally {
      setIsGenerating(false);
      setGenerationProgress(0);
    }
  };

  // Create procedural 3D character (fallback)
  const createProceduralCharacter = (characterData) => {
    const scene = framework.engine.scene;

    // Character group
    const characterGroup = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.CapsuleGeometry(0.5, 1.5, 8);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: getCharacterColor(characterData.type),
      roughness: 0.7,
      metalness: 0.1
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1;
    body.castShadow = true;
    characterGroup.add(body);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.4, 32, 16);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xfdbcb4,
      roughness: 0.8,
      metalness: 0.0
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.2;
    head.castShadow = true;
    characterGroup.add(head);

    // Add type-specific features
    addCharacterFeatures(characterGroup, characterData.type);

    // Character metadata
    characterGroup.userData = {
      characterData,
      type: 'character',
      generatedAt: new Date().toISOString()
    };

    return characterGroup;
  };

  // Add character-specific features
  const addCharacterFeatures = (characterGroup, type) => {
    switch (type) {
      case 'fantasy':
        // Add helmet
        const helmetGeometry = new THREE.ConeGeometry(0.3, 0.5, 8);
        const helmetMaterial = new THREE.MeshStandardMaterial({
          color: 0xc0c0c0,
          metalness: 0.8,
          roughness: 0.2
        });
        const helmet = new THREE.Mesh(helmetGeometry, helmetMaterial);
        helmet.position.y = 2.7;
        characterGroup.add(helmet);
        break;

      case 'scifi':
        // Add visor
        const visorGeometry = new THREE.BoxGeometry(0.6, 0.2, 0.3);
        const visorMaterial = new THREE.MeshStandardMaterial({
          color: 0x00ffff,
          emissive: 0x004444,
          emissiveIntensity: 0.5,
          metalness: 0.9,
          roughness: 0.1
        });
        const visor = new THREE.Mesh(visorGeometry, visorMaterial);
        visor.position.y = 2.2;
        characterGroup.add(visor);
        break;
    }
  };

  // Get character color based on type
  const getCharacterColor = (type) => {
    const colors = {
      fantasy: 0x8b4513,
      scifi: 0x4169e1,
      modern: 0x708090,
      historical: 0x8b7355,
      animal: 0xff8c00,
      mythical: 0x9370db
    };
    return colors[type] || 0x666666;
  };

  // Load sample model
  const loadSampleModel = async (modelLoader, framework) => {
    try {
      console.log('� Loading sample character model...');
      
      // Create a simple character model as fallback
      const geometry = new THREE.CapsuleGeometry(0.5, 1.5, 8);
      const material = new THREE.MeshStandardMaterial({
        color: 0x4169e1,
        roughness: 0.7,
        metalness: 0.1
      });
      const model = new THREE.Mesh(geometry, material);
      model.position.set(0, 1, 0);
      model.castShadow = true;
      model.userData = {
        modelSource: 'Sample Model',
        type: 'basic_character'
      };
      
      // Add to scene
      framework.engine.scene.add(model);
      
      console.log('✅ Sample model loaded successfully');
      console.log('📊 Model source:', model.userData.modelSource);
      return model;
    } catch (error) {
      console.error('❌ Failed to load sample model:', error);
      return null;
    }
  };

  // Add character to 3D scene
  const addCharacterToScene = async (character3D, characterData) => {
    const scene = framework.engine.scene;

    // Remove existing character
    if (characterMeshRef.current) {
      scene.remove(characterMeshRef.current);
    }

    // Position character in center
    character3D.position.set(0, 0, 0);
    
    // Add to scene
    scene.add(character3D);
    characterMeshRef.current = character3D;

    // Setup camera for character showcase
    const camera = framework.engine.camera;
    camera.position.set(3, 2, 5);
    camera.lookAt(0, 1, 0);

    // Add subtle rotation animation
    if (character3D.isGroup) {
      const animate = () => {
        if (characterMeshRef.current) {
          characterMeshRef.current.rotation.y += 0.005;
        }
        framework.engine.renderer.render(scene, camera);
      };
      animate();
    }
  };

  // Load character from library
  const loadCharacterFromLibrary = (libraryEntry) => {
    setSelectedCharacter(libraryEntry.character);
    if (libraryEntry.model3D) {
      addCharacterToScene(libraryEntry.model3D, libraryEntry.character);
    }
  };

  // Export character
  const exportCharacter = () => {
    if (!selectedCharacter || !characterMeshRef.current) return;

    const exportData = {
      character: selectedCharacter,
      model3D: {
        position: characterMeshRef.current.position,
        rotation: characterMeshRef.current.rotation,
        scale: characterMeshRef.current.scale,
        userData: characterMeshRef.current.userData
      },
      generationOptions,
      exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `3d-character-${selectedCharacter.name || 'unnamed'}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="character-3d-generator">
      <div className="generator-header">
        <h1>🎭 3D Character Generator</h1>
        <p>AI-powered 3D character creation with Web3D Framework</p>
      </div>

      <div className="generator-layout">
        {/* Left Panel - Character Configuration */}
        <div className="config-panel">
          <div className="panel-section">
            <h3>Character Configuration</h3>
            
            {/* Character Type Selection */}
            <div className="form-group">
              <label>Character Type</label>
              <select 
                value={selectedCharacter?.type || 'fantasy'}
                onChange={(e) => setSelectedCharacter(prev => ({ ...prev, type: e.target.value }))}
                disabled={isGenerating}
              >
                <option value="fantasy">Fantasy Hero</option>
                <option value="scifi">Sci-Fi Character</option>
                <option value="modern">Modern Person</option>
                <option value="historical">Historical Figure</option>
                <option value="animal">Anthropomorphic</option>
                <option value="mythical">Mythical Creature</option>
              </select>
            </div>

            {/* Gender Selection */}
            <div className="form-group">
              <label>Gender</label>
              <div className="gender-buttons">
                <button 
                  className={`gender-btn ${selectedCharacter?.gender === 'male' ? 'active' : ''}`}
                  onClick={() => setSelectedCharacter(prev => ({ ...prev, gender: 'male' }))}
                  disabled={isGenerating}
                >
                  👨 Male
                </button>
                <button 
                  className={`gender-btn ${selectedCharacter?.gender === 'female' ? 'active' : ''}`}
                  onClick={() => setSelectedCharacter(prev => ({ ...prev, gender: 'female' }))}
                  disabled={isGenerating}
                >
                  👩 Female
                </button>
              </div>
            </div>

            {/* Custom Prompt */}
            <div className="form-group">
              <label>Custom Description</label>
              <textarea
                value={selectedCharacter?.customPrompt || ''}
                onChange={(e) => setSelectedCharacter(prev => ({ ...prev, customPrompt: e.target.value }))}
                placeholder="Describe your character in detail..."
                rows={4}
                disabled={isGenerating}
              />
            </div>

            {/* Advanced Options Toggle */}
            <button 
              className="advanced-toggle"
              onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
            >
              ⚙️ Advanced Options {showAdvancedOptions ? '▼' : '▶'}
            </button>

            {/* Advanced Options */}
            {showAdvancedOptions && (
              <div className="advanced-options">
                <div className="form-group">
                  <label>Generation Quality</label>
                  <select 
                    value={generationOptions.quality}
                    onChange={(e) => setGenerationOptions(prev => ({ ...prev, quality: e.target.value }))}
                    disabled={isGenerating}
                  >
                    <option value="low">Low (Fast)</option>
                    <option value="medium">Medium (Balanced)</option>
                    <option value="high">High (Detailed)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Style</label>
                  <select 
                    value={generationOptions.style}
                    onChange={(e) => setGenerationOptions(prev => ({ ...prev, style: e.target.value }))}
                    disabled={isGenerating}
                  >
                    <option value="realistic">Realistic</option>
                    <option value="stylized">Stylized</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="anime">Anime</option>
                  </select>
                </div>

                <div className="checkbox-group">
                  <label>
                    <input 
                      type="checkbox"
                      checked={generationOptions.includeRigging}
                      onChange={(e) => setGenerationOptions(prev => ({ ...prev, includeRigging: e.target.checked }))}
                      disabled={isGenerating}
                    />
                    Include Rigging
                  </label>
                  <label>
                    <input 
                      type="checkbox"
                      checked={generationOptions.includeTextures}
                      onChange={(e) => setGenerationOptions(prev => ({ ...prev, includeTextures: e.target.checked }))}
                      disabled={isGenerating}
                    />
                    Include Textures
                  </label>
                  <label>
                    <input 
                      type="checkbox"
                      checked={generationOptions.includeAnimations}
                      onChange={(e) => setGenerationOptions(prev => ({ ...prev, includeAnimations: e.target.checked }))}
                      disabled={isGenerating}
                    />
                    Include Animations
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Generation Controls */}
          <div className="generation-controls">
            <button 
              className="generate-btn primary"
              onClick={generate3DCharacter}
              disabled={!isInitialized || isGenerating || !selectedCharacter}
            >
              {isGenerating ? '🔄 Generating...' : '🎭 Generate 3D Character'}
            </button>
            
            <button 
              className="generate-btn secondary"
              onClick={exportCharacter}
              disabled={!selectedCharacter}
            >
              📤 Export Character
            </button>
          </div>

          {/* Generation Progress */}
          {isGenerating && (
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${generationProgress}%` }}
                />
              </div>
              <span className="progress-text">{generationProgress}%</span>
            </div>
          )}
        </div>

        {/* Right Panel - 3D Viewport */}
        <div className="viewport-panel">
          <div className="viewport-header">
            <h3>3D Preview</h3>
            {isInitialized && (
              <span className="status-indicator ready">● Ready</span>
            )}
          </div>
          
          <div 
            ref={containerRef} 
            className="web3d-viewport"
            style={{ width: '100%', height: '500px' }}
          />
          
          {!isInitialized && (
            <div className="viewport-loading">
              <div className="loading-spinner"></div>
              <p>Initializing 3D Engine...</p>
            </div>
          )}
        </div>
      </div>

      {/* Character Library */}
      {characterLibrary.length > 0 && (
        <div className="library-panel">
          <h3>Character Library</h3>
          <div className="library-grid">
            {characterLibrary.map(entry => (
              <div 
                key={entry.id}
                className="library-item"
                onClick={() => loadCharacterFromLibrary(entry)}
              >
                <div className="library-item-info">
                  <span className="character-name">{entry.character.name}</span>
                  <span className="character-type">{entry.character.type}</span>
                  <span className="timestamp">
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character3DGenerator;
