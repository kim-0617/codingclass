const cardMenu1 = document.querySelector('#cardType h2 .first');
const cardMenu2 = document.querySelector('#cardType h2 .second');
const cardCont1 = document.querySelector('#cardType .cont1');
const cardCont2 = document.querySelector('#cardType .cont2');
cardCont1.style.display = 'block';
cardCont2.style.display = 'none';

cardMenu1.addEventListener('click', (e) => {
    e.preventDefault();
    cardMenu1.classList.add('active');
    cardMenu2.classList.remove('active');

    if(cardMenu1.classList.contains('active')){
        cardCont1.style.display = 'block';
        cardCont2.style.display = 'none';
    }
    
    else if(cardMenu2.classList.contains('active')){
        cardCont2.style.display = 'block';
        cardCont1.style.display = 'none';
    }
});

cardMenu2.addEventListener('click', (e) => {
    e.preventDefault();
    cardMenu2.classList.add('active');
    cardMenu1.classList.remove('active');

    if(cardMenu1.classList.contains('active')){
        cardCont1.style.display = 'block';
        cardCont2.style.display = 'none';
    }
    
    else if(cardMenu2.classList.contains('active')){
        cardCont2.style.display = 'block';
        cardCont1.style.display = 'none';
    }
});

