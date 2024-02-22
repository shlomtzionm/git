(async function () {
  let tbody = document.querySelector("#tbody");
  let tbody2 = document.querySelector("#tbody2");
  let allData = [];

  async function getRickAndMorty() {
    let res = await fetch("https://rickandmortyapi.com/api/episode");
    let data = await res.json();
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
      allData = data.results;
      let tr = document.createElement("tr");
      tbody.appendChild(tr);
      printToTD("episode", tr, i, allData);
      printToTD("name", tr, i, allData);
    }
  }

  let characters = [];
  let text = document.querySelector("#text")
 let button = document.querySelector("#button")
 
 button.addEventListener("click", function(){
    checkIF()
 })
 
 async function checkIF() {
    tbody2.innerHTML=""
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].characters.length > text.value) {
        let tr = document.createElement("tr");
        tbody2.appendChild(tr);
        printToTD("episode", tr, i, allData);
        printToTD("name", tr, i, allData);
        characters.push(allData[i].characters);

       await showCharacter(tr);
      }
    }
  }

  function printToTD(key, tr, i, data) {
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = data[i][key];
  }

  async function showCharacter(tr) {
    characters.forEach(async (element) => {
      element.forEach(async (character) => {
        let res = await fetch(character);
        let data = await res.json();
        let td = document.createElement("td");
        td.innerHTML = data.name;
        tr.appendChild(td);
   await isAlive(data,td)
      });
    });
  }

  function isAlive(data,td){
    let input = document.createElement("input")
    input.type = "checkBox"
    td.appendChild(input)
    if(data.status === "Alive"){
        input.checked = true
  }}

  
  await getRickAndMorty();
})();
