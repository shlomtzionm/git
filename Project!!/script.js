let inputText = document.querySelector(".inputText");
let inputDate = document.querySelector(".inputDate");
let inputTime = document.querySelector(".inputTime");
let saveButton = document.querySelector(".saveButton");
let clearButton = document.querySelector(".clearButton");
let taskContainer = document.querySelector(".taskContainer");
let taskArray = getFromLocalStorage();
let form = document.querySelector('.form')


form.addEventListener('keypress', function(event){
    if (event.key === "Enter"){
event.preventDefault()
  }
})

saveButton.addEventListener("click", function () {
    if (inputText.value !== "" && inputDate.value !== "" && inputTime.value !== ""){
  collectInputs();
  createDiv(taskArray[taskArray.length - 1]);
  saveToLS();
  clearForm()
}})

clearButton.addEventListener('click', function(){
    clearAll()
})

function collectInputs() {
  let taskObj = {
    taskText: inputText.value,
    taskDate: inputDate.value,
    taskTime: inputTime.value,
    isStrike: false
  };

  taskArray.push(taskObj);

}

function createDiv(taskObj){
   let  TaskNote = document.createElement("div")
   TaskNote.classList = "animation"
   
   let textDiv = document.createElement("textarea")
   textDiv.readOnly = true;
   textDiv.innerHTML=taskObj.taskText
   
   let dateDiv = document.createElement("div")
   dateDiv.innerHTML = taskObj.taskDate
   
   let timeDiv = document.createElement("div")
   timeDiv.innerHTML = taskObj.taskTime

   taskContainer.appendChild(TaskNote)
   TaskNote.appendChild(textDiv)
   TaskNote.appendChild(dateDiv) 
   TaskNote.appendChild(timeDiv)

   editList(TaskNote, taskObj)
   
   TaskNote.classList.add("taskDiv")
textDiv.classList.add("text")
dateDiv.classList.add("date")
timeDiv.classList.add("time")



}

function saveToLS() {
    localStorage["taskArray"] = JSON.stringify(taskArray);
  }

function clearAll(){
   taskArray = []
   taskContainer.innerHTML = ""
   localStorage.clear()

}

function getFromLocalStorage(){
    if(localStorage["taskArray"]){
return JSON.parse(localStorage["taskArray"])
    }
    return []
}

function clearForm (){
    inputText.value = ""
 inputDate.value = ""
 inputTime.value = ""
}

function deleteTask(TaskNote){
    let taskToRemove = taskArray.indexOf(TaskNote)
    
    TaskNote.remove()
    taskArray.splice(taskToRemove,1)
}

function init() {
    taskArray.forEach(task => {
        createDiv(task);
        if (task.isStrike) {
            let TaskNote = taskContainer.lastChild; 
            let children = TaskNote.querySelectorAll('.text, .date, .time');
            children.forEach(element => {
                element.style.textDecoration = "line-through";
                element.style.opacity = 0.5;
            });
        }
    });
}

function editList(TaskNote, taskObj) {
    let list = document.createElement('div');
    TaskNote.appendChild(list);
    list.classList.add('list');

    let deleteItem = document.createElement('span');
    deleteItem.classList = "bi bi-trash3";

    let strikethroughBtn = document.createElement('span');
    strikethroughBtn.classList = "bi bi-type-strikethrough";

    list.appendChild(deleteItem);
    list.appendChild(strikethroughBtn);

    deleteItem.addEventListener('click', function () {
        deleteTask(TaskNote);
        saveToLS();
    });
    
    strikethroughBtn.addEventListener("click", function () {
         strikethrough(TaskNote, taskObj);
         saveToLS()
    });
}

function strikethrough(TaskNote, taskObj) {
    let children = TaskNote.querySelectorAll('.text, .date, .time');

    if (taskObj.isStrike) {
        children.forEach(element => {
            element.style.textDecoration = "none"; 
            element.style.opacity = 1;
        });
    } else {
        children.forEach(element => {
            element.style.textDecoration = "line-through";
            element.style.opacity = 0.5;
        });
    }

    taskObj.isStrike = !taskObj.isStrike; 
    return taskObj.isStrike;
}

init()