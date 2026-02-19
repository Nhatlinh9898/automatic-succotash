let scene, camera, renderer, mixer, clock = new THREE.Clock();
let jawBone = null;
let actions = {};
let audioContext, analyser, dataArray;
let currentCameraMode = 'default';
let cameraPositions = {
  default: { pos: new THREE.Vector3(0, 1.6, 3), look: new THREE.Vector3(0, 1.6, 0) },
  closeup: { pos: new THREE.Vector3(0, 1.6, 1.5), look: new THREE.Vector3(0, 1.6, 0) },
  wide: { pos: new THREE.Vector3(0, 3, 5), look: new THREE.Vector3(0, 1, 0) },
  side: { pos: new THREE.Vector3(2, 1.6, 2), look: new THREE.Vector3(0, 1.6, 0) },
  cinematic: { pos: new THREE.Vector3(-2, 2.5, 3), look: new THREE.Vector3(0, 1.6, 0) },
  overhead: { pos: new THREE.Vector3(0, 4, 2), look: new THREE.Vector3(0, 0, 0) }
};
let currentCameraIndex = 0;
let cameraKeys = Object.keys(cameraPositions);
let productModel = null;
let isProductVisible = false;
let mcModel = null;
let handBones = { left: null, right: null };
let isHoldingProduct = false;
let studioLights = {};
let lightAnimationTime = 0;

// =========================
// ENHANCED STUDIO LIGHTING SYSTEM
// =========================
function setupStudioLighting() {
  // Main key light (warm)
  studioLights.keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  studioLights.keyLight.position.set(5, 8, 5);
  studioLights.keyLight.castShadow = true;
  studioLights.keyLight.shadow.camera.near = 0.1;
  studioLights.keyLight.shadow.camera.far = 30;
  studioLights.keyLight.shadow.camera.left = -10;
  studioLights.keyLight.shadow.camera.right = 10;
  studioLights.keyLight.shadow.camera.top = 10;
  studioLights.keyLight.shadow.camera.bottom = -10;
  studioLights.keyLight.shadow.mapSize.width = 2048;
  studioLights.keyLight.shadow.mapSize.height = 2048;
  scene.add(studioLights.keyLight);

  // Fill light (cool blue)
  studioLights.fillLight = new THREE.DirectionalLight(0x88ccff, 0.6);
  studioLights.fillLight.position.set(-5, 4, -3);
  scene.add(studioLights.fillLight);

  // Rim light (warm orange)
  studioLights.rimLight = new THREE.DirectionalLight(0xffaa44, 0.8);
  studioLights.rimLight.position.set(-8, 6, 8);
  scene.add(studioLights.rimLight);

  // Top light (soft white)
  studioLights.topLight = new THREE.PointLight(0xffffff, 0.8, 20);
  studioLights.topLight.position.set(0, 10, 0);
  studioLights.topLight.castShadow = true;
  scene.add(studioLights.topLight);

  // Background spotlights
  studioLights.spot1 = new THREE.SpotLight(0xff6b6b, 1.5, 30, Math.PI / 6, 0.5, 2);
  studioLights.spot1.position.set(8, 12, 8);
  studioLights.spot1.target.position.set(0, 0, 0);
  scene.add(studioLights.spot1);
  scene.add(studioLights.spot1.target);

  studioLights.spot2 = new THREE.SpotLight(0x4ecdc4, 1.5, 30, Math.PI / 6, 0.5, 2);
  studioLights.spot2.position.set(-8, 12, 8);
  studioLights.spot2.target.position.set(0, 0, 0);
  scene.add(studioLights.spot2);
  scene.add(studioLights.spot2.target);

  // Ambient light
  studioLights.ambient = new THREE.AmbientLight(0x404040, 0.3);
  scene.add(studioLights.ambient);

  // Hemisphere light for sky simulation
  studioLights.hemisphere = new THREE.HemisphereLight(0x87ceeb, 0x2c3e50, 0.4);
  scene.add(studioLights.hemisphere);

  console.log('Enhanced studio lighting system initialized');
}

// =========================
// ANIMATE STUDIO LIGHTS
// =========================
function animateStudioLights() {
  lightAnimationTime += 0.01;

  // Subtle key light movement
  studioLights.keyLight.position.x = 5 + Math.sin(lightAnimationTime * 0.5) * 2;
  studioLights.keyLight.position.z = 5 + Math.cos(lightAnimationTime * 0.5) * 2;

  // Animated spotlight colors
  const spot1Intensity = 1.5 + Math.sin(lightAnimationTime * 0.8) * 0.3;
  const spot2Intensity = 1.5 + Math.cos(lightAnimationTime * 0.8) * 0.3;
  
  studioLights.spot1.intensity = spot1Intensity;
  studioLights.spot2.intensity = spot2Intensity;

  // Rotating spotlights
  const spotAngle = lightAnimationTime * 0.3;
  studioLights.spot1.position.x = 8 + Math.cos(spotAngle) * 4;
  studioLights.spot1.position.z = 8 + Math.sin(spotAngle) * 4;
  
  studioLights.spot2.position.x = -8 + Math.cos(-spotAngle) * 4;
  studioLights.spot2.position.z = 8 + Math.sin(-spotAngle) * 4;

  // Dynamic rim light
  studioLights.rimLight.intensity = 0.8 + Math.sin(lightAnimationTime * 0.6) * 0.2;
}

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

  // ENHANCED STUDIO LIGHTING SYSTEM
  setupStudioLighting();

  // GROUND
  const groundGeometry = new THREE.PlaneGeometry(20, 20);
  const groundMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x1a1a1a,
    roughness: 0.9,
    metalness: 0.1
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // LOAD MC MODEL
  const loader = new THREE.GLTFLoader();
  loader.load(
    "mc_host.glb", 
    (gltf) => {
      mcModel = model;
      model.position.y = 0;
      model.castShadow = true;
      model.receiveShadow = true;
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);

      // SAVE ANIMATIONS
      gltf.animations.forEach((clip) => {
        actions[clip.name] = mixer.clipAction(clip);
        console.log(`Animation loaded: ${clip.name}`);
      });

      // FIND JAW BONE AND HAND BONES
      model.traverse((obj) => {
        if (obj.isBone && (obj.name.toLowerCase().includes("jaw") || obj.name.toLowerCase().includes("mouth"))) {
          jawBone = obj;
          console.log(`Jaw bone found: ${obj.name}`);
        }
        
        // Find hand bones for product holding
        if (obj.isBone) {
          const nameLower = obj.name.toLowerCase();
          if (nameLower.includes("hand") || nameLower.includes("wrist")) {
            if (nameLower.includes("left") || obj.name.includes("L_")) {
              handBones.left = obj;
              console.log(`Left hand bone found: ${obj.name}`);
            } else if (nameLower.includes("right") || obj.name.includes("R_")) {
              handBones.right = obj;
              console.log(`Right hand bone found: ${obj.name}`);
            }
          }
        }
      });

      // DEFAULT ANIMATION
      playAnimation('Idle');
      updateStatus('Model loaded successfully', 'success');
    },
    (progress) => {
      const percent = (progress.loaded / progress.total) * 100;
      updateStatus(`Loading model: ${Math.round(percent)}%`, 'loading');
    },
    (error) => {
      console.error('Error loading model:', error);
      updateStatus('Error loading model', 'error');
    }
  );

  window.addEventListener("resize", onWindowResize);

  // CHAT INPUT
  document.getElementById("chatInput").addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const text = e.target.value;
      e.target.value = "";
      await handleChat(text);
    }
  });

  updateStatus('System ready', 'success');
}

// =========================
// PLAY ANIMATION
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
// LIP SYNC TTS
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

// =========================
// HANDLE CHAT COMMANDS
// =========================
async function handleChat(text) {
  const lower = text.toLowerCase();
  updateStatus('Processing command...', 'loading');

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
  if (lower.includes("sản phẩm") || lower.includes("product")) {
    return showProduct();
  }
  if (lower.includes("cầm") || lower.includes("hold") || lower.includes("giữ")) {
    return toggleProductHolding();
  }
  if (lower.includes("camera") || lower.includes("máy quay")) {
    return toggleCamera();
  }
  if (lower.includes("cinematic") || lower.includes("điện ảnh")) {
    // Jump to cinematic camera mode
    currentCameraIndex = cameraKeys.indexOf('cinematic');
    return toggleCamera();
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

// =========================
// AI CONTROL (Gemini / GPT)
// =========================
async function askAI(userText) {
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userText })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error calling AI API:', error);
    // Fallback response
    return {
      reply: "Xin lỗi, tôi không thể kết nối với AI ngay bây giờ.",
      ttsUrl: null
    };
  }
}

// =========================
// ENHANCED CAMERA SYSTEM
// =========================
function toggleCamera() {
  currentCameraIndex = (currentCameraIndex + 1) % cameraKeys.length;
  const newMode = cameraKeys[currentCameraIndex];
  const newPos = cameraPositions[newMode];
  
  // Enhanced camera transition with easing
  const startPos = camera.position.clone();
  const startLook = camera.getWorldDirection(new THREE.Vector3()).add(camera.position);
  
  let progress = 0;
  const duration = 1500; // 1.5 seconds for cinematic feel
  const startTime = Date.now();
  
  function animateCamera() {
    const elapsed = Date.now() - startTime;
    progress = Math.min(elapsed / duration, 1);
    
    // Cinematic easing (ease-in-out cubic)
    const easeProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    camera.position.lerpVectors(startPos, newPos.pos, easeProgress);
    
    const currentLook = new THREE.Vector3().lerpVectors(startLook, newPos.look, easeProgress);
    camera.lookAt(currentLook);
    
    // Add subtle camera shake for dramatic effect
    if (newMode === 'cinematic' && progress < 0.3) {
      const shakeIntensity = (0.3 - progress) * 0.02;
      camera.position.x += (Math.random() - 0.5) * shakeIntensity;
      camera.position.y += (Math.random() - 0.5) * shakeIntensity;
    }
    
    if (progress < 1) {
      requestAnimationFrame(animateCamera);
    } else {
      currentCameraMode = newMode;
      updateStatus(`Camera: ${newMode}`, 'success');
    }
  }
  
  animateCamera();
}

// =========================
// PRODUCT HOLDING SYSTEM
// =========================
function toggleProductHolding() {
  if (!productModel) {
    updateStatus('No product loaded', 'error');
    return;
  }
  
  isHoldingProduct = !isHoldingProduct;
  
  if (isHoldingProduct) {
    attachProductToHand();
    updateStatus('MC holding product', 'success');
  } else {
    detachProductFromHand();
    updateStatus('Product released', 'success');
  }
}

function attachProductToHand() {
  if (!handBones.right && !handBones.left) {
    console.warn('No hand bones found for product holding');
    // Fallback: position product in front of MC
    productModel.position.set(0.5, 1.2, 0.3);
    return;
  }
  
  // Use right hand by default, fallback to left
  const targetHand = handBones.right || handBones.left;
  
  // Create a group to hold the product relative to hand
  const productGroup = new THREE.Group();
  productGroup.add(productModel);
  
  // Position product relative to hand
  productModel.position.set(0, 0.1, 0);
  productModel.scale.set(0.3, 0.3, 0.3);
  productModel.rotation.set(0, 0, 0);
  
  // Attach to hand bone
  targetHand.add(productGroup);
  
  // Store reference for detachment
  productModel.userData.parentGroup = productGroup;
  productModel.userData.parentHand = targetHand;
}

function detachProductFromHand() {
  if (productModel.userData.parentGroup && productModel.userData.parentHand) {
    // Get world position before detaching
    const worldPosition = new THREE.Vector3();
    const worldQuaternion = new THREE.Quaternion();
    productModel.userData.parentGroup.getWorldPosition(worldPosition);
    productModel.userData.parentGroup.getWorldQuaternion(worldQuaternion);
    
    // Remove from hand
    productModel.userData.parentHand.remove(productModel.userData.parentGroup);
    
    // Add back to scene with world transform
    scene.add(productModel);
    productModel.position.copy(worldPosition);
    productModel.quaternion.copy(worldQuaternion);
    productModel.scale.set(0.5, 0.5, 0.5);
    
    // Clear references
    productModel.userData.parentGroup = null;
    productModel.userData.parentHand = null;
  } else {
    // Fallback: reset to default position
    productModel.position.set(1, 1, 0);
    productModel.scale.set(0.5, 0.5, 0.5);
  }
}

// =========================
// ENHANCED PRODUCT DISPLAY
// =========================
function showProduct() {
  if (!productModel) {
    // Load product model (placeholder - you can replace with actual product model)
    const loader = new THREE.GLTFLoader();
    loader.load(
      "product.glb", // Replace with actual product model
      (gltf) => {
        productModel = gltf.scene;
        productModel.position.set(1, 1, 0);
        productModel.scale.set(0.5, 0.5, 0.5);
        productModel.castShadow = true;
        productModel.receiveShadow = true;
        scene.add(productModel);
        isProductVisible = true;
        updateStatus('Product loaded and displayed', 'success');
      },
      undefined,
      (error) => {
        console.error('Error loading product model:', error);
        // Create a placeholder product
        createPlaceholderProduct();
      }
    );
  } else {
    isProductVisible = !isProductVisible;
    productModel.visible = isProductVisible;
    updateStatus(isProductVisible ? 'Product shown' : 'Product hidden', 'success');
  }
}

function createPlaceholderProduct() {
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x3b82f6,
    metalness: 0.8,
    roughness: 0.2
  });
  productModel = new THREE.Mesh(geometry, material);
  productModel.position.set(1, 1, 0);
  productModel.castShadow = true;
  productModel.receiveShadow = true;
  scene.add(productModel);
  isProductVisible = true;
  updateStatus('Product displayed (placeholder)', 'success');
}

// =========================
// ENHANCED RENDER LOOP
// =========================
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);

  // ANIMATE STUDIO LIGHTS
  animateStudioLights();

  // LIP SYNC
  if (jawBone && analyser && dataArray) {
    analyser.getByteFrequencyData(dataArray);
    let volume = dataArray[10] / 255;
    jawBone.rotation.x = volume * 0.4;
  }

  // Rotate product if visible and not held
  if (productModel && isProductVisible && !isHoldingProduct) {
    productModel.rotation.y += 0.01;
    
    // Add floating animation
    productModel.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;
  }

  // Update product position if held by hand
  if (isHoldingProduct && productModel && productModel.userData.parentHand) {
    // Product follows hand automatically through bone hierarchy
  }

  renderer.render(scene, camera);
}

// =========================
// RESIZE
// =========================
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// =========================
// STATUS UPDATE
// =========================
function updateStatus(message, type = 'info') {
  const statusText = document.getElementById('statusText');
  statusText.textContent = message;
  statusText.className = type;
}

// =========================
// GLOBAL FUNCTIONS FOR HTML BUTTONS
// =========================
window.playAnimation = playAnimation;
window.toggleCamera = toggleCamera;
window.showProduct = showProduct;
window.toggleProductHolding = toggleProductHolding;
