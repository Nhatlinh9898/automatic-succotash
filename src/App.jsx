import React, { useState } from 'react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const generatePrompt = async () => {
    if (!prompt.trim()) return
    
    setLoading(true)
    try {
      // Simulate AI API call - replace with actual API endpoint
      const mockResponse = `AI Response for: "${prompt}"\n\nThis is a simulated response. In a real implementation, you would connect to an AI service like OpenAI, Claude, or a local AI model.`
      setResponse(mockResponse)
    } catch (error) {
      setResponse('Error occurred while processing your request.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Prompt Assistant</h1>
        <p>Enter your prompt and get AI-powered responses</p>
      </header>
      
      <main className="app-main">
        <div className="prompt-container">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="prompt-input"
            rows={4}
          />
          <button 
            onClick={generatePrompt}
            disabled={loading || !prompt.trim()}
            className="generate-button"
          >
            {loading ? 'Processing...' : 'Generate Response'}
          </button>
        </div>
        
        {response && (
          <div className="response-container">
            <h3>AI Response:</h3>
            <div className="response-content">
              {response}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
