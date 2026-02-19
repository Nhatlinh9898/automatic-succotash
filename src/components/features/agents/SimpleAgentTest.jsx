import React, { useState, useEffect } from 'react';

// Try static imports first
let agentSystem = null;
try {
  agentSystem = require('../../../services/agentSystem.js');
} catch (error) {
  console.log('Static import failed, will try dynamic');
}

const SimpleAgentTest = () => {
  const [status, setStatus] = useState('Loading...');
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    testServices();
  }, []);

  const testServices = async () => {
    addLog('Starting service test...');
    
    try {
      // Test 1: Check if require worked
      if (agentSystem) {
        addLog('✓ Static import successful');
        const mainAgents = agentSystem.default.getAvailableAgents();
        addLog(`✓ Found ${mainAgents.length} agents`);
        setAgents(mainAgents);
        setStatus('Services loaded successfully!');
      } else {
        // Test 2: Try dynamic import
        addLog('Trying dynamic import...');
        const dynamicAgentSystem = await import('../../../services/agentSystem.js');
        addLog('✓ Dynamic import successful');
        
        const mainAgents = dynamicAgentSystem.default.getAvailableAgents();
        addLog(`✓ Found ${mainAgents.length} agents`);
        setAgents(mainAgents);
        setStatus('Services loaded successfully!');
      }
    } catch (error) {
      addLog(`✗ Error: ${error.message}`);
      console.error('Service loading error:', error);
      setError(error.message);
      setStatus('Failed to load services');
    }
  };

  const testAPI = async () => {
    addLog('Testing API connection...');
    try {
      const response = await fetch('http://localhost:8080/api/services/status');
      const data = await response.json();
      addLog('✓ API connection successful');
      addLog(`✓ Server has ${data.agents?.total || 0} agents`);
      console.log('API Response:', data);
      setStatus('API working!');
    } catch (error) {
      addLog(`✗ API Error: ${error.message}`);
      console.error('API Error:', error);
      setError(`API Error: ${error.message}`);
    }
  };

  const testDirectService = () => {
    addLog('Testing direct service access...');
    try {
      // Try to access the service directly
      if (window && window.agentSystem) {
        addLog('✓ Found global agentSystem');
      } else {
        addLog('✗ No global agentSystem found');
      }
    } catch (error) {
      addLog(`✗ Direct access error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Agent System Debug</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Service Status</h2>
            <div className="text-lg mb-4">
              <span className="text-gray-300">Status: </span>
              <span className={`font-bold ${status.includes('success') || status.includes('working') ? 'text-green-400' : 'text-yellow-400'}`}>
                {status}
              </span>
            </div>
            {error && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300">Error: {error}</p>
              </div>
            )}
            
            <div className="flex gap-3 mt-4">
              <button
                onClick={testServices}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                Test Services
              </button>
              <button
                onClick={testAPI}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Test API
              </button>
              <button
                onClick={testDirectService}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Test Direct
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Debug Logs</h2>
            <div className="bg-slate-900/50 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm">
              {logs.map((log, index) => (
                <div key={index} className={`mb-1 ${log.includes('✓') ? 'text-green-400' : log.includes('✗') ? 'text-red-400' : 'text-gray-300'}`}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 mt-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Loaded Agents ({agents.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map(agent => (
              <div key={agent.id} className="bg-slate-700/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities?.map(cap => (
                    <span key={cap} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAgentTest;
