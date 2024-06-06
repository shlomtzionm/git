

const div = document.querySelector(".div")


function generatePrimeNumberAfterDelayAsync  (min, max){
return new Promise((resolve, reject)=>{
 let newNum =getRandomInt(min,max) 
 for (i = 2; i< Math.sqrt(newNum);i++){
    if(newNum%i === 0 ){
        resolve(newNum)
    } else {
        reject(new Error("number is prime"))
        break
    }
 }
    
})
}

function button(){
    const maxFromInput = document.querySelector(".max").value
const minFromInput = document.querySelector(".min").value
generatePrimeNumberAfterDelayAsync(+minFromInput,+maxFromInput)
    .then((res)=>div.innerHTML = res)
    .catch((err)=>{console.log(err.message)})
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}