/**
 * Neon and LED Effects Library
 * Various neon lights, LED strips, and glowing effects for futuristic 3D outfits
 */

class NeonLEDEffects {
    constructor(scene) {
        this.scene = scene;
    }

    // Neon outlines around the outfit
    addNeonOutlines(outfit) {
        const neonOutline = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 0.05, 6, 32, 1, true),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        neonOutline.position.set(0, -3, 0);
        outfit.add(neonOutline);
    }

    // Layered LED strips
    addLayeredLEDStrips(outfit) {
        const ledStripLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        ledStripLayer1.position.set(0, -3, 0.5);
        outfit.add(ledStripLayer1);

        const ledStripLayer2 = ledStripLayer1.clone();
        ledStripLayer2.position.set(0, -4, 0.5);
        outfit.add(ledStripLayer2);
    }

    // Laser highlights for futuristic look
    addLaserHighlights(outfit) {
        const laserHighlight = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 2.0,
                opacity: 0.6,
                transparent: true,
            })
        );
        laserHighlight.position.set(0, 1.2, 0.6);
        outfit.add(laserHighlight);
    }

    // Glowing borders around the outfit
    addGlowingBorders(outfit) {
        const glowingFrame = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 2, 6, 32, 1, true),
            new THREE.MeshStandardMaterial({
                color: 0x00FFFF,
                emissive: 0x00CED1,
                emissiveIntensity: 1.8,
                opacity: 0.5,
                transparent: true,
            })
        );
        glowingFrame.position.set(0, -3, 0);
        outfit.add(glowingFrame);
    }

    // Neon wings for futuristic appearance
    addNeonWings(outfit) {
        const neonWing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0x00FF00,
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
                opacity: 0.7,
                transparent: true,
            })
        );
        neonWing.position.set(1.5, 0, -0.5);
        neonWing.rotation.y = Math.PI / 4;
        outfit.add(neonWing);

        const secondNeonWing = neonWing.clone();
        secondNeonWing.position.set(-1.5, 0, -0.5);
        outfit.add(secondNeonWing);
    }

    // Laser edges for high-tech look
    addLaserEdges(outfit) {
        const laserEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 6, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        laserEdge.position.set(0.5, -1.5, 0.6);
        outfit.add(laserEdge);
    }

    // Glowing skirt layer
    addGlowingSkirtLayer(outfit) {
        const glowingLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.5,
            })
        );
        glowingLayer.position.set(0, -5, 0);
        outfit.add(glowingLayer);
    }

    // Laser skirt trim
    addLaserSkirtTrim(outfit) {
        const laserTrim = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 5, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        laserTrim.position.set(0.5, -3, 0.6);
        outfit.add(laserTrim);

        const mirroredLaserTrim = laserTrim.clone();
        mirroredLaserTrim.position.set(-0.5, -3, 0.6);
        outfit.add(mirroredLaserTrim);
    }

    // Sparkling sleeves with LED effect
    addSparklingSleeves(outfit) {
        const sparkle = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        sparkle.position.set(0.5, 1.2, 0.5);
        outfit.add(sparkle);

        const mirroredSparkle = sparkle.clone();
        mirroredSparkle.position.set(-0.5, 1.2, 0.5);
        outfit.add(mirroredSparkle);
    }

    // Unique glowing decorations
    addUniqueDecorations(outfit) {
        const decoration = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold
        );
        decoration.position.set(0.6, 1.2, 0.6);
        outfit.add(decoration);

        const mirroredDecoration = decoration.clone();
        mirroredDecoration.position.set(-0.6, 1.2, 0.6);
        outfit.add(mirroredDecoration);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NeonLEDEffects;
}
