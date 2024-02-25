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
      if(wordArray[i] === " "){
        w.style.border = "none"
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

function indexOf(letter, wordArray, index) {

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === letter) {
      index.push(i);
    }
  }
  return index
}

function checkIfInclude(wordArray, letter,index) {
  letter = letter.textContent.toLowerCase();

  if (wordArray.includes(letter)) {
    indexOf(letter, wordArray, index);
    console.log(111)
  } else {
    console.log(222);
  }
}


function printIfTrue(index, letter){
if (index.length > 1){
    index.forEach(element => {
       wordBoxs[element].innerHTML = letter.innerHTML
    });
}else{
    wordBoxs[index].innerHTML = letter.innerHTML
}
}

function handleClick(event) {
  let letter = event.target; // Get the clicked letter element
  let index = [];
  checkIfInclude(wordArray, letter, index);
  printIfTrue(index, letter);

  letter.removeEventListener("click", handleClick);
}

letterBoxs.forEach((letter) => {
  letter.addEventListener("click", handleClick);
});



