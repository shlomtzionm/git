// import Card from '@mui/joy/Card';
import {CardEntetie } from './enteties/card';
// import { CardOverflow } from '@mui/joy';
// import { CardContent, Typography } from '@mui/material';

interface cardsProps{
    children: CardEntetie;
}
export const Card = (props:cardsProps)=>{
    const {children} = props
    return(<>

     <h2>{children.name}</h2>

    </>)
}