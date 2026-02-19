#!/usr/bin/env node

import http from 'http';
import fs from 'fs';
import path from 'path';

console.log('🔍 Testing Application Connections...\n');

// Test server availability
function testServer(port, path, name) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: path,
      method: 'GET',
      timeout: 5000
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`✅ ${name} - Status: ${res.statusCode}`);
        resolve({ success: true, status: res.statusCode, data: data.substring(0, 100) });
      });
    });

    req.on('error', (error) => {
      console.log(`❌ ${name} - Error: ${error.message}`);
      resolve({ success: false, error: error.message });
    });

    req.on('timeout', () => {
      console.log(`⏰ ${name} - Timeout`);
      req.destroy();
      resolve({ success: false, error: 'Timeout' });
    });

    req.end();
  });
}

// Test file existence
function testFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description} - Found`);
    return true;
  } else {
    console.log(`❌ ${description} - Missing`);
    return false;
  }
}

// Test routing configuration
function testRouting() {
  console.log('\n📋 Testing Routing Configuration:');
  
  const appContent = fs.readFileSync('src/App.jsx', 'utf8');
  const headerContent = fs.readFileSync('src/components/Header.jsx', 'utf8');
  
  const hasRouter = appContent.includes('BrowserRouter') && appContent.includes('Routes') && appContent.includes('Route');
  const hasLink = headerContent.includes('Link') && headerContent.includes('to=');
  const hasPaths = appContent.includes('path="/"') && appContent.includes('path="/');
  
  console.log(hasRouter ? '✅ React Router configured' : '❌ React Router missing');
  console.log(hasLink ? '✅ Navigation links use React Router' : '❌ Navigation links not using React Router');
  console.log(hasPaths ? '✅ Route paths defined' : '❌ Route paths missing');
  
  return hasRouter && hasLink && hasPaths;
}

// Test API endpoints configuration
function testAPIConfig() {
  console.log('\n🤖 Testing API Configuration:');
  
  const aiServiceContent = fs.readFileSync('src/services/aiService.js', 'utf8');
  const viteConfigContent = fs.readFileSync('vite.config.js', 'utf8');
  
  const hasRelativeUrls = aiServiceContent.includes('/api/ai') && !aiServiceContent.includes('http://localhost:8080/api/ai');
  const hasProxy = viteConfigContent.includes('proxy') && viteConfigContent.includes('target: \'http://localhost:8080\'');
  const hasEndpoints = aiServiceContent.includes('agentsEndpoint') && aiServiceContent.includes('servicesEndpoint');
  
  console.log(hasRelativeUrls ? '✅ Using relative API URLs' : '❌ Still using absolute URLs');
  console.log(hasProxy ? '✅ Vite proxy configured' : '❌ Vite proxy missing');
  console.log(hasEndpoints ? '✅ Multiple API endpoints configured' : '❌ API endpoints missing');
  
  return hasRelativeUrls && hasProxy && hasEndpoints;
}

// Main test function
async function runTests() {
  console.log('🚀 Starting Connection Tests...\n');
  
  // Test file structure
  console.log('📁 Testing File Structure:');
  const files = [
    { path: 'src/App.jsx', desc: 'Main App component' },
    { path: 'src/components/Header.jsx', desc: 'Header component' },
    { path: 'src/services/aiService.js', desc: 'AI Service' },
    { path: 'src/server/ai-server.js', desc: 'AI Server' },
    { path: 'vite.config.js', desc: 'Vite configuration' },
    { path: 'start-unified.js', desc: 'Unified startup script' }
  ];
  
  let allFilesExist = true;
  files.forEach(file => {
    if (!testFile(file.path, file.desc)) {
      allFilesExist = false;
    }
  });
  
  // Test routing
  const routingOk = testRouting();
  
  // Test API configuration
  const apiConfigOk = testAPIConfig();
  
  // Test server availability (if servers are running)
  console.log('\n🌐 Testing Server Availability:');
  console.log('Note: Make sure servers are running with "npm run start"');
  
  const aiServerTest = await testServer(8080, '/health', 'AI Server (port 8080)');
  const devServerTest = await testServer(3000, '/', 'Dev Server (port 3000)');
  
  // Summary
  console.log('\n📊 Test Summary:');
  console.log(`Files: ${allFilesExist ? '✅' : '❌'}`);
  console.log(`Routing: ${routingOk ? '✅' : '❌'}`);
  console.log(`API Config: ${apiConfigOk ? '✅' : '❌'}`);
  console.log(`AI Server: ${aiServerTest.success ? '✅' : '❌'}`);
  console.log(`Dev Server: ${devServerTest.success ? '✅' : '❌'}`);
  
  const allTestsPass = allFilesExist && routingOk && apiConfigOk && aiServerTest.success && devServerTest.success;
  
  console.log(`\n${allTestsPass ? '🎉 All tests passed!' : '⚠️  Some tests failed. Check the issues above.'}`);
  
  if (!allTestsPass) {
    console.log('\n💡 To start the application:');
    console.log('   npm run start');
    console.log('\n📋 Available URLs:');
    console.log('   🏠 Main App: http://localhost:3000');
    console.log('   🤖 AI API: http://localhost:8080/api/ai');
    console.log('   💊 Health: http://localhost:8080/health');
  }
}

runTests().catch(console.error);
