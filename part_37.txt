function liftBothArmsHigh(character) {
    const liftArmsAnimation = new THREE.AnimationClip("LiftBothArmsHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(liftArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 179: Quay Ngﾆｰ盻拱 R盻妬 ﾄ雪ｺｷt Tay Lﾃｪn Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay nh蘯ｹ ngﾆｰ盻拱 sau ﾄ妥ｳ ﾄ黛ｺｷt tay lﾃｪn lﾆｰng, t蘯｡o c蘯｣m giﾃ｡c tho蘯｣i mﾃ｡i.

```javascript
function turnAndTouchBack(character) {
    const touchBackAnimation = new THREE.AnimationClip("TurnTouchBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(touchBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 180: Ch蘯｡y Vﾃ Phanh ﾄ雪ｻ冲 Ng盻冲**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ phanh l蘯｡i ﾄ黛ｻ冲 ng盻冲 ﾄ黛ｻ・chuy盻ハ hﾆｰ盻嬾g ho蘯ｷc trﾃ｡nh va ch蘯｡m.

```javascript
function sprintAndBrake(character) {
    const brakeAnimation = new THREE.AnimationClip("SprintBrake", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 3.2, 0]
        ),
        new THREE.KeyframeTrack(
            'character.legs.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(brakeAnimation);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o khﾃ｡c ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c hi盻㌻ cﾃｳ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c hﾃnh trﾃｬnh sﾃ｡ng t蘯｡o v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g tinh t蘯ｿ vﾃ ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・mang ﾄ黛ｺｿn s盻ｱ s盻創g ﾄ黛ｻ冢g vﾃ h蘯･p d蘯ｫn hﾆ｡n cho nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 181: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Ch盻･p L蘯･y V蘯ｭt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi xu盻創g nhanh vﾃ ch盻･p l蘯･y v蘯ｭt th盻・t盻ｫ dﾆｰ盻嬖 ﾄ黛ｺ･t m盻冲 cﾃ｡ch linh ho蘯｡t.

```javascript
function crouchAndGrabObject(character) {
    const crouchGrabAnimation = new THREE.AnimationClip("CrouchGrabObject", 1.6, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.8, 1.6],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.8, 1.6],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(crouchGrabAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 182: Ch蘯｡y Vﾃ V盻・Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ v盻・tay trong khi di chuy盻ハ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ hﾃo h盻ｩng.

```javascript
function runAndClap(character) {
    const runClapAnimation = new THREE.AnimationClip("RunClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
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
    character.animations.push(runClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 183: Nh蘯｣y Vﾃ Giﾆ｡ Tay Ch盻・Lﾃｪn Tr盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ ch盻・tay lﾃｪn tr盻拱 ﾄ黛ｻ・t蘯｡o ﾄ訴盻ノ nh蘯･n m蘯｡nh m蘯ｽ.

```javascript
function leapAndPointUp(character) {
    const leapPointAnimation = new THREE.AnimationClip("LeapPointUp", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapPointAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 184: Bﾆｰ盻嫩 Ch蘯ｭm Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 ch蘯ｭm rﾃ｣i vﾃ k蘯ｿt h盻｣p g蘯ｭt ﾄ黛ｺｧu nh蘯ｹ ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ ﾄ黛ｻ渡g thu蘯ｭn.

```javascript
function slowWalkAndNod(character) {
    const slowWalkNodAnimation = new THREE.AnimationClip("SlowWalkNod", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 0.7, 0, 0, 1.4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(slowWalkNodAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 185: Quay Tay Vﾃ Tung M盻冲 ﾄ静ｲn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay cﾃ｡nh tay vﾃ tung m盻冲 cﾃｺ ﾄ黛ｺ･m m蘯｡nh m蘯ｽ.

```javascript
function spinArmAndPunch(character) {
    const spinPunchAnimation = new THREE.AnimationClip("SpinArmPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 186: ﾄ雪ｻｩng Th蘯ｳng Vﾃ G蘯ｭt ﾄ雪ｺｧu Khen Ng盻｣i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ g蘯ｭt ﾄ黛ｺｧu bi盻ブ th盻・s盻ｱ khen ng盻｣i ho蘯ｷc ﾄ黛ｻ渡g thu蘯ｭn.

```javascript
function standAndNodInApproval(character) {
    const nodApprovalAnimation = new THREE.AnimationClip("StandNodApproval", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(nodApprovalAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 187: ﾄ静｡ Ngang Vﾃ Quay Ngﾆｰ盻拱**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung cﾃｺ ﾄ妥｡ ngang vﾃ k蘯ｿt thﾃｺc b蘯ｱng ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱.

```javascript
function sideKickAndSpin(character) {
    const sideKickSpinAnimation = new THREE.AnimationClip("SideKickSpin", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(sideKickSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 188: ﾄ雪ｻｩng Vﾃ V盻・Vﾃo Vai**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ v盻・nh蘯ｹ vﾃo vai nhﾆｰ ﾄ疎ng t盻ｱ khﾃｭch l盻・b蘯｣n thﾃ｢n.

```javascript
function standAndPatShoulder(character) {
    const patShoulderAnimation = new THREE.AnimationClip("PatShoulder", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0.5, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(patShoulderAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 189: Tung V蘯ｭt Th盻・Vﾃ ﾄ静ｳn B蘯ｱng Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung m盻冲 v蘯ｭt th盻・lﾃｪn cao vﾃ ch盻･p l蘯｡i m盻冲 cﾃ｡ch ﾄ訴ﾃｪu luy盻㌻.

```javascript
function tossAndCatch(character) {
    const tossCatchAnimation = new THREE.AnimationClip("TossCatch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(tossCatchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 190: ﾄ雪ｻｩng Th蘯ｳng V盻嬖 Tﾆｰ Th蘯ｿ Lﾃ｣nh ﾄ雪ｺ｡o**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ黛ｺｷt tay phﾃｭa trﾆｰ盻嫩 theo phong cﾃ｡ch lﾃ｣nh ﾄ黛ｺ｡o.

```javascript
function standWithLeadershipPose(character) {
    const leadershipPoseAnimation = new THREE.AnimationClip("LeadershipPose", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(leadershipPoseAnimation);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c m盻・r盻冢g ho蘯ｷc cﾃ｡ nhﾃ｢n hﾃｳa thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c khﾃ｡c nhﾃｩ! 噫笨ｨ

Tﾃｴi ﾄ妥｣ s蘯ｵn sﾃng sﾃ｡ng t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｷc s蘯ｯc ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn ﾄ黛ｻ冂 ﾄ妥｡o hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 191: G蘯ｭp Ngﾆｰ盻拱 Vﾃ Th蘯｣ Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi th蘯･p ngﾆｰ盻拱 xu盻創g vﾃ buﾃｴng tay ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ thﾆｰ giﾃ｣n ho蘯ｷc ﾄ黛ｺｧu hﾃng.

```javascript
function bendAndRelaxArms(character) {
    const bendRelaxAnimation = new THREE.AnimationClip("BendRelaxArms", 1.8, [
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
    character.animations.push(bendRelaxAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 192: Ch蘯｡y V盻嬖 Tay V蘯ｫy Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ v蘯ｫy tay nh蘯ｹ sang hai bﾃｪn ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c nﾄハg ﾄ黛ｻ冢g.

```javascript
function sprintWithWavingHands(character) {
    const sprintWaveAnimation = new THREE.AnimationClip("SprintWaveHands", 2, [
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
    character.animations.push(sprintWaveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 193: ﾄ雪ｻｩng V盻嬖 Tay Xoay Nh蘯ｹ**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ xoay nh蘯ｹ bﾃn tay ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ suy nghﾄｩ ho蘯ｷc ph蘯｣n 盻ｩng nh蘯ｹ nhﾃng.

```javascript
function standAndRotateHands(character) {
    const rotateHandsAnimation = new THREE.AnimationClip("StandRotateHands", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightHand.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 8, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftHand.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(rotateHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 194: Nh蘯｣y Cao V盻嬖 Tay Vﾆｰﾆ｡n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ vﾆｰﾆ｡n tay lﾃｪn tr盻拱, t蘯｡o c蘯｣m giﾃ｡c hﾃo h盻ｩng vﾃ trﾃn ﾄ黛ｺｧy nﾄハg lﾆｰ盻｣ng.

```javascript
function leapAndStretchUp(character) {
    const leapStretchAnimation = new THREE.AnimationClip("LeapStretchUp", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(leapStretchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 195: Bﾆｰ盻嫩 Lﾃｹi V盻嬖 Tay ﾄ雪ｺｷt Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 lﾃｹi nh蘯ｹ nhﾃng kﾃｨm theo tay ﾄ黛ｺｷt lﾃｪn trﾆｰ盻嫩 ng盻ｱc nhﾆｰ ﾄ疎ng suy nghﾄｩ.

```javascript
function stepBackAndHoldChest(character) {
    const stepBackChestAnimation = new THREE.AnimationClip("StepBackHoldChest", 1.8, [
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
    character.animations.push(stepBackChestAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 196: Ch蘯｡y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Kﾃｩo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p tay kﾃｩo m蘯｡nh v盻・phﾃｭa sau, t蘯｡o c蘯｣m giﾃ｡c d盻ｩt khoﾃ｡t.

```javascript
function sprintWithPullBack(character) {
    const sprintPullAnimation = new THREE.AnimationClip("SprintPullBack", 2.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.1, 2.2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.1, 2.2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(sprintPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 197: ﾄ雪ｻｩng V盻嬖 Tay Giﾆ｡ Cao Vﾃ Du盻擁 Th蘯ｳng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ giﾆ｡ tay lﾃｪn du盻擁 th蘯ｳng ra phﾃｭa trﾆｰ盻嫩, bi盻ブ th盻・s盻ｱ t蘯ｭp trung.

```javascript
function standAndStretchForward(character) {
    const stretchForwardAnimation = new THREE.AnimationClip("StretchForwardStand", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 198: Nh蘯｣y V盻嬖 Tay Giﾆ｡ Cao K蘯ｿt H盻｣p Vung Chﾃ｢n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao, giﾆ｡ tay vﾃ vung chﾃ｢n t蘯｡o c蘯｣m giﾃ｡c nﾄハg ﾄ黛ｻ冢g.

```javascript
function jumpWithSwingLeg(character) {
    const jumpSwingLegAnimation = new THREE.AnimationClip("JumpSwingLeg", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpSwingLegAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 199: L蘯ｯc ﾄ雪ｺｧu Vﾃ ﾄ雪ｻｩng V盻ｯng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g l蘯ｯc ﾄ黛ｺｧu nh蘯ｹ k蘯ｿt h盻｣p v盻嬖 tﾆｰ th蘯ｿ ﾄ黛ｻｩng v盻ｯng vﾃng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ ch蘯ｯc ch蘯ｯn.

```javascript
function shakeHeadAndStandSolid(character) {
    const shakeHeadSolidAnimation = new THREE.AnimationClip("ShakeHeadStandSolid", 1.5, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(shakeHeadSolidAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 200: Ch蘯｡y Vﾃ Nhﾃｺn Vai Tho蘯｣i Mﾃ｡i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ nhﾃｺn vai nh蘯ｹ nhﾃng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ thﾆｰ giﾃ｣n.

```javascript
function sprintWithCasualShrug(character) {
    const sprintShrugAnimation = new THREE.AnimationClip("SprintCasualShrug", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(sprintShrugAnimation);
}
```

---

Hﾃ｣y cho tﾃｴi bi蘯ｿt n蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ho蘯ｷc c蘯｣i ti蘯ｿn thﾃｪm phong cﾃ｡ch ﾄ黛ｻ冂 ﾄ妥｡o khﾃ｡c nhﾃｩ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn s盻創g ﾄ黛ｻ冢g vﾃ 蘯･n tﾆｰ盻｣ng hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 201: Nh蘯｣y Vﾃ Xoay Tay Nhi盻「 Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao k蘯ｿt h盻｣p xoay tay nhi盻「 vﾃｲng t蘯｡o phong cﾃ｡ch m蘯｡nh m蘯ｽ vﾃ sinh ﾄ黛ｻ冢g.

```javascript
function leapWithSpinningArms(character) {
    const leapSpinAnimation = new THREE.AnimationClip("LeapSpinningArms", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(leapSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 202: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Quay ﾄ雪ｺｧu L蘯ｷng L蘯ｽ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ quay ﾄ黛ｺｧu nh蘯ｹ nhﾃng th盻・hi盻㌻ s盻ｱ suy tﾆｰ ho蘯ｷc quan sﾃ｡t.

```javascript
function standAndLookAround(character) {
    const lookAroundAnimation = new THREE.AnimationClip("StandLookAround", 1.8, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(lookAroundAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 203: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung Cﾃｺ ﾄ雪ｺ｡p**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 sau ﾄ妥ｳ tung m盻冲 cﾃｺ ﾄ黛ｺ｡p m蘯｡nh, t蘯｡o c蘯｣m giﾃ｡c m蘯｡nh m蘯ｽ.

```javascript
function crouchAndKick(character) {
    const crouchKickAnimation = new THREE.AnimationClip("CrouchKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(crouchKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 204: ﾄ雪ｻｩng V盻嬖 Tay V蘯ｯt Sau Lﾆｰng**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng th蘯ｳng v盻嬖 hai tay v蘯ｯt ra sau lﾆｰng t蘯｡o c蘯｣m giﾃ｡c bﾃｬnh th蘯｣n.

```javascript
function standWithHandsBehindBack(character) {
    const handsBehindAnimation = new THREE.AnimationClip("HandsBehindBack", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 205: Ch蘯｡y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Nﾃ｢ng Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ nﾃ｢ng tay lﾃｪn phﾃｭa trﾆｰ盻嫩 t蘯｡o phong cﾃ｡ch ph蘯･n khﾃｭch.

```javascript
function sprintWithRaisedArms(character) {
    const sprintRaiseAnimation = new THREE.AnimationClip("SprintRaisedArms", 2.2, [
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
    character.animations.push(sprintRaiseAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 206: Nhﾃｺn Vai Vﾃ G蘯ｭp Ngﾆｰ盻拱 Nh蘯ｹ**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nhﾃｺn vai k蘯ｿt h盻｣p v盻嬖 cﾃｺi g蘯ｭp nh蘯ｹ nhﾃng ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c t盻ｱ nhiﾃｪn.

```javascript
function shrugAndBend(character) {
    const shrugBendAnimation = new THREE.AnimationClip("ShrugBend", 1.8, [
        new THREE.KeyframeTrack(
            'character.shoulders.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 0.3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shrugBendAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 207: ﾄ脆ｰa Tay Lﾃｪn Vﾃ Quay ﾄ雪ｺｧu Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g giﾆ｡ tay lﾃｪn cao kﾃｨm theo c盻ｭ ﾄ黛ｻ冢g quay ﾄ黛ｺｧu nh蘯ｹ nhﾃng.

```javascript
function raiseArmAndTurnHead(character) {
    const raiseTurnAnimation = new THREE.AnimationClip("RaiseArmTurnHead", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(raiseTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 208: ﾄ静｡ Chﾃ｢n Vﾃ V盻・Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ妥｡ chﾃ｢n m蘯｡nh k蘯ｿt h盻｣p v盻嬖 v盻・tay nh蘯ｹ nhﾃng ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ hﾄハg hﾃ｡i.

```javascript
function kickAndClap(character) {
    const kickClapAnimation = new THREE.AnimationClip("KickClap", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
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
    character.animations.push(kickClapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 209: ﾄ雪ｻｩng Th蘯ｳng Vﾃ ﾄ脆ｰa Tay Ra Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng v盻ｯng vﾃ ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩, bi盻ブ th盻・s盻ｱ hﾆｰ盻嬾g d蘯ｫn ho蘯ｷc tﾆｰﾆ｡ng tﾃ｡c.

```javascript
function standAndExtendHandsForward(character) {
    const extendHandsAnimation = new THREE.AnimationClip("ExtendHandsForward", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(extendHandsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 210: Ch蘯｡y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Xoay Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh k蘯ｿt h盻｣p v盻嬖 tay xoay nh蘯ｹ, t蘯｡o phong cﾃ｡ch linh ho蘯｡t.

```javascript
function sprintWithSwingingArms(character) {
    const sprintSwingAnimation = new THREE.AnimationClip("SprintSwingArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(sprintSwingAnimation);
}
```

---

Hﾃ｣y ti蘯ｿp t盻･c chia s蘯ｻ n蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g khﾃ｡c ho蘯ｷc m盻・r盻冢g cﾃ｡c hﾃnh ﾄ黛ｻ冢g hi盻㌻ t蘯｡i nhﾃｩ! 噫笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c cﾃｹng tﾃｴi t蘯｡o thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn s盻創g ﾄ黛ｻ冢g vﾃ h蘯･p d蘯ｫn:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 211: ﾄ雪ｻｩng Th蘯ｳng Vﾃ Ch盻・Tay Lﾃｪn B蘯ｧu Tr盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn k蘯ｿt h盻｣p ch盻・tay lﾃｪn tr盻拱, t蘯｡o s盻ｱ m蘯｡nh m蘯ｽ vﾃ lﾃｴi cu盻創.

```javascript
function pointToSky(character) {
    const pointSkyAnimation = new THREE.AnimationClip("PointSky", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pointSkyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 212: Lﾃｹi Hai Bﾆｰ盻嫩 Vﾃ Quay ﾄ雪ｺｧu Nhﾃｬn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi hai bﾆｰ盻嫩 nh盻・vﾃ quay ﾄ黛ｺｧu l蘯｡i phﾃｭa sau.

```javascript
function stepBackAndLookBack(character) {
    const lookBackAnimation = new THREE.AnimationClip("StepBackLookBack", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0]
        )
    ]);
    character.animations.push(lookBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 213: ﾄ雪ｺ･m Vﾃ Nh蘯｣y Lﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung cﾃｺ ﾄ黛ｺ･m m蘯｡nh m蘯ｽ sau ﾄ妥ｳ nh蘯｣y lﾃｪn cao.

```javascript
function punchAndLeap(character) {
    const punchLeapAnimation = new THREE.AnimationClip("PunchLeap", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [1, 1.5, 2],
            [0, 0, 0, 0, 2, 0, 0, 3, 0]
        )
    ]);
    character.animations.push(punchLeapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 214: ﾄ雪ｻｩng V盻嬖 Tay Giﾆ｡ Hai Bﾃｪn Theo Vﾃｲng Cung**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ giﾆ｡ hai tay t蘯｡o vﾃｲng cung ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ chﾃo m盻ｫng.

```javascript
function openArmsInArc(character) {
    const openArmsArcAnimation = new THREE.AnimationClip("OpenArmsArc", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(openArmsArcAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 215: Nh蘯｣y Lﾃｹi Vﾃ T蘯｡o Dﾃ｡ng Phﾃｲng Th盻ｧ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｹi l蘯｡i phﾃｭa sau kﾃｨm theo tﾆｰ th蘯ｿ phﾃｲng th盻ｧ.

```javascript
function jumpBackDefensivePose(character) {
    const jumpBackDefensiveAnimation = new THREE.AnimationClip("JumpBackDefense", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -1, 2, 0, -2, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpBackDefensiveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 216: Qu盻ｳ M盻冲 G盻訴 Vﾃ Nhﾃｬn Th蘯ｳng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g qu盻ｳ m盻冲 g盻訴 xu盻創g vﾃ nhﾃｬn th蘯ｳng v盻・phﾃｭa trﾆｰ盻嫩 bi盻ブ th盻・s盻ｱ quy蘯ｿt tﾃ｢m.

```javascript
function kneelOneLegAndLook(character) {
    const kneelLookAnimation = new THREE.AnimationClip("KneelLookForward", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1, 2],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kneelLookAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 217: Nh蘯｣y Vﾃ Tung M盻冲 Cﾃｺ ﾄ雪ｺ｡p Vﾃｲng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ tung m盻冲 cﾃｺ ﾄ黛ｺ｡p vﾃｲng cung t蘯｡o s盻ｱ uy盻ハ chuy盻ハ.

```javascript
function leapAndRoundhouseKick(character) {
    const leapKickAnimation = new THREE.AnimationClip("LeapRoundKick", 2.2, [
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
    character.animations.push(leapKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 218: ﾄ雪ｻｩng Vﾃ ﾄ雪ｺｷt Tay Lﾃｪn Trﾃ｡n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng yﾃｪn vﾃ ﾄ柁ｰa tay lﾃｪn trﾃ｡n nhﾆｰ ﾄ疎ng che n蘯ｯng ho蘯ｷc tﾃｬm ki蘯ｿm.

```javascript
function standAndSalute(character) {
    const saluteAnimation = new THREE.AnimationClip("StandSalute", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(saluteAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 219: ﾄ静｡ Chﾃ｢n V盻・Sau V盻嬖 S盻ｩc M蘯｡nh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g tung m盻冲 cﾃｺ ﾄ妥｡ m蘯｡nh v盻・phﾃｭa sau, bi盻ブ th盻・s盻ｱ d盻ｩt khoﾃ｡t.

```javascript
function backKickWithPower(character) {
    const backKickAnimation = new THREE.AnimationClip("BackKickPower", 1.8, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(backKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 220: Quay Ngﾆｰ盻拱 Vﾃ G蘯ｭt ﾄ雪ｺｧu**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 nhanh nh蘯ｹ k蘯ｿt h盻｣p g蘯ｭt ﾄ黛ｺｧu ﾄ黛ｻ渡g ﾃｽ.

```javascript
function spinAndNod(character) {
    const spinNodAnimation = new THREE.AnimationClip("SpinNod", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(spinNodAnimation);
}
```

---

Hﾃ｣y ti蘯ｿp t盻･c chia s蘯ｻ n蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g khﾃ｡c ho蘯ｷc ﾄ訴盻「 ch盻穎h theo nhu c蘯ｧu c盻･ th盻・c盻ｧa b蘯｡n nhﾃｩ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c cﾃｹng tﾃｴi khﾃ｡m phﾃ｡ nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g sﾃ｡ng t蘯｡o hﾆ｡n ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn ﾄ黛ｺｧy s盻ｩc hﾃｺt vﾃ nﾄハg ﾄ黛ｻ冢g:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 221: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Giﾆ｡ Tay Nhﾆｰ Kﾃｩo**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 xu盻創g th蘯･p vﾃ kﾃｩo tay ra phﾃｭa sau nhﾆｰ ﾄ疎ng c盻・g蘯ｯng lﾃｴi m盻冲 v蘯ｭt n蘯ｷng.

```javascript
function bendAndPull(character) {
    const bendPullAnimation = new THREE.AnimationClip("BendPull", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(bendPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 222: Bﾆｰ盻嫩 Ti蘯ｿn Vﾃ Ch盻・Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 m盻冲 bﾆｰ盻嫩 l盻嬾 vﾃ ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩 ﾄ黛ｻ・ch盻・ﾄ柁ｰ盻拵g ho蘯ｷc hﾆｰ盻嬾g d蘯ｫn.

```javascript
function stepForwardAndPoint(character) {
    const forwardPointAnimation = new THREE.AnimationClip("StepForwardPoint", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(forwardPointAnimation);
}
```

---

