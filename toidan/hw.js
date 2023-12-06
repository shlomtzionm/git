// // //QUESTION 1
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

// console.log("the bigger number is: " + biggerNum)
// document.write("the bigger number is: " +biggerNum)

//QUESTION 2
// let power = 1 

// function doPower (num,num2) {
//     for (i=0; i<num2; i++){
//        power *= num
//     }
// return {power , num , num2}
// } 

// let result = doPower(2,3)

// console.log(result.num + " raised to the power of " + result.num2 + " is " + result.power)
// document.write(result.num + " raised to the power of " + result.num2 + " is " + result.power)


// // //QUESTION 3
// let sum = 0

// function multy (num) {
// for (i = num-1; i>1; i--) {
//     num *= i
//     sum = num
   
// }
// return sum
// }

// multy(5)

// console.log(sum)
//document.write(sum)


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
// document.write(forNow)

//  //QUESTION 5
//  let sum = 0
//  function five (num, message) {
//     for(i=0; i<num; i++) {
//         let num1 = prompt("")
//         num1 = +num1
//         sum += num1
//     }
    
//     console.log(sum)
//     console.log(message)
//     return sum
    
//  }
 
//  five(5, "hello")
//  document.write(sum)

//  //QUESTION 6
// let biggerNum = 0
// function bigger (num, num2, num3) {
//     if (num > num2 && num > num3){
//         biggerNum = num
//     } else if (num2 > num && num2 > num3) {
//         biggerNum = num2
//     } else {
// biggerNum = num3
//     }
//     return biggerNum
// }
//  bigger(1,2,3)
//  console.log(biggerNum)

// //  //QUESTION 7
// let big
// let little
// function random (num, num2) {
//     if (num> num2) { 
//         big = num
// little = num2
//     } else {big = num2
//     little = num} 
// }
// random (10, 20)
// let randomNum =Math.floor(Math.random()*(big-little+1))+10
// console.log(randomNum)
// document.write(randomNum)

// //  //QUESTION 8
// function repeat (num) {
//     console.log(" *".repeat(num))
// }
// repeat(20)


// //QUESTION 8.2
// let sum =""
// function repeat (num) {
//     for (i=0; i<num; i++) {
//         sum += "*"
//     }
//     return sum
// }
// repeat(10) 
// console.log(sum)

// // //QUESTION 9
// function repeat (num) {
//     for (i=1; i<=num; i++)
//     {
//         console.log(" *".repeat(i))
//  }
// }
// repeat(20)

