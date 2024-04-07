import { Layout as AntLayout } from 'antd';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';



interface ContentProps{
    children?: React.ReactNode
}

export const Layout = (props:ContentProps)=>{
const{children}=props
    
    return(<>
    <AntLayout style={{width:"100vh",height:"100vh"}}>
   <Header/>
  {children}
   <Footer/>
    </AntLayout>
    
    </>)
}