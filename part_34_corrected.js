        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(leapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 42: ﾄ雪ｺ･m Liﾃｪn Ti蘯ｿp**
Thﾃｪm chu盻擁 cﾃ｡c ﾄ妥ｲn ﾄ黛ｺ･m liﾃｪn ti蘯ｿp ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c hﾃnh ﾄ黛ｻ冢g m蘯｡nh m蘯ｽ.

```javascript
function rapidPunch(character) {
    const punchCombo = new THREE.AnimationClip("RapidPunch", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 4, 0, 0, -Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, -Math.PI / 4, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(punchCombo);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 43: Quay Ngﾆｰ盻拱 Vﾃ Tﾄハg T盻祖**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ngﾆｰ盻拱 nhanh chﾃｳng k蘯ｿt h盻｣p v盻嬖 bﾆｰ盻嫩 ch蘯｡y m蘯｡nh m蘯ｽ.

```javascript
function spinAndDash(character) {
    const spinDashAnimation = new THREE.AnimationClip("SpinDash", 2, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI, 0, 0, 0, 2 * Math.PI, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 5, 0]
        )
    ]);
    character.animations.push(spinDashAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 44: Tung Cﾃｺ ﾄ静｡ Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ妥｡ m蘯｡nh vﾃ cao t蘯｡o phong cﾃ｡ch 蘯･n tﾆｰ盻｣ng.

```javascript
function highKick(character) {
    const highKickAnimation = new THREE.AnimationClip("HighKick", 1, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(highKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 45: L蘯ｯc Lﾆｰng Nh蘯ｹ Nhﾃng**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g l蘯ｯc lﾆｰng t盻ｱ nhiﾃｪn ﾄ黛ｻ・t蘯｡o dﾃ｡ng ﾄ訴盻㎡ tho蘯｣i mﾃ｡i.

```javascript
function swayTorso(character) {
    const swayAnimation = new THREE.AnimationClip("Sway", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        )
    ]);
    character.animations.push(swayAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｳ ﾃｽ tﾆｰ盻殤g khﾃ｡c c蘯ｧn tﾃｴi thi蘯ｿt k蘯ｿ chuy盻ハ ﾄ黛ｻ冢g ho蘯ｷc mu盻創 m盻・r盻冢g cﾃ｡c ho蘯｡t ﾄ黛ｻ冢g hi盻㌻ t蘯｡i, hﾃ｣y chia s蘯ｻ nhﾃｩ! 噫笨ｨ


Chﾃｺng ta ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o vﾃ sﾃ｡ng t蘯｡o ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn sinh ﾄ黛ｻ冢g vﾃ ﾄ黛ｺｧy s盻ｩc hﾃｺt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 46: Nﾃ｢ng V蘯ｭt N蘯ｷng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nﾃ｢ng m盻冲 v蘯ｭt n蘯ｷng lﾃｪn cao v盻嬖 s盻ｱ ph盻訴 h盻｣p toﾃn thﾃ｢n.

```javascript
function liftHeavyObject(character) {
    const liftAnimation = new THREE.AnimationClip("LiftHeavy", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 6, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(liftAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 47: Nh蘯｣y Vﾃ Vung Tay**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao k蘯ｿt h盻｣p v盻嬖 vung tay t蘯｡o phong cﾃ｡ch hﾃo h盻ｩng.

```javascript
function jumpAndSwing(character) {
    const jumpSwingAnimation = new THREE.AnimationClip("JumpSwing", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 48: ﾄ雪ｺ･m ﾄ雪ｺ･t**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺ･m xu盻創g ﾄ黛ｺ･t m盻冲 cﾃ｡ch m蘯｡nh m蘯ｽ t蘯｡o c蘯｣m giﾃ｡c quy盻］ l盻ｱc.

```javascript
function slamGround(character) {
    const slamGroundAnimation = new THREE.AnimationClip("SlamGround", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        )
    ]);
    character.animations.push(slamGroundAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 49: Quay ﾄ雪ｺｧu Tﾃｬm Ki蘯ｿm**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay ﾄ黛ｺｧu liﾃｪn t盻･c ﾄ黛ｻ・tﾃｬm ki蘯ｿm ho蘯ｷc nhﾃｬn xung quanh.

```javascript
function searchAround(character) {
    const searchAnimation = new THREE.AnimationClip("SearchAround", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.4, 0.8, 1.2],
            [0, Math.PI / 8, 0, 0, -Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(searchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 50: ﾄ雪ｺ｡p Chﾃ｢n Lﾃｪn Trﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺ｡p chﾃ｢n lﾃｪn phﾃｭa trﾃｪn ﾄ黛ｻ・t蘯｡o s盻ｩc m蘯｡nh.

```javascript
function kickUpward(character) {
    const kickAnimation = new THREE.AnimationClip("KickUpward", 1.2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(kickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 51: ﾄ雪ｻｩng T盻ｱ Tin**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng t盻ｱ tin v盻嬖 c盻ｭ ﾄ黛ｻ冢g tay vﾃ dﾃ｡ng th蘯ｳng.

```javascript
function confidentStand(character) {
    const standAnimation = new THREE.AnimationClip("StandConfident", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, 0.2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0, -Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(standAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 52: Nh蘯｣y Quay Vﾃｲng Vﾃ ﾄ雪ｺｷt Chﾃ｢n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn, xoay trﾃｲn trﾃｪn khﾃｴng vﾃ ﾄ黛ｺｷt chﾃ｢n xu盻創g v盻ｯng vﾃng.

```javascript
function jumpTwistLand(character) {
    const jumpTwistAnimation = new THREE.AnimationClip("JumpTwistLand", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(jumpTwistAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 53: Bﾆｰ盻嫩 Ch蘯ｭm Rﾃ｣i**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 ﾄ訴 ch蘯ｭm rﾃ｣i, mang l蘯｡i c蘯｣m giﾃ｡c ﾄ訴盻［ ﾄ黛ｺ｡m.

```javascript
function slowWalk(character) {
    const slowWalkAnimation = new THREE.AnimationClip("SlowWalk", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 0.5, 0, 0, 1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 12, 0, 0, -Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(slowWalkAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 54: T盻ｱa Lﾆｰng Thﾆｰ Giﾃ｣n**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g t盻ｱa lﾆｰng vﾃo tﾆｰ盻拵g ho蘯ｷc gh蘯ｿ, th盻・hi盻㌻ s盻ｱ tho蘯｣i mﾃ｡i.

```javascript
function leanBack(character) {
    const leanBackAnimation = new THREE.AnimationClip("LeanBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -0.5, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(leanBackAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｺｷc bi盻㏄ nﾃo khﾃ｡c ho蘯ｷc m盻・r盻冢g thﾃｪm hﾃnh vi cho nhﾃ｢n v蘯ｭt, hﾃ｣y nﾃｳi cho tﾃｴi bi蘯ｿt nhﾃｩ! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g linh ho蘯｡t hﾆ｡n ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th盻ｱc s盻ｱ s盻創g ﾄ黛ｻ冢g vﾃ phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 55: Bﾆｰ盻嫩 Ti蘯ｿn Nhanh**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g bﾆｰ盻嫩 nhanh v盻・phﾃｭa trﾆｰ盻嫩 v盻嬖 chuy盻ハ ﾄ黛ｻ冢g cﾃ｡nh tay m蘯｡nh m蘯ｽ.

```javascript
function quickStepForward(character) {
    const quickStepAnimation = new THREE.AnimationClip("QuickStepForward", 1.2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.2],
            [0, 0, 0, 0, 0.7, 0, 0, 1.4, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 12, 0, 0, -Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(quickStepAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 56: Nh蘯｣y Trﾃｪn M盻冲 Chﾃ｢n**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y liﾃｪn t盻･c b蘯ｱng m盻冲 chﾃ｢n ﾄ黛ｻ・t蘯｡o phong cﾃ｡ch vui nh盻冢.

```javascript
function hopOnOneLeg(character) {
    const hopAnimation = new THREE.AnimationClip("HopOneLeg", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 0.7, 1.5],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(hopAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 57: ﾄ静｡nh Nhanh Hai Tay**
Thﾃｪm chu盻擁 cﾃ｡c hﾃnh ﾄ黛ｻ冢g ﾄ妥｡nh liﾃｪn t盻･c v盻嬖 c蘯｣ hai tay.

```javascript
function dualPunch(character) {
    const dualPunchAnimation = new THREE.AnimationClip("DualPunch", 1.5, [
        new THREE.KeyframeTrack(
            'character.rightArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftArm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(dualPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 58: Ng盻妬 Vﾃ Ch盻創g Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ng盻妬 xu盻創g vﾃ ch盻創g tay lﾃｪn ﾄ妥ｹi.

```javascript
function sitAndLean(character) {
    const sitLeanAnimation = new THREE.AnimationClip("SitLean", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 6, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(sitLeanAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 59: ﾄ静｡ Liﾃｪn Hoﾃn**
Thﾃｪm chu盻擁 cﾃ｡c cﾃｺ ﾄ妥｡ liﾃｪn ti蘯ｿp b蘯ｱng c蘯｣ hai chﾃ｢n ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c hﾃnh ﾄ黛ｻ冢g m蘯｡nh m蘯ｽ.

```javascript
function rapidKick(character) {
    const rapidKickAnimation = new THREE.AnimationClip("RapidKick", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightLeg.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leftLeg.rotation',
            [0, 1.2, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(rapidKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 60: Ng蘯｣ Ngﾆｰ盻拱 Ra Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ng蘯｣ ngﾆｰ盻拱 ra sau m盻冲 cﾃ｡ch tho蘯｣i mﾃ｡i.

```javascript
function reclineBack(character) {
    const reclineAnimation = new THREE.AnimationClip("ReclineBack", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, -Math.PI / 12, 0, -Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(reclineAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 61: Ch盻創g Tay Vﾃ ﾄ雪ｻｩng Lﾃｪn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch盻創g tay xu盻創g ﾄ黛ｺ･t ﾄ黛ｻ・ﾄ黛ｻｩng d蘯ｭy.

```javascript
function pushUpToStand(character) {
    const pushUpAnimation = new THREE.AnimationClip("PushUp", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, Math.PI / 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, -1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 62: ﾄ雪ｺｩy Tay Ra Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺｩy tay m盻冲 cﾃ｡ch nhanh chﾃｳng vﾃ m蘯｡nh m蘯ｽ.

```javascript
function fastPushForward(character) {
    const pushAnimation = new THREE.AnimationClip("FastPush", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(pushAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c hﾃnh ﾄ黛ｻ冢g ph盻ｩc t蘯｡p hﾆ｡n ho蘯ｷc cﾃｳ ﾃｽ tﾆｰ盻殤g ﾄ黛ｺｷc bi盻㏄, hﾃ｣y chia s蘯ｻ ﾄ黛ｻ・tﾃｴi thi蘯ｿt k蘯ｿ nhﾃｩ! 噫笨ｨ

Chﾃｺng ta hﾃ｣y ti蘯ｿp t盻･c v盻嬖 nh盻ｯng chuy盻ハ ﾄ黛ｻ冢g ﾄ黛ｻ冂 ﾄ妥｡o hﾆ｡n ﾄ黛ｻ・thﾃｪm ph蘯ｧn s盻創g ﾄ黛ｻ冢g cho nhﾃ｢n v蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 63: Quay Tay Nh蘯ｹ**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g quay tay m盻冲 cﾃ｡ch nh蘯ｹ nhﾃng ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n ho蘯ｷc t盻ｱ nhiﾃｪn.

```javascript
function rotateArmRelaxedly(character) {
    const rotateAnimation = new THREE.AnimationClip("RotateArm", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(rotateAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 64: Vﾆｰﾆ｡n Vai ﾄ雪ｻｩng Th蘯ｳng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g vﾆｰﾆ｡n vai m盻冲 cﾃ｡ch m蘯｡nh m蘯ｽ, k蘯ｿt h盻｣p v盻嬖 dﾃ｡ng ﾄ黛ｻｩng th蘯ｳng.

```javascript
function stretchAndStand(character) {
    const stretchAnimation = new THREE.AnimationClip("StretchStand", 1.8, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 12, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(stretchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 65: Nh蘯｣y K蘯ｿt H盻｣p Vﾃｲng Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｪn cao, k蘯ｿt h盻｣p v盻嬖 vi盻㌘ ﾄ柁ｰa tay vﾃｲng quanh.

```javascript
function jumpWithArmsSwing(character) {
    const jumpSwingAnimation = new THREE.AnimationClip("JumpArmsSwing", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.2, 2.5],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.2, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(jumpSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 66: ﾄ雪ｻｩng Vﾃ V蘯ｫy Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng vﾃ v蘯ｫy tay lﾃｪn cao ﾄ黛ｻ・bi盻ブ th盻・s盻ｱ chﾃo m盻ｫng.

```javascript
function waveHandHigh(character) {
    const waveAnimation = new THREE.AnimationClip("WaveHigh", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(waveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 67: ﾄ雪ｺ･m M蘯｡nh K蘯ｿt H盻｣p Xoay Ngﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｺ･m m蘯｡nh v盻嬖 l盻ｱc m蘯｡nh kﾃｨm theo ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱.

```javascript
function punchWithSpin(character) {
    const punchSpinAnimation = new THREE.AnimationClip("PunchSpin", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, 0, Math.PI, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(punchSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 68: Xoay Ngﾆｰ盻拱 Vﾃ Ch盻創g Lﾆｰng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g xoay ngﾆｰ盻拱 nh蘯ｹ, sau ﾄ妥ｳ ch盻創g lﾆｰng ﾄ黛ｻ・t蘯｡o c蘯｣m giﾃ｡c thﾆｰ giﾃ｣n.

```javascript
function twistAndLean(character) {
    const twistAnimation = new THREE.AnimationClip("TwistLean", 1.8, [
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, -Math.PI / 12, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        )
    ]);
    character.animations.push(twistAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 69: ﾄ雪ｻｩng Th蘯ｳng Vﾃ V蘯ｷn Ngﾆｰ盻拱**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng th蘯ｳng, sau ﾄ妥ｳ v蘯ｷn ngﾆｰ盻拱 nh蘯ｹ nhﾃng ﾄ黛ｻ・thﾆｰ giﾃ｣n.

```javascript
function standAndTwist(character) {
    const standTwistAnimation = new THREE.AnimationClip("StandTwist", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, Math.PI / 8, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(standTwistAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 70: ﾄ脆ｰa Tay Ra ﾄ静ｳn**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ柁ｰa tay ra ﾄ妥ｳn m盻冲 v蘯ｭt th盻・t盻ｫ phﾃｭa trﾆｰ盻嫩.

```javascript
function extendHandToReceive(character) {
    const extendHandAnimation = new THREE.AnimationClip("ExtendHand", 1, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.5, 1],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(extendHandAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 71: Lﾃｹi Vﾃ ﾄ静｡nh Tr蘯｣**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi l蘯｡i vﾃ k蘯ｿt h盻｣p ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡nh tay.

```javascript
function retreatAndStrike(character) {
    const retreatStrikeAnimation = new THREE.AnimationClip("RetreatStrike", 1.5, [
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
    character.animations.push(retreatStrikeAnimation);
}
```

---

N蘯ｿu b蘯｡n cﾃｳ ﾃｽ tﾆｰ盻殤g nﾃo ﾄ黛ｺｷc bi盻㏄ ho蘯ｷc c蘯ｧn m盻・r盻冢g thﾃｪm cﾃ｡c hﾃnh ﾄ黛ｻ冢g chi ti蘯ｿt, hﾃ｣y nﾃｳi ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 噫笨ｨ

ﾄ脆ｰ盻｣c thﾃｴi, chﾃｺng ta s蘯ｽ ti蘯ｿp t盻･c b盻・sung cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g m盻嬖 m蘯ｻ vﾃ phong phﾃｺ ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n tr盻・nﾃｪn linh ho蘯｡t vﾃ h蘯･p d蘯ｫn hﾆ｡n n盻ｯa:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 72: B蘯ｭt Nh蘯｣y Vﾃ Tung Cﾃｺ ﾄ雪ｺ･m**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn k蘯ｿt h盻｣p v盻嬖 cﾃｺ ﾄ黛ｺ･m m蘯｡nh v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function leapAndPunch(character) {
    const leapPunchAnimation = new THREE.AnimationClip("LeapPunch", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(leapPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 73: Cﾃｺi Ngﾆｰ盻拱 Vﾃ Tung Cﾃｺ ﾄ静｡**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 sau ﾄ妥ｳ th盻ｱc hi盻㌻ m盻冲 cﾃｺ ﾄ妥｡ xoﾃ｡y m蘯｡nh.

```javascript
function duckAndKick(character) {
    const duckKickAnimation = new THREE.AnimationClip("DuckKick", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.6, 1.5],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.6, 1.5],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(duckKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 74: ﾄ脆ｰa Tay Vﾃ Kﾃｩo L蘯｡i**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ柁ｰa tay ra phﾃｭa trﾆｰ盻嫩 r盻妬 kﾃｩo v盻・nhﾆｰ ﾄ疎ng c蘯ｧm n蘯ｯm.

```javascript
function reachAndPull(character) {
    const reachPullAnimation = new THREE.AnimationClip("ReachPull", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(reachPullAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 75: ﾄ雪ｻｩng Vﾃ Giﾆｰﾆ｡ng Tay Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng v盻嬖 dﾃ｡ng m蘯｡nh m蘯ｽ vﾃ giﾆｰﾆ｡ng c蘯｣ hai tay lﾃｪn cao.

```javascript
function standAndRaiseBothArms(character) {
    const raiseArmsAnimation = new THREE.AnimationClip("RaiseBothArms", 1.5, [
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

### **Chuy盻ハ ﾄ雪ｻ冢g 76: L蘯ｯc ﾄ雪ｺｧu Vﾃ ﾄ雪ｻｩng V盻ｯng**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g l蘯ｯc ﾄ黛ｺｧu ﾄ黛ｻ・ph蘯｣n ﾄ黛ｻ訴 ho蘯ｷc th盻・hi盻㌻ s盻ｱ m蘯｡nh m蘯ｽ.

```javascript
function shakeHeadAndStandFirmly(character) {
    const shakeHeadAnimation = new THREE.AnimationClip("ShakeHeadFirm", 1.2, [
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 0.6, 1.2],
            [0, Math.PI / 6, 0, 0, -Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(shakeHeadAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 77: Cﾃｺi Ngﾆｰ盻拱 ﾄ雪ｻ冲 Ng盻冲**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g cﾃｺi g蘯ｭp ngﾆｰ盻拱 nhanh ﾄ黛ｻ・nﾃｩ ho蘯ｷc chu蘯ｩn b盻・cho m盻冲 hﾃnh ﾄ黛ｻ冢g k蘯ｿ ti蘯ｿp.

```javascript
function quickBow(character) {
    const bowAnimation = new THREE.AnimationClip("QuickBow", 1, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.5, 1],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 78: B蘯ｭt Nh蘯｣y Ra Phﾃｭa Sau**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g nh蘯｣y lﾃｹi l蘯｡i phﾃｭa sau ﾄ黛ｻ・trﾃ｡nh ho蘯ｷc phﾃｲng th盻ｧ.

```javascript
function hopBack(character) {
    const hopBackAnimation = new THREE.AnimationClip("HopBack", 1.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.7, 1.5],
            [0, 0, 0, -1, 0.5, 0, -2, 0, 0]
        )
    ]);
    character.animations.push(hopBackAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 79: Nh蘯･c Chﾃ｢n Cao Vﾃ ﾄ雪ｻｩng M盻冲 Chﾃ｢n**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g nﾃ｢ng cao m盻冲 chﾃ｢n, gi盻ｯ cﾃ｢n b蘯ｱng trong th盻拱 gian ng蘯ｯn.

```javascript
function liftLegAndBalance(character) {
    const balanceAnimation = new THREE.AnimationClip("BalanceOneLeg", 1.8, [
        new THREE.KeyframeTrack(
            'character.rightLeg.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, 1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(balanceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 80: V盻・Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g v盻・tay nh蘯ｹ nhﾃng ho蘯ｷc th盻・hi盻㌻ s盻ｱ chﾃｺc m盻ｫng.

```javascript
function clapHands(character) {
    const clapAnimation = new THREE.AnimationClip("ClapHands", 1.5, [
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

N蘯ｿu b蘯｡n mu盻創 thﾃｪm cﾃ｡c c盻ｭ ﾄ黛ｻ冢g khﾃ｡c ho蘯ｷc c蘯｣i ti蘯ｿn chﾃｺng, tﾃｴi r蘯･t s蘯ｵn sﾃng giﾃｺp ﾄ黛ｻ｡! 噫笨ｨ

Hﾃ｣y ti蘯ｿp t盻･c thﾃｪm cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g thﾃｺ v盻・vﾃ m蘯｡nh m蘯ｽ hﾆ｡n ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn n盻品 b蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 81: ﾄ雪ｺ･m Bﾃｺa M蘯｡nh M蘯ｽ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｺ･m ki盻ブ bﾃｺa xu盻創g m蘯ｷt ﾄ黛ｺ･t ho蘯ｷc v蘯ｭt th盻・t蘯｡o c蘯｣m giﾃ｡c l盻ｱc m蘯｡nh.

```javascript
function hammerPunch(character) {
    const hammerPunchAnimation = new THREE.AnimationClip("HammerPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.position',
            [0, 0.9, 1.8],
            [0, 0, 0, 0, -1, 0, 0, -1, 0]
        )
    ]);
    character.animations.push(hammerPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 82: Bﾆｰ盻嫩 Sang M盻冲 Bﾃｪn**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g bﾆｰ盻嫩 ngang ﾄ黛ｻ・trﾃ｡nh ho蘯ｷc ti蘯ｿn sang bﾃｪn.

```javascript
function sideStep(character) {
    const sideStepAnimation = new THREE.AnimationClip("SideStep", 1, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.5, 1],
            [0, 0, 0, 0.5, 0, 0, 1, 0, 0]
        )
    ]);
    character.animations.push(sideStepAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 83: Cﾃｺi Vﾃ Ch盻･p Nhanh**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g cﾃｺi ngﾆｰ盻拱 nhanh vﾃ dﾃｹng tay ﾄ黛ｻ・ch盻･p v蘯ｭt th盻・

```javascript
function crouchAndGrab(character) {
    const crouchGrabAnimation = new THREE.AnimationClip("CrouchGrab", 1.4, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 0.7, 1.4],
            [0, 0, 0, 0, -0.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.7, 1.4],
            [0, 0, 0, Math.PI / 4, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(crouchGrabAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 84: ﾄ静｡nh Tay Xoﾃ｡y**
Thﾃｪm chuy盻ハ ﾄ黛ｻ冢g tay ﾄ妥｡nh vﾃｲng xoﾃ｡y m蘯｡nh m蘯ｽ ﾄ黛ｻ・phﾃｲng th盻ｧ ho蘯ｷc t蘯･n cﾃｴng.

```javascript
function spinningPunch(character) {
    const spinningPunchAnimation = new THREE.AnimationClip("SpinningPunch", 1.5, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI, 0, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, 0, Math.PI, 0, 0, 2 * Math.PI, 0]
        )
    ]);
    character.animations.push(spinningPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 85: Tung Cﾃｺ ﾄ雪ｺ｡p Lﾃｹi**
Thﾃｪm c盻ｭ ﾄ黛ｻ冢g chﾃ｢n ﾄ妥｡ lﾃｹi v盻・phﾃｭa sau v盻嬖 l盻ｱc m蘯｡nh.

```javascript
function backKick(character) {
    const backKickAnimation = new THREE.AnimationClip("BackKick", 1.2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, -Math.PI / 2, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(backKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 86: ﾄ脆ｰa Tay Che M蘯ｷt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ柁ｰa tay lﾃｪn che m蘯ｷt ho蘯ｷc b蘯｣o v盻・ﾄ黛ｺｧu.

```javascript
function guardFace(character) {
    const guardFaceAnimation = new THREE.AnimationClip("GuardFace", 1.2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.6, 1.2],
            [0, 0, 0, Math.PI / 3, 0, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(guardFaceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 87: Lﾃｹi Bﾆｰ盻嫩 Vﾃ Giﾆｰﾆ｡ng Tay**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g lﾃｹi m盻冲 bﾆｰ盻嫩 nh盻・vﾃ giﾆｰﾆ｡ng tay lﾃｪn ﾄ黛ｻ・phﾃｲng th盻ｧ.

```javascript
function retreatAndGuard(character) {
    const retreatGuardAnimation = new THREE.AnimationClip("RetreatGuard", 1.5, [
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
    character.animations.push(retreatGuardAnimation);
}
```

