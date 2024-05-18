import { Layout as AntdLayout } from "antd";
import {  ReactNode } from "react";
const { Header, Content, Footer } = AntdLayout;

interface layoutProps{
    children : ReactNode
}

export const Layout = (props:layoutProps) => {
 
const {children} = props
  return (
    <AntdLayout>
      <Header style={{ display: "flex", alignItems: "center", color: "white" }}>
        MY TODO'S LIST
      </Header>
      <Content style={{ padding: "5px 48px" }}>
        <div
          style={{
            background: "white",
            minHeight: "70vh",
            padding: 24,
            borderRadius: 5,
          }}
        >
            {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
      shlomtzion ©{new Date().getFullYear()} Created by shlomtzion
      </Footer>
    </AntdLayout>
  );
};