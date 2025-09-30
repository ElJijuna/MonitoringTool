import type { FC } from 'react';
import { Applications } from '../../components/Applications/Applications';
import { Typography } from 'antd';

const { Title } = Typography;
const ApplicationsPage: FC = () => (
  <>
    <Title level={2}>Applications</Title>
    <Applications />
  </>
);

export default ApplicationsPage;
