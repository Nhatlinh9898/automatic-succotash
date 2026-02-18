/**
 * Web3D Framework - Main Entry Point
 * Comprehensive 3D Web Framework with modular architecture
 */

import { Web3DEngine } from './core/Web3DEngine.js';
import { 
    Component,
    TransformComponent,
    MeshComponent,
    AnimationComponent,
    PhysicsComponent,
    CameraComponent
} from './core/ComponentSystem.js';
import {
    System,
    InputSystem,
    PhysicsSystem,
    AudioSystem,
    PerformanceSystem
} from './core/Systems.js';
import {
    LODSystem,
    FrustumCullingSystem,
    ObjectPool,
    BatchRenderingSystem,
    MemoryManagementSystem
} from './optimization/PerformanceSystems.js';
import {
    WebXRManager,
    VRUISystem,
    ARSystem
} from './webxr/WebXRSupport.js';
import {
    GeminiAIManager,
    AICharacterGenerator
} from './ai/AICharacterGenerator.js';

/**
 * Main Web3D Framework Class
 */
class Web3DFramework {
    constructor(options = {}) {
        this.engine = null;
        this.version = '1.0.0';
        this.options = options;
        
        // Framework modules
        this.modules = new Map();
        this.plugins = new Map();
        
        // Initialize framework
        this.init();
    }
    
    /**
     * Initialize the framework
     */
    init() {
        // Create engine
        this.engine = new Web3DEngine(this.options);
        
        // Register core systems
        this.registerCoreSystems();
        
        // Register core components
        this.registerCoreComponents();
        
        // Register optimization systems
        this.registerOptimizationSystems();
        
        // Register WebXR if available
        this.registerWebXR();
        
        console.log(`Web3D Framework v${this.version} initialized`);
    }
    
    /**
     * Register core systems
     */
    registerCoreSystems() {
        this.engine.addSystem('Input', new InputSystem());
        this.engine.addSystem('Physics', new PhysicsSystem());
        this.engine.addSystem('Audio', new AudioSystem());
        this.engine.addSystem('Performance', new PerformanceSystem());
    }
    
    /**
     * Register core components
     */
    registerCoreComponents() {
        this.engine.components.set('Transform', TransformComponent);
        this.engine.components.set('Mesh', MeshComponent);
        this.engine.components.set('Animation', AnimationComponent);
        this.engine.components.set('Physics', PhysicsComponent);
        this.engine.components.set('Camera', CameraComponent);
    }
    
    /**
     * Register optimization systems
     */
    registerOptimizationSystems() {
        const lodSystem = new LODSystem();
        const frustumCulling = new FrustumCullingSystem();
        const memoryManagement = new MemoryManagementSystem();
        
        this.engine.addSystem('LOD', lodSystem);
        this.engine.addSystem('FrustumCulling', frustumCulling);
        this.engine.addSystem('MemoryManagement', memoryManagement);
        
        // Initialize LOD and Frustum Culling with camera
        lodSystem.init(this.engine.camera);
        frustumCulling.init(this.engine.camera);
    }
    
    /**
     * Register WebXR systems
     */
    async registerWebXR() {
        try {
            const webxrManager = new WebXRManager();
            const isSupported = await webxrManager.init(this.engine.renderer);
            
            if (isSupported) {
                this.engine.addSystem('WebXR', webxrManager);
                this.engine.addSystem('VRUI', new VRUISystem());
                this.engine.addSystem('AR', new ARSystem());
                
                console.log('WebXR support enabled');
            }
        } catch (error) {
            console.warn('WebXR not available:', error.message);
        }
    }
    
    /**
     * Start the framework
     */
    start() {
        this.engine.start();
    }
    
    /**
     * Pause the framework
     */
    pause() {
        this.engine.pause();
    }
    
    /**
     * Resume the framework
     */
    resume() {
        this.engine.resume();
    }
    
    /**
     * Create entity with components
     */
    createEntity(components = []) {
        return this.engine.createEntity(null, components);
    }
    
    /**
     * Get entity by ID
     */
    getEntity(id) {
        return this.engine.getEntity(id);
    }
    
    /**
     * Remove entity
     */
    removeEntity(id) {
        return this.engine.removeEntity(id);
    }
    
    /**
     * Get system by name
     */
    getSystem(name) {
        return this.engine.getSystem(name);
    }
    
    /**
     * Add custom system
     */
    addSystem(name, system) {
        return this.engine.addSystem(name, system);
    }
    
    /**
     * Remove system
     */
    removeSystem(name) {
        return this.engine.removeSystem(name);
    }
    
    /**
     * Add custom component
     */
    addComponent(name, componentClass) {
        this.engine.components.set(name, componentClass);
    }
    
    /**
     * Get component class by name
     */
    getComponent(name) {
        return this.engine.components.get(name);
    }
    
    /**
     * Load scene from file
     */
    async loadScene(url) {
        const loader = new THREE.GLTFLoader();
        
        return new Promise((resolve, reject) => {
            loader.load(url, (gltf) => {
                const scene = gltf.scene;
                this.engine.scene.add(scene);
                
                // Process loaded scene
                this.processLoadedScene(gltf);
                
                resolve(gltf);
            }, undefined, reject);
        });
    }
    
    /**
     * Process loaded scene for framework integration
     */
    processLoadedScene(gltf) {
        gltf.scene.traverse((object) => {
            if (object.isMesh) {
                // Add to frustum culling
                const frustumSystem = this.getSystem('FrustumCulling');
                if (frustumSystem) {
                    frustumSystem.addObject(object);
                }
                
                // Track for memory management
                const memorySystem = this.getSystem('MemoryManagement');
                if (memorySystem) {
                    memorySystem.trackGeometry(object.uuid, object.geometry);
                    memorySystem.trackMaterial(object.uuid, object.material);
                }
            }
        });
    }
    
    /**
     * Create basic scene with lighting
     */
    createBasicScene() {
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        this.engine.scene.add(ambientLight);
        
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.engine.scene.add(directionalLight);
        
        // Add ground plane
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x808080,
            roughness: 0.8,
            metalness: 0.2
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.engine.scene.add(ground);
        
        return {
            ambientLight,
            directionalLight,
            ground
        };
    }
    
    /**
     * Create skybox
     */
    createSkybox(textureUrls) {
        const loader = new THREE.CubeTextureLoader();
        const skyboxTexture = loader.load(textureUrls);
        this.engine.scene.background = skyboxTexture;
        
        return skyboxTexture;
    }
    
    /**
     * Add fog to scene
     */
    addFog(color, near, far) {
        this.engine.scene.fog = new THREE.Fog(color, near, far);
    }
    
    /**
     * Get performance statistics
     */
    getStats() {
        const performanceSystem = this.getSystem('Performance');
        const memorySystem = this.getSystem('MemoryManagement');
        
        return {
            engine: this.engine.stats,
            performance: performanceSystem ? performanceSystem.getStats() : null,
            memory: memorySystem ? memorySystem.getMemoryStats() : null
        };
    }
    
    /**
     * Take screenshot
     */
    takeScreenshot(width = 1920, height = 1080) {
        // Create temporary renderer for screenshot
        const tempRenderer = new THREE.WebGLRenderer({ 
            preserveDrawingBuffer: true 
        });
        tempRenderer.setSize(width, height);
        tempRenderer.render(this.engine.scene, this.engine.camera);
        
        const dataURL = tempRenderer.domElement.toDataURL();
        tempRenderer.dispose();
        
        return dataURL;
    }
    
    /**
     * Create AI character generator
     */
    createAICharacterGenerator(apiKey) {
        return new AICharacterGenerator(this, apiKey);
    }
    
    /**
     * Export framework configuration
     */
    exportConfig() {
        return {
            version: this.version,
            engine: {
                isRunning: this.engine.isRunning,
                isInitialized: this.engine.isInitialized,
                config: this.engine.config
            },
            systems: Array.from(this.engine.systems.keys()),
            components: Array.from(this.engine.components.keys()),
            entities: Array.from(this.engine.entities.keys())
        };
    }
    
    /**
     * Dispose of the framework
     */
    dispose() {
        if (this.engine) {
            this.engine.dispose();
        }
        
        this.modules.clear();
        this.plugins.clear();
        this.engine = null;
    }
}

/**
 * Utility functions
 */
class Web3DUtils {
    /**
     * Create primitive geometry
     */
    static createPrimitive(type, options = {}) {
        const geometries = {
            box: () => new THREE.BoxGeometry(
                options.width || 1,
                options.height || 1,
                options.depth || 1
            ),
            sphere: () => new THREE.SphereGeometry(
                options.radius || 1,
                options.widthSegments || 32,
                options.heightSegments || 16
            ),
            cylinder: () => new THREE.CylinderGeometry(
                options.radiusTop || 1,
                options.radiusBottom || 1,
                options.height || 2,
                options.radialSegments || 32
            ),
            cone: () => new THREE.ConeGeometry(
                options.radius || 1,
                options.height || 2,
                options.radialSegments || 32
            ),
            plane: () => new THREE.PlaneGeometry(
                options.width || 1,
                options.height || 1
            )
        };
        
        return geometries[type] ? geometries[type]() : null;
    }
    
    /**
     * Create standard material
     */
    static createMaterial(options = {}) {
        return new THREE.MeshStandardMaterial({
            color: options.color || 0xffffff,
            roughness: options.roughness || 0.5,
            metalness: options.metalness || 0.0,
            transparent: options.transparent || false,
            opacity: options.opacity || 1.0,
            map: options.map || null,
            normalMap: options.normalMap || null,
            roughnessMap: options.roughnessMap || null,
            metalnessMap: options.metalnessMap || null
        });
    }
    
    /**
     * Create particle system
     */
    static createParticleSystem(options = {}) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(options.count || 1000 * 3);
        const colors = new Float32Array(options.count || 1000 * 3);
        const sizes = new Float32Array(options.count || 1000);
        
        for (let i = 0; i < (options.count || 1000); i++) {
            positions[i * 3] = (Math.random() - 0.5) * (options.area || 100);
            positions[i * 3 + 1] = Math.random() * (options.height || 50);
            positions[i * 3 + 2] = (Math.random() - 0.5) * (options.area || 100);
            
            colors[i * 3] = Math.random();
            colors[i * 3 + 1] = Math.random();
            colors[i * 3 + 2] = Math.random();
            
            sizes[i] = Math.random() * (options.size || 5);
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const material = new THREE.PointsMaterial({
            size: options.pointSize || 1,
            vertexColors: true,
            transparent: true,
            opacity: options.opacity || 1.0,
            blending: THREE.AdditiveBlending
        });
        
        return new THREE.Points(geometry, material);
    }
}

// Export everything
export {
    Web3DFramework,
    Web3DUtils,
    // Core
    Web3DEngine,
    Component,
    TransformComponent,
    MeshComponent,
    AnimationComponent,
    PhysicsComponent,
    CameraComponent,
    System,
    InputSystem,
    PhysicsSystem,
    AudioSystem,
    PerformanceSystem,
    // Optimization
    LODSystem,
    FrustumCullingSystem,
    ObjectPool,
    BatchRenderingSystem,
    MemoryManagementSystem,
    // WebXR
    WebXRManager,
    VRUISystem,
    ARSystem,
    // AI
    GeminiAIManager,
    AICharacterGenerator
};

// Default export
export default Web3DFramework;
