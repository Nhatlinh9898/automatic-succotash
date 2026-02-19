import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterSystem from './components/CharacterSystem';
import MCPresenter from './components/MCPresenter';
import './MC3DApp.css';

function MC3DApp() {
  const [currentCharacter, setCurrentCharacter] = useState('female1');
  const [currentOutfit, setCurrentOutfit] = useState({
    outfit: 'casual',
    hair: 'long',
    accessory: 'none',
    color: '#ff6b6b'
  });

  return (
    <Router>
      <div className="mc3d-app">
        <nav className="mc3d-nav">
          <Link to="/" className="nav-logo">
            🎭 3D MC Presenter
          </Link>
          <div className="nav-links">
            <Link to="/presenter" className="nav-link">
              🎬 MC Presenter
            </Link>
            <Link to="/characters" className="nav-link">
              👥 Characters
            </Link>
          </div>
        </nav>

        <main className="mc3d-main">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="welcome-page">
                  <h1>🎭 Chào mừng đến với 3D MC Presenter</h1>
                  <div className="welcome-options">
                    <Link to="/presenter" className="option-card">
                      <div className="option-icon">🎬</div>
                      <h3>MC Presenter</h3>
                      <p>Sử dụng MC ảo với AI và lip-sync</p>
                    </Link>
                    <Link to="/characters" className="option-card">
                      <div className="option-icon">👥</div>
                      <h3>Character System</h3>
                      <p>Chọn nhân vật và tùy chỉnh trang phục</p>
                    </Link>
                  </div>
                </div>
              } 
            />
            <Route 
              path="/presenter" 
              element={
                <MCPresenter 
                  character={currentCharacter}
                  outfit={currentOutfit}
                />
              } 
            />
            <Route 
              path="/characters" 
              element={
                <CharacterSystem 
                  currentCharacter={currentCharacter}
                  onCharacterChange={setCurrentCharacter}
                  currentOutfit={currentOutfit}
                  onOutfitChange={setCurrentOutfit}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MC3DApp;
