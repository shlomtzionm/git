import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';


export default function BasicTable() {

  const grades = useSelector((state: RootState) => state.grades.grades);
 const cons = ()=>{
  console.log(grades)
 }
cons()

useEffect(()=>{

},[grades])
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
          
          {grades.map((child) => (
            <TableRow key={child.name}>
              <TableCell component="th" scope="row">
                {child.name}
              </TableCell>
              <TableCell align="right">{child.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
