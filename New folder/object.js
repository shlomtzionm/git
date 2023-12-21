let list = []
let gradeIsHigher = []



function addToList(){
    let student = {
        studentName : "" ,
        studentGrade : 0
    }

    let theName = document.querySelector('.nameInput').value
    let grade = +document.querySelector('.gradeInput').value
   
student.studentName = theName
student.studentGrade = grade

list.push(student)
if (student.studentGrade > document.querySelector('.highest').value){
showList(student)
}
}



function showList(student){
gradeIsHigher.push(student)
displayGradeIsHigher()
}

function displayGradeIsHigher() {
    let output = "";
    for (let i = 0; i < gradeIsHigher.length; i++) {
        output += `${gradeIsHigher[i].studentName}: ${gradeIsHigher[i].studentGrade}`;
        if (i < gradeIsHigher.length - 1) {
            output += ', ';
        }
    }
    document.querySelector('.gradeIsHigher').textContent = output;
}