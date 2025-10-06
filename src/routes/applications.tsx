import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Content } from 'antd/es/layout/layout';
import type { FC, ReactElement } from 'react';

const Applications: FC = (): ReactElement => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export const Route = createFileRoute('/applications')({
  component: Applications,
});

export default Applications;

