import { Grade } from "./HomePage"

interface SelectProps{
    children: Grade[]
}


export const Select = (props:SelectProps)=> {
    const {children} = props
    return(<>
<select>
    {children.map(child => (
        <option key={child.name}>{child.name}</option>
    ))}
</select>
    </>)
}