    const circularPunchAnimation = new THREE.AnimationClip("CircularPunch", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 3, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(circularPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 534: Nh蘯｣y Lﾃｪn Vﾃ Quay Ngﾆｰ盻拱 90 ﾄ雪ｻ・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y lﾃｪn cao vﾃ xoay ngﾆｰ盻拱 90 ﾄ黛ｻ・trong khﾃｴng trung t蘯｡o s盻ｱ linh ho蘯｡t.

```javascript
function jumpAndQuarterTurn(character) {
    const quarterTurnAnimation = new THREE.AnimationClip("JumpQuarterTurn", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 2.5, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(quarterTurnAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 535: Ch蘯｡y Nhanh V盻嬖 Tay ﾄ紳n Trﾆｰ盻嫩**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y v盻嬖 tay di chuy盻ハ m蘯｡nh trﾆｰ盻嫩 cﾆ｡ th盻・t蘯｡o s盻ｱ cﾃ｢n ﾄ黛ｻ訴 vﾃ s盻ｩc m蘯｡nh.

```javascript
function sprintWithFocusedArms(character) {
    const focusedArmsAnimation = new THREE.AnimationClip("SprintFocusedArms", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(focusedArmsAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 536: Cﾃｺ Phﾃ｡t Bﾃｳng B蘯ｱng Chﾃ｢n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng vﾃ phﾃ｡t bﾃｳng b蘯ｱng chﾃ｢n trong bﾃｳng ﾄ妥｡ v盻嬖 l盻ｱc m蘯｡nh m蘯ｽ.

```javascript
function soccerFreeKick(character) {
    const freeKickAnimation = new THREE.AnimationClip("SoccerFreeKick", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(freeKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 537: Ch盻創g ﾄ雪ｺｩy Th盻・L盻ｱc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng, cﾃｺi ngﾆｰ盻拱 vﾃ th盻ｱc hi盻㌻ ﾄ黛ｻ冢g tﾃ｡c ch盻創g ﾄ黛ｺｩy lﾃｪn xu盻創g ﾄ黛ｻ「 ﾄ黛ｺｷn.

```javascript
function pushUpExercise(character) {
    const pushUpAnimation = new THREE.AnimationClip("PushUpExercise", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -1, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(pushUpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 538: Nﾃ｢ng M盻冲 Tay T蘯ｭp T蘯｡ ﾄ脆｡n**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng vﾃ nﾃ｢ng m盻冲 tay v盻嬖 t蘯｡ ﾄ柁｡n, t蘯｡o cﾆ｡ b蘯ｯp m蘯｡nh m蘯ｽ.

```javascript
function dumbbellCurl(character) {
    const dumbbellCurlAnimation = new THREE.AnimationClip("DumbbellCurl", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(dumbbellCurlAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 539: Lﾃｹi Bﾆｰ盻嫩 V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Phﾃｲng Th盻ｧ Quy盻］ Anh**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c bﾆｰ盻嫩 lﾃｹi vﾃ ﾄ柁ｰa tay th盻ｧ trﾆｰ盻嫩 m蘯ｷt t蘯｡o th蘯ｿ phﾃｲng th盻ｧ.

```javascript
function boxingDefensiveMove(character) {
    const defensiveMoveAnimation = new THREE.AnimationClip("BoxingDefensiveMove", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, -0.5, 0, 0, -1, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(defensiveMoveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 540: B蘯ｭt Nh蘯｣y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Kﾃｩo T蘯｡**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y v盻嬖 cﾃ｡nh tay kﾃｩo m蘯｡nh t蘯｡ t盻ｫ dﾆｰ盻嬖 lﾃｪn t蘯｡o s盻ｩc m蘯｡nh.

```javascript
function explosivePull(character) {
    const explosivePullAnimation = new THREE.AnimationClip("ExplosivePull", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, -1, 0, 0, 2.5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 2, 0, 0]
        )
    ]);
    character.animations.push(explosivePullAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｣ cﾃｳ, hﾃ｣y chia s蘯ｻ ﾄ黛ｻ・tﾃｴi h盻・tr盻｣ nhﾃｩ! 純窶坂凾・鞘惠
Chﾃｺng ta hﾃ｣y ti蘯ｿp t盻･c v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g th盻・thao h蘯･p d蘯ｫn ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm phong cﾃ｡ch vﾃ linh ho蘯｡t:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 541: Cﾃｺ ﾄ静｡nh Bﾃｳng G蘯ｭy Cricket**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 vﾃ vung g蘯ｭy m蘯｡nh m蘯ｽ ﾄ黛ｻ・ﾄ妥｡nh bﾃｳng cricket v盻嬖 l盻ｱc l盻嬾.

```javascript
function cricketBatSwing(character) {
    const batSwingAnimation = new THREE.AnimationClip("CricketBatSwing", 2, [
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
    character.animations.push(batSwingAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 542: Ch蘯｡y L蘯･y ﾄ静 Vﾃ Nh蘯｣y Cao ﾄ静｡nh ﾄ雪ｺｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ b蘯ｭt nh蘯｣y ﾄ妥｡nh ﾄ黛ｺｧu m蘯｡nh trong bﾃｳng ﾄ妥｡.

```javascript
function runningHeader(character) {
    const headerJumpAnimation = new THREE.AnimationClip("RunningHeader", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.head.rotation',
            [0, 1.25, 2.5],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(headerJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 543: Cﾃｺ Phﾃ｡t Bﾃｳng C蘯ｧu Lﾃｴng Cao Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng vﾃ phﾃ｡t c蘯ｧu t盻ｫ cao xu盻創g v盻嬖 l盻ｱc m蘯｡nh.

```javascript
function badmintonHighServe(character) {
    const highServeAnimation = new THREE.AnimationClip("BadmintonHighServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(highServeAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 544: ﾄ雪ｻ冢g Tﾃ｡c Quﾄハg Bﾃｳng Bowling**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c cﾃｺi ngﾆｰ盻拱 vﾃ quﾄハg bﾃｳng bowling v盻嬖 phong cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function bowlingThrow(character) {
    const bowlingThrowAnimation = new THREE.AnimationClip("BowlingThrow", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(bowlingThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 545: Ch蘯｡y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c Phﾃ｡t Bﾃｳng R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ phﾃ｡t bﾃｳng r盻・v盻嬖 s盻ｱ chﾃｭnh xﾃ｡c.

```javascript
function runningBasketballPass(character) {
    const basketballPassAnimation = new THREE.AnimationClip("RunningBasketballPass", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, 0, 0]
        )
    ]);
    character.animations.push(basketballPassAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 546: Cﾃｺ ﾄ雪ｺｭp M蘯｡nh Trong Qu蘯ｧn V盻｣t**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y vﾃ ﾄ黛ｺｭp m蘯｡nh bﾃｳng qu蘯ｧn v盻｣t t盻ｫ cao xu盻創g.

```javascript
function tennisOverheadSmash(character) {
    const overheadSmashAnimation = new THREE.AnimationClip("TennisOverheadSmash", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(overheadSmashAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 547: ﾄ雪ｻ冢g Tﾃ｡c B蘯ｭt Cao ﾄ雪ｺｭp C蘯ｧu**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt cao vﾃ ﾄ黛ｺｭp c蘯ｧu m蘯｡nh m蘯ｽ t盻ｫ trﾃｪn xu盻創g.

```javascript
function badmintonJumpSmash(character) {
    const jumpSmashAnimation = new THREE.AnimationClip("BadmintonJumpSmash", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(jumpSmashAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 548: Cﾃｺ Nﾃｩm Lﾃｪn Cao Trong Bﾃｳng Chﾃy**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c tung bﾃｳng chﾃy lﾃｪn cao t蘯｡o s盻ｱ chﾃｭnh xﾃ｡c.

```javascript
function baseballPopFly(character) {
    const popFlyAnimation = new THREE.AnimationClip("BaseballPopFly", 2, [
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
    character.animations.push(popFlyAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 549: ﾄ雪ｻ冢g Tﾃ｡c Ch蘯｡y Vﾃ Nﾃｩm Lao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ tung lao ﾄ訴盻］ kinh v盻嬖 l盻ｱc t盻ｫ cﾆ｡ th盻・

```javascript
function sprintAndJavelinThrow(character) {
    const sprintJavelinAnimation = new THREE.AnimationClip("SprintJavelinThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(sprintJavelinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 550: Nh蘯｣y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c L盻冢 Nhﾃo**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ l盻冢 nhﾃo trong khﾃｴng trung bi盻ブ th盻・s盻ｱ linh ho蘯｡t.

```javascript
function aerialFlip(character) {
    const flipAnimation = new THREE.AnimationClip("AerialFlip", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(flipAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm n盻ｯa ho蘯ｷc tﾃｹy ch盻穎h cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c, tﾃｴi s蘯ｽ r蘯･t vui ﾄ柁ｰ盻｣c h盻・tr盻｣ thﾃｪm! 遵笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c khﾃ｡m phﾃ｡ cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao m盻嬖 m蘯ｻ vﾃ ﾄ黛ｺｧy nﾄハg lﾆｰ盻｣ng ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm phong phﾃｺ:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 551: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｻ｡ C蘯ｧu Chuy盻］ Trong Bﾃｳng Chuy盻］**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ﾄ黛ｻｩng vﾃ ﾄ黛ｻ｡ bﾃｳng chuy盻］ b蘯ｱng hai tay 盻・v盻・trﾃｭ th蘯･p, bi盻ブ th盻・s盻ｱ s蘯ｵn sﾃng vﾃ nhanh nh蘯ｹn.

```javascript
function volleyballBump(character) {
    const bumpAnimation = new THREE.AnimationClip("VolleyballBump", 1.8, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 0.9, 1.8],
            [0, 0, 0, Math.PI / 8, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.9, 1.8],
            [0, Math.PI / 12, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(bumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 552: Cﾃｺ T蘯｡t Bﾃｳng Trong Bﾃｳng ﾄ静｡**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 vﾃ t蘯｡t bﾃｳng chﾃｭnh xﾃ｡c sang cﾃ｡nh ho蘯ｷc v盻・phﾃｭa trﾆｰ盻嫩.

```javascript
function soccerCrossPass(character) {
    const crossPassAnimation = new THREE.AnimationClip("SoccerCrossPass", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1, 2],
            [0, Math.PI / 6, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(crossPassAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 553: B蘯ｭt Cao Nﾃｩm Bﾃｳng Chuy盻］ Sang Sﾃ｢n ﾄ雪ｻ訴 Th盻ｧ**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ vung tay ﾄ黛ｻ・nﾃｩm bﾃｳng chuy盻］ qua lﾆｰ盻嬖.

```javascript
function volleyballJumpThrow(character) {
    const jumpThrowAnimation = new THREE.AnimationClip("VolleyballJumpThrow", 2, [
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
    character.animations.push(jumpThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 554: ﾄ雪ｻ冢g Tﾃ｡c Nﾃｩm Lﾃｪn R盻・B蘯ｱng M盻冲 Tay**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y nh蘯ｹ nhﾃng vﾃ nﾃｩm bﾃｳng lﾃｪn r盻・v盻嬖 m盻冲 tay bi盻ブ th盻・s盻ｱ chﾃｭnh xﾃ｡c.

```javascript
function basketballLayup(character) {
    const layupAnimation = new THREE.AnimationClip("BasketballLayup", 2, [
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
    character.animations.push(layupAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 555: Ch蘯｡y Vﾃ Sﾃｺt Bﾃｳng Th蘯ｳng Vﾃo Gﾃｴn**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y vﾃ sﾃｺt bﾃｳng th蘯ｳng v盻・phﾃｭa gﾃｴn v盻嬖 l盻ｱc m蘯｡nh.

```javascript
function soccerStraightShot(character) {
    const straightShotAnimation = new THREE.AnimationClip("SoccerStraightShot", 2.5, [
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
    character.animations.push(straightShotAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 556: ﾄ雪ｻ冢g Tﾃ｡c Ch盻創g Tay Vﾃ Tung Ngﾆｰ盻拱 L盻冢 Ngﾆｰ盻｣c**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt tay vﾃ tung ngﾆｰ盻拱 l盻冢 ngﾆｰ盻｣c trong th盻・d盻･c d盻･ng c盻･.

```javascript
function backFlip(character) {
    const backFlipAnimation = new THREE.AnimationClip("BackFlip", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI, 0, 0]
        )
    ]);
    character.animations.push(backFlipAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 557: Nh蘯｣y Cao Vﾃ Tung ﾄ静ｲn ﾄ雪ｺ･m M蘯｡nh Xu盻創g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y vﾃ tung m盻冲 cﾃｺ ﾄ黛ｺ･m xu盻創g ﾄ黛ｺ･t bi盻ブ th盻・s盻ｩc m蘯｡nh.

```javascript
function powerJumpPunch(character) {
    const jumpPunchAnimation = new THREE.AnimationClip("PowerJumpPunch", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(jumpPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 558: ﾄ雪ｻ冢g Tﾃ｡c T蘯ｭp G蘯ｭp G盻訴**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c t蘯ｭp g蘯ｭp g盻訴 ﾄ黛ｻ「 ﾄ黛ｺｷn ﾄ黛ｻ・rﾃｨn luy盻㌻ th盻・l盻ｱc vﾃ s盻ｩc m蘯｡nh chﾃ｢n.

```javascript
function squatExercise(character) {
    const squatAnimation = new THREE.AnimationClip("SquatExercise", 2, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1, 2],
            [0, 0, 0, 0, -1, 0, 0, 0, 0]
        )
    ]);
    character.animations.push(squatAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 559: Ch蘯｡y L蘯･y ﾄ静 Vﾃ B蘯ｭt Nh蘯｣y Qua V蘯ｭt C蘯｣n Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ nh蘯｣y qua v蘯ｭt c蘯｣n cao t蘯｡o c蘯｣m giﾃ｡c linh ho蘯｡t.

```javascript
function highJump(character) {
    const highJumpAnimation = new THREE.AnimationClip("HighJump", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 5, 0, 0, 7, 0]
        )
    ]);
    character.animations.push(highJumpAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 560: ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｺ｡p Xe ﾄ雪ｺ｡p Th盻・Thao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c chﾃ｢n ﾄ黛ｺ｡p xe ﾄ黛ｻ「 ﾄ黛ｺｷn, phﾃｹ h盻｣p cho cﾃ｡c ho蘯｡t ﾄ黛ｻ冢g ﾄ爽a xe ﾄ黛ｺ｡p.

```javascript
function cyclingMotion(character) {
    const cyclingAnimation = new THREE.AnimationClip("CyclingMotion", 2, [
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 6, -Math.PI / 6, 0]
        )
    ]);
    character.animations.push(cyclingAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ho蘯ｷc tinh ch盻穎h cﾃ｡c chi ti蘯ｿt, hﾃ｣y cho tﾃｴi bi蘯ｿt nhﾃｩ! 垓窶坂凾・鞘惠
Dﾆｰ盻嬖 ﾄ妥｢y lﾃ thﾃｪm cﾃ｡c ﾄ黛ｻ冢g tﾃ｡c th盻・thao m蘯｡nh m蘯ｽ vﾃ ﾄ疎 d蘯｡ng ﾄ黛ｻ・nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n th蘯ｭt s盻ｱ n盻品 b蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 561: Nh蘯｣y Lﾃｪn Vﾃ Tung Cﾃｺ Sﾃｺt Bﾃｳng R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ tung cﾃｺ sﾃｺt bﾃｳng r盻・v盻嬖 phong cﾃ｡ch m蘯｡nh m蘯ｽ.

```javascript
function basketballJumpShot(character) {
    const jumpShotAnimation = new THREE.AnimationClip("BasketballJumpShot", 2, [
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
    character.animations.push(jumpShotAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 562: Tﾆｰ Th蘯ｿ Chu蘯ｩn B盻・ﾄ静｡nh G蘯ｭy Bﾃｳng Chﾃy**
Thﾃｪm tﾆｰ th蘯ｿ ﾄ黛ｻｩng ch蘯ｯc ch蘯ｯn v盻嬖 tay c蘯ｧm g蘯ｭy bﾃｳng chﾃy, t蘯｡o s盻ｱ t蘯ｭp trung.

```javascript
function baseballReadyStance(character) {
    const readyStanceAnimation = new THREE.AnimationClip("BaseballReadyStance", 1.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 0.75, 1.5],
            [0, 0, 0, Math.PI / 12, 0, 0]
        )
    ]);
    character.animations.push(readyStanceAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 563: ﾄ雪ｻ冢g Tﾃ｡c Ch蘯｡y Nhanh Vﾃ B蘯ｭt Nh蘯｣y Qua Chﾆｰ盻嬾g Ng蘯｡i V蘯ｭt**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y nhanh vﾃ nh蘯｣y qua chﾆｰ盻嬾g ng蘯｡i v蘯ｭt, bi盻ブ th盻・s盻ｱ nhanh nh蘯ｹn.

```javascript
function obstacleLeap(character) {
    const leapAnimation = new THREE.AnimationClip("ObstacleLeap", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        )
    ]);
    character.animations.push(leapAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 564: ﾄ雪ｻ冢g Tﾃ｡c ﾄ静｡nh Bﾃｳng Lﾃｪn Cao Trong C蘯ｧu Lﾃｴng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ妥｡nh c蘯ｧu lﾃｪn cao v盻嬖 s盻ｱ chﾃｭnh xﾃ｡c.

```javascript
function badmintonLift(character) {
    const liftAnimation = new THREE.AnimationClip("BadmintonLift", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(liftAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 565: Ch蘯｡y Vﾃ Chuy盻］ Bﾃｳng**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y vﾃ tung bﾃｳng sang ﾄ黛ｻ渡g ﾄ黛ｻ冓 trong bﾃｳng ﾄ妥｡.

```javascript
function soccerPass(character) {
    const passAnimation = new THREE.AnimationClip("SoccerPass", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(passAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 566: ﾄ雪ｻ冢g Tﾃ｡c Tung Cﾃｺ ﾄ雪ｺ･m Mﾃｳc Quy盻］ Anh**
Thﾃｪm m盻冲 cﾃｺ ﾄ黛ｺ･m mﾃｳc m蘯｡nh m蘯ｽ bi盻ブ th盻・s盻ｩc m蘯｡nh.

```javascript
function uppercutPunch(character) {
    const uppercutAnimation = new THREE.AnimationClip("UppercutPunch", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(uppercutAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 567: ﾄ雪ｻ冢g Tﾃ｡c Phﾃ｡t Bﾃｳng Chﾃｭnh Xﾃ｡c Trong Tennis**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c phﾃ｡t bﾃｳng v盻嬖 tay vung m蘯｡nh vﾃ chu蘯ｩn xﾃ｡c.

```javascript
function tennisServe(character) {
    const serveAnimation = new THREE.AnimationClip("TennisServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(serveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 568: Ch蘯｡y Vﾃ Tung Cﾃｺ Sﾃｺt Ph蘯｡t Gﾃｳc**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ tung cﾃｺ sﾃｺt ph蘯｡t gﾃｳc trong bﾃｳng ﾄ妥｡.

```javascript
function soccerCornerKick(character) {
    const cornerKickAnimation = new THREE.AnimationClip("SoccerCornerKick", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.leg.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(cornerKickAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 569: Nh蘯｣y Cao V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｺ･m Xu盻創g**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c nh蘯｣y cao vﾃ ﾄ黛ｺ･m xu盻創g m蘯｡nh m蘯ｽ bi盻ブ th盻・s盻ｱ uy l盻ｱc.

```javascript
function descendingPunch(character) {
    const descendingPunchAnimation = new THREE.AnimationClip("DescendingPunch", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 3, 0, 0, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, -Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(descendingPunchAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 570: Ch蘯｡y Vﾃ B蘯ｭt Nh蘯｣y Nﾃｩm Lao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y l蘯･y ﾄ妥 vﾃ tung lao m蘯｡nh trong ﾄ訴盻］ kinh.

```javascript
function javelinSprintAndThrow(character) {
    const javelinThrowAnimation = new THREE.AnimationClip("JavelinSprintAndThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(javelinThrowAnimation);
}
```

---

N蘯ｿu b蘯｡n mu盻創 ti蘯ｿp t盻･c ho蘯ｷc thﾃｪm cﾃ｡c tﾃｹy ch盻穎h c盻･ th盻・hﾆ｡n, c盻ｩ chia s蘯ｻ v盻嬖 tﾃｴi nhﾃｩ! 醇笨ｨ
Hﾃ｣y ti蘯ｿp t盻･c v盻嬖 cﾃ｡c chuy盻ハ ﾄ黛ｻ冢g th盻・thao m蘯｡nh m蘯ｽ hﾆ｡n n盻ｯa ﾄ黛ｻ・lﾃm nhﾃ｢n v蘯ｭt c盻ｧa b蘯｡n thﾃｪm ph蘯ｧn n盻品 b蘯ｭt:

---

### **Chuy盻ハ ﾄ雪ｻ冢g 571: B蘯ｭt Nh蘯｣y Vﾃ Nﾃｩm Bﾃｳng Qua Ngﾆｰ盻拱 Trong Bﾃｳng R盻・*
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt nh蘯｣y cao vﾃ nﾃｩm bﾃｳng qua ngﾆｰ盻拱 v盻嬖 tay giﾆ｡ lﾃｪn m蘯｡nh m蘯ｽ.

```javascript
function basketballAlleyOop(character) {
    const alleyOopAnimation = new THREE.AnimationClip("BasketballAlleyOop", 2.5, [
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
    character.animations.push(alleyOopAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 572: ﾄ雪ｻ冢g Tﾃ｡c Quay Ngﾆｰ盻拱 ﾄ静｡nh Bﾃｳng Trong Tennis**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c xoay ngﾆｰ盻拱 m蘯｡nh m蘯ｽ vﾃ ﾄ妥｡nh bﾃｳng tennis chﾃｭnh xﾃ｡c.

```javascript
function tennisTopSpin(character) {
    const topSpinAnimation = new THREE.AnimationClip("TennisTopSpin", 2, [
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
    character.animations.push(topSpinAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 573: Ch蘯｡y V盻嬖 ﾄ雪ｻ冢g Tﾃ｡c ﾄ雪ｻ｡ Bﾃｳng Cao**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g ch蘯｡y vﾃ ﾄ柁ｰa tay lﾃｪn cao ﾄ黛ｻ・ﾄ黛ｻ｡ bﾃｳng trong bﾃｳng chuy盻］.

```javascript
function volleyballHighSet(character) {
    const highSetAnimation = new THREE.AnimationClip("VolleyballHighSet", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(highSetAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 574: ﾄ雪ｻ冢g Tﾃ｡c Nﾃｩm R盻・T盻ｫ Xa**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ﾄ黛ｻｩng yﾃｪn vﾃ tung cﾃｺ nﾃｩm r盻・t盻ｫ xa, bi盻ブ th盻・s盻ｱ chﾃｭnh xﾃ｡c.

```javascript
function basketballFreeThrow(character) {
    const freeThrowAnimation = new THREE.AnimationClip("BasketballFreeThrow", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(freeThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 575: ﾄ雪ｻ冢g Tﾃ｡c Phﾃ｡t C蘯ｧu Lﾃｴng Chﾃｭnh Xﾃ｡c**
Thﾃｪm hﾃnh ﾄ黛ｻ冢g phﾃ｡t c蘯ｧu lﾃｴng chﾃｭnh xﾃ｡c v盻嬖 l盻ｱc m蘯｡nh.

```javascript
function badmintonServe(character) {
    const serveAnimation = new THREE.AnimationClip("BadmintonServe", 2, [
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1, 2],
            [0, 0, 0, Math.PI / 4, 0, 0]
        )
    ]);
    character.animations.push(serveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 576: Ch蘯｡y Vﾃ Nﾃｩm Bﾃｳng Lﾃｪn Cao**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y nhanh vﾃ tung bﾃｳng lﾃｪn cao bi盻ブ th盻・s盻ｱ linh ho蘯｡t.

```javascript
function runningThrow(character) {
    const runningThrowAnimation = new THREE.AnimationClip("RunningThrow", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 6, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(runningThrowAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 577: Ch蘯｡y Nhanh Vﾃ Cﾃｺ Phﾃ｡t G蘯ｭy Golf**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c ch蘯｡y vﾃ cﾃｺi ngﾆｰ盻拱 phﾃ｡t bﾃｳng m蘯｡nh trong golf.

```javascript
function golfDrive(character) {
    const driveAnimation = new THREE.AnimationClip("GolfDrive", 2.5, [
        new THREE.KeyframeTrack(
            'character.torso.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 4, 0, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(driveAnimation);
}
```

---

### **Chuy盻ハ ﾄ雪ｻ冢g 578: Nh蘯｣y Vﾃ Tung Cﾃｺ ﾄ雪ｺ･m K蘯ｿt H盻｣p**
Thﾃｪm ﾄ黛ｻ冢g tﾃ｡c b蘯ｭt cao vﾃ tung hai cﾃｺ ﾄ黛ｺ･m nhanh trong khﾃｴng trung.

```javascript
function aerialDoublePunch(character) {
    const doublePunchAnimation = new THREE.AnimationClip("AerialDoublePunch", 2.5, [
        new THREE.KeyframeTrack(
            'character.position',
            [0, 1.25, 2.5],
            [0, 0, 0, 0, 4, 0, 0, 5, 0]
        ),
        new THREE.KeyframeTrack(
            'character.arm.rotation',
            [0, 1.25, 2.5],
            [0, 0, 0, Math.PI / 3, 0, 0]
        )
    ]);
    character.animations.push(doublePunchAnimation);
}
```
