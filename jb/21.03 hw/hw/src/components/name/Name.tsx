import { FunctionComponent, SyntheticEvent, useState } from "react";

export const Name:FunctionComponent = () => {
    
const [name, setInputValue] = useState("")

    const handleSave =(e: SyntheticEvent<HTMLInputElement>)=>{
setInputValue(e.target.value)
}
    
    return(
        <>
        <p>name: {name}</p>
        <input onChange={handleSave} type="text"></input>
       
        </>
    )
};
