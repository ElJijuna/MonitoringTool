import type { FC } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from '@tanstack/react-router';
import Menu from 'antd/es/menu/menu';
import { parseWebAuditRoutePath, WebAuditRoutePath } from '../../routes/WebAuditRoute/WebAuditRoute';

export const SideBarMenu: FC = () => {
  const navigate = useNavigate();

  return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[
    { key: 'menu1', icon: <PieChartOutlined />, label: 'Menu 1', onClick: () => { navigate({ to: '/', search: true }); } },
    { key: 'WebAudit', icon: <DesktopOutlined />, label: 'Web Audit', onClick: () => { navigate({ to: parseWebAuditRoutePath('react-base-app'), search: true }); } },
    {
      key: 'submenu3',
      icon: <UserOutlined />,
      label: 'Menu 3 Group',
      children: [
        { key: 'submenu3-1', label: 'Submenu 3.1' },
        { key: 'submenu3-2', label: 'Submenu 3.2' },
      ],
    },
  ]} />;
}
