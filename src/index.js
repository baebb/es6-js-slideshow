const slides = document.querySelectorAll('#slides.one .slide');

var currSlide = 0;

const slideInterval = () => {
    setInterval(nextslide,2000);
}

const nextslide = () => {
    slides[currSlide].className = 'slide';
    currSlide = (currSlide+1)%slides.length;
    slides[currSlide].className = 'slide showing';
}

slideInterval();