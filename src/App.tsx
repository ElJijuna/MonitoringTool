import { useState } from 'react'
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Menu 1', '1', <PieChartOutlined />),
  getItem('Menu 2', '2', <DesktopOutlined />),
  getItem('Menu 3 Group', 'sub1', <UserOutlined />, [
    getItem('Submenu 3.1', '3'),
    getItem('Submenu 3.2', '4'),
  ]),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" style={{ padding: '16px', color: 'white', display: 'inline-flex', gap: '1rem' }}>
          <div style={{ fontSize: '2rem' }}>MT</div>
          <div style={{ display: collapsed ? 'none' : 'flex', flexDirection: 'column', lineHeight: 1, gap: '0.2rem', alignItems: 'flex-end', justifyContent: 'center' }}>
            {!collapsed && <div>Monitoring Tool</div>}
            <div style={{ fontSize: '0.7rem', color: '#ccc' }}>v0.0.0</div>
          </div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
            TODO
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Monitoring Tool ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App
