// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
const heartIcon = document.querySelector('.cards__card__img__icon i');
const counter = document.getElementById('counter');
let clickCount = 100;

heartIcon.addEventListener('click', function() {
    if (heartIcon.style.color === 'red') {
        heartIcon.style.color = '';
        clickCount--;
    } else {
        heartIcon.style.color = 'red';
        clickCount++;
    }
    counter.textContent = clickCount;
});