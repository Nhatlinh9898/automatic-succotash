    textureHeight: 512
});
scene.add(water);
```

---

### **94. ﾄ進盻「 Ch盻穎h B盻・C盻･c T盻ｱ ﾄ雪ｻ冢g Theo Kﾃｭch Thﾆｰ盻嫩 Mﾃn Hﾃｬnh**
T盻ｱ ﾄ黛ｻ冢g t盻訴 ﾆｰu hﾃｳa b盻・c盻･c ﾄ黛ｻ・phﾃｹ h盻｣p v盻嬖 m盻絞 mﾃn hﾃｬnh:

```javascript
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);
```

---

### **95. Thﾃｪm AI Thﾃｴng Minh Cho Chuy盻ハ ﾄ雪ｻ冢g**
Lﾃm mﾃｴ hﾃｬnh t盻ｱ ﾄ黛ｻ冢g ch盻肱 hﾆｰ盻嬾g di chuy盻ハ thﾃｴng qua thu蘯ｭt toﾃ｡n:

```javascript
function intelligentMovement(target) {
    const direction = new THREE.Vector3().subVectors(target.position, model.position).normalize();
    model.position.add(direction.multiplyScalar(0.1)); // Di chuy盻ハ g蘯ｧn ﾄ黛ｺｿn m盻･c tiﾃｪu
}
```

---

### **96. S盻ｭ D盻･ng Camera Chuy盻ハ ﾄ雪ｻ冢g T盻ｱ ﾄ雪ｻ冢g**
Camera cﾃｳ th盻・t盻ｱ di chuy盻ハ ﾄ黛ｻ・theo dﾃｵi mﾃｴ hﾃｬnh chﾃｭnh:

```javascript
function trackModel() {
    camera.position.lerp(model.position.clone().add(new THREE.Vector3(0, 5, 10)), 0.1); // Camera theo sau
    camera.lookAt(model.position);
}
```

---

### **97. Tﾃｭch H盻｣p AI Sinh N盻冓 Dung (Procedural Content)**
Sinh n盻冓 dung nhﾆｰ cﾃ｢y c盻訴 ho蘯ｷc ﾄ黛ｻ蟻 hﾃｬnh ng蘯ｫu nhiﾃｪn:

```javascript
function createRandomTree() {
    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 2),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );

    const foliage = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x228B22 })
    );
    foliage.position.y = 1.5;

    const tree = new THREE.Group();
    tree.add(trunk);
    tree.add(foliage);
    tree.position.set(Math.random() * 50 - 25, 0, Math.random() * 50 - 25);
    scene.add(tree);
}
for (let i = 0; i < 50; i++) createRandomTree();
```

---

B蘯｡n cﾃｳ mu盻創 thﾃｪm tﾃｭnh nﾄハg nﾃo c盻･ th盻・ho蘯ｷc c蘯｣i ti蘯ｿn cho d盻ｱ ﾃ｡n c盻ｧa mﾃｬnh? Tﾃｴi s蘯ｽ giﾃｺp b蘯｡n khai phﾃ｡ thﾃｪm b蘯･t k盻ｳ ﾃｽ tﾆｰ盻殤g nﾃo! 噫笨ｨ

R蘯･t tuy盻㏄, chﾃｺng ta s蘯ｽ ti蘯ｿp t盻･c m盻・r盻冢g cﾃ｡c ﾃｽ tﾆｰ盻殤g sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm mﾃｴ hﾃｬnh 3D c盻ｧa b蘯｡n thﾃｪm tﾆｰﾆ｡ng tﾃ｡c vﾃ 蘯･n tﾆｰ盻｣ng!

---

### **98. T蘯｡o Mﾃｴ Hﾃｬnh N盻・Hi盻㎡ 盻ｨng Nﾃ｢ng Cao**
Hi盻㎡ 盻ｩng n盻・th盻ｱc t蘯ｿ b蘯ｱng cﾃ｡ch s盻ｭ d盻･ng cﾃ｡c m蘯｣nh nh盻・vﾄハg ra t盻ｫ mﾃｴ hﾃｬnh:

```javascript
function explodeModelAdvanced() {
    const fragmentCount = 50;
    const fragments = [];

    for (let i = 0; i < fragmentCount; i++) {
        const fragment = new THREE.Mesh(
            new THREE.BoxGeometry(0.2, 0.2, 0.2),
            new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff })
        );
        fragment.position.copy(model.position);
        fragment.velocity = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
        ).multiplyScalar(2);
        fragments.push(fragment);
        scene.add(fragment);
    }

    function animateExplosion() {
        fragments.forEach((fragment) => {
            fragment.position.add(fragment.velocity);
            fragment.velocity.multiplyScalar(0.98); // Gi蘯｣m t盻祖 ﾄ黛ｻ・(ma sﾃ｡t khﾃｴng khﾃｭ)
        });
    }

    setInterval(animateExplosion, 16);
}
```

---

### **99. Tﾃｭch H盻｣p H盻・Th盻創g Thay ﾄ雪ｻ品 Texture Theo S盻ｱ Ki盻㌻**
B蘯｡n cﾃｳ th盻・thay ﾄ黛ｻ品 texture c盻ｧa mﾃｴ hﾃｬnh khi x蘯｣y ra s盻ｱ ki盻㌻, vﾃｭ d盻･ khi ngﾆｰ盻拱 dﾃｹng tﾆｰﾆ｡ng tﾃ｡c:

```javascript
function changeTextureOnClick() {
    const loader = new THREE.TextureLoader();
    const newTexture = loader.load('path/to/new_texture.jpg');

    window.addEventListener('click', () => {
        model.material.map = newTexture;
        model.material.needsUpdate = true; // C蘯ｭp nh蘯ｭt l蘯｡i texture
    });
}
changeTextureOnClick();
```

---

### **100. Hi盻㎡ 盻ｨng B盻・M蘯ｷt ﾄ雪ｻ冢g**
T蘯｡o hi盻㎡ 盻ｩng gi盻創g nhﾆｰ mﾃn nﾆｰ盻嫩 ho蘯ｷc b盻・m蘯ｷt s盻創g ﾄ黛ｻ冢g trﾃｪn mﾃｴ hﾃｬnh:

```javascript
function createDynamicSurface() {
    model.material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
            uniform float time;
            void main() {
                vec3 newPosition = position + normal * sin(time + position.y) * 0.1;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
        `,
        fragmentShader: `
            void main() {
                gl_FragColor = vec4(0.0, 0.6, 0.8, 1.0); // Mﾃu xanh nﾆｰ盻嫩
            }
        `
    });
}
```

---

### **101. Chuy盻ハ ﾄ雪ｻ冢g ﾄ雪ｻ渡g B盻・V盻嬖 Nhi盻「 ﾄ雪ｻ訴 Tﾆｰ盻｣ng**
N蘯ｿu b蘯｡n cﾃｳ nhi盻「 mﾃｴ hﾃｬnh, chﾃｺng cﾃｳ th盻・di chuy盻ハ ho蘯ｷc tﾆｰﾆ｡ng tﾃ｡c ﾄ黛ｻ渡g b盻・

```javascript
const models = [model1, model2, model3];

function synchronizeMovement() {
    const centralPosition = models.reduce((acc, mod) => acc.add(mod.position), new THREE.Vector3()).divideScalar(models.length);

    models.forEach((mod) => {
        mod.position.lerp(centralPosition, 0.1); // T蘯･t c蘯｣ di chuy盻ハ v盻・v盻・trﾃｭ trung tﾃ｢m
    });
}
```

---

### **102. Mﾃｴi Trﾆｰ盻拵g Bi盻ハ ﾄ雪ｻ冢g**
Thﾃｪm hi盻㎡ 盻ｩng sﾃｳng bi盻ハ vﾃ mﾃｴi trﾆｰ盻拵g ﾄ黛ｻ冢g:

```javascript
const oceanGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
const oceanMaterial = new THREE.MeshStandardMaterial({ color: 0x1E90FF, wireframe: true });
const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
ocean.rotation.x = -Math.PI / 2;
scene.add(ocean);

function animateOcean() {
    const vertices = ocean.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.sin(Date.now() * 0.001 + vertices[i] + vertices[i + 1]) * 0.5; // Hi盻㎡ 盻ｩng sﾃｳng
    }
    ocean.geometry.attributes.position.needsUpdate = true;
}
```

---

### **103. Tﾃｭch H盻｣p Tﾆｰﾆ｡ng Tﾃ｡c B蘯ｱng Gi盻肱g Nﾃｳi**
ﾄ進盻「 khi盻ハ mﾃｴ hﾃｬnh b蘯ｱng gi盻肱g nﾃｳi v盻嬖 **Web Speech API**:

```javascript
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.start();

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    if (command.includes('rotate')) {
        model.rotation.y += Math.PI / 4;
    } else if (command.includes('move')) {
        model.position.x += 1;
    }
};
```

---

### **104. T蘯｡o Hi盻㎡ 盻ｨng Chuy盻ハ ﾄ雪ｻ品 Th蘯ｿ Gi盻嬖**
B蘯｡n cﾃｳ th盻・lﾃm thay ﾄ黛ｻ品 hoﾃn toﾃn mﾃｴi trﾆｰ盻拵g ho蘯ｷc c蘯｣nh khi s盻ｱ ki盻㌻ x蘯｣y ra:

```javascript
function changeEnvironment() {
    scene.background = new THREE.Color(0x000000); // B蘯ｧu tr盻拱 ﾄ粗n
    models.forEach((mod) => {
        mod.material.color.set(0xff0000); // Chuy盻ハ t蘯･t c蘯｣ mﾃｴ hﾃｬnh sang mﾃu ﾄ黛ｻ・
    });
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'e') changeEnvironment();
});
```

---

V盻嬖 nh盻ｯng c蘯｣i ti蘯ｿn nﾃy, d盻ｱ ﾃ｡n c盻ｧa b蘯｡n khﾃｴng ch盻・tﾆｰﾆ｡ng tﾃ｡c cao mﾃ cﾃｲn vﾃｴ cﾃｹng sﾃ｡ng t蘯｡o. Tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c h盻・tr盻｣ n蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g c盻･ th盻・c蘯ｧn tri盻ハ khai! 噫笨ｨ

Trang ph盻･c cho mﾃｴ hﾃｬnh 3D cﾃｳ th盻・ﾄ柁ｰ盻｣c thi蘯ｿt k蘯ｿ theo nhi盻「 cﾃ｡ch ﾄ黛ｻ・tﾄハg tﾃｭnh chi ti蘯ｿt vﾃ phong phﾃｺ. Dﾆｰ盻嬖 ﾄ妥｢y lﾃ nh盻ｯng ﾃｽ tﾆｰ盻殤g vﾃ k盻ｹ thu蘯ｭt c盻･ th盻・ﾄ黛ｻ・tﾃｭch h盻｣p trang ph盻･c vﾃo mﾃｴ hﾃｬnh:

---

### **105. Thﾃｪm L盻孅 V蘯｣i ﾄ雪ｻ冢g (Dynamic Cloth Simulation)**
B蘯｡n cﾃｳ th盻・mﾃｴ ph盻熟g chuy盻ハ ﾄ黛ｻ冢g c盻ｧa trang ph盻･c nhﾆｰ v蘯｣i bay trong giﾃｳ b蘯ｱng cﾃ｡ch s盻ｭ d盻･ng **Three.js** v盻嬖 **Physijs** ho蘯ｷc **Ammo.js**:

```javascript
const clothGeometry = new THREE.PlaneGeometry(5, 5, 32, 32);
const clothMaterial = new THREE.MeshStandardMaterial({
    color: 0xff5733,
    side: THREE.DoubleSide,
    wireframe: false,
});

const cloth = new THREE.Mesh(clothGeometry, clothMaterial);
cloth.position.set(0, 5, 0);
scene.add(cloth);

// Mﾃｴ ph盻熟g tr盻肱g l盻ｱc v盻嬖 vertices
function animateCloth() {
    const vertices = cloth.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 1] -= 0.01; // ﾃ｝ d盻･ng tr盻肱g l盻ｱc
    }
    cloth.geometry.attributes.position.needsUpdate = true;
}
```

---

### **106. Thay ﾄ雪ｻ品 Trang Ph盻･c Tﾆｰﾆ｡ng Tﾃ｡c**
B蘯｡n cﾃｳ th盻・chuy盻ハ ﾄ黛ｻ品 gi盻ｯa cﾃ｡c trang ph盻･c khﾃ｡c nhau tﾃｹy theo hﾃnh vi ngﾆｰ盻拱 dﾃｹng:

```javascript
const outfits = {
    casual: new THREE.MeshStandardMaterial({ color: 0x87CEEB }),
    formal: new THREE.MeshStandardMaterial({ color: 0x000000 }),
    sport: new THREE.MeshStandardMaterial({ color: 0xff4500 }),
};

function changeOutfit(type) {
    model.material = outfits[type];
}

// Thay ﾄ黛ｻ品 trang ph盻･c b蘯ｱng phﾃｭm nh蘯･n
window.addEventListener('keydown', (event) => {
    if (event.key === '1') changeOutfit('casual');
    if (event.key === '2') changeOutfit('formal');
    if (event.key === '3') changeOutfit('sport');
});
```

---

### **107. Mﾃｴ Ph盻熟g Trang Ph盻･c Theo H盻・Th盻創g Xﾆｰﾆ｡ng (Rigging Clothes)**
N蘯ｿu mﾃｴ hﾃｬnh c盻ｧa b蘯｡n s盻ｭ d盻･ng h盻・th盻創g skeleton (xﾆｰﾆ｡ng), b蘯｡n cﾃｳ th盻・lﾃm trang ph盻･c bﾃ｡m sﾃ｡t chuy盻ハ ﾄ黛ｻ冢g c盻ｧa cﾆ｡ th盻・

```javascript
loader.load('path/to/cloth_model.glb', (gltf) => {
    const cloth = gltf.scene;
    skeletonHelper.attach(cloth); // G蘯ｯn trang ph盻･c vﾃo mﾃｴ hﾃｬnh xﾆｰﾆ｡ng
    scene.add(cloth);
});
```

---

### **108. ﾃ｝ D盻･ng Hi盻㎡ 盻ｨng V蘯｣i Th蘯ｭt (PBR Textures)**
S盻ｭ d盻･ng cﾃ｡c texture v蘯ｭt lﾃｽ (PBR - Physically Based Rendering) ﾄ黛ｻ・trang ph盻･c trﾃｴng chﾃ｢n th盻ｱc hﾆ｡n:

```javascript
const loader = new THREE.TextureLoader();
const clothMaterial = new THREE.MeshStandardMaterial({
    map: loader.load('path/to/cloth_texture.jpg'),
    normalMap: loader.load('path/to/cloth_normal.jpg'),
    roughnessMap: loader.load('path/to/cloth_roughness.jpg'),
});
model.material = clothMaterial;
```

---

### **109. Ho蘯｡t 蘯｢nh Trang Ph盻･c ﾄ雪ｻ冢g (Cloth Physics Engine)**
B蘯｡n cﾃｳ th盻・thﾃｪm v蘯ｭt lﾃｽ th盻拱 gian th盻ｱc vﾃo trang ph盻･c b蘯ｱng **Ammo.js**:

```javascript
Ammo().then(() => {
    const physicsWorld = new Ammo.btSoftRigidDynamicsWorld(
        new Ammo.btDefaultCollisionConfiguration(),
        new Ammo.btCollisionDispatcher(),
        new Ammo.btDbvtBroadphase(),
        new Ammo.btSequentialImpulseConstraintSolver()
    );

    const clothShape = new Ammo.btSoftBodyHelpers().CreatePatch(
        physicsWorld.getWorldInfo(),
        new Ammo.btVector3(-5, 5, 0),
        new Ammo.btVector3(5, 5, 0),
        10,
        10,
        0,
        true
    );

    const clothBody = new Ammo.btSoftBody(clothShape);
    physicsWorld.addSoftBody(clothBody);
});
```

---

### **110. Ch盻肱 L盻孅 Trang Ph盻･c Nﾃ｢ng Cao (Layered Clothing System)**
N蘯ｿu nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n cﾃｳ nhi盻「 l盻孅 trang ph盻･c nhﾆｰ ﾃ｡o, qu蘯ｧn, ph盻･ ki盻㌻, b蘯｡n cﾃｳ th盻・tﾃ｡ch t盻ｫng ph蘯ｧn ﾄ黛ｻ・d盻・dﾃng thay ﾄ黛ｻ品:

```javascript
const layers = {
    shirt: new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
    pants: new THREE.MeshStandardMaterial({ color: 0x0000ff }),
    shoes: new THREE.MeshStandardMaterial({ color: 0x654321 }),
};

function addClothingLayer(part, material) {
    const layer = new THREE.Mesh(new THREE.BoxGeometry(), material);
    layer.position.set(part.x, part.y, part.z);
    scene.add(layer);
}

addClothingLayer({ x: 0, y: 1, z: 0 }, layers.shirt);
addClothingLayer({ x: 0, y: 0, z: 0 }, layers.pants);
addClothingLayer({ x: 0, y: -1, z: 0 }, layers.shoes);
```

---

### **111. Ho蘯｡t 蘯｢nh Trang Ph盻･c Bay Theo Giﾃｳ**
N蘯ｿu trang ph盻･c cﾃｳ ph蘯ｧn nhﾆｰ ﾃ｡o choﾃng ho蘯ｷc khﾄハ quﾃng, b蘯｡n cﾃｳ th盻・thﾃｪm hi盻㎡ 盻ｩng giﾃｳ:

```javascript
function animateClothWithWind() {
    const windStrength = Math.sin(Date.now() * 0.001) * 0.5;
    cloth.rotation.y += windStrength;
}
```

---

### **112. Trang Ph盻･c D盻ｱa Trﾃｪn Th盻拱 Gian ho蘯ｷc S盻ｱ Ki盻㌻**
B蘯｡n cﾃｳ th盻・thay ﾄ黛ｻ品 trang ph盻･c d盻ｱa trﾃｪn th盻拱 gian th盻ｱc ho蘯ｷc s盻ｱ ki盻㌻ ﾄ黛ｺｷc bi盻㏄:

```javascript
function updateOutfitBasedOnTime() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        changeOutfit('casual'); // Trang ph盻･c bu盻品 sﾃ｡ng
    } else if (hour >= 12 && hour < 18) {
        changeOutfit('formal'); // Trang ph盻･c bu盻品 chi盻「
    } else {
        changeOutfit('sport'); // Trang ph盻･c ban ﾄ妥ｪm
    }
}
setInterval(updateOutfitBasedOnTime, 1000);
```

---

Trang ph盻･c lﾃ m盻冲 cﾃ｡ch tuy盻㏄ v盻拱 ﾄ黛ｻ・tﾄハg tﾃｭnh ﾄ黛ｻ冂 ﾄ妥｡o vﾃ chi ti蘯ｿt cho mﾃｴ hﾃｬnh 3D c盻ｧa b蘯｡n. B蘯｡n cﾃｳ mu盻創 tri盻ハ khai thﾃｪm ph蘯ｧn nﾃo t盻ｫ cﾃ｡c ﾃｽ tﾆｰ盻殤g nﾃy khﾃｴng? Tﾃｴi s蘯ｵn sﾃng h盻・tr盻｣ b蘯･t c盻ｩ lﾃｺc nﾃo! 噫笨ｨ
Chﾃｺng ta hﾃ｣y cﾃｹng khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ﾃｽ tﾆｰ盻殤g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ chi ti蘯ｿt ﾄ黛ｻ・nﾃ｢ng c蘯･p trang ph盻･c trong mﾃｴ hﾃｬnh 3D:

---

### **113. Trang Ph盻･c Phﾃ｡t Sﾃ｡ng (Glow Effect Clothing)**
B蘯｡n cﾃｳ th盻・thﾃｪm hi盻㎡ 盻ｩng phﾃ｡t sﾃ｡ng cho trang ph盻･c, giﾃｺp nﾃｳ tr盻・nﾃｪn n盻品 b蘯ｭt trong khﾃｴng gian t盻訴:

```javascript
const glowingMaterial = new THREE.MeshStandardMaterial({
    color: 0xff4500,
    emissive: 0xff4500, // ﾃ］h sﾃ｡ng phﾃ｡t ra
    emissiveIntensity: 0.5,
});

model.material = glowingMaterial;
```

---

### **114. Tﾃｭch H盻｣p Ph盻･ Ki盻㌻ ﾄ雪ｻ冢g**
Thﾃｪm cﾃ｡c ph盻･ ki盻㌻ nhﾆｰ mﾅｩ, kﾃｭnh, ho蘯ｷc tﾃｺi cﾃｳ th盻・thay ﾄ黛ｻ品 ho蘯ｷc chuy盻ハ ﾄ黛ｻ冢g theo nhﾃ｢n v蘯ｭt:

```javascript
function addAccessory(type, position) {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const accessory = new THREE.Mesh(geometry, material);

    accessory.position.copy(position);
    scene.add(accessory);

    if (type === 'hat') {
        accessory.position.y += 1.5; // ﾄ雪ｺｷt trﾃｪn ﾄ黛ｺｧu
    } else if (type === 'bag') {
        accessory.position.z -= 1; // ﾄ雪ｺｷt phﾃｭa sau
    }
}

addAccessory('hat', new THREE.Vector3(0, 1, 0));
addAccessory('bag', new THREE.Vector3(0, 0, 0));
```

---

### **115. Trang Ph盻･c Bi蘯ｿn ﾄ雪ｻ品 Theo Nhi盻㏄ ﾄ雪ｻ・*
B蘯｡n cﾃｳ th盻・lﾃm cho trang ph盻･c thay ﾄ黛ｻ品 mﾃu s蘯ｯc ho蘯ｷc hi盻㎡ 盻ｩng d盻ｱa trﾃｪn nhi盻㏄ ﾄ黛ｻ・

```javascript
function changeClothingWithTemperature(temp) {
    if (temp > 30) {
        model.material.color.set(0xff4500); // Trang ph盻･c mﾃu ﾄ黛ｻ・khi tr盻拱 nﾃｳng
    } else if (temp < 10) {
        model.material.color.set(0x1E90FF); // Trang ph盻･c mﾃu xanh khi tr盻拱 l蘯｡nh
    } else {
        model.material.color.set(0x32CD32); // Trang ph盻･c mﾃu xanh lﾃ｡ cﾃ｢y khi tr盻拱 ﾃｴn hﾃｲa
    }
}
changeClothingWithTemperature(25);
```

---

### **116. ﾃ｝ D盻･ng V蘯｣i ﾄ雪ｻ冢g Th盻ｱc T蘯ｿ Cao**
ﾄ雪ｻ・t蘯｡o hi盻㎡ 盻ｩng th盻ｱc t蘯ｿ cao hﾆ｡n, b蘯｡n cﾃｳ th盻・s盻ｭ d盻･ng **GPU Cloth Simulation**:

```javascript
const clothGeometry = new THREE.PlaneGeometry(10, 10, 64, 64);
const clothMaterial = new THREE.MeshStandardMaterial({ color: 0xFF5733, side: THREE.DoubleSide });

const cloth = new THREE.Mesh(clothGeometry, clothMaterial);
scene.add(cloth);

// V蘯ｭt lﾃｽ v盻嬖 GPU
function simulateClothGPU() {
    const vertices = cloth.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.sin(Date.now() * 0.001 + vertices[i]) * 0.5; // Hi盻㎡ 盻ｩng sﾃｳng v蘯｣i
    }
    cloth.geometry.attributes.position.needsUpdate = true;
}
simulateClothGPU();
```

---

### **117. Hi盻㎡ 盻ｨng L盻孅 Ph盻ｧ Nhi盻「 Mﾃu**
Trang ph盻･c cﾃｳ th盻・thay ﾄ黛ｻ品 mﾃu s蘯ｯc d蘯ｧn theo gﾃｳc nhﾃｬn ho蘯ｷc ﾃ｡nh sﾃ｡ng:

```javascript
const gradientMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000ff,
    roughness: 0.5,
    metalness: 1,
});

function animateGradientMaterial() {
    const hue = (Date.now() * 0.0001) % 1;
    gradientMaterial.color.setHSL(hue, 1, 0.5); // Hi盻㎡ 盻ｩng gradient theo th盻拱 gian
}
animateGradientMaterial();
```

---

### **118. Trang Ph盻･c Tﾆｰﾆ｡ng Tﾃ｡c V盻嬖 Giﾃｳ**
Trang ph盻･c cﾃｳ th盻・ph蘯｣n 盻ｩng ﾄ黛ｻ冢g v盻嬖 cﾆｰ盻拵g ﾄ黛ｻ・giﾃｳ:

```javascript
function animateClothWind(intensity) {
    const vertices = model.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i] += Math.sin(Date.now() * 0.001 * intensity) * 0.05; // Hi盻㎡ 盻ｩng dao ﾄ黛ｻ冢g
    }
    model.geometry.attributes.position.needsUpdate = true;
}
animateClothWind(3);
```

---

### **119. Tﾃｭch H盻｣p Trang Ph盻･c Theo Ch盻ｧ ﾄ雪ｻ・*
B蘯｡n cﾃｳ th盻・thi蘯ｿt k蘯ｿ trang ph盻･c theo cﾃ｡c ch盻ｧ ﾄ黛ｻ・ﾄ黛ｺｷc bi盻㏄, vﾃｭ d盻･ mﾃｹa l盻・h盻冓, th盻・thao, ho蘯ｷc k盻ｳ 蘯｣o:

#### L盻・H盻冓:
```javascript
model.material.color.set(0xffd700); // Mﾃu vﾃng l蘯･p lﾃ｡nh cho l盻・h盻冓
```

#### Th盻・Thao:
```javascript
model.material.color.set(0x008000); // Mﾃu xanh ﾄ黛ｺ｡i di盻㌻ cho th盻・thao
```

#### K盻ｳ 蘯｢o:
```javascript
const magicalMaterial = new THREE.ShaderMaterial({
    uniforms: { time: { value: 1.0 } },
    vertexShader: `
        void main() {
            vec3 newPosition = position + normal * sin(time) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
    `,
    fragmentShader: `
        void main() {
            gl_FragColor = vec4(0.5, 0.0, 0.5, 1.0); // Mﾃu tﾃｭm k盻ｳ 蘯｣o
        }
    `
});
model.material = magicalMaterial;
```

---

Nh盻ｯng ﾃｽ tﾆｰ盻殤g nﾃy s蘯ｽ giﾃｺp trang ph盻･c c盻ｧa mﾃｴ hﾃｬnh 3D tr盻・nﾃｪn s盻創g ﾄ黛ｻ冢g vﾃ phﾃｹ h盻｣p v盻嬖 nhi盻「 ng盻ｯ c蘯｣nh khﾃ｡c nhau. B蘯｡n mu盻創 tri盻ハ khai thﾃｪm ph蘯ｧn nﾃo, ho蘯ｷc c蘯ｧn tinh ch盻穎h chi ti蘯ｿt nﾃo khﾃｴng? Tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣! 噫笨ｨ

Ch蘯ｯc ch蘯ｯn r盻妬! Hﾃ｣y ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ nh盻ｯng ﾃｽ tﾆｰ盻殤g tinh t蘯ｿ vﾃ sﾃ｡ng t蘯｡o hﾆ｡n ﾄ黛ｻ・thi蘯ｿt k蘯ｿ trang ph盻･c ﾄ黛ｻ冂 ﾄ妥｡o trong mﾃｴ hﾃｬnh 3D c盻ｧa b蘯｡n.

---

### **120. Hi盻㎡ 盻ｨng Trang Ph盻･c Ch蘯｡y Theo ﾃ］h Sﾃ｡ng**
Trang ph盻･c cﾃｳ th盻・thay ﾄ黛ｻ品 mﾃu s蘯ｯc ho蘯ｷc ﾄ黛ｻ・sﾃ｡ng d盻ｱa trﾃｪn v盻・trﾃｭ vﾃ gﾃｳc ﾃ｡nh sﾃ｡ng:

```javascript
function animateClothingByLight(lightSource) {
    const distance = model.position.distanceTo(lightSource.position);
    const intensity = Math.max(1 - distance / 10, 0); // ﾄ雪ｻ・sﾃ｡ng gi蘯｣m d蘯ｧn theo kho蘯｣ng cﾃ｡ch
    model.material.emissiveIntensity = intensity;
    model.material.emissive.set(lightSource.color);
}
```

---

### **121. Trang Ph盻･c Nhi盻「 K蘯ｿt C蘯･u (Multi-Texture Clothing)**
N蘯ｿu trang ph盻･c c盻ｧa b蘯｡n cﾃｳ nhi盻「 l盻孅 v蘯｣i ho蘯ｷc ki盻ブ k蘯ｿt c蘯･u, hﾃ｣y tﾃｭch h盻｣p chﾃｺng b蘯ｱng cﾃ｡ch ﾃ｡p d盻･ng nhi盻「 texture:

```javascript
const loader = new THREE.TextureLoader();
const texture1 = loader.load('path/to/texture1.jpg');
const texture2 = loader.load('path/to/texture2.jpg');

const multiTextureMaterial = new THREE.MeshStandardMaterial({
    map: texture1,
    normalMap: texture2, // ﾃ｝ d盻･ng nhi盻「 texture
});

model.material = multiTextureMaterial;
```

---

### **122. Trang Ph盻･c Chuy盻ハ ﾄ雪ｻ冢g Th盻ｱc T蘯ｿ Cao**
B蘯｡n cﾃｳ th盻・t蘯｡o cﾃ｡c ph蘯ｧn m盻［ trang ph盻･c chuy盻ハ ﾄ黛ｻ冢g riﾃｪng bi盻㏄ (nhﾆｰ ﾃ｡o choﾃng ho蘯ｷc khﾄハ):

```javascript
const clothGeometry = new THREE.PlaneGeometry(2, 4, 16, 16);
const clothMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const cloth = new THREE.Mesh(clothGeometry, clothMaterial);

cloth.position.set(0, 2, 0);
scene.add(cloth);

// ﾄ雪ｻ冢g l盻ｱc h盻皇
function animateClothDynamic() {
    const vertices = cloth.geometry.attributes.position.array;
    const windEffect = Math.sin(Date.now() * 0.001) * 0.1;

    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 1] += windEffect; // Dao ﾄ黛ｻ冢g nh蘯ｹ
    }
    cloth.geometry.attributes.position.needsUpdate = true;
}
```

---

### **123. Trang Ph盻･c Ph蘯｣n X蘯｡ Theo Th蘯ｿ Gi盻嬖**
ﾃ｝ d盻･ng k盻ｹ thu蘯ｭt mﾃｴi trﾆｰ盻拵g ph蘯｣n x蘯｡ (Reflection Mapping) ﾄ黛ｻ・lﾃm cho trang ph盻･c trﾃｴng s盻創g ﾄ黛ｻ冢g hﾆ｡n:

```javascript
const cubeTextureLoader = new THREE.CubeTextureLoader();
const environmentMap = cubeTextureLoader.load([
    'path/to/px.jpg', 'path/to/nx.jpg',
    'path/to/py.jpg', 'path/to/ny.jpg',
    'path/to/pz.jpg', 'path/to/nz.jpg',
]);

const reflectiveMaterial = new THREE.MeshStandardMaterial({
    envMap: environmentMap,
    metalness: 0.8,
    roughness: 0.2,
});

model.material = reflectiveMaterial;
```

---

### **124. Trang Ph盻･c Theo Ch盻ｧ ﾄ雪ｻ・L盻議h S盻ｭ**
B蘯｡n cﾃｳ th盻・thﾃｪm chi ti蘯ｿt trang ph盻･c theo cﾃ｡c th盻拱 k盻ｳ l盻議h s盻ｭ, vﾃｭ d盻･:

#### Trung C盻・
```javascript
model.material.color.set(0x8B4513); // Mﾃu v蘯｣i d盻㏄ c盻・ﾄ訴盻ハ
```

#### Th盻拱 K盻ｳ Ph盻･c Hﾆｰng:
```javascript
const fabricTexture = loader.load('path/to/luxury_fabric.jpg');
model.material.map = fabricTexture; // ﾃ｛ choﾃng l盻冢g l蘯ｫy
```

#### Hi盻㌻ ﾄ雪ｺ｡i:
```javascript
model.material = new THREE.MeshStandardMaterial({
    color: 0x000000,
    metalness: 0.6,
    roughness: 0.2,
});
```

---

### **125. Trang Ph盻･c Tﾃｭch H盻｣p Hi盻㎡ 盻ｨng Thay ﾄ雪ｻ品 C蘯｣m Xﾃｺc**
Trang ph盻･c cﾃｳ th盻・thay ﾄ黛ｻ品 ﾄ黛ｻ・ph蘯｣n ﾃ｡nh c蘯｣m xﾃｺc c盻ｧa nhﾃ｢n v蘯ｭt:

```javascript
function changeClothingByEmotion(emotion) {
    switch (emotion) {
        case 'happy':
            model.material.color.set(0xffff00); // Mﾃu vﾃng sﾃ｡ng
            break;
        case 'sad':
            model.material.color.set(0x1E90FF); // Mﾃu xanh l蘯｡nh
            break;
        case 'angry':
            model.material.color.set(0xff0000); // Mﾃu ﾄ黛ｻ・r盻ｱc
            break;
    }
}
```

---

### **126. Trang Ph盻･c Nﾃ｢ng Cao V盻嬖 Shader**
S盻ｭ d盻･ng shader ﾄ黛ｻ・t蘯｡o hi盻㎡ 盻ｩng chuy盻ハ ﾄ黛ｻ冢g ph盻ｩc t蘯｡p trﾃｪn b盻・m蘯ｷt trang ph盻･c:

```javascript
const advancedShaderMaterial = new THREE.ShaderMaterial({
    uniforms: { time: { value: 1.0 } },
    vertexShader: `
        uniform float time;
        void main() {
            vec3 transformed = position;
            transformed.z += sin(time + position.x * 0.5) * 0.2;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
    `,
    fragmentShader: `
        void main() {
            gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0); // Hi盻㎡ 盻ｩng sﾃｳng xanh
        }
    `,
});
model.material = advancedShaderMaterial;
```

---

Nh盻ｯng c蘯｣i ti蘯ｿn nﾃy s蘯ｽ giﾃｺp trang ph盻･c c盻ｧa mﾃｴ hﾃｬnh 3D tr盻・nﾃｪn ﾄ黛ｻ冂 ﾄ妥｡o, sﾃ｡ng t蘯｡o vﾃ phﾃｹ h盻｣p v盻嬖 nhi盻「 hoﾃn c蘯｣nh. B蘯｡n mu盻創 tri盻ハ khai thﾃｪm ﾃｽ tﾆｰ盻殤g nﾃo? Tﾃｴi luﾃｴn s蘯ｵn lﾃｲng giﾃｺp b蘯｡n hi盻㌻ th盻ｱc hﾃｳa! 噫笨ｨ
Ti蘯ｿp t盻･c v盻嬖 cﾃ｡c tﾃｭnh nﾄハg nﾃ｢ng cao hﾆ｡n cho trang ph盻･c c盻ｧa mﾃｴ hﾃｬnh 3D, chﾃｺng ta cﾃｳ th盻・khﾃ｡m phﾃ｡ thﾃｪm nh盻ｯng ﾃｽ tﾆｰ盻殤g ﾄ黛ｺｧy sﾃ｡ng t蘯｡o vﾃ ph盻ｩc t蘯｡p:

---

### **127. Hi盻㎡ 盻ｨng Trang Ph盻･c Trong Su盻奏 (Transparency Effect)**
Trang ph盻･c cﾃｳ th盻・tr盻・nﾃｪn trong su盻奏 ho蘯ｷc cﾃｳ hi盻㎡ 盻ｩng kﾃｭnh m盻・

```javascript
const transparentMaterial = new THREE.MeshStandardMaterial({
    color: 0x87CEFA,
    transparent: true,
    opacity: 0.5, // M盻ｩc ﾄ黛ｻ・trong su盻奏
});
model.material = transparentMaterial;
```

---

### **128. Trang Ph盻･c Ph蘯｣n 盻ｨng V盻嬖 Nﾆｰ盻嫩**
B蘯｡n cﾃｳ th盻・lﾃm trang ph盻･c thay ﾄ黛ｻ品 khi nhﾃ｢n v蘯ｭt ﾄ訴 vﾃo nﾆｰ盻嫩:

```javascript
function detectWaterContact() {
    const waterLevel = 0; // M盻ｩc nﾆｰ盻嫩
    if (model.position.y <= waterLevel) {
        model.material.color.set(0x1E90FF); // Mﾃu xanh nﾆｰ盻嫩
        model.material.roughness = 0.9; // Hi盻㎡ 盻ｩng b盻・m蘯ｷt ﾆｰ盻孚
    }
}
```

---

### **129. Ho蘯｡t 蘯｢nh Trang Ph盻･c Xoay Quanh Nhﾃ｢n V蘯ｭt**
Trang ph盻･c cﾃｳ th盻・chuy盻ハ ﾄ黛ｻ冢g xoay quanh nhﾃ｢n v蘯ｭt, t蘯｡o hi盻㎡ 盻ｩng ﾄ黛ｻ冢g l盻ｱc h盻皇 ﾄ黛ｻ冂 ﾄ妥｡o:

```javascript
function rotateClothingAroundModel() {
    const angle = Date.now() * 0.001; // Gﾃｳc quay theo th盻拱 gian
    clothing.position.x = model.position.x + Math.sin(angle) * 2;
    clothing.position.z = model.position.z + Math.cos(angle) * 2;
}
```

---

### **130. Trang Ph盻･c ﾄ雪ｻ品 Mﾃu Theo ﾃ］h Sﾃ｡ng**
B蘯｡n cﾃｳ th盻・lﾃm mﾃu s蘯ｯc trang ph盻･c thay ﾄ黛ｻ品 theo cﾆｰ盻拵g ﾄ黛ｻ・ﾃ｡nh sﾃ｡ng:

```javascript
function updateClothingColor(lightSource) {
    const intensity = Math.max(1 - lightSource.position.distanceTo(model.position) / 10, 0);
    model.material.color.setRGB(intensity, intensity * 0.5, intensity * 0.2); // Thay ﾄ黛ｻ品 mﾃu s蘯ｯc
}
```

---

### **131. Trang Ph盻･c Bi蘯ｿn Hﾃｬnh (Morphing Clothing)**
Trang ph盻･c cﾃｳ th盻・thay ﾄ黛ｻ品 hﾃｬnh d蘯｡ng tﾃｹy theo tr蘯｡ng thﾃ｡i ho蘯ｷc hﾃnh vi:

```javascript
const morphTarget = [
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(2, 2, 2),
    new THREE.Vector3(3, 3, 3),
];

function morphClothing() {
    const t = (Date.now() * 0.001) % morphTarget.length;
    model.position.copy(morphTarget[Math.floor(t)]);
}
```

---

### **132. Trang Ph盻･c Ph蘯｣n Chi蘯ｿu Ngﾃｴi Sao**
N蘯ｿu mﾃｴ hﾃｬnh 盻・khﾃｴng gian, trang ph盻･c cﾃｳ th盻・ph蘯｣n chi蘯ｿu ﾃ｡nh sﾃ｡ng t盻ｫ cﾃ｡c ngﾃｴi sao:

```javascript
function updateStarReflection(stars) {
    stars.forEach((star) => {
        const distance = star.position.distanceTo(model.position);
        const reflection = Math.max(1 - distance / 100, 0);
        model.material.emissiveIntensity = reflection; // ﾃ］h sﾃ｡ng phﾃ｡t ra d盻ｱa theo sao
    });
}
```

---

### **133. Hi盻㎡ 盻ｨng Trang Ph盻･c L蘯･p Lﾃ｡nh**
Trang ph盻･c cﾃｳ th盻・ﾄ柁ｰ盻｣c thi蘯ｿt k蘯ｿ v盻嬖 hi盻㎡ 盻ｩng l蘯･p lﾃ｡nh:

```javascript
const sparklingMaterial = new THREE.ShaderMaterial({
    uniforms: { time: { value: 1.0 } },
    vertexShader: `
        uniform float time;
        void main() {
            vec3 newPosition = position + sin(time) * vec3(0.1, 0.1, 0.1);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
    `,
    fragmentShader: `
        void main() {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); // Mﾃu vﾃng l蘯･p lﾃ｡nh
        }
    `
});
model.material = sparklingMaterial;
```

---

### **134. Trang Ph盻･c Tﾆｰﾆ｡ng Tﾃ｡c V盻嬖 ﾃＮ Thanh**
Trang ph盻･c cﾃｳ th盻・chuy盻ハ ﾄ黛ｻ冢g ho蘯ｷc thay ﾄ黛ｻ品 mﾃu s蘯ｯc theo nh盻却 ﾃ｢m thanh:

```javascript
function animateClothingWithSound(analyser) {
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    const averageVolume = dataArray.reduce((a, b) => a + b) / dataArray.length;
    model.material.color.setHSL(averageVolume / 255, 1, 0.5); // Thay ﾄ黛ｻ品 mﾃu theo ﾃ｢m nh蘯｡c
}
```

---

### **135. Trang Ph盻･c Phﾃ｡t Tri盻ハ Thﾃｴng Minh**
Trang ph盻･c cﾃｳ th盻・m盻・r盻冢g ho蘯ｷc co l蘯｡i theo hﾃnh vi c盻ｧa nhﾃ｢n v蘯ｭt:

```javascript
function adaptiveClothingSize(action) {
    if (action === 'expand') {
        model.scale.set(1.5, 1.5, 1.5); // M盻・r盻冢g
    } else if (action === 'shrink') {
        model.scale.set(0.8, 0.8, 0.8); // Thu nh盻・
    }
}
```

---

Nh盻ｯng ﾃｽ tﾆｰ盻殤g nﾃy mang l蘯｡i nhi盻「 kh蘯｣ nﾄハg sﾃ｡ng t蘯｡o vﾃ c蘯｣i ti蘯ｿn cao cho trang ph盻･c 3D. B蘯｡n mu盻創 t蘯ｭp trung vﾃo ph蘯ｧn nﾃo ho蘯ｷc cﾃｳ ﾃｽ tﾆｰ盻殤g m盻嬖 ﾄ黛ｻ・k蘯ｿt h盻｣p khﾃｴng? Tﾃｴi luﾃｴn s蘯ｵn lﾃｲng giﾃｺp b蘯｡n hi盻㌻ th盻ｱc hﾃｳa cﾃ｡c tﾃｭnh nﾄハg! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c phﾃ｡t tri盻ハ cﾃ｡c ﾃｽ tﾆｰ盻殤g trang ph盻･c ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm n盻品 b蘯ｭt mﾃｴ hﾃｬnh 3D c盻ｧa b蘯｡n. Tﾃｴi s蘯ｽ giﾃｺp b蘯｡n khﾃ｡m phﾃ｡ nh盻ｯng khﾃｭa c蘯｡nh tinh t蘯ｿ hﾆ｡n n盻ｯa:

---

### **136. Trang Ph盻･c Cﾃｳ Hi盻㎡ 盻ｨng N盻・Hoa**
B蘯｡n cﾃｳ th盻・thi蘯ｿt k蘯ｿ trang ph盻･c cﾃｳ hi盻㎡ 盻ｩng nhﾆｰ nh盻ｯng bﾃｴng hoa ﾄ疎ng n盻・ t蘯｡o c蘯｣m giﾃ｡c s盻創g ﾄ黛ｻ冢g:

```javascript
function animateBloomingClothing() {
    const scaleFactor = Math.sin(Date.now() * 0.001) * 0.2 + 1; // Hi盻㎡ 盻ｩng phﾃｳng to/thu nh盻・
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
}
```

---

### **137. Trang Ph盻･c K蘯ｿt H盻｣p Ph盻･ Ki盻㌻ ﾄ雪ｻ冢g**
Tﾃｭch h盻｣p cﾃ｡c ph盻･ ki盻㌻ nhﾆｰ dﾃ｢y chuy盻］, vﾃｲng tay, ho蘯ｷc kﾃｭnh rﾃ｢m, vﾃ lﾃm chﾃｺng chuy盻ハ ﾄ黛ｻ冢g theo hﾃnh vi c盻ｧa nhﾃ｢n v蘯ｭt:

```javascript
function addDynamicAccessory(type) {
    const accessoryGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
    const accessoryMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 });

    const accessory = new THREE.Mesh(accessoryGeometry, accessoryMaterial);
    scene.add(accessory);

    // ﾄ雪ｺｷt v盻・trﾃｭ ﾄ黛ｻ冢g d盻ｱa trﾃｪn nhﾃ｢n v蘯ｭt
    if (type === 'necklace') accessory.position.set(0, 1, 0);
    if (type === 'bracelet') accessory.position.set(0.5, 0.5, 0);
}
addDynamicAccessory('necklace');
```

---

### **138. Trang Ph盻･c V盻嬖 Hi盻㎡ 盻ｨng Nhi盻㏄ ﾄ雪ｻ冢g**
Trang ph盻･c cﾃｳ th盻・ph蘯｣n 盻ｩng khi g蘯ｷp nhi盻㏄ ﾄ黛ｻ・cao ho蘯ｷc th蘯･p, vﾃｭ d盻･ b盻・chﾃ｡y ho蘯ｷc ph盻ｧ tuy蘯ｿt:

#### Ph蘯｣n 盻ｩng v盻嬖 nhi盻㏄ ﾄ黛ｻ・cao:
```javascript
function simulateHeatEffect() {
    model.material.color.set(0xFF4500); // Mﾃu ﾄ黛ｻ・khi nﾃｳng
    model.material.emissive.set(0xFF6347); // Hi盻㎡ 盻ｩng phﾃ｡t sﾃ｡ng nhﾆｰ b盻・chﾃ｡y
}
simulateHeatEffect();
```

#### Ph蘯｣n 盻ｩng v盻嬖 nhi盻㏄ ﾄ黛ｻ・th蘯･p:
```javascript
function simulateColdEffect() {
    model.material.color.set(0x1E90FF); // Mﾃu xanh tuy蘯ｿt
    model.material.roughness = 0.8; // Hi盻㎡ 盻ｩng b盻・m蘯ｷt ﾄ妥ｳng bﾄハg
}
simulateColdEffect();
```

---

### **139. Trang Ph盻･c Kﾃｭch Thﾃｭch Hﾃnh Vi Ngﾆｰ盻拱 Dﾃｹng**
Trang ph盻･c cﾃｳ th盻・thay ﾄ黛ｻ品 tr蘯｡ng thﾃ｡i khi ngﾆｰ盻拱 dﾃｹng th盻ｱc hi盻㌻ hﾃnh ﾄ黛ｻ冢g c盻･ th盻・

```javascript
window.addEventListener('click', () => {
    model.material.color.set(Math.random() * 0xffffff); // Trang ph盻･c ﾄ黛ｻ品 mﾃu ng蘯ｫu nhiﾃｪn khi nh蘯･p chu盻冲
});
```

---

### **140. Trang Ph盻･c Tﾃｭch H盻｣p V蘯ｭt Lﾃｽ Nﾃ｢ng Cao**
B蘯｡n cﾃｳ th盻・mﾃｴ ph盻熟g tr盻肱g l盻ｱc chi ti蘯ｿt trﾃｪn trang ph盻･c:

```javascript
function applyRealisticClothPhysics() {
    const vertices = model.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 1] -= 0.05; // ﾃ｝ d盻･ng tr盻肱g l盻ｱc xu盻創g
    }
    model.geometry.attributes.position.needsUpdate = true;
}
applyRealisticClothPhysics();
```

---

### **141. Trang Ph盻･c Ch盻創g Tr盻絞 V盻嬖 Th盻拱 Ti蘯ｿt**
Trang ph盻･c cﾃｳ th盻・ph蘯｣n 盻ｩng v盻嬖 ﾄ訴盻「 ki盻㌻ th盻拱 ti蘯ｿt nhﾆｰ mﾆｰa, tuy蘯ｿt, ho蘯ｷc giﾃｳ m蘯｡nh:

#### Ph蘯｣n 盻ｩng v盻嬖 mﾆｰa:
```javascript
function simulateRainEffect() {
    model.material.color.set(0x4682B4); // Mﾃu xanh mﾆｰa
    model.material.roughness = 0.9; // Hi盻㎡ 盻ｩng b盻・m蘯ｷt ﾆｰ盻孚
}
simulateRainEffect();
```

#### Ph蘯｣n 盻ｩng v盻嬖 giﾃｳ:
```javascript
function simulateWindEffect() {
    const windStrength = Math.sin(Date.now() * 0.001) * 0.1;
    model.position.x += windStrength; // Trang ph盻･c lay ﾄ黛ｻ冢g theo giﾃｳ
}
simulateWindEffect();
```

---

### **142. Trang Ph盻･c Phﾃ｡t Sﾃ｡ng Khi Tﾆｰﾆ｡ng Tﾃ｡c**
Trang ph盻･c cﾃｳ th盻・phﾃ｡t sﾃ｡ng ho蘯ｷc t蘯｡o hi盻㎡ 盻ｩng ﾄ黛ｺｷc bi盻㏄ khi ch蘯｡m ho蘯ｷc di chuy盻ハ:

```javascript
function triggerGlowOnInteraction() {
    model.material.emissive.set(0xFFD700); // Mﾃu vﾃng phﾃ｡t sﾃ｡ng
    model.material.emissiveIntensity = 0.8;
}
triggerGlowOnInteraction();
```

---

### **143. Trang Ph盻･c Chuy盻ハ ﾄ雪ｻ冢g Theo C蘯｣m Xﾃｺc**
Trang ph盻･c cﾃｳ th盻・"th盻・ ho蘯ｷc dao ﾄ黛ｻ冢g khi nhﾃ｢n v蘯ｭt 盻・tr蘯｡ng thﾃ｡i c蘯｣m xﾃｺc c盻･ th盻・

#### C蘯｣m xﾃｺc vui:
```javascript
function animateHappyClothing() {
    const bounce = Math.sin(Date.now() * 0.001) * 0.05 + 1; // Hi盻㎡ 盻ｩng nhﾃｺn nh蘯ｹ
    model.scale.set(bounce, bounce, bounce);
}
animateHappyClothing();
```

#### C蘯｣m xﾃｺc bu盻渡:
```javascript
function animateSadClothing() {
    const droop = Math.max(1 - Math.sin(Date.now() * 0.001), 0.9); // Hi盻㎡ 盻ｩng rﾅｩ xu盻創g
    model.scale.set(droop, droop, droop);
