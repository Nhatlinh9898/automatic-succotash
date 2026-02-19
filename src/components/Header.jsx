import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ activeTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠', path: '/home' },
    { id: 'showcase', label: '3D Showcase', icon: '🎮', path: '/showcase' },
    { id: 'agents', label: 'Agents', icon: '🤖', path: '/agents' },
    { id: 'webxr', label: 'WebXR', icon: '🥽', path: '/webxr' },
    { id: 'particles', label: 'Particles', icon: '✨', path: '/particles' },
    { id: 'character-generator', label: 'AI Character', icon: '🎭', path: '/character-generator' },
    { id: 'physics', label: 'Physics', icon: '⚡', path: '/physics' },
    { id: 'collaboration', label: 'Collaboration', icon: '🤝', path: '/collaboration' },
    { id: 'terrain', label: 'Terrain', icon: '🏔️', path: '/terrain' },
    { id: 'audio-visualizer', label: 'Audio', icon: '🎵', path: '/audio-visualizer' },
    { id: 'shader-editor', label: 'Shader Editor', icon: '🎨', path: '/shader-editor' },
    { id: 'framework-integration', label: 'Framework', icon: '🚀', path: '/framework-integration' },
    { id: 'characters', label: 'Characters', icon: '👤', path: '/characters' },
    { id: 'history', label: 'History', icon: '📝', path: '/history' },
    { id: 'settings', label: 'Settings', icon: '⚙️', path: '/settings' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="header-title-link">
            <h1 className="header-title">
              <span className="logo">🤖</span>
              AI Prompt Assistant
            </h1>
          </Link>
          <p className="header-subtitle">Powered by Advanced AI Technology</p>
        </div>
        
        <nav className="header-nav">
          {tabs.map(tab => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
