// import { useState } from "react"
import { User } from "./User"

export const HomePage = ()=>{
// const [ userName,setUserName] = useState("")
    return(<>

  <User 
  onInputChange={(value)=>{console.log(value)}}></User>
    </>)
}