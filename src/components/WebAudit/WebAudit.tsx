import { type FC, type PropsWithChildren } from 'react';
import { WebAuditVulnerabilities } from './WebAuditVulnerabilities/WebAuditVulnerabilities';
import { WebAuditPie } from './WebAuditPie/WebAuditPie';
import { Col, Row } from 'antd';
import { WebAuditCWETypes } from './WebAuditCWETypes/WebAuditCWETypes';
import { useParams } from '@tanstack/react-router';

export interface WebAuditProps extends PropsWithChildren {}

export const WebAudit: FC<WebAuditProps> = ({ children }) => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });

  return (
    <div>
      <Row>
        <Col span={12}>
          <WebAuditCWETypes application={appId} />
        </Col>
        <Col span={12}>
          <WebAuditPie application={appId} /> 
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <WebAuditVulnerabilities application={appId} />
        </Col>
      </Row>
      {children}
    </div>
  );
};
