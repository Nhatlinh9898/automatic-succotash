---
name: performance-optimization
description: Web performance optimization and rendering expert
version: 1.0.0
author: Nhatlinh9898
tags: [performance, optimization, rendering, fps, memory, gpu]
---

# Performance Optimization Expert Skill

Expert in web performance optimization, rendering efficiency, and resource management for complex applications.

## Capabilities

- FPS optimization and frame rate management
- Memory management and garbage collection
- GPU optimization and rendering pipelines
- Asset loading and caching strategies
- Network optimization and lazy loading
- Profiling and debugging tools
- Mobile performance optimization
- Web Workers and parallel processing

## Usage

Use this skill for:
- Optimizing rendering performance
- Reducing memory usage
- Improving load times
- Debugging performance issues
- Setting up profiling tools
- Implementing caching strategies

## Examples

```javascript
// Performance monitoring
class PerformanceMonitor {
  constructor() {
    this.fps = 0;
    this.frameCount = 0;
    this.lastTime = performance.now();
  }
  
  update() {
    this.frameCount++;
    const currentTime = performance.now();
    if (currentTime - this.lastTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastTime = currentTime;
    }
  }
}
```

## Project Context

This skill is optimized for the automatic-succotash project which includes:
- Three.js rendering optimization
- Complex 3D scene management
- Real-time performance monitoring
- Mobile device compatibility
- Resource-intensive applications
