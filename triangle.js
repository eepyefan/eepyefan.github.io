const canvas = document.getElementById('triangleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawTriangle() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate triangle dimensions
    const sideLength = Math.min(canvas.width, canvas.height) * 0.7;
    const height = sideLength * Math.sqrt(3) / 2;

    // Calculate center point
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - sideLength, centerY + height);
    ctx.lineTo(centerX + sideLength, centerY + height);
    ctx.closePath();
    ctx.stroke();

    // Update rotation angle
    angle += 0.005; // 0.5 degrees per frame

    // Apply rotation transform
    canvas.style.transform = `rotate(${angle}deg)`;
}

function animate() {
    requestAnimationFrame(animate);
    drawTriangle();
}

animate();
