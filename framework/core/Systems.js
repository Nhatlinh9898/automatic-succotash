/**
 * Systems - Core systems for Web3D Framework
 */

import * as THREE from 'three';

/**
 * Base System class
 */
class System {
    constructor(name) {
        this.name = name;
        this.engine = null;
        this.enabled = true;
    }
    
    /**
     * Initialize system
     */
    init(engine) {
        this.engine = engine;
    }
    
    /**
     * Update system (called every frame)
     */
    update(deltaTime) {
        // Override in subclasses
    }
    
    /**
     * Enable/disable system
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    
    /**
     * Dispose system
     */
    dispose() {
        this.engine = null;
    }
}

/**
 * Input System - Handle user input
 */
class InputSystem extends System {
    constructor() {
        super('Input');
        this.keys = {};
        this.mouse = new THREE.Vector2();
        this.mouseDown = false;
        this.mouseButtons = {};
        this.touches = new Map();
        this.callbacks = new Map();
    }
    
    init(engine) {
        super.init(engine);
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Keyboard events
        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));
        
        // Mouse events
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('mousedown', (e) => this.onMouseDown(e));
        window.addEventListener('mouseup', (e) => this.onMouseUp(e));
        
        // Touch events
        window.addEventListener('touchstart', (e) => this.onTouchStart(e));
        window.addEventListener('touchmove', (e) => this.onTouchMove(e));
        window.addEventListener('touchend', (e) => this.onTouchEnd(e));
    }
    
    onKeyDown(event) {
        this.keys[event.code] = true;
        this.triggerCallback('keydown', event);
    }
    
    onKeyUp(event) {
        this.keys[event.code] = false;
        this.triggerCallback('keyup', event);
    }
    
    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.triggerCallback('mousemove', event);
    }
    
    onMouseDown(event) {
        this.mouseDown = true;
        this.mouseButtons[event.button] = true;
        this.triggerCallback('mousedown', event);
    }
    
    onMouseUp(event) {
        this.mouseDown = false;
        this.mouseButtons[event.button] = false;
        this.triggerCallback('mouseup', event);
    }
    
    onTouchStart(event) {
        for (let touch of event.touches) {
            this.touches.set(touch.identifier, {
                x: touch.clientX,
                y: touch.clientY
            });
        }
        this.triggerCallback('touchstart', event);
    }
    
    onTouchMove(event) {
        for (let touch of event.touches) {
            if (this.touches.has(touch.identifier)) {
                this.touches.get(touch.identifier).x = touch.clientX;
                this.touches.get(touch.identifier).y = touch.clientY;
            }
        }
        this.triggerCallback('touchmove', event);
    }
    
    onTouchEnd(event) {
        for (let touch of event.changedTouches) {
            this.touches.delete(touch.identifier);
        }
        this.triggerCallback('touchend', event);
    }
    
    isKeyPressed(key) {
        return this.keys[key] || false;
    }
    
    isMouseButtonPressed(button) {
        return this.mouseButtons[button] || false;
    }
    
    addCallback(event, callback) {
        if (!this.callbacks.has(event)) {
            this.callbacks.set(event, []);
        }
        this.callbacks.get(event).push(callback);
    }
    
    removeCallback(event, callback) {
        if (this.callbacks.has(event)) {
            const callbacks = this.callbacks.get(event);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }
    
    triggerCallback(event, data) {
        if (this.callbacks.has(event)) {
            this.callbacks.get(event).forEach(callback => callback(data));
        }
    }
    
    dispose() {
        // Remove event listeners
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('touchstart', this.onTouchStart);
        window.removeEventListener('touchmove', this.onTouchMove);
        window.removeEventListener('touchend', this.onTouchEnd);
        
        super.dispose();
    }
}

/**
 * Physics System - Basic physics simulation
 */
class PhysicsSystem extends System {
    constructor() {
        super('Physics');
        this.entities = new Set();
        this.gravity = new THREE.Vector3(0, -9.81, 0);
        this.bounds = new THREE.Box3(
            new THREE.Vector3(-100, -10, -100),
            new THREE.Vector3(100, 100, 100)
        );
    }
    
    addEntity(entity) {
        this.entities.add(entity);
    }
    
    removeEntity(entity) {
        this.entities.delete(entity);
    }
    
    update(deltaTime) {
        if (!this.enabled) return;
        
        this.entities.forEach(entity => {
            const physics = entity.components.get('Physics');
            const transform = entity.components.get('Transform');
            
            if (physics && transform) {
                // Apply gravity
                if (physics.useGravity) {
                    physics.applyForce(this.gravity.clone().multiplyScalar(physics.mass));
                }
                
                // Update physics
                physics.update(deltaTime);
                
                // Check boundaries
                this.checkBounds(transform, physics);
                
                // Check collisions with other entities
                this.checkCollisions(entity);
            }
        });
    }
    
    checkBounds(transform, physics) {
        // Simple boundary checking
        if (transform.position.y < this.bounds.min.y) {
            transform.position.y = this.bounds.min.y;
            physics.velocity.y = 0;
            physics.grounded = true;
        }
        
        // Keep within bounds
        transform.position.x = THREE.MathUtils.clamp(
            transform.position.x,
            this.bounds.min.x,
            this.bounds.max.x
        );
        transform.position.z = THREE.MathUtils.clamp(
            transform.position.z,
            this.bounds.min.z,
            this.bounds.max.z
        );
    }
    
    checkCollisions(entity) {
        const transform = entity.components.get('Transform');
        const mesh = entity.components.get('Mesh');
        
        if (!transform || !mesh) return;
        
        // Simple sphere collision
        const radius = mesh.mesh.geometry.boundingSphere?.radius || 1;
        
        this.entities.forEach(otherEntity => {
            if (otherEntity === entity) return;
            
            const otherTransform = otherEntity.components.get('Transform');
            const otherMesh = otherEntity.components.get('Mesh');
            
            if (!otherTransform || !otherMesh) return;
            
            const otherRadius = otherMesh.mesh.geometry.boundingSphere?.radius || 1;
            const distance = transform.position.distanceTo(otherTransform.position);
            
            if (distance < radius + otherRadius) {
                // Simple collision response
                const normal = transform.position.clone().sub(otherTransform.position).normalize();
                const overlap = (radius + otherRadius) - distance;
                
                transform.position.add(normal.multiplyScalar(overlap * 0.5));
                otherTransform.position.sub(normal.multiplyScalar(overlap * 0.5));
                
                // Update velocities
                const physics = entity.components.get('Physics');
                const otherPhysics = otherEntity.components.get('Physics');
                
                if (physics && otherPhysics) {
                    const relativeVelocity = physics.velocity.clone().sub(otherPhysics.velocity);
                    const velocityAlongNormal = relativeVelocity.dot(normal);
                    
                    if (velocityAlongNormal > 0) return;
                    
                    const restitution = 0.8;
                    const impulse = 2 * velocityAlongNormal / (physics.mass + otherPhysics.mass);
                    
                    physics.velocity.sub(normal.multiplyScalar(impulse * otherPhysics.mass * restitution));
                    otherPhysics.velocity.add(normal.multiplyScalar(impulse * physics.mass * restitution));
                }
            }
        });
    }
    
    dispose() {
        this.entities.clear();
        super.dispose();
    }
}

/**
 * Audio System - 3D audio management
 */
class AudioSystem extends System {
    constructor() {
        super('Audio');
        this.listener = null;
        this.sounds = new Map();
        this.audioContext = null;
        this.masterVolume = 1;
    }
    
    init(engine) {
        super.init(engine);
        this.setupAudio();
    }
    
    setupAudio() {
        // Create audio listener
        this.listener = new THREE.AudioListener();
        this.engine.camera.add(this.listener);
        
        // Create audio context
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    createSound(name, url, options = {}) {
        const sound = new THREE.Audio(this.listener);
        const audioLoader = new THREE.AudioLoader();
        
        audioLoader.load(url, (buffer) => {
            sound.setBuffer(buffer);
            sound.setLoop(options.loop || false);
            sound.setVolume(options.volume || 1);
            sound.setRefDistance(options.refDistance || 1);
            sound.setRolloffFactor(options.rolloffFactor || 1);
        });
        
        this.sounds.set(name, sound);
        return sound;
    }
    
    playSound(name, options = {}) {
        const sound = this.sounds.get(name);
        if (sound) {
            if (options.position) {
                sound.position.copy(options.position);
                sound.setRefDistance(options.refDistance || 1);
            }
            
            sound.setVolume((options.volume || 1) * this.masterVolume);
            sound.play();
        }
    }
    
    stopSound(name) {
        const sound = this.sounds.get(name);
        if (sound) {
            sound.stop();
        }
    }
    
    setMasterVolume(volume) {
        this.masterVolume = THREE.MathUtils.clamp(volume, 0, 1);
    }
    
    dispose() {
        this.sounds.forEach(sound => {
            sound.stop();
            sound.disconnect();
        });
        this.sounds.clear();
        
        if (this.audioContext) {
            this.audioContext.close();
        }
        
        super.dispose();
    }
}

/**
 * Performance System - Monitor and optimize performance
 */
class PerformanceSystem extends System {
    constructor() {
        super('Performance');
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fps = 0;
        this.frameTime = 0;
        this.memoryUsage = 0;
        this.drawCalls = 0;
        this.triangles = 0;
        this.adaptiveQuality = true;
        this.targetFPS = 60;
        this.qualityLevel = 1;
    }
    
    update(deltaTime) {
        if (!this.enabled) return;
        
        this.updateStats();
        this.optimizePerformance();
    }
    
    updateStats() {
        this.frameCount++;
        const currentTime = performance.now();
        const elapsed = currentTime - this.lastTime;
        
        if (elapsed >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / elapsed);
            this.frameCount = 0;
            this.lastTime = currentTime;
        }
        
        this.frameTime = deltaTime * 1000;
        
        // Get memory usage if available
        if (performance.memory) {
            this.memoryUsage = performance.memory.usedJSHeapSize / 1048576; // MB
        }
        
        // Get renderer stats
        if (this.engine.renderer && this.engine.renderer.info) {
            this.drawCalls = this.engine.renderer.info.render.calls;
            this.triangles = this.engine.renderer.info.render.triangles;
        }
    }
    
    optimizePerformance() {
        if (!this.adaptiveQuality) return;
        
        // Adjust quality based on performance
        if (this.fps < this.targetFPS * 0.8) {
            this.decreaseQuality();
        } else if (this.fps > this.targetFPS * 1.2) {
            this.increaseQuality();
        }
    }
    
    decreaseQuality() {
        if (this.qualityLevel > 0) {
            this.qualityLevel--;
            this.applyQualitySettings();
        }
    }
    
    increaseQuality() {
        if (this.qualityLevel < 2) {
            this.qualityLevel++;
            this.applyQualitySettings();
        }
    }
    
    applyQualitySettings() {
        const settings = {
            0: { // Low
                pixelRatio: 1,
                shadows: false,
                antialias: false
            },
            1: { // Medium
                pixelRatio: Math.min(window.devicePixelRatio, 1.5),
                shadows: true,
                antialias: true
            },
            2: { // High
                pixelRatio: window.devicePixelRatio,
                shadows: true,
                antialias: true
            }
        };
        
        const setting = settings[this.qualityLevel];
        
        if (this.engine.renderer) {
            this.engine.renderer.setPixelRatio(setting.pixelRatio);
            this.engine.renderer.shadowMap.enabled = setting.shadows;
            this.engine.renderer.antialias = setting.antialias;
        }
    }
    
    getStats() {
        return {
            fps: this.fps,
            frameTime: this.frameTime,
            memoryUsage: this.memoryUsage,
            drawCalls: this.drawCalls,
            triangles: this.triangles,
            qualityLevel: this.qualityLevel
        };
    }
    
    dispose() {
        super.dispose();
    }
}

export {
    System,
    InputSystem,
    PhysicsSystem,
    AudioSystem,
    PerformanceSystem
};
