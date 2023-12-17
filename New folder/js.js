let userName
let userPassword





function blockOrNone() {
    let logIn = document.querySelector('.logIn');
    let signUp = document.querySelector('.signUp');

    let logInDisplay = window.getComputedStyle(logIn).display;
    let signUpDisplay = window.getComputedStyle(signUp).display;

    if (logInDisplay === "block" && signUpDisplay === "none") {
        logIn.style.display = "none";
        signUp.style.display = "block";
        let newAccount = document.querySelector('.goToSignUp');
        newAccount.style.display = "none"

    } else {
        logIn.style.display = "block";
        signUp.style.display = "none";
    }
}


function createNewAccount() {
    userName = document.querySelector('.inputUserName').value
    userPassword = document.querySelector('.inputPassword').value
    console.log(userName, userPassword)
    disableButton()
    alert("you are in")
    return userName + userPassword

}


function disableButton() {
    document.querySelector('.create').disabled = true
}


function logIn() {
    let isUserName = document.querySelector('.userName').value
    let isUserPassword = document.querySelector('.password').value

    if (isUserName === userName && isUserPassword === userPassword) {
        alert("you in")
    } else {
        alert("user name or password are not correct")
    }
}


function ifForgat() {
    let p = document.querySelector('.thisIsPassword')
    let ifUserName = document.querySelector('.ifUserName').value
    if (ifUserName === userName) {
        p.textContent = userPassword
        setTimeout(() => {
            p.style.display = "none"
        }, 3000);


        
     
    }
}

function goToForgat() {
    let logIn = document.querySelector('.logIn');
    let signUp = document.querySelector('.signUp');

logIn.style.display = "none"
signUp.style.display = "none"

let forgat = document.querySelector(".forgat")
forgat.style.display = "block"



}
