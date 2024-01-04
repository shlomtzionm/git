let userName
let userPassword


let logIn = document.querySelector('.logIn');
let signUp = document.querySelector('.signUp');
let forgot = document.querySelector('.forgot');


function blockOrNone(location, not, not1) {
    location.style.display = "block";
    not.style.display = "none";
    not1.style.display = "none";

}



function createNewAccount() {
    userName = document.querySelector('.inputUserName').value
    userPassword = document.querySelector('.inputPassword').value
    disableButton()
    if(userName || userPassword === ""){
        alert("try again")
    }else{
    alert("you are in")}
    return userName + userPassword

}


function disableButton() {
    document.querySelector('.create').disabled = true
}

function logInfn() {
    let isUserName = document.querySelector('.userName').value
    let isUserPassword = document.querySelector('.password').value
if(isUserName || isUserPassword === ""){alert("try again") }
else if (isUserName === userName && isUserPassword === userPassword) {
        alert("you in")
    } else {
        alert("user name or password are not correct")
    }
}


function ifforgot() {
    let p = document.querySelector('.thisIsPassword')
    let ifUserName = document.querySelector('.ifUserName').value
    if (ifUserName === userName) {
        p.textContent = userPassword
        setTimeout(() => {
            p.style.display = "none"
        }, 3000);


        
     
    }
}

