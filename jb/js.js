// question 1
let array = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Enter a ${i} number:`));
    array.push(num);
    sum += num;
}

for (let i = 0; i < array.length; i++) {
    if (i > array.length) {
        console.log(i)
    };
    
}
console.log(sum/array.length);




//question 2
let array = [];
let array2 = [];
let sum = 0;

for (i = 0; i < 5; i++) {
let num = +prompt("enter a number:");
array.push(num);
if (num % 2 === 0) {
    array2.push(num) ; sum += num ;
 };
}
console.log(sum/array2.length);
console.log(array);




//question 3
let array = [];
let sum = 0;

for (i = 0; i < 5; i++) {
    let num = +prompt("enter a number:");
    sum += num;
    array.push(num);
}
console.log(array)

for (i = 0; i < array.length; i++) {
    if (array[i] === sum - array[i]) {
        console.log(array[i])
    };
}


//question 4
 let array = [];
 let array2 = [];
 let array3 = [];

 for (i = 0; i < 10; i++) {
    let num = +prompt("enter a number:"); 
    array.push(num); 
}
    for (i=0; i<array.length; i++) {
    if (i<5) {
        array2.push(array[i])
    }    else {
        array3.push(array[i])
    };
    
}
console.log(array)
console.log(array2)
console.log(array3)

array = array2.concat(array3);
console.log(array)

