let tbody = document.querySelector(".tbody")

async function getData(){
    let res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    let data = await res.json()
    data = data.data
    console.log(data)
    printDataToTable(data)

}
getData()

function printDataToTable(data ) {
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr")
        tbody.appendChild(tr)

        table(data,tr,i,"Year")
        table(data,tr,i,"Population");
    }
}
  function table(data,tr,i,key){
    let td = document.createElement("td")
    td.innerHTML = data[i][key]
    tr.appendChild(td)

    }