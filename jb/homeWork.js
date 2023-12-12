function sameOrNot() {
    let correctEmail = "idanmagl@gmail.com"
    let correctPassword = "im1234$$"
    let emailFromHtml = document.querySelector('.emailInput').value
    let passwordInput = document.querySelector('.passwordInput').value
    
    if(correctEmail === emailFromHtml && correctPassword === passwordInput) {
        window.location.href = 'another.html'
    } else {document.write("email or password are worng")}

}


function getHelp(){
    window.location.href = "help.html"
}

function checkPassword (){
    let correctEmail = "danmagled@gmail.com"
    let emailFromHtml = document.querySelector('.helpInput').value
    if (correctEmail === emailFromHtml) {
        correctEmail.textContent = ("im1234$$")
        document.write("im1234$$")

    } else{
        document.write("not same email")
    }
}