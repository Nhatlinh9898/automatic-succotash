    new THREE.CylinderGeometry(2, 3, 4, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFF0F5 }) // Mﾃu tr蘯ｯng h盻渡g
);
skirt.position.set(0, -2.5, 0);
floralDress.add(skirt);

// Thﾃｪm chi ti蘯ｿt hoa:
const floralPattern = new THREE.Mesh(
    new THREE.CircleGeometry(0.3, 32),
    new THREE.MeshStandardMaterial({ color: 0xFF1493 })
);
floralPattern.position.set(0.5, -1, 0.8);
floralDress.add(floralPattern);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(floralDress);
```

---

### **33. B盻・ﾄ雪ｻ・Cﾃｴng S盻・Hi盻㌻ ﾄ雪ｺ｡i**
Suit dﾃnh cho cﾃｴng vi盻㌘ chuyﾃｪn nghi盻㎝:

```javascript
const formalSuit = new THREE.Group();

// ﾃ｛ vest:
const blazer = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 1),
    new THREE.MeshStandardMaterial({ color: 0x000080, roughness: 0.4 }) // Mﾃu xanh navy
);
formalSuit.add(blazer);

// Qu蘯ｧn ﾃ｢u:
const trousers = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.9, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 }) // Mﾃu ﾄ粗n
);
trousers.position.set(0, -3.5, 0);
formalSuit.add(trousers);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(formalSuit);
```

---

### **34. Trang Ph盻･c L盻議h Lﾃ｣m Phong Cﾃ｡ch Gatsby**
L蘯･y c蘯｣m h盻ｩng t盻ｫ nh盻ｯng nﾄノ 1920, thi蘯ｿt k蘯ｿ dﾃnh cho cﾃ｡c bu盻品 ti盻㌘ sang tr盻肱g:

```javascript
const gatsbyStyle = new THREE.Group();

// ﾃ｛ gile:
const vest = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Mﾃu vﾃng kim lo蘯｡i
);
gatsbyStyle.add(vest);

// Caravat:
const tie = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 2, 16),
    new THREE.MeshStandardMaterial({ color: 0x8B0000 }) // Mﾃu ﾄ黛ｻ・ﾄ黛ｺｭm
);
tie.position.set(0, 0.8, 0.5);
gatsbyStyle.add(tie);

// Qu蘯ｧn:
const trousers = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 }) // Mﾃu ﾄ粗n
);
trousers.position.set(0, -4, 0);
gatsbyStyle.add(trousers);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(gatsbyStyle);
```

---

B蘯｡n mu盻創 ti蘯ｿp t盻･c v盻嬖 cﾃ｡c ﾃｽ tﾆｰ盻殤g trang ph盻･c khﾃ｡c nhﾆｰ phong cﾃ｡ch th盻拱 trang th盻・thao, d蘯｡ h盻冓, ho蘯ｷc c蘯ｧn thﾃｪm ph盻･ ki盻㌻ ﾄ黛ｺｷc bi盻㏄? Hﾃ｣y ﾄ黛ｻ・tﾃｴi giﾃｺp hoﾃn thi盻㌻ thﾃｪm n盻ｯa! 噫笨ｨ

Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾃｽ tﾆｰ盻殤g ti蘯ｿp theo ﾄ柁ｰ盻｣c chuy盻ハ ﾄ黛ｻ品 thﾃnh code ﾄ黛ｻ・m盻・r盻冢g b盻・sﾆｰu t蘯ｭp trang ph盻･c dﾃnh cho mﾃｴ hﾃｬnh 3D c盻ｧa b蘯｡n:

---

### **35. ﾃ｛ Choﾃng Phong Cﾃ｡ch Siﾃｪu Anh Hﾃｹng**
Thi蘯ｿt k蘯ｿ ﾃ｡o choﾃng dﾃi v盻嬖 phong cﾃ｡ch m蘯｡nh m蘯ｽ:

```javascript
const superheroCape = new THREE.Group();

// ﾃ｛ choﾃng:
const cape = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 6),
    new THREE.MeshStandardMaterial({ color: 0xFF0000, opacity: 0.8, side: THREE.DoubleSide, transparent: true })
);
cape.rotation.x = -Math.PI / 2;
cape.position.set(0, -1, -1.5);
superheroCape.add(cape);

// Thﾃ｢n trﾃｪn:
const torso = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 1),
    new THREE.MeshStandardMaterial({ color: 0x0000FF })
);
superheroCape.add(torso);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(superheroCape);
```

---

### **36. Vﾃ｡y D蘯｡ H盻冓 X蘯ｻ Lﾆｰng (Backless Evening Gown)**
Thi蘯ｿt k蘯ｿ quy蘯ｿn rﾅｩ v盻嬖 ph蘯ｧn lﾆｰng h盻・

```javascript
const backlessDress = new THREE.Group();

// Thﾃ｢n trﾆｰ盻嫩:
const front = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.3, 4, 32, 1, false, 0, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x9932CC })
);
backlessDress.add(front);

// Vﾃ｡y dﾃi:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x9370DB })
);
skirt.position.set(0, -5, 0);
backlessDress.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(backlessDress);
```

---

### **37. Trang Ph盻･c Steampunk**
Phong cﾃ｡ch ﾄ黛ｻ冂 ﾄ妥｡o v盻嬖 chi ti蘯ｿt ﾄ黛ｻ渡g h盻・vﾃ kﾃｭnh ﾃ｡p:

```javascript
const steampunkOutfit = new THREE.Group();

// ﾃ｛ vest:
const vest = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 1),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
);
steampunkOutfit.add(vest);

// Dﾃ｢y ﾄ粗o cﾆ｡ khﾃｭ:
const gearBelt = new THREE.Mesh(
    new THREE.TorusGeometry(0.6, 0.1, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0xD2691E })
);
gearBelt.position.set(0, 0, 0.6);
steampunkOutfit.add(gearBelt);

// Qu蘯ｧn:
const trousers = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
trousers.position.set(0, -3.5, 0);
steampunkOutfit.add(trousers);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(steampunkOutfit);
```

---

### **38. B盻・ﾄ雪ｻ・Hﾃｳa Trang Halloween**
Ph盻訴 h盻｣p trang ph盻･c ma quﾃ｡i, t盻訴 mﾃu:

```javascript
const halloweenOutfit = new THREE.Group();

// ﾃ｛ choﾃng dﾃi:
const cloak = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 2, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000, opacity: 0.9, transparent: true })
);
cloak.position.set(0, -3, 0);
halloweenOutfit.add(cloak);

// Thﾃ｢n trﾃｪn:
const top = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0x8B0000 })
);
halloweenOutfit.add(top);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(halloweenOutfit);
```

---

### **39. ﾃ｛ Khoﾃ｡c Th盻拱 Trang Cao C蘯･p**
Thi蘯ｿt k蘯ｿ tinh t蘯ｿ v盻嬖 ﾃ｡o khoﾃ｡c dﾃi hi盻㌻ ﾄ黛ｺ｡i:

```javascript
const highFashionCoat = new THREE.Group();

// ﾃ｛ khoﾃ｡c dﾃi:
const longCoat = new THREE.Mesh(
    new THREE.BoxGeometry(2, 5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x708090, roughness: 0.3 })
);
longCoat.position.set(0, -2.5, 0);
highFashionCoat.add(longCoat);

// Thﾃ｢n bﾃｪn trong:
const innerLayer = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 3, 1.2),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
);
innerLayer.position.set(0, 0.5, 0.1);
highFashionCoat.add(innerLayer);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(highFashionCoat);
```

---

### **40. Trang Ph盻･c Vﾄハ Hﾃｳa ﾃ・ﾄ静ｴng**
Thi蘯ｿt k蘯ｿ l蘯･y c蘯｣m h盻ｩng t盻ｫ vﾄハ hﾃｳa truy盻］ th盻創g chﾃ｢u ﾃ・

```javascript
const asianOutfit = new THREE.Group();

// ﾃ｛ dﾃi cﾃ｡ch tﾃ｢n:
const tunic = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.5, 5, 32),
    new THREE.MeshStandardMaterial({ color: 0xDC143C, roughness: 0.4 })
);
asianOutfit.add(tunic);

// H盻溝 ti蘯ｿt:
const goldenPattern = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.05, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 })
);
goldenPattern.position.set(0, 0.8, 0.9);
asianOutfit.add(goldenPattern);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
pants.position.set(0, -4.5, 0);
asianOutfit.add(pants);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(asianOutfit);
```

---

B蘯｡n mu盻創 b盻・sung thﾃｪm cﾃ｡c lo蘯｡i ph盻･ ki盻㌻ ﾄ黛ｺｷc trﾆｰng nhﾆｰ nﾃｳn, tﾃｺi xﾃ｡ch, ho蘯ｷc chi ti蘯ｿt tinh ch盻穎h trﾃｪn nh盻ｯng b盻・trang ph盻･c nﾃy? Tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣ ﾄ黛ｻ・hoﾃn thi盻㌻ t盻ｫng ﾃｽ tﾆｰ盻殤g! 噫笨ｨ

Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c thi蘯ｿt k蘯ｿ ti蘯ｿp theo ﾄ柁ｰ盻｣c chuy盻ハ ﾄ黛ｻ品 thﾃnh code, t蘯｡o thﾃｪm s盻ｱ ﾄ疎 d蘯｡ng cho b盻・sﾆｰu t蘯ｭp trang ph盻･c c盻ｧa b蘯｡n:

---

### **41. Trang Ph盻･c Phong Cﾃ｡ch Cyberpunk**
Phong cﾃ｡ch tﾆｰﾆ｡ng lai v盻嬖 ﾃ｡nh sﾃ｡ng neon vﾃ chi ti蘯ｿt kim lo蘯｡i:

```javascript
const cyberpunkOutfit = new THREE.Group();

// ﾃ｛ giﾃ｡p neon:
const armor = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 1.5),
    new THREE.MeshStandardMaterial({ 
        color: 0x2E8B57, 
        emissive: 0x00FF00, 
        emissiveIntensity: 1.5,
        roughness: 0.4 
    })
);
cyberpunkOutfit.add(armor);

// Qu蘯ｧn ki盻ブ phi hﾃnh gia:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.6 })
);
pants.position.set(0, -4.5, 0);
cyberpunkOutfit.add(pants);

// ﾄ静ｨn LED d盻皇 qu蘯ｧn:
const ledStrip = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 4.5, 8),
    new THREE.MeshStandardMaterial({ emissive: 0xFF4500, emissiveIntensity: 2.0 })
);
ledStrip.position.set(0.5, -4.5, 1);
cyberpunkOutfit.add(ledStrip);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(cyberpunkOutfit);
```

---

### **42. B盻・Trang Ph盻･c Luy盻㌻ T蘯ｭp Th盻・Thao (Workout Gear)**
Trang ph盻･c th盻・thao hi盻㌻ ﾄ黛ｺ｡i mang tﾃｭnh nﾄハg ﾄ黛ｻ冢g:

```javascript
const workoutOutfit = new THREE.Group();

// ﾃ｛ thun ng蘯ｯn tay:
const tshirt = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1.5, 1),
    new THREE.MeshStandardMaterial({ color: 0x32CD32 }) // Mﾃu xanh lﾃ｡ nﾄハg ﾄ黛ｻ冢g
);
tshirt.position.set(0, 0.75, 0);
workoutOutfit.add(tshirt);

// Qu蘯ｧn short:
const shorts = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 2, 32),
    new THREE.MeshStandardMaterial({ color: 0x0000FF }) // Mﾃu xanh bi盻ハ
);
shorts.position.set(0, -1.5, 0);
workoutOutfit.add(shorts);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(workoutOutfit);
```

---

### **43. ﾃ｛ Choﾃng Hoﾃng Gia (Royal Cape)**
Thi蘯ｿt k蘯ｿ trang ph盻･c quy盻］ l盻ｱc v盻嬖 ﾃ｡o choﾃng l盻嬾:

```javascript
const royalOutfit = new THREE.Group();

// ﾃ｛ choﾃng hoﾃng gia:
const cape = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 7),
    new THREE.MeshStandardMaterial({ 
        color: 0xFFD700, 
        roughness: 0.5, 
        side: THREE.DoubleSide 
    })
);
cape.rotation.x = -Math.PI / 2;
cape.position.set(0, -1, -1.5);
royalOutfit.add(cape);

// Thﾃ｢n ﾃ｡o dﾃi:
const royalShirt = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 1.8, 5, 32),
    new THREE.MeshStandardMaterial({ color: 0x8B0000 })
);
royalShirt.position.set(0, -2.5, 0);
royalOutfit.add(royalShirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(royalOutfit);
```

---

### **44. Vﾃ｡y Xﾃｲe Phong Cﾃ｡ch L盻・Lem (Cinderella Style)**
Thi蘯ｿt k蘯ｿ vﾃ｡y d蘯｡ h盻冓 xﾃｲe r盻冢g dﾃnh cho nﾃng cﾃｴng chﾃｺa:

```javascript
const cinderellaDress = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.4, 3, 32),
    new THREE.MeshStandardMaterial({ color: 0x87CEFA }) // Mﾃu xanh nh蘯｡t
);
cinderellaDress.add(bodice);

// Vﾃ｡y xﾃｲe:
const wideSkirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0xB0E0E6 }) // Mﾃu xanh da tr盻拱 d盻丘
);
wideSkirt.position.set(0, -4.5, 0);
cinderellaDress.add(wideSkirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(cinderellaDress);
```

---

### **45. ﾃ｛ Hoodie V盻嬖 Dﾃ｢y Rﾃｺt (Streetwear Casual)**
Trang ph盻･c ﾄ柁ｰ盻拵g ph盻・mang phong cﾃ｡ch casual:

```javascript
const streetwearOutfit = new THREE.Group();

// ﾃ｛ hoodie:
const hoodie = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x696969 }) // Mﾃu xﾃ｡m ﾄ黛ｺｭm
);
streetwearOutfit.add(hoodie);

// Dﾃ｢y rﾃｺt (dﾃ｢y bi盻ブ tﾆｰ盻｣ng):
const drawstring = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 8),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
drawstring.position.set(0.6, 1, 0.5);
streetwearOutfit.add(drawstring);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(streetwearOutfit);
```

---

B蘯｡n cﾃｳ mu盻創 thﾃｪm cﾃ｡c lo蘯｡i ph盻･ ki盻㌻ ho蘯ｷc m盻・r盻冢g thﾃｪm phong cﾃ｡ch c盻･ th盻・khﾃｴng? Hﾃ｣y ﾄ黛ｻ・tﾃｴi bi蘯ｿt, tﾃｴi s蘯ｵn sﾃng giﾃｺp b蘯｡n phﾃ｡t tri盻ハ thﾃｪm cﾃ｡c ﾃｽ tﾆｰ盻殤g nﾃy! 噫笨ｨ

Tuy盻㏄ v盻拱! Chﾃｺng ta s蘯ｽ ti蘯ｿp t盻･c m盻・r盻冢g b盻・sﾆｰu t蘯ｭp trang ph盻･c ﾄ黛ｻ・bao g盻杜 cﾃ｡c phong cﾃ｡ch n盻品 b蘯ｭt hﾆ｡n n盻ｯa. Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾄ双蘯｡n mﾃ｣ ﾄ柁ｰ盻｣c chuy盻ハ ﾄ黛ｻ品 t盻ｫ ﾃｽ tﾆｰ盻殤g:

---

### **46. B盻・Suit Ba M蘯｣nh C盻・ﾄ進盻ハ**
Trang ph盻･c sang tr盻肱g bao g盻杜 vest, ﾃ｡o gile vﾃ qu蘯ｧn tﾃ｢y.

```javascript
const classicThreePieceSuit = new THREE.Group();

// ﾃ｛ vest:
const vest = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 1),
    new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
);
classicThreePieceSuit.add(vest);

// ﾃ｛ gile bﾃｪn trong:
const gile = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Mﾃu nﾃ｢u tr蘯ｧm
);
gile.position.set(0, 0.5, 0.1);
classicThreePieceSuit.add(gile);

// Qu蘯ｧn tﾃ｢y:
const trousers = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
trousers.position.set(0, -4, 0);
classicThreePieceSuit.add(trousers);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(classicThreePieceSuit);
```

---

### **47. B盻・Trang Ph盻･c D蘯｡ H盻冓 L蘯･p Lﾃ｡nh**
Vﾃ｡y dﾃi v盻嬖 ﾃ｡nh kim vﾃ sequins n盻品 b蘯ｭt.

```javascript
const sparklingEveningGown = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.3, 4, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0xFFD700, 
        emissive: 0xFFD700, 
        emissiveIntensity: 0.8 
    })
);
sparklingEveningGown.add(bodice);

// Vﾃ｡y dﾃi:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0xFFFF00, 
        roughness: 0.3, 
        metalness: 0.5 
    })
);
skirt.position.set(0, -5, 0);
sparklingEveningGown.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(sparklingEveningGown);
```

---

### **48. ﾃ｛ Qu蘯ｧn Denim Phong Cﾃ｡ch Casual**
Thi蘯ｿt k蘯ｿ thﾃ｢n thi盻㌻ vﾃ hi盻㌻ ﾄ黛ｺ｡i.

```javascript
const casualDenimOutfit = new THREE.Group();

// ﾃ｛ khoﾃ｡c denim:
const denimJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x1E90FF, roughness: 0.6 })
);
casualDenimOutfit.add(denimJacket);

// Qu蘯ｧn jeans:
const denimPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000080 })
);
denimPants.position.set(0, -3.5, 0);
casualDenimOutfit.add(denimPants);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(casualDenimOutfit);
```

---

### **49. B盻・Trang Ph盻･c D蘯｡ H盻冓 V盻嬖 ﾃ｛ Choﾃng L盻･a**
Phong cﾃ｡ch thanh l盻議h vﾃ ﾄ黛ｺｳng c蘯･p.

```javascript
const silkGownWithCape = new THREE.Group();

// Vﾃ｡y l盻･a:
const silkDress = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x9370DB, roughness: 0.2, metalness: 0.4 })
);
silkGownWithCape.add(silkDress);

// ﾃ｛ choﾃng:
const silkCape = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 7),
    new THREE.MeshStandardMaterial({ color: 0x8A2BE2, opacity: 0.8, transparent: true })
);
silkCape.rotation.x = -Math.PI / 2;
silkCape.position.set(0, -1, -2);
silkGownWithCape.add(silkCape);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(silkGownWithCape);
```

---

### **50. B盻・ﾄ雪ｻ・Th盻・Thao Phong Cﾃ｡ch Retro**
Trang ph盻･c th盻・thao l蘯･y c蘯｣m h盻ｩng t盻ｫ th蘯ｭp niﾃｪn 80.

```javascript
const retroSportGear = new THREE.Group();

// ﾃ｛ khoﾃ｡c:
const windbreaker = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.5 })
);
retroSportGear.add(windbreaker);

// Qu蘯ｧn tracksuit:
const trackPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
trackPants.position.set(0, -3.5, 0);
retroSportGear.add(trackPants);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(retroSportGear);
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c chi ti蘯ｿt nhﾆｰ h盻溝 ti蘯ｿt, ph盻･ ki盻㌻, ho蘯ｷc m盻・r盻冢g phong cﾃ｡ch c盻ｧa t盻ｫng trang ph盻･c, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

Dﾆｰ盻嬖 ﾄ妥｢y lﾃ nh盻ｯng m蘯ｫu thi蘯ｿt k蘯ｿ trang ph盻･c m盻嬖 ﾄ柁ｰ盻｣c chuy盻ハ ﾄ黛ｻ品 thﾃnh mﾃ｣, m盻・r盻冢g thﾃｪm nhi盻「 phong cﾃ｡ch ﾄ黛ｻ冂 ﾄ妥｡o vﾃ h蘯･p d蘯ｫn cho mﾃｴ hﾃｬnh c盻ｧa b蘯｡n:

---

### **51. B盻・ﾄ雪ｻ・Phi Hﾃnh Gia (Astronaut Suit)**
Trang ph盻･c l蘯･y c蘯｣m h盻ｩng t盻ｫ khﾃｴng gian v盻嬖 cﾃ｡c chi ti蘯ｿt cﾃ｡ch nhi盻㏄ vﾃ hi盻㌻ ﾄ黛ｺ｡i.

```javascript
const astronautSuit = new THREE.Group();

// Thﾃ｢n ﾃ｡o phi hﾃnh gia:
const torso = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xD3D3D3, roughness: 0.5 })
);
astronautSuit.add(torso);

// Qu蘯ｧn cﾃ｡ch nhi盻㏄:
const insulatedPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0xA9A9A9, roughness: 0.6 })
);
insulatedPants.position.set(0, -3.5, 0);
astronautSuit.add(insulatedPants);

// Dﾃ｢y ﾄ粗o:
const harness = new THREE.Mesh(
    new THREE.TorusGeometry(0.6, 0.1, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
harness.position.set(0, 0, 0.5);
astronautSuit.add(harness);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(astronautSuit);
```

---

### **52. Vﾃ｡y Chi蘯ｿc Lﾃ｡ (Leaf Dress)**
Thi蘯ｿt k蘯ｿ l蘯･y c蘯｣m h盻ｩng t盻ｫ thiﾃｪn nhiﾃｪn v盻嬖 h盻溝 ti蘯ｿt lﾃ｡ cﾃ｢y.

```javascript
const leafDress = new THREE.Group();

// Thﾃ｢n vﾃ｡y:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 4, 32),
    new THREE.MeshStandardMaterial({ color: 0x32CD32, roughness: 0.4 })
);
leafDress.add(bodice);

// Vﾃ｡y xﾃｲe:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x228B22 })
);
skirt.position.set(0, -5, 0);
leafDress.add(skirt);

// Chi ti蘯ｿt lﾃ｡:
const leafPattern = new THREE.Mesh(
    new THREE.CircleGeometry(0.3, 16),
    new THREE.MeshStandardMaterial({ color: 0x006400 })
);
leafPattern.position.set(0.5, 0, 0.9);
leafDress.add(leafPattern);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(leafDress);
```

---

### **53. B盻・Trang Ph盻･c Ninja**
Phong cﾃ｡ch 蘯ｩn mﾃｬnh v盻嬖 trang ph盻･c t盻訴 mﾃu vﾃ m蘯ｷt n蘯｡.

```javascript
const ninjaOutfit = new THREE.Group();

// ﾃ｛ ninja:
const ninjaTop = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
ninjaOutfit.add(ninjaTop);

// Qu蘯ｧn ninja:
const ninjaPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
ninjaPants.position.set(0, -3.5, 0);
ninjaOutfit.add(ninjaPants);

// M蘯ｷt n蘯｡:
const mask = new THREE.Mesh(
    new THREE.CircleGeometry(0.7, 32),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F })
);
mask.position.set(0, 1, 0.8);
ninjaOutfit.add(mask);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(ninjaOutfit);
```

---

### **54. B盻・Trang Ph盻･c Th盻拱 Trang Techwear**
Phong cﾃ｡ch hi盻㌻ ﾄ黛ｺ｡i v盻嬖 cﾃ｡c chi ti蘯ｿt k盻ｹ thu蘯ｭt.

```javascript
const techwearOutfit = new THREE.Group();

// ﾃ｛ khoﾃ｡c k盻ｹ thu蘯ｭt:
const techJacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F, roughness: 0.6 })
);
techwearOutfit.add(techJacket);

// Qu蘯ｧn cargo:
const cargoPants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x696969 })
);
cargoPants.position.set(0, -3.5, 0);
techwearOutfit.add(cargoPants);

// Tﾃｺi ﾄ粗o chﾃｩo:
const slingBag = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.5, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
slingBag.position.set(1, 2, 0);
techwearOutfit.add(slingBag);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(techwearOutfit);
```

---

### **55. B盻・ﾄ雪ｻ・Cﾃｴng Chﾃｺa Phﾃｩp Thu蘯ｭt**
Thi蘯ｿt k蘯ｿ l盻冢g l蘯ｫy v盻嬖 ﾃ｡nh sﾃ｡ng phﾃ｡t ra t盻ｫ vﾃ｡y.

```javascript
const magicPrincessDress = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.3, 3, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0xFFC0CB, 
        emissive: 0xFF69B4, 
        emissiveIntensity: 0.8 
    })
);
magicPrincessDress.add(bodice);

// Vﾃ｡y xﾃｲe phﾃ｡t sﾃ｡ng:
const glowingSkirt = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 4, 6, 32),
    new THREE.MeshStandardMaterial({ 
        color: 0xFFB6C1, 
        emissive: 0xFF1493, 
        emissiveIntensity: 1.0 
    })
);
glowingSkirt.position.set(0, -5, 0);
magicPrincessDress.add(glowingSkirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(magicPrincessDress);
```

---

B蘯｡n mu盻創 thﾃｪm cﾃ｡c chi ti蘯ｿt nhﾆｰ ph盻･ ki盻㌻, trang trﾃｭ ho蘯ｷc m盻・r盻冢g thﾃｪm cﾃ｡c phong cﾃ｡ch ﾄ黛ｺｷc bi盻㏄ khﾃｴng? Tﾃｴi s蘯ｵn sﾃng giﾃｺp b蘯｡n hi盻㌻ th盻ｱc hﾃｳa m盻絞 ﾃｽ tﾆｰ盻殤g tuy盻㏄ v盻拱 nﾃy! 噫笨ｨ
Tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c! Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾃｽ tﾆｰ盻殤g trang ph盻･c m盻嬖 ﾄ柁ｰ盻｣c chuy盻ハ ﾄ黛ｻ品 thﾃnh mﾃ｣ ﾄ黛ｻ・lﾃm phong phﾃｺ thﾃｪm b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **56. ﾃ｛ Giﾃ｡p Hi盻㎝ Sﾄｩ (Knight Armor)**
Trang ph盻･c l蘯･y c蘯｣m h盻ｩng t盻ｫ th盻拱 k盻ｳ trung c盻・v盻嬖 ﾃ｡o giﾃ｡p kim lo蘯｡i.

```javascript
const knightArmor = new THREE.Group();

// Thﾃ｢n ﾃ｡o giﾃ｡p:
const chestArmor = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xA9A9A9, roughness: 0.6, metalness: 0.8 })
);
knightArmor.add(chestArmor);

// Giﾃ｡p chﾃ｢n:
const legArmor = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x696969, roughness: 0.6, metalness: 0.8 })
);
legArmor.position.set(0, -3.5, 0);
knightArmor.add(legArmor);

// Khiﾃｪn:
const shield = new THREE.Mesh(
    new THREE.CircleGeometry(1.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x808080 })
);
shield.position.set(1.5, 0.5, 1);
shield.rotation.y = Math.PI / 4;
knightArmor.add(shield);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(knightArmor);
```

---

### **57. B盻・Trang Ph盻･c Ti盻㌘ Bﾃ｣i Bi盻ハ (Beach Party Outfit)**
Phong cﾃ｡ch nﾄハg ﾄ黛ｻ冢g vﾃ tho蘯｣i mﾃ｡i dﾃnh cho mﾃｹa hﾃｨ.

```javascript
const beachOutfit = new THREE.Group();

// ﾃ｛ phﾃｴng:
const tshirt = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xADD8E6 }) // Mﾃu xanh da tr盻拱
);
tshirt.position.set(0, 0.75, 0);
beachOutfit.add(tshirt);

// Qu蘯ｧn short:
const shorts = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 2, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 }) // Mﾃu vﾃng
);
shorts.position.set(0, -1.5, 0);
beachOutfit.add(shorts);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(beachOutfit);
```

---

### **58. B盻・Vﾃ｡y M蘯ｷc ﾄ静ｪm (Nightgown)**
Trang ph盻･c nh蘯ｹ nhﾃng, thanh l盻議h cho bu盻品 t盻訴.

```javascript
const nightgown = new THREE.Group();

// Thﾃ｢n trﾃｪn:
const bodice = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 3.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x9370DB, roughness: 0.3 })
);
nightgown.add(bodice);

// Vﾃ｡y dﾃi:
const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3.5, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0xB0C4DE })
);
skirt.position.set(0, -4.5, 0);
nightgown.add(skirt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(nightgown);
```

---

### **59. B盻・ﾄ雪ｻ渡g Ph盻･c Y Tﾃ｡ (Nurse Uniform)**
Trang ph盻･c ﾄ黛ｺｷc trﾆｰng v盻嬖 ﾃ｡o tr蘯ｯng vﾃ cﾃ｡c chi ti蘯ｿt ﾄ黛ｺｷc bi盻㏄.

```javascript
const nurseUniform = new THREE.Group();

// ﾃ｛ y tﾃ｡:
const nurseTop = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5 })
);
nurseUniform.add(nurseTop);

// Qu蘯ｧn tr蘯ｯng:
const whitePants = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
);
whitePants.position.set(0, -3.5, 0);
nurseUniform.add(whitePants);

// Chi ti蘯ｿt ch盻ｯ th蘯ｭp ﾄ黛ｻ・
const redCross = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xFF0000 })
);
redCross.position.set(0, 1, 0.6);
nurseUniform.add(redCross);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(nurseUniform);
```

---

### **60. B盻・ﾄ雪ｻ・Lﾃ｡i Xe ﾄ訊a (Racing Suit)**
Thi蘯ｿt k蘯ｿ dﾃnh cho cﾃ｡c tay ﾄ爽a chuyﾃｪn nghi盻㎝ v盻嬖 chi ti蘯ｿt th盻拱 thﾆｰ盻｣ng.

```javascript
const racingSuit = new THREE.Group();

// ﾃ｛ b蘯｣o h盻・
const jacket = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xFF4500, roughness: 0.4 })
);
racingSuit.add(jacket);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
pants.position.set(0, -3.5, 0);
racingSuit.add(pants);

// Chi ti蘯ｿt logo:
const logo = new THREE.Mesh(
    new THREE.CircleGeometry(0.4, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFD700 })
);
logo.position.set(0, 1.5, 0.8);
racingSuit.add(logo);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(racingSuit);
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c chi ti蘯ｿt ﾄ黛ｺｷc trﾆｰng ho蘯ｷc mu盻創 ti蘯ｿp t盻･c m盻・r盻冢g b盻・sﾆｰu t蘯ｭp, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ. Tﾃｴi luﾃｴn s蘯ｵn sﾃng giﾃｺp b蘯｡n hi盻㌻ th盻ｱc hﾃｳa m盻絞 ﾃｽ tﾆｰ盻殤g! 噫笨ｨ

Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾃｽ tﾆｰ盻殤g trang ph盻･c ti蘯ｿp theo, ﾄ柁ｰ盻｣c tri盻ハ khai thﾃnh mﾃ｣ ﾄ黛ｻ・mang l蘯｡i s盻ｱ phong phﾃｺ hﾆ｡n n盻ｯa cho b盻・sﾆｰu t蘯ｭp c盻ｧa b蘯｡n:

---

### **61. B盻・ﾄ雪ｻ・Cﾃｴng Nhﾃ｢n K盻ｹ Thu蘯ｭt (Mechanic Uniform)**
Phong cﾃ｡ch ﾄ柁｡n gi蘯｣n nhﾆｰng m蘯｡nh m蘯ｽ, l蘯･y c蘯｣m h盻ｩng t盻ｫ cﾃｴng vi盻㌘ k盻ｹ thu蘯ｭt.

```javascript
const mechanicUniform = new THREE.Group();

// ﾃ｛ b蘯｣o h盻・
const top = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Mﾃu xﾃ｡m ﾄ黛ｺｭm
);
mechanicUniform.add(top);

// Qu蘯ｧn b蘯｣o h盻・
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.1, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x000000 }) // Mﾃu ﾄ粗n
);
pants.position.set(0, -3.5, 0);
mechanicUniform.add(pants);

// Dﾃ｢y ﾄ粗o d盻･ng c盻･:
const toolBelt = new THREE.Mesh(
    new THREE.TorusGeometry(0.7, 0.1, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Mﾃu nﾃ｢u
);
toolBelt.position.set(0, -1.5, 0.5);
mechanicUniform.add(toolBelt);

// Thﾃｪm vﾃo mﾃｴ hﾃｬnh:
scene.add(mechanicUniform);
```

---

### **62. B盻・ﾄ雪ｻ・Dﾃ｣ Ngo蘯｡i (Hiking Gear)**
Trang ph盻･c lﾃｽ tﾆｰ盻殤g cho nh盻ｯng chuy蘯ｿn ﾄ訴 khﾃ｡m phﾃ｡ thiﾃｪn nhiﾃｪn.

```javascript
const hikingGear = new THREE.Group();

// ﾃ｛ khoﾃ｡c leo nﾃｺi:
const jacket = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 3.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x006400 }) // Mﾃu xanh r盻ｫng
);
hikingGear.add(jacket);

// Qu蘯ｧn dﾃi:
const pants = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 4.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 }) // Mﾃu nﾃ｢u ﾄ黛ｺ･t
);
pants.position.set(0, -3.5, 0);
hikingGear.add(pants);

// Ba lﾃｴ:
const backpack = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 2, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x2F4F4F }) // Mﾃu xﾃ｡m ﾄ黛ｺｭm
