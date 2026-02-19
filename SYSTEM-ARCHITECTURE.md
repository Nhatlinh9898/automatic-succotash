# 🏗️ System Architecture & Operation Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Frontend Architecture](#frontend-architecture)
3. [Backend Architecture](#backend-architecture)
4. [Data Flow](#data-flow)
5. [Routing System](#routing-system)
6. [API Endpoints](#api-endpoints)
7. [Service Integration](#service-integration)
8. [Startup Process](#startup-process)
9. [Development Workflow](#development-workflow)

---

## 🎯 Overview

Hệ thống là một ứng dụng 3D AI-powered với kiến trúc client-server, tích hợp nhiều service và components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend     │    │   Backend      │    │   Services     │
│   (React)      │◄──►│   (Express)    │◄──►│   (AI/3D)      │
│   Port: 3000   │    │   Port: 8080   │    │   Various       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 🎨 Frontend Architecture

### **React Application Structure**

```
src/
├── App.jsx                    # Main application with React Router
├── components/               # UI Components
│   ├── Header.jsx            # Navigation header with routing
│   ├── PromptInput.jsx       # AI prompt input
│   ├── ResponseDisplay.jsx   # AI response display
│   ├── [FeatureComponents]   # Specialized feature components
│   └── ...
├── services/                # Business logic services
│   ├── aiService.js        # Main AI service
│   ├── agentSystem.js      # Agent management
│   ├── libraryManager.js   # 3D library management
│   ├── microAgentSystem.js # Micro-agent processing
│   └── ...
└── server/                 # Backend servers
    └── ai-server.js       # Main AI server
```

### **Key Frontend Components**

#### **1. App.jsx - Main Router**
```javascript
// React Router Configuration
<Router>
  <AppContent>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agents" element={<AgentSystemDemo />} />
      <Route path="/webxr" element={<WebXRDemo />} />
      <!-- ... 15+ routes -->
    </Routes>
  </AppContent>
</Router>
```

**Chức năng:**
- URL-based routing
- State management cho prompt/response
- Settings và history persistence
- Component lifecycle management

#### **2. Header.jsx - Navigation**
```javascript
// Navigation với React Router Link
<Link to="/agents" className="nav-btn">
  <span className="nav-icon">🤖</span>
  <span className="nav-label">Agents</span>
</Link>
```

**Chức năng:**
- Active tab detection từ URL
- Responsive navigation
- Brand linking to home

#### **3. aiService.js - API Client**
```javascript
class AIService {
  constructor() {
    // Relative URLs for proxy
    this.apiEndpoint = '/api/ai';
    this.agentsEndpoint = '/api/agents';
    this.servicesEndpoint = '/api/services/status';
  }
  
  async generatePrompt(prompt, options) {
    // Queue management với rate limiting
    return await this.queueManager.enqueueRequest(requestData);
  }
}
```

**Chức năng:**
- API communication với queue management
- Rate limiting và retry logic
- Multiple endpoint connections
- Error handling và fallback

---

## 🖥️ Backend Architecture

### **AI Server (ai-server.js)**

```javascript
// Express Server Configuration
const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimit()); // Rate limiting

// Service Integration
import aiService from '../services/aiService.js';
import agentSystem from '../services/agentSystem.js';
import libraryManager from '../services/libraryManager.js';
```

### **Core Backend Services**

#### **1. AI Processing Pipeline**
```javascript
app.post('/api/ai', async (req, res) => {
  // 1. Request validation
  // 2. Agent detection
  // 3. Queue processing
  // 4. AI API call
  // 5. Response formatting
});
```

#### **2. Agent System**
```javascript
// Multi-agent processing
app.post('/api/agents/process', async (req, res) => {
  const { prompt, agentType } = req.body;
  const agent = agentSystem.agents.get(agentType);
  const result = await agent.process(prompt, options);
});
```

#### **3. Library Management**
```javascript
// 3D asset library
app.post('/api/library/search', async (req, res) => {
  const { query, type, limit } = req.body;
  const results = await libraryManager.search(query, { type, limit });
});
```

---

## 🔄 Data Flow

### **Complete Request Flow**

```
1. User Input (Frontend)
   ↓
2. Header Navigation (React Router)
   ↓
3. Component Render (App.jsx Routes)
   ↓
4. aiService.generatePrompt()
   ↓
5. Queue Manager (RequestQueueManager)
   ↓
6. Vite Proxy (/api → localhost:8080)
   ↓
7. AI Server (ai-server.js)
   ↓
8. Agent Detection & Processing
   ↓
9. AI API Call (OpenAI/Gemini)
   ↓
10. Response Processing
    ↓
11. Queue Response
    ↓
12. Frontend Update
    ↓
13. UI Render
```

### **State Management Flow**

```javascript
// Component State
const [prompt, setPrompt] = useState('');
const [response, setResponse] = useState('');
const [loading, setLoading] = useState(false);

// Service Queue State
queueManager.on('onRequestStart', (request) => {
  setLoading(true);
  notifyStatus({ stage: 'processing' });
});

queueManager.on('onRequestComplete', ({ result }) => {
  setLoading(false);
  setResponse(result);
  notifyStatus({ stage: 'completed' });
});
```

---

## 🧭 Routing System

### **URL Structure**
```
/                          # Home - AI Prompt Interface
/home                     # Home (alias)
/agents                   # Agent System Demo
/webxr                    # WebXR Demo
/particles                # Particle Effects
/character-generator       # AI Character Generator
/physics                  # Physics Playground
/collaboration            # Realtime Collaboration
/terrain                  # Terrain Generator
/audio-visualizer         # Audio Visualizer
/shader-editor           # Shader Editor
/framework-integration    # Framework Integration
/characters              # Character Prompts
/history                 # Prompt History
/settings                # Application Settings
```

### **Route Detection Logic**
```javascript
const getActiveTabFromPath = () => {
  const path = location.pathname;
  if (path.startsWith('/agents')) return 'agents';
  if (path.startsWith('/webxr')) return 'webxr';
  // ... mapping logic
  return 'home';
};
```

---

## 🔌 API Endpoints

### **Primary AI Endpoints**
```
POST /api/ai                    # Main AI processing
POST /api/ai/batch             # Batch processing
GET  /api/agents                # List available agents
POST /api/agents/process        # Process with specific agent
GET  /api/services/status        # Service status
POST /api/library/search         # Search 3D library
GET  /health                   # Health check
```

### **Request/Response Format**
```javascript
// Request
{
  "prompt": "Create a 3D character",
  "model": "gpt-3.5-turbo",
  "temperature": 0.7,
  "max_tokens": 1000,
  "agent": "character_agent"
}

// Response
{
  "response": "AI generated response",
  "model": "gpt-3.5-turbo",
  "agent": "character_agent",
  "usage": {
    "prompt_tokens": 50,
    "completion_tokens": 100,
    "total_tokens": 150
  },
  "timestamp": "2024-01-01T00:00:00.000Z",
  "processingTime": 1500
}
```

---

## ⚙️ Service Integration

### **1. Request Queue Manager**
```javascript
class RequestQueueManager {
  constructor(config) {
    this.maxConcurrent = 2;
    this.requestsPerSecond = 1;
    this.maxQueueSize = 20;
    this.retryAttempts = 3;
  }
  
  async enqueueRequest(requestData) {
    // Queue logic với rate limiting
    // Retry mechanism với exponential backoff
    // Status callbacks
  }
}
```

### **2. Agent System**
```javascript
class AgentSystem {
  constructor() {
    this.agents = new Map([
      ['character_agent', new CharacterAgent()],
      ['story_agent', new StoryAgent()],
      ['worldbuilding_agent', new WorldbuildingAgent()]
    ]);
  }
  
  detectAgent(prompt) {
    // AI-powered agent detection
    // Pattern matching
    // Context analysis
  }
}
```

### **3. Library Manager**
```javascript
class LibraryManager {
  async search(query, options) {
    // 3D model search
    // Asset filtering
    // Metadata extraction
  }
}
```

---

## 🚀 Startup Process

### **Unified Startup (start-unified.js)**
```javascript
// 1. File validation
// 2. Start AI Server (port 8080)
// 3. Wait for server ready
// 4. Start Vite Dev Server (port 3000)
// 5. Setup proxy configuration
// 6. Display URLs and status
```

### **Development Commands**
```bash
npm run start              # Unified startup
npm run dev               # Vite only
npm run ai-server         # AI server only
npm run test:connections  # Connection testing
```

### **Server Configuration**
```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
});
```

---

## 🛠️ Development Workflow

### **1. Development Setup**
```bash
# Install dependencies
npm install

# Start development servers
npm run start

# Test connections
npm run test:connections
```

### **2. Component Development**
```javascript
// New component structure
function NewFeature() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // API calls via aiService
    aiService.getAgents().then(setData);
  }, []);
  
  return <div>{/* Component JSX */}</div>;
}

// Add to App.jsx routes
<Route path="/new-feature" element={<NewFeature />} />
```

### **3. Service Integration**
```javascript
// Add new service method
class AIService {
  async newFeature(data) {
    const response = await fetch('/api/new-feature', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}
```

### **4. Testing & Validation**
```bash
# Connection testing
npm run test:connections

# Manual testing
http://localhost:3000/new-feature
http://localhost:8080/health
```

---

## 📊 Performance Considerations

### **Rate Limiting**
- Global: 100 requests/15 minutes
- AI endpoint: 10 requests/minute  
- Batch processing: 3 requests/minute
- Agent processing: 3 requests/minute

### **Queue Management**
- Max concurrent: 2 requests
- Queue size: 20 requests
- Timeout: 30 seconds
- Retry: 3 attempts với exponential backoff

### **Caching Strategy**
- Response caching trong localStorage
- History persistence (100 items)
- Settings persistence
- Component state optimization

---

## 🔒 Security Features

### **Input Validation**
```javascript
// Suspicious content detection
const suspiciousPatterns = [
  /<script[^>]*>.*?<\/script>/gi,
  /javascript:/gi,
  /eval\s*\(/gi
];

const hasSuspiciousContent = suspiciousPatterns.some(pattern => 
  pattern.test(prompt)
);
```

### **Rate Limiting**
```javascript
// Express rate limiting
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests
  message: 'Too many requests'
});
```

### **CORS Configuration**
```javascript
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

## 🎯 Key Benefits

1. **Modular Architecture**: Components và services độc lập
2. **Scalable Routing**: URL-based navigation dễ mở rộng  
3. **Unified Server**: Single AI server cho tất cả features
4. **Queue Management**: Rate limiting và retry logic
5. **Type Safety**: Consistent request/response formats
6. **Development Experience**: Hot reload và unified startup
7. **Testing**: Built-in connection testing
8. **Performance**: Optimized queue và caching

---

## 📝 Best Practices

1. **Component Development**: Sử dụng React hooks và functional components
2. **API Integration**: Luôn dùng queue manager cho requests
3. **Error Handling**: Implement try-catch và fallback logic
4. **State Management**: Local state cho components, global cho settings
5. **Routing**: Sử dụng React Router Link thay vì buttons
6. **Security**: Validate inputs và implement rate limiting
7. **Performance**: Optimize renders và implement caching
8. **Testing**: Test connections và endpoints thường xuyên

---

*Hệ thống được thiết kế để provide một nền tảng 3D AI-powered mạnh mẽ, scalable, và dễ maintain.*
