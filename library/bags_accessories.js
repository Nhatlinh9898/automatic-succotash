/**
 * Bags and Accessories Library
 * Various bags, purses, and wearable accessories for 3D outfits
 */

class BagsAccessories {
    constructor(scene) {
        this.scene = scene;
    }

    // Floral bag with flower detail
    addFloralBag(outfit) {
        const bag = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.6, 0.4),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple
        );
        bag.position.set(0.5, -1, -0.5);
        outfit.add(bag);

        const flowerDetail = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Pink
        );
        flowerDetail.position.set(0.8, -0.8, -0.4);
        outfit.add(flowerDetail);
    }

    // Classic shoulder bag
    addClassicShoulderBag(outfit) {
        const shoulderBag = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 0.6, 0.4),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Brown
        );
        shoulderBag.position.set(0.6, 1, -0.6);
        outfit.add(shoulderBag);
    }

    // Metallic hair clip
    addMetallicHairClip(outfit) {
        const hairClip = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.2, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        hairClip.position.set(0, 2.7, -0.4);
        outfit.add(hairClip);
    }

    // Thin shoulder straps for delicate look
    addThinShoulderStraps(outfit) {
        const strap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.03, 0.03, 3, 16),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Light purple
        );
        strap.position.set(0.5, 1.5, 0.6);
        outfit.add(strap);

        const secondStrap = strap.clone();
        secondStrap.position.set(-0.5, 1.5, 0.6);
        outfit.add(secondStrap);
    }

    // Layered cape for royal appearance
    addLayeredCape(outfit) {
        const capeLayer1 = new THREE.Mesh(
            new THREE.PlaneGeometry(4, 6),
            new THREE.MeshStandardMaterial({
                color: 0x8B0000,
                opacity: 0.8,
                transparent: true,
            })
        );
        capeLayer1.position.set(0, -1, -1);
        capeLayer1.rotation.x = -Math.PI / 2;
        outfit.add(capeLayer1);

        const capeLayer2 = capeLayer1.clone();
        capeLayer2.position.set(0, -1.5, -1.2);
        outfit.add(capeLayer2);
    }

    // Dark gloss layer for mysterious look
    addDarkGlossLayer(outfit) {
        const darkLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(2.5, 6),
            new THREE.MeshStandardMaterial({
                color: 0x000000,
                opacity: 0.8,
                transparent: true,
            })
        );
        darkLayer.position.set(0, -2, 0.6);
        outfit.add(darkLayer);
    }

    // Lace gloves for elegant appearance
    addLaceGloves(outfit) {
        const glove = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        glove.position.set(0.5, -1, 0.3);
        outfit.add(glove);

        const secondGlove = glove.clone();
        secondGlove.position.set(-0.5, -1, 0.3);
        outfit.add(secondGlove);
    }

    // Silk drapes for flowing effect
    addSilkDrapes(outfit) {
        const silkDrape = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 4),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.8,
                transparent: true,
            })
        );
        silkDrape.position.set(0.6, 1, -0.5);
        silkDrape.rotation.z = Math.PI / 6;
        outfit.add(silkDrape);

        const mirroredSilkDrape = silkDrape.clone();
        mirroredSilkDrape.position.set(-0.6, 1, -0.5);
        mirroredSilkDrape.rotation.z = -Math.PI / 6;
        outfit.add(mirroredSilkDrape);
    }

    // Silk cross-back straps
    addSilkCrossBack(outfit) {
        const silkStrap = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.8,
                transparent: true,
            })
        );
        silkStrap.position.set(0.6, 1.5, -0.5);
        silkStrap.rotation.z = Math.PI / 4;
        outfit.add(silkStrap);

        const mirroredSilkStrap = silkStrap.clone();
        mirroredSilkStrap.position.set(-0.6, 1.5, -0.5);
        mirroredSilkStrap.rotation.z = -Math.PI / 4;
        outfit.add(mirroredSilkStrap);
    }

    // Beaded silk bands for texture
    addBeadedSilkBands(outfit) {
        const silkBand = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFE0,
                opacity: 0.9,
                transparent: true,
            })
        );
        silkBand.position.set(0.4, 1, 0.6);
        outfit.add(silkBand);

        const secondSilkBand = silkBand.clone();
        secondSilkBand.position.set(-0.4, 1, 0.6);
        outfit.add(secondSilkBand);
    }

    // Silk bands for decoration
    addSilkBands(outfit) {
        const silkBand = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
                opacity: 0.8,
                transparent: true,
            })
        );
        silkBand.position.set(0.4, 1.5, 0.6);
        outfit.add(silkBand);

        const secondSilkBand = silkBand.clone();
        secondSilkBand.position.set(-0.4, 1.5, 0.6);
        outfit.add(secondSilkBand);
    }

    // Lace sleeves for delicate touch
    addLaceSleeves(outfit) {
        const laceDetail = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 0.2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
                opacity: 0.9,
                transparent: true,
            })
        );
        laceDetail.position.set(0.5, 1.2, 0.5);
        outfit.add(laceDetail);

        const secondLaceDetail = laceDetail.clone();
        secondLaceDetail.position.set(-0.5, 1.2, 0.5);
        outfit.add(secondLaceDetail);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BagsAccessories;
}
