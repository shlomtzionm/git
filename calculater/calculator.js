

let screen = document.querySelector('.screen');

function clickButton(value) {
  screen.value += value;
}

function calculate() {
  if (screen.value === '') {
    screen.value = '';
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
}

function clearScreen() {
  screen.value = '';
}
