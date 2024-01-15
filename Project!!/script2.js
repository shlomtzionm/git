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
  };

  taskArray.push(taskObj);

}


function createDiv(task){
   let  TaskNote = document.createElement("div")
   TaskNote.classList = "animation"
   
   let textDiv = document.createElement("textarea")
   textDiv.readOnly = true;
   textDiv.innerHTML=task.taskText
   
   let dateDiv = document.createElement("div")
   dateDiv.innerHTML = task.taskDate
   
   let timeDiv = document.createElement("div")
   timeDiv.innerHTML = task.taskTime

   taskContainer.appendChild(TaskNote)
   TaskNote.appendChild(textDiv)
   TaskNote.appendChild(dateDiv) 
   TaskNote.appendChild(timeDiv)

   editList(TaskNote)
   
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


function init (){
    taskArray.forEach(task => {
        createDiv(task)        
    });
}
init()

function editList(TaskNote){
    let list = document.createElement('div')
    TaskNote.appendChild(list)
    list.classList.add('list')

    let deleteItem = document.createElement('span')
  deleteItem.classList = "bi bi-trash3"
    
    let strikethroughBtn = document.createElement('span')
    strikethroughBtn.classList = "bi bi-type-strikethrough"
    
    list.appendChild(deleteItem)
    list.appendChild(strikethroughBtn)
  
    
deleteItem.addEventListener('click',function(){
    deleteTask(TaskNote)
    saveToLS()
})

strikethroughBtn.addEventListener("click", function(){
strikethrough(TaskNote)
})

}

function strikethrough(TaskNote) {
    let children = TaskNote.querySelectorAll('.text, .date, .time');
    children.forEach(element => {
        element.style.textDecoration = "line-through";
    });
}