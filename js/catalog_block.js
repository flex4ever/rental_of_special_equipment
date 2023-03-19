window.onload = function () {
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".menu__slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #FCB427 ${percent1}% , #FCB427 ${percent2}%, #dadae5 ${percent2}%)`;
}
window.onload = function () {
    slideOne();
    slideTwo();
}


const btn = document.getElementById("submit");
let btnMask = document.querySelector(".menu__icon-btn-decor")
let catalogText = document.querySelector(".menu__flex-text");
btn.addEventListener("click", function () {
    btnMask.classList.toggle("active-two");
    btnMask.classList.toggle("active-three");
    console.log(btn);
    catalogText.classList.toggle("active");
    console.log(backSize);
})

let btnMaskTwo = document.querySelector(".menu__icon-btn-decor-two")
const btnTwo = document.getElementById("btn-2")
let catalogTextTwo = document.getElementById("flex-text-2")
btnTwo.addEventListener("click", function () {
    btnMaskTwo.classList.toggle("active-two");
    btnMaskTwo.classList.toggle("active-three");
    console.log(btnTwo)
    catalogTextTwo.classList.toggle("active")

})
let btnMaskThree = document.querySelector(".menu__icon-btn-decor-three")
const btnThree = document.getElementById("btn-3")
let catalogTextThree = document.getElementById("flex-text-3")
btnThree.addEventListener("click", function () {
    catalogTextThree.classList.toggle("active")
    btnMaskThree.classList.toggle("active-two");
    btnMaskThree.classList.toggle("active-three");
})
let btnMaskFour = document.querySelector(".menu__icon-btn-decor-four")
const btnFour = document.getElementById("btn-4")
let catalogTextFour = document.getElementById("flex-text-4")
btnFour.addEventListener("click", function () {
    catalogTextFour.classList.toggle("active")
    btnMaskFour.classList.toggle("active-two");
    btnMaskFour.classList.toggle("active-three");





})
let btnModalOffTwo = document.getElementById("modalOff-2")
let btnModalOff = document.getElementById("modalOff")
let btnModalOn = document.getElementById("modal")
let modal = document.querySelector(".contacts__modal")
btnModalOn.onclick = function () {
    modal.style.display = "block"
}
btnModalOff.onclick = function () {
    modal.style.display = "none"
}
btnModalOffTwo.onclick = function () {
    modal.style.display = "none"
}

let btnCatalog = document.getElementById("catalog");
let catalogBlock = document.querySelector(".catalog__btn-none");
btnCatalog.addEventListener("click", function () {
    catalogBlock.classList.toggle("active-block");
});
let btnFilter = document.querySelector(".catalog__filter-block");
let filterBlock = document.querySelector(".menu__filter");
btnFilter.addEventListener("click", function () {
    filterBlock.classList.toggle("active-right");
});







