let scene, camera, renderer, mixer, clock = new THREE.Clock();
let jawBone = null;
let actions = {};
let audioContext, analyser, dataArray;
let currentCameraMode = 'default';
let cameraPositions = {
  default: { pos: new THREE.Vector3(0, 1.6, 3), look: new THREE.Vector3(0, 1.6, 0) },
  closeup: { pos: new THREE.Vector3(0, 1.6, 1.5), look: new THREE.Vector3(0, 1.6, 0) },
  wide: { pos: new THREE.Vector3(0, 3, 5), look: new THREE.Vector3(0, 1, 0) },
  side: { pos: new THREE.Vector3(2, 1.6, 2), look: new THREE.Vector3(0, 1.6, 0) }
};
let currentCameraIndex = 0;
let cameraKeys = Object.keys(cameraPositions);

// Character System
let currentCharacter = null;
let currentModel = null;
let characterModels = {};
let currentOutfit = {
  outfit: 'casual',
  hair: 'long',
  accessory: 'none',
  color: '#ff6b6b'
};

// Character Configuration
const CHARACTERS = {
  female1: {
    name: 'Linh',
    avatar: '👩‍💼',
    modelPath: 'characters/female1.glb',
    defaultOutfit: 'casual',
    personality: 'professional',
    voice: 'female1'
  },
  female2: {
    name: 'Mai',
    avatar: '👩‍🎨',
    modelPath: 'characters/female2.glb',
    defaultOutfit: 'creative',
    personality: 'creative',
    voice: 'female2'
  },
  female3: {
    name: 'An',
    avatar: '👩‍🔬',
    modelPath: 'characters/female3.glb',
    defaultOutfit: 'formal',
    personality: 'academic',
    voice: 'female3'
  },
  female4: {
    name: 'Huong',
    avatar: '👩‍🏫',
    modelPath: 'characters/female4.glb',
    defaultOutfit: 'elegant',
    personality: 'elegant',
    voice: 'female4'
  },
  female5: {
    name: 'Giang',
    avatar: '👩‍💻',
    modelPath: 'characters/female5.glb',
    defaultOutfit: 'tech',
    personality: 'tech',
    voice: 'female5'
  },
  female6: {
    name: 'Trang',
    avatar: '👩‍🎤',
    modelPath: 'characters/female6.glb',
    defaultOutfit: 'stage',
    personality: 'energetic',
    voice: 'female6'
  }
};

// Wardrobe Configuration
const WARDROBE = {
  outfits: {
    casual: { icon: '👕', name: 'Casual', color: '#4a90e2' },
    formal: { icon: '👔', name: 'Formal', color: '#2c3e50' },
    elegant: { icon: '👗', name: 'Elegant', color: '#8e44ad' },
    creative: { icon: '🎨', name: 'Creative', color: '#e74c3c' },
    tech: { icon: '💻', name: 'Tech', color: '#34495e' },
    stage: { icon: '🎤', name: 'Stage', color: '#f39c12' },
    traditional: { icon: '👘', name: 'Áo dài', color: '#c0392b' },
    sport: { icon: '🏃‍♀️', name: 'Sport', color: '#27ae60' }
  },
  hair: {
    long: { icon: '💇‍♀️', name: 'Long Hair' },
    short: { icon: '👩‍🦱', name: 'Short Hair' },
    ponytail: { icon: '🦸‍♀️', name: 'Ponytail' },
    bun: { icon: '👩‍🦳', name: 'Bun' },
    wavy: { icon: '🌊', name: 'Wavy' },
    straight: { icon: '➖', name: 'Straight' }
  },
  accessories: {
    none: { icon: '❌', name: 'None' },
    glasses: { icon: '👓', name: 'Glasses' },
    necklace: { icon: '📿', name: 'Necklace' },
    earrings: { icon: '💎', name: 'Earrings' },
    bracelet: { icon: '⌚', name: 'Bracelet' },
    bag: { icon: '👜', name: 'Bag' },
    hat: { icon: '👒', name: 'Hat' },
    scarf: { icon: '🧣', name: 'Scarf' }
  },
  colors: {
    '#ff6b6b': { name: 'Red', hex: '#ff6b6b' },
    '#4ecdc4': { name: 'Teal', hex: '#4ecdc4' },
    '#45b7d1': { name: 'Blue', hex: '#45b7d1' },
    '#96ceb4': { name: 'Green', hex: '#96ceb4' },
    '#ffeaa7': { name: 'Yellow', hex: '#ffeaa7' },
    '#dfe6e9': { name: 'Gray', hex: '#dfe6e9' },
    '#a29bfe': { name: 'Purple', hex: '#a29bfe' },
    '#fd79a8': { name: 'Pink', hex: '#fd79a8' }
  }
};

// =========================
// INIT SCENE
// =========================
init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.copy(cameraPositions.default.pos);
  camera.lookAt(cameraPositions.default.look);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  // ENHANCED LIGHTING
  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1.0);
  hemi.position.set(0, 10, 0);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 1);
  dir.position.set(3, 5, 2);
  dir.castShadow = true;
  dir.shadow.camera.near = 0.1;
  dir.shadow.camera.far = 20;
  dir.shadow.camera.left = -5;
  dir.shadow.camera.right = 5;
  dir.shadow.camera.top = 5;
  dir.shadow.camera.bottom = -5;
  scene.add(dir);

  const fill = new THREE.DirectionalLight(0x88ccff, 0.3);
  fill.position.set(-3, 2, -2);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xff6b6b, 0.2);
  rim.position.set(0, 1, -3);
  scene.add(rim);

  // GROUND
  const groundGeometry = new THREE.PlaneGeometry(10, 10);
  const groundMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x222222,
    roughness: 0.8,
    metalness: 0.2
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // INIT UI
  initializeCharacterUI();
  initializeWardrobeUI();

  // LOAD DEFAULT CHARACTER
  loadCharacter('female1');

  window.addEventListener("resize", onWindowResize);

  // CHAT INPUT
  document.getElementById("chatInput").addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const text = e.target.value;
      e.target.value = "";
      await handleChat(text);
    }
  });

  updateStatus('Character system ready', 'success');
}

// =========================
// CHARACTER SYSTEM
// =========================

function initializeCharacterUI() {
  const characterGrid = document.getElementById('characterGrid');
  
  Object.keys(CHARACTERS).forEach(charId => {
    const char = CHARACTERS[charId];
    const card = document.createElement('div');
    card.className = 'character-card';
    card.dataset.characterId = charId;
    card.innerHTML = `
      <div class="avatar">${char.avatar}</div>
      <div class="name">${char.name}</div>
    `;
    card.onclick = () => selectCharacter(charId);
    characterGrid.appendChild(card);
  });
}

function initializeWardrobeUI() {
  // Outfits
  const outfitGrid = document.getElementById('outfitGrid');
  Object.keys(WARDROBE.outfits).forEach(outfitId => {
    const outfit = WARDROBE.outfits[outfitId];
    const item = document.createElement('div');
    item.className = 'outfit-item';
    item.dataset.outfitId = outfitId;
    item.innerHTML = `
      <div class="icon">${outfit.icon}</div>
      <div>${outfit.name}</div>
    `;
    item.onclick = () => changeOutfit('outfit', outfitId);
    outfitGrid.appendChild(item);
  });

  // Hair
  const hairGrid = document.getElementById('hairGrid');
  Object.keys(WARDROBE.hair).forEach(hairId => {
    const hair = WARDROBE.hair[hairId];
    const item = document.createElement('div');
    item.className = 'outfit-item';
    item.dataset.hairId = hairId;
    item.innerHTML = `
      <div class="icon">${hair.icon}</div>
      <div>${hair.name}</div>
    `;
    item.onclick = () => changeOutfit('hair', hairId);
    hairGrid.appendChild(item);
  });

  // Accessories
  const accessoryGrid = document.getElementById('accessoryGrid');
  Object.keys(WARDROBE.accessories).forEach(accId => {
    const acc = WARDROBE.accessories[accId];
    const item = document.createElement('div');
    item.className = 'outfit-item';
    item.dataset.accessoryId = accId;
    item.innerHTML = `
      <div class="icon">${acc.icon}</div>
      <div>${acc.name}</div>
    `;
    item.onclick = () => changeOutfit('accessory', accId);
    accessoryGrid.appendChild(item);
  });

  // Colors
  const colorGrid = document.getElementById('colorGrid');
  Object.keys(WARDROBE.colors).forEach(colorId => {
    const color = WARDROBE.colors[colorId];
    const item = document.createElement('div');
    item.className = 'outfit-item';
    item.dataset.colorId = colorId;
    item.innerHTML = `
      <div style="width: 30px; height: 30px; background: ${color.hex}; border-radius: 50%; margin: 0 auto;"></div>
      <div>${color.name}</div>
    `;
    item.onclick = () => changeOutfit('color', colorId);
    colorGrid.appendChild(item);
  });
}

function selectCharacter(charId) {
  if (currentCharacter === charId) return;
  
  // Update UI
  document.querySelectorAll('.character-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`[data-character-id="${charId}"]`).classList.add('selected');
  
  document.getElementById('currentCharacter').textContent = CHARACTERS[charId].name;
  
  loadCharacter(charId);
}

async function loadCharacter(charId) {
  try {
    updateStatus(`Loading ${CHARACTERS[charId].name}...`, 'loading');
    
    // Remove current model
    if (currentModel) {
      scene.remove(currentModel);
      currentModel = null;
    }
    
    // Check if model is already loaded
    if (characterModels[charId]) {
      currentModel = characterModels[charId].clone();
      scene.add(currentModel);
      currentCharacter = charId;
      applyOutfit();
      updateStatus(`${CHARACTERS[charId].name} loaded`, 'success');
      return;
    }
    
    // Load new model
    const loader = new THREE.GLTFLoader();
    const char = CHARACTERS[charId];
    
    // Try to load character model, fallback to default
    const modelPath = char.modelPath;
    
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.position.y = 0;
        model.castShadow = true;
        model.receiveShadow = true;
        
        // Store original model
        characterModels[charId] = model;
        
        // Create instance for current use
        currentModel = model.clone();
        scene.add(currentModel);
        
        // Setup animations
        mixer = new THREE.AnimationMixer(currentModel);
        gltf.animations.forEach((clip) => {
          actions[clip.name] = mixer.clipAction(clip);
        });
        
        // Find jaw bone
        currentModel.traverse((obj) => {
          if (obj.isBone && (obj.name.toLowerCase().includes("jaw") || obj.name.toLowerCase().includes("mouth"))) {
            jawBone = obj;
          }
        });
        
        currentCharacter = charId;
        applyOutfit();
        playAnimation('Idle');
        
        updateStatus(`${char.name} loaded successfully`, 'success');
      },
      (progress) => {
        const percent = (progress.loaded / progress.total) * 100;
        updateStatus(`Loading: ${Math.round(percent)}%`, 'loading');
      },
      (error) => {
        console.error('Error loading character model:', error);
        // Create fallback character
        createFallbackCharacter(charId);
      }
    );
    
  } catch (error) {
    console.error('Error in loadCharacter:', error);
    createFallbackCharacter(charId);
  }
}

function createFallbackCharacter(charId) {
  // Create a simple placeholder character
  const geometry = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xffdbac,
    roughness: 0.7,
    metalness: 0.1
  });
  
  const character = new THREE.Mesh(geometry, material);
  character.position.y = 1.2;
  character.castShadow = true;
  character.receiveShadow = true;
  
  // Add head
  const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
  const head = new THREE.Mesh(headGeometry, material);
  head.position.y = 1.8;
  character.add(head);
  
  currentModel = character;
  characterModels[charId] = character;
  scene.add(currentModel);
  currentCharacter = charId;
  
  applyOutfit();
  playAnimation('Idle');
  updateStatus(`${CHARACTERS[charId].name} (fallback) loaded`, 'success');
}

// =========================
// WARDROBE SYSTEM
// =========================

function changeOutfit(type, value) {
  currentOutfit[type] = value;
  
  // Update UI
  document.querySelectorAll(`.outfit-item[data-${type}-id]`).forEach(item => {
    item.classList.remove('selected');
  });
  document.querySelector(`.outfit-item[data-${type}-id="${value}"]`).classList.add('selected');
  
  applyOutfit();
  updateStatus(`Outfit changed: ${type} = ${value}`, 'success');
}

function applyOutfit() {
  if (!currentModel) return;
  
  // This is where you would apply different materials/accessories to the model
  // For now, we'll just change the base color
  if (currentOutfit.color) {
    currentModel.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes('body') || child.name.toLowerCase().includes('skin')) {
        child.material = child.material.clone();
        child.material.color = new THREE.Color(currentOutfit.color);
      }
    });
  }
  
  // In a real implementation, you would:
  // 1. Load different outfit models
  // 2. Swap materials/textures
  // 3. Add/remove accessory meshes
  // 4. Change hair geometry
}

function randomizeOutfit() {
  const outfitKeys = Object.keys(WARDROBE.outfits);
  const hairKeys = Object.keys(WARDROBE.hair);
  const accessoryKeys = Object.keys(WARDROBE.accessories);
  const colorKeys = Object.keys(WARDROBE.colors);
  
  changeOutfit('outfit', outfitKeys[Math.floor(Math.random() * outfitKeys.length)]);
  changeOutfit('hair', hairKeys[Math.floor(Math.random() * hairKeys.length)]);
  changeOutfit('accessory', accessoryKeys[Math.floor(Math.random() * accessoryKeys.length)]);
  changeOutfit('color', colorKeys[Math.floor(Math.random() * colorKeys.length)]);
}

// =========================
// ANIMATION SYSTEM
// =========================

function playAnimation(name) {
  if (!actions[name]) {
    console.warn(`Animation "${name}" not found`);
    return;
  }

  // STOP ALL OTHER ANIMATIONS
  for (let key in actions) {
    actions[key].stop();
  }

  // PLAY REQUESTED ANIMATION
  actions[name].reset().fadeIn(0.3).play();
  
  // UPDATE UI
  document.querySelectorAll('.control-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target?.classList.add('active');
  
  updateStatus(`Playing: ${name}`, 'success');
}

// =========================
// CAMERA CONTROL
// =========================

function toggleCamera() {
  currentCameraIndex = (currentCameraIndex + 1) % cameraKeys.length;
  const newMode = cameraKeys[currentCameraIndex];
  const newPos = cameraPositions[newMode];
  
  // Smooth camera transition
  const startPos = camera.position.clone();
  const startLook = camera.getWorldDirection(new THREE.Vector3()).add(camera.position);
  
  let progress = 0;
  const duration = 1000; // 1 second
  const startTime = Date.now();
  
  function animateCamera() {
    const elapsed = Date.now() - startTime;
    progress = Math.min(elapsed / duration, 1);
    
    // Ease in-out
    const easeProgress = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress;
    
    camera.position.lerpVectors(startPos, newPos.pos, easeProgress);
    
    const currentLook = new THREE.Vector3().lerpVectors(startLook, newPos.look, easeProgress);
    camera.lookAt(currentLook);
    
    if (progress < 1) {
      requestAnimationFrame(animateCamera);
    }
  }
  
  animateCamera();
  updateStatus(`Camera: ${newMode}`, 'success');
}

// =========================
// TTS AND AI (Same as before)
// =========================

async function playTTS(url) {
  if (!audioContext) audioContext = new AudioContext();

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    source.start();
    updateStatus('Playing TTS audio', 'success');
  } catch (error) {
    console.error('Error playing TTS:', error);
    updateStatus('Error playing TTS', 'error');
  }
}

async function handleChat(text) {
  const lower = text.toLowerCase();
  updateStatus('Processing command...', 'loading');

  // CHARACTER SWITCH COMMANDS
  if (lower.includes("linh")) return selectCharacter('female1');
  if (lower.includes("mai")) return selectCharacter('female2');
  if (lower.includes("an")) return selectCharacter('female3');
  if (lower.includes("huong")) return selectCharacter('female4');
  if (lower.includes("giang")) return selectCharacter('female5');
  if (lower.includes("trang")) return selectCharacter('female6');

  // DIRECT COMMANDS
  if (lower.includes("idle") || lower.includes("đứng")) {
    return playAnimation('Idle');
  }
  if (lower.includes("nói") || lower.includes("talk")) {
    playAnimation('Talk');
    return;
  }
  if (lower.includes("giới thiệu") || lower.includes("present")) {
    return playAnimation('Present');
  }
  if (lower.includes("tay") || lower.includes("gesture")) {
    return playAnimation('Gesture');
  }
  if (lower.includes("đi") || lower.includes("walk")) {
    return playAnimation('Walk');
  }
  if (lower.includes("nhảy") || lower.includes("dance")) {
    return playAnimation('Dance');
  }
  if (lower.includes("camera") || lower.includes("máy quay")) {
    return toggleCamera();
  }
  if (lower.includes("quần áo") || lower.includes("outfit")) {
    return randomizeOutfit();
  }

  // IF NOT COMMAND → SEND TO AI
  try {
    const aiReply = await askAI(text);
    
    // PLAY TALK ANIMATION
    playAnimation('Talk');
    
    // PLAY TTS
    if (aiReply.ttsUrl) {
      await playTTS(aiReply.ttsUrl);
    }
    
    updateStatus('AI response processed', 'success');
  } catch (error) {
    console.error('Error processing AI request:', error);
    updateStatus('Error processing AI request', 'error');
  }
}

async function askAI(userText) {
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        text: userText,
        character: currentCharacter,
        personality: CHARACTERS[currentCharacter]?.personality
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error calling AI API:', error);
    return {
      reply: "Xin lỗi, tôi không thể kết nối với AI ngay bây giờ.",
      ttsUrl: null
    };
  }
}

// =========================
// RENDER LOOP
// =========================

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);

  // LIP SYNC
  if (jawBone && analyser && dataArray) {
    analyser.getByteFrequencyData(dataArray);
    let volume = dataArray[10] / 255;
    jawBone.rotation.x = volume * 0.4;
  }

  // Gentle floating animation for character
  if (currentModel) {
    currentModel.position.y = Math.sin(Date.now() * 0.001) * 0.02;
  }

  renderer.render(scene, camera);
}

// =========================
// UTILITY FUNCTIONS
// =========================

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateStatus(message, type = 'info') {
  const statusEl = document.getElementById('status');
  const statusText = document.getElementById('statusText');
  
  statusText.textContent = message;
  statusEl.className = type;
  statusEl.classList.add('show');
  
  setTimeout(() => {
    statusEl.classList.remove('show');
  }, 3000);
}

// =========================
// GLOBAL FUNCTIONS FOR HTML
// =========================
window.playAnimation = playAnimation;
window.toggleCamera = toggleCamera;
window.randomizeOutfit = randomizeOutfit;
window.selectCharacter = selectCharacter;
window.changeOutfit = changeOutfit;
