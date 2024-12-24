// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s) => s.classList.remove('active'));
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });
});
