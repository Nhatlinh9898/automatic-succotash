import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as ThreeJSUtils from '../../library/index.js';
import './PhysicsPlayground.css';

const PhysicsPlayground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const physicsWorldRef = useRef(null);
  
  const [activeSimulation, setActiveSimulation] = useState('gravity');
  const [isPlaying, setIsPlaying] = useState(true);
  const [gravity, setGravity] = useState(-9.8);
  const [friction, setFriction] = useState(0.5);
  const [restitution, setRestitution] = useState(0.7);
  const [objectCount, setObjectCount] = useState(10);
  const [showDebug, setShowDebug] = useState(false);
  
  const physicsObjects = useRef([]);
  const constraints = useRef([]);

  const simulations = [
    { id: 'gravity', name: 'Gravity Well', icon: '🌍', description: 'Objects attracted to center' },
    { id: 'collision', name: 'Collision Detection', icon: '💥', description: 'Bouncing balls with physics' },
    { id: 'cloth', name: 'Cloth Simulation', icon: '👕', description: 'Realistic cloth physics' },
    { id: 'chain', name: 'Chain Reaction', icon: '⛓️', description: 'Domino and chain effects' },
    { id: 'fluid', name: 'Fluid Dynamics', icon: '💧', description: 'Liquid particle simulation' },
    { id: 'destruction', name: 'Destruction', icon: '💥', description: 'Breaking objects' },
    { id: 'pendulum', name: 'Pendulum', icon: '🔄', description: 'Swinging pendulum systems' },
    { id: 'spring', name: 'Spring Physics', icon: '🌀', description: 'Spring and elastic systems' }
  ];

  useEffect(() => {
    if (mountRef.current && !sceneRef.current) {
      initializeScene();
    }
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      loadSimulation(activeSimulation);
    }
  }, [activeSimulation]);

  useEffect(() => {
    if (physicsWorldRef.current) {
      physicsWorldRef.current.gravity = new THREE.Vector3(0, gravity, 0);
    }
  }, [gravity]);

  const initializeScene = () => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Add lighting
    ThreeJSUtils.addBasicLighting(scene);
    ThreeJSUtils.addRealisticShadows(renderer, scene);
    
    // Create ground
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x404040,
      side: THREE.DoubleSide
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -10;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Initialize physics world
    initializePhysicsWorld();
    
    // Add orbit controls
    const controls = ThreeJSUtils.setupOrbitControls(camera, renderer);
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      
      if (isPlaying) {
        updatePhysics();
      }
      
      renderer.render(scene, camera);
    };
    animate();
  };

  const initializePhysicsWorld = () => {
    physicsWorldRef.current = {
      gravity: new THREE.Vector3(0, gravity, 0),
      objects: [],
      constraints: [],
      timeStep: 1/60,
      maxSubSteps: 3
    };
  };

  const loadSimulation = (simulationId) => {
    clearSimulation();
    
    switch (simulationId) {
      case 'gravity':
        createGravityWell();
        break;
      case 'collision':
        createCollisionSimulation();
        break;
      case 'cloth':
        createClothSimulation();
        break;
      case 'chain':
        createChainReaction();
        break;
      case 'fluid':
        createFluidSimulation();
        break;
      case 'destruction':
        createDestructionSimulation();
        break;
      case 'pendulum':
        createPendulumSimulation();
        break;
      case 'spring':
        createSpringSimulation();
        break;
    }
  };

  const clearSimulation = () => {
    // Remove physics objects
    physicsObjects.current.forEach(obj => {
      sceneRef.current.remove(obj.mesh);
    });
    physicsObjects.current = [];
    
    // Remove constraints
    constraints.current.forEach(constraint => {
      if (constraint.mesh) {
        sceneRef.current.remove(constraint.mesh);
      }
    });
    constraints.current = [];
  };

  const createPhysicsObject = (geometry, material, position, velocity = new THREE.Vector3(), mass = 1) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    sceneRef.current.add(mesh);
    
    const physicsObject = {
      mesh,
      velocity: velocity.clone(),
      mass,
      forces: new THREE.Vector3(),
      restitution,
      friction
    };
    
    physicsObjects.current.push(physicsObject);
    return physicsObject;
  };

  const createGravityWell = () => {
    const center = new THREE.Vector3(0, 0, 0);
    const attractorMass = 100;
    
    // Create central attractor
    const attractorGeometry = new THREE.SphereGeometry(2, 32, 32);
    const attractorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffff00,
      emissive: 0xffff00,
      emissiveIntensity: 0.3
    });
    const attractor = new THREE.Mesh(attractorGeometry, attractorMaterial);
    attractor.position.copy(center);
    sceneRef.current.add(attractor);
    
    // Create orbiting objects
    for (let i = 0; i < objectCount; i++) {
      const angle = (i / objectCount) * Math.PI * 2;
      const radius = 5 + Math.random() * 10;
      const height = (Math.random() - 0.5) * 5;
      
      const position = new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      
      // Calculate orbital velocity
      const distance = position.distanceTo(center);
      const orbitalSpeed = Math.sqrt(attractorMass / distance) * 0.5;
      const velocity = new THREE.Vector3(
        -Math.sin(angle) * orbitalSpeed,
        0,
        Math.cos(angle) * orbitalSpeed
      );
      
      const geometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.5, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5)
      });
      
      createPhysicsObject(geometry, material, position, velocity, 0.5);
    }
    
    // Custom gravity calculation for gravity well
    physicsWorldRef.current.customGravity = (obj) => {
      const toCenter = center.clone().sub(obj.mesh.position);
      const distance = Math.max(toCenter.length(), 1);
      const force = toCenter.normalize().multiplyScalar(attractorMass / (distance * distance));
      return force;
    };
  };

  const createCollisionSimulation = () => {
    // Create container walls
    const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
    const wallThickness = 0.5;
    const wallHeight = 10;
    const containerSize = 15;
    
    // Floor
    const floorGeometry = new THREE.BoxGeometry(containerSize, wallThickness, containerSize);
    const floor = new THREE.Mesh(floorGeometry, wallMaterial);
    floor.position.y = -containerSize/2;
    floor.receiveShadow = true;
    sceneRef.current.add(floor);
    
    // Walls
    const wallGeometry = new THREE.BoxGeometry(containerSize, wallHeight, wallThickness);
    const walls = [
      { pos: [0, 0, containerSize/2] },
      { pos: [0, 0, -containerSize/2] },
      { pos: [containerSize/2, 0, 0], rot: [0, Math.PI/2, 0] },
      { pos: [-containerSize/2, 0, 0], rot: [0, Math.PI/2, 0] }
    ];
    
    walls.forEach(wall => {
      const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
      wallMesh.position.set(...wall.pos);
      if (wall.rot) {
        wallMesh.rotation.set(...wall.rot);
      }
      wallMesh.receiveShadow = true;
      sceneRef.current.add(wallMesh);
    });
    
    // Create bouncing balls
    for (let i = 0; i < objectCount; i++) {
      const radius = 0.3 + Math.random() * 0.7;
      const geometry = new THREE.SphereGeometry(radius, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5)
      });
      
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * containerSize * 0.8,
        Math.random() * containerSize * 0.5,
        (Math.random() - 0.5) * containerSize * 0.8
      );
      
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        Math.random() * 5,
        (Math.random() - 0.5) * 5
      );
      
      createPhysicsObject(geometry, material, position, velocity, radius * 2);
    }
  };

  const createClothSimulation = () => {
    const clothSize = 10;
    const resolution = 20;
    const particleMass = 0.1;
    
    // Create cloth particles
    const particles = [];
    const constraints = [];
    
    for (let y = 0; y <= resolution; y++) {
      for (let x = 0; x <= resolution; x++) {
        const geometry = new THREE.SphereGeometry(0.05, 8, 8);
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        
        const position = new THREE.Vector3(
          (x / resolution - 0.5) * clothSize,
          5,
          (y / resolution - 0.5) * clothSize
        );
        
        const particle = createPhysicsObject(geometry, material, position, new THREE.Vector3(), particleMass);
        particles.push(particle);
        
        // Pin top corners
        if ((y === 0 && (x === 0 || x === resolution))) {
          particle.pinned = true;
        }
      }
    }
    
    // Create constraints between particles
    for (let y = 0; y <= resolution; y++) {
      for (let x = 0; x <= resolution; x++) {
        const index = y * (resolution + 1) + x;
        
        // Horizontal constraint
        if (x < resolution) {
          constraints.push({
            p1: particles[index],
            p2: particles[index + 1],
            restLength: clothSize / resolution
          });
        }
        
        // Vertical constraint
        if (y < resolution) {
          constraints.push({
            p1: particles[index],
            p2: particles[index + resolution + 1],
            restLength: clothSize / resolution
          });
        }
      }
    }
    
    // Store constraints for physics update
    constraints.current = constraints;
    
    // Create cloth visualization
    const clothGeometry = new THREE.PlaneGeometry(clothSize, clothSize, resolution, resolution);
    const clothMaterial = new THREE.MeshPhongMaterial({
      color: 0x0066cc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const clothMesh = new THREE.Mesh(clothGeometry, clothMaterial);
    clothMesh.position.y = 5;
    clothMesh.castShadow = true;
    sceneRef.current.add(clothMesh);
    
    // Update cloth geometry from particles
    physicsWorldRef.current.updateCloth = () => {
      const positions = clothGeometry.attributes.position.array;
      
      for (let y = 0; y <= resolution; y++) {
        for (let x = 0; x <= resolution; x++) {
          const index = y * (resolution + 1) + x;
          const particle = particles[index];
          const posIndex = index * 3;
          
          positions[posIndex] = particle.mesh.position.x;
          positions[posIndex + 1] = particle.mesh.position.y;
          positions[posIndex + 2] = particle.mesh.position.z;
        }
      }
      
      clothGeometry.attributes.position.needsUpdate = true;
      clothGeometry.computeVertexNormals();
    };
  };

  const createChainReaction = () => {
    const dominoHeight = 2;
    const dominoWidth = 0.3;
    const dominoDepth = 1;
    const spacing = 1.5;
    const rowCount = 5;
    const colCount = Math.floor(objectCount / rowCount);
    
    // Create dominoes
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        const geometry = new THREE.BoxGeometry(dominoWidth, dominoHeight, dominoDepth);
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color().setHSL(row / rowCount, 0.8, 0.5)
        });
        
        const position = new THREE.Vector3(
          (col - colCount/2) * spacing,
          dominoHeight/2,
          (row - rowCount/2) * spacing
        );
        
        const domino = createPhysicsObject(geometry, material, position, new THREE.Vector3(), 1);
        
        // Add slight random rotation for realism
        domino.mesh.rotation.y = Math.random() * 0.1;
        domino.mesh.rotation.z = Math.random() * 0.05;
      }
    }
    
    // Push first domino after a delay
    setTimeout(() => {
      if (physicsObjects.current.length > 0) {
        physicsObjects.current[0].velocity.x = 5;
      }
    }, 1000);
  };

  const createFluidSimulation = () => {
    const particleCount = Math.min(objectCount * 10, 500);
    const particleRadius = 0.1;
    const containerSize = 10;
    
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(particleRadius, 8, 8);
      const material = new THREE.MeshPhongMaterial({
        color: 0x0099ff,
        transparent: true,
        opacity: 0.6
      });
      
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * containerSize,
        Math.random() * containerSize,
        (Math.random() - 0.5) * containerSize
      );
      
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        -Math.random() * 2,
        (Math.random() - 0.5) * 2
      );
      
      const particle = createPhysicsObject(geometry, material, position, velocity, 0.01);
      particle.isFluid = true;
    }
    
    // Fluid-specific physics
    physicsWorldRef.current.fluidForces = (particles) => {
      const smoothingRadius = 1.0;
      const pressureMultiplier = 20;
      const viscosityMultiplier = 0.018;
      
      particles.forEach((p1, i) => {
        let pressureForce = new THREE.Vector3();
        let viscosityForce = new THREE.Vector3();
        
        particles.forEach((p2, j) => {
          if (i === j) return;
          
          const diff = p2.mesh.position.clone().sub(p1.mesh.position);
          const distance = diff.length();
          
          if (distance < smoothingRadius) {
            // Pressure force
            const pressure = (smoothingRadius - distance) / smoothingRadius;
            pressureForce.add(diff.normalize().multiplyScalar(pressure * pressureMultiplier));
            
            // Viscosity force
            const velocityDiff = p2.velocity.clone().sub(p1.velocity);
            viscosityForce.add(velocityDiff.multiplyScalar(viscosityMultiplier * pressure));
          }
        });
        
        p1.forces.add(pressureForce);
        p1.forces.add(viscosityForce);
      });
    };
  };

  const createDestructionSimulation = () => {
    // Create a destructible box
    const boxSize = 4;
    const fragmentSize = 0.5;
    const fragmentsPerSide = Math.floor(boxSize / fragmentSize);
    
    for (let x = 0; x < fragmentsPerSide; x++) {
      for (let y = 0; y < fragmentsPerSide; y++) {
        for (let z = 0; z < fragmentsPerSide; z++) {
          const geometry = new THREE.BoxGeometry(fragmentSize, fragmentSize, fragmentSize);
          const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color().setHSL(Math.random() * 0.1, 0.8, 0.5)
          });
          
          const position = new THREE.Vector3(
            (x - fragmentsPerSide/2 + 0.5) * fragmentSize,
            (y - fragmentsPerSide/2 + 0.5) * fragmentSize,
            (z - fragmentsPerSide/2 + 0.5) * fragmentSize
          );
          
          const fragment = createPhysicsObject(geometry, material, position, new THREE.Vector3(), 0.1);
          fragment.isFragment = true;
        }
      }
    }
    
    // Apply explosion force after delay
    setTimeout(() => {
      const explosionCenter = new THREE.Vector3(0, 0, 0);
      const explosionForce = 50;
      
      physicsObjects.current.forEach(obj => {
        if (obj.isFragment) {
          const direction = obj.mesh.position.clone().sub(explosionCenter).normalize();
          const distance = obj.mesh.position.distanceTo(explosionCenter);
          const force = direction.multiplyScalar(explosionForce / Math.max(distance, 1));
          obj.velocity.add(force);
        }
      });
    }, 1000);
  };

  const createPendulumSimulation = () => {
    const pendulumCount = Math.min(objectCount, 10);
    const pendulumLength = 5;
    const bobRadius = 0.3;
    
    for (let i = 0; i < pendulumCount; i++) {
      const angle = (i / pendulumCount) * Math.PI * 2;
      const radius = 2;
      
      // Anchor point
      const anchorPosition = new THREE.Vector3(
        Math.cos(angle) * radius,
        5,
        Math.sin(angle) * radius
      );
      
      // Bob position
      const bobPosition = new THREE.Vector3(
        Math.cos(angle) * radius,
        5 - pendulumLength,
        Math.sin(angle) * radius
      );
      
      // Create bob
      const geometry = new THREE.SphereGeometry(bobRadius, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i / pendulumCount, 0.8, 0.5)
      });
      
      const bob = createPhysicsObject(geometry, material, bobPosition, new THREE.Vector3(), 1);
      bob.anchorPoint = anchorPosition;
      bob.pendulumLength = pendulumLength;
      
      // Create rod visualization
      const rodGeometry = new THREE.CylinderGeometry(0.02, 0.02, pendulumLength);
      const rodMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
      const rod = new THREE.Mesh(rodGeometry, rodMaterial);
      rod.position.copy(anchorPosition);
      rod.position.y -= pendulumLength / 2;
      sceneRef.current.add(rod);
      
      bob.rod = rod;
      
      // Give initial push
      bob.velocity.x = Math.sin(angle) * 2;
    }
    
    // Pendulum constraints
    physicsWorldRef.current.applyPendulumConstraints = () => {
      physicsObjects.current.forEach(obj => {
        if (obj.anchorPoint) {
          const toAnchor = obj.anchorPoint.clone().sub(obj.mesh.position);
          const distance = toAnchor.length();
          
          if (distance > obj.pendulumLength) {
            const correction = toAnchor.normalize().multiplyScalar(distance - obj.pendulumLength);
            obj.mesh.position.add(correction);
            
            // Project velocity to be tangent to circle
            const radial = obj.mesh.position.clone().sub(obj.anchorPoint).normalize();
            const radialVelocity = radial.clone().multiplyScalar(obj.velocity.dot(radial));
            obj.velocity.sub(radialVelocity);
          }
          
          // Update rod position
          if (obj.rod) {
            obj.rod.position.copy(obj.anchorPoint);
            obj.rod.position.lerp(obj.mesh.position, 0.5);
            obj.rod.lookAt(obj.mesh.position);
            obj.rod.rotateX(Math.PI / 2);
          }
        }
      });
    };
  };

  const createSpringSimulation = () => {
    const springCount = Math.min(objectCount, 8);
    const springLength = 2;
    const springStiffness = 50;
    const springDamping = 0.5;
    
    for (let i = 0; i < springCount; i++) {
      const angle = (i / springCount) * Math.PI * 2;
      const radius = 3;
      
      // Fixed point
      const fixedPoint = new THREE.Vector3(
        Math.cos(angle) * radius,
        5,
        Math.sin(angle) * radius
      );
      
      // Mass point
      const massPosition = new THREE.Vector3(
        Math.cos(angle) * radius,
        5 - springLength,
        Math.sin(angle) * radius
      );
      
      // Create mass
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i / springCount, 0.8, 0.5)
      });
      
      const mass = createPhysicsObject(geometry, material, massPosition, new THREE.Vector3(), 1);
      mass.fixedPoint = fixedPoint;
      mass.springLength = springLength;
      mass.springStiffness = springStiffness;
      mass.springDamping = springDamping;
      
      // Create spring visualization
      const springGeometry = new THREE.CylinderGeometry(0.05, 0.05, springLength, 8);
      const springMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
      const spring = new THREE.Mesh(springGeometry, springMaterial);
      spring.position.copy(fixedPoint);
      spring.position.y -= springLength / 2;
      sceneRef.current.add(spring);
      
      mass.springMesh = spring;
      
      // Add initial perturbation
      mass.velocity.x = (Math.random() - 0.5) * 5;
      mass.velocity.z = (Math.random() - 0.5) * 5;
    }
    
    // Spring forces
    physicsWorldRef.current.applySpringForces = () => {
      physicsObjects.current.forEach(obj => {
        if (obj.fixedPoint) {
          const displacement = obj.mesh.position.clone().sub(obj.fixedPoint);
          const distance = displacement.length();
          const extension = distance - obj.springLength;
          
          // Spring force (Hooke's law)
          const springForce = displacement.normalize().multiplyScalar(-obj.springStiffness * extension);
          
          // Damping force
          const dampingForce = obj.velocity.clone().multiplyScalar(-obj.springDamping);
          
          obj.forces.add(springForce);
          obj.forces.add(dampingForce);
          
          // Update spring visualization
          if (obj.springMesh) {
            obj.springMesh.position.copy(obj.fixedPoint);
            obj.springMesh.position.lerp(obj.mesh.position, 0.5);
            obj.springMesh.lookAt(obj.mesh.position);
            obj.springMesh.rotateX(Math.PI / 2);
            obj.springMesh.scale.y = distance / obj.springLength;
          }
        }
      });
    };
  };

  const updatePhysics = () => {
    const dt = physicsWorldRef.current.timeStep;
    
    physicsObjects.current.forEach(obj => {
      if (obj.pinned) return;
      
      // Reset forces
      obj.forces.set(0, 0, 0);
      
      // Apply gravity
      obj.forces.add(physicsWorldRef.current.gravity.clone().multiplyScalar(obj.mass));
      
      // Apply custom forces
      if (physicsWorldRef.current.customGravity) {
        obj.forces.add(physicsWorldRef.current.customGravity(obj));
      }
      
      // Apply fluid forces
      if (physicsWorldRef.current.fluidForces && obj.isFluid) {
        // Will be applied after all forces are calculated
      }
    });
    
    // Apply fluid forces if present
    if (physicsWorldRef.current.fluidForces) {
      const fluidParticles = physicsObjects.current.filter(obj => obj.isFluid);
      physicsWorldRef.current.fluidForces(fluidParticles);
    }
    
    // Apply spring forces
    if (physicsWorldRef.current.applySpringForces) {
      physicsWorldRef.current.applySpringForces();
    }
    
    // Update velocities and positions
    physicsObjects.current.forEach(obj => {
      if (obj.pinned) return;
      
      // Update velocity
      const acceleration = obj.forces.clone().divideScalar(obj.mass);
      obj.velocity.add(acceleration.multiplyScalar(dt));
      
      // Apply damping
      obj.velocity.multiplyScalar(1 - friction * dt);
      
      // Update position
      obj.mesh.position.add(obj.velocity.clone().multiplyScalar(dt));
      
      // Simple collision with ground
      if (obj.mesh.position.y < -9.5) {
        obj.mesh.position.y = -9.5;
        obj.velocity.y *= -restitution;
      }
      
      // Boundary collisions
      const boundary = 20;
      ['x', 'y', 'z'].forEach(axis => {
        if (Math.abs(obj.mesh.position[axis]) > boundary) {
          obj.mesh.position[axis] = Math.sign(obj.mesh.position[axis]) * boundary;
          obj.velocity[axis] *= -restitution;
        }
      });
    });
    
    // Apply constraints
    if (physicsWorldRef.current.applyPendulumConstraints) {
      physicsWorldRef.current.applyPendulumConstraints();
    }
    
    // Update cloth
    if (physicsWorldRef.current.updateCloth) {
      physicsWorldRef.current.updateCloth();
    }
    
    // Simple collision detection between objects
    for (let i = 0; i < physicsObjects.current.length; i++) {
      for (let j = i + 1; j < physicsObjects.current.length; j++) {
        const obj1 = physicsObjects.current[i];
        const obj2 = physicsObjects.current[j];
        
        const distance = obj1.mesh.position.distanceTo(obj2.mesh.position);
        const minDistance = 0.6; // Approximate collision radius
        
        if (distance < minDistance) {
          // Simple collision response
          const normal = obj2.mesh.position.clone().sub(obj1.mesh.position).normalize();
          const relativeVelocity = obj2.velocity.clone().sub(obj1.velocity);
          const velocityAlongNormal = relativeVelocity.dot(normal);
          
          if (velocityAlongNormal < 0) {
            const impulse = 2 * velocityAlongNormal / (1/obj1.mass + 1/obj2.mass);
            obj1.velocity.add(normal.clone().multiplyScalar(impulse / obj1.mass * restitution));
            obj2.velocity.sub(normal.clone().multiplyScalar(impulse / obj2.mass * restitution));
          }
        }
      }
    }
  };

  const resetSimulation = () => {
    clearSimulation();
    loadSimulation(activeSimulation);
  };

  return (
    <div className="physics-playground">
      <div className="playground-header">
        <h2>⚡ Physics Playground</h2>
        <div className="simulation-info">
          <span className="current-simulation">
            {simulations.find(s => s.id === activeSimulation)?.icon} {simulations.find(s => s.id === activeSimulation)?.name}
          </span>
        </div>
      </div>

      <div className="playground-content">
        <div className="physics-controls">
          <div className="simulation-selection">
            <h3>Physics Simulations</h3>
            <div className="simulation-grid">
              {simulations.map(sim => (
                <button
                  key={sim.id}
                  className={`sim-btn ${activeSimulation === sim.id ? 'active' : ''}`}
                  onClick={() => setActiveSimulation(sim.id)}
                >
                  <span className="sim-icon">{sim.icon}</span>
                  <span className="sim-name">{sim.name}</span>
                  <span className="sim-desc">{sim.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="physics-parameters">
            <h3>Physics Parameters</h3>
            
            <div className="parameter-group">
              <label>Gravity: {gravity.toFixed(1)}</label>
              <input
                type="range"
                min="-20"
                max="0"
                step="0.1"
                value={gravity}
                onChange={(e) => setGravity(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="parameter-group">
              <label>Friction: {friction.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={friction}
                onChange={(e) => setFriction(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="parameter-group">
              <label>Restitution: {restitution.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={restitution}
                onChange={(e) => setRestitution(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="parameter-group">
              <label>Object Count: {objectCount}</label>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={objectCount}
                onChange={(e) => setObjectCount(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-buttons">
              <button
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
              <button
                className="reset-btn"
                onClick={resetSimulation}
              >
                🔄 Reset
              </button>
              <button
                className={`debug-btn ${showDebug ? 'active' : ''}`}
                onClick={() => setShowDebug(!showDebug)}
              >
                🐛 Debug
              </button>
            </div>
          </div>

          <div className="simulation-stats">
            <h3>Statistics</h3>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-label">Objects:</span>
                <span className="stat-value">{physicsObjects.current.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Constraints:</span>
                <span className="stat-value">{constraints.current.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Status:</span>
                <span className={`stat-value ${isPlaying ? 'active' : 'paused'}`}>
                  {isPlaying ? 'Running' : 'Paused'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="scene-container">
          <div ref={mountRef} className="threejs-mount" />
          <div className="scene-overlay">
            <div className="overlay-info">
              <h4>Physics Simulation</h4>
              <p>Simulation: {simulations.find(s => s.id === activeSimulation)?.name}</p>
              <p>Objects: {physicsObjects.current.length}</p>
              <p className="controls-hint">
                🖱️ Use mouse to rotate camera, scroll to zoom
              </p>
              <p className="physics-hint">
                ⚡ Adjust physics parameters to see real-time changes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsPlayground;
