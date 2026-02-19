import React, { useState, useEffect } from 'react';
import AgentSystem from '../services/agentSystem';
import './AgentManager.css';

const AgentManager = ({ onAgentSelect, onTaskUpdate }) => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [taskQueue, setTaskQueue] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Load available agents
    const availableAgents = AgentSystem.getAvailableAgents();
    setAgents(availableAgents);
  }, []);

  useEffect(() => {
    // Update task queue periodically
    const interval = setInterval(() => {
      const queue = AgentSystem.getTaskQueue();
      setTaskQueue(queue);
      
      const processingTasks = queue.filter(task => task.status === 'pending' || task.status === 'processing');
      setIsProcessing(processingTasks.length > 0);
      
      onTaskUpdate?.(queue);
    }, 1000);

    return () => clearInterval(interval);
  }, [onTaskUpdate]);

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
    AgentSystem.clearCompletedTasks();
  };

  return (
    <div className="agent-manager">
      <div className="agents-section">
        <h3>Available Agents</h3>
        <div className="agents-grid">
          {agents.map(agent => (
            <div
              key={agent.id}
              className={`agent-card ${selectedAgent?.id === agent.id ? 'selected' : ''}`}
              onClick={() => handleAgentSelect(agent)}
            >
              <div className="agent-header">
                <h4>{agent.name}</h4>
                <div className="agent-id">{agent.id}</div>
              </div>
              <p className="agent-description">{agent.description}</p>
              <div className="agent-capabilities">
                <strong>Capabilities:</strong>
                <div className="capability-tags">
                  {agent.capabilities.map(cap => (
                    <span key={cap} className="capability-tag">{cap}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="task-queue-section">
        <div className="section-header">
          <h3>Task Queue</h3>
          <button 
            onClick={clearCompletedTasks}
            className="clear-btn"
            disabled={taskQueue.filter(t => t.status === 'completed').length === 0}
          >
            Clear Completed
          </button>
        </div>
        
        {isProcessing && (
          <div className="processing-indicator">
            <div className="spinner"></div>
            Processing tasks...
          </div>
        )}

        <div className="task-list">
          {taskQueue.length === 0 ? (
            <div className="empty-queue">No tasks in queue</div>
          ) : (
            taskQueue.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-header">
                  <span className="task-agent">{task.agent}</span>
                  <span 
                    className="task-status"
                    style={{ color: getStatusColor(task.status) }}
                  >
                    {task.status}
                  </span>
                </div>
                <div className="task-prompt">
                  {task.prompt.substring(0, 100)}{task.prompt.length > 100 ? '...' : ''}
                </div>
                {task.error && (
                  <div className="task-error">Error: {task.error}</div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="agent-stats">
        <h3>Statistics</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">{taskQueue.length}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{taskQueue.filter(t => t.status === 'completed').length}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{taskQueue.filter(t => t.status === 'pending').length}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{taskQueue.filter(t => t.status === 'failed').length}</div>
            <div className="stat-label">Failed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManager;
