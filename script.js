const canvas = document.getElementById('triangleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Center coordinates
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Triangle properties
const triangleSize = 200;
const triangleColor = 'red';

// Rotation speed (1000 RPM)
const rotationSpeed = 360 * 1000 / 60; // 360 degrees per second

let angle = 0;

function drawTriangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const x = centerX + Math.cos(angle) * triangleSize;
    const y = centerY + Math.sin(angle) * triangleSize;
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.lineTo(centerX + Math.cos(angle + Math.PI), centerY + Math.sin(angle + Math.PI));
    ctx.closePath();
    ctx.strokeStyle = triangleColor;
    ctx.stroke();

    angle += rotationSpeed / 180 * Math.PI; // Convert to radians
}

function animate() {
    requestAnimationFrame(animate);
    drawTriangle();
}

animate();
