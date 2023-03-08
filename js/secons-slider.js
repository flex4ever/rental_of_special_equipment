const LEFT_BTN = document.getElementById('left');
const RIGHT_BTN = document.getElementById('right');
const sliderLine = document.querySelector('.special-equipment_slider-line');
const equipment_line1 = document.querySelector('.special-equipment_line');
const equipment_line2 = document.querySelector('.special-equipment_line1');
const equipment_line3 = document.querySelector('.special-equipment_line2');
const equipment_line4 = document.querySelector('.special-equipment_line3');
const activeLine = document.querySelector('.active-line');

let schet = 0;
let str = 0;
let line_score = 0;
let line_page = 0;
console.log(sliderLine);
RIGHT_BTN.addEventListener('click', () => {
    
    if (str == 4) {
        str = 0;
        schet = 0;
        sliderLine.style.right = schet + "px";
    }
    schet += 1600;
    sliderLine.style.right = schet + "px";
    str++;
    if (str == 4) {
        str = 1;
        console.log('11');
        equipment_line4.classList.remove("active-line");
        equipment_line1.classList.add("active-line");
    } else if (str == 1) {
        equipment_line1.classList.remove("active-line");
        equipment_line2.classList.add("active-line");
        console.log('112');
    } else if (str == 2) {
        equipment_line2.classList.remove("active-line");
        equipment_line3.classList.add("active-line");
        console.log('113');
    } else if (str == 3) {
        equipment_line3.classList.remove("active-line");
        equipment_line4.classList.add("active-line");
        console.log('114');
    } else if (str > 4) {
            str = 0;
    }
    if (schet > 5000) {
        schet = 0;
        sliderLine.style.right = schet + "px";
        str = 0;
    }
    console.log(schet, str);

    
    // if (line_page == 4) {
    //     line_page = 0;
    //     line_score = 0;
    //     activeLine.style.right = line_score + "px";
    // }
    // line_score += 139;
    // activeLine.style.right = line_score + "px";
    // line_page++;
    // if (line_score > 450) {
    //     line_score = 0
    //     activeLine.style.right = line_score + "px";
    //     line_page = 0
    // }
    //  console.log(line_score, line_page);
    
})
LEFT_BTN.addEventListener('click', () => {
    if (schet > 0) {
        schet -= 1600;
        sliderLine.style.right = schet + "px";
    }
    if (schet < 0) {
        schet = 1600;
        schet = schet * 3;
        sliderLine.style.right = schet + "px";
        str = 4;

    }
    if (str == 0) {
        schet = 1600;
        schet = schet * 3;
        sliderLine.style.right = schet + "px";
        str = 4;
        console.log('11');
        equipment_line1.classList.remove("active-line");
        equipment_line4.classList.add("active-line");
        console.log('11224323');
    }

    // if (str <= 0) {
    //     str = 1;
        
    // } else 
    if (str == 1) {
        equipment_line2.classList.remove("active-line");
        equipment_line1.classList.add("active-line");
        console.log('112');
    } else if (str == 2) {
        equipment_line3.classList.remove("active-line");
        equipment_line2.classList.add("active-line");
        console.log('113');
    } else if (str == 3) {
        equipment_line4.classList.remove("active-line");
        equipment_line3.classList.add("active-line");
        console.log('114');
    } else if (str > 4) {
            str = 0;
    }
    str--

    
    
})
