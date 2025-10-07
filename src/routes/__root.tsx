import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useState, type FC, type ReactElement } from 'react';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { ApplicationName } from '../components/SideBarMenu/ApplicationName/ApplicationName';
import { SideBarMenu } from '../components/SideBarMenu/SideBarMenu';
import { Content } from 'antd/es/layout/layout';
import { ApplicationFooter } from '../components/ApplicationFooter/ApplicationFooter';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Root: FC = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <ApplicationName collapsed={collapsed} />
        <Content style={{ padding: 4 }}>
          <SideBarMenu />
        </Content>
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <ApplicationFooter />
      </Layout>
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools position="bottom" />
    </Layout>
  );
}

export const Route = createRootRoute({
  component: Root
});

export default Root;

