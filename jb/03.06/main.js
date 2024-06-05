function testSync(){
    const result = getRandomNumber(10,20)
    console.log(result)
}

// Sync function
function getRandomNumber (min, max){
    const num = Math.floor(Math.random()*(min-max+1)) + min
    return num
}



function testSync1(){
getRandomNumberAfterDelay1(10,20,(result)=>{console.log(result)})}

function getRandomNumberAfterDelay1(min,max,callback){
setTimeout(()=>{
    const num = Math.floor(Math.random()*(min-max+1)) + min
    callback(nun)
},3000)
}


function testSync2(){
    try{
    getRandomNumberAfterDelay2(10,20,(result)=>{console.log(result)},(err)=>{alert(err.message)})}
    catch(err){
        alert(err.message)
    }}
    
    function getRandomNumberAfterDelay2(min,max,successCallback ,errorCallback){
    setTimeout(()=>{
        const num = Math.floor(Math.random()*(min-max+1)) + min
        if(Math.random()<0.5){
            errorCallback( new Error ("something bad"))
        }else{
        successCallback(num)

        }
    },500)
    }


  function  displayUserLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{console.log(position.coords.latitude,position.coords.longitude)},
    (err)=>{alert(err.message)})

  }
    
  

  function testSync3(){
 getRandomNumberAfterDelay3(10,20)
.then((res)=>{console.log(res)}) 
.catch((err)=>{alert(err.message)})
}
    
    function getRandomNumberAfterDelay3(min,max){
    return new Promise((resolve ,reject)=>{
         setTimeout(()=>{
            const num = Math.floor(Math.random()*(min-max+1)) + min
            if(Math.random() < 0.5){
                reject( new Error ("something bad"))
            }else{
                resolve(num)
    
            }
        },500)
    })
    
    }

 function testSync4(){
     getRandomNumberAfterDelay4(10,20)
       .then((res)=>{console.log(res);

        getRandomNumberAfterDelay4(1,res)
        .then((res2)=>{console.log(res2)})
        .catch((err)=>{alert(err.message)})
       }) 
       .catch((err)=>{alert(err.message)})
       }
           
           function getRandomNumberAfterDelay4(min,max){
           return new Promise((resolve ,reject)=>{
                setTimeout(()=>{
                   const num = Math.floor(Math.random()*(min-max+1)) + min
                   if(Math.random() < 0.5){
                       reject( new Error ("something bad"))
                   }else{
                       resolve(num)
           
                   }
               },500)
           })
           
           }
       

           
 async function testSync5(){
 const x = await  getRandomNumberAfterDelay5(10,20)
      .then((res)=>{console.log(res);
       
       getRandomNumberAfterDelay5(1,res)
       .then((res2)=>{console.log(res2)})
       .catch((err)=>{alert(err.message)})
      }) 
      .catch((err)=>{alert(err.message)})
      }
          
          function getRandomNumberAfterDelay5(min,max){
          return new Promise((resolve ,reject)=>{
               setTimeout(()=>{
                  const num = Math.floor(Math.random()*(min-max+1)) + min
                  if(Math.random() < 0.5){
                      reject( new Error ("something bad"))
                  }else{
                      resolve(num)
          
                  }
              },500)
          })
          
          }