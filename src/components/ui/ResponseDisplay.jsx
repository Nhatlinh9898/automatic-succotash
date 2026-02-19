import React, { useState } from 'react'

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
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AI is thinking...</h3>
          <p className="text-gray-600">Generating your personalized response</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">Error Occurred</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!response) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-8">
        <div className="text-center py-12">
          <div className="text-4xl mb-4 opacity-50">💭</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Response Yet</h3>
          <p className="text-gray-500">Enter a prompt and click Generate to see AI response here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">AI Response</h3>
        <div className="flex gap-2">
          <button 
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={handleCopy}
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
          <button 
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
            onClick={handleExport}
          >
            📥 Export
          </button>
          <button 
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              expanded ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? '📕 Collapse' : '📖 Expand'}
          </button>
        </div>
      </div>

      <div className={`p-6 ${expanded ? 'max-h-none' : 'max-h-64 overflow-y-auto'}`}>
        <div className="prose prose-sm max-w-none">
          {response.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200 p-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex gap-4">
          <span className="font-medium">
            {response.split(' ').length} words
          </span>
          <span className="font-medium">
            {response.length} characters
          </span>
        </div>
        <div className="text-gray-500">
          Generated at {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}

export default ResponseDisplay
