import React, { useState, useRef, useEffect } from 'react';
import ThreeJSScene from '../features/demos/ThreeJSScene';

function MCPresenter({ character, outfit }) {
  const [chatInput, setChatInput] = useState('');
  const [status, setStatus] = useState('Ready');
  const [currentAnimation, setCurrentAnimation] = useState('Idle');
  const [cameraMode, setCameraMode] = useState('default');
  const sceneRef = useRef(null);

  const animations = ['Idle', 'Talk', 'Present', 'Gesture', 'Walk', 'Dance'];
  const cameraModes = ['default', 'closeup', 'wide', 'side'];

  const playAnimation = (animation) => {
    setCurrentAnimation(animation);
    if (sceneRef.current) {
      sceneRef.current.playAnimation(animation);
    }
    setStatus(`Playing: ${animation}`);
  };

  const toggleCamera = () => {
    const currentIndex = cameraModes.indexOf(cameraMode);
    const nextIndex = (currentIndex + 1) % cameraModes.length;
    const newMode = cameraModes[nextIndex];
    setCameraMode(newMode);
    
    if (sceneRef.current) {
      sceneRef.current.setCameraMode(newMode);
    }
    setStatus(`Camera: ${newMode}`);
  };

  const handleChat = async (text) => {
    if (!text.trim()) return;
    
    setChatInput('');
    setStatus('Processing command...');
    
    const lower = text.toLowerCase();
    
    // Character switch commands
    if (lower.includes("linh")) {
      setStatus('Switch to Linh');
      return;
    }
    if (lower.includes("mai")) {
      setStatus('Switch to Mai');
      return;
    }
    if (lower.includes("an")) {
      setStatus('Switch to An');
      return;
    }
    if (lower.includes("huong")) {
      setStatus('Switch to Huong');
      return;
    }
    if (lower.includes("giang")) {
      setStatus('Switch to Giang');
      return;
    }
    if (lower.includes("trang")) {
      setStatus('Switch to Trang');
      return;
    }
    
    // Animation commands
    if (lower.includes("idle") || lower.includes("đứng")) {
      return playAnimation('Idle');
    }
    if (lower.includes("nói") || lower.includes("talk")) {
      return playAnimation('Talk');
    }
    if (lower.includes("giới thiệu") || lower.includes("present")) {
      return playAnimation('Present');
    }
    if (lower.includes("tay") || lower.includes("gesture")) {
      return playAnimation('Gesture');
    }
    if (lower.includes("đi") || lower.includes("walk")) {
      return playAnimation('Walk');
    }
    if (lower.includes("nhảy") || lower.includes("dance")) {
      return playAnimation('Dance');
    }
    if (lower.includes("camera") || lower.includes("máy quay")) {
      return toggleCamera();
    }
    
    // AI command
    try {
      playAnimation('Talk');
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: text,
          character: character,
          personality: 'professional' // This would come from character config
        })
      });
      
      const result = await response.json();
      setStatus('AI response processed');
      
      // Play TTS if available
      if (result.ttsUrl && sceneRef.current) {
        sceneRef.current.playTTS(result.ttsUrl);
      }
    } catch (error) {
      console.error('Error processing AI request:', error);
      setStatus('Error processing AI request');
    }
  };

  return (
    <div className="mc-presenter">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-text">{status}</span>
        <div className="status-info">
          Character: {character} | Animation: {currentAnimation} | Camera: {cameraMode}
        </div>
      </div>

      {/* 3D Scene */}
      <div className="scene-container">
        <ThreeJSScene 
          ref={sceneRef}
          character={character}
          outfit={outfit}
          animation={currentAnimation}
          cameraMode={cameraMode}
        />
      </div>

      {/* Control Panel */}
      <div className="control-panel">
        <h3>🎮 Controls</h3>
        {animations.map(anim => (
          <button
            key={anim}
            className={`control-btn ${currentAnimation === anim ? 'active' : ''}`}
            onClick={() => playAnimation(anim)}
          >
            {getAnimationIcon(anim)} {anim}
          </button>
        ))}
        <button className="control-btn" onClick={toggleCamera}>
          📷 Camera
        </button>
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleChat(chatInput)}
          placeholder="Nhập lệnh hoặc câu hỏi..."
          className="chat-input"
        />
      </div>
    </div>
  );
}

function getAnimationIcon(animation) {
  const icons = {
    'Idle': '🧍',
    'Talk': '💬',
    'Present': '👋',
    'Gesture': '🤚',
    'Walk': '🚶',
    'Dance': '💃'
  };
  return icons[animation] || '🎬';
}

export default MCPresenter;
