import { useState, useEffect } from "react";
import { Card } from "./Card";
import { CardEntetie } from "./enteties/card";



export const HomePage = () => {
  const [data, setData] = useState<CardEntetie[]>([]);

  useEffect(() => {
    const GetData = () => {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      };

      return fetch('http://localhost:3000/api/dogs', {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(data =>{ setData((data)) ;console.log(data)})
    };

    GetData();
  }, []); 

  return (
    <>
    {data.map(item => (
      <Card>{item}</Card>
    ))}
  </>
  );
}