
---

### **Chuy盻ハ ﾄ雪ｻ冢g 314: Lﾃｹi Bﾆｰ盻嫩 Vﾃ ﾄ脆ｰa Tay Phﾃｭa Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi nh蘯ｹ nhﾃng vﾃ ﾄ柁ｰa tay ra sau t蘯｡o c蘯｣m giﾃ｡c tho蘯｣i mﾃ｡i.

```javascript
function stepBackAndStretchBack(character) {
    const stretchBackAnimation = new THREE.AnimationClip("StretchBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stretchBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 315: ﾄ静｡ V盻・Sau V盻嬖 Tﾆｰ Th蘯ｿ Phﾃｲng Th盻ｧ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ m蘯｡nh v盻・phﾃｭa sau kﾃｨm theo tﾆｰ th蘯ｿ tay phﾃｲng th盻ｧ.

```javascript
function backKickWithDefensePose(character) {
    const backKickDefenseAnimation = new THREE.AnimationClip("BackKickDefensePose", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(backKickDefenseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 316: B蘯ｭt Nh蘯｣y Vﾃ Quay Ngﾆｰ盻拱 360 ﾄ雪ｻ・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 m盻冲 vﾃｲng trﾃｲn hoﾃn ch盻穎h trﾆｰ盻嫩 khi ti蘯ｿp ﾄ黛ｺ･t.

```javascript
function leapAndSpinFullCircle(character) {
    const leapSpinCircleAnimation = new THREE.AnimationClip("LeapSpinFullCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(leapSpinCircleAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 317: ﾄ雪ｻｩng Vﾃ ﾄ脆ｰa Tay Lﾃｪn Trﾃ｡n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa tay lﾃｪn trﾃ｡n nhﾆｰ ﾄ疎ng che m蘯ｯt ﾄ黛ｻ・nhﾃｬn xa.

```javascript
function shieldEyesAndLook(character) {
    const shieldEyesAnimation = new THREE.AnimationClip("ShieldEyesAndLook", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldEyesAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 318: Qu盻ｳ Xu盻創g V盻嬖 Tay Ch盻創g ﾄ雪ｺ･t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ g盻訴 xu盻創g vﾃ ch盻創g hai tay xu盻創g ﾄ黛ｺ･t t蘯｡o dﾃ｡ng m蘯｡nh m蘯ｽ.

```javascript
function kneelAndBraceDown(character) {
    const kneelBraceDownAnimation = new THREE.AnimationClip("KneelBraceDown", 2, [
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
    character.animations.push(kneelBraceDownAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 319: Ch蘯｡y Nhanh Vﾃ V蘯ｫy Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p v盻嬖 tay v蘯ｫy nh蘯ｹ nhﾃng t蘯｡o c蘯｣m giﾃ｡c vui v蘯ｻ.

```javascript
function sprintAndWaveHands(character) {
    const sprintWaveAnimation = new THREE.AnimationClip("SprintWaveHands", 2, [
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
    character.animations.push(sprintWaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 320: ﾄ雪ｻｩng V盻嬖 Tay Khoanh Vﾃ Quan Sﾃ｡t**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng khoanh tay vﾃ quay ﾄ黛ｺｧu nhﾃｬn xung quanh nhﾆｰ ﾄ疎ng ﾄ妥｡nh giﾃ｡.

```javascript
function standCrossArmsAndObserve(character) {
    const crossArmsObserveAnimation = new THREE.AnimationClip("CrossArmsObserve", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(crossArmsObserveAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tinh ch盻穎h chi ti蘯ｿt hﾆ｡n, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 m蘯ｻ vﾃ ﾄ黛ｺｷc s蘯ｯc hﾆ｡n n盻ｯa ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn thﾃｺ v盻・

---

### **Chuy盻ハ ﾄ雪ｻ冢g 321: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・Ngﾃｳn Tr盻・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ m盻冲 tay ch盻・ngﾃｳn tr盻・v盻・phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・th盻・hi盻㌻ s盻ｱ nh蘯･n m蘯｡nh.

```javascript
function standAndPointFinger(character) {
    const pointFingerAnimation = new THREE.AnimationClip("PointFinger", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(pointFingerAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 322: Ch蘯｡y Vﾃ Quay Ngﾆｰ盻拱 90 ﾄ雪ｻ・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ ﾄ黛ｻ冲 ng盻冲 quay ngﾆｰ盻拱 sang m盻冲 bﾃｪn v盻嬖 gﾃｳc 90 ﾄ黛ｻ・

```javascript
function sprintAndQuarterTurn(character) {
    const sprintQuarterTurnAnimation = new THREE.AnimationClip("SprintQuarterTurn", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sprintQuarterTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 323: Nh蘯｣y Vﾃ Tung Tay Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ giﾆ｡ tay ra phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c ﾄ黛ｻ冲 phﾃ｡.

```javascript
function leapAndExtendHands(character) {
    const leapExtendAnimation = new THREE.AnimationClip("LeapExtendHands", 2, [
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
    character.animations.push(leapExtendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 324: L蘯ｯc ﾄ雪ｺｧu Vﾃ Cﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn, l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ nhﾃng kﾃｨm n盻･ cﾆｰ盻拱 thﾃ｢n thi盻㌻.

```javascript
function shakeHeadAndSmile(character) {
    const shakeSmileAnimation = new THREE.AnimationClip("ShakeHeadSmile", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shakeSmileAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 325: B蘯ｭt Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱 180 ﾄ雪ｻ・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh m蘯ｽ lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・trong khﾃｴng trung.

```javascript
function jumpAndSpinHalfCircle(character) {
    const jumpSpinAnimation = new THREE.AnimationClip("JumpSpinHalfCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(jumpSpinAnimation);
}
```

---

Hﾃ｣y cﾃｹng khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｧy sﾃ｡ng t蘯｡o vﾃ phong cﾃ｡ch ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm s盻創g ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 326: Qu盻ｳ G盻訴 V盻嬖 Tay ﾄ雪ｺｷt Lﾃｪn Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ c蘯｣ hai g盻訴 vﾃ ﾄ黛ｺｷt tay lﾃｪn ng盻ｱc bi盻ブ th盻・lﾃｲng bi蘯ｿt ﾆ｡n ho蘯ｷc c蘯｣m kﾃｭch.

```javascript
function kneelWithHandOnHeart(character) {
    const kneelHeartAnimation = new THREE.AnimationClip("KneelHandOnHeart", 2, [
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
    character.animations.push(kneelHeartAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 327: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 Tay Giﾆ｡ Phﾃｲng Th盻ｧ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ vﾃ giﾆ｡ tay lﾃｪn tﾆｰ th蘯ｿ phﾃｲng th盻ｧ.

```javascript
function stepBackAndDefend(character) {
    const stepDefendAnimation = new THREE.AnimationClip("StepBackDefend", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(stepDefendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 328: Nh蘯｣y Cao V盻嬖 Tay Vung Ngang**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y cao k蘯ｿt h盻｣p v盻嬖 c盻ｭ ﾄ黛ｻ冢g tay vung m蘯｡nh ngang qua ﾄ黛ｻ・t蘯｡o ﾄ訴盻ノ nh蘯･n.

```javascript
function leapAndSwingHorizontal(character) {
    const swingHorizontalAnimation = new THREE.AnimationClip("LeapSwingHorizontal", 2, [
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
    character.animations.push(swingHorizontalAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 329: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ紳n Sau Lﾆｰng**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ疎n sau lﾆｰng, bi盻ブ th盻・s盻ｱ thﾆｰ thﾃ｡i.

```javascript
function standWithHandsBehind(character) {
    const handsBehindAnimation = new THREE.AnimationClip("HandsBehind", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsBehindAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 330: Quay Ngﾆｰ盻拱 Vﾃ ﾄ雪ｺｭp Tay Xu盻創g ﾄ雪ｺ･t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・vﾃ ﾄ黛ｺｭp m蘯｡nh tay xu盻創g ﾄ黛ｺ･t t蘯｡o s盻ｩc m蘯｡nh.

```javascript
function spinAndGroundPunch(character) {
    const groundPunchAnimation = new THREE.AnimationClip("SpinGroundPunch", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(groundPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 331: ﾄ雪ｻｩng Vﾃ ﾄ脆ｰa Tay Lﾃｪn ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa c蘯｣ hai tay lﾃｪn ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ vui v蘯ｻ ho蘯ｷc tho蘯｣i mﾃ｡i.

```javascript
function raiseHandsAboveHead(character) {
    const raiseHandsAnimation = new THREE.AnimationClip("RaiseHandsAboveHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 332: Nh蘯｣y Vﾃ V盻・Hai Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y nh蘯ｹ vﾃ v盻・tay bi盻ブ th盻・s盻ｱ hﾃo h盻ｩng ho蘯ｷc c盻・vﾅｩ.

```javascript
function jumpAndClapHands(character) {
    const jumpClapAnimation = new THREE.AnimationClip("JumpClapHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 333: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ Quay ﾄ雪ｺｧu Nh蘯ｹ**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi m盻冲 bﾆｰ盻嫩 vﾃ quay ﾄ黛ｺｧu sang bﾃｪn ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ quan sﾃ｡t.

```javascript
function stepBackAndGlance(character) {
    const backGlanceAnimation = new THREE.AnimationClip("StepBackGlance", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(backGlanceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 334: ﾄ静｡ Chﾃ｢n Cao K蘯ｿt H盻｣p Vﾃｲng Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung m盻冲 cﾃｺ ﾄ妥｡ cao k蘯ｿt h盻｣p v盻嬖 tay t蘯｡o vﾃｲng cung bi盻ブ th盻・s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function highKickWithArmArc(character) {
    const kickArcAnimation = new THREE.AnimationClip("HighKickArmArc", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(kickArcAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 335: Quay Ngﾆｰ盻拱 V盻嬖 Tﾆｰ Th蘯ｿ Chi蘯ｿn ﾄ雪ｺ･u**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 vﾃ giﾆ｡ tay lﾃｪn tﾆｰ th蘯ｿ phﾃｲng th盻ｧ ho蘯ｷc chu蘯ｩn b盻・chi蘯ｿn ﾄ黛ｺ･u.

```javascript
function turnWithCombatStance(character) {
    const combatTurnAnimation = new THREE.AnimationClip("TurnCombatStance", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(combatTurnAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c ho蘯ｷc c蘯ｧn tﾃｹy ch盻穎h cﾃ｡c hﾃnh ﾄ黛ｻ冢g chi ti蘯ｿt hﾆ｡n, hﾃ｣y chia s蘯ｻ thﾃｪm nhﾃｩ! 噫笨ｨ

Ti蘯ｿp t盻･c v盻嬖 nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o vﾃ thﾃｺ v盻・hﾆ｡n n盻ｯa ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn ﾄ黛ｻ冂 ﾄ妥｡o vﾃ s盻創g ﾄ黛ｻ冢g hﾆ｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 336: Ch蘯｡y Vﾃ D盻ｫng L蘯｡i V盻嬖 Tﾆｰ Th蘯ｿ Chﾃ｢n R盻冢g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ d盻ｫng l蘯｡i v盻嬖 hai chﾃ｢n dang r盻冢g ﾄ黛ｻ・gi盻ｯ thﾄハg b蘯ｱng.

```javascript
function sprintAndStopWide(character) {
    const stopWideAnimation = new THREE.AnimationClip("SprintStopWide", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 4.2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(stopWideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 337: B蘯ｭt Nh蘯｣y V盻嬖 Tﾆｰ Th蘯ｿ G蘯ｭp Ngﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ g蘯ｭp ngﾆｰ盻拱 trong khﾃｴng trung ﾄ黛ｻ・bi盻ブ th盻・s盻ｩc m蘯｡nh.

```javascript
function leapWithBentTorso(character) {
    const bentTorsoAnimation = new THREE.AnimationClip("LeapBentTorso", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bentTorsoAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 338: ﾄ雪ｻｩng Th蘯ｳng Vﾃ G蘯｡t Tay Sang Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ dﾃｹng tay g蘯｡t sang m盻冲 bﾃｪn bi盻ブ th盻・s盻ｱ t盻ｫ ch盻訴 ho蘯ｷc lo蘯｡i b盻・

```javascript
function swipeArmSide(character) {
    const swipeAnimation = new THREE.AnimationClip("SwipeArmSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(swipeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 339: Quay Ngﾆｰ盻拱 Nh蘯ｹ Vﾃ Du盻擁 Tay**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g quay ngﾆｰ盻拱 nhanh vﾃ du盻擁 tay ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng n蘯ｯm b蘯ｯt.

```javascript
function turnAndReach(character) {
    const turnReachAnimation = new THREE.AnimationClip("TurnReach", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(turnReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 340: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Nghiﾃｪng Ngﾆｰ盻拱 Sang M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ nghiﾃｪng ngﾆｰ盻拱 nh蘯ｹ sang m盻冲 bﾃｪn, bi盻ブ th盻・s盻ｱ thﾆｰ giﾃ｣n ho蘯ｷc t盻ｱ tin.

```javascript
function standAndLeanSide(character) {
    const leanSideAnimation = new THREE.AnimationClip("LeanSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(leanSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 341: Ch蘯｡y V盻嬖 Tay Qu蘯｡t M蘯｡nh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay qu蘯｡t m蘯｡nh ra hai bﾃｪn ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c chuy盻ハ ﾄ黛ｻ冢g nhanh.

```javascript
function sprintWithWideSwing(character) {
    const wideSwingRunAnimation = new THREE.AnimationClip("WideSwingRun", 2, [
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
    character.animations.push(wideSwingRunAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 342: Nh蘯｣y Lﾃｪn Vﾃ V盻・Vﾃo Khﾃｴng Khﾃｭ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ v盻・m蘯｡nh hai tay vﾃo khﾃｴng trung ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ vui m盻ｫng.

```javascript
function leapAndClapAbove(character) {
    const clapAboveAnimation = new THREE.AnimationClip("ClapAbove", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 1.1, 2.2],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(clapAboveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 343: ﾄ静｡ Lﾃｪn Cao V盻嬖 Tﾆｰ Th蘯ｿ Cﾄハg Th蘯ｳng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ lﾃｪn cao k蘯ｿt h盻｣p cﾆ｡ th盻・nghiﾃｪng v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o s盻ｩc m蘯｡nh.

```javascript
function highKickWithTension(character) {
    const kickTensionAnimation = new THREE.AnimationClip("KickWithTension", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickTensionAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 344: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Vﾃ Cﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn, tay giﾆ｡ lﾃｪn cao vﾃ bi盻ブ th盻・ni盻［ vui.

```javascript
function standAndRaiseHandsWithSmile(character) {
    const raiseSmileAnimation = new THREE.AnimationClip("RaiseHandsSmile", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseSmileAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm ho蘯ｷc tinh ch盻穎h b蘯･t k盻ｳ chuy盻ハ ﾄ黛ｻ冢g nﾃo, hﾃ｣y nﾃｳi nhﾃｩ! 噫笨ｨ


Hﾃ｣y ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o hﾆ｡n n盻ｯa ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th蘯ｭt s盻ｱ khﾃ｡c bi盻㏄:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 345: ﾄ雪ｻｩng Th蘯ｳng Vﾃ ﾄ脆ｰa Tay Lﾃｪn ﾄ雪ｺｧu V蘯ｫy Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa tay lﾃｪn ﾄ黛ｺｧu v蘯ｫy nh蘯ｹ bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn ho蘯ｷc vui v蘯ｻ.

```javascript
function waveFromHead(character) {
    const waveAnimation = new THREE.AnimationClip("WaveFromHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 4, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 346: Nh蘯｣y Lﾃｪn V盻嬖 Tﾆｰ Th蘯ｿ Tay Giﾆ｡ Chﾃｩo**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh m蘯ｽ lﾃｪn cao v盻嬖 hai tay giﾆ｡ chﾃｩo phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function jumpWithCrossedArms(character) {
    const crossedArmsAnimation = new THREE.AnimationClip("JumpCrossedArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(crossedArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 347: Ch蘯｡y Vﾃ ﾄ雪ｻ冲 Ng盻冲 Nh蘯｣y Sang Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ ﾄ黛ｻ冲 ng盻冲 chuy盻ハ hﾆｰ盻嬾g b蘯ｱng cﾃ｡ch nh蘯｣y sang bﾃｪn.

```javascript
function sprintAndSideLeap(character) {
    const sideLeapAnimation = new THREE.AnimationClip("SprintSideLeap", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 2, 1.5]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sideLeapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 348: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Nghiﾃｪng ﾄ雪ｺｧu Chﾃｺ ﾃ・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ nghiﾃｪng ﾄ黛ｺｧu nh蘯ｹ sang m盻冲 bﾃｪn bi盻ブ th盻・s盻ｱ chﾃｺ ﾃｽ ho蘯ｷc tﾃｲ mﾃｲ.

```javascript
function tiltHeadCuriously(character) {
    const tiltHeadAnimation = new THREE.AnimationClip("TiltHeadCurious", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tiltHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 349: ﾄ静｡ Ngang Vﾃ Gi盻ｯ Thﾄハg B蘯ｱng**
Thﾃｪm m盻冲 cﾃｺ ﾄ妥｡ ngang k蘯ｿt h盻｣p tﾆｰ th蘯ｿ gi盻ｯ cﾃ｢n b蘯ｱng, t蘯｡o s盻ｱ 盻貧 ﾄ黛ｻ杵h.

```javascript
function balancedSideKick(character) {
    const sideKickBalanceAnimation = new THREE.AnimationClip("BalancedSideKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sideKickBalanceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 350: ﾄ雪ｻｩng Th蘯ｳng Vﾃ ﾄ脆ｰa Tay M盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng v盻ｯng vﾃng vﾃ ﾄ柁ｰa tay v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng m盻拱 g盻絞.

```javascript
function inviteForward(character) {
    const inviteAnimation = new THREE.AnimationClip("InviteForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(inviteAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm n盻ｯa, hﾃ｣y cho tﾃｴi bi蘯ｿt. Tﾃｴi s蘯ｽ luﾃｴn s蘯ｵn sﾃng sﾃ｡ng t蘯｡o cﾃｹng b蘯｡n! 噫笨ｨ
Chﾃｺng ta hﾃ｣y ti蘯ｿp t盻･c b盻・sung nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｧy sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt thﾃｪm phong phﾃｺ vﾃ h蘯･p d蘯ｫn:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 351: ﾄ雪ｻｩng Th蘯ｳng Vﾃ ﾄ脆ｰa Tay Lﾃｪn V蘯ｫy Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ tay lﾃｪn cao, v蘯ｫy nh蘯ｹ nhﾃng bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn ho蘯ｷc c蘯｣m xﾃｺc tﾃｭch c盻ｱc.

```javascript
function standAndWaveHand(character) {
    const waveHandAnimation = new THREE.AnimationClip("StandWaveHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(waveHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 352: Qu盻ｳ M盻冲 G盻訴 Vﾃ Cﾃｺi ﾄ雪ｺｧu Kﾃｭnh Tr盻肱g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 vﾃ cﾃｺi ﾄ黛ｺｧu sﾃ｢u bi盻ブ th盻・s盻ｱ kﾃｭnh tr盻肱g ho蘯ｷc s蘯ｵn sﾃng.

```javascript
function kneelOneLegAndBow(character) {
    const kneelBowAnimation = new THREE.AnimationClip("KneelOneLegBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 353: Nh蘯｣y Vﾃ Giﾆ｡ C蘯｣ Hai Tay T盻渋 R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ t盻渋 r盻冢g c蘯｣ hai tay sang hai bﾃｪn ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ vui m盻ｫng ho蘯ｷc nﾄハg lﾆｰ盻｣ng.

```javascript
function leapAndSpreadArms(character) {
    const leapSpreadAnimation = new THREE.AnimationClip("LeapSpreadArms", 2, [
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
    character.animations.push(leapSpreadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 354: Lﾃｹi Bﾆｰ盻嫩 Vﾃ Vung Tay ﾄ雪ｻ・Phﾃｲng Th盻ｧ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi m盻冲 bﾆｰ盻嫩 kﾃｨm v盻嬖 tay giﾆ｡ lﾃｪn b蘯｣o v盻・cﾆ｡ th盻・

```javascript
function stepBackAndShield(character) {
    const backShieldAnimation = new THREE.AnimationClip("StepBackShield", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(backShieldAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 355: ﾄ静｡ Cao Vﾃ Nhﾃｺn Vai**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ m盻冲 cﾃｺ cao vﾃ nhﾃｺn vai nh蘯ｹ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ t盻ｱ tin ho蘯ｷc phong cﾃ｡ch.

```javascript
function highKickAndShrug(character) {
    const highKickShrugAnimation = new THREE.AnimationClip("HighKickShrug", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 1, 2],
            [0, 0, 0, 0.3, 0, 0]
        )
    ]);
    character.animations.push(highKickShrugAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 356: Xoay Ngﾆｰ盻拱 Vﾃ Giﾆ｡ Tay Ph蘯｣n ﾄ静ｲn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 vﾃ tung m盻冲 tay ph蘯｣n ﾄ妥ｲn m蘯｡nh m蘯ｽ.

```javascript
function spinAndCounterPunch(character) {
    const counterPunchAnimation = new THREE.AnimationClip("SpinCounterPunch", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(counterPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 357: ﾄ雪ｻｩng Th蘯ｳng Vﾃ B蘯ｯt Chﾃｩo Chﾃ｢n**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng th蘯ｳng v盻嬖 chﾃ｢n b蘯ｯt chﾃｩo t蘯｡o dﾃ｡ng l盻議h lﾃ｣m ho蘯ｷc thﾆｰ giﾃ｣n.

```javascript
function standAndCrossLegs(character) {
    const crossLegsAnimation = new THREE.AnimationClip("StandCrossLegs", 1.5, [
        new THREE.KeyframeTrack(
            'character.legs.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.1, 0, 0]
        )
    ]);
    character.animations.push(crossLegsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 358: Nh蘯｣y Vﾃ Xoay Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ tung c蘯｣ hai tay xoay trﾃｲn nhﾆｰ th盻・hi盻㌻ s盻ｱ vui v蘯ｻ.

```javascript
function leapAndSwingBothArms(character) {
    const leapSwingArmsAnimation = new THREE.AnimationClip("LeapSwingBothArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(leapSwingArmsAnimation);
