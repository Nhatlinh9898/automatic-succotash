import React, { useState, useEffect } from 'react'

const History = () => {
  const [history, setHistory] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [expandedItems, setExpandedItems] = useState(new Set())

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('ai-prompt-history')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const filteredHistory = history
    .filter(item => 
      item.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.response.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.timestamp) - new Date(a.timestamp)
      if (sortBy === 'prompt') return a.prompt.localeCompare(b.prompt)
      if (sortBy === 'length') return b.response.length - a.response.length
      return 0
    })

  const toggleExpand = (id) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const deleteItem = (id) => {
    const newHistory = history.filter(item => item.id !== id)
    setHistory(newHistory)
    localStorage.setItem('ai-prompt-history', JSON.stringify(newHistory))
  }

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      setHistory([])
      localStorage.removeItem('ai-prompt-history')
    }
  }

  const exportHistory = () => {
    const dataStr = JSON.stringify(history, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `ai-prompt-history-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="history">
      <div className="history-header">
        <h2>Prompt History</h2>
        <div className="history-actions">
          <button onClick={exportHistory} className="export-btn">
            📥 Export
          </button>
          <button onClick={clearHistory} className="clear-btn">
            🗑️ Clear All
          </button>
        </div>
      </div>

      <div className="history-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search prompts or responses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="sort-controls">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="date">Date</option>
            <option value="prompt">Prompt</option>
            <option value="length">Response Length</option>
          </select>
        </div>
      </div>

      <div className="history-list">
        {filteredHistory.length === 0 ? (
          <div className="empty-history">
            <div className="empty-icon">📝</div>
            <h3>No history found</h3>
            <p>
              {searchTerm ? 'No results match your search.' : 'Start generating prompts to see your history here.'}
            </p>
          </div>
        ) : (
          filteredHistory.map(item => (
            <div key={item.id} className="history-item">
              <div className="history-item-header">
                <div className="history-item-meta">
                  <span className="timestamp">
                    {new Date(item.timestamp).toLocaleString()}
                  </span>
                  <span className="word-count">
                    {item.response.split(' ').length} words
                  </span>
                </div>
                <div className="history-item-actions">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="expand-btn"
                  >
                    {expandedItems.has(item.id) ? '📕' : '📖'}
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              
              <div className="history-item-content">
                <div className="prompt-section">
                  <h4>Prompt:</h4>
                  <p className="prompt-text">
                    {expandedItems.has(item.id) 
                      ? item.prompt 
                      : item.prompt.length > 200 
                        ? item.prompt.substring(0, 200) + '...' 
                        : item.prompt
                    }
                  </p>
                </div>
                
                <div className="response-section">
                  <h4>Response:</h4>
                  <p className="response-text">
                    {expandedItems.has(item.id) 
                      ? item.response 
                      : item.response.length > 300 
                        ? item.response.substring(0, 300) + '...' 
                        : item.response
                    }
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default History
