    const sprintTurnAnimation = new THREE.AnimationClip("SprintTurnQuickly", 2, [
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
    character.animations.push(sprintTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 269: ﾄ脆ｰa Tay Lﾃｪn Cao Vﾃ Cﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn, giﾆ｡ tay lﾃｪn cao vﾃ bi盻ブ hi盻㌻ gﾆｰﾆ｡ng m蘯ｷt vui v蘯ｻ.

```javascript
function raiseHandsAndSmile(character) {
    const raiseSmileAnimation = new THREE.AnimationClip("RaiseHandsSmile", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseSmileAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 270: Nh蘯｣y Lﾃｪn Cao Vﾃ Vung Tay Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ vung c蘯｣ hai tay v盻・phﾃｭa sau, bi盻ブ th盻・s盻ｱ ph蘯･n khﾃｭch.

```javascript
function leapHighAndSwingBack(character) {
    const leapSwingAnimation = new THREE.AnimationClip("LeapHighSwingBack", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(leapSwingAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g ho蘯ｷc c蘯ｧn cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g khﾃ｡c, hﾃ｣y chia s蘯ｻ ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Hﾃ｣y cﾃｹng thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n cﾃng thﾃｪm phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 271: Qu盻ｳ M盻冲 G盻訴 Vﾃ ﾄ脆ｰa Tay Lﾃｪn Tr盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 vﾃ giﾆ｡ tay lﾃｪn cao bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m ho蘯ｷc th盻穎h c蘯ｧu.

```javascript
function kneelAndReachUp(character) {
    const kneelReachAnimation = new THREE.AnimationClip("KneelReachUp", 2, [
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
    character.animations.push(kneelReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 272: Ch蘯｡y Vﾃ Nh蘯｣y ﾄ雪ｻ品 Hﾆｰ盻嬾g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ nh蘯｣y lﾃｪn cao ﾄ黛ｻ・ﾄ黛ｻ品 hﾆｰ盻嬾g, t蘯｡o c蘯｣m giﾃ｡c linh ho蘯｡t.

```javascript
function sprintAndChangeDirection(character) {
    const changeDirectionAnimation = new THREE.AnimationClip("SprintChangeDirection", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 4, 2]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(changeDirectionAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 273: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Ch蘯｡m C蘯ｱm**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ ﾄ柁ｰa m盻冲 tay lﾃｪn ch蘯｡m c蘯ｱm nhﾆｰ ﾄ疎ng suy nghﾄｩ.

```javascript
function standAndTouchChin(character) {
    const touchChinAnimation = new THREE.AnimationClip("TouchChin", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0.3, 0, 0.5, 0.3, 0]
        )
    ]);
    character.animations.push(touchChinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 274: Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱 180 ﾄ雪ｻ・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・trﾆｰ盻嫩 khi ﾄ妥｡p ﾄ黛ｺ･t.

```javascript
function leapAndTurnHalfCircle(character) {
    const turnHalfCircleAnimation = new THREE.AnimationClip("LeapTurnHalfCircle", 2, [
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
    character.animations.push(turnHalfCircleAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 275: Ch蘯｡y Vﾃ Giﾆ｡ Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh kﾃｨm theo giﾆ｡ m盻冲 tay lﾃｪn cao bi盻ブ th盻・s盻ｱ nhi盻㏄ tﾃｬnh.

```javascript
function sprintAndRaiseOneHand(character) {
    const raiseHandRunAnimation = new THREE.AnimationClip("SprintRaiseOneHand", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(raiseHandRunAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 276: ﾄ雪ｻｩng V盻嬖 Tay Du盻擁 Th蘯ｳng Ra Phﾃｭa Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa tay du盻擁 ra phﾃｭa sau t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n.

```javascript
function standAndStretchArmsBack(character) {
    const stretchArmsBackAnimation = new THREE.AnimationClip("StretchArmsBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchArmsBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 277: Nh蘯｣y Lﾃｪn Cao V盻嬖 Tay Vung V盻・Phﾃｭa Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh lﾃｪn cao vﾃ vung tay v盻・phﾃｭa sau t蘯｡o ﾄ訴盻ノ nh蘯･n.

```javascript
function leapHighWithArmsSwingBack(character) {
    const leapSwingBackAnimation = new THREE.AnimationClip("LeapHighSwingBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapSwingBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 278: ﾄ雪ｻｩng Yﾃｪn Vﾃ G蘯ｭt ﾄ雪ｺｧu Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g thu蘯ｭn.

```javascript
function standAndNodSoftly(character) {
    const nodSoftlyAnimation = new THREE.AnimationClip("StandNodSoftly", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodSoftlyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 279: Quay Lﾆｰng Vﾃ V盻・Vai**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay nh蘯ｹ lﾆｰng vﾃ ﾄ柁ｰa tay lﾃｪn v盻・vai bi盻ブ th盻・s盻ｱ ﾄ黛ｻ冢g viﾃｪn.

```javascript
function turnBackAndPatShoulder(character) {
    const patShoulderAnimation = new THREE.AnimationClip("TurnBackPatShoulder", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0]
        )
    ]);
    character.animations.push(patShoulderAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 280: ﾄ静｡ Cao V盻嬖 C盻ｭ ﾄ雪ｻ冢g Tay Ch蘯ｷn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung m盻冲 cﾃｺ ﾄ妥｡ cao kﾃｨm theo tay ﾄ柁ｰa ra ﾄ黛ｻ・ch蘯ｷn.

```javascript
function highKickWithBlockingArm(character) {
    const kickBlockAnimation = new THREE.AnimationClip("HighKickBlockingArm", 2, [
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
    character.animations.push(kickBlockAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g khﾃ｡c ho蘯ｷc tinh ch盻穎h cﾃ｡c hﾃnh ﾄ黛ｻ冢g nﾃy, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ
Hﾃ｣y cﾃｹng thﾃｪm nhi盻「 chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｧy sﾃ｡ng t蘯｡o n盻ｯa ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm s盻創g ﾄ黛ｻ冢g vﾃ phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 281: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Ch盻・Tay Sang Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ch盻・tay sang m盻冲 phﾃｭa ﾄ黛ｻ・hﾆｰ盻嬾g d蘯ｫn ho蘯ｷc bi盻ブ th盻・s盻ｱ ch盻・d蘯ｫn.

```javascript
function standAndPointSide(character) {
    const pointSideAnimation = new THREE.AnimationClip("StandPointSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 282: Quay ﾄ雪ｺｧu Vﾃ Cﾃｺi Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ﾄ黛ｺｧu sang m盻冲 bﾃｪn vﾃ cﾃｺi nh蘯ｹ t蘯｡o c蘯｣m giﾃ｡c khiﾃｪm nhﾆｰ盻拵g ho蘯ｷc l盻・phﾃｩp.

```javascript
function turnHeadAndBow(character) {
    const turnBowAnimation = new THREE.AnimationClip("TurnHeadBow", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 283: B蘯ｭt Nh蘯｣y Vﾃ Tung M盻冲 Cﾃｺ Ch盻皇**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn vﾃ tung m盻冲 cﾃｺ ch盻皇 tay ra phﾃｭa trﾆｰ盻嫩 v盻嬖 l盻ｱc m蘯｡nh.

```javascript
function leapAndJab(character) {
    const leapJabAnimation = new THREE.AnimationClip("LeapJab", 2, [
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
    character.animations.push(leapJabAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 284: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Khoanh Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay khoanh trﾆｰ盻嫩 ng盻ｱc t蘯｡o dﾃ｡ng t盻ｱ tin.

```javascript
function standAndCrossArms(character) {
    const crossArmsAnimation = new THREE.AnimationClip("CrossArms", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 285: Qu盻ｳ Xu盻創g Vﾃ V盻・Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ xu盻創g hai g盻訴 vﾃ v盻・tay nh蘯ｹ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ c盻・vﾅｩ.

```javascript
function kneelAndSoftClap(character) {
    const kneelClapAnimation = new THREE.AnimationClip("KneelSoftClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 286: Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱 Nhi盻「 Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ xoay ngﾆｰ盻拱 liﾃｪn ti蘯ｿp nhi盻「 vﾃｲng trﾆｰ盻嫩 khi ﾄ妥｡p ﾄ黛ｺ･t.

```javascript
function leapAndMultiSpin(character) {
    const multiSpinAnimation = new THREE.AnimationClip("LeapMultiSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(multiSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 287: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ D盻ｫng L蘯｡i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ nhﾃng vﾃ ﾄ黛ｻｩng yﾃｪn trong tﾆｰ th蘯ｿ thﾄハg b蘯ｱng.

```javascript
function stepBackAndStop(character) {
    const backStopAnimation = new THREE.AnimationClip("StepBackStop", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        )
    ]);
    character.animations.push(backStopAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 288: ﾄ静｡ Chﾃ｢n V盻・Phﾃｭa Trﾆｰ盻嫩 V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung m盻冲 cﾃｺ ﾄ妥｡ m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 tay giﾆ｡ cao bi盻ブ th盻・s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function frontKickWithHighArm(character) {
    const frontKickArmAnimation = new THREE.AnimationClip("FrontKickHighArm", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(frontKickArmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 289: Xoay Ngﾆｰ盻拱 Vﾃ D盻ｫng 盻馬 ﾄ雪ｻ杵h**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・vﾃ d盻ｫng l蘯｡i v盻嬖 dﾃ｡ng ﾄ黛ｻｩng 盻貧 ﾄ黛ｻ杵h.

```javascript
function spinAndStop(character) {
    const spinStopAnimation = new THREE.AnimationClip("SpinStop", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(spinStopAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 290: B蘯ｭt Nh蘯｣y Vﾃ ﾄ静｡ Xoay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ tung cﾃｺ ﾄ妥｡ xoay m蘯｡nh m蘯ｽ t蘯｡o 蘯･n tﾆｰ盻｣ng m蘯｡nh.

```javascript
function leapAndSpinningKick(character) {
    const leapSpinKickAnimation = new THREE.AnimationClip("LeapSpinningKick", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapSpinKickAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h chi ti蘯ｿt hﾆ｡n, c盻ｩ tho蘯｣i mﾃ｡i cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ
Hﾃ｣y cﾃｹng khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm phong phﾃｺ vﾃ lﾃｴi cu盻創:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 291: Qu盻ｳ Xu盻創g Vﾃ ﾄ脆ｰa Tay C蘯ｧu Nguy盻㌻**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ xu盻創g v盻嬖 hai g盻訴 vﾃ ﾄ柁ｰa tay lﾃｪn phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ c蘯ｧu nguy盻㌻ ho蘯ｷc hy v盻肱g.

```javascript
function kneelAndPray(character) {
    const kneelPrayAnimation = new THREE.AnimationClip("KneelPray", 2, [
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
    character.animations.push(kneelPrayAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 292: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Giﾆ｡ Tay Chﾃo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay giﾆ｡ lﾃｪn cao ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ chﾃo m盻ｫng ho蘯ｷc tﾃｴn tr盻肱g.

```javascript
function standAndSaluteHigh(character) {
    const saluteHighAnimation = new THREE.AnimationClip("SaluteHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(saluteHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 293: Ch蘯｡y Nhanh Vﾃ Phanh L蘯｡i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y v盻嬖 t盻祖 ﾄ黛ｻ・cao vﾃ ﾄ黛ｻ冲 ng盻冲 phanh l蘯｡i m盻冲 cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function sprintAndStopSuddenly(character) {
    const stopSuddenAnimation = new THREE.AnimationClip("SprintStopSuddenly", 2, [
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
    character.animations.push(stopSuddenAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 294: Quay Ngﾆｰ盻拱 Vﾃ Ch盻・Tay Xa**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh vﾃ ch盻・tay v盻・phﾃｭa xa ﾄ黛ｻ・bi盻ブ th盻・hﾆｰ盻嬾g d蘯ｫn.

```javascript
function spinAndPointFar(character) {
    const spinPointFarAnimation = new THREE.AnimationClip("SpinPointFar", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(spinPointFarAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 295: Nh蘯｣y Lﾃｪn Cao Vﾃ ﾄ脆ｰa Tay Sang Hai Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn m蘯｡nh m蘯ｽ vﾃ giﾆ｡ hai tay sang hai bﾃｪn ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ vui v蘯ｻ.

```javascript
function leapWithOpenArms(character) {
    const leapOpenAnimation = new THREE.AnimationClip("LeapOpenArms", 2, [
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
    character.animations.push(leapOpenAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 296: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ V盻・Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi l蘯｡i nh蘯ｹ nhﾃng vﾃ v盻・tay nh蘯ｹ bi盻ブ th盻・s盻ｱ tﾃ｡n thﾆｰ盻殤g.

```javascript
function stepBackAndClapSoftly(character) {
    const backClapAnimation = new THREE.AnimationClip("StepBackSoftClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(backClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 297: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Vﾆｰﾆ｡n Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ vﾆｰﾆ｡n tay lﾃｪn cao nhﾆｰ ﾄ疎ng c盻・g蘯ｯng v盻嬖 t盻嬖 ﾄ訴盻「 gﾃｬ ﾄ妥ｳ.

```javascript
function standAndReachUpwards(character) {
    const reachUpwardsAnimation = new THREE.AnimationClip("StandReachUpwards", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(reachUpwardsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 298: Nh蘯｣y Vﾃ T蘯｡o Tﾆｰ Th蘯ｿ Quy盻］ L盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh lﾃｪn cao vﾃ t蘯｡o tﾆｰ th蘯ｿ quy盻］ l盻ｱc khi h蘯｡ xu盻創g.

```javascript
function leapAndPowerPose(character) {
    const powerPoseAnimation = new THREE.AnimationClip("LeapPowerPose", 2, [
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
    character.animations.push(powerPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 299: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Du盻擁 Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ nh蘯ｹ nhﾃng du盻擁 tay ra phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n.

```javascript
function standAndGentleStretch(character) {
    const gentleStretchAnimation = new THREE.AnimationClip("StandGentleStretch", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(gentleStretchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 300: Quay Ngﾆｰ盻拱 Vﾃ ﾄ雪ｺｭp Tay Xu盻創g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・vﾃ ﾄ黛ｺｭp m蘯｡nh tay xu盻創g ﾄ黛ｺ･t, t蘯｡o c蘯｣m giﾃ｡c quy盻］ l盻ｱc.

```javascript
function spinAndSmashDown(character) {
    const spinSmashDownAnimation = new THREE.AnimationClip("SpinSmashDown", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(spinSmashDownAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ho蘯ｷc mu盻創 tinh ch盻穎h chi ti蘯ｿt, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Tﾃｴi luﾃｴn s蘯ｵn sﾃng thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm thﾃｺ v盻・vﾃ phong cﾃ｡ch:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 301: ﾄ雪ｻｩng Vﾃ V盻・Tay M盻冲 Cﾃ｡ch Nhi盻㏄ Tﾃｬnh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ v盻・tay m蘯｡nh m蘯ｽ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ hﾃo h盻ｩng.

```javascript
function standAndClapVigorously(character) {
    const clapVigorousAnimation = new THREE.AnimationClip("ClapVigorously", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(clapVigorousAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 302: B蘯ｭt Nh蘯｣y Vﾃ ﾄ脆ｰa Tay Ch蘯ｯn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ giﾆ｡ tay ch蘯ｯn phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ b蘯｣o v盻・

```javascript
function leapAndDefend(character) {
    const leapDefendAnimation = new THREE.AnimationClip("LeapDefend", 2, [
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
    character.animations.push(leapDefendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 303: Quay ﾄ雪ｺｧu Nh蘯ｹ Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ﾄ黛ｺｧu sang m盻冲 bﾃｪn vﾃ g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ t蘯｡o c蘯｣m giﾃ｡c thﾃ｢n thi盻㌻.

```javascript
function turnAndSmile(character) {
    const turnSmileAnimation = new THREE.AnimationClip("TurnSmile", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnSmileAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 304: Lﾃｹi Bﾆｰ盻嫩 Vﾃ Vung Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ vﾃ vung tay lﾃｪn cao t蘯｡o phong cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function retreatWithRaisedArms(character) {
    const retreatArmsAnimation = new THREE.AnimationClip("RetreatRaisedArms", 1.8, [
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
    character.animations.push(retreatArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 305: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Du盻擁 Tay M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ nh蘯ｹ nhﾃng du盻擁 m盻冲 cﾃ｡nh tay ra m盻冲 bﾃｪn t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n.

```javascript
function stretchOneArmSide(character) {
    const stretchArmSideAnimation = new THREE.AnimationClip("StretchArmSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stretchArmSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 306: B蘯ｭt Nh蘯｣y Vﾃ T蘯｡o Tﾆｰ Th蘯ｿ Quy盻］ Uy**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh m蘯ｽ vﾃ t蘯｡o tﾆｰ th蘯ｿ quy盻］ uy khi ti蘯ｿp ﾄ黛ｺ･t.

```javascript
function leapAndStrikePose(character) {
    const strikePoseAnimation = new THREE.AnimationClip("LeapStrikePose", 2, [
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
    character.animations.push(strikePoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 307: Lﾃｹi Vﾃ Du盻擁 Tay Ra Phﾃｭa Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ nhﾃng vﾃ ﾄ柁ｰa tay du盻擁 ra phﾃｭa sau t蘯｡o c蘯｣m giﾃ｡c tho蘯｣i mﾃ｡i.

```javascript
function stepBackAndStretchArms(character) {
    const stepStretchAnimation = new THREE.AnimationClip("StepBackStretchArms", 1.8, [
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
    character.animations.push(stepStretchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 308: ﾄ静｡ Chﾃ｢n Ngang V盻嬖 Tﾆｰ Th蘯ｿ Thﾄハg B蘯ｱng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung m盻冲 cﾃｺ ﾄ妥｡ ngang v盻嬖 tﾆｰ th蘯ｿ cﾃ｢n b蘯ｱng t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function balancedSideKick(character) {
    const balancedKickAnimation = new THREE.AnimationClip("BalancedSideKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(balancedKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 309: Nh蘯･c M盻冲 Tay Vﾃ L蘯ｯc Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯･c m盻冲 tay lﾃｪn vﾃ l蘯ｯc nh蘯ｹ nhﾆｰ ﾄ疎ng t蘯｡o tﾃｭn hi盻㎡.

```javascript
function liftOneArmAndWave(character) {
    const liftWaveAnimation = new THREE.AnimationClip("LiftOneArmWave", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(liftWaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 310: Ch蘯｡y Nhanh V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ ﾄ柁ｰa m盻冲 tay lﾃｪn cao t蘯｡o c蘯｣m giﾃ｡c nﾄハg ﾄ黛ｻ冢g.

```javascript
function sprintWithRaisedHand(character) {
    const sprintRaisedHandAnimation = new THREE.AnimationClip("SprintRaisedHand", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(sprintRaisedHandAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖, hﾃ｣y chia s蘯ｻ ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Chﾃｺng ta ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn sinh ﾄ黛ｻ冢g vﾃ lﾃｴi cu盻創 hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 311: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Giﾆ｡ Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ tay ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng c盻・g蘯ｯng ch蘯｡m vﾃo ﾄ訴盻「 gﾃｬ ﾄ妥ｳ.

```javascript
function stretchArmForward(character) {
    const stretchForwardAnimation = new THREE.AnimationClip("StretchArmForward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 312: Nh蘯｣y Lﾃｪn Vﾃ ﾄ静｡ V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao k蘯ｿt h盻｣p tung m盻冲 cﾃｺ ﾄ妥｡ m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function leapAndKickForward(character) {
    const leapKickAnimation = new THREE.AnimationClip("LeapKickForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 313: ﾄ雪ｻｩng Yﾃｪn Vﾃ Xoay Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng sang hai bﾃｪn ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c linh ho蘯｡t.

```javascript
function standAndTwistSides(character) {
    const twistSidesAnimation = new THREE.AnimationClip("TwistSides", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(twistSidesAnimation);
}
```
