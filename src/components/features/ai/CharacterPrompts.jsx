import React, { useState } from 'react'

// Move promptTemplates outside component to allow export
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
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl p-5 lg:p-10 shadow-2xl border-2 border-gray-200 relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-indigo-500 hover:shadow-3xl hover:-translate-y-0.5">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
      <div className="text-center mb-8 lg:mb-10 pb-6 lg:pb-8 border-b-2 border-gray-200 relative z-10">
        <h2 className="m-0 mb-4 text-2xl lg:text-4xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
          <span className="text-2xl lg:text-3xl animate-bounce">🎭</span>
          Character Prompt Generator
        </h2>
        <p className="m-0 text-base lg:text-lg text-gray-600 font-medium">Create detailed character descriptions for your 3D models and stories</p>
      </div>

      <div className="mb-8 lg:mb-10 relative z-10">
        <h3 className="m-0 mb-4 lg:mb-6 text-xl lg:text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-lg lg:text-xl">📂</span>
          Categories:
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 lg:gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              className={`bg-gray-50 border-2 border-gray-200 p-3 lg:p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center gap-2 lg:gap-3 relative overflow-hidden hover:bg-gradient-to-br hover:from-indigo-50 hover:via-purple-50 hover:to-pink-50 hover:border-indigo-500 hover:-translate-y-1 hover:shadow-lg before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-indigo-100 before:to-transparent before:transition-all before:duration-700 hover:before:left-full ${
                selectedCategory === category.id ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-indigo-500 shadow-lg -translate-y-1 font-semibold after:absolute after:top-2 after:right-2 after:w-2 after:h-2 after:bg-white after:rounded-full after:animate-pulse' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className={`text-xl lg:text-2xl transition-transform duration-300 ${selectedCategory === category.id ? 'scale-125 drop-shadow-md' : 'hover:scale-110 hover:rotate-12'}`}>{category.icon}</span>
              <span className="text-xs lg:text-sm font-medium text-center">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 lg:mb-10 relative z-10">
        <h3 className="m-0 mb-4 lg:mb-6 text-xl lg:text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-lg lg:text-xl">📝</span>
          Prompt Templates:
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-4 lg:gap-6">
          {filteredPrompts.map(template => (
            <div key={template.id} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 relative hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-indigo-50 before:to-transparent before:transition-all before:duration-700 hover:before:left-full">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 lg:p-5 border-b-2 border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-3">
                <h4 className="m-0 text-lg lg:text-xl font-semibold text-gray-800">{template.title}</h4>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 lg:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">{template.category}</span>
              </div>
              <div className="p-4 lg:p-6">
                <p className="m-0 text-gray-600 leading-relaxed text-sm lg:text-base italic">{template.template}</p>
              </div>
              <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-xs lg:text-sm text-gray-500 bg-gray-50">
                <strong className="text-gray-700 font-semibold">Variables:</strong> {template.variables.join(', ')}
              </div>
              <div className="p-4 lg:p-6 border-t-2 border-gray-200 flex flex-col lg:flex-row gap-3 lg:gap-4 bg-gray-50">
                <button 
                  onClick={() => handleTemplateSelect(template)}
                  className="flex-1 p-3 lg:p-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg before:content-['📋'] before:text-sm lg:before:text-base"
                >
                  <span className="opacity-0">Use Template</span>
                </button>
                <button 
                  onClick={() => handleGeneratePrompt(template)}
                  className="flex-1 p-3 lg:p-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg before:content-['✨'] before:text-sm lg:before:text-base"
                >
                  <span className="opacity-0">Fill Variables</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 lg:mt-10 relative z-10">
        <h3 className="m-0 mb-4 lg:mb-6 text-xl lg:text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-lg lg:text-xl">🔧</span>
          Custom Prompt Builder:
        </h3>
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder="Edit your prompt here or select a template above..."
          className="w-full p-4 lg:p-6 border-2 border-gray-200 rounded-xl text-sm lg:text-base font-inherit resize-y min-h-[150px] lg:min-h-[180px] transition-all duration-300 bg-white text-gray-800 leading-relaxed focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:-translate-y-0.5 placeholder-gray-400 placeholder:italic"
          rows={8}
        />
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-4 lg:mt-6">
          <button 
            onClick={() => copyToClipboard(customPrompt)}
            className="px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-sm"
            disabled={!customPrompt}
          >
            📋 Copy Prompt
          </button>
          <button 
            onClick={() => setCustomPrompt('')}
            className="px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-sm"
            disabled={!customPrompt}
          >
            🗑️ Clear
          </button>
        </div>
      </div>
    </div>
  )
}

// Export prompt templates for use in other components
export { promptTemplates };

export default CharacterPrompts
