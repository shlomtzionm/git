//sign up
let userEmail = document.querySelector(".email").value;
let userPassword = document.querySelector(".password").value;

//login
function logIn() {
  let emailInput = document.querySelector(".emailInput").value;
  let passwordInput = document.querySelector(".passwordInput").value;

  if (userEmail === emailInput && userPassword === passwordInput) {
    window.location.href = "another.html";
  } else {
    let pleaseTryAgain = document.querySelector(".tryAgain");
    if (pleaseTryAgain != "block") {
      pleaseTryAgain.style.display = "block";
    }
    document.querySelector(".emailInput").value = "";
    document.querySelector(".passwordInput").value = "";
  }
}

//move to forgat password page
function forget() {
  window.location.href = "help.html";
}

//checks if email is correct and shows password
function checkPassword() {
  let correctEmail = "idanmagl@gmail.com";
  let emailFromHtml = document.querySelector(".helpInput").value;

  if (correctEmail === emailFromHtml) {
    let second = document.createElement("div");
    second.textContent = "im1234$$";
    document.body.appendChild(second);
    if (second) {
      second.style.display = "block";
      setTimeout(() => {
        second.style.display = "none";
      }, 2000);
    }
  } else {
    let tryAgain = document.querySelector(".tryAgain");
    tryAgain.style.display = "block";
  }
}

function back() {
  window.location.href = "homePage.html";
}

function changePageToSignUp() {
    let x = document.querySelector(".signUp")
  x.style.display = "block";
  let y = document.querySelector(".logIn")
  y.style.display = "none";
}
