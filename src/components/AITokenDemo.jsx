import React, { useState, useEffect } from 'react';
import AIService from '../services/aiService';
import TokenManager from './TokenManager';
import './AITokenDemo.css';

const AITokenDemo = () => {
  const [aiService] = useState(() => {
    const service = new AIService();
    service.onStatusUpdate((status) => {
      setProcessingStatus(status);
    });
    return service;
  });

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [tokenUsage, setTokenUsage] = useState(0);
  const [processingStatus, setProcessingStatus] = useState({
    isProcessing: false,
    currentChunk: 0,
    totalChunks: 0,
    stage: 'idle'
  });

  useEffect(() => {
    // Update token usage when prompt changes
    if (prompt) {
      const estimatedTokens = aiService.estimateTokenCount(prompt);
      setTokenUsage(estimatedTokens);
    } else {
      setTokenUsage(0);
    }
  }, [prompt, aiService]);

  const handleTokenSettingsChange = (settings) => {
    aiService.updateTokenSettings(settings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const result = await aiService.generatePrompt(prompt);
      setResponse(result);
    } catch (error) {
      setResponse(`Lỗi: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadTestPrompt = (type) => {
    const prompts = {
      short: "Tạo một nhân vật 3D với mái tóc màu xanh và mắt nâu.",
      medium: `Tạo một nhân vật 3D chi tiết: 
- Tên: Luna
- Tuổi: 25
- Tóc: Dài, màu xanh dương, có highlight tím
- Mắt: Màu nâu sô cô la, to tròn
- Da: Trắng hồng, có tàn nhang nhẹ
- Thân hình: Cao 1m65, mảnh mai
- Trang phục: Váy dài màu trắng, có ren ở tay áo
- Tính cách: Hiền lành, thông minh, yêu thiên nhiên
- Nền: Công viên có hồ và cây xanh`,
      long: `Tạo một nhân vật 3D cực chi tiết cho game nhập vai:

THÔNG TIN CƠ BẢN:
- Tên đầy đủ: Alexandra Moonwhisper
- Biệt danh: Alex
- Tuổi: 28
- Giới tính: Nữ
- Chủng tộc: Bán tiên (Half-elf)
- Nghề nghiệp: Pháp sư thiên nhiên

ĐẶC ĐIỂM NGOẠI HÌNH:
Khuôn mặt:
- Dáng mặt: Vàng đào, thanh tú
- Mắt: Mắt hạnh nhân, màu xanh lá cây đậm, có ánh sáng ma thuật
- Lông mày: Cong tự nhiên, màu nâu sẫm
- Mũi: Thon gọn, nhỏ
- Môi: Đầy đặn, màu hồng đào tự nhiên
- Tai: Nhọn như tiên, có khuyên bạc nhỏ

Tóc:
- Màu: Xanh rêu đậm với highlight bạc
- Kiểu: Dài đến eo, uốn lọn nhẹ
- Trang sức: Có băng đô lá cây bằng bạc

Thân hình:
- Chiều cao: 1m68
- Cân nặng: 55kg
- Dáng người: Thon gọn, uyển chuyển
- Da: Trắng mịn, có hoa văn ma thuật mờ ở cánh tay

TRANG PHỤC:
Áo khoác:
- Chất liệu: Vải ma thuật xanh lá cây
- Kiểu dáng: Dài đến gối, có mũ trùm
- Trang trí: Thêu lá bạc và rune cổ

Quần áo:
- Áo trong: Áo cotton trắng, cổ cao
- Quần: Quần ống rộng màu nâu
- Thắt lưng: Da thật, có buckle hình mặt trời

Giày dép:
- Kiểu: ủng da cao đến bắp chân
- Màu: Nâu sẫm
- Đế: Chống trượt, có ma thuật nhẹ

PHỤ KIỆN:
- Cây đũa phép: Gỗ sồi, có pha lê xanh ở đầu
- Túi đựng: Da, có nhiều ngăn
- Sách phép: Bìa da, có khóa ma thuật
- Amulet: Hình mặt trăng, bằng bạc

TÍNH CÁCH:
- Thông minh, ham học hỏi
- Yêu thiên nhiên, động vật
- Kiên nhẫn, điềm tĩnh
- Dũng cảm khi cần thiết
- Thân thiện, sẵn lòng giúp đỡ

NỀN:
- Rừng cổ tích, có ánh sáng ma thuật
- Có thác nước và cầu gỗ
- Thời tiết: Hoàng hôn, có sương mờ nhẹ
- Ánh sáng: Ấm áp, vàng cam`
    };

    setPrompt(prompts[type] || '');
  };

  return (
    <div className="ai-token-demo">
      <div className="demo-header">
        <h1>AI Token Management Demo</h1>
        <p>Thử nghiệm quản lý token limit cho AI API</p>
      </div>

      <div className="demo-content">
        <div className="left-panel">
          <TokenManager
            onTokenLimitChange={handleTokenSettingsChange}
            currentUsage={tokenUsage}
            maxLimit={4000}
          />

          <div className="test-prompts">
            <h3>Prompt mẫu</h3>
            <button onClick={() => loadTestPrompt('short')}>Ngắn</button>
            <button onClick={() => loadTestPrompt('medium')}>Trung bình</button>
            <button onClick={() => loadTestPrompt('long')}>Dài (Test)</button>
          </div>
        </div>

        <div className="right-panel">
          <form onSubmit={handleSubmit} className="prompt-form">
            <div className="form-group">
              <label htmlFor="prompt">Prompt của bạn:</label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Nhập prompt để tạo nhân vật 3D..."
                rows={8}
                disabled={loading}
              />
              <div className="prompt-info">
                {prompt.length} ký tự, ~{tokenUsage} tokens
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || !prompt.trim()}
              className="submit-btn"
            >
              {loading ? 'Đang xử lý...' : 'Tạo nhân vật'}
            </button>
          </form>

          {response && (
            <div className="response">
              <h3>Kết quả:</h3>
              <div className="response-content">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AITokenDemo;
