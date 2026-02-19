import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as ThreeJSUtils from '../../library/index.js';
import './ShaderEditor.css';

// Define default shaders before component
const defaultVertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const defaultFragmentShader = `
uniform float time;
uniform vec2 resolution;
uniform vec3 color;
uniform float intensity;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec2 uv = vUv;
  
  // Basic color with lighting
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float diff = max(dot(vNormal, lightDir), 0.0);
  vec3 diffuse = diff * color;
  
  // Add some animation
  float wave = sin(uv.x * 10.0 + time) * 0.1;
  vec3 finalColor = diffuse * intensity + wave;
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

const ShaderEditor = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const meshRef = useRef(null);
  
  const [activeShader, setActiveShader] = useState('vertex');
  const [vertexShader, setVertexShader] = useState(defaultVertexShader);
  const [fragmentShader, setFragmentShader] = useState(defaultFragmentShader);
  const [uniforms, setUniforms] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [shaderError, setShaderError] = useState('');
  const [selectedPreset, setSelectedPreset] = useState('basic');
  const [customUniforms, setCustomUniforms] = useState([]);
  
  const shaderPresets = [
    {
      id: 'basic',
      name: 'Basic Lighting',
      icon: '💡',
      description: 'Simple phong lighting',
      vertex: defaultVertexShader,
      fragment: defaultFragmentShader,
      uniforms: ['time', 'resolution', 'color', 'intensity']
    },
    {
      id: 'wave',
      name: 'Wave Effect',
      icon: '🌊',
      description: 'Animated wave distortion',
      vertex: `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;
    vec3 pos = position;
    pos.z += sin(pos.x * 10.0 + time) * 0.1;
    pos.z += cos(pos.y * 8.0 + time * 1.5) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
      `,
      fragment: `
uniform float time;
uniform vec2 resolution;
uniform vec3 color;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vec2 uv = vUv;
    vec3 pos = vPosition;
    
    float wave = sin(pos.x * 10.0 + time) * cos(pos.y * 8.0 + time * 1.5);
    vec3 finalColor = color + wave * 0.2;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
      `,
      uniforms: ['time', 'resolution', 'color']
    },
    {
      id: 'hologram',
      name: 'Hologram',
      icon: '🔮',
      description: 'Sci-fi hologram effect',
      vertex: defaultVertexShader,
      fragment: `
uniform float time;
uniform vec2 resolution;
uniform vec3 color;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec2 uv = vUv;
    
    // Hologram scan lines
    float scanline = sin(uv.y * resolution.y * 2.0 + time * 10.0) * 0.5 + 0.5;
    float flicker = sin(time * 20.0) * 0.1 + 0.9;
    
    vec3 finalColor = color * scanline * flicker;
    
    // Add glow effect
    float glow = 1.0 / length(uv - 0.5) * 0.1;
    finalColor += glow * color * 0.5;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
      `,
      uniforms: ['time', 'resolution', 'color']
    },
    {
      id: 'plasma',
      name: 'Plasma',
      icon: '🔥',
      description: 'Animated plasma effect',
      vertex: defaultVertexShader,
      fragment: `
uniform float time;
uniform vec2 resolution;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    float v1 = sin(uv.x * 10.0 + time);
    float v2 = sin(10.0 * (uv.x * sin(time / 2.0) + uv.y * cos(time / 3.0)) + time);
    float cx = uv.x + 0.5 * sin(time / 5.0);
    float cy = uv.y + 0.5 * cos(time / 3.0);
    
    vec2 c = vec2(cx, cy);
    vec2 p = uv - c;
    float d = length(p);
    
    float plasma = sin(d * 10.0 - time) + sin(d * 20.0 + time * 2.0);
    plasma = plasma / 2.0 + 0.5;
    
    vec3 color1 = vec3(plasma, plasma * 0.5, sin(plasma * 3.14159));
    vec3 color2 = vec3(plasma * 0.8, plasma, plasma * 0.5);
    vec3 finalColor = mix(color1, color2, sin(time));
    
    gl_FragColor = vec4(finalColor, 1.0);
}
      `,
      uniforms: ['time', 'resolution']
    },
    {
      id: 'glitch',
      name: 'Glitch',
      icon: '📺',
      description: 'Digital glitch distortion',
      vertex: defaultVertexShader,
      fragment: `
uniform float time;
uniform vec2 resolution;
uniform vec3 color;

varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = vUv;
    
    // Glitch effect
    float glitch = step(0.95, sin(time * 10.0)) * random(vec2(time));
    uv.x += glitch * 0.1;
    
    // Color channel separation
    vec3 r = texture2D(iChannel0, uv + vec2(0.001, 0.0)).rgb;
    vec3 g = texture2D(iChannel0, uv + vec2(0.0, 0.001)).rgb;
    vec3 b = texture2D(iChannel0, uv).rgb;
    
    vec3 finalColor = vec3(r.r, g.g, b.b) * color;
    
    // Noise
    float noise = random(uv + time) * 0.1;
    finalColor += noise;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
      `,
      uniforms: ['time', 'resolution', 'color']
    },
    {
      id: 'water',
      name: 'Water',
      icon: '💧',
      description: 'Water surface simulation',
      vertex: `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.z += sin(pos.x * 5.0 + time * 2.0) * 0.05;
    pos.z += cos(pos.y * 3.0 + time * 1.5) * 0.05;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
      `,
      fragment: `
uniform float time;
uniform vec2 resolution;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vec2 uv = vUv;
    
    // Water waves
    float wave1 = sin(uv.x * 10.0 + time * 2.0) * 0.05;
    float wave2 = cos(uv.y * 8.0 + time * 1.5) * 0.05;
    float wave = wave1 + wave2;
    
    // Water color
    vec3 deepWater = vec3(0.0, 0.3, 0.5);
    vec3 shallowWater = vec3(0.0, 0.6, 0.8);
    
    vec3 waterColor = mix(deepWater, shallowWater, wave);
    
    // Add foam
    float foam = pow(wave, 2.0) * 0.3;
    waterColor += foam;
    
    gl_FragColor = vec4(waterColor, 0.8);
}
      `,
      uniforms: ['time', 'resolution']
    }
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
      loadShaderPreset(selectedPreset);
    }
  }, [selectedPreset]);

  const initializeScene = () => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Add orbit controls
    const controls = ThreeJSUtils.setupOrbitControls(camera, renderer);
    
    // Create shader mesh
    createShaderMesh();
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      
      updateUniforms();
      renderer.render(scene, camera);
    };
    animate();
  };

  const createShaderMesh = () => {
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: createUniforms(),
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    sceneRef.current.add(mesh);
    meshRef.current = mesh;
  };

  const createUniforms = () => {
    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(800, 600) },
      color: { value: new THREE.Color(0x4488ff) },
      intensity: { value: 1.0 }
    };
    
    // Add custom uniforms
    customUniforms.forEach(uniform => {
      uniforms[uniform.name] = {
        value: uniform.type === 'color' ? new THREE.Color(uniform.value) : uniform.value,
        type: uniform.type
      };
    });
    
    setUniforms(uniforms);
    return uniforms;
  };

  const updateUniforms = () => {
    if (!meshRef.current || !meshRef.current.material.uniforms) return;
    
    const uniforms = meshRef.current.material.uniforms;
    
    if (uniforms.time) {
      uniforms.time.value = performance.now() / 1000;
    }
    
    if (uniforms.resolution) {
      uniforms.resolution.value.set(rendererRef.current.domElement.width, rendererRef.current.domElement.height);
    }
  };

  const loadShaderPreset = (presetId) => {
    const preset = shaderPresets.find(p => p.id === presetId);
    if (!preset) return;
    
    setVertexShader(preset.vertex);
    setFragmentShader(preset.fragment);
    
    // Set default uniforms for preset
    const defaultUniformValues = {
      time: 0,
      resolution: '800,600',
      color: '#4488ff',
      intensity: 1.0
    };
    
    setCustomUniforms(preset.uniforms.map(name => ({
      name,
      value: defaultUniformValues[name] || '',
      type: getUniformType(name)
    })));
    
    // Recreate mesh with new shader
    if (meshRef.current) {
      sceneRef.current.remove(meshRef.current);
      createShaderMesh();
    }
    
    setShaderError('');
  };

  const getUniformType = (uniformName) => {
    const uniformTypes = {
      time: 'float',
      resolution: 'vec2',
      color: 'color',
      intensity: 'float'
    };
    return uniformTypes[uniformName] || 'float';
  };

  const compileShader = () => {
    setShaderError('');
    
    try {
      // Validate shader syntax
      if (vertexShader.trim() === '' || fragmentShader.trim() === '') {
        setShaderError('Vertex and fragment shaders cannot be empty');
        return;
      }
      
      // Create new material with updated shaders
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: createUniforms(),
        side: THREE.DoubleSide
      });
      
      // Apply to mesh
      if (meshRef.current) {
        meshRef.current.material = material;
      }
      
      setShaderError('');
    } catch (error) {
      setShaderError(`Shader compilation error: ${error.message}`);
    }
  };

  const addCustomUniform = () => {
    const newUniform = {
      name: `custom_${Date.now()}`,
      value: '1.0',
      type: 'float'
    };
    
    setCustomUniforms([...customUniforms, newUniform]);
  };

  const updateCustomUniform = (index, field, value) => {
    const updatedUniforms = [...customUniforms];
    updatedUniforms[index] = {
      ...updatedUniforms[index],
      [field]: field === 'type' ? value : value
    };
    
    setCustomUniforms(updatedUniforms);
  };

  const removeCustomUniform = (index) => {
    const updatedUniforms = customUniforms.filter((_, i) => i !== index);
    setCustomUniforms(updatedUniforms);
  };

  const exportShader = () => {
    const shaderData = {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: customUniforms,
      preset: selectedPreset,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(shaderData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shader-${selectedPreset}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importShader = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const shaderData = JSON.parse(e.target.result);
        setVertexShader(shaderData.vertex || defaultVertexShader);
        setFragmentShader(shaderData.fragment || defaultFragmentShader);
        setCustomUniforms(shaderData.uniforms || []);
        compileShader();
      } catch (error) {
        setShaderError(`Import error: ${error.message}`);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="shader-editor">
      <div className="editor-header">
        <h2>🎨 Shader Editor</h2>
        <div className="editor-status">
          <span className={`status ${shaderError ? 'error' : 'success'}`}>
            {shaderError ? '❌ Error' : '✅ Ready'}
          </span>
        </div>
      </div>

      <div className="editor-content">
        <div className="shader-controls">
          <div className="preset-section">
            <h3>Shader Presets</h3>
            <div className="preset-grid">
              {shaderPresets.map(preset => (
                <button
                  key={preset.id}
                  className={`preset-btn ${selectedPreset === preset.id ? 'active' : ''}`}
                  onClick={() => setSelectedPreset(preset.id)}
                >
                  <span className="preset-icon">{preset.icon}</span>
                  <span className="preset-name">{preset.name}</span>
                  <span className="preset-desc">{preset.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="uniforms-section">
            <h3>Uniforms</h3>
            <div className="uniforms-list">
              {Object.entries(uniforms).map(([name, uniform]) => (
                <div key={name} className="uniform-item">
                  <span className="uniform-name">{name}</span>
                  <span className="uniform-value">
                    {uniform.value?.toString() || 'N/A'}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="custom-uniforms">
              <h4>Custom Uniforms</h4>
              {customUniforms.map((uniform, index) => (
                <div key={index} className="custom-uniform">
                  <input
                    type="text"
                    placeholder="Uniform name"
                    value={uniform.name}
                    onChange={(e) => updateCustomUniform(index, 'name', e.target.value)}
                    className="uniform-name-input"
                  />
                  <select
                    value={uniform.type}
                    onChange={(e) => updateCustomUniform(index, 'type', e.target.value)}
                    className="uniform-type-select"
                  >
                    <option value="float">Float</option>
                    <option value="vec2">Vector2</option>
                    <option value="vec3">Vector3</option>
                    <option value="color">Color</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Default value"
                    value={uniform.value}
                    onChange={(e) => updateCustomUniform(index, 'value', e.target.value)}
                    className="uniform-value-input"
                  />
                  <button
                    onClick={() => removeCustomUniform(index)}
                    className="remove-uniform-btn"
                  >
                    ❌
                  </button>
                </div>
              ))}
              
              <button
                onClick={addCustomUniform}
                className="add-uniform-btn"
              >
                ➕ Add Uniform
              </button>
            </div>
          </div>

          <div className="editor-actions">
            <h3>Actions</h3>
            <div className="action-buttons">
              <button
                onClick={compileShader}
                className="compile-btn"
              >
                🔄 Compile Shader
              </button>
              
              <button
                onClick={exportShader}
                className="export-btn"
              >
                📤 Export Shader
              </button>
              
              <label className="import-btn">
                📁 Import Shader
                <input
                  type="file"
                  accept=".json"
                  onChange={importShader}
                  className="file-input"
                />
              </label>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
              >
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
            </div>
          </div>
        </div>

        <div className="shader-editor-panel">
          <div className="editor-tabs">
            <button
              className={`tab-btn ${activeShader === 'vertex' ? 'active' : ''}`}
              onClick={() => setActiveShader('vertex')}
            >
              Vertex Shader
            </button>
            <button
              className={`tab-btn ${activeShader === 'fragment' ? 'active' : ''}`}
              onClick={() => setActiveShader('fragment')}
            >
              Fragment Shader
            </button>
          </div>

          <div className="code-editor">
            {activeShader === 'vertex' ? (
              <textarea
                value={vertexShader}
                onChange={(e) => setVertexShader(e.target.value)}
                className="shader-code vertex-shader"
                placeholder="// Vertex shader code..."
                spellCheck={false}
              />
            ) : (
              <textarea
                value={fragmentShader}
                onChange={(e) => setFragmentShader(e.target.value)}
                className="shader-code fragment-shader"
                placeholder="// Fragment shader code..."
                spellCheck={false}
              />
            )}
          </div>

          {shaderError && (
            <div className="error-display">
              <h4>Compilation Error</h4>
              <pre>{shaderError}</pre>
            </div>
          )}
        </div>

        <div className="preview-panel">
          <div ref={mountRef} className="threejs-mount" />
          
          <div className="preview-info">
            <h4>3D Preview</h4>
            <p>Preset: {shaderPresets.find(p => p.id === selectedPreset)?.name}</p>
            <p>Status: {isPlaying ? 'Playing' : 'Paused'}</p>
            <p>Uniforms: {Object.keys(uniforms).length + customUniforms.length}</p>
            <p className="controls-hint">
              🖱️ Use mouse to rotate camera, scroll to zoom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShaderEditor;
