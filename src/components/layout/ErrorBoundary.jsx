import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to console or error reporting service
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full border border-red-200">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🚨</div>
              <h2 className="text-2xl font-bold text-red-800 mb-2">Something went wrong</h2>
              <p className="text-gray-600">We're sorry, but something unexpected happened.</p>
            </div>
            
            <div className="mb-6">
              <details className="bg-red-50 border border-red-200 rounded-lg p-4">
                <summary className="cursor-pointer font-semibold text-red-800 hover:text-red-700 transition-colors">
                  Error Details
                </summary>
                <pre className="mt-4 text-xs text-red-700 bg-red-100 p-3 rounded overflow-x-auto whitespace-pre-wrap">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo?.componentStack || 'No component stack available'}
                </pre>
              </details>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button 
                onClick={this.handleReset} 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
