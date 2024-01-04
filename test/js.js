function createTable (element, whichInput, tableElement){
let element = document.createElement(tableElement)
if (tableElement === "tr"){
    table.appendChild(element)
} else if (tableElement === "td" && element === tdPic){
    let imgElement = getPic(whichInput.value);
    imgElement.appendChild(imgElement)
    tr.appendChild(element)
} else if (tableElement === "td"){
    element.textContent = whichInput.value
}
}


createTable(row,whichInput ,tr)
createTable(tdName, inputName, td)
createTable(tdPrice,inputPrice,td)
createTable(tdCategory,Category,td)
createTable(tdPic, inputPic, td)

