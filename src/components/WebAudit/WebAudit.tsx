import { type FC, type PropsWithChildren } from 'react';
import { WebAuditVulnerabilities } from './WebAuditVulnerabilities/WebAuditVulnerabilities';
import { WebAuditPie } from './WebAuditPie/WebAuditPie';
import { Col, Flex, Radio, Row } from 'antd';
import { WebAuditCWETypes } from './WebAuditCWETypes/WebAuditCWETypes';
import { useParams } from '@tanstack/react-router';
import Grid from 'antd/es/card/Grid';
import { PathCommitsDropdown } from '../../github/components/PathCommitsDropdown/PathCommitsDropdown';
import { BranchesDropdown } from '../../github/BranchesDropdown/BranchesDropdown';
import { useQueryStates, parseAsString } from 'nuqs'
import { severityText } from '../../utils/severity/severity-text';

export interface WebAuditProps extends PropsWithChildren { }

export const WebAudit: FC<WebAuditProps> = ({ children }) => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  const [filters, setFilters] = useQueryStates({ branch: parseAsString.withDefault('main'), commit: parseAsString.withDefault('') }, { history: 'push' });

  return (
    <Grid>
      <Row>
        <Col span={24}>
          <Flex justify="space-between">
            <Flex justify="flex-start" gap={10} style={{ display: 'inline-flex' }}>
              <BranchesDropdown user="ElJijuna" repository="MonitoringTool-DB" defaultSelected={filters.branch} onChange={(branch) => {
                setFilters({ branch })
              }} />
              <PathCommitsDropdown user="ElJijuna" repository="MonitoringTool-DB" path={appId + '--web-audit.json'} defaultSelected={filters.commit} onChange={(commit) => {
                setFilters({ commit })
              }} />
            </Flex>
            <Flex justify="flex-start" gap={10} style={{ display: 'inline-flex' }}>
              <Radio.Group value="dev">
                <Radio.Button value="dev">Dev</Radio.Button>
              </Radio.Group>
              <Radio.Group value={severityText.critical}>
                <Radio.Button value={severityText.critical}>{severityText.critical}</Radio.Button>
                <Radio.Button value={severityText.high}>{severityText.high}</Radio.Button>
                <Radio.Button value={severityText.moderate}>{severityText.moderate}</Radio.Button>
                <Radio.Button value={severityText.low}>{severityText.low}</Radio.Button>
                <Radio.Button value={severityText.info}>{severityText.info}</Radio.Button>
              </Radio.Group>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Row gutter={10} style={{ marginTop: 10 }}>
        <Col span={15}>
          <WebAuditCWETypes user="ElJijuna" repository="MonitoringTool-DB" commit={filters.commit}  application={appId} />
        </Col>
        <Col span={9}>
          <WebAuditPie user="ElJijuna" repository="MonitoringTool-DB" commit={filters.commit}  application={appId} />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col span={24}>
          <WebAuditVulnerabilities user="ElJijuna" repository="MonitoringTool-DB" commit={filters.commit} application={appId} />
        </Col>
      </Row>
      {children}
    </Grid>
  );
};
