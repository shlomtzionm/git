
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react"
import { useEffect } from "react"


export default function BasicTable() {
  
  interface Grade{
    name:string,
    grade:number
  }
  const [gradeData, setGradeDate]= useState<Grade[]>([])

  const getGradeData = async()=>{
    const res = await fetch("http://localhost:3000/grades")
    const data = await res.json()
    return data}
    
    useEffect(()=>{
        const fetchDate = async ()=>{
            setGradeDate(await getGradeData())
        }
        fetchDate()
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gradeData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
