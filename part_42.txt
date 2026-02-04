    ]);
    character.animations.push(raiseArmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 394: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Ch盻創g Hﾃｴng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay ch盻創g hﾃｴng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ t盻ｱ tin.

```javascript
function standHandsOnHips(character) {
    const hipsAnimation = new THREE.AnimationClip("HandsOnHipsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(hipsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 395: Nh蘯｣y Lﾃｪn Vﾃ Giﾆ｡ Tay Lﾃｪn Tr盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh lﾃｪn cao vﾃ giﾆ｡ tay lﾃｪn tr盻拱 bi盻ブ th盻・s盻ｱ vui m盻ｫng.

```javascript
function leapAndRaiseHands(character) {
    const raiseHandsAnimation = new THREE.AnimationClip("LeapRaiseHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 396: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Du盻擁 Th蘯ｳng Phﾃｭa Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay du盻擁 th蘯ｳng ra phﾃｭa sau t蘯｡o c蘯｣m giﾃ｡c thﾆｰ thﾃ｡i.

```javascript
function stretchArmsBackward(character) {
    const stretchBackAnimation = new THREE.AnimationClip("StretchArmsBackward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(stretchBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 397: Ch蘯｡y Vﾃ Xoay Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p v盻嬖 xoay ngﾆｰ盻拱 nh蘯ｹ ﾄ黛ｻ・thay ﾄ黛ｻ品 hﾆｰ盻嬾g.

```javascript
function sprintWithLightSpin(character) {
    const lightSpinAnimation = new THREE.AnimationClip("SprintLightSpin", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(lightSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 398: Nhﾃｺn Vai Vﾃ Giﾆ｡ Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nhﾃｺn vai nh蘯ｹ kﾃｨm theo giﾆ｡ tay lﾃｪn bi盻ブ th盻・s盻ｱ b蘯･t ng盻・

```javascript
function shrugAndRaiseArm(character) {
    const shrugRaiseAnimation = new THREE.AnimationClip("ShrugRaiseArm", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(shrugRaiseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 399: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Khoanh Trﾆｰ盻嫩 Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay khoanh trﾆｰ盻嫩 ng盻ｱc bi盻ブ th盻・s盻ｱ t盻ｱ tin ho蘯ｷc suy nghﾄｩ.

```javascript
function crossArmsAndStand(character) {
    const crossArmsAnimation = new THREE.AnimationClip("CrossArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 400: Qu盻ｳ Hai G盻訴 Vﾃ Vung Tay Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c qu盻ｳ hai g盻訴 vﾃ vung m蘯｡nh tay v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ n盻・l盻ｱc.

```javascript
function kneelAndSwingForward(character) {
    const swingForwardAnimation = new THREE.AnimationClip("KneelSwingForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(swingForwardAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h chi ti蘯ｿt cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g hi盻㌻ t蘯｡i, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ sﾃ｡ng t蘯｡o ti蘯ｿp theo ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn 蘯･n tﾆｰ盻｣ng hﾆ｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 401: ﾄ雪ｻｩng V盻嬖 Tﾆｰ Th蘯ｿ Tay M盻・R盻冢g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay m盻・r盻冢g sang hai bﾃｪn, bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn ho蘯ｷc t盻ｱ do.

```javascript
function standWithOpenHands(character) {
    const openHandsAnimation = new THREE.AnimationClip("StandOpenHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(openHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 402: Nh蘯｣y V盻・Phﾃｭa Trﾆｰ盻嫩 V盻嬖 Tay ﾄ脆ｰa Lﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 c蘯｣ hai tay giﾆ｡ lﾃｪn cao t蘯｡o s盻ｱ quy蘯ｿt tﾃ｢m.

```javascript
function leapForwardWithRaisedArms(character) {
    const forwardLeapAnimation = new THREE.AnimationClip("LeapForwardRaisedArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(forwardLeapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 403: ﾄ雪ｻｩng V盻嬖 Tﾆｰ Th蘯ｿ Chﾃ｢n B蘯ｯt Chﾃｩo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 chﾃ｢n b蘯ｯt chﾃｩo t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n ho蘯ｷc phong cﾃ｡ch.

```javascript
function standWithCrossedLegs(character) {
    const crossedLegsAnimation = new THREE.AnimationClip("CrossedLegsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.legs.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.2, 0, 0]
        )
    ]);
    character.animations.push(crossedLegsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 404: Cﾃｺi Th蘯･p Vﾃ Nh蘯･c Tay Nhﾆｰ B蘯｣o V盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 th蘯･p v盻嬖 tay nh蘯･c lﾃｪn trﾆｰ盻嫩 m蘯ｷt ﾄ黛ｻ・b蘯｣o v盻・

```javascript
function crouchAndGuard(character) {
    const crouchGuardAnimation = new THREE.AnimationClip("CrouchGuard", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(crouchGuardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 405: Nh蘯｣y V盻嬖 Tay Vung ﾄ雪ｻ訴 L蘯ｭp**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao v盻嬖 hai tay vung theo hﾆｰ盻嬾g ﾄ黛ｻ訴 l蘯ｭp t蘯｡o s盻ｱ cﾃ｢n ﾄ黛ｻ訴.

```javascript
function leapWithOppositeSwings(character) {
    const oppositeSwingsAnimation = new THREE.AnimationClip("LeapOppositeSwings", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(oppositeSwingsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 406: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・Hﾆｰ盻嬾g Vﾃ Cﾃｺi ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch盻・m盻冲 tay v盻・phﾃｭa trﾆｰ盻嫩 kﾃｨm theo cﾃｺi ﾄ黛ｺｧu nh蘯ｹ t蘯｡o dﾃ｡ng hﾆｰ盻嬾g d蘯ｫn.

```javascript
function pointAndBow(character) {
    const pointBowAnimation = new THREE.AnimationClip("PointAndBow", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pointBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 407: ﾄ静｡ Chﾃ｢n V盻嬖 Tay Ch盻創g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ妥｡ m盻冲 cﾃｺ m蘯｡nh kﾃｨm v盻嬖 tay ch盻創g xu盻創g ﾄ黛ｻ・gi盻ｯ cﾃ｢n b蘯ｱng.

```javascript
function kickWithSupportArm(character) {
    const kickSupportAnimation = new THREE.AnimationClip("KickSupportArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kickSupportAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 408: ﾄ雪ｻｩng V盻嬖 Tﾆｰ Th蘯ｿ T盻ｱ Nhiﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 c盻ｭ ﾄ黛ｻ冢g t盻ｱ nhiﾃｪn vﾃ th蘯｣ l盻熟g cﾆ｡ th盻・

```javascript
function standNaturally(character) {
    const naturalStandAnimation = new THREE.AnimationClip("NaturalStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(naturalStandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 409: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ C蘯ｧm Tay Lﾃｪn Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi m盻冲 bﾆｰ盻嫩 vﾃ ﾄ黛ｺｷt tay lﾃｪn ng盻ｱc nhﾆｰ bi盻ブ th盻・c蘯｣m xﾃｺc m蘯｡nh.

```javascript
function stepBackAndHoldChest(character) {
    const holdChestAnimation = new THREE.AnimationClip("StepBackHoldChest", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(holdChestAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 410: Qu盻ｳ Xu盻創g V盻嬖 Tay Vﾆｰﾆ｡n V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ c蘯｣ hai g盻訴 vﾃ vﾆｰﾆ｡n tay m蘯｡nh ra phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ c盻創g hi蘯ｿn.

```javascript
function kneelAndReachForward(character) {
    const reachForwardAnimation = new THREE.AnimationClip("KneelReachForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm nhi盻「 chuy盻ハ ﾄ黛ｻ冢g hﾆ｡n n盻ｯa ho蘯ｷc ﾄ訴盻「 ch盻穎h ﾄ黛ｻ・phﾃｹ h盻｣p hﾆ｡n, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Hﾃ｣y cﾃｹng nhau ti蘯ｿp t盻･c b盻・sung thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｧy sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th蘯ｭt s盻ｱ n盻品 b蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 411: Nh蘯｣y Cao V盻嬖 Tay Giﾆ｡ Chﾃｩo Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 hai tay giﾆ｡ chﾃｩo trﾆｰ盻嫩 cﾆ｡ th盻・ t蘯｡o phong cﾃ｡ch m蘯｡nh m蘯ｽ vﾃ uy盻ハ chuy盻ハ.

```javascript
function leapAndCrossArms(character) {
    const crossArmsLeapAnimation = new THREE.AnimationClip("LeapCrossArms", 2, [
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
    character.animations.push(crossArmsLeapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 412: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Ra Hai Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay m盻・r盻冢g sang hai bﾃｪn, bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn ho蘯ｷc s盻ｩc m蘯｡nh.

```javascript
function standWithWideOpenArms(character) {
    const wideOpenArmsAnimation = new THREE.AnimationClip("WideOpenArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(wideOpenArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 413: Xoay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Lﾃｪn Che M蘯ｷt**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh v盻嬖 tay ﾄ柁ｰa lﾃｪn che m蘯ｷt, t蘯｡o dﾃ｡ng phﾃｲng th盻ｧ ho蘯ｷc trﾃ｡nh nﾃｩ.

```javascript
function spinAndShieldFace(character) {
    const shieldFaceAnimation = new THREE.AnimationClip("SpinShieldFace", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldFaceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 414: Nh蘯｣y V盻嬖 Tﾆｰ Th蘯ｿ Tay Giﾆ｡ Lﾃｪn Tr蘯ｧn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn m蘯｡nh m蘯ｽ v盻嬖 hai tay giﾆ｡ cao lﾃｪn tr蘯ｧn, bi盻ブ th盻・s盻ｱ chi蘯ｿn th蘯ｯng ho蘯ｷc ni盻［ vui.

```javascript
function leapAndCelebrate(character) {
    const celebrateAnimation = new THREE.AnimationClip("LeapCelebrate", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(celebrateAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 415: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Nﾃ｢ng Lﾃｪn Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay nﾃ｢ng lﾃｪn phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c t蘯ｭp trung ho蘯ｷc nﾃ｢ng v蘯ｭt.

```javascript
function standAndLiftArms(character) {
    const liftArmsAnimation = new THREE.AnimationClip("StandLiftArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 416: Ch蘯｡y V盻嬖 Tay Vung Linh Ho蘯｡t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay vung linh ho蘯｡t t蘯｡o c蘯｣m giﾃ｡c nﾄハg ﾄ黛ｻ冢g vﾃ m蘯｡nh m蘯ｽ.

```javascript
function sprintWithDynamicArms(character) {
    const dynamicArmsAnimation = new THREE.AnimationClip("SprintDynamicArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(dynamicArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 417: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Ch盻創g Hﾃｴng M盻冲 Bﾃｪn**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ch盻創g hﾃｴng vﾃ tay cﾃｲn l蘯｡i th蘯｣ l盻熟g t盻ｱ nhiﾃｪn, t蘯｡o phong thﾃ｡i t盻ｱ tin.

```javascript
function standWithOneHandOnHip(character) {
    const oneHandHipAnimation = new THREE.AnimationClip("OneHandHipStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(oneHandHipAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 418: Nhﾃｺn Vai Vﾃ Quay ﾄ雪ｺｧu Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nhﾃｺn vai nh蘯ｹ kﾃｨm quay ﾄ黛ｺｧu m盻冲 bﾃｪn, bi盻ブ th盻・s盻ｱ tﾃｲ mﾃｲ ho蘯ｷc b盻訴 r盻訴.

```javascript
function shrugAndLookSide(character) {
    const lookSideAnimation = new THREE.AnimationClip("ShrugLookSide", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(lookSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 419: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Ch盻・M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ch盻・sang m盻冲 bﾃｪn bi盻ブ th盻・s盻ｱ ch盻・d蘯ｫn ho蘯ｷc chﾃｺ ﾃｽ.

```javascript
function pointToSide(character) {
    const pointSideAnimation = new THREE.AnimationClip("PointSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 420: Qu盻ｳ Xu盻創g V盻嬖 Tay ﾄ紳n Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ c蘯｣ hai g盻訴 vﾃ tay ﾄ疎n trﾆｰ盻嫩 cﾆ｡ th盻・bi盻ブ th盻・s盻ｱ kﾃｭnh tr盻肱g ho蘯ｷc hy v盻肱g.

```javascript
function kneelAndFoldHands(character) {
    const foldHandsAnimation = new THREE.AnimationClip("KneelFoldHands", 2, [
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
    character.animations.push(foldHandsAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c m盻・r盻冢g ho蘯ｷc thﾃｪm cﾃ｡c tﾃｹy ch盻穎h khﾃ｡c, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn phong phﾃｺ vﾃ sinh ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 421: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Ra M盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ柁ｰa ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng m盻拱 g盻絞 ho蘯ｷc gi盻嬖 thi盻㎡.

```javascript
function offerHandGesture(character) {
    const offerHandAnimation = new THREE.AnimationClip("OfferHandGesture", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(offerHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 422: Nh蘯｣y Vﾃ Tung Tay Lﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ vung m蘯｡nh tay lﾃｪn tr盻拱 ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ chi蘯ｿn th蘯ｯng.

```javascript
function leapWithVictoryPose(character) {
    const victoryPoseAnimation = new THREE.AnimationClip("LeapVictoryPose", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(victoryPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 423: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g Eo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay ch盻創g eo, t蘯｡o phong thﾃ｡i t盻ｱ tin vﾃ m蘯｡nh m蘯ｽ.

```javascript
function standConfidently(character) {
    const confidentlyAnimation = new THREE.AnimationClip("StandConfidently", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(confidentlyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 424: Qu盻ｳ M盻冲 G盻訴 Vﾃ ﾄ脆ｰa Tay Lﾃｪn Tr盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 v盻嬖 tay ﾄ柁ｰa lﾃｪn tr盻拱 bi盻ブ th盻・s盻ｱ c蘯ｧu nguy盻㌻ ho蘯ｷc hy v盻肱g.

```javascript
function kneelAndRaiseToSky(character) {
    const raiseSkyAnimation = new THREE.AnimationClip("KneelRaiseToSky", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseSkyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 425: ﾄ静｡ Vﾃｲng V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ vﾃｲng cung m蘯｡nh m蘯ｽ k蘯ｿt h盻｣p tay giﾆ｡ cao t蘯｡o phong cﾃ｡ch uy盻ハ chuy盻ハ.

```javascript
function roundKickWithHighArm(character) {
    const roundKickAnimation = new THREE.AnimationClip("RoundKickHighArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(roundKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 426: Ch蘯｡y V盻嬖 Tay Tung Nhanh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay vung nhanh phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c t盻祖 ﾄ黛ｻ・

```javascript
function sprintWithFastArms(character) {
    const fastArmsAnimation = new THREE.AnimationClip("SprintFastArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(fastArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 427: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Khoanh Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay khoanh nh蘯ｹ trﾆｰ盻嫩 ng盻ｱc, bi盻ブ th盻・s盻ｱ thﾆｰ giﾃ｣n ho蘯ｷc t盻ｱ tin.

```javascript
function standAndFoldArmsNaturally(character) {
    const foldArmsAnimation = new THREE.AnimationClip("FoldArmsNaturally", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(foldArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 428: Nh蘯｣y Cao V盻嬖 Tay M盻・R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh lﾃｪn cao vﾃ c蘯｣ hai tay m盻・r盻冢g bi盻ブ th盻・s盻ｱ chﾃo m盻ｫng ho蘯ｷc ph蘯･n kh盻殃.

```javascript
function leapWithArmsSpread(character) {
    const armsSpreadAnimation = new THREE.AnimationClip("LeapArmsSpread", 2, [
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
    character.animations.push(armsSpreadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 429: Cﾃｺi Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Nﾃ｢ng Lﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 nh蘯ｹ v盻嬖 tay ﾄ柁ｰa lﾃｪn phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng nﾃ｢ng v蘯ｭt.

```javascript
function bendAndLiftForward(character) {
    const liftForwardAnimation = new THREE.AnimationClip("BendLiftForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(liftForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 430: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng v盻嬖 tay ch盻創g nh蘯ｹ m盻冲 bﾃｪn t蘯｡o phong thﾃ｡i t盻ｱ tin.

```javascript
function standWithSideArmSupport(character) {
    const sideArmSupportAnimation = new THREE.AnimationClip("StandSideArmSupport", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sideArmSupportAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc mu盻創 tﾃｹy ch盻穎h sﾃ｢u hﾆ｡n n盻ｯa, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn s盻創g ﾄ黛ｻ冢g vﾃ phong phﾃｺ hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 431: Nh蘯｣y Lﾃｪn Vﾃ Xoay Tay Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao v盻嬖 hai tay xoay nh蘯ｹ sang hai bﾃｪn t蘯｡o phong cﾃ｡ch linh ho蘯｡t.

```javascript
function leapAndSwingSideways(character) {
    const swingSidewaysAnimation = new THREE.AnimationClip("LeapSwingSideways", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(swingSidewaysAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 432: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・Lﾃｪn Tr盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ m盻冲 tay lﾃｪn tr盻拱 bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m ho蘯ｷc hy v盻肱g.

```javascript
function standAndPointToSky(character) {
    const pointToSkyAnimation = new THREE.AnimationClip("PointToSky", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(pointToSkyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 433: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung ﾄ静ｲn Chﾃｩm Xu盻創g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 m蘯｡nh m蘯ｽ vﾃ tung tay chﾃｩm xu盻創g t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh.

```javascript
function crouchAndSwingDown(character) {
    const swingDownAnimation = new THREE.AnimationClip("CrouchSwingDown", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(swingDownAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 434: ﾄ雪ｻｩng V盻嬖 Tay Giﾆ｡ Cao Vﾃ Ch蘯ｷn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay giﾆ｡ lﾃｪn ﾄ黛ｻ・ch蘯ｷn ho蘯ｷc b蘯｣o v盻・

```javascript
function standAndBlockHigh(character) {
    const blockHighAnimation = new THREE.AnimationClip("BlockHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(blockHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 435: Qu盻ｳ M盻冲 G盻訴 Vﾃ ﾄ脆ｰa Tay Ra Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 vﾃ tay ﾄ柁ｰa ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng h盻ｩa h蘯ｹn ho蘯ｷc b蘯｣o v盻・

```javascript
function kneelWithExtendedHand(character) {
    const extendedHandAnimation = new THREE.AnimationClip("KneelExtendedHand", 2, [
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
    character.animations.push(extendedHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 436: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g Lﾃｪn ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ch盻創g c蘯｣ hai tay lﾃｪn ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ m盻㏄ m盻淑 ho蘯ｷc thﾆｰ giﾃ｣n.

```javascript
function restHandsOnHead(character) {
    const handsOnHeadAnimation = new THREE.AnimationClip("RestHandsOnHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsOnHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 437: Ch蘯｡y V盻嬖 Tay ﾄ脆ｰa Cao Linh Ho蘯｡t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p tay ﾄ柁ｰa cao t蘯｡o c蘯｣m giﾃ｡c nﾄハg ﾄ黛ｻ冢g vﾃ vui v蘯ｻ.

```javascript
function sprintWithRaisedArms(character) {
    const raisedArmsRunAnimation = new THREE.AnimationClip("SprintRaisedArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raisedArmsRunAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 438: Nh蘯｣y Lﾃｪn V盻嬖 Tay ﾄ脆ｰa Ngang**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ tay ﾄ柁ｰa ngang t蘯｡o c蘯｣m giﾃ｡c cﾃ｢n ﾄ黛ｻ訴 vﾃ m蘯｡nh m蘯ｽ.

```javascript
function leapWithHorizontalArms(character) {
    const horizontalArmsAnimation = new THREE.AnimationClip("LeapHorizontalArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(horizontalArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 439: ﾄ雪ｻｩng V盻嬖 Tay Khoanh Trﾆｰ盻嫩 Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay khoanh trﾆｰ盻嫩 ng盻ｱc t蘯｡o phong thﾃ｡i bﾃｬnh th蘯｣n ho蘯ｷc t盻ｱ tin.

```javascript
function standWithCrossedArms(character) {
    const crossedArmsAnimation = new THREE.AnimationClip("CrossedArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossedArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 440: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung Tay Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 nhanh vﾃ tung tay v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ t蘯･n cﾃｴng ho蘯ｷc n盻・l盻ｱc.

```javascript
function bendAndSwingForward(character) {
