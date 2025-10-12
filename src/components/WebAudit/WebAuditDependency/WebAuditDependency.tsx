import { Descriptions, Flex, Tag, Typography } from "antd";
import { useMemo, type FC, type ReactElement } from "react";
import { severityColor } from "../../../utils/severity/severity-color";
import { severityText } from "../../../utils/severity/severity-text";
import { useWebAuditReport } from "../../../proxy-queries/useWebAuditReport";

export interface WebAuditDependencyProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
  packageName: string;
}

export const WebAuditDependency: FC<WebAuditDependencyProps> = ({ user, repository, commit, application, packageName }): ReactElement => {
  const { data, isPending } = useWebAuditReport({ user, repository, commit, application });
  const vulnerability = useMemo(() => data?.vulnerabilities[packageName], [data]);

  if (isPending || !vulnerability) {
    return <>Loading</>;
  }

  return (
    <Flex vertical gap={10}>
    <Descriptions
      title="📋 Vulnerable Package Summary"
      bordered
      column={1}
      size="middle"
    >
      <Descriptions.Item label="📦 Package">
        {vulnerability.name}
      </Descriptions.Item>
      <Descriptions.Item label="⚠️ Severity">
        <Tag color={severityColor[vulnerability.severity]}>{severityText[vulnerability.severity]}</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="🔗 Direct Dependency">
        {vulnerability.isDirect ? 'Yes' : 'No'}
      </Descriptions.Item>
      <Descriptions.Item label="🧩 Affected by">
        {vulnerability.via.length} packages
      </Descriptions.Item>
      <Descriptions.Item label="📁 Location">
        <Flex vertical>
          {vulnerability.nodes.map((node) => <Typography.Text>{node}</Typography.Text>)}
        </Flex>
      </Descriptions.Item>
      <Descriptions.Item label="📊 Affected range">
        <Tag>{vulnerability.range}</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="✅ Fix available">
        {JSON.stringify(vulnerability.fixAvailable)}
      </Descriptions.Item>
    </Descriptions>
    </Flex>
  );
}
