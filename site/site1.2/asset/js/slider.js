const sliderWrap = document.querySelector('.slider__wrap');
const sliderImg = document.querySelector('.slider__img');
const sliderInner = document.querySelector('.slider__inner');
const slider = document.querySelectorAll('.slider');

let currentIndex = 0;
let sliderCount = slider.length;
let sliderWidth = sliderImg.offsetWidth; // 이미지 가로 값 구하는 메서드
let sliderClone = sliderInner.firstElementChild.cloneNode(true); // 첫번째 이미지 복사
sliderInner.appendChild(sliderClone); // 첫번째 이미지를 마지막에 넣어줌

function sliderEffect() {
    currentIndex++;
    sliderInner.style.transition = "all 0.6s";
    sliderInner.style.transform = `translateX(${-sliderWidth * currentIndex}px)`;

    // 마지막 사진에 왔을 때
    if (currentIndex === sliderCount) {
        setTimeout(() => {
            sliderInner.style.transition = "0s";
            sliderInner.style.transform = `translateX(0px)`;
        }, 700);
        currentIndex = 0;
    }
}
setInterval(sliderEffect, 1000);