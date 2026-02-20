/**
 * Script khởi động Voice Server
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎤 Starting Voice Server...');

// Khởi động voice server
const voiceServer = spawn('node', [path.join(__dirname, 'src/server/voiceServer.js')], {
  stdio: 'inherit',
  shell: true
});

voiceServer.on('close', (code) => {
  console.log(`Voice server exited with code ${code}`);
});

voiceServer.on('error', (error) => {
  console.error('Failed to start voice server:', error);
});

// Xử lý shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down voice server...');
  voiceServer.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down voice server...');
  voiceServer.kill('SIGTERM');
});
