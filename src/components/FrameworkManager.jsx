import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Web3DFramework } from '../../framework/Web3DFramework.js';
import aiService from '../services/aiService.js';
import './FrameworkManager.css';

const FrameworkManager = ({ 
  onFrameworkReady, 
  onSceneUpdate, 
  onAIUpdate,
  enableAI = true,
  containerId = 'web3d-container'
}) => {
  const containerRef = useRef(null);
  const frameworkRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  // Initialize Web3D Framework
  const initializeFramework = useCallback(async () => {
    if (!containerRef.current || frameworkRef.current) return;

    try {
      setIsLoading(true);
      setError(null);

      console.log('🚀 Initializing Web3D Framework...');

      // Create framework instance with AI service
      const framework = new Web3DFramework({
        container: containerRef.current,
        aiService: enableAI ? aiService : null,
        libraryManager: null, // Will be added later if needed
        enableAI: enableAI,
        enableWebXR: true,
        enableOptimization: true,
        renderer: {
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        },
        camera: {
          type: 'perspective',
          fov: 75,
          near: 0.1,
          far: 1000
        }
      });

      // Wait for framework to be ready
      await new Promise((resolve) => {
        const checkReady = () => {
          if (framework.engine && framework.engine.isInitialized) {
            resolve();
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
      });

      // Create basic scene
      framework.createBasicScene();

      // Setup AI systems if enabled
      if (enableAI) {
        console.log('🤖 Setting up AI systems...');
        try {
          // Start AI performance optimization
          framework.startAIOptimization();
          
          // Enable AI WebXR features if available
          await framework.enableAIWebXR();
          
          console.log('✅ AI systems initialized successfully');
        } catch (aiError) {
          console.warn('⚠️ AI systems initialization failed:', aiError);
          // Continue without AI systems
        }
      }

      // Store framework reference
      frameworkRef.current = framework;
      setIsInitialized(true);
      setIsLoading(false);

      // Notify parent component
      if (onFrameworkReady) {
        onFrameworkReady(framework);
      }

      console.log('✅ Web3D Framework initialized successfully');

    } catch (err) {
      console.error('❌ Failed to initialize Web3D Framework:', err);
      setError(err.message);
      setIsLoading(false);
    }
  }, [enableAI, onFrameworkReady]);

  // Update stats periodically
  const updateStats = useCallback(() => {
    if (!frameworkRef.current) return;

    try {
      const frameworkStats = frameworkRef.current.getStats();
      setStats(frameworkStats);

      // Notify parent of scene update
      if (onSceneUpdate) {
        onSceneUpdate(frameworkStats);
      }

      // Notify parent of AI update
      if (onAIUpdate && frameworkStats.ai) {
        onAIUpdate(frameworkStats.ai);
      }
    } catch (err) {
      console.warn('Failed to update stats:', err);
    }
  }, [onSceneUpdate, onAIUpdate]);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!frameworkRef.current) return;

    try {
      const engine = frameworkRef.current.engine;
      if (engine && engine.camera && engine.renderer) {
        const container = containerRef.current;
        engine.camera.aspect = container.clientWidth / container.clientHeight;
        engine.camera.updateProjectionMatrix();
        engine.renderer.setSize(container.clientWidth, container.clientHeight);
      }
    } catch (err) {
      console.warn('Failed to handle resize:', err);
    }
  }, []);

  // Initialize on mount
  useEffect(() => {
    initializeFramework();

    // Setup resize listener
    window.addEventListener('resize', handleResize);

    // Setup stats update interval
    const statsInterval = setInterval(updateStats, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(statsInterval);
      
      // Cleanup framework
      if (frameworkRef.current) {
        console.log('🧹 Cleaning up Web3D Framework...');
        frameworkRef.current.dispose();
        frameworkRef.current = null;
      }
    };
  }, [initializeFramework, handleResize, updateStats]);

  // Framework control methods
  const frameworkControls = {
    // Scene management
    createEntity: (components) => {
      return frameworkRef.current?.createEntity(components);
    },
    
    getEntity: (id) => {
      return frameworkRef.current?.getEntity(id);
    },
    
    removeEntity: (id) => {
      return frameworkRef.current?.removeEntity(id);
    },

    // AI methods
    generateAIScene: async (prompt, options) => {
      if (!frameworkRef.current) throw new Error('Framework not initialized');
      return await frameworkRef.current.generateAIScene(prompt, options);
    },
    
    generateAIAsset: async (description, options) => {
      if (!frameworkRef.current) throw new Error('Framework not initialized');
      return await frameworkRef.current.generateAIAsset(description, options);
    },
    
    getAIContentSuggestions: async (scene, context) => {
      if (!frameworkRef.current) throw new Error('Framework not initialized');
      return await frameworkRef.current.getAIContentSuggestions(scene, context);
    },

    // System controls
    start: () => {
      frameworkRef.current?.start();
    },
    
    pause: () => {
      frameworkRef.current?.pause();
    },
    
    resume: () => {
      frameworkRef.current?.resume();
    },

    // Utility methods
    takeScreenshot: (width, height) => {
      return frameworkRef.current?.takeScreenshot(width, height);
    },
    
    getStats: () => {
      return frameworkRef.current?.getStats();
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="framework-manager loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Initializing Web3D Framework...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="framework-manager error">
        <div className="error-message">
          <h3>Framework Initialization Failed</h3>
          <p>{error}</p>
          <button onClick={initializeFramework} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="framework-manager">
      <div 
        ref={containerRef} 
        id={containerId}
        className="web3d-container"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Stats Display */}
      {stats && (
        <div className="framework-stats">
          <div className="stats-panel">
            <h4>Framework Stats</h4>
            <div className="stat-item">
              <span>FPS:</span>
              <span>{stats.engine?.fps || 'N/A'}</span>
            </div>
            <div className="stat-item">
              <span>Entities:</span>
              <span>{stats.entities?.length || 0}</span>
            </div>
            <div className="stat-item">
              <span>Memory:</span>
              <span>{stats.memory?.used || 'N/A'}</span>
            </div>
            {stats.ai && (
              <div className="stat-item">
                <span>AI Status:</span>
                <span>{stats.ai.status || 'Active'}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Framework Controls */}
      {isInitialized && (
        <div className="framework-controls">
          <button onClick={() => frameworkControls.start()} className="control-btn">
            ▶️ Start
          </button>
          <button onClick={() => frameworkControls.pause()} className="control-btn">
            ⏸️ Pause
          </button>
          <button onClick={() => frameworkControls.resume()} className="control-btn">
            ▶️ Resume
          </button>
          <button 
            onClick={() => frameworkControls.takeScreenshot()} 
            className="control-btn"
          >
            📸 Screenshot
          </button>
        </div>
      )}
    </div>
  );
};

export default FrameworkManager;
