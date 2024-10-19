function embedImage(imagePath) {
  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = 'Test';
  document.body.appendChild(img);
}

// Usage
embedImage('./image.jpg');
