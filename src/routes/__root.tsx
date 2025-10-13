import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useState, type FC, type ReactElement } from 'react';
import { Flex, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { ApplicationName } from '../components/SideBarMenu/ApplicationName/ApplicationName';
import { SideBarMenu } from '../components/SideBarMenu/SideBarMenu';
import { Content } from 'antd/es/layout/layout';
import { ApplicationFooter } from '../components/ApplicationFooter/ApplicationFooter';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { OwnersDropdown } from '../components/OwnersDropdown/OwnersDropdown';

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const Root: FC = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={siderStyle}>
        <ApplicationName collapsed={collapsed} />
        <Flex justify="flex-end">
          <OwnersDropdown />
        </Flex>
        <Content style={{ padding: 4 }}>
          <SideBarMenu collapsed={collapsed} />
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

