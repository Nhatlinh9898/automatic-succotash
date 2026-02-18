/**
 * Advanced Costumes Library - Three.js 3D Models
 * Contains high-fashion, special occasion, and themed costumes
 */

class AdvancedCostumes {
    constructor(scene) {
        this.scene = scene;
    }

    createIcePrincessGown() {
        const gown = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xE0FFFF,
                emissive: 0x87CEEB,
                emissiveIntensity: 0.6,
                roughness: 0.2,
            })
        );
        gown.add(bodice);

        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4.5, 6, 32),
            new THREE.MeshStandardMaterial({
                color: 0xB0E0E6,
                emissive: 0x87CEEB,
                emissiveIntensity: 0.7,
                roughness: 0.3,
            })
        );
        skirt.position.set(0, -4.5, 0);
        gown.add(skirt);

        const iceDecoration = new THREE.Mesh(
            new THREE.CircleGeometry(0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x87CEEB })
        );
        iceDecoration.position.set(0.5, 1, 0.8);
        gown.add(iceDecoration);

        return gown;
    }

    createRetroSpacesuit() {
        const spacesuit = new THREE.Group();
        
        const spaceArmor = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({
                color: 0xA9A9A9,
                roughness: 0.6,
                metalness: 0.7,
            })
        );
        spacesuit.add(spaceArmor);

        const spacePants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({
                color: 0x696969,
                roughness: 0.7,
                metalness: 0.8,
            })
        );
        spacePants.position.set(0, -3.5, 0);
        spacesuit.add(spacePants);

        const retroHelmet = new THREE.Mesh(
            new THREE.SphereGeometry(1.5, 32, 32),
            new THREE.MeshStandardMaterial({
                color: 0x2F4F4F,
                opacity: 0.9,
                transparent: true,
            })
        );
        retroHelmet.position.set(0, 2, 0);
        spacesuit.add(retroHelmet);

        return spacesuit;
    }

    createBoxingGear() {
        const gear = new THREE.Group();
        
        const boxingTop = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 })
        );
        gear.add(boxingTop);

        const boxingShorts = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 2.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000080 })
        );
        boxingShorts.position.set(0, -2, 0);
        gear.add(boxingShorts);

        const boxingGloves = new THREE.Mesh(
            new THREE.SphereGeometry(0.6, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xFF0000 })
        );
        boxingGloves.position.set(1.5, 1, 0);
        gear.add(boxingGloves);

        return gear;
    }

    createWildflowerDress() {
        const dress = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        dress.add(bodice);

        const flowerSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 })
        );
        flowerSkirt.position.set(0, -4.5, 0);
        dress.add(flowerSkirt);

        const flowerDetail = new THREE.Mesh(
            new THREE.CircleGeometry(0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
        );
        flowerDetail.position.set(0.5, 1, 0.8);
        dress.add(flowerDetail);

        return dress;
    }

    createUrbanSportswear() {
        const sportswear = new THREE.Group();
        
        const sportsHoodie = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
        );
        sportswear.add(sportsHoodie);

        const joggerPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        joggerPants.position.set(0, -3.5, 0);
        sportswear.add(joggerPants);

        return sportswear;
    }

    createPoliceUniform() {
        const uniform = new THREE.Group();
        
        const policeShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000080 })
        );
        uniform.add(policeShirt);

        const policePants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        policePants.position.set(0, -3.5, 0);
        uniform.add(policePants);

        const badge = new THREE.Mesh(
            new THREE.CircleGeometry(0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        badge.position.set(0.8, 1, 0.6);
        uniform.add(badge);

        return uniform;
    }

    createSamuraiArmor() {
        const armor = new THREE.Group();
        
        const chestArmor = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B0000, roughness: 0.5 })
        );
        armor.add(chestArmor);

        const waistArmor = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.5 })
        );
        waistArmor.position.set(0, -3, 0);
        armor.add(waistArmor);

        const helmet = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 0.8, 1, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        helmet.position.set(0, 2.5, 0);
        armor.add(helmet);

        return armor;
    }

    createMagicianOutfit() {
        const outfit = new THREE.Group();
        
        const magicianCape = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 6),
            new THREE.MeshStandardMaterial({ color: 0x4B0082, side: THREE.DoubleSide })
        );
        magicianCape.rotation.x = -Math.PI / 2;
        magicianCape.position.set(0, -1, -1.5);
        outfit.add(magicianCape);

        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        outfit.add(vest);

        const topHat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 1.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        topHat.position.set(0, 2.5, 0);
        outfit.add(topHat);

        return outfit;
    }

    createSummerBeachwear() {
        const beachwear = new THREE.Group();
        
        const tshirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 1.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x00CED1 })
        );
        tshirt.position.set(0, 1, 0);
        beachwear.add(tshirt);

        const shorts = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 2.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        shorts.position.set(0, -2, 0);
        beachwear.add(shorts);

        const sandals = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.3, 2),
            new THREE.MeshStandardMaterial({ color: 0xFF6347 })
        );
        sandals.position.set(0, -5.5, 0);
        beachwear.add(sandals);

        return beachwear;
    }

    createHauteCoutureDress() {
        const dress = new THREE.Group();
        
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFF1493,
                roughness: 0.2,
                metalness: 0.3,
                emissive: 0xFF69B4,
                emissiveIntensity: 0.6,
            })
        );
        dress.add(bodice);

        const layeredSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4.5, 7, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                roughness: 0.3,
                metalness: 0.5,
                emissive: 0xFFA07A,
                emissiveIntensity: 0.8,
            })
        );
        layeredSkirt.position.set(0, -5, 0);
        dress.add(layeredSkirt);

        return dress;
    }

    // Additional functions from part_9_corrected.js
    
    addSashToOutfit(outfit) {
        const sash = new THREE.Mesh(
            new THREE.PlaneGeometry(0.2, 4),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Dark red color
        );
        sash.rotation.z = Math.PI / 4;
        sash.position.set(0.8, 1.5, 0);
        outfit.add(sash);
    }

    addSilkBelt(outfit) {
        const silkBelt = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple color
        );
        silkBelt.position.set(0, -0.5, 0);
        outfit.add(silkBelt);
    }

    addShawlToOutfit(outfit) {
        const shawl = new THREE.Mesh(
            new THREE.PlaneGeometry(2.5, 1),
            new THREE.MeshStandardMaterial({
                color: 0xB22222,
                opacity: 0.8,
                transparent: true,
            })
        );
        shawl.position.set(0, 1, 0.8);
        shawl.rotation.x = -Math.PI / 2;
        outfit.add(shawl);
    }

    addEngravingToArmor(outfit) {
        const engraving = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({
                color: 0x708090,
                metalness: 0.7,
                roughness: 0.2,
            })
        );
        engraving.position.set(0.6, 1.5, 0.7);
        outfit.add(engraving);
    }

    addFurCollar(outfit) {
        const fur = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Tan color
        );
        fur.position.set(0, 1.8, 0);
        outfit.add(fur);
    }

    addHighBoots(outfit) {
        const boot = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.6, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark gray color
        );
        boot.position.set(0.5, -5, 0);
        outfit.add(boot);

        const secondBoot = boot.clone();
        secondBoot.position.set(-0.5, -5, 0);
        outfit.add(secondBoot);
    }

    addMiniToolBag(outfit) {
        const toolBag = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 0.5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark gray color
        );
        toolBag.position.set(0.5, 0, -0.3);
        outfit.add(toolBag);

        const secondToolBag = toolBag.clone();
        secondToolBag.position.set(-0.5, 0, -0.3);
        outfit.add(secondToolBag);
    }

    addLayeredTrain(outfit) {
        const trainLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple color
        );
        trainLayer.position.set(0, -5, 0);
        outfit.add(trainLayer);

        const secondTrainLayer = trainLayer.clone();
        secondTrainLayer.position.set(0, -7, 0);
        outfit.add(secondTrainLayer);
    }

    addDecorativeBow(outfit) {
        const bow = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.3, 0.1),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Orange color
        );
        bow.position.set(0, 1.6, 0.8);
        outfit.add(bow);
    }

    addRetroBag(outfit) {
        const bag = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 0.8, 0.4),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Saddle brown color
        );
        bag.position.set(0.5, 0, -0.5);
        outfit.add(bag);
    }

    // Standalone creation methods
    createStandaloneSash(position = { x: 0, y: 0, z: 0 }, color = 0x8B0000) {
        const sash = new THREE.Mesh(
            new THREE.PlaneGeometry(0.2, 4),
            new THREE.MeshStandardMaterial({ color: color })
        );
        sash.rotation.z = Math.PI / 4;
        sash.position.set(position.x, position.y, position.z);
        return sash;
    }

    createStandaloneBelt(position = { x: 0, y: 0, z: 0 }, radius = 1, color = 0x9370DB) {
        const belt = new THREE.Mesh(
            new THREE.CylinderGeometry(radius, radius, 0.2, 32),
            new THREE.MeshStandardMaterial({ color: color })
        );
        belt.position.set(position.x, position.y, position.z);
        return belt;
    }

    createStandaloneShawl(position = { x: 0, y: 0, z: 0 }, color = 0xB22222) {
        const shawl = new THREE.Mesh(
            new THREE.PlaneGeometry(2.5, 1),
            new THREE.MeshStandardMaterial({
                color: color,
                opacity: 0.8,
                transparent: true,
            })
        );
        shawl.position.set(position.x, position.y, position.z);
        shawl.rotation.x = -Math.PI / 2;
        return shawl;
    }

    createStandaloneBoot(position = { x: 0, y: 0, z: 0 }, color = 0x2F4F4F) {
        const boot = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.6, 3, 32),
            new THREE.MeshStandardMaterial({ color: color })
        );
        boot.position.set(position.x, position.y, position.z);
        return boot;
    }

    createStandaloneBag(position = { x: 0, y: 0, z: 0 }, size = { width: 1, height: 0.8, depth: 0.4 }, color = 0x8B4513) {
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

    // Method to add multiple costume elements in a coordinated set
    addCompleteCostumeSet(outfit, style = 'elegant') {
        switch(style) {
            case 'elegant':
                this.addSilkBelt(outfit);
                this.addShawlToOutfit(outfit);
                this.addDecorativeBow(outfit);
                break;
            case 'warrior':
                this.addEngravingToArmor(outfit);
                this.addHighBoots(outfit);
                this.addFurCollar(outfit);
                break;
            case 'adventurer':
                this.addMiniToolBag(outfit);
                this.addHighBoots(outfit);
                this.addSashToOutfit(outfit);
                break;
            case 'royal':
                this.addLayeredTrain(outfit);
                this.addFurCollar(outfit);
                this.addSilkBelt(outfit);
                break;
        }
    }

    // Method to create animated costume elements
    createAnimatedCostumeElement(type = 'flowing') {
        const group = new THREE.Group();
        
        switch(type) {
            case 'flowing':
                const flowingFabric = new THREE.Mesh(
                    new THREE.PlaneGeometry(2, 3),
                    new THREE.MeshStandardMaterial({
                        color: 0x9370DB,
                        transparent: true,
                        opacity: 0.8,
                        side: THREE.DoubleSide
                    })
                );
                group.add(flowingFabric);
                break;
                
            case 'glowing':
                const glowingElement = new THREE.Mesh(
                    new THREE.TorusGeometry(1, 0.1, 16, 100),
                    new THREE.MeshStandardMaterial({
                        emissive: 0xFFD700,
                        emissiveIntensity: 1.0,
                        transparent: true,
                        opacity: 0.7
                    })
                );
                group.add(glowingElement);
                break;
        }
        
        return group;
    }

    // Additional outerwear and special items from part_10_corrected.js

    addLongTailToOutfit(outfit) {
        const tail = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 8),
            new THREE.MeshStandardMaterial({ color: 0x9370DB, opacity: 0.8, transparent: true })
        );
        tail.position.set(0, -1, -2);
        tail.rotation.x = -Math.PI / 2;
        outfit.add(tail);
    }

    addMetallicCapeTrim(outfit) {
        const capeTrim = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFA500, emissiveIntensity: 1.0 })
        );
        capeTrim.position.set(0, -2, -1);
        capeTrim.rotation.x = Math.PI / 2;
        outfit.add(capeTrim);
    }

    addFurToSkirtHem(outfit) {
        const furHem = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.2, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C }) // Màu nâu nhạt
        );
        furHem.position.set(0, -4, 0);
        outfit.add(furHem);
    }

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

    addLongFurCoat(outfit) {
        const furCoat = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 6, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Màu nâu đất
        );
        furCoat.position.set(0, -2, 0);
        outfit.add(furCoat);
    }

    // New functions from part_11_corrected.js - Advanced Elements

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
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedCostumes;
}
