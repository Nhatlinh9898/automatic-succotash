/**
 * Web3D Framework - Comprehensive 3D Web Framework
 * Built on top of Three.js with modular architecture
 */

import * as THREE from 'three';

/**
 * Core Framework Engine
 */
class Web3DEngine {
    constructor(options = {}) {
        this.version = '1.0.0';
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.canvas = options.canvas || null;
        this.container = options.container || document.body;
        
        // Core systems
        this.systems = new Map();
        this.components = new Map();
        this.entities = new Map();
        
        // Performance tracking
        this.stats = {
            fps: 0,
            frameTime: 0,
            drawCalls: 0,
            triangles: 0,
            memory: 0
        };
        
        // Engine state
        this.isRunning = false;
        this.isInitialized = false;
        
        // Configuration
        this.config = {
            antialias: options.antialias !== false,
            alpha: options.alpha !== false,
            shadows: options.shadows !== false,
            pixelRatio: options.pixelRatio || window.devicePixelRatio,
            backgroundColor: options.backgroundColor || 0x000000,
            backgroundOpacity: options.backgroundOpacity || 1
        };
        
        this.init();
    }
    
    /**
     * Initialize the engine
     */
    init() {
        this.createRenderer();
        this.createScene();
        this.createCamera();
        this.setupEventListeners();
        this.isInitialized = true;
        
        console.log(`Web3D Framework v${this.version} initialized`);
    }
    
    /**
     * Create WebGL renderer
     */
    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: this.config.antialias,
            alpha: this.config.alpha
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(this.config.pixelRatio);
        this.renderer.setClearColor(this.config.backgroundColor, this.config.backgroundOpacity);
        
        if (this.config.shadows) {
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }
        
        this.container.appendChild(this.renderer.domElement);
    }
    
    /**
     * Create scene
     */
    createScene() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 1, 1000);
    }
    
    /**
     * Create camera
     */
    createCamera(type = 'perspective') {
        if (type === 'perspective') {
            this.camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
        } else {
            this.camera = new THREE.OrthographicCamera(
                window.innerWidth / -2,
                window.innerWidth / 2,
                window.innerHeight / 2,
                window.innerHeight / -2,
                0.1,
                1000
            );
        }
        
        this.camera.position.set(0, 5, 10);
        this.camera.lookAt(0, 0, 0);
    }
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('visibilitychange', () => this.onVisibilityChange());
    }
    
    /**
     * Handle window resize
     */
    onWindowResize() {
        if (this.camera.isPerspectiveCamera) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
        }
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    /**
     * Handle visibility change for performance
     */
    onVisibilityChange() {
        if (document.hidden) {
            this.pause();
        } else {
            this.resume();
        }
    }
    
    /**
     * Start the engine
     */
    start() {
        if (!this.isInitialized) {
            throw new Error('Engine not initialized');
        }
        
        this.isRunning = true;
        this.animate();
    }
    
    /**
     * Pause the engine
     */
    pause() {
        this.isRunning = false;
    }
    
    /**
     * Resume the engine
     */
    resume() {
        this.isRunning = true;
        this.animate();
    }
    
    /**
     * Main animation loop
     */
    animate() {
        if (!this.isRunning) return;
        
        requestAnimationFrame(() => this.animate());
        
        // Update all systems
        this.systems.forEach(system => {
            if (system.update) system.update();
        });
        
        // Update performance stats
        this.updateStats();
        
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
    
    /**
     * Update performance statistics
     */
    updateStats() {
        // Basic FPS calculation
        const now = performance.now();
        if (this.lastFrameTime) {
            this.stats.frameTime = now - this.lastFrameTime;
            this.stats.fps = Math.round(1000 / this.stats.frameTime);
        }
        this.lastFrameTime = now;
        
        // Get renderer info
        if (this.renderer.info) {
            this.stats.drawCalls = this.renderer.info.render.calls;
            this.stats.triangles = this.renderer.info.render.triangles;
        }
    }
    
    /**
     * Add a system to the engine
     */
    addSystem(name, system) {
        this.systems.set(name, system);
        if (system.init) system.init(this);
        return this;
    }
    
    /**
     * Get a system by name
     */
    getSystem(name) {
        return this.systems.get(name);
    }
    
    /**
     * Remove a system
     */
    removeSystem(name) {
        const system = this.systems.get(name);
        if (system && system.dispose) system.dispose();
        this.systems.delete(name);
        return this;
    }
    
    /**
     * Create entity with components
     */
    createEntity(id, components = []) {
        const entity = {
            id: id || `entity_${Date.now()}`,
            components: new Map(),
            active: true
        };
        
        components.forEach(component => {
            entity.components.set(component.name, component);
            if (component.init) component.init(entity, this);
        });
        
        this.entities.set(entity.id, entity);
        return entity;
    }
    
    /**
     * Get entity by ID
     */
    getEntity(id) {
        return this.entities.get(id);
    }
    
    /**
     * Remove entity
     */
    removeEntity(id) {
        const entity = this.entities.get(id);
        if (entity) {
            entity.components.forEach(component => {
                if (component.dispose) component.dispose();
            });
            this.entities.delete(id);
        }
        return this;
    }
    
    /**
     * Dispose of the engine
     */
    dispose() {
        this.isRunning = false;
        
        // Dispose all systems
        this.systems.forEach(system => {
            if (system.dispose) system.dispose();
        });
        
        // Dispose all entities
        this.entities.forEach(entity => {
            entity.components.forEach(component => {
                if (component.dispose) component.dispose();
            });
        });
        
        // Dispose Three.js objects
        if (this.scene) {
            this.scene.traverse(object => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        }
        
        if (this.renderer) {
            this.renderer.dispose();
        }
        
        // Clear references
        this.systems.clear();
        this.components.clear();
        this.entities.clear();
        this.scene = null;
        this.camera = null;
        this.renderer = null;
    }
}

export { Web3DEngine };
