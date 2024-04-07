import { Link } from "react-router-dom";


export const links:{key:number; label:string|React.ReactNode; }[] = [
    {  key: 1, label: <Link to={"/"}>HOME</Link> },
    { key: 2, label: <Link to={"/details"}>details</Link> }
]