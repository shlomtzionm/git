import { ReactNode } from "react"

interface LayoutProps{
    children : ReactNode
}

export const Layout = (props:LayoutProps)=>{
const {children} = props

    return (<>
    <h3>welcome to my page</h3>
{children}
<h6>this can be a footer</h6>
    </>)
}