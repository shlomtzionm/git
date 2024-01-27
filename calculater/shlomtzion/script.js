let inputBox = document.querySelector('.inputBox')
let numbers = document.querySelectorAll('.number')
let eq = document.querySelector('.eq')
let minos = document.querySelector(".minos")
let plus= document.querySelector('.plus')
let clear = document.querySelector(".clear")
let dot = document.querySelector('.dot')
let date = 0 
let date2 = 0
let action 


numbers.forEach(element => {
    element.addEventListener('click', function(){
        console.log("zzz")
        inputBox.value += element.innerHTML
    })
});


minos.addEventListener('click', function(){
    date = inputBox.value
    inputBox.value= ""
    action = "-"
})

plus.addEventListener('click', function(){
    date = inputBox.value
    inputBox.value= ""
    action = "+"
})


eq.addEventListener('click',function(){
date2 = inputBox.value
inputBox.value = eval(date + action + date2)
})

dot.addEventListener('click',function(){
    inputBox.value += "."
})

clear.addEventListener('click',function(){
    inputBox.value = ""
})