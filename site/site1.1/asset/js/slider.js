const sliderWrap = document.querySelector('.slider__wrap');
const sliderImg = sliderWrap.querySelector('.slider__img');
const slider = sliderWrap.querySelectorAll('.slider');

let currentIndex = 0; // 현재 보이는 이미지
let sliderCount = slider.length; // 이미지 갯수

setInterval(() => {
    let nextIndex = currentIndex + 1;

    slider[currentIndex % slider.length].style.opacity = "0";
    slider[nextIndex % slider.length].style.opacity = "1";

    currentIndex++;
}, 1000);
