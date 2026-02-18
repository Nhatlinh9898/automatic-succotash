/**
 * Clothing Accessories Library - Three.js 3D Models
 * Contains wearable accessories and functional items for clothing
 */

class ClothingAccessories {
    constructor(scene) {
        this.scene = scene;
    }

    addButtonsToOutfit(outfit) {
        const button = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 0.02, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        button.position.set(0, 1.2, 0.6);
        outfit.add(button);

        const secondButton = button.clone();
        secondButton.position.set(0, 0.8, 0.6);
        outfit.add(secondButton);
    }

    addNecklaceToOutfit(outfit) {
        const necklace = new THREE.Mesh(
            new THREE.TorusGeometry(0.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xDAA520 })
        );
        necklace.position.set(0, 1.5, 0.4);
        necklace.rotation.x = Math.PI / 2;
        outfit.add(necklace);
    }

    addBeltToOutfit(outfit) {
        const belt = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        belt.position.set(0, -0.2, 0);
        outfit.add(belt);
    }

    addHatToOutfit(outfit) {
        const hat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.7, 1.2, 0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        hat.position.set(0, 2.5, 0);
        outfit.add(hat);
    }

    addScarfToOutfit(outfit) {
        const scarf = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.6, 1.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        scarf.position.set(0, 1.5, 0.4);
        scarf.rotation.z = Math.PI / 4;
        outfit.add(scarf);
    }

    addBagToOutfit(outfit) {
        const bag = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.5, 0.8),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        bag.position.set(1, 0, -0.5);
        outfit.add(bag);
    }

    addGlovesToOutfit(outfit) {
        const glove = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        glove.position.set(1.5, 1, 0.3);
        outfit.add(glove);

        const secondGlove = glove.clone();
        secondGlove.position.set(-1.5, 1, 0.3);
        outfit.add(secondGlove);
    }

    addWingsToOutfit(outfit) {
        const wing = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 5),
            new THREE.MeshStandardMaterial({ 
                color: 0x87CEEB, 
                side: THREE.DoubleSide, 
                opacity: 0.7, 
                transparent: true 
            })
        );
        wing.rotation.y = Math.PI / 4;
        wing.position.set(1.5, 0, -0.5);
        outfit.add(wing);

        const secondWing = wing.clone();
        secondWing.position.set(-1.5, 0, -0.5);
        outfit.add(secondWing);
    }

    addHighHeels(outfit) {
        const heel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 1.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 })
        );
        heel.position.set(0.5, -5.5, 0);
        outfit.add(heel);

        const secondHeel = heel.clone();
        secondHeel.position.set(-0.5, -5.5, 0);
        outfit.add(secondHeel);
    }

    addSunglasses(outfit) {
        const lens = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000, opacity: 0.8, transparent: true })
        );
        lens.position.set(0.5, 1.8, 1.2);
        outfit.add(lens);

        const secondLens = lens.clone();
        secondLens.position.set(-0.5, 1.8, 1.2);
        outfit.add(secondLens);

        const frame = new THREE.Mesh(
            new THREE.TorusGeometry(0.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        frame.position.set(0, 1.8, 1.2);
        outfit.add(frame);
    }

    addEarrings(outfit) {
        const earring = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        earring.position.set(0.4, 2.2, 1);
        outfit.add(earring);

        const secondEarring = earring.clone();
        secondEarring.position.set(-0.4, 2.2, 1);
        outfit.add(secondEarring);
    }

    addBraceletsToOutfit(outfit) {
        const bracelet = new THREE.Mesh(
            new THREE.TorusGeometry(0.2, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        bracelet.position.set(0.5, 0.5, 0.3);
        outfit.add(bracelet);

        const secondBracelet = bracelet.clone();
        secondBracelet.position.set(-0.5, 0.5, 0.3);
        outfit.add(secondBracelet);
    }

    addBowTieToOutfit(outfit) {
        const bowTie = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.2, 0.1),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 })
        );
        bowTie.position.set(0, 1.6, 0.7);
        outfit.add(bowTie);
    }

    addBoutonniere(outfit) {
        const flower = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
        );
        flower.position.set(0.6, 1.5, 0.6);
        outfit.add(flower);
    }

    addTrainToOutfit(outfit) {
        const train = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 6),
            new THREE.MeshStandardMaterial({ color: 0xB0E0E6, side: THREE.DoubleSide })
        );
        train.position.set(0, -1, -2);
        train.rotation.x = -Math.PI / 2;
        outfit.add(train);
    }

    addSuspendersToOutfit(outfit) {
        const suspender = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        suspender.position.set(0.5, 0.5, -0.5);
        outfit.add(suspender);

        const secondSuspender = suspender.clone();
        secondSuspender.position.set(-0.5, 0.5, -0.5);
        outfit.add(secondSuspender);
    }

    addHairComb(outfit) {
        const hairComb = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.2, 0.1),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        hairComb.position.set(0, 2.6, -0.5);
        outfit.add(hairComb);
    }

    addFishnetStockings(outfit) {
        const stocking = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x000000, 
                wireframe: true 
            })
        );
        stocking.position.set(0, -3.5, 0);
        outfit.add(stocking);
    }

    addChainsToOutfit(outfit) {
        const chain = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x808080 })
        );
        chain.position.set(0.5, 0.8, 0.4);
        outfit.add(chain);

        const secondChain = chain.clone();
        secondChain.position.set(0.3, 0.6, 0.4);
        outfit.add(secondChain);
    }

    addRibbonsToOutfit(outfit) {
        const ribbon = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.2),
            new THREE.MeshStandardMaterial({ color: 0xFF1493 })
        );
        ribbon.position.set(0, 1.5, 0.7);
        ribbon.rotation.z = Math.PI / 6;
        outfit.add(ribbon);

        const secondRibbon = ribbon.clone();
        secondRibbon.position.set(-0.3, 1.2, 0.7);
        secondRibbon.rotation.z = -Math.PI / 6;
        outfit.add(secondRibbon);
    }

    // New jewelry and accessory functions from part_10_corrected.js

    addStatementNecklace(outfit) {
        const necklace = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Màu vàng kim loại
        );
        necklace.position.set(0, 1.6, 0.4);
        necklace.rotation.x = Math.PI / 2;
        outfit.add(necklace);
    }

    addLayeredNecklace(outfit) {
        const necklaceLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Màu vàng kim loại
        );
        necklaceLayer1.position.set(0, 1.6, 0.3);
        necklaceLayer1.rotation.x = Math.PI / 2;
        outfit.add(necklaceLayer1);

        const necklaceLayer2 = necklaceLayer1.clone();
        necklaceLayer2.position.set(0, 1.5, 0.4);
        outfit.add(necklaceLayer2);
    }

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

    addMetalBelt(outfit) {
        const metalBelt = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0xA9A9A9,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metalBelt.position.set(0, -0.5, 0);
        outfit.add(metalBelt);
    }

    addSideBag(outfit) {
        const sideBag = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Màu xám đậm
        );
        sideBag.position.set(0.8, -1, -0.6);
        outfit.add(sideBag);
    }

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

    addCrystalShoulderStraps(outfit) {
        const shoulderStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 0.9,
            })
        );
        shoulderStrap.position.set(0.6, 1, 0.6);
        outfit.add(shoulderStrap);

        const secondStrap = shoulderStrap.clone();
        secondStrap.position.set(-0.6, 1, 0.6);
        outfit.add(secondStrap);
    }

    addUniqueHeels(outfit) {
        const heel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Màu đỏ đậm
        );
        heel.position.set(0.5, -5.5, 0.5);
        outfit.add(heel);

        const secondHeel = heel.clone();
        secondHeel.position.set(-0.5, -5.5, 0.5);
        outfit.add(secondHeel);
    }

    addMetallicSkirtLines(outfit) {
        const metallicLine = new THREE.Mesh(
            new THREE.TorusGeometry(1.8, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metallicLine.position.set(0, -3, 0.5);
        outfit.add(metallicLine);

        const secondMetallicLine = metallicLine.clone();
        secondMetallicLine.position.set(0, -4, 0.5);
        outfit.add(secondMetallicLine);
    }

    // New functions from part_11_corrected.js - Accessories & Jewelry

    addWideBracelets(outfit) {
        const wideBracelet = new THREE.Mesh(
            new THREE.TorusGeometry(0.4, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x696969 }) // Màu xám đậm
        );
        wideBracelet.position.set(0.5, 0.5, 0.3);
        outfit.add(wideBracelet);

        const secondWideBracelet = wideBracelet.clone();
        secondWideBracelet.position.set(-0.5, 0.5, 0.3);
        outfit.add(secondWideBracelet);
    }

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

    addLayeredPearls(outfit) {
        const pearlLayer1 = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFFFE0 }) // Màu ngọc trai
        );
        pearlLayer1.position.set(0.5, -1, 0.6);
        outfit.add(pearlLayer1);

        const pearlLayer2 = pearlLayer1.clone();
        pearlLayer2.position.set(-0.5, -1.5, 0.6);
        outfit.add(pearlLayer2);
    }

    // Additional accessory functions from part_11_corrected.js

    addLayeredStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Dark red
        );
        strap.position.set(0.6, 1, 0.4);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.6, 1, 0.4);
        outfit.add(secondStrap);
    }

    addBackStraps(outfit) {
        const backStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 8),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple
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

    addArmBands(outfit) {
        const armBand = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Dark red
        );
        armBand.position.set(0.5, 0.8, 0.3);
        outfit.add(armBand);

        const secondArmBand = armBand.clone();
        secondArmBand.position.set(-0.5, 0.8, 0.3);
        outfit.add(secondArmBand);
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

    addVerticalRibbons(outfit) {
        const ribbon = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.2),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Dark pink
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
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Tan color
        );
        furTrim.position.set(0, 1.8, 0);
        outfit.add(furTrim);
    }

    addFeatherCuffs(outfit) {
        const featherCuff = new THREE.Mesh(
            new THREE.TorusGeometry(0.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Crimson
        );
        featherCuff.position.set(0.5, 0.8, 0.5);
        outfit.add(featherCuff);

        const secondFeatherCuff = featherCuff.clone();
        secondFeatherCuff.position.set(-0.5, 0.8, 0.5);
        outfit.add(secondFeatherCuff);
    }

    addCrystalBackStraps(outfit) {
        const crystalStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 1.2,
            })
        );
        crystalStrap.position.set(0.5, -2, 0.4);
        outfit.add(crystalStrap);

        const secondCrystalStrap = crystalStrap.clone();
        secondCrystalStrap.position.set(-0.5, -2, 0.4);
        outfit.add(secondCrystalStrap);
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

    addFeatherHemline(outfit) {
        const featherTrim = new THREE.Mesh(
            new THREE.TorusGeometry(2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Crimson
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
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingAccessories;
}
