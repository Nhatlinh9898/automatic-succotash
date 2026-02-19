import React, { useState, useEffect, useRef } from 'react';
import * as ThreeJSUtils from '../../library/index.js';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  
  const [activeFeature, setActiveFeature] = useState('basic');
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    { id: 'basic', name: 'Basic 3D Scene', icon: '🎯' },
    { id: 'models', name: '3D Models', icon: '📦' },
    { id: 'lighting', name: 'Dynamic Lighting', icon: '💡' },
    { id: 'particles', name: 'Particle Effects', icon: '✨' },
    { id: 'environment', name: 'Environment', icon: '🌍' },
    { id: 'animations', name: 'Animations', icon: '🎬' },
    { id: 'weather', name: 'Weather System', icon: '🌦️' },
    { id: 'physics', name: 'Physics', icon: '⚡' }
  ];

  useEffect(() => {
    if (mountRef.current && !sceneRef.current) {
      initializeScene();
    }
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  const initializeScene = () => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Add basic lighting
    ThreeJSUtils.addBasicLighting(scene);
    
    // Add orbit controls
    const controls = ThreeJSUtils.setupOrbitControls(camera, renderer);
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    
    setIsPlaying(true);
  };

  const loadFeature = (featureId) => {
    if (!sceneRef.current) return;
    
    // Clear existing objects (except lights and camera)
    const objectsToRemove = [];
    sceneRef.current.traverse((child) => {
      if (child.type === 'Mesh' || child.type === 'Group') {
        objectsToRemove.push(child);
      }
    });
    
    objectsToRemove.forEach(obj => {
      sceneRef.current.remove(obj);
    });

    switch (featureId) {
      case 'basic':
        loadBasicScene();
        break;
      case 'models':
        loadModelsDemo();
        break;
      case 'lighting':
        loadLightingDemo();
        break;
      case 'particles':
        loadParticlesDemo();
        break;
      case 'environment':
        loadEnvironmentDemo();
        break;
      case 'animations':
        loadAnimationsDemo();
        break;
      case 'weather':
        loadWeatherDemo();
        break;
      case 'physics':
        loadPhysicsDemo();
        break;
    }
    
    setActiveFeature(featureId);
  };

  const loadBasicScene = () => {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    sceneRef.current.add(cube);
    
    ThreeJSUtils.addKeyboardControls(cube);
  };

  const loadModelsDemo = () => {
    // Create multiple geometric shapes as model examples
    const shapes = [
      { geometry: new THREE.SphereGeometry(1, 32, 32), color: 0xff0000, pos: [-3, 0, 0] },
      { geometry: new THREE.ConeGeometry(1, 2, 32), color: 0x00ff00, pos: [0, 0, 0] },
      { geometry: new THREE.TorusGeometry(1, 0.4, 16, 100), color: 0x0000ff, pos: [3, 0, 0] }
    ];
    
    shapes.forEach(({ geometry, color, pos }) => {
      const material = new THREE.MeshPhongMaterial({ color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...pos);
      sceneRef.current.add(mesh);
    });
  };

  const loadLightingDemo = () => {
    ThreeJSUtils.addDynamicLighting(sceneRef.current);
    
    // Add objects to showcase lighting
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 100,
      specular: 0x222222
    });
    const sphere = new THREE.Mesh(geometry, material);
    sceneRef.current.add(sphere);
  };

  const loadParticlesDemo = () => {
    const { particles, animateParticles } = ThreeJSUtils.createParticleSystem(
      sceneRef.current, 
      1000, 
      0xffaa00
    );
    
    // Add particle animation to the main loop
    const originalAnimate = animationIdRef.current;
    const animateWithParticles = () => {
      animationIdRef.current = requestAnimationFrame(animateWithParticles);
      animateParticles();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animateWithParticles();
  };

  const loadEnvironmentDemo = () => {
    ThreeJSUtils.createSky(sceneRef.current);
    ThreeJSUtils.createGround(sceneRef.current);
    ThreeJSUtils.createWater(sceneRef.current);
  };

  const loadAnimationsDemo = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xff00ff });
    const animatedCube = new THREE.Mesh(geometry, material);
    sceneRef.current.add(animatedCube);
    
    ThreeJSUtils.createCustomAnimation(animatedCube);
  };

  const loadWeatherDemo = () => {
    ThreeJSUtils.createSky(sceneRef.current);
    ThreeJSUtils.createGround(sceneRef.current);
    
    const { rain, animateRain } = ThreeJSUtils.createRainEffect(sceneRef.current);
    
    // Add weather animation to main loop
    const animateWithWeather = () => {
      animationIdRef.current = requestAnimationFrame(animateWithWeather);
      animateRain();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animateWithWeather();
  };

  const loadPhysicsDemo = () => {
    const { bodies, animatePhysics } = ThreeJSUtils.createRigidBodySystem(sceneRef.current);
    
    const animateWithPhysics = () => {
      animationIdRef.current = requestAnimationFrame(animateWithPhysics);
      animatePhysics();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animateWithPhysics();
  };

  return (
    <div className="feature-showcase">
      <div className="showcase-header">
        <h2>🚀 Three.js Feature Showcase</h2>
        <p>Khám phá các tính năng 3D nâng cao</p>
      </div>
      
      <div className="showcase-content">
        <div className="feature-sidebar">
          <h3>Tính năng</h3>
          <div className="feature-list">
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`feature-btn ${activeFeature === feature.id ? 'active' : ''}`}
                onClick={() => loadFeature(feature.id)}
              >
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-name">{feature.name}</span>
              </button>
            ))}
          </div>
          
          <div className="controls">
            <button 
              className={`play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>
        
        <div className="scene-container">
          <div ref={mountRef} className="threejs-mount" />
          <div className="scene-info">
            <h4>{features.find(f => f.id === activeFeature)?.name}</h4>
            <p>Sử dụng chuột để xoay, scroll để zoom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
