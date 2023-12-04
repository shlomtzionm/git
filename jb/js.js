// // question 1
// let array = [];
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//     let num = parseInt(prompt(`Enter a ${i} number:`));
//     array.push(num);
//     sum += num;
// }

// for (let i = 0; i < array.length; i++) {
//     if (i > array.length) {
//         console.log(i)
//     };
    
// }
// console.log(sum/array.length);




// //question 2
// let array = [];
// let array2 = [];
// let sum = 0;

// for (i = 0; i < 5; i++) {
// let num = +prompt("enter a number:");
// array.push(num);
// if (num % 2 === 0) {
//     array2.push(num) ; sum += num ;
//  };
// }
// console.log(sum/array2.length);
// console.log(array);




// //question 3
// let array = [];
// let sum = 0;

// for (i = 0; i < 5; i++) {
//     let num = +prompt("enter a number:");
//     sum += num;
//     array.push(num);
// }
// console.log(array)

// for (i = 0; i < array.length; i++) {
//     if (array[i] === sum - array[i]) {
//         console.log(array[i])
//     };
// }


// //question 4
//  let array = [];
//  let array2 = [];
//  let array3 = [];

//  for (i = 0; i < 10; i++) {
//     let num = +prompt("enter a number:"); 
//     array.push(num); 
// }
//     for (i=0; i<array.length; i++) {
//     if (i<5) {
//         array2.push(array[i])
//     }    else {
//         array3.push(array[i])
//     };
    
// }
// console.log(array)
// console.log(array2)
// console.log(array3)

// array = array2.concat(array3);
// console.log(array)



// //question 5
//  let array = [];
//  let array2 = [];
//  let array3 = [];

//  for (i=0; i<10; i++) { 
//    let num = +prompt("enter a number:");
//    array.push(num); 
//  }

//  console.log(array)

// for (i=0; i<array.length; i++) {
//     if (array[i] % 2 === 0) {
//         array2.push(array[i])
//     } else {
//         array3.push(array[i])
//     }
// }

// console.log(array2)

// console.log(array3)

// //question 6
// let array = []

// for (i=0; i<10; i++) {
//     let num = +prompt("enter a number:");
//     array.push(num);
// }
// console.log(array);
// array = array.reverse();
// console.log(array)


// //question 7
// let array = []
// let numbers = []
// let strings = []
// let array2 = []

// for (i=0; i<10; i++) {
//     let num = +prompt("enter a number:")
//     array.push(num)
// }
// console.log(array)

// for (i=0; i<array.length; i++) {
//     if (typeof array[i] === 'number' ) {
//         numbers.push(array[i])
//     } else if (typeof array[i] === 'string') {
//         strings.push(array[i])
//     } else {
//         array2.push(array[i])
//     }
// }

// console.log(numbers)
// console.log(strings)
// console.log(array2)


// //question 8
// let array = []
// let array2 = []

// for (i = 0; i<10; i++) {
//     let num = +prompt("enter a number:")
//     array.push(array[i])
// }
// array2 = array.reverse
// if (array === array2 ) {
//    console.log( "it is poly")
// }


//question 9
let array = []
let array2 = [] 
let j = 0

for (i=0; i<2; i++) {
    let num = +prompt("enter a number:")
    array.push(num)
}

for (i=0; i<4; i++) {
    let num2 = +prompt("enter a number:")
    array2.push(num2)
}

console.log(array)
console.log(array2)

for (i=0; j<array.length && i<array2.length; i++) {
    if (array[j] === array2[i]) {
        j++
    }
}

if (j === array.length) {
    console.log("good")
 } else {
    console.log("no")
 }

