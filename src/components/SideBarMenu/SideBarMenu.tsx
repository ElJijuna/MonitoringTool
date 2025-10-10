import { useCallback, type FC } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { useNavigate, useRouter } from '@tanstack/react-router';
import Menu from 'antd/es/menu/menu';
import { useRepositories } from '../../proxy-queries/useRepositories';
import { Spin } from 'antd';
import { FaChampagneGlasses } from 'react-icons/fa6';

export const SideBarMenu: FC = () => {
  const navigate = useNavigate();
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const { data: applications, isPending } = useRepositories({ user: 'ElJijuna' });
  
  const handleClick = useCallback(({ key }: { key: string }) => {
    navigate({ to: key })
  }, []);

  if (isPending) {
    return (
      <Spin />
    );
  }

  return <Menu onClick={handleClick} theme="dark" defaultSelectedKeys={[currentPath]} items={[
    {
      key: '/applications',
      icon: <PieChartOutlined />,
      label: 'Applications',
      children: applications?.map(({ name }) => ({
        icon: <FaChampagneGlasses size={16} />,
        key: `/applications/${name}`,
        label: name,
        children: [{
          key:  `/applications/${name}/scans`,
          label: 'Scans',
          children: [
            { 
              key: `/applications/${name}/scans/web-audit`,
              label: 'Web Audit'
            }
          ]
        }]
      }))
    },
  ]} />;
}
