/**
 * Clothing User Interactions Library
 * Contains user interaction and event handling for 3D clothing
 */

class ClothingUserInteractions {
    constructor() {
        this.eventListeners = new Map();
        this.interactionStates = {
            mouseTracking: false,
            keyboardControl: false,
            touchControl: false,
            audioReactive: false
        };
        this.model = null;
    }

    // Set the model for interactions
    setModel(model) {
        this.model = model;
    }

    // Update clothing based on speed
    updateClothingBySpeed(model, speed) {
        const hue = Math.min(speed / 10, 1);
        model.material.color.setHSL(hue, 1, 0.5);
    }

    // Trigger outfit change based on events
    triggerOutfitChange(model, event) {
        if (event.type === 'jump') {
            model.material.color.set(0xFF4500);
        } else if (event.type === 'run') {
            model.material.color.set(0x32CD32);
        }
    }

    // Enable mouse movement interaction
    enableMouseInteraction(model) {
        if (this.interactionStates.mouseTracking) return;
        
        this.interactionStates.mouseTracking = true;
        
        const mouseMoveHandler = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            model.material.color.setRGB(Math.abs(mouseX), Math.abs(mouseY), 0.5);
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        this.eventListeners.set('mousemove', mouseMoveHandler);
    }

    // Enable mouse interaction with emissive effect
    enableMouseEmissiveInteraction(model) {
        if (this.interactionStates.mouseTracking) return;
        
        this.interactionStates.mouseTracking = true;
        
        const mouseMoveHandler = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            model.material.emissive.setRGB(Math.abs(mouseX), Math.abs(mouseY), 0.5);
            model.material.emissiveIntensity = 0.7;
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        this.eventListeners.set('mousemoveEmissive', mouseMoveHandler);
    }

    // Disable mouse interaction
    disableMouseInteraction() {
        const mouseHandler = this.eventListeners.get('mousemove');
        if (mouseHandler) {
            window.removeEventListener('mousemove', mouseHandler);
            this.eventListeners.delete('mousemove');
        }
        
        const mouseEmissiveHandler = this.eventListeners.get('mousemoveEmissive');
        if (mouseEmissiveHandler) {
            window.removeEventListener('mousemove', mouseEmissiveHandler);
            this.eventListeners.delete('mousemoveEmissive');
        }
        
        this.interactionStates.mouseTracking = false;
    }

    // Enable keyboard controls
    enableKeyboardControls(model) {
        if (this.interactionStates.keyboardControl) return;
        
        this.interactionStates.keyboardControl = true;
        
        const keyHandler = (event) => {
            switch(event.key.toLowerCase()) {
                case '1':
                    model.material.color.set(0xFF0000);
                    break;
                case '2':
                    model.material.color.set(0x00FF00);
                    break;
                case '3':
                    model.material.color.set(0x0000FF);
                    break;
                case '4':
                    model.material.color.set(0xFFFF00);
                    break;
                case '5':
                    model.material.color.set(0xFF00FF);
                    break;
                case '6':
                    model.material.color.set(0x00FFFF);
                    break;
                case 'r':
                    model.material.color.set(0xFFFFFF);
                    break;
                case 'g':
                    model.material.emissive.set(0x00FF00);
                    model.material.emissiveIntensity = 0.5;
                    break;
                case 'b':
                    model.material.emissive.set(0x0000FF);
                    model.material.emissiveIntensity = 0.5;
                    break;
                case '+':
                case '=':
                    model.material.emissiveIntensity = Math.min(model.material.emissiveIntensity + 0.1, 1);
                    break;
                case '-':
                case '_':
                    model.material.emissiveIntensity = Math.max(model.material.emissiveIntensity - 0.1, 0);
                    break;
            }
        };

        window.addEventListener('keydown', keyHandler);
        this.eventListeners.set('keydown', keyHandler);
    }

    // Disable keyboard controls
    disableKeyboardControls() {
        const keyHandler = this.eventListeners.get('keydown');
        if (keyHandler) {
            window.removeEventListener('keydown', keyHandler);
            this.eventListeners.delete('keydown');
        }
        this.interactionStates.keyboardControl = false;
    }

    // Enable touch controls for mobile
    enableTouchControls(model) {
        if (this.interactionStates.touchControl) return;
        
        this.interactionStates.touchControl = true;
        
        const touchHandler = (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const touchX = (touch.clientX / window.innerWidth) * 2 - 1;
                const touchY = -(touch.clientY / window.innerHeight) * 2 + 1;

                model.material.color.setRGB(Math.abs(touchX), Math.abs(touchY), 0.5);
            }
        };

        window.addEventListener('touchmove', touchHandler);
        this.eventListeners.set('touchmove', touchHandler);
    }

    // Disable touch controls
    disableTouchControls() {
        const touchHandler = this.eventListeners.get('touchmove');
        if (touchHandler) {
            window.removeEventListener('touchmove', touchHandler);
            this.eventListeners.delete('touchmove');
        }
        this.interactionStates.touchControl = false;
    }

    // Sync clothing with audio
    syncClothingWithAudio(model, analyser) {
        if (this.interactionStates.audioReactive) return;
        
        this.interactionStates.audioReactive = true;
        
        const audioHandler = () => {
            if (!this.interactionStates.audioReactive) return;
            
            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(dataArray);

            const averageVolume = dataArray.reduce((a, b) => a + b) / dataArray.length;
            model.material.color.setHSL(averageVolume / 255, 1, 0.5);
            
            requestAnimationFrame(audioHandler);
        };
        
        audioHandler();
    }

    // Sync clothing with music intensity
    syncClothingWithMusic(model, analyser) {
        if (this.interactionStates.audioReactive) return;
        
        this.interactionStates.audioReactive = true;
        
        const musicHandler = () => {
            if (!this.interactionStates.audioReactive) return;
            
            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(dataArray);

            const intensity = dataArray.reduce((a, b) => a + b) / dataArray.length;
            model.material.emissiveIntensity = intensity / 255;
            
            requestAnimationFrame(musicHandler);
        };
        
        musicHandler();
    }

    // Disable audio reactive
    disableAudioReactive() {
        this.interactionStates.audioReactive = false;
    }

    // Set clothing based on mood
    setClothingByMood(model, mood) {
        switch(mood.toLowerCase()) {
            case 'happy':
            case 'vui':
                model.material.color.set(0xFFFF00);
                model.material.emissiveIntensity = 0.5;
                break;
            case 'sad':
            case 'buồn':
                model.material.color.set(0x1E90FF);
                model.material.roughness = 0.8;
                break;
            case 'angry':
            case 'giận dữ':
                model.material.color.set(0xFF0000);
                model.material.emissiveIntensity = 0.8;
                break;
            case 'calm':
            case 'yên bình':
                model.material.color.set(0x90EE90);
                model.material.roughness = 0.4;
                break;
            case 'excited':
            case 'hào hứng':
                model.material.color.set(0xFF69B4);
                model.material.emissiveIntensity = 0.6;
                break;
        }
    }

    // Create interactive color picker
    createColorPicker(model, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = '#ffffff';
        
        colorInput.addEventListener('change', (event) => {
            const color = new THREE.Color(event.target.value);
            model.material.color = color;
        });

        container.appendChild(colorInput);
    }

    // Create intensity slider
    createIntensitySlider(model, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '1';
        slider.step = '0.1';
        slider.value = '0.5';
        
        slider.addEventListener('input', (event) => {
            model.material.emissiveIntensity = parseFloat(event.target.value);
        });

        container.appendChild(slider);
    }

    // Create preset buttons
    createPresetButtons(model, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const presets = [
            { name: 'Beach', color: 0xFFD700 },
            { name: 'Ocean', color: 0x1E90FF },
            { name: 'Forest', color: 0x228B22 },
            { name: 'Space', color: 0x0000FF },
            { name: 'Sunset', color: 0xFF6347 }
        ];

        presets.forEach(preset => {
            const button = document.createElement('button');
            button.textContent = preset.name;
            button.style.margin = '5px';
            
            button.addEventListener('click', () => {
                model.material.color.set(preset.color);
            });

            container.appendChild(button);
        });
    }

    // Cleanup all event listeners
    cleanup() {
        this.disableMouseInteraction();
        this.disableKeyboardControls();
        this.disableTouchControls();
        this.disableAudioReactive();
        this.eventListeners.clear();
        
        Object.keys(this.interactionStates).forEach(key => {
            this.interactionStates[key] = false;
        });
    }

    // Get interaction states
    getInteractionStates() {
        return { ...this.interactionStates };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClothingUserInteractions;
}
