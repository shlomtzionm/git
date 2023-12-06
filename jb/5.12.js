// //QUESTION 1
// let biggerNum = 0

// function bigger (num, num2) {
//     if (num > num2){
//         biggerNum = num
//     } else {
//         biggerNum = num2
//     }
//     return bigger
// }

// bigger(2,1)

// console.log(biggerNum)


// //QUESTION 2
// let power = 1 

// function doPower (num,num2) {
//     for (i=0; i<num2; i++){
//        power *= num
//     }
// return power
// } 

// doPower(2,3)

// console.log(power)



// //QUESTION 3
// let sum = 0

// function multy (num) {
// for (i=num-1; i>1; i--) {
//     num *= i
//     sum = num
   
// }
// return sum
// }

// multy(5)

// console.log(sum)


// //QUESTION 4
// let forNow = ""

// function reverse (num) {
//     num = num.toString();
//     for (i=num.length-1; i>=0; i--) {
//         forNow += num.charAt(i)
//     }
// return forNow
// }
// reverse(123456789)
// console.log(forNow)


 //QUESTION 5
let sum = 0
 function five (num, message) {
    console.log(message)
    num = +num
    for(i=0; i<num; i++) {
        let num1 = prompt("")
        num1 = +num1
        sum += num1
    }
    return sum
 }

 five(5, "hello")

 console(sum)