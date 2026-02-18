/**
 * WebXR Support - VR/AR functionality for Web3D Framework
 */

import * as THREE from 'three';

/**
 * WebXR Manager
 */
class WebXRManager {
    constructor() {
        this.renderer = null;
        this.session = null;
        this.sessionMode = 'immersive-vr';
        this.referenceSpace = null;
        this.viewerSpace = null;
        this.isSupported = false;
        this.isSessionActive = false;
        
        // Controllers
        this.controllers = new Map();
        this.controllerGrips = new Map();
        
        // Callbacks
        this.onSessionStart = null;
        this.onSessionEnd = null;
        this.onControllerConnected = null;
        this.onControllerDisconnected = null;
    }
    
    async init(renderer) {
        this.renderer = renderer;
        
        // Check WebXR support
        if ('xr' in navigator) {
            this.isSupported = await navigator.xr.isSessionSupported(this.sessionMode);
        }
        
        return this.isSupported;
    }
    
    async startSession(mode = 'immersive-vr') {
        if (!this.isSupported) {
            throw new Error('WebXR is not supported');
        }
        
        try {
            this.sessionMode = mode;
            this.session = await navigator.xr.requestSession(mode, {
                optionalFeatures: [
                    'local-floor',
                    'bounded-floor',
                    'hand-tracking',
                    'layers'
                ]
            });
            
            this.setupSession();
            this.isSessionActive = true;
            
            if (this.onSessionStart) {
                this.onSessionStart(this.session);
            }
            
            return this.session;
        } catch (error) {
            console.error('Failed to start WebXR session:', error);
            throw error;
        }
    }
    
    setupSession() {
        // Configure renderer for XR
        this.renderer.xr.setSession(this.session);
        this.renderer.xr.setReferenceSpaceType('local-floor');
        
        // Setup reference space
        this.session.requestReferenceSpace('local-floor').then(space => {
            this.referenceSpace = space;
        });
        
        // Setup viewer space
        this.session.requestReferenceSpace('viewer').then(space => {
            this.viewerSpace = space;
        });
        
        // Setup controllers
        this.setupControllers();
        
        // Handle session end
        this.session.addEventListener('end', () => this.onSessionEnded());
    }
    
    setupControllers() {
        // Handle controller connections
        this.session.addEventListener('inputsourceschange', (event) => {
            event.added.forEach(inputSource => {
                if (inputSource.gamepad) {
                    this.addController(inputSource);
                }
            });
            
            event.removed.forEach(inputSource => {
                if (inputSource.gamepad) {
                    this.removeController(inputSource);
                }
            });
        });
    }
    
    addController(inputSource) {
        const controller = this.renderer.xr.getController(inputSource);
        controller.userData.inputSource = inputSource;
        
        // Add controller model
        this.fetchControllerProfile(inputSource).then(profile => {
            if (profile && profile.layouts) {
                this.loadControllerModel(controller, profile);
            }
        });
        
        // Add controller grip
        const controllerGrip = this.renderer.xr.getControllerGrip(inputSource);
        controllerGrip.userData.inputSource = inputSource;
        
        this.controllers.set(inputSource.handedness, controller);
        this.controllerGrips.set(inputSource.handedness, controllerGrip);
        
        if (this.onControllerConnected) {
            this.onControllerConnected(controller, inputSource);
        }
    }
    
    removeController(inputSource) {
        const controller = this.controllers.get(inputSource.handedness);
        const controllerGrip = this.controllerGrips.get(inputSource.handedness);
        
        if (controller) {
            this.renderer.xr.removeController(controller);
            this.controllers.delete(inputSource.handedness);
        }
        
        if (controllerGrip) {
            this.renderer.xr.removeControllerGrip(controllerGrip);
            this.controllerGrips.delete(inputSource.handedness);
        }
        
        if (this.onControllerDisconnected) {
            this.onControllerDisconnected(inputSource);
        }
    }
    
    async fetchControllerProfile(inputSource) {
        try {
            const profile = await navigator.xr.requestDeviceProfile([inputSource.profiles[0]]);
            return profile;
        } catch (error) {
            console.warn('Failed to fetch controller profile:', error);
            return null;
        }
    }
    
    loadControllerModel(controller, profile) {
        // Load controller model based on profile
        const layoutName = profile.layouts[profile.layoutId];
        const layout = profile.layouts[layoutName];
        
        if (layout && layout.assetPath) {
            // Load GLB model
            const loader = new THREE.GLTFLoader();
            loader.load(layout.assetPath, (gltf) => {
                const model = gltf.scene;
                model.traverse(child => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                
                controller.add(model);
                controller.userData.model = model;
            });
        }
    }
    
    getController(handedness) {
        return this.controllers.get(handedness);
    }
    
    getControllerPosition(handedness) {
        const controller = this.controllers.get(handedness);
        if (controller) {
            return controller.position.clone();
        }
        return new THREE.Vector3();
    }
    
    getControllerQuaternion(handedness) {
        const controller = this.controllers.get(handedness);
        if (controller) {
            return controller.quaternion.clone();
        }
        return new THREE.Quaternion();
    }
    
    isButtonPressed(handedness, buttonIndex) {
        const controller = this.controllers.get(handedness);
        if (controller && controller.userData.inputSource && controller.userData.inputSource.gamepad) {
            return controller.userData.inputSource.gamepad.buttons[buttonIndex].pressed;
        }
        return false;
    }
    
    getAxisValue(handedness, axisIndex) {
        const controller = this.controllers.get(handedness);
        if (controller && controller.userData.inputSource && controller.userData.inputSource.gamepad) {
            return controller.userData.inputSource.gamepad.axes[axisIndex];
        }
        return 0;
    }
    
    hapticPulse(handedness, intensity = 1.0, duration = 100) {
        const controller = this.controllers.get(handedness);
        if (controller && controller.userData.inputSource) {
            const actuator = controller.userData.inputSource.gamepad?.hapticActuators?.[0];
            if (actuator) {
                actuator.pulse(intensity, duration);
            }
        }
    }
    
    onSessionEnded() {
        this.isSessionActive = false;
        this.session = null;
        this.referenceSpace = null;
        this.viewerSpace = null;
        
        // Clear controllers
        this.controllers.clear();
        this.controllerGrips.clear();
        
        if (this.onSessionEnd) {
            this.onSessionEnd();
        }
    }
    
    endSession() {
        if (this.session) {
            this.session.end();
        }
    }
    
    dispose() {
        this.endSession();
        this.renderer = null;
    }
}

/**
 * VR UI System
 */
class VRUISystem {
    constructor() {
        this.uiElements = new Map();
        this.raycaster = new THREE.Raycaster();
        this.intersectedObjects = [];
        this.selectedObject = null;
        this.cursor = null;
        this.reticle = null;
    }
    
    init(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.createCursor();
        this.createReticle();
    }
    
    createCursor() {
        const geometry = new THREE.SphereGeometry(0.01, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.cursor = new THREE.Mesh(geometry, material);
        this.cursor.visible = false;
        this.scene.add(this.cursor);
    }
    
    createReticle() {
        const geometry = new THREE.RingGeometry(0.02, 0.04, 32);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x00ff00, 
            transparent: true, 
            opacity: 0.5 
        });
        this.reticle = new THREE.Mesh(geometry, material);
        this.reticle.visible = false;
        this.scene.add(this.reticle);
    }
    
    addUIElement(id, object, callbacks = {}) {
        object.userData.isUIElement = true;
        object.userData.callbacks = callbacks;
        object.userData.hovered = false;
        
        this.uiElements.set(id, object);
        return object;
    }
    
    removeUIElement(id) {
        const element = this.uiElements.get(id);
        if (element) {
            this.scene.remove(element);
            this.uiElements.delete(id);
        }
    }
    
    update(controller) {
        if (!controller) return;
        
        // Update raycaster
        this.raycaster.setFromController(controller);
        
        // Check for intersections
        const intersects = this.raycaster.intersectObjects(
            Array.from(this.uiElements.values()),
            true
        );
        
        // Handle hover states
        this.handleHover(intersects);
        
        // Handle selection
        this.handleSelection(controller, intersects);
        
        // Update cursor position
        this.updateCursor(controller, intersects);
    }
    
    handleHover(intersects) {
        // Clear previous hover states
        this.intersectedObjects.forEach(object => {
            if (object.userData.isUIElement) {
                object.userData.hovered = false;
                if (object.userData.callbacks.onHoverEnd) {
                    object.userData.callbacks.onHoverEnd(object);
                }
            }
        });
        
        this.intersectedObjects = [];
        
        // Set new hover states
        for (let intersect of intersects) {
            let object = intersect.object;
            while (object.parent && !object.userData.isUIElement) {
                object = object.parent;
            }
            
            if (object.userData.isUIElement) {
                object.userData.hovered = true;
                this.intersectedObjects.push(object);
                
                if (object.userData.callbacks.onHoverStart) {
                    object.userData.callbacks.onHoverStart(object, intersect);
                }
                break; // Only handle first intersected UI element
            }
        }
    }
    
    handleSelection(controller, intersects) {
        const isPressed = controller.userData.inputSource?.gamepad?.buttons[0]?.pressed;
        
        if (isPressed && !this.selectedObject) {
            // Start selection
            for (let intersect of intersects) {
                let object = intersect.object;
                while (object.parent && !object.userData.isUIElement) {
                    object = object.parent;
                }
                
                if (object.userData.isUIElement) {
                    this.selectedObject = object;
                    if (object.userData.callbacks.onSelectStart) {
                        object.userData.callbacks.onSelectStart(object, intersect);
                    }
                    break;
                }
            }
        } else if (!isPressed && this.selectedObject) {
            // End selection
            if (this.selectedObject.userData.callbacks.onSelectEnd) {
                this.selectedObject.userData.callbacks.onSelectEnd(this.selectedObject);
            }
            this.selectedObject = null;
        }
    }
    
    updateCursor(controller, intersects) {
        if (intersects.length > 0) {
            const intersect = intersects[0];
            this.cursor.position.copy(intersect.point);
            this.cursor.visible = true;
            
            // Position reticle
            this.reticle.position.copy(intersect.point);
            this.reticle.lookAt(this.camera.position);
            this.reticle.visible = true;
        } else {
            // Position cursor at fixed distance
            const direction = new THREE.Vector3(0, 0, -1);
            direction.applyQuaternion(controller.quaternion);
            const position = controller.position.clone().add(direction.multiplyScalar(2));
            
            this.cursor.position.copy(position);
            this.cursor.visible = true;
            this.reticle.visible = false;
        }
    }
    
    dispose() {
        if (this.cursor) this.scene.remove(this.cursor);
        if (this.reticle) this.scene.remove(this.reticle);
        
        this.uiElements.clear();
        this.intersectedObjects = [];
        this.selectedObject = null;
    }
}

/**
 * AR System
 */
class ARSystem {
    constructor() {
        this.renderer = null;
        this.session = null;
        this.anchors = new Map();
        this.detectedPlanes = new Map();
        this.hitTestSource = null;
        this.hitTestSourceInitialized = false;
    }
    
    async init(renderer) {
        this.renderer = renderer;
        
        // Check AR support
        if ('xr' in navigator) {
            const isSupported = await navigator.xr.isSessionSupported('immersive-ar');
            if (!isSupported) {
                throw new Error('AR is not supported');
            }
        }
        
        return true;
    }
    
    async startARSession() {
        try {
            this.session = await navigator.xr.requestSession('immersive-ar', {
                requiredFeatures: ['local', 'hit-test'],
                optionalFeatures: ['dom-overlay', 'planes', 'anchors'],
                domOverlay: { root: document.body }
            });
            
            this.setupARSession();
            return this.session;
        } catch (error) {
            console.error('Failed to start AR session:', error);
            throw error;
        }
    }
    
    setupARSession() {
        this.renderer.xr.setSession(this.session);
        this.renderer.xr.setReferenceSpaceType('local');
        
        // Setup hit test
        this.session.requestReferenceSpace('viewer').then(space => {
            this.session.requestHitTestSource({ space: space }).then(source => {
                this.hitTestSource = source;
                this.hitTestSourceInitialized = true;
            });
        });
        
        // Handle plane detection
        this.session.addEventListener('planesdetected', (event) => {
            event.planes.forEach(plane => {
                this.detectedPlanes.set(plane.id, plane);
            });
        });
        
        // Handle anchors
        this.session.addEventListener('anchoradded', (event) => {
            this.anchors.set(event.anchor.id, event.anchor);
        });
        
        this.session.addEventListener('anchorremoved', (event) => {
            this.anchors.delete(event.anchor.id);
        });
    }
    
    performHitTest(frame) {
        if (!this.hitTestSourceInitialized || !this.hitTestSource) return null;
        
        const hitTestResults = frame.getHitTestResults(this.hitTestSource);
        
        if (hitTestResults.length > 0) {
            const hit = hitTestResults[0];
            const pose = hit.getPose(this.renderer.xr.getReferenceSpace());
            
            return {
                position: new THREE.Vector3(
                    pose.transform.position.x,
                    pose.transform.position.y,
                    pose.transform.position.z
                ),
                quaternion: new THREE.Quaternion(
                    pose.transform.orientation.x,
                    pose.transform.orientation.y,
                    pose.transform.orientation.z,
                    pose.transform.orientation.w
                )
            };
        }
        
        return null;
    }
    
    createAnchor(position, quaternion) {
        if (this.session) {
            const anchor = new THREE.Object3D();
            anchor.position.copy(position);
            anchor.quaternion.copy(quaternion);
            
            // Create XR anchor
            this.session.requestAnchor(position, quaternion).then(xrAnchor => {
                anchor.userData.xrAnchor = xrAnchor;
            });
            
            return anchor;
        }
        return null;
    }
    
    getDetectedPlanes() {
        return Array.from(this.detectedPlanes.values());
    }
    
    getAnchors() {
        return Array.from(this.anchors.values());
    }
    
    dispose() {
        if (this.hitTestSource) {
            this.hitTestSource.cancel();
            this.hitTestSource = null;
        }
        
        if (this.session) {
            this.session.end();
        }
        
        this.anchors.clear();
        this.detectedPlanes.clear();
    }
}

export {
    WebXRManager,
    VRUISystem,
    ARSystem
};
