
import{ useState } from "react"
import { Input } from "./Input"
import { UserContext } from "../App"




export const HomePage = ()=>{
   const[name,setName]=useState("first")
   
    
   return(<>
   <UserContext.Consumer>
    {(user)=>{
return <p>im am {user}</p>
    }}
   </UserContext.Consumer>


    <div>{name}</div>
    <Input onInputChange={(value)=>{
        setName(value)
    }}/>
    </>)
}