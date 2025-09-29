import { useMemo, type FC, type PropsWithChildren } from 'react';
import { useWebAuditReport } from '../../proxy-queries/useWebAuditReport';
import { Pie } from '@ant-design/charts';

export interface WebAuditProps extends PropsWithChildren {}

export const WebAudit: FC<WebAuditProps> = ({ children }) => {
  const { data, isPending } = useWebAuditReport({ application: 'monitoring-tool' });
  const pieData = useMemo(() => [{ type: 'Critical', value: data?.metadata.vulnerabilities.critical ?? 0 }, { type: 'High', value: data?.metadata.vulnerabilities.high ?? 0 }, { type: 'Medium', value: data?.metadata.vulnerabilities.moderate ?? 0 }, { type: 'Low', value: data?.metadata. vulnerabilities.low ?? 0 }, { type: 'Info', value: data?.metadata.vulnerabilities.info ?? 0 }], [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Web Audit</h2>
      <Pie data={pieData} autoFit angleField="value" colorField="type" />
      {children}
    </div>
  );
};
