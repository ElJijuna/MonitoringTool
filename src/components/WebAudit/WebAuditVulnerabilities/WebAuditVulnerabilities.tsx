import { useMemo, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useWebAuditReport } from '../../../proxy-queries/useWebAuditReport';
import Table from 'antd/es/table/Table';
import Column from 'antd/es/table/Column';
import { Col, Tag } from 'antd';
import { severityColor } from '../../../utils/severity/severity-color';
import { severityText } from '../../../utils/severity/severity-text';

interface DataType {
  key: string;
  name: string;
  severity: unknown;
  fixAvailable: boolean | 'maybe';
  range: string;
}

export interface WebAuditVulnerabilitiesProps extends PropsWithChildren {
  application: string;
}

export const WebAuditVulnerabilities: FC<WebAuditVulnerabilitiesProps> = ({ children, application }): ReactElement => {
  const { data, isPending } = useWebAuditReport({ application });
  const vulnerabilities = useMemo(() => Object.entries(data?.vulnerabilities ?? {}).map(([key, value]) => ({ key, ...value })), [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Table<DataType> dataSource={vulnerabilities}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Severity" dataIndex="severity" key="severity" render={(severity) => <Tag color={severityColor[severity]}>{severityText[severity]}</Tag>} />
        <Column title="Fix Available" dataIndex="fixAvailable" key="fixAvailable" render={(fixAvailable) => <Col>{fixAvailable ? 'Yes' : 'No'}</Col>} />
        <Column title="Rango" dataIndex="range" key="range" render={(range) => <Tag>{range}</Tag>} />
      </Table>
      {children}
    </div>
  );
};
