import { useState, useEffect } from "react";
import { Card } from "./card/Card";
import { CardEntities } from "../entities/card";
import { useSelector } from "react-redux";
import { RootState } from "../store";




export const GetPets = () => {
  const [data, setData] = useState<CardEntities[]>([]);

  const isDog = useSelector((state: RootState) => state.isDog)
  
  useEffect(() => {
const GetData=()=> {   const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    let url = ""

    if(isDog.isDog === true){
      url = "http://localhost:3000/api/dogs" }
       else { url =  "http://localhost:3000/api/cats" } 
    
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result); setData(result)})
      .catch((error) => console.error(error));
    }
    GetData();
  }, [isDog]); 

  return (
    <>
    {data.map(item => (
      <Card setData={setData} key={item.id}>{item}</Card>
    ))}
  </>
  );
}

