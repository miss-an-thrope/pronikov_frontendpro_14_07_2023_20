// Homework_20

const images = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/5.png',
    'assets/img/6.jpg',
    'assets/img/7.png',
    'assets/img/8.png',
    'assets/img/9.png',
    'assets/img/10.png'
];

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentImageIndex = 0;

const updateSlider = () => {
    sliderImage.src = images[currentImageIndex];
    if (currentImageIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    if (currentImageIndex === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

// Заглушка для кнопки Prev.
updateSlider();

const showPrevImage = () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = 0;
    }
    updateSlider();
}

const showNextImage = () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = images.length - 1;
    }
    updateSlider();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
