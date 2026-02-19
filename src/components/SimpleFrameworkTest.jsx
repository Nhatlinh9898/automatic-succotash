import React, { useEffect, useRef, useState } from 'react';
import './SimpleFrameworkTest.css';

const SimpleFrameworkTest = () => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const initTest = async () => {
      try {
        setStatus('Loading Three.js...');
        
        // Dynamic import to test Three.js
        const THREE = await import('three');
        setStatus('✅ Three.js loaded');
        
        if (!containerRef.current) return;
        
        setStatus('Creating scene...');
        
        // Create basic Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setClearColor(0x000033);
        containerRef.current.appendChild(renderer.domElement);
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);
        
        // Add objects
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        // Add ground
        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -2;
        scene.add(ground);
        
        camera.position.set(5, 5, 5);
        camera.lookAt(0, 0, 0);
        
        setStatus('✅ Scene created successfully');
        
        // Animation loop
        let animationId;
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
        animate();
        
        // Handle resize
        const handleResize = () => {
          if (!containerRef.current) return;
          camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);
        
        setStatus('🎉 Three.js test successful! Animation running.');
        
        return () => {
          window.removeEventListener('resize', handleResize);
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
          if (containerRef.current && renderer.domElement) {
            containerRef.current.removeChild(renderer.domElement);
          }
          renderer.dispose();
        };
        
      } catch (err) {
        console.error('Three.js test failed:', err);
        setError(err.message);
        setStatus('❌ Test failed');
      }
    };

    const cleanup = initTest();
    return cleanup;
  }, []);

  return (
    <div className="simple-framework-test">
      <div className="test-header">
        <h2>🧪 Simple Three.js Test</h2>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
      <div ref={containerRef} className="test-container" />
    </div>
  );
};

export default SimpleFrameworkTest;
