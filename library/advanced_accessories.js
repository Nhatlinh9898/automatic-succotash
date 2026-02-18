/**
 * Advanced Accessories Library
 * Advanced accessories and decorative elements for 3D outfits
 */

class AdvancedAccessories {
    constructor(scene) {
        this.scene = scene;
    }

    // Statement necklace function
    addStatementNecklace(outfit) {
        const necklace = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
        );
        necklace.position.set(0, 1.6, 0.4);
        necklace.rotation.x = Math.PI / 2;
        outfit.add(necklace);
    }

    // Unique heels function
    addUniqueHeels(outfit) {
        const heel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Dark red color
        );
        heel.position.set(0.5, -5.5, 0.5);
        outfit.add(heel);

        const secondHeel = heel.clone();
        secondHeel.position.set(-0.5, -5.5, 0.5);
        outfit.add(secondHeel);
    }

    // Decorative collar function
    addDecorativeCollar(outfit) {
        const collar = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
        );
        collar.position.set(0, 1.7, 0.4);
        collar.rotation.x = Math.PI / 2;
        outfit.add(collar);
    }

    // Diamond details function
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

    // Lace borders function
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

    // Shoulder feathers function
    addShoulderFeathers(outfit) {
        const feather = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 2),
            new THREE.MeshStandardMaterial({ color: 0xDC143C, side: THREE.DoubleSide }) // Crimson color
        );
        feather.position.set(0.6, 1.8, -0.2);
        outfit.add(feather);

        const secondFeather = feather.clone();
        secondFeather.position.set(-0.6, 1.8, -0.2);
        outfit.add(secondFeather);
    }

    // Wooden buttons function
    addWoodenButtons(outfit) {
        const button = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 0.02, 16),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Brown color
        );
        button.position.set(0, 1.2, 0.6);
        outfit.add(button);

        const secondButton = button.clone();
        secondButton.position.set(0, 0.8, 0.6);
        outfit.add(secondButton);
    }

    // Long tail function
    addLongTailToOutfit(outfit) {
        const tail = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 8),
            new THREE.MeshStandardMaterial({ color: 0x9370DB, opacity: 0.8, transparent: true })
        );
        tail.position.set(0, -1, -2);
        tail.rotation.x = -Math.PI / 2;
        outfit.add(tail);
    }

    // Elegant zippers function
    addElegantZippers(outfit) {
        const zipper = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 1.5, 0.05),
            new THREE.MeshStandardMaterial({ color: 0x696969 }) // Dim gray color
        );
        zipper.position.set(0.2, 0, 0.6);
        outfit.add(zipper);

        const secondZipper = zipper.clone();
        secondZipper.position.set(-0.2, 0, 0.6);
        outfit.add(secondZipper);
    }

    // Symmetrical patterns function
    addSymmetricalPatterns(outfit) {
        const pattern = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshStandardMaterial({ color: 0x4B0082 }) // Indigo color
        );
        pattern.position.set(0.5, 1.2, 0.6);
        outfit.add(pattern);

        const mirroredPattern = pattern.clone();
        mirroredPattern.position.set(-0.5, 1.2, 0.6);
        outfit.add(mirroredPattern);
    }

    // Metallic cape trim function
    addMetallicCapeTrim(outfit) {
        const capeTrim = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFA500, emissiveIntensity: 1.0 })
        );
        capeTrim.position.set(0, -2, -1);
        capeTrim.rotation.x = Math.PI / 2;
        outfit.add(capeTrim);
    }

    // Fur to skirt hem function
    addFurToSkirtHem(outfit) {
        const furHem = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.2, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Tan color
        );
        furHem.position.set(0, -4, 0);
        outfit.add(furHem);
    }

    // Beads to sleeves function
    addBeadsToSleeves(outfit) {
        const bead = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
        );
        bead.position.set(0.3, 0.8, 0.5);
        outfit.add(bead);

        const secondBead = bead.clone();
        secondBead.position.set(-0.3, 0.8, 0.5);
        outfit.add(secondBead);
    }

    // Embroidered buttons function
    addEmbroideredButtons(outfit) {
        const embroideredButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Orange color
        );
        embroideredButton.position.set(0, 1.5, 0.6);
        outfit.add(embroideredButton);
    }

    // Layered necklace function
    addLayeredNecklace(outfit) {
        const necklaceLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold color
        );
        necklaceLayer1.position.set(0, 1.6, 0.3);
        necklaceLayer1.rotation.x = Math.PI / 2;
        outfit.add(necklaceLayer1);

        const necklaceLayer2 = necklaceLayer1.clone();
        necklaceLayer2.position.set(0, 1.5, 0.4);
        outfit.add(necklaceLayer2);
    }

    // Glass bracelets function
    addGlassBracelets(outfit) {
        const bracelet = new THREE.Mesh(
            new THREE.TorusGeometry(0.2, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                opacity: 0.8,
                transparent: true,
            })
        );
        bracelet.position.set(0.6, 0.5, 0.3);
        outfit.add(bracelet);

        const secondBracelet = bracelet.clone();
        secondBracelet.position.set(-0.6, 0.5, 0.3);
        outfit.add(secondBracelet);
    }

    // Mirror accents function
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

    // Shimmering gemstones function
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

    // Side bag function
    addSideBag(outfit) {
        const sideBag = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark gray color
        );
        sideBag.position.set(0.8, -1, -0.6);
        outfit.add(sideBag);
    }

    // Small bows function
    addSmallBows(outfit) {
        const bow = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.3, 0.1),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Orange color
        );
        bow.position.set(0, -2, 0.5);
        outfit.add(bow);

        const secondBow = bow.clone();
        secondBow.position.set(0, -3, 0.5);
        outfit.add(secondBow);
    }

    // Fur knee detail function
    addFurKneeDetail(outfit) {
        const kneeFur = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.6, 0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Tan color
        );
        kneeFur.position.set(0.5, -3, 0.5);
        outfit.add(kneeFur);

        const secondKneeFur = kneeFur.clone();
        secondKneeFur.position.set(-0.5, -3, 0.5);
        outfit.add(secondKneeFur);
    }

    // Long fur coat function
    addLongFurCoat(outfit) {
        const furCoat = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 6, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Brown color
        );
        furCoat.position.set(0, -2, 0);
        outfit.add(furCoat);
    }

    // Crystal gloves function
    addCrystalGloves(outfit) {
        const crystalGlove = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.0,
            })
        );
        crystalGlove.position.set(0.5, 1, 0.3);
        outfit.add(crystalGlove);

        const secondCrystalGlove = crystalGlove.clone();
        secondCrystalGlove.position.set(-0.5, 1, 0.3);
        outfit.add(secondCrystalGlove);
    }

    // Pearl details function
    addPearlDetails(outfit) {
        const pearl = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Light yellow color
        );
        pearl.position.set(0.5, -1, 0.6);
        outfit.add(pearl);

        const secondPearl = pearl.clone();
        secondPearl.position.set(-0.5, -1, 0.6);
        outfit.add(secondPearl);
    }

    // Sheer shawl function
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

    // Lace to sleeve ends function
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

    // Crystal buttons function
    addCrystalButtons(outfit) {
        const crystalButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.2,
            })
        );
        crystalButton.position.set(0, 1, 0.6);
        outfit.add(crystalButton);

        const secondCrystalButton = crystalButton.clone();
        secondCrystalButton.position.set(0, 0.7, 0.6);
        outfit.add(secondCrystalButton);
    }

    // Standalone creation methods
    createStandaloneNecklace(position = { x: 0, y: 0, z: 0 }, color = 0xFFD700) {
        const necklace = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: color })
        );
        necklace.position.set(position.x, position.y, position.z);
        necklace.rotation.x = Math.PI / 2;
        return necklace;
    }

    createStandaloneDiamond(position = { x: 0, y: 0, z: 0 }, size = 0.2) {
        const diamond = new THREE.Mesh(
            new THREE.SphereGeometry(size, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0xB0E0E6,
                emissiveIntensity: 1.0,
            })
        );
        diamond.position.set(position.x, position.y, position.z);
        return diamond;
    }

    createStandaloneBag(position = { x: 0, y: 0, z: 0 }, size = { width: 1, height: 0.5, depth: 0.3 }, color = 0x2F4F4F) {
        const bag = new THREE.Mesh(
            new THREE.BoxGeometry(size.width, size.height, size.depth),
            new THREE.MeshStandardMaterial({ color: color })
        );
        bag.position.set(position.x, position.y, position.z);
        return bag;
    }

    createStandaloneBow(position = { x: 0, y: 0, z: 0 }, color = 0xFF4500) {
        const bow = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.3, 0.1),
            new THREE.MeshStandardMaterial({ color: color })
        );
        bow.position.set(position.x, position.y, position.z);
        return bow;
    }

    // Method to create accessory sets
    createAccessorySet(style = 'elegant') {
        const group = new THREE.Group();
        
        switch(style) {
            case 'elegant':
                const necklace = this.createStandaloneNecklace({ x: 0, y: 1.6, z: 0.4 });
                const diamond = this.createStandaloneDiamond({ x: 0.5, y: 1.2, z: 0.6 });
                group.add(necklace);
                group.add(diamond);
                break;
                
            case 'casual':
                const bag = this.createStandaloneBag({ x: 0.8, y: -1, z: -0.6 });
                const bow = this.createStandaloneBow({ x: 0, y: -2, z: 0.5 });
                group.add(bag);
                group.add(bow);
                break;
                
            case 'formal':
                const collar = new THREE.Mesh(
                    new THREE.TorusGeometry(0.6, 0.1, 16, 100),
                    new THREE.MeshStandardMaterial({ color: 0xFFD700 })
                );
                collar.position.set(0, 1.7, 0.4);
                collar.rotation.x = Math.PI / 2;
                group.add(collar);
                break;
        }
        
        return group;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedAccessories;
}
