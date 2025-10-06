import { createFileRoute } from '@tanstack/react-router';
import type { FC, ReactElement } from 'react';

const Users: FC = (): ReactElement => {
  return (
    <>users</>
  );
};

export const Route = createFileRoute('/users')({
  component: Users,
});

export default Users;

