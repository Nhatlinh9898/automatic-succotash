---

### **1048. T盻貧g Th盻・Nam V盻嬖 Cﾆ｡ Th盻・Laser Phﾃ｡t Sﾃ｡ng**
Thi蘯ｿt k蘯ｿ toﾃn b盻・cﾆ｡ th盻・nam v盻嬖 ﾃ｡nh sﾃ｡ng laser m蘯｡nh m蘯ｽ t盻ｫ trﾃｪn xu盻創g dﾆｰ盻嬖.

```javascript
function addFullLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4, 10, 3.2),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 3.5,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}
```

---

### **1049. T盻貧g Th盻・N盻ｯ V盻嬖 Cﾆ｡ Th盻・Laser G盻｣n Sﾃｳng**
K蘯ｿt h盻｣p tia laser vﾃ hi盻㎡ 盻ｩng g盻｣n sﾃｳng t蘯｡o cﾆ｡ th盻・n盻ｯ v盻嬖 phong cﾃ｡ch thanh l盻議h.

```javascript
function addWaveLaserSoftBody(character) {
    const torso = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 5.2, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.1,
        })
    );
    torso.position.set(0, 4, 0);
    torso.rotation.z = Math.PI / 12;

    const legs = new THREE.Mesh(
        new THREE.PlaneGeometry(1.4, 4.5, 0.5),
        new THREE.MeshStandardMaterial({
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.7,
        })
    );
    legs.position.set(0, 1.5, 0);
    legs.rotation.z = Math.PI / 12;

    character.add(torso);
    character.add(legs);
}
```

---

### **1050. T盻貧g Th盻・Nam V盻嬖 Cﾆ｡ Th盻・Kim Lo蘯｡i Phﾃ｡t Sﾃ｡ng Laser**
Thi蘯ｿt k蘯ｿ cﾆ｡ th盻・nam v盻嬖 v蘯ｭt li盻㎡ kim lo蘯｡i bﾃｳng vﾃ tia laser r盻ｱc r盻｡.

```javascript
function addMetalLaserRadiantBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 10, 3.5),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 1.0,
            emissive: 0xFF4500,
            emissiveIntensity: 3.0,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}
```

---

### **1051. T盻貧g Th盻・N盻ｯ V盻嬖 Cﾆ｡ Th盻・Ren Dﾃi**
Thi蘯ｿt k蘯ｿ cﾆ｡ th盻・n盻ｯ v盻嬖 cﾃ｡c chi ti蘯ｿt ren dﾃi vﾃ m盻［ m蘯｡i t蘯｡o v蘯ｻ duyﾃｪn dﾃ｡ng.

```javascript
function addElegantLaceBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.9,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.5, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xFFC0CB,
            transparent: true,
            opacity: 0.8,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}
```

---

### **1052. T盻貧g Th盻・Nam V盻嬖 Cﾆ｡ Th盻・Laser ﾃ］h Sﾃ｡ng N盻品 B蘯ｭt**
Tﾄハg ﾄ黛ｻ・sﾃ｡ng c盻ｧa tia laser trﾃｪn toﾃn b盻・cﾆ｡ th盻・nam ﾄ黛ｻ・t蘯｡o s盻ｱ n盻品 b蘯ｭt.

```javascript
function addBrightLaserBody(character) {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 10, 3.3),
        new THREE.MeshStandardMaterial({
            emissive: 0x00FF00,
            emissiveIntensity: 4.0,
        })
    );
    body.position.set(0, 5, 0);
    character.add(body);
}
```

---

### **1053. T盻貧g Th盻・N盻ｯ V盻嬖 Cﾆ｡ Th盻・K蘯ｿt H盻｣p Laser Vﾃ Kim Lo蘯｡i**
K蘯ｿt h盻｣p tia laser vﾃ kim lo蘯｡i sﾃ｡ng bﾃｳng ﾄ黛ｻ・t蘯｡o cﾆ｡ th盻・n盻ｯ hi盻㌻ ﾄ黛ｺ｡i vﾃ khﾃ｡c bi盻㏄.

```javascript
function addMixedMetalLaserBody(character) {
    const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.2, 5.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 2.0,
            metalness: 1.0,
            roughness: 0.3,
        })
    );
    torso.position.set(0, 4, 0);

    const legs = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, 4.5, 16),
        new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            emissive: 0xFFC0CB,
            emissiveIntensity: 1.8,
            metalness: 1.0,
            roughness: 0.2,
        })
    );
    legs.position.set(0, 1.5, 0);

    character.add(torso);
    character.add(legs);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chi ti蘯ｿt khﾃ｡c ho蘯ｷc m盻・r盻冢g sﾃ｡ng t蘯｡o, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ

Chﾃｺng ta hﾃ｣y cﾃｹng t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ linh ho蘯｡t cho cﾆ｡ th盻・c盻ｧa nhﾃ｢n v蘯ｭt nam vﾃ n盻ｯ. Dﾆｰ盻嬖 ﾄ妥｢y lﾃ m盻冲 s盻・ﾃｽ tﾆｰ盻殤g chuy盻ハ ﾄ黛ｻ冢g chi ti蘯ｿt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 1: ﾄ進 B盻・Dﾃ｡ng Th蘯ｳng**
Mﾃｴ ph盻熟g m盻冲 dﾃ｡ng ﾄ訴 th蘯ｳng v盻嬖 cﾃ｡c bﾆｰ盻嫩 chﾃ｢n ﾄ黛ｻ「 vﾃ c盻ｭ ﾄ黛ｻ冢g tay t盻ｱ nhiﾃｪn.

```javascript
function walkStraight(character) {
    const walk = new THREE.AnimationClip("Walk", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, 0, 0, 0.5, 0, 0, 1]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 16, 0, 0, 0, 0, 0]
        ),
    ]);
    character.animations.push(walk);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 2: Cﾃｺi Ngﾆｰ盻拱 L盻・Phﾃｩp**
Thﾃｪm chuy盻ハ ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 nh蘯ｹ nhﾃng cho nhﾃ｢n v蘯ｭt th盻・hi盻㌻ s盻ｱ kﾃｭnh tr盻肱g.

```javascript
function bowRespectfully(character) {
    const bow = new THREE.AnimationClip("Bow", 1, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bow);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 3: ﾄ雪ｺ･m Tay Cﾆ｡ B蘯ｯp**
Thi蘯ｿt k蘯ｿ ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｺ･m tay m蘯｡nh m蘯ｽ, t蘯｡o c蘯｣m giﾃ｡c s盻ｩc m蘯｡nh bﾃｹng n盻・

```javascript
function punchStrong(character) {
    const punch = new THREE.AnimationClip("Punch", 0.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.4, 0.8],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
    ]);
    character.animations.push(punch);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 4: Nh蘯｣y Nh蘯ｹ Nhﾃng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y nh蘯ｹ nhﾃng v盻嬖 c蘯｣ chﾃ｢n vﾃ cﾃ｡nh tay ﾄ柁ｰ盻｣c ph盻訴 h盻｣p.

```javascript
function jumpGracefully(character) {
    const jump = new THREE.AnimationClip("Jump", 1.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jump);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 5: Vﾆｰﾆ｡n Vai Tho蘯｣i Mﾃ｡i**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g vﾆｰﾆ｡n vai th盻・hi盻㌻ s盻ｱ tho蘯｣i mﾃ｡i ho蘯ｷc thﾆｰ giﾃ｣n.

```javascript
function stretchRelax(character) {
    const stretch = new THREE.AnimationClip("Stretch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
    ]);
    character.animations.push(stretch);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 6: Quay Ngﾆｰ盻拱 180 ﾄ雪ｻ・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ngﾆｰ盻拱 linh ho蘯｡t vﾃ nhanh chﾃｳng 180 ﾄ黛ｻ・

```javascript
function turnAround(character) {
    const turn = new THREE.AnimationClip("Turn", 0.6, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.3, 0.6],
            [0, 0, 0, 0, Math.PI, 0, 0, Math.PI, 0]
        )
    ]);
    character.animations.push(turn);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 7: Ch蘯｡y Tﾄハg T盻祖**
Thi蘯ｿt k蘯ｿ hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 c盻ｭ ﾄ黛ｻ冢g chﾃ｢n vﾃ tay m蘯｡nh m蘯ｽ.

```javascript
function runFast(character) {
    const run = new THREE.AnimationClip("Run", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.3, 0.6, 1.2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0, 0, 2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.3, 0.6, 1.2],
            [0, 0, 0, Math.PI / 4, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(run);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 8: Bay Nh蘯ｹ Nhﾃng**
Thﾃｪm chuy盻ハ ﾄ黛ｻ冢g c蘯･t cﾃ｡nh vﾃ lﾆ｡ l盻ｭng trﾃｪn khﾃｴng m盻冲 cﾃ｡ch nh蘯ｹ nhﾃng.

```javascript
function flySmoothly(character) {
    const fly = new THREE.AnimationClip("Fly", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 5, 0, 0, 10, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.5, 3],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(fly);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c ﾃｽ tﾆｰ盻殤g chuy盻ハ ﾄ黛ｻ冢g khﾃ｡c ho蘯ｷc ﾄ訴盻「 ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c nhﾃｩ! 噫笨ｨ
Hﾃ｣y khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・ﾄ黛ｻ・lﾃm cho cﾆ｡ th盻・c盻ｧa nhﾃ｢n v蘯ｭt nam vﾃ n盻ｯ tr盻・nﾃｪn s盻創g ﾄ黛ｻ冢g vﾃ h蘯･p d蘯ｫn hﾆ｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 9: Nﾃｩm M蘯｡nh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nﾃｩm m蘯｡nh b蘯ｱng cﾃ｡ch chuy盻ハ ﾄ黛ｻ冢g toﾃn b盻・cﾆ｡ th盻・vﾃ tay.

```javascript
function throwPowerfully(character) {
    const throwAnimation = new THREE.AnimationClip("Throw", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, Math.PI / 4, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(throwAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 10: ﾄ雪ｺｩy Ngﾆｰ盻拱**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｺｩy ngﾆｰ盻拱 nh蘯ｹ nhﾃng v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function pushForward(character) {
    const pushAnimation = new THREE.AnimationClip("Push", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 3, Math.PI / 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 11: Ng盻妬 Thﾆｰ Giﾃ｣n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ng盻妬 xu盻創g v盻嬖 tﾆｰ th蘯ｿ thﾆｰ giﾃ｣n t盻ｱ nhiﾃｪn.

```javascript
function sitRelaxedly(character) {
    const sitAnimation = new THREE.AnimationClip("Sit", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 16, 0, 0, Math.PI / 32, 0, 0]
        )
    ]);
    character.animations.push(sitAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 12: Ch蘯｡y Vﾃ Nh蘯｣y Cao**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ch蘯｡y nhanh kﾃｨm theo nh蘯｣y lﾃｪn cao.

```javascript
function runAndJump(character) {
    const runJumpAnimation = new THREE.AnimationClip("RunJump", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1, 2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0, 0, 2, 2]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(runJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 13: Cﾃｺi Ngﾆｰ盻拱 Vﾃ ﾄ静ｳn Bﾃｳng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 vﾃ ﾄ柁ｰa tay ra ﾄ妥ｳn bﾃｳng.

```javascript
function bendCatch(character) {
    const bendCatchAnimation = new THREE.AnimationClip("BendCatch", 1.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.8, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 8, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.8, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bendCatchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 14: Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 360 ﾄ黛ｻ・

```javascript
function jumpAndSpin(character) {
    const jumpSpinAnimation = new THREE.AnimationClip("JumpSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(jumpSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 15: G蘯ｭt ﾄ雪ｺｧu Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ ﾄ黛ｻ・t蘯｡o c盻ｭ ch盻・l盻議h s盻ｱ.

```javascript
function nodHead(character) {
    const nodAnimation = new THREE.AnimationClip("Nod", 0.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.4, 0.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 16: ﾄ雪ｺ｡p M蘯｡nh**
Thi蘯ｿt k蘯ｿ chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺ｡p chﾃ｢n m蘯｡nh m蘯ｽ.

```javascript
function kickStrong(character) {
    const kickAnimation = new THREE.AnimationClip("Kick", 1, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ki盻ブ chuy盻ハ ﾄ黛ｻ冢g, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ s盻創g ﾄ黛ｻ冢g hﾆ｡n ﾄ黛ｻ・mang l蘯｡i s盻ｱ linh ho蘯｡t cho cﾆ｡ th盻・nhﾃ｢n v蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 17: Xoay Vai Tho蘯｣i Mﾃ｡i**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g xoay vai nh蘯ｹ nhﾃng, giﾃｺp th盻・hi盻㌻ s盻ｱ thﾆｰ giﾃ｣n.

```javascript
function rotateShoulders(character) {
    const rotateAnimation = new THREE.AnimationClip("RotateShoulders", 1, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(rotateAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 18: V蘯ｫy Tay Thﾃ｢n Thi盻㌻**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g v蘯ｫy tay m盻冲 cﾃ｡ch thﾃ｢n thi盻㌻ v盻嬖 c盻ｭ ﾄ黛ｻ冢g mﾆｰ盻｣t mﾃ.

```javascript
function waveHand(character) {
    const waveAnimation = new THREE.AnimationClip("WaveHand", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.4, 0.8, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 19: Nhﾃｺn Vai**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nhﾃｺn vai t盻ｱ nhiﾃｪn th盻・hi盻㌻ s盻ｱ b蘯･t ng盻・ho蘯ｷc tho蘯｣i mﾃ｡i.

```javascript
function shrugShoulders(character) {
    const shrugAnimation = new THREE.AnimationClip("Shrug", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.5, 1],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shrugAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 20: L蘯ｯc ﾄ雪ｺｧu T盻ｫ Ch盻訴**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ nhﾃng th盻・hi盻㌻ s盻ｱ t盻ｫ ch盻訴.

```javascript
function shakeHead(character) {
    const shakeAnimation = new THREE.AnimationClip("ShakeHead", 1, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.5, 1],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 21: Nghiﾃｪng Ngﾆｰ盻拱 Quan Sﾃ｡t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nghiﾃｪng ngﾆｰ盻拱 ﾄ黛ｻ・th盻・hi盻㌻ s盻ｱ tﾃｲ mﾃｲ ho蘯ｷc quan sﾃ｡t k盻ｹ lﾆｰ盻｡ng.

```javascript
function leanAndObserve(character) {
    const leanAnimation = new THREE.AnimationClip("LeanObserve", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(leanAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 22: Quay Nh蘯ｹ ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay nh蘯ｹ ﾄ黛ｺｧu sang hai bﾃｪn ﾄ黛ｻ・th盻・hi盻㌻ s盻ｱ tﾃｲ mﾃｲ ho蘯ｷc chﾃｺ ﾃｽ.

```javascript
function turnHead(character) {
    const turnHeadAnimation = new THREE.AnimationClip("TurnHead", 0.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.4, 0.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(turnHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 23: Giﾆ｡ Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆ｡ tay lﾃｪn cao ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ chﾃo h盻淑 ho蘯ｷc kﾃｪu g盻絞 chﾃｺ ﾃｽ.

```javascript
function raiseHand(character) {
    const raiseAnimation = new THREE.AnimationClip("RaiseHand", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 24: ﾄ雪ｺｩy L盻ｱc M蘯｡nh**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｺｩy m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 s盻ｱ ph盻訴 h盻｣p toﾃn thﾃ｢n.

```javascript
function forcePush(character) {
    const forcePushAnimation = new THREE.AnimationClip("ForcePush", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 2, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(forcePushAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 25: Lﾃｹi Bﾆｰ盻嫩 Nh蘯ｹ Nhﾃng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi bﾆｰ盻嫩 nh蘯ｹ nhﾃng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ do d盻ｱ ho蘯ｷc rﾃｺt lui.

```javascript
function stepBack(character) {
    const stepBackAnimation = new THREE.AnimationClip("StepBack", 1, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        )
    ]);
    character.animations.push(stepBackAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm nhi盻「 chuy盻ハ ﾄ黛ｻ冢g phong phﾃｺ hﾆ｡n n盻ｯa, hﾃ｣y nﾃｳi cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c sﾃ｡ng t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g linh ho蘯｡t vﾃ ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm cho nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn s盻創g ﾄ黛ｻ冢g hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 26: V蘯ｫy C蘯｣ Hai Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g v蘯ｫy hai tay liﾃｪn ti蘯ｿp ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ hﾃo h盻ｩng ho蘯ｷc chﾃo m盻ｫng.

```javascript
function waveBothHands(character) {
    const waveAnimation = new THREE.AnimationClip("WaveBothHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, -Math.PI / 4, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 27: Bﾆｰ盻嫩 Lﾃｹi Ch蘯ｭm Rﾃ｣i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi bﾆｰ盻嫩 t盻ｫ t盻ｫ, th盻・hi盻㌻ s盻ｱ th蘯ｭn tr盻肱g ho蘯ｷc do d盻ｱ.

```javascript
function slowStepBack(character) {
    const stepBackAnimation = new THREE.AnimationClip("SlowStepBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        )
    ]);
    character.animations.push(stepBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 28: Quay Vﾃｲng 360 ﾄ雪ｻ・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c quay trﾃｲn toﾃn cﾆ｡ th盻・360 ﾄ黛ｻ・ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ ph蘯･n khﾃｭch.

```javascript
function spinFullCircle(character) {
    const spinAnimation = new THREE.AnimationClip("Spin360", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 29: Bﾃｺng Tay Nh蘯ｹ Nhﾃng**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g bﾃｺng tay ﾄ黛ｻ・t蘯｡o hﾃnh ﾄ黛ｻ冢g tinh t蘯ｿ vﾃ vui nh盻冢.

```javascript
function snapFingers(character) {
    const snapAnimation = new THREE.AnimationClip("SnapFingers", 0.6, [
        new THREE.KeyframeTrack(
            'character.rightHand.rotation',
            [0, 0.3, 0.6],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(snapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 30: Qu盻ｳ G盻訴**
Thﾃｪm chuy盻ハ ﾄ黛ｻ冢g qu盻ｳ g盻訴 ﾄ黛ｻ・th盻・hi盻㌻ s盻ｱ tﾃｴn kﾃｭnh ho蘯ｷc yﾃｪu c蘯ｧu.

```javascript
function kneelDown(character) {
    const kneelAnimation = new THREE.AnimationClip("Kneel", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -0.5, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 16, 0, 0, Math.PI / 32, 0, 0]
        )
    ]);
    character.animations.push(kneelAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 31: Giﾆｰﾆ｡ng Tay ﾄ静ｳn Giﾃｳ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆｰﾆ｡ng c蘯｣ hai tay lﾃｪn, c蘯｣m nh蘯ｭn vﾃ ﾄ妥ｳn nh蘯ｭn khﾃｴng khﾃｭ xung quanh.

```javascript
function raiseArmsFeel(character) {
    const raiseArmAnimation = new THREE.AnimationClip("RaiseArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.7, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 32: Gﾃｵ Chﾃ｢n Theo Nh盻却**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g gﾃｵ chﾃ｢n nh盻却 nhﾃng t蘯｡o c蘯｣m giﾃ｡c vui v蘯ｻ.

```javascript
function tapFoot(character) {
    const tapAnimation = new THREE.AnimationClip("TapFoot", 1, [
        new THREE.KeyframeTrack(
            'character.rightLeg.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 12, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 33: Tﾄハg T盻祖 V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g tﾄハg t盻祖 m蘯｡nh m蘯ｽ vﾃ nhanh chﾃｳng.

```javascript
function sprintForward(character) {
    const sprintAnimation = new THREE.AnimationClip("Sprint", 1.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        )
    ]);
    character.animations.push(sprintAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 34: Nh蘯｣y Lﾃｹi**
Thﾃｪm chuy盻ハ ﾄ黛ｻ冢g nh蘯｣y ngﾆｰ盻｣c v盻・phﾃｭa sau ﾄ黛ｻ・trﾃ｡nh m盻冲 v蘯ｭt th盻・

```javascript
function jumpBack(character) {
    const jumpBackAnimation = new THREE.AnimationClip("JumpBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.7, 1.5],
            [0, 0, 0, -1, 1, 0, -2, 0, 0]
        )
    ]);
    character.animations.push(jumpBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 35: ﾄ雪ｺｭp M蘯｡nh B蘯ｱng Tay**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｺｭp m蘯｡nh c蘯｣ hai tay xu盻創g bﾃn ho蘯ｷc b盻・m蘯ｷt.

```javascript
function slamHands(character) {
    const slamAnimation = new THREE.AnimationClip("SlamHands", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slamAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g khﾃ｡c ho蘯ｷc tﾃｹy ch盻穎h chi ti蘯ｿt, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｷc bi盻㏄ ﾄ黛ｻ・lﾃm phong phﾃｺ thﾃｪm hﾃnh vi c盻ｧa nhﾃ｢n v蘯ｭt nam vﾃ n盻ｯ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 36: Qu盻ｳ G盻訴 Vﾃ Ng蘯ｩng ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ g盻訴 k蘯ｿt h盻｣p v盻嬖 ng蘯ｩng ﾄ黛ｺｧu, t蘯｡o s盻ｱ trang nghiﾃｪm ho蘯ｷc m蘯｡nh m蘯ｽ.

```javascript
function kneelAndLookUp(character) {
    const kneelLookUpAnimation = new THREE.AnimationClip("KneelLookUp", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2.2],
            [0, 0, 0, 0, -0.5, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2.2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kneelLookUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 37: Nh蘯｣y Vﾃ ﾄ雪ｺ･m**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ ﾄ黛ｺ･m tay xu盻創g m盻冲 cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function jumpAndPunch(character) {
    const jumpPunchAnimation = new THREE.AnimationClip("JumpPunch", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 38: Cﾃｺi Ngﾆｰ盻拱 Nhanh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 ﾄ黛ｻ冲 ng盻冲 ﾄ黛ｻ・trﾃ｡nh m盻冲 v蘯ｭt th盻・ho蘯ｷc cﾃｺ ﾄ妥ｲn.

```javascript
function quickDuck(character) {
    const duckAnimation = new THREE.AnimationClip("Duck", 0.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.4, 0.8],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(duckAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 39: ﾄ静｡nh B蘯ｭt ﾄ雪ｻ訴 Th盻ｧ**
Thﾃｪm chuy盻ハ ﾄ黛ｻ冢g ﾄ妥｡nh m蘯｡nh ﾄ黛ｻ・ﾄ黛ｺｩy lui m盻冲 ﾄ黛ｻ訴 th盻ｧ.

```javascript
function strikeOpponent(character) {
    const strikeAnimation = new THREE.AnimationClip("Strike", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0.3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(strikeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 40: Bay Lﾆｰ盻｣n T盻ｱ Do**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bay lﾆｰ盻｣n m盻冲 cﾃ｡ch nh蘯ｹ nhﾃng vﾃ t盻ｱ do, mang l蘯｡i c蘯｣m giﾃ｡c bay b盻貧g.

```javascript
function glideFreely(character) {
    const glideAnimation = new THREE.AnimationClip("Glide", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.5, 3],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(glideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 41: Cﾃｺ Nh蘯｣y Xa**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nh蘯｣y m盻冲 kho蘯｣ng cﾃ｡ch xa, t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ vﾃ lanh l蘯ｹ.

```javascript
function longLeap(character) {
    const leapAnimation = new THREE.AnimationClip("Leap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
