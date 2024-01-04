let number = document.querySelector(".inputNumber");
let showButton = document.querySelector(".showButton");
let showAsterisk = document.querySelector(".showNumberOfAsterisk");
let asterisk = number.value;

showButton.addEventListener("click", function () {
  displayAsterisks(asterisk);
});

function displayAsterisks(number) {
  let asterisks = "";

  for (let i = 0; i < number; i++) {
    asterisks += "*";
  }
  addLine(asterisks);
  clearInput();
}
function clearInput() {
  document.querySelector(".inputNumber").value = "";
}

function addLine(asterisks) {
  let newElement = document.createElement("li");
  newElement.innerText = asterisks.innerText;
  showAsterisk.appendChild(newElement);
}
