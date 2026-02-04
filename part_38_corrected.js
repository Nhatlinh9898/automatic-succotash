### **Chuy盻ハ ﾄ雪ｻ冢g 223: ﾄ静｡ Chﾃ｢n Cao Vﾃ Vﾃｲng Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ妥｡ m盻冲 cﾃｺ m蘯｡nh lﾃｪn cao k蘯ｿt h盻｣p v盻嬖 tay t蘯｡o dﾃ｡ng vﾃｲng cung.

```javascript
function highKickWithArmsArc(character) {
    const highKickArmsAnimation = new THREE.AnimationClip("HighKickArmsArc", 2, [
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
    character.animations.push(highKickArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 224: Quay Ngﾆｰ盻拱 Vﾃ Vung Tay M蘯｡nh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 nhanh vﾃ vung m蘯｡nh tay ra phﾃｭa trﾆｰ盻嫩.

```javascript
function spinAndSwing(character) {
    const spinSwingAnimation = new THREE.AnimationClip("SpinSwing", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(spinSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 225: Nh蘯｣y Lﾃｹi Vﾃ Kﾃｩo Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｹi nhanh k蘯ｿt h盻｣p kﾃｩo tay ra sau ﾄ黛ｻ・phﾃｲng th盻ｧ.

```javascript
function jumpBackAndPull(character) {
    const jumpPullAnimation = new THREE.AnimationClip("JumpBackPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 226: Qu盻ｳ Hai G盻訴 Vﾃ V盻・Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ xu盻創g c蘯｣ hai g盻訴 vﾃ v盻・nh蘯ｹ tay ﾄ黛ｻ・chﾃo m盻ｫng ho蘯ｷc c蘯｣m ﾆ｡n.

```javascript
function kneelAndClap(character) {
    const kneelClapAnimation = new THREE.AnimationClip("KneelClap", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
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
    character.animations.push(kneelClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 227: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Du盻擁 Vai**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn k蘯ｿt h盻｣p ﾄ黛ｻ冢g tﾃ｡c du盻擁 vai thﾆｰ giﾃ｣n.

```javascript
function standAndStretchShoulders(character) {
    const stretchShouldersAnimation = new THREE.AnimationClip("StretchShoulders", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(stretchShouldersAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 228: Nh蘯｣y Vﾃ Vung Tay V盻・Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ vung tay m蘯｡nh v盻・phﾃｭa sau ﾄ黛ｻ・t蘯｡o s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function leapAndSwingBack(character) {
    const leapSwingAnimation = new THREE.AnimationClip("LeapSwingBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 229: Bﾆｰ盻嫩 Ch蘯ｭm Vﾃ ﾄ雪ｺｷt Tay Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 ﾄ訴 ch蘯ｭm rﾃ｣i k蘯ｿt h盻｣p ﾄ黛ｺｷt tay ra sau lﾆｰng bi盻ブ th盻・s盻ｱ bﾃｬnh th蘯｣n.

```javascript
function slowStepAndHandsBack(character) {
    const slowStepBackAnimation = new THREE.AnimationClip("SlowStepHandsBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slowStepBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 230: ﾄ雪ｺｩy Tay Ra Trﾆｰ盻嫩 K蘯ｿt H盻｣p Quay ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺｩy tay v盻・phﾃｭa trﾆｰ盻嫩 k蘯ｿt h盻｣p quay ﾄ黛ｺｧu sang m盻冲 bﾃｪn.

```javascript
function pushForwardAndTurnHead(character) {
    const pushTurnAnimation = new THREE.AnimationClip("PushForwardTurnHead", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushTurnAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 tﾃｴi t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ho蘯ｷc ﾄ訴盻「 ch盻穎h nh盻ｯng hﾃnh ﾄ黛ｻ冢g nﾃy theo ﾃｽ thﾃｭch, hﾃ｣y nﾃｳi nhﾃｩ! 噫笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c v盻嬖 nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o khﾃ｡c ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn ﾄ黛ｻ冂 ﾄ妥｡o vﾃ phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 231: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Vung Tay Nhanh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ vung tay nhanh v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function standAndSwingFast(character) {
    const swingFastAnimation = new THREE.AnimationClip("SwingFast", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(swingFastAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 232: Lﾃｹi Vﾃ Ch盻創g Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi m盻冲 bﾆｰ盻嫩 nh盻・vﾃ ch盻創g tay lﾃｪn ﾄ妥ｹi bi盻ブ th盻・s盻ｱ m盻㏄ m盻淑 ho蘯ｷc cﾃ｢n b蘯ｱng.

```javascript
function stepBackAndRestArms(character) {
    const stepBackRestAnimation = new THREE.AnimationClip("StepBackRestArms", 1.8, [
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
    character.animations.push(stepBackRestAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 233: ﾄ雪ｻｩng Vﾃ Tung Cﾃｺ ﾄ雪ｺ･m V盻・Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng v盻ｯng k蘯ｿt h盻｣p tung m盻冲 cﾃｺ ﾄ黛ｺ･m m蘯｡nh v盻・phﾃｭa sau.

```javascript
function standAndPunchBack(character) {
    const punchBackAnimation = new THREE.AnimationClip("PunchBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(punchBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 234: Nh蘯｣y Vﾃ Giﾆ｡ Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ giﾆ｡ tay v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m.

```javascript
function leapAndReachForward(character) {
    const leapReachAnimation = new THREE.AnimationClip("LeapReachForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 235: ﾄ静｡ Ngang Vﾃ Xoay Ngﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ妥｡ ngang m蘯｡nh m蘯ｽ k蘯ｿt h盻｣p v盻嬖 xoay ngﾆｰ盻拱 t蘯｡o c蘯｣m giﾃ｡c uy盻ハ chuy盻ハ.

```javascript
function sideKickAndTurn(character) {
    const sideKickTurnAnimation = new THREE.AnimationClip("SideKickTurn", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sideKickTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 236: ﾄ雪ｻｩng Yﾃｪn Vﾃ Quay Vai Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ xoay nh蘯ｹ vai ﾄ黛ｻ・thﾆｰ giﾃ｣n ho蘯ｷc t蘯｡o ﾄ訴盻ノ nh蘯･n nh蘯ｹ nhﾃng.

```javascript
function standAndShoulderTwist(character) {
    const shoulderTwistAnimation = new THREE.AnimationClip("ShoulderTwist", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shoulderTwistAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 237: Ch蘯｡y Vﾃ Tung Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p v盻嬖 c盻ｭ ﾄ黛ｻ冢g tay tung lﾃｪn cao t蘯｡o s盻ｱ nhi盻㏄ tﾃｬnh.

```javascript
function sprintAndThrowArmsUp(character) {
    const sprintThrowArmsAnimation = new THREE.AnimationClip("SprintThrowArmsUp", 2.2, [
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
    character.animations.push(sprintThrowArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 238: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Du盻擁 Sang Hai Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn k蘯ｿt h盻｣p tay du盻擁 r盻冢g sang hai bﾃｪn bi盻ブ th盻・s盻ｱ t盻ｱ tin.

```javascript
function standWithExtendedArms(character) {
    const extendedArmsAnimation = new THREE.AnimationClip("ExtendedArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(extendedArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 239: Nh蘯｣y Vﾃ Tung Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ tung tay m盻冲 cﾃ｡ch nh蘯ｹ nhﾃng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ vui v蘯ｻ.

```javascript
function leapAndSwingHands(character) {
    const leapSwingHandsAnimation = new THREE.AnimationClip("LeapSwingHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(leapSwingHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 240: ﾄ脆ｰa Tay Ra Vﾃ Xoay Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ柁ｰa tay v盻・phﾃｭa trﾆｰ盻嫩 k蘯ｿt h盻｣p xoay nh蘯ｹ lﾆｰng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ linh ho蘯｡t.

```javascript
function extendArmAndTurnBack(character) {
    const extendTurnBackAnimation = new THREE.AnimationClip("ExtendArmTurnBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(extendTurnBackAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm cﾃ｡c ﾃｽ tﾆｰ盻殤g sﾃ｡ng t蘯｡o khﾃ｡c ho蘯ｷc cﾃ｡ nhﾃ｢n hﾃｳa cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ
Hﾃ｣y cﾃｹng khﾃ｡m phﾃ｡ thﾃｪm nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o vﾃ ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn thﾃｺ v盻・hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 241: Nh蘯･c Chﾃ｢n Vﾃ Quay ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nﾃ｢ng m盻冲 chﾃ｢n lﾃｪn trong khi xoay ﾄ黛ｺｧu nh蘯ｹ nhﾃng nhﾃｬn v盻・phﾃｭa sau.

```javascript
function liftLegAndTurnHead(character) {
    const liftTurnAnimation = new THREE.AnimationClip("LiftLegTurnHead", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(liftTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 242: B蘯ｭt Nh蘯｣y Vﾃ Giﾆ｡ Tay Chﾃo**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao kﾃｨm theo tay giﾆ｡ lﾃｪn trﾃｪn ﾄ黛ｻ・chﾃo m盻冲 cﾃ｡ch nﾄハg ﾄ黛ｻ冢g.

```javascript
function jumpAndWave(character) {
    const jumpWaveAnimation = new THREE.AnimationClip("JumpWave", 2, [
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
    character.animations.push(jumpWaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 243: L蘯ｯc ﾄ雪ｺｧu Vﾃ Ch盻創g Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ nhﾃng k蘯ｿt h盻｣p ﾄ黛ｺｷt tay ch盻創g hﾃｴng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ khﾃｴng hﾃi lﾃｲng.

```javascript
function shakeHeadAndRestHandsOnHips(character) {
    const shakeRestAnimation = new THREE.AnimationClip("ShakeHeadRestHips", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(shakeRestAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 244: ﾄ静｡ Vﾃｲng Vﾃ Xoay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ妥｡ vﾃｲng cung k蘯ｿt h盻｣p xoay ngﾆｰ盻拱 nhanh ﾄ黛ｻ・hoﾃn thi盻㌻ ﾄ黛ｻ冢g tﾃ｡c.

```javascript
function roundKickWithSpin(character) {
    const roundKickSpinAnimation = new THREE.AnimationClip("RoundKickSpin", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(roundKickSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 245: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Cﾃｺi Chﾃo Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ cﾃｺi ﾄ黛ｺｧu nh蘯ｹ nhﾃng bi盻ブ th盻・s盻ｱ l盻議h s盻ｱ.

```javascript
function standAndBowGently(character) {
    const gentleBowAnimation = new THREE.AnimationClip("StandBowGentle", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(gentleBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 246: Nh蘯｣y Vﾃ ﾄ雪ｺｷt Tay Vﾃo Trﾃ｡i Tim**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y nh蘯ｹ vﾃ ﾄ黛ｺｷt tay lﾃｪn ng盻ｱc bi盻ブ th盻・s盻ｱ c蘯｣m kﾃｭch.

```javascript
function jumpAndHoldHeart(character) {
    const jumpHoldHeartAnimation = new THREE.AnimationClip("JumpHoldHeart", 2, [
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
    character.animations.push(jumpHoldHeartAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 247: ﾄ脆ｰa Tay Vﾃ V盻・Nh蘯ｹ Lﾃｪn Vai**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ柁ｰa tay v盻・phﾃｭa trﾆｰ盻嫩 vﾃ v盻・nh蘯ｹ vﾃo vai nhﾆｰ ﾄ疎ng khﾃｭch l盻・

```javascript
function extendArmAndPatShoulder(character) {
    const patShoulderAnimation = new THREE.AnimationClip("ExtendPatShoulder", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(patShoulderAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 248: Qu盻ｳ M盻冲 G盻訴 Vﾃ ﾄ脆ｰa Tay Ra**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c qu盻ｳ m盻冲 g盻訴 kﾃｨm theo ﾄ柁ｰa tay v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng h盻ｩa h蘯ｹn.

```javascript
function kneelAndExtendHand(character) {
    const kneelExtendAnimation = new THREE.AnimationClip("KneelExtendHand", 2, [
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
    character.animations.push(kneelExtendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 249: Ch蘯｡y Vﾃ Nﾃｩm M蘯｡nh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ nﾃｩm m蘯｡nh tay ra phﾃｭa trﾆｰ盻嫩.

```javascript
function runAndThrow(character) {
    const runThrowAnimation = new THREE.AnimationClip("RunThrow", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(runThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 250: ﾄ静｡ Nh蘯ｹ Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ nh蘯ｹ nhﾃng kﾃｨm theo cﾃｺ g蘯ｭt ﾄ黛ｺｧu ﾄ黛ｻ渡g tﾃｬnh ho蘯ｷc khﾃｭch l盻・

```javascript
function gentleKickAndNod(character) {
    const kickNodAnimation = new THREE.AnimationClip("GentleKickNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickNodAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ho蘯ｷc c蘯｣i ti蘯ｿn phong cﾃ｡ch, tﾃｴi r蘯･t s蘯ｵn sﾃng h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c cﾃｹng tﾃｴi khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn sinh ﾄ黛ｻ冢g vﾃ phong cﾃ｡ch:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 251: ﾄ雪ｻｩng Vﾃ Ch盻創g Tay Lﾃｪn ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ch盻創g c蘯｣ hai tay lﾃｪn ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ m盻㏄ m盻淑 ho蘯ｷc suy tﾆｰ.

```javascript
function restHandsOnHead(character) {
    const restHandsAnimation = new THREE.AnimationClip("RestHandsOnHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(restHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 252: Nhﾃｺn Vai Vﾃ Nhﾃｬn V盻・M盻冲 Bﾃｪn**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nhﾃｺn vai nh蘯ｹ kﾃｨm theo quay ﾄ黛ｺｧu nhﾃｬn v盻・m盻冲 phﾃｭa nhﾆｰ ﾄ疎ng bﾄハ khoﾄハ.

```javascript
function shrugAndLookSide(character) {
    const shrugLookAnimation = new THREE.AnimationClip("ShrugLookSide", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shrugLookAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 253: Ch蘯｡y Vﾃ Vung Tay Sang Hai Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh kﾃｨm theo tay vung r盻冢g sang hai bﾃｪn, t蘯｡o c蘯｣m giﾃ｡c ph蘯･n kh盻殃.

```javascript
function runWithWideArmSwing(character) {
    const wideArmRunAnimation = new THREE.AnimationClip("RunWideArmSwing", 2, [
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
    character.animations.push(wideArmRunAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 254: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ Che M蘯ｷt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi nh蘯ｹ k蘯ｿt h盻｣p ﾄ柁ｰa tay lﾃｪn che m蘯ｷt bi盻ブ th盻・s盻ｱ b蘯･t ng盻・

```javascript
function stepBackAndCoverFace(character) {
    const coverFaceAnimation = new THREE.AnimationClip("StepBackCoverFace", 1.8, [
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
    character.animations.push(coverFaceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 255: Nh蘯｣y Lﾃｪn Vﾃ Ch蘯｡m Bﾃn Chﾃ｢n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ cﾃｺi ngﾆｰ盻拱 ch蘯｡m hai tay vﾃo bﾃn chﾃ｢n trong khﾃｴng trung.

```javascript
function leapAndTouchFeet(character) {
    const touchFeetAnimation = new THREE.AnimationClip("LeapTouchFeet", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchFeetAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 256: ﾄ雪ｻｩng Vﾃ ﾄ脆ｰa Tay Lﾃｪn Che Trﾃ｡n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ黛ｺｷt tay lﾃｪn trﾃ｡n nhﾆｰ ﾄ疎ng tﾃｬm ki蘯ｿm ho蘯ｷc ng蘯ｯm nhﾃｬn.

```javascript
function standAndShieldEyes(character) {
    const shieldEyesAnimation = new THREE.AnimationClip("StandShieldEyes", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 257: Qu盻ｳ G盻訴 Vﾃ Ch盻創g Tay Xu盻創g ﾄ雪ｺ･t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c qu盻ｳ xu盻創g hai g盻訴 vﾃ ch盻創g tay xu盻創g ﾄ黛ｺ･t bi盻ブ th盻・s盻ｱ c盻・g蘯ｯng ho蘯ｷc m盻㏄ m盻淑.

```javascript
function kneelAndBraceGround(character) {
    const kneelBraceAnimation = new THREE.AnimationClip("KneelBraceGround", 2, [
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
    character.animations.push(kneelBraceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 258: Quay Ngﾆｰ盻拱 Vﾃ ﾄ雪ｻｩng V盻嬖 Tay B盻・Tﾃｺi**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ ﾄ黛ｻｩng v盻嬖 hai tay b盻・vﾃo tﾃｺi t蘯｡o c蘯｣m giﾃ｡c tho蘯｣i mﾃ｡i.

```javascript
function turnAndHandsInPockets(character) {
    const handsPocketsAnimation = new THREE.AnimationClip("TurnHandsPockets", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(handsPocketsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 259: ﾄ雪ｻｩng Th蘯ｳng Vﾃ L蘯ｯc Vai**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ l蘯ｯc vai qua l蘯｡i ﾄ黛ｻ・t蘯｡o s盻ｱ t盻ｱ nhiﾃｪn ho蘯ｷc kh盻殃 ﾄ黛ｻ冢g.

```javascript
function standAndShakeShoulders(character) {
    const shakeShouldersAnimation = new THREE.AnimationClip("ShakeShoulders", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeShouldersAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 260: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ ﾄ雪ｺ･m Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi nh蘯ｹ kﾃｨm theo tung m盻冲 cﾃｺ ﾄ黛ｺ･m m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function stepBackAndPunch(character) {
    const stepPunchAnimation = new THREE.AnimationClip("StepBackPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stepPunchAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ﾃｽ tﾆｰ盻殤g m盻嬖 ho蘯ｷc ch盻穎h s盻ｭa chi ti蘯ｿt, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ
Chﾃｺng ta ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn thﾃｺ v盻・hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 261: ﾄ雪ｻｩng V盻嬖 Tay ﾄ雪ｺｷt Trﾃｪn C蘯ｱm**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ﾄ黛ｺｷt trﾃｪn c蘯ｱm, bi盻ブ th盻・s盻ｱ suy tﾆｰ ho蘯ｷc quan sﾃ｡t.

```javascript
function standAndThink(character) {
    const thinkAnimation = new THREE.AnimationClip("StandThink", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0.2, 0, 0.5, 0.2, 0]
        )
    ]);
    character.animations.push(thinkAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 262: L蘯ｯc Vai Vﾃ Giﾆ｡ M盻冲 Tay**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g l蘯ｯc vai nh蘯ｹ nhﾃng k蘯ｿt h盻｣p giﾆ｡ m盻冲 tay lﾃｪn ﾄ黛ｻ・chﾃo ho蘯ｷc phﾃ｡t bi盻ブ.

```javascript
function shakeShouldersAndRaiseHand(character) {
    const shakeRaiseAnimation = new THREE.AnimationClip("ShakeShouldersRaiseHand", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shakeRaiseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 263: Qu盻ｳ M盻冲 G盻訴 Vﾃ Cﾃｺi ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 vﾃ cﾃｺi ﾄ黛ｺｧu xu盻創g bi盻ブ th盻・s盻ｱ kﾃｭnh tr盻肱g.

```javascript
function kneelAndBow(character) {
    const kneelBowAnimation = new THREE.AnimationClip("KneelBow", 2, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 264: B蘯ｭt Nh蘯｣y Vﾃ Quay Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y nh蘯ｹ vﾃ xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・trﾆｰ盻嫩 khi ﾄ妥｡p ﾄ黛ｺ･t.

```javascript
function jumpAndHalfSpin(character) {
    const jumpSpinAnimation = new THREE.AnimationClip("JumpHalfSpin", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
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

### **Chuy盻ハ ﾄ雪ｻ冢g 265: Lﾃｹi Bﾆｰ盻嫩 Vﾃ Quay ﾄ雪ｺｧu L蘯｡i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi bﾆｰ盻嫩 kﾃｨm v盻嬖 quay ﾄ黛ｺｧu nhﾃｬn l蘯｡i, bi盻ブ th盻・s盻ｱ c蘯｣nh giﾃ｡c.

```javascript
function stepBackAndLookOverShoulder(character) {
    const lookOverShoulderAnimation = new THREE.AnimationClip("StepBackLookOverShoulder", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(lookOverShoulderAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 266: ﾄ静｡ Chﾃ｢n V盻嬖 Tﾆｰ Th蘯ｿ V盻ｯng Vﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ m蘯｡nh v盻嬖 chﾃ｢n t蘯｡o c蘯｣m giﾃ｡c cﾃ｢n b蘯ｱng vﾃ kiﾃｪn cﾆｰ盻拵g.

```javascript
function kickWithStability(character) {
    const stableKickAnimation = new THREE.AnimationClip("KickStability", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stableKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 267: ﾄ雪ｻｩng Vﾃ V盻・Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ v盻・tay ch蘯ｭm rﾃ｣i bi盻ブ th盻・s盻ｱ tﾃ｡n thﾆｰ盻殤g.

```javascript
function standAndSoftClap(character) {
    const softClapAnimation = new THREE.AnimationClip("SoftClap", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(softClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 268: Ch蘯｡y Vﾃ Xoay Ngﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh kﾃｨm xoay ngﾆｰ盻拱 90 ﾄ黛ｻ・ﾄ黛ｻ・thay ﾄ黛ｻ品 hﾆｰ盻嬾g.

```javascript
function sprintAndTurnQuickly(character) {
