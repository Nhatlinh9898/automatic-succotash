#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting Unified 3D Model Application...\n');

// Check if required files exist
const requiredFiles = [
  'src/server/ai-server.js',
  'src/App.jsx',
  'package.json'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Required file missing: ${file}`);
    process.exit(1);
  }
}

// Start AI Server
console.log('🤖 Starting AI Server on port 8080...');
const aiServer = spawn('node', ['src/server/ai-server.js'], {
  stdio: 'pipe',
  cwd: process.cwd()
});

aiServer.stdout.on('data', (data) => {
  const output = data.toString().trim();
  if (output) {
    console.log(`[AI Server] ${output}`);
  }
});

aiServer.stderr.on('data', (data) => {
  const output = data.toString().trim();
  if (output) {
    console.error(`[AI Server Error] ${output}`);
  }
});

// Wait a moment for AI server to start
setTimeout(() => {
  console.log('\n⚡ Starting Vite Dev Server on port 3000...');
  const viteServer = spawn('npm', ['run', 'dev'], {
    stdio: 'pipe',
    cwd: process.cwd()
  });

  viteServer.stdout.on('data', (data) => {
    const output = data.toString().trim();
    if (output) {
      console.log(`[Vite] ${output}`);
    }
  });

  viteServer.stderr.on('data', (data) => {
    const output = data.toString().trim();
    if (output) {
      console.error(`[Vite Error] ${output}`);
    }
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down servers...');
    aiServer.kill('SIGINT');
    viteServer.kill('SIGINT');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down servers...');
    aiServer.kill('SIGTERM');
    viteServer.kill('SIGTERM');
    process.exit(0);
  });

  viteServer.on('close', (code) => {
    console.log(`Vite server exited with code ${code}`);
    aiServer.kill();
    process.exit(code);
  });

}, 2000);

aiServer.on('close', (code) => {
  console.log(`AI Server exited with code ${code}`);
  process.exit(code);
});

// Display startup information
setTimeout(() => {
  console.log('\n📋 Application URLs:');
  console.log('🏠 Main App: http://localhost:3000');
  console.log('🤖 AI API: http://localhost:8080/api/ai');
  console.log('💊 Health Check: http://localhost:8080/health');
  console.log('📊 Service Status: http://localhost:8080/api/services/status');
  console.log('\n✅ Unified application started successfully!');
  console.log('🔄 Press Ctrl+C to stop all servers\n');
}, 3000);
