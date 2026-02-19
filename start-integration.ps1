# PowerShell script for starting Web3D Framework + Server Integration
Write-Host "🚀 Starting Web3D Framework + Server Integration" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Checking dependencies..." -ForegroundColor Yellow
npm list express concurrently --depth=0 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Installing missing dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "🔧 Starting servers and framework..." -ForegroundColor Cyan
Write-Host ""

Write-Host "🌐 Main Server (Port 3001) - AI + TTS + Character System" -ForegroundColor Blue
Start-Process -WindowStyle Normal -FilePath "cmd" -ArgumentList "/k", "node server.js"

Start-Sleep -Seconds 3

Write-Host "🤖 AI Server (Port 8080) - Rate Limiting + Batch Processing" -ForegroundColor Magenta
Start-Process -WindowStyle Normal -FilePath "cmd" -ArgumentList "/k", "node src/server/ai-server.js"

Start-Sleep -Seconds 3

Write-Host "⚡ Development Server (Port 5173) - React + Vite" -ForegroundColor Cyan
Start-Process -WindowStyle Normal -FilePath "cmd" -ArgumentList "/k", "npm run dev"

Write-Host ""
Write-Host "✅ All services started!" -ForegroundColor Green
Write-Host ""
Write-Host "📱 Open your browser and navigate to:" -ForegroundColor White
Write-Host "   http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 Navigate to 'Framework' tab to access integration" -ForegroundColor White
Write-Host ""
Write-Host "🔍 Server Status:" -ForegroundColor White
Write-Host "    Main Server: http://localhost:3001/api/health" -ForegroundColor Blue
Write-Host "    AI Server: http://localhost:8080/health" -ForegroundColor Magenta
Write-Host "    Dev Server: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""

Write-Host "💡 Press any key to open application in your browser..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Start-Process "http://localhost:5173"

Write-Host ""
Write-Host "🎮 Integration is ready! Use Framework tab to:" -ForegroundColor Green
Write-Host "    - Generate AI-powered 3D objects" -ForegroundColor White
Write-Host "    - Create shaders with AI assistance" -ForegroundColor White
Write-Host "    - Process batch AI requests" -ForegroundColor White
Write-Host "    - Monitor server status" -ForegroundColor White
Write-Host "    - Export framework state" -ForegroundColor White
Write-Host ""

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
