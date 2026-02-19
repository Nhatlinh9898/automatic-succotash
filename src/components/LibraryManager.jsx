import React, { useState, useEffect } from 'react';
import './LibraryManager.css';

const LibraryManager = () => {
  const [libraryItems, setLibraryItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('recent');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Load library data
  useEffect(() => {
    loadLibraryData();
  }, []);

  // Load library data when filters change
  useEffect(() => {
    loadLibraryItems();
  }, [searchQuery, selectedCategory, selectedTags, sortBy]);

  const loadLibraryData = async () => {
    try {
      // Import dynamically to avoid circular dependencies
      const { default: AgentSystem } = await import('../services/agentSystem.js');
      const agentSystem = AgentSystem;
      
      // Get categories and tags
      const categoriesData = agentSystem.getLibraryCategories();
      const tagsData = agentSystem.getLibraryTags();
      const statsData = agentSystem.getLibraryStats();
      
      setCategories(categoriesData);
      setTags(tagsData);
      setStats(statsData);
    } catch (error) {
      console.error('Failed to load library data:', error);
    }
  };

  const loadLibraryItems = async () => {
    setLoading(true);
    try {
      const { default: AgentSystem } = await import('../services/agentSystem.js');
      const agentSystem = AgentSystem;
      
      let items = [];
      
      if (searchQuery) {
        // Search library
        const searchResults = await agentSystem.searchLibraryDirect(searchQuery, {
          category: selectedCategory !== 'all' ? selectedCategory : null,
          tags: selectedTags,
          sortBy: sortBy,
          limit: 50
        });
        items = searchResults.map(r => r.item);
      } else if (selectedCategory !== 'all') {
        // Get by category
        items = agentSystem.getLibraryByCategory(selectedCategory, 50);
      } else if (selectedTags.length > 0) {
        // Get by tags
        items = agentSystem.getLibraryByTags(selectedTags, 50);
      } else if (sortBy === 'popular') {
        // Get popular items
        items = agentSystem.getPopularLibraryItems(50);
      } else {
        // Get recent items
        items = agentSystem.getRecentLibraryItems(50);
      }
      
      setLibraryItems(items);
    } catch (error) {
      console.error('Failed to load library items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedTags([]);
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetails(true);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const { default: LibraryManager } = await import('../services/libraryManager.js');
      const libraryManager = LibraryManager;
      
      libraryManager.deleteFromLibrary(itemId);
      loadLibraryItems();
      loadLibraryData();
      setShowDetails(false);
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  const handleFavoriteToggle = async (item) => {
    try {
      const { default: LibraryManager } = await import('../services/libraryManager.js');
      const libraryManager = LibraryManager;
      
      libraryManager.updateLibraryItem(item.id, {
        usage: {
          ...item.usage,
          favorited: !item.usage.favorited
        }
      });
      
      loadLibraryItems();
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('vi-VN');
  };

  const getQualityColor = (quality) => {
    if (quality >= 0.8) return '#4CAF50';
    if (quality >= 0.6) return '#FF9800';
    return '#F44336';
  };

  return (
    <div className="library-manager">
      <div className="library-header">
        <h2>📚 Thư viện Agent Results</h2>
        <div className="library-stats">
          <span className="stat-item">
            <strong>{stats.librarySize || 0}</strong> items
          </span>
          <span className="stat-item">
            <strong>{stats.cacheHitRate ? Math.round(stats.cacheHitRate * 100) : 0}%</strong> cache hit
          </span>
          <span className="stat-item">
            <strong>{stats.averageQuality ? Math.round(stats.averageQuality * 100) : 0}%</strong> avg quality
          </span>
        </div>
      </div>

      <div className="library-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="🔍 Tìm kiếm trong thư viện..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <div className="category-filter">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="category-select"
            >
              <option value="all">Tất cả</option>
              {categories.map(cat => (
                <option key={cat.name} value={cat.name}>
                  {cat.name} ({cat.count})
                </option>
              ))}
            </select>
          </div>

          <div className="sort-filter">
            <label>Sắp xếp:</label>
            <select 
              value={sortBy} 
              onChange={(e) => handleSortChange(e.target.value)}
              className="sort-select"
            >
              <option value="recent">Mới nhất</option>
              <option value="popular">Phổ biến</option>
              <option value="quality">Chất lượng</option>
              <option value="usage">Sử dụng nhiều</option>
            </select>
          </div>
        </div>

        <div className="tags-filter">
          <label>Tags:</label>
          <div className="tags-container">
            {tags.slice(0, 20).map(tag => (
              <button
                key={tag.tag}
                className={`tag-button ${selectedTags.includes(tag.tag) ? 'active' : ''}`}
                onClick={() => handleTagToggle(tag.tag)}
              >
                {tag.tag} ({tag.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="library-content">
        {loading ? (
          <div className="loading">Đang tải...</div>
        ) : libraryItems.length === 0 ? (
          <div className="empty-state">
            <p>Không tìm thấy kết quả nào.</p>
            <p>Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.</p>
          </div>
        ) : (
          <div className="items-grid">
            {libraryItems.map(item => (
              <div 
                key={item.id} 
                className="library-item"
                onClick={() => handleItemClick(item)}
              >
                <div className="item-header">
                  <div className="item-type">
                    <span className="agent-type">{item.agentType}</span>
                    {item.subAgentType && (
                      <span className="sub-agent-type">{item.subAgentType}</span>
                    )}
                  </div>
                  <div className="item-actions">
                    <button
                      className={`favorite-button ${item.usage.favorited ? 'favorited' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteToggle(item);
                      }}
                    >
                      {item.usage.favorited ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
                
                <div className="item-preview">
                  <p className="item-prompt">
                    {item.prompt.length > 100 
                      ? item.prompt.substring(0, 100) + '...' 
                      : item.prompt}
                  </p>
                </div>
                
                <div className="item-meta">
                  <div className="quality-indicator">
                    <span 
                      className="quality-dot"
                      style={{ backgroundColor: getQualityColor(item.quality) }}
                    ></span>
                    <span className="quality-text">
                      {Math.round(item.quality * 100)}%
                    </span>
                  </div>
                  
                  <div className="item-stats">
                    <span className="usage-count">
                      👁 {item.usage.accessCount}
                    </span>
                    <span className="token-count">
                      🪙 {item.tokens}
                    </span>
                  </div>
                  
                  <div className="item-date">
                    {formatDate(item.timestamp)}
                  </div>
                </div>
                
                {item.tags && item.tags.length > 0 && (
                  <div className="item-tags">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="item-tag">{tag}</span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="item-tag-more">+{item.tags.length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {showDetails && selectedItem && (
        <div className="item-details-modal" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Chi tiết Library Item</h3>
              <button 
                className="close-button"
                onClick={() => setShowDetails(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              <div className="detail-section">
                <h4>Agent Information</h4>
                <p><strong>Main Agent:</strong> {selectedItem.agentType}</p>
                {selectedItem.subAgentType && (
                  <p><strong>Sub Agent:</strong> {selectedItem.subAgentType}</p>
                )}
                {selectedItem.microAgentType && (
                  <p><strong>Micro Agent:</strong> {selectedItem.microAgentType}</p>
                )}
              </div>
              
              <div className="detail-section">
                <h4>Prompt</h4>
                <div className="prompt-content">
                  <p>{selectedItem.prompt}</p>
                  <button 
                    className="copy-button"
                    onClick={() => handleCopyToClipboard(selectedItem.prompt)}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>
              
              <div className="detail-section">
                <h4>Result</h4>
                <div className="result-content">
                  <pre className="result-text">{selectedItem.result}</pre>
                  <button 
                    className="copy-button"
                    onClick={() => handleCopyToClipboard(selectedItem.result)}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>
              
              <div className="detail-section">
                <h4>Metadata</h4>
                <div className="metadata-grid">
                  <div className="metadata-item">
                    <strong>Quality:</strong>
                    <span 
                      className="quality-indicator"
                      style={{ color: getQualityColor(selectedItem.quality) }}
                    >
                      {Math.round(selectedItem.quality * 100)}%
                    </span>
                  </div>
                  <div className="metadata-item">
                    <strong>Tokens:</strong> {selectedItem.tokens}
                  </div>
                  <div className="metadata-item">
                    <strong>Processing Time:</strong> {selectedItem.processingTime}ms
                  </div>
                  <div className="metadata-item">
                    <strong>Access Count:</strong> {selectedItem.usage.accessCount}
                  </div>
                  <div className="metadata-item">
                    <strong>Created:</strong> {formatDate(selectedItem.timestamp)}
                  </div>
                  <div className="metadata-item">
                    <strong>Last Accessed:</strong> {formatDate(selectedItem.usage.lastAccessed)}
                  </div>
                </div>
              </div>
              
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="detail-section">
                  <h4>Tags</h4>
                  <div className="tags-list">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="modal-footer">
              <button 
                className="delete-button"
                onClick={() => handleDeleteItem(selectedItem.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryManager;
