import React, { useState, useEffect } from 'react';
import SubAgentSystem from '../../../services/subAgentSystem';

const SubAgentManager = ({ parentAgent, onSubAgentSelect, selectedSubAgent }) => {
  const [subAgents, setSubAgents] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (parentAgent) {
      const availableSubAgents = SubAgentSystem.getSubAgentsForParent(parentAgent);
      setSubAgents(availableSubAgents);
      setExpanded(true);
    } else {
      setSubAgents([]);
      setExpanded(false);
    }
  }, [parentAgent]);

  const handleSubAgentSelect = (subAgent) => {
    onSubAgentSelect?.(subAgent);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (!parentAgent) {
    return (
      <div className="sub-agent-manager">
        <div className="no-selection">
          <p>Chọn một agent chính để xem các chuyên gia chi tiết</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sub-agent-manager">
      <div className="sub-agent-header">
        <h3>Chuyên gia chi tiết cho {parentAgent}</h3>
        <button 
          className="toggle-btn"
          onClick={toggleExpanded}
        >
          {expanded ? '▼' : '▶'}
        </button>
      </div>

      {expanded && (
        <div className="sub-agents-grid">
          {subAgents.map(subAgent => (
            <div
              key={subAgent.id}
              className={`sub-agent-card ${selectedSubAgent?.id === subAgent.id ? 'selected' : ''}`}
              onClick={() => handleSubAgentSelect(subAgent)}
            >
              <div className="sub-agent-header-info">
                <h4>{subAgent.name}</h4>
                <div className="sub-agent-id">{subAgent.id}</div>
              </div>
              <p className="sub-agent-description">{subAgent.description}</p>
              <div className="sub-agent-capabilities">
                <strong>Chuyên môn:</strong>
                <div className="capability-tags">
                  {subAgent.capabilities.map(cap => (
                    <span key={cap} className="capability-tag">{cap}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!expanded && subAgents.length > 0 && (
        <div className="collapsed-info">
          <p>{subAgents.length} chuyên gia có sẵn</p>
        </div>
      )}
    </div>
  );
};

export default SubAgentManager;
