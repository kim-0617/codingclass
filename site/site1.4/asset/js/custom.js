// 이미지 슬라이드
const sliderImg = document.querySelector('.slider__img');
const sliderInner = document.querySelector('.slider__inner');
const sliderClone = sliderInner.firstElementChild.cloneNode(true);
sliderInner.appendChild(sliderClone);
const slider = document.querySelectorAll('.slider');
const sliderCount = slider.length;

let currentIndex = 0;

setInterval(() => {
    currentIndex++;
    sliderInner.style.transition = "all 0.6s";
    sliderInner.style.transform = `translateX(${-1100 * currentIndex}px)`;
    if(currentIndex === sliderCount - 1) {
        setTimeout(() => {
            sliderInner.style.transition = "0s";
            sliderInner.style.transform = `translateX(0px)`;
        }, 700);
        currentIndex = 0;
    }
}, 1000);

// 탭메뉴
const tapBtn = document.querySelectorAll('.notice__inner .left .top h3 a');
const tapMenu = document.querySelectorAll('.subMenu');

tapBtn.forEach((a, idx) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        tapBtn.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
        tapMenu.forEach((al) => {
            al.classList.remove('active');
        });
        tapMenu[idx].classList.add('active');
    });
});