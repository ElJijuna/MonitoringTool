import { Statistic } from 'antd';
import { type FC, type ReactElement } from 'react';
import { CardContainer } from '../../../CardContainer/CardContainer';
import { useWebAuditReport } from '../../../../proxy-queries/useWebAuditReport';

export interface VersionsProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
  app?: 'node' | 'npm' | 'v8'
}

export const Versions: FC<VersionsProps> = ({ user, repository, application, commit, app = 'node' }): ReactElement => {
  const { data } = useWebAuditReport({ user, repository, application, commit });

  return (
    <CardContainer style={{ paddingLeft: 14, paddingRight: 14 }}>
      <Statistic title={app} value={data?.versions[app]} />
    </CardContainer>
  )
};
