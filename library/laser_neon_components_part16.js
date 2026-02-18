// Laser and Neon Components Library - Part 16
// Various laser effects, neon lighting, and futuristic elements

// Function: Rainbow Laser Trim
function addRainbowLaserTrim(outfit) {
    const rainbowLaserTrim = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF69B4,
            emissiveIntensity: 2.0,
        })
    );
    rainbowLaserTrim.position.set(0, -3.5, 0.5);
    outfit.add(rainbowLaserTrim);
}

// Function: Double Laser Shoulder Straps
function addDoubleLaserShoulderStraps(outfit) {
    const laserStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.0,
        })
    );
    laserStrap.position.set(0.5, 1.5, 0.5);
    outfit.add(laserStrap);

    const mirroredLaserStrap = laserStrap.clone();
    mirroredLaserStrap.position.set(-0.5, 1.5, 0.5);
    outfit.add(mirroredLaserStrap);
}

// Function: Multicolor Laser Strips
function addMulticolorLaserStrips(outfit) {
    const laserStrip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
        })
    );
    laserStrip.position.set(0.5, -2, 0.5);
    outfit.add(laserStrip);

    const mirroredLaserStrip = laserStrip.clone();
    mirroredLaserStrip.position.set(-0.5, -2, 0.5);
    outfit.add(mirroredLaserStrip);
}

// Function: Laser Glowing Hat
function addLaserGlowingHat(outfit) {
    const laserHat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1.2, 0.6, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0xFF4500,
            emissiveIntensity: 2.5,
        })
    );
    laserHat.position.set(0, 2.8, 0);
    outfit.add(laserHat);
}

// Function: Neon Skirt Edges
function addNeonSkirtEdges(outfit) {
    const neonEdge = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FFFF,
            emissiveIntensity: 2.5,
        })
    );
    neonEdge.position.set(0, -4.5, 0.6);
    outfit.add(neonEdge);
}

// Function: Neon Anklets
function addNeonAnklets(outfit) {
    const neonAnklet = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.05, 16, 100),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    neonAnklet.position.set(0.5, -5.3, 0);
    outfit.add(neonAnklet);

    const mirroredAnklet = neonAnklet.clone();
    mirroredAnklet.position.set(-0.5, -5.3, 0);
    outfit.add(mirroredAnklet);
}

// Function: LED Back Glow
function addLEDBackGlow(outfit) {
    const backGlow = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.5, 0.3, 32),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    backGlow.position.set(0, -0.5, -0.5);
    outfit.add(backGlow);
}

// Function: Mesh Laser Hemline
function addMeshLaserHemline(outfit) {
    const meshLaser = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 0.5),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
            wireframe: true,
        })
    );
    meshLaser.position.set(0, -4.5, 0.5);
    outfit.add(meshLaser);
}

// Function: Laser Highlight Patterns
function addLaserHighlightPatterns(outfit) {
    const laserPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 4),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            emissive: 0xFF6347,
            emissiveIntensity: 2.0,
            opacity: 0.8,
            transparent: true,
        })
    );
    laserPattern.position.set(0, -2, 0.6);
    outfit.add(laserPattern);
}

// Function: Radiant Laser Sleeves
function addRadiantLaserSleeves(outfit) {
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

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addRainbowLaserTrim,
        addDoubleLaserShoulderStraps,
        addMulticolorLaserStrips,
        addLaserGlowingHat,
        addNeonSkirtEdges,
        addNeonAnklets,
        addLEDBackGlow,
        addMeshLaserHemline,
        addLaserHighlightPatterns,
        addRadiantLaserSleeves
    };
}
