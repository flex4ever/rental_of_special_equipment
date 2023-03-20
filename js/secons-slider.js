window.addEventListener('DOMContentLoaded', () => {
    const LEFT_BTN = document.querySelector('.special-equipment_slider_buttons_left');
    const RIGHT_BTN = document.querySelector('.special-equipment_slider_buttons_right');
    const sliderLine = document.querySelector('.special-equipment_slider-line');
    const equipment_line1 = document.querySelector('.special-equipment_line');
    const equipment_line2 = document.querySelector('.special-equipment_line1');
    const equipment_line3 = document.querySelector('.special-equipment_line2');
    const equipment_line4 = document.querySelector('.special-equipment_line3');
    const activeLine = document.querySelector('.active-line');

    const LEFT_BTN_adaptive = document.getElementById('left_adaptive');
    const RIGHT_BTN_adaptive = document.getElementById('right_adaptive');
    const sliderLineAdaptive = document.querySelector('.special-equipment_slider-line_adaptive');

    let schet = 0;
    let str = 0;

    console.log(sliderLine);
    RIGHT_BTN.addEventListener('click', () => {
        if (str == 4) {
            str = 0;
            schet = 0;
            sliderLine.style.right = schet + "px";
            console.log('aa')
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
            console.log('ab')
        }
        if (schet > 5000) {
            schet = 0;
            sliderLine.style.right = schet + "px";
            str = 0;
            console.log('ac')
        }
        console.log(schet, str);
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




    RIGHT_BTN_adaptive.addEventListener('click', () => {
        if (str == 4) {
            str = 0;
            schet = 0;
            sliderLineAdaptive.style.right = schet + "px";
        }
        schet += 650;
        sliderLineAdaptive.style.right = schet + "px";
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
        if (schet > 2015) {
            schet = 0;
            sliderLineAdaptive.style.right = schet + "px";
            str = 0;
        }
        console.log(schet, str);
    })


    LEFT_BTN_adaptive.addEventListener('click', () => {
        if (schet > 0) {
            schet -= 650;
            sliderLineAdaptive.style.right = schet + "px";
        }
        if (schet < 0) {
            schet = 650;
            schet = schet * 3;
            sliderLineAdaptive.style.right = schet + "px";
            str = 4;

        }
        if (str == 0) {
            schet = 650;
            schet = schet * 3;
            sliderLineAdaptive.style.right = schet + "px";
            str = 4;
            console.log('11');
            equipment_line1.classList.remove("active-line");
            equipment_line4.classList.add("active-line");
            console.log('11224323');
        }
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




    const SD_LEFT_BTN = document.getElementById('SD_left');
    const SD_RIGHT_BTN = document.getElementById('SD_right');
    const SD_sliderLine = document.querySelector('.slider-done_line_slider_line');

    const done_line1 = document.querySelector('.slider-done-line1');
    const done_line2 = document.querySelector('.slider-done-line2');
    const done_line3 = document.querySelector('.slider-done-line3');
    const done_line4 = document.querySelector('.slider-done-line4');
    const done_line5 = document.querySelector('.slider-done-line5');
    const done_line6 = document.querySelector('.slider-done-line6');
    const done_line7 = document.querySelector('.slider-done-line7');
    const done_line8 = document.querySelector('.slider-done-line8');
    const lines_active = document.querySelector('.lines_active');

    const slide_done1 = document.querySelector('.slids-done-project1');
    const slide_done2 = document.querySelector('.slids-done-project2');
    const slide_done3 = document.querySelector('.slids-done-project3');
    const slide_done4 = document.querySelector('.slids-done-project4');
    const slide_done5 = document.querySelector('.slids-done-project5');
    const slide_done6 = document.querySelector('.slids-done-project6');
    const slide_done7 = document.querySelector('.slids-done-project7');
    const slide_done8 = document.querySelector('.slids-done-project8');
    const slide_active = document.querySelector('.slide-active');




    console.log(slide_done1);

    let page_ = 0;
    let score_ = 0;

    SD_right.addEventListener('click', () => {
        if (page_ == 8) {
            page_ = 0;
            score_ = 0;
            SD_sliderLine.style.right = score_ + "px";
        }
        score_ += 1371;
        SD_sliderLine.style.right = score_ + "px";
        page_++;
        if (page_ == 8) {
            page_ = 1;
            console.log('11');
            done_line8.classList.remove("lines_active");
            done_line1.classList.add("lines_active");
            slide_done8.classList.remove("slide_active");
            slide_done1.classList.add("slide_active");
        } else if (page_ == 1) {
            done_line1.classList.remove("lines_active");
            done_line2.classList.add("lines_active");
            slide_done1.classList.remove("slide_active");
            slide_done2.classList.add("slide_active");
            console.log('112');
        } else if (page_ == 2) {
            done_line2.classList.remove("lines_active");
            done_line3.classList.add("lines_active");
            slide_done2.classList.remove("slide_active");
            slide_done3.classList.add("slide_active");
            console.log('113');
        } else if (page_ == 3) {
            done_line3.classList.remove("lines_active");
            done_line4.classList.add("lines_active");
            slide_done3.classList.remove("slide_active");
            slide_done4.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 4) {
            done_line4.classList.remove("lines_active");
            done_line5.classList.add("lines_active");
            slide_done4.classList.remove("slide_active");
            slide_done5.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 5) {
            done_line5.classList.remove("lines_active");
            done_line6.classList.add("lines_active");
            slide_done5.classList.remove("slide_active");
            slide_done6.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 6) {
            done_line6.classList.remove("lines_active");
            done_line7.classList.add("lines_active");
            slide_done6.classList.remove("slide_active");
            slide_done7.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 7) {
            done_line7.classList.remove("lines_active");
            done_line8.classList.add("lines_active");
            slide_done7.classList.remove("slide_active");
            slide_done8.classList.add("slide_active");
            console.log('114');
        } else if (page_ > 8) {
            page_ = 0;
        }
        if (score_ > 10000) {
            score_ = 0;
            SD_sliderLine.style.right = score_ + "px";
            page_ = 0;
        }
    })
    SD_left.addEventListener('click', () => {
        if (score_ > 0) {
            score_ -= 1385;
            SD_sliderLine.style.right = score_ + "px";
        }
        if (score_ < 0) {
            score_ = 1385;
            score_ = score_ * 7;
            SD_sliderLine.style.right = score_ + "px";
            page_ = 8;
        }
        if (page_ == 0) {
            score_ = 1385;
            score_ = score_ * 7;
            SD_sliderLine.style.right = score_ + "px";
            page_ = 8;
            done_line1.classList.remove("lines_active");
            done_line8.classList.add("lines_active");
            slide_done1.classList.remove("slide_active");
            slide_done8.classList.add("slide_active");
        } if (page_ == 1) {
            done_line2.classList.remove("lines_active");
            done_line1.classList.add("lines_active");
            slide_done2.classList.remove("slide_active");
            slide_done1.classList.add("slide_active");
        } else if (page_ == 2) {
            done_line3.classList.remove("lines_active");
            done_line2.classList.add("lines_active");
            slide_done3.classList.remove("slide_active");
            slide_done2.classList.add("slide_active");
        } else if (page_ == 3) {
            done_line4.classList.remove("lines_active");
            done_line3.classList.add("lines_active");
            slide_done4.classList.remove("slide_active");
            slide_done3.classList.add("slide_active");
        } else if (page_ == 4) {
            done_line5.classList.remove("lines_active");
            done_line4.classList.add("lines_active");
            slide_done5.classList.remove("slide_active");
            slide_done4.classList.add("slide_active");
        } else if (page_ == 5) {
            done_line6.classList.remove("lines_active");
            done_line5.classList.add("lines_active");
            slide_done6.classList.remove("slide_active");
            slide_done5.classList.add("slide_active");
        } else if (page_ == 6) {
            done_line7.classList.remove("lines_active");
            done_line6.classList.add("lines_active");
            slide_done7.classList.remove("slide_active");
            slide_done6.classList.add("slide_active");
        } else if (page_ == 7) {
            done_line8.classList.remove("lines_active");
            done_line7.classList.add("lines_active");
            slide_done8.classList.remove("slide_active");
            slide_done7.classList.add("slide_active");
        } else if (page_ > 8) {
            page_ = 0;
        }
        page_--
    })
    const SD_LEFT_BTN_ADP = document.getElementById('SD_left_adaptive');
    const SD_RIGHT_BTN_ADP = document.getElementById('SD_right_adaptive');
    const SD_sliderLine_ADP = document.querySelector('.slider-done_line_slider_line_adaptive');

    SD_right_adaptive.addEventListener('click', () => {
        if (page_ == 8) {
            page_ = 0;
            score_ = 0;
            SD_sliderLine_ADP.style.right = score_ + "px";
        }
        score_ += 762;
        SD_sliderLine_ADP.style.right = score_ + "px";
        page_++;
        if (page_ == 8) {
            page_ = 1;
            console.log('11');
            done_line8.classList.remove("lines_active");
            done_line1.classList.add("lines_active");
            slide_done8.classList.remove("slide_active");
            slide_done1.classList.add("slide_active");
        } else if (page_ == 1) {
            done_line1.classList.remove("lines_active");
            done_line2.classList.add("lines_active");
            slide_done1.classList.remove("slide_active");
            slide_done2.classList.add("slide_active");
            console.log('112');
        } else if (page_ == 2) {
            done_line2.classList.remove("lines_active");
            done_line3.classList.add("lines_active");
            slide_done2.classList.remove("slide_active");
            slide_done3.classList.add("slide_active");
            console.log('113');
        } else if (page_ == 3) {
            done_line3.classList.remove("lines_active");
            done_line4.classList.add("lines_active");
            slide_done3.classList.remove("slide_active");
            slide_done4.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 4) {
            done_line4.classList.remove("lines_active");
            done_line5.classList.add("lines_active");
            slide_done4.classList.remove("slide_active");
            slide_done5.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 5) {
            done_line5.classList.remove("lines_active");
            done_line6.classList.add("lines_active");
            slide_done5.classList.remove("slide_active");
            slide_done6.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 6) {
            done_line6.classList.remove("lines_active");
            done_line7.classList.add("lines_active");
            slide_done6.classList.remove("slide_active");
            slide_done7.classList.add("slide_active");
            console.log('114');
        } else if (page_ == 7) {
            done_line7.classList.remove("lines_active");
            done_line8.classList.add("lines_active");
            slide_done7.classList.remove("slide_active");
            slide_done8.classList.add("slide_active");
            console.log('114');
        } else if (page_ > 8) {
            page_ = 0;
        }
        if (score_ > 5410) {
            score_ = 0;
            SD_sliderLine_ADP.style.right = score_ + "px";
            page_ = 0;
        }
    })
    SD_left_adaptive.addEventListener('click', () => {
        if (score_ > 0) {
            score_ -= 762;
            SD_sliderLine_ADP.style.right = score_ + "px";
        }
        if (score_ < 0) {
            score_ = 762;
            score_ = score_ * 7;
            SD_sliderLine_ADP.style.right = score_ + "px";
            page_ = 8;
        }
        if (page_ == 0) {
            score_ = 762;
            score_ = score_ * 7;
            SD_sliderLine_ADP.style.right = score_ + "px";
            page_ = 8;
            done_line1.classList.remove("lines_active");
            done_line8.classList.add("lines_active");
            slide_done1.classList.remove("slide_active");
            slide_done8.classList.add("slide_active");
        } if (page_ == 1) {
            done_line2.classList.remove("lines_active");
            done_line1.classList.add("lines_active");
            slide_done2.classList.remove("slide_active");
            slide_done1.classList.add("slide_active");
        } else if (page_ == 2) {
            done_line3.classList.remove("lines_active");
            done_line2.classList.add("lines_active");
            slide_done3.classList.remove("slide_active");
            slide_done2.classList.add("slide_active");
        } else if (page_ == 3) {
            done_line4.classList.remove("lines_active");
            done_line3.classList.add("lines_active");
            slide_done4.classList.remove("slide_active");
            slide_done3.classList.add("slide_active");
        } else if (page_ == 4) {
            done_line5.classList.remove("lines_active");
            done_line4.classList.add("lines_active");
            slide_done5.classList.remove("slide_active");
            slide_done4.classList.add("slide_active");
        } else if (page_ == 5) {
            done_line6.classList.remove("lines_active");
            done_line5.classList.add("lines_active");
            slide_done6.classList.remove("slide_active");
            slide_done5.classList.add("slide_active");
        } else if (page_ == 6) {
            done_line7.classList.remove("lines_active");
            done_line6.classList.add("lines_active");
            slide_done7.classList.remove("slide_active");
            slide_done6.classList.add("slide_active");
        } else if (page_ == 7) {
            done_line8.classList.remove("lines_active");
            done_line7.classList.add("lines_active");
            slide_done8.classList.remove("slide_active");
            slide_done7.classList.add("slide_active");
        } else if (page_ > 8) {
            page_ = 0;
        }
        page_--
    })






    const LEFT_SLIDE = document.getElementById('left_slider');
    const RIGHT_SLIDE = document.getElementById('right_slider');
    const slider_cards = document.querySelector('.slider_cards');
    const navigation_line1 = document.querySelector('.navigation_lines_line1');
    const navigation_line2 = document.querySelector('.navigation_lines_line2');
    const navigation_line3 = document.querySelector('.navigation_lines_line3');
    const navigation_line4 = document.querySelector('.navigation_lines_line4');
    const active_line = document.querySelector('._active_line');


    let line_score = 0;
    let line_page = 0;

    RIGHT_SLIDE.addEventListener('click', () => {

        if (line_page == 4) {
            line_page = 0;
            line_score = 0;
            slider_cards.style.right = line_score + "px";
        }
        line_score += 500;
        slider_cards.style.right = line_score + "px";
        line_page++;

        if (line_page == 4) {
            line_page = 1;
            console.log('11');
            navigation_line4.classList.remove("_active_line");
            navigation_line1.classList.add("_active_line");

        } else if (line_page == 1) {
            navigation_line1.classList.remove("_active_line");
            navigation_line2.classList.add("_active_line");

            console.log('112');
        } else if (line_page == 2) {
            navigation_line2.classList.remove("_active_line");
            navigation_line3.classList.add("_active_line");

            console.log('113');
        } else if (line_page == 3) {
            navigation_line3.classList.remove("_active_line");
            navigation_line4.classList.add("_active_line");
            console.log('114');
        } else if (line_page > 4) {
            line_page = 0;
        }
        if (line_score > 1700) {
            line_score = 0;
            slider_cards.style.right = line_score + "px";
            line_page = 0;
        }
        console.log(line_score, line_page);

    })
    LEFT_SLIDE.addEventListener('click', () => {
        if (line_score > 0) {
            line_score -= 500;
            slider_cards.style.right = line_score + "px";
        }
        if (line_score < 0) {
            line_score = 500;
            line_score = line_score * 3;
            slider_cards.style.right = line_score + "px";
            line_page = 4;

        }
        if (line_page == 0) {
            line_score = 500;
            line_score = line_score * 3;
            slider_cards.style.right = line_score + "px";
            line_page = 4;
            console.log('11');
            navigation_line1.classList.remove("_active_line");
            navigation_line4.classList.add("_active_line");
            console.log('11224323');
        }
        if (line_page == 1) {
            navigation_line2.classList.remove("_active_line");
            navigation_line1.classList.add("_active_line");
            console.log('112');
        } else if (line_page == 2) {
            navigation_line3.classList.remove("_active_line");
            navigation_line2.classList.add("_active_line");
            console.log('113');
        } else if (line_page == 3) {
            navigation_line4.classList.remove("_active_line");
            navigation_line3.classList.add("_active_line");
            console.log('114');
        } else if (line_page > 4) {
            line_page = 0;
        }
        line_page--
    })



    const navigation_line5 = document.querySelector('.navigation_lines_line5');
    const navigation_line6 = document.querySelector('.navigation_lines_line6');
    const navigation_line7 = document.querySelector('.navigation_lines_line7');
    const LEFT_SLIDE_adaptive = document.getElementById('left_slider_adaptive');
    const RIGHT_SLIDE_adaptive = document.getElementById('right_slider_adaptive');
    const slider_cards_adaptive = document.querySelector('.slider_cards_adaptive');
    RIGHT_SLIDE_adaptive.addEventListener('click', () => {

        if (line_page == 3) {
            line_page = 0;
            line_score = 0;
            slider_cards_adaptive.style.right = line_score + "px";
        }
        line_score += 400;
        slider_cards_adaptive.style.right = line_score + "px";
        line_page++;

        if (line_page == 3) {
            line_page = 1;
            console.log('11');
            navigation_line7.classList.remove("_active_line");
            navigation_line5.classList.add("_active_line");

        } else if (line_page == 1) {
            navigation_line5.classList.remove("_active_line");
            navigation_line6.classList.add("_active_line");

            console.log('112');
        } else if (line_page == 2) {
            navigation_line6.classList.remove("_active_line");
            navigation_line7.classList.add("_active_line");

            console.log('113');
        } else if (line_page > 3) {
            line_page = 0;
        }
        if (line_score > 840) {
            line_score = 0;
            slider_cards_adaptive.style.right = line_score + "px";
            line_page = 0;
        }
        console.log(line_score, line_page);

    })
    LEFT_SLIDE_adaptive.addEventListener('click', () => {
        if (line_score > 0) {
            line_score -= 400;
            slider_cards_adaptive.style.right = line_score + "px";
        }
        if (line_score < 0) {
            line_score = 400;
            line_score = line_score * 2;
            slider_cards_adaptive.style.right = line_score + "px";
            line_page = 4;

        }
        if (line_page == 0) {
            line_score = 400;
            line_score = line_score * 2;
            slider_cards_adaptive.style.right = line_score + "px";
            line_page = 3;
            console.log('11');
            navigation_line5.classList.remove("_active_line");
            navigation_line7.classList.add("_active_line");
            console.log('11224323');
        }
        if (line_page == 1) {
            navigation_line6.classList.remove("_active_line");
            navigation_line5.classList.add("_active_line");
            console.log('112');
        } else if (line_page == 2) {
            navigation_line7.classList.remove("_active_line");
            navigation_line6.classList.add("_active_line");
            console.log('113');
        } else if (line_page > 3) {
            line_page = 0;
        }
        line_page--
    })
})