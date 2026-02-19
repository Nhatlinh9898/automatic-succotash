# Multi-Machine Setup Guide

Hướng dẫn cài đặt hệ thống trên nhiều máy khác nhau với cấu hình linh hoạt.

## 📋 Mục Lục

- [Tổng Quan](#tổng-quan)
- [Cấu Hình Môi Trường](#cấu-hình-môi-trường)
- [Cài Đặt Tự Động](#cài-đặt-tự-động)
- [Cấu Hình Thủ Công](#cấu-hình-thủ-công)
- [Khắc Phục Sự Cố](#khắc-phục-sự-cố)

## 🎯 Tổng Quan

Hệ thống được thiết kế để hoạt động trên nhiều môi trường và máy khác nhau:

- **Development**: Môi trường phát triển với debug và hot reload
- **Production**: Môi trường sản xuất với tối ưu hóa
- **Testing**: Môi trường test với cấu hình riêng

## 🔧 Cấu Hình Môi Trường

### 1. Environment Variables

Tạo file `.env` trong project root:

```bash
# Environment
NODE_ENV=development

# Paths
PROJECT_ROOT=/path/to/project
LIBRARY_ROOT=/path/to/library

# AI Configuration
AI_ENDPOINT=http://localhost:8080/api/ai
AI_API_KEY=your_api_key_here

# Server Configuration
SERVER_PORT=3000
SERVER_HOST=localhost

# Database (nếu cần)
DB_TYPE=sqlite
DB_HOST=localhost
DB_PORT=5432
DB_NAME=web3d_framework
DB_USER=username
DB_PASSWORD=password
```

### 2. Machine-Specific Paths

#### Windows
```bash
# Windows-specific paths
TEMP=C:\temp
USERPROFILE=C:\Users\YourUsername
APPDATA=C:\Users\YourUsername\AppData\Roaming
```

#### macOS
```bash
# macOS-specific paths
TMPDIR=/tmp
HOME=/Users/YourUsername
```

#### Linux
```bash
# Linux-specific paths
TMPDIR=/tmp
HOME=/home/yourusername
```

## 🚀 Cài Đặt Tự Động

### Sử Dụng Setup Script

Chạy script setup tự động:

```bash
# Node.js 14+ required
node scripts/setup-multi-machine.js
```

Script sẽ hỏi các câu hỏi:
- Environment (development/production/testing)
- Machine type (windows/macos/linux/auto)
- Project root path
- Library path
- AI endpoint
- Server port

### Tự Động Detection

Script sẽ tự động:
- Phát hiện hệ điều hành
- Tìm project root
- Tạo startup scripts
- Cập nhật package.json

## 📁 Cấu Trúc File

```
project-root/
├── config/
│   ├── paths.config.js          # Cấu hình đường dẫn
│   ├── environment.config.js     # Cấu hình môi trường
│   └── machine-config.json     # Cấu hình máy cụ thể
├── scripts/
│   ├── setup-multi-machine.js  # Script setup
│   ├── start-windows.bat       # Windows startup
│   ├── start-powershell.ps1   # PowerShell startup
│   └── start-unix.sh         # Unix startup
├── .env                      # Environment variables
└── package.json              # Project scripts
```

## 🎮 Sử Dụng

### Windows

```cmd
# Sử dụng batch file
scripts\start-windows.bat

# Hoặc PowerShell
powershell -ExecutionPolicy Bypass -File scripts\start-powershell.ps1

# Hoặc npm
npm run start:dev
```

### macOS/Linux

```bash
# Sử dụng shell script
chmod +x scripts/start-unix.sh
./scripts/start-unix.sh

# Hoặc npm
npm run start:dev
```

### Production

```bash
# Set production environment
export NODE_ENV=production

# Start production server
npm run start:prod
```

## ⚙️ Cấu Hình Thủ Công

### 1. Paths Configuration

Chỉnh sửa `config/paths.config.js`:

```javascript
const BASE_CONFIG = {
    projectRoot: '/your/custom/path',
    framework: {
        core: 'framework/core',
        ai: 'framework/ai'
    },
    library: {
        root: '/custom/library/path',
        assets: 'library/assets'
    }
};
```

### 2. Environment Configuration

Chỉnh sửa `config/environment.config.js`:

```javascript
export const AI_CONFIG = {
    production: {
        endpoint: 'https://your-ai-endpoint.com/api',
        timeout: 60000,
        apiKey: process.env.AI_API_KEY
    }
};
```

### 3. Machine-Specific Config

Tạo `config/machine-config.json`:

```json
{
    "name": "Development Laptop",
    "environment": "development",
    "platform": "darwin",
    "paths": {
        "projectRoot": "/Users/username/projects/web3d-framework",
        "libraryRoot": "/Users/username/projects/web3d-framework/library"
    },
    "services": {
        "ai": {
            "endpoint": "http://localhost:8080/api/ai"
        },
        "server": {
            "port": 3000,
            "host": "localhost"
        }
    }
}
```

## 🔍 Debug và Troubleshooting

### 1. Kiểm Tra Cấu Hình

```javascript
import { validateConfig } from './config/environment.config.js';

const validation = validateConfig();
if (!validation.isValid) {
    console.error('Configuration issues:', validation.issues);
}
```

### 2. Path Resolution

```javascript
import { resolvePath } from './config/paths.config.js';

// Resolve path với fallback
const frameworkPath = resolvePath('framework.ai');
const libraryPath = resolvePath('library.assets');
```

### 3. Environment Detection

```javascript
import { NODE_ENV, PLATFORM } from './config/paths.config.js';

console.log('Environment:', NODE_ENV);
console.log('Platform:', PLATFORM);
```

## 🐛 Khắc Phục Sự Cố

### Common Issues

#### 1. Path Not Found
```
Error: ENOENT: no such file or directory
```

**Solution:**
- Kiểm tra `PROJECT_ROOT` trong `.env`
- Đảm bảo paths tồn tại
- Chạy setup script lại

#### 2. Permission Denied
```
Error: EACCES: permission denied
```

**Solution:**
- Chạy với appropriate permissions
- Kiểm tra file ownership
- Sử dụng `sudo` (Unix) hoặc Administrator (Windows)

#### 3. Port Already in Use
```
Error: listen EADDRINUSE :::3000
```

**Solution:**
- Thay đổi `SERVER_PORT` trong `.env`
- Kill process đang sử dụng port
- Sử dụng port khác

#### 4. AI Service Not Responding
```
Error: connect ECONNREFUSED 127.0.0.1:8080
```

**Solution:**
- Kiểm tra `AI_ENDPOINT` trong `.env`
- Start AI service
- Verify firewall settings

### Debug Mode

Enable debug mode:

```bash
# Development với debug
NODE_ENV=development DEBUG=true npm start

# Verbose logging
DEBUG=* npm start
```

### Reset Configuration

Reset về default:

```bash
# Remove config files
rm config/machine-config.json
rm .env

# Run setup lại
node scripts/setup-multi-machine.js
```

## 📚 Best Practices

### 1. Environment Separation
- Sử dụng different `.env` files cho mỗi environment
- Không commit `.env` vào version control
- Sử dụng environment variables cho sensitive data

### 2. Path Management
- Sử dụng relative paths khi có thể
- Document custom paths
- Test paths trên different machines

### 3. Security
- Không hardcode API keys
- Sử dụng environment variables
- Enable HTTPS trong production

### 4. Performance
- Tối ưu paths cho local storage
- Sử dụng SSD cho cache
- Configure appropriate timeouts

## 🔄 Migration

### From Old Setup

1. Backup current configuration
2. Run new setup script
3. Migrate custom settings
4. Test functionality

### Between Machines

1. Export configuration:
```bash
node scripts/export-config.js > machine-config.json
```

2. Import on new machine:
```bash
node scripts/import-config.js machine-config.json
```

## 📞 Support

Nếu gặp issues:

1. Kiểm tra [troubleshooting section](#khắc-phục-sự-cố)
2. Xem logs trong `logs/` directory
3. Run validation script
4. Contact development team

## 📝 Notes

- Script setup yêu cầu Node.js 14+
- PowerShell scripts yêu cầu Execution Policy
- Unix scripts yêu cầu execute permissions
- Windows paths sử dụng backslashes (`\`)
- Unix paths sử dụng forward slashes (`/`)
