let word = document.querySelector(".word");
let wordArray = [];
let letters = document.querySelector(".letters");
let ABC = "abcdefghijklmnopqrstuvwxyz";

function ChangeWordToArray(word) {
  wordArray = word.split("");
  console.log(wordArray);
}
ChangeWordToArray("hi hi");

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
    let box = document.createElement("button");
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
    this.disabled = true
    
  });
});

let parts = document.querySelectorAll(".man");
let counter = 0;
function handleClick(clickedLetter) {
  let letterFound = false;
  wordArray.forEach((letter, index) => {
    if (letter === clickedLetter) {
      wordBoxs[index].innerHTML = clickedLetter;
      letterFound = true;
    }
  });
  if (!letterFound) {
    if (!(counter === parts.length)) {
      parts[counter].style.display = "block";
      counter++;
    } else {
    gameOver();
    }
  }
  win();
}

function win() {
  const guessedWordArray = Array.from(wordBoxs).map(box => box.innerHTML);
  
  const guessedWord = guessedWordArray.join("").replaceAll(' ', '');
  const originalWord = wordArray.join("").replaceAll(' ', '');
  
  if (guessedWord === originalWord) {
    alert("Congratulations! You've won!");
    disableAll();
  }
}

function disableAll(){
  letterBoxs.forEach((letter)=>{
    letter.disabled = true;
   });
}

function gameOver() {
  disableAll();
 alert("Game Over");
 counter = 0
 parts.forEach((part) => {
      part.classList.add(`game-over${counter}`);
    counter++
    })
let dots = document.querySelectorAll(".dot")
dots.forEach((dot)=>{
  dot.style.display = "block"
  dot.classList.add('red')
})    
}

