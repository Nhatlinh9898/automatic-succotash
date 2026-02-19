import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as ThreeJSUtils from '../../../library/index.js';

const ParticleEffectsDemo = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  
  const [activeEffect, setActiveEffect] = useState('rain');
  const [isPlaying, setIsPlaying] = useState(true);
  const [particleCount, setParticleCount] = useState(1000);
  const [effectIntensity, setEffectIntensity] = useState(1);
  const [windForce, setWindForce] = useState(0);
  const [effectColor, setEffectColor] = useState('#ffffff');
  
  const currentEffectRef = useRef(null);
  const animationFunctionsRef = useRef([]);

  const effects = [
    { id: 'rain', name: 'Rain', icon: '🌧️', description: 'Realistic rain effect' },
    { id: 'snow', name: 'Snow', icon: '❄️', description: 'Gentle snowfall with wind' },
    { id: 'fire', name: 'Fire', icon: '🔥', description: 'Dynamic fire particles' },
    { id: 'stars', name: 'Stars', icon: '⭐', description: 'Twinkling starfield' },
    { id: 'magic', name: 'Magic', icon: '✨', description: 'Magical sparkles' },
    { id: 'smoke', name: 'Smoke', icon: '💨', description: 'Rising smoke effect' },
    { id: 'bubbles', name: 'Bubbles', icon: '🫧', description: 'Floating bubbles' },
    { id: 'confetti', name: 'Confetti', icon: '🎊', description: 'Colorful confetti' }
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

  useEffect(() => {
    if (sceneRef.current) {
      loadEffect(activeEffect);
    }
  }, [activeEffect]);

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
    
    // Create environment
    ThreeJSUtils.createSky(scene);
    ThreeJSUtils.createGround(scene);
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      
      // Update all active animations
      animationFunctionsRef.current.forEach(animateFunc => {
        if (typeof animateFunc === 'function') {
          animateFunc();
        }
      });
      
      renderer.render(scene, camera);
    };
    animate();
  };

  const clearCurrentEffect = () => {
    // Clear existing particles
    const objectsToRemove = [];
    sceneRef.current.traverse((child) => {
      if (child.userData && child.userData.isParticle) {
        objectsToRemove.push(child);
      }
    });
    
    objectsToRemove.forEach(obj => {
      sceneRef.current.remove(obj);
    });
    
    // Clear animation functions
    animationFunctionsRef.current = [];
    
    // Clear current effect reference
    if (currentEffectRef.current) {
      currentEffectRef.current = null;
    }
  };

  const loadEffect = (effectId) => {
    clearCurrentEffect();
    
    switch (effectId) {
      case 'rain':
        createRainEffect();
        break;
      case 'snow':
        createSnowEffect();
        break;
      case 'fire':
        createFireEffect();
        break;
      case 'stars':
        createStarsEffect();
        break;
      case 'magic':
        createMagicEffect();
        break;
      case 'smoke':
        createSmokeEffect();
        break;
      case 'bubbles':
        createBubblesEffect();
        break;
      case 'confetti':
        createConfettiEffect();
        break;
    }
  };

  const createRainEffect = () => {
    const { rain, animateRain } = ThreeJSUtils.createRainEffect(sceneRef.current);
    currentEffectRef.current = rain;
    animationFunctionsRef.current = [animateRain];
  };

  const createSnowEffect = () => {
    const { snow, animateSnow } = ThreeJSUtils.createSnowEffect(sceneRef.current);
    currentEffectRef.current = snow;
    animationFunctionsRef.current = [animateSnow];
  };

  const createFireEffect = () => {
    const particleCount = Math.floor(500 * effectIntensity);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = Math.random() * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Velocity
      velocities[i3] = (Math.random() - 0.5) * 0.1;
      velocities[i3 + 1] = Math.random() * 0.2 + 0.1;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;
      
      // Color (fire colors)
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        colors[i3] = 1; colors[i3 + 1] = 0; colors[i3 + 2] = 0; // Red
      } else if (colorChoice < 0.6) {
        colors[i3] = 1; colors[i3 + 1] = 0.5; colors[i3 + 2] = 0; // Orange
      } else {
        colors[i3] = 1; colors[i3 + 1] = 1; colors[i3 + 2] = 0; // Yellow
      }
      
      sizes[i] = Math.random() * 0.3 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const fire = new THREE.Points(geometry, material);
    fire.userData.isParticle = true;
    sceneRef.current.add(fire);
    currentEffectRef.current = fire;
    
    const animateFire = () => {
      const positions = fire.geometry.attributes.position.array;
      const velocities = fire.geometry.attributes.velocity.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i3] + windForce * 0.01;
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Reset particle if it goes too high
        if (positions[i3 + 1] > 10) {
          positions[i3 + 1] = 0;
          positions[i3] = (Math.random() - 0.5) * 10;
          positions[i3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
      
      fire.geometry.attributes.position.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateFire];
  };

  const createStarsEffect = () => {
    const starCount = Math.floor(2000 * effectIntensity);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      
      // Random sphere distribution
      const radius = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Star colors (white to yellow)
      const brightness = 0.5 + Math.random() * 0.5;
      colors[i3] = brightness;
      colors[i3 + 1] = brightness * (0.8 + Math.random() * 0.2);
      colors[i3 + 2] = brightness * (0.6 + Math.random() * 0.4);
      
      sizes[i] = Math.random() * 0.5 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const stars = new THREE.Points(geometry, material);
    stars.userData.isParticle = true;
    sceneRef.current.add(stars);
    currentEffectRef.current = stars;
    
    const animateStars = () => {
      stars.rotation.y += 0.0001;
      stars.rotation.x += 0.00005;
    };
    
    animationFunctionsRef.current = [animateStars];
  };

  const createMagicEffect = () => {
    const particleCount = Math.floor(800 * effectIntensity);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Circular distribution
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      const height = Math.sin(angle * 3) * 2;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;
      
      // Magic colors (purple, pink, blue)
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i3] = 0.8; colors[i3 + 1] = 0; colors[i3 + 2] = 1; // Purple
      } else if (colorChoice < 0.66) {
        colors[i3] = 1; colors[i3 + 1] = 0.2; colors[i3 + 2] = 0.8; // Pink
      } else {
        colors[i3] = 0.2; colors[i3 + 1] = 0.5; colors[i3 + 2] = 1; // Blue
      }
      
      sizes[i] = Math.random() * 0.3 + 0.1;
      phases[i] = Math.random() * Math.PI * 2;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    
    const material = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    
    const magic = new THREE.Points(geometry, material);
    magic.userData.isParticle = true;
    sceneRef.current.add(magic);
    currentEffectRef.current = magic;
    
    const animateMagic = () => {
      const positions = magic.geometry.attributes.position.array;
      const phases = magic.geometry.attributes.phase.array;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const angle = (i / particleCount) * Math.PI * 2 + time * 0.5;
        const radius = 3 + Math.sin(time + phases[i]) * 2;
        
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = Math.sin(angle * 3 + time) * 2;
        positions[i3 + 2] = Math.sin(angle) * radius;
      }
      
      magic.geometry.attributes.position.needsUpdate = true;
      magic.rotation.y += 0.01;
    };
    
    animationFunctionsRef.current = [animateMagic];
  };

  const createSmokeEffect = () => {
    const particleCount = Math.floor(300 * effectIntensity);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 2;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = (Math.random() - 0.5) * 2;
      
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = Math.random() * 0.05 + 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      sizes[i] = Math.random() * 2 + 1;
      opacities[i] = Math.random() * 0.3 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    
    const material = new THREE.PointsMaterial({
      size: 1,
      color: 0x888888,
      transparent: true,
      opacity: 0.3,
      blending: THREE.NormalBlending
    });
    
    const smoke = new THREE.Points(geometry, material);
    smoke.userData.isParticle = true;
    sceneRef.current.add(smoke);
    currentEffectRef.current = smoke;
    
    const animateSmoke = () => {
      const positions = smoke.geometry.attributes.position.array;
      const velocities = smoke.geometry.attributes.velocity.array;
      const sizes = smoke.geometry.attributes.size.array;
      const opacities = smoke.geometry.attributes.opacity.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i3] + windForce * 0.01;
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        sizes[i] += 0.01;
        opacities[i] *= 0.99;
        
        // Reset particle
        if (positions[i3 + 1] > 10 || opacities[i] < 0.01) {
          positions[i3] = (Math.random() - 0.5) * 2;
          positions[i3 + 1] = 0;
          positions[i3 + 2] = (Math.random() - 0.5) * 2;
          sizes[i] = Math.random() * 2 + 1;
          opacities[i] = Math.random() * 0.3 + 0.1;
        }
      }
      
      smoke.geometry.attributes.position.needsUpdate = true;
      smoke.geometry.attributes.size.needsUpdate = true;
      smoke.geometry.attributes.opacity.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateSmoke];
  };

  const createBubblesEffect = () => {
    const particleCount = Math.floor(200 * effectIntensity);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = -5;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = Math.random() * 0.03 + 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      sizes[i] = Math.random() * 0.5 + 0.2;
      
      // Bubble colors (light blue, white)
      colors[i3] = 0.7 + Math.random() * 0.3;
      colors[i3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i3 + 2] = 1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.NormalBlending
    });
    
    const bubbles = new THREE.Points(geometry, material);
    bubbles.userData.isParticle = true;
    sceneRef.current.add(bubbles);
    currentEffectRef.current = bubbles;
    
    const animateBubbles = () => {
      const positions = bubbles.geometry.attributes.position.array;
      const velocities = bubbles.geometry.attributes.velocity.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i3] + windForce * 0.01;
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Wobble effect
        positions[i3] += Math.sin(Date.now() * 0.001 + i) * 0.01;
        
        // Reset bubble
        if (positions[i3 + 1] > 10) {
          positions[i3] = (Math.random() - 0.5) * 10;
          positions[i3 + 1] = -5;
          positions[i3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
      
      bubbles.geometry.attributes.position.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateBubbles];
  };

  const createConfettiEffect = () => {
    const particleCount = Math.floor(500 * effectIntensity);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const rotations = new Float32Array(particleCount);
    const rotationSpeeds = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = Math.random() * 10 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities[i3] = (Math.random() - 0.5) * 0.1;
      velocities[i3 + 1] = -Math.random() * 0.1 - 0.05;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;
      
      // Random bright colors
      colors[i3] = Math.random();
      colors[i3 + 1] = Math.random();
      colors[i3 + 2] = Math.random();
      
      rotations[i] = Math.random() * Math.PI * 2;
      rotationSpeeds[i] = (Math.random() - 0.5) * 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('rotation', new THREE.BufferAttribute(rotations, 1));
    geometry.setAttribute('rotationSpeed', new THREE.BufferAttribute(rotationSpeeds, 1));
    
    const material = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.NormalBlending
    });
    
    const confetti = new THREE.Points(geometry, material);
    confetti.userData.isParticle = true;
    sceneRef.current.add(confetti);
    currentEffectRef.current = confetti;
    
    const animateConfetti = () => {
      const positions = confetti.geometry.attributes.position.array;
      const velocities = confetti.geometry.attributes.velocity.array;
      const rotations = confetti.geometry.attributes.rotation.array;
      const rotationSpeeds = confetti.geometry.attributes.rotationSpeed.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i3] + windForce * 0.01;
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        rotations[i] += rotationSpeeds[i];
        
        velocities[i3 + 1] += 0.001; // Gravity
        
        // Reset confetti
        if (positions[i3 + 1] < -5) {
          positions[i3] = (Math.random() - 0.5) * 10;
          positions[i3 + 1] = Math.random() * 5 + 10;
          positions[i3 + 2] = (Math.random() - 0.5) * 10;
          velocities[i3 + 1] = -Math.random() * 0.1 - 0.05;
        }
      }
      
      confetti.geometry.attributes.position.needsUpdate = true;
      confetti.geometry.attributes.rotation.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateConfetti];
  };

  return (
    <div className="particle-effects-demo">
      <div className="demo-header">
        <h2>✨ Particle Effects Showcase</h2>
        <div className="effect-info">
          <span className="current-effect">
            {effects.find(e => e.id === activeEffect)?.icon} {effects.find(e => e.id === activeEffect)?.name}
          </span>
        </div>
      </div>

      <div className="demo-content">
        <div className="effects-control-panel">
          <div className="effects-selection">
            <h3>Particle Effects</h3>
            <div className="effects-grid">
              {effects.map(effect => (
                <button
                  key={effect.id}
                  className={`effect-btn ${activeEffect === effect.id ? 'active' : ''}`}
                  onClick={() => setActiveEffect(effect.id)}
                >
                  <span className="effect-icon">{effect.icon}</span>
                  <span className="effect-name">{effect.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="effect-controls">
            <h3>Controls</h3>
            
            <div className="control-group">
              <label>Particle Count: {particleCount}</label>
              <input
                type="range"
                min="100"
                max="5000"
                value={particleCount}
                onChange={(e) => setParticleCount(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label>Intensity: {effectIntensity.toFixed(1)}</label>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={effectIntensity}
                onChange={(e) => setEffectIntensity(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label>Wind Force: {windForce.toFixed(1)}</label>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.1"
                value={windForce}
                onChange={(e) => setWindForce(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label>Effect Color</label>
              <input
                type="color"
                value={effectColor}
                onChange={(e) => setEffectColor(e.target.value)}
                className="color-picker"
              />
            </div>

            <div className="playback-controls">
              <button
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
              <button
                className="reset-btn"
                onClick={() => loadEffect(activeEffect)}
              >
                🔄 Reset
              </button>
            </div>
          </div>

          <div className="effect-description">
            <h3>About This Effect</h3>
            <p>{effects.find(e => e.id === activeEffect)?.description}</p>
            <div className="effect-stats">
              <div className="stat">
                <span className="stat-label">Particles:</span>
                <span className="stat-value">{particleCount}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Status:</span>
                <span className={`stat-value ${isPlaying ? 'active' : 'paused'}`}>
                  {isPlaying ? 'Playing' : 'Paused'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="scene-container">
          <div ref={mountRef} className="threejs-mount" />
          <div className="scene-overlay">
            <div className="overlay-info">
              <h4>Particle Effects Scene</h4>
              <p>Effect: {effects.find(e => e.id === activeEffect)?.name}</p>
              <p>Use mouse to rotate camera, scroll to zoom</p>
              <p className="performance-hint">
                💡 Tip: Adjust particle count for better performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleEffectsDemo;
