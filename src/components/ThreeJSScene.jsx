import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const ThreeJSScene = forwardRef(({ character, outfit, animation, cameraMode }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const mixerRef = useRef(null);
  const actionsRef = useRef({});
  const jawBoneRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const currentModelRef = useRef(null);

  const cameraPositions = {
    default: { pos: new THREE.Vector3(0, 1.6, 3), look: new THREE.Vector3(0, 1.6, 0) },
    closeup: { pos: new THREE.Vector3(0, 1.6, 1.5), look: new THREE.Vector3(0, 1.6, 0) },
    wide: { pos: new THREE.Vector3(0, 3, 5), look: new THREE.Vector3(0, 1, 0) },
    side: { pos: new THREE.Vector3(2, 1.6, 2), look: new THREE.Vector3(0, 1.6, 0) }
  };

  useImperativeHandle(ref, () => ({
    playAnimation: (name) => {
      if (actionsRef.current[name]) {
        // Stop all animations
        Object.values(actionsRef.current).forEach(action => action.stop());
        
        // Play requested animation
        actionsRef.current[name].reset().fadeIn(0.3).play();
      }
    },
    setCameraMode: (mode) => {
      if (cameraRef.current && cameraPositions[mode]) {
        const newPos = cameraPositions[mode];
        const startPos = cameraRef.current.position.clone();
        
        let progress = 0;
        const duration = 1000;
        const startTime = Date.now();
        
        const animateCamera = () => {
          const elapsed = Date.now() - startTime;
          progress = Math.min(elapsed / duration, 1);
          
          const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;
          
          cameraRef.current.position.lerpVectors(startPos, newPos.pos, easeProgress);
          cameraRef.current.lookAt(newPos.look);
          
          if (progress < 1) {
            requestAnimationFrame(animateCamera);
          }
        };
        
        animateCamera();
      }
    },
    playTTS: async (url) => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;

        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;

        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);

        source.start();
      } catch (error) {
        console.error('Error playing TTS:', error);
      }
    }
  }));

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      100
    );
    camera.position.copy(cameraPositions.default.pos);
    camera.lookAt(cameraPositions.default.look);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
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

    // Ground
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

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      // Lip sync
      if (jawBoneRef.current && analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        let volume = dataArrayRef.current[10] / 255;
        jawBoneRef.current.rotation.x = volume * 0.4;
      }

      // Gentle floating animation
      if (currentModelRef.current) {
        currentModelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.02;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Load character model
  useEffect(() => {
    if (!sceneRef.current) return;

    const loadCharacter = async () => {
      // Remove current model
      if (currentModelRef.current) {
        sceneRef.current.remove(currentModelRef.current);
        currentModelRef.current = null;
      }

      try {
        // Try to load character model
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader');
        const loader = new GLTFLoader();
        
        const modelPath = `characters/${character}.glb`;
        
        loader.load(
          modelPath,
          (gltf) => {
            const model = gltf.scene;
            model.position.y = 0;
            model.castShadow = true;
            model.receiveShadow = true;
            
            sceneRef.current.add(model);
            currentModelRef.current = model;

            // Setup animations
            mixerRef.current = new THREE.AnimationMixer(model);
            actionsRef.current = {};
            
            gltf.animations.forEach((clip) => {
              actionsRef.current[clip.name] = mixerRef.current.clipAction(clip);
            });

            // Find jaw bone
            model.traverse((obj) => {
              if (obj.isBone && (obj.name.toLowerCase().includes("jaw") || obj.name.toLowerCase().includes("mouth"))) {
                jawBoneRef.current = obj;
              }
            });

            // Apply outfit
            applyOutfit(model, outfit);
          },
          undefined,
          (error) => {
            console.error('Error loading character model:', error);
            createFallbackCharacter();
          }
        );
      } catch (error) {
        console.error('Error in loadCharacter:', error);
        createFallbackCharacter();
      }
    };

    loadCharacter();
  }, [character]);

  // Apply outfit changes
  useEffect(() => {
    if (currentModelRef.current) {
      applyOutfit(currentModelRef.current, outfit);
    }
  }, [outfit]);

  // Apply animation changes
  useEffect(() => {
    if (animation && actionsRef.current[animation]) {
      Object.values(actionsRef.current).forEach(action => action.stop());
      actionsRef.current[animation].reset().fadeIn(0.3).play();
    }
  }, [animation]);

  const applyOutfit = (model, outfitData) => {
    if (!model) return;

    // Apply color to model
    if (outfitData.color) {
      model.traverse((child) => {
        if (child.isMesh && (child.name.toLowerCase().includes('body') || child.name.toLowerCase().includes('skin'))) {
          child.material = child.material.clone();
          child.material.color = new THREE.Color(outfitData.color);
        }
      });
    }

    // In a real implementation, you would:
    // 1. Load different outfit models
    // 2. Swap materials/textures
    // 3. Add/remove accessory meshes
    // 4. Change hair geometry
  };

  const createFallbackCharacter = () => {
    if (!sceneRef.current) return;

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
    
    sceneRef.current.add(character);
    currentModelRef.current = character;
    
    applyOutfit(character, outfit);
  };

  return (
    <div 
      ref={mountRef} 
      style={{ width: '100%', height: '100%' }}
    />
  );
});

ThreeJSScene.displayName = 'ThreeJSScene';

export default ThreeJSScene;
