const LEFT_BTN = document.getElementById('left');
const RIGHT_BTN = document.getElementById('right');
const sliderLine = document.querySelector('.special-equipment_slider-line');
const equipment_line1 = document.querySelector('.special-equipment_line');
const equipment_line2 = document.querySelector('.special-equipment_line1');
const equipment_line3 = document.querySelector('.special-equipment_line2');
const equipment_line4 = document.querySelector('.special-equipment_line3');

let schet = 0;
let str = 0;
console.log(sliderLine);
RIGHT_BTN.addEventListener('click', ()=>{
    if(str == 4){
        str=0;
        schet=0;
        sliderLine.style.right = schet + "px"; 
        
    }
    schet+=1600;
    sliderLine.style.right = schet + "px";
    str++;
    if(schet > 5000){
        schet = 0
        sliderLine.style.right = schet + "px";
        str = 0
    }
    console.log(schet, str)

    if (schet == 4){
        schet=2;
        equipment_line1.classList.remove("active-line")
        equipment_line2.classList.add("active-line")
    }
    if (schet == 3) {
        equipment_line2.classList.remove("active-line")
        equipment_line3.classList.add("active-line")

    }
    if (schet == 4) {
        equipment_line3.classList.remove("active-line")
        equipment_line4.classList.add("active-line")
    }
})
LEFT_BTN.addEventListener('click', ()=>{
    if (schet > 0){
        schet-=1600;
        sliderLine.style.right = schet + "px";
    }
    if (schet < 0){
        schet = 1600;
        schet = schet*3;
        sliderLine.style.right = schet + "px";
        str = 4;
        
    }
    if (str == 0){
        schet = 1600;
        schet = schet*3;
        sliderLine.style.right = schet + "px";
        str =  4;
    }
    str--
})
