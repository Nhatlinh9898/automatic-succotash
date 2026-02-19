import React, { useState, useEffect } from 'react';
import './TokenManager.css';

const TokenManager = ({ onTokenLimitChange, currentUsage = 0, maxLimit = 4000 }) => {
  const [tokenSettings, setTokenSettings] = useState({
    maxPromptLength: 3000,
    maxTokens: 1000,
    enableChunking: true,
    enableCompression: true,
    fallbackToMock: true
  });

  const [processingStatus, setProcessingStatus] = useState({
    isProcessing: false,
    currentChunk: 0,
    totalChunks: 0,
    stage: 'idle' // idle, compressing, chunking, processing, completed
  });

  const usagePercentage = (currentUsage / maxLimit) * 100;
  const progressColor = usagePercentage > 80 ? '#ff4444' : usagePercentage > 60 ? '#ffaa00' : '#44ff44';

  const handleSettingChange = (key, value) => {
    const newSettings = { ...tokenSettings, [key]: value };
    setTokenSettings(newSettings);
    onTokenLimitChange?.(newSettings);
  };

  const getStatusMessage = () => {
    switch (processingStatus.stage) {
      case 'compressing':
        return 'Đang nén nội dung...';
      case 'chunking':
        return `Đang chia thành ${processingStatus.totalChunks} phần...`;
      case 'processing':
        return `Đang xử lý phần ${processingStatus.currentChunk}/${processingStatus.totalChunks}...`;
      case 'completed':
        return 'Hoàn thành xử lý!';
      default:
        return 'Sẵn sàng';
    }
  };

  return (
    <div className="token-manager">
      <div className="token-usage">
        <h3>Sử dụng Token</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${Math.min(usagePercentage, 100)}%`,
              backgroundColor: progressColor 
            }}
          />
        </div>
        <div className="usage-text">
          {currentUsage} / {maxLimit} tokens ({usagePercentage.toFixed(1)}%)
        </div>
      </div>

      <div className="processing-status">
        <h3>Trạng thái xử lý</h3>
        <div className={`status ${processingStatus.isProcessing ? 'processing' : ''}`}>
          {getStatusMessage()}
        </div>
        {processingStatus.isProcessing && (
          <div className="chunk-progress">
            {processingStatus.currentChunk > 0 && (
              <div className="mini-progress">
                <div 
                  className="mini-progress-fill"
                  style={{ 
                    width: `${(processingStatus.currentChunk / processingStatus.totalChunks) * 100}%` 
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="token-settings">
        <h3>Cấu hình Token</h3>
        
        <div className="setting-group">
          <label>
            Độ dài prompt tối đa:
            <input
              type="number"
              value={tokenSettings.maxPromptLength}
              onChange={(e) => handleSettingChange('maxPromptLength', parseInt(e.target.value))}
              min="100"
              max="8000"
            />
          </label>
        </div>

        <div className="setting-group">
          <label>
            Max tokens response:
            <input
              type="number"
              value={tokenSettings.maxTokens}
              onChange={(e) => handleSettingChange('maxTokens', parseInt(e.target.value))}
              min="100"
              max="4000"
            />
          </label>
        </div>

        <div className="setting-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={tokenSettings.enableChunking}
              onChange={(e) => handleSettingChange('enableChunking', e.target.checked)}
            />
            Bật chia nhỏ (chunking)
          </label>
        </div>

        <div className="setting-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={tokenSettings.enableCompression}
              onChange={(e) => handleSettingChange('enableCompression', e.target.checked)}
            />
            Bật nén nội dung
          </label>
        </div>

        <div className="setting-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={tokenSettings.fallbackToMock}
              onChange={(e) => handleSettingChange('fallbackToMock', e.target.checked)}
            />
            Dùng mock khi API lỗi
          </label>
        </div>
      </div>

      <div className="token-tips">
        <h3>Mẹo tối ưu</h3>
        <ul>
          <li>Giảm độ dài prompt nếu gặp lỗi token limit</li>
          <li>Bật compression để tự động nén nội dung</li>
          <li>Chunking giúp xử lý yêu cầu dài</li>
          <li>Mock mode đảm bảo ứng dụng luôn hoạt động</li>
        </ul>
      </div>
    </div>
  );
};

export default TokenManager;
