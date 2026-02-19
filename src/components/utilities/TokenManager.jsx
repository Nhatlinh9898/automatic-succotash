import React, { useState, useEffect } from 'react';

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
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-5 my-5 max-w-2xl">
      <div className="mb-5">
        <h3 className="m-0 mb-2.5 text-base text-gray-600">Sử dụng Token</h3>
        <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden mb-1.5">
          <div 
            className="h-full transition-all duration-300 rounded-full"
            style={{ 
              width: `${Math.min(usagePercentage, 100)}%`,
              backgroundColor: progressColor 
            }}
          />
        </div>
        <div className="text-xs text-gray-500 text-center">
          {currentUsage} / {maxLimit} tokens ({usagePercentage.toFixed(1)}%)
        </div>
      </div>

      <div className="mb-5">
        <h3 className="m-0 mb-2.5 text-base text-gray-600">Trạng thái xử lý</h3>
        <div className={`p-2.5 rounded bg-gray-200 text-gray-600 font-medium transition-all duration-300 ${
          processingStatus.isProcessing ? 'bg-blue-100 text-blue-900 animate-pulse' : ''
        }`}>
          {getStatusMessage()}
        </div>
        {processingStatus.isProcessing && (
          <div className="mt-2.5">
            {processingStatus.currentChunk > 0 && (
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300 rounded-full"
                  style={{ 
                    width: `${(processingStatus.currentChunk / processingStatus.totalChunks) * 100}%` 
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mb-5">
        <h3 className="m-0 mb-4 text-base text-gray-600">Cấu hình Token</h3>
        
        <div className="mb-4">
          <label className="flex flex-col text-gray-600 text-sm font-medium">
            Độ dài prompt tối đa:
            <input
              type="number"
              value={tokenSettings.maxPromptLength}
              onChange={(e) => handleSettingChange('maxPromptLength', parseInt(e.target.value))}
              min="100"
              max="8000"
              className="mt-1.5 p-2 px-3 border border-gray-300 rounded text-sm w-36 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="flex flex-col text-gray-600 text-sm font-medium">
            Max tokens response:
            <input
              type="number"
              value={tokenSettings.maxTokens}
              onChange={(e) => handleSettingChange('maxTokens', parseInt(e.target.value))}
              min="100"
              max="4000"
              className="mt-1.5 p-2 px-3 border border-gray-300 rounded text-sm w-36 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="flex flex-row items-center text-gray-600 text-sm font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={tokenSettings.enableChunking}
              onChange={(e) => handleSettingChange('enableChunking', e.target.checked)}
              className="mr-2"
            />
            Bật chia nhỏ (chunking)
          </label>
        </div>

        <div className="mb-4">
          <label className="flex flex-row items-center text-gray-600 text-sm font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={tokenSettings.enableCompression}
              onChange={(e) => handleSettingChange('enableCompression', e.target.checked)}
              className="mr-2"
            />
            Bật nén nội dung
          </label>
        </div>

        <div className="mb-4">
          <label className="flex flex-row items-center text-gray-600 text-sm font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={tokenSettings.fallbackToMock}
              onChange={(e) => handleSettingChange('fallbackToMock', e.target.checked)}
              className="mr-2"
            />
            Dùng mock khi API lỗi
          </label>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="m-0 mb-2.5 text-base text-yellow-800">Mẹo tối ưu</h3>
        <ul className="m-0 pl-5 text-yellow-800">
          <li className="mb-1.5 text-sm">Giảm độ dài prompt nếu gặp lỗi token limit</li>
          <li className="mb-1.5 text-sm">Bật compression để tự động nén nội dung</li>
          <li className="mb-1.5 text-sm">Chunking giúp xử lý yêu cầu dài</li>
          <li className="mb-0 text-sm">Mock mode đảm bảo ứng dụng luôn hoạt động</li>
        </ul>
      </div>
    </div>
  );
};

export default TokenManager;
