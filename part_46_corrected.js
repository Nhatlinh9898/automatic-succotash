
---

### **Chuy盻ハ ﾄ雪ｻ冢g 579: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｺ･m Vﾃｲng Trﾃｲn Quy盻］ Anh**
Thﾃｪm m盻冲 cﾃｺ ﾄ黛ｺ･m vﾃｲng trﾃｲn m蘯｡nh m蘯ｽ trong quy盻］ anh t蘯｡o uy l盻ｱc.

```javascript
function boxingCircularPunch(character) {
    const circularPunchAnimation = new THREE.AnimationClip("BoxingCircularPunch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(circularPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 580: ﾄ雪ｻ冢g Tﾃ｡c B蘯ｭt Cao V盻嬖 Cﾃｺ ﾄ雪ｺ･m Xu盻創g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g b蘯ｭt cao vﾃ tung cﾃｺ ﾄ黛ｺ･m xu盻創g m蘯｡nh m蘯ｽ bi盻ブ th盻・s盻ｩc m蘯｡nh.

```javascript
function descendingPowerPunch(character) {
    const powerPunchAnimation = new THREE.AnimationClip("DescendingPowerPunch", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(powerPunchAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g ho蘯ｷc mu盻創 m盻・r盻冢g cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c, c盻ｩ chia s蘯ｻ ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 暑・鞘坂凾・鞘惠
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao m盻嬖 ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm linh ho蘯｡t vﾃ sinh ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 581: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｻ｡ Cﾃｺ Ch蘯｡m Bﾃｳng Cu盻訴 Trong Bﾃｳng Chuy盻］**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻ・ngﾆｰ盻拱 xu盻創g th蘯･p vﾃ ﾄ黛ｻ｡ bﾃｳng trong bﾃｳng chuy盻］, th盻・hi盻㌻ s盻ｱ t蘯ｭp trung vﾃ nhanh nh蘯ｹn.

```javascript
function volleyballDiveSave(character) {
    const diveSaveAnimation = new THREE.AnimationClip("VolleyballDiveSave", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(diveSaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 582: ﾄ雪ｻ冢g Tﾃ｡c T蘯｡t Bﾃｳng Cao Trong Bﾃｳng ﾄ静｡**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c lﾃｹi l蘯｡i vﾃ t蘯｡t bﾃｳng lﾃｪn cao vﾃo khu v盻ｱc c蘯･m ﾄ黛ｻ蟻.

```javascript
function soccerHighCross(character) {
    const highCrossAnimation = new THREE.AnimationClip("SoccerHighCross", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(highCrossAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 583: Nh蘯｣y Lﾃｪn Vﾃ Ghi ﾄ進盻ノ Trong Bﾃｳng R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ tung cﾃｺ ghi ﾄ訴盻ノ m蘯｡nh m蘯ｽ vﾃo r盻・

```javascript
function basketballDunk(character) {
    const dunkAnimation = new THREE.AnimationClip("BasketballDunk", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(dunkAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 584: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｺ･m Dﾆｰ盻嬖 Quy盻］ Anh**
Thﾃｪm cﾃｺ ﾄ黛ｺ･m t盻ｫ dﾆｰ盻嬖 lﾃｪn m蘯｡nh m蘯ｽ trong quy盻］ anh.

```javascript
function boxingUppercut(character) {
    const uppercutAnimation = new THREE.AnimationClip("BoxingUppercut", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(uppercutAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 585: Ch蘯｡y Nhanh V盻嬖 Cﾃｺ Nﾃｩm Bﾃｳng Dﾃi**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ nﾃｩm bﾃｳng dﾃi ra xa.

```javascript
function sprintAndThrow(character) {
    const sprintThrowAnimation = new THREE.AnimationClip("SprintAndThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(sprintThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 586: ﾄ雪ｻ冢g Tﾃ｡c ﾄ静｡nh G蘯ｭy Golf Chﾃｭnh Xﾃ｡c**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡nh g蘯ｭy golf v盻嬖 cﾃｺ vung m蘯｡nh vﾃ chﾃｭnh xﾃ｡c.

```javascript
function golfAccurateDrive(character) {
    const accurateDriveAnimation = new THREE.AnimationClip("GolfAccurateDrive", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(accurateDriveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 587: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｻ｡ Bﾃｳng 盻・Gﾃｳc Th蘯･p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 vﾃ ﾄ黛ｻ｡ bﾃｳng 盻・gﾃｳc th蘯･p trong bﾃｳng ﾄ妥｡.

```javascript
function soccerLowSave(character) {
    const lowSaveAnimation = new THREE.AnimationClip("SoccerLowSave", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(lowSaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 588: Nh蘯｣y Cao Vﾃ Kﾃｩo T蘯｡ Nhanh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ kﾃｩo t蘯｡ m蘯｡nh t盻ｫ dﾆｰ盻嬖 lﾃｪn trﾃｪn.

```javascript
function explosiveWeightPull(character) {
    const weightPullAnimation = new THREE.AnimationClip("ExplosiveWeightPull", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(weightPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 589: Ch蘯｡y Nhanh Vﾃ Cﾃｺ C蘯ｯt Bﾃｳng Chﾃｭnh Xﾃ｡c**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ dﾃｹng chﾃ｢n c蘯ｯt bﾃｳng trong bﾃｳng ﾄ妥｡.

```javascript
function soccerTackle(character) {
    const tackleAnimation = new THREE.AnimationClip("SoccerTackle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(tackleAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 590: Cﾃｺ ﾄ雪ｺ･m K蘯ｿt H盻｣p Vﾃ ﾄ静｡ Trong Quy盻］ Anh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c k蘯ｿt h盻｣p ﾄ黛ｺ･m vﾃ ﾄ妥｡ liﾃｪn hoﾃn trong quy盻］ anh.

```javascript
function boxingCombo(character) {
    const comboAnimation = new THREE.AnimationClip("BoxingCombo", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(comboAnimation);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc tinh ch盻穎h chi ti蘯ｿt hﾆ｡n nhﾃｩ! ･・惠
Tﾃｴi r蘯･t h盻ｩng thﾃｺ ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c v盻嬖 thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao m蘯｡nh m蘯ｽ vﾃ ﾄ疎 d蘯｡ng hﾆ｡n cho nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 591: ﾄ雪ｻ冢g Tﾃ｡c V盻・Bﾃｳng Trong Bﾃｳng ﾄ静｡**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c th盻ｧ mﾃｴn lao nhanh vﾃ v盻・bﾃｳng, bi盻ブ th盻・s盻ｱ linh ho蘯｡t vﾃ d盻ｩt khoﾃ｡t.

```javascript
function goalkeeperDive(character) {
    const diveAnimation = new THREE.AnimationClip("GoalkeeperDive", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(diveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 592: B蘯ｭt Cao Vﾃ Tung Cﾃｺ ﾄ雪ｺｭp M蘯｡nh Trong Bﾃｳng Chuy盻］**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt cao vﾃ ﾄ黛ｺｭp bﾃｳng chuy盻］ xu盻創g sﾃ｢n ﾄ黛ｻ訴 th盻ｧ t蘯｡o s盻ｩc m蘯｡nh.

```javascript
function volleyballPowerSpike(character) {
    const powerSpikeAnimation = new THREE.AnimationClip("VolleyballPowerSpike", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(powerSpikeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 593: Ch蘯｡y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Truy C蘯｣n Trong Bﾃｳng ﾄ静｡**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c lao nhanh vﾃ dﾃｹng chﾃ｢n truy c蘯｣n bﾃｳng t盻ｫ ﾄ黛ｻ訴 th盻ｧ.

```javascript
function soccerSlideTackle(character) {
    const slideTackleAnimation = new THREE.AnimationClip("SoccerSlideTackle", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -2, 0, 0, -3, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(slideTackleAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 594: ﾄ雪ｻ冢g Tﾃ｡c Xoay Ngﾆｰ盻拱 Vﾃ Tung Cﾃｺ Quﾄハg Bﾃｳng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 m蘯｡nh m蘯ｽ vﾃ tung bﾃｳng ra xa.

```javascript
function discusThrow(character) {
    const discusThrowAnimation = new THREE.AnimationClip("DiscusThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(discusThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 595: Ch蘯｡y Vﾃ Phﾃ｡t Bﾃｳng Trong Bﾃｳng B蘯ｧu D盻･c**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y vﾃ phﾃ｡t bﾃｳng trong bﾃｳng b蘯ｧu d盻･c v盻嬖 s盻ｱ quy蘯ｿt ﾄ双ﾃ｡n.

```javascript
function rugbyPass(character) {
    const rugbyPassAnimation = new THREE.AnimationClip("RugbyPass", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(rugbyPassAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 596: Nh蘯｣y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Cﾃｺ ﾄ静｡ Vﾃｲng Cung Karate**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y vﾃ tung cﾃｺ ﾄ妥｡ vﾃｲng cung m蘯｡nh m蘯ｽ trong karate.

```javascript
function karateRoundhouseKick(character) {
    const roundhouseKickAnimation = new THREE.AnimationClip("KarateRoundhouseKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(roundhouseKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 597: Tﾆｰ Th蘯ｿ C蘯ｧm G蘯ｭy Vﾃ Ch蘯｡y Trong Khﾃｺc Cﾃｴn C蘯ｧu**
Thﾃｪm tﾆｰ th蘯ｿ c蘯ｧm g蘯ｭy vﾃ ch蘯｡y nhanh trﾃｪn sﾃ｢n khﾃｺc cﾃｴn c蘯ｧu v盻嬖 dﾃ｡ng chu蘯ｩn.

```javascript
function hockeyRunWithStick(character) {
    const hockeyRunAnimation = new THREE.AnimationClip("HockeyRunWithStick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(hockeyRunAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 598: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｺｩy T蘯｡ T盻ｫ Ng盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng vﾃ ﾄ黛ｺｩy t蘯｡ t盻ｫ ng盻ｱc lﾃｪn cao, bi盻ブ th盻・s盻ｩc m蘯｡nh.

```javascript
function chestPress(character) {
    const chestPressAnimation = new THREE.AnimationClip("ChestPress", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(chestPressAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 599: ﾄ雪ｻ冢g Tﾃ｡c Quay Gﾃｳt ﾄ雪ｻ｡ Bﾃｳng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay nhanh ﾄ黛ｻ・ﾄ黛ｻ｡ bﾃｳng trong bﾃｳng r盻・ bi盻ブ th盻・s盻ｱ linh ho蘯｡t.

```javascript
function basketballPivot(character) {
    const pivotAnimation = new THREE.AnimationClip("BasketballPivot", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pivotAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 600: ﾄ雪ｻ冢g Tﾃ｡c C蘯ｧm Bﾃｳng Vﾃ T蘯･n Cﾃｴng Nhanh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g c蘯ｧm bﾃｳng vﾃ lao nhanh v盻・phﾃｭa trﾆｰ盻嫩 trong bﾃｳng b蘯ｧu d盻･c.

```javascript
function rugbyCharge(character) {
    const rugbyChargeAnimation = new THREE.AnimationClip("RugbyCharge", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(rugbyChargeAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc tﾃｹy ch盻穎h, tﾃｴi luﾃｴn s蘯ｵn sﾃng giﾃｺp ﾄ黛ｻ｡! ･・惠
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g k蘯ｿt h盻｣p trong ngh盻・thu蘯ｭt khiﾃｪu vﾅｩ, t蘯ｭp trung vﾃo s盻ｱ uy盻ハ chuy盻ハ vﾃ bi盻ブ c蘯｣m:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 601: Nh蘯｣y Lﾃｪn Vﾃ Xoay Tay U盻創 Lﾆｰ盻｣n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ xoay tay nh蘯ｹ nhﾃng theo hﾃｬnh u盻創 lﾆｰ盻｣n t蘯｡o c蘯｣m giﾃ｡c m盻［ m蘯｡i.

```javascript
function leapAndWaveArms(character) {
    const waveArmsAnimation = new THREE.AnimationClip("LeapWaveArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(waveArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 602: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Xoay Lﾆｰng K蘯ｿt H盻｣p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ xoay lﾆｰng t蘯｡o dﾃ｡ng thanh l盻議h.

```javascript
function gracefulBowTwist(character) {
    const bowTwistAnimation = new THREE.AnimationClip("GracefulBowTwist", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bowTwistAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 603: Xoay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn vﾃ tung tay ra hai bﾃｪn t蘯｡o dﾃ｡ng m蘯｡nh m蘯ｽ.

```javascript
function spinWithSideSpread(character) {
    const sideSpreadAnimation = new THREE.AnimationClip("SpinWithSideSpread", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(sideSpreadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 604: Bﾆｰ盻嫩 Ch蘯ｭm Vﾃ Vﾆｰﾆ｡n Tay Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ﾄ訴 ch蘯ｭm rﾃ｣i vﾃ vﾆｰﾆ｡n tay v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ k蘯ｿt n盻訴.

```javascript
function stepWithGentleReach(character) {
    const gentleReachAnimation = new THREE.AnimationClip("StepWithGentleReach", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gentleReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 605: Xoay Ngﾆｰ盻拱 K蘯ｿt H盻｣p Nh蘯｣y ﾄ静ｴi**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn k蘯ｿt h盻｣p v盻嬖 m盻冲 cﾃｺ nh蘯｣y ﾄ妥ｴi th盻・hi盻㌻ s盻ｱ nﾄハg ﾄ黛ｻ冢g.

```javascript
function doubleSpinJump(character) {
    const doubleSpinAnimation = new THREE.AnimationClip("DoubleSpinJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(doubleSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 606: Nh蘯｣y Lﾃｪn Vﾃ Tung Tay Trﾃｲn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt cao vﾃ vung c蘯｣ hai tay xoay trﾃｲn t蘯｡o c蘯｣m giﾃ｡c vui v蘯ｻ.

```javascript
function jumpWithCircularArms(character) {
    const circularArmsAnimation = new THREE.AnimationClip("JumpCircularArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(circularArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 607: ﾄ雪ｻｩng Yﾃｪn Vﾃ Nﾃ｢ng Chﾃ｢n Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng vﾃ nh蘯･c m盻冲 chﾃ｢n nh蘯ｹ nhﾃng ﾄ黛ｻ・t蘯｡o s盻ｱ m盻［ m蘯｡i.

```javascript
function liftLegGracefully(character) {
    const legLiftAnimation = new THREE.AnimationClip("LiftLegGracefully", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(legLiftAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 608: Xoay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn k蘯ｿt h盻｣p v盻嬖 tay ﾄ柁ｰa lﾃｪn cao t蘯｡o s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function spinAndRaiseHand(character) {
    const raiseHandSpinAnimation = new THREE.AnimationClip("SpinRaiseHand", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseHandSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 609: ﾄ雪ｻｩng Yﾃｪn Vﾃ Tung Chﾃ｢n Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng vﾃ tung chﾃ｢n nh蘯ｹ t蘯｡o s盻ｱ thanh l盻議h.

```javascript
function standAndSwingLeg(character) {
    const swingLegAnimation = new THREE.AnimationClip("StandSwingLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 610: Kﾃｩo Tay Vﾃ Nh蘯｣y Lﾃｪn Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c kﾃｩo tay nh蘯ｹ nhﾃng k蘯ｿt h盻｣p v盻嬖 m盻冲 cﾃｺ nh蘯｣y uy盻ハ chuy盻ハ.

```javascript
function pullArmAndLeap(character) {
    const pullLeapAnimation = new THREE.AnimationClip("PullArmLeap", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pullLeapAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c k蘯ｿt h盻｣p khﾃ｡c ho蘯ｷc tﾃｹy ch盻穎h chi ti蘯ｿt hﾆ｡n n盻ｯa, hﾃ｣y chia s蘯ｻ nhﾃｩ! 茶笨ｨ
Hﾃ｣y cﾃｹng ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c k蘯ｿt h盻｣p uy盻ハ chuy盻ハ trong khiﾃｪu vﾅｩ ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th盻ｱc s盻ｱ n盻品 b蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 611: Nh蘯｣y Lﾃｪn Vﾃ Vﾆｰﾆ｡n Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y nh蘯ｹ nhﾃng vﾃ vﾆｰﾆ｡n tay v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c k蘯ｿt n盻訴 vﾃ cu盻創 hﾃｺt.

```javascript
function leapAndReachForward(character) {
    const reachForwardAnimation = new THREE.AnimationClip("LeapReachForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 612: Xoay Ngﾆｰ盻拱 Vﾃ D盻ｫng Trong Tﾆｰ Th蘯ｿ Kﾃｩo Tay Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ k蘯ｿt thﾃｺc b蘯ｱng vi盻㌘ kﾃｩo tay v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ tinh t蘯ｿ.

```javascript
function spinAndPullForward(character) {
    const pullForwardAnimation = new THREE.AnimationClip("SpinPullForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 613: ﾄ雪ｻｩng Th蘯ｳng Vﾃ T蘯｡o Dﾃ｡ng Ch盻ｯ S**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn k蘯ｿt h盻｣p v盻嬖 cﾆ｡ th盻・t蘯｡o dﾃ｡ng hﾃｬnh ch盻ｯ S, bi盻ブ th盻・s盻ｱ m盻［ m蘯｡i.

```javascript
function sShapePose(character) {
    const sShapeAnimation = new THREE.AnimationClip("SShapePose", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(sShapeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 614: Nh蘯｣y Lﾃｪn Vﾃ Tung Tay Ra Phﾃｭa Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ tung tay ra phﾃｭa sau bi盻ブ th盻・s盻ｱ m蘯｡nh m蘯ｽ vﾃ nﾄハg ﾄ黛ｻ冢g.

```javascript
function leapAndSwingArmsBack(character) {
    const swingArmsBackAnimation = new THREE.AnimationClip("LeapSwingArmsBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingArmsBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 615: Xoay Ngﾆｰ盻拱 Vﾃ Tung Chﾃ｢n Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 vﾃ nh蘯･c chﾃ｢n t蘯｡o dﾃ｡ng thanh l盻議h vﾃ 蘯･n tﾆｰ盻｣ng.

```javascript
function spinAndLiftLeg(character) {
    const liftLegAnimation = new THREE.AnimationClip("SpinLiftLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 616: Bﾆｰ盻嫩 Nh蘯ｹ Vﾃ Xoay Tay Hﾃｬnh Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ch蘯ｭm k蘯ｿt h盻｣p v盻嬖 vi盻㌘ xoay tay theo hﾃｬnh vﾃｲng cung ﾄ黛ｻ・bi盻ブ ﾄ黛ｺ｡t s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function stepAndCircleArms(character) {
    const circleArmsAnimation = new THREE.AnimationClip("StepCircleArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(circleArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 617: Nhﾃｺn Ngﾆｰ盻拱 Vﾃ Kﾃｩo Tay V盻・Phﾃｭa Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nhﾃｺn ngﾆｰ盻拱 vﾃ kﾃｩo tay v盻・phﾃｭa sau t蘯｡o s盻ｱ hﾃi hﾃｲa.

```javascript
function bendAndPullArmsBack(character) {
    const pullArmsBackAnimation = new THREE.AnimationClip("BendPullArmsBack", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullArmsBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 618: ﾄ雪ｻｩng Vﾃ Tung Tay Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 cﾃ｡nh tay m盻・r盻冢g sang hai bﾃｪn t蘯｡o s盻ｱ chﾃo ﾄ妥ｳn.

```javascript
function standAndSpreadArms(character) {
    const spreadArmsAnimation = new THREE.AnimationClip("StandSpreadArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 619: Xoay Trﾃｲn Vﾃ Vﾆｰﾆ｡n Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn vﾃ k蘯ｿt thﾃｺc v盻嬖 tay vﾆｰﾆ｡n v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ vﾆｰﾆ｡n t盻嬖.

```javascript
function spinAndReachForward(character) {
    const reachForwardAnimation = new THREE.AnimationClip("SpinReachForward", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 620: ﾄ雪ｻ冢g Tﾃ｡c D盻ｫng L蘯｡i V盻嬖 Dﾃ｡ng Vﾆｰﾆ｡n Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ vﾆｰﾆ｡n ngﾆｰ盻拱 lﾃｪn cao t蘯｡o c蘯｣m giﾃ｡c kiﾃｪu hﾃ｣nh.

```javascript
function standAndStretchUp(character) {
    const stretchUpAnimation = new THREE.AnimationClip("StandStretchUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(stretchUpAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c m盻嬖 ho蘯ｷc tﾃｹy ch盻穎h theo ﾃｽ tﾆｰ盻殤g khﾃ｡c, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 茶笨ｨ
ﾄ脆ｰ盻｣c r盻妬, hﾃ｣y cﾃｹng nhau b盻・sung thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c k蘯ｿt h盻｣p trong khiﾃｪu vﾅｩ ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn m盻［ m蘯｡i vﾃ cu盻創 hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 621: Nh蘯｣y Lﾃｪn Vﾃ ﾄ脆ｰa Tay V盻・Phﾃｭa Trﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ ﾄ柁ｰa tay lﾃｪn trﾃｪn bi盻ブ th盻・s盻ｱ ph蘯･n kh盻殃 vﾃ t盻ｱ hﾃo.

```javascript
function leapAndLiftArmsHigh(character) {
    const liftArmsHighAnimation = new THREE.AnimationClip("LeapLiftArmsHigh", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(liftArmsHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 622: ﾄ雪ｻｩng Yﾃｪn Vﾃ Kﾃｩo Tay Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ kﾃｩo tay nh蘯ｹ nhﾃng bi盻ブ th盻・s盻ｱ k蘯ｿt n盻訴.

```javascript
function standWithGracefulPull(character) {
    const gracefulPullAnimation = new THREE.AnimationClip("StandGracefulPull", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gracefulPullAnimation);
}
```

---

