function embedImage(imagePath) {
  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = 'Description of the image';
  document.body.appendChild(img);
}

// Usage
embedImage('./path/to/your/image.jpg');
