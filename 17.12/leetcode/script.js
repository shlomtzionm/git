function splitString(s) {
  var result = [];

  for (var i = 0; i < s.length-1; i++) {
    var left = s.substring(0, i + 1);
    var right = s.substring(i + 1);
    result.push({ left, right });
       
  }
  console.log(result) 
  let sum1 = 0
  let sum0 = 0
  function sum(result){
    
    for(i=0; i<result.length; i++){
        for (j=0; j<s.length; j++){
        if(result[j].left === "0"){
     sum0++ 
    }
    if(result[j].right.includes("1")){
        sum1++
    }
        }
}
}
  sum(result)
  console.log(sum0)
  console.log(sum1)
}

splitString("100101")


