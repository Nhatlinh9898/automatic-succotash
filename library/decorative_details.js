/**
 * Decorative Details Library - Three.js 3D Models
 * Contains decorative elements and embellishments for clothing
 */

class DecorativeDetails {
    constructor(scene) {
        this.scene = scene;
    }

    addCrystalDecoration(outfit) {
        const crystal = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0xE0FFFF, 
                emissive: 0x87CEEB, 
                emissiveIntensity: 0.8 
            })
        );
        crystal.position.set(0.5, 0.8, 0.6);
        outfit.add(crystal);

        const secondCrystal = crystal.clone();
        secondCrystal.position.set(-0.5, 0.8, 0.6);
        outfit.add(secondCrystal);
    }

    addEmbroideryToOutfit(outfit) {
        const embroidery = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        embroidery.position.set(0.5, 1.5, 0.6);
        outfit.add(embroidery);

        const secondEmbroidery = embroidery.clone();
        secondEmbroidery.position.set(-0.5, 1.5, 0.6);
        outfit.add(secondEmbroidery);
    }

    addSparklingButtons(outfit) {
        const button = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFF69B4,
                emissive: 0xFFC0CB,
                emissiveIntensity: 0.8,
            })
        );
        button.position.set(0, 1, 0.5);
        outfit.add(button);

        const secondButton = button.clone();
        secondButton.position.set(0, 0.7, 0.5);
        outfit.add(secondButton);
    }

    addDecorativeBelt(outfit) {
        const decorativeBelt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0xDAA520 })
        );
        decorativeBelt.position.set(0, -0.5, 0);
        outfit.add(decorativeBelt);
    }

    addPatternsToOutfit(outfit) {
        const pattern = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 })
        );
        pattern.position.set(0.3, 0.8, 0.6);
        outfit.add(pattern);

        const secondPattern = pattern.clone();
        secondPattern.position.set(-0.3, 0.8, 0.6);
        outfit.add(secondPattern);
    }

    addFeathersToOutfit(outfit) {
        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 2),
            new THREE.MeshStandardMaterial({ color: 0x87CEEB, side: THREE.DoubleSide })
        );
        feather.position.set(0.8, 2, 0);
        feather.rotation.z = Math.PI / 6;
        outfit.add(feather);

        const secondFeather = feather.clone();
        secondFeather.position.set(-0.8, 2, 0);
        outfit.add(secondFeather);
    }

    addLEDStrips(outfit) {
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ emissive: 0xFF4500, emissiveIntensity: 1.5 })
        );
        ledStrip.position.set(0.6, -3.5, 0.5);
        outfit.add(ledStrip);

        const secondStrip = ledStrip.clone();
        secondStrip.position.set(-0.6, -3.5, 0.5);
        outfit.add(secondStrip);
    }

    addZippersToOutfit(outfit) {
        const zipper = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 1.5, 0.05),
            new THREE.MeshStandardMaterial({ color: 0x808080 })
        );
        zipper.position.set(0.3, 0, 0.5);
        outfit.add(zipper);

        const secondZipper = zipper.clone();
        secondZipper.position.set(-0.3, 0, 0.5);
        outfit.add(secondZipper);
    }

    addMirrorDetails(outfit) {
        const mirror = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x87CEEB, 
                metalness: 1.0, 
                roughness: 0.1 
            })
        );
        mirror.position.set(0.4, 0.8, 0.7);
        outfit.add(mirror);

        const secondMirror = mirror.clone();
        secondMirror.position.set(-0.4, 0.8, 0.7);
        outfit.add(secondMirror);
    }

    addBlinkingLights(outfit) {
        const light = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFF4500,
                emissive: 0xFF6347,
                emissiveIntensity: 1.0,
            })
        );
        light.position.set(0.5, 1, 0.6);
        outfit.add(light);

        const secondLight = light.clone();
        secondLight.position.set(-0.5, 1, 0.6);
        outfit.add(secondLight);
    }

    addFramedWingsToOutfit(outfit) {
        const wingFrame = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                side: THREE.DoubleSide,
                opacity: 0.5,
                transparent: true,
            })
        );
        wingFrame.position.set(1.5, 0, -1);
        wingFrame.rotation.y = Math.PI / 4;
        outfit.add(wingFrame);

        const secondWingFrame = wingFrame.clone();
        secondWingFrame.position.set(-1.5, 0, -1);
        outfit.add(secondWingFrame);
    }

    createStandalonePattern(position = { x: 0, y: 0, z: 0 }, color = 0xFFD700) {
        const pattern = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ 
                color: color,
                emissive: color,
                emissiveIntensity: 0.5
            })
        );
        pattern.position.set(position.x, position.y, position.z);
        return pattern;
    }

    createStandaloneCrystal(position = { x: 0, y: 0, z: 0 }, size = 0.2) {
        const crystal = new THREE.Mesh(
            new THREE.OctahedronGeometry(size, 0),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 0.8,
                metalness: 0.6,
                roughness: 0.2
            })
        );
        crystal.position.set(position.x, position.y, position.z);
        return crystal;
    }

    createStandaloneFeather(position = { x: 0, y: 0, z: 0 }, rotation = 0) {
        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 2),
            new THREE.MeshStandardMaterial({ 
                color: 0x87CEEB, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.8
            })
        );
        feather.position.set(position.x, position.y, position.z);
        feather.rotation.z = rotation;
        return feather;
    }

    createStandaloneLED(position = { x: 0, y: 0, z: 0 }, color = 0xFF4500) {
        const led = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 1.5,
            })
        );
        led.position.set(position.x, position.y, position.z);
        return led;
    }

    createStandaloneMirror(position = { x: 0, y: 0, z: 0 }) {
        const mirror = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x87CEEB, 
                metalness: 1.0, 
                roughness: 0.1,
                envMapIntensity: 1.0
            })
        );
        mirror.position.set(position.x, position.y, position.z);
        return mirror;
    }

    // Method to add multiple decorative elements in a pattern
    addPatternedDecoration(outfit, count = 5, radius = 1.5, height = 1) {
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const decoration = new THREE.Mesh(
                new THREE.SphereGeometry(0.05, 16, 16),
                new THREE.MeshStandardMaterial({
                    color: 0xFFD700,
                    emissive: 0xFFA500,
                    emissiveIntensity: 0.6
                })
            );
            
            decoration.position.set(
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius
            );
            outfit.add(decoration);
        }
    }

    // Method to create animated decorative elements
    createAnimatedDecoration(type = 'sparkle') {
        const group = new THREE.Group();
        
        switch(type) {
            case 'sparkle':
                const sparkle = new THREE.Mesh(
                    new THREE.OctahedronGeometry(0.1, 0),
                    new THREE.MeshStandardMaterial({
                        color: 0xFFFFFF,
                        emissive: 0xFFFFFF,
                        emissiveIntensity: 1.0
                    })
                );
                group.add(sparkle);
                break;
                
            case 'pulse':
                const pulse = new THREE.Mesh(
                    new THREE.SphereGeometry(0.15, 16, 16),
                    new THREE.MeshStandardMaterial({
                        color: 0xFF69B4,
                        emissive: 0xFF1493,
                        emissiveIntensity: 0.8
                    })
                );
                group.add(pulse);
                break;
        }
        
        return group;
    }
// Additional functions from part_9_corrected.js
    
    addCrystalEdges(outfit) {
        const crystalEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.0,
            })
        );
        crystalEdge.position.set(0.4, -3, 0.7);
        outfit.add(crystalEdge);

        const secondEdge = crystalEdge.clone();
        secondEdge.position.set(-0.4, -3, 0.7);
        outfit.add(secondEdge);
    }

    addLaserPatterns(outfit) {
        const laserPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({ 
                color: 0xFF4500, 
                emissive: 0xFF6347, 
                emissiveIntensity: 1.2, 
                opacity: 0.7, 
                transparent: true 
            })
        );
        laserPattern.position.set(0, 1, 0.6);
        outfit.add(laserPattern);
    }

    addBeadsToOutfit(outfit) {
        const bead = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFE0,
                emissive: 0xFFD700,
                emissiveIntensity: 0.5,
            })
        );
        bead.position.set(0.5, -1, 0.6);
        outfit.add(bead);

        const secondBead = bead.clone();
        secondBead.position.set(-0.5, -1, 0.6);
        outfit.add(secondBead);

        const thirdBead = bead.clone();
        thirdBead.position.set(0, -1.5, 0.6);
        outfit.add(thirdBead);
    }

    addHairPin(outfit) {
        const pinStem = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 1, 16),
            new THREE.MeshStandardMaterial({ color: 0xA0522D }) // Brown color
        );
        pinStem.position.set(0, 2.7, -0.3);
        outfit.add(pinStem);

        const pinFlower = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFF1493 }) // Deep pink color
        );
        pinFlower.position.set(0, 3, -0.3);
        outfit.add(pinFlower);
    }

    addCrystalHairClip(outfit) {
        const hairClip = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.2, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                emissive: 0xE0FFFF,
                emissiveIntensity: 0.8,
            })
        );
        hairClip.position.set(0, 2.8, -0.4);
        outfit.add(hairClip);
    }

    addVerticalChains(outfit) {
        const chain = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 8),
            new THREE.MeshStandardMaterial({ color: 0xA9A9A9 }) // Silver gray color
        );
        chain.position.set(0.6, -2, 0.4);
        outfit.add(chain);

        const secondChain = chain.clone();
        secondChain.position.set(-0.6, -2, 0.4);
        outfit.add(secondChain);
    }

    addFeatherTrim(outfit) {
        const featherTrim = new THREE.Mesh(
            new THREE.TorusGeometry(2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Light brown color
        );
        featherTrim.position.set(0, -3, 0);
        featherTrim.rotation.x = Math.PI / 2;
        outfit.add(featherTrim);
    }

    addShoulderFlower(outfit) {
        const flower = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Light pink color
        );
        flower.position.set(0.7, 2, 0);
        outfit.add(flower);

        const secondFlower = flower.clone();
        secondFlower.position.set(-0.7, 2, 0);
        outfit.add(secondFlower);
    }

    addTexturedFabric(outfit) {
        const fabric = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({
                color: 0x708090,
                wireframe: true,
                opacity: 0.8,
                transparent: true,
            })
        );
        fabric.position.set(0, 1, 0.5);
        outfit.add(fabric);
    }

    addFlowerBrooch(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Orange color
        );
        flower.position.set(0.6, 1.5, 0.7);
        outfit.add(flower);
    }

    addReflectiveCoating(outfit) {
        const coating = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                metalness: 1,
                roughness: 0.1,
            })
        );
        coating.position.set(0, 1, 0.6);
        outfit.add(coating);
    }

    addDecorativeStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black color
        );
        strap.position.set(0.6, -3, 0.5);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.6, -3, 0.5);
        outfit.add(secondStrap);
    }

    addLightHalo(outfit) {
        const halo = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
                color: 0xFFFFE0,
                opacity: 0.7,
                transparent: true,
            })
        );
        halo.position.set(0, 1, 0);
        outfit.add(halo);
    }

    addMetalDetails(outfit) {
        const metalDetail = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 0.5),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalDetail.position.set(0.3, 1.2, 0.6);
        outfit.add(metalDetail);

        const secondMetalDetail = metalDetail.clone();
        secondMetalDetail.position.set(-0.3, 1.2, 0.6);
        outfit.add(secondMetalDetail);
    }

    addMiniChandeliers(outfit) {
        const chandelier = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        chandelier.position.set(0.5, 2, 0);
        outfit.add(chandelier);

        const secondChandelier = chandelier.clone();
        secondChandelier.position.set(-0.5, 2, 0);
        outfit.add(secondChandelier);
    }

    addWavePatterns(outfit) {
        const wave = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.5),
            new THREE.MeshStandardMaterial({ color: 0xB0E0E6 }) // Light blue color
        );
        wave.position.set(0, 1.5, 0.6);
        wave.rotation.z = Math.PI / 6;
        outfit.add(wave);

        const secondWave = wave.clone();
        secondWave.position.set(0, 1, 0.6);
        secondWave.rotation.z = -Math.PI / 6;
        outfit.add(secondWave);
    }

    addShadowBorders(outfit) {
        const border = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0x696969,
                opacity: 0.5,
                transparent: true,
            })
        );
        border.position.set(0, -1, 0.5);
        outfit.add(border);

        const secondBorder = border.clone();
        secondBorder.position.set(0, -1.5, 0.5);
        outfit.add(secondBorder);
    }

    addMirrorPieces(outfit) {
        const mirrorPiece = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        mirrorPiece.position.set(0.6, 1.5, 0.5);
        outfit.add(mirrorPiece);

        const secondMirrorPiece = mirrorPiece.clone();
        secondMirrorPiece.position.set(-0.6, 1.5, 0.5);
        outfit.add(secondMirrorPiece);
    }

    addLightHangingStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple color
        );
        strap.position.set(0.6, -2, 0.4);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.6, -2, 0.4);
        outfit.add(secondStrap);
    }

    addCrystalPatterns(outfit) {
        const crystalPattern = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        crystalPattern.position.set(0, 1, 0.6);
        outfit.add(crystalPattern);
    }

    addGlitterEdges(outfit) {
        const glitterEdge = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xFF69B4,
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.2,
            })
        );
        glitterEdge.position.set(0, -3, 0);
        outfit.add(glitterEdge);
    }

    addMeshDetails(outfit) {
        const meshDetail = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.MeshStandardMaterial({
                color: 0x708090,
                wireframe: true,
            })
        );
        meshDetail.position.set(0, 1, 0.6);
        outfit.add(meshDetail);
    }

    addClassicPatterns(outfit) {
        const pattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({
                color: 0x8B0000,
                opacity: 0.7,
                transparent: true,
            })
        );
        pattern.position.set(0, 1.2, 0.6);
        outfit.add(pattern);
    }

    addLaceTrim(outfit) {
        const lace = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        lace.position.set(0, 1.5, 0.6);
        outfit.add(lace);
    }

    addWideBelts(outfit) {
        const belt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black color
        );
        belt.position.set(0, -0.8, 0);
        outfit.add(belt);
    }

    addGeometricPatterns(outfit) {
        const pattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({ color: 0xFF6347 }) // Tomato color
        );
        pattern.position.set(0, 1.2, 0.6);
        outfit.add(pattern);
    }

    addLightBorders(outfit) {
        const lightBorder = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        lightBorder.position.set(0, -3, 0);
        outfit.add(lightBorder);
    }

    addDecorativeGlasses(outfit) {
        const frame = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 0.5, 0.1),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black color
        );
        frame.position.set(0, 1.8, 1.2);
        outfit.add(frame);

        const lens = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshStandardMaterial({
                color: 0x87CEEB,
                opacity: 0.7,
                transparent: true,
            })
        );
        lens.position.set(0.6, 1.8, 1.2);
        outfit.add(lens);

        const secondLens = lens.clone();
        secondLens.position.set(-0.6, 1.8, 1.2);
        outfit.add(secondLens);
    }

    addGlitteringWings(outfit) {
        const glitterWing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.0,
                opacity: 0.7,
                transparent: true,
            })
        );
        glitterWing.rotation.y = Math.PI / 4;
        glitterWing.position.set(1.5, 0, -0.5);
        outfit.add(glitterWing);

        const secondGlitterWing = glitterWing.clone();
        secondGlitterWing.position.set(-1.5, 0, -0.5);
        outfit.add(secondGlitterWing);
    }

    addHeadband(outfit) {
        const headband = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32),
            new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Crimson color
        );
        headband.position.set(0, 2.5, 0);
        headband.rotation.x = Math.PI / 2;
        outfit.add(headband);
    }

    // New functions from part_10_corrected.js
    
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

    addTwistedMetal(outfit) {
        const twistedMetal = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x808080, metalness: 1.0, roughness: 0.3 })
        );
        twistedMetal.position.set(0.5, 1, 0.7);
        outfit.add(twistedMetal);

        const secondTwistedMetal = twistedMetal.clone();
        secondTwistedMetal.position.set(-0.5, 1, 0.7);
        outfit.add(secondTwistedMetal);
    }

    addWoodenButtons(outfit) {
        const button = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 0.02, 16),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Màu nâu đất
        );
        button.position.set(0, 1.2, 0.6);
        outfit.add(button);

        const secondButton = button.clone();
        secondButton.position.set(0, 0.8, 0.6);
        outfit.add(secondButton);
    }

    addDecorativeCollar(outfit) {
        const collar = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Màu vàng kim loại
        );
        collar.position.set(0, 1.7, 0.4);
        collar.rotation.x = Math.PI / 2;
        outfit.add(collar);
    }

    addDiamondDetails(outfit) {
        const diamond = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.0,
            })
        );
        diamond.position.set(0.5, 1.2, 0.6);
        outfit.add(diamond);

        const secondDiamond = diamond.clone();
        secondDiamond.position.set(-0.5, 1.2, 0.6);
        outfit.add(secondDiamond);
    }

    addLaceBorders(outfit) {
        const laceBorder = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 0.5),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF, opacity: 0.8, transparent: true })
        );
        laceBorder.position.set(0, 1.5, 0.6);
        outfit.add(laceBorder);

        const secondLaceBorder = laceBorder.clone();
        secondLaceBorder.position.set(0, -1, 0.6);
        outfit.add(secondLaceBorder);
    }

    addShoulderFeathers(outfit) {
        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 2),
            new THREE.MeshStandardMaterial({ color: 0xDC143C, side: THREE.DoubleSide }) // Màu đỏ đậm
        );
        feather.position.set(0.6, 1.8, -0.2);
        outfit.add(feather);

        const secondFeather = feather.clone();
        secondFeather.position.set(-0.6, 1.8, -0.2);
        outfit.add(secondFeather);
    }

    addElegantZippers(outfit) {
        const zipper = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 1.5, 0.05),
            new THREE.MeshStandardMaterial({ color: 0x696969 }) // Màu xám đậm
        );
        zipper.position.set(0.2, 0, 0.6);
        outfit.add(zipper);

        const secondZipper = zipper.clone();
        secondZipper.position.set(-0.2, 0, 0.6);
        outfit.add(secondZipper);
    }

    addSymmetricalPatterns(outfit) {
        const pattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({ color: 0x4B0082 }) // Màu tím đậm
        );
        pattern.position.set(0.5, 1.2, 0.6);
        outfit.add(pattern);

        const mirroredPattern = pattern.clone();
        mirroredPattern.position.set(-0.5, 1.2, 0.6);
        outfit.add(mirroredPattern);
    }

    addBeadsToSleeves(outfit) {
        const bead = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Màu vàng kim
        );
        bead.position.set(0.3, 0.8, 0.5);
        outfit.add(bead);

        const secondBead = bead.clone();
        secondBead.position.set(-0.3, 0.8, 0.5);
        outfit.add(secondBead);
    }

    addEmbroideredButtons(outfit) {
        const embroideredButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Màu cam
        );
        embroideredButton.position.set(0, 1.5, 0.6);
        outfit.add(embroideredButton);
    }

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

    addDecorativeWraps(outfit) {
        const wrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Màu tím nhạt
        );
        wrap.position.set(0.5, -3, 0.5);
        outfit.add(wrap);

        const secondWrap = wrap.clone();
        secondWrap.position.set(-0.5, -3, 0.5);
        outfit.add(secondWrap);
    }

    addMetallicShirtEdges(outfit) {
        const edge = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        edge.position.set(0, 1, 0);
        outfit.add(edge);
    }

    addShoulderStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Màu vàng kim loại
        );
        strap.position.set(0.6, 1, 0.6);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.6, 1, 0.6);
        outfit.add(secondStrap);
    }

    addShimmeringGemstones(outfit) {
        const gemstone = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE6E6FA,
                emissive: 0x9370DB,
                emissiveIntensity: 0.8,
            })
        );
        gemstone.position.set(0.5, 1.2, 0.6);
        outfit.add(gemstone);

        const secondGemstone = gemstone.clone();
        secondGemstone.position.set(-0.5, 1.2, 0.6);
        outfit.add(secondGemstone);
    }

    addRibbonTwistToSkirt(outfit) {
        const ribbonTwist = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng đậm
        );
        ribbonTwist.position.set(0, -3, 0.5);
        outfit.add(ribbonTwist);

        const secondRibbonTwist = ribbonTwist.clone();
        secondRibbonTwist.position.set(0, -4, 0.5);
        outfit.add(secondRibbonTwist);
    }

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

    addFurKneeDetail(outfit) {
        const kneeFur = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.6, 0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Màu nâu nhạt
        );
        kneeFur.position.set(0.5, -3, 0.5);
        outfit.add(kneeFur);

        const secondKneeFur = kneeFur.clone();
        secondKneeFur.position.set(-0.5, -3, 0.5);
        outfit.add(secondKneeFur);
    }

    addLaceToSleeveEnds(outfit) {
        const lace = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        lace.position.set(0, 1.2, 0.5);
        outfit.add(lace);
    }

    addSheerShawl(outfit) {
        const shawl = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 1),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.6,
                transparent: true,
            })
        );
        shawl.position.set(0, 1, 0.8);
        shawl.rotation.x = -Math.PI / 2;
        outfit.add(shawl);
    }

    addPearlDetails(outfit) {
        const pearl = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
        );
        pearl.position.set(0.5, -1, 0.6);
        outfit.add(pearl);

        const secondPearl = pearl.clone();
        secondPearl.position.set(-0.5, -1, 0.6);
        outfit.add(secondPearl);
    }

    addSmallBows(outfit) {
        const bow = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.3, 0.1),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Màu cam sáng
        );
        bow.position.set(0, -2, 0.5);
        outfit.add(bow);

        const secondBow = bow.clone();
        secondBow.position.set(0, -3, 0.5);
        outfit.add(secondBow);
    }

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

    // New functions from part_11_corrected.js - Decorative Details

    addLayeredStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Màu đỏ đậm
        );
        strap.position.set(0.6, 1, 0.4);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.6, 1, 0.4);
        outfit.add(secondStrap);
    }

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

    addBackStraps(outfit) {
        const backStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Màu tím nhạt
        );
        backStrap.position.set(0.5, -2, 0.4);
        outfit.add(backStrap);

        const secondBackStrap = backStrap.clone();
        secondBackStrap.position.set(-0.5, -2, 0.4);
        outfit.add(secondBackStrap);
    }

    addLaceCollar(outfit) {
        const laceCollar = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        laceCollar.position.set(0, 1.7, 0.3);
        laceCollar.rotation.x = Math.PI / 2;
        outfit.add(laceCollar);
    }

    addFlowerDecorations(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng nhạt
        );
        flower.position.set(0.6, 1.5, 0.5);
        outfit.add(flower);

        const secondFlower = flower.clone();
        secondFlower.position.set(-0.6, 1.5, 0.5);
        outfit.add(secondFlower);
    }

    addLayeredMetalStrips(outfit) {
        const metalStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalStrip.position.set(0.5, -2, 0.5);
        outfit.add(metalStrip);

        const secondMetalStrip = metalStrip.clone();
        secondMetalStrip.position.set(-0.5, -2, 0.5);
        outfit.add(secondMetalStrip);
    }

    addArmBands(outfit) {
        const armBand = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Màu đỏ đậm
        );
        armBand.position.set(0.5, 0.8, 0.3);
        outfit.add(armBand);

        const secondArmBand = armBand.clone();
        secondArmBand.position.set(-0.5, 0.8, 0.3);
        outfit.add(secondArmBand);
    }

    addPearlHemline(outfit) {
        const pearl = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
        );
        pearl.position.set(0.5, -3, 0.6);
        outfit.add(pearl);

        const secondPearl = pearl.clone();
        secondPearl.position.set(-0.5, -3, 0.6);
        outfit.add(secondPearl);
    }

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

    addMetallicStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xA9A9A9,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        strap.position.set(0.4, 1, 0.6);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.4, 1, 0.6);
        outfit.add(secondStrap);
    }

    addVerticalRibbons(outfit) {
        const ribbon = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.2),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng đậm
        );
        ribbon.position.set(0.6, -2, 0.5);
        ribbon.rotation.z = Math.PI / 6;
        outfit.add(ribbon);

        const secondRibbon = ribbon.clone();
        secondRibbon.position.set(-0.6, -2, 0.5);
        outfit.add(secondRibbon);
    }

    addShoulderFurTrim(outfit) {
        const furTrim = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Màu nâu sồng
        );
        furTrim.position.set(0, 1.8, 0);
        outfit.add(furTrim);
    }

    addFeatherCuffs(outfit) {
        const featherCuff = new THREE.Mesh(
            new THREE.TorusGeometry(0.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Màu đỏ đậm
        );
        featherCuff.position.set(0.5, 0.8, 0.5);
        outfit.add(featherCuff);

        const secondFeatherCuff = featherCuff.clone();
        secondFeatherCuff.position.set(-0.5, 0.8, 0.5);
        outfit.add(secondFeatherCuff);
    }

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

    addMetallicSleeves(outfit) {
        const sleeveDetail = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.6, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        sleeveDetail.position.set(0.5, 1, 0);
        outfit.add(sleeveDetail);

        const secondSleeve = sleeveDetail.clone();
        secondSleeve.position.set(-0.5, 1, 0);
        outfit.add(secondSleeve);
    }

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

    addFeatherHemline(outfit) {
        const featherTrim = new THREE.Mesh(
            new THREE.TorusGeometry(2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Màu đỏ đậm
        );
        featherTrim.position.set(0, -4, 0);
        outfit.add(featherTrim);
    }

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
// Additional decorative details from part_12_corrected.js

    // Wave decorations for flowing effect
    addWaveDecorations(outfit) {
        const wave = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 0.5),
            new THREE.MeshStandardMaterial({ color: 0xB0E0E6 }) // Light blue
        );
        wave.position.set(0, 1.2, 0.6);
        wave.rotation.z = Math.PI / 6;
        outfit.add(wave);

        const secondWave = wave.clone();
        secondWave.position.set(0, 0.8, 0.6);
        secondWave.rotation.z = -Math.PI / 6;
        outfit.add(secondWave);
    }

    // Frosted wings for ethereal look
    addFrostedWings(outfit) {
        const wing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.5,
                transparent: true,
            })
        );
        wing.position.set(1.5, 0, -0.5);
        wing.rotation.y = Math.PI / 4;
        outfit.add(wing);

        const secondWing = wing.clone();
        secondWing.position.set(-1.5, 0, -0.5);
        outfit.add(secondWing);
    }

    // Metal wave borders for futuristic look
    addMetalWaveBorders(outfit) {
        const metalWave = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metalWave.position.set(0, -3.5, 0.5);
        outfit.add(metalWave);

        const secondMetalWave = metalWave.clone();
        secondMetalWave.position.set(0, -4, 0.5);
        outfit.add(secondMetalWave);
    }

    // Silver patterns for elegant touch
    addSilverPatterns(outfit) {
        const silverPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.3),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        silverPattern.position.set(0, 1.5, 0.5);
        outfit.add(silverPattern);
    }

    // Frosted patterns for mysterious look
    addFrostedPatterns(outfit) {
        const frostedPattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.6,
                transparent: true,
            })
        );
        frostedPattern.position.set(0, 1.2, 0.5);
        outfit.add(frostedPattern);
    }

    // Steel edges for industrial look
    addSteelEdges(outfit) {
        const steelEdge = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        steelEdge.position.set(0, 1.7, 0);
        outfit.add(steelEdge);
    }

    // Metal decorations for sci-fi style
    addMetalDecorations(outfit) {
        const metalDetail = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalDetail.position.set(0.6, -3, 0.5);
        outfit.add(metalDetail);

        const secondMetalDetail = metalDetail.clone();
        secondMetalDetail.position.set(-0.6, -3, 0.5);
        outfit.add(secondMetalDetail);
    }

    // Pearled lace edges for luxury
    addPearledLaceEdges(outfit) {
        const laceEdge = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 0.3),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFE0,
                emissive: 0xFFD700,
                emissiveIntensity: 1.2,
            })
        );
        laceEdge.position.set(0, -3.5, 0.5);
        outfit.add(laceEdge);
    }

    // Flower trim for delicate touch
    addFlowerTrim(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Light pink
        );
        flower.position.set(0.6, -4.5, 0.6);
        outfit.add(flower);

        const secondFlower = flower.clone();
        secondFlower.position.set(-0.6, -4.5, 0.6);
        outfit.add(secondFlower);
    }

    // Unique geometric decorations
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

    // Sparkling sleeve details
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

    // Silk Layers To Skirt (214)
    addSilkLayersToSkirt(outfit) {
        const silkLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 5),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.6,
                transparent: true,
            })
        );
        silkLayer.position.set(0, -2, 0.6);
        outfit.add(silkLayer);
    }

    // Metallic Layered Heels (217)
    addMetallicLayeredHeels(outfit) {
        const metallicHeel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.5, 2, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metallicHeel.position.set(0.5, -5.5, 0.5);
        outfit.add(metallicHeel);

        const mirroredMetallicHeel = metallicHeel.clone();
        mirroredMetallicHeel.position.set(-0.5, -5.5, 0.5);
        outfit.add(mirroredMetallicHeel);
    }

    // Long Fur Hemline (219)
    addLongFurHemline(outfit) {
        const furHemline = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.3, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Màu nâu nhạt
        );
        furHemline.position.set(0, -4, 0);
        outfit.add(furHemline);
    }

    // Layered Silk Bands (222)
    addLayeredSilkBands(outfit) {
        const silkLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 4),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.7,
                transparent: true,
            })
        );
        silkLayer.position.set(0, -2, 0.5);
        outfit.add(silkLayer);

        const secondLayer = silkLayer.clone();
        secondLayer.position.set(0, -3, 0.5);
        outfit.add(secondLayer);
    }

    // Metallic Gloves (223)
    addMetallicGloves(outfit) {
        const glove = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        glove.position.set(0.5, -1, 0.3);
        outfit.add(glove);

        const secondGlove = glove.clone();
        secondGlove.position.set(-0.5, -1, 0.3);
        outfit.add(secondGlove);
    }

    // Crystal Vertical Strips (224)
    addCrystalVerticalStrips(outfit) {
        const crystalStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalStrip.position.set(0.5, -1.5, 0.6);
        outfit.add(crystalStrip);

        const mirroredStrip = crystalStrip.clone();
        mirroredStrip.position.set(-0.5, -1.5, 0.6);
        outfit.add(mirroredStrip);
    }

    // Transparent Skirt Layer (226)
    addTransparentSkirtLayer(outfit) {
        const transparentLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 4, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.3,
                transparent: true,
            })
        );
        transparentLayer.position.set(0, -4, 0);
        outfit.add(transparentLayer);
    }

    // Metal Mesh Edges (227)
    addMetalMeshEdges(outfit) {
        const metalMeshEdge = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                wireframe: true,
            })
        );
        metalMeshEdge.position.set(0, -3.5, 0.6);
        outfit.add(metalMeshEdge);
    }

    // Back Floral Details (228)
    addBackFloralDetails(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng
        );
        flower.position.set(0, 1.5, -0.5);
        outfit.add(flower);

        const secondFlower = flower.clone();
        secondFlower.position.set(0, 0.8, -0.5);
        outfit.add(secondFlower);
    }

    // Crystal Shoes (229)
    addCrystalShoes(outfit) {
        const shoe = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 0.8, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        shoe.position.set(0.5, -5.5, 0.5);
        outfit.add(shoe);

        const mirroredShoe = shoe.clone();
        mirroredShoe.position.set(-0.5, -5.5, 0.5);
        outfit.add(mirroredShoe);
    }

    // Bold Metal Belt (231)
    addBoldMetalBelt(outfit) {
        const metalBelt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1.5, 0.3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalBelt.position.set(0, -0.5, 0);
        outfit.add(metalBelt);
    }

    // Feathered Hat (232)
    addFeatheredHat(outfit) {
        const hat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Màu nâu đất
        );
        hat.position.set(0, 2.8, 0);

        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(0.6, 2),
            new THREE.MeshStandardMaterial({
                color: 0xD2B48C,
                side: THREE.DoubleSide,
            })
        );
        feather.position.set(0.8, 3, -0.4);
        hat.add(feather);
        outfit.add(hat);
    }

    // Metallic Details To Heels (233)
    addMetallicDetailsToHeels(outfit) {
        const heel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.4, 0.6, 2.5, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        heel.position.set(0.5, -5.5, 0.6);
        outfit.add(heel);

        const secondHeel = heel.clone();
        secondHeel.position.set(-0.5, -5.5, 0.6);
        outfit.add(secondHeel);
    }

    // Large Shoulder Flower (235)
    addLargeShoulderFlower(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.5, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFF69B4,
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.0,
            })
        );
        flower.position.set(0.8, 2.5, 0);
        outfit.add(flower);

        const mirroredFlower = flower.clone();
        mirroredFlower.position.set(-0.8, 2.5, 0);
        outfit.add(mirroredFlower);
    }

    // Crystal Cape (236)
    addCrystalCape(outfit) {
        const cape = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 6),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                opacity: 0.7,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
                transparent: true,
            })
        );
        cape.position.set(0, -2, -1);
        cape.rotation.x = -Math.PI / 2;
        outfit.add(cape);
    }

    // Silk Shoulder Band (237)
    addSilkShoulderBand(outfit) {
        const shoulderBand = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.8,
                transparent: true,
            })
        );
        shoulderBand.position.set(0, 2, 0);
        shoulderBand.rotation.z = Math.PI / 2;
        outfit.add(shoulderBand);
    }

    // Multidimensional Skirt Layer (238)
    addMultidimensionalSkirtLayer(outfit) {
        const skirtLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                metalness: 0.9,
                roughness: 0.3,
            })
        );
        skirtLayer.position.set(0, -4, 0);
        outfit.add(skirtLayer);
    }

    // Layered Crystal Hemline (239)
    addLayeredCrystalHemline(outfit) {
        const crystalLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalLayer1.position.set(0, -4.5, 0);
        outfit.add(crystalLayer1);

        const crystalLayer2 = crystalLayer1.clone();
        crystalLayer2.position.set(0, -5, 0);
        outfit.add(crystalLayer2);
    }

    // Wavy Metal Strips (241)
    addWavyMetalStrips(outfit) {
        const wavyStrip = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        wavyStrip.position.set(0, -3.5, 0.5);
        outfit.add(wavyStrip);
    }

    // Copper Buttons (242)
    addCopperButtons(outfit) {
        const button = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({ color: 0xCD7F32 }) // Màu đồng
        );
        button.position.set(0, 1.2, 0.5);
        outfit.add(button);

        const secondButton = button.clone();
        secondButton.position.set(0, 0.9, 0.5);
        outfit.add(secondButton);
    }

    // Feather Borders (244)
    addFeatherBorders(outfit) {
        const featherBorder = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.2, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Màu đỏ đậm
        );
        featherBorder.position.set(0, -4.5, 0);
        outfit.add(featherBorder);
    }

    // Lace Wristbands (246)
    addLaceWristbands(outfit) {
        const wristband = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        wristband.position.set(0.5, 0.5, 0.3);
        outfit.add(wristband);

        const secondWristband = wristband.clone();
        secondWristband.position.set(-0.5, 0.5, 0.3);
        outfit.add(secondWristband);
    }

    // Multi Layered Crystal Necklace (247)
    addMultiLayeredCrystalNecklace(outfit) {
        const crystalLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalLayer1.position.set(0, 1.5, 0.4);
        crystalLayer1.rotation.x = Math.PI / 2;
        outfit.add(crystalLayer1);

        const crystalLayer2 = crystalLayer1.clone();
        crystalLayer2.position.set(0, 1.4, 0.5);
        outfit.add(crystalLayer2);
    }

    // Bold Metal Collar (250)
    addBoldMetalCollar(outfit) {
        const metalCollar = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalCollar.position.set(0, 1.6, 0.3);
        metalCollar.rotation.x = Math.PI / 2;
        outfit.add(metalCollar);
    }

    // Crystal Gloves (253)
    addCrystalGloves(outfit) {
        const glove = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        glove.position.set(0.5, -1, 0.3);
        outfit.add(glove);

        const mirroredGlove = glove.clone();
        mirroredGlove.position.set(-0.5, -1, 0.3);
        outfit.add(mirroredGlove);
    }

    // Layered Metal Edges (254)
    addLayeredMetalEdges(outfit) {
        const metalEdge = new THREE.Mesh(
            new THREE.TorusGeometry(2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metalEdge.position.set(0, -4, 0.5);
        outfit.add(metalEdge);

        const secondMetalEdge = metalEdge.clone();
        secondMetalEdge.position.set(0, -3.5, 0.5);
        outfit.add(secondMetalEdge);
    }

    // Crystal Wings (256)
    addCrystalWings(outfit) {
        const crystalWing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                opacity: 0.7,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
                transparent: true,
            })
        );
        crystalWing.position.set(1.5, 0, -0.5);
        outfit.add(crystalWing);

        const secondCrystalWing = crystalWing.clone();
        secondCrystalWing.position.set(-1.5, 0, -0.5);
        outfit.add(secondCrystalWing);
    }

    // Lace Trims (258)
    addLaceTrims(outfit) {
        const laceTrim = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        laceTrim.position.set(0, -4.5, 0.6);
        outfit.add(laceTrim);
    }

    // Long Fabric Overlay (259)
    addLongFabricOverlay(outfit) {
        const fabricOverlay = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 6),
            new THREE.MeshStandardMaterial({
                color: 0x9370DB,
                opacity: 0.8,
                transparent: true,
            })
        );
        fabricOverlay.position.set(0, -2, -1);
        outfit.add(fabricOverlay);
    }

    // Flowing Silk Bands (263)
    addFlowingSilkBands(outfit) {
        const silkBand = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 5),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.7,
                transparent: true,
            })
        );
        silkBand.position.set(0.6, 1.8, -0.5);
        silkBand.rotation.z = Math.PI / 6;
        outfit.add(silkBand);

        const mirroredSilkBand = silkBand.clone();
        mirroredSilkBand.position.set(-0.6, 1.8, -0.5);
        mirroredSilkBand.rotation.z = -Math.PI / 6;
        outfit.add(mirroredSilkBand);
    }

    // Layered Lace (267)
    addLayeredLace(outfit) {
        const laceLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        laceLayer.position.set(0, -4.5, 0.6);
        outfit.add(laceLayer);

        const secondLayer = laceLayer.clone();
        secondLayer.position.set(0, -4, 0.6);
        outfit.add(secondLayer);
    }

    // Crystal Lace Bands (272)
    addCrystalLaceBands(outfit) {
        const laceBand = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
                opacity: 0.8,
                transparent: true,
            })
        );
        laceBand.position.set(0, -4, 0.6);
        outfit.add(laceBand);

        const secondBand = laceBand.clone();
        secondBand.position.set(0, -3, 0.6);
        outfit.add(secondBand);
    }

    // Back Lace Trim (281)
    addBackLaceTrim(outfit) {
        const laceLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.8,
                transparent: true,
            })
        );
        laceLayer.position.set(0, 1.5, -0.6);
        outfit.add(laceLayer);

        const secondLaceLayer = laceLayer.clone();
        secondLaceLayer.position.set(0, 0.8, -0.6);
        outfit.add(secondLaceLayer);
    }

    // Flowing Lace Layers (283)
    addFlowingLaceLayers(outfit) {
        const laceLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 6),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.8,
                transparent: true,
            })
        );
        laceLayer.position.set(0, -2, 0.6);
        outfit.add(laceLayer);
    }

    // Decorative Lace (290)
    addDecorativeLace(outfit) {
        const laceDecor = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        laceDecor.position.set(0, 1.6, 0.5);
        outfit.add(laceDecor);
    }

    // Crystal Lace Trims (294)
    addCrystalLaceTrims(outfit) {
        const laceTrim = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
                opacity: 0.9,
                transparent: true,
            })
        );
        laceTrim.position.set(0, -3.5, 0.6);
        outfit.add(laceTrim);
    }

    // Crystal Feather Hat (295)
    addCrystalFeatherHat(outfit) {
        const hat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Màu nâu đất
        );
        hat.position.set(0, 2.8, 0);

        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(0.6, 2),
            new THREE.MeshStandardMaterial({
                color: 0xD2B48C,
                side: THREE.DoubleSide,
            })
        );
        feather.position.set(0.8, 3, -0.4);
        hat.add(feather);

        const crystalDetail = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        crystalDetail.position.set(0.8, 3.2, -0.4);
        hat.add(crystalDetail);

        outfit.add(hat);
    }

    // Feather Back Details (273)
    addFeatherBackDetails(outfit) {
        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 3),
            new THREE.MeshStandardMaterial({
                color: 0xDC143C,
                side: THREE.DoubleSide,
            })
        );
        feather.position.set(0, 1.5, -0.6);
        outfit.add(feather);
    }

    // Large Back Flowers (278)
    addLargeBackFlowers(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng nhạt
        );
        flower.position.set(0, 1.5, -0.6);
        outfit.add(flower);

        const secondFlower = flower.clone();
        secondFlower.position.set(0, 0.8, -0.6);
        outfit.add(secondFlower);
    }

    // Bold Crystal Heels (279)
    addBoldCrystalHeels(outfit) {
        const crystalHeel = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalHeel.position.set(0.5, -5.5, 0.6);
        outfit.add(crystalHeel);

        const secondCrystalHeel = crystalHeel.clone();
        secondCrystalHeel.position.set(-0.5, -5.5, 0.6);
        outfit.add(secondCrystalHeel);
    }

    // Floral Heel Decor (288)
    addFloralHeelDecor(outfit) {
        const heelFlower = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Màu hồng nhạt
        );
        heelFlower.position.set(0.5, -5.3, 0.6);
        outfit.add(heelFlower);

        const mirroredHeelFlower = heelFlower.clone();
        mirroredHeelFlower.position.set(-0.5, -5.3, 0.6);
        outfit.add(mirroredHeelFlower);
    }

    // Metal Skirt Layer (289)
    addMetalSkirtLayer(outfit) {
        const metalLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metalLayer.position.set(0, -4, 0);
        outfit.add(metalLayer);
    }

    // Crossed Metal Edges (291)
    addCrossedMetalEdges(outfit) {
        const metalEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalEdge.position.set(0.6, -2, 0.5);
        metalEdge.rotation.z = Math.PI / 4;
        outfit.add(metalEdge);

        const mirroredMetalEdge = metalEdge.clone();
        mirroredMetalEdge.position.set(-0.6, -2, 0.5);
        mirroredMetalEdge.rotation.z = -Math.PI / 4;
        outfit.add(mirroredMetalEdge);
    }

    // Glittering Hemline (293)
    addGlitteringHemline(outfit) {
        const glitterEdge = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
            })
        );
        glitterEdge.position.set(0, -4, 0);
        outfit.add(glitterEdge);

        const secondEdge = glitterEdge.clone();
        secondEdge.position.set(0, -4.5, 0);
        outfit.add(secondEdge);
    }

    // Glittering Skirt Layer (297)
    addGlitteringSkirtLayer(outfit) {
        const glitterLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.5,
            })
        );
        glitterLayer.position.set(0, -4, 0);
        outfit.add(glitterLayer);
    }

    // Shoulder Metal Decorations (264)
    addShoulderMetalDecorations(outfit) {
        const metalDetail = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalDetail.position.set(0.5, 2, 0);
        outfit.add(metalDetail);

        const mirroredMetalDetail = metalDetail.clone();
        mirroredMetalDetail.position.set(-0.5, 2, 0);
        outfit.add(mirroredMetalDetail);
    }

    // Gemstone Gloves (268)
    addGemstoneGloves(outfit) {
        const glove = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                emissive: 0xFFA500,
                emissiveIntensity: 1.0,
            })
        );
        glove.position.set(0.5, -1, 0.3);
        outfit.add(glove);

        const mirroredGlove = glove.clone();
        mirroredGlove.position.set(-0.5, -1, 0.3);
        outfit.add(mirroredGlove);
    }

    // Diagonal Crystal Edges (261)
    addDiagonalCrystalEdges(outfit) {
        const crystalEdge = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.5,
            })
        );
        crystalEdge.position.set(0.6, 1.2, 0.6);
        crystalEdge.rotation.z = Math.PI / 4;
        outfit.add(crystalEdge);

        const mirroredCrystalEdge = crystalEdge.clone();
        mirroredCrystalEdge.position.set(-0.6, 1.2, 0.6);
        mirroredCrystalEdge.rotation.z = -Math.PI / 4;
        outfit.add(mirroredCrystalEdge);
    }

    // Metal Pearl Bands (277)
    addMetalPearlBands(outfit) {
        const metalBand = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metalBand.position.set(0.5, -2, 0.5);
        outfit.add(metalBand);

        const pearl = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
        );
        pearl.position.set(0.5, -1.5, 0.5);
        outfit.add(pearl);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DecorativeDetails;
}
