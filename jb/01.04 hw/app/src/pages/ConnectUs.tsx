import { useState } from "react"

export const ConnectUs =()=>{
const[name,setName]=useState("")
const[phone,setPhone]=useState("0")
const[email,setEmail]=useState("")

    const handleButton = ()=>{
alert(`hi ${name}, phone: ${phone}, email: ${email}`)
    }
    
    return(<>
    <input type="text" placeholder="your name" 
    onChange={(e)=>setName(e.target.value)}></input>
    <input type="text" placeholder="your email" 
    onChange={(e)=>setEmail(e.target.value)}></input>
    <input type="number" placeholder="your phone number" 
    onChange={(e)=>setPhone(e.target.value)}></input>
    <button onClick={handleButton}>send</button>
    </>)
}