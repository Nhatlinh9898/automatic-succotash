import React, { useState, useEffect, useRef } from 'react';
import FrameworkManager from './FrameworkManager.jsx';
import AIFrameworkIntegration from '../services/aiFrameworkIntegration.js';
import './Web3DDemo.css';

const Web3DDemo = () => {
  const [framework, setFramework] = useState(null);
  const [aiIntegration, setAiIntegration] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [activeTab, setActiveTab] = useState('scene');
  const [scenePrompt, setScenePrompt] = useState('A futuristic city with flying cars and neon lights');
  const [assetPrompt, setAssetPrompt] = useState('A glowing crystal with magical particles');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState(null);
  const [aiStats, setAiStats] = useState(null);

  // Initialize AI Integration when framework is ready
  useEffect(() => {
    if (framework && !aiIntegration) {
      const integration = new AIFrameworkIntegration(framework);
      integration.initialize().then(() => {
        setAiIntegration(integration);
        setIsInitialized(true);
      }).catch(error => {
        console.error('Failed to initialize AI integration:', error);
      });
    }

    return () => {
      if (aiIntegration) {
        aiIntegration.dispose();
      }
    };
  }, [framework]);

  // Handle framework ready
  const handleFrameworkReady = (frameworkInstance) => {
    console.log('🚀 Framework ready:', frameworkInstance);
    setFramework(frameworkInstance);
  };

  // Handle scene update
  const handleSceneUpdate = (frameworkStats) => {
    setStats(frameworkStats);
  };

  // Handle AI update
  const handleAIUpdate = (aiFrameworkStats) => {
    setAiStats(aiFrameworkStats);
  };

  // Generate AI Scene
  const generateScene = async () => {
    if (!aiIntegration || !scenePrompt.trim()) return;

    setIsGenerating(true);
    try {
      const result = await aiIntegration.generateAIScene(scenePrompt, {
        maxObjects: 10,
        complexity: 'medium'
      });
      
      setResults(prev => [result, ...prev].slice(0, 10));
      console.log('Scene generated:', result);
    } catch (error) {
      console.error('Failed to generate scene:', error);
      setResults(prev => [{
        type: 'error',
        message: error.message,
        timestamp: new Date().toISOString()
      }, ...prev].slice(0, 10));
    } finally {
      setIsGenerating(false);
    }
  };

  // Generate AI Asset
  const generateAsset = async () => {
    if (!aiIntegration || !assetPrompt.trim()) return;

    setIsGenerating(true);
    try {
      const result = await aiIntegration.generateAIAsset(assetPrompt, {
        complexity: 'medium',
        includeTextures: true
      });
      
      setResults(prev => [result, ...prev].slice(0, 10));
      console.log('Asset generated:', result);
    } catch (error) {
      console.error('Failed to generate asset:', error);
      setResults(prev => [{
        type: 'error',
        message: error.message,
        timestamp: new Date().toISOString()
      }, ...prev].slice(0, 10));
    } finally {
      setIsGenerating(false);
    }
  };

  // Get content suggestions
  const getContentSuggestions = async () => {
    if (!aiIntegration) return;

    setIsGenerating(true);
    try {
      const result = await aiIntegration.getAIContentSuggestions(
        { type: 'current_scene', objects: [] },
        { goal: 'enhance_visual_appeal' }
      );
      
      setResults(prev => [result, ...prev].slice(0, 10));
      console.log('Suggestions generated:', result);
    } catch (error) {
      console.error('Failed to get suggestions:', error);
      setResults(prev => [{
        type: 'error',
        message: error.message,
        timestamp: new Date().toISOString()
      }, ...prev].slice(0, 10));
    } finally {
      setIsGenerating(false);
    }
  };

  // Take screenshot
  const takeScreenshot = () => {
    if (!framework) return;

    try {
      const screenshot = framework.takeScreenshot(1920, 1080);
      const link = document.createElement('a');
      link.download = `web3d-screenshot-${Date.now()}.png`;
      link.href = screenshot;
      link.click();
    } catch (error) {
      console.error('Failed to take screenshot:', error);
    }
  };

  // Clear results
  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="web3d-demo">
      <div className="demo-header">
        <h1>🎮 Web3D Framework Demo</h1>
        <p>Interactive 3D framework with AI integration</p>
      </div>

      <div className="demo-layout">
        {/* 3D Viewport */}
        <div className="viewport-section">
          <div className="viewport-header">
            <h2>3D Viewport</h2>
            <div className="viewport-controls">
              <button onClick={takeScreenshot} className="control-btn">
                📸 Screenshot
              </button>
            </div>
          </div>
          
          <div className="viewport-container">
            <FrameworkManager
              onFrameworkReady={handleFrameworkReady}
              onSceneUpdate={handleSceneUpdate}
              onAIUpdate={handleAIUpdate}
              enableAI={true}
              containerId="demo-web3d-container"
            />
          </div>
        </div>

        {/* Control Panel */}
        <div className="control-panel">
          <div className="panel-tabs">
            <button 
              className={`tab-btn ${activeTab === 'scene' ? 'active' : ''}`}
              onClick={() => setActiveTab('scene')}
            >
              🎬 Scene
            </button>
            <button 
              className={`tab-btn ${activeTab === 'asset' ? 'active' : ''}`}
              onClick={() => setActiveTab('asset')}
            >
              🎨 Asset
            </button>
            <button 
              className={`tab-btn ${activeTab === 'suggestions' ? 'active' : ''}`}
              onClick={() => setActiveTab('suggestions')}
            >
              💡 AI Ideas
            </button>
            <button 
              className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
              onClick={() => setActiveTab('stats')}
            >
              📊 Stats
            </button>
          </div>

          <div className="panel-content">
            {/* Scene Generation Tab */}
            {activeTab === 'scene' && (
              <div className="tab-content">
                <h3>AI Scene Generation</h3>
                <textarea
                  value={scenePrompt}
                  onChange={(e) => setScenePrompt(e.target.value)}
                  placeholder="Describe your 3D scene..."
                  className="prompt-input"
                  rows={4}
                />
                <div className="action-buttons">
                  <button 
                    onClick={generateScene}
                    disabled={!isInitialized || isGenerating}
                    className="generate-btn"
                  >
                    {isGenerating ? '⏳ Generating...' : '🎬 Generate Scene'}
                  </button>
                </div>
              </div>
            )}

            {/* Asset Generation Tab */}
            {activeTab === 'asset' && (
              <div className="tab-content">
                <h3>AI Asset Generation</h3>
                <textarea
                  value={assetPrompt}
                  onChange={(e) => setAssetPrompt(e.target.value)}
                  placeholder="Describe your 3D asset..."
                  className="prompt-input"
                  rows={4}
                />
                <div className="action-buttons">
                  <button 
                    onClick={generateAsset}
                    disabled={!isInitialized || isGenerating}
                    className="generate-btn"
                  >
                    {isGenerating ? '⏳ Generating...' : '🎨 Generate Asset'}
                  </button>
                </div>
              </div>
            )}

            {/* AI Suggestions Tab */}
            {activeTab === 'suggestions' && (
              <div className="tab-content">
                <h3>AI Content Suggestions</h3>
                <p>Get AI-powered suggestions to enhance your 3D scene</p>
                <div className="action-buttons">
                  <button 
                    onClick={getContentSuggestions}
                    disabled={!isInitialized || isGenerating}
                    className="generate-btn"
                  >
                    {isGenerating ? '⏳ Thinking...' : '💡 Get Suggestions'}
                  </button>
                </div>
              </div>
            )}

            {/* Stats Tab */}
            {activeTab === 'stats' && (
              <div className="tab-content">
                <h3>System Statistics</h3>
                
                {/* Framework Stats */}
                {stats && (
                  <div className="stats-section">
                    <h4>🎮 Framework Stats</h4>
                    <div className="stat-grid">
                      <div className="stat-item">
                        <span className="stat-label">FPS:</span>
                        <span className="stat-value">{stats.engine?.fps || 'N/A'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Entities:</span>
                        <span className="stat-value">{stats.entities?.length || 0}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Memory:</span>
                        <span className="stat-value">{stats.memory?.used || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Stats */}
                {aiStats && (
                  <div className="stats-section">
                    <h4>🤖 AI Stats</h4>
                    <div className="stat-grid">
                      <div className="stat-item">
                        <span className="stat-label">Status:</span>
                        <span className="stat-value">{aiStats.status || 'Active'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Queue:</span>
                        <span className="stat-value">{aiStats.queueLength || 0}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Integration Stats */}
                {aiIntegration && (
                  <div className="stats-section">
                    <h4>🔗 Integration Stats</h4>
                    <div className="stat-grid">
                      <div className="stat-item">
                        <span className="stat-label">Total Requests:</span>
                        <span className="stat-value">{aiIntegration.performanceMonitor?.totalRequests || 0}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Success Rate:</span>
                        <span className="stat-value">
                          {aiIntegration.getPerformanceMetrics()?.successRate?.toFixed(1) || 0}%
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Avg Response:</span>
                        <span className="stat-value">
                          {aiIntegration.getPerformanceMetrics()?.averageResponseTime?.toFixed(0) || 0}ms
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results Panel */}
      {results.length > 0 && (
        <div className="results-panel">
          <div className="results-header">
            <h3>📝 Generation Results</h3>
            <button onClick={clearResults} className="clear-btn">
              🗑️ Clear
            </button>
          </div>
          <div className="results-list">
            {results.map((result, index) => (
              <div key={index} className={`result-item ${result.type}`}>
                <div className="result-header">
                  <span className="result-type">
                    {result.type === 'scene' && '🎬 Scene'}
                    {result.type === 'asset' && '🎨 Asset'}
                    {result.type === 'suggestions' && '💡 Suggestions'}
                    {result.type === 'error' && '❌ Error'}
                  </span>
                  <span className="result-time">
                    {new Date(result.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div className="result-content">
                  {result.type === 'error' ? (
                    <p className="error-message">{result.message}</p>
                  ) : (
                    <pre>{JSON.stringify(result.data, null, 2)}</pre>
                  )}
                </div>
                {result.processingTime && (
                  <div className="result-footer">
                    <span>⏱️ {result.processingTime}ms</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-item">
          <span className="status-label">Framework:</span>
          <span className={`status-value ${framework ? 'ready' : 'loading'}`}>
            {framework ? '✅ Ready' : '⏳ Loading...'}
          </span>
        </div>
        <div className="status-item">
          <span className="status-label">AI Integration:</span>
          <span className={`status-value ${isInitialized ? 'ready' : 'loading'}`}>
            {isInitialized ? '✅ Ready' : '⏳ Loading...'}
          </span>
        </div>
        <div className="status-item">
          <span className="status-label">Active Requests:</span>
          <span className="status-value">
            {aiIntegration?.activeRequests?.size || 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Web3DDemo;
