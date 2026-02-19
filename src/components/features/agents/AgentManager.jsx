import React, { useState, useEffect } from 'react';

const AgentManager = ({ onAgentSelect, onTaskUpdate }) => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [taskQueue, setTaskQueue] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [agentSystem, setAgentSystem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAgentSystem();
  }, []);

  const loadAgentSystem = async () => {
    try {
      console.log('Loading AgentSystem...');
      const AgentSystemModule = await import('../../../services/agentSystem.js');
      const agentSystemInstance = AgentSystemModule.default;
      console.log('AgentSystem loaded:', agentSystemInstance);
      
      setAgentSystem(agentSystemInstance);
      
      // Load available agents
      const availableAgents = agentSystemInstance.getAvailableAgents();
      console.log('Available agents:', availableAgents);
      setAgents(availableAgents);
    } catch (error) {
      console.error('Failed to load AgentSystem:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    // Update task queue periodically
    const interval = setInterval(() => {
      if (agentSystem) {
        const queue = agentSystem.getTaskQueue();
        setTaskQueue(queue);
        
        const processingTasks = queue.filter(task => task.status === 'pending' || task.status === 'processing');
        setIsProcessing(processingTasks.length > 0);
        
        onTaskUpdate?.(queue);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [agentSystem, onTaskUpdate]);

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    onAgentSelect?.(agent);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#28a745';
      case 'processing': return '#007bff';
      case 'pending': return '#ffc107';
      case 'failed': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const clearCompletedTasks = () => {
    if (agentSystem) {
      agentSystem.clearCompletedTasks();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 my-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300">Error loading agents: {error}</p>
          </div>
        )}
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
            <h3 className="text-3xl font-bold text-white px-6 flex items-center gap-3">
              Available Agents
              {!agentSystem && (
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium backdrop-blur-sm border border-yellow-500/30">
                  Loading...
                </span>
              )}
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map(agent => (
              <div
                key={agent.id}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  selectedAgent?.id === agent.id 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105' 
                    : 'border-white/10 hover:border-purple-500/30'
                }`}
                onClick={() => handleAgentSelect(agent)}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white">{agent.name}</h4>
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border border-purple-500/30">
                    {agent.id}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{agent.description}</p>
                <div className="agent-capabilities">
                  <strong className="text-gray-300 text-sm font-bold block mb-2">Capabilities:</strong>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map(cap => (
                      <span key={cap} className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-purple-500/30">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
            <h3 className="text-3xl font-bold text-white px-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              Task Queue
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              {isProcessing && (
                <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl">
                  <div className="w-4 h-4 border-2 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
                  <span className="text-blue-300 text-sm font-medium">Processing tasks...</span>
                </div>
              )}
            </div>
            <button 
              onClick={clearCompletedTasks}
              className="px-6 py-2 bg-gradient-to-br from-red-600 to-pink-600 text-white border-none rounded-2xl text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed"
              disabled={taskQueue.filter(t => t.status === 'completed').length === 0}
            >
              Clear Completed
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl max-h-96 overflow-y-auto">
            {taskQueue.length === 0 ? (
              <div className="p-8 text-center text-gray-400 italic text-lg">No tasks in queue</div>
            ) : (
              taskQueue.map(task => (
                <div key={task.id} className="p-4 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-white text-sm">{task.agent}</span>
                    <span 
                      className="text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-sm border"
                      style={{ 
                        color: getStatusColor(task.status),
                        backgroundColor: `${getStatusColor(task.status)}20`,
                        borderColor: `${getStatusColor(task.status)}40`
                      }}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed mb-3">
                    {task.prompt.substring(0, 150)}{task.prompt.length > 150 ? '...' : ''}
                  </div>
                  {task.error && (
                    <div className="text-red-400 text-xs bg-red-500/10 p-2 px-3 rounded-xl border border-red-500/20 backdrop-blur-sm">Error: {task.error}</div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
            <h3 className="text-3xl font-bold text-white px-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              Statistics
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{taskQueue.length}</div>
              <div className="text-sm text-gray-300 uppercase font-bold">Total Tasks</div>
            </div>
            
            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">{taskQueue.filter(t => t.status === 'completed').length}</div>
              <div className="text-sm text-gray-300 uppercase font-bold">Completed</div>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">{taskQueue.filter(t => t.status === 'pending').length}</div>
              <div className="text-sm text-gray-300 uppercase font-bold">Pending</div>
            </div>
            
            <div className="group bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">{taskQueue.filter(t => t.status === 'failed').length}</div>
              <div className="text-sm text-gray-300 uppercase font-bold">Failed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManager;
