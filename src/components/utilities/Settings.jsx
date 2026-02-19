import React, { useState, useEffect } from 'react'
import './Settings.css'

const Settings = ({ settings, onSettingsChange }) => {
  const [localSettings, setLocalSettings] = useState({
    apiKey: '',
    model: 'llama3.2:3b',
    temperature: 0.7,
    maxTokens: 1000,
    theme: 'dark',
    autoSave: true,
    language: 'en',
    notifications: true,
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
      model: 'llama3.2:3b',
      temperature: 0.7,
      maxTokens: 1000,
      theme: 'dark',
      autoSave: true,
      language: 'en',
      notifications: true
    }
    setLocalSettings(defaultSettings)
    onSettingsChange(defaultSettings)
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(localSettings, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    
    const exportFileDefaultName = 'settings.json'
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  const models = [
    { value: 'llama3.2:3b', label: 'Llama 3.2 3B (Local - Free)' },
    { value: 'llama3:8b', label: 'Llama 3 8B (Local - Free)' },
    { value: 'mistral:7b', label: 'Mistral 7B (Local - Free)' },
    { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo (OpenAI)' },
    { value: 'gpt-4', label: 'GPT-4 (OpenAI)' },
    { value: 'gpt-4-turbo', label: 'GPT-4 Turbo (OpenAI)' },
    { value: 'claude-3', label: 'Claude 3 (Anthropic)' },
    { value: 'claude-3-opus', label: 'Claude 3 Opus (Anthropic)' }
  ]

  const themes = [
    { value: 'light', label: 'Sáng' },
    { value: 'dark', label: 'Tối' },
    { value: 'auto', label: 'Tự động' }
  ]

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'zh', label: '中文' },
    { value: 'ja', label: '日本語' }
  ]

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Cài Đặt</h2>
        <p>Cấu hình preferences và API settings của bạn</p>
      </div>
      
      <div className="settings-sections">
        <section className="settings-section">
          <div className="section-header">
            <svg className="section-icon api" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <h3>Cấu Hình API</h3>
          </div>
          
          <div className="form-group">
            <label htmlFor="apiKey" className="form-label">
              <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              API Key
            </label>
            <div className="form-input-wrapper">
              <input
                id="apiKey"
                type="password"
                value={localSettings.apiKey}
                onChange={(e) => handleChange('apiKey', e.target.value)}
                placeholder="Nhập API key của bạn"
                className="form-input"
              />
              <div className="input-focus-overlay api"></div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="model" className="form-label">
              <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Mô Hình AI
            </label>
            <div className="form-input-wrapper">
              <select
                id="model"
                value={localSettings.model}
                onChange={(e) => handleChange('model', e.target.value)}
                className="form-select"
              >
                {models.map(model => (
                  <option key={model.value} value={model.value}>
                    {model.label}
                  </option>
                ))}
              </select>
              <svg className="select-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="input-focus-overlay model"></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="temperature" className="form-label">
              <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Mức Độ Ngẫu Nhiên: {localSettings.temperature}
            </label>
            <div className="slider-container">
              <input
                id="temperature"
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={localSettings.temperature}
                onChange={(e) => handleChange('temperature', parseFloat(e.target.value))}
                className="form-slider"
              />
              <div className="input-focus-overlay temperature"></div>
            </div>
            <p className="slider-description">0 = tập trung, 2 = sáng tạo</p>
          </div>

          <div className="form-group">
            <label htmlFor="maxTokens" className="form-label">
              <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Token Tối Đa: {localSettings.maxTokens}
            </label>
            <div className="slider-container">
              <input
                id="maxTokens"
                type="range"
                min="100"
                max="4000"
                step="100"
                value={localSettings.maxTokens}
                onChange={(e) => handleChange('maxTokens', parseInt(e.target.value))}
                className="form-slider"
              />
              <div className="input-focus-overlay tokens"></div>
            </div>
            <p className="slider-description">Độ dài phản hồi tối đa</p>
          </div>
        </section>

        <section className="settings-section">
          <div className="section-header">
            <svg className="section-icon appearance" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm7-14h6a2 2 0 012 2v6a2 2 0 01-2 2h-6V7z" />
            </svg>
            <h3>Giao Diện</h3>
          </div>
          
          <div className="form-group">
            <label htmlFor="theme" className="form-label">Chủ Đề</label>
            <div className="form-input-wrapper">
              <select
                id="theme"
                value={localSettings.theme}
                onChange={(e) => handleChange('theme', e.target.value)}
                className="form-select"
              >
                {themes.map(theme => (
                  <option key={theme.value} value={theme.value}>
                    {theme.label}
                  </option>
                ))}
              </select>
              <svg className="select-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="input-focus-overlay theme"></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="language" className="form-label">Ngôn Ngữ</label>
            <div className="form-input-wrapper">
              <select
                id="language"
                value={localSettings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="form-select"
              >
                {languages.map(lang => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <svg className="select-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="input-focus-overlay theme"></div>
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={localSettings.autoSave}
                onChange={(e) => handleChange('autoSave', e.target.checked)}
                className="form-checkbox"
              />
              <span className="checkbox-label">Tự động lưu phản hồi</span>
            </label>
          </div>

          <div className="form-group">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={localSettings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
                className="form-checkbox"
              />
              <span className="checkbox-label">Bật thông báo</span>
            </label>
          </div>
        </section>

        <section className="settings-section">
          <div className="section-header">
            <svg className="section-icon actions" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <h3>Hành Động</h3>
          </div>
          <div className="action-buttons">
            <button 
              onClick={handleReset} 
              className="action-button reset"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Mặc Định
            </button>
            <button 
              onClick={handleExport}
              className="action-button export"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Xuất Cài Đặt
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Settings
