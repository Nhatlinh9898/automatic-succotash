// Beard Components - Part 25
// Library of various beard styles for male characters

// 713. Flame Beard
function addFlameBeard(character) {
    const flameBeard = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.8),
        new THREE.MeshStandardMaterial({
            color: 0xFF4500,
            opacity: 0.85,
            transparent: true,
        })
    );
    flameBeard.position.set(0, 4.2, 0.8);
    character.add(flameBeard);
}

// 733. Engraved Beard
function addEngravedBeard(character) {
    const engravedBeard = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.6),
        new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            metalness: 0.4,
            roughness: 0.6,
        })
    );
    engravedBeard.position.set(0, 4.2, 0.8);
    character.add(engravedBeard);
}

// 747. Sharp Beard
function addSharpBeard(character) {
    const sharpBeard = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.6),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    sharpBeard.position.set(0, 4.2, 0.8);
    character.add(sharpBeard);
}

export {
    addFlameBeard,
    addEngravedBeard,
    addSharpBeard
};
