
let btn = document.querySelector('.btn')
let temp= document.querySelector('.temp')

btn.addEventListener('click', function(){
    getWether()
})



async function getWether(){
    let city = document.querySelector(".input").value
    let currentWeatherUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=${city}&appid=2950e10a28f6f2797ba9e2de2f3abcce`

    let response = await fetch(currentWeatherUrl)
    let date = await response.json()
    console.log(date)
    printToPage(date)
}

function printToPage(date){
temp.innerHTML = `${date.main.temp} &#8451;`
}




