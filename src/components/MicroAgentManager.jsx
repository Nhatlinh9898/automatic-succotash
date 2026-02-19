import React, { useState, useEffect } from 'react';
import './MicroAgentManager.css';

const MicroAgentManager = () => {
  const [agents, setAgents] = useState([]);
  const [subAgents, setSubAgents] = useState([]);
  const [microAgents, setMicroAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedSubAgent, setSelectedSubAgent] = useState(null);
  const [selectedMicroAgent, setSelectedMicroAgent] = useState(null);
  const [processingChain, setProcessingChain] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      // Load main agents
      const { default: AgentSystem } = await import('../services/agentSystem.js');
      const agentSystem = AgentSystem;
      const mainAgents = agentSystem.getAvailableAgents();
      setAgents(mainAgents);

      // Load sub-agents
      const { default: SubAgentSystem } = await import('../services/subAgentSystem.js');
      const subAgentSystem = SubAgentSystem;
      const allSubAgents = subAgentSystem.getAllSubAgents();
      setSubAgents(allSubAgents);

      // Load micro-agents
      const { default: MicroAgentSystem } = await import('../services/microAgentSystem.js');
      const microAgentSystem = MicroAgentSystem;
      const allMicroAgents = microAgentSystem.getAllMicroAgents();
      setMicroAgents(allMicroAgents);
    } catch (error) {
      console.error('Failed to load agents:', error);
    }
  };

  const handleAgentSelect = async (agent) => {
    setSelectedAgent(agent);
    setSelectedSubAgent(null);
    setSelectedMicroAgent(null);
    
    // Load sub-agents for this agent
    try {
      const { default: SubAgentSystem } = await import('../services/subAgentSystem.js');
      const subAgentSystem = SubAgentSystem;
      const agentSubAgents = subAgentSystem.getSubAgentsForParent(agent.id);
      setSubAgents(agentSubAgents);
    } catch (error) {
      console.error('Failed to load sub-agents:', error);
    }
  };

  const handleSubAgentSelect = async (subAgent) => {
    setSelectedSubAgent(subAgent);
    setSelectedMicroAgent(null);
    
    // Load micro-agents for this sub-agent
    try {
      const { default: MicroAgentSystem } = await import('../services/microAgentSystem.js');
      const microAgentSystem = MicroAgentSystem;
      const subMicroAgents = microAgentSystem.getMicroAgentsForSubAgent(subAgent.id);
      setMicroAgents(subMicroAgents);
    } catch (error) {
      console.error('Failed to load micro-agents:', error);
    }
  };

  const handleProcessRequest = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResult('');
    setProcessingChain(null);
    
    try {
      const { default: AgentSystem } = await import('../services/agentSystem.js');
      const agentSystem = AgentSystem;
      
      const response = await agentSystem.processRequest(prompt, {
        useSubAgents: true,
        useMicroAgents: true
      });
      
      setResult(response.result);
      setProcessingChain(response.processingChain);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getExpertiseColor = (expertise) => {
    const colors = {
      'anatomy': '#FF6B6B',
      'detail': '#4ECDC4',
      'texture': '#45B7D1',
      'physics': '#96CEB4',
      'color_theory': '#FFEAA7',
      'craftsmanship': '#DDA0DD',
      'geology': '#8B7355',
      'engineering': '#708090',
      'history': '#CD853F',
      'biomechanics': '#2E8B57',
      'combat': '#B22222',
      'topology': '#9370DB',
      'optimization': '#FF8C00',
      'pbr': '#20B2AA',
      'uv_technical': '#4682B4',
      'narrative_technique': '#8B4513',
      'storytelling': '#DAA520',
      'visual_design': '#FF1493',
      'responsive_design': '#00CED1'
    };
    return colors[expertise] || '#95A5A6';
  };

  const renderProcessingChain = () => {
    if (!processingChain) return null;

    return (
      <div className="processing-chain">
        <h3>Processing Chain</h3>
        <div className="chain-levels">
          <div className={`chain-level ${processingChain.level === 'main' ? 'active' : ''}`}>
            <div className="level-indicator main"></div>
            <div className="level-info">
              <h4>Main Agent</h4>
              <p>{processingChain.mainAgent}</p>
            </div>
          </div>
          
          {processingChain.subAgent && (
            <div className={`chain-level ${processingChain.level === 'sub' ? 'active' : ''}`}>
              <div className="level-indicator sub"></div>
              <div className="level-info">
                <h4>Sub-Agent</h4>
                <p>{processingChain.subAgent}</p>
              </div>
            </div>
          )}
          
          {processingChain.microAgent && (
            <div className={`chain-level ${processingChain.level === 'micro' ? 'active' : ''}`}>
              <div className="level-indicator micro"></div>
              <div className="level-info">
                <h4>Micro-Agent</h4>
                <p>{processingChain.microAgent}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="micro-agent-manager">
      <div className="header">
        <h1>Micro-Agent System Manager</h1>
        <p>3-Level Agent Hierarchy: Main → Sub → Micro</p>
      </div>

      <div className="agent-hierarchy">
        <div className="agent-level">
          <h2>Main Agents</h2>
          <div className="agent-grid">
            {agents.map(agent => (
              <div
                key={agent.id}
                className={`agent-card ${selectedAgent?.id === agent.id ? 'selected' : ''}`}
                onClick={() => handleAgentSelect(agent)}
              >
                <h3>{agent.name}</h3>
                <p>{agent.description}</p>
                <div className="capabilities">
                  {agent.capabilities.map(cap => (
                    <span key={cap} className="capability-tag">{cap}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedAgent && (
          <div className="agent-level">
            <h2>Sub-Agents for {selectedAgent.name}</h2>
            <div className="agent-grid">
              {subAgents.map(subAgent => (
                <div
                  key={subAgent.id}
                  className={`agent-card sub-agent ${selectedSubAgent?.id === subAgent.id ? 'selected' : ''}`}
                  onClick={() => handleSubAgentSelect(subAgent)}
                >
                  <h3>{subAgent.name}</h3>
                  <p>{subAgent.description}</p>
                  <div className="capabilities">
                    {subAgent.capabilities.map(cap => (
                      <span key={cap} className="capability-tag">{cap}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSubAgent && (
          <div className="agent-level">
            <h2>Micro-Agents for {selectedSubAgent.name}</h2>
            <div className="agent-grid">
              {microAgents.map(microAgent => (
                <div
                  key={microAgent.id}
                  className={`agent-card micro-agent ${selectedMicroAgent?.id === microAgent.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMicroAgent(microAgent)}
                >
                  <div className="expertise-badge" style={{ backgroundColor: getExpertiseColor(microAgent.expertise) }}>
                    {microAgent.expertise}
                  </div>
                  <h3>{microAgent.name}</h3>
                  <p>{microAgent.description}</p>
                  <div className="capabilities">
                    {microAgent.capabilities.map(cap => (
                      <span key={cap} className="capability-tag micro">{cap}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="processing-section">
        <h2>Test Processing</h2>
        <div className="input-section">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            rows={4}
          />
          <button
            onClick={handleProcessRequest}
            disabled={loading || !prompt.trim()}
            className="process-button"
          >
            {loading ? 'Processing...' : 'Process Request'}
          </button>
        </div>

        {processingChain && renderProcessingChain()}

        {result && (
          <div className="result-section">
            <h3>Result</h3>
            <div className="result-content">
              {typeof result === 'string' ? (
                <pre>{result}</pre>
              ) : (
                <pre>{JSON.stringify(result, null, 2)}</pre>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="statistics">
        <h2>System Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{agents.length}</h3>
            <p>Main Agents</p>
          </div>
          <div className="stat-card">
            <h3>{subAgents.length}</h3>
            <p>Sub-Agents</p>
          </div>
          <div className="stat-card">
            <h3>{microAgents.length}</h3>
            <p>Micro-Agents</p>
          </div>
          <div className="stat-card">
            <h3>{agents.length + subAgents.length + microAgents.length}</h3>
            <p>Total Agents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroAgentManager;
