/**
 * Crystal and Jewelry Library
 * Various crystal elements, jewelry, and glowing accessories for 3D outfits
 */

class CrystalJewelry {
    constructor(scene) {
        this.scene = scene;
    }

    // Crystal lace collar with glow
    addCrystalLaceCollar(outfit) {
        const lace = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        lace.position.set(0, 1.7, 0.5);
        outfit.add(lace);
    }

    // Crystal crown with jewels
    addCrystalCrown(outfit) {
        const crown = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.8, 0.2, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        crown.position.set(0, 2.8, 0);
        outfit.add(crown);

        const crownJewels = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        crownJewels.position.set(0, 2.9, 0.3);
        outfit.add(crownJewels);
    }

    // Horizontal crystal bands on skirt
    addHorizontalCrystalBands(outfit) {
        const crystalBand = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 2.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalBand.position.set(0, -3, 0.5);
        outfit.add(crystalBand);

        const secondCrystalBand = crystalBand.clone();
        secondCrystalBand.position.set(0, -4, 0.5);
        outfit.add(secondCrystalBand);
    }

    // Twisted crystal bands
    addTwistedCrystalBands(outfit) {
        const crystalBand = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.2,
            })
        );
        crystalBand.position.set(0, -3.5, 0.6);
        outfit.add(crystalBand);

        const secondCrystalBand = crystalBand.clone();
        secondCrystalBand.position.set(0, -4, 0.6);
        outfit.add(secondCrystalBand);
    }

    // Crystal details on heels
    addCrystalHeelsDetail(outfit) {
        const crystalHeel = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.5,
            })
        );
        crystalHeel.position.set(0.5, -5.5, 0.6);
        outfit.add(crystalHeel);

        const secondCrystalHeel = crystalHeel.clone();
        secondCrystalHeel.position.set(-0.5, -5.5, 0.6);
        outfit.add(secondCrystalHeel);
    }

    // Dangling crystal necklace
    addDanglingCrystalNecklace(outfit) {
        const necklaceChain = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 1, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        necklaceChain.position.set(0, 1.6, 0.3);
        outfit.add(necklaceChain);

        const crystalPendant = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalPendant.position.set(0, 1.3, 0.3);
        outfit.add(crystalPendant);
    }

    // Crystal dangling earrings
    addCrystalDanglingEarrings(outfit) {
        const earring = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.2,
            })
        );
        earring.position.set(0.4, 2, 0.8);
        outfit.add(earring);

        const crystal = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystal.position.set(0.4, 1.5, 0.8);
        outfit.add(crystal);

        const secondEarring = earring.clone();
        secondEarring.position.set(-0.4, 2, 0.8);
        outfit.add(secondEarring);

        const secondCrystal = crystal.clone();
        secondCrystal.position.set(-0.4, 1.5, 0.8);
        outfit.add(secondCrystal);
    }

    // Diagonal crystal straps
    addDiagonalCrystalStraps(outfit) {
        const crystalStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalStrap.position.set(0.6, 1.5, 0.6);
        crystalStrap.rotation.z = Math.PI / 6;
        outfit.add(crystalStrap);

        const mirroredCrystalStrap = crystalStrap.clone();
        mirroredCrystalStrap.position.set(-0.6, 1.5, 0.6);
        mirroredCrystalStrap.rotation.z = -Math.PI / 6;
        outfit.add(mirroredCrystalStrap);
    }

    // Layered crystal bracelets
    addLayeredCrystalBracelets(outfit) {
        const crystalBracelet = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalBracelet.position.set(0.5, 0.5, 0.3);
        outfit.add(crystalBracelet);

        const secondCrystalBracelet = crystalBracelet.clone();
        secondCrystalBracelet.position.set(-0.5, 0.5, 0.3);
        outfit.add(secondCrystalBracelet);
    }

    // Diagonal crystal lines
    addDiagonalCrystalLines(outfit) {
        const crystalLine = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalLine.position.set(0.6, -2, 0.5);
        crystalLine.rotation.z = Math.PI / 4;
        outfit.add(crystalLine);

        const secondCrystalLine = crystalLine.clone();
        secondCrystalLine.position.set(-0.6, -2, 0.5);
        secondCrystalLine.rotation.z = -Math.PI / 4;
        outfit.add(secondCrystalLine);
    }

    // Dangling glass necklace
    addDanglingGlassNecklace(outfit) {
        const glassChain = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 1.2, 32),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 0.8,
                roughness: 0.2,
            })
        );
        glassChain.position.set(0, 1.6, 0.3);
        outfit.add(glassChain);

        const glassPendant = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                opacity: 0.8,
                transparent: true,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.0,
            })
        );
        glassPendant.position.set(0, 1.2, 0.3);
        outfit.add(glassPendant);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CrystalJewelry;
}
