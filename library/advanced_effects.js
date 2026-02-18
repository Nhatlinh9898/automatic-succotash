// Three.js Advanced Effects Library
// Reflection, liquid simulation, and advanced visual effects

import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

export function createMirrorEffect(scene) {
    // Create reflective surface
    const mirrorGeometry = new THREE.PlaneGeometry(100, 100);
    const mirror = new Reflector(mirrorGeometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x889999
    });
    
    mirror.position.y = -5;
    mirror.rotation.x = -Math.PI / 2;
    scene.add(mirror);
    
    return mirror;
}

export function createLiquidSurface(scene) {
    // Create liquid/water surface simulation
    const liquidGeometry = new THREE.PlaneGeometry(100, 100, 256, 256);
    const liquidMaterial = new THREE.ShaderMaterial({
        uniforms: { 
            time: { value: 0 },
            resolution: { value: new THREE.Vector2(100, 100) }
        },
        vertexShader: `
            uniform float time;
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
                vUv = uv;
                vPosition = position;
                vec3 pos = position;
                pos.z = sin(pos.x * 0.1 + time) * 0.5 + cos(pos.y * 0.1 + time) * 0.5;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec2 resolution;
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
                vec2 uv = vUv;
                float wave = sin(uv.x * 10.0 + time) * 0.1;
                wave += cos(uv.y * 10.0 + time) * 0.1;
                
                vec3 color = mix(vec3(0.0, 0.3, 0.5), vec3(0.0, 0.5, 0.8), wave);
                gl_FragColor = vec4(color, 0.8);
            }
        `,
        transparent: true
    });
    
    const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
    liquid.rotation.x = -Math.PI / 2;
    liquid.position.y = 0;
    scene.add(liquid);

    // Animate liquid surface
    function animateLiquid() {
        liquidMaterial.uniforms.time.value += 0.016;
    }

    return { liquid, animateLiquid };
}

export function createDynamicBackground(scene) {
    // Create dynamic background that changes color
    function changeBackground(color) {
        scene.background = new THREE.Color(color);
    }

    // Create color transition animation
    function animateBackground() {
        const time = Date.now() * 0.0001;
        const hue = (Math.sin(time) + 1) * 0.5;
        const color = new THREE.Color().setHSL(hue, 0.7, 0.5);
        scene.background = color;
    }

    return { changeBackground, animateBackground };
}

export function createAudioReactiveEffect(scene) {
    // Create audio-reactive visual effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const audio = new Audio('path/to/music.mp3');
    
    audio.play();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Create visual elements that react to audio
    const bars = [];
    for (let i = 0; i < 32; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color().setHSL(i / 32, 1, 0.5)
        });
        const bar = new THREE.Mesh(geometry, material);
        bar.position.x = (i - 16) * 2;
        bar.position.y = 0;
        scene.add(bar);
        bars.push(bar);
    }

    // Animate based on audio
    function animateAudio() {
        analyser.getByteFrequencyData(dataArray);
        
        bars.forEach((bar, index) => {
            const scale = dataArray[index * 4] / 255;
            bar.scale.y = scale * 10;
            bar.material.color.setHSL(scale, 1, 0.5);
        });
    }

    return { animateAudio, stopAudio: () => audio.pause() };
}

export function createDynamicLighting(scene) {
    // Create lighting that changes based on time or events
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Animate light color and intensity
    function animateLight() {
        const time = Date.now() * 0.001;
        light.color.setHSL((Math.sin(time) + 1) * 0.5, 0.7, 0.5);
        light.intensity = Math.sin(time * 2) * 0.5 + 0.5;
        
        // Change ambient light based on main light
        ambientLight.color.copy(light.color);
        ambientLight.intensity = light.intensity * 0.3;
    }

    return { light, ambientLight, animateLight };
}

export function createHologramEffect(scene, model) {
    // Create hologram projection effect
    const hologramMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            varying vec2 vUv;
            
            void main() {
                float scanline = sin(vUv.y * 800.0 + time * 10.0) * 0.04 + 0.96;
                float glitch = step(0.98, sin(vUv.x * 1000.0 + time * 5.0));
                
                vec3 color = vec3(0.0, 1.0, 0.5);
                color *= scanline;
                color += glitch * 0.5;
                
                gl_FragColor = vec4(color, 0.7);
            }
        `,
        transparent: true,
        side: THREE.DoubleSide
    });

    const hologram = model.clone();
    hologram.material = hologramMaterial;
    scene.add(hologram);

    // Animate hologram effect
    function animateHologram() {
        hologramMaterial.uniforms.time.value += 0.016;
        hologram.position.y = model.position.y + Math.sin(Date.now() * 0.002) * 0.1;
    }

    return { hologram, animateHologram };
}
