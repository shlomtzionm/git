const colorArray = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3'];

function start() {
    let arrayLength = colorArray.length - 1;
        document.body.style.backgroundColor = colorArray[getRandomNumber(arrayLength)];
            setTimeout(() => {
                alert("Color was changed");
            }, 0);
        
   
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

start();
