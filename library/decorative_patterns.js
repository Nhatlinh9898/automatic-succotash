/**
 * Decorative Patterns and Details Library
 * Various patterns, textures, and decorative elements for 3D outfits
 */

class DecorativePatterns {
    constructor(scene) {
        this.scene = scene;
    }

    // Laser details for futuristic look
    addLaserDetails(outfit) {
        const laserPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({
                color: 0xFF6347,
                emissive: 0xFF4500,
                emissiveIntensity: 1.5,
                opacity: 0.7,
                transparent: true,
            })
        );
        laserPattern.position.set(0, 1, 0.6);
        outfit.add(laserPattern);
    }

    // Flower decorations for feminine touch
    addFlowerDecorations(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Light pink
        );
        flower.position.set(0.6, 1.5, 0.5);
        outfit.add(flower);

        const secondFlower = flower.clone();
        secondFlower.position.set(-0.6, 1.5, 0.5);
        outfit.add(secondFlower);
    }

    // Laser patterns for sci-fi effect
    addLaserPatterns(outfit) {
        const laserPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0xFF6347,
                emissive: 0xFF4500,
                emissiveIntensity: 1.5,
                opacity: 0.6,
                transparent: true,
            })
        );
        laserPattern.position.set(0, 1.2, 0.6);
        outfit.add(laserPattern);
    }

    // Neon laser details for cyberpunk style
    addNeonLaserDetails(outfit) {
        const neonLaser = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 1.8,
                opacity: 0.7,
                transparent: true,
            })
        );
        neonLaser.position.set(0, 1.2, 0.6);
        outfit.add(neonLaser);
    }

    // Embossed patterns for texture
    addEmbossedPatterns(outfit) {
        const embossedPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({
                color: 0x8B0000,
                roughness: 0.4,
                metalness: 0.2,
            })
        );
        embossedPattern.position.set(0, 1.2, 0.5);
        outfit.add(embossedPattern);
    }

    // Sun necklace pendant
    addSunNecklace(outfit) {
        const sunPendant = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.2,
            })
        );
        sunPendant.position.set(0, 1.5, 0.6);
        outfit.add(sunPendant);
    }

    // Sparkling earrings
    addSparklingEarrings(outfit) {
        const earring = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 0.8,
            })
        );
        earring.position.set(0.4, 2.2, 0.9);
        outfit.add(earring);

        const secondEarring = earring.clone();
        secondEarring.position.set(-0.4, 2.2, 0.9);
        outfit.add(secondEarring);
    }

    // Crystal choker for elegant neck wear
    addCrystalChoker(outfit) {
        const crystalChoker = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalChoker.position.set(0, 1.6, 0.4);
        crystalChoker.rotation.x = Math.PI / 2;
        outfit.add(crystalChoker);
    }

    // Layered pearls for luxury
    addLayeredPearls(outfit) {
        const pearlLayer1 = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Pearl color
        );
        pearlLayer1.position.set(0.5, -1, 0.6);
        outfit.add(pearlLayer1);

        const pearlLayer2 = pearlLayer1.clone();
        pearlLayer2.position.set(-0.5, -1.5, 0.6);
        outfit.add(pearlLayer2);
    }

    // Pearl hemline for classic elegance
    addPearlHemline(outfit) {
        const pearl = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Pearl color
        );
        pearl.position.set(0.5, -3, 0.6);
        outfit.add(pearl);

        const secondPearl = pearl.clone();
        secondPearl.position.set(-0.5, -3, 0.6);
        outfit.add(secondPearl);
    }

    // Frosted borders for mysterious look
    addFrostedBorders(outfit) {
        const frostedEdge = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.7,
                transparent: true,
            })
        );
        frostedEdge.position.set(0, 1.5, 0.5);
        outfit.add(frostedEdge);
    }

    // Satin edges for elegant finish
    addSatinEdges(outfit) {
        const satinEdge = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0xE6E6FA,
                emissive: 0x9370DB,
                emissiveIntensity: 0.7,
            })
        );
        satinEdge.position.set(0, -3.5, 0);
        outfit.add(satinEdge);
    }

    // Glitter patterns for sparkling effect
    addGlitterPatterns(outfit) {
        const glitterPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        glitterPattern.position.set(0, 1.2, 0.5);
        outfit.add(glitterPattern);
    }

    // Glitter hair clip
    addGlitterHairClip(outfit) {
        const hairClip = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.2, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        hairClip.position.set(0, 2.8, -0.3);
        outfit.add(hairClip);
    }

    // Layered crystal edges with lighting
    addLayeredCrystalEdges(outfit) {
        const crystalEdgeLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.2,
            })
        );
        crystalEdgeLayer1.position.set(0, -3, 0);
        outfit.add(crystalEdgeLayer1);

        const crystalEdgeLayer2 = crystalEdgeLayer1.clone();
        crystalEdgeLayer2.position.set(0, -4, 0);
        outfit.add(crystalEdgeLayer2);
    }

    // Layered crystal lines
    addLayeredCrystalLines(outfit) {
        const crystalLine = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalLine.position.set(0.6, -2, 0.5);
        outfit.add(crystalLine);

        const secondCrystalLine = crystalLine.clone();
        secondCrystalLine.position.set(-0.6, -2, 0.5);
        outfit.add(secondCrystalLine);
    }

    // Crystal lines on skirt
    addCrystalLinesOnSkirt(outfit) {
        const crystal = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystal.position.set(0.5, -3, 0.6);
        outfit.add(crystal);

        const secondCrystal = crystal.clone();
        secondCrystal.position.set(-0.5, -3, 0.6);
        outfit.add(secondCrystal);
    }

    // Crystal skirt tail
    addCrystalSkirtTail(outfit) {
        const skirtTail = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        skirtTail.position.set(0, -5, 0);
        outfit.add(skirtTail);
    }

    // Crystal heels
    addCrystalHeels(outfit) {
        const heel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.5, 2, 32),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.2,
            })
        );
        heel.position.set(0.5, -5.5, 0.5);
        outfit.add(heel);

        const secondHeel = heel.clone();
        secondHeel.position.set(-0.5, -5.5, 0.5);
        outfit.add(secondHeel);
    }

    // Light mesh overlay
    addLightMeshToOutfit(outfit) {
        const lightMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.MeshStandardMaterial({
                color: 0xB0E0E6,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.0,
                opacity: 0.5,
                transparent: true,
            })
        );
        lightMesh.position.set(0, 1, 0.5);
        outfit.add(lightMesh);
    }

    // Metallic heels
    addMetallicHeels(outfit) {
        const heel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.5, 2, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        heel.position.set(0.5, -5.5, 0.5);
        outfit.add(heel);

        const secondHeel = heel.clone();
        secondHeel.position.set(-0.5, -5.5, 0.5);
        outfit.add(secondHeel);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DecorativePatterns;
}
