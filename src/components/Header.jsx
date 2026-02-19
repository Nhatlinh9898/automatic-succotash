import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ activeTab }) => {
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
      </div>
    </header>
  )
}

export default Header
