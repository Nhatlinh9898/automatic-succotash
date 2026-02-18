// Three.js Sky and Environmental Effects Library
// Night sky, stars, moon, and celestial objects

import * as THREE from 'three';

export function createNightSky(scene) {
    // Create night sky with stars and moon
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 500;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
        positions[i] = Math.random() * 500 - 250; // Random positions for stars
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Add moon
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(5, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffffe0 })
    );
    moon.position.set(30, 50, -50);
    scene.add(moon);

    // Animate stars twinkling
    function animateStars() {
        const time = Date.now() * 0.001;
        starMaterial.opacity = Math.sin(time * 2) * 0.5 + 0.5;
    }

    return { stars, moon, animateStars };
}

export function createDayNightCycle(scene) {
    let currentWeather = 'sunny';

    function changeWeather() {
        if (currentWeather === 'sunny') {
            // Change to rain
            createRainEffect(scene);
            currentWeather = 'rainy';
        } else if (currentWeather === 'rainy') {
            // Change to snow
            createSnowEffect(scene);
            currentWeather = 'snowy';
        } else {
            // Return to sunny
            removeParticles(scene);
            currentWeather = 'sunny';
        }
    }

    // Call weather change function periodically
    setInterval(changeWeather, 5000);
    
    return changeWeather;
}

export function createDynamicSkybox(scene, textures) {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load(textures);
    scene.background = texture;
}

export function createSun(scene) {
    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(10, 32, 32),
        new THREE.MeshBasicMaterial({ 
            color: 0xffff00,
            emissive: 0xffff00,
            emissiveIntensity: 1
        })
    );
    sun.position.set(100, 100, -200);
    scene.add(sun);

    // Animate sun rotation
    function animateSun() {
        sun.rotation.y += 0.001;
    }

    return { sun, animateSun };
}

export function createClouds(scene) {
    const cloudGeometry = new THREE.SphereGeometry(20, 32, 32);
    const cloudMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
    });

    const clouds = [];
    for (let i = 0; i < 5; i++) {
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloud.position.set(
            Math.random() * 200 - 100,
            Math.random() * 50 + 20,
            Math.random() * 200 - 100
        );
        cloud.scale.set(1, 0.5, 1);
        scene.add(cloud);
        clouds.push(cloud);
    }

    // Animate clouds
    function animateClouds() {
        clouds.forEach((cloud, index) => {
            cloud.position.x += Math.sin(Date.now() * 0.0001 + index) * 0.01;
        });
    }

    return { clouds, animateClouds };
}
