/**
 * Formal and Elegant Clothing Library
 * Contains 3D models for formal wear, elegant dresses, and sophisticated outfits
 */

class FormalClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all formal outfit creation methods
        this.outfits.set('formalSuit', this.createFormalSuit.bind(this));
        this.outfits.set('gatsbyStyle', this.createGatsbyStyle.bind(this));
        this.outfits.set('backlessDress', this.createBacklessDress.bind(this));
        this.outfits.set('highFashionCoat', this.createHighFashionCoat.bind(this));
        this.outfits.set('asianOutfit', this.createAsianOutfit.bind(this));
        this.outfits.set('cinderellaDress', this.createCinderellaDress.bind(this));
        this.outfits.set('sparklingEveningGown', this.createSparklingEveningGown.bind(this));
        this.outfits.set('silkGownWithCape', this.createSilkGownWithCape.bind(this));
        this.outfits.set('nightgown', this.createNightgown.bind(this));
        this.outfits.set('classicThreePieceSuit', this.createClassicThreePieceSuit.bind(this));
    }

    // Formal Business Suit
    createFormalSuit(position = { x: 0, y: 0, z: 0 }) {
        const formalSuit = new THREE.Group();

        // Blazer
        const blazer = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000080, roughness: 0.4 }) // Navy blue
        );
        formalSuit.add(blazer);

        // Trousers
        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        trousers.position.set(0, -3.5, 0);
        formalSuit.add(trousers);

        formalSuit.position.set(position.x, position.y, position.z);
        return formalSuit;
    }

    // Gatsby Style - 1920s Elegant
    createGatsbyStyle(position = { x: 0, y: 0, z: 0 }) {
        const gatsbyStyle = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Golden
        );
        gatsbyStyle.add(vest);

        // Bowtie
        const tie = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 2, 16),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Dark red
        );
        tie.position.set(0, 0.8, 0.5);
        gatsbyStyle.add(tie);

        // Trousers
        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        trousers.position.set(0, -4, 0);
        gatsbyStyle.add(trousers);

        gatsbyStyle.position.set(position.x, position.y, position.z);
        return gatsbyStyle;
    }

    // Backless Evening Gown
    createBacklessDress(position = { x: 0, y: 0, z: 0 }) {
        const backlessDress = new THREE.Group();

        // Front bodice
        const front = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 4, 32, 1, false, 0, Math.PI),
            new THREE.MeshStandardMaterial({ color: 0x9932CC })
        );
        backlessDress.add(front);

        // Long skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0x9370DB })
        );
        skirt.position.set(0, -5, 0);
        backlessDress.add(skirt);

        backlessDress.position.set(position.x, position.y, position.z);
        return backlessDress;
    }

    // High Fashion Coat - Designer Style
    createHighFashionCoat(position = { x: 0, y: 0, z: 0 }) {
        const highFashionCoat = new THREE.Group();

        // Long coat
        const longCoat = new THREE.Mesh(
            new THREE.BoxGeometry(2, 5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x708090, roughness: 0.3 })
        );
        longCoat.position.set(0, -2.5, 0);
        highFashionCoat.add(longCoat);

        // Inner layer
        const innerLayer = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 3, 1.2),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        innerLayer.position.set(0, 0.5, 0.1);
        highFashionCoat.add(innerLayer);

        highFashionCoat.position.set(position.x, position.y, position.z);
        return highFashionCoat;
    }

    // Asian Traditional Outfit - Elegant Eastern Style
    createAsianOutfit(position = { x: 0, y: 0, z: 0 }) {
        const asianOutfit = new THREE.Group();

        // Long tunic
        const tunic = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.5, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0xDC143C, roughness: 0.4 })
        );
        asianOutfit.add(tunic);

        // Golden pattern
        const goldenPattern = new THREE.Mesh(
            new THREE.TorusGeometry(0.5, 0.05, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 })
        );
        goldenPattern.position.set(0, 0.8, 0.9);
        asianOutfit.add(goldenPattern);

        // Pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        pants.position.set(0, -4.5, 0);
        asianOutfit.add(pants);

        asianOutfit.position.set(position.x, position.y, position.z);
        return asianOutfit;
    }

    // Cinderella Style Dress - Fairy Tale Princess
    createCinderellaDress(position = { x: 0, y: 0, z: 0 }) {
        const cinderellaDress = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.4, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0x87CEFA }) // Light sky blue
        );
        cinderellaDress.add(bodice);

        // Wide skirt
        const wideSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xB0E0E6 }) // Powder blue
        );
        wideSkirt.position.set(0, -4.5, 0);
        cinderellaDress.add(wideSkirt);

        cinderellaDress.position.set(position.x, position.y, position.z);
        return cinderellaDress;
    }

    // Sparkling Evening Gown - Glamorous Style
    createSparklingEveningGown(position = { x: 0, y: 0, z: 0 }) {
        const sparklingEveningGown = new THREE.Group();

        // Sparkling bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 4, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0xFFD700, 
                emissive: 0xFFD700, 
                emissiveIntensity: 0.8 
            })
        );
        sparklingEveningGown.add(bodice);

        // Metallic skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0xFFFF00, 
                roughness: 0.3, 
                metalness: 0.5 
            })
        );
        skirt.position.set(0, -5, 0);
        sparklingEveningGown.add(skirt);

        sparklingEveningGown.position.set(position.x, position.y, position.z);
        return sparklingEveningGown;
    }

    // Silk Gown with Cape - Elegant Royal Style
    createSilkGownWithCape(position = { x: 0, y: 0, z: 0 }) {
        const silkGownWithCape = new THREE.Group();

        // Long silk dress
        const silkDress = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x9370DB, 
                roughness: 0.2, 
                metalness: 0.4 
            })
        );
        silkGownWithCape.add(silkDress);

        // Silk cape
        const silkCape = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 7),
            new THREE.MeshStandardMaterial({ 
                color: 0x8A2BE2, 
                opacity: 0.8, 
                transparent: true 
            })
        );
        silkCape.rotation.x = -Math.PI / 2;
        silkCape.position.set(0, -1, -2);
        silkGownWithCape.add(silkCape);

        silkGownWithCape.position.set(position.x, position.y, position.z);
        return silkGownWithCape;
    }

    // Nightgown - Elegant Sleepwear
    createNightgown(position = { x: 0, y: 0, z: 0 }) {
        const nightgown = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x9370DB, roughness: 0.3 })
        );
        nightgown.add(bodice);

        // Long skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xB0C4DE })
        );
        skirt.position.set(0, -4.5, 0);
        nightgown.add(skirt);

        nightgown.position.set(position.x, position.y, position.z);
        return nightgown;
    }

    // Classic Three Piece Suit - Traditional Formal
    createClassicThreePieceSuit(position = { x: 0, y: 0, z: 0 }) {
        const classicThreePieceSuit = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
        );
        classicThreePieceSuit.add(vest);

        // Inner vest
        const gile = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Saddle brown
        );
        gile.position.set(0, 0.5, 0.1);
        classicThreePieceSuit.add(gile);

        // Trousers
        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        trousers.position.set(0, -4, 0);
        classicThreePieceSuit.add(trousers);

        classicThreePieceSuit.position.set(position.x, position.y, position.z);
        return classicThreePieceSuit;
    }

    // Get available formal outfits
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

    // Add custom formal outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }

    // Get style recommendations
    getStyleRecommendations() {
        return {
            business: ['formalSuit', 'classicThreePieceSuit'],
            evening: ['sparklingEveningGown', 'silkGownWithCape', 'nightgown'],
            specialOccasions: ['cinderellaDress', 'gatsbyStyle'],
            cultural: ['asianOutfit'],
            highFashion: ['highFashionCoat', 'backlessDress']
        };
    }

    // Get occasion suggestions
    getOccasionSuggestions(outfitName) {
        const occasions = {
            'formalSuit': ['Business meetings', 'Formal events', 'Interviews'],
            'gatsbyStyle': ['1920s themed parties', 'Vintage events', 'Costume parties'],
            'backlessDress': ['Evening galas', 'Red carpet events', 'Formal dinners'],
            'cinderellaDress': ['Weddings', 'Fairy tale themed events', 'Prom'],
            'sparklingEveningGown': ['Award ceremonies', 'New Year celebrations', 'Luxury events'],
            'nightgown': ['Loungewear', 'Sleepovers', 'Relaxing at home']
        };

        return occasions[outfitName] || ['General formal wear'];
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormalClothing;
}
