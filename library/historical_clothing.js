/**
 * Historical and Vintage Clothing Library
 * Contains 3D models for historical period clothing and vintage fashion
 */

class HistoricalClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all historical outfit creation methods
        this.outfits.set('ballGown', this.createBallGown.bind(this));
        this.outfits.set('tailcoat', this.createTailcoat.bind(this));
        this.outfits.set('victorianDress', this.createVictorianDress.bind(this));
        this.outfits.set('flapperDress', this.createFlapperDress.bind(this));
        this.outfits.set('vintageDress', this.createVintageDress.bind(this));
        this.outfits.set('weddingDress', this.createWeddingDress.bind(this));
        this.outfits.set('nobleOutfit', this.createNobleOutfit.bind(this));
        this.outfits.set('luxuryOutfit', this.createLuxuryOutfit.bind(this));
        this.outfits.set('retroSportOutfit', this.createRetroSportOutfit.bind(this));
    }

    // Ball Gown - 19th Century Style
    createBallGown(position = { x: 0, y: 0, z: 0 }) {
        const ballGown = new THREE.Group();

        // Base layer
        const baseLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 3, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFF8DC, opacity: 0.8, transparent: true })
        );
        ballGown.add(baseLayer);

        // Lace layer
        const laceLayer = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 2.5, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF, wireframe: true })
        );
        ballGown.add(laceLayer);

        ballGown.position.set(position.x, position.y - 2.5, position.z);
        return ballGown;
    }

    // Tailcoat - Formal Historical Attire
    createTailcoat(position = { x: 0, y: 0, z: 0 }) {
        const tailcoatGroup = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        tailcoatGroup.add(vest);

        // Tail
        const tail = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        tail.rotation.x = -Math.PI / 2;
        tail.position.set(0, -1.5, -0.5);
        tailcoatGroup.add(tail);

        tailcoatGroup.position.set(position.x, position.y, position.z);
        return tailcoatGroup;
    }

    // Victorian Corset Dress
    createVictorianDress(position = { x: 0, y: 0, z: 0 }) {
        const victorianDress = new THREE.Group();

        // Corset
        const corset = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.5, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 })
        );
        victorianDress.add(corset);

        // Skirt layers
        const skirtLayer1 = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 3, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFACD })
        );
        skirtLayer1.position.set(0, -2.5, 0);
        victorianDress.add(skirtLayer1);

        const skirtLayer2 = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
        );
        skirtLayer2.position.set(0, -4.5, 0);
        victorianDress.add(skirtLayer2);

        victorianDress.position.set(position.x, position.y, position.z);
        return victorianDress;
    }

    // Flapper Dress - 1920s Style
    createFlapperDress(position = { x: 0, y: 0, z: 0 }) {
        const flapperDress = new THREE.Group();

        // Dress body
        const dressBody = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.5 })
        );
        flapperDress.add(dressBody);

        // Fringe layers
        const fringeLayer1 = new THREE.Mesh(
            new THREE.TorusGeometry(1.1, 0.1, 8, 32),
            new THREE.MeshStandardMaterial({ color: 0xDAA520 })
        );
        fringeLayer1.position.set(0, -1, 0);
        flapperDress.add(fringeLayer1);

        const fringeLayer2 = fringeLayer1.clone();
        fringeLayer2.position.set(0, -1.5, 0);
        flapperDress.add(fringeLayer2);

        flapperDress.position.set(position.x, position.y, position.z);
        return flapperDress;
    }

    // Vintage Dress - 1950s Style
    createVintageDress(position = { x: 0, y: 0, z: 0 }) {
        const vintageDress = new THREE.Group();

        // First skirt layer
        const skirtLayer1 = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
        );
        skirtLayer1.position.set(0, -1, 0);
        vintageDress.add(skirtLayer1);

        // Second skirt layer
        const skirtLayer2 = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
        );
        skirtLayer2.position.set(0, -3, 0);
        vintageDress.add(skirtLayer2);

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.5, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF1493 })
        );
        bodice.position.set(0, 1, 0);
        vintageDress.add(bodice);

        vintageDress.position.set(position.x, position.y, position.z);
        return vintageDress;
    }

    // Wedding Dress - Vintage Style
    createWeddingDress(position = { x: 0, y: 0, z: 0 }) {
        const weddingDress = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        weddingDress.add(bodice);

        // Skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 5, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFF8DC, roughness: 0.6 })
        );
        skirt.position.set(0, -4.5, 0);
        weddingDress.add(skirt);

        weddingDress.position.set(position.x, position.y, position.z);
        return weddingDress;
    }

    // Noble Outfit - Renaissance Style
    createNobleOutfit(position = { x: 0, y: 0, z: 0 }) {
        const nobleOutfit = new THREE.Group();

        // Long coat
        const longCoat = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.7 })
        );
        nobleOutfit.add(longCoat);

        // Trousers
        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        trousers.position.set(0, -4.5, 0);
        nobleOutfit.add(trousers);

        nobleOutfit.position.set(position.x, position.y, position.z);
        return nobleOutfit;
    }

    // Luxury Outfit with Fur Cape
    createLuxuryOutfit(position = { x: 0, y: 0, z: 0 }) {
        const luxuryOutfit = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x8B0000, roughness: 0.3 })
        );
        luxuryOutfit.add(vest);

        // Fur cape
        const furCape = new THREE.Mesh(
            new THREE.PlaneGeometry(2.5, 3),
            new THREE.MeshStandardMaterial({ color: 0xD2B48C, opacity: 0.7, transparent: true })
        );
        furCape.rotation.y = Math.PI / 6;
        furCape.position.set(-1, 0.5, -0.5);
        luxuryOutfit.add(furCape);

        luxuryOutfit.position.set(position.x, position.y, position.z);
        return luxuryOutfit;
    }

    // Retro Sport Outfit - 1980s Style
    createRetroSportOutfit(position = { x: 0, y: 0, z: 0 }) {
        const retroSportOutfit = new THREE.Group();

        // Windbreaker
        const windbreaker = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.5 })
        );
        retroSportOutfit.add(windbreaker);

        // Track pants
        const trackPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000080 })
        );
        trackPants.position.set(0, -3.5, 0);
        retroSportOutfit.add(trackPants);

        retroSportOutfit.position.set(position.x, position.y, position.z);
        return retroSportOutfit;
    }

    // Get available historical outfits
    getAvailableOutfits() {
        return Array.from(this.outfits.keys());
    }

    // Create outfit by name
    createOutfit(outfitName, position = { x: 0, y: 0, z: 0 }) {
        const outfitCreator = this.outfits.get(outfitName);
        if (outfitCreator) {
            return outfitCreator(position);
        }
        console.warn(`Outfit "${outfitName}" not found`);
        return null;
    }

    // Add custom historical outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HistoricalClothing;
}
