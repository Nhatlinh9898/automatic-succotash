/**
 * Utility & Special Purpose Wear Library - Three.js 3D Models
 * Contains rain gear, construction wear, fishing outfits, and work clothing
 */

class UtilityWear {
    constructor(scene) {
        this.scene = scene;
    }

    createRainGear() {
        const gear = new THREE.Group();
        
        const rainJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFF00,
                opacity: 0.8,
                transparent: true,
                roughness: 0.4,
            })
        );
        gear.add(rainJacket);

        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5 })
        );
        pants.position.set(0, -3.5, 0);
        gear.add(pants);

        const boots = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 1.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFA500 })
        );
        boots.position.set(0, -5.5, 0);
        gear.add(boots);

        return gear;
    }

    createConstructionWorkerGear() {
        const gear = new THREE.Group();
        
        const safetyVest = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0xFFA500 })
        );
        gear.add(safetyVest);

        const workerJeans = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000080 })
        );
        workerJeans.position.set(0, -3.5, 0);
        gear.add(workerJeans);

        const hardHat = new THREE.Mesh(
            new THREE.SphereGeometry(1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFF00 })
        );
        hardHat.scale.set(1, 0.5, 1);
        hardHat.position.set(0, 2.5, 0);
        gear.add(hardHat);

        return gear;
    }

    createFishingOutfit() {
        const outfit = new THREE.Group();
        
        const fishingVest = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        outfit.add(fishingVest);

        const waterproofPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        waterproofPants.position.set(0, -3.5, 0);
        outfit.add(waterproofPants);

        return outfit;
    }

    createGardenerOutfit() {
        const outfit = new THREE.Group();
        
        const apron = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 2.5, 0.5),
            new THREE.MeshStandardMaterial({ color: 0x006400 })
        );
        outfit.add(apron);

        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        pants.position.set(0, -3.5, 0);
        outfit.add(pants);

        const pocket = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 0.5, 0.1),
            new THREE.MeshStandardMaterial({ color: 0x006400 })
        );
        pocket.position.set(0, 1, 0.25);
        outfit.add(pocket);

        return outfit;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UtilityWear;
}
