/**
 * Model Loader - Load and parse 3D model definitions
 * Supports JSON-based model definitions for the 3D Character Generator
 */

import * as THREE from 'three';

class ModelLoader {
  constructor() {
    this.loadedModels = new Map();
    this.modelCache = new Map();
  }

  /**
   * Load model from JSON definition
   */
  async loadModel(modelPath) {
    try {
      // Check cache first
      if (this.modelCache.has(modelPath)) {
        return this.modelCache.get(modelPath);
      }

      // Fetch model definition
      const response = await fetch(modelPath);
      if (!response.ok) {
        throw new Error(`Failed to load model: ${response.statusText}`);
      }

      const modelDefinition = await response.json();
      
      // Create THREE.js objects from definition
      const model = this.createModelFromDefinition(modelDefinition);
      
      // Cache the result
      this.modelCache.set(modelPath, model);
      this.loadedModels.set(modelDefinition.name, model);

      console.log(`✅ Model loaded: ${modelDefinition.name}`);
      return model;

    } catch (error) {
      console.error(`❌ Failed to load model ${modelPath}:`, error);
      throw error;
    }
  }

  /**
   * Load model with fallback paths
   */
  async loadModelWithFallback(modelPath) {
    try {
      // Try primary path
      return await this.loadModel(modelPath);
    } catch (error) {
      console.warn(`⚠️ Failed to load from ${modelPath}, trying fallback paths...`);
      
      // Try fallback paths
      const fallbackPaths = [
        modelPath.replace('/models/', '/public/models/'),
        modelPath.replace('/src/models/', '/models/')
      ];
      
      for (const fallbackPath of fallbackPaths) {
        try {
          console.log(`🔄 Trying fallback path: ${fallbackPath}`);
          return await this.loadModel(fallbackPath);
        } catch (fallbackError) {
          console.warn(`⚠️ Fallback path ${fallbackPath} also failed:`, fallbackError);
        }
      }
      
      throw new Error(`All paths failed for model: ${modelPath}`);
    }
  }

  /**
   * Create THREE.js objects from model definition
   */
  createModelFromDefinition(definition) {
    const model = new THREE.Group();
    model.name = definition.name;
    model.userData = {
      ...definition.metadata,
      loadedAt: new Date().toISOString()
    };

    // Create materials
    const materials = this.createMaterials(definition.materials);

    // Create geometries
    const geometries = this.createGeometries(definition.geometries);

    // Create nodes (meshes and groups)
    definition.nodes.forEach(nodeDef => {
      const node = this.createNode(nodeDef, geometries, materials);
      if (node) {
        model.add(node);
      }
    });

    // Create animations if defined
    if (definition.animations && definition.animations.length > 0) {
      model.animations = this.createAnimations(definition.animations);
      model.userData.hasAnimations = true;
    }

    return model;
  }

  /**
   * Create materials from definition
   */
  createMaterials(materialDefs) {
    const materials = new Map();

    materialDefs.forEach(matDef => {
      let material;

      switch (matDef.type) {
        case 'MeshStandardMaterial':
          material = new THREE.MeshStandardMaterial(matDef.properties);
          break;
        case 'MeshBasicMaterial':
          material = new THREE.MeshBasicMaterial(matDef.properties);
          break;
        case 'MeshLambertMaterial':
          material = new THREE.MeshLambertMaterial(matDef.properties);
          break;
        case 'MeshPhongMaterial':
          material = new THREE.MeshPhongMaterial(matDef.properties);
          break;
        default:
          console.warn(`Unknown material type: ${matDef.type}, using MeshStandardMaterial`);
          material = new THREE.MeshStandardMaterial(matDef.properties);
      }

      materials.set(matDef.name, material);
    });

    return materials;
  }

  /**
   * Create geometries from definition
   */
  createGeometries(geometryDefs) {
    const geometries = new Map();

    geometryDefs.forEach(geoDef => {
      let geometry;

      switch (geoDef.type) {
        case 'BoxGeometry':
          geometry = new THREE.BoxGeometry(
            geoDef.parameters.width,
            geoDef.parameters.height,
            geoDef.parameters.depth
          );
          break;
        case 'SphereGeometry':
          geometry = new THREE.SphereGeometry(
            geoDef.parameters.radius,
            geoDef.parameters.widthSegments,
            geoDef.parameters.heightSegments
          );
          break;
        case 'CapsuleGeometry':
          geometry = new THREE.CapsuleGeometry(
            geoDef.parameters.radiusTop,
            geoDef.parameters.height,
            geoDef.parameters.radialSegments
          );
          break;
        case 'ConeGeometry':
          geometry = new THREE.ConeGeometry(
            geoDef.parameters.radiusTop,
            geoDef.parameters.height,
            geoDef.parameters.radialSegments
          );
          break;
        case 'CylinderGeometry':
          geometry = new THREE.CylinderGeometry(
            geoDef.parameters.radiusTop,
            geoDef.parameters.radiusBottom,
            geoDef.parameters.height,
            geoDef.parameters.radialSegments
          );
          break;
        case 'PlaneGeometry':
          geometry = new THREE.PlaneGeometry(
            geoDef.parameters.width,
            geoDef.parameters.height
          );
          break;
        case 'TorusGeometry':
          geometry = new THREE.TorusGeometry(
            geoDef.parameters.radius,
            geoDef.parameters.tube,
            geoDef.parameters.radialSegments,
            geoDef.parameters.tubularSegments
          );
          break;
        default:
          console.warn(`Unknown geometry type: ${geoDef.type}, using BoxGeometry`);
          geometry = new THREE.BoxGeometry(1, 1, 1);
      }

      geometries.set(geoDef.name, geometry);
    });

    return geometries;
  }

  /**
   * Create node (mesh or group) from definition
   */
  createNode(nodeDef, geometries, materials) {
    let node;

    switch (nodeDef.type) {
      case 'Mesh':
        const geometry = geometries.get(nodeDef.geometry);
        const material = materials.get(nodeDef.material);
        
        if (geometry && material) {
          node = new THREE.Mesh(geometry, material);
          node.name = nodeDef.name;
          node.castShadow = true;
          node.receiveShadow = true;
        }
        break;

      case 'Group':
        node = new THREE.Group();
        node.name = nodeDef.name;
        
        // Add children if specified
        if (nodeDef.children) {
          nodeDef.children.forEach(childName => {
            const childNode = this.createNode(
              { name: childName, type: 'Mesh', geometry: childName, material: 'character_material' },
              geometries,
              materials
            );
            if (childNode) {
              node.add(childNode);
            }
          });
        }
        break;

      default:
        console.warn(`Unknown node type: ${nodeDef.type}`);
        return null;
    }

    // Apply transform if specified
    if (nodeDef.transform && node) {
      this.applyTransform(node, nodeDef.transform);
    }

    return node;
  }

  /**
   * Apply transform to node
   */
  applyTransform(node, transform) {
    if (transform.position) {
      node.position.fromArray(transform.position);
    }
    
    if (transform.rotation) {
      if (transform.rotation.x) node.rotation.x = transform.rotation.x;
      if (transform.rotation.y) node.rotation.y = transform.rotation.y;
      if (transform.rotation.z) node.rotation.z = transform.rotation.z;
    }
    
    if (transform.scale) {
      node.scale.fromArray(transform.scale);
    }
  }

  /**
   * Create animations from definition
   */
  createAnimations(animationDefs) {
    const animations = [];

    animationDefs.forEach(animDef => {
      let animation;

      switch (animDef.type) {
        case 'rotation':
          animation = this.createRotationAnimation(animDef);
          break;
        case 'translation':
          animation = this.createTranslationAnimation(animDef);
          break;
        case 'scale':
          animation = this.createScaleAnimation(animDef);
          break;
        default:
          console.warn(`Unknown animation type: ${animDef.type}`);
          return;
      }

      animations.push(animation);
    });

    return animations;
  }

  /**
   * Create rotation animation
   */
  createRotationAnimation(animDef) {
    const times = [0, animDef.duration];
    const values = [0, Math.PI * 2];

    const trackName = `${animDef.name}_${animDef.properties.axis}Rotation`;
    const track = new THREE.NumberKeyframeTrack(trackName, times, values);

    const clip = new THREE.AnimationClip(animDef.name, [track]);
    clip.loop = animDef.properties.loop || false;

    return clip;
  }

  /**
   * Create translation animation
   */
  createTranslationAnimation(animDef) {
    const times = [0, animDef.duration];
    const values = [0, animDef.properties.distance];

    const trackName = `${animDef.name}_${animDef.properties.axis}Position`;
    const track = new THREE.NumberKeyframeTrack(trackName, times, values);

    const clip = new THREE.AnimationClip(animDef.name, [track]);
    clip.loop = animDef.properties.loop || false;

    return clip;
  }

  /**
   * Create scale animation
   */
  createScaleAnimation(animDef) {
    const times = [0, animDef.duration];
    const values = [1, animDef.properties.scale || 1.5];

    const trackName = `${animDef.name}_scale`;
    const track = new THREE.VectorKeyframeTrack(trackName, times, values);

    const clip = new THREE.AnimationClip(animDef.name, [track]);
    clip.loop = animDef.properties.loop || false;

    return clip;
  }

  /**
   * Get available models
   */
  getAvailableModels() {
    return Array.from(this.loadedModels.keys());
  }

  /**
   * Get model by name
   */
  getModel(name) {
    return this.loadedModels.get(name);
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.modelCache.clear();
    console.log('Model cache cleared');
  }

  /**
   * Get model info
   */
  getModelInfo(name) {
    const model = this.loadedModels.get(name);
    if (!model) return null;

    return {
      name: model.name,
      userData: model.userData,
      hasAnimations: model.userData.hasAnimations || false,
      animations: model.animations || [],
      children: model.children ? model.children.length : 0
    };
  }
}

export default ModelLoader;
