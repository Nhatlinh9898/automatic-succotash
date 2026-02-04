            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinExtendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 134: Bﾆｰ盻嫩 Ti蘯ｿn K蘯ｿt H盻｣p Nh蘯｣y Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 nhanh v盻・phﾃｭa trﾆｰ盻嫩 r盻妬 nh蘯｣y nh蘯ｹ v盻嬖 dﾃ｡ng thﾆｰ giﾃ｣n.

```javascript
function stepForwardAndHop(character) {
    const stepHopAnimation = new THREE.AnimationClip("StepHop", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 1, 0, 0, 2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(stepHopAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 135: Quay Ngﾆｰ盻拱 Vﾃ Cﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ g蘯ｭt ﾄ黛ｺｧu cﾆｰ盻拱 bi盻ブ th盻・s盻ｱ thﾃ｢n thi盻㌻.

```javascript
function turnAndSmile(character) {
    const turnSmileAnimation = new THREE.AnimationClip("TurnSmile", 1.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnSmileAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 136: Nh蘯｣y V盻嬖 Tﾆｰ Th蘯ｿ M盻・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao v盻嬖 tay vﾃ chﾃ｢n dang r盻冢g.

```javascript
function leapWithOpenPose(character) {
    const leapOpenAnimation = new THREE.AnimationClip("LeapOpenPose", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(leapOpenAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 137: ﾄ脆ｰa Tay Lﾃｪn Vﾃ V盻・V盻・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆ｡ tay lﾃｪn cao sau ﾄ妥ｳ v盻・nh蘯ｹ xu盻創g ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ xoa d盻丘.

```javascript
function liftAndPat(character) {
    const liftPatAnimation = new THREE.AnimationClip("LiftPat", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftPatAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 138: G蘯ｭt ﾄ雪ｺｧu K蘯ｿt H盻｣p V盻・Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ vﾃ v盻・tay chﾃo m盻ｫng ho蘯ｷc tﾃ｡n thﾆｰ盻殤g.

```javascript
function nodAndClap(character) {
    const nodClapAnimation = new THREE.AnimationClip("NodClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
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
    character.animations.push(nodClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 139: ﾄ雪ｻｩng V盻嬖 Tay Giﾆ｡ Ra Hai Bﾃｪn**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng v盻嬖 tay giﾆ｡ r盻冢g sang hai bﾃｪn, bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn.

```javascript
function standWithOpenArms(character) {
    const openArmsAnimation = new THREE.AnimationClip("OpenArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 140: ﾄ雪ｺｩy V蘯ｭt K蘯ｿt H盻｣p V盻嬖 Ti蘯ｿng Nghi蘯ｿn Rﾄハg**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｺｩy m蘯｡nh v蘯ｭt n蘯ｷng bi盻ブ th盻・s盻ｱ c盻・g蘯ｯng.

```javascript
function pushWithEffort(character) {
    const pushEffortAnimation = new THREE.AnimationClip("PushEffort", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushEffortAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm ho蘯ｷc ch盻穎h s盻ｭa b蘯･t k盻ｳ hﾃnh ﾄ黛ｻ冢g nﾃo, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ



Hﾃ｣y ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt tr盻・nﾃｪn s盻創g ﾄ黛ｻ冢g vﾃ ﾄ黛ｻ冂 ﾄ妥｡o hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 141: ﾄ雪ｻｩng Th蘯ｳng Vﾃ V蘯ｷn Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng k蘯ｿt h盻｣p v蘯ｷn nh蘯ｹ ph蘯ｧn lﾆｰng ﾄ黛ｻ・thﾆｰ giﾃ｣n.

```javascript
function standAndTwistBack(character) {
    const twistBackAnimation = new THREE.AnimationClip("StandTwistBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(twistBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 142: B蘯ｭt Nh蘯｣y K蘯ｿt H盻｣p Tung Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ ﾄ柁ｰa tay tung m蘯｡nh t蘯｡o phong cﾃ｡ch sﾃｴi ﾄ黛ｻ冢g.

```javascript
function jumpAndWaveHands(character) {
    const jumpWaveAnimation = new THREE.AnimationClip("JumpWaveHands", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpWaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 143: Quay ﾄ雪ｺｧu Vﾃ Nghiﾃｪng Ngﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ﾄ黛ｺｧu k蘯ｿt h盻｣p nghiﾃｪng ngﾆｰ盻拱 nh蘯ｹ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ quan sﾃ｡t.

```javascript
function turnHeadAndLean(character) {
    const turnLeanAnimation = new THREE.AnimationClip("TurnHeadLean", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(turnLeanAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 144: ﾄ雪ｻｩng Th蘯ｳng Vﾃ ﾄ雪ｺｩy Tay Ra**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa c蘯｣ hai tay ra phﾃｭa trﾆｰ盻嫩, bi盻ブ th盻・s盻ｱ thﾃｺc ﾄ黛ｺｩy.

```javascript
function standAndPushForward(character) {
    const pushForwardAnimation = new THREE.AnimationClip("PushForwardStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 145: ﾄ静｡ Cao Vﾃ G蘯ｭp Ngﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ chﾃ｢n cao kﾃｨm theo cﾃｺi ngﾆｰ盻拱 g蘯ｭp nh蘯ｹ.

```javascript
function highKickAndBend(character) {
    const kickBendAnimation = new THREE.AnimationClip("HighKickBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickBendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 146: ﾄ雪ｻｩng Vﾃ V盻・Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng k蘯ｿt h盻｣p v盻・tay nh蘯ｹ ﾄ黛ｻ・chﾃｺc m盻ｫng.

```javascript
function standAndClapHands(character) {
    const clapAnimation = new THREE.AnimationClip("StandClapHands", 1.5, [
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
    character.animations.push(clapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 147: B蘯ｭt Nh蘯｣y Vﾃ Quay Ngﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 nhi盻「 vﾃｲng trﾆｰ盻嫩 khi ti蘯ｿp ﾄ黛ｺ･t.

```javascript
function jumpSpinMultiple(character) {
    const spinJumpAnimation = new THREE.AnimationClip("JumpSpinMultiple", 2.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.4, 2.8],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.4, 2.8],
            [0, 0, 0, 0, 2 * Math.PI, 0, 0, 4 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 148: ﾄ脆ｰa Tay Ra Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩 kﾃｨm theo cﾃｺ g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ.

```javascript
function extendArmAndNod(character) {
    const extendNodAnimation = new THREE.AnimationClip("ExtendArmNod", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(extendNodAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 149: Lﾃｹi L蘯｡i Vﾃ ﾄ雪ｻｩng Ch蘯ｯc Ch蘯ｯn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi nh蘯ｹ r盻妬 ﾄ黛ｻｩng v盻ｯng v盻嬖 tﾆｰ th蘯ｿ t盻ｱ tin.

```javascript
function stepBackAndStandFirm(character) {
    const stepStandAnimation = new THREE.AnimationClip("StepBackStandFirm", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stepStandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 150: Ch蘯｡y Vﾃ Vung Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p vung tay cao lﾃｪn ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ nhi盻㏄ tﾃｬnh.

```javascript
function sprintAndRaiseArms(character) {
    const sprintArmsAnimation = new THREE.AnimationClip("SprintRaiseArms", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sprintArmsAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c b盻・sung ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c thﾃｪm ph蘯ｧn hoﾃn h蘯｣o, hﾃ｣y nﾃｳi nhﾃｩ! 噫笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o hﾆ｡n n盻ｯa ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn sinh ﾄ黛ｻ冢g vﾃ cu盻創 hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 151: Lﾃｹi Bﾆｰ盻嫩 Vﾃ G蘯ｭp Ngﾆｰ盻拱**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g lﾃｹi m盻冲 bﾆｰ盻嫩 nh蘯ｹ nhﾃng r盻妬 g蘯ｭp ngﾆｰ盻拱 xu盻創g bi盻ブ th盻・s盻ｱ tﾃｴn tr盻肱g ho蘯ｷc ph蘯｣n 盻ｩng nhanh.

```javascript
function stepBackAndBow(character) {
    const stepBackBowAnimation = new THREE.AnimationClip("StepBackBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stepBackBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 152: B蘯ｭt Nh蘯｣y Lﾃｪn Cao Vﾃ Quay Ngﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao lﾃｪn khﾃｴng trung vﾃ xoay ngﾆｰ盻拱 180 ﾄ黛ｻ・trong khi ti蘯ｿp ﾄ黛ｺ･t m盻冲 cﾃ｡ch v盻ｯng vﾃng.

```javascript
function highJumpAndSpin(character) {
    const highJumpSpinAnimation = new THREE.AnimationClip("HighJumpSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, Math.PI, 0, 0, Math.PI, 0]
        )
    ]);
    character.animations.push(highJumpSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 153: Quay Vai Vﾃ Du盻擁 Cﾃ｡nh Tay**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g xoay vai nh蘯ｹ nhﾃng vﾃ du盻擁 tay th蘯ｳng ra phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・kh盻殃 ﾄ黛ｻ冢g.

```javascript
function rotateShouldersAndStretch(character) {
    const rotateStretchAnimation = new THREE.AnimationClip("RotateStretch", 2, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(rotateStretchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 154: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung Cﾃｺ ﾄ雪ｺ･m**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 th蘯･p k蘯ｿt h盻｣p tung cﾃｺ ﾄ黛ｺ･m nhanh vﾃ m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function bendAndPunch(character) {
    const bendPunchAnimation = new THREE.AnimationClip("BendPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bendPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 155: ﾄ雪ｻｩng Vﾃ Th蘯｣ L盻熟g Toﾃn Thﾃ｢n**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng thﾆｰ giﾃ｣n v盻嬖 c盻ｭ ﾄ黛ｻ冢g th蘯｣ l盻熟g vai vﾃ tay.

```javascript
function standAndRelax(character) {
    const relaxAnimation = new THREE.AnimationClip("StandRelax", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(relaxAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 156: Nh蘯･c V蘯ｭt N蘯ｷng Vﾃ Xoay Ngﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯･c v蘯ｭt lﾃｪn cao k蘯ｿt h盻｣p xoay ngﾆｰ盻拱 ﾄ黛ｻ・chuy盻ハ hﾆｰ盻嬾g.

```javascript
function liftObjectAndTurn(character) {
    const liftTurnAnimation = new THREE.AnimationClip("LiftTurn", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(liftTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 157: Bﾆｰ盻嫩 Nhanh V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g bﾆｰ盻嫩 nhanh k蘯ｿt h盻｣p v盻嬖 tay giﾆ｡ cao bi盻ブ th盻・s盻ｱ nhi盻㏄ tﾃｬnh ho蘯ｷc ph蘯･n khﾃｭch.

```javascript
function quickStepAndRaiseArm(character) {
    const quickStepAnimation = new THREE.AnimationClip("QuickStepRaiseArm", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 1.5, 0, 0, 2.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(quickStepAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 158: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay V蘯ｯt Chﾃｩo**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay v蘯ｯt chﾃｩo trﾆｰ盻嫩 ng盻ｱc t蘯｡o phong cﾃ｡ch suy tﾆｰ.

```javascript
function standWithCrossedArms(character) {
    const crossedArmsAnimation = new THREE.AnimationClip("CrossedArmsStand", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 159: Ch蘯｡y V盻嬖 Tﾆｰ Th蘯ｿ Nh蘯ｹ Nhﾃng**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ch蘯｡y nhanh nhﾆｰng v盻嬖 phong thﾃ｡i nh蘯ｹ nhﾃng vﾃ thanh thoﾃ｡t.

```javascript
function softSprint(character) {
    const softSprintAnimation = new THREE.AnimationClip("SoftSprint", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(softSprintAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 160: Cﾃｺi ﾄ雪ｺｧu V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ﾄ黛ｺｧu nh蘯ｹ k蘯ｿt h盻｣p ﾄ黛ｺｷt tay lﾃｪn ng盻ｱc th盻・hi盻㌻ s盻ｱ c蘯｣m kﾃｭch ho蘯ｷc tﾃｴn tr盻肱g.

```javascript
function bowWithHandOnChest(character) {
    const bowChestAnimation = new THREE.AnimationClip("BowHandChest", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bowChestAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm, hﾃ｣y cho tﾃｴi bi蘯ｿt ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c sﾃ｡ng t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 cho nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n! 噫笨ｨ
Ti蘯ｿp t盻･c sﾃ｡ng t蘯｡o cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sinh ﾄ黛ｻ冢g vﾃ ﾄ疎 d蘯｡ng ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn h蘯･p d蘯ｫn hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 161: Quay Ngﾆｰ盻拱 Vﾃ ﾄ雪ｺｩy Tay Xu盻創g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 nhanh vﾃ ﾄ柁ｰa tay m蘯｡nh xu盻創g nhﾆｰ ﾄ疎ng hoﾃn thﾃnh m盻冲 cﾃｺ ﾄ妥｡nh.

```javascript
function spinAndSmash(character) {
    const spinSmashAnimation = new THREE.AnimationClip("SpinSmash", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinSmashAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 162: ﾄ雪ｻｩng Th蘯ｳng Vﾃ ﾄ脆ｰa Tay Lﾃｪn Cao**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa c蘯｣ hai tay lﾃｪn cao ﾄ黛ｻ・t蘯｡o s盻ｱ m蘯｡nh m蘯ｽ ho蘯ｷc bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g tﾃｬnh.

```javascript
function standRaiseBothArms(character) {
    const raiseArmsAnimation = new THREE.AnimationClip("RaiseBothArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 163: Nhﾃｺn Vai Vﾃ Quay Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nhﾃｺn vai nh蘯ｹ nhﾃng kﾃｨm theo xoay ngﾆｰ盻拱 th盻・hi盻㌻ s盻ｱ th蘯｣n nhiﾃｪn.

```javascript
function shrugAndTurn(character) {
    const shrugTurnAnimation = new THREE.AnimationClip("ShrugTurn", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(shrugTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 164: ﾄ雪ｺｩy Tay Ra Vﾃ G蘯ｭp Ngﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩 k蘯ｿt h盻｣p v盻嬖 g蘯ｭp ngﾆｰ盻拱 nh蘯ｹ nhﾃng.

```javascript
function pushAndBend(character) {
    const pushBendAnimation = new THREE.AnimationClip("PushBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushBendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 165: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Giﾆ｡ Sang Hai Bﾃｪn**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng v盻ｯng vﾃng vﾃ ﾄ柁ｰa hai tay ra hai bﾃｪn ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c m盻拱 g盻絞 ho蘯ｷc m盻・r盻冢g.

```javascript
function standWithWideArms(character) {
    const wideArmsAnimation = new THREE.AnimationClip("WideArmsStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(wideArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 166: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 Tay Kﾃｩo V盻・Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi m盻冲 bﾆｰ盻嫩 nh蘯ｹ nhﾃng kﾃｨm theo c盻ｭ ﾄ黛ｻ冢g tay kﾃｩo v盻・sau.

```javascript
function retreatAndPull(character) {
    const retreatPullAnimation = new THREE.AnimationClip("RetreatPull", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(retreatPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 167: ﾄ雪ｻｩng Vﾃ ﾄ脆ｰa Tay Lﾃｪn ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ giﾆ｡ m盻冲 tay lﾃｪn cao trﾃｪn ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ nhi盻㏄ tﾃｬnh.

```javascript
function raiseOneArmHigh(character) {
    const raiseArmAnimation = new THREE.AnimationClip("RaiseOneArmHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 168: Cﾃｺi ﾄ雪ｺｧu Vﾃ ﾄ雪ｺｷt Tay Lﾃｪn G盻訴**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ﾄ黛ｺｧu nh蘯ｹ nhﾃng kﾃｨm theo ﾄ黛ｺｷt tay lﾃｪn g盻訴 bi盻ブ th盻・s盻ｱ m盻㏄ m盻淑 ho蘯ｷc thﾆｰ giﾃ｣n.

```javascript
function bendHeadAndRestHands(character) {
    const bendRestAnimation = new THREE.AnimationClip("BendHeadRestHands", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bendRestAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 169: ﾄ静｡ Chﾃ｢n Vﾃ Quay ﾄ雪ｺｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung cﾃｺ ﾄ妥｡ m蘯｡nh vﾃ xoay ﾄ黛ｺｧu sang bﾃｪn ﾄ黛ｻ・t蘯｡o ﾄ訴盻ノ nh蘯･n.

```javascript
function kickAndTurnHead(character) {
    const kickTurnAnimation = new THREE.AnimationClip("KickTurnHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 170: ﾄ雪ｺｩy Tay Ra K蘯ｿt H盻｣p Quay Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺｩy m蘯｡nh tay v盻・phﾃｭa trﾆｰ盻嫩 vﾃ xoay lﾆｰng nh蘯ｹ bi盻ブ th盻・s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function pushArmAndSpinBack(character) {
    const pushSpinAnimation = new THREE.AnimationClip("PushSpinBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(pushSpinAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c v盻嬖 cﾃ｡c ﾃｽ tﾆｰ盻殤g sﾃ｡ng t蘯｡o khﾃ｡c, hﾃ｣y chia s蘯ｻ nhﾃｩ! Tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣ b蘯｡n thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｷc s蘯ｯc! 噫笨ｨ

Ti蘯ｿp t盻･c b盻・sung cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o vﾃ ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm s盻創g ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 171: ﾄ雪ｻｩng Vﾃ Ch盻・Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ ch盻・tay v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 phong thﾃ｡i t盻ｱ tin.

```javascript
function pointForwardWithConfidence(character) {
    const pointAnimation = new THREE.AnimationClip("PointForwardConfident", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 172: Lﾃｹi Vﾃ Vung Tay Ph蘯｣n ﾄ静ｲn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi m盻冲 bﾆｰ盻嫩 vﾃ vung tay m蘯｡nh ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng ph蘯｣n ﾄ妥ｲn.

```javascript
function retreatAndStrikeBack(character) {
    const strikeBackAnimation = new THREE.AnimationClip("RetreatStrikeBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(strikeBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 173: Cﾃｺi Ngﾆｰ盻拱 Vﾃ ﾄ雪ｺ･m Nhanh**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g cﾃｺi th蘯･p vﾃ th盻ｱc hi盻㌻ cﾃｺ ﾄ黛ｺ･m nhanh v盻嬖 l盻ｱc m蘯｡nh m蘯ｽ.

```javascript
function duckAndPunchFast(character) {
    const duckPunchAnimation = new THREE.AnimationClip("DuckPunchFast", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(duckPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 174: Ch蘯｡y Vﾃ Nh蘯｣y Lﾃｪn Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p nh蘯｣y lﾃｪn cao v盻嬖 tﾆｰ th蘯ｿ m蘯｡nh m蘯ｽ.

```javascript
function sprintAndHighJump(character) {
    const sprintJumpAnimation = new THREE.AnimationClip("SprintHighJump", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 2]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sprintJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 175: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g Eo**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng t盻ｱ tin vﾃ ﾄ黛ｺｷt tay ch盻創g hai bﾃｪn eo.

```javascript
function standWithHandsOnHips(character) {
    const handsOnHipsAnimation = new THREE.AnimationClip("HandsOnHips", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsOnHipsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 176: Nh蘯｣y Xoay Ngﾆｰ盻拱 360 ﾄ雪ｻ・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 m盻冲 vﾃｲng trﾃｲn hoﾃn ch盻穎h trﾆｰ盻嫩 khi h蘯｡ ﾄ黛ｺ･t.

```javascript
function jumpAndSpinFullCircle(character) {
    const spinCircleAnimation = new THREE.AnimationClip("JumpSpinFullCircle", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinCircleAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 177: L蘯ｯc ﾄ雪ｺｧu V盻嬖 Tﾆｰ Th蘯ｿ C蘯｣nh Bﾃ｡o**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ th盻・hi盻㌻ ﾃｽ nghﾄｩa c蘯｣nh bﾃ｡o ho蘯ｷc t盻ｫ ch盻訴.

```javascript
function shakeHeadWarning(character) {
    const shakeHeadAnimation = new THREE.AnimationClip("ShakeHeadWarning", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 178: Nh蘯･c C蘯｣ Hai Tay Vﾃ Tung Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯･c c蘯｣ hai tay vﾃ ﾄ柁ｰa lﾃｪn cao bi盻ブ th盻・s盻ｱ vui m盻ｫng.

```javascript
