// Three.js Clothing System Library
// Outfit management, cloth physics, and character customization

import * as THREE from 'three';

export function createOutfitSystem(model) {
    // Dynamic outfit changing system
    const outfits = {
        casual: new THREE.MeshStandardMaterial({ color: 0x87CEEB }),
        formal: new THREE.MeshStandardMaterial({ color: 0x000000 }),
        sport: new THREE.MeshStandardMaterial({ color: 0xFF5733 }),
        business: new THREE.MeshStandardMaterial({ color: 0x4B0082 })
    };
    
    let currentOutfit = 'casual';
    const outfitHistory = [];
    
    function changeOutfit(outfitType) {
        if (!outfits[outfitType]) {
            console.warn(`Outfit type ${outfitType} not found`);
            return;
        }
        
        // Store current outfit in history
        outfitHistory.push({
            type: currentOutfit,
            timestamp: Date.now()
        });
        
        // Apply new outfit
        model.material = outfits[outfitType];
        currentOutfit = outfitType;
        
        // Emit change event
        const event = new CustomEvent('outfitChanged', {
            detail: { outfitType, previousOutfit: currentOutfit }
        });
        document.dispatchEvent(event);
    }
    
    function cycleOutfit() {
        const outfitTypes = Object.keys(outfits);
        const currentIndex = outfitTypes.indexOf(currentOutfit);
        const nextIndex = (currentIndex + 1) % outfitTypes.length;
        changeOutfit(outfitTypes[nextIndex]);
    }
    
    function randomOutfit() {
        const outfitTypes = Object.keys(outfits);
        const randomIndex = Math.floor(Math.random() * outfitTypes.length);
        changeOutfit(outfitTypes[randomIndex]);
    }
    
    function addCustomOutfit(name, material) {
        outfits[name] = material;
    }
    
    return {
        changeOutfit,
        cycleOutfit,
        randomOutfit,
        addCustomOutfit,
        getCurrentOutfit: () => currentOutfit,
        getOutfitHistory: () => outfitHistory,
        getAvailableOutfits: () => Object.keys(outfits)
    };
}

export function createClothRiggingSystem() {
    // Advanced cloth rigging for character models
    const loader = new THREE.GLTFLoader();
    
    function loadClothModel(modelPath, skeletonHelper) {
        return new Promise((resolve, reject) => {
            loader.load(modelPath, (gltf) => {
                const cloth = gltf.scene;
                const skeleton = gltf.scene.skeleton || gltf.animations[0];
                
                // Attach skeleton helper for debugging
                if (skeletonHelper && skeleton) {
                    const helper = new THREE.SkeletonHelper(skeleton);
                    cloth.add(helper);
                }
                
                // Setup cloth physics
                setupClothPhysics(cloth);
                
                resolve({ cloth, skeleton });
            }, undefined, reject);
        });
    }
    
    function setupClothPhysics(cloth) {
        const clothMesh = cloth.children.find(child => child.isMesh);
        if (!clothMesh) return;
        
        // Add wind effect
        const windForce = new THREE.Vector3();
        
        function animateCloth() {
            const time = Date.now() * 0.001;
            
            // Simulate wind
            windForce.x = Math.sin(time) * 0.5;
            windForce.z = Math.cos(time * 0.7) * 0.3;
            
            // Apply wind to cloth vertices
            const positions = clothMesh.geometry.attributes.position.array;
            const originalPositions = clothMesh.geometry.attributes.position.array.slice();
            
            for (let i = 0; i < positions.length; i += 3) {
                const x = originalPositions[i];
                const y = originalPositions[i + 1];
                const z = originalPositions[i + 2];
                
                // Add wind influence
                const windInfluence = Math.sin(y * 0.1 + time) * 0.1;
                positions[i] = x + windForce.x * windInfluence;
                positions[i + 2] = z + windForce.z * windInfluence;
            }
            
            clothMesh.geometry.attributes.position.needsUpdate = true;
            clothMesh.geometry.computeVertexNormals();
        }
        
        return animateCloth;
    }
    
    return {
        loadClothModel,
        setupClothPhysics
    };
}

export function createLayeredClothingSystem() {
    // Multi-layered clothing with physics
    const layers = [];
    
    function createClothingLayer(name, material, order = 0) {
        const layer = {
            name,
            material,
            order,
            visible: true,
            mesh: null
        };
        
        layers.push(layer);
        return layer;
    }
    
    function attachLayerToModel(layer, model) {
        // Create clothing mesh based on model geometry
        const geometry = model.geometry.clone();
        const mesh = new THREE.Mesh(geometry, layer.material);
        
        // Offset slightly to avoid z-fighting
        mesh.position.z = layer.order * 0.001;
        
        layer.mesh = mesh;
        model.add(mesh);
        
        return mesh;
    }
    
    function updateLayerOrder(layerName, newOrder) {
        const layer = layers.find(l => l.name === layerName);
        if (layer && layer.mesh) {
            layer.order = newOrder;
            layer.mesh.position.z = newOrder * 0.001;
        }
    }
    
    function toggleLayerVisibility(layerName) {
        const layer = layers.find(l => l.name === layerName);
        if (layer && layer.mesh) {
            layer.visible = !layer.visible;
            layer.mesh.visible = layer.visible;
        }
    }
    
    function setupLayeredClothing(baseModel) {
        layers.forEach(layer => {
            attachLayerToModel(layer, baseModel);
        });
    }
    
    return {
        createClothingLayer,
        attachLayerToModel,
        updateLayerOrder,
        toggleLayerVisibility,
        setupLayeredClothing,
        getLayers: () => layers
    };
}

export function createClothingAnimationSystem() {
    // Clothing-specific animations
    const animations = {
        walk: createWalkAnimation(),
        run: createRunAnimation(),
        jump: createJumpAnimation(),
        idle: createIdleAnimation()
    };
    
    function createWalkAnimation() {
        const walkCycle = new THREE.AnimationClip('walk', 1, [
            new THREE.VectorKeyframeTrack('.position', [0, 0.5, 1], [
                0, 0, 0,    // Start position
                0, 0.1, 0,  // Up position
                0, 0, 0     // End position
            ]),
            new THREE.RotationKeyframeTrack('.rotation', [0, 0.25, 0.5, 0.75, 1], [
                0, 0, 0,    // Start rotation
                0.1, 0, 0,  // Slight rotation
                0, 0.1, 0,  // Counter rotation
                -0.1, 0, 0, // Counter rotation
                0, 0, 0     // End rotation
            ])
        ]);
        return walkCycle;
    }
    
    function createRunAnimation() {
        const runCycle = new THREE.AnimationClip('run', 0.8, [
            new THREE.VectorKeyframeTrack('.position', [0, 0.2, 0.4, 0.6, 0.8], [
                0, 0, 0,    // Start
                0, 0.2, 0,  // Higher bounce
                0, 0, 0,    // Mid
                0, 0.15, 0, // Lower bounce
                0, 0, 0     // End
            ])
        ]);
        return runCycle;
    }
    
    function createJumpAnimation() {
        const jumpCycle = new THREE.AnimationClip('jump', 1.5, [
            new THREE.VectorKeyframeTrack('.position', [0, 0.3, 0.75, 1.5], [
                0, 0, 0,    // Start
                0, 1, 0,    // Peak
                0, 0.5, 0,  // Falling
                0, 0, 0     // Landed
            ])
        ]);
        return jumpCycle;
    }
    
    function createIdleAnimation() {
        const idleCycle = new THREE.AnimationClip('idle', 2, [
            new THREE.RotationKeyframeTrack('.rotation', [0, 0.5, 1, 1.5, 2], [
                0, 0, 0,    // Start
                0, 0.05, 0, // Slight lean
                0, 0, 0,    // Center
                0, -0.05, 0, // Lean other way
                0, 0, 0     // Back to center
            ])
        ]);
        return idleCycle;
    }
    
    function playAnimation(animationName, mixer) {
        const animation = animations[animationName];
        if (!animation) {
            console.warn(`Animation ${animationName} not found`);
            return;
        }
        
        const action = mixer.clipAction(animation);
        action.reset();
        action.play();
        
        return action;
    }
    
    return {
        animations,
        playAnimation,
        createWalkAnimation,
        createRunAnimation,
        createJumpAnimation,
        createIdleAnimation
    };
}

export function createClothingPhysicsIntegration() {
    // Integration with external physics engines
    let physicsWorld = null;
    
    function initializeAmmo() {
        return new Promise((resolve) => {
            Ammo().then(() => {
                const collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
                const dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
                const overlappingPairCache = new Ammo.btDbvtBroadphase();
                const solver = new Ammo.btSequentialImpulseConstraintSolver();
                const dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(
                    dispatcher, 
                    overlappingPairCache, 
                    solver, 
                    collisionConfiguration
                );
                
                dynamicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));
                physicsWorld = dynamicsWorld;
                
                resolve(dynamicsWorld);
            });
        });
    }
    
    function createClothBody(geometry, position) {
        if (!physicsWorld) return null;
        
        const transform = new Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin(new Ammo.btVector3(position.x, position.y, position.z));
        
        const mass = 1;
        const motionState = new Ammo.btMotionState();
        const localInertia = new Ammo.btVector3(0, 0, 0);
        
        const shape = new Ammo.btBoxShape(
            new Ammo.btVector3(1, 1, 1)
        );
        
        shape.calculateLocalInertia(mass, localInertia);
        
        const body = new Ammo.btRigidBody(
            mass, 
            motionState, 
            transform, 
            localInertia, 
            shape
        );
        
        physicsWorld.addRigidBody(body);
        return body;
    }
    
    function updateClothPhysics(clothBodies) {
        if (!physicsWorld) return;
        
        // Simple physics update
        clothBodies.forEach(body => {
            const motionState = body.getMotionState();
            const transform = body.getWorldTransform();
            
            // Apply gravity
            const gravity = physicsWorld.getGravity();
            motionState.setLinearVelocity(gravity);
            
            // Update physics world
            physicsWorld.stepSimulation(1/60, 10);
        });
    }
    
    return {
        initializeAmmo,
        createClothBody,
        updateClothPhysics,
        getPhysicsWorld: () => physicsWorld
    };
}
