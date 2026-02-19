import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as ThreeJSUtils from '../../../../library/index.js';

const TerrainGenerator = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  
  const [terrainType, setTerrainType] = useState('mountains');
  const [terrainSize, setTerrainSize] = useState(100);
  const [resolution, setResolution] = useState(128);
  const [heightScale, setHeightScale] = useState(20);
  const [seed, setSeed] = useState(Math.random());
  const [wireframe, setWireframe] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [terrainStats, setTerrainStats] = useState(null);
  
  const terrainMeshRef = useRef(null);
  const waterMeshRef = useRef(null);
  const vegetationRef = useRef([]);

  const terrainTypes = [
    { id: 'mountains', name: 'Mountains', icon: '⛰️', description: 'Rugged mountain terrain' },
    { id: 'hills', name: 'Rolling Hills', icon: '🏞️', description: 'Gentle rolling landscape' },
    { id: 'islands', name: 'Islands', icon: '🏝️', description: 'Archipelago with water' },
    { id: 'canyon', name: 'Canyon', icon: '🏜️', description: 'Deep canyon formation' },
    { id: 'volcanic', name: 'Volcanic', icon: '🌋', description: 'Volcanic landscape' },
    { id: 'craters', name: 'Craters', icon: '☄️', description: 'Impact crater terrain' },
    { id: 'valley', name: 'Valley', icon: '🏔️', description: 'Valley between peaks' },
    { id: 'plateau', name: 'Plateau', icon: '📈', description: 'Flat elevated terrain' }
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
      generateTerrain();
    }
  }, [terrainType, terrainSize, resolution, heightScale, seed]);

  const initializeScene = () => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Enhanced lighting for terrain
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    scene.add(directionalLight);
    
    // Add orbit controls
    const controls = ThreeJSUtils.setupOrbitControls(camera, renderer);
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      
      if (autoRotate && terrainMeshRef.current) {
        terrainMeshRef.current.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    };
    animate();
  };

  const generateTerrain = () => {
    setIsGenerating(true);
    
    // Clear existing terrain
    clearTerrain();
    
    // Generate height map
    const geometry = new THREE.PlaneGeometry(terrainSize, terrainSize, resolution, resolution);
    const heights = generateHeightMap(resolution + 1, resolution + 1);
    
    // Apply heights to geometry
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = Math.floor((i / 3) % (resolution + 1));
      const y = Math.floor((i / 3) / (resolution + 1));
      vertices[i + 2] = heights[y][x] * heightScale;
    }
    
    geometry.computeVertexNormals();
    
    // Create terrain material
    const material = createTerrainMaterial(heights);
    
    // Create terrain mesh
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2;
    terrain.receiveShadow = true;
    terrain.castShadow = true;
    
    if (wireframe) {
      material.wireframe = true;
    }
    
    sceneRef.current.add(terrain);
    terrainMeshRef.current = terrain;
    
    // Add water if applicable
    if (terrainType === 'islands' || terrainType === 'valley') {
      addWater(heights);
    }
    
    // Add vegetation
    addVegetation(heights);
    
    // Calculate terrain statistics
    calculateTerrainStats(heights);
    
    // Add grid if enabled
    if (showGrid) {
      addGrid();
    }
    
    setIsGenerating(false);
  };

  const generateHeightMap = (width, height) => {
    const heights = [];
    
    for (let y = 0; y < height; y++) {
      heights[y] = [];
      for (let x = 0; x < width; x++) {
        heights[y][x] = getHeightValue(x, y, width, height);
      }
    }
    
    return heights;
  };

  const getHeightValue = (x, y, width, height) => {
    let heightValue = 0;
    const nx = x / width - 0.5;
    const ny = y / height - 0.5;
    
    switch (terrainType) {
      case 'mountains':
        heightValue = generateMountains(nx, ny);
        break;
      case 'hills':
        heightValue = generateHills(nx, ny);
        break;
      case 'islands':
        heightValue = generateIslands(nx, ny);
        break;
      case 'canyon':
        heightValue = generateCanyon(nx, ny);
        break;
      case 'volcanic':
        heightValue = generateVolcanic(nx, ny);
        break;
      case 'craters':
        heightValue = generateCraters(nx, ny);
        break;
      case 'valley':
        heightValue = generateValley(nx, ny);
        break;
      case 'plateau':
        heightValue = generatePlateau(nx, ny);
        break;
      default:
        heightValue = generateMountains(nx, ny);
    }
    
    return Math.max(0, Math.min(1, heightValue));
  };

  const noise = (x, y, octaves = 4, persistence = 0.5, lacunarity = 2.0) => {
    let total = 0;
    let frequency = 1;
    let amplitude = 1;
    let maxValue = 0;
    
    for (let i = 0; i < octaves; i++) {
      total += amplitude * simplexNoise(x * frequency + seed, y * frequency + seed);
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }
    
    return total / maxValue;
  };

  const simplexNoise = (x, y) => {
    // Simple simplex noise implementation
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    
    const s = (x + y) * F2;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = x - X0;
    const y0 = y - Y0;
    
    let i1, j1;
    if (x0 > y0) {
      i1 = 1; j1 = 0;
    } else {
      i1 = 0; j1 = 1;
    }
    
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1.0 + 2.0 * G2;
    const y2 = y0 - 1.0 + 2.0 * G2;
    
    const ii = i & 255;
    const jj = j & 255;
    
    const grad = (hash) => {
      const h = hash & 15;
      const grad = 1 + (h & 7);
      return ((h & 8) ? -grad : grad);
    };
    
    const dot = (g, x, y) => g[0] * x + g[1] * y;
    
    let n0 = 0, n1 = 0, n2 = 0;
    
    const t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      const g0 = [grad(ii + 0), grad(jj + 0)];
      n0 = t0 * t0 * t0 * t0 * dot(g0, x0, y0);
    }
    
    const t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      const g1 = [grad(ii + i1), grad(jj + j1)];
      n1 = t1 * t1 * t1 * t1 * dot(g1, x1, y1);
    }
    
    const t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      const g2 = [grad(ii + 1), grad(jj + 1)];
      n2 = t2 * t2 * t2 * t2 * dot(g2, x2, y2);
    }
    
    return 70.0 * (n0 + n1 + n2);
  };

  const generateMountains = (x, y) => {
    const elevation = noise(x * 2, y * 2, 6, 0.5, 2.0);
    const detail = noise(x * 8, y * 8, 4, 0.3, 2.0);
    const ridges = Math.abs(noise(x * 4, y * 4, 2, 0.8, 2.0));
    
    return elevation * 0.6 + detail * 0.2 + ridges * 0.2;
  };

  const generateHills = (x, y) => {
    const base = noise(x * 1.5, y * 1.5, 4, 0.6, 2.0);
    const smooth = noise(x * 3, y * 3, 2, 0.4, 2.0);
    
    return base * 0.7 + smooth * 0.3;
  };

  const generateIslands = (x, y) => {
    const distance = Math.sqrt(x * x + y * y);
    const islandShape = Math.max(0, 1 - distance * 2);
    const terrain = noise(x * 3, y * 3, 5, 0.5, 2.0);
    
    return islandShape * terrain;
  };

  const generateCanyon = (x, y) => {
    const base = noise(x * 2, y * 2, 4, 0.5, 2.0);
    const canyonDepth = Math.abs(y) * 3;
    const erosion = noise(x * 6, y * 6, 3, 0.7, 2.0);
    
    return Math.max(0, base - canyonDepth * 0.3 + erosion * 0.1);
  };

  const generateVolcanic = (x, y) => {
    const distance = Math.sqrt(x * x + y * y);
    const cone = Math.max(0, 1 - distance * 1.5);
    const lava = noise(x * 4, y * 4, 3, 0.6, 2.0);
    const craters = Math.abs(noise(x * 8, y * 8, 2, 0.8, 2.0));
    
    return cone * 0.7 + lava * 0.2 + craters * 0.1;
  };

  const generateCraters = (x, y) => {
    const base = noise(x * 1.5, y * 1.5, 3, 0.4, 2.0);
    const crater1 = Math.max(0, 1 - Math.sqrt((x - 0.2) * (x - 0.2) + (y - 0.1) * (y - 0.1)) * 8);
    const crater2 = Math.max(0, 1 - Math.sqrt((x + 0.3) * (x + 0.3) + (y + 0.2) * (y + 0.2)) * 6);
    const crater3 = Math.max(0, 1 - Math.sqrt((x - 0.1) * (x - 0.1) + (y - 0.3) * (y - 0.3)) * 10);
    
    return base * 0.5 - (crater1 * 0.2 + crater2 * 0.15 + crater3 * 0.15);
  };

  const generateValley = (x, y) => {
    const mountains = noise(x * 2, y * 2, 4, 0.5, 2.0);
    const valleyDepth = Math.abs(y) * 2.5;
    const slope = noise(x * 4, y * 4, 2, 0.6, 2.0);
    
    return Math.max(0, mountains - valleyDepth * 0.4 + slope * 0.1);
  };

  const generatePlateau = (x, y) => {
    const plateau = Math.max(0, 1 - Math.abs(y) * 3);
    const edges = noise(x * 3, y * 3, 3, 0.7, 2.0);
    const surface = noise(x * 6, y * 6, 2, 0.3, 2.0);
    
    return plateau * 0.6 + edges * 0.3 + surface * 0.1;
  };

  const createTerrainMaterial = (heights) => {
    const canvas = document.createElement('canvas');
    canvas.width = resolution;
    canvas.height = resolution;
    const ctx = canvas.getContext('2d');
    
    const imageData = ctx.createImageData(resolution, resolution);
    const data = imageData.data;
    
    for (let y = 0; y < resolution; y++) {
      for (let x = 0; x < resolution; x++) {
        const height = heights[y][x];
        const index = (y * resolution + x) * 4;
        
        let r, g, b;
        
        if (height < 0.2) {
          // Water/low areas - blue
          r = 50 + height * 100;
          g = 100 + height * 100;
          b = 150 + height * 105;
        } else if (height < 0.4) {
          // Sand/beach - yellow
          r = 194 + height * 50;
          g = 178 + height * 50;
          b = 128 + height * 50;
        } else if (height < 0.6) {
          // Grass - green
          r = 50 + height * 100;
          g = 150 + height * 50;
          b = 50 + height * 50;
        } else if (height < 0.8) {
          // Rock - gray
          r = 128 + height * 50;
          g = 128 + height * 50;
          b = 128 + height * 50;
        } else {
          // Snow - white
          r = 220 + height * 35;
          g = 220 + height * 35;
          b = 230 + height * 25;
        }
        
        data[index] = r;
        data[index + 1] = g;
        data[index + 2] = b;
        data[index + 3] = 255;
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    
    return new THREE.MeshLambertMaterial({ 
      map: texture,
      side: THREE.DoubleSide
    });
  };

  const addWater = (heights) => {
    const waterGeometry = new THREE.PlaneGeometry(terrainSize, terrainSize, resolution, resolution);
    const waterMaterial = new THREE.MeshPhongMaterial({
      color: 0x006994,
      transparent: true,
      opacity: 0.7,
      shininess: 100
    });
    
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -2;
    sceneRef.current.add(water);
    waterMeshRef.current = water;
  };

  const addVegetation = (heights) => {
    const treeCount = Math.floor(resolution * resolution / 100);
    
    for (let i = 0; i < treeCount; i++) {
      const x = Math.floor(Math.random() * resolution);
      const y = Math.floor(Math.random() * resolution);
      const height = heights[y][x];
      
      // Add trees on suitable terrain
      if (height > 0.3 && height < 0.7) {
        const tree = createTree();
        const worldX = (x / resolution - 0.5) * terrainSize;
        const worldZ = (y / resolution - 0.5) * terrainSize;
        const worldY = height * heightScale;
        
        tree.position.set(worldX, worldY, worldZ);
        sceneRef.current.add(tree);
        vegetationRef.current.push(tree);
      }
    }
  };

  const createTree = () => {
    const group = new THREE.Group();
    
    // Trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.8, 4);
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 2;
    trunk.castShadow = true;
    group.add(trunk);
    
    // Leaves
    const leavesGeometry = new THREE.ConeGeometry(3, 6, 8);
    const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.y = 7;
    leaves.castShadow = true;
    group.add(leaves);
    
    return group;
  };

  const addGrid = () => {
    const gridHelper = new THREE.GridHelper(terrainSize, 20, 0x444444, 0x222222);
    gridHelper.position.y = -heightScale - 1;
    sceneRef.current.add(gridHelper);
  };

  const calculateTerrainStats = (heights) => {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let count = 0;
    
    for (let y = 0; y < heights.length; y++) {
      for (let x = 0; x < heights[y].length; x++) {
        const height = heights[y][x];
        min = Math.min(min, height);
        max = Math.max(max, height);
        sum += height;
        count++;
      }
    }
    
    const avg = sum / count;
    const variance = heights.reduce((acc, row) => {
      return acc + row.reduce((rowAcc, height) => {
        return rowAcc + Math.pow(height - avg, 2);
      }, 0);
    }, 0) / count;
    
    setTerrainStats({
      minHeight: min * heightScale,
      maxHeight: max * heightScale,
      avgHeight: avg * heightScale,
      variance: variance,
      vertices: count
    });
  };

  const clearTerrain = () => {
    // Remove terrain mesh
    if (terrainMeshRef.current) {
      sceneRef.current.remove(terrainMeshRef.current);
      terrainMeshRef.current.geometry.dispose();
      terrainMeshRef.current.material.dispose();
      terrainMeshRef.current = null;
    }
    
    // Remove water
    if (waterMeshRef.current) {
      sceneRef.current.remove(waterMeshRef.current);
      waterMeshRef.current.geometry.dispose();
      waterMeshRef.current.material.dispose();
      waterMeshRef.current = null;
    }
    
    // Remove vegetation
    vegetationRef.current.forEach(obj => {
      sceneRef.current.remove(obj);
      obj.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    });
    vegetationRef.current = [];
    
    // Remove grid
    const grid = sceneRef.current.children.find(child => child instanceof THREE.GridHelper);
    if (grid) {
      sceneRef.current.remove(grid);
    }
    
    setTerrainStats(null);
  };

  const exportTerrain = () => {
    if (!terrainMeshRef.current) return;
    
    // Export terrain geometry as JSON
    const geometry = terrainMeshRef.current.geometry;
    const vertices = geometry.attributes.position.array;
    const faces = geometry.index.array;
    
    const exportData = {
      type: 'terrain',
      terrainType,
      size: terrainSize,
      resolution,
      heightScale,
      seed,
      vertices: Array.from(vertices),
      faces: Array.from(faces),
      stats: terrainStats,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `terrain-${terrainType}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const randomizeSeed = () => {
    setSeed(Math.random());
  };

  return (
    <div className="terrain-generator">
      <div className="generator-header">
        <h2>🏔️ Procedural Terrain Generator</h2>
        <div className="generation-status">
          <span className={`status ${isGenerating ? 'generating' : 'ready'}`}>
            {isGenerating ? '🔄 Generating...' : '✅ Ready'}
          </span>
        </div>
      </div>

      <div className="generator-content">
        <div className="terrain-controls">
          <div className="terrain-types">
            <h3>Terrain Types</h3>
            <div className="type-grid">
              {terrainTypes.map(type => (
                <button
                  key={type.id}
                  className={`type-btn ${terrainType === type.id ? 'active' : ''}`}
                  onClick={() => setTerrainType(type.id)}
                >
                  <span className="type-icon">{type.icon}</span>
                  <span className="type-name">{type.name}</span>
                  <span className="type-desc">{type.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="terrain-parameters">
            <h3>Terrain Parameters</h3>
            
            <div className="parameter-group">
              <label>Terrain Size: {terrainSize}</label>
              <input
                type="range"
                min="50"
                max="200"
                step="10"
                value={terrainSize}
                onChange={(e) => setTerrainSize(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="parameter-group">
              <label>Resolution: {resolution}</label>
              <input
                type="range"
                min="32"
                max="256"
                step="32"
                value={resolution}
                onChange={(e) => setResolution(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="parameter-group">
              <label>Height Scale: {heightScale}</label>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={heightScale}
                onChange={(e) => setHeightScale(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="parameter-group">
              <label>Seed: {seed.toFixed(4)}</label>
              <div className="seed-controls">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={seed}
                  onChange={(e) => setSeed(Number(e.target.value))}
                  className="slider"
                />
                <button onClick={randomizeSeed} className="random-btn">
                  🎲 Random
                </button>
              </div>
            </div>
          </div>

          <div className="display-options">
            <h3>Display Options</h3>
            
            <div className="option-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={wireframe}
                  onChange={(e) => setWireframe(e.target.checked)}
                />
                Wireframe
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                />
                Show Grid
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={autoRotate}
                  onChange={(e) => setAutoRotate(e.target.checked)}
                />
                Auto Rotate
              </label>
            </div>
          </div>

          <div className="terrain-stats">
            <h3>Terrain Statistics</h3>
            {terrainStats ? (
              <div className="stats-grid">
                <div className="stat">
                  <span className="stat-label">Min Height:</span>
                  <span className="stat-value">{terrainStats.minHeight.toFixed(2)}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Max Height:</span>
                  <span className="stat-value">{terrainStats.maxHeight.toFixed(2)}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Avg Height:</span>
                  <span className="stat-value">{terrainStats.avgHeight.toFixed(2)}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Vertices:</span>
                  <span className="stat-value">{terrainStats.vertices.toLocaleString()}</span>
                </div>
              </div>
            ) : (
              <p className="no-stats">Generate terrain to see statistics</p>
            )}
          </div>

          <div className="action-buttons">
            <button
              onClick={generateTerrain}
              className="generate-btn"
              disabled={isGenerating}
            >
              {isGenerating ? '🔄 Generating...' : '🏔️ Generate Terrain'}
            </button>
            
            <button
              onClick={exportTerrain}
              className="export-btn"
              disabled={!terrainMeshRef.current}
            >
              📤 Export Terrain
            </button>
          </div>
        </div>

        <div className="terrain-display">
          <div ref={mountRef} className="threejs-mount" />
          
          {isGenerating && (
            <div className="generating-overlay">
              <div className="generating-spinner"></div>
              <p>Generating procedural terrain...</p>
            </div>
          )}
          
          <div className="terrain-info">
            <h4>Terrain Visualization</h4>
            <p>Type: {terrainTypes.find(t => t.id === terrainType)?.name}</p>
            <p>Size: {terrainSize}x{terrainSize}</p>
            <p>Resolution: {resolution}x{resolution}</p>
            <p className="controls-hint">
              🖱️ Use mouse to rotate camera, scroll to zoom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainGenerator;
