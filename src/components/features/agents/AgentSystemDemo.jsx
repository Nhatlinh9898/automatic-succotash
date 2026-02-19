import React, { useState, useEffect, useRef } from 'react';
import { createAIChatIntegration, createSmartMovement, createLearningBehavior } from '../../../../library/index.js';
import aiService from '../../../services/aiService';

const AgentSystemDemo = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentMessage, setAgentMessage] = useState('');
  const [systemStatus, setSystemStatus] = useState('idle');
  const [logs, setLogs] = useState([]);
  const aiServiceRef = useRef(aiService);
  
  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { timestamp, message, type }]);
  };

  const createAgent = (type, name) => {
    const agent = {
      id: Date.now(),
      name: name || `${type} Agent ${agents.length + 1}`,
      type: type,
      status: 'active',
      position: { x: Math.random() * 100, y: Math.random() * 100 },
      capabilities: getAgentCapabilities(type),
      memory: [],
      tasks: [],
      created: new Date().toISOString()
    };
    
    setAgents(prev => [...prev, agent]);
    addLog(`Created ${agent.name} (${type})`, 'success');
    return agent;
  };

  const getAgentCapabilities = (type) => {
    const capabilities = {
      assistant: ['text_processing', 'conversation', 'analysis'],
      analyst: ['data_analysis', 'pattern_recognition', 'reporting'],
      creative: ['content_generation', 'design', 'brainstorming'],
      researcher: ['information_gathering', 'fact_checking', 'synthesis'],
      coordinator: ['task_management', 'communication', 'planning']
    };
    return capabilities[type] || ['basic_processing'];
  };

  const assignTask = async (agentId, task) => {
    const agent = agents.find(a => a.id === agentId);
    if (!agent) return;
    
    setSystemStatus('processing');
    addLog(`Assigning task to ${agent.name}: ${task}`, 'info');
    
    try {
      const taskData = {
        id: Date.now(),
        description: task,
        status: 'in_progress',
        assigned_to: agent.name,
        created: new Date().toISOString()
      };
      
      // Process task with AI
      const result = await aiServiceRef.current.generatePrompt(
        `As a ${agent.type} agent, process this task: ${task}`
      );
      
      setAgents(prev => prev.map(a => 
        a.id === agentId 
          ? { ...a, tasks: [...a.tasks, { ...taskData, result, status: 'completed' }] }
          : a
      ));
      
      addLog(`Task completed by ${agent.name}`, 'success');
    } catch (error) {
      addLog(`Task failed: ${error.message}`, 'error');
    } finally {
      setSystemStatus('idle');
    }
  };

  const agentCommunication = async (fromAgentId, toAgentId, message) => {
    const fromAgent = agents.find(a => a.id === fromAgentId);
    const toAgent = agents.find(a => a.id === toAgentId);
    
    if (!fromAgent || !toAgent) return;
    
    addLog(`${fromAgent.name} → ${toAgent.name}: ${message}`, 'communication');
    
    // Store in agent memory
    setAgents(prev => prev.map(a => {
      if (a.id === toAgentId) {
        return {
          ...a,
          memory: [...a.memory, {
            from: fromAgent.name,
            message,
            timestamp: new Date().toISOString()
          }]
        };
      }
      return a;
    }));
  };

  const coordinateAgents = async () => {
    setSystemStatus('coordinating');
    addLog('Starting agent coordination...', 'info');
    
    const activeAgents = agents.filter(a => a.status === 'active');
    
    for (let i = 0; i < activeAgents.length - 1; i++) {
      await agentCommunication(
        activeAgents[i].id,
        activeAgents[i + 1].id,
        `Coordination message from ${activeAgents[i].name}`
      );
    }
    
    addLog('Agent coordination completed', 'success');
    setSystemStatus('idle');
  };

  const deleteAgent = (agentId) => {
    const agent = agents.find(a => a.id === agentId);
    if (agent) {
      setAgents(prev => prev.filter(a => a.id !== agentId));
      addLog(`Deleted ${agent.name}`, 'warning');
      if (selectedAgent?.id === agentId) {
        setSelectedAgent(null);
      }
    }
  };

  const getAgentStatusColor = (status) => {
    const colors = {
      active: '#4CAF50',
      busy: '#FF9800',
      idle: '#9E9E9E',
      error: '#F44336'
    };
    return colors[status] || '#9E9E9E';
  };

  const getSystemStats = () => {
    return {
      total: agents.length,
      active: agents.filter(a => a.status === 'active').length,
      busy: agents.filter(a => a.status === 'busy').length,
      totalTasks: agents.reduce((sum, a) => sum + a.tasks.length, 0)
    };
  };

  const stats = getSystemStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-pulse z-20"></div>
      
      <div className="relative z-10">
        <div className="p-10 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border-b border-white/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Multi-Agent System Demo
            </h2>
            <div className="flex justify-center gap-2 mb-8">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">AI Powered</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium backdrop-blur-sm border border-indigo-500/30">Multi-Agent</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium backdrop-blur-sm border border-pink-500/30">Intelligent</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="block text-sm text-gray-300 mb-1">Agents:</span>
              <span className="block text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{stats.total}</span>
            </div>
            
            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="block text-sm text-gray-300 mb-1">Active:</span>
              <span className="block text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">{stats.active}</span>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="block text-sm text-gray-300 mb-1">Tasks:</span>
              <span className="block text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">{stats.totalTasks}</span>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="block text-sm text-gray-300 mb-1">Status:</span>
              <span className="block text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{systemStatus}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-80 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border-r border-white/10 p-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Create Agent</h3>
              </div>
              <div className="flex flex-col gap-3">
                {['assistant', 'analyst', 'creative', 'researcher', 'coordinator'].map(type => (
                  <button
                    key={type}
                    className="group relative px-4 py-3 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 text-white rounded-2xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 font-bold border border-purple-500/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 overflow-hidden"
                    onClick={() => createAgent(type)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {type === 'assistant' && '🤝'}
                      {type === 'analyst' && '📊'}
                      {type === 'creative' && '🎨'}
                      {type === 'researcher' && '🔍'}
                      {type === 'coordinator' && '🎯'}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">System Actions</h3>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  className="group relative px-4 py-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-bold border border-blue-500/30 hover:border-blue-500/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 disabled:from-gray-600/20 disabled:to-gray-700/20 disabled:border-gray-500/30 disabled:cursor-not-allowed overflow-hidden"
                  onClick={coordinateAgents}
                  disabled={agents.length < 2 || systemStatus !== 'idle'}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🔄 Coordinate Agents
                  </span>
                </button>
                <button 
                  className="group relative px-4 py-3 bg-gradient-to-br from-red-600/20 to-pink-600/20 text-white rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-bold border border-red-500/30 hover:border-red-500/50 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 overflow-hidden"
                  onClick={() => setLogs([])}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🗑️ Clear Logs
                  </span>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Activity Log</h3>
              </div>
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-h-64 overflow-y-auto">
                {logs.slice(-10).reverse().map((log, index) => (
                  <div key={index} className={`flex items-start gap-3 mb-3 p-3 rounded-xl text-sm backdrop-blur-sm border ${
                    log.type === 'success' ? 'bg-green-500/10 text-green-300 border-green-500/20' :
                    log.type === 'error' ? 'bg-red-500/10 text-red-300 border-red-500/20' :
                    'bg-blue-500/10 text-blue-300 border-blue-500/20'
                  }`}>
                    <span className="text-xs opacity-75 font-mono bg-black/20 px-2 py-1 rounded">{log.timestamp}</span>
                    <span className="flex-1">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {agents.map(agent => (
                <div 
                  key={agent.id}
                  className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                    selectedAgent?.id === agent.id 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105' 
                      : 'border-white/10 hover:border-purple-500/30'
                  }`}
                  onClick={() => setSelectedAgent(agent)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">{agent.name}</h4>
                    <div 
                      className="w-4 h-4 rounded-full animate-pulse"
                      style={{ backgroundColor: getAgentStatusColor(agent.status) }}
                    />
                  </div>
                  <div className="text-sm text-gray-400 mb-3">{agent.type}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.capabilities.map(cap => (
                      <span key={cap} className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-purple-500/30">
                        {cap}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Tasks: {agent.tasks.length}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Memory: {agent.memory.length}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 px-3 py-2 bg-gradient-to-br from-green-600/20 to-emerald-600/20 text-green-300 rounded-xl text-xs font-bold hover:from-green-600 hover:to-emerald-600 hover:text-white transition-all duration-300 border border-green-500/30 hover:border-green-500/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        const task = prompt(`Enter task for ${agent.name}:`);
                        if (task) assignTask(agent.id, task);
                      }}
                    >
                      Assign Task
                    </button>
                    <button 
                      className="flex-1 px-3 py-2 bg-gradient-to-br from-red-600/20 to-pink-600/20 text-red-300 rounded-xl text-xs font-bold hover:from-red-600 hover:to-pink-600 hover:text-white transition-all duration-300 border border-red-500/30 hover:border-red-500/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteAgent(agent.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedAgent && (
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Agent Details: {selectedAgent.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Information
                    </h4>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="flex justify-between"><span className="text-gray-400">Type:</span> <span className="text-white font-medium">{selectedAgent.type}</span></p>
                      <p className="flex justify-between"><span className="text-gray-400">Status:</span> <span className="text-white font-medium">{selectedAgent.status}</span></p>
                      <p className="flex justify-between"><span className="text-gray-400">Created:</span> <span className="text-white font-medium">{new Date(selectedAgent.created).toLocaleString()}</span></p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Recent Tasks
                    </h4>
                    <div className="space-y-3 max-h-40 overflow-y-auto">
                      {selectedAgent.tasks.slice(-3).map(task => (
                        <div key={task.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-3">
                          <p className="font-medium text-sm text-white mb-1">{task.description}</p>
                          <p className="text-xs text-gray-400">{task.result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Memory
                    </h4>
                    <div className="space-y-3 max-h-40 overflow-y-auto">
                      {selectedAgent.memory.slice(-3).map((mem, index) => (
                        <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-3">
                          <p className="text-sm text-gray-300"><span className="text-purple-400 font-medium">{mem.from}:</span> {mem.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Quick Actions
                    </h4>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Send message to agent..."
                        value={agentMessage}
                        onChange={(e) => setAgentMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && agentMessage.trim()) {
                            assignTask(selectedAgent.id, agentMessage);
                            setAgentMessage('');
                          }
                        }}
                        className="flex-1 px-4 py-3 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                      />
                      <button 
                        onClick={() => {
                          if (agentMessage.trim()) {
                            assignTask(selectedAgent.id, agentMessage);
                            setAgentMessage('');
                          }
                        }}
                        className="px-6 py-3 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-bold border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30"
                      >
                        Send Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSystemDemo;
