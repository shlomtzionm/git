import {Footer as AntdFooter} from "antd/es/layout/layout"

export const Footer = ()=>{
    return(<>
    <AntdFooter style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED

    </AntdFooter>
    </>)
}