import { useState } from "react"
import { Link } from "react-router-dom"

export const HomePage =()=>{
    
const[header,setHeader] = useState("hello")

 const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
if(event.target.checked){
    setHeader("")
}
 }   
    
    return(
        <>
       <Link to={"counter"}/>
        
        <h1>{header}</h1>
        <input type="checkbox" onChange={handleChange}/>
        </>
    )
}