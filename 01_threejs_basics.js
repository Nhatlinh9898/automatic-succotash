// Three.js Basic 3D Model Tutorial
// Import Three.js
import * as THREE from 'three';

// Create 3D scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create basic 3D model (cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation function
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Advanced features below...

// Load complex 3D model
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('path/to/your/model.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    
    // Adjust size and position
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(0, 0, 0);

    // Add animation to model
    function animateModel() {
        requestAnimationFrame(animateModel);
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animateModel();
}, undefined, function (error) {
    console.error('Error loading the model:', error);
});

// Add lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// PBR material
const pbrMaterial = new THREE.MeshStandardMaterial({
    color: 0x5555ff,
    roughness: 0.5,
    metalness: 0.8
});

// User interaction controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animation system with skeleton
loader.load('path/to/your/model.glb', function (gltf) {
    const model = gltf.scene;
    const mixer = new THREE.AnimationMixer(model);

    // Get animation clips from model
    const clips = gltf.animations;
    const action = mixer.clipAction(clips[0]);
    action.play();

    scene.add(model);

    // Update animation over time
    const clock = new THREE.Clock();
    function animateModel() {
        requestAnimationFrame(animateModel);
        const delta = clock.getDelta();
        mixer.update(delta);
        renderer.render(scene, camera);
    }
    animateModel();
}, undefined, function (error) {
    console.error('Error loading the model:', error);
});

// Custom animation with KeyframeTrack
import { AnimationClip, KeyframeTrack } from 'three';

const rotationTrack = new KeyframeTrack('.rotation[y]', [0, 1, 2], [0, Math.PI / 2, Math.PI]);
const clip = new AnimationClip('RotateY', 2, [rotationTrack]);

// Apply animation clip
const mixer = new THREE.AnimationMixer(cube);
const action = mixer.clipAction(clip);
action.play();

// Update animation
const clock = new THREE.Clock();
function animateCustom() {
    requestAnimationFrame(animateCustom);
    const delta = clock.getDelta();
    mixer.update(delta);
    renderer.render(scene, camera);
}
animateCustom();

// Add environment (sky)
const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, side: THREE.BackSide });
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

// Add dynamic lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// User interaction
window.addEventListener('click', () => {
    cube.rotation.x += 0.5;
});

// Post-processing effects
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new BloomPass(1.5));

function renderWithEffects() {
    requestAnimationFrame(renderWithEffects);
    composer.render();
}
renderWithEffects();

// Realistic materials with textures
import { TextureLoader } from 'three';

const textureLoader = new TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');

const texturedMaterial = new THREE.MeshStandardMaterial({
    map: texture, 
    roughness: 0.5, 
    metalness: 0.8
});
const texturedModel = new THREE.Mesh(geometry, texturedMaterial);
scene.add(texturedModel);

// Real-time keyboard controls
window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            texturedModel.position.y += 0.1;
            break;
        case 'ArrowDown':
            texturedModel.position.y -= 0.1;
            break;
        case 'ArrowLeft':
            texturedModel.position.x -= 0.1;
            break;
        case 'ArrowRight':
            texturedModel.position.x += 0.1;
            break;
    }
});

// Animation loop with complex movement
import { VectorKeyframeTrack, AnimationClip } from 'three';

const positionTrack = new VectorKeyframeTrack('.position', [0, 1, 2], [
    0, 0, 0,
    2, 1, 0,
    0, 0, 0
]);
const bounceClip = new AnimationClip('Bounce', 2, [positionTrack]);
const bounceMixer = new THREE.AnimationMixer(texturedModel);
const bounceAction = bounceMixer.clipAction(bounceClip);
bounceAction.play();

// Physics integration with Cannon.js
import * as CANNON from 'cannon-es';

const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

const sphereShape = new CANNON.Sphere(1);
const sphereBody = new CANNON.Body({ mass: 5 });
sphereBody.addShape(sphereShape);
sphereBody.position.set(0, 10, 0);
world.addBody(sphereBody);

function simulatePhysics() {
    world.step(1 / 60);
    sphere.position.copy(sphereBody.position);
}

// Dynamic lighting effects
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
scene.add(pointLight);

function animateLight() {
    pointLight.position.set(Math.sin(Date.now() * 0.001) * 10, 10, Math.cos(Date.now() * 0.001) * 10);
}

// Audio integration
const listener = new THREE.AudioListener();
camera.add(listener);

const audioLoader = new THREE.AudioLoader();
const sound = new THREE.Audio(listener);

audioLoader.load('path/to/sound.mp3', (buffer) => {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
});

// Particle effects
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = Math.random() * 10 - 5;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Custom shader effects
const vertexShader = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    void main() {
        gl_FragColor = vec4(0.5, 0.0, 0.5, 1.0);
    }
`;

const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), shaderMaterial);
scene.add(plane);

// User interface with dat.GUI
import GUI from 'dat.gui';

const gui = new GUI();
const cubeSettings = {
    rotationSpeed: 0.01,
    color: 0xff0000
};

gui.add(cubeSettings, 'rotationSpeed', 0, 0.1);
gui.addColor(cubeSettings, 'color').onChange((value) => {
    cube.material.color.set(value);
});

// Device orientation controls
window.addEventListener('deviceorientation', (event) => {
    const { alpha, beta, gamma } = event;
    texturedModel.rotation.x = beta * Math.PI / 180;
    texturedModel.rotation.y = gamma * Math.PI / 180;
});

// Pose detection with TensorFlow.js
import * as posenet from '@tensorflow-models/posenet';

const net = await posenet.load();
const video = document.getElementById('video');

async function detectPose() {
    const pose = await net.estimateSinglePose(video, {
        flipHorizontal: true,
    });

    if (pose.keypoints[9].position.x > 300) {
        texturedModel.position.x += 0.1;
    }
}
setInterval(detectPose, 100);

// Water/smoke effects with shaders
const waterShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
    },
    vertexShader: `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float time;
        void main() {
            gl_FragColor = vec4(sin(time) * 0.5 + 0.5, 0.5, 1.0, 1.0);
        }
    `,
});
const waterMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), waterShaderMaterial);
scene.add(waterMesh);

// Character animation
loader.load('path/to/character.glb', function (gltf) {
    const mixer = new THREE.AnimationMixer(gltf.scene);

    const walkAction = mixer.clipAction(gltf.animations.find((clip) => clip.name === 'Walking'));
    walkAction.play();

    scene.add(gltf.scene);

    function animateCharacter(delta) {
        mixer.update(delta);
        renderer.render(scene, camera);
    }

    clock = new THREE.Clock();
    requestAnimationFrame(() => animateCharacter(clock.getDelta()));
});

// Touch/gesture controls
window.addEventListener('touchstart', (event) => {
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    texturedModel.position.set(touchX / window.innerWidth, touchY / window.innerHeight, 0);
});

// Voice control
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.start();

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;
    if (command.toLowerCase().includes('rotate')) {
        texturedModel.rotation.y += Math.PI / 4;
    }
};

// Expression changes
function changeExpression(texturePath) {
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, (texture) => {
        texturedModel.material.map = texture;
        texturedModel.material.needsUpdate = true;
    });
}

// Animated environment
function animateSkybox() {
    const time = Date.now() * 0.0001;
    skyMaterial.map.offset.set(time % 1, time % 1);
}

// AI emotion prediction
async function predictEmotion(image) {
    const model = await tf.loadLayersModel('path/to/emotion_model.json');
    const prediction = model.predict(image);
    if (prediction === 'happy') changeExpression('path/to/happy_face.jpg');
}

// Multiplayer support
const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    texturedModel.position.set(data.x, data.y, data.z);
};

setInterval(() => {
    socket.send(JSON.stringify({
        x: texturedModel.position.x,
        y: texturedModel.position.y,
        z: texturedModel.position.z,
    }));
}, 100);

// AI-powered motion generation
async function generateMotion() {
    const model = await tf.loadLayersModel('path/to/motion_model.json');
    const inputMotion = tf.tensor([/* input parameters */]);
    const predictedMotion = model.predict(inputMotion);

    texturedModel.position.y = predictedMotion.arraySync()[0];
    texturedModel.rotation.x = predictedMotion.arraySync()[1];
}

// Natural simulation (grass in wind)
const grassMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0 },
        windStrength: { value: 1 },
    },
    vertexShader: `
        uniform float time;
        uniform float windStrength;
        void main() {
            vec3 newPosition = position;
            newPosition.x += sin(time * windStrength) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
    `,
    fragmentShader: `
        void main() {
            gl_FragColor = vec4(0.0, 0.8, 0.0, 1.0);
        }
    `,
});

// Water ripple effects
function simulateRipple(position) {
    const rippleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            rippleCenter: { value: position },
            rippleTime: { value: 0 },
        },
        vertexShader: `
            uniform vec3 rippleCenter;
            uniform float rippleTime;
            void main() {
                float distance = length(position - rippleCenter);
                vec3 newPosition = position;
                newPosition.z += sin(distance * 10.0 - rippleTime) * 0.1;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
        `,
        fragmentShader: `
            void main() {
                gl_FragColor = vec4(0.2, 0.5, 1.0, 1.0);
            }
        `,
    });
}

// VR support
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton(renderer));

function renderVRScene() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}
renderVRScene();

// Real-time analytics
const interactionData = [];
window.addEventListener('click', (event) => {
    interactionData.push({
        timestamp: Date.now(),
        position: { x: event.clientX, y: event.clientY },
    });
    console.log(interactionData);
});

// Rain effect
const rainParticles = new THREE.BufferGeometry();
const rainCount = 1000;
const rainPositions = new Float32Array(rainCount * 3);

for (let i = 0; i < rainCount * 3; i += 3) {
    rainPositions[i] = Math.random() * 100 - 50;
    rainPositions[i + 1] = Math.random() * 100;
    rainPositions[i + 2] = Math.random() * 100 - 50;
}

rainParticles.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));

const rainMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.1 });
const rain = new THREE.Points(rainParticles, rainMaterial);
scene.add(rain);

function animateRain() {
    const positions = rainParticles.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.5;
        if (positions[i] < 0) {
            positions[i] = Math.random() * 100;
        }
    }
    rainParticles.attributes.position.needsUpdate = true;
}

// Rain sound
const rainAudio = new Audio('path/to/rain.mp3');
rainAudio.loop = true;
rainAudio.volume = 0.5;
rainAudio.play();

// Skybox for realistic environment
const skyboxLoader = new THREE.CubeTextureLoader();
const skyboxTexture = skyboxLoader.load([
    'path/to/posx.jpg', 'path/to/negx.jpg',
    'path/to/posy.jpg', 'path/to/negy.jpg',
    'path/to/posz.jpg', 'path/to/negz.jpg'
]);
scene.background = skyboxTexture;

console.log('Three.js 3D Model Tutorial Loaded Successfully!');
