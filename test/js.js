function createTable (element, whichInput, tableElement){
let element = document.createElement(tableElement)
if (tableElement === "tr"){
    table.appendChild(element)
} else if (tableElement === "td" && element !== pic){
    let imgElement = getPic(whichInput.value);
    imgElement.appendChild(imgElement)
    tr.appendChild(element)
} else if (tableElement === "td"){
    element.textContent = whichInput.value
}
}