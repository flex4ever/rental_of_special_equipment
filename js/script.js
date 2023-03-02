window.onload = function(){
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
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #FCB427 ${percent1}% , #FCB427 ${percent2}%, #dadae5 ${percent2}%)`;
} 
window.onload = function(){
    slideOne();
    slideTwo();
}


const btn = document.getElementById("submit");
let catalogText = document.querySelector(".menu__flex-text");
btn.addEventListener("click",function(){
    console.log(btn)
    catalogText.classList.toggle("active")   
    console.log(backSize);
})


const btnTwo = document.getElementById("btn-2")
let catalogTextTwo = document.getElementById("flex-text-2")
btnTwo.addEventListener("click",function(){
    console.log(btnTwo)
    catalogTextTwo.classList.toggle("active")
    console.log(backSize);
})
const btnThree = document.getElementById("btn-3")
let catalogTextThree = document.getElementById("flex-text-3")
btnThree.addEventListener("click",function(){
    catalogTextThree.classList.toggle("active") 
   console.log(backSize);
})

const btnFour = document.getElementById("btn-4")
let catalogTextFour = document.getElementById("flex-text-4")
btnFour.addEventListener("click",function(){
    catalogTextFour.classList.toggle("active")
   console.log(backSize);
})






