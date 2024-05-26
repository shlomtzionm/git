import "./card.css"
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import {CardEntities } from '../../entities/card.ts';
import {Card as MuiCard} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store.ts';
import { useState } from "react";
import FormDialog from "../modal/Modal.tsx";
import { addOrEdit } from "../../features/isDogSlice.tsx";


interface cardsProps{
    children: CardEntities;
    setData : (res:CardEntities[])=> void
}

export const Card = (props:cardsProps)=>{
const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
  };

    const {children,setData} = props
    const isDog = useSelector((state: RootState) => state.isDog)

  

    const deletePet=()=> {  
       const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
        body:""
       };
      let url = ""
    
      if(isDog.isDog === "dogs"){
        url = `http://localhost:3000/api/dogs/${children.id}` }
         else if(isDog.isDog === "cats") {
           url =  `http://localhost:3000/api/cats/${children.id}` } 
      
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {setData(result)})
        .catch((error) => console.error(error));
      
     }

    
  
    return(<>
  <MuiCard  sx={{ maxWidth: 345 ,}} >
      <CardMedia
        component="img"
        alt="pic of dog"
        height="200"
        src= {children.img}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
         {children.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        {children.description}
        </Typography>
      </CardContent>
      <CardActions>
      <button  onClick={deletePet} className="card">delete</button>
      <button onClick={()=>{handleClickOpen(); dispatch(addOrEdit("edit"))}} className="card">edit</button>

      </CardActions>
    </MuiCard>
<FormDialog setData={setData} open={open} handleClose={handleClose} data={children} />

    </>)
}