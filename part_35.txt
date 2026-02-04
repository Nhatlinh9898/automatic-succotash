---

### **Chuy盻ハ ﾄ雪ｻ冢g 88: Ch蘯｡y V盻嬖 Tﾆｰ Th蘯ｿ Nghiﾃｪng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y v盻嬖 cﾆ｡ th盻・nghiﾃｪng v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c quy蘯ｿt li盻㏄.

```javascript
function runLeaningForward(character) {
    const runLeanAnimation = new THREE.AnimationClip("RunLean", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 2, 0, 0, 4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(runLeanAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 89: Nh蘯｣y V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y dﾃi v盻・phﾃｭa trﾆｰ盻嫩, mang l蘯｡i c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function longJumpForward(character) {
    const longJumpAnimation = new THREE.AnimationClip("LongJump", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(longJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 90: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Th盻・Sﾃ｢u**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ th盻ｱc hi盻㌻ ﾄ黛ｻ冢g tﾃ｡c th盻・sﾃ｢u.

```javascript
function deepBreath(character) {
    const breathAnimation = new THREE.AnimationClip("DeepBreath", 3, [
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(breathAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ph盻ｩc t蘯｡p hﾆ｡n ho蘯ｷc cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g c盻･ th盻・ hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ

Chﾃｺng ta ti蘯ｿp t盻･c b盻・sung cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt thﾃｪm ph蘯ｧn thﾃｺ v盻・vﾃ bi盻ブ c蘯｣m:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 91: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Xoay Vai**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 nh蘯ｹ nhﾃng k蘯ｿt h盻｣p xoay vai ﾄ黛ｻ・thﾆｰ giﾃ｣n ho蘯ｷc kh盻殃 ﾄ黛ｻ冢g.

```javascript
function bowAndRotateShoulders(character) {
    const bowRotateAnimation = new THREE.AnimationClip("BowRotate", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(bowRotateAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 92: Nh蘯｣y Vﾃ T蘯｡o Tﾆｰ Th蘯ｿ V盻ｯng Vﾃng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn vﾃ ﾄ妥｡p ﾄ黛ｺ･t b蘯ｱng tﾆｰ th蘯ｿ m蘯｡nh m蘯ｽ.

```javascript
function jumpAndLandStrongly(character) {
    const jumpLandAnimation = new THREE.AnimationClip("JumpLandStrong", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(jumpLandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 93: ﾄ雪ｻｩng Nghiﾃｪm Vﾃ ﾄ雪ｺｷt Tay Lﾃｪn Hﾃｴng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng nghiﾃｪm vﾃ ﾄ黛ｺｷt hai tay lﾃｪn hﾃｴng, t蘯｡o s盻ｱ t盻ｱ tin.

```javascript
function standConfidently(character) {
    const standConfidentAnimation = new THREE.AnimationClip("StandConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(standConfidentAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 94: Cﾃｺi Ngﾆｰ盻拱 Vﾃ C蘯ｧm V蘯ｭt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 vﾃ c蘯ｧm lﾃｪn m盻冲 v蘯ｭt th盻・

```javascript
function bendAndPick(character) {
    const bendPickAnimation = new THREE.AnimationClip("BendPick", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bendPickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 95: Tung Cﾃｺ ﾄ静｡ Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ vﾃｲng cung m蘯｡nh m蘯ｽ, t蘯｡o 蘯･n tﾆｰ盻｣ng phﾃｲng th盻ｧ ho蘯ｷc t蘯･n cﾃｴng.

```javascript
function roundKick(character) {
    const roundKickAnimation = new THREE.AnimationClip("RoundKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(roundKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 96: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tﾆｰ Th蘯ｿ Chi蘯ｿn ﾄ雪ｺ･u**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ nﾃ｢ng tay vﾃo tﾆｰ th蘯ｿ phﾃｲng th盻ｧ ho蘯ｷc chu蘯ｩn b盻・chi蘯ｿn ﾄ黛ｺ･u.

```javascript
function combatStance(character) {
    const combatStanceAnimation = new THREE.AnimationClip("CombatStance", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 1, 2],
            [0, 0, 0, 0, -0.1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(combatStanceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 97: Nh蘯｣y Vﾃ Xoay Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ xoay lﾆｰng 180 ﾄ黛ｻ・trﾆｰ盻嫩 khi h蘯｡ xu盻創g.

```javascript
function jumpAndSpinBack(character) {
    const jumpSpinBackAnimation = new THREE.AnimationClip("JumpSpinBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpSpinBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 98: Cﾃｺi Ngﾆｰ盻拱 V盻嬖 Tﾆｰ Th蘯ｿ C蘯ｩn Tr盻肱g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi th蘯･p ngﾆｰ盻拱 nhﾆｰ ﾄ疎ng theo dﾃｵi ho蘯ｷc c蘯｣nh giﾃ｡c.

```javascript
function crouchWithFocus(character) {
    const crouchFocusAnimation = new THREE.AnimationClip("CrouchFocus", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crouchFocusAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 99: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay ﾄ紳n Sau Lﾆｰng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ疎n tay ra phﾃｭa sau lﾆｰng t蘯｡o dﾃ｡ng bﾃｬnh th蘯｣n.

```javascript
function standCalmly(character) {
    const standCalmAnimation = new THREE.AnimationClip("StandCalm", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(standCalmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 100: Nﾃｩm Vﾃｲng Cung**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nﾃｩm m蘯｡nh v蘯ｭt th盻・theo ﾄ柁ｰ盻拵g vﾃｲng cung.

```javascript
function arcThrow(character) {
    const arcThrowAnimation = new THREE.AnimationClip("ArcThrow", 1.6, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, -Math.PI / 3, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(arcThrowAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm nhi盻「 chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc mu盻創 tﾃｴi h盻・tr盻｣ c蘯｣i ti蘯ｿn cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c, hﾃ｣y chia s蘯ｻ thﾃｪm nhﾃｩ! 噫笨ｨ

Chﾃｺng ta ti蘯ｿp t盻･c v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ ﾄ疎 d蘯｡ng ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt thﾃｪm ph蘯ｧn 蘯･n tﾆｰ盻｣ng:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 101: V蘯ｷn Mﾃｬnh Vﾃ L蘯ｯc Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c v蘯ｷn mﾃｬnh k蘯ｿt h盻｣p v盻嬖 l蘯ｯc tay nh蘯ｹ nhﾃng ﾄ黛ｻ・thﾆｰ giﾃ｣n ho蘯ｷc kh盻殃 ﾄ黛ｻ冢g.

```javascript
function twistBodyAndShakeHand(character) {
    const twistShakeAnimation = new THREE.AnimationClip("TwistShake", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(twistShakeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 102: Bﾆｰ盻嫩 Ngang Vﾃ D盻ｫng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 ngang vﾃ d盻ｫng l蘯｡i m盻冲 cﾃ｡ch t盻ｱ nhiﾃｪn, phﾃｹ h盻｣p v盻嬖 nhi盻「 tﾃｬnh hu盻創g.

```javascript
function stepSideAndStop(character) {
    const stepSideAnimation = new THREE.AnimationClip("StepSideStop", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        )
    ]);
    character.animations.push(stepSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 103: Nh蘯｣y Xoay Trﾃｲn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn vﾃ xoay trﾃｲn nhi盻「 vﾃｲng trﾆｰ盻嫩 khi ﾄ妥｡p xu盻創g.

```javascript
function spinMultipleJump(character) {
    const spinJumpAnimation = new THREE.AnimationClip("SpinJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 2 * Math.PI, 0, 0, 4 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 104: Xoay Lﾆｰng Ch蘯ｭm Rﾃ｣i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay lﾆｰng m盻冲 cﾃ｡ch t盻ｫ t盻ｫ ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c ﾄ訴盻［ tﾄｩnh.

```javascript
function slowTurnBack(character) {
    const turnBackAnimation = new THREE.AnimationClip("SlowTurnBack", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(turnBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 105: ﾄ雪ｻｩng Vﾃ ﾄ脆ｰa Tay Ch盻・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng k蘯ｿt h盻｣p v盻嬖 vi盻㌘ ﾄ柁ｰa tay ﾄ黛ｻ・ch盻・ho蘯ｷc hﾆｰ盻嬾g d蘯ｫn.

```javascript
function pointForward(character) {
    const pointAnimation = new THREE.AnimationClip("PointForward", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 106: G蘯ｭp Ngﾆｰ盻拱 V盻嬖 Tﾆｰ Th蘯ｿ T蘯ｭp Trung**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c g蘯ｭp ngﾆｰ盻拱 xu盻創g v盻嬖 dﾃ｡ng v蘯ｻ chﾃｺ ﾃｽ ho蘯ｷc t蘯ｭp trung cao ﾄ黛ｻ・

```javascript
function bendFocus(character) {
    const bendFocusAnimation = new THREE.AnimationClip("BendFocus", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bendFocusAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 107: ﾄ雪ｺｭp Tay Lﾃｪn B盻・M蘯ｷt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺｭp tay m蘯｡nh m蘯ｽ lﾃｪn m盻冲 b盻・m蘯ｷt th盻・hi盻㌻ s盻ｱ quy蘯ｿt tﾃ｢m.

```javascript
function slapSurface(character) {
    const slapSurfaceAnimation = new THREE.AnimationClip("SlapSurface", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slapSurfaceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 108: Nh蘯｣y Vﾃ Ch盻創g Tay Xu盻創g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y cao k蘯ｿt h盻｣p v盻嬖 ch盻創g tay xu盻創g ﾄ黛ｺ･t sau khi h蘯｡ cﾃ｡nh.

```javascript
function jumpLandPush(character) {
    const jumpPushAnimation = new THREE.AnimationClip("JumpLandPush", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpPushAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 109: Quay Ngﾆｰ盻拱 V盻嬖 Tﾆｰ Th蘯ｿ Tho蘯｣i Mﾃ｡i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ngﾆｰ盻拱 nh蘯ｹ nhﾃng, t蘯｡o c蘯｣m giﾃ｡c tho蘯｣i mﾃ｡i vﾃ thﾆｰ giﾃ｣n.

```javascript
function turnCasually(character) {
    const casualTurnAnimation = new THREE.AnimationClip("TurnCasual", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(casualTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 110: Nh蘯･c V蘯ｭt Vﾃ ﾄ脆ｰa Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯･c v蘯ｭt lﾃｪn t盻ｫ m蘯ｷt ﾄ黛ｺ･t vﾃ ﾄ柁ｰa lﾃｪn cao.

```javascript
function liftAndRaiseObject(character) {
    const liftRaiseAnimation = new THREE.AnimationClip("LiftRaise", 2.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, Math.PI / 4, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.1, 2.2],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftRaiseAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c v盻嬖 cﾃ｡c ﾃｽ tﾆｰ盻殤g sﾃ｡ng t蘯｡o ho蘯ｷc c蘯ｧn nﾃ｢ng c蘯･p thﾃｪm chuy盻ハ ﾄ黛ｻ冢g, tﾃｴi s蘯ｵn sﾃng h盻・tr盻｣ b蘯｡n! 噫笨ｨ

Hﾃ｣y cﾃｹng khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o vﾃ tinh t蘯ｿ ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn sinh ﾄ黛ｻ冢g vﾃ thﾃｺ v盻・hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 111: Ch蘯｡y Vﾃ ﾄ雪ｻ冲 Ng盻冲 D盻ｫng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ d盻ｫng l蘯｡i ﾄ黛ｻ冲 ng盻冲 v盻嬖 tﾆｰ th蘯ｿ thﾄハg b蘯ｱng.

```javascript
function runAndHalt(character) {
    const runHaltAnimation = new THREE.AnimationClip("RunHalt", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 2, 0, 0, 2.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(runHaltAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 112: ﾄ雪ｻｩng M盻冲 Chﾃ｢n V盻嬖 Tﾆｰ Th蘯ｿ T盻ｱ Tin**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nh蘯･c m盻冲 chﾃ｢n lﾃｪn, gi盻ｯ tﾆｰ th蘯ｿ t盻ｱ tin vﾃ cﾃ｢n b蘯ｱng.

```javascript
function balanceOneLegConfidently(character) {
    const balanceAnimation = new THREE.AnimationClip("BalanceOneLegConfident", 2, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 1, 2],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(balanceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 113: Quay Ngﾆｰ盻拱 R盻妬 Cﾃｺi Chﾃo**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c quay ngﾆｰ盻拱 180 ﾄ黛ｻ・sau ﾄ妥ｳ cﾃｺi chﾃo l盻議h s盻ｱ.

```javascript
function turnAndBow(character) {
    const turnBowAnimation = new THREE.AnimationClip("TurnBow", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.5, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(turnBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 114: Lﾃｹi L蘯｡i Vﾃ Nhﾃｺn Vai**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g lﾃｹi l蘯｡i vﾃ nhﾃｺn vai nh蘯ｹ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ b蘯･t l盻ｱc ho蘯ｷc tho蘯｣i mﾃ｡i.

```javascript
function stepBackAndShrug(character) {
    const stepBackShrugAnimation = new THREE.AnimationClip("StepBackShrug", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stepBackShrugAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 115: Tung N蘯ｯm ﾄ雪ｺ･m Kﾃｩp**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung cﾃｺ ﾄ黛ｺ･m cﾃｹng lﾃｺc b蘯ｱng c蘯｣ hai tay, t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function doubleFistPunch(character) {
    const doublePunchAnimation = new THREE.AnimationClip("DoublePunch", 1.2, [
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftArm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(doublePunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 116: Tung V蘯ｭt Th盻・Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung m盻冲 v蘯ｭt th盻・t盻ｫ tay lﾃｪn cao, t蘯｡o c蘯｣m giﾃ｡c hﾃo h盻ｩng.

```javascript
function tossObjectUp(character) {
    const tossAnimation = new THREE.AnimationClip("TossObject", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tossAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 117: ﾄ静｡ Liﾃｪn Hoﾃn Ngang**
Thﾃｪm chu盻擁 ﾄ妥｡ ngang m蘯｡nh m蘯ｽ b蘯ｱng c蘯｣ hai chﾃ｢n liﾃｪn ti蘯ｿp.

```javascript
function sideKickCombo(character) {
    const sideKickAnimation = new THREE.AnimationClip("SideKickCombo", 2, [
        new THREE.KeyframeTrack(
            'character.rightLeg.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftLeg.rotation',
            [0, 1.2, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sideKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 118: Giﾆ｡ Hai Tay Lﾃｪn ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆ｡ hai tay lﾃｪn ﾄ黛ｺｧu, bi盻ブ th盻・s盻ｱ kinh ng蘯｡c ho蘯ｷc b蘯｣o v盻・

```javascript
function raiseArmsAboveHead(character) {
    const raiseArmsAnimation = new THREE.AnimationClip("RaiseArmsAboveHead", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 119: Nghiﾃｪng ﾄ雪ｺｧu Tﾃｲ Mﾃｲ**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nghiﾃｪng ﾄ黛ｺｧu nh蘯ｹ nhﾃng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ tﾃｲ mﾃｲ ho蘯ｷc chﾃｺ ﾃｽ.

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

### **Chuy盻ハ ﾄ雪ｻ冢g 120: Nh蘯｣y Vﾃ Tung Cﾃｺ ﾄ雪ｺ･m Xoﾃ｡y**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn k蘯ｿt h盻｣p cﾃｺ ﾄ黛ｺ･m xoﾃ｡y m蘯｡nh m蘯ｽ.

```javascript
function jumpAndSpiralPunch(character) {
    const spiralPunchAnimation = new THREE.AnimationClip("SpiralPunch", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(spiralPunchAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ki盻ブ chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc ﾄ訴盻「 ch盻穎h chi ti蘯ｿt cho cﾃ｡c hﾃnh ﾄ黛ｻ冢g hi盻㌻ t蘯｡i, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

Ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 m蘯ｻ vﾃ tinh t蘯ｿ ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn sinh ﾄ黛ｻ冢g vﾃ ﾄ黛ｻ冂 ﾄ妥｡o:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 121: Quay Nhanh Vﾃ ﾄ静｡nh ﾄ雪ｺ･t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh k蘯ｿt h盻｣p v盻嬖 cﾃｺ ﾄ黛ｺ･m m蘯｡nh xu盻創g ﾄ黛ｺ･t, t蘯｡o c蘯｣m giﾃ｡c uy l盻ｱc.

```javascript
function spinAndGroundStrike(character) {
    const groundStrikeAnimation = new THREE.AnimationClip("SpinGroundStrike", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(groundStrikeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 122: Lﾃｹi Bﾆｰ盻嫩 Vﾃ ﾄ静｡nh Ch蘯ｷn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi bﾆｰ盻嫩 k蘯ｿt h盻｣p v盻嬖 tay ﾄ黛ｺｩy ra ﾄ黛ｻ・ch蘯ｷn ho蘯ｷc phﾃｲng th盻ｧ.

```javascript
function retreatAndBlock(character) {
    const retreatBlockAnimation = new THREE.AnimationClip("RetreatBlock", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(retreatBlockAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 123: Nh蘯｣y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Phﾃｲng Th盻ｧ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ giﾆ｡ tay lﾃｪn ﾄ黛ｻ・phﾃｲng th盻ｧ.

```javascript
function jumpWithGuard(character) {
    const jumpGuardAnimation = new THREE.AnimationClip("JumpGuard", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpGuardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 124: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng th蘯ｳng vﾃ giﾆ｡ m盻冲 tay lﾃｪn cao, phﾃｹ h盻｣p v盻嬖 phong cﾃ｡ch chﾃo m盻ｫng.

```javascript
function standAndRaiseHand(character) {
    const raiseHandAnimation = new THREE.AnimationClip("RaiseHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 125: G蘯ｭp Ngﾆｰ盻拱 Ch蘯｡m ﾄ雪ｺ･t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi g蘯ｭp ngﾆｰ盻拱 xu盻創g ﾄ黛ｻ・ch蘯｡m ﾄ黛ｺ･t, th盻・hi盻㌻ s盻ｱ trang tr盻肱g ho蘯ｷc chu蘯ｩn b盻・cho hﾃnh ﾄ黛ｻ冢g khﾃ｡c.

```javascript
function bendAndTouchGround(character) {
    const bendTouchAnimation = new THREE.AnimationClip("BendTouchGround", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bendTouchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 126: Quay Ngﾆｰ盻拱 K蘯ｿt H盻｣p Tung V蘯ｭt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 k蘯ｿt h盻｣p v盻嬖 tay tung v蘯ｭt lﾃｪn khﾃｴng trung.

```javascript
function spinAndToss(character) {
    const spinTossAnimation = new THREE.AnimationClip("SpinToss", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinTossAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 127: Ch蘯｡y V盻嬖 Cﾃ｡nh Tay Tung**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p v盻嬖 cﾃ｡nh tay tung m蘯｡nh t蘯｡o phong cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function dashWithSwingArms(character) {
    const dashSwingAnimation = new THREE.AnimationClip("DashSwingArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(dashSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 128: ﾄ雪ｻｩng Th蘯ｳng Vﾃ L蘯ｯc ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn k蘯ｿt h盻｣p v盻嬖 l蘯ｯc ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ t盻ｫ ch盻訴.

```javascript
function standAndShakeHead(character) {
    const shakeHeadAnimation = new THREE.AnimationClip("StandShakeHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 129: B蘯ｭt Nh蘯｣y Vﾃ Tung Cﾃｺ ﾄ静｡**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g b蘯ｭt nh蘯｣y cao k蘯ｿt h盻｣p v盻嬖 tung cﾃｺ ﾄ妥｡ m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function jumpAndKick(character) {
    const jumpKickAnimation = new THREE.AnimationClip("JumpKick", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(jumpKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 130: Ch蘯｡y Vﾃ ﾄ雪ｻ冲 Ng盻冲 Quay ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ ﾄ黛ｻ冲 ng盻冲 quay ﾄ黛ｺｧu nhﾃｬn l蘯｡i phﾃｭa sau.

```javascript
function sprintAndTurnHead(character) {
    const sprintTurnAnimation = new THREE.AnimationClip("SprintTurnHead", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(sprintTurnAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm nhi盻「 chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc nﾃ｢ng c蘯･p cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c hi盻㌻ cﾃｳ, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

Hﾃ｣y cﾃｹng ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ m蘯｡nh m蘯ｽ hﾆ｡n ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt thﾃｪm ph蘯ｧn cu盻創 hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 131: ﾄ雪ｻｩng Th蘯ｳng Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g tﾃｬnh.

```javascript
function standAndNod(character) {
    const nodAnimation = new THREE.AnimationClip("StandNod", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 132: Nh蘯｣y Nh蘯ｹ V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c L蘯ｯc Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y nh蘯ｹ k蘯ｿt h盻｣p v盻嬖 l蘯ｯc tay hai bﾃｪn.

```javascript
function hopWithSwingingArms(character) {
    const hopSwingAnimation = new THREE.AnimationClip("HopSwingArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(hopSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 133: Quay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ngﾆｰ盻拱 nhanh k蘯ｿt h盻｣p ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng trﾃｬnh bﾃy.

```javascript
function spinAndExtendArm(character) {
    const spinExtendAnimation = new THREE.AnimationClip("SpinExtendArm", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
