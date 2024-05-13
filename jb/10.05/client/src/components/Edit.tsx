
import {  useState } from "react"
import { useDispatch } from "react-redux"
import { edit } from "../features/gradesSlice"

interface EditProps{
    children:string
}


export const Edit = (props: EditProps) => {
const {children} = props
const [input,setInput]= useState(0)


const dispatch = useDispatch()

const handleEdit = ()=>{
    dispatch(edit({name:children,grade:input}))
} 

return(<>
    <input placeholder="new grade" type="number" onChange={(e)=>setInput(+(e.target.value))}></input>
    <button onClick={handleEdit}>edit</button>

</>)
}