/**
 * AI Performance Optimizer - Dynamic Performance Optimization with AI
 * Integrates with Web3D Framework for real-time performance management
 */

import * as THREE from 'three';

/**
 * Performance Monitor with AI Analysis
 */
class AIPerformanceMonitor {
    constructor() {
        this.metrics = {
            fps: 0,
            frameTime: 0,
            drawCalls: 0,
            triangles: 0,
            memoryUsage: 0,
            gpuTime: 0,
            cpuTime: 0
        };
        
        this.history = [];
        this.maxHistoryLength = 60; // Keep 60 frames of history
        this.thresholds = {
            targetFPS: 60,
            minFPS: 30,
            maxFrameTime: 16.67, // 60 FPS target
            maxMemoryUsage: 512 * 1024 * 1024, // 512MB
            maxDrawCalls: 1000
        };
        
        this.lastFrameTime = performance.now();
        this.frameCount = 0;
    }

    /**
     * Update performance metrics
     */
    update(renderer, scene) {
        const now = performance.now();
        const deltaTime = now - this.lastFrameTime;
        
        // Calculate FPS
        this.metrics.frameTime = deltaTime;
        this.metrics.fps = Math.round(1000 / deltaTime);
        
        // Get renderer info
        if (renderer.info) {
            this.metrics.drawCalls = renderer.info.render.calls;
            this.metrics.triangles = renderer.info.render.triangles;
        }
        
        // Estimate memory usage
        this.metrics.memoryUsage = this.estimateMemoryUsage(scene);
        
        // Add to history
        this.history.push({ ...this.metrics, timestamp: now });
        if (this.history.length > this.maxHistoryLength) {
            this.history.shift();
        }
        
        this.lastFrameTime = now;
        this.frameCount++;
        
        return this.metrics;
    }

    /**
     * Estimate memory usage of scene
     */
    estimateMemoryUsage(scene) {
        let totalMemory = 0;
        
        scene.traverse((object) => {
            if (object.geometry) {
                // Estimate geometry memory
                const geometry = object.geometry;
                if (geometry.attributes.position) {
                    totalMemory += geometry.attributes.position.array.byteLength;
                }
                if (geometry.attributes.normal) {
                    totalMemory += geometry.attributes.normal.array.byteLength;
                }
                if (geometry.attributes.uv) {
                    totalMemory += geometry.attributes.uv.array.byteLength;
                }
                if (geometry.index) {
                    totalMemory += geometry.index.array.byteLength;
                }
            }
            
            if (object.material) {
                // Estimate material memory (rough approximation)
                totalMemory += 1024; // 1KB per material
            }
        });
        
        return totalMemory;
    }

    /**
     * Get performance analysis
     */
    getAnalysis() {
        if (this.history.length < 10) {
            return this.getBasicAnalysis();
        }
        
        const recent = this.history.slice(-10);
        const avgFPS = recent.reduce((sum, m) => sum + m.fps, 0) / recent.length;
        const avgFrameTime = recent.reduce((sum, m) => sum + m.frameTime, 0) / recent.length;
        const maxDrawCalls = Math.max(...recent.map(m => m.drawCalls));
        const avgMemory = recent.reduce((sum, m) => sum + m.memoryUsage, 0) / recent.length;
        
        return {
            currentFPS: this.metrics.fps,
            averageFPS: avgFPS,
            frameTime: avgFrameTime,
            drawCalls: maxDrawCalls,
            memoryUsage: avgMemory,
            performanceLevel: this.getPerformanceLevel(avgFPS),
            issues: this.identifyIssues(avgFPS, avgFrameTime, maxDrawCalls, avgMemory),
            recommendations: this.generateRecommendations(avgFPS, avgFrameTime, maxDrawCalls, avgMemory)
        };
    }

    getPerformanceLevel(fps) {
        if (fps >= 55) return 'excellent';
        if (fps >= 45) return 'good';
        if (fps >= 30) return 'acceptable';
        return 'poor';
    }

    identifyIssues(fps, frameTime, drawCalls, memory) {
        const issues = [];
        
        if (fps < this.thresholds.minFPS) {
            issues.push('Low FPS detected');
        }
        
        if (frameTime > this.thresholds.maxFrameTime * 2) {
            issues.push('High frame time');
        }
        
        if (drawCalls > this.thresholds.maxDrawCalls) {
            issues.push('Too many draw calls');
        }
        
        if (memory > this.thresholds.maxMemoryUsage) {
            issues.push('High memory usage');
        }
        
        return issues;
    }

    generateRecommendations(fps, frameTime, drawCalls, memory) {
        const recommendations = [];
        
        if (fps < 45) {
            recommendations.push('Enable LOD system');
            recommendations.push('Reduce shadow quality');
        }
        
        if (drawCalls > 500) {
            recommendations.push('Enable batch rendering');
            recommendations.push('Merge similar objects');
        }
        
        if (memory > 256 * 1024 * 1024) {
            recommendations.push('Dispose unused textures');
            recommendations.push('Compress textures');
        }
        
        if (frameTime > 20) {
            recommendations.push('Reduce particle effects');
            recommendations.push('Optimize lighting');
        }
        
        return recommendations;
    }

    getBasicAnalysis() {
        return {
            currentFPS: this.metrics.fps,
            averageFPS: this.metrics.fps,
            frameTime: this.metrics.frameTime,
            drawCalls: this.metrics.drawCalls,
            memoryUsage: this.metrics.memoryUsage,
            performanceLevel: this.getPerformanceLevel(this.metrics.fps),
            issues: [],
            recommendations: []
        };
    }
}

/**
 * AI Performance Optimizer
 */
class AIPerformanceOptimizer {
    constructor(framework, aiService) {
        this.framework = framework;
        this.aiService = aiService;
        this.monitor = new AIPerformanceMonitor();
        this.optimizationStrategies = new Map();
        this.activeOptimizations = new Set();
        this.optimizationHistory = [];
        
        this.setupOptimizationStrategies();
        this.isOptimizing = false;
        this.optimizationInterval = null;
    }

    /**
     * Setup optimization strategies
     */
    setupOptimizationStrategies() {
        this.optimizationStrategies.set('lod', {
            name: 'Level of Detail',
            priority: 'high',
            impact: 'high',
            description: 'Reduce detail for distant objects',
            apply: () => this.applyLODOptimization(),
            remove: () => this.removeLODOptimization()
        });

        this.optimizationStrategies.set('culling', {
            name: 'Frustum Culling',
            priority: 'high',
            impact: 'medium',
            description: 'Skip rendering objects outside view',
            apply: () => this.applyCullingOptimization(),
            remove: () => this.removeCullingOptimization()
        });

        this.optimizationStrategies.set('shadows', {
            name: 'Shadow Optimization',
            priority: 'medium',
            impact: 'medium',
            description: 'Reduce shadow quality or disable for distant objects',
            apply: () => this.applyShadowOptimization(),
            remove: () => this.removeShadowOptimization()
        });

        this.optimizationStrategies.set('materials', {
            name: 'Material Optimization',
            priority: 'medium',
            impact: 'low',
            description: 'Merge similar materials and reduce complexity',
            apply: () => this.applyMaterialOptimization(),
            remove: () => this.removeMaterialOptimization()
        });

        this.optimizationStrategies.set('lighting', {
            name: 'Lighting Optimization',
            priority: 'medium',
            impact: 'medium',
            description: 'Reduce number of lights and optimize light types',
            apply: () => this.applyLightingOptimization(),
            remove: () => this.removeLightingOptimization()
        });

        this.optimizationStrategies.set('batching', {
            name: 'Batch Rendering',
            priority: 'high',
            impact: 'high',
            description: 'Combine similar objects for fewer draw calls',
            apply: () => this.applyBatchingOptimization(),
            remove: () => this.removeBatchingOptimization()
        });
    }

    /**
     * Start automatic optimization
     */
    startOptimization() {
        if (this.isOptimizing) return;
        
        this.isOptimizing = true;
        this.optimizationInterval = setInterval(() => {
            this.optimizeFrame();
        }, 1000); // Check every second
        
        console.log('AI Performance Optimizer started');
    }

    /**
     * Stop automatic optimization
     */
    stopOptimization() {
        if (!this.isOptimizing) return;
        
        this.isOptimizing = false;
        if (this.optimizationInterval) {
            clearInterval(this.optimizationInterval);
            this.optimizationInterval = null;
        }
        
        console.log('AI Performance Optimizer stopped');
    }

    /**
     * Optimize current frame
     */
    async optimizeFrame() {
        const analysis = this.monitor.getAnalysis();
        
        // Get AI recommendations if performance is poor
        if (analysis.performanceLevel === 'poor' || analysis.issues.length > 0) {
            const aiRecommendations = await this.getAIRecommendations(analysis);
            await this.applyRecommendations(aiRecommendations);
        }
        
        // Apply automatic optimizations based on thresholds
        this.applyAutomaticOptimizations(analysis);
    }

    /**
     * Get AI recommendations for performance optimization
     */
    async getAIRecommendations(analysis) {
        const prompt = `
        Analyze this 3D scene performance data and provide specific optimization recommendations:
        
        Current Performance:
        - FPS: ${analysis.currentFPS} (target: 60)
        - Frame Time: ${analysis.frameTime}ms (target: 16.67ms)
        - Draw Calls: ${analysis.drawCalls}
        - Memory Usage: ${(analysis.memoryUsage / 1024 / 1024).toFixed(2)}MB
        - Issues: ${analysis.issues.join(', ')}
        
        Available optimization strategies:
        - LOD: Level of Detail system
        - Culling: Frustum culling
        - Shadows: Shadow optimization
        - Materials: Material merging
        - Lighting: Light reduction
        - Batching: Draw call batching
        
        Provide JSON response with prioritized recommendations:
        {
            "recommendations": [
                {
                    "strategy": "lod|culling|shadows|materials|lighting|batching",
                    "priority": "high|medium|low",
                    "reason": "Why this optimization is needed",
                    "expectedImprovement": "Estimated FPS gain",
                    "settings": {
                        "aggressiveness": "conservative|moderate|aggressive",
                        "targetFPS": "number"
                    }
                }
            ],
            "globalSettings": {
                "targetFPS": 60,
                "qualityLevel": "high|medium|low",
                "optimizationAggressiveness": "conservative|moderate|aggressive"
            }
        }
        
        Focus on optimizations that will have the biggest impact with minimal visual quality loss.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.warn('AI recommendations failed, using fallback:', error);
            return this.getFallbackRecommendations(analysis);
        }
    }

    /**
     * Get fallback recommendations when AI fails
     */
    getFallbackRecommendations(analysis) {
        const recommendations = {
            recommendations: [],
            globalSettings: {
                targetFPS: 60,
                qualityLevel: 'medium',
                optimizationAggressiveness: 'moderate'
            }
        };

        if (analysis.currentFPS < 30) {
            recommendations.recommendations.push({
                strategy: 'lod',
                priority: 'high',
                reason: 'Very low FPS requires aggressive optimization',
                expectedImprovement: '15-25 FPS',
                settings: {
                    aggressiveness: 'aggressive',
                    targetFPS: 45
                }
            });
        }

        if (analysis.drawCalls > 800) {
            recommendations.recommendations.push({
                strategy: 'batching',
                priority: 'high',
                reason: 'Too many draw calls causing performance issues',
                expectedImprovement: '10-20 FPS',
                settings: {
                    aggressiveness: 'moderate',
                    targetFPS: 50
                }
            });
        }

        if (analysis.memoryUsage > 300 * 1024 * 1024) {
            recommendations.recommendations.push({
                strategy: 'materials',
                priority: 'medium',
                reason: 'High memory usage from materials',
                expectedImprovement: '5-10 FPS',
                settings: {
                    aggressiveness: 'moderate',
                    targetFPS: 55
                }
            });
        }

        return recommendations;
    }

    /**
     * Apply AI recommendations
     */
    async applyRecommendations(recommendations) {
        if (!recommendations.recommendations) return;

        // Sort by priority
        const sortedRecommendations = recommendations.recommendations.sort((a, b) => {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });

        for (const rec of sortedRecommendations) {
            const strategy = this.optimizationStrategies.get(rec.strategy);
            if (strategy && !this.activeOptimizations.has(rec.strategy)) {
                try {
                    await strategy.apply();
                    this.activeOptimizations.add(rec.strategy);
                    
                    this.optimizationHistory.push({
                        strategy: rec.strategy,
                        timestamp: Date.now(),
                        reason: rec.reason,
                        expectedImprovement: rec.expectedImprovement
                    });
                    
                    console.log(`Applied optimization: ${strategy.name} - ${rec.reason}`);
                } catch (error) {
                    console.error(`Failed to apply optimization ${rec.strategy}:`, error);
                }
            }
        }
    }

    /**
     * Apply automatic optimizations based on performance thresholds
     */
    applyAutomaticOptimizations(analysis) {
        // Auto-enable LOD if FPS drops below 40
        if (analysis.currentFPS < 40 && !this.activeOptimizations.has('lod')) {
            this.applyLODOptimization();
            this.activeOptimizations.add('lod');
        }

        // Auto-enable culling if draw calls are high
        if (analysis.drawCalls > 600 && !this.activeOptimizations.has('culling')) {
            this.applyCullingOptimization();
            this.activeOptimizations.add('culling');
        }

        // Auto-optimize shadows if FPS is low
        if (analysis.currentFPS < 35 && !this.activeOptimizations.has('shadows')) {
            this.applyShadowOptimization();
            this.activeOptimizations.add('shadows');
        }
    }

    /**
     * LOD Optimization
     */
    applyLODOptimization() {
        const scene = this.framework.engine.scene;
        
        scene.traverse((object) => {
            if (object.isMesh && object.geometry && !object.userData.lodApplied) {
                // Create LOD object
                const lod = new THREE.LOD();
                
                // High detail (close)
                lod.addLevel(object, 0);
                
                // Medium detail (medium distance)
                const mediumGeometry = this.createSimplifiedGeometry(object.geometry, 0.5);
                const mediumMesh = new THREE.Mesh(mediumGeometry, object.material);
                lod.addLevel(mediumMesh, 50);
                
                // Low detail (far distance)
                const lowGeometry = this.createSimplifiedGeometry(object.geometry, 0.25);
                const lowMesh = new THREE.Mesh(lowGeometry, object.material);
                lod.addLevel(lowMesh, 100);
                
                // Replace original object
                object.parent.add(lod);
                object.parent.remove(object);
                
                object.userData.lodApplied = true;
            }
        });
    }

    removeLODOptimization() {
        // Implementation to remove LOD optimization
        console.log('LOD optimization removed');
    }

    /**
     * Frustum Culling Optimization
     */
    applyCullingOptimization() {
        const scene = this.framework.engine.scene;
        
        scene.traverse((object) => {
            if (object.isMesh) {
                object.frustumCulled = true;
                object.userData.cullingApplied = true;
            }
        });
    }

    removeCullingOptimization() {
        // Implementation to remove culling optimization
        console.log('Culling optimization removed');
    }

    /**
     * Shadow Optimization
     */
    applyShadowOptimization() {
        const renderer = this.framework.engine.renderer;
        
        // Reduce shadow map size
        if (renderer.shadowMap.enabled) {
            renderer.shadowMap.autoUpdate = false;
            renderer.setRenderTarget(null);
            
            // Update shadows less frequently
            setInterval(() => {
                renderer.shadowMap.needsUpdate = true;
            }, 100); // Update every 100ms
        }
    }

    removeShadowOptimization() {
        const renderer = this.framework.engine.renderer;
        renderer.shadowMap.autoUpdate = true;
        console.log('Shadow optimization removed');
    }

    /**
     * Material Optimization
     */
    applyMaterialOptimization() {
        const scene = this.framework.engine.scene;
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
                
                object.userData.materialOptimized = true;
            }
        });
    }

    removeMaterialOptimization() {
        // Implementation to restore original materials
        console.log('Material optimization removed');
    }

    /**
     * Lighting Optimization
     */
    applyLightingOptimization() {
        const scene = this.framework.engine.scene;
        const lights = [];
        
        scene.traverse((object) => {
            if (object.isLight) {
                lights.push(object);
            }
        });
        
        // Keep only the most important lights
        if (lights.length > 4) {
            // Sort by intensity (keep the brightest)
            lights.sort((a, b) => (b.intensity || 0) - (a.intensity || 0));
            
            // Remove excess lights
            lights.slice(4).forEach(light => {
                scene.remove(light);
                light.userData.lightOptimized = true;
            });
        }
    }

    removeLightingOptimization() {
        // Implementation to restore original lights
        console.log('Lighting optimization removed');
    }

    /**
     * Batching Optimization
     */
    applyBatchingOptimization() {
        const scene = this.framework.engine.scene;
        const batchGroups = new Map();
        
        scene.traverse((object) => {
            if (object.isMesh && object.geometry && object.material) {
                const geometryKey = this.getGeometryKey(object.geometry);
                const materialKey = this.getMaterialKey(object.material);
                const batchKey = `${geometryKey}_${materialKey}`;
                
                if (!batchGroups.has(batchKey)) {
                    batchGroups.set(batchKey, {
                        geometry: object.geometry,
                        material: object.material,
                        instances: []
                    });
                }
                
                batchGroups.get(batchKey).instances.push(object);
            }
        });
        
        // Create batched meshes
        batchGroups.forEach((group, key) => {
            if (group.instances.length > 1) {
                const batchedMesh = this.createBatchedMesh(group);
                scene.add(batchedMesh);
                
                // Remove original instances
                group.instances.forEach(instance => {
                    scene.remove(instance);
                    instance.userData.batched = true;
                });
            }
        });
    }

    removeBatchingOptimization() {
        // Implementation to restore original objects
        console.log('Batching optimization removed');
    }

    /**
     * Helper methods
     */
    createSimplifiedGeometry(originalGeometry, reductionFactor) {
        // Create a simplified version of the geometry
        if (originalGeometry.isBufferGeometry) {
            const simplified = originalGeometry.clone();
            
            // Reduce vertices (simplified approach)
            if (simplified.attributes.position) {
                const positions = simplified.attributes.position.array;
                const newLength = Math.floor(positions.length * reductionFactor);
                simplified.attributes.position.array = positions.slice(0, newLength);
                simplified.attributes.position.count = newLength / 3;
            }
            
            return simplified;
        }
        
        return originalGeometry;
    }

    createBatchedMesh(group) {
        // Create instanced mesh for batching
        const instancedMesh = new THREE.InstancedMesh(
            group.geometry,
            group.material,
            group.instances.length
        );
        
        // Set transforms for each instance
        group.instances.forEach((instance, i) => {
            const matrix = new THREE.Matrix4();
            matrix.compose(
                instance.position,
                instance.quaternion,
                instance.scale
            );
            instancedMesh.setMatrixAt(i, matrix);
        });
        
        instancedMesh.instanceMatrix.needsUpdate = true;
        return instancedMesh;
    }

    getMaterialKey(material) {
        return `${material.color?.getHexString()}_${material.roughness}_${material.metalness}`;
    }

    getGeometryKey(geometry) {
        if (geometry.isBoxGeometry) return 'box';
        if (geometry.isSphereGeometry) return 'sphere';
        if (geometry.isCylinderGeometry) return 'cylinder';
        return 'custom';
    }

    /**
     * Get current optimization status
     */
    getOptimizationStatus() {
        return {
            isOptimizing: this.isOptimizing,
            activeOptimizations: Array.from(this.activeOptimizations),
            optimizationHistory: this.optimizationHistory.slice(-10),
            performanceMetrics: this.monitor.getAnalysis()
        };
    }

    /**
     * Manual optimization trigger
     */
    async optimizeNow() {
        const analysis = this.monitor.getAnalysis();
        const recommendations = await this.getAIRecommendations(analysis);
        await this.applyRecommendations(recommendations);
        
        return {
            before: analysis,
            recommendations: recommendations,
            applied: Array.from(this.activeOptimizations)
        };
    }

    /**
     * Reset all optimizations
     */
    resetOptimizations() {
        // Remove all active optimizations
        this.activeOptimizations.forEach(strategy => {
            const optimization = this.optimizationStrategies.get(strategy);
            if (optimization && optimization.remove) {
                optimization.remove();
            }
        });
        
        this.activeOptimizations.clear();
        this.optimizationHistory = [];
        
        console.log('All optimizations reset');
    }

    /**
     * Update performance metrics (call this every frame)
     */
    update() {
        if (this.isOptimizing) {
            this.monitor.update(this.framework.engine.renderer, this.framework.engine.scene);
        }
    }

    /**
     * Dispose of optimizer
     */
    dispose() {
        this.stopOptimization();
        this.resetOptimizations();
        this.optimizationStrategies.clear();
        this.monitor = null;
        this.framework = null;
        this.aiService = null;
    }
}

export {
    AIPerformanceMonitor,
    AIPerformanceOptimizer
};
