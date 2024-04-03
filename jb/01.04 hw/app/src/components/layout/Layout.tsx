import { Link } from "react-router-dom"


export const Layout = ( )=>{
    return(<>
     
            <Link to="/">HomePage</Link>
          
            <Link to="/about">About</Link>
          
            <Link to="/connectUs">ConnectUs</Link>
    </>)
}