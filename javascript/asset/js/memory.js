const memoryWrap = document.querySelector('.memory__wrap');
const memoryCard = memoryWrap.querySelectorAll('.cards li');
const startBtn = document.querySelector('.memory__wrap button.start');

let cardOne = '';
let cardTwo = '';
let disableDeck = true;
let matched = 0;

let sound = [
    "../asset/audio/match.mp3",
    "../asset/audio/unmatch.mp3",
    "../asset/audio/up.mp3",
];
let soundMatch = new Audio(sound[0]);
let soundUnMatch = new Audio(sound[1]);
let soundUp = new Audio(sound[2]);
let startTime;
let endTime;
let memoryTID = 0;
let memoryTID2 = 0;

// 카드 뒤집기
function flipCard() {
    if (disableDeck) return;
    if (this === cardOne) return;

    let clickCard = this;
    clickCard.classList.add('flip');

    if (!cardOne) {
        cardOne = clickCard;
        disableDeck = false;
        return;
    }
    cardTwo = clickCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector('.back img').src;
    let cardTwoImg = cardTwo.querySelector('.back img').src;

    matchCards(cardOneImg, cardTwoImg);
}

// 카드 확인 (두개의 이미지 비교)
function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched === 8) {
            setTimeout(() => {
                endTime = new Date();
                soundUp.play();
                let playTime = Math.floor((endTime - startTime) / 1000);
                alert(`${playTime}초 만에 승리하셨습니다.`);
                document.querySelector('.memory__wrap .help').style.display = 'flex';
                document.querySelector('.memory__wrap .help .result').textContent = `당신의 점수는 ${100 - playTime}`;
            }, 300);
        }
        soundMatch.play();
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = "";
        cardTwo = "";
        disableDeck = false;
    }
    else {
        soundUnMatch.play();
        cardOne.classList.add('shakeX');
        cardTwo.classList.add('shakeX');
        setTimeout(() => {
            cardOne.classList.remove('shakeX', 'flip');
            cardTwo.classList.remove('shakeX', 'flip');
            cardOne = "";
            cardTwo = "";
            disableDeck = false;
        }, 1300);
    }
}

// 카드 섞기
function shuffleCard() {
    document.querySelector('.memory__wrap .help').style.display = 'none';

    cardOne = "";
    cardTwo = "";
    matched = 0;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,];
    let result = arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    memoryCard.forEach((card, index) => {
        card.classList.remove('flip');

        memoryTID = setTimeout(() => {
            card.classList.add('flip');
        }, index * 200);

        memoryTID2 = setTimeout(() => {
            card.classList.remove('flip');
            disableDeck = false;
            startTime = new Date();
        }, memoryCard.length * 200 + 1000);

        let imgTag = card.querySelector('.back img');
        imgTag.src = `../asset/memory/0${result[index]}.png`;
    });

    // 카드 클릭
    memoryCard.forEach(card => {
        card.addEventListener('click', flipCard);
    });
}
startBtn.addEventListener('click', shuffleCard);

// 도중 껐을 때
function runMemoryGame() {
    document.querySelector('.memory__wrap .help .result').textContent = ``;
    document.querySelector('.memory__wrap .help').style.display = 'flex';
    clearTimeout(memoryTID);
    clearTimeout(memoryTID2);
    memoryCard.forEach(card => {
        card.removeEventListener('click', flipCard);
    });
}