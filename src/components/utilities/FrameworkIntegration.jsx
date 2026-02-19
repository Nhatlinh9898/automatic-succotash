import React, { useState, useEffect, useRef } from 'react';
import frameworkService from '../../services/frameworkService';

const FrameworkIntegration = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [serverStatus, setServerStatus] = useState({
    main: 'unknown',
    ai: 'unknown'
  });
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [objects, setObjects] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('female1');
  const [characters, setCharacters] = useState({});
  const mountRef = useRef(null);
  const frameworkRef = useRef(null);

  useEffect(() => {
    initializeFramework();
    loadCharacters();
    
    return () => {
      if (frameworkRef.current) {
        frameworkRef.current.dispose();
      }
    };
  }, []);

  const initializeFramework = async () => {
    try {
      setLoading(true);
      
      // Initialize framework with server integration
      const framework = await frameworkService.initialize({
        container: mountRef.current
      });
      
      frameworkRef.current = framework;
      setIsInitialized(true);
      
      // Start framework
      frameworkService.start();
      setIsRunning(true);
      
      // Check server status
      await checkServerStatus();
      
      console.log('✅ Framework initialized successfully');
      
    } catch (error) {
      console.error('❌ Framework initialization failed:', error);
      setAiResponse(`Initialization failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadCharacters = async () => {
    try {
      const chars = await frameworkService.getCharacters();
      if (chars) {
        setCharacters(chars.characters || {});
      }
    } catch (error) {
      console.error('Failed to load characters:', error);
    }
  };

  const checkServerStatus = async () => {
    try {
      const config = await frameworkService.getServerConfig();
      if (config) {
        setServerStatus({
          main: config.hasGeminiKey || config.hasOpenAIKey ? 'online' : 'limited',
          ai: 'online'
        });
      }
    } catch (error) {
      setServerStatus({
        main: 'offline',
        ai: 'offline'
      });
    }
  };

  const handleAIGenerate = async () => {
    if (!aiInput.trim()) return;
    
    setLoading(true);
    setAiResponse('');
    
    try {
      const result = await frameworkService.generateAIContent(aiInput, {
        character: selectedCharacter,
        personality: 'friendly'
      });
      
      setAiResponse(result.text);
      
      // Play TTS if available
      if (result.ttsUrl) {
        const audio = new Audio(`http://localhost:3001${result.ttsUrl}`);
        audio.play().catch(e => console.log('TTS playback failed:', e));
      }
      
    } catch (error) {
      setAiResponse(`AI Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateObject = async () => {
    if (!aiInput.trim()) return;
    
    setLoading(true);
    
    try {
      const object = await frameworkService.createAIObject(
        aiInput,
        {
          x: Math.random() * 10 - 5,
          y: Math.random() * 5,
          z: Math.random() * 10 - 5
        }
      );
      
      setObjects(prev => [...prev, object]);
      setAiResponse(`Created 3D object: ${object.aiDescription}`);
      
    } catch (error) {
      setAiResponse(`Object creation failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateShader = async () => {
    if (!aiInput.trim()) return;
    
    setLoading(true);
    
    try {
      const shader = await frameworkService.createAIShader(aiInput);
      setAiResponse(`Shader created:\n\nVertex Shader:\n${shader.vertex}\n\nFragment Shader:\n${shader.fragment}`);
      
    } catch (error) {
      setAiResponse(`Shader creation failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleBatchProcess = async () => {
    const requests = [
      { prompt: 'Create a red sphere' },
      { prompt: 'Create a blue box' },
      { prompt: 'Create a green cylinder' }
    ];
    
    setLoading(true);
    
    try {
      const results = await frameworkService.batchAIProcess(requests);
      setAiResponse(`Batch processed ${results.totalProcessed} requests. Success: ${results.successful}`);
      
    } catch (error) {
      setAiResponse(`Batch processing failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const clearScene = () => {
    if (frameworkRef.current) {
      // Clear all objects from scene
      objects.forEach(obj => {
        if (obj.mesh) {
          frameworkRef.current.engine.scene.remove(obj.mesh);
        }
      });
      setObjects([]);
    }
  };

  const exportState = () => {
    try {
      const state = frameworkService.exportState();
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `framework-state-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <div className="framework-integration">
      <div className="integration-header">
        <h2>🚀 Web3D Framework + Server Integration</h2>
        <div className="status-indicators">
          <div className={`status ${serverStatus.main}`}>
            Main Server: {serverStatus.main}
          </div>
          <div className={`status ${serverStatus.ai}`}>
            AI Server: {serverStatus.ai}
          </div>
          <div className={`status ${isInitialized ? 'online' : 'offline'}`}>
            Framework: {isInitialized ? 'Ready' : 'Initializing'}
          </div>
        </div>
      </div>

      <div className="integration-content">
        <div className="control-panel">
          <div className="ai-controls">
            <h3>🤖 AI Controls</h3>
            
            <div className="character-selector">
              <label>Character:</label>
              <select 
                value={selectedCharacter} 
                onChange={(e) => setSelectedCharacter(e.target.value)}
              >
                {Object.entries(characters).map(([key, char]) => (
                  <option key={key} value={key}>
                    {char.name || key}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <textarea
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Enter your prompt for AI..."
                rows={3}
              />
            </div>

            <div className="action-buttons">
              <button 
                onClick={handleAIGenerate}
                disabled={loading || !aiInput.trim()}
                className="ai-btn"
              >
                💬 Generate Text
              </button>
              
              <button 
                onClick={handleCreateObject}
                disabled={loading || !aiInput.trim()}
                className="object-btn"
              >
                🎨 Create 3D Object
              </button>
              
              <button 
                onClick={handleCreateShader}
                disabled={loading || !aiInput.trim()}
                className="shader-btn"
              >
                ✨ Create Shader
              </button>
              
              <button 
                onClick={handleBatchProcess}
                disabled={loading}
                className="batch-btn"
              >
                📦 Batch Process
              </button>
            </div>
          </div>

          <div className="scene-controls">
            <h3>🎮 Scene Controls</h3>
            <div className="scene-info">
              <p>Objects in scene: {objects.length}</p>
              <p>Framework Status: {isRunning ? 'Running' : 'Stopped'}</p>
            </div>
            
            <div className="scene-actions">
              <button onClick={clearScene} className="clear-btn">
                🗑️ Clear Scene
              </button>
              
              <button onClick={exportState} className="export-btn">
                📤 Export State
              </button>
              
              <button onClick={checkServerStatus} className="refresh-btn">
                🔄 Check Servers
              </button>
            </div>
          </div>

          {aiResponse && (
            <div className="ai-response">
              <h3>📝 AI Response</h3>
              <pre>{aiResponse}</pre>
            </div>
          )}
        </div>

        <div className="framework-viewport">
          <div className="viewport-header">
            <h3>🌐 3D Viewport</h3>
            <div className="viewport-controls">
              <span className="control-hint">
                🖱️ Mouse: Rotate | Scroll: Zoom
              </span>
            </div>
          </div>
          
          <div 
            ref={mountRef} 
            className="framework-mount"
            style={{ width: '100%', height: '600px' }}
          />
          
          {loading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Processing...</p>
            </div>
          )}
        </div>
      </div>

      <div className="integration-footer">
        <div className="server-info">
          <h4>🔧 Server Integration</h4>
          <div className="server-details">
            <p><strong>Main Server:</strong> http://localhost:3001</p>
            <p><strong>AI Server:</strong> http://localhost:8080</p>
            <p><strong>Features:</strong> AI Processing, TTS, Character System, Batch Processing</p>
          </div>
        </div>
        
        <div className="framework-info">
          <h4>⚡ Framework Features</h4>
          <div className="framework-details">
            <p><strong>Core:</strong> Entity-Component-System, Physics, Audio</p>
            <p><strong>Optimization:</strong> LOD, Frustum Culling, Memory Management</p>
            <p><strong>WebXR:</strong> VR/AR Support</p>
            <p><strong>AI Integration:</strong> Character Generation, Shader Creation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkIntegration;
