/**
 * Voice Service - Tích hợp Kokoro TTS
 * Cung cấp text-to-speech miễn phí cho project
 */

class VoiceService {
  constructor() {
    this.isInitialized = false;
    this.voices = ['af_sarah', 'af_nicole', 'af_sky', 'am_adam', 'am_michael'];
    this.currentVoice = 'af_sarah';
    this.isProcessing = false;
  }

  /**
   * Khởi tạo voice service
   */
  async initialize() {
    try {
      console.log('🎤 Initializing Voice Service...');
      
      // Kiểm tra Python backend
      const response = await fetch('/api/voice/status');
      if (response.ok) {
        this.isInitialized = true;
        console.log('✅ Voice Service initialized successfully');
        return true;
      } else {
        throw new Error('Voice backend not available');
      }
    } catch (error) {
      console.error('❌ Failed to initialize Voice Service:', error);
      return false;
    }
  }

  /**
   * Lấy danh sách giọng có sẵn
   */
  getAvailableVoices() {
    return this.voices.map(voice => ({
      id: voice,
      name: this.formatVoiceName(voice),
      gender: voice.startsWith('af_') ? 'female' : 'male'
    }));
  }

  /**
   * Format tên giọng cho hiển thị
   */
  formatVoiceName(voice) {
    const names = {
      'af_sarah': 'Sarah (Nữ)',
      'af_nicole': 'Nicole (Nữ)', 
      'af_sky': 'Sky (Nữ)',
      'am_adam': 'Adam (Nam)',
      'am_michael': 'Michael (Nam)'
    };
    return names[voice] || voice;
  }

  /**
   * Chọn giọng nói
   */
  setVoice(voiceId) {
    if (this.voices.includes(voiceId)) {
      this.currentVoice = voiceId;
      console.log(`🎤 Voice changed to: ${this.formatVoiceName(voiceId)}`);
      return true;
    }
    return false;
  }

  /**
   * Chuyển text thành speech
   */
  async synthesizeSpeech(text, options = {}) {
    if (!this.isInitialized) {
      throw new Error('Voice Service not initialized');
    }

    if (this.isProcessing) {
      throw new Error('Another speech synthesis is in progress');
    }

    if (!text || text.trim().length === 0) {
      throw new Error('Text cannot be empty');
    }

    this.isProcessing = true;

    try {
      console.log(`🎤 Synthesizing speech with voice: ${this.currentVoice}`);
      
      const payload = {
        text: text.trim(),
        voice: this.currentVoice,
        speed: options.speed || 1.0,
        ...options
      };

      const response = await fetch('/api/voice/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Speech synthesis failed');
      }

      const result = await response.json();
      
      console.log(`✅ Speech synthesis completed: ${result.filename}`);
      
      return {
        audioUrl: result.audioUrl,
        filename: result.filename,
        duration: result.duration,
        text: text,
        voice: this.currentVoice
      };

    } catch (error) {
      console.error('❌ Speech synthesis failed:', error);
      throw error;
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Phát audio
   */
  async playAudio(audioUrl) {
    try {
      const audio = new Audio(audioUrl);
      await audio.play();
      return audio;
    } catch (error) {
      console.error('❌ Failed to play audio:', error);
      throw error;
    }
  }

  /**
   * Dừng audio đang phát
   */
  stopAudio(audio) {
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  /**
   * Lấy trạng thái hiện tại
   */
  getStatus() {
    return {
      isInitialized: this.isInitialized,
      isProcessing: this.isProcessing,
      currentVoice: this.currentVoice,
      availableVoices: this.getAvailableVoices()
    };
  }

  /**
   * Tải xuống audio file
   */
  async downloadAudio(audioUrl, filename) {
    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename || `voice_${Date.now()}.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      console.log(`📁 Audio downloaded: ${filename}`);
    } catch (error) {
      console.error('❌ Failed to download audio:', error);
      throw error;
    }
  }
}

// Export singleton instance
const voiceService = new VoiceService();
export default voiceService;
