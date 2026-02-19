/**
 * Path Configuration for Multi-Environment Setup
 * Allows flexible configuration for different machines and environments
 */

import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment detection
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
const IS_DEVELOPMENT = NODE_ENV === 'development';

// Base paths configuration
const BASE_CONFIG = {
    // Project root - automatically detected
    projectRoot: path.resolve(__dirname, '..'),
    
    // Framework paths
    framework: {
        core: 'framework/core',
        ai: 'framework/ai',
        optimization: 'framework/optimization',
        webxr: 'framework/webxr'
    },
    
    // Source paths
    src: {
        components: 'src/components',
        services: 'src/services',
        server: 'src/server',
        styles: 'src/styles',
        utils: 'src/utils'
    },
    
    // Library paths
    library: {
        root: 'library',
        assets: 'library/assets',
        models: 'library/models',
        textures: 'library/textures',
        materials: 'library/materials',
        animations: 'library/animations'
    },
    
    // Output paths
    output: {
        build: 'dist',
        temp: 'temp',
        cache: 'cache',
        logs: 'logs'
    },
    
    // Server paths
    server: {
        public: 'public',
        static: 'public/static',
        uploads: 'public/uploads'
    }
};

// Environment-specific overrides
const ENVIRONMENT_CONFIG = {
    development: {
        // Development-specific paths
        output: {
            build: 'dev-build',
            temp: 'dev-temp',
            cache: '.cache',
            logs: 'logs'
        },
        server: {
            port: 3000,
            host: 'localhost'
        }
    },
    
    production: {
        // Production-specific paths
        output: {
            build: 'build',
            temp: 'temp',
            cache: 'cache',
            logs: 'logs'
        },
        server: {
            port: 8080,
            host: '0.0.0.0'
        }
    },
    
    testing: {
        // Testing-specific paths
        output: {
            build: 'test-build',
            temp: 'test-temp',
            cache: 'test-cache',
            logs: 'test-logs'
        },
        server: {
            port: 3001,
            host: 'localhost'
        }
    }
};

// Machine-specific configurations (can be overridden by environment variables)
const MACHINE_CONFIG = {
    // Default configuration
    default: {
        name: 'Default Machine',
        description: 'Standard development setup',
        customPaths: {}
    },
    
    // Windows configurations
    windows: {
        name: 'Windows Development',
        description: 'Windows-specific paths',
        customPaths: {
            temp: path.join(process.env.TEMP || 'C:\\temp'),
            userHome: process.env.USERPROFILE || 'C:\\Users\\Default',
            appData: process.env.APPDATA || 'C:\\ProgramData'
        }
    },
    
    // macOS configurations
    macos: {
        name: 'macOS Development',
        description: 'macOS-specific paths',
        customPaths: {
            temp: '/tmp',
            userHome: process.env.HOME || '/Users/default',
            appData: process.env.HOME + '/Library/Application Support'
        }
    },
    
    // Linux configurations
    linux: {
        name: 'Linux Development',
        description: 'Linux-specific paths',
        customPaths: {
            temp: '/tmp',
            userHome: process.env.HOME || '/home/default',
            appData: process.env.HOME + '/.local/share'
        }
    }
};

// Detect current platform
const PLATFORM = process.platform;
let machineConfig = MACHINE_CONFIG.default;

if (PLATFORM === 'win32') {
    machineConfig = { ...MACHINE_CONFIG.default, ...MACHINE_CONFIG.windows };
} else if (PLATFORM === 'darwin') {
    machineConfig = { ...MACHINE_CONFIG.default, ...MACHINE_CONFIG.macos };
} else if (PLATFORM === 'linux') {
    machineConfig = { ...MACHINE_CONFIG.default, ...MACHINE_CONFIG.linux };
}

// Override with environment variables if provided
const ENV_OVERRIDE = {
    projectRoot: process.env.PROJECT_ROOT,
    libraryRoot: process.env.LIBRARY_ROOT,
    outputPath: process.env.OUTPUT_PATH,
    serverPort: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : null,
    serverHost: process.env.SERVER_HOST
};

// Path resolver utility
class PathResolver {
    constructor(config) {
        this.config = config;
        this.cache = new Map();
    }
    
    /**
     * Resolve path with automatic fallback
     */
    resolve(pathKey, ...segments) {
        const cacheKey = `${pathKey}:${segments.join(':')}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        
        let basePath = this.getBasePath(pathKey);
        
        if (segments.length > 0) {
            basePath = path.join(basePath, ...segments);
        }
        
        // Ensure path exists or create it
        this.ensurePathExists(basePath);
        
        this.cache.set(cacheKey, basePath);
        return basePath;
    }
    
    /**
     * Get base path for key
     */
    getBasePath(key) {
        const keys = key.split('.');
        let current = this.config;
        
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                throw new Error(`Path key not found: ${key}`);
            }
        }
        
        if (typeof current === 'string') {
            return path.resolve(this.config.projectRoot, current);
        }
        
        throw new Error(`Invalid path key: ${key}`);
    }
    
    /**
     * Ensure path exists
     */
    ensurePathExists(targetPath) {
        try {
            const fs = require('fs');
            if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath, { recursive: true });
                console.log(`Created directory: ${targetPath}`);
            }
        } catch (error) {
            console.warn(`Failed to create path ${targetPath}:`, error.message);
        }
    }
    
    /**
     * Get all paths as object
     */
    getAllPaths() {
        const paths = {};
        this.buildPathsObject(this.config, '', paths);
        return paths;
    }
    
    /**
     * Recursively build paths object
     */
    buildPathsObject(obj, prefix, result) {
        for (const [key, value] of Object.entries(obj)) {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            
            if (typeof value === 'string') {
                result[fullKey] = this.resolve(fullKey);
            } else if (typeof value === 'object' && value !== null) {
                this.buildPathsObject(value, fullKey, result);
            }
        }
    }
    
    /**
     * Clear cache
     */
    clearCache() {
        this.cache.clear();
    }
}

// Create final configuration
const createConfig = () => {
    // Start with base config
    let finalConfig = JSON.parse(JSON.stringify(BASE_CONFIG));
    
    // Apply environment-specific config
    const envConfig = ENVIRONMENT_CONFIG[NODE_ENV] || ENVIRONMENT_CONFIG.development;
    finalConfig = mergeDeep(finalConfig, envConfig);
    
    // Apply machine-specific config
    finalConfig = mergeDeep(finalConfig, machineConfig);
    
    // Apply environment variable overrides
    if (ENV_OVERRIDE.projectRoot) {
        finalConfig.projectRoot = ENV_OVERRIDE.projectRoot;
    }
    if (ENV_OVERRIDE.libraryRoot) {
        finalConfig.library.root = ENV_OVERRIDE.libraryRoot;
    }
    if (ENV_OVERRIDE.outputPath) {
        finalConfig.output.build = ENV_OVERRIDE.outputPath;
    }
    if (ENV_OVERRIDE.serverPort) {
        finalConfig.server.port = ENV_OVERRIDE.serverPort;
    }
    if (ENV_OVERRIDE.serverHost) {
        finalConfig.server.host = ENV_OVERRIDE.serverHost;
    }
    
    return finalConfig;
};

// Deep merge utility
function mergeDeep(target, source) {
    const result = { ...target };
    
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            result[key] = mergeDeep(result[key] || {}, source[key]);
        } else {
            result[key] = source[key];
        }
    }
    
    return result;
}

// Create and export configuration
const config = createConfig();
const pathResolver = new PathResolver(config);

// Export configuration and utilities
export {
    config,
    pathResolver,
    BASE_CONFIG,
    ENVIRONMENT_CONFIG,
    MACHINE_CONFIG,
    NODE_ENV,
    IS_PRODUCTION,
    IS_DEVELOPMENT,
    PLATFORM
};

// Default export
export default config;

// Convenience exports
export const paths = pathResolver.getAllPaths();
export const resolvePath = (key, ...segments) => pathResolver.resolve(key, ...segments);
export const ensurePath = (path) => pathResolver.ensurePathExists(path);
