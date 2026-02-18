/**
 * Special Effects Library
 * Various special effects and visual enhancements for 3D outfits
 */

class SpecialEffects {
    constructor(scene) {
        this.scene = scene;
    }

    // Transparent overlay function
    addTransparentOverlay(outfit) {
        const overlay = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 6),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.3,
                transparent: true,
            })
        );
        overlay.position.set(0, -1, 0.5);
        overlay.rotation.x = -Math.PI / 2;
        outfit.add(overlay);
    }

    // Neon strips function
    addNeonStrips(outfit) {
        const neonStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        neonStrip.position.set(0.5, -3, 0.5);
        outfit.add(neonStrip);

        const secondNeonStrip = neonStrip.clone();
        secondNeonStrip.position.set(-0.5, -3, 0.5);
        outfit.add(secondNeonStrip);
    }

    // LED cloth edges function
    addLEDClothEdges(outfit) {
        const ledEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ emissive: 0xFF4500, emissiveIntensity: 1.5 })
        );
        ledEdge.position.set(0.5, -3, 0.6);
        outfit.add(ledEdge);

        const secondLED = ledEdge.clone();
        secondLED.position.set(-0.5, -3, 0.6);
        outfit.add(secondLED);
    }

    // Crystal hanging strips function
    addCrystalHangingStrips(outfit) {
        const crystalStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        crystalStrip.position.set(0.5, -3, 0.5);
        outfit.add(crystalStrip);

        const secondCrystalStrip = crystalStrip.clone();
        secondCrystalStrip.position.set(-0.5, -3, 0.5);
        outfit.add(secondCrystalStrip);
    }

    // Spiral LEDs function
    addSpiralLEDs(outfit) {
        const spiralLED = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        spiralLED.position.set(0, 1, 0);
        outfit.add(spiralLED);

        const secondSpiralLED = spiralLED.clone();
        secondSpiralLED.position.set(0, 0.5, 0);
        outfit.add(secondSpiralLED);
    }

    // Neon hemlines function
    addNeonHemlines(outfit) {
        const neonHemline = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        neonHemline.position.set(0.5, -3, 0.6);
        outfit.add(neonHemline);

        const secondNeonHemline = neonHemline.clone();
        secondNeonHemline.position.set(-0.5, -3, 0.6);
        outfit.add(secondNeonHemline);
    }

    // Vertical LEDs function
    addVerticalLEDs(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        ledStrip.position.set(0.6, -2, 0.5);
        outfit.add(ledStrip);

        const secondLEDStrip = ledStrip.clone();
        secondLEDStrip.position.set(-0.6, -2, 0.5);
        outfit.add(secondLEDStrip);
    }

    // Glow buttons function
    addGlowButtons(outfit) {
        const glowButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                emissive: 0x00FFFF,
                emissiveIntensity: 1.0,
            })
        );
        glowButton.position.set(0, 1, 0.6);
        outfit.add(glowButton);

        const secondGlowButton = glowButton.clone();
        secondGlowButton.position.set(0, 0.7, 0.6);
        outfit.add(secondGlowButton);
    }

    // Crystal wings function
    addCrystalWings(outfit) {
        const crystalWing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.7,
                transparent: true,
                emissive: 0xADD8E6,
                emissiveIntensity: 1.0,
            })
        );
        crystalWing.position.set(1.5, 0, -0.5);
        outfit.add(crystalWing);

        const secondCrystalWing = crystalWing.clone();
        secondCrystalWing.position.set(-1.5, 0, -0.5);
        outfit.add(secondCrystalWing);
    }

    // Satin edges function
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

    // Crystal trims function
    addCrystalTrims(outfit) {
        const crystalTrim = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.0,
            })
        );
        crystalTrim.position.set(0, 1.2, 0.6);
        outfit.add(crystalTrim);

        const secondCrystalTrim = crystalTrim.clone();
        secondCrystalTrim.position.set(0, 1, 0.6);
        outfit.add(secondCrystalTrim);
    }

    // Crystal mesh trims function
    addCrystalMeshTrims(outfit) {
        const crystalMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.0,
            })
        );
        crystalMesh.position.set(0, 1.2, 0.6);
        outfit.add(crystalMesh);
    }

    // Standalone creation methods
    createStandaloneNeonStrip(position = { x: 0, y: 0, z: 0 }, color = 0xFF4500) {
        const neonStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: color,
                emissiveIntensity: 2.0,
            })
        );
        neonStrip.position.set(position.x, position.y, position.z);
        return neonStrip;
    }

    createStandaloneCrystalWing(position = { x: 0, y: 0, z: 0 }) {
        const crystalWing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.7,
                transparent: true,
                emissive: 0xADD8E6,
                emissiveIntensity: 1.0,
            })
        );
        crystalWing.position.set(position.x, position.y, position.z);
        return crystalWing;
    }

    createStandaloneGlowButton(position = { x: 0, y: 0, z: 0 }, color = 0x87CEEB) {
        const glowButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({
                color: color,
                emissive: 0x00FFFF,
                emissiveIntensity: 1.0,
            })
        );
        glowButton.position.set(position.x, position.y, position.z);
        return glowButton;
    }

    // Method to create animated special effects
    createAnimatedEffect(type = 'neon') {
        const group = new THREE.Group();
        
        switch(type) {
            case 'neon':
                const neonEffect = new THREE.Mesh(
                    new THREE.TorusGeometry(1, 0.05, 16, 100),
                    new THREE.MeshStandardMaterial({
                        emissive: 0xFF4500,
                        emissiveIntensity: 2.0,
                    })
                );
                group.add(neonEffect);
                break;
                
            case 'crystal':
                const crystalEffect = new THREE.Mesh(
                    new THREE.SphereGeometry(0.2, 16, 16),
                    new THREE.MeshStandardMaterial({
                        color: 0xE0FFFF,
                        emissive: 0x87CEEB,
                        emissiveIntensity: 1.2,
                    })
                );
                group.add(crystalEffect);
                break;
                
            case 'led':
                const ledEffect = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.05, 0.05, 1, 8),
                    new THREE.MeshStandardMaterial({
                        emissive: 0x00FF00,
                        emissiveIntensity: 2.0,
                    })
                );
                group.add(ledEffect);
                break;
        }
        
        return group;
    }

    // Additional special effects from part_10_corrected.js

    addCrystalHangingStrips(outfit) {
        const crystalStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        crystalStrip.position.set(0.5, -3, 0.5);
        outfit.add(crystalStrip);

        const secondCrystalStrip = crystalStrip.clone();
        secondCrystalStrip.position.set(-0.5, -3, 0.5);
        outfit.add(secondCrystalStrip);
    }

    addNeonHemlines(outfit) {
        const neonHemline = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        neonHemline.position.set(0.5, -3, 0.6);
        outfit.add(neonHemline);

        const secondNeonHemline = neonHemline.clone();
        secondNeonHemline.position.set(-0.5, -3, 0.6);
        outfit.add(secondNeonHemline);
    }

    addSpiralLEDs(outfit) {
        const spiralLED = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        spiralLED.position.set(0, 1, 0);
        outfit.add(spiralLED);

        const secondSpiralLED = spiralLED.clone();
        secondSpiralLED.position.set(0, 0.5, 0);
        outfit.add(secondSpiralLED);
    }

    addMirrorAccents(outfit) {
        const mirrorAccent = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        mirrorAccent.position.set(0.5, 1.5, 0.5);
        outfit.add(mirrorAccent);

        const secondMirrorAccent = mirrorAccent.clone();
        secondMirrorAccent.position.set(-0.5, 1.5, 0.5);
        outfit.add(secondMirrorAccent);
    }

    addGlowButtons(outfit) {
        const glowButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                emissive: 0x00FFFF,
                emissiveIntensity: 1.0,
            })
        );
        glowButton.position.set(0, 1, 0.6);
        outfit.add(glowButton);

        const secondGlowButton = glowButton.clone();
        secondGlowButton.position.set(0, 0.7, 0.6);
        outfit.add(secondGlowButton);
    }

    addVerticalLEDs(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        ledStrip.position.set(0.6, -2, 0.5);
        outfit.add(ledStrip);

        const secondLEDStrip = ledStrip.clone();
        secondLEDStrip.position.set(-0.6, -2, 0.5);
        outfit.add(secondLEDStrip);
    }

    // New functions from part_11_corrected.js - Special Effects & Lighting

    addSpiralLEDsToOutfit(outfit) {
        const spiralLED = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        spiralLED.position.set(0, 1, 0);
        outfit.add(spiralLED);

        const secondSpiralLED = spiralLED.clone();
        secondSpiralLED.position.set(0, 0.5, 0);
        outfit.add(secondSpiralLED);
    }

    addLEDStripsToSleeves(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        ledStrip.position.set(0.4, 1.5, 0.5);
        outfit.add(ledStrip);

        const secondLEDStrip = ledStrip.clone();
        secondLEDStrip.position.set(-0.4, 1.5, 0.5);
        outfit.add(secondLEDStrip);
    }

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

    addShoulderLights(outfit) {
        const light = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
            })
        );
        light.position.set(0.5, 2, 0);
        outfit.add(light);

        const secondLight = light.clone();
        secondLight.position.set(-0.5, 2, 0);
        outfit.add(secondLight);
    }

    addDiagonalLEDStrips(outfit) {
        const diagonalLED = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        diagonalLED.position.set(0.4, 1, 0.6);
        diagonalLED.rotation.z = Math.PI / 4;
        outfit.add(diagonalLED);

        const secondDiagonalLED = diagonalLED.clone();
        secondDiagonalLED.position.set(-0.4, 1, 0.6);
        secondDiagonalLED.rotation.z = -Math.PI / 4;
        outfit.add(secondDiagonalLED);
    }

    addSkirtLEDs(outfit) {
        const skirtLED = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 1.5,
            })
        );
        skirtLED.position.set(0.5, -4, 0.6);
        outfit.add(skirtLED);

        const secondSkirtLED = skirtLED.clone();
        secondSkirtLED.position.set(-0.5, -4, 0.6);
        outfit.add(secondSkirtLED);
    }

    addSleeveLEDs(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 1.8,
            })
        );
        ledStrip.position.set(0.4, 1.5, 0.5);
        outfit.add(ledStrip);

        const secondLEDStrip = ledStrip.clone();
        secondLEDStrip.position.set(-0.4, 1.5, 0.5);
        outfit.add(secondLEDStrip);
    }

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

    addSparklingLEDHemline(outfit) {
        const ledHemline = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
            })
        );
        ledHemline.position.set(0, -4.5, 0);
        outfit.add(ledHemline);
    }

    addLightEdgesToSkirt(outfit) {
        const lightEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        lightEdge.position.set(0.5, -3, 0.5);
        outfit.add(lightEdge);

        const secondLightEdge = lightEdge.clone();
        secondLightEdge.position.set(-0.5, -3, 0.5);
        outfit.add(secondLightEdge);
    }

    addContinuousLEDStrip(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 6, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        ledStrip.position.set(0, -1.5, 0.6);
        outfit.add(ledStrip);
    }

    // Subtle Glow Wings (266)
    addSubtleGlowWings(outfit) {
        const wings = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.5,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.0,
                transparent: true,
            })
        );
        wings.position.set(1.5, 0, -0.5);
        wings.rotation.y = Math.PI / 4;
        outfit.add(wings);

        const mirroredWings = wings.clone();
        mirroredWings.position.set(-1.5, 0, -0.5);
        outfit.add(mirroredWings);
    }

    // Rotating Light Cape (262)
    addRotatingLightCape(outfit) {
        const rotatingLight = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 2, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 2.0,
            })
        );
        rotatingLight.position.set(0, -2, -1);
        rotatingLight.rotation.x = -Math.PI / 2;
        outfit.add(rotatingLight);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpecialEffects;
}
