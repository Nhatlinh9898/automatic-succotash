// Three.js AI Integration Library
// AI-powered interactions and smart behaviors

import * as THREE from 'three';

export function createAIChatIntegration(scene, model) {
    // AI chat integration for model responses
    const chatHistory = [];
    
    async function fetchChatResponse(message) {
        const response = await fetch('https://api.example.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                message: message,
                history: chatHistory 
            })
        });
        const chatResponse = await response.json();
        
        // Add to history
        chatHistory.push({ 
            user: message, 
            ai: chatResponse.response,
            timestamp: Date.now() 
        });
        
        // Make model react to AI response
        reactToAIResponse(chatResponse);
        
        return chatResponse;
    }

    function reactToAIResponse(response) {
        switch(response.sentiment) {
            case 'happy':
                animateHappy(model);
                break;
            case 'sad':
                animateSad(model);
                break;
            case 'excited':
                animateExcited(model);
                break;
            case 'angry':
                animateAngry(model);
                break;
            default:
                animateNeutral(model);
        }
    }

    function animateHappy(object) {
        // Happy animation - jump and spin
        const jumpHeight = 2;
        const spinSpeed = 0.1;
        
        object.position.y = jumpHeight;
        object.rotation.y += spinSpeed;
        
        setTimeout(() => {
            object.position.y = 0;
        }, 500);
    }

    function animateSad(object) {
        // Sad animation - slump down
        object.rotation.x = Math.PI / 6;
        object.position.y = -0.5;
    }

    function animateExcited(object) {
        // Excited animation - rapid movement
        const time = Date.now() * 0.01;
        object.position.y = Math.sin(time) * 0.5;
        object.rotation.z = Math.cos(time) * 0.2;
    }

    function animateAngry(object) {
        // Angry animation - shake
        const shakeIntensity = 0.1;
        object.position.x = (Math.random() - 0.5) * shakeIntensity;
        object.position.z = (Math.random() - 0.5) * shakeIntensity;
    }

    function animateNeutral(object) {
        // Return to neutral pose
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0);
    }

    return { 
        fetchChatResponse, 
        getChatHistory: () => chatHistory 
    };
}

export function createSmartMovement(scene, model) {
    // AI-powered intelligent movement
    const waypoints = [];
    let currentTarget = 0;
    let isMoving = false;

    function addWaypoint(position) {
        waypoints.push(new THREE.Vector3(position));
    }

    function intelligentMovement(target) {
        const direction = new THREE.Vector3()
            .subVectors(target.position, model.position)
            .normalize();
        
        // Check for obstacles (simplified)
        const hasObstacle = checkForObstacles(direction);
        
        if (hasObstacle) {
            // Find alternative path
            const alternativeDirection = findAlternativePath(direction);
            model.position.add(alternativeDirection.multiplyScalar(0.1));
        } else {
            // Move towards target
            model.position.add(direction.multiplyScalar(0.1));
        }
        
        // Make model face movement direction
        model.lookAt(target.position);
    }

    function checkForObstacles(direction) {
        // Simplified obstacle detection
        const raycaster = new THREE.Raycaster(
            model.position,
            direction,
            0.1,
            10
        );
        
        const intersects = raycaster.intersectObjects(scene.children);
        return intersects.length > 0;
    }

    function findAlternativePath(originalDirection) {
        // Simple alternative path finding
        const angles = [Math.PI/4, -Math.PI/4, Math.PI/2, -Math.PI/2];
        
        for (let angle of angles) {
            const newDirection = originalDirection.clone();
            newDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
            
            if (!checkForObstacles(newDirection)) {
                return newDirection;
            }
        }
        
        return originalDirection; // Fallback
    }

    function followWaypoints() {
        if (waypoints.length === 0) return;
        
        const target = waypoints[currentTarget];
        const distance = model.position.distanceTo(target);
        
        if (distance < 0.5) {
            // Reached waypoint
            currentTarget = (currentTarget + 1) % waypoints.length;
        } else {
            intelligentMovement({ position: target });
        }
    }

    return { 
        addWaypoint, 
        followWaypoints,
        intelligentMovement 
    };
}

export function createProceduralGeneration(scene) {
    // Procedural content generation
    const generatedObjects = [];

    function generateTree(position) {
        const trunk = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 2),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );

        const foliage = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0x228B22 })
        );
        foliage.position.y = 1.5;

        const tree = new THREE.Group();
        tree.add(trunk);
        tree.add(foliage);
        tree.position.set(position.x, position.y, position.z);
        scene.add(tree);
        
        generatedObjects.push(tree);
        return tree;
    }

    function generateForest(area, density) {
        for (let i = 0; i < density; i++) {
            const position = {
                x: (Math.random() - 0.5) * area,
                y: 0,
                z: (Math.random() - 0.5) * area
            };
            generateTree(position);
        }
    }

    function generateTerrain(width, depth, segments) {
        const geometry = new THREE.PlaneGeometry(width, depth, segments, segments);
        const vertices = geometry.attributes.position.array;
        
        // Apply noise to create terrain
        for (let i = 0; i < vertices.length; i += 3) {
            const x = vertices[i];
            const z = vertices[i + 2];
            const height = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2;
            vertices[i + 1] = height;
        }
        
        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
        
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x3a5f3a,
            roughness: 0.8 
        });
        
        const terrain = new THREE.Mesh(geometry, material);
        terrain.rotation.x = -Math.PI / 2;
        scene.add(terrain);
        
        generatedObjects.push(terrain);
        return terrain;
    }

    function clearGenerated() {
        generatedObjects.forEach(obj => {
            scene.remove(obj);
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) obj.material.dispose();
        });
        generatedObjects.length = 0;
    }

    return {
        generateTree,
        generateForest,
        generateTerrain,
        clearGenerated,
        getGeneratedObjects: () => generatedObjects
    };
}

export function createLearningBehavior(scene, model) {
    // Learning and adaptive behavior
    const behaviorData = {
        interactions: [],
        preferences: {},
        adaptationRate: 0.1
    };

    function recordInteraction(type, data) {
        behaviorData.interactions.push({
            type,
            data,
            timestamp: Date.now()
        });
        
        // Learn from interaction
        learnFromInteraction(type, data);
    }

    function learnFromInteraction(type, data) {
        switch(type) {
            case 'movement':
                learnMovementPatterns(data);
                break;
            case 'visual':
                learnVisualPreferences(data);
                break;
            case 'audio':
                learnAudioPreferences(data);
                break;
        }
    }

    function learnMovementPatterns(data) {
        // Analyze movement patterns and adapt
        const direction = data.direction;
        const speed = data.speed;
        
        if (!behaviorData.preferences.preferredDirection) {
            behaviorData.preferences.preferredDirection = direction;
        } else {
            // Gradually adapt preferred direction
            behaviorData.preferences.preferredDirection.lerp(
                direction, 
                behaviorData.adaptationRate
            );
        }
        
        if (!behaviorData.preferences.preferredSpeed) {
            behaviorData.preferences.preferredSpeed = speed;
        } else {
            behaviorData.preferences.preferredSpeed = THREE.MathUtils.lerp(
                behaviorData.preferences.preferredSpeed,
                speed,
                behaviorData.adaptationRate
            );
        }
    }

    function learnVisualPreferences(data) {
        // Learn visual preferences
        const color = data.color;
        const intensity = data.intensity;
        
        if (!behaviorData.preferences.preferredColors) {
            behaviorData.preferences.preferredColors = [color];
        } else {
            behaviorData.preferences.preferredColors.push(color);
            // Keep only last 10 colors
            if (behaviorData.preferences.preferredColors.length > 10) {
                behaviorData.preferences.preferredColors.shift();
            }
        }
    }

    function learnAudioPreferences(data) {
        // Learn audio preferences
        const volume = data.volume;
        const frequency = data.frequency;
        
        behaviorData.preferences.preferredVolume = 
            behaviorData.preferences.preferredVolume || volume;
        behaviorData.preferences.preferredFrequency = 
            behaviorData.preferences.preferredFrequency || frequency;
    }

    function getAdaptiveBehavior() {
        return {
            preferredMovement: behaviorData.preferences.preferredDirection,
            preferredSpeed: behaviorData.preferences.preferredSpeed,
            preferredColors: behaviorData.preferences.preferredColors,
            preferredVolume: behaviorData.preferences.preferredVolume
        };
    }

    return {
        recordInteraction,
        getAdaptiveBehavior,
        getBehaviorData: () => behaviorData
    };
}
