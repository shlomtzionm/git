let word = document.querySelector(".word");
let wordArray = [];
let letters = document.querySelector(".letters");
let ABC = "abcdefghijklmnopqrstuvwxyz";

function ChangeWordToArray(word) {
  wordArray = word.split("");
  console.log(wordArray);
}
ChangeWordToArray("guy even");

function printWordPlace() {
  for (i = 0; i < wordArray.length; i++) {
    let w = document.createElement("div");
    word.appendChild(w);
    w.classList.add("wordBox");
    if (wordArray[i] === " ") {
      w.style.border = "none";
    }
  }
}
printWordPlace();

function printABC() {
  for (i = 0; i < ABC.length; i++) {
    let box = document.createElement("span");
    box.classList.add("letterBox");
    box.innerHTML = ABC[i];
    letters.appendChild(box);
  }
}
printABC();

let letterBoxs = document.querySelectorAll(".letterBox");
let wordBoxs = document.querySelectorAll(".wordBox");

letterBoxs.forEach((letter) => {
  letter.addEventListener("click", function () {
    const clickedLetter = this.innerHTML;
    handleClick(clickedLetter);
  });
});
let parts = document.querySelectorAll(".man")
let counter = 0
function handleClick(clickedLetter) {
  
  

  let letterFound = false;
  wordArray.forEach((letter, index) => {
      if (letter === clickedLetter) {
          wordBoxs[index].innerHTML = clickedLetter;
          letterFound = true;
      }
  });
if(counter> parts.length){console.log("game over") }
  else if (!letterFound  ) {
      parts[counter].style.display = "block";
      counter++;
    }
}









