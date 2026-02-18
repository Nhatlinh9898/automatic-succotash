# React AI Prompt Assistant Setup Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your AI API configuration.

## Running the Application

### Option 1: Development with AI Server
```bash
npm run dev:full
```
This starts both the React app (port 3000) and AI server (port 8080) concurrently.

### Option 2: Separate Processes
```bash
# Terminal 1 - Start AI server
npm run ai-server

# Terminal 2 - Start React app
npm run dev
```

### Option 3: React App Only
```bash
npm run dev
```
Access the app at http://localhost:3000

## Available Scripts

- `npm run dev` - Start React development server
- `npm run ai-server` - Start AI service server
- `npm run dev:full` - Start both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## AI Service Configuration

The AI service includes:
- Mock responses for development
- RESTful API endpoint at `/api/ai`
- Health check at `/health`
- CORS enabled for React app

## Integration with Existing 3D Library

This React app can be integrated with your existing Three.js 3D model library. The AI service can help generate:
- Character descriptions for 3D models
- Scene descriptions
- Animation prompts
- Creative suggestions for 3D content

## Next Steps

1. Replace mock AI responses with real AI API (OpenAI, Claude, etc.)
2. Add authentication for AI endpoints
3. Integrate with existing 3D model library
4. Add specialized AI prompts for 3D content generation
