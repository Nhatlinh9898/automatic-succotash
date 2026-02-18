/**
 * Professional and Uniform Clothing Library
 * Contains 3D models for professional attire, uniforms, and career-specific clothing
 */

class ProfessionalClothing {
    constructor() {
        this.outfits = new Map();
        this.initializeOutfits();
    }

    initializeOutfits() {
        // Initialize all professional outfit creation methods
        this.outfits.set('nurseUniform', this.createNurseUniform.bind(this));
        this.outfits.set('highFashionCoat', this.createHighFashionCoat.bind(this));
        this.outfits.set('asianOutfit', this.createAsianOutfit.bind(this));
        this.outfits.set('classicThreePieceSuit', this.createClassicThreePieceSuit.bind(this));
        this.outfits.set('formalSuit', this.createFormalSuit.bind(this));
        this.outfits.set('gatsbyStyle', this.createGatsbyStyle.bind(this));
        this.outfits.set('backlessDress', this.createBacklessDress.bind(this));
    }

    // Nurse Uniform - Medical Professional
    createNurseUniform(position = { x: 0, y: 0, z: 0 }) {
        const nurseUniform = new THREE.Group();

        // Medical top
        const nurseTop = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2.5, 1),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5 }) // White
        );
        nurseUniform.add(nurseTop);

        // White pants
        const whitePants = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 4, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF }) // White
        );
        whitePants.position.set(0, -3.5, 0);
        nurseUniform.add(whitePants);

        // Red cross emblem
        const redCross = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.5, 0.2),
            new THREE.MeshStandardMaterial({ color: 0xFF0000 }) // Red
        );
        redCross.position.set(0, 1, 0.6);
        nurseUniform.add(redCross);

        nurseUniform.position.set(position.x, position.y, position.z);
        return nurseUniform;
    }

    // High Fashion Coat - Designer Style
    createHighFashionCoat(position = { x: 0, y: 0, z: 0 }) {
        const highFashionCoat = new THREE.Group();

        // Long coat
        const longCoat = new THREE.Mesh(
            new THREE.BoxGeometry(2, 5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x708090, roughness: 0.3 }) // Slate gray
        );
        longCoat.position.set(0, -2.5, 0);
        highFashionCoat.add(longCoat);

        // Inner layer
        const innerLayer = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 3, 1.2),
            new THREE.MeshStandardMaterial({ color: 0xFFFFFF }) // White
        );
        innerLayer.position.set(0, 0.5, 0.1);
        highFashionCoat.add(innerLayer);

        highFashionCoat.position.set(position.x, position.y, position.z);
        return highFashionCoat;
    }

    // Asian Professional Outfit - Eastern Business Style
    createAsianOutfit(position = { x: 0, y: 0, z: 0 }) {
        const asianOutfit = new THREE.Group();

        // Long tunic
        const tunic = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.5, 5, 32),
            new THREE.MeshStandardMaterial({ color: 0xDC143C, roughness: 0.4 }) // Crimson
        );
        asianOutfit.add(tunic);

        // Golden pattern
        const goldenPattern = new THREE.Mesh(
            new THREE.TorusGeometry(0.5, 0.05, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Gold
        );
        goldenPattern.position.set(0, 0.8, 0.9);
        asianOutfit.add(goldenPattern);

        // Pants
        const pants = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 4.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        pants.position.set(0, -4.5, 0);
        asianOutfit.add(pants);

        asianOutfit.position.set(position.x, position.y, position.z);
        return asianOutfit;
    }

    // Classic Three Piece Suit - Traditional Business
    createClassicThreePieceSuit(position = { x: 0, y: 0, z: 0 }) {
        const classicThreePieceSuit = new THREE.Group();

        // Vest
        const vest = new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 }) // Black
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
            new THREE.MeshStandardMaterial({ color: 0x000000 }) // Black
        );
        trousers.position.set(0, -4, 0);
        classicThreePieceSuit.add(trousers);

        classicThreePieceSuit.position.set(position.x, position.y, position.z);
        return classicThreePieceSuit;
    }

    // Formal Business Suit - Professional Attire
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

    // Backless Evening Dress - Elegant Formal
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

    // Get available professional outfits
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

    // Add custom professional outfit
    addCustomOutfit(name, creatorFunction) {
        this.outfits.set(name, creatorFunction);
    }

    // Get profession information
    getProfessionInfo(outfitName) {
        const professionInfo = {
            'nurseUniform': {
                profession: 'Healthcare',
                industry: 'Medical',
                requirements: ['cleanliness', 'comfort', 'identification'],
                workEnvironment: 'Hospital, Clinic, Healthcare facility'
            },
            'classicThreePieceSuit': {
                profession: 'Business Executive',
                industry: 'Corporate',
                requirements: ['formal appearance', 'professionalism', 'authority'],
                workEnvironment: 'Office, Boardroom, Business meetings'
            },
            'formalSuit': {
                profession: 'Professional Services',
                industry: 'Corporate',
                requirements: ['business formal', 'client-facing', 'trustworthy appearance'],
                workEnvironment: 'Office, Client meetings, Presentations'
            },
            'highFashionCoat': {
                profession: 'Fashion Industry',
                industry: 'Design/Retail',
                requirements: ['style awareness', 'trend knowledge', 'visual appeal'],
                workEnvironment: 'Fashion shows, Retail, Design studio'
            }
        };

        return professionInfo[outfitName] || null;
    }

    // Get industry recommendations
    getIndustryRecommendations() {
        return {
            healthcare: ['nurseUniform'],
            corporate: ['classicThreePieceSuit', 'formalSuit', 'gatsbyStyle'],
            fashion: ['highFashionCoat', 'backlessDress'],
            business: ['asianOutfit', 'formalSuit'],
            service: ['nurseUniform']
        };
    }

    // Get dress code compliance
    getDressCodeCompliance(outfitName) {
        const dressCodes = {
            'nurseUniform': {
                businessCasual: false,
                businessFormal: false,
                healthcare: true,
                casual: false
            },
            'classicThreePieceSuit': {
                businessCasual: true,
                businessFormal: true,
                healthcare: false,
                casual: false
            },
            'formalSuit': {
                businessCasual: true,
                businessFormal: true,
                healthcare: false,
                casual: false
            },
            'gatsbyStyle': {
                businessCasual: false,
                businessFormal: true,
                healthcare: false,
                casual: false
            }
        };

        return dressCodes[outfitName] || null;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProfessionalClothing;
}
