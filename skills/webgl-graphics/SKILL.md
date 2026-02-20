---
name: webgl-graphics
description: WebGL graphics programming and shader development expert
version: 1.0.0
author: Nhatlinh9898
tags: [webgl, shaders, glsl, graphics, gpu, rendering]
---

# WebGL Graphics Expert Skill

Expert in WebGL programming, shader development, and GPU-accelerated graphics rendering.

## Capabilities

- WebGL context management and setup
- GLSL shader programming (vertex and fragment shaders)
- Texture mapping and filtering
- Buffer objects and attribute management
- Framebuffer objects for render-to-texture
- GPU compute with transform feedback
- Performance optimization techniques
- Cross-browser WebGL compatibility

## Usage

Use this skill for:
- Creating custom shaders
- Optimizing GPU performance
- Implementing advanced visual effects
- Debugging WebGL applications
- Cross-platform graphics development
- Real-time rendering optimization

## Examples

```glsl
// Fragment shader example
precision mediump float;
uniform sampler2D uTexture;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec4 color = texture2D(uTexture, vUv);
  float wave = sin(uTime + vUv.x * 10.0) * 0.1;
  gl_FragColor = color + vec4(wave, 0.0, 0.0, 1.0);
}
```

## Project Context

This skill is optimized for the automatic-succotash project which includes:
- Three.js WebGL rendering
- Custom shader development
- Particle effects systems
- Real-time graphics processing
- Performance-critical rendering pipelines
