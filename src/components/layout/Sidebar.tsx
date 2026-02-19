import React from 'react';
import { Link, useLocation, Location } from 'react-router-dom';

interface MenuItem {
  path: string;
  icon: string;
  label: string;
}

interface SidebarProps {
  // Add any props if needed in the future
}

const Sidebar: React.FC<SidebarProps> = () => {
  const location: Location = useLocation();
  
  const menuItems: MenuItem[] = [
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

  const isActive = (path: string): boolean => {
    if (path === '/home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="bg-gradient-to-b from-white to-indigo-50/20 border-r border-gray-200 shadow-lg flex flex-col h-screen overflow-y-auto overflow-x-hidden sticky top-0 z-10 w-72 flex-shrink-0 transition-all duration-500 backdrop-blur-lg hover:shadow-2xl hover:border-indigo-500 hover:translate-x-0.5">
      <style>{`
        @keyframes shimmer {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-30%, -30%) rotate(180deg); }
        }
        .sidebar-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: shimmer 3s ease-in-out infinite;
        }
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .sidebar::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 3px;
        }
        .sidebar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
        @media (max-width: 1024px) {
          .sidebar { width: 16rem; }
        }
        @media (max-width: 768px) {
          .sidebar {
            height: auto;
            position: relative;
            width: 100%;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
          }
          .sidebar:hover {
            transform: none;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          }
        }
      `}</style>
      
      <div className="sidebar-header p-8 border-b border-gray-200 bg-gradient-to-br from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-3 relative z-10">🚀 AI Studio</h3>
        <p className="text-sm opacity-95 font-medium relative z-10">Công cụ 3D & AI</p>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="list-none m-0 p-0">
          {menuItems.map((item: MenuItem) => (
            <li key={item.path} className="mb-1">
              <Link 
                to={item.path} 
                className={`flex items-center gap-4 p-4 m-1 rounded-lg text-gray-600 no-underline font-medium relative overflow-hidden transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform translate-x-2' 
                    : 'hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 hover:translate-x-2 hover:shadow-md'
                }`}
              >
                <span className={`text-xl flex items-center justify-center w-7 h-7 transition-transform duration-300 ${
                  isActive(item.path) ? 'transform scale-110' : 'hover:transform hover:scale-110 hover:rotate-6'
                }`}>
                  {item.icon}
                </span>
                <span className="text-sm transition-all duration-300">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-6 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-indigo-50/20 mt-auto">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-900 mb-1">Three.js AI Studio</p>
          <small className="text-xs text-gray-500">v1.0.0</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
