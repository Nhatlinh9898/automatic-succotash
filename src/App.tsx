import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Header, Sidebar, ErrorBoundary } from './components/layout'
import { PromptInput, ResponseDisplay, FeatureShowcase } from './components/ui'
import { History, Settings, TokenManager, LibraryManager, FrameworkIntegration, MCPresenter, RealtimeCollaboration } from './components/utilities'
import { AICharacterGenerator, AITokenDemo, CharacterPrompts, CharacterSystem } from './components/features/ai'
import { AgentManager, AgentSystemDemo, MicroAgentManager, SubAgentManager, MultiAgentDemo } from './components/features/agents'
import { ParticleEffectsDemo, PhysicsPlayground, TerrainGenerator, ThreeJSScene, ShaderEditor, AudioVisualizer } from './components/features/demos'
import { WebXRDemo } from './components/features/webxr'
import aiService from './services/aiService'
import './App.css'

interface Settings {
  apiKey: string;
  model: string;
  temperature: number;
  maxTokens: number;
  theme: string;
  autoSave: boolean;
}

interface HistoryItem {
  id: number;
  prompt: string;
  response: string;
  timestamp: string;
  settings: {
    model: string;
  };
}

// Component to handle routing logic
function AppContent() {
  const location = useLocation();
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [settings, setSettings] = useState<Settings>({
    apiKey: '',
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    maxTokens: 1000,
    theme: 'light',
    autoSave: true
  })
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    // Load saved settings and history
    const savedSettings = localStorage.getItem('ai-settings')
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (e) {
        console.error('Error parsing saved settings:', e)
      }
    }
    
    const savedHistory = localStorage.getItem('ai-prompt-history')
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory))
      } catch (e) {
        console.error('Error parsing saved history:', e)
      }
    }
  }, [])

  const generatePrompt = async (promptText: string): Promise<void> => {
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
      
      // Ensure result is not undefined or null
      if (result) {
        setResponse(result)
        
        // Save to history if auto-save is enabled
        if (settings.autoSave) {
          const historyItem: HistoryItem = {
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
      } else {
        setError('No response received from AI service. Please try again.')
      }
      
    } catch (err: any) {
      console.error('Generate prompt error:', err)
      const errorMessage = err?.message || err?.toString() || 'Failed to generate response. Please try again.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleSettingsChange = (newSettings: Settings): void => {
    setSettings(newSettings)
    localStorage.setItem('ai-settings', JSON.stringify(newSettings))
  }

  // Get active tab from current path
  const getActiveTabFromPath = (): string => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path.startsWith('/history')) return 'history';
    if (path.startsWith('/settings')) return 'settings';
    if (path.startsWith('/characters')) return 'characters';
    if (path.startsWith('/showcase')) return 'showcase';
    if (path.startsWith('/agents')) return 'agents';
    if (path.startsWith('/webxr')) return 'webxr';
    if (path.startsWith('/particles')) return 'particles';
    if (path.startsWith('/character-generator')) return 'character-generator';
    if (path.startsWith('/physics')) return 'physics';
    if (path.startsWith('/collaboration')) return 'collaboration';
    if (path.startsWith('/terrain')) return 'terrain';
    if (path.startsWith('/audio-visualizer')) return 'audio-visualizer';
    if (path.startsWith('/shader-editor')) return 'shader-editor';
    if (path.startsWith('/framework-integration')) return 'framework-integration';
    return 'home';
  };

  const activeTab: string = getActiveTabFromPath();

  return (
    <div className="app">
      <Header activeTab={activeTab} />
      <Sidebar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/home" element={
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
          } />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={
            <Settings 
              settings={settings}
              onSettingsChange={handleSettingsChange}
            />
          } />
          <Route path="/characters" element={<CharacterPrompts />} />
          <Route path="/showcase" element={<FeatureShowcase />} />
          <Route path="/agents" element={<AgentSystemDemo />} />
          <Route path="/webxr" element={<WebXRDemo />} />
          <Route path="/particles" element={<ParticleEffectsDemo />} />
          <Route path="/character-generator" element={<AICharacterGenerator />} />
          <Route path="/physics" element={<PhysicsPlayground />} />
          <Route path="/collaboration" element={<RealtimeCollaboration />} />
          <Route path="/terrain" element={<TerrainGenerator />} />
          <Route path="/audio-visualizer" element={<AudioVisualizer />} />
          <Route path="/shader-editor" element={<ShaderEditor />} />
          <Route path="/framework-integration" element={<FrameworkIntegration />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
      </Router>
    </ErrorBoundary>
  )
}

export default App
