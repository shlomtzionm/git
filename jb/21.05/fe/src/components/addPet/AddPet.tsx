import { useDispatch } from "react-redux"
import "./addPet.css"
import { addOrEdit, isOpen } from "../../features/isDogSlice"
import FormDialog from "../modal/Modal"

interface addPetsProps{
    kind: string
}
export const AddPet =(props: addPetsProps)=>{
const {kind} = props
const dispatch = useDispatch()
return(<>
<button className="addBtn" onClick={()=>{dispatch(addOrEdit("add")); dispatch(isOpen(true))}}>add {kind}</button>
<FormDialog></FormDialog>
</>)
}