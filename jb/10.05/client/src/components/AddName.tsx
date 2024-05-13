import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState } from 'react';


export const AddName = ()=> {
 
    const [newName, setNewName] = useState("")
    const [newGrade, setNewGrade] = useState("0")

    
    const sendDatas = ()=> {
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": newName,
  "grade":newGrade
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/grades", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

    }
    return(<>
    <Button onClick={()=>{sendDatas()}}><AddIcon/></Button>
    <input onChange={(e)=>setNewName(e.target.value)} placeholder='name'></input>
    <input type='number' onChange={(e)=>setNewGrade(e.target.value)} placeholder='grade'></input>
    </>)
}