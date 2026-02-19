import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/home', icon: '🏠', label: 'Trang chủ' },
    { path: '/history', icon: '📚', label: 'Lịch sử' },
    { path: '/settings', icon: '⚙️', label: 'Cài đặt' },
    { path: '/characters', icon: '👥', label: 'Nhân vật' },
    { path: '/showcase', icon: '🎨', label: 'Showcase' },
    { path: '/agents', icon: '🤖', label: 'AI Agents' },
    { path: '/webxr', icon: '🥽', label: 'WebXR' },
    { path: '/particles', icon: '✨', label: 'Particles' },
    { path: '/character-generator', icon: '🎭', label: 'Character Gen' },
    { path: '/physics', icon: '⚡', label: 'Physics' },
    { path: '/collaboration', icon: '👥', label: 'Collaboration' },
    { path: '/terrain', icon: '🏔️', label: 'Terrain' },
    { path: '/audio-visualizer', icon: '🎵', label: 'Audio' },
    { path: '/shader-editor', icon: '🎨', label: 'Shaders' },
    { path: '/framework-integration', icon: '🔧', label: 'Framework' },
  ];

  const isActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>🚀 AI Studio</h3>
        <p>Công cụ 3D & AI</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="footer-info">
          <p>Three.js AI Studio</p>
          <small>v1.0.0</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
