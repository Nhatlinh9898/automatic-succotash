import React, { useState, useEffect } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
}

interface SubAgent extends Agent {
  parentId?: string;
}

interface MicroAgent extends Agent {
  expertise: string;
  subAgentId?: string;
}

interface ProcessingChain {
  level: 'main' | 'sub' | 'micro';
  mainAgent: string;
  subAgent?: string;
  microAgent?: string;
}

const MicroAgentManager: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [subAgents, setSubAgents] = useState<SubAgent[]>([]);
  const [microAgents, setMicroAgents] = useState<MicroAgent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedSubAgent, setSelectedSubAgent] = useState<SubAgent | null>(null);
  const [selectedMicroAgent, setSelectedMicroAgent] = useState<MicroAgent | null>(null);
  const [processingChain, setProcessingChain] = useState<ProcessingChain | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async (): Promise<void> => {
    try {
      // Load main agents
      const { default: AgentSystem } = await import('../../../services/agentSystem');
      const agentSystem = AgentSystem;
      const mainAgents = agentSystem.getAvailableAgents();
      setAgents(mainAgents);

      // Load sub-agents
      const { default: SubAgentSystem } = await import('../../../services/subAgentSystem');
      const subAgentSystem = SubAgentSystem;
      const allSubAgents = subAgentSystem.getAllSubAgents();
      setSubAgents(allSubAgents);

      // Load micro-agents
      const { default: MicroAgentSystem } = await import('../../../services/microAgentSystem');
      const microAgentSystem = MicroAgentSystem;
      const allMicroAgents = microAgentSystem.getAllMicroAgents();
      setMicroAgents(allMicroAgents);
    } catch (error) {
      console.error('Failed to load agents:', error);
    }
  };

  const handleAgentSelect = async (agent: Agent): Promise<void> => {
    setSelectedAgent(agent);
    setSelectedSubAgent(null);
    setSelectedMicroAgent(null);
    
    // Load sub-agents for this agent
    try {
      const { default: SubAgentSystem } = await import('../../../services/subAgentSystem');
      const subAgentSystem = SubAgentSystem;
      const agentSubAgents = subAgentSystem.getSubAgentsForParent(agent.id);
      setSubAgents(agentSubAgents);
    } catch (error) {
      console.error('Failed to load sub-agents:', error);
    }
  };

  const handleSubAgentSelect = async (subAgent: SubAgent): Promise<void> => {
    setSelectedSubAgent(subAgent);
    setSelectedMicroAgent(null);
    
    // Load micro-agents for this sub-agent
    try {
      const { default: MicroAgentSystem } = await import('../../../services/microAgentSystem');
      const microAgentSystem = MicroAgentSystem;
      const subMicroAgents = microAgentSystem.getMicroAgentsForSubAgent(subAgent.id);
      setMicroAgents(subMicroAgents);
    } catch (error) {
      console.error('Failed to load micro-agents:', error);
    }
  };

  const handleProcessRequest = async (): Promise<void> => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResult('');
    setProcessingChain(null);
    
    try {
      const { default: AgentSystem } = await import('../../../services/agentSystem');
      const agentSystem = AgentSystem;
      
      const response = await agentSystem.processRequest(prompt, {
        useSubAgents: true,
        useMicroAgents: true
      });
      
      setResult(response.result);
      setProcessingChain(response.processingChain);
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getExpertiseColor = (expertise: string): string => {
    const colors: Record<string, string> = {
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

  
  return (
    <div className="max-w-7xl mx-auto p-8 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Micro-Agent System Manager
        </h1>
        <p className="text-gray-600 text-lg italic">3-Level Agent Hierarchy: Main → Sub → Micro</p>
      </div>

      <div className="mb-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">Main Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map(agent => (
              <div
                key={agent.id}
                className={`bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative ${
                  selectedAgent?.id === agent.id ? 'border-indigo-500 shadow-lg -translate-y-1' : ''
                }`}
                onClick={() => handleAgentSelect(agent)}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.map(cap => (
                    <span key={cap} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedAgent && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">
              Sub-Agents for {selectedAgent.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subAgents.map(subAgent => (
                <div
                  key={subAgent.id}
                  className={`bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative border-l-4 border-l-green-500 ${
                    selectedSubAgent?.id === subAgent.id ? 'border-indigo-500 shadow-lg -translate-y-1' : ''
                  }`}
                  onClick={() => handleSubAgentSelect(subAgent)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{subAgent.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{subAgent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subAgent.capabilities.map(cap => (
                      <span key={cap} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSubAgent && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">
              Micro-Agents for {selectedSubAgent.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {microAgents.map(microAgent => (
                <div
                  key={microAgent.id}
                  className={`bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative border-l-4 border-l-amber-500 ${
                    selectedMicroAgent?.id === microAgent.id ? 'border-indigo-500 shadow-lg -translate-y-1' : ''
                  }`}
                  onClick={() => setSelectedMicroAgent(microAgent)}
                >
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide"
                    style={{ backgroundColor: getExpertiseColor(microAgent.expertise) }}
                  >
                    {microAgent.expertise}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{microAgent.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{microAgent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {microAgent.capabilities.map(cap => (
                      <span key={cap} className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-medium">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Test Processing</h2>
          </div>
          <div className="mb-6">
            <textarea
              className="w-full p-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-xl text-base resize-y min-h-[120px] text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300 backdrop-blur-sm"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              rows={4}
            />
            <button
              className={`px-8 py-3 rounded-xl text-base font-bold transition-all duration-300 mt-4 relative overflow-hidden group ${
                loading || !prompt.trim()
                  ? 'bg-gray-600/50 cursor-not-allowed text-gray-400'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 transform'
              }`}
              onClick={handleProcessRequest}
              disabled={loading || !prompt.trim()}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Process Request
                  </>
                )}
              </span>
              {!(loading || !prompt.trim()) && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          </div>

          {processingChain && (
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                Processing Chain
              </h3>
              <div className="flex flex-col gap-4">
                <div className={`flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl transition-all duration-300 ${
                  processingChain.level === 'main' ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : ''
                }`}>
                  <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-white mb-1">Main Agent</h4>
                    <p className="text-sm text-gray-300">{processingChain.mainAgent}</p>
                  </div>
                </div>
                
                {processingChain.subAgent && (
                  <div className={`flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl transition-all duration-300 ${
                    processingChain.level === 'sub' ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : ''
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">Sub-Agent</h4>
                      <p className="text-sm text-gray-300">{processingChain.subAgent}</p>
                    </div>
                  </div>
                )}
                
                {processingChain.microAgent && (
                  <div className={`flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl transition-all duration-300 ${
                    processingChain.level === 'micro' ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : ''
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse"></div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">Micro-Agent</h4>
                      <p className="text-sm text-gray-300">{processingChain.microAgent}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {result && (
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Result
              </h3>
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <pre className="m-0 text-sm leading-relaxed whitespace-pre-wrap font-mono text-gray-300">
                  {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">System Statistics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{agents.length}</h3>
              <p className="text-sm text-indigo-300 font-medium">Main Agents</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{subAgents.length}</h3>
              <p className="text-sm text-green-300 font-medium">Sub-Agents</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">μ</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{microAgents.length}</h3>
              <p className="text-sm text-amber-300 font-medium">Micro-Agents</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">Σ</span>
              </div>
            <h3 className="text-3xl font-bold text-white mb-2">{agents.length + subAgents.length + microAgents.length}</h3>
              <p className="text-sm text-purple-300 font-medium">Total Agents</p>
            </div>
          </div>
        </div>
  </div>
);
};

export default MicroAgentManager;
