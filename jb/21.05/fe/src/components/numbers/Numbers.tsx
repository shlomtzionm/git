import { useEffect, useState } from "react";
import { numbers } from "../../entities/number";
import "./numbers.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Numbers = ()=>{

    const [data ,setDate] = useState<numbers>({"/api/dogs": 0, "/api/cats":0})
 const isDog = useSelector((state: RootState)=>state.isDog.isDog)
 
    const getNumbers = ()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://localhost:3000/logs", requestOptions)
  .then((response) => response.json())
  .then((result) => {setDate(result); console.log(result)})
  .catch((error) => console.error(error));
 }   

 useEffect(()=>{
    getNumbers()
 },[isDog])

 
    return(<>
   <div className="numbersContainer">
 <div className="dogs"><div>{data["/api/dogs"]}</div> people were intrusted in our dogs</div>

<div><div>{data["/api/cats"]}</div> people were intrusted in our cats</div>
 </div>
     


    </>)
}