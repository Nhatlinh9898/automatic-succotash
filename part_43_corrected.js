    const swingForwardAnimation = new THREE.AnimationClip("BendSwingForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(swingForwardAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｲn c蘯ｧn nhi盻「 hﾆ｡n, tﾃｴi s蘯ｽ ti蘯ｿp t盻･c h盻・tr盻｣ v盻嬖 cﾃ｡c ﾃｽ tﾆｰ盻殤g m盻嬖 m蘯ｻ nhﾃｩ! 噫笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c v盻嬖 thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th盻ｱc s盻ｱ n盻品 b蘯ｭt vﾃ s盻創g ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 441: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Xoay Vai**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 c盻ｭ ﾄ黛ｻ冢g xoay vai nh蘯ｹ nhﾃng, t蘯｡o c蘯｣m giﾃ｡c t盻ｱ nhiﾃｪn vﾃ thﾆｰ giﾃ｣n.

```javascript
function standAndRollShoulders(character) {
    const rollShouldersAnimation = new THREE.AnimationClip("RollShoulders", 1.5, [
        new THREE.KeyframeTrack(
            'character.shoulders.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(rollShouldersAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 442: Nh蘯｣y V盻嬖 Tay M盻・R盻冢g Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 c蘯｣ hai tay giﾆ｡ r盻冢g ra hai bﾃｪn bi盻ブ th盻・s盻ｱ vui v蘯ｻ vﾃ t盻ｱ do.

```javascript
function leapWithArmsWide(character) {
    const armsWideAnimation = new THREE.AnimationClip("LeapArmsWide", 2, [
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
    character.animations.push(armsWideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 443: Cﾃｺi Th蘯･p Vﾃ Tung Tay ﾄ雪ｺ･m**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi th蘯･p ngﾆｰ盻拱 vﾃ tung m盻冲 tay ﾄ黛ｺ･m m蘯｡nh m蘯ｽ v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function crouchAndPunch(character) {
    const punchAnimation = new THREE.AnimationClip("CrouchPunch", 1.8, [
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
    character.animations.push(punchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 444: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Ngang**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng v盻嬖 c蘯｣ hai tay giﾆ｡ ngang t蘯｡o s盻ｱ m蘯｡nh m蘯ｽ ho蘯ｷc ch盻・d蘯ｫn.

```javascript
function standWithHorizontalArms(character) {
    const horizontalArmsAnimation = new THREE.AnimationClip("HorizontalArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(horizontalArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 445: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 Tay Che M蘯ｷt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi vﾃ ﾄ柁ｰa tay lﾃｪn che m蘯ｷt nhﾆｰ ﾄ疎ng phﾃｲng th盻ｧ ho蘯ｷc b蘯･t ng盻・

```javascript
function stepBackAndCoverFace(character) {
    const coverFaceAnimation = new THREE.AnimationClip("CoverFace", 1.8, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 446: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Cao M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng v盻嬖 m盻冲 tay giﾆ｡ cao m盻冲 bﾃｪn t蘯｡o dﾃ｡ng nﾄハg ﾄ黛ｻ冢g ho蘯ｷc ph蘯･n kh盻殃.

```javascript
function standAndRaiseOneSide(character) {
    const raiseOneSideAnimation = new THREE.AnimationClip("RaiseOneSide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(raiseOneSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 447: Ch蘯｡y V盻嬖 Tay Vung Theo Hﾃｬnh Cung**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 hai tay vung theo hﾃｬnh vﾃｲng cung t蘯｡o c蘯｣m giﾃ｡c linh ho蘯｡t vﾃ nh盻却 nhﾃng.

```javascript
function sprintWithArcSwing(character) {
    const arcSwingAnimation = new THREE.AnimationClip("SprintArcSwing", 2, [
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
    character.animations.push(arcSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 448: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・Xu盻創g ﾄ雪ｺ･t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ch盻・xu盻創g ﾄ黛ｺ･t bi盻ブ th盻・s盻ｱ kh蘯ｳng ﾄ黛ｻ杵h ho蘯ｷc nh蘯･n m蘯｡nh.

```javascript
function pointToGround(character) {
    const pointGroundAnimation = new THREE.AnimationClip("PointToGround", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointGroundAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 449: Nh蘯｣y Vﾃ Tung Tay Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 c蘯｣ hai tay tung lﾃｪn tr盻拱 bi盻ブ th盻・s盻ｱ ph蘯･n kh盻殃.

```javascript
function leapAndThrowArmsUp(character) {
    const throwArmsUpAnimation = new THREE.AnimationClip("LeapThrowArmsUp", 2, [
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
    character.animations.push(throwArmsUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 450: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng v盻嬖 m盻冲 tay ch盻創g nh蘯ｹ vﾃo hﾃｴng bi盻ブ th盻・s盻ｱ t盻ｱ tin vﾃ tho蘯｣i mﾃ｡i.

```javascript
function standWithHipSupport(character) {
    const hipSupportAnimation = new THREE.AnimationClip("HipSupportStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(hipSupportAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc ch盻穎h s盻ｭa chi ti蘯ｿt cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g hi盻㌻ cﾃｳ, hﾃ｣y nﾃｳi v盻嬖 tﾃｴi nhﾃｩ! 噫笨ｨ
Chﾃｺng ta ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o vﾃ phong cﾃ｡ch hﾆ｡n n盻ｯa ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn s盻創g ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 451: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Vﾃ Cﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn, giﾆ｡ tay lﾃｪn cao vﾃ bi盻ブ hi盻㌻ gﾆｰﾆ｡ng m蘯ｷt vui v蘯ｻ, t蘯｡o c蘯｣m giﾃ｡c ph蘯･n kh盻殃.

```javascript
function standAndSmileRaiseHands(character) {
    const smileRaiseHandsAnimation = new THREE.AnimationClip("SmileRaiseHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(smileRaiseHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 452: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 Tay Ch蘯ｯn Phﾃｲng Th盻ｧ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ nhﾃng vﾃ tay giﾆ｡ lﾃｪn trong tﾆｰ th蘯ｿ phﾃｲng th盻ｧ.

```javascript
function stepBackWithDefensivePose(character) {
    const defensivePoseAnimation = new THREE.AnimationClip("DefensivePose", 1.8, [
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
    character.animations.push(defensivePoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 453: Nh蘯｣y Lﾃｪn V盻嬖 Tay Giﾆ｡ V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ giﾆ｡ tay ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng chﾃo m盻ｫng.

```javascript
function leapForwardGreeting(character) {
    const leapGreetingAnimation = new THREE.AnimationClip("LeapForwardGreeting", 2, [
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
    character.animations.push(leapGreetingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 454: ﾄ雪ｻｩng Yﾃｪn Vﾃ ﾄ脆ｰa Tay V盻・Trﾃ｡i Tim**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ ﾄ黛ｺｷt tay lﾃｪn ng盻ｱc bi盻ブ th盻・lﾃｲng chﾃ｢n thﾃnh ho蘯ｷc c蘯｣m kﾃｭch.

```javascript
function standAndHoldHeart(character) {
    const holdHeartAnimation = new THREE.AnimationClip("HoldHeart", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(holdHeartAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 455: Ch蘯｡y V盻嬖 Tay Tung Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay vung cao bi盻ブ th盻・s盻ｱ nhi盻㏄ tﾃｬnh.

```javascript
function sprintWithUpwardArms(character) {
    const upwardArmsAnimation = new THREE.AnimationClip("SprintUpwardArms", 2, [
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
    character.animations.push(upwardArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 456: ﾄ雪ｻｩng V盻嬖 Tﾆｰ Th蘯ｿ Th蘯｣ L盻熟g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 cﾆ｡ th盻・vﾃ tay th蘯｣ l盻熟g t盻ｱ nhiﾃｪn t蘯｡o c蘯｣m giﾃ｡c tho蘯｣i mﾃ｡i.

```javascript
function relaxedStandPose(character) {
    const relaxedPoseAnimation = new THREE.AnimationClip("RelaxedPose", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(relaxedPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 457: Nh蘯｣y Cao V盻嬖 Tay Tung Ra Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ tung tay ra hai bﾃｪn ﾄ黛ｻ・t蘯｡o dﾃ｡ng nﾄハg ﾄ黛ｻ冢g.

```javascript
function leapWithSideArms(character) {
    const sideArmsAnimation = new THREE.AnimationClip("LeapSideArms", 2, [
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
    character.animations.push(sideArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 458: ﾄ静｡ Ngang V盻嬖 Tay Ch蘯ｷn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung m盻冲 cﾃｺ ﾄ妥｡ ngang v盻嬖 tay ﾄ柁ｰa ra ch蘯ｷn trﾆｰ盻嫩 cﾆ｡ th盻・

```javascript
function sideKickWithBlock(character) {
    const kickBlockAnimation = new THREE.AnimationClip("SideKickBlock", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(kickBlockAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 459: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Vﾆｰﾆ｡n Ra Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ vﾆｰﾆ｡n tay v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng m盻拱 g盻絞 ho蘯ｷc ch盻・d蘯ｫn.

```javascript
function standAndReachOut(character) {
    const reachOutAnimation = new THREE.AnimationClip("ReachOut", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachOutAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 460: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Quay ﾄ雪ｺｧu Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 nh蘯ｹ kﾃｨm theo quay ﾄ黛ｺｧu sang m盻冲 bﾃｪn t蘯｡o c蘯｣m giﾃ｡c t蘯ｭp trung.

```javascript
function bendAndGlance(character) {
    const glanceAnimation = new THREE.AnimationClip("BendAndGlance", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(glanceAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm n盻ｯa ho蘯ｷc mu盻創 ﾄ訴盻「 ch盻穎h chi ti蘯ｿt, tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Chﾃｺng ta ti蘯ｿp t盻･c v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o hﾆ｡n ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm 蘯･n tﾆｰ盻｣ng vﾃ phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 461: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・Lﾃｪn Cao M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ch盻・lﾃｪn cao bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m ho蘯ｷc d蘯ｫn hﾆｰ盻嬾g.

```javascript
function standAndPointUpward(character) {
    const pointUpwardAnimation = new THREE.AnimationClip("PointUpward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(pointUpwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 462: Nh蘯｣y Lﾃｪn V盻嬖 Tay Tung M蘯｡nh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ tung tay m蘯｡nh m蘯ｽ v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c s盻ｩc m蘯｡nh.

```javascript
function leapAndPunchForward(character) {
    const punchForwardAnimation = new THREE.AnimationClip("LeapPunchForward", 2, [
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
    character.animations.push(punchForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 463: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tﾆｰ Th蘯ｿ Tay Ch盻創g M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ch盻創g vﾃo hﾃｴng, t蘯｡o phong cﾃ｡ch thﾆｰ thﾃ｡i ho蘯ｷc t盻ｱ tin.

```javascript
function standRelaxedOneHandOnHip(character) {
    const relaxedHipAnimation = new THREE.AnimationClip("RelaxedHipStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(relaxedHipAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 464: Lﾃｹi Bﾆｰ盻嫩 Vﾃ Giﾆ｡ Tay Ch蘯ｷn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ kﾃｨm tay giﾆ｡ lﾃｪn ﾄ黛ｻ・ch蘯ｷn ho蘯ｷc phﾃｲng th盻ｧ.

```javascript
function stepBackWithHighBlock(character) {
    const highBlockAnimation = new THREE.AnimationClip("StepBackHighBlock", 1.8, [
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
    character.animations.push(highBlockAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 465: ﾄ静｡ Cao Vﾃ Tung Tay Ch蘯ｷn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ m蘯｡nh lﾃｪn cao k蘯ｿt h盻｣p tay ﾄ柁ｰa ra ﾄ黛ｻ・ch蘯ｷn trﾆｰ盻嫩.

```javascript
function highKickWithDefense(character) {
    const defenseKickAnimation = new THREE.AnimationClip("HighKickDefense", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(defenseKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 466: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Ra Hai Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 c蘯｣ hai tay giﾆ｡ ra hai bﾃｪn ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ ho蘯ｷc chﾃo ﾄ妥ｳn.

```javascript
function standAndStretchSideways(character) {
    const stretchSidewaysAnimation = new THREE.AnimationClip("StretchSideways", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(stretchSidewaysAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 467: Ch蘯｡y V盻嬖 Tay Tung Theo Hﾆｰ盻嬾g ﾄ雪ｻ訴 L蘯ｭp**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay vung theo hﾆｰ盻嬾g ﾄ黛ｻ訴 l蘯ｭp t蘯｡o c蘯｣m giﾃ｡c t盻祖 ﾄ黛ｻ・vﾃ m蘯｡nh m蘯ｽ.

```javascript
function sprintWithOpposingArmSwings(character) {
    const opposingSwingsAnimation = new THREE.AnimationClip("SprintOpposingSwings", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(opposingSwingsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 468: Nh蘯｣y Cao V盻嬖 Tay Vﾆｰﾆ｡n Ra Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y m蘯｡nh lﾃｪn cao v盻嬖 c蘯｣ hai tay vﾆｰﾆ｡n ra phﾃｭa trﾆｰ盻嫩 t蘯｡o phong thﾃ｡i quy蘯ｿt tﾃ｢m.

```javascript
function leapWithForwardReach(character) {
    const forwardReachAnimation = new THREE.AnimationClip("LeapForwardReach", 2, [
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
    character.animations.push(forwardReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 469: ﾄ雪ｻｩng V盻嬖 Tay ﾄ紳n Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ疎n sau lﾆｰng bi盻ブ th盻・s盻ｱ thﾆｰ thﾃ｡i vﾃ nghiﾃｪm tﾃｺc.

```javascript
function standWithInterlockedHands(character) {
    const interlockedHandsAnimation = new THREE.AnimationClip("InterlockedHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(interlockedHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 470: Cﾃｺi Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 th蘯･p vﾃ ﾄ柁ｰa tay ra m盻冲 cﾃ｡ch nh蘯ｹ nhﾃng bi盻ブ th盻・s盻ｱ kﾃｭnh tr盻肱g.

```javascript
function bowWithGracefulArm(character) {
    const gracefulBowAnimation = new THREE.AnimationClip("GracefulBow", 1.8, [
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
    character.animations.push(gracefulBowAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tinh ch盻穎h cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g, tﾃｴi s蘯ｽ r蘯･t vui ﾄ柁ｰ盻｣c h盻・tr盻｣ thﾃｪm! 噫笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c sﾃ｡ng t蘯｡o nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o hﾆ｡n n盻ｯa ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th蘯ｭt s盻ｱ n盻品 b蘯ｭt vﾃ phong cﾃ｡ch:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 471: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Ch盻・Sang M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ch盻・tay sang m盻冲 bﾃｪn ﾄ黛ｻ・hﾆｰ盻嬾g d蘯ｫn ho蘯ｷc bi盻ブ th盻・s盻ｱ ch盻・d蘯ｫn.

```javascript
function standAndPointToSide(character) {
    const pointSideAnimation = new THREE.AnimationClip("PointToSide", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 472: Nh蘯｣y V盻嬖 Tay Tung ﾄ雪ｻ訴 X盻ｩng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 tay vung ﾄ黛ｻ訴 x盻ｩng sang hai bﾃｪn t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function leapWithSymmetricArms(character) {
    const symmetricArmsAnimation = new THREE.AnimationClip("LeapSymmetricArms", 2, [
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
    character.animations.push(symmetricArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 473: ﾄ静｡ Cao V盻嬖 Tﾆｰ Th蘯ｿ Ch蘯ｷn T蘯ｧm Th蘯･p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung cﾃｺ ﾄ妥｡ cao m蘯｡nh m蘯ｽ vﾃ k蘯ｿt h盻｣p tay ch蘯ｷn phﾃｭa dﾆｰ盻嬖 ﾄ黛ｻ・t蘯｡o s盻ｱ an toﾃn.

```javascript
function highKickWithLowGuard(character) {
    const kickGuardAnimation = new THREE.AnimationClip("HighKickLowGuard", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(kickGuardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 474: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay ch盻創g nh蘯ｹ sau lﾆｰng t蘯｡o phong thﾃ｡i nghiﾃｪm tﾃｺc ho蘯ｷc thﾆｰ thﾃ｡i.

```javascript
function standWithHandsBehind(character) {
    const handsBehindAnimation = new THREE.AnimationClip("StandHandsBehind", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 475: Ch蘯｡y V盻嬖 Tay Giﾆ｡ Cao M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p giﾆ｡ m盻冲 tay lﾃｪn cao bi盻ブ th盻・s盻ｱ ph蘯･n kh盻殃.

```javascript
function sprintWithOneRaisedArm(character) {
    const raisedArmRunAnimation = new THREE.AnimationClip("SprintOneRaisedArm", 2, [
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
    character.animations.push(raisedArmRunAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 476: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Trﾃ｡n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa m盻冲 tay lﾃｪn trﾃ｡n ﾄ黛ｻ・che m蘯ｯt khi quan sﾃ｡t phﾃｭa xa.

```javascript
function standWithShieldingHand(character) {
    const shieldingHandAnimation = new THREE.AnimationClip("ShieldingHandStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(shieldingHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 477: Nh蘯｣y Cao V盻嬖 Tay Du盻擁 Th蘯ｳng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ du盻擁 th蘯ｳng c蘯｣ hai tay t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ vﾃ t盻ｱ do.

```javascript
function leapWithStraightArms(character) {
    const straightArmsAnimation = new THREE.AnimationClip("LeapStraightArms", 2, [
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
    character.animations.push(straightArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 478: ﾄ静｡ Ngang V盻嬖 Tﾆｰ Th蘯ｿ Chﾃ｢n V盻ｯng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung m盻冲 cﾃｺ ﾄ妥｡ ngang m蘯｡nh m蘯ｽ vﾃ gi盻ｯ cﾆ｡ th盻・cﾃ｢n b蘯ｱng v盻嬖 chﾃ｢n cﾃｲn l蘯｡i.

```javascript
function stableSideKick(character) {
    const sideKickStableAnimation = new THREE.AnimationClip("StableSideKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(sideKickStableAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 479: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Sang M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ tay vﾆｰﾆ｡n sang m盻冲 bﾃｪn nhﾆｰ ﾄ疎ng ch盻・ﾄ柁ｰ盻拵g ho蘯ｷc chﾃo m盻ｫng.

```javascript
function standAndGestureSide(character) {
    const gestureSideAnimation = new THREE.AnimationClip("GestureSideStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gestureSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 480: Cﾃｺi Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Lﾃｪn Cao Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 nh蘯ｹ vﾃ ﾄ柁ｰa tay lﾃｪn cao t蘯｡o dﾃ｡ng thanh l盻議h.

```javascript
function gracefulReachUp(character) {
    const reachUpAnimation = new THREE.AnimationClip("GracefulReachUp", 1.8, [
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
    character.animations.push(reachUpAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g ho蘯ｷc mu盻創 m盻・r盻冢g cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
Tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm phong phﾃｺ vﾃ thﾃｺ v盻・

---

### **Chuy盻ハ ﾄ雪ｻ冢g 481: Nh蘯｣y V盻嬖 Tay ﾄ脆ｰa Sang Hai Bﾃｪn M盻冲 Cﾃ｡ch M蘯｡nh M蘯ｽ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ vung m蘯｡nh hai tay sang hai bﾃｪn t蘯｡o s盻ｱ nﾄハg ﾄ黛ｻ冢g vﾃ ph蘯･n kh盻殃.

```javascript
function leapAndSwingArmsWide(character) {
    const swingArmsWideAnimation = new THREE.AnimationClip("SwingArmsWide", 2, [
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
    character.animations.push(swingArmsWideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 482: Cﾃｺi Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay C蘯｣m Kﾃｭch**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 nh蘯ｹ nhﾃng v盻嬖 tay ﾄ黛ｺｷt lﾃｪn trﾃ｡i tim bi盻ブ th盻・lﾃｲng bi蘯ｿt ﾆ｡n.

```javascript
function bowWithGratitude(character) {
    const gratitudeBowAnimation = new THREE.AnimationClip("GratitudeBow", 1.8, [
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
    character.animations.push(gratitudeBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 483: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay Ch盻創g Hai Bﾃｪn Hﾃｴng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng v盻ｯng vﾃng vﾃ ch盻創g tay vﾃo hai bﾃｪn hﾃｴng, t蘯｡o phong thﾃ｡i t盻ｱ tin.

```javascript
function standWithConfidence(character) {
    const confidenceStandAnimation = new THREE.AnimationClip("ConfidenceStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(confidenceStandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 484: Nh蘯｣y Vﾃ Tung M盻冲 Tay Ch盻・Hﾆｰ盻嬾g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ ch盻・m盻冲 tay v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng d蘯ｫn ﾄ柁ｰ盻拵g.

```javascript
function leapAndPointForward(character) {
    const pointForwardLeapAnimation = new THREE.AnimationClip("PointForwardLeap", 2, [
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
    character.animations.push(pointForwardLeapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 485: Qu盻ｳ Xu盻創g Vﾃ V盻・Tay Nh蘯ｹ Nhﾃng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ c蘯｣ hai g盻訴 vﾃ v盻・tay nh蘯ｹ nhﾃng bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g tﾃｬnh ho蘯ｷc c盻・vﾅｩ.

```javascript
function kneelAndSoftClap(character) {
    const kneelSoftClapAnimation = new THREE.AnimationClip("KneelSoftClap", 1.8, [
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
    character.animations.push(kneelSoftClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 486: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・M盻冲 Chﾃ｢n Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ch盻・tay v盻・phﾃｭa chﾃ｢n trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c t蘯ｭp trung.

```javascript
function pointAtFrontFoot(character) {
    const pointFrontFootAnimation = new THREE.AnimationClip("PointFrontFoot", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
