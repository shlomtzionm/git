let Name = document.querySelector(".name");
let grade = document.querySelector(".grade");
let p = document.querySelector('.final')
let arraySum = []

function finalGrade() {
  let length = Name.value.length;
let sum = +grade.value + (length*2)
if (sum > 100 ){
    sum = 100} 
p.innerHTML = sum

arraySum.push(sum)
let span = document.querySelector('.array') 
span.innerHTML = arraySum


}    


