let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");

let numbers = ""; 

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.value === "=") {
      calc();
    }else if(button.value === "c"){
      clear()
    } else {
      numbers += button.value;
      screen.value = numbers; 
        }
  });
});

function calc() {
  if (numbers !== "") { 
        let result = eval(numbers);  
    screen.value = result; 
    numbers = ""; 
  }
}
function clear(){
  numbers = ""
  screen.value = ""
}
