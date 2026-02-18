/**
 * Uniforms & Professional Wear Library - Three.js 3D Models
 * Contains guard uniforms, military outfits, and professional attire
 */

class UniformsProfessional {
    constructor(scene) {
        this.scene = scene;
    }

    createGuardUniform() {
        const uniform = new THREE.Group();
        
        const guardShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000080 })
        );
        uniform.add(guardShirt);

        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        trousers.position.set(0, -3.5, 0);
        uniform.add(trousers);

        const badge = new THREE.Mesh(
            new THREE.CircleGeometry(0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        badge.position.set(0.7, 1, 0.5);
        uniform.add(badge);

        return uniform;
    }

    createNavyCaptainUniform() {
        const uniform = new THREE.Group();
        
        const navyJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x000080, roughness: 0.3 })
        );
        uniform.add(navyJacket);

        const whitePants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        whitePants.position.set(0, -3.5, 0);
        uniform.add(whitePants);

        const navyHat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 1, 0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        navyHat.position.set(0, 2.5, 0);
        uniform.add(navyHat);

        return uniform;
    }

    createRoyalKnightUniform() {
        const uniform = new THREE.Group();
        
        const royalChestPlate = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xA9A9A9, roughness: 0.5, metalness: 0.8 })
        );
        uniform.add(royalChestPlate);

        const royalLegArmor = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x696969, roughness: 0.6, metalness: 0.8 })
        );
        royalLegArmor.position.set(0, -3.5, 0);
        uniform.add(royalLegArmor);

        const redCape = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({ color: 0xFF0000, side: THREE.DoubleSide })
        );
        redCape.rotation.x = -Math.PI / 2;
        redCape.position.set(0, -1, -1);
        uniform.add(redCape);

        return uniform;
    }

    createSpecialForcesUniform() {
        const uniform = new THREE.Group();
        
        const bulletproofVest = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        uniform.add(bulletproofVest);

        const tacticalPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x696969 })
        );
        tacticalPants.position.set(0, -3.5, 0);
        uniform.add(tacticalPants);

        const tacticalHelmet = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        tacticalHelmet.scale.set(1, 0.6, 1);
        tacticalHelmet.position.set(0, 2.5, 0);
        uniform.add(tacticalHelmet);

        return uniform;
    }

    createLabCoatOutfit() {
        const outfit = new THREE.Group();
        
        const labCoat = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 4, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.3 })
        );
        outfit.add(labCoat);

        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0xD3D3D3 })
        );
        pants.position.set(0, -3.5, 0);
        outfit.add(pants);

        const pocket = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.7, 0.1),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        pocket.position.set(0.8, 1, 0.6);
        outfit.add(pocket);

        return outfit;
    }

    createMusicianOutfit() {
        const outfit = new THREE.Group();
        
        const musicianJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B0000, roughness: 0.5 })
        );
        outfit.add(musicianJacket);

        const musicianTrousers = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        musicianTrousers.position.set(0, -3.5, 0);
        outfit.add(musicianTrousers);

        const scarf = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        scarf.position.set(0, 1.5, 0.6);
        scarf.rotation.z = Math.PI / 4;
        outfit.add(scarf);

        return outfit;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UniformsProfessional;
}
