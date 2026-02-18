/**
 * Futuristic Elements Library
 * Futuristic and cyberpunk-style elements for 3D outfits
 */

class FuturisticElements {
    constructor(scene) {
        this.scene = scene;
    }

    // Twisted metal function
    addTwistedMetal(outfit) {
        const twistedMetal = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x808080, metalness: 1.0, roughness: 0.3 })
        );
        twistedMetal.position.set(0.5, 1, 0.7);
        outfit.add(twistedMetal);

        const secondTwistedMetal = twistedMetal.clone();
        secondTwistedMetal.position.set(-0.5, 1, 0.7);
        outfit.add(secondTwistedMetal);
    }

    // Decorative wraps function
    addDecorativeWraps(outfit) {
        const wrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple color
        );
        wrap.position.set(0.5, -3, 0.5);
        outfit.add(wrap);

        const secondWrap = wrap.clone();
        secondWrap.position.set(-0.5, -3, 0.5);
        outfit.add(secondWrap);
    }

    // Metallic shirt edges function
    addMetallicShirtEdges(outfit) {
        const edge = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        edge.position.set(0, 1, 0);
        outfit.add(edge);
    }

    // Shoulder straps function
    addShoulderStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
        );
        strap.position.set(0.6, 1, 0.6);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.6, 1, 0.6);
        outfit.add(secondStrap);
    }

    // Metallic skirt lines function
    addMetallicSkirtLines(outfit) {
        const metallicLine = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metallicLine.position.set(0, -3, 0.5);
        outfit.add(metallicLine);

        const secondMetallicLine = metallicLine.clone();
        secondMetallicLine.position.set(0, -4, 0.5);
        outfit.add(secondMetallicLine);
    }

    // Crystal shoulder straps function
    addCrystalShoulderStraps(outfit) {
        const shoulderStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 0.9,
            })
        );
        shoulderStrap.position.set(0.6, 1, 0.6);
        outfit.add(shoulderStrap);

        const secondStrap = shoulderStrap.clone();
        secondStrap.position.set(-0.6, 1, 0.6);
        outfit.add(secondStrap);
    }

    // Metallic belt function
    addMetalBelt(outfit) {
        const metalBelt = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xA9A9A9,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metalBelt.position.set(0, -0.5, 0);
        outfit.add(metalBelt);
    }

    // Metallic skirt lines function (duplicate name, different implementation)
    addMetallicSkirtLinesAdvanced(outfit) {
        const metallicLine = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metallicLine.position.set(0, -3, 0.5);
        outfit.add(metallicLine);

        const secondMetallicLine = metallicLine.clone();
        secondMetallicLine.position.set(0, -4, 0.5);
        outfit.add(secondMetallicLine);
    }

    // Ribbon twist to skirt function
    addRibbonTwistToSkirt(outfit) {
        const ribbonTwist = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Deep pink color
        );
        ribbonTwist.position.set(0, -3, 0.5);
        outfit.add(ribbonTwist);

        const secondRibbonTwist = ribbonTwist.clone();
        secondRibbonTwist.position.set(0, -4, 0.5);
        outfit.add(secondRibbonTwist);
    }

    // Standalone creation methods
    createStandaloneTwistedMetal(position = { x: 0, y: 0, z: 0 }, color = 0x808080) {
        const twistedMetal = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ 
                color: color, 
                metalness: 1.0, 
                roughness: 0.3 
            })
        );
        twistedMetal.position.set(position.x, position.y, position.z);
        return twistedMetal;
    }

    createStandaloneMetalBelt(position = { x: 0, y: 0, z: 0 }, radius = 1.2, color = 0xA9A9A9) {
        const metalBelt = new THREE.Mesh(
            new THREE.TorusGeometry(radius, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: color,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metalBelt.position.set(position.x, position.y, position.z);
        return metalBelt;
    }

    createStandaloneCrystalStrap(position = { x: 0, y: 0, z: 0 }, length = 3) {
        const crystalStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, length, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 0.9,
            })
        );
        crystalStrap.position.set(position.x, position.y, position.z);
        return crystalStrap;
    }

    // Method to create futuristic sets
    createFuturisticSet(style = 'cyberpunk') {
        const group = new THREE.Group();
        
        switch(style) {
            case 'cyberpunk':
                const neonStrip = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
                    new THREE.MeshStandardMaterial({
                        emissive: 0xFF4500,
                        emissiveIntensity: 2.0,
                    })
                );
                neonStrip.position.set(0.5, -3, 0.5);
                group.add(neonStrip);

                const metalBelt = this.createStandaloneMetalBelt({ x: 0, y: -0.5, z: 0 });
                group.add(metalBelt);
                
                const twistedMetal = this.createStandaloneTwistedMetal({ x: 0.5, y: 1, z: 0.7 });
                group.add(twistedMetal);
                break;
                
            case 'sci-fi':
                const crystalStrap = this.createStandaloneCrystalStrap({ x: 0.6, y: 1, z: 0.6 });
                group.add(crystalStrap);
                
                const metallicEdge = new THREE.Mesh(
                    new THREE.TorusGeometry(1.2, 0.05, 16, 100),
                    new THREE.MeshStandardMaterial({
                        color: 0x808080,
                        metalness: 1.0,
                        roughness: 0.2,
                    })
                );
                metallicEdge.position.set(0, 1, 0);
                group.add(metallicEdge);
                break;
                
            case 'futuristic-elegant':
                const ribbonTwist = new THREE.Mesh(
                    new THREE.TorusGeometry(1.8, 0.1, 16, 100),
                    new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
                );
                ribbonTwist.position.set(0, -3, 0.5);
                group.add(ribbonTwist);
                
                const shoulderStrap = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
                    new THREE.MeshStandardMaterial({ color: 0xFFD700 })
                );
                shoulderStrap.position.set(0.6, 1, 0.6);
                group.add(shoulderStrap);
                break;
        }
        
        return group;
    }

    // Method to create animated futuristic elements
    createAnimatedFuturisticElement(type = 'neon-pulse') {
        const group = new THREE.Group();
        
        switch(type) {
            case 'neon-pulse':
                const neonPulse = new THREE.Mesh(
                    new THREE.TorusGeometry(1, 0.05, 16, 100),
                    new THREE.MeshStandardMaterial({
                        emissive: 0xFF4500,
                        emissiveIntensity: 2.0,
                    })
                );
                group.add(neonPulse);
                break;
                
            case 'metallic-glow':
                const metallicGlow = new THREE.Mesh(
                    new THREE.SphereGeometry(0.2, 16, 16),
                    new THREE.MeshStandardMaterial({
                        color: 0x808080,
                        metalness: 1.0,
                        roughness: 0.2,
                        emissive: 0x808080,
                        emissiveIntensity: 0.5,
                    })
                );
                group.add(metallicGlow);
                break;
                
            case 'crystal-energy':
                const crystalEnergy = new THREE.Mesh(
                    new THREE.OctahedronGeometry(0.2, 0),
                    new THREE.MeshStandardMaterial({
                        color: 0xFFFFFF,
                        emissive: 0x87CEEB,
                        emissiveIntensity: 1.5,
                        transparent: true,
                        opacity: 0.8,
                    })
                );
                group.add(crystalEnergy);
                break;
        }
        
        return group;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FuturisticElements;
}
