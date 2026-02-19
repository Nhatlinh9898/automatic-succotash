import React, { useState, useEffect } from 'react';
import voiceService from '../services/voiceService.js';
import './VoiceGenerator.css';

const VoiceGenerator = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('af_sarah');
  const [voices, setVoices] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioResult, setAudioResult] = useState(null);
  const [generatedFiles, setGeneratedFiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    initializeVoiceService();
    loadGeneratedFiles();
  }, []);

  const initializeVoiceService = async () => {
    try {
      const initialized = await voiceService.initialize();
      if (initialized) {
        setIsInitialized(true);
        setVoices(voiceService.getAvailableVoices());
      }
    } catch (error) {
      setError('Không thể khởi tạo Voice Service');
      console.error(error);
    }
  };

  const loadGeneratedFiles = async () => {
    try {
      const response = await fetch('/api/voice/files');
      if (response.ok) {
        const data = await response.json();
        setGeneratedFiles(data.files);
      }
    } catch (error) {
      console.error('Failed to load generated files:', error);
    }
  };

  const handleVoiceChange = (voiceId) => {
    setSelectedVoice(voiceId);
    voiceService.setVoice(voiceId);
  };

  const handleSynthesize = async () => {
    if (!text.trim()) {
      setError('Vui lòng nhập text cần chuyển đổi');
      return;
    }

    setIsProcessing(true);
    setError('');
    setAudioResult(null);

    try {
      const result = await voiceService.synthesizeSpeech(text, {
        speed: 1.0
      });
      
      setAudioResult(result);
      await loadGeneratedFiles(); // Refresh file list
      
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi khi tạo audio');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePlay = async () => {
    if (audioResult) {
      try {
        await voiceService.playAudio(audioResult.audioUrl);
      } catch (error) {
        setError('Không thể phát audio');
        console.error(error);
      }
    }
  };

  const handleDownload = () => {
    if (audioResult) {
      voiceService.downloadAudio(audioResult.audioUrl, audioResult.filename);
    }
  };

  const handleDeleteFile = async (filename) => {
    try {
      const response = await fetch(`/api/voice/files/${filename}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        await loadGeneratedFiles();
        if (audioResult && audioResult.filename === filename) {
          setAudioResult(null);
        }
      }
    } catch (error) {
      setError('Không thể xóa file');
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('vi-VN');
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="voice-generator">
      <div className="voice-header">
        <h1>🎤 AI Voice Generator</h1>
        <p>Chuyển text thành giọng nói tự nhiên với Kokoro TTS (Miễn phí)</p>
      </div>

      {!isInitialized ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Đang khởi tạo Voice Service...</p>
        </div>
      ) : (
        <div className="voice-content">
          {/* Voice Selection */}
          <div className="voice-selection">
            <h3>🎭 Chọn giọng nói</h3>
            <div className="voice-grid">
              {voices.map(voice => (
                <button
                  key={voice.id}
                  className={`voice-card ${selectedVoice === voice.id ? 'selected' : ''}`}
                  onClick={() => handleVoiceChange(voice.id)}
                >
                  <div className="voice-info">
                    <span className="voice-name">{voice.name}</span>
                    <span className="voice-gender">
                      {voice.gender === 'female' ? '👩' : '👨'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Text Input */}
          <div className="text-input-section">
            <h3>📝 Nhập text</h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Nhập text cần chuyển đổi thành giọng nói..."
              className="text-input"
              rows={4}
              disabled={isProcessing}
            />
            <div className="text-stats">
              {text.length} ký tự
            </div>
          </div>

          {/* Generate Button */}
          <div className="generate-section">
            <button
              className="generate-btn"
              onClick={handleSynthesize}
              disabled={!text.trim() || isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="btn-spinner"></div>
                  Đang tạo audio...
                </>
              ) : (
                <>
                  🎤 Tạo Audio
                </>
              )}
            </button>
          </div>

          {/* Error Display */}
          {error && (
            <div className="error-message">
              ❌ {error}
            </div>
          )}

          {/* Audio Result */}
          {audioResult && (
            <div className="audio-result">
              <h3>✅ Audio đã tạo</h3>
              <div className="audio-player">
                <audio controls src={audioResult.audioUrl}>
                  Trình duyệt không hỗ trợ audio
                </audio>
                <div className="audio-info">
                  <span>File: {audioResult.filename}</span>
                  <span>Giọng: {voiceService.formatVoiceName(audioResult.voice)}</span>
                </div>
                <div className="audio-actions">
                  <button onClick={handlePlay} className="action-btn play-btn">
                    🔊 Phát
                  </button>
                  <button onClick={handleDownload} className="action-btn download-btn">
                    📥 Tải xuống
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Generated Files */}
          {generatedFiles.length > 0 && (
            <div className="generated-files">
              <h3>📁 Các file đã tạo</h3>
              <div className="files-list">
                {generatedFiles.map(file => (
                  <div key={file.filename} className="file-item">
                    <div className="file-info">
                      <span className="file-name">{file.filename}</span>
                      <span className="file-details">
                        {formatFileSize(file.size)} • {formatDate(file.created)}
                      </span>
                    </div>
                    <div className="file-actions">
                      <audio controls src={file.audioUrl} className="mini-audio">
                      </audio>
                      <button
                        onClick={() => handleDeleteFile(file.filename)}
                        className="delete-btn"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceGenerator;
