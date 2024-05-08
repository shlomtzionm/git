


interface inputProps{
    onInputChange?:(value:string)=> void
}
export const Input =(props:inputProps)=>{
    const{onInputChange}=props
return(<>

   

<input type="text" 
onChange={(event)=>onInputChange?.(event.target.value)}></input>
</>)
}