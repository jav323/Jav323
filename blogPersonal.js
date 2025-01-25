console.log('El archivo JavaScript está cargado correctamente');

function incrementLike(id) {
    const likeCounter = document.getElementById(id);
    let currentLikes = parseInt(likeCounter.textContent, 10);
    likeCounter.textContent = currentLikes + 1;
}

function changeTextColor() {
    const colorPicker = document.getElementById('colorPicker');
    document.body.style.color = colorPicker.value;
}

function countWords() {
    const textArea = document.getElementById('msg');
    const wordCounter = document.getElementById('wordCount');
    const text = textArea.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    wordCounter.textContent = `Palabras: ${words}`;
}

function resizeImage(imgId, scale) {
    const image = document.getElementById(imgId);
    const currentWidth = image.offsetWidth;
    const newWidth = currentWidth * scale;
    image.style.width = `${newWidth}px`;
}

function rotateImage(imgId) {
    const image = document.getElementById(imgId);
    const currentRotation = image.dataset.rotation ? parseInt(image.dataset.rotation, 10) : 0;
    const newRotation = currentRotation + 90;
    image.style.transform = `rotate(${newRotation}deg)`;
    image.dataset.rotation = newRotation;
}

function showCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    alert(`La hora actual es: ${hours}:${minutes}:${seconds}`);
}

function toggleParagraph() {
    const paragraph = document.getElementById('descriptionParagraph');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

function displayCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    document.getElementById('currentDate').textContent = `Fecha actual: ${formattedDate}`;
}

window.onload = displayCurrentDate;
