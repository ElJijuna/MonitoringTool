import { useMemo, useState, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useWebAuditReport } from '../../../proxy-queries/useWebAuditReport';
import Table from 'antd/es/table/Table';
import Column from 'antd/es/table/Column';
import { Button, Col, Drawer, Flex, Space, Tag, Tooltip, Typography } from 'antd';
import { severityColor } from '../../../utils/severity/severity-color';
import { severityText } from '../../../utils/severity/severity-text';
import { CardContainer } from '../../CardContainer/CardContainer';
import type { SeverityTypes } from '../../../utils/severity/severity-types';
import { createPortal } from 'react-dom';
import { SearchOutlined } from '@ant-design/icons';
import { WebAuditDependency } from '../WebAuditDependency/WebAuditDependency';

interface DataType {
  key: string;
  name: string;
  severity: SeverityTypes;
  fixAvailable: boolean | 'maybe';
  range: string;
}

export interface WebAuditVulnerabilitiesProps extends PropsWithChildren {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export const WebAuditVulnerabilities: FC<WebAuditVulnerabilitiesProps> = ({ children, user, repository, commit, application }): ReactElement => {
  const [open, setOpen] = useState(false);
  const [dependency, setDependency] = useState('');
  const { data, isPending } = useWebAuditReport({ user, repository, commit, application });
  const vulnerabilities = useMemo(() => Object.entries(data?.vulnerabilities ?? {}).map(([key, value]) => ({ key, ...value })), [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  const selectDependencyHandle = (value: string) => {
    setDependency(value);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setDependency('');
  };

  return (
    <CardContainer>
      <Table<DataType> dataSource={vulnerabilities}>
        <Column title="Name" dataIndex="name" key="name" render={(name: string) => <Space>
          <Typography.Text>{name}</Typography.Text>
          {data?.dependencies[name]?.dev && <Tooltip title="This library is registered as a development dependency in: devDependencies"><Tag color="red">D</Tag></Tooltip>}
          {data?.dependencies[name]?.current && <Tooltip title="Current version installed"><Tag>{data?.dependencies[name]?.current}</Tag></Tooltip>}
        </Space>} />
        <Column title="Severity" dataIndex="severity" key="severity" render={(severity: SeverityTypes) => <Tag color={severityColor[severity]}>{severityText[severity]}</Tag>} />
        <Column title="Fix Available" dataIndex="fixAvailable" key="fixAvailable" render={(fixAvailable) => <Col>{fixAvailable ? 'Yes' : 'No'}</Col>} />
        <Column title="Rango" dataIndex="range" key="range" render={(range) => <Flex gap={10}>
          <Tag>{range}</Tag>
        </Flex>} />
        <Column dataIndex="name" render={(name) => <Tooltip title="See Details">
          <Button shape="circle" icon={<SearchOutlined />} onClick={() => selectDependencyHandle(name)} />
        </Tooltip>} />
      </Table>
      {children}
      {createPortal(<Drawer
        title={dependency}
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <WebAuditDependency user={user} application={application} commit={commit} repository={repository} packageName={dependency} />
      </Drawer>, document.body)}
    </CardContainer>
  );
};
