let textInput = document.querySelector(".textInput");
let dateInput = document.querySelector(".dateInput");
let numberOfItems = document.querySelector('.number')
let theList = document.querySelector(".theList");
let save_btn = document.querySelector(".save-btn");
let lastItem = document.querySelector('.lastItem')
let clear = document.querySelector('.clearList')
let itemsArray = getLocalStorage();

init();

save_btn.addEventListener("click",saveTOlIST)
clear.addEventListener('click',clearList)

function saveTOlIST(){
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
    formatDateTime()
}    
  
function createHtmlLi(item) {
  let itemDiv = document.createElement("li");
  let classN = itemDiv.classList.add(itemsArray.length)

  let textElement = document.createElement("span");
  textElement.innerHTML = item.text;
  

  let dateElement = document.createElement("span");
  dateElement.classList.add("date");
  dateElement.innerHTML = item.date;

  let deleteElement = document.createElement('button')
deleteElement.innerHTML = "delete"

itemDiv.appendChild(deleteElement)
  itemDiv.appendChild(textElement);
  itemDiv.appendChild(dateElement);
  theList.appendChild(itemDiv);
  
  
  deleteElement.addEventListener('click',function(){
  itemsArray.splice(classN,1)})

  return itemsArray
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
countElement()  
}
}

function clearList (){
    localStorage.clear()
    itemsArray = []
    theList.innerHTML = ""
    countElement ()
}

function countElement (){
    numberOfItems.innerText = itemsArray.length

}

function formatDateTime() {
    let d = new Date()
    lastItem.innerHTML = moment(d).format('DD/MM/YY HH:mm:ss');
return lastItem  
}


