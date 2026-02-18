import React, { useState } from 'react'
import './CharacterPrompts.css'

const CharacterPrompts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [customPrompt, setCustomPrompt] = useState('')

  const categories = [
    { id: 'all', label: 'All Categories', icon: '🎭' },
    { id: 'appearance', label: 'Appearance', icon: '👤' },
    { id: 'personality', label: 'Personality', icon: '🧠' },
    { id: 'background', label: 'Background', icon: '📖' },
    { id: 'skills', label: 'Skills & Abilities', icon: '⚡' },
    { id: 'relationships', label: 'Relationships', icon: '👥' }
  ]

  const promptTemplates = [
    {
      id: 1,
      category: 'appearance',
      title: 'Physical Description',
      template: 'Create a detailed physical description of a {age} {gender} with {hair_color} hair and {eye_color} eyes. Include details about their height, build, distinctive features, and clothing style that reflects their {profession}.',
      variables: ['age', 'gender', 'hair_color', 'eye_color', 'profession']
    },
    {
      id: 2,
      category: 'personality',
      title: 'Character Traits',
      template: 'Describe a character with a {personality_type} personality. Include their core values, fears, desires, and how they {behavior_pattern} in different situations. Show their {unique_trait} that makes them memorable.',
      variables: ['personality_type', 'behavior_pattern', 'unique_trait']
    },
    {
      id: 3,
      category: 'background',
      title: 'Backstory',
      template: 'Create a compelling backstory for a {role} who grew up in {environment}. Include key life events that shaped their {motivation} and any {trauma_or_joy} that influences their current decisions.',
      variables: ['role', 'environment', 'motivation', 'trauma_or_joy']
    },
    {
      id: 4,
      category: 'skills',
      title: 'Special Abilities',
      template: 'Design a character with exceptional {skill_type} abilities. Describe how they acquired these skills through {learning_method}, their current {skill_level}, and how they {application_method} these abilities in their daily life.',
      variables: ['skill_type', 'learning_method', 'skill_level', 'application_method']
    },
    {
      id: 5,
      category: 'relationships',
      title: 'Social Connections',
      template: 'Detail the important relationships in a {character_type}\'s life, including their {relationship_type} with {person_name}, their {relationship_dynamics}, and how these connections {impact_on_character}.',
      variables: ['character_type', 'relationship_type', 'person_name', 'relationship_dynamics', 'impact_on_character']
    },
    {
      id: 6,
      category: 'appearance',
      title: 'Fantasy Character',
      template: 'Create a {race} {class} from {realm} with {distinctive_feature}. Describe their magical {abilities}, physical {attributes}, and the {symbolism} of their appearance that reflects their {alignment}.',
      variables: ['race', 'class', 'realm', 'distinctive_feature', 'abilities', 'attributes', 'symbolism', 'alignment']
    }
  ]

  const filteredPrompts = selectedCategory === 'all' 
    ? promptTemplates 
    : promptTemplates.filter(prompt => prompt.category === selectedCategory)

  const handleTemplateSelect = (template) => {
    setCustomPrompt(template.template)
  }

  const handleVariableReplace = (template, variables) => {
    let result = template
    variables.forEach(variable => {
      const value = prompt(`Enter value for ${variable}:`)
      if (value) {
        result = result.replace(new RegExp(`{${variable}}`, 'g'), value)
      }
    })
    return result
  }

  const handleGeneratePrompt = (template) => {
    const filledPrompt = handleVariableReplace(template.template, template.variables)
    setCustomPrompt(filledPrompt)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="character-prompts">
      <div className="character-header">
        <h2>Character Prompt Generator</h2>
        <p>Create detailed character descriptions for your 3D models and stories</p>
      </div>

      <div className="category-selector">
        <h3>Categories:</h3>
        <div className="category-grid">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="prompt-templates">
        <h3>Prompt Templates:</h3>
        <div className="template-grid">
          {filteredPrompts.map(template => (
            <div key={template.id} className="template-card">
              <div className="template-header">
                <h4>{template.title}</h4>
                <span className="template-category">{template.category}</span>
              </div>
              <div className="template-content">
                <p>{template.template}</p>
              </div>
              <div className="template-variables">
                <strong>Variables:</strong> {template.variables.join(', ')}
              </div>
              <div className="template-actions">
                <button 
                  onClick={() => handleTemplateSelect(template)}
                  className="use-template-btn"
                >
                  Use Template
                </button>
                <button 
                  onClick={() => handleGeneratePrompt(template)}
                  className="generate-btn"
                >
                  Fill Variables
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="custom-prompt-builder">
        <h3>Custom Prompt Builder:</h3>
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder="Edit your prompt here or select a template above..."
          className="custom-prompt-textarea"
          rows={8}
        />
        <div className="prompt-actions">
          <button 
            onClick={() => copyToClipboard(customPrompt)}
            className="copy-btn"
            disabled={!customPrompt}
          >
            📋 Copy Prompt
          </button>
          <button 
            onClick={() => setCustomPrompt('')}
            className="clear-btn"
            disabled={!customPrompt}
          >
            🗑️ Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterPrompts
