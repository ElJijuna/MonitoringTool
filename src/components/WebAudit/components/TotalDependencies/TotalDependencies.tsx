import { Statistic, type StatisticProps } from 'antd';
import { useMemo, type FC, type ReactElement } from 'react';
import { useWebAuditDependencies } from '../../hooks/useWebAuditDependencies';
import { CardContainer } from '../../../CardContainer/CardContainer';
import CountUp from 'react-countup';

export interface TotalDependenciesProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
  dev?: boolean;
}

const formatter: StatisticProps['formatter'] = (value): ReactElement => (
  <CountUp end={value as number} separator="," />
);

export const TotalDependencies: FC<TotalDependenciesProps> = ({ user, repository, application, commit, dev }): ReactElement => {
  const [dependencies = {}] = useWebAuditDependencies({ user, repository, application, commit });
  const total = useMemo(() => dev ? Object.values(dependencies).filter(({ dev }) => dev).length : Object.values(dependencies).length, [dependencies]);

  return (
    <CardContainer style={{ paddingLeft: 14, paddingRight: 14 }}>
      <Statistic title={`${dev ? 'Dev' : ''} Dependencies`} value={total} formatter={formatter} />
    </CardContainer>
  )
};
