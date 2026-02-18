/**
 * Fantasy and Sci-Fi Clothing Library
 * Contains 3D models for fantasy, sci-fi, and themed clothing
 */

class FantasyClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all fantasy outfit creation methods
        this.outfits.set('superheroCape', this.createSuperheroCape.bind(this));
        this.outfits.set('steampunkOutfit', this.createSteampunkOutfit.bind(this));
        this.outfits.set('halloweenOutfit', this.createHalloweenOutfit.bind(this));
        this.outfits.set('cyberpunkOutfit', this.createCyberpunkOutfit.bind(this));
        this.outfits.set('royalOutfit', this.createRoyalOutfit.bind(this));
        this.outfits.set('astronautSuit', this.createAstronautSuit.bind(this));
        this.outfits.set('magicPrincessDress', this.createMagicPrincessDress.bind(this));
        this.outfits.set('knightArmor', this.createKnightArmor.bind(this));
        this.outfits.set('ninjaOutfit', this.createNinjaOutfit.bind(this));
        this.outfits.set('leafDress', this.createLeafDress.bind(this));
    }

    // Superhero Cape - Hero Style
    createSuperheroCape(position = { x: 0, y: 0, z: 0 }) {
        const superheroCape = new THREE.Group();

        // Cape
        const cape = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 6),
            new THREE.MeshStandardMaterial({ 
                color: 0xFF0000, 
                opacity: 0.8, 
                side: THREE.DoubleSide, 
                transparent: true 
            })
        );
        cape.rotation.x = -Math.PI / 2;
        cape.position.set(0, -1, -1.5);
        superheroCape.add(cape);

        // Torso
        const torso = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x0000FF })
        );
        superheroCape.add(torso);

        superheroCape.position.set(position.x, position.y, position.z);
        return superheroCape;
    }

    // Steampunk Outfit - Victorian Sci-Fi
    createSteampunkOutfit(position = { x: 0, y: 0, z: 0 }) {
        const steampunkOutfit = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        steampunkOutfit.add(vest);

        // Gear belt
        const gearBelt = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0xD2691E })
        );
        gearBelt.position.set(0, 0, 0.6);
        steampunkOutfit.add(gearBelt);

        // Trousers
        const trousers = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        trousers.position.set(0, -3.5, 0);
        steampunkOutfit.add(trousers);

        steampunkOutfit.position.set(position.x, position.y, position.z);
        return steampunkOutfit;
    }

    // Halloween Outfit - Spooky Theme
    createHalloweenOutfit(position = { x: 0, y: 0, z: 0 }) {
        const halloweenOutfit = new THREE.Group();

        // Dark cloak
        const cloak = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 2, 6, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x000000, 
                opacity: 0.9, 
                transparent: true 
            })
        );
        cloak.position.set(0, -3, 0);
        halloweenOutfit.add(cloak);

        // Top
        const top = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 })
        );
        halloweenOutfit.add(top);

        halloweenOutfit.position.set(position.x, position.y, position.z);
        return halloweenOutfit;
    }

    // Cyberpunk Outfit - Futuristic Style
    createCyberpunkOutfit(position = { x: 0, y: 0, z: 0 }) {
        const cyberpunkOutfit = new THREE.Group();

        // Neon armor
        const armor = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1.5),
            new THREE.MeshStandardMaterial({ 
                color: 0x2E8B57, 
                emissive: 0x00FF00, 
                emissiveIntensity: 1.5,
                roughness: 0.4 
            })
        );
        cyberpunkOutfit.add(armor);

        // Futuristic pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.6 })
        );
        pants.position.set(0, -4.5, 0);
        cyberpunkOutfit.add(pants);

        // LED strip on pants
        const ledStrip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 4.5, 8),
            new THREE.MeshStandardMaterial({ 
                emissive: 0xFF4500, 
                emissiveIntensity: 2.0 
            })
        );
        ledStrip.position.set(0.5, -4.5, 1);
        cyberpunkOutfit.add(ledStrip);

        cyberpunkOutfit.position.set(position.x, position.y, position.z);
        return cyberpunkOutfit;
    }

    // Royal Outfit - Fantasy Royalty
    createRoyalOutfit(position = { x: 0, y: 0, z: 0 }) {
        const royalOutfit = new THREE.Group();

        // Royal cape
        const cape = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 7),
            new THREE.MeshStandardMaterial({ 
                color: 0xFFD700, 
                roughness: 0.5, 
                side: THREE.DoubleSide 
            })
        );
        cape.rotation.x = -Math.PI / 2;
        cape.position.set(0, -1, -1.5);
        royalOutfit.add(cape);

        // Royal shirt
        const royalShirt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1.8, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 })
        );
        royalShirt.position.set(0, -2.5, 0);
        royalOutfit.add(royalShirt);

        royalOutfit.position.set(position.x, position.y, position.z);
        return royalOutfit;
    }

    // Astronaut Suit - Space Explorer
    createAstronautSuit(position = { x: 0, y: 0, z: 0 }) {
        const astronautSuit = new THREE.Group();

        // Space suit torso
        const torso = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xD3D3D3, roughness: 0.5 })
        );
        astronautSuit.add(torso);

        // Insulated pants
        const insulatedPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xA9A9A9, roughness: 0.6 })
        );
        insulatedPants.position.set(0, -3.5, 0);
        astronautSuit.add(insulatedPants);

        // Harness
        const harness = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.1, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        harness.position.set(0, 0, 0.5);
        astronautSuit.add(harness);

        astronautSuit.position.set(position.x, position.y, position.z);
        return astronautSuit;
    }

    // Magic Princess Dress - Fantasy Princess
    createMagicPrincessDress(position = { x: 0, y: 0, z: 0 }) {
        const magicPrincessDress = new THREE.Group();

        // Magical bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0xFFC0CB, 
                emissive: 0xFF69B4, 
                emissiveIntensity: 0.8 
            })
        );
        magicPrincessDress.add(bodice);

        // Glowing skirt
        const glowingSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 4, 6, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0xFFB6C1, 
                emissive: 0xFF1493, 
                emissiveIntensity: 1.0 
            })
        );
        glowingSkirt.position.set(0, -5, 0);
        magicPrincessDress.add(glowingSkirt);

        magicPrincessDress.position.set(position.x, position.y, position.z);
        return magicPrincessDress;
    }

    // Knight Armor - Medieval Warrior
    createKnightArmor(position = { x: 0, y: 0, z: 0 }) {
        const knightArmor = new THREE.Group();

        // Chest armor
        const chestArmor = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ 
                color: 0xA9A9A9, 
                roughness: 0.6, 
                metalness: 0.8 
            })
        );
        knightArmor.add(chestArmor);

        // Leg armor
        const legArmor = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ 
                color: 0x696969, 
                roughness: 0.6, 
                metalness: 0.8 
            })
        );
        legArmor.position.set(0, -3.5, 0);
        knightArmor.add(legArmor);

        // Shield
        const shield = new THREE.Mesh(
            new THREE.CircleGeometry(1.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x808080 })
        );
        shield.position.set(1.5, 0.5, 1);
        shield.rotation.y = Math.PI / 4;
        knightArmor.add(shield);

        knightArmor.position.set(position.x, position.y, position.z);
        return knightArmor;
    }

    // Ninja Outfit - Stealth Warrior
    createNinjaOutfit(position = { x: 0, y: 0, z: 0 }) {
        const ninjaOutfit = new THREE.Group();

        // Ninja top
        const ninjaTop = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        ninjaOutfit.add(ninjaTop);

        // Ninja pants
        const ninjaPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        ninjaPants.position.set(0, -3.5, 0);
        ninjaOutfit.add(ninjaPants);

        // Face mask
        const mask = new THREE.Mesh(
            new THREE.CircleGeometry(0.7, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        mask.position.set(0, 1, 0.8);
        ninjaOutfit.add(mask);

        ninjaOutfit.position.set(position.x, position.y, position.z);
        return ninjaOutfit;
    }

    // Leaf Dress - Nature Theme
    createLeafDress(position = { x: 0, y: 0, z: 0 }) {
        const leafDress = new THREE.Group();

        // Bodice
        const bodice = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x32CD32, roughness: 0.4 })
        );
        leafDress.add(bodice);

        // Skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2.5, 3, 6, 32),
            new THREE.MeshStandardMaterial({ color: 0x228B22 })
        );
        skirt.position.set(0, -5, 0);
        leafDress.add(skirt);

        // Leaf pattern
        const leafPattern = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 16),
            new THREE.MeshStandardMaterial({ color: 0x006400 })
        );
        leafPattern.position.set(0.5, 0, 0.9);
        leafDress.add(leafPattern);

        leafDress.position.set(position.x, position.y, position.z);
        return leafDress;
    }

    // Get available fantasy outfits
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

    // Add custom fantasy outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }

    // Get theme information
    getThemeInfo(outfitName) {
        const themeInfo = {
            'superheroCape': {
                theme: 'Superhero',
                description: 'Heroic outfit with flowing cape',
                colors: ['red', 'blue'],
                specialFeatures: ['flowing cape', 'heroic colors']
            },
            'steampunkOutfit': {
                theme: 'Steampunk',
                description: 'Victorian-era sci-fi fashion',
                colors: ['brown', 'brass', 'black'],
                specialFeatures: ['gear accessories', 'victorian influence']
            },
            'cyberpunkOutfit': {
                theme: 'Cyberpunk',
                description: 'Futuristic neon-enhanced outfit',
                colors: ['neon green', 'black'],
                specialFeatures: ['LED lights', 'futuristic armor']
            },
            'magicPrincessDress': {
                theme: 'Fantasy Princess',
                description: 'Magical glowing princess dress',
                colors: ['pink', 'glowing effects'],
                specialFeatures: ['emissive materials', 'magical glow']
            },
            'knightArmor': {
                theme: 'Medieval Knight',
                description: 'Protective armor for warriors',
                colors: ['silver', 'gray'],
                specialFeatures: ['metallic materials', 'shield accessory']
            }
        };

        return themeInfo[outfitName] || null;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FantasyClothing;
}
