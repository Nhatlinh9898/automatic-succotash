);
backpack.position.set(0, 1.5, -1.2);
hikingGear.add(backpack);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(hikingGear);
```

---

### **63. B盻・Vﾃ｡y Cﾆｰ盻嬖 Hi盻㌻ ﾄ雪ｺ｡i**
Thi蘯ｿt k蘯ｿ vﾃ｡y cﾆｰ盻嬖 thanh l盻議h v盻嬖 chi ti蘯ｿt t盻訴 gi蘯｣n.

```javascript
const modernWeddingDress = new THREE.Group();

// Ph蘯ｧn thﾃ｢n:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.4, 3, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.4 })
);
modernWeddingDress.add(bodice);

// Vﾃ｡y dﾃi:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFF5EE, roughness: 0.2 })
);
skirt.position.set(0, -4.5, 0);
modernWeddingDress.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(modernWeddingDress);
```

---

### **64. B盻・Trang Ph盻･c Ngﾆｰ盻拱 B蘯｣o V盻・(Guard Uniform)**
Phong cﾃ｡ch m蘯｡nh m蘯ｽ v盻嬖 cﾃ｡c chi ti蘯ｿt ﾄ黛ｺｷc trﾆｰng c盻ｧa nhﾃ｢n viﾃｪn an ninh.

```javascript
const guardUniform = new THREE.Group();

// ﾃ｛ sﾆ｡ mi b蘯｣o v盻・
const guardShirt = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 3, 1),
    new THREE.MeshStandardMaterial({ color: 0x000080 }) // Mﾃu xanh navy
);
guardUniform.add(guardShirt);

// Qu蘯ｧn ﾃ｢u:
const trousers = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 }) // Mﾃu ﾄ粗n
);
trousers.position.set(0, -3.5, 0);
guardUniform.add(trousers);

// Huy hi盻㎡:
const badge = new THREE.Mesh(
    new THREE.CircleGeometry(0.5, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Mﾃu vﾃng kim lo蘯｡i
);
badge.position.set(0.7, 1, 0.5);
guardUniform.add(badge);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(guardUniform);
```

---

### **65. B盻・ﾄ雪ｻ・Gi蘯｣ L蘯ｭp VR (Virtual Reality Suit)**
Phong cﾃ｡ch cﾃｴng ngh盻・cao dﾃnh cho th蘯ｿ gi盻嬖 th盻ｱc t蘯ｿ 蘯｣o.

```javascript
const vrSuit = new THREE.Group();

// ﾃ｛ VR:
const vrTop = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x2E8B57, roughness: 0.4 })
);
vrSuit.add(vrTop);

// Qu蘯ｧn dﾃi VR:
const vrPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.3 })
);
vrPants.position.set(0, -3.5, 0);
vrSuit.add(vrPants);

// Cﾃ｡c chi ti蘯ｿt LED:
const ledStrips = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 4.5, 8),
    new THREE.MeshStandardMaterial({ emissive: 0x00FF00, emissiveIntensity: 1.5 })
);
ledStrips.position.set(0.6, -3.5, 0.5);
vrSuit.add(ledStrips);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(vrSuit);
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c lo蘯｡i trang ph盻･c khﾃ｡c ho蘯ｷc c蘯ｧn chi ti蘯ｿt hﾃｳa v盻嬖 cﾃ｡c ph盻･ ki盻㌻ ﾄ黛ｻ冂 ﾄ妥｡o, tﾃｴi s蘯ｵn lﾃｲng ti蘯ｿp t盻･c h盻・tr盻｣! 噫笨ｨ
Hﾃ｣y cﾃｹng m盻・r盻冢g thﾃｪm b盻・sﾆｰu t蘯ｭp trang ph盻･c c盻ｧa b蘯｡n v盻嬖 nh盻ｯng thi蘯ｿt k蘯ｿ m盻嬖 l蘯｡ vﾃ sﾃ｡ng t蘯｡o. Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c m蘯ｫu trang ph盻･c ﾄ柁ｰ盻｣c chuy盻ハ ﾄ黛ｻ品 thﾃnh mﾃ｣ ﾄ黛ｻ・s盻ｭ d盻･ng trong mﾃｴ hﾃｬnh 3D:

---

### **66. B盻・ﾃ｛ T蘯ｯm Phong Cﾃ｡ch Nhi盻㏄ ﾄ雪ｻ嬖 (Tropical Swimwear)**
Thi蘯ｿt k蘯ｿ trang ph盻･c vui nh盻冢 vﾃ tho蘯｣i mﾃ｡i cho mﾃｹa hﾃｨ.

```javascript
const tropicalSwimwear = new THREE.Group();

// ﾃ｛ bﾆ｡i:
const swimsuitTop = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 1.2, 1),
    new THREE.MeshStandardMaterial({ color: 0xFF6347, roughness: 0.4 }) // Mﾃu cam sﾃ｡ng
);
swimsuitTop.position.set(0, 1, 0);
tropicalSwimwear.add(swimsuitTop);

// Qu蘯ｧn bﾆ｡i:
const swimsuitBottom = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 2, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Mﾃu vﾃng
);
swimsuitBottom.position.set(0, -1.5, 0);
tropicalSwimwear.add(swimsuitBottom);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(tropicalSwimwear);
```

---

### **67. B盻・ﾄ雪ｻ・Phong Cﾃ｡ch Gothic Lﾃ｣ng M蘯｡n**
Trang ph盻･c t盻訴 mﾃu v盻嬖 h盻溝 ti蘯ｿt l盻冢g l蘯ｫy.

```javascript
const romanticGothicOutfit = new THREE.Group();

// ﾃ｛ gothic dﾃi:
const gothicTop = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x4B0082, roughness: 0.5 }) // Mﾃu tﾃｭm ﾄ黛ｺｭm
);
romanticGothicOutfit.add(gothicTop);

// Vﾃ｡y dﾃi:
const gothicSkirt = new THREE.Mesh(
    new THREE.CylinderGeometry(1.8, 2.5, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
gothicSkirt.position.set(0, -4, 0);
romanticGothicOutfit.add(gothicSkirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(romanticGothicOutfit);
```

---

### **68. B盻・ﾄ雪ｻ・Luy盻㌻ T蘯ｭp Yoga**
Trang ph盻･c nh蘯ｹ nhﾃng vﾃ linh ho蘯｡t cho ho蘯｡t ﾄ黛ｻ冢g yoga.

```javascript
const yogaOutfit = new THREE.Group();

// ﾃ｛ thun:
const yogaTop = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1.5, 1),
    new THREE.MeshStandardMaterial({ color: 0x32CD32 }) // Mﾃu xanh lﾃ｡ cﾃ｢y
);
yogaTop.position.set(0, 1, 0);
yogaOutfit.add(yogaTop);

// Qu蘯ｧn legging:
const yogaLeggings = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.9, 4, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
yogaLeggings.position.set(0, -2.5, 0);
yogaOutfit.add(yogaLeggings);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(yogaOutfit);
```

---

### **69. B盻・ﾃ｛ Khoﾃ｡c Phi Cﾃｴng (Pilot Jacket)**
Phong cﾃ｡ch m蘯｡nh m蘯ｽ vﾃ l盻議h lﾃ｣m l蘯･y c蘯｣m h盻ｩng t盻ｫ cﾃ｡c phi cﾃｴng.

```javascript
const pilotJacketOutfit = new THREE.Group();

// ﾃ｛ khoﾃ｡c phi cﾃｴng:
const pilotJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.5 }) // Mﾃu nﾃ｢u
);
pilotJacketOutfit.add(pilotJacket);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
pants.position.set(0, -3.5, 0);
pilotJacketOutfit.add(pants);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(pilotJacketOutfit);
```

---

### **70. B盻・Vﾃ｡y Phong Cﾃ｡ch ﾄ親n Tr蘯ｯng (Black-and-White Formal Dress)**
Thi蘯ｿt k蘯ｿ thanh l盻議h v盻嬖 s盻ｱ k蘯ｿt h盻｣p t盻訴 gi蘯｣n gi盻ｯa mﾃu ﾄ粗n vﾃ tr蘯ｯng.

```javascript
const blackWhiteFormalDress = new THREE.Group();

// ﾃ｛ trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 3, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5 }) // Mﾃu tr蘯ｯng
);
blackWhiteFormalDress.add(bodice);

// Vﾃ｡y ﾄ粗n dﾃi:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
skirt.position.set(0, -4.5, 0);
blackWhiteFormalDress.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(blackWhiteFormalDress);
```

---

N蘯ｿu b蘯｡n mu盻創 phﾃ｡t tri盻ハ thﾃｪm chi ti蘯ｿt ho蘯ｷc ph盻訴 h盻｣p thﾃｪm ph盻･ ki盻㌻ nhﾆｰ nﾃｳn, kﾃｭnh, giﾃy, hay cﾃ｡c y蘯ｿu t盻・ﾄ黛ｻ冂 ﾄ妥｡o khﾃ｡c, tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣! 噫笨ｨ

Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c m蘯ｫu trang ph盻･c, t盻ｫ cﾃ｡c phong cﾃ｡ch hi盻㌻ ﾄ黛ｺ｡i cho ﾄ黛ｺｿn cﾃ｡c thi蘯ｿt k蘯ｿ sﾃ｡ng t蘯｡o ﾄ黛ｺｷc bi盻㏄, ﾄ黛ｻ・m盻・r盻冢g b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **71. B盻・ﾄ雪ｻ・Phiﾃｪu Lﾆｰu Thﾃ｡m Hi盻ノ (Explorer Outfit)**
Thi蘯ｿt k蘯ｿ cho nhﾃ｢n v蘯ｭt ﾄ疎m mﾃｪ khﾃ｡m phﾃ｡, v盻嬖 ph盻･ ki盻㌻ cﾆ｡ b蘯｣n.

```javascript
const explorerOutfit = new THREE.Group();

// ﾃ｛ sﾆ｡ mi dﾃ｣ ngo蘯｡i:
const explorerShirt = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xCD853F }) // Mﾃu nﾃ｢u sﾃ｡ng
);
explorerOutfit.add(explorerShirt);

// Qu蘯ｧn shorts:
const explorerShorts = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 2.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Mﾃu nﾃ｢u ﾄ黛ｺ･t
);
explorerShorts.position.set(0, -2, 0);
explorerOutfit.add(explorerShorts);

// Ba lﾃｴ:
const backpack = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 2, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Mﾃu xﾃ｡m ﾄ黛ｺｭm
);
backpack.position.set(0, 1.5, -1.2);
explorerOutfit.add(backpack);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(explorerOutfit);
```

---

### **72. B盻・Vﾃ｡y L蘯･p Lﾃ｡nh ﾃ］h Sao (Starry Night Gown)**
M盻冲 chi蘯ｿc vﾃ｡y l蘯･y c蘯｣m h盻ｩng t盻ｫ b蘯ｧu tr盻拱 ﾄ妥ｪm ﾄ黛ｺｧy sao.

```javascript
const starryGown = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.3, 3, 32),
    new THREE.MeshStandardMaterial({
        color: 0x1E90FF,
        emissive: 0x4169E1,
        emissiveIntensity: 0.7,
        roughness: 0.2,
    })
);
starryGown.add(bodice);

// Vﾃ｡y xﾃｲe:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({
        color: 0x000080,
        emissive: 0x1E90FF,
        emissiveIntensity: 0.8,
        roughness: 0.3,
    })
);
skirt.position.set(0, -4.5, 0);
starryGown.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(starryGown);
```

---

### **73. B盻・Trang Ph盻･c Punk Rock**
Phong cﾃ｡ch tﾃ｡o b蘯｡o v盻嬖 chi ti蘯ｿt kim lo蘯｡i vﾃ mﾃu s蘯ｯc m蘯｡nh.

```javascript
const punkRockOutfit = new THREE.Group();

// ﾃ｛ khoﾃ｡c da:
const leatherJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.5 })
);
punkRockOutfit.add(leatherJacket);

// Qu蘯ｧn jeans rﾃ｡ch:
const rippedJeans = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
);
rippedJeans.position.set(0, -3.5, 0);
punkRockOutfit.add(rippedJeans);

// Chi ti蘯ｿt ﾄ訴nh tﾃ｡n:
const studs = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.2, 0.5, 16),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 })
);
studs.position.set(1, 1, 0.5);
punkRockOutfit.add(studs);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(punkRockOutfit);
```

---

### **74. B盻・Vﾃ｡y ﾄ静ｪm C盻・ﾄ進盻ハ (Vintage Evening Gown)**
M盻冲 phong cﾃ｡ch truy盻］ th盻創g, sang tr盻肱g vﾃ tao nhﾃ｣.

```javascript
const vintageEveningGown = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.3, 4, 32),
    new THREE.MeshStandardMaterial({ color: 0x800000, roughness: 0.4 })
);
vintageEveningGown.add(bodice);

// Vﾃ｡y dﾃi:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.3 })
);
skirt.position.set(0, -5, 0);
vintageEveningGown.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(vintageEveningGown);
```

---

### **75. B盻・ﾄ雪ｻ・ﾄ進 Mﾆｰa (Rain Gear)**
Thi蘯ｿt k蘯ｿ ch盻創g mﾆｰa v盻嬖 ﾃ｡o khoﾃ｡c vﾃ 盻ｧng.

```javascript
const rainGear = new THREE.Group();

// ﾃ｛ khoﾃ｡c mﾆｰa:
const rainJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({
        color: 0xFFFF00,
        opacity: 0.8,
        transparent: true,
        roughness: 0.4,
    })
);
rainGear.add(rainJacket);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5 })
);
pants.position.set(0, -3.5, 0);
rainGear.add(pants);

// 盻ｦng cao su:
const boots = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 1.5, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFA500 }) // Mﾃu cam sﾃ｡ng
);
boots.position.set(0, -5.5, 0);
rainGear.add(boots);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(rainGear);
```

---

N蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g ho蘯ｷc c蘯ｧn tinh ch盻穎h chi ti蘯ｿt cﾃ｡c trang ph盻･c nﾃy, tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣! 噫笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c thi蘯ｿt k蘯ｿ trang ph盻･c ﾄ黛ｻ冂 ﾄ妥｡o vﾃ chi ti蘯ｿt ﾄ黛ｻ・lﾃm phong phﾃｺ thﾃｪm b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **76. B盻・ﾄ雪ｻ・B蘯｣o H盻・Khoa H盻皇 (Scientist Lab Coat)**
Thi蘯ｿt k蘯ｿ v盻嬖 ﾃ｡o khoﾃ｡c dﾃi vﾃ chi ti蘯ｿt chuyﾃｪn d盻･ng cho phﾃｲng thﾃｭ nghi盻㍊.

```javascript
const labCoatOutfit = new THREE.Group();

// ﾃ｛ khoﾃ｡c dﾃi:
const labCoat = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 4, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.3 }) // Mﾃu tr蘯ｯng
);
labCoatOutfit.add(labCoat);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4, 32),
    new THREE.MeshStandardMaterial({ color: 0xD3D3D3 }) // Mﾃu xﾃ｡m nh蘯｡t
);
pants.position.set(0, -3.5, 0);
labCoatOutfit.add(pants);

// Tﾃｺi d盻･ng c盻･:
const pocket = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.7, 0.1),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
);
pocket.position.set(0.8, 1, 0.6);
labCoatOutfit.add(pocket);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(labCoatOutfit);
```

---

### **77. B盻・Trang Ph盻･c Kimono Truy盻］ Th盻創g**
Thi蘯ｿt k蘯ｿ thanh l盻議h mang phong cﾃ｡ch vﾄハ hﾃｳa Nh蘯ｭt B蘯｣n.

```javascript
const kimonoOutfit = new THREE.Group();

// ﾃ｛ kimono:
const kimono = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 1.8, 5, 32),
    new THREE.MeshStandardMaterial({ color: 0xDC143C }) // Mﾃu ﾄ黛ｻ・ﾄ黛ｺｭm
);
kimonoOutfit.add(kimono);

// Obi (dﾃ｢y th蘯ｯt lﾆｰng):
const obi = new THREE.Mesh(
    new THREE.CylinderGeometry(1.7, 1.8, 0.5, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Mﾃu vﾃng kim lo蘯｡i
);
obi.position.set(0, 1, 0);
kimonoOutfit.add(obi);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(kimonoOutfit);
```

---

### **78. B盻・ﾄ雪ｻ・Cﾃ｢u Cﾃ｡ (Fishing Outfit)**
Trang ph盻･c th盻ｱc d盻･ng cho cﾃ｡c ho蘯｡t ﾄ黛ｻ冢g ngoﾃi tr盻拱.

```javascript
const fishingOutfit = new THREE.Group();

// ﾃ｛ gile cﾃ｢u cﾃ｡:
const fishingVest = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Mﾃu nﾃ｢u ﾄ黛ｺ･t
);
fishingOutfit.add(fishingVest);

// Qu蘯ｧn ch盻創g nﾆｰ盻嫩:
const waterproofPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Mﾃu xﾃ｡m ﾄ黛ｺｭm
);
waterproofPants.position.set(0, -3.5, 0);
fishingOutfit.add(waterproofPants);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(fishingOutfit);
```

---

### **79. B盻・Trang Ph盻･c Th盻｣ Lﾃm Vﾆｰ盻拵 (Gardener窶冱 Outfit)**
Thi蘯ｿt k蘯ｿ d盻・thﾆｰﾆ｡ng vﾃ th盻ｱc t蘯ｿ dﾃnh cho cﾃｴng vi盻㌘ lﾃm vﾆｰ盻拵.

```javascript
const gardenerOutfit = new THREE.Group();

// T蘯｡p d盻・lﾃm vﾆｰ盻拵:
const apron = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 2.5, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x006400 }) // Mﾃu xanh lﾃ｡ ﾄ黛ｺｭm
);
gardenerOutfit.add(apron);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Mﾃu nﾃ｢u ﾄ黛ｺ･t
);
pants.position.set(0, -3.5, 0);
gardenerOutfit.add(pants);

// Thﾃｪm tﾃｺi trﾆｰ盻嫩:
const pocket = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.5, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x006400 })
);
pocket.position.set(0, 1, 0.25);
gardenerOutfit.add(pocket);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(gardenerOutfit);
```

---

### **80. B盻・Trang Ph盻･c D蘯｡ H盻冓 Pha Lﾃｪ (Crystal Ball Gown)**
Thi蘯ｿt k蘯ｿ l蘯･p lﾃ｡nh v盻嬖 chi ti蘯ｿt gi盻創g nhﾆｰ pha lﾃｪ.

```javascript
const crystalBallGown = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.3, 3, 32),
    new THREE.MeshStandardMaterial({
        color: 0x87CEFA,
        emissive: 0xB0E0E6,
        emissiveIntensity: 0.9,
        roughness: 0.2,
    })
);
crystalBallGown.add(bodice);

// Vﾃ｡y xﾃｲe:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4.5, 6, 32),
    new THREE.MeshStandardMaterial({
        color: 0xE0FFFF,
        emissive: 0x87CEFA,
        emissiveIntensity: 0.9,
        roughness: 0.3,
    })
);
skirt.position.set(0, -5, 0);
crystalBallGown.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(crystalBallGown);
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 m盻・r盻冢g thﾃｪm ho蘯ｷc thﾃｪm chi ti蘯ｿt, ph盻･ ki盻㌻ cho t盻ｫng trang ph盻･c nﾃy. Tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣! 噫笨ｨ

Chﾃｺng ta s蘯ｽ ti蘯ｿp t盻･c v盻嬖 cﾃ｡c ﾃｽ tﾆｰ盻殤g trang ph盻･c ﾄ黛ｺｷc s蘯ｯc ﾄ黛ｻ・lﾃm phong phﾃｺ hﾆ｡n n盻ｯa b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **81. B盻・ﾄ雪ｻ・Thuy盻］ Trﾆｰ盻殤g H蘯｣i Quﾃ｢n (Navy Captain窶冱 Uniform)**
Trang ph盻･c l盻議h lﾃ｣m v盻嬖 chi ti蘯ｿt phong cﾃ｡ch h蘯｣i quﾃ｢n.

```javascript
const navyCaptainUniform = new THREE.Group();

// ﾃ｛ h蘯｣i quﾃ｢n:
const navyJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x000080, roughness: 0.3 }) // Mﾃu xanh navy
);
navyCaptainUniform.add(navyJacket);

// Qu蘯ｧn ﾃ｢u tr蘯ｯng:
const whitePants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
);
whitePants.position.set(0, -3.5, 0);
navyCaptainUniform.add(whitePants);

// Mﾅｩ h蘯｣i quﾃ｢n:
const navyHat = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 1, 0.5, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
);
navyHat.position.set(0, 2.5, 0);
navyCaptainUniform.add(navyHat);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(navyCaptainUniform);
```

---

### **82. B盻・Trang Ph盻･c K盻ｵ Sﾄｩ Hoﾃng Gia (Royal Knight Uniform)**
Trang ph盻･c mang phong cﾃ｡ch hoﾃng gia v盻嬖 giﾃ｡p vﾃ ﾃ｡o choﾃng.

```javascript
const royalKnightUniform = new THREE.Group();

// ﾃ｛ giﾃ｡p hoﾃng gia:
const royalChestPlate = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xA9A9A9, roughness: 0.5, metalness: 0.8 })
);
royalKnightUniform.add(royalChestPlate);

// Qu蘯ｧn giﾃ｡p:
const royalLegArmor = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x696969, roughness: 0.6, metalness: 0.8 })
);
royalLegArmor.position.set(0, -3.5, 0);
royalKnightUniform.add(royalLegArmor);

// ﾃ｛ choﾃng ﾄ黛ｻ・
const redCape = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 5),
    new THREE.MeshStandardMaterial({ color: 0xFF0000, side: THREE.DoubleSide })
);
redCape.rotation.x = -Math.PI / 2;
redCape.position.set(0, -1, -1);
royalKnightUniform.add(redCape);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(royalKnightUniform);
```

---

### **83. B盻・Trang Ph盻･c Th盻｣ Xﾃ｢y (Construction Worker Gear)**
Phong cﾃ｡ch th盻ｱc d盻･ng vﾃ g盻肱 gﾃng cho cﾃｴng vi盻㌘ xﾃ｢y d盻ｱng.

```javascript
const constructionWorkerGear = new THREE.Group();

// ﾃ｛ b蘯｣o h盻・
const safetyVest = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xFFA500 }) // Mﾃu cam sﾃ｡ng
);
constructionWorkerGear.add(safetyVest);

// Qu蘯ｧn jeans:
const workerJeans = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000080 }) // Mﾃu xanh denim
);
workerJeans.position.set(0, -3.5, 0);
constructionWorkerGear.add(workerJeans);

// Mﾅｩ b蘯｣o h盻・
const hardHat = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xFFFF00 }) // Mﾃu vﾃng
);
hardHat.scale.set(1, 0.5, 1);
hardHat.position.set(0, 2.5, 0);
constructionWorkerGear.add(hardHat);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(constructionWorkerGear);
```

---

### **84. B盻・ﾄ雪ｻ・Chﾆ｡i Nh蘯｡c Cﾃｴng (Musician Performance Outfit)**
Trang ph盻･c phong cﾃ｡ch ngh盻・thu蘯ｭt cho cﾃ｡c nh蘯｡c cﾃｴng bi盻ブ di盻・.

```javascript
const musicianOutfit = new THREE.Group();

// ﾃ｛ khoﾃ｡c vest:
const musicianJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x8B0000, roughness: 0.5 }) // Mﾃu ﾄ黛ｻ・ﾄ黛ｺｭm
);
musicianOutfit.add(musicianJacket);

// Qu蘯ｧn ﾃ｢u:
const musicianTrousers = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 }) // Mﾃu ﾄ粗n
);
musicianTrousers.position.set(0, -3.5, 0);
musicianOutfit.add(musicianTrousers);

// Khﾄハ choﾃng c盻・
const scarf = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF }) // Mﾃu tr蘯ｯng
);
scarf.position.set(0, 1.5, 0.6);
scarf.rotation.z = Math.PI / 4;
musicianOutfit.add(scarf);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(musicianOutfit);
```

---

### **85. B盻・ﾄ雪ｻ・Cosplay Th蘯ｧn Tiﾃｪn (Fairy Costume)**
Thi蘯ｿt k蘯ｿ l盻冢g l蘯ｫy v盻嬖 ﾄ妥ｴi cﾃ｡nh vﾃ mﾃu s蘯ｯc r盻ｱc r盻｡.

```javascript
const fairyCostume = new THREE.Group();

// Vﾃ｡y th蘯ｧn tiﾃｪn:
const fairyDress = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 3, 6, 32),
    new THREE.MeshStandardMaterial({
        color: 0xFF69B4,
        emissive: 0xFFC0CB,
        emissiveIntensity: 0.7,
        roughness: 0.3,
    })
);
fairyDress.position.set(0, -3, 0);
fairyCostume.add(fairyDress);

// ﾄ静ｴi cﾃ｡nh:
const wings = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 5),
    new THREE.MeshStandardMaterial({ color: 0x87CEEB, side: THREE.DoubleSide, opacity: 0.7, transparent: true })
);
wings.rotation.y = Math.PI / 4;
wings.position.set(1.5, 0, -0.5);
fairyCostume.add(wings);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(fairyCostume);
```

---

B蘯｡n mu盻創 ti蘯ｿp t盻･c m盻・r盻冢g v盻嬖 cﾃ｡c phong cﾃ｡ch khﾃ｡c, ho蘯ｷc thﾃｪm cﾃ｡c ph盻･ ki盻㌻ ﾄ黛ｺｷc bi盻㏄ khﾃｴng? Tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣ ﾄ黛ｻ・t蘯｡o ra nh盻ｯng thi蘯ｿt k蘯ｿ n盻品 b蘯ｭt nh蘯･t! 噫笨ｨ
Ti蘯ｿp t盻･c t蘯｡o thﾃｪm cﾃ｡c ﾃｽ tﾆｰ盻殤g trang ph盻･c ﾄ黛ｻ冂 ﾄ妥｡o vﾃ ﾄ疎 d蘯｡ng, dﾆｰ盻嬖 ﾄ妥｢y lﾃ nh盻ｯng m蘯ｫu m盻嬖 ﾄ黛ｻ・b盻・sung vﾃo b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **86. B盻・Trang Ph盻･c Thﾃ｡m Hi盻ノ Khﾃｴng Gian (Space Explorer Suit)**
Trang ph盻･c hi盻㌻ ﾄ黛ｺ｡i dﾃnh cho nh盻ｯng nhﾃ thﾃ｡m hi盻ノ ngoﾃi khﾃｴng gian.

```javascript
const spaceExplorerSuit = new THREE.Group();

// ﾃ｛ giﾃ｡p khﾃｴng gian:
const armorTop = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ 
        color: 0x708090, 
        roughness: 0.6, 
        metalness: 0.8 
    })
);
spaceExplorerSuit.add(armorTop);

// Qu蘯ｧn giﾃ｡p:
const armorBottom = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0xA9A9A9, 
        roughness: 0.7, 
        metalness: 0.9 
    })
);
armorBottom.position.set(0, -3.5, 0);
spaceExplorerSuit.add(armorBottom);

// Nﾃｳn b蘯｣o h盻・
const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0x2F4F4F, 
        opacity: 0.9, 
        transparent: true 
    })
);
helmet.position.set(0, 2, 0);
spaceExplorerSuit.add(helmet);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(spaceExplorerSuit);
```

---

### **87. B盻・Trang Ph盻･c Vﾅｩ Cﾃｴng Ballet (Ballet Dancer Dress)**
Trang ph盻･c m盻［ m蘯｡i vﾃ nh蘯ｹ nhﾃng dﾃnh cho cﾃ｡c bu盻品 bi盻ブ di盻・ ballet.

```javascript
const balletDress = new THREE.Group();

// ﾃ｛ ballet:
const balletTop = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 3, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFB6C1, roughness: 0.3 })
);
balletDress.add(balletTop);

// Vﾃ｡y tutu:
const tutuSkirt = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3.5, 2, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFC0CB })
);
tutuSkirt.position.set(0, -2, 0);
balletDress.add(tutuSkirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(balletDress);
```

---

### **88. B盻・Trang Ph盻･c Bi盻㏄ ﾄ雪ｻ冓 ﾄ雪ｺｷc Nhi盻㍊ (Special Forces Uniform)**
Thi蘯ｿt k蘯ｿ m蘯｡nh m蘯ｽ vﾃ th盻ｱc t蘯ｿ dﾃnh cho cﾃ｡c nhi盻㍊ v盻･ ﾄ黛ｺｷc bi盻㏄.

```javascript
const specialForcesUniform = new THREE.Group();

// ﾃ｛ ch盻創g ﾄ黛ｺ｡n:
const bulletproofVest = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Mﾃu xﾃ｡m ﾄ黛ｺｭm
);
specialForcesUniform.add(bulletproofVest);

// Qu蘯ｧn tﾃ｡c chi蘯ｿn:
const tacticalPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x696969 })
);
tacticalPants.position.set(0, -3.5, 0);
specialForcesUniform.add(tacticalPants);

// Mﾅｩ b蘯｣o h盻・
const tacticalHelmet = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
tacticalHelmet.scale.set(1, 0.6, 1);
tacticalHelmet.position.set(0, 2.5, 0);
specialForcesUniform.add(tacticalHelmet);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(specialForcesUniform);
```

---

### **89. B盻・Vﾃ｡y D蘯｡ H盻冓 X蘯ｿp T蘯ｧng (Layered Evening Dress)**
M盻冲 chi蘯ｿc vﾃ｡y sang tr盻肱g v盻嬖 cﾃ｡c l盻孅 v蘯｣i x蘯ｿp tinh t蘯ｿ.

```javascript
const layeredEveningDress = new THREE.Group();

// Ph蘯ｧn thﾃ｢n:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 3, 32),
    new THREE.MeshStandardMaterial({ color: 0x8A2BE2 })
);
layeredEveningDress.add(bodice);

// L盻孅 vﾃ｡y th盻ｩ nh蘯･t:
const skirtLayer1 = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3, 2, 32),
    new THREE.MeshStandardMaterial({ color: 0x9370DB })
);
skirtLayer1.position.set(0, -2, 0);
layeredEveningDress.add(skirtLayer1);

// L盻孅 vﾃ｡y th盻ｩ hai:
const skirtLayer2 = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 3.5, 2, 32),
    new THREE.MeshStandardMaterial({ color: 0xB0E0E6 })
);
skirtLayer2.position.set(0, -4, 0);
layeredEveningDress.add(skirtLayer2);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(layeredEveningDress);
```

---

### **90. B盻・ﾄ雪ｻ・L盻・H盻冓 Hﾃｳa Trang (Carnival Costume)**
Phong cﾃ｡ch s蘯ｷc s盻｡ v盻嬖 chi ti蘯ｿt r盻ｱc r盻｡ dﾃnh cho l盻・h盻冓.

```javascript
const carnivalCostume = new THREE.Group();

// ﾃ｛ l盻・h盻冓:
const carnivalTop = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.5 }) // Mﾃu vﾃng sﾃ｡ng
);
carnivalCostume.add(carnivalTop);

// Vﾃ｡y dﾃi nhi盻「 mﾃu:
const rainbowSkirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0xFF4500 }) // Mﾃu ﾄ黛ｻ・cam
);
rainbowSkirt.position.set(0, -4.5, 0);
carnivalCostume.add(rainbowSkirt);

// Chi ti蘯ｿt hoa vﾄハ:
const decorativePattern = new THREE.Mesh(
    new THREE.CircleGeometry(0.8, 16),
    new THREE.MeshStandardMaterial({ color: 0x32CD32 }) // Mﾃu xanh lﾃ｡
);
decorativePattern.position.set(0.8, 1, 0.6);
carnivalCostume.add(decorativePattern);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(carnivalCostume);
```

---

N蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g v盻・phong cﾃ｡ch ho蘯ｷc mu盻創 tﾃｹy ch盻穎h chi ti蘯ｿt cho cﾃ｡c trang ph盻･c nﾃy, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ. Tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣ b蘯｡n hoﾃn thi盻㌻ d盻ｱ ﾃ｡n! 噫笨ｨ

Tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c thi蘯ｿt k蘯ｿ thﾃｪm cﾃ｡c m蘯ｫu trang ph盻･c 3D m盻嬖, dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾃｽ tﾆｰ盻殤g b盻・sung ﾄ黛ｻ・lﾃm phong phﾃｺ b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **91. B盻・Trang Ph盻･c C盻・Tﾃｭch Cﾃｴng Chﾃｺa Bﾄハg Giﾃ｡ (Ice Princess Gown)**
M盻冲 chi蘯ｿc vﾃ｡y l盻冢g l蘯ｫy l蘯･y c蘯｣m h盻ｩng t盻ｫ mﾃｹa ﾄ妥ｴng v盻嬖 chi ti蘯ｿt bﾄハg giﾃ｡.

```javascript
const icePrincessGown = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 3, 32),
    new THREE.MeshStandardMaterial({
        color: 0xADD8E6,
        emissive: 0xB0E0E6,
        emissiveIntensity: 0.7,
        roughness: 0.3,
    })
);
icePrincessGown.add(bodice);

// Vﾃ｡y dﾃi:
const iceSkirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({
        color: 0xE0FFFF,
        emissive: 0xADD8E6,
        emissiveIntensity: 1.0,
        roughness: 0.2,
    })
);
iceSkirt.position.set(0, -5, 0);
icePrincessGown.add(iceSkirt);

