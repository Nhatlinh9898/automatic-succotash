import * as THREE from 'three';

export const createBasicScene = (mountRef) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  return { scene, camera, renderer };
};

export const addBasicLighting = (scene) => {
  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1.0);
  hemi.position.set(0, 10, 0);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 1);
  dir.position.set(3, 5, 2);
  dir.castShadow = true;
  dir.shadow.camera.near = 0.1;
  dir.shadow.camera.far = 20;
  dir.shadow.camera.left = -10;
  dir.shadow.camera.right = 10;
  dir.shadow.camera.top = 10;
  dir.shadow.camera.bottom = -10;
  scene.add(dir);

  const fill = new THREE.DirectionalLight(0x88ccff, 0.3);
  fill.position.set(-3, 2, -2);
  scene.add(fill);
};

export const addRealisticShadows = (renderer, scene) => {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
};

export const setupOrbitControls = async (camera, renderer) => {
  // Import dynamically to avoid SSR issues
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls');
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 50;
  controls.maxPolarAngle = Math.PI / 2;
  return controls;
};

export const createSky = (scene) => {
  const skyGeometry = new THREE.SphereGeometry(100, 32, 32);
  const skyMaterial = new THREE.MeshBasicMaterial({
    color: 0x87ceeb,
    side: THREE.BackSide,
    fog: false
  });
  const sky = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(sky);
};

export const createGround = (scene) => {
  const groundGeometry = new THREE.PlaneGeometry(100, 100);
  const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x3a5f3a });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
};

export const createRainEffect = (scene) => {
  const rainGeometry = new THREE.BufferGeometry();
  const rainCount = 1000;
  const positions = new Float32Array(rainCount * 3);
  
  for (let i = 0; i < rainCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = Math.random() * 50;
    positions[i + 2] = (Math.random() - 0.5) * 100;
  }
  
  rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const rainMaterial = new THREE.PointsMaterial({
    color: 0x87ceeb,
    size: 0.1,
    transparent: true,
    opacity: 0.6
  });
  
  const rain = new THREE.Points(rainGeometry, rainMaterial);
  scene.add(rain);
  
  const animateRain = () => {
    const positions = rain.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= 0.5;
      if (positions[i] < 0) {
        positions[i] = 50;
      }
    }
    rain.geometry.attributes.position.needsUpdate = true;
  };
  
  return { rain, animateRain };
};

export const createSnowEffect = (scene) => {
  const snowGeometry = new THREE.BufferGeometry();
  const snowCount = 800;
  const positions = new Float32Array(snowCount * 3);
  
  for (let i = 0; i < snowCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = Math.random() * 50;
    positions[i + 2] = (Math.random() - 0.5) * 100;
  }
  
  snowGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const snowMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.2,
    transparent: true,
    opacity: 0.8
  });
  
  const snow = new THREE.Points(snowGeometry, snowMaterial);
  scene.add(snow);
  
  const animateSnow = () => {
    const positions = snow.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= 0.1;
      positions[i - 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
      if (positions[i] < 0) {
        positions[i] = 50;
      }
    }
    snow.geometry.attributes.position.needsUpdate = true;
  };
  
  return { snow, animateSnow };
};
