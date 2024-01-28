
let btn = document.querySelector('.btn')
let temp= document.querySelector('.temp')
let card = document.querySelector(".card")

btn.addEventListener('click', function(){
    getWether()
})



async function getWether(){
    let city = document.querySelector(".input").value
    let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2950e10a28f6f2797ba9e2de2f3abcce&units=metric`

    let response = await fetch(currentWeatherUrl)
    let date = await response.json()
    console.log(date)
    printToPage(date)

}

function printToPage(date){
temp.innerHTML = `${date.main.temp} &#8451;`
}



