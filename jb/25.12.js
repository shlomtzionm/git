// let userName = localStorage["userName"]
// let familyName = localStorage["family"]
let inputName = document.querySelector('.name')
let inputFamily = document.querySelector('.family')

document.querySelector('.btn').addEventListener('click', function(){
    userName = inputName.value
    familyName = inputFamily.value
localStorage["userName"] = userName
localStorage["family"] = familyName
})

document.querySelector('.btn-clear').addEventListener('click', function(){
    localStorage.clear();
})

document.querySelector('.delete-family').addEventListener('click', function(){
    localStorage.removeItem("family")
})

document.querySelector('.delete-name').addEventListener('click', function(){
    localStorage.removeItem("userName")
})