import React, { useState, useEffect } from 'react'
import './Settings.css'

const Settings = ({ settings, onSettingsChange }) => {
  const [localSettings, setLocalSettings] = useState({
    apiKey: '',
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    maxTokens: 1000,
    theme: 'light',
    autoSave: true,
    ...settings
  })

  useEffect(() => {
    setLocalSettings(prev => ({ ...prev, ...settings }))
  }, [settings])

  const handleChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value }
    setLocalSettings(newSettings)
    onSettingsChange(newSettings)
  }

  const handleReset = () => {
    const defaultSettings = {
      apiKey: '',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      maxTokens: 1000,
      theme: 'light',
      autoSave: true
    }
    setLocalSettings(defaultSettings)
    onSettingsChange(defaultSettings)
  }

  const models = [
    { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
    { value: 'gpt-4', label: 'GPT-4' },
    { value: 'claude-3', label: 'Claude 3' },
    { value: 'local-model', label: 'Local Model' }
  ]

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <div className="settings-sections">
        <section className="settings-section">
          <h3>API Configuration</h3>
          
          <div className="setting-group">
            <label htmlFor="apiKey">API Key</label>
            <input
              id="apiKey"
              type="password"
              value={localSettings.apiKey}
              onChange={(e) => handleChange('apiKey', e.target.value)}
              placeholder="Enter your API key"
            />
            <small>Keep your API key secure and private</small>
          </div>

          <div className="setting-group">
            <label htmlFor="model">AI Model</label>
            <select
              id="model"
              value={localSettings.model}
              onChange={(e) => handleChange('model', e.target.value)}
            >
              {models.map(model => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>
          </div>

          <div className="setting-group">
            <label htmlFor="temperature">Temperature: {localSettings.temperature}</label>
            <input
              id="temperature"
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={localSettings.temperature}
              onChange={(e) => handleChange('temperature', parseFloat(e.target.value))}
            />
            <small>Controls randomness: 0 = focused, 2 = creative</small>
          </div>

          <div className="setting-group">
            <label htmlFor="maxTokens">Max Tokens: {localSettings.maxTokens}</label>
            <input
              id="maxTokens"
              type="range"
              min="100"
              max="4000"
              step="100"
              value={localSettings.maxTokens}
              onChange={(e) => handleChange('maxTokens', parseInt(e.target.value))}
            />
            <small>Maximum response length</small>
          </div>
        </section>

        <section className="settings-section">
          <h3>Appearance</h3>
          
          <div className="setting-group">
            <label htmlFor="theme">Theme</label>
            <select
              id="theme"
              value={localSettings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div className="setting-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={localSettings.autoSave}
                onChange={(e) => handleChange('autoSave', e.target.checked)}
              />
              <span className="checkmark"></span>
              Auto-save responses
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h3>Actions</h3>
          <div className="settings-actions">
            <button onClick={handleReset} className="reset-settings-btn">
              Reset to Default
            </button>
            <button className="export-settings-btn">
              Export Settings
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Settings
