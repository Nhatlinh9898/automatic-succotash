import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import PromptInput from './components/PromptInput'
import ResponseDisplay from './components/ResponseDisplay'
import History from './components/History'
import Settings from './components/Settings'
import CharacterPrompts from './components/CharacterPrompts'
import ErrorBoundary from './components/ErrorBoundary'
import FeatureShowcase from './components/FeatureShowcase'
import AgentSystemDemo from './components/AgentSystemDemo'
import WebXRDemo from './components/WebXRDemo'
import ParticleEffectsDemo from './components/ParticleEffectsDemo'
import AICharacterGenerator from './components/AICharacterGenerator'
import PhysicsPlayground from './components/PhysicsPlayground'
import RealtimeCollaboration from './components/RealtimeCollaboration'
import TerrainGenerator from './components/TerrainGenerator'
import AudioVisualizer from './components/AudioVisualizer'
import ShaderEditor from './components/ShaderEditor'
import aiService from './services/aiService'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [settings, setSettings] = useState({
    apiKey: '',
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    maxTokens: 1000,
    theme: 'light',
    autoSave: true
  })
  const [history, setHistory] = useState([])

  useEffect(() => {
    // Load saved settings and history
    const savedSettings = localStorage.getItem('ai-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
    
    const savedHistory = localStorage.getItem('ai-prompt-history')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const generatePrompt = async (promptText) => {
    if (!promptText.trim()) return
    
    setLoading(true)
    setError('')
    setResponse('')
    
    try {
      const result = await aiService.generatePrompt(promptText, {
        model: settings.model,
        temperature: settings.temperature,
        maxTokens: settings.maxTokens
      })
      
      setResponse(result)
      
      // Save to history if auto-save is enabled
      if (settings.autoSave) {
        const historyItem = {
          id: Date.now(),
          prompt: promptText,
          response: result,
          timestamp: new Date().toISOString(),
          settings: { model: settings.model }
        }
        
        const newHistory = [historyItem, ...history].slice(0, 100) // Keep last 100 items
        setHistory(newHistory)
        localStorage.setItem('ai-prompt-history', JSON.stringify(newHistory))
      }
      
    } catch (err) {
      setError(err.message || 'Failed to generate response. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings)
    localStorage.setItem('ai-settings', JSON.stringify(newSettings))
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="home-content">
            <PromptInput 
              onGenerate={generatePrompt}
              loading={loading}
              disabled={false}
            />
            <ResponseDisplay 
              response={response}
              loading={loading}
              error={error}
            />
          </div>
        )
      case 'history':
        return <History />
      case 'settings':
        return (
          <Settings 
            settings={settings}
            onSettingsChange={handleSettingsChange}
          />
        )
      case 'characters':
        return <CharacterPrompts />
      case 'showcase':
        return <FeatureShowcase />
      case 'agents':
        return <AgentSystemDemo />
      case 'webxr':
        return <WebXRDemo />
      case 'particles':
        return <ParticleEffectsDemo />
      case 'character-generator':
        return <AICharacterGenerator />
      case 'physics':
        return <PhysicsPlayground />
      case 'collaboration':
        return <RealtimeCollaboration />
      case 'terrain':
        return <TerrainGenerator />
      case 'audio-visualizer':
        return <AudioVisualizer />
      case 'shader-editor':
        return <ShaderEditor />
      default:
        return null
    }
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="app-main">
          {renderContent()}
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
