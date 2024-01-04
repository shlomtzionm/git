
//toDOlIST
let list = document.querySelector(".toDoList");
let addToList = document.querySelector(".addToList");
let task = document.querySelector(".task");
let count = 0;
let newElement

addToList.addEventListener("click", function () {
  if (task.value !== "") {
    newElement = document.createElement("li");
    newElement.innerText = task.value;
    list.appendChild(newElement)
    newElement.classList.add(count);
    count++;
    task.value = ""
    return newElement
  }
 
  });
  


