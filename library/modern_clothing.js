/**
 * Modern and Contemporary Clothing Library
 * Contains 3D models for modern fashion and contemporary styles
 */

class ModernClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all modern outfit creation methods
        this.outfits.set('jumpsuit', this.createJumpsuit.bind(this));
        this.outfits.set('leatherJacket', this.createLeatherJacket.bind(this));
        this.outfits.set('modernSuit', this.createModernSuit.bind(this));
        this.outfits.set('athleisureOutfit', this.createAthleisureOutfit.bind(this));
        this.outfits.set('casualOutfit', this.createCasualOutfit.bind(this));
        this.outfits.set('sportOutfit', this.createSportOutfit.bind(this));
        this.outfits.set('tracksuit', this.createTracksuit.bind(this));
        this.outfits.set('boldJumpsuit', this.createBoldJumpsuit.bind(this));
        this.outfits.set('officeSuit', this.createOfficeSuit.bind(this));
        this.outfits.set('modernMilitary', this.createModernMilitary.bind(this));
    }

    // Jumpsuit - Elegant Modern Style
    createJumpsuit(position = { x: 0, y: 0, z: 0 }) {
        const jumpsuit = new THREE.Group();

        // Body
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x4682B4 })
        );
        jumpsuit.add(body);

        // Belt
        const belt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 0.2, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        belt.position.set(0, -0.5, 0);
        jumpsuit.add(belt);

        jumpsuit.position.set(position.x, position.y, position.z);
        return jumpsuit;
    }

    // Leather Jacket with Jeans - Edgy Modern Style
    createLeatherJacket(position = { x: 0, y: 0, z: 0 }) {
        const leatherJacket = new THREE.Group();

        // Leather jacket
        const jacket = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F, roughness: 0.6, metalness: 0.2 })
        );
        leatherJacket.add(jacket);

        // Jeans
        const jeans = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x1E90FF })
        );
        jeans.position.set(0, -3.5, 0);
        leatherJacket.add(jeans);

        leatherJacket.position.set(position.x, position.y, position.z);
        return leatherJacket;
    }

    // Modern Suit - Professional Style
    createModernSuit(position = { x: 0, y: 0, z: 0 }) {
        const modernSuit = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
        );
        modernSuit.add(vest);

        // Pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        pants.position.set(0, -3.5, 0);
        modernSuit.add(pants);

        modernSuit.position.set(position.x, position.y, position.z);
        return modernSuit;
    }

    // Athleisure Outfit - Crop Top and Leggings
    createAthleisureOutfit(position = { x: 0, y: 0, z: 0 }) {
        const athleisureOutfit = new THREE.Group();

        // Crop top
        const cropTop = new THREE.Mesh(
            new THREE.BoxGeometry(2, 1.2, 0.8),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 })
        );
        cropTop.position.set(0, 1, 0);
        athleisureOutfit.add(cropTop);

        // Leggings
        const leggings = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.2 })
        );
        leggings.position.set(0, -2, 0);
        athleisureOutfit.add(leggings);

        athleisureOutfit.position.set(position.x, position.y, position.z);
        return athleisureOutfit;
    }

    // Casual Outfit - Hoodie and Jeans
    createCasualOutfit(position = { x: 0, y: 0, z: 0 }) {
        const casualOutfit = new THREE.Group();

        // Hoodie
        const hoodie = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x4682B4 })
        );
        casualOutfit.add(hoodie);

        // Jeans
        const jeans = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x1E90FF, roughness: 0.2 })
        );
        jeans.position.set(0, -3, 0);
        casualOutfit.add(jeans);

        casualOutfit.position.set(position.x, position.y, position.z);
        return casualOutfit;
    }

    // Sport Outfit - Polo and Shorts
    createSportOutfit(position = { x: 0, y: 0, z: 0 }) {
        const sportOutfit = new THREE.Group();

        // Polo shirt
        const poloShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x008000 })
        );
        sportOutfit.add(poloShirt);

        // Shorts
        const shorts = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 2, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        shorts.position.set(0, -2, 0);
        sportOutfit.add(shorts);

        sportOutfit.position.set(position.x, position.y, position.z);
        return sportOutfit;
    }

    // Modern Tracksuit
    createTracksuit(position = { x: 0, y: 0, z: 0 }) {
        const tracksuit = new THREE.Group();

        // Jacket
        const jacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x4682B4 })
        );
        tracksuit.add(jacket);

        // Track pants
        const trackPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        trackPants.position.set(0, -3.5, 0);
        tracksuit.add(trackPants);

        tracksuit.position.set(position.x, position.y, position.z);
        return tracksuit;
    }

    // Bold Jumpsuit with Cutouts
    createBoldJumpsuit(position = { x: 0, y: 0, z: 0 }) {
        const boldJumpsuit = new THREE.Group();

        // Jumpsuit body
        const jumpsuitBody = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.4, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x4682B4 })
        );
        boldJumpsuit.add(jumpsuitBody);

        // Cutout detail
        const cutOut = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.2, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        cutOut.position.set(0, 0.5, 0);
        boldJumpsuit.add(cutOut);

        boldJumpsuit.position.set(position.x, position.y, position.z);
        return boldJumpsuit;
    }

    // Office Suit with Tie
    createOfficeSuit(position = { x: 0, y: 0, z: 0 }) {
        const officeSuit = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
        );
        officeSuit.add(vest);

        // Tie
        const tie = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 2, 16),
            new THREE.MeshStandardMaterial({ color: 0x8B0000 })
        );
        tie.position.set(0, 0.5, 0.5);
        officeSuit.add(tie);

        officeSuit.position.set(position.x, position.y, position.z);
        return officeSuit;
    }

    // Modern Military Style
    createModernMilitary(position = { x: 0, y: 0, z: 0 }) {
        const modernMilitary = new THREE.Group();

        // Military jacket
        const jacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x556B2F })
        );
        modernMilitary.add(jacket);

        // Pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        pants.position.set(0, -4, 0);
        modernMilitary.add(pants);

        modernMilitary.position.set(position.x, position.y, position.z);
        return modernMilitary;
    }

    // Get available modern outfits
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

    // Add custom modern outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModernClothing;
}
