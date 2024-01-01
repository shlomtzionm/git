let inputName = document.querySelector(".inputName");
let inputPrice = document.querySelector(".inputPrice");
let Category = document.querySelector(".Category");
let inputPic = document.querySelector(".inputPic");
let addBtn = document.querySelector(".addBtn");
let table = document.querySelector(".table");
let productArray = [];
let counter = 0;

function makeTheProduct() {
  let productName = inputName.value;
  let productPrice = inputPrice.value;
  let productCategory = Category.options[Category.selectedIndex].text;
  let productPic = inputPic.value;

  let theProduct = {
    productName,
    productPrice,
    productCategory,
    productPic,
  };
  productArray.push(theProduct);

  createTr();

  inputName.value = "";
  inputPrice.value = "";
  Category.selectedIndex = 0
  inputPic.value = "";
}

addBtn.addEventListener("click", function () {
  makeTheProduct();
});

function createTr() {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  
  let tdName = document.createElement("td");
  tdName.textContent = inputName.value;
  tr.appendChild(tdName);

  let tdPrice = document.createElement("td");
  tdPrice.textContent = inputPrice.value;
  tr.appendChild(tdPrice);

  let tdCategory = document.createElement("td");
  tdCategory.textContent = Category.value;
  tr.appendChild(tdCategory);

  let tdPic = document.createElement("td");
  let imgElement = getPic(inputPic.value);

  imgElement.style.width = "50px";
  imgElement.style.height = "50px";

  tdPic.appendChild(imgElement);
  tr.appendChild(tdPic);

  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = "delete"
  tr.appendChild(deleteBtn)

  tr.setAttribute("date-counter", counter)


  function getPic(source) {
    let thePic = document.createElement("img");
    thePic.src = source;
    return thePic;
  }

  function deleteProduct(counter){
    productArray.splice(counter,1)
    tr.remove()
    return productArray

}
deleteBtn.addEventListener('click', function(){
    deleteProduct(parseInt(tr.getAttribute("date-counter"), 10))
})
counter++
}

 

