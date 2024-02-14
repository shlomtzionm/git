let p = document.querySelector("p").innerText
let pArray = ""


function convertToArray(p){
 pArray = p.split("")
 
}
convertToArray(p)

 function timing(pArray){
for (let i = 0; i <pArray.length; i++) {
    setInterval(() => {
       console.log( pArray[i]);
    }, 10000 - i * 1000);
    
} 
}
 
timing(pArray)