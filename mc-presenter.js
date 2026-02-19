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
let productModel = null;
let isProductVisible = false;

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

  // LIGHTING
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

  // LOAD MC MODEL
  const loader = new THREE.GLTFLoader();
  loader.load(
    "mc_host.glb", 
    (gltf) => {
      const model = gltf.scene;
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

      // FIND JAW BONE
      model.traverse((obj) => {
        if (obj.isBone && (obj.name.toLowerCase().includes("jaw") || obj.name.toLowerCase().includes("mouth"))) {
          jawBone = obj;
          console.log(`Jaw bone found: ${obj.name}`);
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
  if (lower.includes("camera") || lower.includes("máy quay")) {
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
// PRODUCT DISPLAY
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
        updateStatus('Product displayed', 'success');
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

  // Rotate product if visible
  if (productModel && isProductVisible) {
    productModel.rotation.y += 0.01;
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
