
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import {CardEntities } from '../../entities/card.ts';
import {Card as MuiCard} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store.ts';


interface cardsProps{
    children: CardEntities;
    setData : (res:[])=> void
}




export const Card = (props:cardsProps)=>{
    const {children,setData} = props
    const isDog = useSelector((state: RootState) => state.isDog)
    const deletePet=()=> {   const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
        body:{
          "id":2
        }
      };
      let url = ""
    
      if(isDog.isDog === true){
        url = "http://localhost:3000/api/dogs" }
         else { url =  "http://localhost:3000/api/cats" } 
      
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {console.log(result); setData(result)})
        .catch((error) => console.error(error));
      }

    return(<>
  <MuiCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="pic of dog"
        height="200"
        src= {children.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {children.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {children.description}
        </Typography>
      </CardContent>
      <CardActions>
      <button onClick={deletePet}>delete</button>
      </CardActions>
    </MuiCard>

    </>)
}