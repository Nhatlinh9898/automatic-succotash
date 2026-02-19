import React, { useState, useEffect, useRef } from 'react';
import ThreeJSScene from '../demos/ThreeJSScene';

const CHARACTERS = {
  female1: { name: 'Linh', avatar: '👩‍💼', personality: 'professional' },
  female2: { name: 'Mai', avatar: '👩‍🎨', personality: 'creative' },
  female3: { name: 'An', avatar: '👩‍🔬', personality: 'academic' },
  female4: { name: 'Huong', avatar: '👩‍🏫', personality: 'elegant' },
  female5: { name: 'Giang', avatar: '👩‍💻', personality: 'tech' },
  female6: { name: 'Trang', avatar: '👩‍🎤', personality: 'energetic' }
};

const WARDROBE = {
  outfits: {
    casual: { icon: '👕', name: 'Casual', color: '#4a90e2' },
    formal: { icon: '👔', name: 'Formal', color: '#2c3e50' },
    elegant: { icon: '👗', name: 'Elegant', color: '#8e44ad' },
    creative: { icon: '🎨', name: 'Creative', color: '#e74c3c' },
    tech: { icon: '💻', name: 'Tech', color: '#34495e' },
    stage: { icon: '🎤', name: 'Stage', color: '#f39c12' },
    traditional: { icon: '👘', name: 'Áo dài', color: '#c0392b' },
    sport: { icon: '🏃‍♀️', name: 'Sport', color: '#27ae60' }
  },
  hair: {
    long: { icon: '💇‍♀️', name: 'Long Hair' },
    short: { icon: '👩‍🦱', name: 'Short Hair' },
    ponytail: { icon: '🦸‍♀️', name: 'Ponytail' },
    bun: { icon: '👩‍🦳', name: 'Bun' },
    wavy: { icon: '🌊', name: 'Wavy' },
    straight: { icon: '➖', name: 'Straight' }
  },
  accessories: {
    none: { icon: '❌', name: 'None' },
    glasses: { icon: '👓', name: 'Glasses' },
    necklace: { icon: '📿', name: 'Necklace' },
    earrings: { icon: '💎', name: 'Earrings' },
    bracelet: { icon: '⌚', name: 'Bracelet' },
    bag: { icon: '👜', name: 'Bag' },
    hat: { icon: '👒', name: 'Hat' },
    scarf: { icon: '🧣', name: 'Scarf' }
  },
  colors: {
    '#ff6b6b': { name: 'Red', hex: '#ff6b6b' },
    '#4ecdc4': { name: 'Teal', hex: '#4ecdc4' },
    '#45b7d1': { name: 'Blue', hex: '#45b7d1' },
    '#96ceb4': { name: 'Green', hex: '#96ceb4' },
    '#ffeaa7': { name: 'Yellow', hex: '#ffeaa7' },
    '#dfe6e9': { name: 'Gray', hex: '#dfe6e9' },
    '#a29bfe': { name: 'Purple', hex: '#a29bfe' },
    '#fd79a8': { name: 'Pink', hex: '#fd79a8' }
  }
};

function CharacterSystem({ currentCharacter, onCharacterChange, currentOutfit, onOutfitChange }) {
  const [status, setStatus] = useState('Character system ready');

  const selectCharacter = (charId) => {
    onCharacterChange(charId);
    setStatus(`Selected: ${CHARACTERS[charId].name}`);
  };

  const changeOutfit = (type, value) => {
    onOutfitChange(prev => ({ ...prev, [type]: value }));
    setStatus(`Outfit changed: ${type} = ${value}`);
  };

  const randomizeOutfit = () => {
    const outfitKeys = Object.keys(WARDROBE.outfits);
    const hairKeys = Object.keys(WARDROBE.hair);
    const accessoryKeys = Object.keys(WARDROBE.accessories);
    const colorKeys = Object.keys(WARDROBE.colors);
    
    onOutfitChange({
      outfit: outfitKeys[Math.floor(Math.random() * outfitKeys.length)],
      hair: hairKeys[Math.floor(Math.random() * hairKeys.length)],
      accessory: accessoryKeys[Math.floor(Math.random() * accessoryKeys.length)],
      color: colorKeys[Math.floor(Math.random() * colorKeys.length)]
    });
    setStatus('Random outfit applied!');
  };

  return (
    <div className="character-system">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-text">{status}</span>
      </div>

      {/* 3D Scene */}
      <div className="scene-container">
        <ThreeJSScene 
          character={currentCharacter}
          outfit={currentOutfit}
        />
      </div>

      {/* Character Selection */}
      <div className="panel character-panel">
        <h3>👥 Characters</h3>
        <div className="character-grid">
          {Object.keys(CHARACTERS).map(charId => (
            <div
              key={charId}
              className={`character-card ${currentCharacter === charId ? 'selected' : ''}`}
              onClick={() => selectCharacter(charId)}
            >
              <div className="avatar">{CHARACTERS[charId].avatar}</div>
              <div className="name">{CHARACTERS[charId].name}</div>
            </div>
          ))}
        </div>
        <div className="current-info">
          Current: <strong>{CHARACTERS[currentCharacter]?.name}</strong>
        </div>
      </div>

      {/* Wardrobe Panel */}
      <div className="panel wardrobe-panel">
        <h3>👗 Wardrobe</h3>
        
        <div className="wardrobe-category">
          <h4>👚 Outfits</h4>
          <div className="outfit-grid">
            {Object.keys(WARDROBE.outfits).map(outfitId => (
              <div
                key={outfitId}
                className={`outfit-item ${currentOutfit.outfit === outfitId ? 'selected' : ''}`}
                onClick={() => changeOutfit('outfit', outfitId)}
              >
                <div className="icon">{WARDROBE.outfits[outfitId].icon}</div>
                <div>{WARDROBE.outfits[outfitId].name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="wardrobe-category">
          <h4>💄 Hair Styles</h4>
          <div className="outfit-grid">
            {Object.keys(WARDROBE.hair).map(hairId => (
              <div
                key={hairId}
                className={`outfit-item ${currentOutfit.hair === hairId ? 'selected' : ''}`}
                onClick={() => changeOutfit('hair', hairId)}
              >
                <div className="icon">{WARDROBE.hair[hairId].icon}</div>
                <div>{WARDROBE.hair[hairId].name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="wardrobe-category">
          <h4>👠 Accessories</h4>
          <div className="outfit-grid">
            {Object.keys(WARDROBE.accessories).map(accId => (
              <div
                key={accId}
                className={`outfit-item ${currentOutfit.accessory === accId ? 'selected' : ''}`}
                onClick={() => changeOutfit('accessory', accId)}
              >
                <div className="icon">{WARDROBE.accessories[accId].icon}</div>
                <div>{WARDROBE.accessories[accId].name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="wardrobe-category">
          <h4>🎨 Colors</h4>
          <div className="outfit-grid">
            {Object.keys(WARDROBE.colors).map(colorId => (
              <div
                key={colorId}
                className={`outfit-item ${currentOutfit.color === colorId ? 'selected' : ''}`}
                onClick={() => changeOutfit('color', colorId)}
              >
                <div 
                  className="color-swatch" 
                  style={{ background: WARDROBE.colors[colorId].hex }}
                />
                <div>{WARDROBE.colors[colorId].name}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="random-btn" onClick={randomizeOutfit}>
          🎲 Random Outfit
        </button>
      </div>
    </div>
  );
}

export default CharacterSystem;
