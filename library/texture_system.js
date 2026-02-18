// Three.js Texture System Library
// Dynamic texture changing, PBR materials, and texture management

import * as THREE from 'three';

export function createTextureManager() {
    // Advanced texture management system
    const textureCache = new Map();
    const loader = new THREE.TextureLoader();
    
    function loadTexture(url, options = {}) {
        // Check cache first
        if (textureCache.has(url)) {
            return Promise.resolve(textureCache.get(url));
        }
        
        return new Promise((resolve, reject) => {
            loader.load(
                url,
                (texture) => {
                    // Apply options
                    if (options.repeat) {
                        texture.repeat.set(options.repeat.x, options.repeat.y);
                    }
                    if (options.wrapS) {
                        texture.wrapS = options.wrapS;
                    }
                    if (options.wrapT) {
                        texture.wrapT = options.wrapT;
                    }
                    if (options.flipY) {
                        texture.flipY = options.flipY;
                    }
                    
                    textureCache.set(url, texture);
                    resolve(texture);
                },
                undefined,
                (error) => reject(error)
            );
        });
    }
    
    function preloadTextures(textureUrls) {
        const promises = textureUrls.map(url => loadTexture(url));
        return Promise.all(promises);
    }
    
    function clearCache() {
        textureCache.forEach(texture => texture.dispose());
        textureCache.clear();
    }
    
    return {
        loadTexture,
        preloadTextures,
        clearCache,
        getCache: () => textureCache
    };
}

export function createDynamicTextureSystem(scene, model) {
    // Dynamic texture changing based on interactions
    let currentTextureIndex = 0;
    const textures = [];
    
    function changeTextureOnClick() {
        const loader = new THREE.TextureLoader();
        const newTexture = loader.load('path/to/new_texture.jpg');
        
        // Store current texture before changing
        if (model.material.map) {
            textures.push(model.material.map);
        }
        
        // Apply new texture
        model.material.map = newTexture;
        model.material.needsUpdate = true;
        
        currentTextureIndex++;
    }
    
    function cycleTextures() {
        if (textures.length === 0) return;
        
        currentTextureIndex = (currentTextureIndex + 1) % textures.length;
        model.material.map = textures[currentTextureIndex];
        model.material.needsUpdate = true;
    }
    
    function addTextureToCycle(textureUrl) {
        const loader = new THREE.TextureLoader();
        loader.load(textureUrl, (texture) => {
            textures.push(texture);
        });
    }
    
    // Add click listener
    window.addEventListener('click', changeTextureOnClick);
    
    return {
        changeTextureOnClick,
        cycleTextures,
        addTextureToCycle,
        getTextures: () => textures
    };
}

export function createPBRTextureSystem() {
    // Physically Based Rendering texture system
    const textureManager = createTextureManager();
    
    function createPBRMaterial(config) {
        const promises = [];
        
        // Load all required textures
        if (config.albedoMap) {
            promises.push(textureManager.loadTexture(config.albedoMap));
        }
        if (config.normalMap) {
            promises.push(textureManager.loadTexture(config.normalMap));
        }
        if (config.roughnessMap) {
            promises.push(textureManager.loadTexture(config.roughnessMap));
        }
        if (config.metallicMap) {
            promises.push(textureManager.loadTexture(config.metallicMap));
        }
        if (config.aoMap) {
            promises.push(textureManager.loadTexture(config.aoMap));
        }
        
        return Promise.all(promises).then(textures => {
            let textureIndex = 0;
            const material = new THREE.MeshStandardMaterial({
                color: config.color || 0xffffff,
                roughness: config.roughness || 0.5,
                metalness: config.metalness || 0.0
            });
            
            // Apply loaded textures
            if (config.albedoMap) {
                material.map = textures[textureIndex++];
                material.map.encoding = THREE.sRGBEncoding;
            }
            if (config.normalMap) {
                material.normalMap = textures[textureIndex++];
                material.normalScale = config.normalScale || new THREE.Vector2(1, 1);
            }
            if (config.roughnessMap) {
                material.roughnessMap = textures[textureIndex++];
            }
            if (config.metallicMap) {
                material.metallicMap = textures[textureIndex++];
            }
            if (config.aoMap) {
                material.aoMap = textures[textureIndex++];
            }
            
            material.needsUpdate = true;
            return material;
        });
    }
    
    function createClothPBR() {
        return createPBRMaterial({
            albedoMap: 'path/to/cloth_albedo.jpg',
            normalMap: 'path/to/cloth_normal.jpg',
            roughnessMap: 'path/to/cloth_roughness.jpg',
            metallicMap: 'path/to/cloth_metallic.jpg',
            aoMap: 'path/to/cloth_ao.jpg',
            normalScale: new THREE.Vector2(2, 2)
        });
    }
    
    function createMetalPBR() {
        return createPBRMaterial({
            albedoMap: 'path/to/metal_albedo.jpg',
            normalMap: 'path/to/metal_normal.jpg',
            roughnessMap: 'path/to/metal_roughness.jpg',
            metallicMap: 'path/to/metal_metallic.jpg',
            aoMap: 'path/to/metal_ao.jpg',
            roughness: 0.2,
            metalness: 0.9
        });
    }
    
    function createWoodPBR() {
        return createPBRMaterial({
            albedoMap: 'path/to/wood_albedo.jpg',
            normalMap: 'path/to/wood_normal.jpg',
            roughnessMap: 'path/to/wood_roughness.jpg',
            aoMap: 'path/to/wood_ao.jpg',
            roughness: 0.8,
            metalness: 0.0
        });
    }
    
    return {
        createPBRMaterial,
        createClothPBR,
        createMetalPBR,
        createWoodPBR
    };
}

export function createProceduralTextureSystem() {
    // Procedural texture generation
    function createNoiseTexture(size = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        
        const imageData = context.createImageData(size, size);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const x = (i / 4) % size;
            const y = Math.floor((i / 4) / size);
            
            // Generate noise using simple algorithm
            const noise = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 127 + 128;
            
            data[i] = noise;     // R
            data[i + 1] = noise; // G
            data[i + 2] = noise; // B
            data[i + 3] = 255;   // A
        }
        
        context.putImageData(imageData, 0, 0);
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
        return texture;
    }
    
    function createGradientTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        const gradient = context.createLinearGradient(0, 0, 256, 256);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(0.5, '#00ff00');
        gradient.addColorStop(1, '#0000ff');
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, 256, 256);
        
        return new THREE.CanvasTexture(canvas);
    }
    
    function createCheckerboardTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        const squareSize = 32;
        
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                context.fillStyle = (x + y) % 2 === 0 ? '#ffffff' : '#000000';
                context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
            }
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
        return texture;
    }
    
    function animateTexture(texture, animationType = 'rotate') {
        const originalOffset = texture.offset.clone();
        
        function updateTexture() {
            const time = Date.now() * 0.001;
            
            switch (animationType) {
                case 'rotate':
                    texture.offset.x = originalOffset.x + Math.sin(time) * 0.1;
                    texture.offset.y = originalOffset.y + Math.cos(time) * 0.1;
                    break;
                case 'scroll':
                    texture.offset.x = originalOffset.x + time * 0.05;
                    texture.offset.y = originalOffset.y;
                    break;
                case 'zoom':
                    const zoom = Math.sin(time) * 0.5 + 1;
                    texture.repeat.set(zoom, zoom);
                    break;
            }
            
            texture.needsUpdate = true;
        }
        
        return updateTexture;
    }
    
    return {
        createNoiseTexture,
        createGradientTexture,
        createCheckerboardTexture,
        animateTexture
    };
}

export function createVideoTextureSystem(scene) {
    // Video texture mapping system
    let video = null;
    let videoTexture = null;
    
    function createVideoTexture(videoElement) {
        video = videoElement;
        videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        
        return videoTexture;
    }
    
    function applyVideoToMaterial(material) {
        if (videoTexture) {
            material.map = videoTexture;
            material.needsUpdate = true;
        }
    }
    
    function createVideoScreen(position, size = { width: 16, height: 9 }) {
        const geometry = new THREE.PlaneGeometry(size.width, size.height);
        const material = new THREE.MeshBasicMaterial({ 
            map: videoTexture,
            side: THREE.DoubleSide
        });
        
        const screen = new THREE.Mesh(geometry, material);
        screen.position.set(position.x, position.y, position.z);
        scene.add(screen);
        
        return screen;
    }
    
    function updateVideoTexture() {
        if (video && videoTexture) {
            videoTexture.needsUpdate = true;
        }
    }
    
    return {
        createVideoTexture,
        applyVideoToMaterial,
        createVideoScreen,
        updateVideoTexture
    };
}
