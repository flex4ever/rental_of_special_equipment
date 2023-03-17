
//tabs
const tabsItems = document.querySelectorAll(".tabs__item");
const tabsBtn = document.querySelectorAll(".tabs__nav-btn ");
tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId)

    tabsBtn.forEach(function (item) {
      item.classList.remove('active')
    });

    tabsItems.forEach(function (item) {
      item.classList.remove('activeTwo')
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('activeTwo')
  });
});

//slider
let btnIconOne = document.querySelector(".slider-two__img-left");
let btnIconTwo = document.querySelector(".slider-two__img-right");
let btnRight = document.querySelector(".slider-two__button-two");
let btnLeft = document.querySelector(".slider-two__button-one");
let offSet = 0;
let offSetLine = 0;
const sliderLineUp = document.querySelector('.slider-two__line-active')
const sliderLineTwo = document.querySelector(".slider-two__line");
btnRight.addEventListener("click", function () {
  offSet += 400;
  sliderLineTwo.style.left = -offSet + "px"
  if (offSet > 1500) {
    offSet = 0;

  }
  sliderLineTwo.style.left = -offSet + 'px';
  btnIconTwo.classList.add('activeBtn-right');
  btnIconOne.classList.remove('activeBtn-left');
  btnRight.classList.add('activeBtn');
  btnLeft.classList.remove('activeBtn');
  offSetLine += 30;
  sliderLineUp.style.left = offSetLine + "px"
  if (offSetLine > 91) {
    offSetLine = 0;
  }
  sliderLineUp.style.left = offSetLine + 'px';
});

btnLeft.addEventListener("click", function () {
  offSet -= 400;

  if (offSet < 0) {
    offSet = 1200;
  }
  sliderLineTwo.style.left = -offSet + 'px';
  btnIconTwo.classList.remove('activeBtn-right');
  btnIconOne.classList.add('activeBtn-left');
  btnRight.classList.remove('activeBtn');
  btnLeft.classList.add('activeBtn');
  offSetLine -= 30;
  sliderLineUp.style.left = offSetLine + "px"
  if (offSetLine < 0) {
    offSetLine = 90;
  }
  sliderLineUp.style.left = offSetLine + 'px';
});
//swiper

let slider = document.querySelector('.slider__main-block'),
  sliderList = slider.querySelector('.slider__list'),
  sliderTrack = slider.querySelector('.slider__track'),
  slides = slider.querySelectorAll('.slider__main'),
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  getEvent = function () {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function () {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

  },
  swipeStart = function () {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },
  swipeAction = function () {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function () {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function () {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

