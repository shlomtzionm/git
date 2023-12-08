let delay = 1000



function hiYou(){
    let name = document.querySelector('.name')
    let secondP = document.querySelector('.secondP')
    secondP.textContent += name.value
    secondP.style.display = "block"
}


function changeColor(){
    let color = document.querySelector('.color').value
    let body = document.querySelector('body')
    body.style.backgroundColor = color
}

let isDark = false
function darkmode(){
    let x = "darkmode"
    let mode = document.querySelector('.darkmode')
    mode.textContent
    let colorbody =document.querySelector('body')
    if(isDark===false)
    {
        colorbody.style.backgroundColor = "#3B4F6F"
        colorbody.style.color = "white"
        isDark=true
        mode.textContent = "light"
    }
    else{
        colorbody.style.backgroundColor = "white"
        colorbody.style.color = "black"    
        isDark=false
        mode.textContent = "darkmode"

    }
    

}

