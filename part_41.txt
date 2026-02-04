}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 359: L蘯ｯc ﾄ雪ｺｧu Vﾃ ﾄ脆ｰa Tay Lﾃｪn Ngﾄハ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ kﾃｨm theo tay giﾆ｡ lﾃｪn bi盻ブ th盻・s盻ｱ t盻ｫ ch盻訴.

```javascript
function shakeHeadAndRaiseHand(character) {
    const shakeHandAnimation = new THREE.AnimationClip("ShakeHeadRaiseHand", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(shakeHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 360: ﾄ雪ｻｩng V盻嬖 Tﾆｰ Th蘯ｿ M盻冲 Tay Ch盻創g Eo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ch盻創g eo t蘯｡o phong thﾃ｡i t盻ｱ tin.

```javascript
function standHandOnHip(character) {
    const handHipAnimation = new THREE.AnimationClip("StandHandOnHip", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handHipAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc mu盻創 tﾃｹy ch盻穎h sﾃ｢u hﾆ｡n, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

  Hﾃ｣y cﾃｹng ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn 蘯･n tﾆｰ盻｣ng vﾃ phong phﾃｺ hﾆ｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 361: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Hai Tay ﾄ雪ｺｷt Lﾃｪn Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay ﾄ黛ｺｷt lﾃｪn ng盻ｱc bi盻ブ th盻・s盻ｱ c蘯｣m kﾃｭch ho蘯ｷc c蘯｣m xﾃｺc m蘯｡nh.

```javascript
function standWithHandsOnChest(character) {
    const handsOnChestAnimation = new THREE.AnimationClip("HandsOnChest", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(handsOnChestAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 362: Nh蘯｣y Lﾃｪn V盻嬖 Tﾆｰ Th蘯ｿ M盻・R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 c蘯｣ tay vﾃ chﾃ｢n m盻・r盻冢g t蘯｡o s盻ｱ nﾄハg ﾄ黛ｻ冢g.

```javascript
function leapWithWidePose(character) {
    const widePoseAnimation = new THREE.AnimationClip("LeapWidePose", 2, [
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
    character.animations.push(widePoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 363: Lﾃｹi M盻冲 Bﾆｰ盻嫩 Vﾃ Giﾆ｡ Tay Ph蘯｣n 盻ｨng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi k蘯ｿt h盻｣p giﾆ｡ tay lﾃｪn nhﾆｰ bi盻ブ th盻・s盻ｱ ngﾄハ c蘯｣n ho蘯ｷc phﾃｲng th盻ｧ.

```javascript
function stepBackAndReact(character) {
    const reactAnimation = new THREE.AnimationClip("StepBackReact", 1.8, [
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
    character.animations.push(reactAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 364: Quay ﾄ雪ｺｧu Vﾃ ﾄ脆ｰa Tay Chﾃo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ﾄ黛ｺｧu nhanh vﾃ giﾆ｡ tay chﾃo m盻冲 cﾃ｡ch thﾃ｢n thi盻㌻.

```javascript
function turnHeadAndWave(character) {
    const waveAnimation = new THREE.AnimationClip("TurnHeadWave", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 365: ﾄ静｡ Vﾃｲng Vﾃ D盻ｫng 盻馬 ﾄ雪ｻ杵h**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung m盻冲 cﾃｺ ﾄ妥｡ vﾃｲng cung m蘯｡nh m蘯ｽ sau ﾄ妥ｳ d盻ｫng l蘯｡i trong tﾆｰ th蘯ｿ cﾃ｢n b蘯ｱng.

```javascript
function roundhouseKickAndPose(character) {
    const roundhouseAnimation = new THREE.AnimationClip("RoundhouseKickPose", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(roundhouseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 366: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Khoanh Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ khoanh tay nh蘯ｹ nhﾃng bi盻ブ th盻・s盻ｱ t盻ｱ tin ho蘯ｷc thﾆｰ thﾃ｡i.

```javascript
function standAndFoldArms(character) {
    const foldArmsAnimation = new THREE.AnimationClip("FoldArms", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 367: Nh蘯｣y Lﾃｪn Vﾃ Tung Cﾃｺ ﾄ雪ｺ･m Xu盻創g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ tung m盻冲 cﾃｺ ﾄ黛ｺ･m m蘯｡nh xu盻創g dﾆｰ盻嬖.

```javascript
function leapAndPunchDownward(character) {
    const punchDownwardAnimation = new THREE.AnimationClip("PunchDownward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(punchDownwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 368: Qu盻ｳ Hai G盻訴 Vﾃ Cﾃｺi ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ xu盻創g hai g盻訴 vﾃ cﾃｺi ﾄ黛ｺｧu sﾃ｢u bi盻ブ th盻・s盻ｱ kﾃｭnh tr盻肱g.

```javascript
function kneelBothLegsAndBow(character) {
    const bowAnimation = new THREE.AnimationClip("KneelBothLegsBow", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 369: ﾄ雪ｻｩng V盻嬖 Tay Du盻擁 Hai Bﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ du盻擁 r盻冢g tay sang hai bﾃｪn bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn.

```javascript
function openArmsWide(character) {
    const openArmsAnimation = new THREE.AnimationClip("OpenArmsWide", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(openArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 370: L蘯ｯc ﾄ雪ｺｧu Vﾃ ﾄ脆ｰa Tay Lﾃｪn Ch蘯ｷn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ vﾃ giﾆ｡ tay lﾃｪn trﾆｰ盻嫩 ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ khﾃｴng ﾄ黛ｻ渡g tﾃｬnh.

```javascript
function shakeHeadAndBlock(character) {
    const blockAnimation = new THREE.AnimationClip("ShakeHeadBlock", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(blockAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｳ thﾃｪm ﾃｽ tﾆｰ盻殤g ho蘯ｷc mu盻創 m盻・r盻冢g, tﾃｴi s蘯ｵn sﾃng ti蘯ｿp t盻･c h盻・tr盻｣ nhﾃｩ! 噫笨ｨ
    Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm h蘯･p d蘯ｫn:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 371: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 M盻冲 Tay ﾄ脆ｰa Lﾃｪn Tr蘯ｧn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ﾄ柁ｰa lﾃｪn cao bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m ho蘯ｷc chi蘯ｿn th蘯ｯng.

```javascript
function standAndRaiseOneHand(character) {
    const raiseOneHandAnimation = new THREE.AnimationClip("RaiseOneHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(raiseOneHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 372: Nh蘯｣y Lﾃｹi V盻嬖 Tay Kﾃｩo Phﾃｭa Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｹi k蘯ｿt h盻｣p v盻嬖 tay kﾃｩo m蘯｡nh v盻・phﾃｭa sau ﾄ黛ｻ・t蘯｡o dﾃ｡ng ph蘯｣n ﾄ妥ｲn.

```javascript
function leapBackAndPull(character) {
    const leapPullAnimation = new THREE.AnimationClip("LeapBackPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 373: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tﾆｰ Th蘯ｿ T蘯ｭp Trung**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 ﾃ｡nh m蘯ｯt t蘯ｭp trung vﾃ tay ﾄ黛ｺｷt bﾃｪn hﾃｴng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ nghiﾃｪm tﾃｺc.

```javascript
function standWithFocus(character) {
    const focusAnimation = new THREE.AnimationClip("StandFocus", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(focusAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 374: B蘯ｭt Nh蘯｣y V盻嬖 Tﾆｰ Th蘯ｿ Tay B蘯｣o V盻・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao v盻嬖 tay ﾄ柁ｰa lﾃｪn trﾆｰ盻嫩 ng盻ｱc ﾄ黛ｻ・b蘯｣o v盻・

```javascript
function leapAndGuard(character) {
    const guardAnimation = new THREE.AnimationClip("LeapGuard", 2, [
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
    character.animations.push(guardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 375: Qu盻ｳ M盻冲 G盻訴 V盻嬖 Tay ﾄ脆ｰa Ra Ch盻・Hﾆｰ盻嬾g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 xu盻創g vﾃ ﾄ柁ｰa tay ra ch盻・v盻・phﾃｭa trﾆｰ盻嫩, bi盻ブ th盻・s盻ｱ ch盻・d蘯ｫn.

```javascript
function kneelAndPoint(character) {
    const kneelPointAnimation = new THREE.AnimationClip("KneelPoint", 2, [
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
    character.animations.push(kneelPointAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 376: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Trﾃ｡n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ ﾄ黛ｺｷt tay lﾃｪn trﾃ｡n ﾄ黛ｻ・che m蘯ｯt vﾃ quan sﾃ｡t phﾃｭa trﾆｰ盻嫩.

```javascript
function shieldEyesToLookFar(character) {
    const lookFarAnimation = new THREE.AnimationClip("ShieldEyesLookFar", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(lookFarAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 377: ﾄ静｡ Cao V盻嬖 Tay Ch蘯ｷn Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ cao k蘯ｿt h盻｣p v盻嬖 tay ch蘯ｷn phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・t蘯｡o dﾃ｡ng phﾃｲng th盻ｧ.

```javascript
function highKickWithArmShield(character) {
    const kickShieldAnimation = new THREE.AnimationClip("HighKickArmShield", 2, [
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
    character.animations.push(kickShieldAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 378: Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱 360 ﾄ雪ｻ・V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao, xoay ngﾆｰ盻拱 m盻冲 vﾃｲng hoﾃn ch盻穎h vﾃ k蘯ｿt thﾃｺc v盻嬖 tay giﾆ｡ cao bi盻ブ th盻・s盻ｱ chi蘯ｿn th蘯ｯng.

```javascript
function leapSpinWithVictoryPose(character) {
    const victoryPoseAnimation = new THREE.AnimationClip("LeapSpinVictoryPose", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(victoryPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 379: ﾄ雪ｻｩng V盻嬖 Tay ﾄ雪ｺｷt Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ黛ｺｷt phﾃｭa sau lﾆｰng t蘯｡o c蘯｣m giﾃ｡c nghiﾃｪm tﾃｺc ho蘯ｷc suy nghﾄｩ.

```javascript
function standWithHandsBehind(character) {
    const behindHandsAnimation = new THREE.AnimationClip("HandsBehindBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(behindHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 380: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung Cﾃｺ Ch盻皇**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi th蘯･p ngﾆｰ盻拱 vﾃ tung m盻冲 cﾃｺ ch盻皇 m蘯｡nh m蘯ｽ v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function crouchAndJab(character) {
    const crouchJabAnimation = new THREE.AnimationClip("CrouchAndJab", 1.8, [
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
    character.animations.push(crouchJabAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 b盻・sung thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc ﾄ訴盻「 ch盻穎h chi ti蘯ｿt, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm h蘯･p d蘯ｫn:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 371: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 M盻冲 Tay ﾄ脆ｰa Lﾃｪn Tr蘯ｧn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 tay ﾄ柁ｰa lﾃｪn cao bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m ho蘯ｷc chi蘯ｿn th蘯ｯng.

```javascript
function standAndRaiseOneHand(character) {
    const raiseOneHandAnimation = new THREE.AnimationClip("RaiseOneHand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(raiseOneHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 372: Nh蘯｣y Lﾃｹi V盻嬖 Tay Kﾃｩo Phﾃｭa Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｹi k蘯ｿt h盻｣p v盻嬖 tay kﾃｩo m蘯｡nh v盻・phﾃｭa sau ﾄ黛ｻ・t蘯｡o dﾃ｡ng ph蘯｣n ﾄ妥ｲn.

```javascript
function leapBackAndPull(character) {
    const leapPullAnimation = new THREE.AnimationClip("LeapBackPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(leapPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 373: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tﾆｰ Th蘯ｿ T蘯ｭp Trung**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 ﾃ｡nh m蘯ｯt t蘯ｭp trung vﾃ tay ﾄ黛ｺｷt bﾃｪn hﾃｴng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ nghiﾃｪm tﾃｺc.

```javascript
function standWithFocus(character) {
    const focusAnimation = new THREE.AnimationClip("StandFocus", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 18, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(focusAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 374: B蘯ｭt Nh蘯｣y V盻嬖 Tﾆｰ Th蘯ｿ Tay B蘯｣o V盻・*
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao v盻嬖 tay ﾄ柁ｰa lﾃｪn trﾆｰ盻嫩 ng盻ｱc ﾄ黛ｻ・b蘯｣o v盻・

```javascript
function leapAndGuard(character) {
    const guardAnimation = new THREE.AnimationClip("LeapGuard", 2, [
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
    character.animations.push(guardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 375: Qu盻ｳ M盻冲 G盻訴 V盻嬖 Tay ﾄ脆ｰa Ra Ch盻・Hﾆｰ盻嬾g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 xu盻創g vﾃ ﾄ柁ｰa tay ra ch盻・v盻・phﾃｭa trﾆｰ盻嫩, bi盻ブ th盻・s盻ｱ ch盻・d蘯ｫn.

```javascript
function kneelAndPoint(character) {
    const kneelPointAnimation = new THREE.AnimationClip("KneelPoint", 2, [
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
    character.animations.push(kneelPointAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 376: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Trﾃ｡n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ ﾄ黛ｺｷt tay lﾃｪn trﾃ｡n ﾄ黛ｻ・che m蘯ｯt vﾃ quan sﾃ｡t phﾃｭa trﾆｰ盻嫩.

```javascript
function shieldEyesToLookFar(character) {
    const lookFarAnimation = new THREE.AnimationClip("ShieldEyesLookFar", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(lookFarAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 377: ﾄ静｡ Cao V盻嬖 Tay Ch蘯ｷn Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡ cao k蘯ｿt h盻｣p v盻嬖 tay ch蘯ｷn phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・t蘯｡o dﾃ｡ng phﾃｲng th盻ｧ.

```javascript
function highKickWithArmShield(character) {
    const kickShieldAnimation = new THREE.AnimationClip("HighKickArmShield", 2, [
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
    character.animations.push(kickShieldAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 378: Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱 360 ﾄ雪ｻ・V盻嬖 Tay Giﾆ｡ Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao, xoay ngﾆｰ盻拱 m盻冲 vﾃｲng hoﾃn ch盻穎h vﾃ k蘯ｿt thﾃｺc v盻嬖 tay giﾆ｡ cao bi盻ブ th盻・s盻ｱ chi蘯ｿn th蘯ｯng.

```javascript
function leapSpinWithVictoryPose(character) {
    const victoryPoseAnimation = new THREE.AnimationClip("LeapSpinVictoryPose", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(victoryPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 379: ﾄ雪ｻｩng V盻嬖 Tay ﾄ雪ｺｷt Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ黛ｺｷt phﾃｭa sau lﾆｰng t蘯｡o c蘯｣m giﾃ｡c nghiﾃｪm tﾃｺc ho蘯ｷc suy nghﾄｩ.

```javascript
function standWithHandsBehind(character) {
    const behindHandsAnimation = new THREE.AnimationClip("HandsBehindBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(behindHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 380: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung Cﾃｺ Ch盻皇**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi th蘯･p ngﾆｰ盻拱 vﾃ tung m盻冲 cﾃｺ ch盻皇 m蘯｡nh m蘯ｽ v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function crouchAndJab(character) {
    const crouchJabAnimation = new THREE.AnimationClip("CrouchAndJab", 1.8, [
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
    character.animations.push(crouchJabAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 b盻・sung thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ho蘯ｷc ﾄ訴盻「 ch盻穎h chi ti蘯ｿt, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ
Tﾃｴi ﾄ妥｣ s蘯ｵn sﾃng ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn phong phﾃｺ vﾃ h蘯･p d蘯ｫn:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 381: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ脆ｰa Ra Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ柁ｰa ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng chﾃo ho蘯ｷc bi盻ブ th盻・s盻ｱ m盻拱 g盻絞.

```javascript
function standAndOfferHand(character) {
    const offerHandAnimation = new THREE.AnimationClip("OfferHand", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 382: Qu盻ｳ Xu盻創g Vﾃ ﾄ脆ｰa Tay Lﾃｪn Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ xu盻創g v盻嬖 m盻冲 g盻訴 vﾃ giﾆ｡ tay lﾃｪn cao bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m ho蘯ｷc chi蘯ｿn th蘯ｯng.

```javascript
function kneelAndRaiseArm(character) {
    const kneelRaiseAnimation = new THREE.AnimationClip("KneelRaiseArm", 2, [
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
    character.animations.push(kneelRaiseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 383: B蘯ｭt Nh蘯｣y V盻嬖 Tay Vung V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn m蘯｡nh m蘯ｽ v盻嬖 tay ﾄ柁ｰa ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng tung ﾄ妥ｲn.

```javascript
function leapWithPunchForward(character) {
    const punchForwardAnimation = new THREE.AnimationClip("LeapPunchForward", 2, [
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
    character.animations.push(punchForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 384: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tﾆｰ Th蘯ｿ Tay Giﾆ｡ Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ c蘯｣ hai tay lﾃｪn cao bi盻ブ th盻・ni盻［ vui ho蘯ｷc s盻ｱ c盻・vﾅｩ.

```javascript
function standAndLiftArmsHigh(character) {
    const liftArmsHighAnimation = new THREE.AnimationClip("LiftArmsHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(liftArmsHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 385: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 Tay ﾄ脆ｰa Ra Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi vﾃ ﾄ柁ｰa tay ra sau t蘯｡o c蘯｣m giﾃ｡c nﾃｩ trﾃ｡nh ho蘯ｷc phﾃｲng th盻ｧ.

```javascript
function stepBackWithHandPull(character) {
    const stepBackPullAnimation = new THREE.AnimationClip("StepBackHandPull", 1.8, [
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
    character.animations.push(stepBackPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 386: Nh蘯｣y V盻嬖 Tﾆｰ Th蘯ｿ Vﾃｲng Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn v盻嬖 c蘯｣ hai tay giﾆ｡ vﾃｲng cung trﾆｰ盻嫩 cﾆ｡ th盻・t蘯｡o phong cﾃ｡ch uy盻ハ chuy盻ハ.

```javascript
function leapWithCircularArms(character) {
    const circularArmsAnimation = new THREE.AnimationClip("LeapCircularArms", 2, [
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
    character.animations.push(circularArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 387: Quay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Ch盻・Xa**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 nhanh vﾃ ﾄ柁ｰa tay ch盻・v盻・phﾃｭa xa bi盻ブ th盻・s盻ｱ quy蘯ｿt ﾄ黛ｻ杵h.

```javascript
function spinAndPointFar(character) {
    const pointFarAnimation = new THREE.AnimationClip("SpinPointFar", 1.8, [
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
    character.animations.push(pointFarAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 388: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ雪ｺｷt Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ黛ｺｷt phﾃｭa sau lﾆｰng bi盻ブ th盻・s盻ｱ nghiﾃｪm tﾃｺc ho蘯ｷc thﾆｰ thﾃ｡i.

```javascript
function standCalmly(character) {
    const calmStandAnimation = new THREE.AnimationClip("StandCalmly", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(calmStandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 389: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Nﾃ｢ng V蘯ｭt**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi th蘯･p ngﾆｰ盻拱 vﾃ nﾃ｢ng v蘯ｭt lﾃｪn t蘯｡o s盻ｩc m蘯｡nh.

```javascript
function bendAndLift(character) {
    const bendLiftAnimation = new THREE.AnimationClip("BendLift", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(bendLiftAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 390: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tﾆｰ Th蘯ｿ Chﾃ｢n R盻冢g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng v盻ｯng vﾃng v盻嬖 hai chﾃ｢n dang r盻冢g t蘯｡o phong thﾃ｡i m蘯｡nh m蘯ｽ.

```javascript
function standFirm(character) {
    const firmStandAnimation = new THREE.AnimationClip("StandFirm", 1.5, [
        new THREE.KeyframeTrack(
            'character.legs.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0]
        )
    ]);
    character.animations.push(firmStandAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 噫笨ｨ

 Chﾃｺng ta hﾃ｣y ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ﾄ黛ｻ冂 ﾄ妥｡o:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 391: Nh蘯｣y Lﾃｪn V盻嬖 Tay Ch盻・Th蘯ｳng Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao vﾃ ﾄ柁ｰa tay ch盻・th蘯ｳng phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m.

```javascript
function leapWithForwardPoint(character) {
    const forwardPointAnimation = new THREE.AnimationClip("LeapForwardPoint", 2, [
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
    character.animations.push(forwardPointAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 392: ﾄ雪ｻｩng V盻嬖 Tay ﾄ紳n Sau Lﾆｰng Vﾃ Quan Sﾃ｡t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ疎n sau lﾆｰng vﾃ ﾃ｡nh m蘯ｯt quan sﾃ｡t xung quanh.

```javascript
function standWithObservation(character) {
    const observationAnimation = new THREE.AnimationClip("StandWithObservation", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(observationAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 393: Quay Ngﾆｰ盻拱 Vﾃ Vung Tay Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh vﾃ vung tay m蘯｡nh lﾃｪn cao bi盻ブ th盻・s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function spinAndRaiseArm(character) {
    const raiseArmAnimation = new THREE.AnimationClip("SpinRaiseArm", 1.8, [
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
