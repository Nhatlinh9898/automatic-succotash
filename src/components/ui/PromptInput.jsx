import React, { useState } from 'react'

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
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Templates:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {templates.map(template => (
            <button
              key={`template-${template.id}`}
              type="button"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTemplate === template.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTemplateSelect(template)}
            >
              {template.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            key="prompt-textarea"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here... or select a template above"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            rows={6}
            disabled={disabled}
          />
          <div className="flex justify-between items-center mt-2">
            <button
              key="clear-button"
              type="button"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                setPrompt('')
                setSelectedTemplate('')
              }}
              disabled={disabled}
            >
              Clear
            </button>
            <span key="char-count" className="text-sm text-gray-500">{prompt.length} characters</span>
          </div>
        </div>

        <button
          key="submit-button"
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          disabled={loading || disabled || !prompt.trim()}
        >
          {loading ? (
            <React.Fragment key="loading-content">
              <div key="loading-spinner" className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </React.Fragment>
          ) : (
            <React.Fragment key="generate-content">
              <span key="generate-icon">✨</span>
              Generate AI Response
            </React.Fragment>
          )}
        </button>
      </form>
    </div>
  )
}

export default PromptInput
