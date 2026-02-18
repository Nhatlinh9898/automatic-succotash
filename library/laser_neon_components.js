// Laser and Neon Components Library
// Various laser effects, neon lighting, and futuristic elements

// Function: Glowing Laser Cape
function addGlowingLaserCape(outfit) {
    const laserCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 6.5),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
            opacity: 0.7,
            transparent: true,
        })
    );
    laserCape.position.set(0, -2, -1);
    laserCape.rotation.x = -Math.PI / 2;
    outfit.add(laserCape);
}

// Function: Laser Skirt Edges
function addLaserSkirtEdges(outfit) {
    const laserEdge = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.0,
        })
    );
    laserEdge.position.set(0, -4.5, 0.6);
    outfit.add(laserEdge);
}

// Function: Double Neon Strips
function addDoubleNeonStrips(outfit) {
    const neonStrip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    neonStrip.position.set(0.5, -2, 0.6);
    outfit.add(neonStrip);

    const secondNeonStrip = neonStrip.clone();
    secondNeonStrip.position.set(-0.5, -2, 0.6);
    outfit.add(secondNeonStrip);
}

// Function: Horizontal Light Strips
function addHorizontalLightStrips(outfit) {
    const lightStrip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2.5, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFD700,
            emissiveIntensity: 1.8,
        })
    );
    lightStrip.position.set(0, 1.2, 0.6);
    outfit.add(lightStrip);

    const secondStrip = lightStrip.clone();
    secondStrip.position.set(0, 0.8, 0.6);
    outfit.add(secondStrip);
}

// Function: Laser Highlight Gloves
function addLaserHighlightGloves(outfit) {
    const glove = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 1.8,
        })
    );
    glove.position.set(0.5, -1, 0.3);
    outfit.add(glove);

    const mirroredGlove = glove.clone();
    mirroredGlove.position.set(-0.5, -1, 0.3);
    outfit.add(mirroredGlove);
}

// Function: Multidimensional Laser Strips
function addMultidimensionalLaserStrips(outfit) {
    const laserStrip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserStrip.position.set(0.6, 1.2, 0.6);
    laserStrip.rotation.z = Math.PI / 6;
    outfit.add(laserStrip);

    const mirroredLaserStrip = laserStrip.clone();
    mirroredLaserStrip.position.set(-0.6, 1.2, 0.6);
    mirroredLaserStrip.rotation.z = -Math.PI / 6;
    outfit.add(mirroredLaserStrip);
}

// Function: Neon Bracelets
function addNeonBracelets(outfit) {
    const neonBracelet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonBracelet.position.set(0.5, 0.5, 0.3);
    outfit.add(neonBracelet);

    const mirroredNeonBracelet = neonBracelet.clone();
    mirroredNeonBracelet.position.set(-0.5, 0.5, 0.3);
    outfit.add(mirroredNeonBracelet);
}

// Function: Laser Vertical Strips
function addLaserVerticalStrips(outfit) {
    const laserStrip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserStrip.position.set(0.5, -2, 0.5);
    outfit.add(laserStrip);

    const mirroredLaserStrip = laserStrip.clone();
    mirroredLaserStrip.position.set(-0.5, -2, 0.5);
    outfit.add(mirroredLaserStrip);
}

// Function: Neon Outlined Hat
function addNeonOutlinedHat(outfit) {
    const neonHat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonHat.position.set(0, 2.8, 0);

    const neonEdge = new THREE.Mesh(
        new THREE.TorusGeometry(0.6, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonEdge.position.set(0, 3.1, 0);
    neonEdge.rotation.x = Math.PI / 2;
    neonHat.add(neonEdge);
    outfit.add(neonHat);
}

// Function: Laser Lace Bands
function addLaserLaceBands(outfit) {
    const laceBand = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceBand.position.set(0, -2.5, 0.6);
    outfit.add(laceBand);

    const mirroredBand = laceBand.clone();
    mirroredBand.position.set(0, -3.5, 0.6);
    outfit.add(mirroredBand);
}

// Function: Bright Neon Hemline
function addBrightNeonHemline(outfit) {
    const neonHemline = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    neonHemline.position.set(0, -4.5, 0.5);
    outfit.add(neonHemline);
}

// Function: Radiant Laser Gloves
function addRadiantLaserGloves(outfit) {
    const laserGlove = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserGlove.position.set(0.5, -1, 0.3);
    outfit.add(laserGlove);

    const mirroredLaserGlove = laserGlove.clone();
    mirroredLaserGlove.position.set(-0.5, -1, 0.3);
    outfit.add(mirroredLaserGlove);
}

// Function: Laser Back Details
function addLaserBackDetails(outfit) {
    const laserDetail = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
            opacity: 0.7,
            transparent: true,
        })
    );
    laserDetail.position.set(0, 1.5, -0.6);
    outfit.add(laserDetail);
}

// Function: Neon Shoulder Band
function addNeonShoulderBand(outfit) {
    const neonBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 4, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    neonBand.position.set(0, 2, 0);
    neonBand.rotation.z = Math.PI / 2;
    outfit.add(neonBand);
}

// Function: Vertical Laser Patterns
function addVerticalLaserPatterns(outfit) {
    const laserPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 4),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
            opacity: 0.7,
            transparent: true,
        })
    );
    laserPattern.position.set(0, -2, 0.5);
    outfit.add(laserPattern);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addGlowingLaserCape,
        addLaserSkirtEdges,
        addDoubleNeonStrips,
        addHorizontalLightStrips,
        addLaserHighlightGloves,
        addMultidimensionalLaserStrips,
        addNeonBracelets,
        addLaserVerticalStrips,
        addNeonOutlinedHat,
        addLaserLaceBands,
        addBrightNeonHemline,
        addRadiantLaserGloves,
        addLaserBackDetails,
        addNeonShoulderBand,
        addVerticalLaserPatterns
    };
}
