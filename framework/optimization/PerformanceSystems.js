/**
 * Performance Optimization - LOD and optimization systems
 */

import * as THREE from 'three';

/**
 * LOD (Level of Detail) System
 */
class LODSystem {
    constructor() {
        this.lodObjects = new Map();
        this.camera = null;
        this.updateInterval = 100; // ms
        this.lastUpdate = 0;
    }
    
    init(camera) {
        this.camera = camera;
    }
    
    addLODObject(id, object, levels = []) {
        const lod = new THREE.LOD();
        
        // Add LOD levels
        levels.forEach(level => {
            lod.addLevel(level.object, level.distance);
        });
        
        // Store original object for reference
        this.lodObjects.set(id, {
            lod: lod,
            original: object,
            levels: levels,
            currentLevel: 0
        });
        
        return lod;
    }
    
    update(currentTime) {
        if (currentTime - this.lastUpdate < this.updateInterval) return;
        
        this.lastUpdate = currentTime;
        
        if (!this.camera) return;
        
        this.lodObjects.forEach(lodData => {
            const distance = this.camera.position.distanceTo(lodData.lod.position);
            lodData.lod.update(this.camera);
            
            // Track current level for debugging
            const currentLevel = lodData.lod.getCurrentLevel();
            if (currentLevel !== lodData.currentLevel) {
                lodData.currentLevel = currentLevel;
            }
        });
    }
    
    removeLODObject(id) {
        const lodData = this.lodObjects.get(id);
        if (lodData) {
            lodData.lod.clear();
            this.lodObjects.delete(id);
        }
    }
    
    dispose() {
        this.lodObjects.forEach(lodData => {
            lodData.lod.clear();
        });
        this.lodObjects.clear();
    }
}

/**
 * Frustum Culling System
 */
class FrustumCullingSystem {
    constructor() {
        this.cullableObjects = new Set();
        this.camera = null;
        this.frustum = new THREE.Frustum();
        this.cameraMatrix = new THREE.Matrix4();
    }
    
    init(camera) {
        this.camera = camera;
    }
    
    addObject(object) {
        this.cullableObjects.add(object);
    }
    
    removeObject(object) {
        this.cullableObjects.delete(object);
    }
    
    update() {
        if (!this.camera) return;
        
        // Update frustum
        this.cameraMatrix.multiplyMatrices(
            this.camera.projectionMatrix,
            this.camera.matrixWorldInverse
        );
        this.frustum.setFromProjectionMatrix(this.cameraMatrix);
        
        // Cull objects
        this.cullableObjects.forEach(object => {
            if (object.geometry && !object.geometry.boundingSphere) {
                object.geometry.computeBoundingSphere();
            }
            
            if (object.geometry && object.geometry.boundingSphere) {
                const sphere = object.geometry.boundingSphere.clone();
                sphere.applyMatrix4(object.matrixWorld);
                
                object.visible = this.frustum.intersectsSphere(sphere);
            }
        });
    }
    
    dispose() {
        this.cullableObjects.clear();
    }
}

/**
 * Object Pooling System
 */
class ObjectPool {
    constructor(createFn, resetFn, maxSize = 100) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.maxSize = maxSize;
        this.pool = [];
        this.activeObjects = new Set();
    }
    
    acquire() {
        let object;
        
        if (this.pool.length > 0) {
            object = this.pool.pop();
        } else {
            object = this.createFn();
        }
        
        this.activeObjects.add(object);
        return object;
    }
    
    release(object) {
        if (this.activeObjects.has(object)) {
            this.activeObjects.delete(object);
            
            if (this.pool.length < this.maxSize) {
                this.resetFn(object);
                this.pool.push(object);
            }
        }
    }
    
    releaseAll() {
        this.activeObjects.forEach(object => {
            if (this.pool.length < this.maxSize) {
                this.resetFn(object);
                this.pool.push(object);
            }
        });
        this.activeObjects.clear();
    }
    
    getActiveCount() {
        return this.activeObjects.size;
    }
    
    getPoolSize() {
        return this.pool.length;
    }
    
    dispose() {
        // Dispose all objects
        [...this.pool, ...this.activeObjects].forEach(object => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(m => m.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
        
        this.pool = [];
        this.activeObjects.clear();
    }
}

/**
 * Batch Rendering System
 */
class BatchRenderingSystem {
    constructor() {
        this.batches = new Map();
        this.instancedMeshes = new Map();
    }
    
    createBatch(materialKey, geometry, maxInstances = 1000) {
        const material = this.getMaterial(materialKey);
        const instancedMesh = new THREE.InstancedMesh(geometry, material, maxInstances);
        
        this.instancedMeshes.set(materialKey, {
            mesh: instancedMesh,
            instances: [],
            maxInstances: maxInstances,
            matrix: new THREE.Matrix4()
        });
        
        return instancedMesh;
    }
    
    addInstance(materialKey, position, rotation, scale) {
        const batch = this.instancedMeshes.get(materialKey);
        if (!batch) return null;
        
        if (batch.instances.length >= batch.maxInstances) {
            console.warn(`Batch ${materialKey} is full`);
            return null;
        }
        
        const instanceId = batch.instances.length;
        batch.instances.push({
            position: position.clone(),
            rotation: rotation.clone(),
            scale: scale.clone()
        });
        
        // Update instance matrix
        const matrix = new THREE.Matrix4();
        matrix.compose(position, rotation, scale);
        batch.mesh.setMatrixAt(instanceId, matrix);
        batch.mesh.instanceMatrix.needsUpdate = true;
        
        return instanceId;
    }
    
    updateInstance(materialKey, instanceId, position, rotation, scale) {
        const batch = this.instancedMeshes.get(materialKey);
        if (!batch || instanceId >= batch.instances.length) return;
        
        batch.instances[instanceId] = {
            position: position.clone(),
            rotation: rotation.clone(),
            scale: scale.clone()
        };
        
        const matrix = new THREE.Matrix4();
        matrix.compose(position, rotation, scale);
        batch.mesh.setMatrixAt(instanceId, matrix);
        batch.mesh.instanceMatrix.needsUpdate = true;
    }
    
    removeInstance(materialKey, instanceId) {
        const batch = this.instancedMeshes.get(materialKey);
        if (!batch || instanceId >= batch.instances.length) return;
        
        // Remove instance and shift others
        batch.instances.splice(instanceId, 1);
        
        // Rebuild matrices
        batch.instances.forEach((instance, i) => {
            const matrix = new THREE.Matrix4();
            matrix.compose(instance.position, instance.rotation, instance.scale);
            batch.mesh.setMatrixAt(i, matrix);
        });
        
        batch.mesh.count = batch.instances.length;
        batch.mesh.instanceMatrix.needsUpdate = true;
    }
    
    getMaterial(materialKey) {
        // Create or reuse materials
        if (!this.batches.has(materialKey)) {
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.5,
                metalness: 0.0
            });
            this.batches.set(materialKey, material);
        }
        
        return this.batches.get(materialKey);
    }
    
    dispose() {
        this.instancedMeshes.forEach(batch => {
            batch.mesh.geometry.dispose();
            batch.mesh.material.dispose();
        });
        
        this.batches.forEach(material => {
            material.dispose();
        });
        
        this.instancedMeshes.clear();
        this.batches.clear();
    }
}

/**
 * Memory Management System
 */
class MemoryManagementSystem {
    constructor() {
        this.textures = new Map();
        this.geometries = new Map();
        this.materials = new Map();
        this.disposalQueue = [];
        this.maxMemoryUsage = 500; // MB
        this.checkInterval = 5000; // ms
        this.lastCheck = 0;
    }
    
    trackTexture(id, texture) {
        this.textures.set(id, texture);
    }
    
    trackGeometry(id, geometry) {
        this.geometries.set(id, geometry);
    }
    
    trackMaterial(id, material) {
        this.materials.set(id, material);
    }
    
    releaseTexture(id) {
        const texture = this.textures.get(id);
        if (texture) {
            texture.dispose();
            this.textures.delete(id);
        }
    }
    
    releaseGeometry(id) {
        const geometry = this.geometries.get(id);
        if (geometry) {
            geometry.dispose();
            this.geometries.delete(id);
        }
    }
    
    releaseMaterial(id) {
        const material = this.materials.get(id);
        if (material) {
            material.dispose();
            this.materials.delete(id);
        }
    }
    
    scheduleDisposal(object, delay = 0) {
        this.disposalQueue.push({
            object: object,
            disposeTime: performance.now() + delay
        });
    }
    
    update(currentTime) {
        if (currentTime - this.lastCheck < this.checkInterval) return;
        
        this.lastCheck = currentTime;
        
        // Process disposal queue
        this.disposalQueue = this.disposalQueue.filter(item => {
            if (currentTime >= item.disposeTime) {
                this.disposeObject(item.object);
                return false;
            }
            return true;
        });
        
        // Check memory usage
        this.checkMemoryUsage();
    }
    
    disposeObject(object) {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
            if (Array.isArray(object.material)) {
                object.material.forEach(m => m.dispose());
            } else {
                object.material.dispose();
            }
        }
    }
    
    checkMemoryUsage() {
        if (performance.memory) {
            const usage = performance.memory.usedJSHeapSize / 1048576; // MB
            
            if (usage > this.maxMemoryUsage) {
                this.performGarbageCollection();
            }
        }
    }
    
    performGarbageCollection() {
        // Dispose least recently used resources
        console.warn('High memory usage detected, performing garbage collection');
        
        // Simple LRU implementation - dispose oldest resources
        const maxResources = 100;
        
        if (this.textures.size > maxResources) {
            const toRemove = this.textures.size - maxResources;
            const entries = Array.from(this.textures.entries());
            
            for (let i = 0; i < toRemove; i++) {
                this.releaseTexture(entries[i][0]);
            }
        }
        
        if (this.geometries.size > maxResources) {
            const toRemove = this.geometries.size - maxResources;
            const entries = Array.from(this.geometries.entries());
            
            for (let i = 0; i < toRemove; i++) {
                this.releaseGeometry(entries[i][0]);
            }
        }
    }
    
    getMemoryStats() {
        const stats = {
            textures: this.textures.size,
            geometries: this.geometries.size,
            materials: this.materials.size,
            disposalQueue: this.disposalQueue.length
        };
        
        if (performance.memory) {
            stats.used = performance.memory.usedJSHeapSize / 1048576;
            stats.total = performance.memory.totalJSHeapSize / 1048576;
            stats.limit = performance.memory.jsHeapSizeLimit / 1048576;
        }
        
        return stats;
    }
    
    dispose() {
        // Dispose all tracked resources
        this.textures.forEach(texture => texture.dispose());
        this.geometries.forEach(geometry => geometry.dispose());
        this.materials.forEach(material => material.dispose());
        
        this.textures.clear();
        this.geometries.clear();
        this.materials.clear();
        this.disposalQueue = [];
    }
}

export {
    LODSystem,
    FrustumCullingSystem,
    ObjectPool,
    BatchRenderingSystem,
    MemoryManagementSystem
};
