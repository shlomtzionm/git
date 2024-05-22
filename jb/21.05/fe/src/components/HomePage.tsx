import { useState, useEffect } from "react";
import { Card } from "./Card";
import { CardEntetie } from "../enteties/card";



export const HomePage = () => {
  const [data, setData] = useState<CardEntetie[]>([]);

  useEffect(() => {
const GetData=()=> {   const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://localhost:3000/api/dogs", requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result); setData(result)})
      .catch((error) => console.error(error));}

    GetData();
  }, []); 

  return (
    <>
    {data.map(item => (
      <Card key={item.id}>{item}</Card>
    ))}
  </>
  );
}