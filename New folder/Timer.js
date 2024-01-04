
let input = document.querySelector('.timer');

input.addEventListener('keypress', function () {
  if (event.key === "Enter") {
    let inputValue = +input.value;

    for (let i = inputValue; i >= 0; i--) {
      setTimeout(() => {
        input.value = i; 
      }, 1000 * (inputValue - i));
    }
  }
});
