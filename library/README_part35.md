# Animation Library - Part 35

This directory contains the animation library extracted from `part_35_corrected.js`, organized into three main categories:

## Files Overview

### 1. `movement_animations_part35.js`
Contains basic movement animations (chuyển động 88-100):
- `runLeaningForward` - Chạy Về Tư Thế Nghiêng
- `longJumpForward` - Nhảy Về Phía Trước
- `deepBreath` - Đứng Thẳng Và Thở Sâu
- `bowAndRotateShoulders` - Cúi Người Và Xoay Vai
- `jumpAndLandStrongly` - Nhảy Và Tạo Tư Thế Vững Vàng
- `standConfidently` - Đứng Nghiêm Và Đặt Tay Lên Hông
- `bendAndPick` - Cúi Người Và Cầm Vật
- `roundKick` - Tung Cú Đấm Vòng
- `combatStance` - Đứng Thẳng Về Tư Thế Chiến Đấu
- `jumpAndSpinBack` - Nhảy Và Xoay Lưng
- `crouchWithFocus` - Cúi Người Về Tư Thế Cẩn Trọng
- `standCalmly` - Đứng Yên Về Tay Đến Sau Lưng
- `arcThrow` - Ném Vòng Cung

### 2. `combat_animations_part35.js`
Contains combat and action animations (chuyển động 101-120):
- `twistBodyAndShakeHand` - Vặn Mình Và Lắc Tay
- `stepSideAndStop` - Bước Ngang Và Dừng
- `spinMultipleJump` - Nhảy Xoay Tròn
- `slowTurnBack` - Xoay Lưng Chậm Rãi
- `pointForward` - Đứng Và Chỉ Tay
- `bendFocus` - Gập Người Về Tư Thế Tập Trung
- `slapSurface` - Đập Tay Lên Bề Mặt
- `jumpLandPush` - Nhảy Và Chống Tay Xuống
- `turnCasually` - Quay Người Về Tư Thế Thoải Mái
- `liftAndRaiseObject` - Nhấc Vật Và Chỉa Lên Cao
- `runAndHalt` - Chạy Và Đột Ngột Dừng
- `balanceOneLegConfidently` - Đứng Môi Chân Về Tư Thế Tự Tin
- `turnAndBow` - Quay Người Rồi Cúi Chào
- `stepBackAndShrug` - Lùi Lại Và Nhún Vai
- `doubleFistPunch` - Tung Nắm Đấm Kép
- `tossObjectUp` - Tung Vật Thể Lên Cao
- `sideKickCombo` - Đá Liên Hoàn Ngang
- `raiseArmsAboveHead` - Giơ Hai Tay Lên Đầu
- `tiltHeadCuriously` - Nghiêng Đầu Tò Mò
- `jumpAndSpiralPunch` - Nhảy Và Tung Cú Đấm Xoáy

### 3. `advanced_animations_part35.js`
Contains advanced and special animations (chuyển động 121-133):
- `spinAndGroundStrike` - Quay Nhanh Và Đánh Đất
- `retreatAndBlock` - Lùi Bước Và Đánh Chắn
- `jumpWithGuard` - Nhảy Về Động Tác Phòng Thủ
- `standAndRaiseHand` - Đứng Thẳng Về Tay Giơ Cao
- `bendAndTouchGround` - Gập Người Chạm Đất
- `spinAndToss` - Quay Người Kết Hợp Tung Vật
- `dashWithSwingArms` - Chạy Về Cánh Tay Tung
- `standAndShakeHead` - Đứng Thẳng Và Lắc Đầu
- `jumpAndKick` - Bật Nhảy Và Tung Cú Đấm
- `sprintAndTurnHead` - Chạy Và Đột Ngột Quay Đầu
- `standAndNod` - Đứng Thẳng Và Gật Đầu
- `hopWithSwingingArms` - Nhảy Nhỏ Về Động Tác Lắc Tay
- `spinAndExtendArm` - Quay Người Và Chỉa Tay

### 4. `components_index_part35.js`
Main index file that imports all animation libraries and provides:
- Individual animation collections by category
- Combined animation collection
- Utility functions for applying animations
- Category-based animation management

## Usage Examples

### Importing Individual Categories
```javascript
// Import only movement animations
import { movementAnimations } from './components_index_part35.js';

// Import only combat animations
import { combatAnimations } from './components_index_part35.js';

// Import only advanced animations
import { advancedAnimations } from './components_index_part35.js';
```

### Using Individual Animations
```javascript
import { applyAnimation } from './components_index_part35.js';

// Apply a specific animation
applyAnimation(character, 'runLeaningForward', 'movement');
applyAnimation(character, 'doubleFistPunch', 'combat');
applyAnimation(character, 'spinAndGroundStrike', 'advanced');
```

### Applying Category Animations
```javascript
import { applyCategoryAnimations } from './components_index_part35.js';

// Apply all movement animations
applyCategoryAnimations(character, 'movement');

// Apply all combat animations
applyCategoryAnimations(character, 'combat');

// Apply all advanced animations
applyCategoryAnimations(character, 'advanced');
```

### Getting Animation Information
```javascript
import { getAnimationsByCategory, getAllAnimationNames } from './components_index_part35.js';

// Get all movement animation names
const movementAnims = getAnimationsByCategory('movement');

// Get all animation names
const allAnims = getAllAnimationNames();
```

## Animation Structure

Each animation function follows this pattern:
```javascript
function animationName(character) {
    const animationClip = new THREE.AnimationClip("AnimationName", duration, [
        new THREE.KeyframeTrack(
            'character.part.property',
            [timeKeys],
            [values]
        ),
        // Additional keyframe tracks...
    ]);
    character.animations.push(animationClip);
}
```

## Categories Summary

- **Movement**: Basic locomotion and posture animations
- **Combat**: Fighting and action-oriented animations
- **Advanced**: Complex and specialized movement sequences

Total animations: 46 (13 movement + 20 combat + 13 advanced)
