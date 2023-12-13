function sameOrNot() {
    let correctEmail = "idanmagl@gmail.com"
    let correctPassword = "im1234$$"
    
    let emailFromHtml = document.querySelector('.emailInput').value
    let passwordInput = document.querySelector('.passwordInput').value
    
    if(correctEmail === emailFromHtml && correctPassword === passwordInput) {
        window.location.href = 'another.html'
    } else {
        let didntLog = document.createElement('p')
        didntLog.textContent = 'please try again'
        document.body.appendChild(didntLog)
        document.querySelector('.emailInput').value = ""
        document.querySelector('.passwordInput').value = ""
    }
}


function getHelp(){
    window.location.href = "help.html"
}

function checkPassword (){
    let correctEmail = "danmagled@gmail.com"
    let emailFromHtml = document.querySelector('.helpInput').value
    if (emailFromHtml === "") {
        getHelp()
    } else if ( correctEmail === emailFromHtml) {
        let second = document.createElement("div")
        second.textContent = "im1234$$"
        document.body.appendChild(second)
        if (second){
        second.style.display ="block"
           setTimeout(() => {
                second.style.display = "none";
            } , 2000);
            console.log("working")
        }
        
        
    } else{
        document.write("try again")
    }
    
}

function back(){
    window.location.href = "homeWwork.html"
}