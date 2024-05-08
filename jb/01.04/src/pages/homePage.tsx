import { useState } from "react"

export const HomePage =()=>{
    
const[header,setHeader] = useState("hello")

 const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
if(event.target.checked){
    setHeader("")
}
 }   
    
    return(
        <>
        <h1>{header}</h1>
        <input type="checkbox" onChange={handleChange}/>
        </>
    )
}