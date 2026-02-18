/**
 * Unisex and Casual Clothing Library
 * Contains 3D models for unisex fashion and casual styles
 */

class UnisexClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all unisex outfit creation methods
        this.outfits.set('oversizedOutfit', this.createOversizedOutfit.bind(this));
        this.outfits.set('minimalismStyle', this.createMinimalismStyle.bind(this));
        this.outfits.set('minimalOutfit', this.createMinimalOutfit.bind(this));
        this.outfits.set('bomberJacketOutfit', this.createBomberJacketOutfit.bind(this));
        this.outfits.set('gothicOutfit', this.createGothicOutfit.bind(this));
        this.outfits.set('retroMiniDress', this.createRetroMiniDress.bind(this));
    }

    // Oversized Streetwear Style
    createOversizedOutfit(position = { x: 0, y: 0, z: 0 }) {
        const oversizedOutfit = new THREE.Group();

        // Oversized hoodie
        const hoodieOversize = new THREE.Mesh(
            new THREE.BoxGeometry(3, 4, 1.8),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark slate gray
        );
        oversizedOutfit.add(hoodieOversize);

        // Baggy pants
        const baggyPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1.5, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x708090 }) // Slate gray
        );
        baggyPants.position.set(0, -4, 0);
        oversizedOutfit.add(baggyPants);

        oversizedOutfit.position.set(position.x, position.y, position.z);
        return oversizedOutfit;
    }

    // Minimalism Style - Simple and Clean
    createMinimalismStyle(position = { x: 0, y: 0, z: 0 }) {
        const minimalismStyle = new THREE.Group();

        // Basic shirt
        const basicShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 1),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF }) // White
        );
        minimalismStyle.add(basicShirt);

        // Slim-fit jeans
        const slimJeans = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 0.9, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x0000CD }) // Denim blue
        );
        slimJeans.position.set(0, -3, 0);
        minimalismStyle.add(slimJeans);

        minimalismStyle.position.set(position.x, position.y, position.z);
        return minimalismStyle;
    }

    // Minimal Unisex Style
    createMinimalOutfit(position = { x: 0, y: 0, z: 0 }) {
        const minimalOutfit = new THREE.Group();

        // T-shirt
        const shirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        minimalOutfit.add(shirt);

        // Jeans
        const jeans = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x0000CD })
        );
        jeans.position.set(0, -3, 0);
        minimalOutfit.add(jeans);

        minimalOutfit.position.set(position.x, position.y, position.z);
        return minimalOutfit;
    }

    // Bomber Jacket with Streetwear Style
    createBomberJacketOutfit(position = { x: 0, y: 0, z: 0 }) {
        const bomberJacketOutfit = new THREE.Group();

        // Bomber jacket
        const bomberJacket = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 3, 1.5),
            new THREE.MeshStandardMaterial({ color: 0xFF6347 }) // Tomato red
        );
        bomberJacketOutfit.add(bomberJacket);

        // Jogger pants
        const joggerPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 1.1, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark slate gray
        );
        joggerPants.position.set(0, -3.5, 0);
        bomberJacketOutfit.add(joggerPants);

        bomberJacketOutfit.position.set(position.x, position.y, position.z);
        return bomberJacketOutfit;
    }

    // Gothic Style - Dark and Edgy
    createGothicOutfit(position = { x: 0, y: 0, z: 0 }) {
        const gothicOutfit = new THREE.Group();

        // Gothic shirt
        const gothicShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
        );
        gothicOutfit.add(gothicShirt);

        // Gothic skirt
        const gothicSkirt = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.5, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0x4B0082 }) // Indigo
        );
        gothicSkirt.position.set(0, -3, 0);
        gothicOutfit.add(gothicSkirt);

        gothicOutfit.position.set(position.x, position.y, position.z);
        return gothicOutfit;
    }

    // Retro Mini Dress - 1960s Style
    createRetroMiniDress(position = { x: 0, y: 0, z: 0 }) {
        const retroMiniDress = new THREE.Group();

        // Dress body
        const miniDress = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.3, 3, 32),
            new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
        );
        retroMiniDress.add(miniDress);

        // Waist belt
        const belt = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.1, 8, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        );
        belt.position.set(0, 0.5, 0);
        retroMiniDress.add(belt);

        retroMiniDress.position.set(position.x, position.y, position.z);
        return retroMiniDress;
    }

    // Create casual streetwear combination
    createStreetwearCombo(position = { x: 0, y: 0, z: 0 }) {
        const streetwearCombo = new THREE.Group();

        // Graphic tee
        const graphicTee = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0x808080 }) // Gray
        );
        streetwearCombo.add(graphicTee);

        // Cargo pants
        const cargoPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Dark gray
        );
        cargoPants.position.set(0, -3, 0);
        streetwearCombo.add(cargoPants);

        streetwearCombo.position.set(position.x, position.y, position.z);
        return streetwearCombo;
    }

    // Create casual weekend outfit
    createWeekendOutfit(position = { x: 0, y: 0, z: 0 }) {
        const weekendOutfit = new THREE.Group();

        // Casual shirt
        const casualShirt = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 2.8, 1.2),
            new THREE.MeshStandardMaterial({ color: 0xF0E68C }) // Khaki
        );
        weekendOutfit.add(casualShirt);

        // Comfortable pants
        const comfortPants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0x8B7355 }) // Burlywood
        );
        comfortPants.position.set(0, -3, 0);
        weekendOutfit.add(comfortPants);

        weekendOutfit.position.set(position.x, position.y, position.z);
        return weekendOutfit;
    }

    // Get available unisex outfits
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

    // Add custom unisex outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }

    // Get style recommendations
    getStyleRecommendations() {
        return {
            casual: ['minimalOutfit', 'streetwearCombo', 'weekendOutfit'],
            streetwear: ['oversizedOutfit', 'bomberJacketOutfit'],
            alternative: ['gothicOutfit', 'retroMiniDress'],
            minimalist: ['minimalismStyle', 'minimalOutfit']
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnisexClothing;
}
