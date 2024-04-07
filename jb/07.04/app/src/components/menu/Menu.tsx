import { Menu as AntdMenu } from "antd";
import { links } from "../../data/menu";

export const Menu = () => {
    
    return (
        <>
            <AntdMenu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ flex: 1, minWidth: 0 }}
                items={links}
            ></AntdMenu>
        </>
    );
}
