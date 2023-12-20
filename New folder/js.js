let userName
let userPassword
let logInd
let signUpd
let forgatd



function blockOrNone(location, not, not1) {
    console.log(location, not , not1)
    let logIn = document.querySelector('.logIn');
    let signUp = document.querySelector('.signUp');
    let forgat = document.querySelector('.forgat');

    forgatd = window.getComputedStyle(forgat).display;
    logInd = window.getComputedStyle(logIn).display;
    signUpd = window.getComputedStyle(signUp).display;

    location.style.display = "block";
    not.style.display = "none";
    not1.style.display = "none";
}



// blockOrNone(forgat, logIn, signUp)
// blockOrNone(signUp, logIn, forgat)
// blockOrNone(logIn, signUp, forgat)


// function blockOrNone() {
//     let logIn = document.querySelector('.logIn');
//     let signUp = document.querySelector('.signUp');

//     let logInDisplay = window.getComputedStyle(logIn).display;
//     let signUpDisplay = window.getComputedStyle(signUp).display;

//     if (logInDisplay === "block" && signUpDisplay === "none") {
//         logIn.style.display = "none";
//         signUp.style.display = "block";
//         let newAccount = document.querySelector('.goToSignUp');
//         newAccount.style.display = "none"

//     } else {
//         logIn.style.display = "block";
//         signUp.style.display = "none";
//     }
// }


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

function logInfn() {
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

// function goToForgat() {
//     let logIn = document.querySelector('.logIn');
//     let signUp = document.querySelector('.signUp');

// logIn.style.display = "none"
// signUp.style.display = "none"

// let forgat = document.querySelector(".forgat")
// forgat.style.display = "block"



// }
