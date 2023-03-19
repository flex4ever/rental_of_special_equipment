let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 1170;
    if (offset > 7020) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prew').addEventListener('click', function () {
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


let adaptive = 0;
const sliderLineAdaptive = document.querySelector('.slider__line-adaptive');

document.querySelector('.next').addEventListener('click', function () {
    adaptive = adaptive + 738;
    if (adaptive > 4428) {
        adaptive = 0
    }
    sliderLineAdaptive.style.left = -adaptive + 'px';
});

document.querySelector('.prew').addEventListener('click', function () {
    adaptive = adaptive - 738;
    if (adaptive < 0) {
        adaptive = 4428
    }
    sliderLineAdaptive.style.left = -adaptive + 'px';
});

let adaptiveTwo = 0;
const sliderLineTwoAdaptive = document.querySelector('.slider-line-two-adaptive');

document.querySelector('.lev').addEventListener('click', function () {
    adaptiveTwo = adaptiveTwo + 738;
    if (adaptiveTwo > 738) {
        adaptiveTwo = 0
    }
    sliderLineTwoAdaptive.style.left = -adaptiveTwo + 'px';
});

document.querySelector('.praw').addEventListener('click', function () {
    adaptiveTwo = adaptiveTwo - 738;
    if (adaptiveTwo < 0) {
        adaptiveTwo = 738
    }
    sliderLineTwoAdaptive.style.left = -adaptiveTwo + 'px';
});

let sladerTel = 0;
const sliderLineAdaptiveTelefon = document.querySelector('.slider__line-adaptive-telefon');

document.querySelector('.next').addEventListener('click', function () {
    sladerTel = sladerTel + 292;
    if (sladerTel > 870) {
        sladerTel = 0
    }
    sliderLineAdaptiveTelefon.style.left = -sladerTel + 'px';
});

document.querySelector('.prew').addEventListener('click', function () {
    sladerTel = sladerTel - 290;
    if (sladerTel < 0) {
        sladerTel = 580
    }
    sliderLineAdaptiveTelefon.style.left = -sladerTel + 'px';
});


