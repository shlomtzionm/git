import { useDispatch } from "react-redux"
import "./addPet.css"
import { addOrEdit } from "../../features/isDogSlice"

interface addPetsProps{
    kind: string
}
export const AddPet =(props: addPetsProps)=>{
const {kind} = props
const dispatch = useDispatch()
return(<>
<button className="addBtn" onClick={()=>dispatch(addOrEdit("add"))}>add {kind}</button>
</>)
}