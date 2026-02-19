import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import * as ThreeJSUtils from '../../../library/index';
import './ParticleEffectsDemo.css';

interface Effect {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface ParticleUserData {
  isParticle: boolean;
  [key: string]: any;
}

// Helper function to safely get buffer attribute arrays
const getAttributeArray = (geometry: THREE.BufferGeometry, attributeName: string): Float32Array => {
  const attribute = geometry.getAttribute(attributeName) as THREE.BufferAttribute;
  return attribute.array as Float32Array;
};

const ParticleEffectsDemo: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);
  
  const [activeEffect, setActiveEffect] = useState<string>('rain');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [particleCount, setParticleCount] = useState<number>(1000);
  const [effectIntensity, setEffectIntensity] = useState<number>(1);
  const [windForce, setWindForce] = useState<number>(0);
  const [effectColor, setEffectColor] = useState<string>('#ffffff');
  
  const currentEffectRef = useRef<THREE.Points | null>(null);
  const animationFunctionsRef = useRef<Function[]>([]);

  const effects: Effect[] = [
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

  const initializeScene = async (): Promise<void> => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    mountRef.current!.appendChild(renderer.domElement);
    
    // Add basic lighting
    ThreeJSUtils.addBasicLighting(scene);
    
    // Add orbit controls
    const controls = await ThreeJSUtils.setupOrbitControls(camera, renderer);
    
    // Create environment
    ThreeJSUtils.createSky(scene);
    ThreeJSUtils.createGround(scene);
    
    // Start animation loop
    const animate = (): void => {
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

  const clearCurrentEffect = (): void => {
    // Clear existing particles
    const objectsToRemove: THREE.Object3D[] = [];
    sceneRef.current!.traverse((child: THREE.Object3D) => {
      if ((child.userData as ParticleUserData).isParticle) {
        objectsToRemove.push(child);
      }
    });
    
    objectsToRemove.forEach(obj => {
      sceneRef.current!.remove(obj);
    });
    
    // Clear animation functions
    animationFunctionsRef.current = [];
    
    // Clear current effect reference
    if (currentEffectRef.current) {
      currentEffectRef.current = null;
    }
  };

  const loadEffect = (effectId: string): void => {
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

  const createRainEffect = (): void => {
    const { rain, animateRain } = ThreeJSUtils.createRainEffect(sceneRef.current!);
    currentEffectRef.current = rain;
    animationFunctionsRef.current = [animateRain];
  };

  const createSnowEffect = (): void => {
    const { snow, animateSnow } = ThreeJSUtils.createSnowEffect(sceneRef.current!);
    currentEffectRef.current = snow;
    animationFunctionsRef.current = [animateSnow];
  };

  const createFireEffect = (): void => {
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
    (fire.userData as ParticleUserData).isParticle = true;
    sceneRef.current!.add(fire);
    currentEffectRef.current = fire;
    
    const animateFire = (): void => {
      const positions = getAttributeArray(fire.geometry, 'position');
      const velocities = getAttributeArray(fire.geometry, 'velocity');
      
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
      
      fire.geometry.getAttribute('position')!.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateFire];
  };

  const createStarsEffect = (): void => {
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
    (stars.userData as ParticleUserData).isParticle = true;
    sceneRef.current!.add(stars);
    currentEffectRef.current = stars;
    
    const animateStars = (): void => {
      (stars as any).rotation.y += 0.0001;
      (stars as any).rotation.x += 0.00005;
    };
    
    animationFunctionsRef.current = [animateStars];
  };

  const createMagicEffect = (): void => {
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
    (magic.userData as ParticleUserData).isParticle = true;
    sceneRef.current!.add(magic);
    currentEffectRef.current = magic;
    
    const animateMagic = (): void => {
      const positions = getAttributeArray(magic.geometry, 'position');
      const phases = getAttributeArray(magic.geometry, 'phase');
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const angle = (i / particleCount) * Math.PI * 2 + time * 0.5;
        const radius = 3 + Math.sin(time + phases[i]) * 2;
        
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = Math.sin(angle * 3 + time) * 2;
        positions[i3 + 2] = Math.sin(angle) * radius;
      }
      
      const positionAttribute = magic.geometry.getAttribute('position') as THREE.BufferAttribute;
      positionAttribute.needsUpdate = true;
      (magic as any).rotation.y += 0.01;
    };
    
    animationFunctionsRef.current = [animateMagic];
  };

  const createSmokeEffect = (): void => {
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
    (smoke.userData as ParticleUserData).isParticle = true;
    sceneRef.current!.add(smoke);
    currentEffectRef.current = smoke;
    
    const animateSmoke = (): void => {
      const positions = getAttributeArray(smoke.geometry, 'position');
      const velocities = getAttributeArray(smoke.geometry, 'velocity');
      const sizes = getAttributeArray(smoke.geometry, 'size');
      const opacities = getAttributeArray(smoke.geometry, 'opacity');    
      
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
      
      smoke.geometry.getAttribute('position')!.needsUpdate = true;
      smoke.geometry.getAttribute('size')!.needsUpdate = true;
      smoke.geometry.getAttribute('opacity')!.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateSmoke];
  };

  const createBubblesEffect = (): void => {
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
    (bubbles.userData as ParticleUserData).isParticle = true;
    sceneRef.current!.add(bubbles);
    currentEffectRef.current = bubbles;
    
    const animateBubbles = (): void => {
      const positions = getAttributeArray(bubbles.geometry, 'position');
      const velocities = getAttributeArray(bubbles.geometry, 'velocity');    
      
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
      
      bubbles.geometry.getAttribute('position')!.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateBubbles];
  };

  const createConfettiEffect = (): void => {
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
    (confetti.userData as ParticleUserData).isParticle = true;
    sceneRef.current!.add(confetti);
    currentEffectRef.current = confetti;
    
    const animateConfetti = (): void => {
      const positions = getAttributeArray(confetti.geometry, 'position');
      const velocities = getAttributeArray(confetti.geometry, 'velocity');
      const rotations = getAttributeArray(confetti.geometry, 'rotation');
      const rotationSpeeds = getAttributeArray(confetti.geometry, 'rotationSpeed');
      
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
      
      confetti.geometry.getAttribute('position')!.needsUpdate = true;
      confetti.geometry.getAttribute('rotation')!.needsUpdate = true;
    };
    
    animationFunctionsRef.current = [animateConfetti];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Particle Effects Showcase
          </h2>
          <div className="flex justify-center items-center gap-4 text-white">
            <span className="text-3xl font-bold">
              {effects.find(e => e.id === activeEffect)?.icon}
            </span>
            <span className="text-2xl font-light text-gray-300">
              {effects.find(e => e.id === activeEffect)?.name}
            </span>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">3D Graphics</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium backdrop-blur-sm border border-indigo-500/30">Real-time</span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium backdrop-blur-sm border border-pink-500/30">Interactive</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Particle Effects</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {effects.map(effect => (
                  <button
                    key={effect.id}
                    className={`group relative p-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                      activeEffect === effect.id 
                        ? 'bg-gradient-to-br from-purple-600/30 to-indigo-600/30 text-white shadow-2xl shadow-purple-500/20 scale-105 border border-purple-500/50' 
                        : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-white hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-indigo-600/20 border border-white/10 hover:border-purple-500/30'
                    }`}
                    onClick={() => setActiveEffect(effect.id)}
                  >
                    {/* Glow effect for active */}
                    {activeEffect === effect.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent animate-pulse"></div>
                    )}
                    
                    <span className="relative z-10 text-3xl block mb-2 group-hover:scale-110 transition-transform duration-300">{effect.icon}</span>
                    <span className="relative z-10 text-sm font-bold">{effect.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Controls</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-white text-sm font-bold mb-3 flex items-center justify-between">
                    <span>Particle Count</span>
                    <span className="text-purple-300 font-mono">{particleCount}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      value={particleCount}
                      onChange={(e) => setParticleCount(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg pointer-events-none" style={{width: `${((particleCount - 100) / 4900) * 100}%`}}></div>
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-bold mb-3 flex items-center justify-between">
                    <span>Intensity</span>
                    <span className="text-purple-300 font-mono">{effectIntensity.toFixed(1)}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0.1"
                      max="3"
                      step="0.1"
                      value={effectIntensity}
                      onChange={(e) => setEffectIntensity(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg pointer-events-none" style={{width: `${((effectIntensity - 0.1) / 2.9) * 100}%`}}></div>
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-bold mb-3 flex items-center justify-between">
                    <span>Wind Force</span>
                    <span className="text-purple-300 font-mono">{windForce.toFixed(1)}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={windForce}
                      onChange={(e) => setWindForce(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg pointer-events-none" style={{width: `${((windForce + 2) / 4) * 100}%`}}></div>
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-bold mb-3 block">
                    Effect Color
                  </label>
                  <div className="relative">
                    <input
                      type="color"
                      value={effectColor}
                      onChange={(e) => setEffectColor(e.target.value)}
                      className="w-full h-12 rounded-2xl cursor-pointer bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 pointer-events-none"></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-3 px-4 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden group ${
                      isPlaying 
                        ? 'bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg shadow-red-500/30' 
                        : 'bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30'
                    }`}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </span>
                  </button>
                  <button
                    className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-blue-500/30"
                    onClick={() => loadEffect(activeEffect)}
                  >
                    🔄 Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">About This Effect</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {effects.find(e => e.id === activeEffect)?.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105">
                  <span className="text-gray-400 text-sm block mb-2">Particles:</span>
                  <span className="text-white text-2xl font-bold">{particleCount}</span>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105">
                  <span className="text-gray-400 text-sm block mb-2">Status:</span>
                  <span className={`text-2xl font-bold ${isPlaying ? 'text-green-400' : 'text-yellow-400'}`}>
                    {isPlaying ? 'Playing' : 'Paused'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 relative">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-b border-white/10 p-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold">3D Scene</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium backdrop-blur-sm border border-purple-500/30">
                      {effects.find(e => e.id === activeEffect)?.name}
                    </span>
                  </div>
                </div>
              </div>
              
              <div ref={mountRef} className="w-full h-96 lg:h-full min-h-[600px] pt-16" />
              
              {/* Controls overlay */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-6 max-w-sm border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Scene Controls</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-purple-400">🖱️</span> Mouse to rotate camera
                  </p>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-purple-400">⚡</span> Scroll to zoom in/out
                  </p>
                  <p className="text-yellow-400 text-sm flex items-center gap-2 mt-3">
                    <span>💡</span> Adjust particle count for better performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleEffectsDemo;
