
import { ReactNode } from "react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

interface propsLayout{
children: ReactNode
}

export const layout =(props:propsLayout)=>{
    const{children} = props
    return(<>
    <Header/>
{children}
    <Footer/>
    </>)
}