import React, { useState, useRef } from 'react';
import AgentSystem from '../../../services/agentSystem';
import SubAgentSystem from '../../../services/subAgentSystem';
import AgentManager from './AgentManager';
import SubAgentManager from './SubAgentManager';
import TokenManager from '../../utilities/TokenManager';
import aiService from '../../../services/aiService';

const MultiAgentDemo = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedSubAgent, setSelectedSubAgent] = useState(null);
  const [tokenUsage, setTokenUsage] = useState(0);
  const [taskHistory, setTaskHistory] = useState([]);
  const aiServiceRef = useRef(aiService);

  // Sample prompts for different agents and sub-agents
  const samplePrompts = {
    character: "Tạo một nhân vật 3D: nữ pháp sư tuổi 25, tóc bạc dài, mắt tím, mặc váy đen với ngôi sao, đũa phép pha lê",
    character_appearance: "Thiết kế khuôn mặt nhân vật: mắt to màu tím, mũi thon, môi đầy đặn, má hồng hào, có tàn nhang nhẹ",
    character_hair: "Thiết kế tóc: dài đến eo, màu bạc với highlight tím, uốn lọn nhẹ, có băng đô lá cây",
    character_clothing: "Thiết kế trang phục: váy đen dài, có ngôi sao bạc, thắt lưng da, ủng đen đến đầu gối",
    character_personality: "Phát triển tính cách: thông minh, điềm tĩnh, yêu thiên nhiên, có sức mạnh ma thuật bẩm sinh",
    
    environment: "Thiết kế môi trường: rừng cổ tích vào ban đêm, có ánh sáng ma thuật, thác nước phát sáng",
    environment_terrain: "Thiết kế địa hình: đồi núi uốn lượn, có thung lũng sâu, sông uốn khúc qua rừng",
    environment_architecture: "Thiết kế công trình: lâu đài cổ trên đỉnh đồi, có tháp cao, tường đá rêu phong",
    environment_vegetation: "Thiết kế cây cối: cây cổ thụ to lớn, có dây leo, hoa phát sáng, cỏ cao đến đầu gối",
    environment_lighting: "Thiết kế ánh sáng: trăng tròn chiếu sáng, có pha lê phát sáng, sương mờ nhẹ",
    
    animation: "Tạo animation: nhân vật đứng idle, thỉnh thoảng nhìn quanh, tay nắm đũa phép",
    animation_locomotion: "Tạo chuyển động đi bộ: bước đi uyển chuyển, váy bay nhẹ, tay cử chỉ thanh lịch",
    animation_combat: "Tạo animation chiến đấu: vung đũa phép, tạo hiệu ứng năng lượng, né tránh đòn tấn công",
    animation_facial: "Tạo biểu cảm khuôn mặt: mỉm cười nhẹ, nhíu mày khi tập trung, mắt sáng khi sử dụng ma thuật",
    animation_idle: "Tạo tư thế đứng: đứng thẳng, tay cầm đũa phép, thỉnh thoảng nhìn xung quanh",
    
    technical: "Tối ưu hóa model nhân vật cho mobile, poly count dưới 10k, texture 1024x1024",
    technical_modeling: "Tối ưu hóa mesh: giảm polygon count, giữ lại chi tiết quan trọng, topology tốt",
    technical_texturing: "Tạo UV map và texture: unwrap hiệu quả, texture 4K, PBR materials",
    technical_rigging: "Tạo skeleton: 50 bones, IK cho chân và tay, facial rig cơ bản",
    technical_optimization: "Tối ưu performance: LOD 3 levels, draw call batching, texture compression",
    
    story: "Viết cốt truyện: pháp sư trẻ tìm kiếm viên pha lê mất tích",
    story_plot: "Phát triển plot: 3 acts, twist ở giữa, character arc từ yếu đến mạnh",
    story_dialogue: "Viết dialogue: giọng nói thông minh, điềm tĩnh, có chút hài hước",
    story_quest: "Thiết kế quest: 5 missions, tăng độ khó, rewards phù hợp",
    story_lore: "Xây dựng lore: lịch sử ma thuật, các dòng họ pháp sư, truyền thuyết pha lê",
    
    ui: "Thiết kế UI: menu chính game fantasy, có nút Start, Settings, Exit",
    ui_layout: "Thiết kế layout: grid system, visual hierarchy, responsive design",
    ui_interactive: "Thiết kế buttons: hover effects, click feedback, transitions mượt",
    ui_visual: "Thiết kế visual: color scheme tím/bạc, font fantasy, icons ma thuật",
    ux_flow: "Thiết kế user flow: navigation logic, intuitive, minimal clicks"
  };

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setSelectedSubAgent(null); // Reset sub-agent when parent changes
    if (samplePrompts[agent.id]) {
      setPrompt(samplePrompts[agent.id]);
    }
  };

  const handleSubAgentSelect = (subAgent) => {
    setSelectedSubAgent(subAgent);
    if (samplePrompts[subAgent.id]) {
      setPrompt(samplePrompts[subAgent.id]);
    }
  };

  const handleTaskUpdate = (tasks) => {
    // Update task history when tasks complete
    const completedTasks = tasks.filter(task => task.status === 'completed' && task.result);
    if (completedTasks.length > 0) {
      const latestTask = completedTasks[completedTasks.length - 1];
      if (!taskHistory.find(t => t.id === latestTask.id)) {
        setTaskHistory(prev => [...prev, latestTask]);
      }
    }
  };

  const handleTokenSettingsChange = (settings) => {
    aiServiceRef.current.updateTokenSettings(settings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      let result;
      
      // Use sub-agent if selected, otherwise use main agent
      if (selectedSubAgent && selectedAgent) {
        console.log(`Using sub-agent: ${selectedSubAgent.name}`);
        result = await SubAgentSystem.processWithSubAgent(prompt, selectedAgent.id, {
          temperature: 0.7,
          maxTokens: 1200
        });
      } else {
        console.log(`Using main agent: ${selectedAgent?.name || 'auto-detect'}`);
        result = await AgentSystem.processRequest(prompt, {
          temperature: 0.7,
          maxTokens: 1500
        });
      }
      
      setResponse(result);
    } catch (error) {
      setResponse(`Lỗi: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadSamplePrompt = (agentId) => {
    if (samplePrompts[agentId]) {
      setPrompt(samplePrompts[agentId]);
    }
  };

  const clearHistory = () => {
    setTaskHistory([]);
  };

  // Update token usage
  React.useEffect(() => {
    if (prompt) {
      const estimatedTokens = aiServiceRef.current.estimateTokenCount(prompt);
      setTokenUsage(estimatedTokens);
    } else {
      setTokenUsage(0);
    }
  }, [prompt]);

  return (
    <div className="multi-agent-demo">
      <div className="demo-header">
        <h1>Multi-Agent 3D Creation System</h1>
        <p>Hệ thống AI chuyên biệt và chuyên gia chi tiết cho từng lĩnh vực tạo dựng 3D</p>
      </div>

      <div className="demo-layout">
        <div className="left-panel">
          <AgentManager 
            onAgentSelect={handleAgentSelect}
            onTaskUpdate={handleTaskUpdate}
          />
          
          <SubAgentManager 
            parentAgent={selectedAgent?.id}
            onSubAgentSelect={handleSubAgentSelect}
            selectedSubAgent={selectedSubAgent}
          />
          
          <TokenManager
            onTokenLimitChange={handleTokenSettingsChange}
            currentUsage={tokenUsage}
            maxLimit={4000}
          />
        </div>

        <div className="center-panel">
          <div className="prompt-section">
            <div className="selected-agent-info">
              {selectedSubAgent ? (
                <div className="agent-badge sub-agent">
                  <strong>Sub-Agent:</strong> {selectedSubAgent.name}
                  <span className="agent-type">({selectedSubAgent.id})</span>
                </div>
              ) : selectedAgent ? (
                <div className="agent-badge">
                  <strong>Agent:</strong> {selectedAgent.name}
                  <span className="agent-type">({selectedAgent.id})</span>
                </div>
              ) : (
                <div className="agent-badge">
                  <strong>Agent:</strong> Auto-detect
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="prompt-form">
              <div className="form-group">
                <label htmlFor="prompt">Prompt của bạn:</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Nhập yêu cầu tạo dựng 3D chi tiết..."
                  rows={6}
                  disabled={loading}
                />
                <div className="prompt-info">
                  {prompt.length} ký tự, ~{tokenUsage} tokens
                </div>
              </div>

              <div className="sample-prompts">
                <strong>Prompt mẫu:</strong>
                <div className="prompt-buttons">
                  {selectedAgent && Object.entries(samplePrompts)
                    .filter(([key]) => key === selectedAgent.id || key.startsWith(selectedAgent.id + '_'))
                    .map(([agentId, samplePrompt]) => (
                      <button
                        key={agentId}
                        type="button"
                        onClick={() => loadSamplePrompt(agentId)}
                        className={`sample-btn ${selectedSubAgent?.id === agentId || (!selectedSubAgent && selectedAgent?.id === agentId) ? 'active' : ''}`}
                      >
                        {agentId.includes('_') ? agentId.split('_')[1] : agentId}
                      </button>
                    ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading || !prompt.trim()}
                className="submit-btn"
              >
                {loading ? 'Đang xử lý...' : 'Tạo với AI Agent'}
              </button>
            </form>
          </div>

          {response && (
            <div className="response-section">
              <h3>Kết quả từ {selectedSubAgent ? 'Sub-Agent' : 'Agent'}:</h3>
              <div className="response-content">
                {response}
              </div>
            </div>
          )}
        </div>

        <div className="right-panel">
          <div className="task-history">
            <div className="history-header">
              <h3>Lịch sử xử lý</h3>
              <button 
                onClick={clearHistory}
                className="clear-history-btn"
                disabled={taskHistory.length === 0}
              >
                Xóa
              </button>
            </div>
            
            {taskHistory.length === 0 ? (
              <div className="empty-history">
                Chưa có task nào hoàn thành
              </div>
            ) : (
              <div className="history-list">
                {taskHistory.map(task => (
                  <div key={task.id} className="history-item">
                    <div className="history-agent">{task.agent}</div>
                    <div className="history-prompt">
                      {task.prompt.substring(0, 80)}...
                    </div>
                    <div className="history-result">
                      {task.result?.substring(0, 100)}...
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentDemo;
