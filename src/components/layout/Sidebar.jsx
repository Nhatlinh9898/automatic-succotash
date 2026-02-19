import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    core: true,
    ai: true,
    creative: false,
    advanced: false,
    tools: false
  });
  
  const menuItems = [
    { 
      path: '/home', 
      icon: '🏠', 
      label: 'Trang chủ',
      category: 'core'
    },
    { 
      path: '/history', 
      icon: '📚', 
      label: 'Lịch sử',
      category: 'core'
    },
    { 
      path: '/settings', 
      icon: '⚙️', 
      label: 'Cài đặt',
      category: 'core'
    },
    { 
      path: '/characters', 
      icon: '👥', 
      label: 'Nhân vật',
      category: 'ai'
    },
    { 
      path: '/character-generator', 
      icon: '🎭', 
      label: 'Character Gen',
      category: 'ai'
    },
    { 
      path: '/agents', 
      icon: '🤖', 
      label: 'AI Agents',
      category: 'ai'
    },
    { 
      path: '/showcase', 
      icon: '🎨', 
      label: 'Showcase',
      category: 'creative'
    },
    { 
      path: '/particles', 
      icon: '✨', 
      label: 'Particles',
      category: 'creative'
    },
    { 
      path: '/shader-editor', 
      icon: '🎨', 
      label: 'Shaders',
      category: 'creative'
    },
    { 
      path: '/webxr', 
      icon: '🥽', 
      label: 'WebXR',
      category: 'advanced'
    },
    { 
      path: '/physics', 
      icon: '⚡', 
      label: 'Physics',
      category: 'advanced'
    },
    { 
      path: '/terrain', 
      icon: '🏔️', 
      label: 'Terrain',
      category: 'advanced'
    },
    { 
      path: '/audio-visualizer', 
      icon: '🎵', 
      label: 'Audio',
      category: 'advanced'
    },
    { 
      path: '/collaboration', 
      icon: '👥', 
      label: 'Collaboration',
      category: 'tools'
    },
    { 
      path: '/framework-integration', 
      icon: '🔧', 
      label: 'Framework',
      category: 'tools'
    }
  ];

  const categories = {
    core: { label: 'Core', icon: '🎯', color: 'blue' },
    ai: { label: 'AI Tools', icon: '🤖', color: 'purple' },
    creative: { label: 'Creative', icon: '🎨', color: 'pink' },
    advanced: { label: 'Advanced', icon: '⚡', color: 'yellow' },
    tools: { label: 'Tools', icon: '🔧', color: 'green' }
  };

  const filteredItems = menuItems.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const isActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      yellow: 'from-yellow-500 to-yellow-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <aside className="sidebar flex flex-col h-screen overflow-hidden sticky top-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black border-r border-gray-800/50">
      {/* Header */}
      <div className="p-6 border-b border-gray-800/50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_70%)] animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden group transform transition-all duration-500 hover:scale-110 hover:rotate-3">
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
              <span className="text-white text-xl relative z-10 animate-pulse">🚀</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI Studio</h1>
              <p className="text-gray-400 text-xs font-medium">Công cụ 3D & AI</p>
            </div>
          </div>
          
          {/* Enhanced Search */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="relative w-full bg-gray-800/70 border border-gray-700/50 rounded-xl px-4 py-3 pl-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300 backdrop-blur-sm shadow-inner"
            />
            <svg className="absolute left-4 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-all duration-300 group-focus-within:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 hover:text-white transition-colors duration-200"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-600">
        <div className="space-y-3">
          {Object.entries(groupedItems).map(([category, items]) => {
            const categoryInfo = categories[category];
            const isExpanded = expandedCategories[category];
            
            return (
              <div key={category} className="mb-4">
                {/* Enhanced Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 hover:from-gray-700/50 hover:to-gray-600/30 rounded-xl transition-all duration-500 group backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-all duration-500 ${isExpanded ? 'rotate-90 text-indigo-400 scale-110' : ''} group-hover:text-gray-300 group-hover:scale-105`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {isExpanded && (
                        <div className="absolute -inset-2 bg-indigo-500/20 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-bold transition-all duration-300 ${isExpanded ? 'text-indigo-300 scale-110' : 'text-gray-300 group-hover:text-gray-200 group-hover:scale-105'}`}>
                        {categoryInfo.icon}
                      </span>
                      <span className={`text-sm font-bold transition-all duration-300 ${isExpanded ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                        {categoryInfo.label}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 font-semibold ${
                      isExpanded 
                        ? 'bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-300 border border-indigo-500/40 shadow-lg shadow-indigo-500/20' 
                        : 'bg-gray-700/50 text-gray-400 border border-gray-600/30 group-hover:bg-gray-600/50 group-hover:text-gray-300'
                    }`}>
                      {items.length}
                    </div>
                  </div>
                </button>
                
                {/* Enhanced Category Items */}
                {isExpanded && (
                  <div className="mt-2 ml-3 space-y-2">
                    {items.map((item, index) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-x-1 relative overflow-hidden group ${
                          isActive(item.path)
                            ? `bg-gradient-to-r ${getCategoryColor(categoryInfo.color)} text-white shadow-xl shadow-lg/20 scale-105 -translate-x-1`
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:shadow-lg'
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <span className="text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">{item.icon}</span>
                        <span className="text-sm font-medium flex-1 transition-all duration-300">{item.label}</span>
                        
                        {isActive(item.path) && (
                          <div className="flex items-center gap-2 animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <svg className="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        
                        {/* Active indicator line */}
                        {isActive(item.path) && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-white/50 rounded-r-full"></div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
      
      {/* Enhanced Footer */}
      <div className="p-6 border-t border-gray-800/50 bg-gradient-to-t from-gray-900/80 via-gray-800/50 to-gray-900/30 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-gray-200 text-sm font-bold mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Three.js AI Studio</p>
            <p className="text-gray-500 text-xs font-medium">Version 1.0.0</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 text-gray-500 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="p-3 text-gray-500 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
