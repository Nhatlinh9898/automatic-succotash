/**
 * Components Index - Part 32
 * Master index for all body components in part 32
 * Organized by character type and component style
 */

// Male Body Components - Part 32
export {
    addSparklingLaserBody,
    addMetalLaserBody,
    addLaserAngularBody,
    addMetalLaserPowerBody,
    addDynamicLaserBody,
    addSparklingBody,
    addGiantLaserBody,
    addFullyGlowingBody,
    addLaserMetalSparkleBody,
    addGeometricLaserBody,
    addBoldLaserBody,
    addLaserCubeBody,
    addWaveLaserBody,
    addMassiveLaserBody,
    addIntenseLaserBody,
    addContouredLaserBody,
    addIntegratedLaserAngularBody
} from './body_components_male_part32.js';

// Female Body Components - Part 32
export {
    addLaceLaserBody,
    addSparklingLaceBody,
    addElegantBody,
    addStarryBody,
    addLaceMetalBody,
    addLaceRadiantBody,
    addLaserMetallicBody,
    addSparklingLaserLaceBody,
    addStarryLaserSoftBody,
    addGlitteringMetallicBody,
    addLongMetalBody,
    addStarryElegantBody,
    addMetalLaserBlendBody,
    addGracefulLaceBody,
    addMixedMetalLaceBody,
    addRadiantLaceBody,
    addMetalLaserBlendedBody
} from './body_components_female_part32.js';

/**
 * Component Categories for Part 32:
 * 
 * MALE COMPONENTS:
 * - Laser Bodies: Various laser effects (orange, green, cyan)
 * - Metallic Bodies: Silver metal with laser combinations
 * - Angular Bodies: Geometric and angular designs
 * - Giant Bodies: Larger proportion variants
 * 
 * FEMALE COMPONENTS:
 * - Lace Bodies: Elegant lace details with various effects
 * - Starry Bodies: Sparkling star effects
 * - Metallic Bodies: Silver metal with pink accents
 * - Elegant Bodies: Sophisticated and graceful designs
 * 
 * USAGE EXAMPLES:
 * 
 * // Import specific components
 * import { addSparklingLaserBody, addElegantBody } from './components_index_part32.js';
 * 
 * // Import all components
 * import * as Part32Components from './components_index_part32.js';
 * 
 * // Use components
 * const character = new THREE.Group();
 * addSparklingLaserBody(character); // Male laser body
 * addElegantBody(character);       // Female elegant body
 */

/**
 * Quick Reference Map:
 */
export const COMPONENT_MAP = {
    // Male Components
    male: {
        laser: [
            'addSparklingLaserBody',
            'addMetalLaserBody', 
            'addDynamicLaserBody',
            'addMetalLaserPowerBody',
            'addLaserMetalSparkleBody',
            'addGeometricLaserBody',
            'addBoldLaserBody',
            'addLaserCubeBody',
            'addWaveLaserBody',
            'addMassiveLaserBody',
            'addIntenseLaserBody',
            'addContouredLaserBody',
            'addIntegratedLaserAngularBody'
        ],
        angular: [
            'addLaserAngularBody'
        ],
        giant: [
            'addGiantLaserBody'
        ],
        glowing: [
            'addFullyGlowingBody',
            'addSparklingBody'
        ]
    },
    // Female Components
    female: {
        lace: [
            'addLaceLaserBody',
            'addSparklingLaceBody',
            'addElegantBody',
            'addLaceMetalBody',
            'addLaceRadiantBody',
            'addSparklingLaserLaceBody',
            'addGracefulLaceBody',
            'addMixedMetalLaceBody',
            'addRadiantLaceBody'
        ],
        starry: [
            'addStarryBody',
            'addStarryLaserSoftBody',
            'addStarryElegantBody'
        ],
        metallic: [
            'addLaserMetallicBody',
            'addGlitteringMetallicBody',
            'addLongMetalBody',
            'addMetalLaserBlendBody',
            'addMetalLaserBlendedBody'
        ]
    }
};

/**
 * Component Count Summary:
 * - Total Male Components: 17
 * - Total Female Components: 17
 * - Grand Total: 34 components
 */
