/**
 * AI Scene Generator - Intelligent Scene Creation and Management
 * Integrates with Web3D Framework for automated scene generation
 */

import * as THREE from 'three';

/**
 * AI Scene Analysis System
 */
class AISceneAnalyzer {
    constructor(aiService) {
        this.aiService = aiService;
        this.sceneTemplates = new Map();
        this.sceneHistory = [];
        this.analysisCache = new Map();
    }

    /**
     * Analyze scene complexity and requirements
     */
    async analyzeScene(scene) {
        const sceneId = this.generateSceneId(scene);
        
        // Check cache first
        if (this.analysisCache.has(sceneId)) {
            return this.analysisCache.get(sceneId);
        }

        const analysis = {
            objectCount: 0,
            triangleCount: 0,
            materialCount: 0,
            lightCount: 0,
            complexity: 'low',
            performanceScore: 100,
            recommendations: []
        };

        // Analyze scene objects
        scene.traverse((object) => {
            if (object.isMesh) {
                analysis.objectCount++;
                if (object.geometry) {
                    analysis.triangleCount += this.countTriangles(object.geometry);
                }
                if (object.material) {
                    analysis.materialCount++;
                }
            }
            if (object.isLight) {
                analysis.lightCount++;
            }
        });

        // Determine complexity
        analysis.complexity = this.determineComplexity(analysis);
        analysis.performanceScore = this.calculatePerformanceScore(analysis);

        // Get AI recommendations
        analysis.recommendations = await this.getAIRecommendations(analysis);

        // Cache results
        this.analysisCache.set(sceneId, analysis);
        this.sceneHistory.push({ sceneId, timestamp: Date.now(), analysis });

        return analysis;
    }

    countTriangles(geometry) {
        if (geometry.index) {
            return geometry.index.count / 3;
        } else if (geometry.attributes.position) {
            return geometry.attributes.position.count / 3;
        }
        return 0;
    }

    determineComplexity(analysis) {
        if (analysis.triangleCount > 100000 || analysis.objectCount > 500) return 'high';
        if (analysis.triangleCount > 50000 || analysis.objectCount > 200) return 'medium';
        return 'low';
    }

    calculatePerformanceScore(analysis) {
        let score = 100;
        
        // Deduct points for high triangle count
        if (analysis.triangleCount > 100000) score -= 30;
        else if (analysis.triangleCount > 50000) score -= 15;
        
        // Deduct points for too many objects
        if (analysis.objectCount > 500) score -= 20;
        else if (analysis.objectCount > 200) score -= 10;
        
        // Deduct points for too many lights
        if (analysis.lightCount > 8) score -= 15;
        else if (analysis.lightCount > 4) score -= 5;
        
        return Math.max(0, score);
    }

    async getAIRecommendations(analysis) {
        const prompt = `
        Analyze this 3D scene performance data and provide optimization recommendations:
        
        - Objects: ${analysis.objectCount}
        - Triangles: ${analysis.triangleCount}
        - Materials: ${analysis.materialCount}
        - Lights: ${analysis.lightCount}
        - Complexity: ${analysis.complexity}
        - Performance Score: ${analysis.performanceScore}
        
        Provide specific recommendations in JSON format:
        {
            "optimizations": [
                {
                    "type": "lod|culling|lighting|materials",
                    "priority": "high|medium|low",
                    "description": "Specific action to take",
                    "expectedImprovement": "Estimated performance gain"
                }
            ],
            "sceneSettings": {
                "recommendedLODLevels": "number",
                "shadowQuality": "high|medium|low",
                "renderDistance": "number"
            }
        }
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.warn('AI recommendations failed, using fallback:', error);
            return this.getFallbackRecommendations(analysis);
        }
    }

    getFallbackRecommendations(analysis) {
        const recommendations = {
            optimizations: [],
            sceneSettings: {
                recommendedLODLevels: 3,
                shadowQuality: 'medium',
                renderDistance: 100
            }
        };

        if (analysis.complexity === 'high') {
            recommendations.optimizations.push({
                type: 'lod',
                priority: 'high',
                description: 'Implement LOD system for complex meshes',
                expectedImprovement: '30-40% FPS improvement'
            });
        }

        if (analysis.lightCount > 4) {
            recommendations.optimizations.push({
                type: 'lighting',
                priority: 'medium',
                description: 'Reduce number of dynamic lights',
                expectedImprovement: '15-20% FPS improvement'
            });
        }

        return recommendations;
    }

    generateSceneId(scene) {
        return `scene_${scene.uuid || Date.now()}`;
    }
}

/**
 * AI Scene Generator
 */
class AISceneGenerator {
    constructor(framework, aiService) {
        this.framework = framework;
        this.aiService = aiService;
        this.analyzer = new AISceneAnalyzer(aiService);
        this.sceneTemplates = new Map();
        this.generatedScenes = new Map();
        
        this.setupSceneTemplates();
    }

    /**
     * Initialize scene templates
     */
    setupSceneTemplates() {
        this.sceneTemplates.set('fantasy_forest', {
            description: 'Mystical forest with ancient trees and magical elements',
            elements: ['trees', 'rocks', 'fog', 'magical_lights', 'fauna'],
            lighting: 'ambient_with_god_rays',
            atmosphere: 'mystical'
        });

        this.sceneTemplates.set('sci-fi_city', {
            description: 'Futuristic cityscape with neon lights and flying vehicles',
            elements: ['buildings', 'vehicles', 'neon_signs', 'holograms', 'drones'],
            lighting: 'neon_ambient',
            atmosphere: 'cyberpunk'
        });

        this.sceneTemplates.set('medieval_village', {
            description: 'Cozy medieval village with houses and market stalls',
            elements: ['houses', 'market_stalls', 'wells', 'torches', 'villagers'],
            lighting: 'torchlight',
            atmosphere: 'historical'
        });
    }

    /**
     * Generate scene from AI prompt
     */
    async generateScene(userPrompt, options = {}) {
        try {
            // Get scene description from AI
            const sceneDescription = await this.generateSceneDescription(userPrompt);
            
            // Create scene
            const scene = await this.createSceneFromDescription(sceneDescription, options);
            
            // Analyze and optimize
            const analysis = await this.analyzer.analyzeScene(scene);
            await this.applyOptimizations(scene, analysis.recommendations);
            
            // Store generated scene
            this.generatedScenes.set(scene.uuid, {
                scene,
                description: sceneDescription,
                analysis,
                timestamp: Date.now()
            });

            console.log(`Generated AI scene: ${sceneDescription.name}`);
            return scene;

        } catch (error) {
            console.error('Failed to generate scene:', error);
            throw error;
        }
    }

    /**
     * Generate scene description using AI
     */
    async generateSceneDescription(userPrompt) {
        const prompt = `
        As a 3D scene designer, create a detailed scene description based on this request: "${userPrompt}"
        
        Provide a JSON response with this structure:
        {
            "name": "Scene name",
            "type": "fantasy|sci-fi|modern|historical|abstract",
            "atmosphere": "mood description",
            "lighting": {
                "type": "natural|artificial|mixed",
                "timeOfDay": "dawn|day|dusk|night",
                "primaryLight": "sun|moon|artificial",
                "ambientStrength": "0.1-1.0",
                "shadowQuality": "high|medium|low"
            },
            "environment": {
                "terrain": "flat|hilly|mountainous|underwater|space",
                "weather": "clear|cloudy|foggy|rainy|snowy",
                "skybox": "description of sky"
            },
            "objects": [
                {
                    "type": "tree|building|vehicle|character|prop",
                    "name": "object name",
                    "position": {"x": 0, "y": 0, "z": 0},
                    "scale": {"x": 1, "y": 1, "z": 1},
                    "quantity": "number of instances",
                    "distribution": "random|grid|circular|clustered"
                }
            ],
            "camera": {
                "position": {"x": 0, "y": 5, "z": 10},
                "target": {"x": 0, "y": 0, "z": 0},
                "type": "perspective|orthographic"
            }
        }
        
        Focus on creating visually interesting and performant scenes suitable for real-time rendering.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.error('Failed to generate scene description:', error);
            return this.getDefaultSceneDescription(userPrompt);
        }
    }

    /**
     * Create scene from description
     */
    async createSceneFromDescription(description, options = {}) {
        const scene = new THREE.Scene();
        
        // Setup lighting
        this.setupLighting(scene, description.lighting);
        
        // Setup environment
        await this.setupEnvironment(scene, description.environment);
        
        // Create objects
        await this.createObjects(scene, description.objects);
        
        // Setup camera
        this.setupCamera(description.camera);
        
        // Apply post-processing if needed
        if (options.postProcessing) {
            await this.applyPostProcessing(scene, description);
        }

        return scene;
    }

    /**
     * Setup scene lighting
     */
    setupLighting(scene, lightingConfig) {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(
            this.getLightColor(lightingConfig.timeOfDay),
            lightingConfig.ambientStrength || 0.4
        );
        scene.add(ambientLight);

        // Primary light source
        let primaryLight;
        switch (lightingConfig.primaryLight) {
            case 'sun':
                primaryLight = new THREE.DirectionalLight(0xffffff, 1.0);
                primaryLight.position.set(10, 20, 10);
                primaryLight.castShadow = true;
                break;
            case 'moon':
                primaryLight = new THREE.DirectionalLight(0x4444ff, 0.5);
                primaryLight.position.set(-10, 10, -10);
                break;
            default:
                primaryLight = new THREE.PointLight(0xffffff, 1.0, 100);
                primaryLight.position.set(0, 10, 0);
        }

        if (lightingConfig.shadowQuality === 'high') {
            primaryLight.shadow.mapSize.width = 2048;
            primaryLight.shadow.mapSize.height = 2048;
        } else if (lightingConfig.shadowQuality === 'medium') {
            primaryLight.shadow.mapSize.width = 1024;
            primaryLight.shadow.mapSize.height = 1024;
        }

        scene.add(primaryLight);
    }

    /**
     * Setup environment
     */
    async setupEnvironment(scene, environment) {
        // Create terrain
        this.createTerrain(scene, environment.terrain);
        
        // Setup skybox
        this.createSkybox(scene, environment.skybox);
        
        // Add weather effects
        if (environment.weather !== 'clear') {
            this.addWeatherEffects(scene, environment.weather);
        }
    }

    /**
     * Create terrain based on type
     */
    createTerrain(scene, terrainType) {
        let geometry;
        let material;

        switch (terrainType) {
            case 'hilly':
                geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
                // Add some height variation
                const vertices = geometry.attributes.position.array;
                for (let i = 0; i < vertices.length; i += 3) {
                    vertices[i + 2] = Math.sin(vertices[i] * 0.05) * Math.cos(vertices[i + 1] * 0.05) * 5;
                }
                geometry.attributes.position.needsUpdate = true;
                geometry.computeVertexNormals();
                break;
            case 'mountainous':
                geometry = new THREE.PlaneGeometry(200, 200, 100, 100);
                // More dramatic height variation
                const mountainVertices = geometry.attributes.position.array;
                for (let i = 0; i < mountainVertices.length; i += 3) {
                    mountainVertices[i + 2] = Math.random() * 20 - 5;
                }
                geometry.attributes.position.needsUpdate = true;
                geometry.computeVertexNormals();
                break;
            default:
                geometry = new THREE.PlaneGeometry(200, 200);
        }

        material = new THREE.MeshStandardMaterial({
            color: this.getTerrainColor(terrainType),
            roughness: 0.8,
            metalness: 0.1
        });

        const terrain = new THREE.Mesh(geometry, material);
        terrain.rotation.x = -Math.PI / 2;
        terrain.receiveShadow = true;
        scene.add(terrain);
    }

    /**
     * Create skybox
     */
    createSkybox(scene, skyboxDescription) {
        // Create gradient sky
        const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
        const skyMaterial = new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color(0x0077ff) },
                bottomColor: { value: new THREE.Color(0xffffff) },
                offset: { value: 33 },
                exponent: { value: 0.6 }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                uniform float offset;
                uniform float exponent;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition + offset).y;
                    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
                }
            `,
            side: THREE.BackSide
        });

        const sky = new THREE.Mesh(skyGeometry, skyMaterial);
        scene.add(sky);
    }

    /**
     * Create objects from description
     */
    async createObjects(scene, objects) {
        for (const objectDesc of objects) {
            await this.createObjectGroup(scene, objectDesc);
        }
    }

    /**
     * Create object group
     */
    async createObjectGroup(scene, objectDesc) {
        const quantity = objectDesc.quantity || 1;
        const distribution = objectDesc.distribution || 'random';

        for (let i = 0; i < quantity; i++) {
            const position = this.calculatePosition(objectDesc.position, distribution, i, quantity);
            const scale = new THREE.Vector3(
                objectDesc.scale.x || 1,
                objectDesc.scale.y || 1,
                objectDesc.scale.z || 1
            );

            const object = await this.createObject(objectDesc.type, objectDesc.name);
            
            if (object) {
                object.position.copy(position);
                object.scale.copy(scale);
                object.castShadow = true;
                object.receiveShadow = true;
                scene.add(object);
            }
        }
    }

    /**
     * Create individual object
     */
    async createObject(type, name) {
        switch (type) {
            case 'tree':
                return this.createTree();
            case 'building':
                return this.createBuilding();
            case 'vehicle':
                return this.createVehicle();
            case 'character':
                return this.createCharacter();
            default:
                return this.createProp();
        }
    }

    /**
     * Create simple tree
     */
    createTree() {
        const group = new THREE.Group();
        
        // Trunk
        const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.5, 4);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 2;
        group.add(trunk);
        
        // Leaves
        const leavesGeometry = new THREE.ConeGeometry(2, 6, 8);
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 6;
        group.add(leaves);
        
        return group;
    }

    /**
     * Create simple building
     */
    createBuilding() {
        const group = new THREE.Group();
        
        // Main building
        const buildingGeometry = new THREE.BoxGeometry(4, 8, 4);
        const buildingMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        building.position.y = 4;
        group.add(building);
        
        // Roof
        const roofGeometry = new THREE.ConeGeometry(3, 2, 4);
        const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8B0000 });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.y = 9;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);
        
        return group;
    }

    /**
     * Create simple vehicle
     */
    createVehicle() {
        const group = new THREE.Group();
        
        // Body
        const bodyGeometry = new THREE.BoxGeometry(3, 1, 5);
        const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.5;
        group.add(body);
        
        // Wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
        const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        
        const wheelPositions = [
            [-1.2, 0.3, 1.5],
            [1.2, 0.3, 1.5],
            [-1.2, 0.3, -1.5],
            [1.2, 0.3, -1.5]
        ];
        
        wheelPositions.forEach(pos => {
            const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel.position.set(...pos);
            wheel.rotation.z = Math.PI / 2;
            group.add(wheel);
        });
        
        return group;
    }

    /**
     * Create simple character placeholder
     */
    createCharacter() {
        const group = new THREE.Group();
        
        // Body
        const bodyGeometry = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xFFB6C1 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.8;
        group.add(body);
        
        // Head
        const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
        const headMaterial = new THREE.MeshStandardMaterial({ color: 0xFDBCB4 });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 1.5;
        group.add(head);
        
        return group;
    }

    /**
     * Create generic prop
     */
    createProp() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
        return new THREE.Mesh(geometry, material);
    }

    /**
     * Calculate position based on distribution
     */
    calculatePosition(basePosition, distribution, index, total) {
        const pos = new THREE.Vector3(basePosition.x, basePosition.y, basePosition.z);
        
        switch (distribution) {
            case 'random':
                pos.x += (Math.random() - 0.5) * 50;
                pos.z += (Math.random() - 0.5) * 50;
                break;
            case 'circular':
                const angle = (index / total) * Math.PI * 2;
                pos.x += Math.cos(angle) * 10;
                pos.z += Math.sin(angle) * 10;
                break;
            case 'grid':
                const gridSize = Math.ceil(Math.sqrt(total));
                const x = (index % gridSize) - gridSize / 2;
                const z = Math.floor(index / gridSize) - gridSize / 2;
                pos.x += x * 5;
                pos.z += z * 5;
                break;
        }
        
        return pos;
    }

    /**
     * Setup camera
     */
    setupCamera(cameraConfig) {
        const camera = this.framework.engine.camera;
        
        if (cameraConfig) {
            camera.position.set(
                cameraConfig.position.x,
                cameraConfig.position.y,
                cameraConfig.position.z
            );
            
            if (cameraConfig.target) {
                camera.lookAt(
                    cameraConfig.target.x,
                    cameraConfig.target.y,
                    cameraConfig.target.z
                );
            }
        }
    }

    /**
     * Apply AI optimizations
     */
    async applyOptimizations(scene, recommendations) {
        if (!recommendations || !recommendations.optimizations) return;
        
        for (const optimization of recommendations.optimizations) {
            switch (optimization.type) {
                case 'lod':
                    this.applyLOD(scene);
                    break;
                case 'culling':
                    this.applyFrustumCulling(scene);
                    break;
                case 'lighting':
                    this.optimizeLighting(scene);
                    break;
                case 'materials':
                    this.optimizeMaterials(scene);
                    break;
            }
        }
    }

    /**
     * Apply LOD system
     */
    applyLOD(scene) {
        scene.traverse((object) => {
            if (object.isMesh && object.geometry) {
                // Create simplified versions
                const lod = new THREE.LOD();
                
                // High detail
                lod.addLevel(object, 0);
                
                // Medium detail
                const mediumGeometry = object.geometry.clone();
                mediumGeometry.computeVertexNormals();
                const mediumMesh = new THREE.Mesh(mediumGeometry, object.material);
                lod.addLevel(mediumMesh, 50);
                
                // Low detail
                const lowGeometry = new THREE.BoxGeometry(1, 1, 1);
                const lowMesh = new THREE.Mesh(lowGeometry, object.material);
                lod.addLevel(lowMesh, 100);
                
                object.parent.add(lod);
                object.parent.remove(object);
            }
        });
    }

    /**
     * Apply frustum culling
     */
    applyFrustumCulling(scene) {
        // Enable frustum culling for all objects
        scene.traverse((object) => {
            if (object.isMesh) {
                object.frustumCulled = true;
            }
        });
    }

    /**
     * Optimize lighting
     */
    optimizeLighting(scene) {
        const lights = [];
        scene.traverse((object) => {
            if (object.isLight) {
                lights.push(object);
            }
        });
        
        // Remove excess lights
        if (lights.length > 4) {
            lights.slice(4).forEach(light => {
                scene.remove(light);
            });
        }
    }

    /**
     * Optimize materials
     */
    optimizeMaterials(scene) {
        const materialMap = new Map();
        
        scene.traverse((object) => {
            if (object.isMesh && object.material) {
                const materialKey = this.getMaterialKey(object.material);
                
                if (materialMap.has(materialKey)) {
                    // Reuse existing material
                    object.material = materialMap.get(materialKey);
                } else {
                    // Store for reuse
                    materialMap.set(materialKey, object.material);
                }
            }
        });
    }

    getMaterialKey(material) {
        return `${material.color?.getHexString()}_${material.roughness}_${material.metalness}`;
    }

    /**
     * Helper methods
     */
    getLightColor(timeOfDay) {
        switch (timeOfDay) {
            case 'dawn': return 0xffb366;
            case 'day': return 0xffffff;
            case 'dusk': return 0xff9966;
            case 'night': return 0x4444ff;
            default: return 0xffffff;
        }
    }

    getTerrainColor(terrainType) {
        switch (terrainType) {
            case 'underwater': return 0x006994;
            case 'space': return 0x1a1a2e;
            default: return 0x3a5f3a;
        }
    }

    addWeatherEffects(scene, weather) {
        // Implementation for weather effects would go here
        console.log(`Adding ${weather} weather effects`);
    }

    async applyPostProcessing(scene, description) {
        // Post-processing implementation would go here
        console.log('Applying post-processing effects');
    }

    getDefaultSceneDescription(userPrompt) {
        return {
            name: "Generated Scene",
            type: "modern",
            atmosphere: "Neutral atmosphere",
            lighting: {
                type: "mixed",
                timeOfDay: "day",
                primaryLight: "sun",
                ambientStrength: 0.4,
                shadowQuality: "medium"
            },
            environment: {
                terrain: "flat",
                weather: "clear",
                skybox: "Blue sky with clouds"
            },
            objects: [
                {
                    type: "building",
                    name: "Modern Building",
                    position: { x: 0, y: 0, z: 0 },
                    scale: { x: 1, y: 1, z: 1 },
                    quantity: 3,
                    distribution: "random"
                }
            ],
            camera: {
                position: { x: 0, y: 5, z: 10 },
                target: { x: 0, y: 0, z: 0 },
                type: "perspective"
            }
        };
    }

    /**
     * Get generated scene
     */
    getScene(sceneId) {
        return this.generatedScenes.get(sceneId);
    }

    /**
     * Get all generated scenes
     */
    getAllScenes() {
        return Array.from(this.generatedScenes.entries());
    }

    /**
     * Remove scene
     */
    removeScene(sceneId) {
        const sceneData = this.generatedScenes.get(sceneId);
        if (sceneData) {
            // Dispose of scene objects
            sceneData.scene.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            
            this.generatedScenes.delete(sceneId);
        }
    }

    /**
     * Dispose of scene generator
     */
    dispose() {
        this.generatedScenes.clear();
        this.sceneTemplates.clear();
        this.analyzer = null;
        this.framework = null;
        this.aiService = null;
    }
}

export {
    AISceneAnalyzer,
    AISceneGenerator
};
