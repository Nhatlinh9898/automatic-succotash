// Lace and Fabric Components Library
// Various lace details, fabric elements, and textile decorations

// Function: Vertical Lace Details
function addVerticalLaceDetails(outfit) {
    const laceDetail = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    laceDetail.position.set(0.5, -2, 0.6);
    outfit.add(laceDetail);

    const mirroredLaceDetail = laceDetail.clone();
    mirroredLaceDetail.position.set(-0.5, -2, 0.6);
    outfit.add(mirroredLaceDetail);
}

// Function: Floral Cape
function addFloralCape(outfit) {
    const cape = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 6),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.8,
            transparent: true,
        })
    );
    cape.position.set(0, -2, -1);
    cape.rotation.x = -Math.PI / 2;

    const flower = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 32),
        new THREE.MeshStandardMaterial({ color: 0xFF69B4 }) // Pink color
    );
    flower.position.set(1, -1, 0);
    cape.add(flower);

    const mirroredFlower = flower.clone();
    mirroredFlower.position.set(-1, -1, 0);
    cape.add(mirroredFlower);

    outfit.add(cape);
}

// Function: Reflective Lace Layers
function addReflectiveLaceLayers(outfit) {
    const laceLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 6),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            opacity: 0.7,
            transparent: true,
        })
    );
    laceLayer.position.set(0, -2, 0.5);
    outfit.add(laceLayer);
}

// Function: Embossed Lace Bands
function addEmbossedLaceBands(outfit) {
    const laceBand = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            roughness: 0.4,
            metalness: 0.2,
        })
    );
    laceBand.position.set(0, -2.5, 0.6);
    outfit.add(laceBand);

    const mirroredBand = laceBand.clone();
    mirroredBand.position.set(0, -3.5, 0.6);
    outfit.add(mirroredBand);
}

// Function: Layered Metal Skirt Edges
function addLayeredMetalSkirtEdges(outfit) {
    const metalEdge = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.1, 16, 100),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    metalEdge.position.set(0, -4, 0.5);
    outfit.add(metalEdge);

    const secondLayer = metalEdge.clone();
    secondLayer.position.set(0, -4.5, 0.5);
    outfit.add(secondLayer);

    const thirdLayer = metalEdge.clone();
    thirdLayer.position.set(0, -5, 0.5);
    outfit.add(thirdLayer);
}

// Function: Metal Pattern Details
function addMetalPatternDetails(outfit) {
    const metalPattern = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 0.9,
            roughness: 0.3,
        })
    );
    metalPattern.position.set(0, 1.2, 0.6);
    outfit.add(metalPattern);
}

// Export all functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addVerticalLaceDetails,
        addFloralCape,
        addReflectiveLaceLayers,
        addEmbossedLaceBands,
        addLayeredMetalSkirtEdges,
        addMetalPatternDetails
    };
}
