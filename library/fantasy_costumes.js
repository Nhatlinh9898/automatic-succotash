/**
 * Fantasy & Special Costumes Library - Three.js 3D Models
 * Contains fairy costumes, carnival outfits, and fantasy wear
 */

class FantasyCostumes {
    constructor(scene) {
        this.scene = scene;
    }

    createVRSuit() {
        const suit = new THREE.Group();
        
        const vrTop = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x2E8B57, roughness: 0.4 })
        );
        suit.add(vrTop);

        const vrPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.3 })
        );
        vrPants.position.set(0, -3.5, 0);
        suit.add(vrPants);

        const ledStrips = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4.5, 8),
            new THREE.MeshStandardMaterial({ emissive: 0x00FF00, emissiveIntensity: 1.5 })
        );
        ledStrips.position.set(0.6, -3.5, 0.5);
        suit.add(ledStrips);

        return suit;
    }

    createFairyCostume() {
        const costume = new THREE.Group();
        
        const fairyDress = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 3, 6, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFF69B4,
                emissive: 0xFFC0CB,
                emissiveIntensity: 0.7,
                roughness: 0.3,
            })
        );
        fairyDress.position.set(0, -3, 0);
        costume.add(fairyDress);

        const wings = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({ 
                color: 0x87CEEB, 
                side: THREE.DoubleSide, 
                opacity: 0.7, 
                transparent: true 
            })
        );
        wings.rotation.y = Math.PI / 4;
        wings.position.set(1.5, 0, -0.5);
        costume.add(wings);

        return costume;
    }

    createCarnivalCostume() {
        const costume = new THREE.Group();
        
        const carnivalTop = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.5 })
        );
        costume.add(carnivalTop);

        const rainbowSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 })
        );
        rainbowSkirt.position.set(0, -4.5, 0);
        costume.add(rainbowSkirt);

        const decorativePattern = new THREE.Mesh(
            new THREE.CircleGeometry(0.8, 16),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 })
        );
        decorativePattern.position.set(0.8, 1, 0.6);
        costume.add(decorativePattern);

        return costume;
    }

    createSpaceExplorerSuit() {
        const suit = new THREE.Group();
        
        const armorTop = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ 
                color: 0x708090, 
                roughness: 0.6, 
                metalness: 0.8 
            })
        );
        suit.add(armorTop);

        const armorBottom = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0xA9A9A9, 
                roughness: 0.7, 
                metalness: 0.9 
            })
        );
        armorBottom.position.set(0, -3.5, 0);
        suit.add(armorBottom);

        const helmet = new THREE.Mesh(
            new THREE.SphereGeometry(1.5, 32, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x2F4F4F, 
                opacity: 0.9, 
                transparent: true 
            })
        );
        helmet.position.set(0, 2, 0);
        suit.add(helmet);

        return suit;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FantasyCostumes;
}
