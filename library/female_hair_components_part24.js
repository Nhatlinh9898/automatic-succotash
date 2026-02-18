// Female Hair Components - Part 24
// Various hairstyles for female characters

// Curled ends hair for elegant look
function addCurledEndsHair(character) {
    const curledHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    curledHair.position.set(0, 4.5, -0.3);
    character.add(curledHair);
}

// Layered curly hair for volume
function addLayeredCurlyHair(character) {
    const layeredHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFB6C1,
            opacity: 0.9,
            transparent: true,
        })
    );
    layeredHair.position.set(0, 4.5, -0.5);

    const mirroredLayeredHair = layeredHair.clone();
    mirroredLayeredHair.position.set(0, 4.5, 0.5);

    character.add(layeredHair);
    character.add(mirroredLayeredHair);
}

// Long soft wavy hair for feminine look
function addLongSoftWavyHair(character) {
    const wavyHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFB6C1,
            opacity: 0.8,
            transparent: true,
        })
    );
    wavyHairLayer.position.set(0, 4.5, -0.3);

    const mirroredWavyHairLayer = wavyHairLayer.clone();
    mirroredWavyHairLayer.position.set(0, 4.5, 0.3);

    character.add(wavyHairLayer);
    character.add(mirroredWavyHairLayer);
}

// Short curly hair for cute style
function addShortCurlyHair(character) {
    const curlyHairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    curlyHairLayer.position.set(0, 4.6, -0.3);

    const mirroredCurlyHairLayer = curlyHairLayer.clone();
    mirroredCurlyHairLayer.position.set(0, 4.6, 0.3);

    character.add(curlyHairLayer);
    character.add(mirroredCurlyHairLayer);
}

// Layered long hair for elegant style
function addLayeredLongHair(character) {
    const hairLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xF08080,
            opacity: 0.8,
            transparent: true,
        })
    );
    hairLayer.position.set(0, 4.5, -0.3);

    const mirroredHairLayer = hairLayer.clone();
    mirroredHairLayer.position.set(0, 4.5, 0.3);

    character.add(hairLayer);
    character.add(mirroredHairLayer);
}

// Natural wavy hair for casual look
function addNaturalWavyHair(character) {
    const wavyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFB6C1,
            opacity: 0.85,
            transparent: true,
        })
    );
    wavyLayer.position.set(0, 4.5, -0.3);

    const mirroredLayer = wavyLayer.clone();
    mirroredLayer.position.set(0, 4.5, 0.3);

    character.add(wavyLayer);
    character.add(mirroredLayer);
}

// Braided ponytail for neat style
function addBraidedPonytail(character) {
    const braid = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 2, 16),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    braid.position.set(0, 4.5, -0.3);
    character.add(braid);
}

// Big curly hair for voluminous look
function addBigCurlyHair(character) {
    const bigCurls = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 2.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    bigCurls.position.set(0, 4.7, -0.3);

    const mirroredCurls = bigCurls.clone();
    mirroredCurls.position.set(0, 4.7, 0.3);

    character.add(bigCurls);
    character.add(mirroredCurls);
}

// Soft long hair for gentle appearance
function addSoftLongHair(character) {
    const softHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            opacity: 0.8,
            transparent: true,
        })
    );
    softHair.position.set(0, 4.5, -0.3);

    const mirroredSoftHair = softHair.clone();
    mirroredSoftHair.position.set(0, 4.5, 0.3);

    character.add(softHair);
    character.add(mirroredSoftHair);
}

// Layered wavy hair for stylish look
function addLayeredWavyHair(character) {
    const wavyLayer = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    wavyLayer.position.set(0, 4.5, -0.3);

    const mirroredWavyLayer = wavyLayer.clone();
    mirroredWavyLayer.position.set(0, 4.5, 0.3);

    character.add(wavyLayer);
    character.add(mirroredWavyLayer);
}

// Long tail hair for unique style
function addLongTailHair(character) {
    const tailHair = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFB6C1,
            opacity: 0.9,
            transparent: true,
        })
    );
    tailHair.position.set(0, 4.5, -0.5);
    character.add(tailHair);
}

// Low ponytail for casual style
function addLowPonytail(character) {
    const ponytail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 2.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
    );
    ponytail.position.set(0, 4.5, -0.4);
    character.add(ponytail);
}

// Medium length hair for versatile look
function addMediumLengthHair(character) {
    const mediumHair = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 3),
        new THREE.MeshStandardMaterial({
            color: 0xFFDAB9,
            opacity: 0.9,
            transparent: true,
        })
    );
    mediumHair.position.set(0, 4.5, -0.3);
    character.add(mediumHair);
}

// Circular braids for elegant style
function addCircularBraids(character) {
    const braid = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.15, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0xF5F5DC })
    );
    braid.position.set(0, 5, -0.2);
    character.add(braid);
}

export {
    addCurledEndsHair,
    addLayeredCurlyHair,
    addLongSoftWavyHair,
    addShortCurlyHair,
    addLayeredLongHair,
    addNaturalWavyHair,
    addBraidedPonytail,
    addBigCurlyHair,
    addSoftLongHair,
    addLayeredWavyHair,
    addLongTailHair,
    addLowPonytail,
    addMediumLengthHair,
    addCircularBraids
};
