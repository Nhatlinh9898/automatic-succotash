function touchHeartWithNod(character) {
    const touchHeartNodAnimation = new THREE.AnimationClip("TouchHeartNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchHeartNodAnimation);
}
```

**Bi盻ブ c蘯｣m:** Nﾃｩt m蘯ｷt chﾃ｢n thﾃnh, ﾃ｡nh m蘯ｯt d盻丘 dﾃng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 714: Ch盻・Tay Sang M盻冲 Bﾃｪn Vﾃ Quay Nhﾃｬn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch盻・tay sang m盻冲 bﾃｪn vﾃ quay ﾄ黛ｺｧu nhﾃｬn theo hﾆｰ盻嬾g ﾄ妥ｳ, t蘯｡o c蘯｣m giﾃ｡c d蘯ｫn d蘯ｯt khﾃ｡n gi蘯｣.

```javascript
function pointSideAndLook(character) {
    const pointSideLookAnimation = new THREE.AnimationClip("PointSideLook", 2.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.1, 2.2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointSideLookAnimation);
}
```

**Bi盻ブ c蘯｣m:** S盻ｱ t盻ｱ tin vﾃ t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 715: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Ch盻・ﾄ脆ｰ盻拵g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ch盻・tay v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng d蘯ｫn d蘯ｯt.

```javascript
function standAndGuidePoint(character) {
    const guidePointAnimation = new THREE.AnimationClip("StandGuidePoint", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(guidePointAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt c盻殃 m盻・ n盻･ cﾆｰ盻拱 m盻盈 nh蘯ｹ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 716: V盻・Tay Nh蘯ｹ Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g v盻・tay nh蘯ｹ vﾃ g蘯ｭt ﾄ黛ｺｧu ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g tﾃｬnh ho蘯ｷc khen ng盻｣i.

```javascript
function clapLightlyWithNod(character) {
    const clapLightlyAnimation = new THREE.AnimationClip("ClapLightlyWithNod", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(clapLightlyAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 nh蘯ｹ, ﾃ｡nh m蘯ｯt tﾆｰﾆ｡i sﾃ｡ng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 717: ﾄ脆ｰa Tay Lﾃｪn Cao Vﾃ Quﾃｩt Nh蘯ｹ Trﾆｰ盻嫩 M蘯ｷt**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ柁ｰa tay lﾃｪn cao r盻妬 quﾃｩt nh蘯ｹ xu盻創g phﾃｭa trﾆｰ盻嫩 m蘯ｷt, bi盻ブ th盻・s盻ｱ hﾃｹng bi盻㌻.

```javascript
function raiseAndSweepHand(character) {
    const sweepHandAnimation = new THREE.AnimationClip("RaiseSweepHand", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 3, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(sweepHandAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt th盻・hi盻㌻ s盻ｱ nhi盻㏄ tﾃｬnh.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 718: Nh蘯･c Tay Lﾃｪn Vﾃ Kh蘯ｽ D盻ｫng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯･c tay lﾃｪn vﾃ gi盻ｯ trong vﾃi giﾃ｢y ﾄ黛ｻ・nh蘯･n m蘯｡nh ﾄ訴盻ノ chﾃｭnh.

```javascript
function liftHandAndPause(character) {
    const liftPauseAnimation = new THREE.AnimationClip("LiftHandPause", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftPauseAnimation);
}
```

**Bi盻ブ c蘯｣m:** Nﾃｩt m蘯ｷt nghiﾃｪm tﾃｺc vﾃ chﾄノ chﾃｺ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 719: Lﾃｹi L蘯｡i Vﾃ Chﾃo Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c lﾃｹi nh蘯ｹ l蘯｡i vﾃ cﾃｺi ﾄ黛ｺｧu chﾃo ﾄ黛ｻ・t蘯｡o thi盻㌻ c蘯｣m v盻嬖 khﾃ｡n gi蘯｣.

```javascript
function stepBackAndBow(character) {
    const bowAnimation = new THREE.AnimationClip("StepBackBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bowAnimation);
}
```

**Bi盻ブ c蘯｣m:** M盻盈 cﾆｰ盻拱 nh蘯ｹ, khuﾃｴn m蘯ｷt thﾃ｢n thi盻㌻.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 720: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Vﾃ N蘯ｯm Ch蘯ｷt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆ｡ tay n蘯ｯm ch蘯ｷt ﾄ黛ｻ・th盻・hi盻㌻ s盻ｱ quy蘯ｿt tﾃ｢m m蘯｡nh m蘯ｽ.

```javascript
function raiseFistConfidently(character) {
    const raiseFistAnimation = new THREE.AnimationClip("RaiseFistConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseFistAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt cﾆｰﾆ｡ng ngh盻・ bi盻ブ hi盻㌻ ﾄ黛ｺｧy quy蘯ｿt tﾃ｢m.

---

N蘯ｿu b蘯｡n mu盻創 m盻・r盻冢g ho蘯ｷc c蘯ｧn ch盻穎h s盻ｭa thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c nﾃy, ﾄ黛ｻｫng ng蘯ｧn ng蘯｡i chia s蘯ｻ nhﾃｩ! 痔笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g vﾃ thao tﾃ｡c thuy蘯ｿt trﾃｬnh ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c h蘯･p d蘯ｫn vﾃ truy盻］ c蘯｣m h盻ｩng, k蘯ｿt h盻｣p cﾃ｡c tr蘯｡ng thﾃ｡i bi盻ブ c蘯｣m khﾃ｡c nhau:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 721: ﾄ脆ｰa Tay Lﾃｪn Vﾃ M盻・R盻冢g Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c giﾆ｡ tay lﾃｪn cao r盻妬 m盻・r盻冢g sang hai bﾃｪn, t蘯｡o s盻ｱ lﾃｴi cu盻創 nhﾆｰ ﾄ疎ng m盻・ra m盻冲 ﾃｽ tﾆｰ盻殤g l盻嬾.

```javascript
function raiseAndSpreadArms(character) {
    const spreadArmsAnimation = new THREE.AnimationClip("RaiseSpreadArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsAnimation);
}
```

**Bi盻ブ c蘯｣m:** Khuﾃｴn m蘯ｷt sﾃ｡ng lﾃｪn, n盻･ cﾆｰ盻拱 thﾃ｢n thi盻㌻.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 722: G蘯ｭt Nh蘯ｹ Khi Nh蘯･n M蘯｡nh ﾃ・Ki蘯ｿn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g g蘯ｭt nh蘯ｹ ﾄ黛ｺｧu sau khi tay nh蘯･n m蘯｡nh xu盻創g, nh蘯･n m蘯｡nh vﾃo m盻冲 ﾃｽ tﾆｰ盻殤g trung tﾃ｢m.

```javascript
function emphasizeWithNod(character) {
    const emphasizeNodAnimation = new THREE.AnimationClip("EmphasizeWithNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(emphasizeNodAnimation);
}
```

**Bi盻ブ c蘯｣m:** Lﾃｴng mﾃy h蘯｡ xu盻創g nh蘯ｹ, nﾃｩt m蘯ｷt nghiﾃｪm tﾃｺc.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 723: Lﾃｹi L蘯｡i Vﾃ Dang Tay Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c lﾃｹi m盻冲 bﾆｰ盻嫩 nh盻・vﾃ dang tay nh蘯ｹ nhﾃng ﾄ黛ｻ・khuy蘯ｿn khﾃｭch s盻ｱ hﾃｲa h盻｣p.

```javascript
function stepBackAndOpenHands(character) {
    const openHandsAnimation = new THREE.AnimationClip("StepBackOpenHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openHandsAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt nh蘯ｹ nhﾃng, m盻盈 cﾆｰ盻拱 m盻［ m蘯｡i.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 724: Dﾃｹng C蘯｣ Hai Tay Nh蘯･n M蘯｡nh ﾄ進盻ノ Ch盻奏**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c h蘯｡ c蘯｣ hai tay xu盻創g ﾄ黛ｻ渡g th盻拱 v盻嬖 s盻ｱ m蘯｡nh m蘯ｽ, t蘯｡o c蘯｣m giﾃ｡c ch蘯ｯc ch蘯ｯn.

```javascript
function doubleHandEmphasis(character) {
    const doubleHandEmphasisAnimation = new THREE.AnimationClip("DoubleHandEmphasis", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(doubleHandEmphasisAnimation);
}
```

**Bi盻ブ c蘯｣m:** Gﾆｰﾆ｡ng m蘯ｷt cﾆｰﾆ｡ng ngh盻・ ﾃ｡nh m蘯ｯt nghiﾃｪm tﾃｺc.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 725: Nhﾃｬn Trﾃ｡i Vﾃ ﾄ脆ｰa Tay Ch盻・Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c quay ﾄ黛ｺｧu nhﾃｬn sang trﾃ｡i vﾃ tay ch盻・nh蘯ｹ, bi盻ブ th盻・s盻ｱ hﾆｰ盻嬾g d蘯ｫn t盻嬖 ﾄ訴盻「 gﾃｬ ﾄ妥ｳ.

```javascript
function glanceLeftAndPoint(character) {
    const glanceLeftAnimation = new THREE.AnimationClip("GlanceLeftAndPoint", 1.8, [
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
    character.animations.push(glanceLeftAnimation);
}
```

**Bi盻ブ c蘯｣m:** M蘯ｯt nghiﾃｪng nh蘯ｹ, gﾆｰﾆ｡ng m蘯ｷt nh蘯ｹ nhﾃng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 726: G蘯ｭp Nh蘯ｹ Ngﾆｰ盻拱 Vﾃ Giang Tay Nhi盻㏄ Huy蘯ｿt**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi nh蘯ｹ ngﾆｰ盻拱 v盻嬖 tay giang r盻冢g, bi盻ブ th盻・s盻ｱ ﾄ疎m mﾃｪ vﾃ m盻拱 g盻絞.

```javascript
function bowSlightlyAndSpreadArms(character) {
    const spreadArmsBowAnimation = new THREE.AnimationClip("BowSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsBowAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 thﾃ｢n thi盻㌻ vﾃ nhi盻㏄ tﾃｬnh.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 727: ﾄ脆ｰa Tay Lﾃｪn Vﾃ Kﾃｩo Tay L蘯｡i**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ柁ｰa tay lﾃｪn vﾃ kﾃｩo l蘯｡i g蘯ｧn ng盻ｱc nhﾆｰ nh蘯･n m蘯｡nh s盻ｱ t蘯ｭp trung.

```javascript
function raiseHandAndPullBack(character) {
    const pullBackAnimation = new THREE.AnimationClip("RaiseHandPullBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 3, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(pullBackAnimation);
}
```

**Bi盻ブ c蘯｣m:** M蘯ｯt m盻・to, nh蘯･n m蘯｡nh s盻ｱ chﾃｺ ﾃｽ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 728: Ch盻・C蘯｣ Hai Tay V盻・Hai Hﾆｰ盻嬾g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c hai tay ch盻・sang hai hﾆｰ盻嬾g ﾄ黛ｻ訴 l蘯ｭp nhau, t蘯｡o c蘯｣m giﾃ｡c ﾄ疎ng so sﾃ｡nh.

```javascript
function pointBothWays(character) {
    const pointBothWaysAnimation = new THREE.AnimationClip("PointBothWays", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(pointBothWaysAnimation);
}
```

**Bi盻ブ c蘯｣m:** Lﾃｴng mﾃy hﾆ｡i nhﾃｭu, nﾃｩt m蘯ｷt t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 729: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Ch盻・V盻・M盻冲 Hﾆｰ盻嬾g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch盻・tay v盻・m盻冲 hﾆｰ盻嬾g c盻･ th盻・v盻嬖 s盻ｱ ch蘯ｯc ch蘯ｯn.

```javascript
function standAndPointFirmly(character) {
    const pointFirmlyAnimation = new THREE.AnimationClip("StandPointFirmly", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointFirmlyAnimation);
}
```

**Bi盻ブ c蘯｣m:** M蘯ｯt hﾆｰ盻嬾g theo tay, nﾃｩt m蘯ｷt nghiﾃｪm tﾃｺc.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 730: V盻・Nh蘯ｹ Tay Vﾃ Cﾆｰ盻拱 ﾄ雪ｻ冢g Viﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c v盻・tay nh蘯ｹ k蘯ｿt h盻｣p v盻嬖 n盻･ cﾆｰ盻拱 khﾃｭch l盻・

```javascript
function clapAndSmileEncouragingly(character) {
    const clapSmileAnimation = new THREE.AnimationClip("ClapSmileEncouragingly", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(clapSmileAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 tﾆｰﾆ｡i, ﾃ｡nh m蘯ｯt ﾄ黛ｻ冢g viﾃｪn.

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm ﾃｽ tﾆｰ盻殤g ho蘯ｷc m盻・r盻冢g cﾃ｡c thao tﾃ｡c, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 痔笨ｨ
Hﾃ｣y khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g vﾃ thao tﾃ｡c c盻ｧa m盻冲 ngﾆｰ盻拱 thuy蘯ｿt trﾃｬnh ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th盻ｱc s盻ｱ t盻ｱ tin vﾃ gﾃ｢y 蘯･n tﾆｰ盻｣ng:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 731: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Sang Hai Bﾃｪn Vﾃ G蘯ｭt Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng, tay m盻・r盻冢g sang hai bﾃｪn v盻嬖 m盻冲 cﾃ｡i g蘯ｭt nh蘯ｹ, bi盻ブ th盻・s盻ｱ ﾄ妥ｳn nh蘯ｭn.

```javascript
function standAndOpenArmsWithNod(character) {
    const openArmsNodAnimation = new THREE.AnimationClip("StandOpenArmsNod", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openArmsNodAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt thﾃ｢n thi盻㌻, n盻･ cﾆｰ盻拱 nh蘯ｹ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 732: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Cao Sau ﾄ静ｳ H蘯｡ Xu盻創g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆ｡ tay lﾃｪn cao m盻冲 cﾃ｡ch m蘯｡nh m蘯ｽ vﾃ sau ﾄ妥ｳ h蘯｡ tay xu盻創g, nh蘯･n m蘯｡nh m盻冲 ﾃｽ tﾆｰ盻殤g.

```javascript
function liftAndLowerArmsConfidently(character) {
    const liftLowerArmsAnimation = new THREE.AnimationClip("LiftLowerArmsConfidently", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 3, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(liftLowerArmsAnimation);
}
```

**Bi盻ブ c蘯｣m:** Gﾆｰﾆ｡ng m蘯ｷt nghiﾃｪm tﾃｺc, ﾃ｡nh m蘯ｯt t盻ｱ tin.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 733: Nhﾃｬn Lﾆｰ盻孚 Qua Khﾃ｡n Gi蘯｣ Vﾃ M盻盈 Cﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nhﾃｬn bao quﾃ｡t khﾃ｡n gi蘯｣ t盻ｫ trﾃ｡i sang ph蘯｣i vﾃ k蘯ｿt thﾃｺc b蘯ｱng m盻冲 n盻･ cﾆｰ盻拱.

```javascript
function glanceAtAudienceAndSmile(character) {
    const audienceSmileAnimation = new THREE.AnimationClip("GlanceAtAudienceSmile", 2.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, -Math.PI / 12, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(audienceSmileAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 nh蘯ｹ nhﾃng, ﾃ｡nh m蘯ｯt sﾃ｡ng lﾃｪn s盻ｱ t盻ｱ tin.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 734: ﾄ雪ｻｩng Vﾃ ﾄ脆ｰa Tay Ra Trﾆｰ盻嫩 V盻嬖 Lﾃｲng Tay M盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩 v盻嬖 lﾃｲng bﾃn tay m盻・ t蘯｡o s盻ｱ k蘯ｿt n盻訴.

```javascript
function openHandGestureForward(character) {
    const openHandGestureAnimation = new THREE.AnimationClip("OpenHandGestureForward", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(openHandGestureAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt nh蘯ｹ nhﾃng, n盻･ cﾆｰ盻拱 d盻丘 dﾃng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 735: Bﾆｰ盻嫩 Lﾃｪn Vﾃ Hﾆｰ盻嬾g M盻冲 Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 lﾃｪn phﾃｭa trﾆｰ盻嫩 m盻冲 bﾆｰ盻嫩 nh盻・vﾃ ﾄ柁ｰa tay hﾆｰ盻嬾g d蘯ｫn v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function stepForwardAndGuideGesture(character) {
    const guideGestureAnimation = new THREE.AnimationClip("StepForwardGuideGesture", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(guideGestureAnimation);
}
```

**Bi盻ブ c蘯｣m:** Khuﾃｴn m蘯ｷt t蘯ｭp trung, ﾃ｡nh m蘯ｯt lﾃｴi cu盻創.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 736: Xoay Ngﾆｰ盻拱 Vﾃ Dang Tay V盻・Hai Hﾆｰ盻嬾g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng v盻嬖 tay dang r盻冢g ra hai bﾃｪn, bi盻ブ th盻・s盻ｱ m盻・r盻冢g.

```javascript
function spinAndOpenBothArms(character) {
    const openBothArmsAnimation = new THREE.AnimationClip("SpinOpenBothArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openBothArmsAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt vui v蘯ｻ, gﾆｰﾆ｡ng m蘯ｷt hﾃi hﾃｲa.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 737: Nhﾃｬn Xu盻創g V盻嬖 Tay ﾄ脆ｰa Sang M盻冲 Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi nh蘯ｹ ﾄ黛ｺｧu nhﾃｬn xu盻創g vﾃ tay dang nh蘯ｹ sang m盻冲 bﾃｪn, t蘯｡o c蘯｣m giﾃ｡c tr蘯ｧm ngﾃ｢m.

```javascript
function lookDownAndExtendArm(character) {
    const lookDownAnimation = new THREE.AnimationClip("LookDownExtendArm", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(lookDownAnimation);
}
```

**Bi盻ブ c蘯｣m:** Khuﾃｴn m蘯ｷt hﾆ｡i suy tﾆｰ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 738: ﾄ脆ｰa Hai Tay Lﾃｪn Trﾆｰ盻嫩 Ng盻ｱc V盻嬖 S盻ｱ Chﾃ｢n Thﾃnh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c hai tay ﾄ柁ｰa lﾃｪn trﾆｰ盻嫩 ng盻ｱc vﾃ gi盻ｯ nh蘯ｹ, bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g c蘯｣m vﾃ chﾃ｢n thﾃnh.

```javascript
function holdHandsToChest(character) {
    const holdChestAnimation = new THREE.AnimationClip("HoldHandsToChest", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(holdChestAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 nh蘯ｹ, ﾃ｡nh m蘯ｯt d盻丘 dﾃng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 739: ﾄ脆ｰa Tay Sang Hai Bﾃｪn V盻嬖 C盻ｭ Ch盻・M盻拱 G盻絞**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tay ﾄ柁ｰa sang hai bﾃｪn nh蘯ｹ nhﾃng nhﾆｰ m盻拱 g盻絞, bi盻ブ th盻・s盻ｱ hﾃｲa h盻｣p.

```javascript
function invitingHandGesture(character) {
    const invitingGestureAnimation = new THREE.AnimationClip("InvitingHandGesture", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(invitingGestureAnimation);
}
```

**Bi盻ブ c蘯｣m:** Gﾆｰﾆ｡ng m蘯ｷt 蘯･m ﾃ｡p, m蘯ｯt hﾆｰ盻嬾g t盻嬖 khﾃ｡n gi蘯｣.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 740: Cﾃｺi ﾄ雪ｺｧu Nh蘯ｹ Vﾃ ﾄ脆ｰa Tay Ch盻・Xu盻創g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi nh蘯ｹ ﾄ黛ｺｧu vﾃ tay ch盻・xu盻創g nhﾆｰ minh h盻溝 m盻冲 ﾄ訴盻ノ quan tr盻肱g.

```javascript
function bowAndPointDown(character) {
    const pointDownAnimation = new THREE.AnimationClip("BowPointDown", 2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointDownAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt nghiﾃｪm tﾃｺc, nﾃｩt m蘯ｷt chﾃｺ ﾃｽ.

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c ho蘯ｷc tinh ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c nﾃy, tﾃｴi s蘯ｵn sﾃng h盻・tr盻｣ thﾃｪm nhﾃｩ! 痔笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g vﾃ thao tﾃ｡c thuy蘯ｿt trﾃｬnh k蘯ｿt h盻｣p bi盻ブ c蘯｣m ﾄ黛ｻ・t蘯｡o s盻ｱ h蘯･p d蘯ｫn vﾃ chuyﾃｪn nghi盻㎝ cho nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 741: Bﾆｰ盻嫩 Ti蘯ｿn V盻嬖 Tay Nh蘯･n M蘯｡nh Xu盻創g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 t盻嬖 m盻冲 bﾆｰ盻嫩 vﾃ h蘯｡ tay m蘯｡nh xu盻創g, bi盻ブ th盻・s盻ｱ nh蘯･n m蘯｡nh quy蘯ｿt li盻㏄.

```javascript
function stepForwardAndPressArmDown(character) {
    const pressArmDownAnimation = new THREE.AnimationClip("StepForwardPressArmDown", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(pressArmDownAnimation);
}
```

**Bi盻ブ c蘯｣m:** Lﾃｴng mﾃy nhﾃｭu l蘯｡i, ﾃ｡nh m蘯ｯt cﾆｰﾆ｡ng ngh盻・

---

### **Chuy盻ハ ﾄ雪ｻ冢g 742: Xoay Nh蘯ｹ Ngﾆｰ盻拱 V盻嬖 Tay ﾄ脆ｰa Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay nh蘯ｹ ngﾆｰ盻拱 vﾃ giﾆ｡ tay cao lﾃｪn bi盻ブ th盻・s盻ｱ t盻ｱ tin.

```javascript
function gentleSpinAndRaiseHand(character) {
    const raiseHandAnimation = new THREE.AnimationClip("GentleSpinRaiseHand", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseHandAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 t盻ｱ tin, ﾃ｡nh m蘯ｯt t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 743: ﾄ雪ｻｩng V盻嬖 Tay ﾄ紳n Trﾆｰ盻嫩 Ng盻ｱc Bi盻ブ Th盻・Suy Tﾆｰ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ疎n trﾆｰ盻嫩 ng盻ｱc, t蘯｡o c蘯｣m giﾃ｡c ﾄ疎ng suy nghﾄｩ.

```javascript
function standAndCrossArmsThoughtfully(character) {
    const crossArmsAnimation = new THREE.AnimationClip("StandCrossArmsThoughtfully", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, -Math.PI / 8, 0, 0, Math.PI / 8, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt hﾆ｡i nghiﾃｪng xu盻創g, nﾃｩt m蘯ｷt suy tﾆｰ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 744: ﾄ脆ｰa M盻冲 Tay Ra Trﾆｰ盻嫩 Vﾃ Nh蘯･n M蘯｡nh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tay vﾆｰﾆ｡n ra phﾃｭa trﾆｰ盻嫩 vﾃ h蘯｡ m蘯｡nh xu盻創g ﾄ黛ｻ・nh蘯･n m蘯｡nh n盻冓 dung.

```javascript
function extendHandAndPressDown(character) {
    const pressDownAnimation = new THREE.AnimationClip("ExtendHandPressDown", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(pressDownAnimation);
}
```

**Bi盻ブ c蘯｣m:** Lﾃｴng mﾃy hﾆ｡i nhﾃｭu, gﾆｰﾆ｡ng m蘯ｷt t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 745: Xoay Ngﾆｰ盻拱 Vﾃ Giﾆ｡ Tay Chﾃo Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay nh蘯ｹ ngﾆｰ盻拱 v盻嬖 m盻冲 cﾃ｡i giﾆ｡ tay chﾃo nh蘯ｹ nhﾃng.

```javascript
function spinAndGreet(character) {
    const greetAnimation = new THREE.AnimationClip("SpinGreet", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(greetAnimation);
}
```

**Bi盻ブ c蘯｣m:** M盻盈 cﾆｰ盻拱 nh蘯ｹ nhﾃng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 746: Lﾃｹi L蘯｡i M盻冲 Bﾆｰ盻嫩 V盻嬖 Tay Dang R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 lﾃｹi vﾃ dang tay r盻冢g, bi盻ブ th盻・s盻ｱ m盻・r盻冢g vﾃ m盻拱 g盻絞.

```javascript
function stepBackWithOpenArms(character) {
    const openArmsAnimation = new THREE.AnimationClip("StepBackOpenArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt thﾃ｢n thi盻㌻, n盻･ cﾆｰ盻拱 nh蘯ｹ nhﾃng.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 747: G蘯ｭt Nh蘯ｹ ﾄ雪ｺｧu V盻嬖 Tay Ch蘯｡m Ng盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c g蘯ｭt nh蘯ｹ vﾃ tay ch蘯｡m ng盻ｱc bi盻ブ th盻・s盻ｱ chﾃ｢n thﾃnh.

```javascript
function nodWithHeartTouch(character) {
    const heartTouchAnimation = new THREE.AnimationClip("NodHeartTouch", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(heartTouchAnimation);
}
```

**Bi盻ブ c蘯｣m:** Gﾆｰﾆ｡ng m蘯ｷt d盻丘 dﾃng, ﾃ｡nh m蘯ｯt c蘯｣m kﾃｭch.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 748: Nhﾃｬn Qua Khﾃ｡n Gi蘯｣ Vﾃ Giﾆ｡ Tay Lﾃｪn Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nhﾃｬn bao quﾃ｡t khﾃ｡n gi蘯｣ vﾃ k蘯ｿt h盻｣p tay giﾆ｡ cao bi盻ブ th盻・s盻ｱ t盻ｱ tin.

```javascript
function scanAudienceWithRaisedHand(character) {
    const raisedHandAnimation = new THREE.AnimationClip("ScanAudienceRaisedHand", 2.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, -Math.PI / 12, 0, Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raisedHandAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt sﾃ｡ng, nﾃｩt m蘯ｷt t盻ｱ tin.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 749: ﾄ雪ｻｩng Yﾃｪn Vﾃ Ch盻・Tay Lﾃｪn Trﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ch盻・tay lﾃｪn trﾃｪn nhﾆｰ ﾄ疎ng mu盻創 lﾃm rﾃｵ m盻冲 ﾄ訴盻ノ cao hﾆ｡n.

```javascript
function standAndPointUp(character) {
    const pointUpAnimation = new THREE.AnimationClip("StandPointUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointUpAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt hﾆｰ盻嬾g lﾃｪn, nﾃｩt m蘯ｷt chﾄノ chﾃｺ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 750: V盻・Nh蘯ｹ Tay Vﾃ M盻盈 Cﾆｰ盻拱 V盻嬖 S盻ｱ Khﾃｭch L盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c v盻・nh蘯ｹ tay vﾃ n盻・n盻･ cﾆｰ盻拱 khﾃｭch l盻・ bi盻ブ th盻・s盻ｱ ﾄ黛ｻ冢g viﾃｪn.

```javascript
function clapWithEncouragingSmile(character) {
    const encouragingSmileAnimation = new THREE.AnimationClip("ClapEncouragingSmile", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(encouragingSmileAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 r盻冢g, ﾃ｡nh m蘯ｯt thﾃ｢n thi盻㌻.

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h theo cﾃ｡ch khﾃ｡c, tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c h盻・tr盻｣! 痔笨ｨ


     















