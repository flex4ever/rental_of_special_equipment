addEventListener('DOMContentLoaded', () => {
    const CARDS = document.querySelectorAll('.slider-block__card');
    const LEFT_BUTTON = document.getElementById('Left-arrow_button');
    const RIGHT_BUTTON = document.getElementById('right-arrow_button');
    const SLIDER_LINE = document.querySelector('.slider-block__slider-line');
    let i = 0
    // let width = CARDS[1].offsetWidth
    let width = 0
    console.log(CARDS, LEFT_BUTTON, RIGHT_BUTTON, SLIDER_LINE, width)
    RIGHT_BUTTON.addEventListener('click', () => {
        console.log('первый раз:' + i)
        i++
        if (i == 4) {
            i = 0
            width = 0
            SLIDER_LINE.style.transform = "translate(-" + width + "px)"
            
            console.log('gop stop')
        }
        // if (i == 1) {
        //     width = 400
        // }
        if (i < 4 && i >= 1) {
            width += 400
            SLIDER_LINE.style.transform = "translate(-" + width + "px)"
            console.log('второй раз в условии:' + i)
        }
        if (width > 1200){
            width = 0
            SLIDER_LINE.style.transform = "translate(-" + width + "px)"
            i = 0
        }
        console.log(width, i)
    })
    LEFT_BUTTON.addEventListener('click', ()=>{
        if (i != 0) {
            width -=400
            SLIDER_LINE.style.transform = "translate(-" + width + "px)"
        } else {
            i = 4
            width = 400 
            width = +width*3
            SLIDER_LINE.style.transform = "translate(-" + width + "px)"
        }
        if ( width <= 0) {
            width = +width * 3
            SLIDER_LINE.style.transform = "translate(-" + width + "px)"
        }
        i--
        console.log(width, i)
    })
})