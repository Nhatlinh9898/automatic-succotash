/**
 * Component System - Extensible component architecture for Web3D Framework
 */

import * as THREE from 'three';

/**
 * Base Component class
 */
class Component {
    constructor(name) {
        this.name = name;
        this.enabled = true;
        this.entity = null;
        this.engine = null;
    }
    
    /**
     * Initialize component
     */
    init(entity, engine) {
        this.entity = entity;
        this.engine = engine;
    }
    
    /**
     * Update component (called every frame)
     */
    update(deltaTime) {
        // Override in subclasses
    }
    
    /**
     * Enable/disable component
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    
    /**
     * Dispose component
     */
    dispose() {
        this.entity = null;
        this.engine = null;
    }
}

/**
 * Transform Component - Handles position, rotation, scale
 */
class TransformComponent extends Component {
    constructor(position = new THREE.Vector3(), rotation = new THREE.Euler(), scale = new THREE.Vector3(1, 1, 1)) {
        super('Transform');
        this.position = position.clone();
        this.rotation = rotation.clone();
        this.scale = scale.clone();
        this.object3D = null;
    }
    
    init(entity, engine) {
        super.init(entity, engine);
        this.object3D = new THREE.Group();
        this.object3D.position.copy(this.position);
        this.object3D.rotation.copy(this.rotation);
        this.object3D.scale.copy(this.scale);
        engine.scene.add(this.object3D);
    }
    
    setPosition(x, y, z) {
        if (typeof x === 'object') {
            this.position.copy(x);
        } else {
            this.position.set(x, y, z);
        }
        if (this.object3D) this.object3D.position.copy(this.position);
    }
    
    setRotation(x, y, z) {
        if (typeof x === 'object') {
            this.rotation.copy(x);
        } else {
            this.rotation.set(x, y, z);
        }
        if (this.object3D) this.object3D.rotation.copy(this.rotation);
    }
    
    setScale(x, y, z) {
        if (typeof x === 'object') {
            this.scale.copy(x);
        } else {
            this.scale.set(x, y, z);
        }
        if (this.object3D) this.object3D.scale.copy(this.scale);
    }
    
    dispose() {
        if (this.object3D && this.engine.scene) {
            this.engine.scene.remove(this.object3D);
        }
        super.dispose();
    }
}

/**
 * Mesh Component - Handles 3D geometry and materials
 */
class MeshComponent extends Component {
    constructor(geometry, material) {
        super('Mesh');
        this.geometry = geometry;
        this.material = material;
        this.mesh = null;
        this.castShadow = true;
        this.receiveShadow = true;
    }
    
    init(entity, engine) {
        super.init(entity, engine);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.castShadow = this.castShadow;
        this.mesh.receiveShadow = this.receiveShadow;
        
        // Add to transform if available
        const transform = entity.components.get('Transform');
        if (transform && transform.object3D) {
            transform.object3D.add(this.mesh);
        } else {
            engine.scene.add(this.mesh);
        }
    }
    
    setGeometry(geometry) {
        if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.geometry = geometry;
        }
        this.geometry = geometry;
    }
    
    setMaterial(material) {
        if (this.mesh) {
            if (Array.isArray(this.mesh.material)) {
                this.mesh.material.forEach(m => m.dispose());
            } else {
                this.mesh.material.dispose();
            }
            this.mesh.material = material;
        }
        this.material = material;
    }
    
    setVisible(visible) {
        if (this.mesh) {
            this.mesh.visible = visible;
        }
    }
    
    dispose() {
        if (this.mesh) {
            if (this.mesh.geometry) this.mesh.geometry.dispose();
            if (this.mesh.material) {
                if (Array.isArray(this.mesh.material)) {
                    this.mesh.material.forEach(m => m.dispose());
                } else {
                    this.mesh.material.dispose();
                }
            }
            
            const transform = this.entity.components.get('Transform');
            if (transform && transform.object3D) {
                transform.object3D.remove(this.mesh);
            } else if (this.engine.scene) {
                this.engine.scene.remove(this.mesh);
            }
        }
        super.dispose();
    }
}

/**
 * Animation Component - Handles object animations
 */
class AnimationComponent extends Component {
    constructor() {
        super('Animation');
        this.mixer = null;
        this.actions = new Map();
        this.animations = [];
        this.currentAction = null;
    }
    
    init(entity, engine) {
        super.init(entity, engine);
        this.mixer = new THREE.AnimationMixer(this.getObject3D());
    }
    
    getObject3D() {
        const transform = this.entity.components.get('Transform');
        return transform ? transform.object3D : null;
    }
    
    loadAnimations(animations) {
        this.animations = animations;
        animations.forEach((clip, index) => {
            const action = this.mixer.clipAction(clip);
            this.actions.set(clip.name || `animation_${index}`, action);
        });
    }
    
    playAnimation(name, loop = true) {
        const action = this.actions.get(name);
        if (action) {
            if (this.currentAction) {
                this.currentAction.fadeOut(0.5);
            }
            action.reset();
            action.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce);
            action.fadeIn(0.5);
            action.play();
            this.currentAction = action;
        }
    }
    
    stopAnimation(name) {
        const action = this.actions.get(name);
        if (action) {
            action.stop();
        }
    }
    
    update(deltaTime) {
        if (this.mixer && this.enabled) {
            this.mixer.update(deltaTime);
        }
    }
    
    dispose() {
        if (this.mixer) {
            this.mixer.stopAllAction();
            this.mixer.uncacheRoot(this.getObject3D());
        }
        super.dispose();
    }
}

/**
 * Physics Component - Basic physics simulation
 */
class PhysicsComponent extends Component {
    constructor(options = {}) {
        super('Physics');
        this.velocity = new THREE.Vector3();
        this.acceleration = new THREE.Vector3();
        this.mass = options.mass || 1;
        this.friction = options.friction || 0.1;
        this.gravity = options.gravity !== undefined ? options.gravity : true;
        this.useGravity = true;
        this.grounded = false;
    }
    
    init(entity, engine) {
        super.init(entity, engine);
        const physicsSystem = engine.getSystem('Physics');
        if (physicsSystem) {
            physicsSystem.addEntity(this.entity);
        }
    }
    
    applyForce(force) {
        this.acceleration.add(force.clone().divideScalar(this.mass));
    }
    
    update(deltaTime) {
        if (!this.enabled) return;
        
        // Apply gravity
        if (this.useGravity && this.gravity) {
            this.applyForce(new THREE.Vector3(0, -9.81 * this.mass, 0));
        }
        
        // Update velocity
        this.velocity.add(this.acceleration.multiplyScalar(deltaTime));
        
        // Apply friction
        this.velocity.multiplyScalar(1 - this.friction * deltaTime);
        
        // Update position
        const transform = this.entity.components.get('Transform');
        if (transform) {
            transform.position.add(this.velocity.clone().multiplyScalar(deltaTime));
            transform.setPosition(transform.position);
        }
        
        // Reset acceleration
        this.acceleration.set(0, 0, 0);
    }
    
    dispose() {
        const physicsSystem = this.engine.getSystem('Physics');
        if (physicsSystem) {
            physicsSystem.removeEntity(this.entity);
        }
        super.dispose();
    }
}

/**
 * Camera Component - Camera controls
 */
class CameraComponent extends Component {
    constructor(type = 'perspective') {
        super('Camera');
        this.type = type;
        this.camera = null;
        this.target = new THREE.Vector3();
        this.followDistance = 10;
        this.followHeight = 5;
    }
    
    init(entity, engine) {
        super.init(entity, engine);
        
        if (this.type === 'perspective') {
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
        
        // Replace engine camera
        engine.camera = this.camera;
    }
    
    followTarget(targetEntity) {
        const targetTransform = targetEntity.components.get('Transform');
        if (targetTransform) {
            this.target.copy(targetTransform.position);
            
            // Calculate camera position
            const offset = new THREE.Vector3(0, this.followHeight, this.followDistance);
            this.camera.position.copy(this.target).add(offset);
            this.camera.lookAt(this.target);
        }
    }
    
    update(deltaTime) {
        if (this.enabled && this.camera) {
            // Update camera logic here
        }
    }
    
    dispose() {
        super.dispose();
    }
}

export {
    Component,
    TransformComponent,
    MeshComponent,
    AnimationComponent,
    PhysicsComponent,
    CameraComponent
};
