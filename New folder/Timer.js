let input = document.querySelector('.timer');
let btnTimer = document.querySelector('.btn-timer');
let theTimer = document.querySelector('.theTimer');

input.addEventListener('keypress', function () {
    if (event.key === "Enter"){
    let inputValue = +input.value;
    theTimer.textContent = inputValue;

   
    for (let i = inputValue; i >= 0; i--) {
        setTimeout(() => {
            theTimer.textContent = i;          
        }, 1000 * (inputValue - i));
    }}
});

document.querySelector('.container').style.animation-duration === input