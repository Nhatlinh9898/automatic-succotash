# Agent API Rate Limiting Solution

## Giải pháp quản lý API calls cho hệ thống Agent

Để giải quyết vấn đề các hệ thống agent gọi API đồng loạt gây bị coi là tấn công, tôi đã triển khai một giải pháp toàn diện:

## 1. Request Queue Manager (`requestQueueManager.js`)

### Tính năng chính:
- **Rate Limiting**: Giới hạn số request mỗi giây (1 req/s) và concurrent requests (2)
- **Request Queue**: Hàng đợi thông minh với priority system
- **Deduplication**: Cache kết quả để tránh trùng lặp request
- **Exponential Backoff**: Tự động retry với độ trễ tăng dần
- **Timeout Protection**: Timeout cho mỗi request (30s)
- **Statistics**: Theo dõi performance và queue status

### Cấu hình:
```javascript
{
  maxConcurrent: 2,              // Tối đa 2 request cùng lúc
  requestsPerSecond: 1,          // 1 request mỗi giây
  maxQueueSize: 20,              // Queue tối đa 20 request
  requestTimeout: 30000,         // 30 seconds timeout
  retryAttempts: 3,              // 3 lần retry
  backoffMultiplier: 2           // Exponential backoff
}
```

## 2. Enhanced AI Server (`ai-server.js`)

### Rate Limiting Tiers:
- **Global**: 100 requests / 15 phút
- **AI Endpoint**: 10 requests / phút  
- **Batch Endpoint**: 3 requests / phút

### Security Features:
- Input validation và suspicious content detection
- Request monitoring và logging
- Enhanced error handling
- System status endpoints

### Batch Processing:
- Endpoint `/api/ai/batch` cho xử lý nhiều request
- Sequential processing để tránh overwhelming
- Maximum 5 requests per batch

## 3. Updated AI Service (`aiService.js`)

### Integration với Queue Manager:
- Tự động queue tất cả API calls
- Event-driven status updates
- Batch processing support
- Graceful error handling

### Methods mới:
```javascript
// Single request với queue
await aiService.generatePrompt(prompt, { agent: 'character' });

// Batch processing
await aiService.generateBatchPrompts(prompts, { agent: 'batch' });

// Queue management
aiService.getQueueStatus();
aiService.getQueueDetails();
aiService.clearQueue();
aiService.retryFailedRequests();
```

## 4. Cách sử dụng trong Agent System

### Main Agent System:
```javascript
// Trong agentSystem.js
async callAI(prompt, options = {}) {
  const { default: AIService } = await import('./aiService.js');
  const aiService = new AIService();
  
  return await aiService.generatePrompt(prompt, {
    ...options,
    agent: options.agentType || 'unknown',
    priority: options.priority || 'normal'
  });
}
```

### Sub-Agent System:
```javascript
// Trong subAgentSystem.js  
async callAI(prompt, options = {}) {
  const { default: AIService } = await import('./aiService.js');
  const aiService = new AIService();
  
  return await aiService.generatePrompt(prompt, {
    ...options,
    agent: `sub_${this.parentAgent}`,
    priority: 'normal'
  });
}
```

## 5. Monitoring và Debugging

### Queue Status:
```javascript
const status = aiService.getQueueStatus();
console.log('Queue length:', status.queueLength);
console.log('Processing:', status.processingCount);
console.log('Success rate:', status.successfulRequests / status.totalRequests);
```

### Event Listeners:
```javascript
aiService.onStatusUpdate((status) => {
  console.log('AI Service Status:', status);
  // Update UI với queue status
});
```

## 6. Lợi ích

### Bảo vệ API:
- Không bị rate limit bởi external services
- Tránh bị block cho suspicious activity
- Controlled request flow

### Performance:
- Reduced API calls qua caching
- Better resource utilization
- Predictable response times

### Reliability:
- Automatic retry mechanism
- Graceful degradation
- Comprehensive error handling

### Monitoring:
- Real-time queue status
- Performance metrics
- Debugging information

## 7. Installation

Cần thêm dependency:
```bash
npm install express-rate-limit
```

## 8. Configuration

Environment variables:
```env
REACT_APP_AI_API_ENDPOINT=http://localhost:8080/api/ai
REACT_APP_AI_BATCH_ENDPOINT=http://localhost:8080/api/ai/batch
REACT_APP_AI_API_KEY=your_api_key_here
```

## 9. Usage Example

```javascript
import AIService from './services/aiService.js';

const aiService = new AIService();

// Setup status monitoring
aiService.onStatusUpdate((status) => {
  console.log('Status:', status.stage, 'Agent:', status.agent);
});

// Generate response với queue
try {
  const response = await aiService.generatePrompt(
    "Create a 3D character design",
    { 
      agent: 'character_design',
      priority: 'high',
      maxTokens: 1500 
    }
  );
  console.log('AI Response:', response);
} catch (error) {
  console.error('Error:', error.message);
}

// Check queue status
const queueStatus = aiService.getQueueStatus();
console.log('Queue Status:', queueStatus);
```

Giải pháp này đảm bảo hệ thống agent hoạt động ổn định, không bị coi là tấn công, và cung cấp monitoring đầy đủ cho việc debug và optimization.
