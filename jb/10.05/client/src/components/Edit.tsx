
import {  useState } from "react"
import { useDispatch } from "react-redux"
import {edit} from "../features/gradesSlice"


interface EditProps{
    name:string
}


export const Edit = (props: EditProps) => {
const {name} = props
const [input,setInput]= useState(0)
const dispatch = useDispatch()



const handleEdit = ()=>{
  

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "name": name,
      "grade": input
    });
    
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:3000/grades", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

dispatch(edit({name:name,grade:input}))  
} 

return(<>
    <input placeholder="new grade" type="number" onChange={(e)=>setInput(+(e.target.value))}></input>
    <button onClick={handleEdit}>edit</button>

</>)
}