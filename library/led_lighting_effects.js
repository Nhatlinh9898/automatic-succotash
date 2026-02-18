/**
 * LED and Lighting Effects Library
 * Various LED strips, lights, and glowing effects for 3D outfits
 */

class LEDLightingEffects {
    constructor(scene) {
        this.scene = scene;
    }

    // Spiral LEDs around the body
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

    // LED strips on sleeves
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

    // LED bracelets for futuristic look
    addLEDBracelets(outfit) {
        const ledBracelet = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        ledBracelet.position.set(0.5, 0.5, 0.3);
        outfit.add(ledBracelet);

        const secondLEDBracelet = ledBracelet.clone();
        secondLEDBracelet.position.set(-0.5, 0.5, 0.3);
        outfit.add(secondLEDBracelet);
    }

    // Diagonal LED strips for dynamic effect
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

    // LED strips along skirt hemline
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

    // Sparkling LED hemline for magical effect
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

    // LED strips on sleeves (alternative style)
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

    // Continuous LED strip running through the outfit
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

    // Light edges on skirt for futuristic look
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

    // Shoulder lights for dramatic effect
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

    // Glitter hair clip with LED effect
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

    // Light mesh overlay for ethereal effect
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

    // Crystal heels with lighting effect
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

    // Metallic heels with subtle lighting
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

    // Crystal skirt tail with lighting
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

    // Layered crystal lines with lighting
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

    // Crystal lines on skirt with lighting (306)
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

    // Mini Glowing Bag (215)
    addMiniGlowingBag(outfit) {
        const glowingBag = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.6, 0.4),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.5,
            })
        );
        glowingBag.position.set(0.6, -1, -0.4);
        outfit.add(glowingBag);
    }

    // Spiral Light Sleeves (216)
    addSpiralLightSleeves(outfit) {
        const spiralLight = new THREE.Mesh(
            new THREE.TorusGeometry(0.8, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        spiralLight.position.set(0.5, 1, 0.5);
        outfit.add(spiralLight);

        const mirroredSpiralLight = spiralLight.clone();
        mirroredSpiralLight.position.set(-0.5, 1, 0.5);
        outfit.add(mirroredSpiralLight);
    }

    // Glowing Necklace (221)
    addGlowingNecklace(outfit) {
        const glowingRing = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x87CEEB,
                emissiveIntensity: 1.8,
            })
        );
        glowingRing.position.set(0, 1.5, 0.4);
        glowingRing.rotation.x = Math.PI / 2;
        outfit.add(glowingRing);
    }

    // Neon Hat (225)
    addNeonHat(outfit) {
        const neonHat = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.5, 0.7, 32),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        neonHat.position.set(0, 2.8, 0);
        outfit.add(neonHat);
    }

    // LED Backlight (234)
    addLEDBacklight(outfit) {
        const ledBelt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1.5, 0.1, 32),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        ledBelt.position.set(0, -0.3, 0);
        outfit.add(ledBelt);
    }

    // Light Strips To Sleeves (240)
    addLightStripsToSleevesNew(outfit) {
        const lightStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        lightStrip.position.set(0.5, 1.5, 0.5);
        outfit.add(lightStrip);

        const mirroredLightStrip = lightStrip.clone();
        mirroredLightStrip.position.set(-0.5, 1.5, 0.5);
        outfit.add(mirroredLightStrip);
    }

    // Glowing Transparent Layer (243)
    addGlowingTransparentLayer(outfit) {
        const glowingLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
                opacity: 0.5,
                transparent: true,
            })
        );
        glowingLayer.position.set(0, -4, 0);
        outfit.add(glowingLayer);
    }

    // Laser Waist Details (245)
    addLaserWaistDetails(outfit) {
        const laserDetail = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.5),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 1.8,
                opacity: 0.6,
                transparent: true,
            })
        );
        laserDetail.position.set(0, -0.8, 0.6);
        outfit.add(laserDetail);
    }

    // Light Strips At Hem (249)
    addLightStripsAtHem(outfit) {
        const lightStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 2.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        lightStrip.position.set(0.5, -4.5, 0.6);
        outfit.add(lightStrip);

        const mirroredStrip = lightStrip.clone();
        mirroredStrip.position.set(-0.5, -4.5, 0.6);
        outfit.add(mirroredStrip);
    }

    // Laser Choker (251)
    addLaserChoker(outfit) {
        const laserChoker = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        laserChoker.position.set(0, 1.6, 0.3);
        laserChoker.rotation.x = Math.PI / 2;
        outfit.add(laserChoker);
    }

    // Spiral LEDs To Skirt (252)
    addSpiralLEDsToSkirtNew(outfit) {
        const spiralLED = new THREE.Mesh(
            new THREE.TorusGeometry(2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        spiralLED.position.set(0, -3, 0.5);
        outfit.add(spiralLED);

        const secondSpiralLED = spiralLED.clone();
        secondSpiralLED.position.set(0, -4, 0.5);
        outfit.add(secondSpiralLED);
    }

    // Laser Top Layer (265)
    addLaserTopLayer(outfit) {
        const laserLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 6),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 2.0,
                opacity: 0.6,
                transparent: true,
            })
        );
        laserLayer.position.set(0, -1, 0.5);
        laserLayer.rotation.x = -Math.PI / 2;
        outfit.add(laserLayer);
    }

    // Laser Sleeves (269)
    addLaserSleeves(outfit) {
        const laserDetail = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.5),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 1.5,
                opacity: 0.6,
                transparent: true,
            })
        );
        laserDetail.position.set(0.5, 1.5, 0.5);
        outfit.add(laserDetail);

        const mirroredLaserDetail = laserDetail.clone();
        mirroredLaserDetail.position.set(-0.5, 1.5, 0.5);
        outfit.add(mirroredLaserDetail);
    }

    // Light Laser Trim (271)
    addLightLaserTrim(outfit) {
        const laserTrim = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        laserTrim.position.set(0, -4.5, 0.5);
        outfit.add(laserTrim);

        const secondLaserTrim = laserTrim.clone();
        secondLaserTrim.position.set(0, -3.5, 0.5);
        outfit.add(secondLaserTrim);
    }

    // Laser Hat (274)
    addLaserHat(outfit) {
        const laserHat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        laserHat.position.set(0, 2.8, 0);
        outfit.add(laserHat);
    }

    // Layered Laser Effects (276)
    addLayeredLaserEffects(outfit) {
        const laserEffect = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 3),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 2.0,
                opacity: 0.6,
                transparent: true,
            })
        );
        laserEffect.position.set(0, -1.5, 0.5);
        outfit.add(laserEffect);

        const secondEffect = laserEffect.clone();
        secondEffect.position.set(0, -2.5, 0.5);
        outfit.add(secondEffect);
    }

    // Crystal Laser Strips (284)
    addCrystalLaserStrips(outfit) {
        const crystalStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        crystalStrip.position.set(0.5, -3, 0.6);
        outfit.add(crystalStrip);

        const mirroredStrip = crystalStrip.clone();
        mirroredStrip.position.set(-0.5, -3, 0.6);
        outfit.add(mirroredStrip);
    }

    // Laser Handbag (285)
    addLaserHandbag(outfit) {
        const laserBag = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.6, 0.4),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        laserBag.position.set(0.6, -1, -0.4);
        outfit.add(laserBag);
    }

    // Prominent LED Strips (286)
    addProminentLEDStrips(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.0,
            })
        );
        ledStrip.position.set(0, -2, 0.5);
        outfit.add(ledStrip);
    }

    // Laser Bracelets (287)
    addLaserBracelets(outfit) {
        const laserBracelet = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.0,
            })
        );
        laserBracelet.position.set(0.5, 0.5, 0.3);
        outfit.add(laserBracelet);

        const mirroredBracelet = laserBracelet.clone();
        mirroredBracelet.position.set(-0.5, 0.5, 0.3);
        outfit.add(mirroredBracelet);
    }

    // Spiral Laser Hemline (280)
    addSpiralLaserHemline(outfit) {
        const spiralLaser = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        spiralLaser.position.set(0, -4.5, 0.5);
        outfit.add(spiralLaser);
    }

    // Laser Flower Pattern (296)
    addLaserFlowerPattern(outfit) {
        const laserFlower = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 1.8,
                opacity: 0.7,
                transparent: true,
            })
        );
        laserFlower.position.set(0, 1.2, 0.6);
        outfit.add(laserFlower);
    }

    // Diagonal Neon Edges (298)
    addDiagonalNeonEdges(outfit) {
        const neonEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.0,
            })
        );
        neonEdge.position.set(0.6, 1.2, 0.6);
        neonEdge.rotation.z = Math.PI / 4;
        outfit.add(neonEdge);

        const mirroredNeonEdge = neonEdge.clone();
        mirroredNeonEdge.position.set(-0.6, 1.2, 0.6);
        mirroredNeonEdge.rotation.z = -Math.PI / 4;
        outfit.add(mirroredNeonEdge);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LEDLightingEffects;
}
