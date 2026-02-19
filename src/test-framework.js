// Simple test for Web3D Framework
import { Web3DFramework, THREE } from '../../framework/Web3DFramework.js';

console.log('Testing Web3D Framework...');
console.log('Web3DFramework available:', !!Web3DFramework);
console.log('THREE available:', !!THREE);

try {
    // Test basic framework creation
    const framework = new Web3DFramework({
        enableAI: false,
        enableWebXR: false,
        enableOptimization: false
    });
    
    console.log('Framework created successfully:', !!framework);
    console.log('Framework engine:', !!framework.engine);
    
    // Test basic THREE.js through framework
    const testGeometry = new THREE.BoxGeometry(1, 1, 1);
    const testMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const testMesh = new THREE.Mesh(testGeometry, testMaterial);
    
    console.log('THREE.js objects created through framework:', {
        geometry: !!testGeometry,
        material: !!testMaterial,
        mesh: !!testMesh
    });
    
    console.log('✅ Web3D Framework test passed!');
    
} catch (error) {
    console.error('❌ Web3D Framework test failed:', error);
}

export { Web3DFramework, THREE };
