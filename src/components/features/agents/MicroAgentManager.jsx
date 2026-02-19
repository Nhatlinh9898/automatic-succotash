import React, { useState, useEffect } from 'react';

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
      const { default: AgentSystem } = await import('../../../services/agentSystem.js');
      const agentSystem = AgentSystem;
      const mainAgents = agentSystem.getAvailableAgents();
      setAgents(mainAgents);

      // Load sub-agents
      const { default: SubAgentSystem } = await import('../../../services/subAgentSystem.js');
      const subAgentSystem = SubAgentSystem;
      const allSubAgents = subAgentSystem.getAllSubAgents();
      setSubAgents(allSubAgents);

      // Load micro-agents
      const { default: MicroAgentSystem } = await import('../../../services/microAgentSystem.js');
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
      const { default: SubAgentSystem } = await import('../../../services/subAgentSystem.js');
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
      const { default: MicroAgentSystem } = await import('../../../services/microAgentSystem.js');
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
      const { default: AgentSystem } = await import('../../../services/agentSystem.js');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto p-8 font-sans">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Micro-Agent System Manager
          </h1>
          <p className="text-gray-300 text-xl font-light tracking-wide">3-Level Agent Hierarchy: Main → Sub → Micro</p>
          <div className="mt-6 flex justify-center gap-2">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">AI Powered</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium backdrop-blur-sm border border-indigo-500/30">Multi-Level</span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium backdrop-blur-sm border border-pink-500/30">Intelligent</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
            <h2 className="text-3xl font-bold text-white px-6">Main Agents</h2>
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
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 pr-12">{agent.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.map(cap => (
                    <span key={cap} className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-purple-500/30">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedAgent && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1"></div>
              <h2 className="text-3xl font-bold text-white px-6">
                Sub-Agents for {selectedAgent.name}
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subAgents.map(subAgent => (
                <div
                  key={subAgent.id}
                  className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden border-l-4 border-l-green-500/50 ${
                    selectedSubAgent?.id === subAgent.id 
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/20 scale-105' 
                      : 'border-white/10 hover:border-green-500/30'
                  }`}
                  onClick={() => handleSubAgentSelect(subAgent)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 pr-12">{subAgent.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{subAgent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subAgent.capabilities.map(cap => (
                      <span key={cap} className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-green-500/30">
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
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1"></div>
              <h2 className="text-3xl font-bold text-white px-6">
                Micro-Agents for {selectedSubAgent.name}
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microAgents.map(microAgent => (
                <div
                  key={microAgent.id}
                  className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden border-l-4 border-l-amber-500/50 ${
                    selectedMicroAgent?.id === microAgent.id 
                      ? 'border-amber-500/50 shadow-2xl shadow-amber-500/20 scale-105' 
                      : 'border-white/10 hover:border-amber-500/30'
                  }`}
                  onClick={() => setSelectedMicroAgent(microAgent)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Expertise badge */}
                  <div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm border border-white/20"
                    style={{ backgroundColor: getExpertiseColor(microAgent.expertise) }}
                  >
                    {microAgent.expertise}
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 pr-20">{microAgent.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{microAgent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {microAgent.capabilities.map(cap => (
                      <span key={cap} className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-amber-500/30">
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

        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
            <h2 className="text-3xl font-bold text-white px-6">Test Processing</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
          </div>
          
          <div className="mb-8">
            <div className="relative">
              <textarea
                className="w-full p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl text-base resize-y min-h-[140px] text-white placeholder-gray-400 font-inherit transition-all duration-300 focus:outline-none focus:border-purple-500/50 focus:shadow-lg focus:shadow-purple-500/20"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                rows={4}
              />
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                className={`flex-1 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-500 relative overflow-hidden group ${
                  loading || !prompt.trim()
                    ? 'bg-gray-600/30 cursor-not-allowed text-gray-400 border border-gray-600/30'
                    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/30'
                }`}
                onClick={handleProcessRequest}
                disabled={loading || !prompt.trim()}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Process Request
                    </>
                  )}
                </span>
                {!loading && prompt.trim() && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
              </button>
            </div>
          </div>

          {processingChain && (
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                Processing Chain
              </h3>
              <div className="flex flex-col gap-4">
                <div className={`flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm border rounded-xl transition-all duration-300 ${
                  processingChain.level === 'main' ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : 'border-white/10'
                }`}>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 animate-pulse"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-white mb-1">Main Agent</h4>
                    <p className="text-sm text-gray-300">{processingChain.mainAgent}</p>
                  </div>
                </div>
                
                {processingChain.subAgent && (
                  <div className={`flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm border rounded-xl transition-all duration-300 ${
                    processingChain.level === 'sub' ? 'border-green-500/50 shadow-lg shadow-green-500/20' : 'border-white/10'
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 animate-pulse"></div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">Sub-Agent</h4>
                      <p className="text-sm text-gray-300">{processingChain.subAgent}</p>
                    </div>
                  </div>
                )}
                
                {processingChain.microAgent && (
                  <div className={`flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm border rounded-xl transition-all duration-300 ${
                    processingChain.level === 'micro' ? 'border-amber-500/50 shadow-lg shadow-amber-500/20' : 'border-white/10'
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 animate-pulse"></div>
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
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Result
              </h3>
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-h-[400px] overflow-y-auto">
                <pre className="m-0 text-sm leading-relaxed whitespace-pre-wrap font-mono text-gray-300">
                  {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
            <h2 className="text-3xl font-bold text-white px-6">System Statistics</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{agents.length}</h3>
              <p className="text-sm text-gray-300 font-medium">Main Agents</p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">{subAgents.length}</h3>
              <p className="text-sm text-gray-300 font-medium">Sub-Agents</p>
            </div>
            
            <div className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">{microAgents.length}</h3>
              <p className="text-sm text-gray-300 font-medium">Micro-Agents</p>
            </div>
            
            <div className="group bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">{agents.length + subAgents.length + microAgents.length}</h3>
              <p className="text-sm text-gray-300 font-medium">Total Agents</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MicroAgentManager;
