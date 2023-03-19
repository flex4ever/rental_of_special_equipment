let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 402;
    if (offset > 804) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prew').addEventListener('click', function () {
    offset = offset - 402;
    if (offset < 0) {
        offset = 804
    }
    sliderLine.style.left = -offset + 'px';
});