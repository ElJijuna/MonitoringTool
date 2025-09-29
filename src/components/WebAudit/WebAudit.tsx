import { type FC, type PropsWithChildren } from 'react';
import { WebAuditVulnerabilities } from './WebAuditVulnerabilities/WebAuditVulnerabilities';
import { WebAuditPie } from './WebAuditPie/WebAuditPie';
import { Col, Row } from 'antd';
import { WebAuditCWETypes } from './WebAuditCWETypes/WebAuditCWETypes';

export interface WebAuditProps extends PropsWithChildren {}

export const WebAudit: FC<WebAuditProps> = ({ children }) => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <WebAuditCWETypes />
        </Col>
        <Col span={12}>
          <WebAuditPie /> 
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <WebAuditVulnerabilities />
        </Col>
      </Row>
      {children}
    </div>
  );
};
