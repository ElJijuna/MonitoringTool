import { Link, createFileRoute, useParams } from '@tanstack/react-router';
import type { FC, ReactElement } from 'react';

const ApplicationIndex: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  return (
    <div>
      <div>
        <h3>Detalles de pepe</h3>
        <Link to={`/applications/${appId}/scans/web-audit`}>Ir a Web Audit</Link>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/applications/$appId/')({
  component: ApplicationIndex,
});

export default ApplicationIndex;

