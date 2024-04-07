import { Menu } from 'antd'
import {Header as AntdHeader}from 'antd/es/layout/layout'


export const Header = ()=>{
    return(<>
    <AntdHeader style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
     <Menu/>
    </AntdHeader>
    </>)
}