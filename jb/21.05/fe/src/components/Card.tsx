
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import {CardEntetie } from '../enteties/card';
import {Card as MuiCard} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';


interface cardsProps{
    children: CardEntetie;
}
export const Card = (props:cardsProps)=>{
    const {children} = props
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
        <DeleteOutline></DeleteOutline>
      </CardActions>
    </MuiCard>

    </>)
}