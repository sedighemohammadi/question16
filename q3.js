// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const closebutton = document.querySelector('.ri-close-line');
const massage = document.querySelector('.massage');
closebutton.addEventListener('click' , ()=>{
    massage.style.display = 'none'
})

