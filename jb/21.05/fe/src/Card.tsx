
import { CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import {CardEntetie } from './enteties/card';
import {Card as MuiCard} from '@mui/material';


interface cardsProps{
    children: CardEntetie;
}
export const Card = (props:cardsProps)=>{
    const {children} = props
    return(<>
  <MuiCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {children.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {children.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard>

    </>)
}