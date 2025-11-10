import { useCallback, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import { useNavigate, useRouter } from '@tanstack/react-router';
import Menu from 'antd/es/menu/menu';
import { useRepositories } from '../../proxy-queries/useRepositories';
import { Spin } from 'antd';
import { LanguageIcon } from '../LanguageIcon/LanguageIcon';
import { useSelectedOwner } from '../../hooks/useSelectedOwner';

export interface SideBarMenuProps extends PropsWithChildren {
  collapsed?: boolean;
}

export const SideBarMenu: FC<SideBarMenuProps> = (): ReactElement => {
  const navigate = useNavigate();
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const { owner } = useSelectedOwner();
  const { data: applications, isPending } = useRepositories({ user: owner?.login ?? '' });

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
      key: '/',
      label: 'Home',
      icon: <HomeOutlined />,
    },
    {
      key: '/applications',
      icon: <PieChartOutlined />,
      label: 'Applications',
      children: applications?.map(({ name, language }) => ({
        icon: <LanguageIcon language={language} size={12} {...{ style: { marginRight: 10 } }} />,
        key: `/applications/${name}`,
        label: name,
        children: [{
          key: `/applications/${name}/scans`,
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
