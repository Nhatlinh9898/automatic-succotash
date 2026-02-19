#!/usr/bin/env node

/**
 * Multi-Machine Setup Script
 * Automatically configures the framework for different machines and environments
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import configuration
const configPath = path.join(__dirname, '../config/paths.config.js');
const envConfigPath = path.join(__dirname, '../config/environment.config.js');

// Command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Setup questions
const setupQuestions = {
    environment: {
        question: 'Choose environment (development/production/testing): ',
        default: 'development',
        validate: (input) => ['development', 'production', 'testing'].includes(input.toLowerCase())
    },
    
    machineType: {
        question: 'Choose machine type (windows/macos/linux/auto): ',
        default: 'auto',
        validate: (input) => ['windows', 'macos', 'linux', 'auto'].includes(input.toLowerCase())
    },
    
    projectRoot: {
        question: 'Project root path (leave empty for auto-detection): ',
        default: '',
        validate: (input) => input === '' || fs.existsSync(input)
    },
    
    libraryPath: {
        question: 'Library assets path (leave empty for default): ',
        default: '',
        validate: (input) => input === '' || fs.existsSync(path.dirname(input))
    },
    
    aiEndpoint: {
        question: 'AI service endpoint (leave empty for default): ',
        default: '',
        validate: (input) => input === '' || input.startsWith('http')
    },
    
    serverPort: {
        question: 'Server port (leave empty for default): ',
        default: '',
        validate: (input) => input === '' || !isNaN(parseInt(input))
    }
};

// Prompt utility
const prompt = (question) => {
    return new Promise((resolve) => {
        rl.question(question.text, (answer) => {
            const value = answer || question.default;
            
            if (question.validate && !question.validate(value)) {
                console.log(`❌ Invalid input: ${value}`);
                return prompt(question).then(resolve);
            }
            
            resolve(value);
        });
    });
};

// Create .env file
const createEnvFile = (answers) => {
    const envContent = `# Auto-generated environment configuration
# Generated on: ${new Date().toISOString()}

# Environment
NODE_ENV=${answers.environment}

# Paths
PROJECT_ROOT=${answers.projectRoot || ''}
LIBRARY_ROOT=${answers.libraryPath || ''}

# AI Configuration
AI_ENDPOINT=${answers.aiEndpoint || ''}
AI_API_KEY=${process.env.AI_API_KEY || ''}

# Server Configuration
SERVER_PORT=${answers.serverPort || ''}
SERVER_HOST=${answers.serverHost || ''}

# Database (if needed)
DB_TYPE=${process.env.DB_TYPE || 'sqlite'}
DB_HOST=${process.env.DB_HOST || 'localhost'}
DB_PORT=${process.env.DB_PORT || '5432'}
DB_NAME=${process.env.DB_NAME || 'web3d_framework'}
DB_USER=${process.env.DB_USER || ''}
DB_PASSWORD=${process.env.DB_PASSWORD || ''}

# Production settings (only in production)
HTTPS=${process.env.HTTPS || 'false'}
CDN_URL=${process.env.CDN_URL || ''}
ALLOWED_ORIGINS=${process.env.ALLOWED_ORIGINS || ''}

# Logging
LOG_LEVEL=${process.env.LOG_LEVEL || 'info'}
LOG_ENDPOINT=${process.env.LOG_ENDPOINT || ''}
`;

    const envPath = path.join(__dirname, '../.env');
    fs.writeFileSync(envPath, envContent);
    console.log(`✅ Environment file created: ${envPath}`);
};

// Create machine-specific config
const createMachineConfig = (answers) => {
    const machineConfig = {
        name: answers.machineName || 'Custom Machine',
        environment: answers.environment,
        platform: process.platform,
        paths: {
            projectRoot: answers.projectRoot,
            libraryRoot: answers.libraryPath
        },
        services: {
            ai: {
                endpoint: answers.aiEndpoint
            },
            server: {
                port: answers.serverPort,
                host: answers.serverHost || 'localhost'
            }
        },
        createdAt: new Date().toISOString()
    };

    const configPath = path.join(__dirname, '../config/machine-config.json');
    fs.writeFileSync(configPath, JSON.stringify(machineConfig, null, 2));
    console.log(`✅ Machine configuration created: ${configPath}`);
};

// Create startup scripts
const createStartupScripts = (answers) => {
    const scriptsDir = path.join(__dirname, '../scripts');
    
    // Windows batch file
    const windowsScript = `@echo off
echo Starting Web3D Framework on Windows...
echo Environment: ${answers.environment}
echo Project Root: ${answers.projectRoot || 'Auto-detected'}

REM Set environment variables
set NODE_ENV=${answers.environment}
${answers.projectRoot ? `set PROJECT_ROOT=${answers.projectRoot}` : ''}
${answers.libraryPath ? `set LIBRARY_ROOT=${answers.libraryPath}` : ''}
${answers.aiEndpoint ? `set AI_ENDPOINT=${answers.aiEndpoint}` : ''}
${answers.serverPort ? `set SERVER_PORT=${answers.serverPort}` : ''}

REM Start the application
cd /d "${answers.projectRoot || path.join(__dirname, '..')}"
npm start

pause
`;

    // PowerShell script
    const powershellScript = `# Web3D Framework Startup Script for PowerShell
Write-Host "Starting Web3D Framework on PowerShell..."
Write-Host "Environment: ${answers.environment}"
Write-Host "Project Root: ${answers.projectRoot || 'Auto-detected'}"

# Set environment variables
$env:NODE_ENV = "${answers.environment}"
${answers.projectRoot ? `$env:PROJECT_ROOT = "${answers.projectRoot}"` : ''}
${answers.libraryPath ? `$env:LIBRARY_ROOT = "${answers.libraryPath}"` : ''}
${answers.aiEndpoint ? `$env:AI_ENDPOINT = "${answers.aiEndpoint}"` : ''}
${answers.serverPort ? `$env:SERVER_PORT = "${answers.serverPort}"` : ''}

# Start the application
Set-Location "${answers.projectRoot || path.join(__dirname, '..')}"
npm start

Read-Host "Press Enter to exit..."
`;

    // Linux/macOS shell script
    const shellScript = `#!/bin/bash
echo "Starting Web3D Framework on Unix..."
echo "Environment: ${answers.environment}"
echo "Project Root: ${answers.projectRoot || 'Auto-detected'}"

# Set environment variables
export NODE_ENV="${answers.environment}"
${answers.projectRoot ? `export PROJECT_ROOT="${answers.projectRoot}"` : ''}
${answers.libraryPath ? `export LIBRARY_ROOT="${answers.libraryPath}"` : ''}
${answers.aiEndpoint ? `export AI_ENDPOINT="${answers.aiEndpoint}"` : ''}
${answers.serverPort ? `export SERVER_PORT="${answers.serverPort}"` : ''}

# Start the application
cd "${answers.projectRoot || path.join(__dirname, '..')}"
npm start

echo "Press Enter to exit..."
read
`;

    // Write scripts
    fs.writeFileSync(path.join(scriptsDir, 'start-windows.bat'), windowsScript);
    fs.writeFileSync(path.join(scriptsDir, 'start-powershell.ps1'), powershellScript);
    fs.writeFileSync(path.join(scriptsDir, 'start-unix.sh'), shellScript);
    
    // Make Unix script executable
    try {
        fs.chmodSync(path.join(scriptsDir, 'start-unix.sh'), '755');
    } catch (error) {
        console.warn('Could not make Unix script executable:', error.message);
    }
    
    console.log('✅ Startup scripts created:');
    console.log(`   Windows: ${path.join(scriptsDir, 'start-windows.bat')}`);
    console.log(`   PowerShell: ${path.join(scriptsDir, 'start-powershell.ps1')}`);
    console.log(`   Unix: ${path.join(scriptsDir, 'start-unix.sh')}`);
};

// Create package.json scripts
const updatePackageScripts = (answers) => {
    const packagePath = path.join(__dirname, '../package.json');
    
    try {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        packageJson.scripts = {
            ...packageJson.scripts,
            'setup:multi': 'node scripts/setup-multi-machine.js',
            'start:dev': 'cross-env NODE_ENV=development npm start',
            'start:prod': 'cross-env NODE_ENV=production npm start',
            'start:test': 'cross-env NODE_ENV=test npm start',
            'build:dev': 'cross-env NODE_ENV=development npm run build',
            'build:prod': 'cross-env NODE_ENV=production npm run build'
        };
        
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        console.log('✅ Package.json scripts updated');
    } catch (error) {
        console.warn('Could not update package.json:', error.message);
    }
};

// Detect machine type
const detectMachineType = () => {
    const platform = process.platform;
    
    if (platform === 'win32') return 'windows';
    if (platform === 'darwin') return 'macos';
    if (platform === 'linux') return 'linux';
    return 'unknown';
};

// Auto-detect project root
const detectProjectRoot = () => {
    let currentDir = __dirname;
    
    while (currentDir !== path.dirname(currentDir)) {
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            return currentDir;
        }
        currentDir = path.dirname(currentDir);
    }
    
    return path.join(__dirname, '..');
};

// Main setup function
const runSetup = async () => {
    console.log('🚀 Web3D Framework Multi-Machine Setup');
    console.log('=====================================\n');
    
    // Get answers
    const answers = {};
    
    // Environment
    answers.environment = await prompt({
        text: setupQuestions.environment.question,
        default: setupQuestions.environment.default,
        validate: setupQuestions.environment.validate
    });
    
    // Machine type
    const machineTypeInput = await prompt({
        text: setupQuestions.machineType.question,
        default: setupQuestions.machineType.default,
        validate: setupQuestions.machineType.validate
    });
    
    if (machineTypeInput === 'auto') {
        answers.machineType = detectMachineType();
        console.log(`🔍 Detected machine type: ${answers.machineType}`);
    } else {
        answers.machineType = machineTypeInput;
    }
    
    // Project root
    const defaultProjectRoot = detectProjectRoot();
    answers.projectRoot = await prompt({
        text: `${setupQuestions.projectRoot.question} [${defaultProjectRoot}]: `,
        default: defaultProjectRoot,
        validate: setupQuestions.projectRoot.validate
    });
    
    // Library path
    const defaultLibraryPath = path.join(answers.projectRoot, 'library');
    answers.libraryPath = await prompt({
        text: `${setupQuestions.libraryPath.question} [${defaultLibraryPath}]: `,
        default: defaultLibraryPath,
        validate: setupQuestions.libraryPath.validate
    });
    
    // AI endpoint
    answers.aiEndpoint = await prompt({
        text: setupQuestions.aiEndpoint.question,
        default: setupQuestions.aiEndpoint.default,
        validate: setupQuestions.aiEndpoint.validate
    });
    
    // Server port
    const defaultPort = answers.environment === 'production' ? '8080' : '3000';
    answers.serverPort = await prompt({
        text: `${setupQuestions.serverPort.question} [${defaultPort}]: `,
        default: defaultPort,
        validate: setupQuestions.serverPort.validate
    });
    
    // Machine name
    answers.machineName = await prompt({
        text: 'Machine name (for identification): ',
        default: `${answers.machineType}-${answers.environment}`,
        validate: (input) => input.length > 0
    });
    
    console.log('\n📝 Configuration Summary:');
    console.log(`   Environment: ${answers.environment}`);
    console.log(`   Machine Type: ${answers.machineType}`);
    console.log(`   Project Root: ${answers.projectRoot}`);
    console.log(`   Library Path: ${answers.libraryPath}`);
    console.log(`   AI Endpoint: ${answers.aiEndpoint || 'Default'}`);
    console.log(`   Server Port: ${answers.serverPort}`);
    console.log(`   Machine Name: ${answers.machineName}`);
    
    // Confirm setup
    const confirm = await prompt({
        text: '\nProceed with setup? (y/n): ',
        default: 'y',
        validate: (input) => ['y', 'n', 'yes', 'no'].includes(input.toLowerCase())
    });
    
    if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
        console.log('❌ Setup cancelled');
        rl.close();
        return;
    }
    
    console.log('\n🔧 Creating configuration files...');
    
    // Create configuration files
    createEnvFile(answers);
    createMachineConfig(answers);
    createStartupScripts(answers);
    updatePackageScripts(answers);
    
    console.log('\n✅ Setup completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Review the generated .env file');
    console.log('2. Run the appropriate startup script:');
    console.log('   - Windows: scripts/start-windows.bat');
    console.log('   - PowerShell: scripts/start-powershell.ps1');
    console.log('   - Unix: scripts/start-unix.sh');
    console.log('3. Or use npm scripts:');
    console.log(`   - Development: npm run start:dev`);
    console.log(`   - Production: npm run start:prod`);
    
    rl.close();
};

// Handle errors
process.on('uncaughtException', (error) => {
    console.error('❌ Setup error:', error.message);
    rl.close();
    process.exit(1);
});

// Run setup
runSetup().catch(error => {
    console.error('❌ Setup failed:', error.message);
    rl.close();
    process.exit(1);
});
