import { type FC, type ReactElement } from 'react';
import { useWebAuditCWE } from '../hooks/useWebAuditCWE';
import { theme } from 'antd';

export interface WebAuditCWETypesProps {
  application: string;
}

export const WebAuditCWETypes: FC<WebAuditCWETypesProps> = ({ application }: WebAuditCWETypesProps): ReactElement => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [data] = useWebAuditCWE({ application });

  return (<div
    style={{
      padding: 10,
      minHeight: 360,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}
  >{JSON.stringify(data)}</div>);
}
