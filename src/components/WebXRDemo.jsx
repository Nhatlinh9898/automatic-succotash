import React, { useState, useEffect, useRef } from 'react';
import * as ThreeJSUtils from '../../library/index.js';
import './WebXRDemo.css';

const WebXRDemo = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const xrSessionRef = useRef(null);
  
  const [isXRSupported, setIsXRSupported] = useState(false);
  const [isVRActive, setIsVRActive] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [xrMode, setXRMode] = useState('none');
  const [controllers, setControllers] = useState([]);

  useEffect(() => {
    checkXRSupport();
    if (mountRef.current && !sceneRef.current) {
      initializeScene();
    }
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (xrSessionRef.current) {
        xrSessionRef.current.end();
      }
    };
  }, []);

  const checkXRSupport = async () => {
    if ('xr' in navigator) {
      try {
        const isVRSupported = await navigator.xr.isSessionSupported('immersive-vr');
        const isARSupported = await navigator.xr.isSessionSupported('immersive-ar');
        setIsXRSupported(true);
        console.log('VR Support:', isVRSupported, 'AR Support:', isARSupported);
      } catch (error) {
        console.error('XR support check failed:', error);
        setIsXRSupported(false);
      }
    } else {
      console.log('WebXR not supported');
      setIsXRSupported(false);
    }
  };

  const initializeScene = () => {
    const { scene, camera, renderer } = ThreeJSUtils.createBasicScene();
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    // Enable XR
    renderer.xr.enabled = true;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Add basic lighting
    ThreeJSUtils.addBasicLighting(scene);
    
    // Create XR environment
    createXREnvironment();
    
    // Start animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  };

  const createXREnvironment = () => {
    if (!sceneRef.current) return;
    
    // Create interactive objects for XR
    const objects = [];
    
    // Floating spheres
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color().setHSL(i / 5, 1, 0.5),
        emissive: new THREE.Color().setHSL(i / 5, 1, 0.3),
        emissiveIntensity: 0.2
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      sphere.position.set(
        (Math.random() - 0.5) * 6,
        Math.random() * 3,
        (Math.random() - 0.5) * 6
      );
      
      sphere.userData = { 
        type: 'interactive',
        originalPosition: sphere.position.clone(),
        floatOffset: Math.random() * Math.PI * 2
      };
      
      sceneRef.current.add(sphere);
      objects.push(sphere);
    }
    
    // Add floating animation
    const floatAnimation = () => {
      objects.forEach((obj, index) => {
        if (obj.userData.type === 'interactive') {
          obj.position.y = obj.userData.originalPosition.y + 
            Math.sin(Date.now() * 0.001 + obj.userData.floatOffset) * 0.3;
          obj.rotation.y += 0.01;
        }
      });
    };
    
    // Store animation function for XR loop
    sceneRef.current.userData.floatAnimation = floatAnimation;
  };

  const startVRSession = async () => {
    if (!isXRSupported || !rendererRef.current) return;
    
    try {
      const session = await navigator.xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'bounded-floor']
      });
      
      xrSessionRef.current = session;
      rendererRef.current.xr.setSession(session);
      setIsVRActive(true);
      setXRMode('vr');
      
      setupXRControllers();
      
      session.addEventListener('end', () => {
        setIsVRActive(false);
        setXRMode('none');
        xrSessionRef.current = null;
      });
      
    } catch (error) {
      console.error('Failed to start VR session:', error);
      alert('Không thể khởi động VR. Vui lòng kiểm tra thiết bị và trình duyệt.');
    }
  };

  const startARSession = async () => {
    if (!isXRSupported || !rendererRef.current) return;
    
    try {
      const session = await navigator.xr.requestSession('immersive-ar', {
        optionalFeatures: ['hit-test', 'anchors']
      });
      
      xrSessionRef.current = session;
      rendererRef.current.xr.setSession(session);
      setIsARActive(true);
      setXRMode('ar');
      
      setupARHitTest();
      
      session.addEventListener('end', () => {
        setIsARActive(false);
        setXRMode('none');
        xrSessionRef.current = null;
      });
      
    } catch (error) {
      console.error('Failed to start AR session:', error);
      alert('Không thể khởi động AR. Vui lòng kiểm tra thiết bị và trình duyệt.');
    }
  };

  const setupXRControllers = () => {
    if (!rendererRef.current) return;
    
    const controller1 = rendererRef.current.xr.getController(0);
    const controller2 = rendererRef.current.xr.getController(1);
    
    // Create controller models
    const controllerGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.1, 8);
    const controllerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    
    const controller1Model = new THREE.Mesh(controllerGeometry, controllerMaterial);
    const controller2Model = new THREE.Mesh(controllerGeometry, controllerMaterial);
    
    controller1.add(controller1Model);
    controller2.add(controller2Model);
    
    sceneRef.current.add(controller1);
    sceneRef.current.add(controller2);
    
    setControllers([controller1, controller2]);
    
    // Add controller interaction
    controller1.addEventListener('select', () => handleControllerSelect(controller1));
    controller2.addEventListener('select', () => handleControllerSelect(controller2));
  };

  const setupARHitTest = () => {
    if (!rendererRef.current || !xrSessionRef.current) return;
    
    // Simple AR hit test setup
    const hitTestSource = new THREE.XRHitTestSource({
      space: rendererRef.current.xr.getReferenceSpace()
    });
    
    rendererRef.current.setAnimationLoop((timestamp, frame) => {
      if (frame && hitTestSource) {
        const hitTestResults = frame.getHitTestResults(hitTestSource);
        if (hitTestResults.length > 0) {
          const hit = hitTestResults[0];
          const pose = hit.getPose(rendererRef.current.xr.getReferenceSpace());
          
          // Place object at hit position
          if (pose) {
            const matrix = new THREE.Matrix4().fromArray(pose.transform.matrix);
            // Place AR content here
          }
        }
      }
      
      // Update animations
      if (sceneRef.current.userData.floatAnimation) {
        sceneRef.current.userData.floatAnimation();
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    });
  };

  const handleControllerSelect = (controller) => {
    // Create interaction effect at controller position
    const effectGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const effectMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff00,
      transparent: true,
      opacity: 0.8
    });
    const effect = new THREE.Mesh(effectGeometry, effectMaterial);
    
    effect.position.copy(controller.position);
    effect.userData = { 
      type: 'effect',
      lifetime: 1000,
      created: Date.now()
    };
    
    sceneRef.current.add(effect);
    
    // Remove effect after lifetime
    setTimeout(() => {
      sceneRef.current.remove(effect);
    }, 1000);
  };

  const endXRSession = () => {
    if (xrSessionRef.current) {
      xrSessionRef.current.end();
    }
  };

  const getXRStatus = () => {
    if (!isXRSupported) return '❌ WebXR không được hỗ trợ';
    if (isVRActive) return '🥽 VR đang hoạt động';
    if (isARActive) return '📱 AR đang hoạt động';
    return '✅ WebXR sẵn sàng';
  };

  return (
    <div className="webxr-demo">
      <div className="demo-header">
        <h2>🥽 WebXR VR/AR Demo</h2>
        <div className="xr-status">
          <span className="status-text">{getXRStatus()}</span>
        </div>
      </div>

      <div className="demo-content">
        <div className="xr-control-panel">
          <div className="xr-info">
            <h3>Thông tin WebXR</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Hỗ trợ WebXR:</span>
                <span className={`info-value ${isXRSupported ? 'supported' : 'unsupported'}`}>
                  {isXRSupported ? '✅ Có' : '❌ Không'}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Chế độ hiện tại:</span>
                <span className="info-value">{xrMode.toUpperCase()}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Controllers:</span>
                <span className="info-value">{controllers.length}</span>
              </div>
            </div>
          </div>

          <div className="xr-controls">
            <h3>Điều khiển XR</h3>
            <button
              className="xr-btn vr-btn"
              onClick={startVRSession}
              disabled={!isXRSupported || isVRActive || isARActive}
            >
              🥽 Bắt đầu VR
            </button>
            <button
              className="xr-btn ar-btn"
              onClick={startARSession}
              disabled={!isXRSupported || isVRActive || isARActive}
            >
              📱 Bắt đầu AR
            </button>
            <button
              className="xr-btn stop-btn"
              onClick={endXRSession}
              disabled={!isVRActive && !isARActive}
            >
              ⏹️ Dừng XR
            </button>
          </div>

          <div className="xr-instructions">
            <h3>Hướng dẫn sử dụng</h3>
            <div className="instruction-list">
              <div className="instruction-item">
                <span className="instruction-icon">🥽</span>
                <span>VR: Cần headset VR hỗ trợ WebXR</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">📱</span>
                <span>AR: Cần thiết bị di động hỗ trợ AR</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">🎮</span>
                <span>Controller: Dùng để tương tác với objects</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">👆</span>
                <span>Click/Trigger: Tạo hiệu ứng tương tác</span>
              </div>
            </div>
          </div>

          <div className="xr-features">
            <h3>Tính năng demo</h3>
            <ul className="feature-list">
              <li>🌐 Immersive VR environment</li>
              <li>📱 AR hit testing và placement</li>
              <li>🎮 VR controller tracking</li>
              <li>✨ Interactive 3D objects</li>
              <li>🎵 Spatial audio (nếu có)</li>
              <li>👊 Hand tracking (nếu hỗ trợ)</li>
            </ul>
          </div>
        </div>

        <div className="xr-scene-container">
          <div ref={mountRef} className="threejs-mount" />
          <div className="scene-overlay">
            <div className="overlay-info">
              <h4>WebXR Scene</h4>
              <p>Chế độ: {xrMode === 'none' ? 'Desktop' : xrMode.toUpperCase()}</p>
              {isXRSupported && (
                <p className="xr-hint">
                  {xrMode === 'none' 
                    ? 'Click vào nút VR/AR để bắt đầu trải nghiệm immersive'
                    : 'Đang trong chế độ XR - dùng controller để tương tác'
                  }
                </p>
              )}
            </div>
            
            {!isXRSupported && (
              <div className="xr-warning">
                <h4>⚠️ WebXR không được hỗ trợ</h4>
                <p>Trình duyệt hoặc thiết bị của bạn không hỗ trợ WebXR.</p>
                <p>Vui lòng sử dụng:</p>
                <ul>
                  <li>Chrome/Edge trên desktop với WebXR API emulation</li>
                  <li>Oculus Browser/Mozilla Reality trên VR headset</li>
                  <li>Chrome trên Android với ARCore support</li>
                  <li>Safari trên iOS với ARKit support</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebXRDemo;
