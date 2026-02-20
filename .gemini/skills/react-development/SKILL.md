---
name: react-development
description: React.js development expert for modern web applications
version: 1.0.0
author: Nhatlinh9898
tags: [react, javascript, jsx, hooks, state, components]
---

# React Development Expert Skill

Expert in React.js development, component architecture, and modern React patterns for web applications.

## Capabilities

- React component design and architecture
- Hooks and state management
- Context API and Redux integration
- React Router navigation
- Performance optimization
- Testing with Jest and React Testing Library
- Build optimization with Vite
- TypeScript integration

## Usage

Use this skill for:
- Creating reusable React components
- Implementing state management
- Setting up routing
- Optimizing performance
- Writing tests
- Integrating with APIs

## Examples

```javascript
// Custom hook example
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading };
}
```

## Project Context

This skill is optimized for the automatic-succotash project which includes:
- React 18 with modern hooks
- Vite build system
- TypeScript support
- Tailwind CSS styling
- Component-based architecture
