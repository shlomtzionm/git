import { useState, useEffect } from "react"
import BasicTable from "./Table"
import { Select } from "./select"
import { AddName } from "./AddName"


export interface Grade{
    name:string,
    grade:number
  }

export const HomePage = ()=> {
  
      const [gradeData, setGradeDate]= useState<Grade[]>([])
    const [trigger,setTrigger] = useState(false)

      const getGradeData = async()=>{
        const res = await fetch("http://localhost:3000/grades")
        const data = await res.json()
        return data}
        
        useEffect(()=>{
            const fetchDate = async ()=>{
                setGradeDate(await getGradeData())
                setTrigger(false)
            }
            fetchDate()
           
        },[trigger])
    return(<>
    <BasicTable>{gradeData}</BasicTable>
    <Select>{gradeData}</Select>
    <AddName setTrigger={setTrigger}/>
    </>)
}

