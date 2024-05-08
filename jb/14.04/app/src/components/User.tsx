interface userProps{
    onInputChange?:(value:string)=>void
}

export const User = (props:userProps)=>{

    const {onInputChange } = props
    return(<>
    <input type="text" 
    onChange={(event)=>{onInputChange?.(event.target.value)}}></input>
    </>)
}