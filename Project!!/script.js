let inputText = document.querySelector(".inputText");
let inputDate = document.querySelector(".inputDate");
let inputTime = document.querySelector(".inputTime");
let saveButton = document.querySelector(".saveButton");
let clearButton = document.querySelector(".clearButton");
let taskContainer = document.querySelector(".taskContainer");
let taskArray = getFromLocalStorage();


saveButton.addEventListener("click", function () {
    if (inputText.value !== "" || inputDate.value !== "" || inputTime.value !== ""){
  collectInputs();
  printToHTML(taskArray[taskArray.length - 1]);
  saveToLS();
  clearForm()
}});

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

function printToHTML(task) {
    createDiv(task.taskText, task.taskDate, task.taskTime);
}

    
function createDiv(task, date, time){
   let  div = document.createElement("div")
   div.classList.add("animation")
   
   let textDiv = document.createElement("textarea")
   textDiv.readOnly = true;
   textDiv.innerHTML = task
    
   let dateDiv = document.createElement("div")
   dateDiv.innerHTML = date
   
   let timeDiv = document.createElement("div")
   timeDiv.innerHTML = time


   let deleteButton = document.createElement('i')
   deleteButton.classList ="bi bi-x"
   deleteButton.classList.add("btnStyle")


   
  


   taskContainer.appendChild(div)
   div.appendChild(deleteButton)
    div.appendChild(textDiv)
    div.appendChild(dateDiv) 
    div.appendChild(timeDiv)
   

    div.classList.add("taskDiv")
textDiv.classList.add("text")
dateDiv.classList.add("date")
timeDiv.classList.add("time")

deleteButton.addEventListener('click',function(){
    deleteTask(div)
    saveToLS()
})

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

function deleteTask(div){
    let taskToRemove = taskArray.indexOf(taskArray.find(task => task.taskText === div.querySelector('.text').innerHTML &&
    task.taskDate === div.querySelector('.date').innerHTML &&
    task.taskTime === div.querySelector('.time').innerHTML))
    div.remove()
    taskArray.splice(taskToRemove,1)
}


function init (){
    taskArray.forEach(task => {
        printToHTML(task)        
    });
}
init()