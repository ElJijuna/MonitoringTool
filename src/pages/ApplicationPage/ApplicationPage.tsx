import type { FC } from 'react';
import { Typography } from 'antd';
import { useParams } from '@tanstack/react-router';
import { ApplicationsPath } from '../../routes/ApplicationRoute/ApplicationRoute';

const { Title } = Typography;
const ApplicationPage: FC = () => {
  const { application } = useParams({ from: ApplicationsPath });

  return (
    <>
      <Title level={2}>{application}</Title>
    </>
  );
}

export default ApplicationPage;
