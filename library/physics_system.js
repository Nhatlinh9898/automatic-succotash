// Three.js Physics System Library
// Cloth simulation, explosion effects, and physics-based animations

import * as THREE from 'three';

export function createExplosionSystem(scene) {
    // Advanced explosion system with fragments
    function explodeModelAdvanced(model) {
        const fragmentCount = 50;
        const fragments = [];
        const originalPosition = model.position.clone();
        const originalMaterial = model.material;

        for (let i = 0; i < fragmentCount; i++) {
            const fragment = new THREE.Mesh(
                new THREE.BoxGeometry(0.2, 0.2, 0.2),
                new THREE.MeshStandardMaterial({ 
                    color: Math.random() * 0xffffff,
                    roughness: 0.5
                })
            );
            fragment.position.copy(originalPosition);
            fragment.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                Math.random() * 8 + 2,
                (Math.random() - 0.5) * 10
            );
            fragment.angularVelocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.2,
                (Math.random() - 0.5) * 0.2,
                (Math.random() - 0.5) * 0.2
            );
            fragments.push(fragment);
            scene.add(fragment);
        }

        // Remove original model
        scene.remove(model);

        // Animate explosion
        function animateExplosion() {
            let allSettled = true;
            
            fragments.forEach(fragment => {
                // Apply velocity
                fragment.position.add(fragment.velocity.clone().multiplyScalar(0.016));
                fragment.rotation.x += fragment.angularVelocity.x;
                fragment.rotation.y += fragment.angularVelocity.y;
                fragment.rotation.z += fragment.angularVelocity.z;
                
                // Apply gravity
                fragment.velocity.y -= 0.3;
                
                // Apply damping
                fragment.velocity.multiplyScalar(0.98);
                fragment.angularVelocity.multiplyScalar(0.95);
                
                // Check if settled
                if (fragment.velocity.length() > 0.1) {
                    allSettled = false;
                }
            });
            
            return !allSettled;
        }

        return { fragments, animateExplosion };
    }

    return { explodeModelAdvanced };
}

export function createClothSimulation(scene) {
    // Dynamic cloth simulation
    const clothGeometry = new THREE.PlaneGeometry(5, 5, 32, 32);
    const clothMaterial = new THREE.MeshStandardMaterial({
        color: 0xff5733,
        side: THREE.DoubleSide,
        roughness: 0.8
    });
    
    const cloth = new THREE.Mesh(clothGeometry, clothMaterial);
    scene.add(cloth);

    // Add cloth physics properties
    const clothParticles = [];
    const constraints = [];
    
    function initializeCloth() {
        const particles = clothGeometry.attributes.position.array;
        
        // Create particles for cloth vertices
        for (let i = 0; i < particles.length; i += 3) {
            clothParticles.push({
                x: particles[i],
                y: particles[i + 1],
                z: particles[i + 2],
                oldX: particles[i],
                oldY: particles[i + 1],
                oldZ: particles[i + 2],
                pinned: false,
                mass: 1
            });
        }
        
        // Create constraints between particles
        const width = Math.sqrt(clothParticles.length / 3);
        for (let y = 0; y < width; y++) {
            for (let x = 0; x < width; x++) {
                const index = y * width + x;
                
                // Horizontal constraints
                if (x < width - 1) {
                    constraints.push({
                        p1: clothParticles[index],
                        p2: clothParticles[index + 1],
                        restLength: 5 / width
                    });
                }
                
                // Vertical constraints
                if (y < width - 1) {
                    constraints.push({
                        p1: clothParticles[index],
                        p2: clothParticles[index + width],
                        restLength: 5 / width
                    });
                }
            }
        }
        
        // Pin top corners
        clothParticles[0].pinned = true;
        clothParticles[width - 1].pinned = true;
    }

    function updateCloth() {
        // Simple cloth physics update
        clothParticles.forEach(particle => {
            if (!particle.pinned) {
                // Apply gravity
                particle.y -= 0.2;
                
                // Update position
                particle.x += (particle.x - particle.oldX) * 0.9;
                particle.y += (particle.y - particle.oldY) * 0.9;
                particle.z += (particle.z - particle.oldZ) * 0.9;
                
                // Store old position
                particle.oldX = particle.x;
                particle.oldY = particle.y;
                particle.oldZ = particle.z;
            }
        });
        
        // Satisfy constraints
        for (let i = 0; i < 3; i++) {
            constraints.forEach(constraint => {
                const dx = constraint.p2.x - constraint.p1.x;
                const dy = constraint.p2.y - constraint.p1.y;
                const dz = constraint.p2.z - constraint.p1.z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (distance > 0) {
                    const diff = (distance - constraint.restLength) / distance / 2;
                    const offsetX = dx * diff;
                    const offsetY = dy * diff;
                    const offsetZ = dz * diff;
                    
                    if (!constraint.p1.pinned) {
                        constraint.p1.x += offsetX;
                        constraint.p1.y += offsetY;
                        constraint.p1.z += offsetZ;
                    }
                    if (!constraint.p2.pinned) {
                        constraint.p2.x -= offsetX;
                        constraint.p2.y -= offsetY;
                        constraint.p2.z -= offsetZ;
                    }
                }
            });
        }
        
        // Update geometry
        const positions = clothGeometry.attributes.position.array;
        clothParticles.forEach((particle, index) => {
            positions[index * 3] = particle.x;
            positions[index * 3 + 1] = particle.y;
            positions[index * 3 + 2] = particle.z;
        });
        clothGeometry.attributes.position.needsUpdate = true;
        clothGeometry.computeVertexNormals();
    }

    function addWindForce() {
        const windStrength = Math.sin(Date.now() * 0.001) * 0.5;
        clothParticles.forEach(particle => {
            if (!particle.pinned) {
                particle.x += windStrength;
            }
        });
    }

    initializeCloth();

    return {
        cloth,
        updateCloth,
        addWindForce,
        getParticles: () => clothParticles
    };
}

export function createOceanSimulation(scene) {
    // Realistic ocean simulation
    const oceanGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
    const oceanMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x1E90FF,
        transparent: true,
        opacity: 0.8,
        roughness: 0.1
    });
    
    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
    ocean.rotation.x = -Math.PI / 2;
    scene.add(ocean);

    function updateOcean() {
        const time = Date.now() * 0.001;
        const positions = oceanGeometry.attributes.position.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const z = positions[i + 2];
            
            // Create wave pattern
            const wave1 = Math.sin(x * 0.1 + time) * 0.5;
            const wave2 = Math.sin(z * 0.1 + time * 1.5) * 0.3;
            const wave3 = Math.cos(x * 0.05 + z * 0.05 + time * 0.8) * 0.2;
            
            positions[i + 1] = wave1 + wave2 + wave3;
        }
        
        oceanGeometry.attributes.position.needsUpdate = true;
        oceanGeometry.computeVertexNormals();
    }

    return { ocean, updateOcean };
}

export function createRigidBodySystem(scene) {
    // Simple rigid body physics
    const bodies = [];
    const gravity = new THREE.Vector3(0, -9.81, 0);
    
    function createRigidBody(mesh, mass = 1) {
        const body = {
            mesh: mesh,
            velocity: new THREE.Vector3(0, 0, 0),
            angularVelocity: new THREE.Vector3(0, 0, 0),
            mass: mass,
            restitution: 0.8,
            friction: 0.3
        };
        
        bodies.push(body);
        return body;
    }

    function updatePhysics(deltaTime) {
        bodies.forEach(body => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(deltaTime));
            
            // Update position
            body.mesh.position.add(body.velocity.clone().multiplyScalar(deltaTime));
            
            // Update rotation
            body.mesh.rotation.x += body.angularVelocity.x * deltaTime;
            body.mesh.rotation.y += body.angularVelocity.y * deltaTime;
            body.mesh.rotation.z += body.angularVelocity.z * deltaTime;
            
            // Apply damping
            body.velocity.multiplyScalar(0.99);
            body.angularVelocity.multiplyScalar(0.98);
            
            // Ground collision
            if (body.mesh.position.y < 0) {
                body.mesh.position.y = 0;
                body.velocity.y *= -body.restitution;
                body.angularVelocity.multiplyScalar(0.8);
            }
        });
    }

    function checkCollisions() {
        for (let i = 0; i < bodies.length; i++) {
            for (let j = i + 1; j < bodies.length; j++) {
                const body1 = bodies[i];
                const body2 = bodies[j];
                
                const distance = body1.mesh.position.distanceTo(body2.mesh.position);
                const minDistance = 1; // Minimum collision distance
                
                if (distance < minDistance) {
                    // Simple collision response
                    const normal = body2.mesh.position.clone().sub(body1.mesh.position).normalize();
                    const relativeVelocity = body2.velocity.clone().sub(body1.velocity);
                    const velocityAlongNormal = relativeVelocity.dot(normal);
                    
                    if (velocityAlongNormal < 0) {
                        const impulse = normal.clone().multiplyScalar(-velocityAlongNormal * (1 + body1.restitution * body2.restitution) / 2);
                        
                        const totalMass = body1.mass + body2.mass;
                        body1.velocity.add(impulse.clone().multiplyScalar(body2.mass / totalMass));
                        body2.velocity.sub(impulse.clone().multiplyScalar(body1.mass / totalMass));
                        
                        // Separate bodies
                        const overlap = minDistance - distance;
                        const separation = normal.clone().multiplyScalar(overlap / 2);
                        body1.mesh.position.sub(separation);
                        body2.mesh.position.add(separation);
                    }
                }
            }
        }
    }

    return {
        createRigidBody,
        updatePhysics,
        checkCollisions,
        getBodies: () => bodies
    };
}
