let p = document.querySelector(".text");
let pArray = "I LOVE YOU GUY EVEN";

function writeWord(char, delay) {
  setTimeout(() => {
    p.textContent += char;
    if (char === pArray[pArray.length - 1]) {
      when(); // Call when() if the last character is appended
    }
  }, delay);
}

function writeText() {
  for (let i = 0; i < pArray.length; i++) {
    writeWord(pArray[i], 500 * i);
  }
}

function when() {
  let heart = document.querySelector(".heart");
  heart.style.animationName = "size"; // Corrected from animation_name to animationName
  
}


let heart = document.querySelector(".heart")
heart.addEventListener("click",function(){
let p = document.querySelector(".p").innerHTML = ""
  writeText()

})
