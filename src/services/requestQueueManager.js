// Request Queue Manager - Quản lý hàng đợi và giới hạn tốc độ API
class RequestQueueManager {
  constructor(options = {}) {
    // Cấu hình rate limiting
    this.config = {
      maxConcurrent: options.maxConcurrent || 3,        // Số request concurrent tối đa
      requestsPerSecond: options.requestsPerSecond || 2, // Request mỗi giây
      maxQueueSize: options.maxQueueSize || 50,         // Kích thước queue tối đa
      requestTimeout: options.requestTimeout || 30000,  // Timeout cho mỗi request (ms)
      retryAttempts: options.retryAttempts || 3,        // Số lần retry
      backoffMultiplier: options.backoffMultiplier || 2, // Hệ số backoff
      ...options
    };

    // Queue và processing state
    this.requestQueue = [];
    this.processingRequests = new Set();
    this.completedRequests = new Map();
    this.failedRequests = new Map();
    
    // Rate limiting
    this.requestTimestamps = [];
    this.lastRequestTime = 0;
    
    // Deduplication cache
    this.requestCache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 phút cache
    
    // Statistics
    this.stats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      cachedResponses: 0,
      averageResponseTime: 0
    };

    // Event callbacks
    this.eventCallbacks = {
      onRequestQueued: [],
      onRequestStart: [],
      onRequestComplete: [],
      onRequestFailed: [],
      onQueueEmpty: []
    };

    // Start processing queue
    this.startQueueProcessor();
  }

  // Thêm request vào queue
  async enqueueRequest(requestData) {
    const requestId = this.generateRequestId();
    const request = {
      id: requestId,
      data: requestData,
      timestamp: Date.now(),
      attempts: 0,
      status: 'queued',
      priority: requestData.priority || 'normal',
      agent: requestData.agent || 'unknown',
      type: requestData.type || 'api'
    };

    // Kiểm tra deduplication
    const cacheKey = this.generateCacheKey(requestData);
    if (this.requestCache.has(cacheKey)) {
      const cached = this.requestCache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheTimeout) {
        this.stats.cachedResponses++;
        this.emit('onRequestComplete', { request, result: cached.result, fromCache: true });
        return cached.result;
      }
    }

    // Kiểm tra queue size
    if (this.requestQueue.length >= this.config.maxQueueSize) {
      throw new Error('Request queue is full. Please try again later.');
    }

    // Thêm vào queue với priority
    this.insertByPriority(request);
    this.stats.totalRequests++;
    
    this.emit('onRequestQueued', request);
    
    // Return promise that resolves when request is processed
    return new Promise((resolve, reject) => {
      request.resolve = resolve;
      request.reject = reject;
    });
  }

  // Chèn request vào queue theo priority
  insertByPriority(request) {
    const priorityOrder = { 'high': 0, 'normal': 1, 'low': 2 };
    const requestPriority = priorityOrder[request.priority] || 1;
    
    let insertIndex = this.requestQueue.length;
    for (let i = 0; i < this.requestQueue.length; i++) {
      const queuePriority = priorityOrder[this.requestQueue[i].priority] || 1;
      if (requestPriority < queuePriority) {
        insertIndex = i;
        break;
      }
    }
    
    this.requestQueue.splice(insertIndex, 0, request);
  }

  // Bắt đầu processor
  startQueueProcessor() {
    setInterval(() => {
      this.processQueue();
    }, 100); // Process every 100ms
  }

  // Xử lý queue
  async processQueue() {
    // Kiểm tra rate limiting
    if (!this.canMakeRequest()) {
      return;
    }

    // Kiểm tra concurrent limit
    if (this.processingRequests.size >= this.config.maxConcurrent) {
      return;
    }

    // Lấy request tiếp theo từ queue
    const request = this.requestQueue.shift();
    if (!request) {
      if (this.processingRequests.size === 0) {
        this.emit('onQueueEmpty');
      }
      return;
    }

    // Bắt đầu xử lý request
    this.processRequest(request);
  }

  // Kiểm tra có thể thực hiện request không
  canMakeRequest() {
    const now = Date.now();
    
    // Xóa các timestamps cũ hơn 1 giây
    this.requestTimestamps = this.requestTimestamps.filter(
      timestamp => now - timestamp < 1000
    );
    
    // Kiểm tra số request trong giây
    if (this.requestTimestamps.length >= this.config.requestsPerSecond) {
      return false;
    }
    
    // Kiểm khoảng cách tối thiểu giữa các requests
    const minInterval = 1000 / this.config.requestsPerSecond;
    if (now - this.lastRequestTime < minInterval) {
      return false;
    }
    
    return true;
  }

  // Xử lý单个 request
  async processRequest(request) {
    request.status = 'processing';
    request.startTime = Date.now();
    this.processingRequests.add(request.id);
    
    // Ghi nhận timestamp cho rate limiting
    this.requestTimestamps.push(Date.now());
    this.lastRequestTime = Date.now();
    
    this.emit('onRequestStart', request);

    try {
      const result = await this.executeRequest(request);
      
      // Cache kết quả
      const cacheKey = this.generateCacheKey(request.data);
      this.requestCache.set(cacheKey, {
        result,
        timestamp: Date.now()
      });
      
      // Cleanup cache cũ
      this.cleanupCache();
      
      // Cập nhật statistics
      this.updateStats(request, true, result);
      
      request.status = 'completed';
      this.completedRequests.set(request.id, {
        request,
        result,
        completedAt: Date.now()
      });
      
      this.emit('onRequestComplete', { request, result, fromCache: false });
      request.resolve(result);
      
    } catch (error) {
      request.attempts++;
      
      // Retry với exponential backoff
      if (request.attempts < this.config.retryAttempts) {
        const backoffDelay = Math.min(
          1000 * Math.pow(this.config.backoffMultiplier, request.attempts),
          10000 // Max 10 seconds
        );
        
        console.warn(`Request ${request.id} failed, retrying in ${backoffDelay}ms...`, error.message);
        
        setTimeout(() => {
          // Thêm lại vào queue với priority cao hơn
          request.priority = 'high';
          this.insertByPriority(request);
        }, backoffDelay);
        
      } else {
        // Failed sau khi retry hết lần
        request.status = 'failed';
        this.failedRequests.set(request.id, {
          request,
          error: error.message,
          failedAt: Date.now()
        });
        
        this.updateStats(request, false, error);
        this.emit('onRequestFailed', { request, error });
        request.reject(error);
      }
    } finally {
      this.processingRequests.delete(request.id);
    }
  }

  // Thực thi request thực tế
  async executeRequest(request) {
    const { data } = request;
    
    // Tạo timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), this.config.requestTimeout);
    });
    
    // Thực thi request dựa trên type
    const requestPromise = this.makeActualRequest(data);
    
    return Promise.race([requestPromise, timeoutPromise]);
  }

  // Gọi API thực tế
  async makeActualRequest(data) {
    const { endpoint, method = 'POST', headers = {}, body } = data;
    
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Rate limit exceeded');
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  }

  // Tạo request ID unique
  generateRequestId() {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Tạo cache key
  generateCacheKey(data) {
    const { endpoint, method, body } = data;
    const keyString = `${method}_${endpoint}_${JSON.stringify(body)}`;
    return btoa(keyString).replace(/[^a-zA-Z0-9]/g, '').substr(0, 32);
  }

  // Cleanup cache cũ
  cleanupCache() {
    const now = Date.now();
    for (const [key, value] of this.requestCache.entries()) {
      if (now - value.timestamp > this.cacheTimeout) {
        this.requestCache.delete(key);
      }
    }
  }

  // Cập nhật statistics
  updateStats(request, success, result) {
    if (success) {
      this.stats.successfulRequests++;
      
      // Tính average response time
      const responseTime = Date.now() - request.startTime;
      const total = this.stats.successfulRequests + this.stats.failedRequests;
      this.stats.averageResponseTime = 
        (this.stats.averageResponseTime * (total - 1) + responseTime) / total;
    } else {
      this.stats.failedRequests++;
    }
  }

  // Event emitter
  on(event, callback) {
    if (this.eventCallbacks[event]) {
      this.eventCallbacks[event].push(callback);
    }
  }

  emit(event, data) {
    if (this.eventCallbacks[event]) {
      this.eventCallbacks[event].forEach(callback => callback(data));
    }
  }

  // Lấy statistics
  getStats() {
    return {
      ...this.stats,
      queueLength: this.requestQueue.length,
      processingCount: this.processingRequests.size,
      cacheSize: this.requestCache.size
    };
  }

  // Lấy queue status
  getQueueStatus() {
    return {
      queue: this.requestQueue.map(r => ({
        id: r.id,
        agent: r.agent,
        type: r.type,
        priority: r.priority,
        status: r.status,
        waitTime: Date.now() - r.timestamp
      })),
      processing: Array.from(this.processingRequests).map(id => {
        const request = this.requestQueue.find(r => r.id === id) || 
                       this.completedRequests.get(id)?.request;
        return request ? {
          id: request.id,
          agent: request.agent,
          type: request.type,
          duration: Date.now() - request.startTime
        } : null;
      }).filter(Boolean)
    };
  }

  // Xóa queue
  clearQueue() {
    this.requestQueue.forEach(request => {
      request.reject(new Error('Queue cleared'));
    });
    this.requestQueue = [];
  }

  // Force retry failed requests
  retryFailedRequests() {
    const failedRequests = Array.from(this.failedRequests.values());
    this.failedRequests.clear();
    
    failedRequests.forEach(({ request }) => {
      request.attempts = 0;
      request.status = 'queued';
      request.priority = 'high';
      this.insertByPriority(request);
    });
  }
}

export default RequestQueueManager;
