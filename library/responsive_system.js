// Three.js Responsive System Library
// Window resizing, responsive controls, and adaptive systems

import * as THREE from 'three';

export function createResponsiveSystem(camera, renderer) {
    // Handle window resizing and maintain aspect ratio
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onResize);
    
    // Add responsive camera controls
    function updateCameraForDevice() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        
        if (isMobile) {
            camera.position.set(0, 5, 10);
            camera.fov = 75;
        } else if (isTablet) {
            camera.position.set(0, 3, 8);
            camera.fov = 60;
        } else {
            camera.position.set(0, 0, 5);
            camera.fov = 50;
        }
        
        camera.updateProjectionMatrix();
    }
    
    // Initial setup
    updateCameraForDevice();
    window.addEventListener('resize', updateCameraForDevice);
    
    return {
        onResize,
        updateCameraForDevice,
        isMobile: () => window.innerWidth <= 768,
        isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024
    };
}

export function createTouchControls(camera, renderer, model) {
    // Touch controls for mobile devices
    const touchControls = {
        touchStartX: 0,
        touchStartY: 0,
        isTouching: false
    };
    
    function handleTouchStart(event) {
        touchControls.touchStartX = event.touches[0].clientX;
        touchControls.touchStartY = event.touches[0].clientY;
        touchControls.isTouching = true;
    }
    
    function handleTouchMove(event) {
        if (!touchControls.isTouching) return;
        
        const deltaX = event.touches[0].clientX - touchControls.touchStartX;
        const deltaY = event.touches[0].clientY - touchControls.touchStartY;
        
        // Rotate model based on touch movement
        model.rotation.y += deltaX * 0.01;
        model.rotation.x += deltaY * 0.01;
        
        touchControls.touchStartX = event.touches[0].clientX;
        touchControls.touchStartY = event.touches[0].clientY;
    }
    
    function handleTouchEnd() {
        touchControls.isTouching = false;
    }
    
    // Add touch event listeners
    renderer.domElement.addEventListener('touchstart', handleTouchStart);
    renderer.domElement.addEventListener('touchmove', handleTouchMove);
    renderer.domElement.addEventListener('touchend', handleTouchEnd);
    
    return touchControls;
}

export function createAdaptiveUI() {
    // Create adaptive UI based on device and screen size
    const uiElements = {
        controls: null,
        info: null,
        buttons: []
    };
    
    function createMobileControls() {
        const controlsDiv = document.createElement('div');
        controlsDiv.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 1000;
        `;
        
        // Create touch buttons
        const buttons = ['rotate', 'scale', 'reset'];
        buttons.forEach(buttonType => {
            const button = document.createElement('button');
            button.textContent = buttonType.charAt(0).toUpperCase() + buttonType.slice(1);
            button.style.cssText = `
                padding: 15px 20px;
                background: rgba(0, 123, 255, 0.8);
                color: white;
                border: none;
                border-radius: 25px;
                font-size: 14px;
                cursor: pointer;
            `;
            
            button.addEventListener('click', () => {
                handleMobileControl(buttonType);
            });
            
            controlsDiv.appendChild(button);
            uiElements.buttons.push(button);
        });
        
        document.body.appendChild(controlsDiv);
        uiElements.controls = controlsDiv;
    }
    
    function createDesktopControls() {
        const infoDiv = document.createElement('div');
        infoDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            z-index: 1000;
        `;
        infoDiv.innerHTML = `
            <div>Controls:</div>
            <div>• Mouse: Orbit</div>
            <div>• Keyboard: Arrow Keys</div>
            <div>• Scroll: Zoom</div>
        `;
        
        document.body.appendChild(infoDiv);
        uiElements.info = infoDiv;
    }
    
    function handleMobileControl(type) {
        // Emit custom events for mobile controls
        const event = new CustomEvent(`mobileControl_${type}`);
        document.dispatchEvent(event);
    }
    
    function updateUI() {
        const isMobile = window.innerWidth <= 768;
        
        // Remove existing UI
        if (uiElements.controls) {
            uiElements.controls.remove();
            uiElements.controls = null;
        }
        if (uiElements.info) {
            uiElements.info.remove();
            uiElements.info = null;
        }
        
        // Create appropriate UI
        if (isMobile) {
            createMobileControls();
        } else {
            createDesktopControls();
        }
    }
    
    // Initial setup
    updateUI();
    window.addEventListener('resize', updateUI);
    
    return {
        updateUI,
        getElements: () => uiElements
    };
}

export function createPerformanceOptimizer() {
    // Performance optimization for different devices
    const performanceSettings = {
        pixelRatio: 1,
        shadowMapSize: 1024,
        antialias: true,
        renderLimit: 60
    };
    
    function detectDevicePerformance() {
        const isMobile = window.innerWidth <= 768;
        const isLowEnd = navigator.hardwareConcurrency <= 2;
        
        if (isMobile || isLowEnd) {
            performanceSettings.pixelRatio = Math.min(window.devicePixelRatio, 1.5);
            performanceSettings.shadowMapSize = 512;
            performanceSettings.antialias = false;
            performanceSettings.renderLimit = 30;
        } else {
            performanceSettings.pixelRatio = window.devicePixelRatio;
            performanceSettings.shadowMapSize = 2048;
            performanceSettings.antialias = true;
            performanceSettings.renderLimit = 60;
        }
        
        return performanceSettings;
    }
    
    function optimizeRenderer(renderer) {
        const settings = detectDevicePerformance();
        
        renderer.setPixelRatio(settings.pixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.setSize(settings.shadowMapSize, settings.shadowMapSize);
        renderer.antialias = settings.antialias;
        
        return settings;
    }
    
    function createFrameLimiter() {
        let lastFrameTime = 0;
        const targetFPS = detectDevicePerformance().renderLimit;
        const frameInterval = 1000 / targetFPS;
        
        function shouldRender() {
            const now = performance.now();
            const delta = now - lastFrameTime;
            
            if (delta > frameInterval) {
                lastFrameTime = now - (delta % frameInterval);
                return true;
            }
            return false;
        }
        
        return shouldRender;
    }
    
    return {
        detectDevicePerformance,
        optimizeRenderer,
        createFrameLimiter,
        getSettings: () => performanceSettings
    };
}
