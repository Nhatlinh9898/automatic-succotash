// Simple Node.js server for AI functionality
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Mock AI responses for demonstration
const mockAIResponses = {
  'character': 'Based on your character description, I suggest developing their backstory with childhood experiences that shaped their current personality. Consider their fears, desires, and internal conflicts.',
  'story': 'Your story prompt has great potential. I recommend establishing a clear inciting incident, developing rising tension, and creating a satisfying resolution that ties back to your theme.',
  'worldbuilding': 'For worldbuilding, focus on creating consistent rules for your universe. Consider the political systems, cultural norms, and how magic/technology affects daily life.',
  'default': 'This is an interesting prompt! Let me help you explore this idea further with creative suggestions and detailed analysis.'
};

// AI endpoint
app.post('/api/ai', async (req, res) => {
  try {
    const { prompt, model = 'gpt-3.5-turbo', max_tokens = 1000, temperature = 0.7 } = req.body;
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1500));
    
    // Determine response type based on prompt content
    let responseType = 'default';
    const promptLower = prompt.toLowerCase();
    
    if (promptLower.includes('character') || promptLower.includes('person')) {
      responseType = 'character';
    } else if (promptLower.includes('story') || promptLower.includes('plot')) {
      responseType = 'story';
    } else if (promptLower.includes('world') || promptLower.includes('setting')) {
      responseType = 'worldbuilding';
    }
    
    const response = {
      response: mockAIResponses[responseType],
      model,
      usage: {
        prompt_tokens: Math.floor(prompt.length / 4),
        completion_tokens: Math.floor(mockAIResponses[responseType].length / 4),
        total_tokens: Math.floor((prompt.length + mockAIResponses[responseType].length) / 4)
      },
      timestamp: new Date().toISOString()
    };
    
    res.json(response);
  } catch (error) {
    console.error('AI API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`AI Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`AI endpoint: http://localhost:${PORT}/api/ai`);
});

export default app;
