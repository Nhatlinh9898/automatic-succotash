/**
 * Traditional and Cultural Clothing Library
 * Contains 3D models for traditional cultural and ethnic clothing
 */

class TraditionalClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all traditional outfit creation methods
        this.outfits.set('aoDai', this.createAoDai.bind(this));
        this.outfits.set('aoDaiNam', this.createAoDaiNam.bind(this));
        this.outfits.set('militaryUniform', this.createMilitaryUniform.bind(this));
        this.outfits.set('silkDress', this.createSilkDress.bind(this));
        this.outfits.set('eveningGown', this.createEveningGown.bind(this));
        this.outfits.set('maxiDress', this.createMaxiDress.bind(this));
        this.outfits.set('floralDress', this.createFloralDress.bind(this));
    }

    // Áo Dài - Traditional Vietnamese Dress (Female)
    createAoDai(position = { x: 0, y: 0, z: 0 }) {
        const aoDai = new THREE.Group();

        // Tunic body
        const top = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF4500 })
        );
        aoDai.add(top);

        // Pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        pants.position.set(0, -4.5, 0);
        aoDai.add(pants);

        aoDai.position.set(position.x, position.y, position.z);
        return aoDai;
    }

    // Áo Dài - Traditional Vietnamese Dress (Male)
    createAoDaiNam(position = { x: 0, y: 0, z: 0 }) {
        const aoDaiNam = new THREE.Group();

        // Tunic body
        const top = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x006400 }) // Dark green
        );
        aoDaiNam.add(top);

        // Pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF }) // White
        );
        pants.position.set(0, -4.5, 0);
        aoDaiNam.add(pants);

        aoDaiNam.position.set(position.x, position.y, position.z);
        return aoDaiNam;
    }

    // Military Uniform - Traditional Style
    createMilitaryUniform(position = { x: 0, y: 0, z: 0 }) {
        const militaryUniform = new THREE.Group();

        // Long coat
        const coat = new THREE.Mesh(
            new THREE.BoxGeometry(2, 4, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x4682B4, roughness: 0.6 })
        );
        militaryUniform.add(coat);

        // Trousers
        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        trousers.position.set(0, -4.5, 0);
        militaryUniform.add(trousers);

        // Hat
        const hat = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 0.8, 1, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        hat.position.set(0, 2, 0);
        militaryUniform.add(hat);

        militaryUniform.position.set(position.x, position.y, position.z);
        return militaryUniform;
    }

    // Silk Dress - Elegant Evening Wear
    createSilkDress(position = { x: 0, y: 0, z: 0 }) {
        const silkDress = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF1493, roughness: 0.2 })
        );
        silkDress.add(bodice);

        // Long skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
        );
        skirt.position.set(0, -3.5, 0);
        silkDress.add(skirt);

        // Slit detail
        const slit = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 6),
            new THREE.MeshStandardMaterial({ color: 0xFFC0CB, side: THREE.DoubleSide })
        );
        slit.rotation.y = Math.PI / 2;
        slit.position.set(0.6, -3.5, 0);
        silkDress.add(slit);

        silkDress.position.set(position.x, position.y, position.z);
        return silkDress;
    }

    // Evening Gown - Formal Wear
    createEveningGown(position = { x: 0, y: 0, z: 0 }) {
        const eveningGown = new THREE.Group();

        // Gown body
        const gownBody = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x8A2BE2, roughness: 0.4 })
        );
        eveningGown.add(gownBody);

        // Slit
        const slit = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 2),
            new THREE.MeshStandardMaterial({ color: 0x8A2BE2, side: THREE.DoubleSide })
        );
        slit.rotation.y = Math.PI / 2;
        slit.position.set(0.6, -1, 0);
        eveningGown.add(slit);

        eveningGown.position.set(position.x, position.y, position.z);
        return eveningGown;
    }

    // Maxi Dress - Long Flowing Style
    createMaxiDress(position = { x: 0, y: 0, z: 0 }) {
        const maxiDress = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0x8A2BE2 }) // Dark violet
        );
        maxiDress.add(bodice);

        // Long skirt
        const longSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 8, 32),
            new THREE.MeshStandardMaterial({ color: 0x9370DB }) // Medium purple
        );
        longSkirt.position.set(0, -5.5, 0);
        maxiDress.add(longSkirt);

        maxiDress.position.set(position.x, position.y, position.z);
        return maxiDress;
    }

    // Floral Dress - Vintage Style with Embroidery
    createFloralDress(position = { x: 0, y: 0, z: 0 }) {
        const floralDress = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFB6C1 }) // Light pink
        );
        floralDress.add(bodice);

        // Skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3.5, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFC0CB }) // Pink
        );
        skirt.position.set(0, -2, 0);
        floralDress.add(skirt);

        floralDress.position.set(position.x, position.y, position.z);
        return floralDress;
    }

    // Get available traditional outfits
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

    // Add custom traditional outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }

    // Get cultural information about outfits
    getCulturalInfo(outfitName) {
        const culturalInfo = {
            'aoDai': {
                origin: 'Vietnam',
                description: 'Traditional Vietnamese dress, elegant and graceful',
                occasions: ['Weddings', 'Tet Holiday', 'Formal Events']
            },
            'aoDaiNam': {
                origin: 'Vietnam',
                description: 'Traditional Vietnamese male attire',
                occasions: ['Ceremonies', 'Formal Events', 'Cultural Performances']
            },
            'silkDress': {
                origin: 'Asia',
                description: 'Elegant silk dress inspired by Asian fashion',
                occasions: ['Evening Events', 'Formal Dinners', 'Galas']
            },
            'militaryUniform': {
                origin: 'Various',
                description: 'Traditional military dress uniform',
                occasions: ['Ceremonies', 'Parades', 'Official Events']
            }
        };

        return culturalInfo[outfitName] || null;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TraditionalClothing;
}
