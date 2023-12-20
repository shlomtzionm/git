let list = []

function addToList(){

    let theName = document.querySelector('.nameInput').value
    let grade = document.querySelector('.gradeInput').value
   

    let students = {
        studentName : "" ,
        studentGrade : ""
    }
students.studentName = theName
students.studentGrade = grade

list.push(students)
if (students.studentGrade > document.querySelector('.highest').value){
showList()
}

function showList(){
    let showList = document.querySelector('.list')
    showList.innerHTML = ""

list.forEach(function(student){
    showList.textContent += (student.studentName+" "+student.studentGrade )
})
}
}