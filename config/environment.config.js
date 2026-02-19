/**
 * Environment Configuration for Multi-Machine Deployment
 * Handles different environments and machine-specific settings
 */

import { config } from './paths.config.js';

// AI Service Configuration
export const AI_CONFIG = {
    // Default AI service settings
    default: {
        endpoint: process.env.AI_ENDPOINT || 'http://localhost:8080/api/ai',
        timeout: 30000,
        maxRetries: 3,
        batchSize: 5,
        enableCache: true,
        cacheSize: 100
    },
    
    // Development settings
    development: {
        endpoint: process.env.DEV_AI_ENDPOINT || 'http://localhost:8080/api/ai',
        timeout: 10000,
        maxRetries: 1,
        batchSize: 3,
        enableCache: false,
        debug: true
    },
    
    // Production settings
    production: {
        endpoint: process.env.PROD_AI_ENDPOINT || 'https://api.example.com/ai',
        timeout: 60000,
        maxRetries: 5,
        batchSize: 10,
        enableCache: true,
        apiKey: process.env.AI_API_KEY
    }
};

// Server Configuration
export const SERVER_CONFIG = {
    default: {
        port: 3000,
        host: 'localhost',
        cors: true,
        staticPath: config.server.public,
        uploadPath: config.server.uploads,
        maxFileSize: '50mb'
    },
    
    development: {
        port: process.env.DEV_PORT || 3000,
        host: 'localhost',
        cors: true,
        hotReload: true,
        debug: true
    },
    
    production: {
        port: process.env.PROD_PORT || 8080,
        host: process.env.PROD_HOST || '0.0.0.0',
        cors: false,
        compression: true,
        https: process.env.HTTPS === 'true'
    }
};

// Database Configuration
export const DATABASE_CONFIG = {
    default: {
        type: 'sqlite',
        path: config.output.cache + '/database.db',
        backupPath: config.output.cache + '/backups',
        backupInterval: 24 * 60 * 60 * 1000 // 24 hours
    },
    
    development: {
        type: 'sqlite',
        path: config.output.cache + '/dev_database.db',
        logging: true
    },
    
    production: {
        type: process.env.DB_TYPE || 'postgresql',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'web3d_framework',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: process.env.DB_SSL === 'true'
    }
};

// Library Configuration
export const LIBRARY_CONFIG = {
    default: {
        rootPath: config.library.root,
        assetPath: config.library.assets,
        modelPath: config.library.models,
        texturePath: config.library.textures,
        materialPath: config.library.materials,
        animationPath: config.library.animations,
        maxCacheSize: '1GB',
        enableCompression: true
    },
    
    development: {
        enableHotReload: true,
        watchChanges: true,
        cacheStrategy: 'memory'
    },
    
    production: {
        enableHotReload: false,
        watchChanges: false,
        cacheStrategy: 'disk',
        cdnUrl: process.env.CDN_URL
    }
};

// Performance Configuration
export const PERFORMANCE_CONFIG = {
    default: {
        enableOptimization: true,
        targetFPS: 60,
        minFPS: 30,
        maxDrawCalls: 1000,
        maxMemoryUsage: '512MB',
        lodLevels: 3,
        enableFrustumCulling: true,
        enableBatching: true
    },
    
    development: {
        enableOptimization: false,
        debugMode: true,
        showStats: true
    },
    
    production: {
        enableOptimization: true,
        aggressiveOptimization: true,
        adaptiveQuality: true
    }
};

// WebXR Configuration
export const WEBXR_CONFIG = {
    default: {
        enableVR: true,
        enableAR: true,
        requiredFeatures: ['local', 'hit-test'],
        optionalFeatures: ['dom-overlay', 'light-estimation'],
        referenceSpace: 'local-floor'
    },
    
    development: {
        enableVR: true,
        enableAR: false,
        debugMode: true
    },
    
    production: {
        enableVR: true,
        enableAR: true,
        enableGestureRecognition: true,
        enableVoiceCommands: true
    }
};

// Logging Configuration
export const LOGGING_CONFIG = {
    default: {
        level: 'info',
        enableConsole: true,
        enableFile: true,
        logPath: config.output.logs,
        maxFileSize: '10MB',
        maxFiles: 5,
        dateFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    
    development: {
        level: 'debug',
        enableConsole: true,
        enableFile: false,
        colors: true
    },
    
    production: {
        level: 'warn',
        enableConsole: false,
        enableFile: true,
        enableRemote: true,
        remoteEndpoint: process.env.LOG_ENDPOINT
    }
};

// Security Configuration
export const SECURITY_CONFIG = {
    default: {
        enableCors: true,
        allowedOrigins: ['http://localhost:3000'],
        rateLimit: {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100 // limit each IP to 100 requests per windowMs
        },
        helmet: true,
        compression: true
    },
    
    development: {
        enableCors: true,
        allowedOrigins: ['*'],
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 1000
        }
    },
    
    production: {
        enableCors: false,
        allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [],
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 100
        },
        enableCSRF: true,
        enableXSS: true
    }
};

// Cache Configuration
export const CACHE_CONFIG = {
    default: {
        enableMemoryCache: true,
        enableDiskCache: true,
        memoryLimit: '256MB',
        diskLimit: '1GB',
        ttl: 3600000, // 1 hour
        compression: true
    },
    
    development: {
        enableMemoryCache: false,
        enableDiskCache: false,
        ttl: 60000 // 1 minute
    },
    
    production: {
        enableMemoryCache: true,
        enableDiskCache: true,
        memoryLimit: '512MB',
        diskLimit: '2GB',
        ttl: 7200000 // 2 hours
    }
};

// Environment detector
export const getEnvironmentConfig = (category) => {
    const env = process.env.NODE_ENV || 'development';
    
    const configs = {
        ai: AI_CONFIG,
        server: SERVER_CONFIG,
        database: DATABASE_CONFIG,
        library: LIBRARY_CONFIG,
        performance: PERFORMANCE_CONFIG,
        webxr: WEBXR_CONFIG,
        logging: LOGGING_CONFIG,
        security: SECURITY_CONFIG,
        cache: CACHE_CONFIG
    };
    
    const configCategory = configs[category];
    if (!configCategory) {
        throw new Error(`Unknown configuration category: ${category}`);
    }
    
    return {
        ...configCategory.default,
        ...configCategory[env],
        env
    };
};

// Get all configurations for current environment
export const getAllConfigs = () => {
    const env = process.env.NODE_ENV || 'development';
    
    return {
        environment: env,
        ai: getEnvironmentConfig('ai'),
        server: getEnvironmentConfig('server'),
        database: getEnvironmentConfig('database'),
        library: getEnvironmentConfig('library'),
        performance: getEnvironmentConfig('performance'),
        webxr: getEnvironmentConfig('webxr'),
        logging: getEnvironmentConfig('logging'),
        security: getEnvironmentConfig('security'),
        cache: getEnvironmentConfig('cache')
    };
};

// Validate configuration
export const validateConfig = () => {
    const issues = [];
    
    // Check required environment variables
    if (process.env.NODE_ENV === 'production') {
        const required = ['AI_API_KEY', 'DB_PASSWORD'];
        required.forEach(envVar => {
            if (!process.env[envVar]) {
                issues.push(`Missing required environment variable: ${envVar}`);
            }
        });
    }
    
    // Check paths
    const requiredPaths = [
        config.projectRoot,
        config.library.root,
        config.output.build
    ];
    
    requiredPaths.forEach(path => {
        if (!path) {
            issues.push('Missing required path configuration');
        }
    });
    
    return {
        isValid: issues.length === 0,
        issues
    };
};

// Export default configuration
export default getAllConfigs();
