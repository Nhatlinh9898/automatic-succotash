/**
 * Casual and Sport Clothing Library
 * Contains 3D models for casual wear, sports outfits, and active lifestyle clothing
 */

class CasualSportClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all casual and sport outfit creation methods
        this.outfits.set('workoutOutfit', this.createWorkoutOutfit.bind(this));
        this.outfits.set('streetwearOutfit', this.createStreetwearOutfit.bind(this));
        this.outfits.set('retroSportGear', this.createRetroSportGear.bind(this));
        this.outfits.set('casualDenimOutfit', this.createCasualDenimOutfit.bind(this));
        this.outfits.set('beachOutfit', this.createBeachOutfit.bind(this));
        this.outfits.set('racingSuit', this.createRacingSuit.bind(this));
        this.outfits.set('mechanicUniform', this.createMechanicUniform.bind(this));
        this.outfits.set('hikingGear', this.createHikingGear.bind(this));
        this.outfits.set('techwearOutfit', this.createTechwearOutfit.bind(this));
        this.outfits.set('floralDress', this.createFloralDress.bind(this));
    }

    // Workout Outfit - Active Sportswear
    createWorkoutOutfit(position = { x: 0, y: 0, z: 0 }) {
        const workoutOutfit = new THREE.Group();

        // Sleeveless t-shirt
        const tshirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 1.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 }) // Light green
        );
        tshirt.position.set(0, 0.75, 0);
        workoutOutfit.add(tshirt);

        // Shorts
        const shorts = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0x0000FF }) // Bright blue
        );
        shorts.position.set(0, -1.5, 0);
        workoutOutfit.add(shorts);

        workoutOutfit.position.set(position.x, position.y, position.z);
        return workoutOutfit;
    }

    // Streetwear Outfit - Urban Casual
    createStreetwearOutfit(position = { x: 0, y: 0, z: 0 }) {
        const streetwearOutfit = new THREE.Group();

        // Hoodie
        const hoodie = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x696969 }) // Dim gray
        );
        streetwearOutfit.add(hoodie);

        // Drawstring (hoodie detail)
        const drawstring = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 2, 8),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        drawstring.position.set(0.6, 1, 0.5);
        streetwearOutfit.add(drawstring);

        streetwearOutfit.position.set(position.x, position.y, position.z);
        return streetwearOutfit;
    }

    // Retro Sport Gear - 1980s Athletic Style
    createRetroSportGear(position = { x: 0, y: 0, z: 0 }) {
        const retroSportGear = new THREE.Group();

        // Windbreaker
        const windbreaker = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.5 }) // Orange
        );
        retroSportGear.add(windbreaker);

        // Track pants
        const trackPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        trackPants.position.set(0, -3.5, 0);
        retroSportGear.add(trackPants);

        retroSportGear.position.set(position.x, position.y, position.z);
        return retroSportGear;
    }

    // Casual Denim Outfit - Denim Style
    createCasualDenimOutfit(position = { x: 0, y: 0, z: 0 }) {
        const casualDenimOutfit = new THREE.Group();

        // Denim jacket
        const denimJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x1E90FF, roughness: 0.6 }) // Denim blue
        );
        casualDenimOutfit.add(denimJacket);

        // Jeans
        const denimPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000080 }) // Navy blue
        );
        denimPants.position.set(0, -3.5, 0);
        casualDenimOutfit.add(denimPants);

        casualDenimOutfit.position.set(position.x, position.y, position.z);
        return casualDenimOutfit;
    }

    // Beach Outfit - Summer Casual
    createBeachOutfit(position = { x: 0, y: 0, z: 0 }) {
        const beachOutfit = new THREE.Group();

        // Beach shirt
        const tshirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 1.5, 1),
            new THREE.MeshStandardMaterial({ color: 0xADD8E6 }) // Light sky blue
        );
        tshirt.position.set(0, 0.75, 0);
        beachOutfit.add(tshirt);

        // Shorts
        const shorts = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold
        );
        shorts.position.set(0, -1.5, 0);
        beachOutfit.add(shorts);

        beachOutfit.position.set(position.x, position.y, position.z);
        return beachOutfit;
    }

    // Racing Suit - Professional Racing
    createRacingSuit(position = { x: 0, y: 0, z: 0 }) {
        const racingSuit = new THREE.Group();

        // Racing jacket
        const jacket = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.4 }) // Orange-red
        );
        racingSuit.add(jacket);

        // Racing pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        pants.position.set(0, -3.5, 0);
        racingSuit.add(pants);

        // Logo
        const logo = new THREE.Mesh(
            new THREE.CircleGeometry(0.4, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold
        );
        logo.position.set(0, 1.5, 0.8);
        racingSuit.add(logo);

        racingSuit.position.set(position.x, position.y, position.z);
        return racingSuit;
    }

    // Mechanic Uniform - Work Wear
    createMechanicUniform(position = { x: 0, y: 0, z: 0 }) {
        const mechanicUniform = new THREE.Group();

        // Work shirt
        const top = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark slate gray
        );
        mechanicUniform.add(top);

        // Work pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        pants.position.set(0, -3.5, 0);
        mechanicUniform.add(pants);

        // Tool belt
        const toolBelt = new THREE.Mesh(
            new THREE.TorusGeometry(0.7, 0.1, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Saddle brown
        );
        toolBelt.position.set(0, -1.5, 0.5);
        mechanicUniform.add(toolBelt);

        mechanicUniform.position.set(position.x, position.y, position.z);
        return mechanicUniform;
    }

    // Hiking Gear - Outdoor Adventure
    createHikingGear(position = { x: 0, y: 0, z: 0 }) {
        const hikingGear = new THREE.Group();

        // Hiking jacket
        const jacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x006400 }) // Dark green
        );
        hikingGear.add(jacket);

        // Hiking pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Saddle brown
        );
        pants.position.set(0, -3.5, 0);
        hikingGear.add(pants);

        // Backpack
        const backpack = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 2, 0.8),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark slate gray
        );
        backpack.position.set(-1, 0, 1);
        hikingGear.add(backpack);

        hikingGear.position.set(position.x, position.y, position.z);
        return hikingGear;
    }

    // Techwear Outfit - Modern Technical Wear
    createTechwearOutfit(position = { x: 0, y: 0, z: 0 }) {
        const techwearOutfit = new THREE.Group();

        // Technical jacket
        const techJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F, roughness: 0.6 }) // Dark slate gray
        );
        techwearOutfit.add(techJacket);

        // Cargo pants
        const cargoPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x696969 }) // Dim gray
        );
        cargoPants.position.set(0, -3.5, 0);
        techwearOutfit.add(cargoPants);

        // Sling bag
        const slingBag = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.5, 0.5),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        slingBag.position.set(1, 2, 0);
        techwearOutfit.add(slingBag);

        techwearOutfit.position.set(position.x, position.y, position.z);
        return techwearOutfit;
    }

    // Floral Dress - Casual Nature Theme
    createFloralDress(position = { x: 0, y: 0, z: 0 }) {
        const floralDress = new THREE.Group();

        // Skirt
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 3, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFF0F5 }) // Light pink
        );
        skirt.position.set(0, -2.5, 0);
        floralDress.add(skirt);

        // Floral pattern
        const floralPattern = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF1493 }) // Deep pink
        );
        floralPattern.position.set(0.5, -1, 0.8);
        floralDress.add(floralPattern);

        floralDress.position.set(position.x, position.y, position.z);
        return floralDress;
    }

    // Get available casual and sport outfits
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

    // Add custom casual/sport outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }

    // Get activity recommendations
    getActivityRecommendations() {
        return {
            workout: ['workoutOutfit'],
            casual: ['streetwearOutfit', 'casualDenimOutfit', 'floralDress'],
            sports: ['racingSuit', 'retroSportGear'],
            outdoor: ['hikingGear', 'beachOutfit'],
            work: ['mechanicUniform', 'techwearOutfit']
        };
    }

    // Get material properties for performance
    getMaterialProperties(outfitName) {
        const properties = {
            'workoutOutfit': {
                breathability: 'high',
                flexibility: 'high',
                moistureWicking: true,
                recommendedFor: ['gym', 'running', 'yoga']
            },
            'hikingGear': {
                weatherResistance: 'high',
                durability: 'high',
                storage: 'multiple pockets',
                recommendedFor: ['hiking', 'camping', 'outdoor activities']
            },
            'racingSuit': {
                aerodynamics: 'high',
                visibility: 'high',
                sponsorship: 'logo placement',
                recommendedFor: ['racing', 'cycling', 'motorsports']
            },
            'techwearOutfit': {
                technicalFeatures: 'high',
                urbanFunctionality: 'high',
                modernAesthetics: true,
                recommendedFor: ['urban exploration', 'tech lifestyle', 'everyday carry']
            }
        };

        return properties[outfitName] || null;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasualSportClothing;
}
