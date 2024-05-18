import { Layout as AntdLayout } from 'antd';
import '../layout/layout.css';
import { ReactNode } from 'react';

const { Header, Footer: AntdFooter } = AntdLayout;

interface layoutProps{
    children: ReactNode
}
export const Layout = (props:layoutProps) => {
  const {children} = props
    return (
    <AntdLayout className="layout">
      <Header className="header" />
      <div className="content"> 
      {children}
     </div>
      <AntdFooter className="footer" />
    </AntdLayout>
  );
};
