import React, { useState, useEffect, useRef, useCallback } from 'react';
import './RealtimeCollaboration.css';

const RealtimeCollaboration = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [sharedObjects, setSharedObjects] = useState([]);
  const [selectedTool, setSelectedTool] = useState('pointer');
  const [canvasData, setCanvasData] = useState('');
  const [voiceChatActive, setVoiceChatActive] = useState(false);
  const [screenShareActive, setScreenShareActive] = useState(false);
  
  const canvasRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideosRef = useRef({});
  const wsRef = useRef(null);
  const peerConnectionsRef = useRef({});
  const localStreamRef = useRef(null);

  const collaborationTools = [
    { id: 'pointer', name: 'Pointer', icon: '👆' },
    { id: 'pen', name: 'Pen', icon: '✏️' },
    { id: 'eraser', name: 'Eraser', icon: '🧹' },
    { id: 'text', name: 'Text', icon: '📝' },
    { id: 'shape', name: 'Shapes', icon: '⬛' },
    { id: '3d-object', name: '3D Object', icon: '🎲' }
  ];

  useEffect(() => {
    // Initialize canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setupCanvasEvents(canvas);
    }
    
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      cleanupPeerConnections();
    };
  }, []);

  const setupCanvasEvents = (canvas) => {
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    };

    const draw = (e) => {
      if (!isDrawing) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      
      lastX = x;
      lastY = y;
      
      // Broadcast drawing data
      if (isConnected) {
        broadcastDrawingAction({
          type: 'draw',
          tool: selectedTool,
          fromX: lastX,
          fromY: lastY,
          toX: x,
          toY: y,
          user: userName
        });
      }
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  };

  const connectToRoom = () => {
    if (!roomId.trim() || !userName.trim()) {
      alert('Please enter both room ID and username');
      return;
    }

    // WebSocket connection
    const ws = new WebSocket(`ws://localhost:8080/collaboration/${roomId}`);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      
      // Send user info
      ws.send(JSON.stringify({
        type: 'join',
        userName: userName,
        timestamp: Date.now()
      }));
      
      addSystemMessage(`Connected to room ${roomId}`);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleWebSocketMessage(data);
    };

    ws.onclose = () => {
      setIsConnected(false);
      addSystemMessage('Disconnected from room');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      addSystemMessage('Connection error');
    };
  };

  const disconnectFromRoom = () => {
    if (wsRef.current) {
      wsRef.current.close();
    }
    cleanupPeerConnections();
    setIsConnected(false);
    setConnectedUsers([]);
    setMessages([]);
  };

  const handleWebSocketMessage = (data) => {
    switch (data.type) {
      case 'user-joined':
        setConnectedUsers(prev => [...prev, data.user]);
        addSystemMessage(`${data.user.name} joined the room`);
        break;
        
      case 'user-left':
        setConnectedUsers(prev => prev.filter(u => u.id !== data.userId));
        addSystemMessage(`${data.userName} left the room`);
        break;
        
      case 'chat-message':
        addChatMessage(data.user, data.message, data.timestamp);
        break;
        
      case 'drawing-action':
        applyDrawingAction(data.action);
        break;
        
      case '3d-object':
        addSharedObject(data.object);
        break;
        
      case 'voice-call':
        handleVoiceCall(data);
        break;
        
      case 'screen-share':
        handleScreenShare(data);
        break;
    }
  };

  const broadcastDrawingAction = (action) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'drawing-action',
        action: action
      }));
    }
  };

  const applyDrawingAction = (action) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    switch (action.type) {
      case 'draw':
        ctx.strokeStyle = action.user.color || '#000000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(action.fromX, action.fromY);
        ctx.lineTo(action.toX, action.toY);
        ctx.stroke();
        break;
        
      case 'clear':
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        break;
    }
  };

  const sendMessage = () => {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'chat-message',
        message: message,
        timestamp: Date.now()
      }));
      
      input.value = '';
    }
  };

  const addChatMessage = (user, message, timestamp) => {
    setMessages(prev => [...prev, {
      type: 'chat',
      user: user,
      message: message,
      timestamp: timestamp
    }]);
  };

  const addSystemMessage = (message) => {
    setMessages(prev => [...prev, {
      type: 'system',
      message: message,
      timestamp: Date.now()
    }]);
  };

  const startVoiceChat = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true, 
        video: true 
      });
      
      localStreamRef.current = stream;
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      
      setVoiceChatActive(true);
      
      // Signal to other users
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({
          type: 'voice-call-start',
          userName: userName
        }));
      }
      
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Could not access camera/microphone');
    }
  };

  const stopVoiceChat = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
      localStreamRef.current = null;
    }
    
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    
    setVoiceChatActive(false);
    cleanupPeerConnections();
    
    // Signal to other users
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'voice-call-end',
        userName: userName
      }));
    }
  };

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
      
      setScreenShareActive(true);
      
      // Signal to other users
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({
          type: 'screen-share-start',
          userName: userName
        }));
      }
      
      stream.getVideoTracks()[0].onended = () => {
        stopScreenShare();
      };
      
    } catch (error) {
      console.error('Error starting screen share:', error);
      alert('Could not start screen sharing');
    }
  };

  const stopScreenShare = () => {
    setScreenShareActive(false);
    
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'screen-share-end',
        userName: userName
      }));
    }
  };

  const cleanupPeerConnections = () => {
    Object.values(peerConnectionsRef.current).forEach(pc => {
      pc.close();
    });
    peerConnectionsRef.current = {};
  };

  const addSharedObject = (object) => {
    setSharedObjects(prev => [...prev, {
      ...object,
      id: Date.now() + Math.random()
    }]);
  };

  const add3DObject = () => {
    const object = {
      type: 'cube',
      position: { x: Math.random() * 400, y: Math.random() * 300 },
      size: 50,
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      rotation: 0,
      user: userName,
      timestamp: Date.now()
    };
    
    addSharedObject(object);
    
    // Broadcast to other users
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: '3d-object',
        object: object
      }));
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      broadcastDrawingAction({
        type: 'clear',
        user: userName
      });
    }
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = `collaboration-${roomId}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <div className="realtime-collaboration">
      <div className="collaboration-header">
        <h2>🤝 Real-time Collaboration</h2>
        <div className="connection-status">
          <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
          </span>
        </div>
      </div>

      <div className="collaboration-content">
        <div className="sidebar">
          <div className="connection-panel">
            <h3>Connection</h3>
            {!isConnected ? (
              <div className="connection-form">
                <input
                  type="text"
                  placeholder="Room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="input-field"
                />
                <button
                  onClick={connectToRoom}
                  className="connect-btn"
                >
                  🚀 Connect
                </button>
              </div>
            ) : (
              <div className="connection-info">
                <p><strong>Room:</strong> {roomId}</p>
                <p><strong>User:</strong> {userName}</p>
                <button
                  onClick={disconnectFromRoom}
                  className="disconnect-btn"
                >
                  🔌 Disconnect
                </button>
              </div>
            )}
          </div>

          <div className="tools-panel">
            <h3>Collaboration Tools</h3>
            <div className="tools-grid">
              {collaborationTools.map(tool => (
                <button
                  key={tool.id}
                  className={`tool-btn ${selectedTool === tool.id ? 'active' : ''}`}
                  onClick={() => setSelectedTool(tool.id)}
                  disabled={!isConnected}
                >
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </button>
              ))}
            </div>
            
            <div className="canvas-actions">
              <button
                onClick={clearCanvas}
                className="action-btn"
                disabled={!isConnected}
              >
                🧹 Clear Canvas
              </button>
              <button
                onClick={saveCanvas}
                className="action-btn"
                disabled={!isConnected}
              >
                💾 Save Canvas
              </button>
              <button
                onClick={add3DObject}
                className="action-btn"
                disabled={!isConnected}
              >
                🎲 Add 3D Object
              </button>
            </div>
          </div>

          <div className="users-panel">
            <h3>Connected Users ({connectedUsers.length})</h3>
            <div className="users-list">
              {connectedUsers.map(user => (
                <div key={user.id} className="user-item">
                  <div className="user-avatar" style={{ backgroundColor: user.color }}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="user-name">{user.name}</span>
                  {user.voiceActive && <span className="voice-indicator">🎤</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="media-panel">
            <h3>Media Sharing</h3>
            <div className="media-controls">
              <button
                onClick={voiceChatActive ? stopVoiceChat : startVoiceChat}
                className={`media-btn ${voiceChatActive ? 'active' : ''}`}
                disabled={!isConnected}
              >
                {voiceChatActive ? '🔇 End Voice Call' : '🎤 Start Voice Call'}
              </button>
              <button
                onClick={screenShareActive ? stopScreenShare : startScreenShare}
                className={`media-btn ${screenShareActive ? 'active' : ''}`}
                disabled={!isConnected}
              >
                {screenShareActive ? '🛑 Stop Sharing' : '🖥️ Share Screen'}
              </button>
            </div>
            
            {voiceChatActive && (
              <div className="video-container">
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="local-video"
                />
                <div className="video-label">You</div>
              </div>
            )}
          </div>
        </div>

        <div className="main-area">
          <div className="canvas-container">
            <canvas
              ref={canvasRef}
              width={800}
              height={600}
              className="collaboration-canvas"
            />
            
            {sharedObjects.map(obj => (
              <div
                key={obj.id}
                className="shared-3d-object"
                style={{
                  left: obj.position.x,
                  top: obj.position.y,
                  width: obj.size,
                  height: obj.size,
                  backgroundColor: obj.color,
                  transform: `rotate(${obj.rotation}deg)`
                }}
              >
                <div className="object-label">
                  {obj.user}'s {obj.type}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  {msg.type === 'chat' ? (
                    <>
                      <span className="message-user" style={{ color: msg.user.color }}>
                        {msg.user.name}:
                      </span>
                      <span className="message-text">{msg.message}</span>
                      <span className="message-time">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </>
                  ) : (
                    <span className="system-message">{msg.message}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="chat-input-container">
              <input
                id="chat-input"
                type="text"
                placeholder="Type a message..."
                className="chat-input"
                disabled={!isConnected}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="send-btn"
                disabled={!isConnected}
              >
                📤
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeCollaboration;
