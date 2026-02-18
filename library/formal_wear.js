/**
 * Formal Wear Library - Three.js 3D Models
 * Contains wedding dresses, evening gowns, and formal attire
 */

class FormalWear {
    constructor(scene) {
        this.scene = scene;
    }

    createModernWeddingDress() {
        const dress = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.4, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.4 })
        );
        dress.add(bodice);

        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFF5EE, roughness: 0.2 })
        );
        skirt.position.set(0, -4.5, 0);
        dress.add(skirt);

        return dress;
    }

    createBlackWhiteFormalDress() {
        const dress = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5 })
        );
        dress.add(bodice);

        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        skirt.position.set(0, -4.5, 0);
        dress.add(skirt);

        return dress;
    }

    createStarryNightGown() {
        const gown = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x1E90FF,
                emissive: 0x4169E1,
                emissiveIntensity: 0.7,
                roughness: 0.2,
            })
        );
        gown.add(bodice);

        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({
                color: 0x000080,
                emissive: 0x1E90FF,
                emissiveIntensity: 0.8,
                roughness: 0.3,
            })
        );
        skirt.position.set(0, -4.5, 0);
        gown.add(skirt);

        return gown;
    }

    createVintageEveningGown() {
        const gown = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x800000, roughness: 0.4 })
        );
        gown.add(bodice);

        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.3 })
        );
        skirt.position.set(0, -5, 0);
        gown.add(skirt);

        return gown;
    }

    createCrystalBallGown() {
        const gown = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x87CEFA,
                emissive: 0xB0E0E6,
                emissiveIntensity: 0.9,
                roughness: 0.2,
            })
        );
        gown.add(bodice);

        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4.5, 6, 32),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEFA,
                emissiveIntensity: 0.9,
                roughness: 0.3,
            })
        );
        skirt.position.set(0, -5, 0);
        gown.add(skirt);

        return gown;
    }

    createLayeredEveningDress() {
        const dress = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0x8A2BE2 })
        );
        dress.add(bodice);

        const skirtLayer1 = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0x9370DB })
        );
        skirtLayer1.position.set(0, -2, 0);
        dress.add(skirtLayer1);

        const skirtLayer2 = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xB0E0E6 })
        );
        skirtLayer2.position.set(0, -4, 0);
        dress.add(skirtLayer2);

        return dress;
    }

    createBalletDress() {
        const dress = new THREE.Group();
        
        const balletTop = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFB6C1, roughness: 0.3 })
        );
        dress.add(balletTop);

        const tutuSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
        );
        tutuSkirt.position.set(0, -2, 0);
        dress.add(tutuSkirt);

        return dress;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormalWear;
}
