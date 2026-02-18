import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  return (
    <div className={`loading-spinner-container ${fullScreen ? 'fullscreen' : ''}`}>
      <div className={`spinner ${size}`}>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
