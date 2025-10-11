import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { Flex, Tag } from 'antd';
import type { FC, ReactElement } from 'react';
import { useApplication } from '../../../hooks/useApplication';
import { CardContainer } from '../../../components/CardContainer/CardContainer';

export const Application: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  const { application } = useApplication();
    
  return (
    <Flex vertical gap={10}>
      <CardContainer minHeight="auto">
        <Tag>{application?.license?.name}</Tag>
        <Tag>{application?.forks}</Tag>
      </CardContainer>
      
      <Link to={`/applications/${appId}/scans`}>Scans</Link>
    </Flex>
  );
};

export const Route = createFileRoute('/applications/$appId/')({
  component: () => <Application />,
});

