// Three.js Weather System Library
// Dynamic weather effects and climate simulation

import * as THREE from 'three';

export function createWeatherSystem(scene) {
    let currentWeather = 'sunny';
    let particles = null;

    function changeWeather() {
        if (currentWeather === 'sunny') {
            // Change to rain
            createRainEffect();
            currentWeather = 'rainy';
        } else if (currentWeather === 'rainy') {
            // Change to snow
            createSnowEffect();
            currentWeather = 'snowy';
        } else {
            // Return to sunny
            removeParticles();
            currentWeather = 'sunny';
        }
    }

    function createRainEffect() {
        removeParticles(); // Clear existing particles
        
        const rainGeometry = new THREE.BufferGeometry();
        const rainCount = 1000;
        const positions = new Float32Array(rainCount * 3);

        for (let i = 0; i < rainCount * 3; i += 3) {
            positions[i] = Math.random() * 100 - 50;     // x
            positions[i + 1] = Math.random() * 50;       // y
            positions[i + 2] = Math.random() * 100 - 50;  // z
        }

        rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const rainMaterial = new THREE.PointsMaterial({ 
            color: 0x87ceeb,
            size: 0.1,
            transparent: true,
            opacity: 0.6
        });
        particles = new THREE.Points(rainGeometry, rainMaterial);
        scene.add(particles);
    }

    function createSnowEffect() {
        removeParticles(); // Clear existing particles
        
        const snowGeometry = new THREE.BufferGeometry();
        const snowCount = 500;
        const positions = new Float32Array(snowCount * 3);

        for (let i = 0; i < snowCount * 3; i += 3) {
            positions[i] = Math.random() * 100 - 50;     // x
            positions[i + 1] = Math.random() * 50;       // y
            positions[i + 2] = Math.random() * 100 - 50;  // z
        }

        snowGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const snowMaterial = new THREE.PointsMaterial({ 
            color: 0xffffff,
            size: 0.2,
            transparent: true,
            opacity: 0.8
        });
        particles = new THREE.Points(snowGeometry, snowMaterial);
        scene.add(particles);
    }

    function removeParticles() {
        if (particles) {
            scene.remove(particles);
            particles.geometry.dispose();
            particles.material.dispose();
            particles = null;
        }
    }

    function animateWeather() {
        if (particles && currentWeather === 'rainy') {
            const positions = particles.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] -= 0.5; // Fall down
                if (positions[i] < 0) {
                    positions[i] = 50; // Reset to top
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;
        } else if (particles && currentWeather === 'snowy') {
            const positions = particles.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] -= 0.1; // Fall slowly
                positions[i - 1] += Math.sin(Date.now() * 0.001 + i) * 0.01; // Sway
                if (positions[i] < 0) {
                    positions[i] = 50; // Reset to top
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;
        }
    }

    // Call weather change function periodically
    setInterval(changeWeather, 5000);

    return {
        changeWeather,
        animateWeather,
        getCurrentWeather: () => currentWeather
    };
}

export function integrateRealWeather(scene) {
    // Make model react with real-time data from APIs
    async function fetchTemperature() {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.76&current_weather=true');
        const weatherData = await response.json();
        const temp = weatherData.current_weather.temperature;

        if (temp < 0) {
            changeWeatherToSnow();
        } else if (temp > 30) {
            addSunEffects();
        }
    }

    return fetchTemperature;
}

function changeWeatherToSnow() {
    // Implementation for snow weather
    console.log('Changing to snow weather');
}

function addSunEffects() {
    // Implementation for sunny weather
    console.log('Adding sun effects');
}
