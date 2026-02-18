/**
 * Casual & Sport Wear Library - Three.js 3D Models
 * Contains swimwear, yoga outfits, and casual clothing
 */

class CasualSportWear {
    constructor(scene) {
        this.scene = scene;
    }

    createTropicalSwimwear() {
        const swimwear = new THREE.Group();
        
        const swimsuitTop = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 1.2, 1),
            new THREE.MeshStandardMaterial({ color: 0xFF6347, roughness: 0.4 })
        );
        swimsuitTop.position.set(0, 1, 0);
        swimwear.add(swimsuitTop);

        const swimsuitBottom = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        swimsuitBottom.position.set(0, -1.5, 0);
        swimwear.add(swimsuitBottom);

        return swimwear;
    }

    createYogaOutfit() {
        const outfit = new THREE.Group();
        
        const yogaTop = new THREE.Mesh(
            new THREE.BoxGeometry(2, 1.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 })
        );
        yogaTop.position.set(0, 1, 0);
        outfit.add(yogaTop);

        const yogaLeggings = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        yogaLeggings.position.set(0, -2.5, 0);
        outfit.add(yogaLeggings);

        return outfit;
    }

    createPilotJacketOutfit() {
        const outfit = new THREE.Group();
        
        const pilotJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.5 })
        );
        outfit.add(pilotJacket);

        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        pants.position.set(0, -3.5, 0);
        outfit.add(pants);

        return outfit;
    }

    createExplorerOutfit() {
        const outfit = new THREE.Group();
        
        const explorerShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xCD853F })
        );
        outfit.add(explorerShirt);

        const explorerShorts = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 2.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        explorerShorts.position.set(0, -2, 0);
        outfit.add(explorerShorts);

        const backpack = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 2, 0.8),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        backpack.position.set(0, 1.5, -1.2);
        outfit.add(backpack);

        return outfit;
    }

    createRomanticGothicOutfit() {
        const outfit = new THREE.Group();
        
        const gothicTop = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x4B0082, roughness: 0.5 })
        );
        outfit.add(gothicTop);

        const gothicSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.8, 2.5, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        gothicSkirt.position.set(0, -4, 0);
        outfit.add(gothicSkirt);

        return outfit;
    }

    createPunkRockOutfit() {
        const outfit = new THREE.Group();
        
        const leatherJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.5 })
        );
        outfit.add(leatherJacket);

        const rippedJeans = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        rippedJeans.position.set(0, -3.5, 0);
        outfit.add(rippedJeans);

        const studs = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.2, 0.5, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        studs.position.set(1, 1, 0.5);
        outfit.add(studs);

        return outfit;
    }

    createKimonoOutfit() {
        const outfit = new THREE.Group();
        
        const kimono = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1.8, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0xDC143C })
        );
        outfit.add(kimono);

        const obi = new THREE.Mesh(
            new THREE.CylinderGeometry(1.7, 1.8, 0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        obi.position.set(0, 1, 0);
        outfit.add(obi);

        return outfit;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasualSportWear;
}
