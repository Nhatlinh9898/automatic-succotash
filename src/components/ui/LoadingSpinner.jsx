import React from 'react'

const LoadingSpinner = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }

  const containerClasses = fullScreen 
    ? 'fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-50'
    : 'flex flex-col items-center justify-center'

  return (
    <div className={containerClasses}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-150"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-300"></div>
      </div>
      {text && <p className="mt-4 text-gray-600 text-sm font-medium animate-pulse">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
