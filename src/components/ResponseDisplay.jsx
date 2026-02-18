import React, { useState } from 'react'
import './ResponseDisplay.css'

const ResponseDisplay = ({ response, loading, error }) => {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(response)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleExport = () => {
    const blob = new Blob([response], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ai-response-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="response-display loading">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <h3>AI is thinking...</h3>
          <p>Generating your personalized response</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="response-display error">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3>Error Occurred</h3>
          <p>{error}</p>
          <button className="retry-btn">Try Again</button>
        </div>
      </div>
    )
  }

  if (!response) {
    return (
      <div className="response-display empty">
        <div className="empty-container">
          <div className="empty-icon">💭</div>
          <h3>No Response Yet</h3>
          <p>Enter a prompt and click Generate to see AI response here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="response-display">
      <div className="response-header">
        <h3>AI Response</h3>
        <div className="response-actions">
          <button 
            className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
          <button className="export-btn" onClick={handleExport}>
            📥 Export
          </button>
          <button 
            className={`expand-btn ${expanded ? 'expanded' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? '📕 Collapse' : '📖 Expand'}
          </button>
        </div>
      </div>

      <div className={`response-content ${expanded ? 'expanded' : ''}`}>
        <div className="response-text">
          {response.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="response-footer">
        <div className="response-stats">
          <span className="word-count">
            {response.split(' ').length} words
          </span>
          <span className="char-count">
            {response.length} characters
          </span>
        </div>
        <div className="response-meta">
          <span className="timestamp">
            Generated at {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ResponseDisplay
