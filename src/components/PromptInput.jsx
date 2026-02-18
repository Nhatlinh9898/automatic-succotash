import React, { useState } from 'react'
import './PromptInput.css'

const PromptInput = ({ onGenerate, loading, disabled }) => {
  const [prompt, setPrompt] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('')

  const templates = [
    { id: 'character', label: 'Character Design', text: 'Create a detailed character description for a 3D model...' },
    { id: 'scene', label: 'Scene Description', text: 'Describe a detailed 3D scene with environment...' },
    { id: 'animation', label: 'Animation Prompt', text: 'Create an animation sequence for a 3D character...' },
    { id: 'story', label: 'Story Element', text: 'Generate a story element for 3D visualization...' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim() && !loading) {
      onGenerate(prompt)
    }
  }

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template.id)
    setPrompt(template.text)
  }

  return (
    <div className="prompt-input">
      <div className="template-selector">
        <h3>Quick Templates:</h3>
        <div className="template-grid">
          {templates.map(template => (
            <button
              key={template.id}
              className={`template-btn ${selectedTemplate === template.id ? 'active' : ''}`}
              onClick={() => handleTemplateSelect(template)}
            >
              {template.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="prompt-form">
        <div className="input-group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here... or select a template above"
            className="prompt-textarea"
            rows={6}
            disabled={disabled}
          />
          <div className="input-actions">
            <button
              type="button"
              className="clear-btn"
              onClick={() => {
                setPrompt('')
                setSelectedTemplate('')
              }}
              disabled={disabled}
            >
              Clear
            </button>
            <span className="char-count">{prompt.length} characters</span>
          </div>
        </div>

        <button
          type="submit"
          className="generate-btn"
          disabled={loading || disabled || !prompt.trim()}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            <>
              <span className="icon">✨</span>
              Generate AI Response
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default PromptInput
