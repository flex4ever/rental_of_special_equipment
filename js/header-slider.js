window.addEventListener('DOMContentLoaded', ()=>{
   const BlockImg2 = document.querySelector('.block-header-background-img-1');
const BlockImg3 = document.querySelector('.block-header-background-img-2');
const BlockImg1 = document.querySelector('.rental');
const btn1 = document.getElementById('left_first-slider');
const btn2 = document.getElementById('right_first-slider');
const scoreSlide = document.getElementById('score-slide');
const scoreBlock = document.querySelector('.right-block_score-text')
    console.log([scoreSlide, scoreBlock])
let page = 1;
let score = 1;

btn2.addEventListener('click', () => {
    page++
    if (page == 4){
        page=1;
        BlockImg1.classList.remove("not-active-background")
        BlockImg3.classList.add("not-active-background")
    }
    if (page == 2) {
        BlockImg2.classList.remove("not-active-background")
        BlockImg1.classList.add("not-active-background")

    }
    [scoreSlide, scoreBlock].forEach(el => el.style.color = "white");
    if (page == 3) {
        BlockImg3.classList.remove("not-active-background");
        BlockImg2.classList.add("not-active-background");
        [scoreSlide, scoreBlock].forEach(el => el.style.color = "black" );

    }
    scoreSlide.innerHTML = "0" + page + "/"
})

btn1.addEventListener('click', () => {
    page++
    if (page == 4){
        page=1;
        BlockImg1.classList.remove("not-active-background")
        BlockImg3.classList.add("not-active-background")
    }
    if (page == 2) {
        BlockImg3.classList.remove("not-active-background")
        BlockImg1.classList.add("not-active-background")

    }
    if (page == 3) {
        BlockImg2.classList.remove("not-active-background")
        BlockImg3.classList.add("not-active-background")
        [scoreSlide, scoreBlock].style.color = 'black';

    }
    scoreSlide.innerHTML = "0" + page + "/"
    //if(page == 3) {
    //BlockImg3.classList.remove("not-active-background")
    //BlockImg1.classList.add("not-active-background")
    //}
    //mne uje othodit' nad :(
})

console.log(BlockImg1)
console.log(BlockImg2)
console.log(BlockImg3)
console.log(btn1)
console.log(btn2) 
})


