import React, { useState, useEffect, useRef } from 'react';
import aiService from '../../../services/aiService';
import TokenManager from '../../utilities/TokenManager';

const AITokenDemo = () => {
  const aiServiceRef = useRef(aiService);

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
      const estimatedTokens = aiServiceRef.current.estimateTokenCount(prompt);
      setTokenUsage(estimatedTokens);
    } else {
      setTokenUsage(0);
    }
  }, [prompt]);

  const handleTokenSettingsChange = (settings) => {
    aiServiceRef.current.updateTokenSettings(settings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const result = await aiServiceRef.current.generatePrompt(prompt);
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
    <div className="max-w-7xl mx-auto p-5 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2.5 text-gray-800">AI Token Management Demo</h1>
        <p className="text-lg text-gray-600">Thử nghiệm quản lý token limit cho AI API</p>
      </div>

      <div className="grid grid-cols-[400px_1fr] gap-8 items-start">
        <div className="sticky top-5">
          <TokenManager
            onTokenLimitChange={handleTokenSettingsChange}
            currentUsage={tokenUsage}
            maxLimit={4000}
          />

          <div className="mt-5 p-4 bg-gray-50 rounded-lg border border-gray-300">
            <h3 className="m-0 mb-2.5 text-base text-gray-700">Prompt mẫu</h3>
            <button 
              onClick={() => loadTestPrompt('short')}
              className="block w-full p-2.5 mb-2 bg-blue-500 text-white border-none rounded cursor-pointer text-sm transition-colors hover:bg-blue-600 last:mb-0"
            >
              Ngắn
            </button>
            <button 
              onClick={() => loadTestPrompt('medium')}
              className="block w-full p-2.5 mb-2 bg-blue-500 text-white border-none rounded cursor-pointer text-sm transition-colors hover:bg-blue-600 last:mb-0"
            >
              Trung bình
            </button>
            <button 
              onClick={() => loadTestPrompt('long')}
              className="block w-full p-2.5 mb-2 bg-blue-500 text-white border-none rounded cursor-pointer text-sm transition-colors hover:bg-blue-600 last:mb-0"
            >
              Dài (Test)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-5">
              <label htmlFor="prompt" className="block mb-2 font-semibold text-gray-800">Prompt của bạn:</label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Nhập prompt để tạo nhân vật 3D..."
                rows={8}
                disabled={loading}
                className="w-full p-3 border-2 border-gray-200 rounded-lg text-base font-inherit resize-y transition-colors focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/10 disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
              <div className="mt-1.5 text-xs text-gray-500 text-right">
                {prompt.length} ký tự, ~{tokenUsage} tokens
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || !prompt.trim()}
              className="bg-green-500 text-white border-none p-3 px-8 rounded-lg text-base font-semibold cursor-pointer transition-all hover:bg-green-600 hover:-translate-y-0.5 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:transform-none relative"
            >
              {loading ? (
                <>
                  <span className="opacity-0">Đang xử lý...</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                'Tạo nhân vật'
              )}
            </button>
          </form>

          {response && (
            <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-l-blue-500">
              <h3 className="m-0 mb-4 text-lg text-gray-800">Kết quả:</h3>
              <div className="bg-white p-4 rounded border border-gray-200 whitespace-pre-wrap leading-relaxed text-sm text-gray-800">
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
