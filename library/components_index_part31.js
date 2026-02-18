// Components Index - Part 31
// Body Components: Advanced Laser, Metallic, and Decorative Features (973-1013)

// Male Body Components (973-999)
export const maleBodyComponents = {
    // Chest Components
    addRadiantChest: function(character) {
        const radiantChest = new THREE.Mesh(
            new THREE.BoxGeometry(3.2, 2.5, 1.5),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 3.0,
            })
        );
        radiantChest.position.set(0, 4.8, 0);
        character.add(radiantChest);
    },
    
    addAngularChest: function(character) {
        const angularChest = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 2.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        angularChest.position.set(0, 4.8, 0);
        character.add(angularChest);
    },
    
    addLaserPanelChest: function(character) {
        const laserPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(3.5, 2.8),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 3.5,
            })
        );
        laserPanel.position.set(0, 5, 0);
        character.add(laserPanel);
    },
    
    addUniqueLaserChest: function(character) {
        const laserChest = new THREE.Mesh(
            new THREE.BoxGeometry(3, 5, 1.5),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 3.5,
                transparent: true,
            })
        );
        laserChest.position.set(0, 4.8, 0);
        character.add(laserChest);
    },
    
    addSparklingLaserChest: function(character) {
        const sparklingChest = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 2.5, 1.5),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 3.0,
            })
        );
        sparklingChest.position.set(0, 5, 0);
        character.add(sparklingChest);
    },

    // Shoulder Components
    addLaserShoulders: function(character) {
        const laserShoulder = new THREE.Mesh(
            new THREE.TorusGeometry(0.9, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.5,
            })
        );
        laserShoulder.position.set(2.5, 5, 0);

        const mirroredLaserShoulder = laserShoulder.clone();
        mirroredLaserShoulder.position.set(-2.5, 5, 0);

        character.add(laserShoulder);
        character.add(mirroredLaserShoulder);
    },
    
    addLaserBeamShoulders: function(character) {
        const laserBeam = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 0.8, 2.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 3.0,
            })
        );
        laserBeam.position.set(2.5, 5.5, 0);

        const mirroredLaserBeam = laserBeam.clone();
        mirroredLaserBeam.position.set(-2.5, 5.5, 0);

        character.add(laserBeam);
        character.add(mirroredLaserBeam);
    },
    
    addBlockyMetallicShoulders: function(character) {
        const blockyShoulder = new THREE.Mesh(
            new THREE.BoxGeometry(2, 4, 1.2),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        blockyShoulder.position.set(2.8, 5, 0);

        const mirroredBlockyShoulder = blockyShoulder.clone();
        mirroredBlockyShoulder.position.set(-2.8, 5, 0);

        character.add(blockyShoulder);
        character.add(mirroredBlockyShoulder);
    },
    
    addStrongLaserShoulders: function(character) {
        const strongLaserShoulder = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1, 4, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 3.0,
            })
        );
        strongLaserShoulder.position.set(2.8, 5.2, 0);

        const mirroredStrongLaserShoulder = strongLaserShoulder.clone();
        mirroredStrongLaserShoulder.position.set(-2.8, 5.2, 0);

        character.add(strongLaserShoulder);
        character.add(mirroredStrongLaserShoulder);
    },

    // Arm Components
    addAngularLaserArms: function(character) {
        const laserAngularArm = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 0.9, 4.2, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 2.5,
            })
        );
        laserAngularArm.position.set(2.5, 3, 0);

        const mirroredLaserAngularArm = laserAngularArm.clone();
        mirroredLaserAngularArm.position.set(-2.5, 3, 0);

        character.add(laserAngularArm);
        character.add(mirroredLaserAngularArm);
    },
    
    addAngularMuscularArms: function(character) {
        const angularArm = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 4, 1),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        angularArm.position.set(2.7, 3, 0);

        const mirroredAngularArm = angularArm.clone();
        mirroredAngularArm.position.set(-2.7, 3, 0);

        character.add(angularArm);
        character.add(mirroredAngularArm);
    },
    
    addSparklingLaserArms: function(character) {
        const sparklingLaserArm = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1, 5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.8,
                transparent: true,
                opacity: 0.9,
            })
        );
        sparklingLaserArm.position.set(2.7, 3, 0);

        const mirroredSparklingLaserArm = sparklingLaserArm.clone();
        mirroredSparklingLaserArm.position.set(-2.7, 3, 0);

        character.add(sparklingLaserArm);
        character.add(mirroredSparklingLaserArm);
    },
    
    addAngularLightArms: function(character) {
        const angularLightArm = new THREE.Mesh(
            new THREE.CylinderGeometry(1.1, 0.9, 4.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 2.5,
            })
        );
        angularLightArm.position.set(2.5, 3, 0);

        const mirroredAngularLightArm = angularLightArm.clone();
        mirroredAngularLightArm.position.set(-2.5, 3, 0);

        character.add(angularLightArm);
        character.add(mirroredAngularLightArm);
    },

    // Back Components
    addAngularLaserGlowBack: function(character) {
        const angularLaserBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.8, 5, 1.5),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.8,
            })
        );
        angularLaserBack.position.set(0, 5.5, -0.6);
        character.add(angularLaserBack);
    }
};

// Female Body Components (974-1000)
export const femaleBodyComponents = {
    // Back Components
    addSparklingMetallicBack: function(character) {
        const sparklingBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.4, 3.8, 1.2),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                emissive: 0xFFDAB9,
                emissiveIntensity: 1.5,
            })
        );
        sparklingBack.position.set(0, 4.5, -0.5);
        character.add(sparklingBack);
    },
    
    addShinyMetalBack: function(character) {
        const shinyBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 4, 1),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.2,
                emissive: 0xFFDAB9,
                emissiveIntensity: 1.8,
            })
        );
        shinyBack.position.set(0, 4.5, -0.5);
        character.add(shinyBack);
    },
    
    addSparklingLaserBack: function(character) {
        const laserBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 4.5, 1),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.0,
                transparent: true,
                opacity: 0.9,
            })
        );
        laserBack.position.set(0, 4.7, -0.5);
        character.add(laserBack);
    },
    
    addLaserBeamBack: function(character) {
        const laserBack = new THREE.Mesh(
            new THREE.TorusGeometry(2.2, 0.1, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.0,
            })
        );
        laserBack.rotation.x = Math.PI / 2;
        laserBack.position.set(0, 4.5, -0.5);
        character.add(laserBack);
    },
    
    addLongMetallicBack: function(character) {
        const metallicBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.4, 4.5, 1.2),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metallicBack.position.set(0, 4.8, -0.5);
        character.add(metallicBack);
    },
    
    addElegantLaceBack: function(character) {
        const laceBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.4, 4.2, 1),
            new THREE.MeshStandardMaterial({
                color: 0xFFC0CB,
                transparent: true,
                opacity: 0.9,
            })
        );
        laceBack.position.set(0, 4.8, -0.5);
        character.add(laceBack);
    },
    
    addStarryGlowLaserBack: function(character) {
        const starryLaserBack = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 4.5, 1),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.2,
                transparent: true,
                opacity: 0.9,
            })
        );
        starryLaserBack.position.set(0, 4.7, -0.5);
        character.add(starryLaserBack);
    },

    // Hip Components
    addElegantMetallicHips: function(character) {
        const metallicHips = new THREE.Mesh(
            new THREE.CylinderGeometry(1.8, 2.4, 2, 16),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        metallicHips.position.set(0, 2.5, 0);
        character.add(metallicHips);
    },
    
    addLongMetallicHips: function(character) {
        const metallicHips = new THREE.Mesh(
            new THREE.CylinderGeometry(1.8, 2.5, 2.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        metallicHips.position.set(0, 2.5, 0);
        character.add(metallicHips);
    },
    
    addTwistedLaceHips: function(character) {
        const twistedHips = new THREE.Mesh(
            new THREE.CylinderGeometry(1.8, 2.2, 1.8, 32),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.6,
                transparent: true,
                opacity: 0.9,
            })
        );
        twistedHips.rotation.z = Math.PI / 12;
        twistedHips.position.set(0, 2.5, 0);
        character.add(twistedHips);
    },
    
    addGlitteringMetalHips: function(character) {
        const glitteringHips = new THREE.Mesh(
            new THREE.CylinderGeometry(1.9, 2.4, 2, 16),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                emissive: 0xFFDAB9,
                emissiveIntensity: 1.8,
            })
        );
        glitteringHips.position.set(0, 2.5, 0);
        character.add(glitteringHips);
    },

    // Waist Components
    addGlitteringWaist: function(character) {
        const glitteringWaist = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 0.8, 2, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.0,
                transparent: true,
                opacity: 0.9,
            })
        );
        glitteringWaist.position.set(0, 3, 0);
        character.add(glitteringWaist);
    },
    
    addGlitteringLaserWaist: function(character) {
        const glitteringLaserWaist = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 0.8, 2, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.2,
            })
        );
        glitteringLaserWaist.position.set(0, 3, 0);
        character.add(glitteringLaserWaist);
    },

    // Chest Components
    addMetallicRadiantChest: function(character) {
        const radiantChest = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                emissive: 0xFFDAB9,
                emissiveIntensity: 1.5,
            })
        );
        radiantChest.position.set(0.8, 4.2, 0.7);

        const mirroredRadiantChest = radiantChest.clone();
        mirroredRadiantChest.position.set(-0.8, 4.2, 0.7);

        character.add(radiantChest);
        character.add(mirroredRadiantChest);
    }
};

// Complete Body Components (1001-1013)
export const completeBodyComponents = {
    // Male Complete Bodies
    addAngularLaserBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.BoxGeometry(3, 5, 2),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 3.0,
            })
        );
        torso.position.set(0, 4.5, 0);

        const legs = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 3, 1.5),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.5,
            })
        );
        legs.position.set(0, 1.5, 0);

        const arms = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 0.9, 4, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FFFF,
                emissiveIntensity: 2.5,
            })
        );
        arms.position.set(2.5, 3, 0);

        const mirroredArms = arms.clone();
        mirroredArms.position.set(-2.5, 3, 0);

        character.add(torso);
        character.add(legs);
        character.add(arms);
        character.add(mirroredArms);
    },
    
    addRadiantLaserBody: function(character) {
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(3, 8, 2.5),
            new THREE.MeshStandardMaterial({
                emissive: 0xFF4500,
                emissiveIntensity: 3.0,
            })
        );
        body.position.set(0, 4, 0);
        character.add(body);
    },
    
    addMetallicPowerfulBody: function(character) {
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(3.2, 8.5, 2.5),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        body.position.set(0, 4.2, 0);
        character.add(body);
    },
    
    addAngularBody: function(character) {
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 9, 2.5),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        body.position.set(0, 4.5, 0);
        character.add(body);
    },
    
    addMetallicLaserBody: function(character) {
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 9, 2.8),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                emissive: 0xFF4500,
                emissiveIntensity: 2.8,
            })
        );
        body.position.set(0, 4.5, 0);
        character.add(body);
    },
    
    addAngularMetalBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 9, 2.5),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        torso.position.set(0, 4.5, 0);

        const legs = new THREE.Mesh(
            new THREE.BoxGeometry(2, 4, 2),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.3,
            })
        );
        legs.position.set(0, 1.5, 0);

        character.add(torso);
        character.add(legs);
    },
    
    addRadiantLongBody: function(character) {
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 9.5, 2.5),
            new THREE.MeshStandardMaterial({
                emissive: 0x00FF00,
                emissiveIntensity: 3.0,
            })
        );
        body.position.set(0, 4.7, 0);
        character.add(body);
    },

    // Female Complete Bodies
    addMetallicLaceBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1, 4.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.8,
            })
        );
        torso.position.set(0, 3.5, 0);

        const legs = new THREE.Mesh(
            new THREE.CylinderGeometry(0.9, 1.2, 3.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFC0CB,
                transparent: true,
                opacity: 0.9,
            })
        );
        legs.position.set(0, 1.5, 0);

        const laceDetail = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.5,
            })
        );
        laceDetail.rotation.x = Math.PI / 2;
        laceDetail.position.set(0, 4, 0);

        character.add(torso);
        character.add(legs);
        character.add(laceDetail);
    },
    
    addGlitteringBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.CylinderGeometry(1.6, 1, 4, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.0,
                transparent: true,
                opacity: 0.9,
            })
        );
        torso.position.set(0, 3.5, 0);

        const legs = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.4, 3.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.8,
                transparent: true,
                opacity: 0.8,
            })
        );
        legs.position.set(0, 1.5, 0);

        character.add(torso);
        character.add(legs);
    },
    
    addElegantLaceBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1, 4, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFC0CB,
                transparent: true,
                opacity: 0.9,
            })
        );
        torso.position.set(0, 3.5, 0);

        const legs = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1.2, 3.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xFFC0CB,
                transparent: true,
                opacity: 0.8,
            })
        );
        legs.position.set(0, 1.5, 0);

        const laceDetail = new THREE.Mesh(
            new THREE.TorusGeometry(1.5, 0.05, 16, 100),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.3,
            })
        );
        laceDetail.rotation.x = Math.PI / 2;
        laceDetail.position.set(0, 4, 0);

        character.add(torso);
        character.add(legs);
        character.add(laceDetail);
    },
    
    addSoftLaserBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.CylinderGeometry(1.6, 1, 4.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.8,
            })
        );
        torso.position.set(0, 3.5, 0);

        const legs = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.5, 3.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.6,
            })
        );
        legs.position.set(0, 1.5, 0);

        character.add(torso);
        character.add(legs);
    },
    
    addStarryLaserBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.CylinderGeometry(1.6, 1, 4.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 2.2,
                transparent: true,
                opacity: 0.9,
            })
        );
        torso.position.set(0, 3.5, 0);

        const legs = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.4, 3.5, 16),
            new THREE.MeshStandardMaterial({
                emissive: 0xFFC0CB,
                emissiveIntensity: 1.8,
                transparent: true,
                opacity: 0.8,
            })
        );
        legs.position.set(0, 1.5, 0);

        character.add(torso);
        character.add(legs);
    },
    
    addMetallicSmoothBody: function(character) {
        const torso = new THREE.Mesh(
            new THREE.CylinderGeometry(1.6, 1, 4.5, 16),
            new THREE.MeshStandardMaterial({
                color: 0xC0C0C0,
                metalness: 1.0,
                roughness: 0.2,
            })
        );
        torso.position.set(0, 3.5, 0);
        character.add(torso);
    }
};

// Component Categories
export const bodyComponentCategories = {
    male: {
        chest: ['addRadiantChest', 'addAngularChest', 'addLaserPanelChest', 'addUniqueLaserChest', 'addSparklingLaserChest'],
        shoulders: ['addLaserShoulders', 'addLaserBeamShoulders', 'addBlockyMetallicShoulders', 'addStrongLaserShoulders'],
        arms: ['addAngularLaserArms', 'addAngularMuscularArms', 'addSparklingLaserArms', 'addAngularLightArms'],
        back: ['addAngularLaserGlowBack']
    },
    female: {
        back: ['addSparklingMetallicBack', 'addShinyMetalBack', 'addSparklingLaserBack', 'addLaserBeamBack', 'addLongMetallicBack', 'addElegantLaceBack', 'addStarryGlowLaserBack'],
        hips: ['addElegantMetallicHips', 'addLongMetallicHips', 'addTwistedLaceHips', 'addGlitteringMetalHips'],
        waist: ['addGlitteringWaist', 'addGlitteringLaserWaist'],
        chest: ['addMetallicRadiantChest']
    },
    complete: {
        male: ['addAngularLaserBody', 'addRadiantLaserBody', 'addMetallicPowerfulBody', 'addAngularBody', 'addMetallicLaserBody', 'addAngularMetalBody', 'addRadiantLongBody'],
        female: ['addMetallicLaceBody', 'addGlitteringBody', 'addElegantLaceBody', 'addSoftLaserBody', 'addStarryLaserBody', 'addMetallicSmoothBody']
    }
};

// Export all components
export {
    maleBodyComponents,
    femaleBodyComponents,
    completeBodyComponents
};
