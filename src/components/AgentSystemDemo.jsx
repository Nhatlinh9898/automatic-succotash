import React, { useState, useEffect, useRef } from 'react';
import { createAIChatIntegration, createSmartMovement, createLearningBehavior } from '../../library/index.js';
import AIService from '../services/aiService';
import './AgentSystemDemo.css';

const AgentSystemDemo = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentMessage, setAgentMessage] = useState('');
  const [systemStatus, setSystemStatus] = useState('idle');
  const [logs, setLogs] = useState([]);
  const aiServiceRef = useRef(new AIService());
  
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
    <div className="agent-system-demo">
      <div className="demo-header">
        <h2>🤖 Multi-Agent System Demo</h2>
        <div className="system-stats">
          <div className="stat">
            <span className="stat-label">Agents:</span>
            <span className="stat-value">{stats.total}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Active:</span>
            <span className="stat-value active">{stats.active}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Tasks:</span>
            <span className="stat-value">{stats.totalTasks}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Status:</span>
            <span className="stat-value status">{systemStatus}</span>
          </div>
        </div>
      </div>

      <div className="demo-content">
        <div className="agent-control-panel">
          <div className="agent-creation">
            <h3>Create Agent</h3>
            <div className="agent-types">
              {['assistant', 'analyst', 'creative', 'researcher', 'coordinator'].map(type => (
                <button
                  key={type}
                  className="agent-type-btn"
                  onClick={() => createAgent(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="system-actions">
            <h3>System Actions</h3>
            <button 
              className="action-btn coordinate"
              onClick={coordinateAgents}
              disabled={agents.length < 2 || systemStatus !== 'idle'}
            >
              🔄 Coordinate Agents
            </button>
            <button 
              className="action-btn clear"
              onClick={() => setLogs([])}
            >
              🗑️ Clear Logs
            </button>
          </div>

          <div className="activity-log">
            <h3>Activity Log</h3>
            <div className="log-container">
              {logs.slice(-10).reverse().map((log, index) => (
                <div key={index} className={`log-entry ${log.type}`}>
                  <span className="log-time">{log.timestamp}</span>
                  <span className="log-message">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="agent-workspace">
          <div className="agents-grid">
            {agents.map(agent => (
              <div 
                key={agent.id}
                className={`agent-card ${selectedAgent?.id === agent.id ? 'selected' : ''}`}
                onClick={() => setSelectedAgent(agent)}
              >
                <div className="agent-header">
                  <h4>{agent.name}</h4>
                  <div 
                    className="status-indicator"
                    style={{ backgroundColor: getAgentStatusColor(agent.status) }}
                  />
                </div>
                <div className="agent-type">{agent.type}</div>
                <div className="agent-capabilities">
                  {agent.capabilities.map(cap => (
                    <span key={cap} className="capability-tag">{cap}</span>
                  ))}
                </div>
                <div className="agent-stats">
                  <span>Tasks: {agent.tasks.length}</span>
                  <span>Memory: {agent.memory.length}</span>
                </div>
                <div className="agent-actions">
                  <button 
                    className="mini-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const task = prompt(`Enter task for ${agent.name}:`);
                      if (task) assignTask(agent.id, task);
                    }}
                  >
                    Assign Task
                  </button>
                  <button 
                    className="mini-btn delete"
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
            <div className="agent-details">
              <h3>Agent Details: {selectedAgent.name}</h3>
              <div className="details-content">
                <div className="detail-section">
                  <h4>Information</h4>
                  <p><strong>Type:</strong> {selectedAgent.type}</p>
                  <p><strong>Status:</strong> {selectedAgent.status}</p>
                  <p><strong>Created:</strong> {new Date(selectedAgent.created).toLocaleString()}</p>
                </div>

                <div className="detail-section">
                  <h4>Recent Tasks</h4>
                  {selectedAgent.tasks.slice(-3).map(task => (
                    <div key={task.id} className="task-item">
                      <p><strong>{task.description}</strong></p>
                      <p className="task-result">{task.result}</p>
                    </div>
                  ))}
                </div>

                <div className="detail-section">
                  <h4>Memory</h4>
                  {selectedAgent.memory.slice(-3).map((mem, index) => (
                    <div key={index} className="memory-item">
                      <p><strong>{mem.from}:</strong> {mem.message}</p>
                    </div>
                  ))}
                </div>

                <div className="detail-section">
                  <h4>Quick Actions</h4>
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
                  />
                  <button onClick={() => {
                    if (agentMessage.trim()) {
                      assignTask(selectedAgent.id, agentMessage);
                      setAgentMessage('');
                    }
                  }}>
                    Send Task
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentSystemDemo;
