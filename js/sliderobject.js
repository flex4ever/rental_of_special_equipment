let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 1170;
    if (offset > 7020) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.praw').addEventListener('click', function () {
    offset = offset - 1170;
    if (offset < 0) {
        offset = 7020
    }
    sliderLine.style.left = -offset + 'px';
});

let slader = 0;
const sliderLineTwo = document.querySelector('.slider-line-two');

document.querySelector('.lev').addEventListener('click', function () {
    slader = slader + 1170;
    if (slader > 1170) {
        slader = 0
    }
    sliderLineTwo.style.left = -slader + 'px';
});

document.querySelector('.praw').addEventListener('click', function () {
    slader = slader - 1170;
    if (slader < 0) {
        slader = 1170
    }
    sliderLineTwo.style.left = -slader + 'px';
});
