const slides = document.querySelectorAll('#slides.one .slide');

var currSlide = 0;

const slideInterval = () => {
    setInterval(nextslide, 3000);
}

const nextslide = () => {
    slides[currSlide].className = 'slide';
    currSlide = (currSlide + 1) % slides.length;
    slides[currSlide].className = 'slide showing';
}

slideInterval();

const slidesTwo = document.querySelectorAll('#slides.two .slide');

var currSlideTwo = 0;

const slideIntervalTwo = () => {
    setInterval(nextslideTwo, 3000);
}

const nextslideTwo = () => {
    slidesTwo[currSlideTwo].className = 'slide slide-out';
    currSlideTwo = (currSlideTwo + 1) % slidesTwo.length;
    slidesTwo[currSlideTwo].className = 'slide slide-in';
}

slideIntervalTwo();