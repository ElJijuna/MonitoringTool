import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import type { FC, ReactElement } from 'react';

export const Application: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
    
  return (
    <>
      <h1>TODO</h1>
      <Link to={`/applications/${appId}/scans`}>Scans</Link>
    </>
  );
};

export const Route = createFileRoute('/applications/$appId/')({
  component: () => <Application />,
});

