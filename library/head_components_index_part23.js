/**
 * Head Components Index - Part 23
 * Main index file for all head components from part_23_corrected.js
 * Organized by gender and component type for easy access
 * Compatible with Three.js
 */

// Import all component modules
// import * as femaleHair from './female_hair_components_part23.js';
// import * as femaleFacial from './female_facial_features_part23.js';
// import * as maleHair from './male_hair_components_part23.js';
// import * as maleFacial from './male_facial_features_part23.js';

/**
 * Female Hair Components Collection
 * Contains all hair styles and accessories for female characters
 */
const FemaleHairComponents = {
    // Braided and styled hair
    addBraidedCrownHair: function(character) {
        const braid = new THREE.Mesh(
            new THREE.TorusGeometry(1.2, 0.15, 16, 32),
            new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
        );
        braid.position.set(0, 4.8, 0);
        character.add(braid);
    },
    
    addLongCurlyHair: function(character) {
        const curlyHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 3.5),
            new THREE.MeshStandardMaterial({
                color: 0xDA70D6,
                opacity: 0.8,
                transparent: true,
            })
        );
        curlyHair.position.set(0, 4.6, -0.3);
        curlyHair.rotation.z = Math.PI / 8;

        const mirroredHair = curlyHair.clone();
        mirroredHair.position.set(0, 4.6, 0.3);
        mirroredHair.rotation.z = -Math.PI / 8;

        character.add(curlyHair);
        character.add(mirroredHair);
    },
    
    addFlowingStreakHair: function(character) {
        const streakHair = new THREE.Mesh(
            new THREE.PlaneGeometry(0.3, 3),
            new THREE.MeshStandardMaterial({
                color: 0xF08080,
                opacity: 0.8,
                transparent: true,
            })
        );
        streakHair.position.set(0.5, 4.5, -0.3);

        const mirroredStreakHair = streakHair.clone();
        mirroredStreakHair.position.set(-0.5, 4.5, -0.3);

        character.add(streakHair);
        character.add(mirroredStreakHair);
    },
    
    addShoulderLengthHair: function(character) {
        const hair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 2.5),
            new THREE.MeshStandardMaterial({
                color: 0xF4A460,
                opacity: 0.9,
                transparent: true,
            })
        );
        hair.position.set(0, 4.6, -0.3);
        character.add(hair);
    },
    
    addWavyHair: function(character) {
        const waveLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(1.2, 3),
            new THREE.MeshStandardMaterial({
                color: 0xFFA07A,
                opacity: 0.9,
                transparent: true,
            })
        );
        waveLayer.position.set(0, 4.5, -0.5);

        const mirroredWaveLayer = waveLayer.clone();
        mirroredWaveLayer.position.set(0, 4.5, 0.5);
        character.add(waveLayer);
        character.add(mirroredWaveLayer);
    },
    
    addStraightBangs: function(character) {
        const bangs = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 0.8),
            new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
        );
        bangs.position.set(0, 5, 0.5);
        character.add(bangs);
    },
    
    addHighPonytail: function(character) {
        const ponytail = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 2, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
        );
        ponytail.position.set(0, 5.5, -0.3);
        ponytail.rotation.x = Math.PI / 4;
        character.add(ponytail);
    },
    
    addPigtailBraids: function(character) {
        const braid = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 3, 16),
            new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
        );
        braid.position.set(0.8, 3.5, -0.3);

        const mirroredBraid = braid.clone();
        mirroredBraid.position.set(-0.8, 3.5, -0.3);

        character.add(braid);
        character.add(mirroredBraid);
    },
    
    addBobCutHair: function(character) {
        const bobHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 2),
            new THREE.MeshStandardMaterial({
                color: 0xFFA07A,
                opacity: 0.9,
                transparent: true,
            })
        );
        bobHair.position.set(0, 4.7, -0.3);
        character.add(bobHair);
    },
    
    addCascadingCurls: function(character) {
        const curls = new THREE.Mesh(
            new THREE.PlaneGeometry(0.4, 3),
            new THREE.MeshStandardMaterial({
                color: 0xDA70D6,
                opacity: 0.9,
                transparent: true,
            })
        );
        curls.position.set(0.5, 4.5, -0.3);

        const mirroredCurls = curls.clone();
        mirroredCurls.position.set(-0.5, 4.5, -0.3);

        character.add(curls);
        character.add(mirroredCurls);
    },
    
    addHighBunHair: function(character) {
        const bun = new THREE.Mesh(
            new THREE.SphereGeometry(0.6, 32, 32),
            new THREE.MeshStandardMaterial({
                color: 0xF5F5DC,
            })
        );
        bun.position.set(0, 5.5, -0.3);
        character.add(bun);
    },
    
    addSmallBraidsHair: function(character) {
        const braid = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 2, 16),
            new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
        );
        braid.position.set(0.5, 4.5, -0.3);

        const mirroredBraid = braid.clone();
        mirroredBraid.position.set(-0.5, 4.5, -0.3);

        character.add(braid);
        character.add(mirroredBraid);
    },
    
    addGentleMessyHair: function(character) {
        const messyLayer = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 3),
            new THREE.MeshStandardMaterial({
                color: 0xFFA07A,
                opacity: 0.9,
                transparent: true,
            })
        );
        messyLayer.position.set(0, 4.5, -0.3);

        const mirroredMessyLayer = messyLayer.clone();
        mirroredMessyLayer.position.set(0, 4.5, 0.3);

        character.add(messyLayer);
        character.add(mirroredMessyLayer);
    },
    
    addGentleWavyHair: function(character) {
        const wavyHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 3),
            new THREE.MeshStandardMaterial({
                color: 0xE9967A,
                opacity: 0.9,
                transparent: true,
            })
        );
        wavyHair.position.set(0, 4.5, -0.5);

        const mirroredWavyHair = wavyHair.clone();
        mirroredWavyHair.position.set(0, 4.5, 0.5);

        character.add(wavyHair);
        character.add(mirroredWavyHair);
    }
};

/**
 * Male Hair Components Collection
 * Contains all hair styles and accessories for male characters
 */
const MaleHairComponents = {
    addSideburns: function(character) {
        const sideburn = new THREE.Mesh(
            new THREE.PlaneGeometry(0.2, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        sideburn.position.set(0.9, 4.3, 0);

        const mirroredSideburn = sideburn.clone();
        mirroredSideburn.position.set(-0.9, 4.3, 0);

        character.add(sideburn);
        character.add(mirroredSideburn);
    },
    
    addMohawkHair: function(character) {
        const mohawk = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 2.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        mohawk.position.set(0, 5.2, 0);
        mohawk.rotation.z = Math.PI / 2;
        character.add(mohawk);
    },
    
    addSpikyHair: function(character) {
        const spike = new THREE.Mesh(
            new THREE.CylinderGeometry(0, 0.3, 1, 16),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        spike.position.set(0, 5.2, 0);

        const mirroredSpike = spike.clone();
        mirroredSpike.position.set(0.3, 5.2, 0);
        character.add(spike);
        character.add(mirroredSpike);
    },
    
    addShortCutHair: function(character) {
        const shortHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 2),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        shortHair.position.set(0, 4.7, -0.2);
        character.add(shortHair);
    },
    
    addMiddlePartedHair: function(character) {
        const partedHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.6, 2.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        partedHair.position.set(0, 4.8, -0.2);
        character.add(partedHair);
    },
    
    addAfroHair: function(character) {
        const afro = new THREE.Mesh(
            new THREE.SphereGeometry(1.2, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        afro.position.set(0, 5, 0);
        character.add(afro);
    },
    
    addMessyHair: function(character) {
        const messyHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 2),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        messyHair.position.set(0, 4.8, -0.2);
        character.add(messyHair);
    },
    
    addLongStraightHair: function(character) {
        const straightHair = new THREE.Mesh(
            new THREE.PlaneGeometry(1.8, 3.5),
            new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
        );
        straightHair.position.set(0, 4.6, -0.3);
        character.add(straightHair);
    }
};

/**
 * Complete Head Components Library
 * Main export object containing all components
 */
const HeadComponentsPart23 = {
    Female: {
        Hair: FemaleHairComponents,
        FacialFeatures: {
            addSoftLips: function(character) {
                const lips = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.6, 0.2),
                    new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
                );
                lips.position.set(0, 4.3, 0.8);
                character.add(lips);
            },
            
            addDecorativeEars: function(character) {
                const ear = new THREE.Mesh(
                    new THREE.CircleGeometry(0.5, 32),
                    new THREE.MeshStandardMaterial({ color: 0xFFD700 })
                );
                ear.position.set(1.2, 4.5, 0.3);

                const mirroredEar = ear.clone();
                mirroredEar.position.set(-1.2, 4.5, 0.3);

                character.add(ear);
                character.add(mirroredEar);
            },
            
            addSmallCuteNose: function(character) {
                const cuteNose = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16),
                    new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
                );
                cuteNose.position.set(0, 4.5, 0.8);
                character.add(cuteNose);
            },
            
            addShinyMetallicEars: function(character) {
                const shinyEar = new THREE.Mesh(
                    new THREE.CircleGeometry(0.5, 32),
                    new THREE.MeshStandardMaterial({
                        color: 0xFFD700,
                        metalness: 1.0,
                        roughness: 0.1,
                    })
                );
                shinyEar.position.set(1.2, 4.5, 0.3);

                const mirroredShinyEar = shinyEar.clone();
                mirroredShinyEar.position.set(-1.2, 4.5, 0.3);

                character.add(shinyEar);
                character.add(mirroredShinyEar);
            },
            
            addRoundEyes: function(character) {
                const eye = new THREE.Mesh(
                    new THREE.SphereGeometry(0.4, 32, 32),
                    new THREE.MeshStandardMaterial({ color: 0x87CEEB })
                );
                eye.position.set(0.6, 4.8, 0.7);

                const mirroredEye = eye.clone();
                mirroredEye.position.set(-0.6, 4.8, 0.7);

                character.add(eye);
                character.add(mirroredEye);
            },
            
            addSmilingLips: function(character) {
                const smile = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.6, 0.2),
                    new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
                );
                smile.position.set(0, 4.3, 0.8);
                character.add(smile);
            },
            
            addSubtlePointyEars: function(character) {
                const pointyEar = new THREE.Mesh(
                    new THREE.ConeGeometry(0.4, 0.7, 16),
                    new THREE.MeshStandardMaterial({ color: 0xFFDAB9 })
                );
                pointyEar.position.set(1.2, 4.5, 0.3);
                pointyEar.rotation.z = -Math.PI / 8;

                const mirroredPointyEar = pointyEar.clone();
                mirroredPointyEar.position.set(-1.2, 4.5, 0.3);
                mirroredPointyEar.rotation.z = Math.PI / 8;

                character.add(pointyEar);
                character.add(mirroredPointyEar);
            },
            
            addSparklingCrystalEyes: function(character) {
                const sparklingEye = new THREE.Mesh(
                    new THREE.SphereGeometry(0.3, 32, 32),
                    new THREE.MeshStandardMaterial({
                        color: 0xE0FFFF,
                        emissive: 0x87CEEB,
                        emissiveIntensity: 2.0,
                    })
                );
                sparklingEye.position.set(0.6, 4.8, 0.7);

                const mirroredSparklingEye = sparklingEye.clone();
                mirroredSparklingEye.position.set(-0.6, 4.8, 0.7);

                character.add(sparklingEye);
                character.add(mirroredSparklingEye);
            },
            
            addGentleLips: function(character) {
                const lips = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.6, 0.2),
                    new THREE.MeshStandardMaterial({ color: 0xFFB6C1 })
                );
                lips.position.set(0, 4.3, 0.8);
                character.add(lips);
            },
            
            addShimmeringEyes: function(character) {
                const shimmeringEye = new THREE.Mesh(
                    new THREE.SphereGeometry(0.3, 32, 32),
                    new THREE.MeshStandardMaterial({
                        emissive: 0x87CEEB,
                        emissiveIntensity: 1.8,
                    })
                );
                shimmeringEye.position.set(0.6, 4.8, 0.7);

                const mirroredShimmeringEye = shimmeringEye.clone();
                mirroredShimmeringEye.position.set(-0.6, 4.8, 0.7);

                character.add(shimmeringEye);
                character.add(mirroredShimmeringEye);
            }
        }
    },
    
    Male: {
        Hair: MaleHairComponents,
        FacialFeatures: {
            addDefinedLips: function(character) {
                const lips = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.7, 0.2),
                    new THREE.MeshStandardMaterial({ color: 0xD2691E })
                );
                lips.position.set(0, 4.3, 0.8);
                character.add(lips);
            },
            
            addLightBandEyes: function(character) {
                const lightBand = new THREE.Mesh(
                    new THREE.PlaneGeometry(1.2, 0.3),
                    new THREE.MeshStandardMaterial({
                        emissive: 0x00FF00,
                        emissiveIntensity: 2.5,
                    })
                );
                lightBand.position.set(0, 4.8, 0.8);
                character.add(lightBand);
            },
            
            addMetalNose: function(character) {
                const metalNose = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.1, 0.2, 0.5, 16),
                    new THREE.MeshStandardMaterial({
                        color: 0x808080,
                        metalness: 1.0,
                        roughness: 0.2,
                    })
                );
                metalNose.position.set(0, 4.5, 0.8);
                character.add(metalNose);
            },
            
            addStrongLips: function(character) {
                const lips = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.7, 0.2),
                    new THREE.MeshStandardMaterial({
                        color: 0x8B4513,
                        metalness: 0.5,
                        roughness: 0.3,
                    })
                );
                lips.position.set(0, 4.3, 0.8);
                character.add(lips);
            },
            
            addGlowOutlineEars: function(character) {
                const ear = new THREE.Mesh(
                    new THREE.CircleGeometry(0.5, 32),
                    new THREE.MeshStandardMaterial({
                        emissive: 0x00FF7F,
                        emissiveIntensity: 2.5,
                    })
                );
                ear.position.set(1.3, 4.5, 0.3);

                const mirroredEar = ear.clone();
                mirroredEar.position.set(-1.3, 4.5, 0.3);

                character.add(ear);
                character.add(mirroredEar);
            },
            
            addCurlyBeard: function(character) {
                const curlyBeard = new THREE.Mesh(
                    new THREE.TorusGeometry(0.5, 0.1, 16, 100),
                    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
                );
                curlyBeard.position.set(0, 4.2, 0.8);
                curlyBeard.rotation.x = Math.PI / 2;
                character.add(curlyBeard);
            },
            
            addTintedGlasses: function(character) {
                const glasses = new THREE.Mesh(
                    new THREE.PlaneGeometry(1, 0.5),
                    new THREE.MeshStandardMaterial({
                        color: 0x9370DB,
                        opacity: 0.6,
                        transparent: true,
                    })
                );
                glasses.position.set(0, 4.8, 0.7);
                character.add(glasses);
            },
            
            addNeonGlasses: function(character) {
                const glasses = new THREE.Mesh(
                    new THREE.PlaneGeometry(1.2, 0.4),
                    new THREE.MeshStandardMaterial({
                        emissive: 0xFF4500,
                        emissiveIntensity: 2.5,
                    })
                );
                glasses.position.set(0, 4.8, 0.7);
                character.add(glasses);
            },
            
            addSmallMouth: function(character) {
                const smallMouth = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.4, 0.2),
                    new THREE.MeshStandardMaterial({ color: 0xD2691E })
                );
                smallMouth.position.set(0, 4.3, 0.8);
                character.add(smallMouth);
            },
            
            addSquareEars: function(character) {
                const squareEar = new THREE.Mesh(
                    new THREE.BoxGeometry(0.5, 0.5, 0.1),
                    new THREE.MeshStandardMaterial({ color: 0x808080 })
                );
                squareEar.position.set(1.2, 4.5, 0.3);

                const mirroredSquareEar = squareEar.clone();
                mirroredSquareEar.position.set(-1.2, 4.5, 0.3);

                character.add(squareEar);
                character.add(mirroredSquareEar);
            },
            
            addFlamingEyes: function(character) {
                const flamingEye = new THREE.Mesh(
                    new THREE.SphereGeometry(0.3, 32, 32),
                    new THREE.MeshStandardMaterial({
                        emissive: 0xFF4500,
                        emissiveIntensity: 2.5,
                    })
                );
                flamingEye.position.set(0.6, 4.8, 0.7);

                const mirroredFlamingEye = flamingEye.clone();
                mirroredFlamingEye.position.set(-0.6, 4.8, 0.7);

                character.add(flamingEye);
                character.add(mirroredFlamingEye);
            },
            
            addWideNose: function(character) {
                const wideNose = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.2, 0.3, 0.5, 16),
                    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
                );
                wideNose.position.set(0, 4.5, 0.8);
                character.add(wideNose);
            },
            
            addMetallicEyes: function(character) {
                const metallicEye = new THREE.Mesh(
                    new THREE.SphereGeometry(0.3, 32, 32),
                    new THREE.MeshStandardMaterial({
                        color: 0x808080,
                        metalness: 1.0,
                        roughness: 0.2,
                    })
                );
                metallicEye.position.set(0.6, 4.8, 0.7);

                const mirroredMetallicEye = metallicEye.clone();
                mirroredMetallicEye.position.set(-0.6, 4.8, 0.7);

                character.add(metallicEye);
                character.add(mirroredMetallicEye);
            },
            
            addCompactNose: function(character) {
                const compactNose = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.05, 0.1, 0.3, 16),
                    new THREE.MeshStandardMaterial({ color: 0xD2691E })
                );
                compactNose.position.set(0, 4.5, 0.8);
                character.add(compactNose);
            },
            
            addLargeEars: function(character) {
                const largeEar = new THREE.Mesh(
                    new THREE.CircleGeometry(0.8, 32),
                    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
                );
                largeEar.position.set(1.5, 4.5, 0.3);

                const mirroredLargeEar = largeEar.clone();
                mirroredLargeEar.position.set(-1.5, 4.5, 0.3);

                character.add(largeEar);
                character.add(mirroredLargeEar);
            },
            
            addSlenderEyes: function(character) {
                const slenderEye = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.8, 0.2),
                    new THREE.MeshStandardMaterial({ color: 0x0000FF })
                );
                slenderEye.position.set(0.6, 4.8, 0.7);

                const mirroredSlenderEye = slenderEye.clone();
                mirroredSlenderEye.position.set(-0.6, 4.8, 0.7);

                character.add(slenderEye);
                character.add(mirroredSlenderEye);
            }
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeadComponentsPart23;
}

// Global assignment for browser usage
if (typeof window !== 'undefined') {
    window.HeadComponentsPart23 = HeadComponentsPart23;
}
