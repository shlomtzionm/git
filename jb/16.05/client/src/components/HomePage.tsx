import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const HomePage = ()=>{
    
const [list ,setList] = useState([])
const [title, setTitle] = useState("")
const [more, setMore] = useState("")

    const getList = ()=>{
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        
        fetch("http://localhost:3000/todo", requestOptions)
          .then((res) => res.json())
          .then((json) => setList(json))
        }

    useEffect(getList, [])

    const handleSave = ()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "id": Math.floor(Math.random() * (1000 - 3 + 1)) + 3,
          "name": title,
          "age": more
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:3000/todo", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
          getList()
    }
    return(<>
    <Cards onChange={getList}>{list}</Cards>
    <input placeholder="enter title" onChange={(e)=>setTitle(e.target.value)}></input >
    <input placeholder="enter more"  onChange={(e)=>setMore(e.target.value)}></input >
    <button onClick={handleSave}>save</button>
    </>)
}