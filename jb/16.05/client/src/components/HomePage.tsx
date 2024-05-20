import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { CradEntitie } from "../entities/CardEntitie";

export const HomePage = ()=>{
    
const [list ,setList] = useState([])
const [title, setTitle] = useState("")
const [more, setMore] = useState("")
const [isEdit, setIsEdit] = useState(false)
const [id,setId]= useState("")
const [saveOrEdit ,setSaveOrEdit] = useState("save")

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
      if (!isEdit){
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "id": title,
        "task": title,
        "value": more
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("http://localhost:3000/todo", requestOptions)
        .then((response) => response.text())
        .then((result) =>{ console.log(result);   getList(); eraseInputs()})
        .catch((error) => console.error(error));
     
  } else {handleEdit()}}

    const handleEdit = () =>{
      const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "id":id,
      "task":title,
      "value":more
    });
    
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(`http://localhost:3000/todo/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result); getList() ;setIsEdit(false);setSaveOrEdit("save") ;eraseInputs()})
      .catch((error) => console.error(error));
    }
    
   

    const startEdit = (child:CradEntitie) => {
      setTitle(child.task)
      setMore(child.value)
      setIsEdit(true)
      setId(child.id)
      setSaveOrEdit("edit")
    }
const eraseInputs = () =>{
 setMore("")
setTitle("")
}

return(<>
    <Cards onChange={getList} startEdit={startEdit}>{list}</Cards>
    <input placeholder="enter title" value={title} onChange={(e)=>setTitle(e.target.value)}></input >
    <input placeholder="enter more" value={more} onChange={(e)=>setMore(e.target.value)}></input >
    <button onClick={handleSave}>{saveOrEdit}</button>
    </>)
}

