import { useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd';
import { SideBarMenu } from '../SideBarMenu/SideBarMenu';
import { ApplicationName } from '../SideBarMenu/ApplicationName/ApplicationName';
import { ApplicationFooter } from '../ApplicationFooter/ApplicationFooter';
import type { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

const { Header, Content, Sider } = Layout;

export const ApplicationLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <ApplicationName collapsed={collapsed} />
        <SideBarMenu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Parent' }, { title: 'Child' }]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <ApplicationFooter />
      </Layout>
    </Layout>
  );
}
