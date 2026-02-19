const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Voice mapping for different characters
function getVoiceName(voiceId) {
  const voiceMap = {
    'female1': 'vi-VN-Wavenet-A',
    'female2': 'vi-VN-Wavenet-B',
    'female3': 'vi-VN-Wavenet-C',
    'female4': 'vi-VN-Wavenet-D',
    'female5': 'vi-VN-Wavenet-E',
    'female6': 'vi-VN-Wavenet-F',
    'default': 'vi-VN-Wavenet-A'
  };
  return voiceMap[voiceId] || voiceMap['default'];
}

// AI Configuration
const AI_CONFIG = {
  // Gemini API Configuration
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
  },
  
  // OpenAI GPT Configuration
  openai: {
    apiKey: process.env.OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY',
    apiUrl: 'https://api.openai.com/v1/chat/completions'
  },
  
  // TTS Configuration (using Google TTS or similar)
  tts: {
    apiKey: process.env.TTS_API_KEY || 'YOUR_TTS_API_KEY',
    apiUrl: 'https://texttospeech.googleapis.com/v1/text:synthesize'
  }
};

// AI Provider Selection
const AI_PROVIDER = process.env.AI_PROVIDER || 'gemini'; // 'gemini' or 'openai'

// =========================
// AI INTEGRATION FUNCTIONS
// =========================

async function callGemini(userText) {
  try {
    const response = await fetch(`${AI_CONFIG.gemini.apiUrl}?key=${AI_CONFIG.gemini.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Bạn là một MC ảo chuyên nghiệp. Hãy trả lời câu hỏi sau một cách tự nhiên và thân thiện: ${userText}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini:', error);
    throw error;
  }
}

async function callOpenAI(userText) {
  try {
    const response = await fetch(AI_CONFIG.openai.apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_CONFIG.openai.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Bạn là một MC ảo chuyên nghiệp. Hãy trả lời câu hỏi một cách tự nhiên và thân thiện.'
          },
          {
            role: 'user',
            content: userText
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
}

async function callOpenAIWithSystem(systemMessage, userText) {
  try {
    const response = await fetch(AI_CONFIG.openai.apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_CONFIG.openai.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemMessage
          },
          {
            role: 'user',
            content: userText
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
}

async function generateTTS(text, voiceId = 'default') {
  try {
    // Using Google TTS API
    const response = await fetch(`${AI_CONFIG.tts.apiUrl}?key=${AI_CONFIG.tts.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: { text: text },
        voice: { languageCode: 'vi-VN', name: getVoiceName(voiceId) },
        audioConfig: { audioEncoding: 'MP3' }
      })
    });

    if (!response.ok) {
      throw new Error(`TTS API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Save audio file
    const audioBuffer = Buffer.from(data.audioContent, 'base64');
    const fileName = `tts_${Date.now()}.mp3`;
    const filePath = path.join('./public/audio', fileName);
    
    // Ensure directory exists
    if (!fs.existsSync('./public/audio')) {
      fs.mkdirSync('./public/audio', { recursive: true });
    }
    
    fs.writeFileSync(filePath, audioBuffer);
    
    return `/audio/${fileName}`;
  } catch (error) {
    console.error('Error generating TTS:', error);
    
    // Fallback: return a placeholder URL or null
    return null;
  }
}

// =========================
// API ROUTES
// =========================

// Main AI endpoint with character support
app.post('/api/ai', async (req, res) => {
  try {
    const { text, character, personality } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    console.log(`Processing AI request: ${text} | Character: ${character} | Personality: ${personality}`);

    // Load character configuration
    let characterConfig = null;
    try {
      const configData = fs.readFileSync(path.join(__dirname, 'character-config.json'), 'utf8');
      const config = JSON.parse(configData);
      characterConfig = config.characters[character] || config.characters.female1;
    } catch (error) {
      console.error('Error loading character config:', error);
    }

    // Get AI response with personality context
    let reply;
    if (AI_PROVIDER === 'gemini') {
      const personalityPrompt = characterConfig ? 
        `Bạn là ${characterConfig.name}, một MC ${config.personalities[personality]?.name || 'chuyên nghiệp'}. ` +
        `Phong cách nói: ${config.personalities[personality]?.speakingStyle || 'thân thiện'}. ` +
        `Hãy trả lời câu hỏi sau với tính cách này: ${text}`
        : `Bạn là một MC ảo chuyên nghiệp. Hãy trả lời câu hỏi sau một cách tự nhiên và thân thiện: ${text}`;
      
      reply = await callGemini(personalityPrompt);
    } else if (AI_PROVIDER === 'openai') {
      const personalitySystem = characterConfig ? 
        `Bạn là ${characterConfig.name}, một MC ${config.personalities[personality]?.name || 'chuyên nghiệp'}. ` +
        `Phong cách nói: ${config.personalities[personality]?.speakingStyle || 'thân thiện'}. ` +
        `Hãy trả lời câu hỏi với tính cách này.`
        : 'Bạn là một MC ảo chuyên nghiệp. Hãy trả lời câu hỏi một cách tự nhiên và thân thiện.';
      
      reply = await callOpenAIWithSystem(personalitySystem, text);
    } else {
      reply = characterConfig ? 
        `${characterConfig.greeting || 'Xin chào!'} Tôi có thể giúp gì cho bạn?` :
        "Xin chào! Tôi là MC ảo của bạn. Tôi có thể giúp gì cho bạn?";
    }

    // Generate TTS with character voice
    let ttsUrl = null;
    try {
      const voiceId = characterConfig?.voice || 'default';
      ttsUrl = await generateTTS(reply, voiceId);
    } catch (ttsError) {
      console.error('TTS generation failed:', ttsError);
    }

    res.json({
      reply: reply,
      ttsUrl: ttsUrl,
      provider: AI_PROVIDER,
      character: character,
      personality: personality
    });

  } catch (error) {
    console.error('Error in AI endpoint:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      reply: 'Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau.',
      ttsUrl: null
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    provider: AI_PROVIDER,
    timestamp: new Date().toISOString()
  });
});

// Configuration endpoint
app.get('/api/config', (req, res) => {
  res.json({
    provider: AI_PROVIDER,
    hasGeminiKey: AI_CONFIG.gemini.apiKey !== 'YOUR_GEMINI_API_KEY',
    hasOpenAIKey: AI_CONFIG.openai.apiKey !== 'YOUR_OPENAI_API_KEY',
    hasTTSKey: AI_CONFIG.tts.apiKey !== 'YOUR_TTS_API_KEY'
  });
});

// Serve the main HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mc-presenter.html'));
});

app.get('/character-system', (req, res) => {
  res.sendFile(path.join(__dirname, 'character-system.html'));
});

// Character configuration endpoint
app.get('/api/characters', (req, res) => {
  try {
    const configData = fs.readFileSync(path.join(__dirname, 'character-config.json'), 'utf8');
    const config = JSON.parse(configData);
    res.json(config);
  } catch (error) {
    console.error('Error loading character config:', error);
    res.status(500).json({ error: 'Error loading character configuration' });
  }
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(`🚀 3D MC Presenter Server running on port ${PORT}`);
  console.log(`📱 MC Presenter: http://localhost:${PORT}`);
  console.log(`👥 Character System: http://localhost:${PORT}/character-system`);
  console.log(`🤖 AI Provider: ${AI_PROVIDER}`);
  console.log(`🔧 API Health: http://localhost:${PORT}/api/health`);
  console.log(`⚙️  API Config: http://localhost:${PORT}/api/config`);
  console.log(`👥 Characters: http://localhost:${PORT}/api/characters`);
  
  // Check API keys
  if (AI_CONFIG.gemini.apiKey === 'YOUR_GEMINI_API_KEY' && 
      AI_CONFIG.openai.apiKey === 'YOUR_OPENAI_API_KEY') {
    console.log('⚠️  WARNING: No AI API keys configured. Please set environment variables:');
    console.log('   - GEMINI_API_KEY for Gemini');
    console.log('   - OPENAI_API_KEY for OpenAI');
    console.log('   - TTS_API_KEY for Google TTS');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
