let searchDiv = document.querySelector(".searchDiv")
let date = []
let ul = document.querySelector("ul")
let search = document.querySelector(".search")
let btn = document.querySelector(".btn")

async function fetchDate(){
  let response = await  fetch("https://jsonplaceholder.typicode.com/users")
   date = await response.json()
   console.log(date)
getEmails(date)
}

function getEmails(date){
let emails = date.filter((user)=>{
  let li = document.createElement("li")
  li.innerHTML = user.email
  ul.appendChild(li)
})
}

fetchDate()


function searchForUser(date) {
  searchDiv.innerHTML = "";
  let searchedFor = date.filter((user) => user.id == search.value);
  console.log(searchedFor);

  searchedFor.forEach((user) => {
    let keys = Object.keys(user);
    console.log(keys);

    for (let i = 0; i < keys.length; i++) {
      let propertyDiv = document.createElement("div");

      if (keys[i] === "company") {
        propertyDiv.innerHTML = `<strong>${keys[i]}:</strong> ${user[keys[i]].name}`;
      } else if (keys[i] === "address") {
       propertyDiv.innerHTML = `<strong>${keys[i]}:</strong> ${user[keys[i]].city}`;
      } else {
        propertyDiv.innerHTML = `<strong>${keys[i]}:</strong> ${user[keys[i]]}`;
      }

      searchDiv.appendChild(propertyDiv);
    }
  });
}

btn.addEventListener('click', function(){
  searchForUser(date)
})