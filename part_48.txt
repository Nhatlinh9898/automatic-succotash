        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 669: Xoay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Ch蘯｡m ﾄ雪ｺ･t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh vﾃ k蘯ｿt h盻｣p v盻嬖 tay ch蘯｡m ﾄ黛ｺ･t t蘯｡o dﾃ｡ng ngh盻・thu蘯ｭt.

```javascript
function spinAndTouchGround(character) {
    const touchGroundAnimation = new THREE.AnimationClip("SpinTouchGround", 2.5, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchGroundAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 670: ﾄ雪ｻ冢g Tﾃ｡c Chﾃo K蘯ｿt Thﾃｺc V盻嬖 Tay U盻創 Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g d盻ｫng l蘯｡i v盻嬖 tay u盻創 nh蘯ｹ, bi盻ブ th盻・s盻ｱ hoﾃn thi盻㌻.

```javascript
function finishingGestureWithCurvedHands(character) {
    const curvedHandsAnimation = new THREE.AnimationClip("FinishingGestureCurvedHands", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(curvedHandsAnimation);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 nhﾃｩ! 茶笨ｨ
Chﾃｺng ta hﾃ｣y ti蘯ｿp t盻･c sﾃ｡ng t蘯｡o thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c khiﾃｪu vﾅｩ k蘯ｿt h盻｣p, ﾄ黛ｺｧy tinh t蘯ｿ vﾃ m盻［ m蘯｡i ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn h蘯･p d蘯ｫn:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 671: Nh蘯｣y Lﾃｪn Vﾃ Xoay Ngﾆｰ盻拱 M盻冲 Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ xoay ngﾆｰ盻拱 m盻冲 vﾃｲng, bi盻ブ th盻・s盻ｱ linh ho蘯｡t.

```javascript
function leapAndFullTurn(character) {
    const fullTurnAnimation = new THREE.AnimationClip("LeapFullTurn", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(fullTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 672: ﾄ雪ｻｩng V盻嬖 Tay ﾄ紳n Sau Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ疎n tay sau lﾆｰng, t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n.

```javascript
function standWithInterlacedHands(character) {
    const interlacedHandsAnimation = new THREE.AnimationClip("StandInterlacedHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 12, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(interlacedHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 673: Xoay Ngﾆｰ盻拱 Vﾃ Tung Tay V盻・Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ vung tay v盻・phﾃｭa sau t蘯｡o s盻ｱ m盻［ m蘯｡i.

```javascript
function spinAndSwingArmsBack(character) {
    const swingArmsBackAnimation = new THREE.AnimationClip("SpinSwingArmsBack", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
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

### **Chuy盻ハ ﾄ雪ｻ冢g 674: Nh蘯｣y Vﾃ ﾄ脆ｰa Tay Chﾃｩo Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ ﾄ柁ｰa tay chﾃｩo nhau lﾃｪn cao, t蘯｡o dﾃ｡ng ngh盻・thu蘯ｭt.

```javascript
function leapAndCrossHandsUp(character) {
    const crossHandsUpAnimation = new THREE.AnimationClip("LeapCrossHandsUp", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(crossHandsUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 675: Bﾆｰ盻嫩 Vﾃ U盻創 Tay Nh蘯ｹ Trﾆｰ盻嫩 M蘯ｷt**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ch蘯ｭm rﾃ｣i vﾃ k蘯ｿt h盻｣p v盻嬖 vi盻㌘ u盻創 tay trﾆｰ盻嫩 m蘯ｷt, t蘯｡o s盻ｱ duyﾃｪn dﾃ｡ng.

```javascript
function stepAndCurveHands(character) {
    const curveHandsAnimation = new THREE.AnimationClip("StepCurveHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(curveHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 676: Xoay Vﾃ Tung Tay K蘯ｿt H盻｣p Chﾃ｢n Nh蘯･c**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh v盻嬖 tay vung ra vﾃ chﾃ｢n nh蘯･c lﾃｪn t蘯｡o s盻ｱ m盻［ m蘯｡i.

```javascript
function spinSwingHandsAndLiftLeg(character) {
    const swingLiftLegAnimation = new THREE.AnimationClip("SpinSwingHandsLiftLeg", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(swingLiftLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 677: ﾄ雪ｻｩng Vﾃ Vﾆｰﾆ｡n Tay Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay vﾆｰﾆ｡n nh蘯ｹ ra phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c thanh thoﾃ｡t.

```javascript
function standAndGracefullyStretchArms(character) {
    const gracefullyStretchAnimation = new THREE.AnimationClip("StandGracefullyStretchArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(gracefullyStretchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 678: Nh蘯｣y Vﾃ Vﾆｰﾆ｡n Chﾃ｢n Th蘯ｳng Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao v盻嬖 chﾃ｢n vﾆｰﾆ｡n th蘯ｳng lﾃｪn tr盻拱, bi盻ブ th盻・s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function leapAndKickLegHigh(character) {
    const kickLegHighAnimation = new THREE.AnimationClip("LeapKickLegHigh", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(kickLegHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 679: Xoay Ngﾆｰ盻拱 Vﾃ Chﾃo Nh蘯ｹ V盻嬖 Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay nh蘯ｹ ngﾆｰ盻拱 vﾃ k蘯ｿt thﾃｺc b蘯ｱng m盻冲 c盻ｭ ch盻・chﾃo nh蘯ｹ nhﾃng.

```javascript
function spinAndGentleBow(character) {
    const gentleBowAnimation = new THREE.AnimationClip("SpinGentleBow", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gentleBowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 680: ﾄ雪ｻ冢g Tﾃ｡c D盻ｫng V盻嬖 Tay Ch蘯｡m Tim**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay nh蘯ｹ nhﾃng ﾄ黛ｺｷt lﾃｪn ng盻ｱc, bi盻ブ th盻・s盻ｱ c蘯｣m kﾃｭch.

```javascript
function stopWithHandOnHeart(character) {
    const handOnHeartAnimation = new THREE.AnimationClip("StopHandOnHeart", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handOnHeartAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c m盻嬖 ho蘯ｷc tﾃｹy ch盻穎h thﾃｪm n盻ｯa, tﾃｴi s蘯ｽ s蘯ｵn sﾃng h盻・tr盻｣! 検茶
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c khiﾃｪu vﾅｩ k蘯ｿt h盻｣p m盻嬖 l蘯｡ vﾃ phong cﾃ｡ch ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn n盻品 b蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 681: Nh蘯｣y Vﾃ Tung Tay Theo Dﾃ｡ng Ch盻ｯ V**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao v盻嬖 tay m盻・r盻冢g t蘯｡o hﾃｬnh ch盻ｯ V, bi盻ブ th盻・s盻ｱ t盻ｱ do.

```javascript
function leapAndFormVShape(character) {
    const vShapeAnimation = new THREE.AnimationClip("LeapFormVShape", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(vShapeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 682: Xoay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Ch蘯｡m Vai**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ vﾃ ﾄ柁ｰa tay ch蘯｡m vai m盻冲 cﾃ｡ch uy盻ハ chuy盻ハ.

```javascript
function spinAndTouchShoulder(character) {
    const touchShoulderAnimation = new THREE.AnimationClip("SpinTouchShoulder", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, Math.PI / 6, 0]
        )
    ]);
    character.animations.push(touchShoulderAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 683: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Lﾃｪn Vﾃ Vﾆｰﾆ｡n Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng vﾃ tay vﾆｰﾆ｡n cao bi盻ブ th盻・s盻ｱ m蘯｡nh m蘯ｽ vﾃ quy蘯ｿt tﾃ｢m.

```javascript
function standAndLiftHandsUp(character) {
    const liftHandsUpAnimation = new THREE.AnimationClip("StandLiftHandsUp", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftHandsUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 684: Nh蘯｣y Vﾃ Tung Tay U盻創 Lﾆｰ盻｣n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ tay xoay u盻創 lﾆｰ盻｣n nh蘯ｹ nhﾃng, t蘯｡o c蘯｣m giﾃ｡c m盻［ m蘯｡i.

```javascript
function leapAndWaveHandsElegantly(character) {
    const waveHandsAnimation = new THREE.AnimationClip("LeapWaveHandsElegantly", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(waveHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 685: Xoay Ngﾆｰ盻拱 Vﾃ Vﾆｰﾆ｡n Tay Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn vﾃ k蘯ｿt h盻｣p v盻嬖 vi盻㌘ tay vﾆｰﾆ｡n cao.

```javascript
function spinAndStretchArmsUp(character) {
    const stretchArmsUpAnimation = new THREE.AnimationClip("SpinStretchArmsUp", 2, [
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
    character.animations.push(stretchArmsUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 686: Bﾆｰ盻嫩 Ch蘯ｭm Vﾃ ﾄ脆ｰa Tay Ra Phﾃｭa Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ﾄ訴 ch蘯ｭm rﾃ｣i k蘯ｿt h盻｣p v盻嬖 tay kﾃｩo nh蘯ｹ ra phﾃｭa sau, t蘯｡o s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function stepWithSoftArmPull(character) {
    const softArmPullAnimation = new THREE.AnimationClip("StepSoftArmPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(softArmPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 687: Nh蘯｣y Vﾃ Tung Tay Ra Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ tay m盻・r盻冢g sang hai bﾃｪn bi盻ブ th盻・s盻ｱ phﾃｳng khoﾃ｡ng.

```javascript
function leapAndSpreadHandsWide(character) {
    const spreadHandsWideAnimation = new THREE.AnimationClip("LeapSpreadHandsWide", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadHandsWideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 688: Xoay Nh蘯ｹ Vﾃ K蘯ｿt H盻｣p Vﾆｰﾆ｡n Tay Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay nh蘯ｹ vﾃ k蘯ｿt h盻｣p tay vﾆｰﾆ｡n v盻・phﾃｭa trﾆｰ盻嫩 m盻冲 cﾃ｡ch duyﾃｪn dﾃ｡ng.

```javascript
function gracefulSpinAndReach(character) {
    const gracefulReachAnimation = new THREE.AnimationClip("GracefulSpinReach", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gracefulReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 689: ﾄ雪ｻｩng Uy盻ハ Chuy盻ハ V盻嬖 Tay Ch蘯｡m ﾄ雪ｺ･t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ tay ch蘯｡m nh蘯ｹ xu盻創g ﾄ黛ｺ･t, bi盻ブ th盻・s盻ｱ m盻［ m蘯｡i.

```javascript
function standAndTouchGround(character) {
    const touchGroundAnimation = new THREE.AnimationClip("StandTouchGround", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchGroundAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 690: ﾄ雪ｻ冢g Tﾃ｡c Chﾃo Cu盻訴 V盻嬖 Tay Chﾃｩo**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c d盻ｫng l蘯｡i v盻嬖 tay ﾄ疎n chﾃｩo t蘯｡o dﾃ｡ng chﾃo cu盻訴 ngh盻・thu蘯ｭt.

```javascript
function artisticFinalBow(character) {
    const finalBowAnimation = new THREE.AnimationClip("ArtisticFinalBow", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(finalBowAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c, hﾃ｣y cho tﾃｴi bi蘯ｿt ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ b蘯｡n nhﾃｩ! 茶笨ｨ


Hﾃ｣y ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c khiﾃｪu vﾅｩ ﾄ黛ｺｧy tinh t蘯ｿ ﾄ黛ｻ・lﾃm n盻品 b蘯ｭt nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 691: Xoay Ngﾆｰ盻拱 Vﾃ ﾄ脆ｰa Tay Sang M盻冲 Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay nh蘯ｹ ngﾆｰ盻拱 vﾃ ﾄ柁ｰa tay sang m盻冲 bﾃｪn t蘯｡o dﾃ｡ng m盻［ m蘯｡i.

```javascript
function spinAndExtendArmSide(character) {
    const extendArmSideAnimation = new THREE.AnimationClip("SpinExtendArmSide", 2, [
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
    character.animations.push(extendArmSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 692: Nh蘯｣y Vﾃ Chuy盻ハ ﾄ雪ｻ冢g Tay Theo Vﾃｲng Trﾃｲn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt cao k蘯ｿt h盻｣p v盻嬖 tay di chuy盻ハ theo hﾃｬnh trﾃｲn bi盻ブ th盻・s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function leapAndCircleArmMotion(character) {
    const circleArmMotionAnimation = new THREE.AnimationClip("LeapCircleArmMotion", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(circleArmMotionAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 693: ﾄ雪ｻｩng V盻嬖 Dﾃ｡ng Uy盻ハ Chuy盻ハ Kﾃｩo Tay Ra Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ kﾃｩo tay ra phﾃｭa sau m盻冲 cﾃ｡ch duyﾃｪn dﾃ｡ng.

```javascript
function standAndGracefullyPullArmsBack(character) {
    const gracefullyPullArmsBackAnimation = new THREE.AnimationClip("StandGracefullyPullArmsBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(gracefullyPullArmsBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 694: Xoay Ngﾆｰ盻拱 Vﾃ Nh蘯･c Tay Ch蘯｡m ﾄ雪ｺｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh vﾃ ﾄ柁ｰa tay ch蘯｡m ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ d盻丘 dﾃng.

```javascript
function spinAndTouchHead(character) {
    const touchHeadAnimation = new THREE.AnimationClip("SpinTouchHead", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(touchHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 695: Nh蘯｣y Vﾃ Vﾆｰﾆ｡n Chﾃ｢n M盻［ M蘯｡i**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao k蘯ｿt h盻｣p v盻嬖 chﾃ｢n vﾆｰﾆ｡n nh蘯ｹ sang m盻冲 bﾃｪn, t蘯｡o s盻ｱ thanh l盻議h.

```javascript
function leapAndExtendLeg(character) {
    const extendLegAnimation = new THREE.AnimationClip("LeapExtendLeg", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(extendLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 696: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Dﾃ｡ng Chﾃo Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ柁ｰa lﾃｪn nh蘯ｹ ﾄ黛ｻ・chﾃo, bi盻ブ th盻・s盻ｱ thanh tao.

```javascript
function standAndGentleSalute(character) {
    const gentleSaluteAnimation = new THREE.AnimationClip("StandGentleSalute", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gentleSaluteAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 697: Xoay Vﾃ Vﾆｰﾆ｡n Tay Ra Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 vﾃ tay vﾆｰﾆ｡n r盻冢g ra hai bﾃｪn bi盻ブ th盻・s盻ｱ phﾃｳng khoﾃ｡ng.

```javascript
function spinAndSpreadArms(character) {
    const spreadArmsAnimation = new THREE.AnimationClip("SpinSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 698: Nh蘯｣y Lﾃｪn Vﾃ Vﾆｰﾆ｡n C蘯｣ Ngﾆｰ盻拱 V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y v盻嬖 ngﾆｰ盻拱 vﾆｰﾆ｡n m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩, t蘯｡o s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function leapAndStretchForward(character) {
    const stretchForwardAnimation = new THREE.AnimationClip("LeapStretchForward", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stretchForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 699: ﾄ雪ｻｩng Uy盻ハ Chuy盻ハ V盻嬖 Tay Ch蘯｡m Tim**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ tay nh蘯ｹ nhﾃng ch蘯｡m tim t蘯｡o c蘯｣m giﾃ｡c c蘯｣m kﾃｭch.

```javascript
function standAndTouchHeart(character) {
    const touchHeartAnimation = new THREE.AnimationClip("StandTouchHeart", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchHeartAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 700: Xoay Ngﾆｰ盻拱 Vﾃ K蘯ｿt Thﾃｺc V盻嬖 Tay Chﾃｩo**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ k蘯ｿt thﾃｺc b蘯ｱng tay ﾄ疎n chﾃｩo, bi盻ブ th盻・s盻ｱ hoﾃn h蘯｣o.

```javascript
function finalSpinWithCrossedHands(character) {
    const crossedHandsAnimation = new THREE.AnimationClip("FinalSpinCrossedHands", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(crossedHandsAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm n盻ｯa ho蘯ｷc mu盻創 tﾃｹy ch盻穎h cﾃ｡c chi ti蘯ｿt, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 茶笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ m盻冲 lo蘯｡t cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g vﾃ thao tﾃ｡c dﾃnh cho m盻冲 ngﾆｰ盻拱 thuy蘯ｿt trﾃｬnh ﾄ疎ng gi盻嬖 thi盻㎡, k蘯ｿt h盻｣p cﾃ｡c tr蘯｡ng thﾃ｡i bi盻ブ c蘯｣m nhﾆｰ s盻ｱ t盻ｱ tin, ﾄ疎m mﾃｪ vﾃ s盻ｱ lﾃｴi cu盻創, ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n cﾃｳ thﾃｪm chi盻「 sﾃ｢u trong bi盻ブ ﾄ黛ｺ｡t:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 701: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tay ﾄ脆ｰa Ra Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng, m盻冲 tay ﾄ柁ｰa ra phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng gi盻嬖 thi盻㎡ m盻冲 ﾃｽ tﾆｰ盻殤g quan tr盻肱g.

```javascript
function standAndGestureForwardConfidently(character) {
    const gestureForwardAnimation = new THREE.AnimationClip("GestureForwardConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gestureForwardAnimation);
}
```

**Bi盻ブ c蘯｣m:** Khuﾃｴn m蘯ｷt th盻・hi盻㌻ s盻ｱ nghiﾃｪm tﾃｺc vﾃ t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 702: Nhﾃｬn Quanh Phﾃｲng V盻嬖 Tay M盻・R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nhﾃｬn t盻ｫ trﾃ｡i sang ph蘯｣i, k蘯ｿt h盻｣p v盻嬖 cﾃ｡nh tay m盻・r盻冢g ra, bi盻ブ th盻・s盻ｱ k蘯ｿt n盻訴 v盻嬖 khﾃ｡n gi蘯｣.

```javascript
function scanRoomWithExtendedArms(character) {
    const scanRoomAnimation = new THREE.AnimationClip("ScanRoomWithArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(scanRoomAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt t盻ｱ tin vﾃ m盻冲 n盻･ cﾆｰ盻拱 nh蘯ｹ.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 703: Nﾃ｢ng Tay Cao Vﾃ Nh蘯･n M蘯｡nh ﾃ・Ki蘯ｿn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nﾃ｢ng tay lﾃｪn cao vﾃ h蘯｡ m蘯｡nh xu盻創g nhﾆｰ mu盻創 nh蘯･n m蘯｡nh m盻冲 ﾄ訴盻ノ quan tr盻肱g.

```javascript
function raiseHandAndEmphasize(character) {
    const emphasizeAnimation = new THREE.AnimationClip("RaiseHandEmphasize", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 3, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(emphasizeAnimation);
}
```

**Bi盻ブ c蘯｣m:** Lﾃｴng mﾃy hﾆ｡i nhﾃｭu, th盻・hi盻㌻ s盻ｱ nghiﾃｪm tﾃｺc.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 704: G蘯ｭt ﾄ雪ｺｧu V盻嬖 Tay ﾄ紳n Trﾆｰ盻嫩 Ng盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ nhﾃng khi hai tay ﾄ疎n trﾆｰ盻嫩 ng盻ｱc, bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g tﾃｬnh.

```javascript
function nodWithFoldedArms(character) {
    const foldedArmsAnimation = new THREE.AnimationClip("NodWithFoldedArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 18, 0, 0, -Math.PI / 18, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, -Math.PI / 8, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(foldedArmsAnimation);
}
```

**Bi盻ブ c蘯｣m:** Nﾃｩt m蘯ｷt ﾄ訴盻［ tﾄｩnh vﾃ ﾄ黛ｻ渡g c蘯｣m.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 705: Bﾆｰ盻嫩 Ti蘯ｿn Nh蘯ｹ V盻嬖 Tay Ch盻・Vﾃo Khﾃ｡n Gi蘯｣**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 nh蘯ｹ t盻嬖 trﾆｰ盻嫩 vﾃ ch盻・tay vﾃo khﾃ｡n gi蘯｣, thu hﾃｺt s盻ｱ chﾃｺ ﾃｽ.

```javascript
function stepForwardAndPointToAudience(character) {
    const pointToAudienceAnimation = new THREE.AnimationClip("StepForwardPointToAudience", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointToAudienceAnimation);
}
```

**Bi盻ブ c蘯｣m:** M蘯ｯt m盻・to, bi盻ブ th盻・s盻ｱ nhi盻㏄ tﾃｬnh.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 706: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 Tay M盻・R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c lﾃｹi nh蘯ｹ vﾃ m盻・r盻冢g tay nhﾆｰ mu盻創 lﾃm d盻丘 khﾃｴng khﾃｭ, bi盻ブ th盻・s盻ｱ ﾄ訴盻［ tﾄｩnh.

```javascript
function stepBackAndCalmGesture(character) {
    const calmGestureAnimation = new THREE.AnimationClip("StepBackCalmGesture", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, -Math.PI / 6, 0, 0, Math.PI / 6, 0]
        )
    ]);
    character.animations.push(calmGestureAnimation);
}
```

**Bi盻ブ c蘯｣m:** Khuﾃｴn m蘯ｷt nh蘯ｹ nhﾃng v盻嬖 ﾃ｡nh m蘯ｯt ﾄ訴盻［ tﾄｩnh.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 707: Ch盻・Tay Lﾃｪn Mﾃn Hﾃｬnh V盻嬖 S盻ｱ Nghiﾃｪm Tﾃｺc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch盻・tay lﾃｪn mﾃn hﾃｬnh (ho蘯ｷc khﾃｴng gian phﾃｭa trﾆｰ盻嫩) nhﾆｰ ﾄ疎ng hﾆｰ盻嬾g d蘯ｫn.

```javascript
function pointToScreenConfidently(character) {
    const pointToScreenAnimation = new THREE.AnimationClip("PointToScreenConfidently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pointToScreenAnimation);
}
```

**Bi盻ブ c蘯｣m:** Lﾃｴng mﾃy hﾆ｡i nhﾃｭu, t蘯｡o s盻ｱ t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 708: Dang Tay Vﾃ N盻・N盻･ Cﾆｰ盻拱 Thﾃ｢n Thi盻㌻**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c dang tay r盻冢g vﾃ n盻・n盻･ cﾆｰ盻拱, t蘯｡o s盻ｱ thﾃ｢n thi盻㌻ v盻嬖 khﾃ｡n gi蘯｣.

```javascript
function spreadArmsAndSmile(character) {
    const smileAnimation = new THREE.AnimationClip("SpreadArmsSmile", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(smileAnimation);
}
```

**Bi盻ブ c蘯｣m:** N盻･ cﾆｰ盻拱 r盻冢g rﾃ｣i, m蘯ｯt sﾃ｡ng lﾃｪn s盻ｱ ph蘯･n kh盻殃.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 709: ﾄ脆ｰa Tay Lﾃｪn Cao Bi盻ブ Th盻・T盻ｱ Tin**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nﾃ｢ng tay lﾃｪn cao vﾃ gi盻ｯ trong m盻冲 giﾃ｢y ﾄ黛ｻ・nh蘯･n m蘯｡nh s盻ｱ t盻ｱ tin.

```javascript
function raiseArmConfidently(character) {
    const raiseArmAnimation = new THREE.AnimationClip("RaiseArmConfidently", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseArmAnimation);
}
```

**Bi盻ブ c蘯｣m:** Gﾆｰﾆ｡ng m蘯ｷt ﾄ黛ｺｯc th蘯ｯng vﾃ quy蘯ｿt ﾄ双ﾃ｡n.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 710: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Ch蘯｡m Ng盻ｱc Thﾃ｢n Thi盻㌻**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ch蘯｡m nh蘯ｹ lﾃｪn ng盻ｱc ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ chﾃ｢n thﾃnh.

```javascript
function standAndTouchHeartGently(character) {
    const touchHeartGentlyAnimation = new THREE.AnimationClip("TouchHeartGently", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchHeartGentlyAnimation);
}
```

**Bi盻ブ c蘯｣m:** ﾃ］h m蘯ｯt d盻丘 dﾃng vﾃ chﾃ｢n thﾃnh.

---

N蘯ｿu b蘯｡n mu盻創 m盻・r盻冢g thﾃｪm ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c phﾃｹ h盻｣p hﾆ｡n v盻嬖 b盻訴 c蘯｣nh thuy蘯ｿt trﾃｬnh, hﾃ｣y ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 笨ｨ痔
Tﾃｴi r蘯･t vui khi ti蘯ｿp t盻･c m盻・r盻冢g cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g vﾃ thao tﾃ｡c c盻ｧa m盻冲 ngﾆｰ盻拱 thuy蘯ｿt trﾃｬnh, k蘯ｿt h盻｣p cﾃ｡c tr蘯｡ng thﾃ｡i bi盻ブ c蘯｣m ﾄ疎 d蘯｡ng ﾄ黛ｻ・tﾄハg thﾃｪm s盻ｩc lﾃｴi cu盻創 cho nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 711: Bﾆｰ盻嫩 Lﾃｹi V盻嬖 Tay Kﾃｩo Ra Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 lﾃｹi nh蘯ｹ vﾃ kﾃｩo tay ra sau, bi盻ブ th盻・s盻ｱ nh蘯･n m蘯｡nh vﾃo vi盻㌘ lﾃｹi l蘯｡i ﾄ黛ｻ・ﾄ柁ｰa ﾃｽ ki蘯ｿn quan tr盻肱g.

```javascript
function stepBackWithPullingGesture(character) {
    const pullingGestureAnimation = new THREE.AnimationClip("StepBackPullingGesture", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, -Math.PI / 8, 0, 0, Math.PI / 8, 0]
        )
    ]);
    character.animations.push(pullingGestureAnimation);
}
```

**Bi盻ブ c蘯｣m:** Khuﾃｴn m蘯ｷt nh蘯ｹ nhﾃng v盻嬖 ﾃ｡nh m蘯ｯt t蘯ｭp trung.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 712: ﾄ雪ｻｩng Yﾃｪn Vﾃ Giﾆ｡ Tay Lﾃｪn ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ tay lﾃｪn ﾄ黛ｺｧu nhﾆｰ ﾄ黛ｻ・gi蘯｣i thﾃｭch ﾄ訴盻「 gﾃｬ ﾄ妥ｳ quan tr盻肱g.

```javascript
function standWithRaisedHands(character) {
    const raisedHandsAnimation = new THREE.AnimationClip("StandRaisedHands", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 3, 0, 0, -Math.PI / 3, 0]
        )
    ]);
    character.animations.push(raisedHandsAnimation);
}
```

**Bi盻ブ c蘯｣m:** Bi盻ブ hi盻㌻ ng蘯｡c nhiﾃｪn ho蘯ｷc di盻・ ﾄ黛ｺ｡t nhi盻㏄ tﾃｬnh.

---

### **Chuy盻ハ ﾄ雪ｻ冢g 713: ﾄ脆ｰa Tay Ch蘯｡m Tim V盻嬖 G蘯ｭt Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ柁ｰa tay ch蘯｡m tim vﾃ g蘯ｭt nh蘯ｹ, bi盻ブ th盻・lﾃｲng bi蘯ｿt ﾆ｡n ho蘯ｷc c蘯｣m kﾃｭch.

```javascript
