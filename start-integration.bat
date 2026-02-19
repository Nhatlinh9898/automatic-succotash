@echo off
echo 🚀 Starting Web3D Framework + Server Integration
echo.

echo 📋 Checking dependencies...
call npm list express concurrently --depth=0 >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Installing missing dependencies...
    call npm install
)

echo.
echo 🔧 Starting servers and framework...
echo.

echo 🌐 Main Server (Port 3001) - AI + TTS + Character System
start "Main Server" cmd /k "node server.js"

timeout /t 3 /nobreak >nul

echo 🤖 AI Server (Port 8080) - Rate Limiting + Batch Processing
start "AI Server" cmd /k "node src/server/ai-server.js"

timeout /t 3 /nobreak >nul

echo ⚡ Development Server (Port 5173) - React + Vite
start "Dev Server" cmd /k "npm run dev"

echo.
echo ✅ All services started!
echo.
echo 📱 Open your browser and navigate to:
echo    http://localhost:5173
echo.
echo 🎯 Navigate to "Framework" tab to access integration
echo.
echo 🔍 Server Status:
echo    Main Server: http://localhost:3001/api/health
echo    AI Server: http://localhost:8080/health
echo    Dev Server: http://localhost:5173
echo.
echo 💡 Press any key to open application in your browser...
pause >nul

start http://localhost:5173

echo.
echo 🎮 Integration is ready! Use Framework tab to:
echo    - Generate AI-powered 3D objects
echo    - Create shaders with AI assistance
echo    - Process batch AI requests
echo    - Monitor server status
echo    - Export framework state
echo.

pause
