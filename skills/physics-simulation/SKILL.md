---
name: physics-simulation
description: Physics simulation and dynamics expert for 3D applications
version: 1.0.0
author: Nhatlinh9898
tags: [physics, dynamics, cannon, ammo, simulation, 3d]
---

# Physics Simulation Expert Skill

Expert in physics simulation, rigid body dynamics, and realistic motion for 3D applications.

## Capabilities

- Cannon.js physics engine integration
- Rigid body dynamics and collision detection
- Constraint systems and joints
- Particle physics and forces
- Soft body simulation
- Vehicle physics and dynamics
- Optimized physics performance
- Real-time physics debugging

## Usage

Use this skill for:
- Implementing realistic physics
- Creating collision systems
- Building interactive simulations
- Optimizing physics performance
- Debugging physics issues
- Setting up constraint systems

## Examples

```javascript
// Cannon.js physics setup
import * as CANNON from 'cannon-es';

const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
world.broadphase = new CANNON.NaiveBroadphase();

// Create physics body
const body = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1))
});
world.addBody(body);
```

## Project Context

This skill is optimized for the automatic-succotash project which includes:
- Cannon.js physics integration
- 3D character physics
- Interactive simulations
- Real-time dynamics
- Performance-optimized physics
