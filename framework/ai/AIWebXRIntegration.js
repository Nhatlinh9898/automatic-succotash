/**
 * AI WebXR Integration - Enhanced VR/AR Experience with AI
 * Integrates with WebXR Support for intelligent immersive interactions
 */

import * as THREE from 'three';

/**
 * AI Gesture Recognition System
 */
class AIGestureRecognition {
    constructor(aiService) {
        this.aiService = aiService;
        this.gesturePatterns = new Map();
        this.gestureHistory = [];
        this.isRecording = false;
        this.currentGesture = [];
        
        this.setupGesturePatterns();
    }

    /**
     * Setup predefined gesture patterns
     */
    setupGesturePatterns() {
        this.gesturePatterns.set('swipe_left', {
            description: 'Swipe hand left',
            pattern: 'decreasing_x',
            confidence: 0.8,
            action: 'navigate_previous'
        });

        this.gesturePatterns.set('swipe_right', {
            description: 'Swipe hand right',
            pattern: 'increasing_x',
            confidence: 0.8,
            action: 'navigate_next'
        });

        this.gesturePatterns.set('swipe_up', {
            description: 'Swipe hand up',
            pattern: 'increasing_y',
            confidence: 0.8,
            action: 'scroll_up'
        });

        this.gesturePatterns.set('swipe_down', {
            description: 'Swipe hand down',
            pattern: 'decreasing_y',
            confidence: 0.8,
            action: 'scroll_down'
        });

        this.gesturePatterns.set('circle', {
            description: 'Draw circle in air',
            pattern: 'circular',
            confidence: 0.7,
            action: 'rotate_object'
        });

        this.gesturePatterns.set('pinch', {
            description: 'Pinch fingers together',
            pattern: 'pinch',
            confidence: 0.9,
            action: 'select_object'
        });

        this.gesturePatterns.set('grab', {
            description: 'Grab motion',
            pattern: 'grab',
            confidence: 0.8,
            action: 'grab_object'
        });

        this.gesturePatterns.set('point', {
            description: 'Point at object',
            pattern: 'point',
            confidence: 0.9,
            action: 'point_at'
        });
    }

    /**
     * Start gesture recording
     */
    startRecording() {
        this.isRecording = true;
        this.currentGesture = [];
        console.log('Gesture recording started');
    }

    /**
     * Stop gesture recording and analyze
     */
    async stopRecording() {
        this.isRecording = false;
        
        if (this.currentGesture.length < 5) {
            return null;
        }

        const gesture = await this.analyzeGesture(this.currentGesture);
        this.gestureHistory.push({
            gesture,
            timestamp: Date.now(),
            data: this.currentGesture
        });

        this.currentGesture = [];
        return gesture;
    }

    /**
     * Add position data to current gesture
     */
    addPosition(position, timestamp = Date.now()) {
        if (!this.isRecording) return;

        this.currentGesture.push({
            x: position.x,
            y: position.y,
            z: position.z,
            timestamp
        });
    }

    /**
     * Analyze gesture using AI
     */
    async analyzeGesture(gestureData) {
        const prompt = `
        Analyze this 3D gesture data and identify the gesture type:
        
        Gesture Data: ${JSON.stringify(gestureData)}
        
        Available gesture types:
        - swipe_left: Horizontal movement to the left
        - swipe_right: Horizontal movement to the right
        - swipe_up: Vertical movement upward
        - swipe_down: Vertical movement downward
        - circle: Circular motion
        - pinch: Converging motion
        - grab: Closing motion
        - point: Stable pointing motion
        
        Provide JSON response:
        {
            "gesture": "gesture_type",
            "confidence": "0.0-1.0",
            "description": "Human readable description",
            "action": "suggested_action",
            "parameters": {
                "speed": "slow|medium|fast",
                "amplitude": "small|medium|large",
                "duration": "milliseconds"
            }
        }
        
        Focus on identifying the most likely gesture with confidence score.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.warn('AI gesture analysis failed, using pattern matching:', error);
            return this.analyzeGestureWithPatterns(gestureData);
        }
    }

    /**
     * Fallback gesture analysis using patterns
     */
    analyzeGestureWithPatterns(gestureData) {
        if (gestureData.length < 2) {
            return {
                gesture: 'unknown',
                confidence: 0.0,
                description: 'Insufficient data',
                action: 'none',
                parameters: {}
            };
        }

        const start = gestureData[0];
        const end = gestureData[gestureData.length - 1];
        
        const deltaX = end.x - start.x;
        const deltaY = end.y - start.y;
        const deltaZ = end.z - start.z;
        
        let gesture = 'unknown';
        let confidence = 0.5;
        let description = 'Unknown gesture';
        let action = 'none';

        // Simple pattern matching
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > Math.abs(deltaZ)) {
            if (deltaX > 0) {
                gesture = 'swipe_right';
                description = 'Swipe right';
                action = 'navigate_next';
            } else {
                gesture = 'swipe_left';
                description = 'Swipe left';
                action = 'navigate_previous';
            }
            confidence = 0.7;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > Math.abs(deltaZ)) {
            if (deltaY > 0) {
                gesture = 'swipe_up';
                description = 'Swipe up';
                action = 'scroll_up';
            } else {
                gesture = 'swipe_down';
                description = 'Swipe down';
                action = 'scroll_down';
            }
            confidence = 0.7;
        }

        return {
            gesture,
            confidence,
            description,
            action,
            parameters: {
                speed: 'medium',
                amplitude: 'medium',
                duration: gestureData[gestureData.length - 1].timestamp - gestureData[0].timestamp
            }
        };
    }

    /**
     * Get gesture history
     */
    getGestureHistory(limit = 10) {
        return this.gestureHistory.slice(-limit);
    }

    /**
     * Clear gesture history
     */
    clearHistory() {
        this.gestureHistory = [];
    }
}

/**
 * AI Voice Command System
 */
class AIVoiceCommands {
    constructor(aiService) {
        this.aiService = aiService;
        this.commandPatterns = new Map();
        this.commandHistory = [];
        this.isListening = false;
        
        this.setupCommandPatterns();
    }

    /**
     * Setup voice command patterns
     */
    setupCommandPatterns() {
        this.commandPatterns.set('create_object', {
            keywords: ['create', 'make', 'add', 'spawn'],
            parameters: ['object_type', 'position', 'color', 'size'],
            action: 'create_object'
        });

        this.commandPatterns.set('modify_object', {
            keywords: ['change', 'modify', 'transform', 'adjust'],
            parameters: ['object', 'property', 'value'],
            action: 'modify_object'
        });

        this.commandPatterns.set('delete_object', {
            keywords: ['delete', 'remove', 'destroy', 'clear'],
            parameters: ['object'],
            action: 'delete_object'
        });

        this.commandPatterns.set('navigate', {
            keywords: ['go', 'move', 'navigate', 'teleport'],
            parameters: ['location', 'direction'],
            action: 'navigate'
        });

        this.commandPatterns.set('lighting', {
            keywords: ['light', 'brightness', 'shadow', 'illuminate'],
            parameters: ['intensity', 'color', 'type'],
            action: 'adjust_lighting'
        });

        this.commandPatterns.set('camera', {
            keywords: ['camera', 'view', 'perspective', 'angle'],
            parameters: ['position', 'target', 'fov'],
            action: 'adjust_camera'
        });

        this.commandPatterns.set('scene', {
            keywords: ['scene', 'environment', 'atmosphere', 'mood'],
            parameters: ['type', 'style', 'theme'],
            action: 'change_scene'
        });
    }

    /**
     * Process voice command using AI
     */
    async processCommand(voiceText) {
        const prompt = `
        Analyze this voice command and extract the intended action:
        
        Command: "${voiceText}"
        
        Available command types:
        - create_object: Create new 3D objects
        - modify_object: Modify existing objects
        - delete_object: Remove objects
        - navigate: Move camera or user
        - lighting: Adjust lighting
        - camera: Adjust camera settings
        - scene: Change scene properties
        
        Provide JSON response:
        {
            "command": "command_type",
            "confidence": "0.0-1.0",
            "parameters": {
                "object_type": "type of object",
                "position": {"x": 0, "y": 0, "z": 0},
                "color": "#hex_color",
                "size": "size_value",
                "property": "property_name",
                "value": "property_value",
                "location": "location_description",
                "intensity": "brightness_value",
                "type": "light_type",
                "style": "scene_style"
            },
            "description": "Human readable description",
            "fallback": "Alternative interpretation if confidence is low"
        }
        
        Extract as much relevant information as possible from the command.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            const result = JSON.parse(response);
            
            this.commandHistory.push({
                command: voiceText,
                interpretation: result,
                timestamp: Date.now()
            });

            return result;
        } catch (error) {
            console.warn('AI voice command processing failed, using pattern matching:', error);
            return this.processCommandWithPatterns(voiceText);
        }
    }

    /**
     * Fallback command processing using patterns
     */
    processCommandWithPatterns(voiceText) {
        const text = voiceText.toLowerCase();
        
        for (const [commandType, pattern] of this.commandPatterns) {
            for (const keyword of pattern.keywords) {
                if (text.includes(keyword)) {
                    return {
                        command: commandType,
                        confidence: 0.6,
                        parameters: this.extractParameters(text, pattern.parameters),
                        description: `Detected ${commandType} command`,
                        fallback: null
                    };
                }
            }
        }

        return {
            command: 'unknown',
            confidence: 0.0,
            parameters: {},
            description: 'Unknown command',
            fallback: 'Please try again with clearer instructions'
        };
    }

    /**
     * Extract parameters from text
     */
    extractParameters(text, parameterTypes) {
        const parameters = {};
        
        parameterTypes.forEach(param => {
            switch (param) {
                case 'object_type':
                    if (text.includes('cube')) parameters.object_type = 'cube';
                    else if (text.includes('sphere')) parameters.object_type = 'sphere';
                    else if (text.includes('cylinder')) parameters.object_type = 'cylinder';
                    else if (text.includes('tree')) parameters.object_type = 'tree';
                    else if (text.includes('house')) parameters.object_type = 'house';
                    break;
                    
                case 'color':
                    const colorMatch = text.match(/(red|blue|green|yellow|black|white|gray|orange|purple)/);
                    if (colorMatch) {
                        const colorMap = {
                            red: '#FF0000',
                            blue: '#0000FF',
                            green: '#00FF00',
                            yellow: '#FFFF00',
                            black: '#000000',
                            white: '#FFFFFF',
                            gray: '#808080',
                            orange: '#FFA500',
                            purple: '#800080'
                        };
                        parameters.color = colorMap[colorMatch[1]];
                    }
                    break;
                    
                case 'size':
                    if (text.includes('small')) parameters.size = 'small';
                    else if (text.includes('large') || text.includes('big')) parameters.size = 'large';
                    else if (text.includes('medium')) parameters.size = 'medium';
                    break;
            }
        });

        return parameters;
    }

    /**
     * Start voice listening
     */
    startListening() {
        this.isListening = true;
        console.log('Voice command listening started');
    }

    /**
     * Stop voice listening
     */
    stopListening() {
        this.isListening = false;
        console.log('Voice command listening stopped');
    }

    /**
     * Get command history
     */
    getCommandHistory(limit = 10) {
        return this.commandHistory.slice(-limit);
    }

    /**
     * Clear command history
     */
    clearHistory() {
        this.commandHistory = [];
    }
}

/**
 * AI WebXR Manager
 */
class AIWebXRManager {
    constructor(framework, aiService) {
        this.framework = framework;
        this.aiService = aiService;
        this.gestureRecognition = new AIGestureRecognition(aiService);
        this.voiceCommands = new AIVoiceCommands(aiService);
        
        this.isVRActive = false;
        this.isARActive = false;
        this.xrSession = null;
        this.xrMode = 'none';
        
        this.interactionHistory = [];
        this.userPreferences = new Map();
        
        this.setupEventListeners();
    }

    /**
     * Setup event listeners for WebXR events
     */
    setupEventListeners() {
        // Listen for WebXR session events
        if (this.framework.getSystem('WebXR')) {
            const webxrSystem = this.framework.getSystem('WebXR');
            
            webxrSystem.on('sessionStart', (session) => {
                this.onXRSessionStart(session);
            });
            
            webxrSystem.on('sessionEnd', () => {
                this.onXRSessionEnd();
            });
        }
    }

    /**
     * Initialize WebXR with AI enhancements
     */
    async initializeAIWebXR() {
        try {
            // Check WebXR support
            const webxrSystem = this.framework.getSystem('WebXR');
            if (!webxrSystem) {
                throw new Error('WebXR system not available');
            }

            // Initialize AI systems
            await this.initializeAISystems();

            // Setup AI-enhanced interactions
            this.setupAIInteractions();

            console.log('AI WebXR initialized successfully');
            return true;

        } catch (error) {
            console.error('Failed to initialize AI WebXR:', error);
            return false;
        }
    }

    /**
     * Initialize AI systems
     */
    async initializeAISystems() {
        // Test AI service connectivity
        try {
            await this.aiService.generatePrompt('Test connection');
            console.log('AI service connected');
        } catch (error) {
            console.warn('AI service not available, using fallback modes');
        }
    }

    /**
     * Setup AI-enhanced interactions
     */
    setupAIInteractions() {
        // Setup gesture recognition
        this.setupGestureRecognition();
        
        // Setup voice commands
        this.setupVoiceCommands();
        
        // Setup AI scene adaptation
        this.setupSceneAdaptation();
    }

    /**
     * Setup gesture recognition
     */
    setupGestureRecognition() {
        // Add gesture tracking to controllers
        this.framework.engine.scene.traverse((object) => {
            if (object.isController) {
                this.trackControllerGestures(object);
            }
        });
    }

    /**
     * Track controller gestures
     */
    trackControllerGestures(controller) {
        let lastPosition = null;
        let gestureStartTime = null;

        controller.addEventListener('move', (event) => {
            const position = event.position;
            
            if (!lastPosition) {
                lastPosition = position;
                gestureStartTime = Date.now();
                return;
            }

            // Add position to gesture recognition
            this.gestureRecognition.addPosition(position);

            // Check if gesture should be analyzed
            const deltaTime = Date.now() - gestureStartTime;
            if (deltaTime > 1000) { // 1 second gestures
                this.analyzeGesture();
                lastPosition = null;
                gestureStartTime = null;
            }
        });
    }

    /**
     * Analyze recorded gesture
     */
    async analyzeGesture() {
        const gesture = await this.gestureRecognition.stopRecording();
        
        if (gesture && gesture.confidence > 0.6) {
            await this.executeGestureAction(gesture);
        }
    }

    /**
     * Execute gesture action
     */
    async executeGestureAction(gesture) {
        switch (gesture.action) {
            case 'navigate_previous':
                this.navigatePrevious();
                break;
            case 'navigate_next':
                this.navigateNext();
                break;
            case 'scroll_up':
                this.scrollUp();
                break;
            case 'scroll_down':
                this.scrollDown();
                break;
            case 'rotate_object':
                this.rotateSelectedObject();
                break;
            case 'select_object':
                this.selectObjectAtPointer();
                break;
            case 'grab_object':
                this.grabObject();
                break;
            case 'point_at':
                this.highlightObjectAtPointer();
                break;
        }

        this.interactionHistory.push({
            type: 'gesture',
            action: gesture.action,
            confidence: gesture.confidence,
            timestamp: Date.now()
        });
    }

    /**
     * Setup voice commands
     */
    setupVoiceCommands() {
        // Initialize speech recognition if available
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            this.initializeSpeechRecognition();
        } else {
            console.warn('Speech recognition not supported');
        }
    }

    /**
     * Initialize speech recognition
     */
    initializeSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        this.recognition.onresult = async (event) => {
            const last = event.results.length - 1;
            const transcript = event.results[last][0].transcript;
            
            if (event.results[last].isFinal) {
                await this.processVoiceCommand(transcript);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };
    }

    /**
     * Process voice command
     */
    async processVoiceCommand(transcript) {
        const command = await this.voiceCommands.processCommand(transcript);
        
        if (command.confidence > 0.6) {
            await this.executeVoiceCommand(command);
        }

        this.interactionHistory.push({
            type: 'voice',
            command: transcript,
            interpretation: command,
            timestamp: Date.now()
        });
    }

    /**
     * Execute voice command
     */
    async executeVoiceCommand(command) {
        switch (command.command) {
            case 'create_object':
                await this.createObject(command.parameters);
                break;
            case 'modify_object':
                await this.modifyObject(command.parameters);
                break;
            case 'delete_object':
                await this.deleteObject(command.parameters);
                break;
            case 'navigate':
                await this.navigate(command.parameters);
                break;
            case 'lighting':
                await this.adjustLighting(command.parameters);
                break;
            case 'camera':
                await this.adjustCamera(command.parameters);
                break;
            case 'scene':
                await this.changeScene(command.parameters);
                break;
        }
    }

    /**
     * Setup AI scene adaptation
     */
    setupSceneAdaptation() {
        // Monitor user behavior and adapt scene
        setInterval(() => {
            this.adaptSceneToUser();
        }, 5000); // Check every 5 seconds
    }

    /**
     * Adapt scene based on user behavior
     */
    async adaptSceneToUser() {
        const recentInteractions = this.interactionHistory.slice(-10);
        
        if (recentInteractions.length === 0) return;

        // Analyze interaction patterns
        const analysis = this.analyzeInteractionPatterns(recentInteractions);
        
        // Get AI recommendations for scene adaptation
        const recommendations = await this.getSceneAdaptationRecommendations(analysis);
        
        // Apply adaptations
        await this.applySceneAdaptations(recommendations);
    }

    /**
     * Analyze interaction patterns
     */
    analyzeInteractionPatterns(interactions) {
        const patterns = {
            gestureFrequency: 0,
            voiceFrequency: 0,
            commonActions: new Map(),
            interactionSpeed: 'medium'
        };

        interactions.forEach(interaction => {
            if (interaction.type === 'gesture') {
                patterns.gestureFrequency++;
            } else if (interaction.type === 'voice') {
                patterns.voiceFrequency++;
            }

            const action = interaction.action || interaction.interpretation?.command;
            if (action) {
                patterns.commonActions.set(action, (patterns.commonActions.get(action) || 0) + 1);
            }
        });

        return patterns;
    }

    /**
     * Get AI scene adaptation recommendations
     */
    async getSceneAdaptationRecommendations(analysis) {
        const prompt = `
        Analyze this user interaction data and provide scene adaptation recommendations:
        
        Interaction Analysis:
        - Gesture Frequency: ${analysis.gestureFrequency}
        - Voice Frequency: ${analysis.voiceFrequency}
        - Common Actions: ${Array.from(analysis.commonActions.entries()).map(([action, count]) => `${action}: ${count}`).join(', ')}
        
        Current XR Mode: ${this.xrMode}
        
        Provide JSON response:
        {
            "adaptations": [
                {
                    "type": "lighting|ui|objects|controls",
                    "priority": "high|medium|low",
                    "action": "specific_adaptation_action",
                    "reason": "why this adaptation is needed"
                }
            ],
            "uiAdjustments": {
                "gestureHints": "show|hide",
                "voiceFeedback": "enable|disable",
                "tutorialMode": "enable|disable"
            },
            "performanceOptimizations": {
                "reduceQuality": "true|false",
                "increaseLOD": "true|false",
                "adjustShadows": "true|false"
            }
        }
        
        Focus on adaptations that will improve user experience based on their interaction patterns.
        `;

        try {
            const response = await this.aiService.generatePrompt(prompt);
            return JSON.parse(response);
        } catch (error) {
            console.warn('AI adaptation recommendations failed:', error);
            return this.getFallbackAdaptations(analysis);
        }
    }

    /**
     * Get fallback adaptations
     */
    getFallbackAdaptations(analysis) {
        const adaptations = {
            adaptations: [],
            uiAdjustments: {
                gestureHints: 'show',
                voiceFeedback: 'enable',
                tutorialMode: 'disable'
            },
            performanceOptimizations: {
                reduceQuality: 'false',
                increaseLOD: 'false',
                adjustShadows: 'false'
            }
        };

        // Basic adaptations based on interaction frequency
        if (analysis.gestureFrequency > 5) {
            adaptations.adaptations.push({
                type: 'controls',
                priority: 'medium',
                action: 'enhance_gesture_feedback',
                reason: 'User frequently uses gestures'
            });
        }

        if (analysis.voiceFrequency > 5) {
            adaptations.adaptations.push({
                type: 'ui',
                priority: 'medium',
                action: 'improve_voice_feedback',
                reason: 'User frequently uses voice commands'
            });
        }

        return adaptations;
    }

    /**
     * Apply scene adaptations
     */
    async applySceneAdaptations(recommendations) {
        recommendations.adaptations.forEach(adaptation => {
            switch (adaptation.type) {
                case 'lighting':
                    this.adaptLighting(adaptation);
                    break;
                case 'ui':
                    this.adaptUI(adaptation);
                    break;
                case 'objects':
                    this.adaptObjects(adaptation);
                    break;
                case 'controls':
                    this.adaptControls(adaptation);
                    break;
            }
        });
    }

    /**
     * Action implementations
     */
    navigatePrevious() {
        // Navigate to previous scene/view
        console.log('Navigating to previous');
    }

    navigateNext() {
        // Navigate to next scene/view
        console.log('Navigating to next');
    }

    scrollUp() {
        // Scroll content up
        console.log('Scrolling up');
    }

    scrollDown() {
        // Scroll content down
        console.log('Scrolling down');
    }

    rotateSelectedObject() {
        // Rotate currently selected object
        console.log('Rotating selected object');
    }

    selectObjectAtPointer() {
        // Select object at pointer position
        console.log('Selecting object at pointer');
    }

    grabObject() {
        // Grab object with controller
        console.log('Grabbing object');
    }

    highlightObjectAtPointer() {
        // Highlight object at pointer
        console.log('Highlighting object at pointer');
    }

    async createObject(parameters) {
        // Create object based on voice command
        console.log('Creating object:', parameters);
    }

    async modifyObject(parameters) {
        // Modify existing object
        console.log('Modifying object:', parameters);
    }

    async deleteObject(parameters) {
        // Delete object
        console.log('Deleting object:', parameters);
    }

    async navigate(parameters) {
        // Navigate to location
        console.log('Navigating to:', parameters);
    }

    async adjustLighting(parameters) {
        // Adjust scene lighting
        console.log('Adjusting lighting:', parameters);
    }

    async adjustCamera(parameters) {
        // Adjust camera settings
        console.log('Adjusting camera:', parameters);
    }

    async changeScene(parameters) {
        // Change scene properties
        console.log('Changing scene:', parameters);
    }

    adaptLighting(adaptation) {
        console.log('Adapting lighting:', adaptation.action);
    }

    adaptUI(adaptation) {
        console.log('Adapting UI:', adaptation.action);
    }

    adaptObjects(adaptation) {
        console.log('Adapting objects:', adaptation.action);
    }

    adaptControls(adaptation) {
        console.log('Adapting controls:', adaptation.action);
    }

    /**
     * WebXR session event handlers
     */
    onXRSessionStart(session) {
        this.xrSession = session;
        this.xrMode = session.mode; // 'vr' or 'ar'
        
        if (session.mode === 'vr') {
            this.isVRActive = true;
        } else if (session.mode === 'ar') {
            this.isARActive = true;
        }

        // Start AI systems
        this.gestureRecognition.startRecording();
        this.voiceCommands.startListening();

        console.log(`AI WebXR session started in ${session.mode} mode`);
    }

    onXRSessionEnd() {
        this.xrSession = null;
        this.xrMode = 'none';
        this.isVRActive = false;
        this.isARActive = false;

        // Stop AI systems
        this.gestureRecognition.stopRecording();
        this.voiceCommands.stopListening();

        console.log('AI WebXR session ended');
    }

    /**
     * Enable voice commands
     */
    async enableVoiceCommands() {
        if (this.recognition) {
            this.recognition.start();
            this.voiceCommands.startListening();
            console.log('Voice commands enabled');
        }
    }

    /**
     * Disable voice commands
     */
    disableVoiceCommands() {
        if (this.recognition) {
            this.recognition.stop();
            this.voiceCommands.stopListening();
            console.log('Voice commands disabled');
        }
    }

    /**
     * Enable gesture recognition
     */
    enableGestureRecognition() {
        this.gestureRecognition.startRecording();
        console.log('Gesture recognition enabled');
    }

    /**
     * Disable gesture recognition
     */
    disableGestureRecognition() {
        this.gestureRecognition.stopRecording();
        console.log('Gesture recognition disabled');
    }

    /**
     * Get interaction statistics
     */
    getInteractionStats() {
        const recentInteractions = this.interactionHistory.slice(-50);
        
        const stats = {
            totalInteractions: this.interactionHistory.length,
            gestureCount: recentInteractions.filter(i => i.type === 'gesture').length,
            voiceCount: recentInteractions.filter(i => i.type === 'voice').length,
            averageConfidence: this.calculateAverageConfidence(recentInteractions),
            mostUsedActions: this.getMostUsedActions(recentInteractions)
        };

        return stats;
    }

    calculateAverageConfidence(interactions) {
        if (interactions.length === 0) return 0;
        
        const totalConfidence = interactions.reduce((sum, interaction) => {
            return sum + (interaction.confidence || 0);
        }, 0);
        
        return totalConfidence / interactions.length;
    }

    getMostUsedActions(interactions) {
        const actionCounts = new Map();
        
        interactions.forEach(interaction => {
            const action = interaction.action || interaction.interpretation?.command;
            if (action) {
                actionCounts.set(action, (actionCounts.get(action) || 0) + 1);
            }
        });

        return Array.from(actionCounts.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }

    /**
     * Get interaction history
     */
    getInteractionHistory(limit = 20) {
        return this.interactionHistory.slice(-limit);
    }

    /**
     * Clear interaction history
     */
    clearInteractionHistory() {
        this.interactionHistory = [];
    }

    /**
     * Dispose of AI WebXR manager
     */
    dispose() {
        this.disableVoiceCommands();
        this.disableGestureRecognition();
        
        this.interactionHistory = [];
        this.userPreferences.clear();
        
        this.gestureRecognition = null;
        this.voiceCommands = null;
        this.framework = null;
        this.aiService = null;
    }
}

export {
    AIGestureRecognition,
    AIVoiceCommands,
    AIWebXRManager
};
