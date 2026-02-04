    character.animations.push(pointFrontFootAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 487: Ch蘯｡y V盻嬖 Tay Du盻擁 Lﾃｪn Tr盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 c蘯｣ hai tay du盻擁 lﾃｪn tr盻拱 bi盻ブ th盻・ni盻［ vui ho蘯ｷc s盻ｱ t盻ｱ do.

```javascript
function sprintWithArmsHigh(character) {
    const armsHighAnimation = new THREE.AnimationClip("SprintArmsHigh", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(armsHighAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 488: ﾄ雪ｻｩng V盻嬖 Tay Ch蘯｡m Mﾃ｡**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ黛ｺｷt tay lﾃｪn mﾃ｡ nhﾆｰ ﾄ疎ng suy nghﾄｩ ho蘯ｷc ng蘯｡c nhiﾃｪn.

```javascript
function standAndTouchCheek(character) {
    const touchCheekAnimation = new THREE.AnimationClip("TouchCheek", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(touchCheekAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 489: Nh蘯｣y Lﾃｪn V盻嬖 Tay Du盻擁 Th蘯ｳng Ra Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 c蘯｣ hai tay du盻擁 th蘯ｳng v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o s盻ｱ quy蘯ｿt tﾃ｢m.

```javascript
function leapWithStraightForwardArms(character) {
    const straightForwardArmsAnimation = new THREE.AnimationClip("LeapStraightForwardArms", 2, [
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
    character.animations.push(straightForwardArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 490: ﾄ雪ｻｩng V盻嬖 Tay ﾄ紳n Trﾆｰ盻嫩 Ng盻ｱc**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ ﾄ疎n hai tay trﾆｰ盻嫩 ng盻ｱc t蘯｡o phong thﾃ｡i t蘯ｭp trung ho蘯ｷc nghiﾃｪm tﾃｺc.

```javascript
function standAndInterlockArms(character) {
    const interlockArmsAnimation = new THREE.AnimationClip("InterlockArms", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(interlockArmsAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm ﾃｽ tﾆｰ盻殤g m盻嬖 ho蘯ｷc tinh ch盻穎h cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g hi盻㌻ t蘯｡i, tﾃｴi luﾃｴn s蘯ｵn sﾃng h盻・tr盻｣! 噫笨ｨ
Hﾃ｣y cﾃｹng ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 491: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Vﾆｰﾆ｡n Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 c蘯｣ hai tay vﾆｰﾆ｡n lﾃｪn tr盻拱 bi盻ブ th盻・s盻ｱ ph蘯･n khﾃｭch ho蘯ｷc ni盻［ vui.

```javascript
function standAndStretchUpwards(character) {
    const stretchUpwardsAnimation = new THREE.AnimationClip("StretchUpwards", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(stretchUpwardsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 492: Ch蘯｡y V盻嬖 Tay M盻・R盻冢g**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay m盻・r盻冢g sang hai bﾃｪn ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c nﾄハg ﾄ黛ｻ冢g.

```javascript
function sprintWithWideOpenArms(character) {
    const wideOpenArmsAnimation = new THREE.AnimationClip("SprintWideOpenArms", 2, [
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
    character.animations.push(wideOpenArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 493: ﾄ雪ｻｩng V盻嬖 Tay ﾄ紳n Sau ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn v盻嬖 hai tay ﾄ疎n sau ﾄ黛ｺｧu, bi盻ブ th盻・s盻ｱ thﾆｰ giﾃ｣n ho蘯ｷc suy ng蘯ｫm.

```javascript
function standWithHandsBehindHead(character) {
    const handsBehindHeadAnimation = new THREE.AnimationClip("HandsBehindHead", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 4, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(handsBehindHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 494: Nh蘯｣y Lﾃｪn V盻嬖 Tﾆｰ Th蘯ｿ Quay Trﾃｲn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 m盻冲 vﾃｲng trﾃｲn trong khﾃｴng trung t蘯｡o s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function leapWithCircularMotion(character) {
    const circularMotionAnimation = new THREE.AnimationClip("LeapCircularMotion", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 2 * Math.PI, 0, 0]
        )
    ]);
    character.animations.push(circularMotionAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 495: ﾄ雪ｻｩng Yﾃｪn V盻嬖 Tay Giﾆ｡ V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ tay v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng chﾃo ho蘯ｷc d蘯ｫn hﾆｰ盻嬾g.

```javascript
function standAndGestureForward(character) {
    const gestureForwardAnimation = new THREE.AnimationClip("GestureForward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(gestureForwardAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 496: Cﾃｺi Ngﾆｰ盻拱 V盻嬖 Tay ﾄ脆ｰa Sang Bﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 nh蘯ｹ vﾃ ﾄ柁ｰa tay sang m盻冲 bﾃｪn t蘯｡o c蘯｣m giﾃ｡c linh ho蘯｡t vﾃ t蘯ｭp trung.

```javascript
function bendWithSideReach(character) {
    const sideReachAnimation = new THREE.AnimationClip("BendSideReach", 1.8, [
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
    character.animations.push(sideReachAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 497: Ch蘯｡y V盻嬖 Tay Tung Ra Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh v盻嬖 tay vung v盻・phﾃｭa trﾆｰ盻嫩 t蘯｡o c蘯｣m giﾃ｡c quy蘯ｿt tﾃ｢m.

```javascript
function sprintWithForwardSwing(character) {
    const forwardSwingAnimation = new THREE.AnimationClip("SprintForwardSwing", 2, [
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
    character.animations.push(forwardSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 498: ﾄ雪ｻｩng V盻嬖 Tay Ch盻創g Lﾃｪn Eo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng v盻嬖 c蘯｣ hai tay ch盻創g lﾃｪn eo t蘯｡o dﾃ｡ng m蘯｡nh m蘯ｽ vﾃ t盻ｱ tin.

```javascript
function standWithStrongPose(character) {
    const strongPoseAnimation = new THREE.AnimationClip("StrongPoseStand", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(strongPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 499: Nh蘯｣y Cao V盻嬖 Tay Vung Lﾃｪn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao v盻嬖 tay tung m蘯｡nh lﾃｪn tr盻拱 bi盻ブ th盻・ni盻［ vui ho蘯ｷc s盻ｱ chi蘯ｿn th蘯ｯng.

```javascript
function leapWithCelebration(character) {
    const celebrationAnimation = new THREE.AnimationClip("LeapCelebration", 2, [
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
    character.animations.push(celebrationAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 500: ﾄ雪ｻｩng V盻嬖 Tay Ch盻・V盻・Phﾃｭa Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ tay ch盻・v盻・phﾃｭa trﾆｰ盻嫩 nhﾆｰ ﾄ疎ng d蘯ｫn ﾄ柁ｰ盻拵g ho蘯ｷc nh蘯･n m蘯｡nh.

```javascript
function standWithForwardPointing(character) {
    const forwardPointAnimation = new THREE.AnimationClip("ForwardPoint", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(forwardPointAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c ho蘯ｷc c蘯ｧn tﾃｹy ch盻穎h chi ti蘯ｿt hﾆ｡n, c盻ｩ chia s蘯ｻ v盻嬖 tﾃｴi nhﾃｩ! 噫笨ｨ
ﾄ脆ｰ盻｣c thﾃｴi, dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao sﾃ｡ng t蘯｡o ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn s盻創g ﾄ黛ｻ冢g, phﾃｹ h盻｣p v盻嬖 cﾃ｡c ho蘯｡t ﾄ黛ｻ冢g th盻・ch蘯･t vﾃ th盻・thao:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 501: Tﾆｰ Th蘯ｿ Chu蘯ｩn B盻・Ch蘯｡y Nﾆｰ盻嫩 Rﾃｺt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng v盻嬖 m盻冲 chﾃ｢n co, m盻冲 chﾃ｢n du盻擁 vﾃ tay ﾄ黛ｺｷt ra phﾃｭa trﾆｰ盻嫩, chu蘯ｩn b盻・cho vi盻㌘ ch蘯｡y nhanh.

```javascript
function sprintStartPose(character) {
    const startPoseAnimation = new THREE.AnimationClip("SprintStartPose", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(startPoseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 502: Cﾃｺ Swing G蘯ｭy Golf**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c swing g蘯ｭy golf v盻嬖 s盻ｩc m蘯｡nh t盻ｫ vai vﾃ tay, t蘯｡o c蘯｣m giﾃ｡c chﾃｭnh xﾃ｡c vﾃ m蘯｡nh m蘯ｽ.

```javascript
function golfSwing(character) {
    const golfSwingAnimation = new THREE.AnimationClip("GolfSwing", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(golfSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 503: Cﾃｺ ﾄ雪ｺｭp Bﾃｳng Chuy盻］**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g b蘯ｭt nh蘯｣y vﾃ ﾄ黛ｺｭp bﾃｳng chuy盻］ v盻嬖 tay m蘯｡nh m蘯ｽ.

```javascript
function volleyballSpike(character) {
    const spikeAnimation = new THREE.AnimationClip("VolleyballSpike", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(spikeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 504: ﾄ雪ｻ冢g Tﾃ｡c Sﾃｺt Bﾃｳng**
Thﾃｪm m盻冲 cﾃｺ sﾃｺt bﾃｳng m蘯｡nh m蘯ｽ v盻嬖 chﾃ｢n t蘯｡o s盻ｩc b蘯ｭt t盻ｫ cﾆ｡ th盻・

```javascript
function soccerKick(character) {
    const soccerKickAnimation = new THREE.AnimationClip("SoccerKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(soccerKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 505: ﾄ雪ｻ冢g Tﾃ｡c Tung Bﾃｳng R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn vﾃ tung bﾃｳng r盻・v盻嬖 tﾆｰ th蘯ｿ ﾄ黛ｺｧy s盻ｩc m蘯｡nh.

```javascript
function basketballThrow(character) {
    const basketballThrowAnimation = new THREE.AnimationClip("BasketballThrow", 2, [
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
    character.animations.push(basketballThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 506: ﾄ雪ｻ冢g Tﾃ｡c Nﾃｩm Bﾃｳng Chﾃy**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng vﾃ nﾃｩm bﾃｳng chﾃy v盻嬖 tay ra phﾃｭa trﾆｰ盻嫩 m盻冲 cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function baseballPitch(character) {
    const baseballPitchAnimation = new THREE.AnimationClip("BaseballPitch", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(baseballPitchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 507: Cﾃｺ Nh蘯｣y Xa ﾄ進盻］ Kinh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y l蘯･y ﾄ妥 vﾃ b蘯ｭt nh蘯｣y xa t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function longJump(character) {
    const longJumpAnimation = new THREE.AnimationClip("LongJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        )
    ]);
    character.animations.push(longJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 508: Cﾃｺ Phﾃ｡t Bﾃｳng Tennis**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c phﾃ｡t bﾃｳng tennis v盻嬖 tay vung m蘯｡nh lﾃｪn trﾃｪn.

```javascript
function tennisServe(character) {
    const tennisServeAnimation = new THREE.AnimationClip("TennisServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(tennisServeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 509: Cﾃｺ Mﾃｳc Bﾃｳng Boxing**
Thﾃｪm m盻冲 cﾃｺ mﾃｳc bﾃｳng m蘯｡nh trong boxing t蘯｡o s盻ｱ uy l盻ｱc.

```javascript
function boxingHook(character) {
    const boxingHookAnimation = new THREE.AnimationClip("BoxingHook", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(boxingHookAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 510: Nhﾃｺn G盻訴 Chu蘯ｩn B盻・Nﾃ｢ng T蘯｡**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nhﾃｺn g盻訴 vﾃ tay s蘯ｵn sﾃng nﾃ｢ng t蘯｡, th盻・hi盻㌻ s盻ｩc m蘯｡nh.

```javascript
function weightliftingSquat(character) {
    const weightliftingAnimation = new THREE.AnimationClip("WeightliftingSquat", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -0.5, 0, 0, -0.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(weightliftingAnimation);
}
```

---

N蘯ｿu b蘯｡n c蘯ｧn thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao khﾃ｡c ho蘯ｷc tinh ch盻穎h c盻･ th盻・hﾆ｡n, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 遵笨ｨ
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao m蘯｡nh m蘯ｽ ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n n盻品 b蘯ｭt trong cﾃ｡c ho蘯｡t ﾄ黛ｻ冢g th盻・ch蘯･t:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 511: ﾄ雪ｻ冢g Tﾃ｡c ﾄ静｡nh Bﾃｳng ﾄ脆｡n Tennis**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡nh bﾃｳng ﾄ柁｡n v盻嬖 s盻ｩc m蘯｡nh t盻ｫ tay vﾃ cﾆ｡ th盻・ t蘯｡o c蘯｣m giﾃ｡c quy蘯ｿt ﾄ双ﾃ｡n.

```javascript
function tennisForehand(character) {
    const forehandAnimation = new THREE.AnimationClip("TennisForehand", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(forehandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 512: ﾄ雪ｻ冢g Tﾃ｡c ﾄ静｡nh Bﾃｳng ﾄ雪ｺｧu Tennis**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 ﾄ妥｡nh bﾃｳng ﾄ黛ｺｧu v盻嬖 s盻ｩc m蘯｡nh vﾃ chﾃｭnh xﾃ｡c.

```javascript
function tennisBackhand(character) {
    const backhandAnimation = new THREE.AnimationClip("TennisBackhand", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(backhandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 513: ﾄ雪ｻ冢g Tﾃ｡c B蘯ｭt Nh蘯｣y Nﾃｩm R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ nﾃｩm r盻・v盻嬖 tay vung m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function basketballJumpShot(character) {
    const jumpShotAnimation = new THREE.AnimationClip("BasketballJumpShot", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(jumpShotAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 514: ﾄ雪ｻ冢g Tﾃ｡c Nh蘯｣y Cao ﾄ静｡nh ﾄ雪ｺｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ ﾄ妥｡nh ﾄ黛ｺｧu m蘯｡nh trong bﾃｳng ﾄ妥｡.

```javascript
function soccerHeader(character) {
    const headerAnimation = new THREE.AnimationClip("SoccerHeader", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(headerAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 515: ﾄ雪ｻ冢g Tﾃ｡c Chﾃｨo Thuy盻］**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c chﾃｨo thuy盻］ v盻嬖 tay vung m蘯｡nh sang hai bﾃｪn bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g ﾄ黛ｻ「.

```javascript
function rowing(character) {
    const rowingAnimation = new THREE.AnimationClip("Rowing", 2.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(rowingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 516: ﾄ雪ｻ冢g Tﾃ｡c Nﾃｩm ﾄ斉ｩa Bay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 nﾃｩm ﾄ惰ｩa bay v盻嬖 l盻ｱc t盻ｫ cﾆ｡ th盻・vﾃ tay.

```javascript
function frisbeeThrow(character) {
    const frisbeeThrowAnimation = new THREE.AnimationClip("FrisbeeThrow", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(frisbeeThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 517: ﾄ雪ｻ冢g Tﾃ｡c B蘯ｭt Nh蘯｣y Lﾃｪn Rﾃo C蘯｣n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y qua rﾃo c蘯｣n trong ﾄ訴盻］ kinh.

```javascript
function hurdleJump(character) {
    const hurdleJumpAnimation = new THREE.AnimationClip("HurdleJump", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        )
    ]);
    character.animations.push(hurdleJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 518: ﾄ雪ｻ冢g Tﾃ｡c Cﾃｺ ﾄ雪ｺ･m Th蘯ｳng Boxing**
Thﾃｪm m盻冲 cﾃｺ ﾄ黛ｺ･m th蘯ｳng m蘯｡nh m蘯ｽ trong boxing bi盻ブ th盻・uy l盻ｱc.

```javascript
function boxingStraightPunch(character) {
    const straightPunchAnimation = new THREE.AnimationClip("BoxingStraightPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(straightPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 519: ﾄ雪ｻ冢g Tﾃ｡c Nﾃｩm T蘯｡ Trong ﾄ進盻］ Kinh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nﾃｩm t蘯｡ v盻嬖 l盻ｱc t盻ｫ cﾆ｡ th盻・vﾃ tay.

```javascript
function shotPut(character) {
    const shotPutAnimation = new THREE.AnimationClip("ShotPut", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(shotPutAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 520: ﾄ雪ｻ冢g Tﾃ｡c Cﾃｺ ﾄ静｡ Quy盻］ Anh**
Thﾃｪm m盻冲 cﾃｺ ﾄ妥｡ m蘯｡nh m蘯ｽ trong quy盻］ anh v盻嬖 chﾃ｢n t蘯｡o s盻ｱ uy l盻ｱc.

```javascript
function kickboxingKick(character) {
    const kickboxingKickAnimation = new THREE.AnimationClip("KickboxingKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(kickboxingKickAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 khﾃ｡m phﾃ｡ thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao ho蘯ｷc tﾃｹy ch盻穎h chi ti蘯ｿt, hﾃ｣y chia s蘯ｻ ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 暑・鞘坂凾・鞘惠
Hﾃ｣y cﾃｹng ti蘯ｿp t盻･c v盻嬖 nh盻ｯng ﾄ黛ｻ冢g tﾃ｡c th盻・thao ﾄ黛ｺｧy sﾃ｡ng t蘯｡o vﾃ chuyﾃｪn nghi盻㎝ ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn sinh ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 521: Cﾃｺ ﾄ雪ｺ･m Nhanh Liﾃｪn Hoﾃn Boxing**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c liﾃｪn hoﾃn hai cﾃｺ ﾄ黛ｺ･m th蘯ｳng m蘯｡nh m蘯ｽ, t蘯｡o c蘯｣m giﾃ｡c t盻祖 ﾄ黛ｻ・vﾃ uy l盻ｱc.

```javascript
function rapidBoxingJab(character) {
    const rapidJabAnimation = new THREE.AnimationClip("RapidBoxingJab", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1, 1.5, 2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(rapidJabAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 522: Cﾃｺ ﾄ静｡nh Ch蘯ｷn C蘯ｧu Lﾃｴng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y nh蘯ｹ nhﾃng vﾃ ﾄ黛ｺｭp c蘯ｧu phﾃｭa trﾆｰ盻嫩 t蘯｡o s盻ｱ chﾃｭnh xﾃ｡c.

```javascript
function badmintonOverhead(character) {
    const overheadAnimation = new THREE.AnimationClip("BadmintonOverhead", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(overheadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 523: Nhﾃｺn Ngﾆｰ盻拱 Vﾃ ﾄ雪ｺｩy T蘯｡ Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nhﾃｺn g盻訴 vﾃ ﾄ黛ｺｩy t蘯｡ lﾃｪn cao qua ﾄ黛ｺｧu, bi盻ブ th盻・s盻ｩc m蘯｡nh cﾆ｡ b蘯ｯp.

```javascript
function cleanAndPress(character) {
    const cleanPressAnimation = new THREE.AnimationClip("CleanAndPress", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(cleanPressAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 524: ﾄ雪ｻ冢g Tﾃ｡c ﾄ静｡nh V盻｣t Bﾃｳng Bﾃn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡nh bﾃｳng nhanh vﾃ chﾃｭnh xﾃ｡c t盻ｫ bﾃｪn hﾃｴng, bi盻ブ th盻・s盻ｱ linh ho蘯｡t.

```javascript
function pingPongSwing(character) {
    const pingPongAnimation = new THREE.AnimationClip("PingPongSwing", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(pingPongAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 525: B蘯ｭt Nh蘯｣y V盻嬖 Cﾃｺ C蘯ｯt C蘯ｧu C蘯ｧu Lﾃｴng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y nhanh vﾃ c蘯ｯt c蘯ｧu chﾃｩo t盻ｫ bﾃｪn hﾃｴng.

```javascript
function badmintonCrossCut(character) {
    const crossCutAnimation = new THREE.AnimationClip("BadmintonCrossCut", 2, [
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
    character.animations.push(crossCutAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 526: ﾄ雪ｻ冢g Tﾃ｡c Chﾃ｢n Kﾃｩo Co**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch盻創g chﾃ｢n m蘯｡nh vﾃ kﾃｩo lﾃｹi ﾄ黛ｻ・bi盻ブ th盻・s盻ｩc m蘯｡nh cﾆ｡ th盻・

```javascript
function tugOfWarPull(character) {
    const pullAnimation = new THREE.AnimationClip("TugOfWarPull", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 0, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 527: Quay Ngﾆｰ盻拱 Nﾃｩm Bﾃｳng R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c quay ngﾆｰ盻拱 nhanh vﾃ tung bﾃｳng r盻・v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 l盻ｱc l盻嬾.

```javascript
function basketballTurnAndThrow(character) {
    const turnThrowAnimation = new THREE.AnimationClip("BasketballTurnThrow", 2, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(turnThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 528: Cﾃｺ C盻ｩu Bﾃｳng Trong Bﾃｳng Chuy盻］**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ng蘯｣ ngﾆｰ盻拱 xu盻創g th蘯･p vﾃ ﾄ黛ｻ｡ bﾃｳng chuy盻］, bi盻ブ th盻・s盻ｱ linh ho蘯｡t vﾃ nhanh nh蘯ｹn.

```javascript
function volleyballDive(character) {
    const diveAnimation = new THREE.AnimationClip("VolleyballDive", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1.5, 0]
        )
    ]);
    character.animations.push(diveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 529: ﾄ雪ｻ冢g Tﾃ｡c Ch蘯｡y L蘯･y ﾄ静 Cﾃｺ Sﾃｺt Xa**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh l蘯･y ﾄ妥 vﾃ sﾃｺt bﾃｳng xa t蘯｡o s盻ｩc m蘯｡nh t盻ｫ chﾃ｢n.

```javascript
function runAndPowerKick(character) {
    const runKickAnimation = new THREE.AnimationClip("RunPowerKick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(runKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 530: ﾄ雪ｻ冢g Tﾃ｡c Quay Lﾆｰng Nﾃｩm Lao ﾄ進盻］ Kinh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c quay lﾆｰng vﾃ tung lao v盻嬖 l盻ｱc m蘯｡nh m蘯ｽ, bi盻ブ th盻・s盻ｱ t蘯ｭp trung.

```javascript
function javelinThrow(character) {
    const javelinAnimation = new THREE.AnimationClip("JavelinThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(javelinAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｲn mu盻創 thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao khﾃ｡c ho蘯ｷc c蘯ｧn ch盻穎h s盻ｭa chi ti蘯ｿt hﾆ｡n, hﾃ｣y chia s蘯ｻ nhﾃｩ! 醇笨ｨ

Dﾆｰ盻嬖 ﾄ妥｢y lﾃ cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao sﾃ｡ng t蘯｡o hﾆ｡n n盻ｯa ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th盻ｱc s盻ｱ n盻品 b蘯ｭt vﾃ linh ho蘯｡t:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 531: Cﾃｺ Lﾄハ Bﾃｳng Bowling**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi th蘯･p ngﾆｰ盻拱 vﾃ tung bﾃｳng bowling v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 ﾄ黛ｻ・chﾃｭnh xﾃ｡c cao.

```javascript
function bowlingRoll(character) {
    const rollAnimation = new THREE.AnimationClip("BowlingRoll", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(rollAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 532: ﾄ雪ｻ冢g Tﾃ｡c Quay Lﾆｰng T蘯ｭp Xoay Hﾃｴng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng th蘯ｳng vﾃ xoay hﾃｴng ch蘯ｭm sang hai bﾃｪn, phﾃｹ h盻｣p v盻嬖 cﾃ｡c bﾃi t蘯ｭp th盻・d盻･c.

```javascript
function torsoTwist(character) {
    const twistAnimation = new THREE.AnimationClip("TorsoTwist", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, -Math.PI / 8, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(twistAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 533: ﾄ雪ｻ冢g Tﾃ｡c Cﾃｺ Vung Tay ﾄ雪ｺ･m Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｺ･m vﾃｲng cung m蘯｡nh m蘯ｽ v盻嬖 l盻ｱc xoay t盻ｫ cﾆ｡ th盻・

```javascript
function circularPunch(character) {
