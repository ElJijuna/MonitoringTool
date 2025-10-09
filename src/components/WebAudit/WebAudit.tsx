import { type FC, type PropsWithChildren } from 'react';
import { WebAuditVulnerabilities } from './WebAuditVulnerabilities/WebAuditVulnerabilities';
import { WebAuditPie } from './WebAuditPie/WebAuditPie';
import { Col, Row } from 'antd';
import { WebAuditCWETypes } from './WebAuditCWETypes/WebAuditCWETypes';
import { useParams } from '@tanstack/react-router';
import Grid from 'antd/es/card/Grid';
import { PathCommitsDropdown } from '../../github/components/PathCommitsDropdown/PathCommitsDropdown';

export interface WebAuditProps extends PropsWithChildren {}

export const WebAudit: FC<WebAuditProps> = ({ children }) => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });

  return (
    <Grid>
      <Row>
        <Col span={24}>
          <PathCommitsDropdown user="ElJijuna" repository="Npm-Audit-Reports" path={appId + '.json'} />
        </Col>
      </Row>
      <Row gutter={10} style={{ marginTop: 10 }}>
        <Col span={15}>
          <WebAuditCWETypes application={appId} />
        </Col>
        <Col span={9}>
          <WebAuditPie application={appId} /> 
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col span={24}>
          <WebAuditVulnerabilities application={appId} />
        </Col>
      </Row>
      {children}
    </Grid>
  );
};
