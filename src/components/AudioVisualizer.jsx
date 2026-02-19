import React, { useState, useEffect, useRef } from 'react';
import * as ThreeJSUtils from '../../library/index.js';
import './AudioVisualizer.css';

const AudioVisualizer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [visualizationType, setVisualizationType] = useState('bars');
  const [audioFile, setAudioFile] = useState(null);
  const [frequencyData, setFrequencyData] = useState([]);
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [sensitivity, setSensitivity] = useState(1.5);
  const [smoothing, setSmoothing] = useState(0.8);
  const [colorScheme, setColorScheme] = useState('rainbow');
  const [particleCount, setParticleCount] = useState(500);
  
  const audioElementRef = useRef(null);
  const visualizerObjectsRef = useRef([]);
  const particlesRef = useRef([]);

  const visualizationTypes = [
    { id: 'bars', name: 'Frequency Bars', icon: '📊', description: 'Classic frequency spectrum' },
    { id: 'circular', name: 'Circular Visualizer', icon: '⭕', description: 'Radial frequency display' },
    { id: 'waveform', name: 'Waveform', icon: '〰️', description: 'Audio waveform display' },
    { id: 'particles', name: 'Particle System', icon: '✨', description: 'Reactive particles' },
    { id: 'sphere', name: '3D Sphere', icon: '🔮', description: '3D frequency sphere' },
    { id: 'galaxy', name: 'Galaxy', icon: '🌌', description: 'Spiral galaxy effect' },
    { id: 'dna', name: 'DNA Helix', icon: '🧬', description: 'Double helix visualization' },
    { id: 'terrain', name: 'Audio Terrain', icon: '🏔️', description: 'Sound-reactive landscape' }
  ];

  const colorSchemes = [
    { id: 'rainbow', name: 'Rainbow', colors: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'] },
    { id: 'fire', name: 'Fire', colors: ['#ff0000', '#ff4500', '#ff8c00', '#ffd700', '#ffff00'] },
    { id: 'ocean', name: 'Ocean', colors: ['#000080', '#0000ff', '#00ffff', '#00ff00', '#ffff00'] },
    { id: 'neon', name: 'Neon', colors: ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#ff0000'] },
    { id: 'monochrome', name: 'Monochrome', colors: ['#ffffff', '#cccccc', '#888888', '#444444', '#000000'] },
    { id: 'sunset', name: 'Sunset', colors: ['#ff6b6b', '#feca57', '#ff9ff3', '#c56cf0', '#7158e2'] }
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
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      createVisualization();
    }
  }, [visualizationType]);

  const initializeScene = () => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Enhanced lighting for visualizations
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0xff0000, 1, 100);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x00ff00, 1, 100);
    pointLight2.position.set(-50, 50, -50);
    scene.add(pointLight2);
    
    const pointLight3 = new THREE.PointLight(0x0000ff, 1, 100);
    pointLight3.position.set(0, -50, 0);
    scene.add(pointLight3);
    
    // Add orbit controls
    const controls = ThreeJSUtils.setupOrbitControls(camera, renderer);
    
    // Initialize audio context
    initializeAudio();
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      
      updateVisualization();
      renderer.render(scene, camera);
    };
    animate();
  };

  const initializeAudio = () => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 256;
    analyserRef.current.smoothingTimeConstant = smoothing;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    setFrequencyData(Array.from(dataArray));
  };

  const createVisualization = () => {
    clearVisualization();
    
    switch (visualizationType) {
      case 'bars':
        createBarsVisualization();
        break;
      case 'circular':
        createCircularVisualization();
        break;
      case 'waveform':
        createWaveformVisualization();
        break;
      case 'particles':
        createParticlesVisualization();
        break;
      case 'sphere':
        createSphereVisualization();
        break;
      case 'galaxy':
        createGalaxyVisualization();
        break;
      case 'dna':
        createDNAVisualization();
        break;
      case 'terrain':
        createTerrainVisualization();
        break;
    }
  };

  const createBarsVisualization = () => {
    const barCount = 64;
    const barWidth = 2;
    const barSpacing = 0.5;
    
    for (let i = 0; i < barCount; i++) {
      const geometry = new THREE.BoxGeometry(barWidth, 1, barWidth);
      const material = new THREE.MeshPhongMaterial({
        color: getColorFromScheme(i / barCount),
        emissive: getColorFromScheme(i / barCount),
        emissiveIntensity: 0.2
      });
      
      const bar = new THREE.Mesh(geometry, material);
      bar.position.x = (i - barCount / 2) * (barWidth + barSpacing);
      bar.position.y = 0;
      bar.castShadow = true;
      bar.receiveShadow = true;
      
      sceneRef.current.add(bar);
      visualizerObjectsRef.current.push(bar);
    }
  };

  const createCircularVisualization = () => {
    const segments = 128;
    const radius = 30;
    
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: getColorFromScheme(i / segments),
        emissive: getColorFromScheme(i / segments),
        emissiveIntensity: 0.3
      });
      
      const segment = new THREE.Mesh(geometry, material);
      segment.position.x = Math.cos(angle) * radius;
      segment.position.z = Math.sin(angle) * radius;
      segment.position.y = 0;
      segment.lookAt(0, segment.position.y, 0);
      
      sceneRef.current.add(segment);
      visualizerObjectsRef.current.push(segment);
    }
  };

  const createWaveformVisualization = () => {
    const points = 256;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points * 3);
    const colors = new Float32Array(points * 3);
    
    for (let i = 0; i < points; i++) {
      positions[i * 3] = (i / points - 0.5) * 100;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      
      const color = new THREE.Color(getColorFromScheme(i / points));
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      linewidth: 3
    });
    
    const waveform = new THREE.Line(geometry, material);
    sceneRef.current.add(waveform);
    visualizerObjectsRef.current.push(waveform);
  };

  const createParticlesVisualization = () => {
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 8, 8);
      const material = new THREE.MeshPhongMaterial({
        color: getColorFromScheme(Math.random()),
        emissive: getColorFromScheme(Math.random()),
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
      });
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 100
      );
      
      sceneRef.current.add(particle);
      particlesRef.current.push({
        mesh: particle,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ),
        originalPosition: particle.position.clone()
      });
    }
  };

  const createSphereVisualization = () => {
    const sphereGeometry = new THREE.SphereGeometry(20, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      wireframe: true,
      emissive: 0x444444,
      emissiveIntensity: 0.1
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sceneRef.current.add(sphere);
    visualizerObjectsRef.current.push(sphere);
    
    // Add frequency rings
    for (let i = 0; i < 8; i++) {
      const ringGeometry = new THREE.TorusGeometry(20 + i * 5, 1, 16, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: getColorFromScheme(i / 8),
        emissive: getColorFromScheme(i / 8),
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.7
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      sceneRef.current.add(ring);
      visualizerObjectsRef.current.push(ring);
    }
  };

  const createGalaxyVisualization = () => {
    const arms = 3;
    const pointsPerArm = 50;
    
    for (let arm = 0; arm < arms; arm++) {
      for (let i = 0; i < pointsPerArm; i++) {
        const angle = (arm / arms) * Math.PI * 2 + (i / pointsPerArm) * Math.PI * 2;
        const radius = i * 0.8;
        
        const geometry = new THREE.SphereGeometry(0.5, 8, 8);
        const material = new THREE.MeshPhongMaterial({
          color: getColorFromScheme((arm * pointsPerArm + i) / (arms * pointsPerArm)),
          emissive: getColorFromScheme((arm * pointsPerArm + i) / (arms * pointsPerArm)),
          emissiveIntensity: 0.5
        });
        
        const star = new THREE.Mesh(geometry, material);
        star.position.x = Math.cos(angle) * radius;
        star.position.z = Math.sin(angle) * radius;
        star.position.y = Math.sin(i * 0.1) * 10;
        
        sceneRef.current.add(star);
        visualizerObjectsRef.current.push(star);
      }
    }
  };

  const createDNAVisualization = () => {
    const strands = 2;
    const pointsPerStrand = 100;
    
    for (let strand = 0; strand < strands; strand++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsPerStrand * 3);
      const colors = new Float32Array(pointsPerStrand * 3);
      
      for (let i = 0; i < pointsPerStrand; i++) {
        const t = i / pointsPerStrand;
        const angle = t * Math.PI * 4;
        const radius = 10;
        
        positions[i * 3] = Math.cos(angle) * radius + strand * 5 - 2.5;
        positions[i * 3 + 1] = (t - 0.5) * 50;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
        
        const color = new THREE.Color(getColorFromScheme(t));
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        linewidth: 3
      });
      
      const helix = new THREE.Line(geometry, material);
      sceneRef.current.add(helix);
      visualizerObjectsRef.current.push(helix);
    }
  };

  const createTerrainVisualization = () => {
    const gridSize = 20;
    const geometry = new THREE.PlaneGeometry(100, 100, gridSize, gridSize);
    const vertices = geometry.attributes.position.array;
    
    for (let i = 0; i < vertices.length; i += 3) {
      const x = Math.floor((i / 3) % (gridSize + 1));
      const y = Math.floor((i / 3) / (gridSize + 1));
      vertices[i + 2] = Math.sin(x * 0.3) * Math.cos(y * 0.3) * 10;
    }
    
    geometry.computeVertexNormals();
    
    const material = new THREE.MeshPhongMaterial({
      color: getColorFromScheme(0.5),
      wireframe: true,
      side: THREE.DoubleSide
    });
    
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2;
    sceneRef.current.add(terrain);
    visualizerObjectsRef.current.push(terrain);
  };

  const clearVisualization = () => {
    visualizerObjectsRef.current.forEach(obj => {
      sceneRef.current.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    visualizerObjectsRef.current = [];
    
    particlesRef.current.forEach(particle => {
      sceneRef.current.remove(particle.mesh);
      if (particle.mesh.geometry) particle.mesh.geometry.dispose();
      if (particle.mesh.material) particle.mesh.material.dispose();
    });
    particlesRef.current = [];
  };

  const updateVisualization = () => {
    if (!analyserRef.current || !isPlaying) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);
    
    setFrequencyData(Array.from(dataArray));
    
    switch (visualizationType) {
      case 'bars':
        updateBars(dataArray);
        break;
      case 'circular':
        updateCircular(dataArray);
        break;
      case 'waveform':
        updateWaveform(dataArray);
        break;
      case 'particles':
        updateParticles(dataArray);
        break;
      case 'sphere':
        updateSphere(dataArray);
        break;
      case 'galaxy':
        updateGalaxy(dataArray);
        break;
      case 'dna':
        updateDNA(dataArray);
        break;
      case 'terrain':
        updateTerrain(dataArray);
        break;
    }
  };

  const updateBars = (dataArray) => {
    const barCount = visualizerObjectsRef.current.length;
    const step = Math.floor(dataArray.length / barCount);
    
    visualizerObjectsRef.current.forEach((bar, i) => {
      const value = dataArray[i * step] / 255 * sensitivity;
      bar.scale.y = Math.max(0.1, value * 20);
      bar.material.color.set(getColorFromScheme(i / barCount));
      bar.material.emissive.set(getColorFromScheme(i / barCount));
    });
  };

  const updateCircular = (dataArray) => {
    const segments = visualizerObjectsRef.current.length;
    const step = Math.floor(dataArray.length / segments);
    
    visualizerObjectsRef.current.forEach((segment, i) => {
      const value = dataArray[i * step] / 255 * sensitivity;
      segment.scale.y = Math.max(0.1, value * 20);
      segment.material.color.set(getColorFromScheme(i / segments));
      segment.material.emissive.set(getColorFromScheme(i / segments));
    });
  };

  const updateWaveform = (dataArray) => {
    const positions = visualizerObjectsRef.current[0].geometry.attributes.position.array;
    const step = Math.floor(dataArray.length / positions.length / 3);
    
    for (let i = 0; i < positions.length / 3; i++) {
      const value = dataArray[i * step] / 255 * sensitivity;
      positions[i * 3 + 1] = value * 30 - 15;
    }
    
    visualizerObjectsRef.current[0].geometry.attributes.position.needsUpdate = true;
  };

  const updateParticles = (dataArray) => {
    const avgFrequency = dataArray.reduce((sum, val) => sum + val, 0) / dataArray.length;
    const normalizedFreq = avgFrequency / 255 * sensitivity;
    
    particlesRef.current.forEach((particle, i) => {
      const force = new THREE.Vector3(
        (Math.random() - 0.5) * normalizedFreq * 2,
        (Math.random() - 0.5) * normalizedFreq * 2,
        (Math.random() - 0.5) * normalizedFreq * 2
      );
      
      particle.velocity.add(force);
      particle.velocity.multiplyScalar(0.95); // Damping
      
      particle.mesh.position.add(particle.velocity);
      
      // Pull back to original position
      const toOriginal = particle.originalPosition.clone().sub(particle.mesh.position);
      particle.mesh.position.add(toOriginal.multiplyScalar(0.02));
      
      // Update color based on frequency
      const colorIndex = Math.floor((dataArray[i % dataArray.length] / 255) * (getColorScheme().colors.length - 1));
      particle.mesh.material.color.set(getColorScheme().colors[colorIndex]);
    });
  };

  const updateSphere = (dataArray) => {
    const rings = visualizerObjectsRef.current.slice(1);
    const step = Math.floor(dataArray.length / rings.length);
    
    rings.forEach((ring, i) => {
      const value = dataArray[i * step] / 255 * sensitivity;
      ring.scale.setScalar(1 + value * 0.5);
      ring.material.color.set(getColorFromScheme(i / rings.length));
      ring.material.emissive.set(getColorFromScheme(i / rings.length));
    });
  };

  const updateGalaxy = (dataArray) => {
    const stars = visualizerObjectsRef.current;
    const step = Math.floor(dataArray.length / stars.length);
    
    stars.forEach((star, i) => {
      const value = dataArray[i * step] / 255 * sensitivity;
      star.scale.setScalar(0.5 + value * 2);
      star.material.emissiveIntensity = 0.5 + value * 0.5;
    });
  };

  const updateDNA = (dataArray) => {
    const strands = visualizerObjectsRef.current;
    const step = Math.floor(dataArray.length / 100);
    
    strands.forEach((strand, strandIndex) => {
      const positions = strand.geometry.attributes.position.array;
      
      for (let i = 0; i < 100; i++) {
        const value = dataArray[i * step] / 255 * sensitivity;
        const t = i / 100;
        const angle = t * Math.PI * 4 + Date.now() * 0.001;
        const radius = 10 + value * 5;
        
        positions[i * 3] = Math.cos(angle) * radius + strandIndex * 5 - 2.5;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
      }
      
      strand.geometry.attributes.position.needsUpdate = true;
    });
  };

  const updateTerrain = (dataArray) => {
    const terrain = visualizerObjectsRef.current[0];
    const vertices = terrain.geometry.attributes.position.array;
    const gridSize = Math.sqrt(vertices.length / 3);
    const step = Math.floor(dataArray.length / (gridSize * gridSize));
    
    for (let i = 0; i < vertices.length; i += 3) {
      const x = Math.floor((i / 3) % gridSize);
      const y = Math.floor((i / 3) / gridSize);
      const dataIndex = y * gridSize + x;
      const value = dataArray[dataIndex * step] / 255 * sensitivity;
      
      vertices[i + 2] = Math.sin(x * 0.3) * Math.cos(y * 0.3) * (10 + value * 10);
    }
    
    terrain.geometry.attributes.position.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
  };

  const getColorFromScheme = (value) => {
    const scheme = getColorScheme();
    const index = Math.floor(value * (scheme.colors.length - 1));
    return scheme.colors[Math.max(0, Math.min(index, scheme.colors.length - 1))];
  };

  const getColorScheme = () => {
    return colorSchemes.find(scheme => scheme.id === colorScheme) || colorSchemes[0];
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
      loadAudioFile(file);
    }
  };

  const loadAudioFile = (file) => {
    const url = URL.createObjectURL(file);
    
    if (audioElementRef.current) {
      audioElementRef.current.src = url;
      audioElementRef.current.play();
      setIsPlaying(true);
      
      // Connect to audio analyser
      if (audioContextRef.current && !sourceRef.current) {
        const source = audioContextRef.current.createMediaElementSource(audioElementRef.current);
        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
        sourceRef.current = source;
      }
    }
  };

  const togglePlayPause = () => {
    if (!audioElementRef.current) return;
    
    if (isPlaying) {
      audioElementRef.current.pause();
      setIsPlaying(false);
    } else {
      audioElementRef.current.play();
      setIsPlaying(true);
    }
  };

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
      sourceRef.current = source;
      setIsPlaying(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone');
    }
  };

  const stopMicrophone = () => {
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <div className="audio-visualizer">
      <div className="visualizer-header">
        <h2>🎵 Audio Visualizer</h2>
        <div className="playback-status">
          <span className={`status ${isPlaying ? 'playing' : 'stopped'}`}>
            {isPlaying ? '🔊 Playing' : '⏸️ Stopped'}
          </span>
        </div>
      </div>

      <div className="visualizer-content">
        <div className="audio-controls">
          <div className="file-input-section">
            <h3>Audio Source</h3>
            <div className="file-upload">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="file-input"
                id="audio-file"
              />
              <label htmlFor="audio-file" className="file-label">
                📁 Choose Audio File
              </label>
              {audioFile && (
                <span className="file-name">{audioFile.name}</span>
              )}
            </div>
            
            <div className="mic-controls">
              <button
                onClick={isPlaying ? stopMicrophone : startMicrophone}
                className={`mic-btn ${isPlaying ? 'active' : ''}`}
              >
                {isPlaying ? '🔇 Stop Microphone' : '🎤 Use Microphone'}
              </button>
            </div>
            
            {audioElementRef.current && (
              <div className="playback-controls">
                <button
                  onClick={togglePlayPause}
                  className="play-btn"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                
                <div className="time-display">
                  <span>{formatTime(audioTime)}</span>
                  <span>/</span>
                  <span>{formatTime(audioDuration)}</span>
                </div>
              </div>
            )}
          </div>

          <div className="visualization-controls">
            <h3>Visualization Type</h3>
            <div className="viz-types">
              {visualizationTypes.map(type => (
                <button
                  key={type.id}
                  className={`viz-type-btn ${visualizationType === type.id ? 'active' : ''}`}
                  onClick={() => setVisualizationType(type.id)}
                >
                  <span className="viz-icon">{type.icon}</span>
                  <span className="viz-name">{type.name}</span>
                  <span className="viz-desc">{type.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="visualizer-settings">
            <h3>Visualizer Settings</h3>
            
            <div className="setting-group">
              <label>Sensitivity: {sensitivity.toFixed(1)}</label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={sensitivity}
                onChange={(e) => setSensitivity(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="setting-group">
              <label>Smoothing: {smoothing.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="0.99"
                step="0.01"
                value={smoothing}
                onChange={(e) => setSmoothing(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="setting-group">
              <label>Color Scheme</label>
              <select
                value={colorScheme}
                onChange={(e) => setColorScheme(e.target.value)}
                className="scheme-select"
              >
                {colorSchemes.map(scheme => (
                  <option key={scheme.id} value={scheme.id}>
                    {scheme.name}
                  </option>
                ))}
              </select>
            </div>

            {visualizationType === 'particles' && (
              <div className="setting-group">
                <label>Particle Count: {particleCount}</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={particleCount}
                  onChange={(e) => setParticleCount(Number(e.target.value))}
                  className="slider"
                />
              </div>
            )}
          </div>

          <div className="frequency-display">
            <h3>Frequency Spectrum</h3>
            <div className="frequency-bars">
              {frequencyData.slice(0, 32).map((value, index) => (
                <div
                  key={index}
                  className="freq-bar"
                  style={{
                    height: `${(value / 255) * 100}%`,
                    backgroundColor: getColorFromScheme(index / 32)
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="visualization-display">
          <div ref={mountRef} className="threejs-mount" />
          <audio
            ref={audioElementRef}
            onTimeUpdate={(e) => setAudioTime(e.target.currentTime)}
            onLoadedMetadata={(e) => setAudioDuration(e.target.duration)}
            className="audio-element"
          />
          
          <div className="viz-info">
            <h4>3D Audio Visualization</h4>
            <p>Type: {visualizationTypes.find(t => t.id === visualizationType)?.name}</p>
            <p>Color Scheme: {getColorScheme().name}</p>
            <p>Status: {isPlaying ? 'Playing' : 'Stopped'}</p>
            <p className="controls-hint">
              🖱️ Use mouse to rotate camera, scroll to zoom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default AudioVisualizer;
