import { FunctionComponent } from "react";
import { title, subTitle } from "../../../data/header";



export const Header:FunctionComponent= () => {

return (
        <>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>

        </>
    )
}