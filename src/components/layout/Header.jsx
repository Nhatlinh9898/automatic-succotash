import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ activeTab }) => {
  return (
    <header className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-white/10 overflow-hidden relative">
      {/* Animated background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient opacity-20 animate-spin-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 flex justify-center items-center relative z-10">
        <div className="flex flex-col gap-1 flex-shrink-0">
          <Link to="/" className="text-decoration-none text-inherit transition-opacity duration-200 hover:opacity-90">
            <h1 className="m-0 text-4xl font-extrabold flex items-center gap-4 leading-tight text-shadow relative">
              <span className="text-5xl animate-bounce-slow drop-shadow-lg relative">
                {/* Logo glow effect */}
                <span className="absolute inset-0 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-radial-glow rounded-full animate-pulse-slow"></span>
                🤖
              </span>
              AI Prompt Assistant
            </h1>
          </Link>
          <p className="m-0 text-base opacity-95 font-medium text-white/90 text-shadow tracking-wide">
            Powered by Advanced AI Technology
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          33% { transform: translate(-30%, -40%) rotate(120deg); }
          66% { transform: translate(-40%, -30%) rotate(240deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
        }
        
        .bg-radial-glow {
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
        }
        
        .animate-spin-slow {
          animation: spin-slow 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite alternate;
        }
        
        .text-shadow {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .drop-shadow-lg {
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }
        
        .text-decoration-none {
          text-decoration: none;
        }
        
        .text-inherit {
          color: inherit;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          header {
            padding: 1.5rem 0;
          }
          h1 {
            font-size: 2rem;
          }
          .logo {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          header {
            padding: 1.5rem 0;
          }
          .header-container {
            padding: 0 1rem;
            text-align: center;
          }
          .header-brand {
            align-items: center;
          }
          h1 {
            font-size: 1.75rem;
            gap: 0.75rem;
          }
          .logo {
            font-size: 2.25rem;
          }
          p {
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          header {
            padding: 1rem 0;
          }
          .header-container {
            padding: 0 0.75rem;
          }
          h1 {
            font-size: 1.5rem;
            gap: 0.5rem;
          }
          .logo {
            font-size: 2rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
