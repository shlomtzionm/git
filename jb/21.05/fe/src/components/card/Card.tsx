import "./card.css"
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import {CardEntities } from '../../entities/card.ts';
import {Card as MuiCard} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store.ts';
import FormDialog from "../modal/Modal.tsx";
import { addOrEdit } from "../../features/isDogSlice.tsx";
import { isOpen  as setIsOpen} from "../../features/isDogSlice"; 
import { useState } from "react";
import { useEffect } from 'react';


interface cardsProps{
    children: CardEntities;
    setData : (res:CardEntities[])=> void
}

export const Card = (props:cardsProps)=>{
const dispatch = useDispatch()


const [imagex,setImage] = useState("")

    const {children,setData} = props
    const isDog:string = useSelector((state: RootState) => state.isDog.isDog)
   
    useEffect(() => {
      getImages();
  }, []);
    

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
    
      if(isDog === "dogs"){
        url = `http://localhost:3000/api/dogs/${children.id}` }
         else if(isDog === "cats") {
           url =  `http://localhost:3000/api/cats/${children.id}` } 
      
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {setData(result)})
        .catch((error) => console.error(error));
      
     }

     const getImages = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => {
          setImage(json.message); 
      })
      .catch((error) => console.error(error));
     
  }

  
  
    return(<>
  <MuiCard key={children.id} sx={{ maxWidth: 345 }} className="petCard">
      <CardMedia
        component="img"
        alt="pic of dog"
        height="200"
        src = {imagex}
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
      <button  onClick={deletePet} className="cardButton">delete</button>
      <button onClick={()=>{dispatch(setIsOpen(true)); dispatch(addOrEdit("edit"))}} className="cardButton">edit</button>

      </CardActions>
    </MuiCard>
<FormDialog setData={setData} data={children} />

    </>)
}