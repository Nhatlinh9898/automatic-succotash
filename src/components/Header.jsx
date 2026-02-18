import React from 'react'
import './Header.css'

const Header = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'characters', label: 'Characters', icon: '👤' },
    { id: 'history', label: 'History', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="header-title">
            <span className="logo">🤖</span>
            AI Prompt Assistant
          </h1>
          <p className="header-subtitle">Powered by Advanced AI Technology</p>
        </div>
        
        <nav className="header-nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
