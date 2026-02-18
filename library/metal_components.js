// Metal Components Library
// Various metal elements, bands, and metallic decorations

// Function: Multidimensional Metal Skirt
function addMultidimensionalMetalSkirt(outfit) {
    const metalSkirtLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(3, 3.5, 4, 32),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalSkirtLayer.position.set(0, -4, 0);
    outfit.add(metalSkirtLayer);
}

// Function: Metal Horizontal Bands
function addMetalHorizontalBands(outfit) {
    const metalBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    metalBand.position.set(0.5, 1.2, 0.6);
    outfit.add(metalBand);

    const mirroredMetalBand = metalBand.clone();
    mirroredMetalBand.position.set(-0.5, 1.2, 0.6);
    outfit.add(mirroredMetalBand);
}

// Function: Multidimensional Metal Gloves
function addMultidimensionalMetalGloves(outfit) {
    const glove = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3, 32),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    glove.position.set(0.5, -1, 0.3);
    outfit.add(glove);

    const mirroredGlove = glove.clone();
    mirroredGlove.position.set(-0.5, -1, 0.3);
    outfit.add(mirroredGlove);
}

// Function: Glowing Metal Bands
function addGlowingMetalBands(outfit) {
    const metalBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            emissive: 0x00FF00,
            emissiveIntensity: 2.5,
        })
    );
    metalBand.position.set(0.5, 1.2, 0.6);
    outfit.add(metalBand);

    const mirroredBand = metalBand.clone();
    mirroredBand.position.set(-0.5, 1.2, 0.6);
    outfit.add(mirroredBand);
}

// Function: Metal Mesh Cape
function addMetalMeshCape(outfit) {
    const meshCape = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 6.5),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            wireframe: true,
        })
    );
    meshCape.position.set(0, -2, -1);
    meshCape.rotation.x = -Math.PI / 2;
    outfit.add(meshCape);
}

// Function: Metal Shoulder Straps
function addMetalShoulderStraps(outfit) {
    const strap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    strap.position.set(0.5, 1.5, 0.5);
    outfit.add(strap);

    const mirroredStrap = strap.clone();
    mirroredStrap.position.set(-0.5, 1.5, 0.5);
    outfit.add(mirroredStrap);
}

// Function: Engraved Metal Necklace
function addEngravedMetalNecklace(outfit) {
    const metalNecklace = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalNecklace.position.set(0, 1.5, 0.3);
    metalNecklace.rotation.x = Math.PI / 2;
    outfit.add(metalNecklace);
}

// Function: Wavy Shoulder Straps
function addWavyShoulderStraps(outfit) {
    const wavyStrap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 16),
        new THREE.MeshStandardMaterial({
            color: 0x9370DB,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    wavyStrap.position.set(0.5, 1.5, 0.5);
    wavyStrap.rotation.z = Math.PI / 6;
    outfit.add(wavyStrap);

    const mirroredStrap = wavyStrap.clone();
    mirroredStrap.position.set(-0.5, 1.5, 0.5);
    mirroredStrap.rotation.z = -Math.PI / 6;
    outfit.add(mirroredStrap);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addMultidimensionalMetalSkirt,
        addMetalHorizontalBands,
        addMultidimensionalMetalGloves,
        addGlowingMetalBands,
        addMetalMeshCape,
        addMetalShoulderStraps,
        addEngravedMetalNecklace,
        addWavyShoulderStraps
    };
}
