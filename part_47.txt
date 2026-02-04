### **Chuy盻ハ ﾄ雪ｻ冢g 623: Xoay Ngﾆｰ盻拱 Vﾃ Nh蘯･c Chﾃ｢n Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn k蘯ｿt h盻｣p v盻嬖 vi盻㌘ nh蘯･c chﾃ｢n cao t蘯｡o s盻ｱ thanh l盻議h.

```javascript
function spinAndHighKick(character) {
    const highKickAnimation = new THREE.AnimationClip("SpinHighKick", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(highKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 624: Nh蘯｣y Vﾃ Tung Tay Hﾃｬnh Cung**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ vung tay theo hﾃｬnh cung, t蘯｡o s盻ｱ m盻［ m蘯｡i.

```javascript
function jumpAndArcArms(character) {
    const arcArmsAnimation = new THREE.AnimationClip("JumpArcArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(arcArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 625: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay ﾄ紳n Trﾆｰ盻嫩 Ng盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ疎n tay trﾆｰ盻嫩 ng盻ｱc t蘯｡o dﾃ｡ng thanh thoﾃ｡t.

```javascript
function standAndCrossHands(character) {
    const crossHandsAnimation = new THREE.AnimationClip("StandCrossHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 626: ﾄ雪ｻｩng Vﾃ Tung Tay Sang M盻冲 Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ tung tay sang m盻冲 bﾃｪn t蘯｡o s盻ｱ nﾄハg ﾄ黛ｻ冢g.

```javascript
function standAndSwingOneHand(character) {
    const swingOneHandAnimation = new THREE.AnimationClip("StandSwingOneHand", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingOneHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 627: Xoay Ngﾆｰ盻拱 Vﾃ Kﾃｩo Tay Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn vﾃ kﾃｩo tay lﾃｪn cao t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function spinAndPullHigh(character) {
    const pullHighAnimation = new THREE.AnimationClip("SpinPullHigh", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(pullHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 628: ﾄ雪ｻｩng Yﾃｪn Vﾃ Nh蘯･c Chﾃ｢n Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 m盻冲 chﾃ｢n nh蘯･c nh蘯ｹ bi盻ブ th盻・s盻ｱ m盻［ m蘯｡i.

```javascript
function standAndLiftLeg(character) {
    const liftLegAnimation = new THREE.AnimationClip("StandLiftLeg", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 629: Nh蘯｣y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Vﾆｰﾆ｡n Tay Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ vﾆｰﾆ｡n c蘯｣ hai tay lﾃｪn tr盻拱 bi盻ブ th盻・s盻ｱ t盻ｱ do.

```javascript
function jumpAndStretchUp(character) {
    const stretchUpAnimation = new THREE.AnimationClip("JumpStretchUp", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 630: ﾄ雪ｻｩng Yﾃｪn Vﾃ T蘯｡o Dﾃ｡ng K蘯ｿt Thﾃｺc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ t蘯｡o dﾃ｡ng k蘯ｿt thﾃｺc uy盻ハ chuy盻ハ, bi盻ブ th盻・s盻ｱ hoﾃn h蘯｣o.

```javascript
function finishingPose(character) {
    const finishingPoseAnimation = new THREE.AnimationClip("FinishingPose", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(finishingPoseAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ ho蘯ｷc thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c m盻嬖, tﾃｴi s蘯ｽ s蘯ｵn sﾃng h盻・tr盻｣ b蘯｡n! 検笨ｨ
Hﾃ｣y cﾃｹng ti蘯ｿp t盻･c v盻嬖 cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c k蘯ｿt h盻｣p khiﾃｪu vﾅｩ th蘯ｭt ﾄ黛ｺｹp m蘯ｯt vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n t盻渋 sﾃ｡ng:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 631: Nh蘯｣y Vﾃ Xoay Ngﾆｰ盻拱 Trong Khﾃｴng Trung**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt cao vﾃ xoay ngﾆｰ盻拱 360 ﾄ黛ｻ・t蘯｡o s盻ｱ uy盻ハ chuy盻ハ vﾃ phong cﾃ｡ch.

```javascript
function aerialFullSpin(character) {
    const fullSpinAnimation = new THREE.AnimationClip("AerialFullSpin", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(fullSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 632: ﾄ雪ｻｩng V盻嬖 Tay ﾄ脆ｰa Ra Trﾆｰ盻嫩 Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa tay nh蘯ｹ nhﾃng ra trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c k蘯ｿt n盻訴.

```javascript
function elegantArmReach(character) {
    const armReachAnimation = new THREE.AnimationClip("ElegantArmReach", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(armReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 633: Xoay Ngﾆｰ盻拱 Vﾃ U盻創 Lﾆｰng K蘯ｿt H盻｣p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ u盻創 lﾆｰng t蘯｡o s盻ｱ m盻［ m蘯｡i.

```javascript
function twistAndBend(character) {
    const twistBendAnimation = new THREE.AnimationClip("TwistAndBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, -Math.PI / 12, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(twistBendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 634: Nh蘯｣y V盻嬖 Tay Tung Hﾃｬnh Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y nh蘯ｹ vﾃ xoay tay theo hﾃｬnh vﾃｲng bi盻ブ th盻・s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function leapAndCircleHands(character) {
    const circleHandsAnimation = new THREE.AnimationClip("LeapCircleHands", 2, [
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
    character.animations.push(circleHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 635: ﾄ雪ｻｩng Yﾃｪn Vﾃ Nh蘯･c Chﾃ｢n K蘯ｿt H盻｣p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ nh蘯･c chﾃ｢n nh蘯ｹ t蘯｡o s盻ｱ duyﾃｪn dﾃ｡ng.

```javascript
function standAndLiftLegElegantly(character) {
    const liftLegAnimation = new THREE.AnimationClip("StandLiftLegElegantly", 1.5, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 636: Xoay Ngﾆｰ盻拱 Vﾃ Tung Chﾃ｢n K蘯ｿt H盻｣p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ k蘯ｿt h盻｣p tung chﾃ｢n t蘯｡o dﾃ｡ng uy盻ハ chuy盻ハ.

```javascript
function spinAndSwingLeg(character) {
    const swingLegAnimation = new THREE.AnimationClip("SpinSwingLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(swingLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 637: ﾄ雪ｻ冢g Tﾃ｡c Xoay Tay Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay tay nh蘯ｹ nhﾃng theo hﾃｬnh cung k蘯ｿt h盻｣p v盻嬖 bﾆｰ盻嫩 chﾃ｢n.

```javascript
function gracefulHandSwirl(character) {
    const handSwirlAnimation = new THREE.AnimationClip("GracefulHandSwirl", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(handSwirlAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 638: Bﾆｰ盻嫩 Nh蘯ｹ Vﾃ Vﾆｰﾆ｡n Tay Ra Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 nh蘯ｹ nhﾃng vﾃ vﾆｰﾆ｡n tay ra phﾃｭa trﾆｰ盻嫩 t蘯｡o s盻ｱ duyﾃｪn dﾃ｡ng.

```javascript
function stepAndGracefullyReach(character) {
    const gracefullyReachAnimation = new THREE.AnimationClip("StepGracefullyReach", 2, [
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
    character.animations.push(gracefullyReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 639: Nh蘯｣y Lﾃｪn Vﾃ ﾄ脆ｰa Tay Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ ﾄ柁ｰa tay sang hai bﾃｪn bi盻ブ th盻・s盻ｱ t盻ｱ do.

```javascript
function leapAndSpreadHands(character) {
    const spreadHandsAnimation = new THREE.AnimationClip("LeapSpreadHands", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(spreadHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 640: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Dﾃ｡ng M盻・Tay Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ m盻・tay uy盻ハ chuy盻ハ bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn.

```javascript
function standAndElegantlyOpenHands(character) {
    const openHandsAnimation = new THREE.AnimationClip("StandElegantlyOpenHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openHandsAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｣ cﾃｳ, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 茶笨ｨ
Hﾃ｣y cﾃｹng nhau b盻・sung thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c m盻嬖 l蘯｡ vﾃ 蘯･n tﾆｰ盻｣ng trong khiﾃｪu vﾅｩ ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn cu盻創 hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 641: Nh蘯｣y V盻嬖 Cﾃｺ Xoay Hai Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ xoay ngﾆｰ盻拱 hai vﾃｲng liﾃｪn ti蘯ｿp trong khﾃｴng trung, t蘯｡o s盻ｱ n盻品 b蘯ｭt.

```javascript
function doubleAerialSpin(character) {
    const doubleSpinAnimation = new THREE.AnimationClip("DoubleAerialSpin", 3, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.5, 3],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.5, 3],
            [0, 0, 0, 4 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(doubleSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 642: ﾄ雪ｻｩng Uy盻ハ Chuy盻ハ V盻嬖 M盻冲 Tay Ch盻・Sang Bﾃｪn**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng yﾃｪn v盻嬖 tay nh蘯ｹ nhﾃng ch盻・v盻・m盻冲 bﾃｪn, bi盻ブ th盻・s盻ｱ quy蘯ｿn rﾅｩ.

```javascript
function standAndPointSideElegantly(character) {
    const pointSideAnimation = new THREE.AnimationClip("PointSideElegantly", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(pointSideAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 643: Xoay Ngﾆｰ盻拱 V盻嬖 Tay Tung Hﾃｬnh C蘯ｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 trﾃｲn v盻嬖 tay tung ra t蘯｡o hﾃｬnh c蘯ｧu m盻［ m蘯｡i.

```javascript
function spinAndArcArms(character) {
    const arcArmsAnimation = new THREE.AnimationClip("SpinArcArms", 2.5, [
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
    character.animations.push(arcArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 644: Bﾆｰ盻嫩 ﾄ静ｴi Vﾃ Kﾃｩo Tay Lﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ﾄ妥ｴi nh蘯ｹ nhﾃng vﾃ kﾃｩo tay lﾃｪn cao, th盻・hi盻㌻ s盻ｱ duyﾃｪn dﾃ｡ng.

```javascript
function doubleStepAndLiftArm(character) {
    const liftArmAnimation = new THREE.AnimationClip("DoubleStepLiftArm", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 1, 0, 0, 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftArmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 645: Nh蘯｣y Lﾃｪn Vﾃ Kﾃｩo Chﾃ｢n Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ gi盻ｯ chﾃ｢n sau, t蘯｡o dﾃ｡ng ngh盻・thu蘯ｭt.

```javascript
function leapAndPullLegBack(character) {
    const pullLegBackAnimation = new THREE.AnimationClip("LeapPullLegBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullLegBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 646: Xoay Ngﾆｰ盻拱 Vﾃ H蘯･t Tay Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh vﾃ h蘯･t tay lﾃｪn cao, t蘯｡o s盻ｱ n盻品 b蘯ｭt.

```javascript
function spinAndFlickArms(character) {
    const flickArmsAnimation = new THREE.AnimationClip("SpinFlickArms", 2, [
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
    character.animations.push(flickArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 647: Bﾆｰ盻嫩 Ch蘯ｭm Vﾃ M盻・Tay Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ch蘯ｭm k蘯ｿt h盻｣p v盻嬖 tay m盻・r盻冢g ra hai bﾃｪn, t蘯｡o s盻ｱ thanh thoﾃ｡t.

```javascript
function slowStepAndOpenArms(character) {
    const openArmsAnimation = new THREE.AnimationClip("SlowStepOpenArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
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

---

### **Chuy盻ハ ﾄ雪ｻ冢g 648: ﾄ雪ｻｩng Yﾃｪn Vﾃ Tung Tay Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay tung nh蘯ｹ sang hai bﾃｪn, th盻・hi盻㌻ s盻ｱ thanh thoﾃ｡t.

```javascript
function standAndSoftlySwingArms(character) {
    const softlySwingArmsAnimation = new THREE.AnimationClip("StandSoftlySwingArms", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(softlySwingArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 649: Nh蘯｣y V盻嬖 Tay Chﾃｩo Hﾃｬnh Cﾃ｡nh Qu蘯｡t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ ﾄ柁ｰa tay chﾃｩo nhau t蘯｡o hﾃｬnh nhﾆｰ cﾃ｡nh qu蘯｡t.

```javascript
function leapAndCrossArms(character) {
    const crossArmsAnimation = new THREE.AnimationClip("LeapCrossArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 4, 0, 0, -Math.PI / 4, 0]
        )
    ]);
    character.animations.push(crossArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 650: ﾄ雪ｻｩng Yﾃｪn Vﾃ Vﾆｰﾆ｡n Ngﾆｰ盻拱 Uy盻ハ Chuy盻ハ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ vﾆｰﾆ｡n ngﾆｰ盻拱 m盻［ m蘯｡i, t蘯｡o c蘯｣m giﾃ｡c thanh l盻議h.

```javascript
function standAndGracefullyStretch(character) {
    const gracefullyStretchAnimation = new THREE.AnimationClip("StandGracefullyStretch", 1.8, [
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
    character.animations.push(gracefullyStretchAnimation);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c ho蘯ｷc tﾃｹy ch盻穎h thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c nﾃy nhﾃｩ! 笨ｨ茶
Tﾃｴi r蘯･t vui ﾄ柁ｰ盻｣c ti蘯ｿp t盻･c v盻嬖 thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c k蘯ｿt h盻｣p trong khiﾃｪu vﾅｩ ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn s盻創g ﾄ黛ｻ冢g vﾃ thu hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 651: Nh蘯｣y Vﾃ Tung Tay Nh蘯ｹ Trﾆｰ盻嫩 Ng盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y nh蘯ｹ vﾃ ﾄ柁ｰa tay chﾃｩo nhau trﾆｰ盻嫩 ng盻ｱc, bi盻ブ th盻・s盻ｱ d盻丘 dﾃng.

```javascript
function leapAndCrossHandsFront(character) {
    const crossHandsFrontAnimation = new THREE.AnimationClip("LeapCrossHandsFront", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 4, 0, 0, -Math.PI / 4, 0]
        )
    ]);
    character.animations.push(crossHandsFrontAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 652: ﾄ雪ｻｩng Vﾃ T蘯｡o Dﾃ｡ng M盻・Tay Nh蘯ｹ Nhﾃng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ m盻・hai tay sang hai bﾃｪn bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn m盻［ m蘯｡i.

```javascript
function standAndOpenHandsGently(character) {
    const openHandsGentlyAnimation = new THREE.AnimationClip("StandOpenHandsGently", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(openHandsGentlyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 653: Xoay Ngﾆｰ盻拱 Vﾃ Nh蘯･c Chﾃ｢n V盻・Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 ch蘯ｭm rﾃ｣i vﾃ nh蘯･c chﾃ｢n sau t蘯｡o dﾃ｡ng ngh盻・thu蘯ｭt.

```javascript
function spinAndLiftBackLeg(character) {
    const liftBackLegAnimation = new THREE.AnimationClip("SpinLiftBackLeg", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(liftBackLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 654: Nh蘯｣y Vﾃ ﾄ脆ｰa Tay Ch蘯｡m ﾄ雪ｺｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y nh蘯ｹ nhﾃng vﾃ k蘯ｿt h盻｣p v盻嬖 tay ch蘯｡m ﾄ黛ｺｧu, t蘯｡o dﾃ｡ng thanh thoﾃ｡t.

```javascript
function leapAndTouchHead(character) {
    const touchHeadAnimation = new THREE.AnimationClip("LeapTouchHead", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
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

### **Chuy盻ハ ﾄ雪ｻ冢g 655: ﾄ雪ｻ冢g Tﾃ｡c Bﾆｰ盻嫩 Vﾃ Kﾃｩo Tay Nh蘯ｹ Ra Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 ch蘯ｭm vﾃ kﾃｩo tay nh蘯ｹ nhﾃng ra phﾃｭa sau bi盻ブ th盻・s盻ｱ thanh l盻議h.

```javascript
function stepAndPullBackArm(character) {
    const pullBackArmAnimation = new THREE.AnimationClip("StepPullBackArm", 2, [
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
    character.animations.push(pullBackArmAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 656: Xoay Ngﾆｰ盻拱 Vﾃ Tung Tay Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nhanh v盻嬖 tay ﾄ柁ｰa lﾃｪn cao, t蘯｡o dﾃ｡ng tﾆｰﾆ｡i tr蘯ｻ.

```javascript
function spinAndRaiseArmHigh(character) {
    const raiseArmHighAnimation = new THREE.AnimationClip("SpinRaiseArmHigh", 2, [
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
    character.animations.push(raiseArmHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 657: Nh蘯｣y Vﾃ Vﾆｰﾆ｡n Ngﾆｰ盻拱 V盻・Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ k蘯ｿt h盻｣p v盻嬖 ngﾆｰ盻拱 vﾆｰﾆ｡n v盻・phﾃｭa trﾆｰ盻嫩, bi盻ブ th盻・s盻ｱ ﾄ疎m mﾃｪ.

```javascript
function leapAndReachForwardBody(character) {
    const reachForwardBodyAnimation = new THREE.AnimationClip("LeapReachForwardBody", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardBodyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 658: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay ﾄ紳n Nh蘯ｹ Sau Lﾆｰng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ疎n tay sau lﾆｰng t蘯｡o dﾃ｡ng thﾆｰ thﾃ｡i.

```javascript
function standAndInterlaceHands(character) {
    const interlaceHandsAnimation = new THREE.AnimationClip("StandInterlaceHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 12, 0, 0, Math.PI / 12, 0]
        )
    ]);
    character.animations.push(interlaceHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 659: Nh蘯｣y Vﾃ ﾄ脆ｰa Chﾃ｢n Th蘯ｳng Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ ﾄ柁ｰa chﾃ｢n th蘯ｳng lﾃｪn cao, t蘯｡o dﾃ｡ng m蘯｡nh m蘯ｽ.

```javascript
function leapAndStraightKick(character) {
    const straightKickAnimation = new THREE.AnimationClip("LeapStraightKick", 2.5, [
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
    character.animations.push(straightKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 660: T蘯｡o Dﾃ｡ng K蘯ｿt H盻｣p Xoay Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c d盻ｫng l蘯｡i v盻嬖 dﾃ｡ng xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng, bi盻ブ th盻・s盻ｱ hoﾃn m盻ｹ.

```javascript
function finishingSpinPose(character) {
    const spinPoseAnimation = new THREE.AnimationClip("FinishingSpinPose", 2, [
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
    character.animations.push(spinPoseAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm ﾄ黛ｻ冢g tﾃ｡c m盻嬖 ho蘯ｷc tinh ch盻穎h chi ti蘯ｿt, tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣! 笨ｨ茶
Chﾃｺng ta hﾃ｣y ti蘯ｿp t盻･c sﾃ｡ng t蘯｡o thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c khiﾃｪu vﾅｩ ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm phong cﾃ｡ch vﾃ cu盻創 hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 661: B蘯ｭt Cao Vﾃ ﾄ脆ｰa Tay U盻創 Lﾆｰ盻｣n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao v盻嬖 cﾃ｡nh tay u盻創 lﾆｰ盻｣n nh蘯ｹ nhﾃng t蘯｡o c蘯｣m giﾃ｡c m盻［ m蘯｡i.

```javascript
function leapWithFlowingArms(character) {
    const flowingArmsAnimation = new THREE.AnimationClip("LeapFlowingArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(flowingArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 662: ﾄ雪ｻｩng Vﾃ Vﾆｰﾆ｡n Tay V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ vﾆｰﾆ｡n tay nh蘯ｹ nhﾃng v盻・phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・t蘯｡o s盻ｱ k蘯ｿt n盻訴 vﾃ thanh l盻議h.

```javascript
function standAndReachForwardElegantly(character) {
    const reachForwardAnimation = new THREE.AnimationClip("StandReachForwardElegantly", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(reachForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 663: Xoay Ngﾆｰ盻拱 Vﾃ Tung Tay Nh蘯ｹ Sang Hai Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ k蘯ｿt h盻｣p v盻嬖 tay vung sang hai bﾃｪn, bi盻ブ th盻・s盻ｱ t盻ｱ do.

```javascript
function spinAndSweepArms(character) {
    const sweepArmsAnimation = new THREE.AnimationClip("SpinSweepArms", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(sweepArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 664: Nh蘯｣y Lﾃｪn Vﾃ Vﾆｰﾆ｡n Tay Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn m蘯｡nh m蘯ｽ vﾃ vﾆｰﾆ｡n c蘯｣ hai tay cao qua ﾄ黛ｺｧu, bi盻ブ th盻・s盻ｱ t盻ｱ tin.

```javascript
function leapAndStretchHandsUp(character) {
    const stretchHandsUpAnimation = new THREE.AnimationClip("LeapStretchHandsUp", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchHandsUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 665: ﾄ雪ｻｩng Uy盻ハ Chuy盻ハ V盻嬖 Tay ﾄ紳n Nh蘯ｹ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn v盻嬖 tay ﾄ疎n nh蘯ｹ trﾆｰ盻嫩 ng盻ｱc, t蘯｡o s盻ｱ duyﾃｪn dﾃ｡ng.

```javascript
function standGracefullyWithCrossedHands(character) {
    const crossedHandsAnimation = new THREE.AnimationClip("StandCrossedHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossedHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 666: Xoay Ngﾆｰ盻拱 Vﾃ Kﾃｩo Tay Ra Sau**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nh蘯ｹ nhﾃng vﾃ kﾃｩo tay ra phﾃｭa sau t蘯｡o s盻ｱ m盻［ m蘯｡i.

```javascript
function spinAndPullArmsBack(character) {
    const pullArmsBackAnimation = new THREE.AnimationClip("SpinPullArmsBack", 2.2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullArmsBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 667: Nh蘯｣y Vﾃ Tung Tay M盻・R盻冢g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ m盻・r盻冢g tay ra hai bﾃｪn bi盻ブ th盻・s盻ｱ chﾃo ﾄ妥ｳn.

```javascript
function leapAndWideSpreadArms(character) {
    const wideSpreadArmsAnimation = new THREE.AnimationClip("LeapWideSpreadArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(wideSpreadArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 668: Bﾆｰ盻嫩 Vﾃ Nh蘯･c Chﾃ｢n Tho蘯｣i Mﾃ｡i**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 nh蘯ｹ vﾃ nh蘯･c m盻冲 chﾃ｢n lﾃｪn cao m盻冲 cﾃ｡ch t盻ｱ nhiﾃｪn.

```javascript
function stepAndLiftLegNaturally(character) {
    const liftLegAnimation = new THREE.AnimationClip("StepLiftLegNaturally", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
