let textInput = document.querySelector(".textInput");
let dateInput = document.querySelector(".dateInput");
let theList = document.querySelector(".theList");
let save_btn = document.querySelector(".save-btn");

let itemsArray = getLocalStorage();
init();

save_btn.addEventListener("click", function () {
  let text = textInput.value;
  let date = dateInput.value;
  let item = {
    text,
    date,
  };
  itemsArray.push(item);
  createHtmlLi(item);
  saveAtLocalStorage(itemsArray);

  textInput.value = "";
  dateInput.value = "";
  countElement ()

});

function createHtmlLi(item) {
  let itemDiv = document.createElement("li");

  let textElement = document.createElement("span");
  textElement.innerHTML = item.text;
  itemDiv.appendChild(textElement);

  let dateElement = document.createElement("span");
  dateElement.classList.add("date");
  dateElement.innerHTML = item.date;


  itemDiv.appendChild(dateElement);
  theList.appendChild(itemDiv);
}

function saveAtLocalStorage(itemsArray) {
  localStorage["item"] = JSON.stringify(itemsArray);
}

function getLocalStorage() {
  if (!localStorage["item"]) {
    return [];
  }
  return JSON.parse(localStorage["item"]);
}

function init() {
  if (itemsArray.length > 0) {
    itemsArray.forEach((element) => {
      createHtmlLi(element);
    });
  }
}

let clear = document.querySelector('.clearList')
clear.addEventListener('click', function(){
    localStorage.clear()
    itemsArray = ""
    theList.innerHTML = ""

})

let numberOfItems = document.querySelector('.number')
function countElement (){
    let counter = 0 
itemsArray.forEach(element => {
    counter++
});
    numberOfItems.innerText = counter

}
