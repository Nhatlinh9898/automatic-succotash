/**
 * Components Index - Part 33
 * Master index file for all Part 33 components
 */

// Import body components
import {
    addFullLaserBody,
    addWaveLaserSoftBody,
    addMetalLaserRadiantBody,
    addElegantLaceBody,
    addBrightLaserBody,
    addMixedMetalLaserBody
} from './body_components_part33.js';

// Import basic animation components
import {
    walkStraight,
    bowRespectfully,
    punchStrong,
    jumpGracefully,
    stretchRelax,
    turnAround,
    runFast,
    flySmoothly
} from './animation_basic_part33.js';

// Import advanced animation components
import {
    throwPowerfully,
    pushForward,
    sitRelaxedly,
    runAndJump,
    bendCatch,
    jumpAndSpin,
    nodHead,
    kickStrong
} from './animation_advanced_part33.js';

// Import expressive animation components
import {
    rotateShoulders,
    waveHand,
    shrugShoulders,
    shakeHead,
    leanAndObserve,
    turnHead,
    raiseHand,
    forcePush,
    stepBack
} from './animation_expressive_part33.js';

// Import special animation components
import {
    waveBothHands,
    slowStepBack,
    spinFullCircle,
    snapFingers,
    kneelDown,
    raiseArmsFeel,
    tapFoot,
    sprintForward,
    jumpBack,
    slamHands
} from './animation_special_part33.js';

// Import combat animation components
import {
    kneelAndLookUp,
    jumpAndPunch,
    quickDuck,
    strikeOpponent,
    glideFreely,
    longLeap
} from './animation_combat_part33.js';

// Body Components Export
export const BodyComponents = {
    // Laser and Special Body Types (Functions 1048-1053)
    addFullLaserBody,           // 1048: Tạo Thân Nam Vị Cơ Thể Laser Phát Sáng
    addWaveLaserSoftBody,        // 1049: Tạo Thân Nữ Vị Cơ Thể Laser Gần Sóng
    addMetalLaserRadiantBody,    // 1050: Tạo Thân Nam Vị Cơ Thể Kim Loại Phát Sáng Laser
    addElegantLaceBody,          // 1051: Tạo Thân Nữ Vị Cơ Thể Ren Dài
    addBrightLaserBody,          // 1052: Tạo Thân Nam Vị Cơ Thể Laser Đậm Sáng Nổi Bật
    addMixedMetalLaserBody       // 1053: Tạo Thân Nữ Vị Cơ Thể Kết Hợp Laser Và Kim Loại
};

// Animation Components Export
export const AnimationComponents = {
    // Basic Movements (Functions 1-8)
    walkStraight,               // 1: Đi Bộ Dạng Thường
    bowRespectfully,            // 2: Cúi Người Lễ Phép
    punchStrong,                // 3: Đấm Tay Cơ Bản
    jumpGracefully,             // 4: Nhảy Nhẹ Nhàng
    stretchRelax,               // 5: Vươn Vai Thoải Mái
    turnAround,                 // 6: Quay Người 180 Độ
    runFast,                    // 7: Chạy Tăng Tốc
    flySmoothly,                // 8: Bay Nhẹ Nhàng
    
    // Advanced Movements (Functions 9-16)
    throwPowerfully,            // 9: Ném Mạnh
    pushForward,                // 10: Đẩy Người
    sitRelaxedly,               // 11: Ngồi Thư Giãn
    runAndJump,                 // 12: Chạy Và Nhảy Cao
    bendCatch,                  // 13: Cúi Người Và Đón Bóng
    jumpAndSpin,                // 14: Nhảy Và Xoay Người
    nodHead,                    // 15: Gật Đầu Nhẹ
    kickStrong,                 // 16: Đá Mạnh
    
    // Expressive Movements (Functions 17-25)
    rotateShoulders,            // 17: Xoay Vai Thoải Mái
    waveHand,                   // 18: Vẫy Tay Thân Thiện
    shrugShoulders,             // 19: Nhún Vai
    shakeHead,                  // 20: Lắc Đầu Từ Chối
    leanAndObserve,             // 21: Nghiêng Người Quan Sát
    turnHead,                   // 22: Quay Nhẹ Đầu
    raiseHand,                  // 23: Giơ Tay Cao
    forcePush,                  // 24: Đẩy Lực Mạnh
    stepBack,                   // 25: Lùi Bước Nhẹ Nhàng
    
    // Special Movements (Functions 26-35)
    waveBothHands,              // 26: Vẫy Cả Hai Tay
    slowStepBack,               // 27: Bước Lùi Chậm Rãi
    spinFullCircle,             // 28: Quay Vòng 360 Độ
    snapFingers,                // 29: Búng Tay Nhẹ Nhàng
    kneelDown,                  // 30: Quỳ Gối
    raiseArmsFeel,              // 31: Giơ Tay Đến Gió
    tapFoot,                    // 32: Gõ Chân Theo Nhịp
    sprintForward,              // 33: Tăng Tốc Về Phía Trước
    jumpBack,                   // 34: Nhảy Lùi
    slamHands,                  // 35: Đập Mạnh Bằng Tay
    
    // Combat Movements (Functions 36-41)
    kneelAndLookUp,             // 36: Quỳ Gối Và Ngẩng Đầu
    jumpAndPunch,               // 37: Nhảy Và Đấm
    quickDuck,                  // 38: Cúi Người Nhanh
    strikeOpponent,             // 39: Đánh Mạnh Đẩy Lui Đối Thủ
    glideFreely,                // 40: Bay Lượn Tự Do
    longLeap                    // 41: Cú Nhảy Xa
};

// Export all components as default
export default {
    BodyComponents,
    AnimationComponents
};

// Utility function to get all available components
export function getAllComponents() {
    return {
        body: BodyComponents,
        animations: AnimationComponents
    };
}

// Utility function to get component by name
export function getComponent(category, name) {
    if (category === 'body') {
        return BodyComponents[name];
    } else if (category === 'animations') {
        return AnimationComponents[name];
    }
    return null;
}

// Utility function to list all component names
export function listComponentNames() {
    return {
        bodyComponents: Object.keys(BodyComponents),
        animationComponents: Object.keys(AnimationComponents)
    };
}
