/**
 * AI Asset Generator - Procedural 3D Content Generation
 * Creates custom 3D assets using AI-driven procedural generation
 */

import * as THREE from 'three';

/**
 * Procedural Geometry Generator
 */
class ProceduralGeometryGenerator {
    constructor() {
        this.geometryCache = new Map();
        this.parameters = new Map();
        
        this.setupDefaultParameters();
    }

    setupDefaultParameters() {
        this.parameters.set('tree', {
            trunkHeight: { min: 2, max: 8 },
            trunkRadius: { min: 0.2, max: 0.8 },
            foliageRadius: { min: 1, max: 4 },
            foliageHeight: { min: 2, max: 6 },
            segments: { min: 8, max: 32 }
        });

        this.parameters.set('rock', {
            width: { min: 0.5, max: 3 },
            height: { min: 0.3, max: 2 },
            depth: { min: 0.5, max: 2.5 },
            roughness: { min: 0.7, max: 1.0 },
            segments: { min: 6, max: 16 }
        });

        this.parameters.set('building', {
            width: { min: 2, max: 10 },
            height: { min: 3, max: 20 },
            depth: { min: 2, max: 10 },
            floors: { min: 1, max: 8 },
            roofType: ['flat', 'pitched', 'dome']
        });
    }

    generateTree(params = {}) {
        const treeParams = { ...this.getRandomParameters('tree'), ...params };
        
        const group = new THREE.Group();
        
        // Trunk
        const trunkGeometry = new THREE.CylinderGeometry(
            treeParams.trunkRadius * 0.8,
            treeParams.trunkRadius,
            treeParams.trunkHeight,
            treeParams.segments
        );
        const trunk = new THREE.Mesh(trunkGeometry);
        trunk.position.y = treeParams.trunkHeight / 2;
        group.add(trunk);
        
        // Foliage
        const foliageGeometry = new THREE.ConeGeometry(
            treeParams.foliageRadius,
            treeParams.foliageHeight,
            treeParams.segments
        );
        const foliage = new THREE.Mesh(foliageGeometry);
        foliage.position.y = treeParams.trunkHeight + treeParams.foliageHeight / 2;
        group.add(foliage);
        
        return group;
    }

    generateRock(params = {}) {
        const rockParams = { ...this.getRandomParameters('rock'), ...params };
        
        const geometry = new THREE.DodecahedronGeometry(1, rockParams.segments);
        
        // Random deformation
        const vertices = geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            const scale = 0.8 + Math.random() * 0.4;
            vertices[i] *= scale * (rockParams.width / 2);
            vertices[i + 1] *= scale * (rockParams.height / 2);
            vertices[i + 2] *= scale * (rockParams.depth / 2);
        }
        
        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
        
        return new THREE.Mesh(geometry);
    }

    generateBuilding(params = {}) {
        const buildingParams = { ...this.getRandomParameters('building'), ...params };
        
        const group = new THREE.Group();
        
        // Main structure
        const buildingGeometry = new THREE.BoxGeometry(
            buildingParams.width,
            buildingParams.height,
            buildingParams.depth
        );
        const building = new THREE.Mesh(buildingGeometry);
        building.position.y = buildingParams.height / 2;
        group.add(building);
        
        // Roof
        let roof;
        switch (buildingParams.roofType) {
            case 'pitched':
                const roofGeometry = new THREE.ConeGeometry(
                    Math.max(buildingParams.width, buildingParams.depth) * 0.7,
                    buildingParams.height * 0.3,
                    4
                );
                roof = new THREE.Mesh(roofGeometry);
                roof.position.y = buildingParams.height + roofGeometry.parameters.height / 2;
                roof.rotation.y = Math.PI / 4;
                break;
            case 'dome':
                const domeGeometry = new THREE.SphereGeometry(
                    Math.max(buildingParams.width, buildingParams.depth) * 0.6,
                    16, 8, 0, Math.PI * 2, 0, Math.PI / 2
                );
                roof = new THREE.Mesh(domeGeometry);
                roof.position.y = buildingParams.height;
                break;
            default:
                const flatRoofGeometry = new THREE.BoxGeometry(
                    buildingParams.width * 1.1,
                    0.2,
                    buildingParams.depth * 1.1
                );
                roof = new THREE.Mesh(flatRoofGeometry);
                roof.position.y = buildingParams.height + 0.1;
        }
        
        if (roof) group.add(roof);
        
        return group;
    }

    getRandomParameters(type) {
        const params = {};
        const typeParams = this.parameters.get(type);
        
        if (!typeParams) return params;
        
        for (const [key, value] of Object.entries(typeParams)) {
            if (typeof value === 'object' && value.min !== undefined) {
                params[key] = value.min + Math.random() * (value.max - value.min);
            } else if (Array.isArray(value)) {
                params[key] = value[Math.floor(Math.random() * value.length)];
            }
        }
        
        return params;
    }
}

/**
 * AI Asset Generator
 */
class AIAssetGenerator {
    constructor(framework, aiService) {
        this.framework = framework;
        this.aiService = aiService;
        this.geometryGenerator = new ProceduralGeometryGenerator();
        
        this.assetTemplates = new Map();
        this.generatedAssets = new Map();
        this.generationHistory = [];
        
        this.setupAssetTemplates();
    }

    setupAssetTemplates() {
        this.assetTemplates.set('fantasy_tree', {
            category: 'vegetation',
            style: 'fantasy',
            baseGeometry: 'tree',
            materialProperties: {
                trunk: { color: '#8B4513', roughness: 0.9 },
                foliage: { color: '#228B22', roughness: 0.8 }
            },
            variations: ['glowing_leaves', 'twisted_trunk', 'moss_covered']
        });

        this.assetTemplates.set('sci_fi_crate', {
            category: 'prop',
            style: 'sci-fi',
            baseGeometry: 'box',
            materialProperties: {
                body: { color: '#C0C0C0', roughness: 0.3, metalness: 0.8 },
                details: { color: '#00FFFF', roughness: 0.1, metalness: 0.9 }
            },
            variations: ['glowing_edges', 'holographic_stickers', 'warning_labels']
        });

        this.assetTemplates.set('modern_chair', {
            category: 'furniture',
            style: 'modern',
            baseGeometry: 'custom',
            materialProperties: {
                seat: { color: '#FFFFFF', roughness: 0.4 },
                legs: { color: '#000000', roughness: 0.2, metalness: 0.8 }
            },
            variations: ['upholstered', 'minimalist', 'ergonomic']
        });
    }

    async generateAsset(description, options = {}) {
        try {
            // Get AI parameters for asset generation
            const aiParams = await this.getAIAssetParameters(description);
            
            // Generate the asset
            const asset = await this.createAsset(aiParams, options);
            
            // Store generated asset
            this.generatedAssets.set(asset.uuid, {
                asset,
                description,
                parameters: aiParams,
                timestamp: Date.now()
            });

            this.generationHistory.push({
                description,
                assetId: asset.uuid,
                parameters: aiParams,
                timestamp: Date.now()
            });

            console.log(`Generated AI asset: ${aiParams.name}`);
            return asset;

        } catch (error) {
            console.error('Failed to generate asset:', error);
            return this.generateFallbackAsset(description);
        }
    }

    async getAIAssetParameters(description) {
        const prompt = `
        Analyze this asset description and provide generation parameters:
        
        Description: "${description}"
        
        Available asset types: tree, rock, building, furniture, vehicle, prop
        Available styles: fantasy, sci-fi, modern, nature, industrial
        
        Provide JSON response:
        {
            "name": "asset_name",
            "type": "asset_type",
            "style": "asset_style",
            "category": "vegetation|architecture|furniture|vehicle|prop",
            "parameters": {
                "size": "small|medium|large",
                "complexity": "simple|moderate|complex",
                "primaryColor": "#hex_color",
                "secondaryColor": "#hex_color",
                "materialType": "wood|metal|stone|plastic|glass",
                "specificFeatures": ["feature1", "feature2"]
            },
            "proceduralParams": {
                "customization_level": "low|medium|high",
                "randomness": "0.0-1.0",
                "detail_level": "low|medium|high"
            }
        }
        
        Focus on creating parameters that will result in a visually appealing and appropriate asset.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.warn('AI asset parameters failed, using fallback:', error);
            return this.getFallbackParameters(description);
        }
    }

    getFallbackParameters(description) {
        const desc = description.toLowerCase();
        
        let type = 'prop';
        let style = 'modern';
        let category = 'prop';
        
        if (desc.includes('tree') || desc.includes('plant')) {
            type = 'tree';
            category = 'vegetation';
            style = 'nature';
        } else if (desc.includes('building') || desc.includes('house')) {
            type = 'building';
            category = 'architecture';
        } else if (desc.includes('chair') || desc.includes('table')) {
            type = 'furniture';
            category = 'furniture';
        } else if (desc.includes('car') || desc.includes('vehicle')) {
            type = 'vehicle';
            category = 'vehicle';
        }

        return {
            name: `Generated ${type}`,
            type,
            style,
            category,
            parameters: {
                size: 'medium',
                complexity: 'moderate',
                primaryColor: '#808080',
                secondaryColor: '#FFFFFF',
                materialType: 'plastic',
                specificFeatures: []
            },
            proceduralParams: {
                customization_level: 'medium',
                randomness: 0.5,
                detail_level: 'medium'
            }
        };
    }

    async createAsset(params, options = {}) {
        let geometry;
        
        // Generate base geometry
        switch (params.type) {
            case 'tree':
                geometry = this.geometryGenerator.generateTree(
                    this.mapSizeToParameters(params.parameters.size)
                );
                break;
            case 'rock':
                geometry = this.geometryGenerator.generateRock(
                    this.mapSizeToParameters(params.parameters.size)
                );
                break;
            case 'building':
                geometry = this.geometryGenerator.generateBuilding(
                    this.mapSizeToParameters(params.parameters.size)
                );
                break;
            default:
                geometry = this.createCustomGeometry(params);
        }

        // Apply materials
        this.applyMaterials(geometry, params);

        // Apply specific features
        this.applySpecificFeatures(geometry, params.parameters.specificFeatures);

        // Set user data
        geometry.userData = {
            generated: true,
            parameters: params,
            timestamp: Date.now()
        };

        return geometry;
    }

    mapSizeToParameters(size) {
        switch (size) {
            case 'small':
                return { scale: 0.5 };
            case 'large':
                return { scale: 1.5 };
            default:
                return { scale: 1.0 };
        }
    }

    createCustomGeometry(params) {
        // Create custom geometry based on type and style
        const group = new THREE.Group();
        
        if (params.type === 'furniture') {
            return this.createFurniture(params);
        } else if (params.type === 'vehicle') {
            return this.createVehicle(params);
        } else {
            // Default to box for unknown types
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            return new THREE.Mesh(geometry);
        }
    }

    createFurniture(params) {
        const group = new THREE.Group();
        
        // Simple chair as example
        const seatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
        const seat = new THREE.Mesh(seatGeometry);
        seat.position.y = 0.5;
        group.add(seat);
        
        const backGeometry = new THREE.BoxGeometry(1, 1, 0.1);
        const back = new THREE.Mesh(backGeometry);
        back.position.set(0, 1, -0.45);
        group.add(back);
        
        // Legs
        const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
        const legPositions = [
            [-0.4, 0.25, -0.4],
            [0.4, 0.25, -0.4],
            [-0.4, 0.25, 0.4],
            [0.4, 0.25, 0.4]
        ];
        
        legPositions.forEach(pos => {
            const leg = new THREE.Mesh(legGeometry);
            leg.position.set(...pos);
            group.add(leg);
        });
        
        return group;
    }

    createVehicle(params) {
        const group = new THREE.Group();
        
        // Simple car body
        const bodyGeometry = new THREE.BoxGeometry(2, 0.8, 4);
        const body = new THREE.Mesh(bodyGeometry);
        body.position.y = 0.4;
        group.add(body);
        
        // Cabin
        const cabinGeometry = new THREE.BoxGeometry(1.5, 0.6, 2);
        const cabin = new THREE.Mesh(cabinGeometry);
        cabin.position.set(0, 1, -0.5);
        group.add(cabin);
        
        // Wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
        const wheelPositions = [
            [-0.8, 0.3, 1.2],
            [0.8, 0.3, 1.2],
            [-0.8, 0.3, -1.2],
            [0.8, 0.3, -1.2]
        ];
        
        wheelPositions.forEach(pos => {
            const wheel = new THREE.Mesh(wheelGeometry);
            wheel.position.set(...pos);
            wheel.rotation.z = Math.PI / 2;
            group.add(wheel);
        });
        
        return group;
    }

    applyMaterials(object, params) {
        const primaryMaterial = new THREE.MeshStandardMaterial({
            color: params.parameters.primaryColor,
            roughness: this.getMaterialRoughness(params.parameters.materialType),
            metalness: this.getMaterialMetalness(params.parameters.materialType)
        });

        const secondaryMaterial = new THREE.MeshStandardMaterial({
            color: params.parameters.secondaryColor,
            roughness: 0.5,
            metalness: 0.1
        });

        object.traverse((child) => {
            if (child.isMesh) {
                // Apply primary material to most objects
                child.material = primaryMaterial;
                
                // Apply secondary material to specific parts
                if (child.name && child.name.includes('detail')) {
                    child.material = secondaryMaterial;
                }
            }
        });
    }

    getMaterialRoughness(materialType) {
        switch (materialType) {
            case 'wood': return 0.9;
            case 'metal': return 0.2;
            case 'stone': return 0.8;
            case 'plastic': return 0.4;
            case 'glass': return 0.1;
            default: return 0.5;
        }
    }

    getMaterialMetalness(materialType) {
        switch (materialType) {
            case 'metal': return 0.8;
            case 'glass': return 0.1;
            default: return 0.0;
        }
    }

    applySpecificFeatures(object, features) {
        features.forEach(feature => {
            switch (feature) {
                case 'glowing_edges':
                    this.addGlowingEdges(object);
                    break;
                case 'moss_covered':
                    this.addMossCoverage(object);
                    break;
                case 'warning_labels':
                    this.addWarningLabels(object);
                    break;
            }
        });
    }

    addGlowingEdges(object) {
        // Add emissive material to edges
        object.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.emissive = new THREE.Color(0x00ffff);
                child.material.emissiveIntensity = 0.2;
            }
        });
    }

    addMossCoverage(object) {
        // Add green patches to simulate moss
        object.traverse((child) => {
            if (child.isMesh && child.material) {
                // Create moss material variation
                const mossMaterial = child.material.clone();
                mossMaterial.color = new THREE.Color(0x2d5016);
                mossMaterial.roughness = 0.95;
                
                // Apply to random faces (simplified)
                if (Math.random() > 0.5) {
                    child.material = mossMaterial;
                }
            }
        });
    }

    addWarningLabels(object) {
        // Add warning label geometry
        const labelGeometry = new THREE.PlaneGeometry(0.5, 0.2);
        const labelMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00,
            side: THREE.DoubleSide
        });
        
        const label = new THREE.Mesh(labelGeometry, labelMaterial);
        label.position.set(0, 1, 0.51);
        object.add(label);
    }

    generateFallbackAsset(description) {
        // Simple fallback - generate a box with basic material
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x808080,
            roughness: 0.5
        });
        
        const asset = new THREE.Mesh(geometry, material);
        asset.userData = {
            generated: true,
            fallback: true,
            description
        };
        
        return asset;
    }

    getGeneratedAssets() {
        return Array.from(this.generatedAssets.entries());
    }

    getAsset(assetId) {
        return this.generatedAssets.get(assetId);
    }

    removeAsset(assetId) {
        const assetData = this.generatedAssets.get(assetId);
        if (assetData) {
            // Dispose of geometry and materials
            assetData.asset.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(mat => mat.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            
            this.generatedAssets.delete(assetId);
        }
    }

    getGenerationHistory(limit = 10) {
        return this.generationHistory.slice(-limit);
    }

    dispose() {
        // Clean up all generated assets
        for (const [assetId, assetData] of this.generatedAssets) {
            this.removeAsset(assetId);
        }
        
        this.generatedAssets.clear();
        this.generationHistory = [];
        this.geometryGenerator = null;
        this.framework = null;
        this.aiService = null;
    }
}

export {
    ProceduralGeometryGenerator,
    AIAssetGenerator
};
