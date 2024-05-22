import { ReactNode } from "react"
import { TopBar } from "./TopBar"
import styled from 'styled-components'

interface layoutProps{
    children: ReactNode
}
const StyledLayout = styled.div`
whidth :100vh;
margin:0; 
height:100vh
   `
export const Layout = (props: layoutProps)=>{
const {children} = props

 
    return(<>
    <StyledLayout >
    <TopBar />
    {children}
    </StyledLayout>
    </>)
}