/**
 * Voice Server - Backend cho Kokoro TTS
 * Express server cung cấp API endpoints cho text-to-speech
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class VoiceServer {
  constructor(port = 3001) {
    this.app = express();
    this.port = port;
    this.outputDir = path.join(__dirname, '../../outputs/voice');
    this.isProcessing = false;
    
    this.setupMiddleware();
    this.setupRoutes();
    this.ensureOutputDir();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(this.outputDir));
  }

  setupRoutes() {
    // Health check
    this.app.get('/api/voice/status', (req, res) => {
      res.json({
        status: 'ready',
        isProcessing: this.isProcessing,
        timestamp: new Date().toISOString()
      });
    });

    // Get available voices
    this.app.get('/api/voice/voices', (req, res) => {
      const voices = [
        { id: 'af_sarah', name: 'Sarah (Nữ)', gender: 'female' },
        { id: 'af_nicole', name: 'Nicole (Nữ)', gender: 'female' },
        { id: 'af_sky', name: 'Sky (Nữ)', gender: 'female' },
        { id: 'am_adam', name: 'Adam (Nam)', gender: 'male' },
        { id: 'am_michael', name: 'Michael (Nam)', gender: 'male' }
      ];

      res.json({
        voices,
        current: 'af_sarah'
      });
    });

    // Synthesize speech
    this.app.post('/api/voice/synthesize', async (req, res) => {
      if (this.isProcessing) {
        return res.status(429).json({
          error: 'Another synthesis is in progress',
          message: 'Vui lòng đợi xử lý hoàn tất'
        });
      }

      const { text, voice = 'af_sarah', speed = 1.0 } = req.body;

      if (!text || text.trim().length === 0) {
        return res.status(400).json({
          error: 'Text is required',
          message: 'Vui lòng nhập text cần chuyển đổi'
        });
      }

      this.isProcessing = true;

      try {
        console.log(`🎤 Synthesizing: "${text}" with voice: ${voice}`);
        
        const filename = `voice_${Date.now()}.wav`;
        const outputPath = path.join(this.outputDir, filename);

        // Gọi Python script để tạo audio
        const result = await this.synthesizeWithPython(text, voice, speed, outputPath);

        res.json({
          success: true,
          filename,
          audioUrl: `/voice/${filename}`,
          duration: result.duration,
          text,
          voice
        });

      } catch (error) {
        console.error('❌ Synthesis failed:', error);
        res.status(500).json({
          error: 'Synthesis failed',
          message: error.message
        });
      } finally {
        this.isProcessing = false;
      }
    });

    // Get generated files
    this.app.get('/api/voice/files', (req, res) => {
      try {
        const files = fs.readdirSync(this.outputDir)
          .filter(file => file.endsWith('.wav'))
          .map(file => {
            const stats = fs.statSync(path.join(this.outputDir, file));
            return {
              filename: file,
              audioUrl: `/voice/${file}`,
              size: stats.size,
              created: stats.birthtime
            };
          })
          .sort((a, b) => b.created - a.created);

        res.json({ files });
      } catch (error) {
        res.status(500).json({ error: 'Failed to list files' });
      }
    });

    // Delete file
    this.app.delete('/api/voice/files/:filename', (req, res) => {
      try {
        const { filename } = req.params;
        const filePath = path.join(this.outputDir, filename);
        
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          res.json({ success: true, message: 'File deleted' });
        } else {
          res.status(404).json({ error: 'File not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete file' });
      }
    });
  }

  async synthesizeWithPython(text, voice, speed, outputPath) {
    return new Promise((resolve, reject) => {
      const pythonScript = path.join(__dirname, '../scripts/kokoro_synthesizer.py');
      
      const python = spawn('python', [
        pythonScript,
        '--text', text,
        '--voice', voice,
        '--speed', speed.toString(),
        '--output', outputPath
      ]);

      let stdout = '';
      let stderr = '';

      python.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      python.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      python.on('close', (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(stdout);
            resolve(result);
          } catch (e) {
            resolve({ duration: 0 });
          }
        } else {
          reject(new Error(`Python script failed: ${stderr}`));
        }
      });

      python.on('error', (error) => {
        reject(new Error(`Failed to start Python: ${error.message}`));
      });
    });
  }

  ensureOutputDir() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
      console.log(`📁 Created output directory: ${this.outputDir}`);
    }
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🎤 Voice Server running on http://localhost:${this.port}`);
      console.log(`📁 Output directory: ${this.outputDir}`);
    });
  }
}

// Start server if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new VoiceServer();
  server.start();
}

export default VoiceServer;
