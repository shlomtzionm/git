// First List
let list1 = {
  textInput: document.querySelector(".textInput"),
  dateInput: document.querySelector(".dateInput"),
  numberOfItems: document.querySelector('.number'),
  theList: document.querySelector(".theList"),
  saveBtn: document.querySelector(".saveBtn"),
  lastItem: document.querySelector('.lastItem'),
  clear: document.querySelector('.clearList'),
  itemsArray: getLocalStorage("list1"), 
  key:"list1",
  counter: 0
};

// Second List
let list2 = {
  textInput: document.querySelector(".textInput2"),
  dateInput: document.querySelector(".dateInput2"),
  numberOfItems: document.querySelector('.number2'),
  theList: document.querySelector(".theList2"),
  saveBtn: document.querySelector(".saveBtn2"),
  lastItem: document.querySelector('.lastItem2'),
  clear: document.querySelector('.clearList2'),
  itemsArray: getLocalStorage("list2"), 
  key:"list2",
  counter: 0
};

list1.saveBtn.addEventListener("click", () => saveTOlIST(list1));
list2.saveBtn.addEventListener("click", () => saveTOlIST(list2));

list1.clear.addEventListener('click',() => clearList(list1))
list2.clear.addEventListener('click',() => clearList(list2))


init(list1);
init(list2);


function saveTOlIST(currentList){
  if(currentList.textInput.value !== "" && currentList.dateInput.value !== ""){
    let text = currentList.textInput.value;
    let date = currentList.dateInput.value;
    let item = {
      text,
      date,
    };
    currentList.itemsArray.push(item);
    createHtmlLi(item ,currentList);
    saveAtLocalStorage(currentList);
  
    currentList.textInput.value = "";
    currentList.dateInput.value = "";
    countElement (currentList)
    formatDateTime(currentList)
}    
}
function createHtmlLi(item, currentList) {
 
  let itemDiv = document.createElement("li");
  let atribute = currentList.counter++
  itemDiv.setAttribute("date-counter",atribute)
   

  let textElement = document.createElement("span");
  textElement.innerHTML = item.text;
  

  let dateElement = document.createElement("span");
  dateElement.classList.add("date");
  dateElement.innerHTML = item.date;

  let deleteElement = document.createElement('button')
deleteElement.innerHTML = "delete"


  itemDiv.appendChild(textElement);
  itemDiv.appendChild(dateElement);
  itemDiv.appendChild(deleteElement)
  currentList.theList.appendChild(itemDiv);
  
  
  deleteElement.addEventListener('click',function(){
  currentList.itemsArray.splice(atribute,1)
itemDiv.remove();
countElement(currentList)
saveAtLocalStorage(currentList)
})

  return currentList.itemsArray
  }


function saveAtLocalStorage(currentList) {
  localStorage.setItem(currentList.key ,JSON.stringify(currentList.itemsArray));
}

function getLocalStorage(currentList) {
  if (!localStorage[currentList]) {
    return [];
  }
  return JSON.parse(localStorage[currentList]);
}

function init(currentList) { 
  if (currentList.itemsArray.length > 0) {
    currentList.itemsArray.forEach((element) => {
      createHtmlLi(element, currentList);
    });
countElement(currentList) 
  
}
}

function clearList (currentList){
    localStorage.removeItem(currentList.key)
    currentList.itemsArray = []
    currentList.theList.innerHTML = ""
    countElement (currentList)
}

function countElement (currentList){
   currentList.numberOfItems.innerText = currentList.itemsArray.length

}

function formatDateTime(currentList) {
    let d = new Date()
    currentList.lastItem.innerHTML = moment(d).format('DD/MM/YY HH:mm:ss');
return currentList.lastItem  
}


