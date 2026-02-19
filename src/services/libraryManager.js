// Library Manager - Hệ thống quản lý thư viện kết quả agent
class LibraryManager {
  constructor() {
    this.library = new Map(); // Main library storage
    this.categories = new Map(); // Category-based organization
    this.tags = new Map(); // Tag-based indexing
    this.metadata = new Map(); // Metadata and statistics
    this.recentlyUsed = new Map(); // LRU cache for frequently accessed items
    this.searchIndex = new Map(); // Search optimization index
    
    // Configuration
    this.config = {
      maxLibrarySize: 1000, // Maximum items in library
      maxCacheSize: 50, // Maximum items in recently used cache
      autoSave: true, // Auto-save agent results
      compressionEnabled: true, // Compress stored data
      searchThreshold: 0.3, // Minimum similarity score for search
      backupEnabled: true, // Enable backup to localStorage
      cleanupInterval: 5 * 60 * 1000, // Cleanup every 5 minutes
    };
    
    // Statistics
    this.stats = {
      totalItems: 0,
      totalCategories: 0,
      totalTags: 0,
      cacheHits: 0,
      cacheMisses: 0,
      searchQueries: 0,
      autoSaves: 0,
      lastCleanup: Date.now()
    };
    
    // Event callbacks
    this.eventCallbacks = {
      onItemAdded: [],
      onItemRetrieved: [],
      onItemUpdated: [],
      onItemDeleted: [],
      onLibraryCleared: [],
      onSearchPerformed: []
    };
    
    // Initialize library
    this.initializeLibrary();
    
    // Start cleanup interval
    this.startCleanupInterval();
  }

  // Initialize library from storage
  initializeLibrary() {
    try {
      // Load from localStorage if available (browser environment)
      if (typeof localStorage !== 'undefined') {
        const savedLibrary = localStorage.getItem('agentLibrary');
        const savedMetadata = localStorage.getItem('agentLibraryMetadata');
        
        if (savedLibrary) {
          const libraryData = JSON.parse(savedLibrary);
          libraryData.forEach(item => {
            this.library.set(item.id, item);
            this.updateIndexes(item);
          });
        }
        
        if (savedMetadata) {
          const metadata = JSON.parse(savedMetadata);
          this.stats = { ...this.stats, ...metadata.stats };
          this.categories = new Map(metadata.categories || []);
          this.tags = new Map(metadata.tags || []);
        }
      } else {
        // Node.js server environment - initialize with empty library
        console.log('LibraryManager: Running in Node.js environment, using in-memory storage');
      }
      
      console.log('Library initialized with', this.library.size, 'items');
    } catch (error) {
      console.warn('Failed to initialize library from storage:', error);
    }
  }

  // Add item to library
  addToLibrary(agentResult, options = {}) {
    const item = {
      id: this.generateItemId(),
      timestamp: Date.now(),
      agentType: agentResult.agentType || 'unknown',
      subAgentType: agentResult.subAgentType || null,
      microAgentType: agentResult.microAgentType || null,
      prompt: agentResult.prompt || '',
      result: agentResult.result || '',
      processingChain: agentResult.processingChain || {},
      metadata: {
        tokens: agentResult.tokens || 0,
        processingTime: agentResult.processingTime || 0,
        model: agentResult.model || 'unknown',
        temperature: agentResult.temperature || 0.7,
        ...options.metadata
      },
      tags: options.tags || [],
      category: options.category || this.categorizeItem(agentResult),
      quality: options.quality || this.assessQuality(agentResult),
      usage: {
        accessCount: 0,
        lastAccessed: Date.now(),
        favorited: false
      },
      compressed: this.config.compressionEnabled
    };

    // Compress data if enabled
    if (this.config.compressionEnabled) {
      item.result = this.compressData(item.result);
      item.prompt = this.compressData(item.prompt);
    }

    // Add to library
    this.library.set(item.id, item);
    
    // Update indexes
    this.updateIndexes(item);
    
    // Update statistics
    this.stats.totalItems++;
    this.stats.autoSaves++;
    
    // Add to recently used
    this.addToRecentlyUsed(item);
    
    // Save to storage if auto-save enabled
    if (this.config.autoSave) {
      this.saveToStorage();
    }
    
    // Emit event
    this.emit('onItemAdded', item);
    
    // Check library size limit
    this.enforceLibrarySizeLimit();
    
    return item.id;
  }

  // Retrieve item from library
  getFromLibrary(itemId) {
    // Check recently used cache first
    if (this.recentlyUsed.has(itemId)) {
      this.stats.cacheHits++;
      const item = this.recentlyUsed.get(itemId);
      
      // Update usage statistics
      item.usage.accessCount++;
      item.usage.lastAccessed = Date.now();
      
      // Decompress if needed
      const result = this.decompressItem(item);
      this.emit('onItemRetrieved', result);
      return result;
    }
    
    // Check main library
    if (this.library.has(itemId)) {
      this.stats.cacheMisses++;
      const item = this.library.get(itemId);
      
      // Update usage statistics
      item.usage.accessCount++;
      item.usage.lastAccessed = Date.now();
      
      // Add to recently used
      this.addToRecentlyUsed(item);
      
      // Decompress if needed
      const result = this.decompressItem(item);
      this.emit('onItemRetrieved', result);
      return result;
    }
    
    return null;
  }

  // Search library
  searchLibrary(query, options = {}) {
    this.stats.searchQueries++;
    
    const {
      category = null,
      tags = [],
      agentType = null,
      minQuality = 0,
      sortBy = 'relevance',
      limit = 20
    } = options;
    
    const results = [];
    const queryLower = query.toLowerCase();
    
    // Search through library
    for (const [id, item] of this.library) {
      let score = 0;
      
      // Text similarity search
      const promptMatch = this.calculateSimilarity(queryLower, item.prompt.toLowerCase());
      const resultMatch = this.calculateSimilarity(queryLower, item.result.toLowerCase());
      score = Math.max(promptMatch, resultMatch);
      
      // Category filter
      if (category && item.category !== category) continue;
      
      // Tags filter
      if (tags.length > 0 && !tags.some(tag => item.tags.includes(tag))) continue;
      
      // Agent type filter
      if (agentType && item.agentType !== agentType) continue;
      
      // Quality filter
      if (item.quality < minQuality) continue;
      
      // Minimum similarity threshold
      if (score < this.config.searchThreshold) continue;
      
      results.push({
        id,
        item: this.decompressItem(item),
        score,
        relevance: score
      });
    }
    
    // Sort results
    results.sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          return b.score - a.score;
        case 'quality':
          return b.item.quality - a.item.quality;
        case 'recent':
          return b.item.timestamp - a.item.timestamp;
        case 'usage':
          return b.item.usage.accessCount - a.item.usage.accessCount;
        default:
          return b.score - a.score;
      }
    });
    
    // Limit results
    const limitedResults = results.slice(0, limit);
    
    this.emit('onSearchPerformed', { query, results: limitedResults });
    
    return limitedResults;
  }

  // Get items by category
  getByCategory(category, limit = 50) {
    const items = [];
    
    for (const [id, item] of this.library) {
      if (item.category === category) {
        items.push(this.decompressItem(item));
      }
    }
    
    return items
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  // Get items by tags
  getByTags(tags, limit = 50) {
    const items = [];
    
    for (const [id, item] of this.library) {
      if (tags.some(tag => item.tags.includes(tag))) {
        items.push(this.decompressItem(item));
      }
    }
    
    return items
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  // Get popular items
  getPopularItems(limit = 20) {
    const items = Array.from(this.library.values())
      .map(item => this.decompressItem(item))
      .sort((a, b) => b.usage.accessCount - a.usage.accessCount)
      .slice(0, limit);
    
    return items;
  }

  // Get recent items
  getRecentItems(limit = 20) {
    const items = Array.from(this.library.values())
      .map(item => this.decompressItem(item))
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
    
    return items;
  }

  // Update item
  updateLibraryItem(itemId, updates) {
    if (!this.library.has(itemId)) {
      throw new Error('Item not found in library');
    }
    
    const item = this.library.get(itemId);
    Object.assign(item, updates);
    
    // Update indexes if category or tags changed
    if (updates.category || updates.tags) {
      this.updateIndexes(item);
    }
    
    // Save to storage
    if (this.config.autoSave) {
      this.saveToStorage();
    }
    
    this.emit('onItemUpdated', item);
    return item;
  }

  // Delete item
  deleteFromLibrary(itemId) {
    if (!this.library.has(itemId)) {
      return false;
    }
    
    const item = this.library.get(itemId);
    this.library.delete(itemId);
    this.recentlyUsed.delete(itemId);
    
    // Update indexes
    this.removeFromIndexes(item);
    
    // Update statistics
    this.stats.totalItems--;
    
    // Save to storage
    if (this.config.autoSave) {
      this.saveToStorage();
    }
    
    this.emit('onItemDeleted', item);
    return true;
  }

  // Clear library
  clearLibrary() {
    this.library.clear();
    this.categories.clear();
    this.tags.clear();
    this.recentlyUsed.clear();
    this.searchIndex.clear();
    
    // Reset statistics
    this.stats.totalItems = 0;
    this.stats.totalCategories = 0;
    this.stats.totalTags = 0;
    
    // Save to storage
    if (this.config.autoSave) {
      this.saveToStorage();
    }
    
    this.emit('onLibraryCleared');
  }

  // Get library statistics
  getLibraryStats() {
    return {
      ...this.stats,
      cacheHitRate: this.stats.cacheHits / (this.stats.cacheHits + this.stats.cacheMisses) || 0,
      librarySize: this.library.size,
      cacheSize: this.recentlyUsed.size,
      categories: Array.from(this.categories.keys()),
      popularTags: this.getPopularTags(),
      averageQuality: this.calculateAverageQuality()
    };
  }

  // Get library categories
  getCategories() {
    return Array.from(this.categories.entries()).map(([name, items]) => ({
      name,
      count: items.length,
      description: this.getCategoryDescription(name)
    }));
  }

  // Get all tags
  getTags() {
    return Array.from(this.tags.entries()).map(([tag, items]) => ({
      tag,
      count: items.length
    })).sort((a, b) => b.count - a.count);
  }

  // Private helper methods
  generateItemId() {
    return `lib_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  categorizeItem(agentResult) {
    const agentType = agentResult.agentType || '';
    const prompt = (agentResult.prompt || '').toLowerCase();
    
    // Auto-categorization based on agent type and content
    if (agentType.includes('character')) return 'character_design';
    if (agentType.includes('environment')) return 'environment_design';
    if (agentType.includes('animation')) return 'animation';
    if (agentType.includes('technical')) return 'technical';
    if (agentType.includes('story')) return 'story';
    if (agentType.includes('ui')) return 'ui_design';
    
    // Content-based categorization
    if (prompt.includes('nhân vật') || prompt.includes('character')) return 'character_design';
    if (prompt.includes('môi trường') || prompt.includes('environment')) return 'environment_design';
    if (prompt.includes('chuyển động') || prompt.includes('animation')) return 'animation';
    if (prompt.includes('kỹ thuật') || prompt.includes('technical')) return 'technical';
    if (prompt.includes('cốt truyện') || prompt.includes('story')) return 'story';
    if (prompt.includes('giao diện') || prompt.includes('ui')) return 'ui_design';
    
    return 'general';
  }

  assessQuality(agentResult) {
    let score = 0.5; // Base score
    
    const result = agentResult.result || '';
    const prompt = agentResult.prompt || '';
    
    // Length factor
    if (result.length > 500) score += 0.1;
    if (result.length > 1000) score += 0.1;
    
    // Structure factor
    if (result.includes('\n')) score += 0.1;
    if (result.match(/\d+\./)) score += 0.1; // Numbered lists
    
    // Content richness
    const richWords = ['chi tiết', 'detailed', 'phức tạp', 'complex', 'tổng thể', 'comprehensive'];
    const richCount = richWords.filter(word => result.toLowerCase().includes(word)).length;
    score += Math.min(richCount * 0.05, 0.2);
    
    // Processing time (longer might mean more thoughtful)
    if (agentResult.processingTime > 2000) score += 0.1;
    
    return Math.min(score, 1.0);
  }

  compressData(data) {
    if (!data || typeof data !== 'string') return data;
    
    // Simple compression - remove extra whitespace and normalize
    return data
      .replace(/\s+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  decompressItem(item) {
    if (!item.compressed) return item;
    
    return {
      ...item,
      prompt: item.prompt,
      result: item.result,
      compressed: false
    };
  }

  calculateSimilarity(str1, str2) {
    // Simple similarity calculation
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    const intersection = words1.filter(word => words2.includes(word));
    const union = [...new Set([...words1, ...words2])];
    
    return intersection.length / union.length;
  }

  updateIndexes(item) {
    // Update category index
    if (!this.categories.has(item.category)) {
      this.categories.set(item.category, []);
    }
    this.categories.get(item.category).push(item.id);
    
    // Update tag index
    item.tags.forEach(tag => {
      if (!this.tags.has(tag)) {
        this.tags.set(tag, []);
      }
      this.tags.get(tag).push(item.id);
    });
    
    // Update search index
    const searchTerms = [...item.prompt.split(/\s+/), ...item.result.split(/\s+/)];
    searchTerms.forEach(term => {
      if (!this.searchIndex.has(term)) {
        this.searchIndex.set(term, []);
      }
      this.searchIndex.get(term).push(item.id);
    });
  }

  removeFromIndexes(item) {
    // Remove from category index
    if (this.categories.has(item.category)) {
      const categoryItems = this.categories.get(item.category);
      const index = categoryItems.indexOf(item.id);
      if (index > -1) {
        categoryItems.splice(index, 1);
      }
      if (categoryItems.length === 0) {
        this.categories.delete(item.category);
      }
    }
    
    // Remove from tag index
    item.tags.forEach(tag => {
      if (this.tags.has(tag)) {
        const tagItems = this.tags.get(tag);
        const index = tagItems.indexOf(item.id);
        if (index > -1) {
          tagItems.splice(index, 1);
        }
        if (tagItems.length === 0) {
          this.tags.delete(tag);
        }
      }
    });
  }

  addToRecentlyUsed(item) {
    // Add to recently used
    this.recentlyUsed.set(item.id, item);
    
    // Enforce cache size limit
    if (this.recentlyUsed.size > this.config.maxCacheSize) {
      const oldestKey = this.recentlyUsed.keys().next().value;
      this.recentlyUsed.delete(oldestKey);
    }
  }

  enforceLibrarySizeLimit() {
    if (this.library.size <= this.config.maxLibrarySize) {
      return;
    }
    
    // Remove least used items
    const items = Array.from(this.library.entries())
      .sort((a, b) => {
        const usageA = a[1].usage.accessCount + (Date.now() - a[1].usage.lastAccessed) / 1000000;
        const usageB = b[1].usage.accessCount + (Date.now() - b[1].usage.lastAccessed) / 1000000;
        return usageA - usageB;
      });
    
    const toRemove = items.slice(0, this.library.size - this.config.maxLibrarySize);
    toRemove.forEach(([id]) => this.deleteFromLibrary(id));
  }

  saveToStorage() {
    try {
      const libraryData = Array.from(this.library.values());
      const metadata = {
        stats: this.stats,
        categories: Array.from(this.categories.entries()),
        tags: Array.from(this.tags.entries())
      };
      
      localStorage.setItem('agentLibrary', JSON.stringify(libraryData));
      localStorage.setItem('agentLibraryMetadata', JSON.stringify(metadata));
    } catch (error) {
      console.warn('Failed to save library to storage:', error);
    }
  }

  startCleanupInterval() {
    setInterval(() => {
      this.performCleanup();
    }, this.config.cleanupInterval);
  }

  performCleanup() {
    // Remove very old items from recently used cache
    const now = Date.now();
    const maxAge = 30 * 60 * 1000; // 30 minutes
    
    for (const [id, item] of this.recentlyUsed.entries()) {
      if (now - item.usage.lastAccessed > maxAge) {
        this.recentlyUsed.delete(id);
      }
    }
    
    this.stats.lastCleanup = now;
  }

  getPopularTags() {
    return Array.from(this.tags.entries())
      .map(([tag, items]) => ({ tag, count: items.length }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
  }

  calculateAverageQuality() {
    if (this.library.size === 0) return 0;
    
    const totalQuality = Array.from(this.library.values())
      .reduce((sum, item) => sum + item.quality, 0);
    
    return totalQuality / this.library.size;
  }

  getCategoryDescription(category) {
    const descriptions = {
      'character_design': 'Thiết kế nhân vật 3D, ngoại hình, tính cách, trang phục',
      'environment_design': 'Thiết kế môi trường, bối cảnh, cảnh quan 3D',
      'animation': 'Tạo chuyển động, hành vi, animation cho nhân vật',
      'technical': 'Xử lý kỹ thuật: model, texture, optimization',
      'story': 'Phát triển cốt truyện, dialogue, quest',
      'ui_design': 'Thiết kế giao diện, trải nghiệm người dùng',
      'general': 'Các nội dung chung khác'
    };
    
    return descriptions[category] || 'Chưa có mô tả';
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
}

export default new LibraryManager();
