const modal = document.querySelector('.modal');
const icon = document.querySelectorAll('.icon');
const xbutton = document.querySelector('.xbutton');

icon[0].addEventListener('click', () => {
    modal.style.display= 'block';
});
icon[1].addEventListener('click', () => {
    modal.style.display= 'block';
});

xbutton.addEventListener('click', () => {
    modal.style.display= 'none';
});