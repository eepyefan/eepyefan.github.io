const canvas = document.getElementById('triangleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawTriangle() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.arcTo(canvas.width, canvas.height, canvas.width * 2, canvas.height, canvas.width);
    ctx.lineTo(canvas.width * 2, 0);
    ctx.arcTo(canvas.width, 0, 0, 0, canvas.width);
    ctx.closePath();
    ctx.stroke();

    // Update rotation angle
    angle += 0.01; // 1 degree per frame

    // Apply rotation transform
    canvas.style.transform = `rotate(${angle}deg)`;
}

function animate() {
    requestAnimationFrame(animate);
    drawTriangle();
}

animate();
