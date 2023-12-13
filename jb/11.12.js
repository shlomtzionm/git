function showAlert(){
    let input = +document.querySelector('.input').value
    input =Math.abs(input)
    let input2 = +document.querySelector('.input2').value
    input2 =Math.abs(input2)

    
    let answer = input+input2
    console.log(answer)

    let ans1 = document.querySelector('.ans')
        ans1.valueGIT  = answer

    let h1 = document.querySelector('.h1')
    h1.textContent = answer    
}
